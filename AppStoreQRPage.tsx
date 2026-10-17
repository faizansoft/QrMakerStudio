import React, { useState, useRef, useEffect } from 'react';
import Link from './components/LocaleLink';
import QRCodeStyling, { DotType, CornerSquareType, CornerDotType } from 'qr-code-styling';
import { useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { createDynamicLink } from './services/dynamicQrService';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';
import { useDialogBehaviour } from './components/Modal';
import { useContentLocale } from './context/ContentLocaleContext';
import { getLocalizedRouteMeta } from './constants/routeMetaI18n';
import { APPSTORE_EN, APPSTORE_LOADERS } from './constants/toolI18n/appstore';
import { useLocalizedCopy } from './constants/toolI18n/useLocalizedCopy';
import { renderInline } from './constants/toolI18n/inline';

const PATH = '/app-store-qr-code-generator';

const DOT_STYLE_KEYS: DotType[] = ['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded'];
const CORNER_SHAPE_KEYS: CornerSquareType[] = ['extra-rounded', 'dot', 'square'];

const AppStoreQRPage: React.FC = () => {
  const contentLocale = useContentLocale();
  const copy = useLocalizedCopy(contentLocale, APPSTORE_EN, APPSTORE_LOADERS);
  const heroMeta = contentLocale ? getLocalizedRouteMeta(contentLocale, PATH) : null;
  const hero = heroMeta ?? copy.hero;

  const [iosUrl, setIosUrl] = useState('');
  const [androidUrl, setAndroidUrl] = useState('');
  const [webFallback, setWebFallback] = useState('');
  const [appName, setAppName] = useState('');

  const [fgColor, setFgColor] = useState('#0F172A');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [cornerSquareColor, setCornerSquareColor] = useState('#0F172A');
  const [cornerDotColor, setCornerDotColor] = useState('#007AFF');
  const [dotStyle, setDotStyle] = useState<DotType>('rounded');
  const [cornerSquareStyle, setCornerSquareStyle] = useState<CornerSquareType>('extra-rounded');
  const [cornerDotStyle, setCornerDotStyle] = useState<CornerDotType>('dot');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  // Dynamic QR Save Modal State
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDynamicSaveModal, setShowDynamicSaveModal] = useState(false);
  // Escape-to-close, focus trap, scroll lock — see components/Modal.tsx.
  const dlg_showDynamicSaveModal = useDialogBehaviour(showDynamicSaveModal, () => setShowDynamicSaveModal(false));
  const [savingDynamic, setSavingDynamic] = useState(false);
  const [savedShortCode, setSavedShortCode] = useState<string | null>(null);
  const [dynamicError, setDynamicError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const qrContainerRef = useRef<HTMLDivElement>(null);
  const qrInstanceRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-software', getToolSoftwareSchema(
      'App Store QR Code Generator',
      '/app-store-qr-code-generator',
      'Create smart multi-platform QR codes that auto-detect iOS and Android devices for instant mobile app downloads.'
    ));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'App Store QR Code Generator', url: '/app-store-qr-code-generator' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(copy.faq.map(f => ({ question: f.q, answer: f.a }))));
    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, [copy]);

  const primaryTarget = iosUrl.trim() || androidUrl.trim() || webFallback.trim() || 'https://qr-generator.online';

  useEffect(() => {
    if (!qrInstanceRef.current) {
      qrInstanceRef.current = new QRCodeStyling({
        width: 280,
        height: 280,
        data: primaryTarget,
        margin: 4,
        dotsOptions: { color: fgColor, type: dotStyle },
        backgroundOptions: { color: bgColor },
        cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
        cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
        image: logoSrc || undefined,
        imageOptions: { crossOrigin: 'anonymous', margin: 4, imageSize: 0.35, hideBackgroundDots: true },
        qrOptions: { errorCorrectionLevel: 'H' },
        type: 'svg',
      });
      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = '';
        qrInstanceRef.current.append(qrContainerRef.current);
      }
    } else {
      qrInstanceRef.current.update({
        data: primaryTarget,
        dotsOptions: { color: fgColor, type: dotStyle },
        backgroundOptions: { color: bgColor },
        cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
        cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
        image: logoSrc || undefined,
      });
    }
  }, [primaryTarget, fgColor, bgColor, cornerSquareColor, cornerDotColor, dotStyle, cornerSquareStyle, cornerDotStyle, logoSrc]);

  const handleDownload = (format: 'png' | 'svg') => {
    if (!qrInstanceRef.current) return;
    const safeTitle = (appName.trim() || 'app_store_qr').replace(/[^a-zA-Z0-9]/g, '_');
    qrInstanceRef.current.download({ name: safeTitle, extension: format });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogoSrc(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleOpenDynamicModal = () => {
    if (!iosUrl.trim() && !androidUrl.trim() && !webFallback.trim()) return;
    if (!user) {
      setShowAuthModal(true);
    } else {
      setShowDynamicSaveModal(true);
    }
  };

  const handleSaveDynamic = async (e: React.FormEvent) => {
    e.preventDefault();
    const destination = iosUrl.trim() || androidUrl.trim() || webFallback.trim();
    if (!destination) return;

    setSavingDynamic(true);
    setDynamicError(null);

    const { data, error } = await createDynamicLink({
      targetUrl: destination,
      title: appName.trim() || 'Mobile App Download QR',
      qrType: 'url',
      qrStyle: {
        fgColor,
        bgColor,
        cornerSquareColor,
        cornerDotColor,
        dotStyle,
        cornerSquareStyle,
        cornerDotStyle,
        logoSrc,
      }
    });

    if (error) {
      setDynamicError(error.message);
    } else if (data) {
      setSavedShortCode(data.short_code);
    }
    setSavingDynamic(false);
  };

  const handleCopyLink = (code: string) => {
    navigator.clipboard.writeText(`https://qr-generator.online/r/${code}`);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const { form, article, modal, preview, dynamicBox } = copy;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            {hero.badge}
          </div>
          <h1 className="h1-page mb-4">
            {hero.h1}
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {hero.lead}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ GENERATOR INTERFACE ═══════════════════════════ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 md:p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left Column: Form Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {form.appTitleLabel}
                  </label>
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder={form.appTitlePlaceholder}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold"></span>
                    {form.iosLabel}
                  </label>
                  <input
                    type="url"
                    value={iosUrl}
                    onChange={(e) => setIosUrl(e.target.value)}
                    placeholder="https://apps.apple.com/app/id123456789"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">▶</span>
                    {form.androidLabel}
                  </label>
                  <input
                    type="url"
                    value={androidUrl}
                    onChange={(e) => setAndroidUrl(e.target.value)}
                    placeholder="https://play.google.com/store/apps/details?id=com.yourapp"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">🌐</span>
                    {form.webLabel}
                  </label>
                  <input
                    type="url"
                    value={webFallback}
                    onChange={(e) => setWebFallback(e.target.value)}
                    placeholder={form.webPlaceholder}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                  />
                </div>

                {/* Color Palette Controls */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.qrDots}</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{fgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.background}</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{bgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.cornerEye}</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={cornerSquareColor} onChange={(e) => setCornerSquareColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{cornerSquareColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.cornerDot}</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={cornerDotColor} onChange={(e) => setCornerDotColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{cornerDotColor}</span>
                    </div>
                  </div>
                </div>

                {/* Dot & Shape Styles */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.dotPattern}</label>
                    <select value={dotStyle} onChange={(e) => setDotStyle(e.target.value as DotType)} className="w-full h-9 rounded-xl border border-slate-200 bg-slate-50 text-xs px-2 outline-none">
                      {DOT_STYLE_KEYS.map(key => (
                        <option key={key} value={key}>{form.dotStyles[key]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.cornerShape}</label>
                    <select value={cornerSquareStyle} onChange={(e) => setCornerSquareStyle(e.target.value as CornerSquareType)} className="w-full h-9 rounded-xl border border-slate-200 bg-slate-50 text-xs px-2 outline-none">
                      {CORNER_SHAPE_KEYS.map(key => (
                        <option key={key} value={key}>{form.cornerShapes[key]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">{form.appIcon}</label>
                    <label className="cursor-pointer flex items-center justify-center h-9 px-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition-colors">
                      <span>{logoSrc ? form.changeIcon : form.addIcon}</span>
                      <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Dynamic QR Upgrade Box */}
                <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-xs font-bold text-emerald-900">{dynamicBox.title}</p>
                    </div>
                    <p className="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
                      {dynamicBox.body}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenDynamicModal}
                    disabled={!iosUrl.trim() && !androidUrl.trim() && !webFallback.trim()}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-xs transition-colors shrink-0 disabled:opacity-50"
                  >
                    {dynamicBox.cta}
                  </button>
                </div>
              </div>

              {/* Right Column: Live QR Preview & Downloads (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs mb-4">
                  <div ref={qrContainerRef} className="w-[280px] h-[280px] flex items-center justify-center" />
                </div>

                <p className="text-[11px] font-mono text-slate-500 truncate max-w-xs mb-4">
                  {primaryTarget}
                </p>

                <div className="flex gap-2 w-full max-w-xs">
                  <button
                    onClick={() => handleDownload('png')}
                    className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {preview.downloadPng}
                  </button>
                  <button
                    onClick={() => handleDownload('svg')}
                    className="flex-1 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {preview.downloadSvg}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ═══════════════════════════ 1800+ WORDS DETAILED GUIDE ═══════════════════════════ */}
          <div className="space-y-16 text-slate-700">

            {/* Section 1: Mobile App Acquisition */}
            <article className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-lg">
                {article.s1.badge}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s1.h2}
              </h2>
              {article.s1.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed">{p}</p>
              ))}
            </article>

            {/* Section 2: Why Dual Codes Fail vs Unified Smart QR */}
            <article className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-lg">
                {article.s2.badge}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s2.h2}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                {article.s2.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-red-50/50 rounded-2xl border border-red-200 space-y-2">
                  <h3 className="font-bold text-red-900 text-sm">{article.s2.dualTitle}</h3>
                  <ul className="text-xs space-y-1.5 text-red-700">
                    {article.s2.dualItems.map((item, i) => (
                      <li key={i}>• {renderInline(item)}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-2">
                  <h3 className="font-bold text-emerald-900 text-sm">{article.s2.unifiedTitle}</h3>
                  <ul className="text-xs space-y-1.5 text-emerald-700">
                    {article.s2.unifiedItems.map((item, i) => (
                      <li key={i}>• {renderInline(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 3: High-Converting Offline Touchpoints */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s3.h2}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {article.s3.cards.map((card, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 4: Live Telemetry Analytics */}
            <article className="space-y-4 bg-slate-900 text-white p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {article.s4.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {article.s4.intro}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4 text-xs">
                {article.s4.items.map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    <p className="text-slate-300">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 5: Comparison Table */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s5.h2}
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-3.5">{article.s5.headers[0]}</th>
                      <th className="p-3.5 text-accent">{article.s5.headers[1]}</th>
                      <th className="p-3.5">{article.s5.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {article.s5.rows.map((row, i) => (
                      <tr key={i}>
                        <td className="p-3.5 font-semibold text-slate-900">{row[0]}</td>
                        <td className="p-3.5 text-accent font-semibold">{row[1]}</td>
                        <td className="p-3.5">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{article.s6.h2}</h2>
                <p className="text-xs text-slate-500">{article.s6.sub}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {copy.faq.map((faq, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm">{faq.q}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Dynamic Save Modal */}
      {showDynamicSaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn" {...dlg_showDynamicSaveModal.backdropProps}>
          <div {...dlg_showDynamicSaveModal.panelProps}  className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">
                {savedShortCode ? modal.createdTitle : modal.saveTitle}
              </h3>
              <button onClick={() => { setShowDynamicSaveModal(false); setSavedShortCode(null); }} className="text-slate-500 hover:text-slate-600 p-1 rounded-lg">✕</button>
            </div>

            {savedShortCode ? (
              <div className="text-center space-y-4">
                <p className="text-xs text-slate-600">
                  {modal.createdBody}
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-accent truncate">
                    https://qr-generator.online/r/{savedShortCode}
                  </span>
                  <button onClick={() => handleCopyLink(savedShortCode)} className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-lg shrink-0">
                    {copySuccess ? `✓ ${modal.copied}` : modal.copy}
                  </button>
                </div>
                <div className="flex gap-2">
                  <Link to="/dashboard" onClick={() => setShowDynamicSaveModal(false)} className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl text-center">
                    {modal.myQrCodes}
                  </Link>
                  <Link to={`/analytics/${savedShortCode}`} onClick={() => setShowDynamicSaveModal(false)} className="flex-1 py-2.5 bg-accent text-white text-xs font-semibold rounded-xl text-center">
                    {modal.viewAnalytics}
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveDynamic} className="space-y-4">
                {dynamicError && <p className="text-xs text-red-600 p-2 bg-red-50 rounded-lg">{dynamicError}</p>}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{modal.campaignTitle}</label>
                  <input
                    type="text"
                    required
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder={modal.campaignPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{modal.primaryTarget}</label>
                  <input type="text" disabled value={primaryTarget} className="w-full px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono truncate" />
                </div>
                <button
                  type="submit"
                  disabled={savingDynamic}
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white text-xs font-bold rounded-xl shadow-xs transition-colors disabled:opacity-50"
                >
                  {savingDynamic ? modal.creating : modal.createButton}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setShowAuthModal(false);
          setShowDynamicSaveModal(true);
        }}
        title={copy.auth.title}
        subtitle={copy.auth.subtitle}
      />
    </div>
  );
};

export default AppStoreQRPage;
