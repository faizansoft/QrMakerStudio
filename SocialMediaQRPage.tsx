import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';
import { useContentLocale } from './context/ContentLocaleContext';
import { getLocalizedRouteMeta } from './constants/routeMetaI18n';
import { SOCIAL_EN, SOCIAL_LOADERS } from './constants/toolI18n/social';
import { useLocalizedCopy } from './constants/toolI18n/useLocalizedCopy';
import { renderInline } from './constants/toolI18n/inline';

const PATH = '/social-media-qr-code';

// Brand names and per-platform colors/prefixes are not translated. Labels and
// placeholders come from the locale copy (see constants/toolI18n/social).
const SOCIAL_PLATFORMS = [
  { id: 'instagram', prefix: 'https://instagram.com/', color: '#E1306C' },
  { id: 'youtube', prefix: '', color: '#FF0000' },
  { id: 'linkedin', prefix: '', color: '#0A66C2' },
  { id: 'twitter', prefix: 'https://x.com/', color: '#0F172A' },
  { id: 'tiktok', prefix: 'https://tiktok.com/@', color: '#000000' },
  { id: 'facebook', prefix: '', color: '#1877F2' },
  { id: 'telegram', prefix: 'https://t.me/', color: '#0088CC' },
  { id: 'whatsapp', prefix: 'https://wa.me/', color: '#25D366' },
  { id: 'website', prefix: '', color: '#2B6F53' },
  { id: 'email', prefix: 'mailto:', color: '#475569' },
];

type Platform = typeof SOCIAL_PLATFORMS[number];

const SocialMediaQRPage: React.FC = () => {
  const contentLocale = useContentLocale();
  const copy = useLocalizedCopy(contentLocale, SOCIAL_EN, SOCIAL_LOADERS);
  const heroMeta = contentLocale ? getLocalizedRouteMeta(contentLocale, PATH) : null;
  const hero = heroMeta ?? copy.hero;

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [displayName, setDisplayName] = useState('');
  const [generated, setGenerated] = useState(false);
  const qrRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const qrInstances = useRef<Record<string, QRCodeStyling>>({});

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-software', getToolSoftwareSchema(
      'Social Media QR Code Generator',
      '/social-media-qr-code',
      'Create branded social media QR codes for Instagram, YouTube, TikTok, LinkedIn, Twitter, and WhatsApp.'
    ));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Social Media QR Code', url: '/social-media-qr-code' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(copy.faq.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, [copy]);

  const filledPlatforms = useMemo(() => {
    return SOCIAL_PLATFORMS.filter(p => {
      const value = inputs[p.id]?.trim();
      return value && value.length > 0;
    });
  }, [inputs]);

  const handleInputChange = (platformId: string, value: string) => {
    setInputs(prev => ({ ...prev, [platformId]: value }));
  };

  const getFullUrl = (platform: Platform) => {
    const value = inputs[platform.id]?.trim() || '';
    if (!value) return '';
    if (value.startsWith('http') || value.startsWith('mailto:')) return value;
    return `${platform.prefix}${value}`;
  };

  const handleGenerate = () => {
    if (filledPlatforms.length === 0) return;

    filledPlatforms.forEach(platform => {
      const url = getFullUrl(platform);
      if (!url) return;

      const qr = new QRCodeStyling({
        width: 600,
        height: 600,
        data: url,
        dotsOptions: { color: platform.color, type: 'rounded' },
        backgroundOptions: { color: '#ffffff' },
        cornersSquareOptions: { color: platform.color, type: 'extra-rounded' },
        cornersDotOptions: { color: platform.color, type: 'dot' },
        qrOptions: { errorCorrectionLevel: 'H' },
        type: 'svg',
      });

      qrInstances.current[platform.id] = qr;

      const container = qrRefs.current[platform.id];
      if (container) {
        container.innerHTML = '';
        qr.append(container);
      }
    });

    setGenerated(true);
  };

  const handleDownload = (platformId: string, format: 'png' | 'svg') => {
    const qr = qrInstances.current[platformId];
    if (qr) {
      qr.download({ name: `qr_${platformId}`, extension: format });
    }
  };

  const { article, platforms } = copy;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80 text-center">
        <div className="max-w-5xl mx-auto px-4">
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

            {/* Display Name */}
            <div className="mb-6 pb-6 border-b border-slate-100 max-w-md">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">{copy.brandLabel}</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder={copy.brandPlaceholder}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium"
              />
            </div>

            {/* Platform Grid */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">{copy.configureHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {SOCIAL_PLATFORMS.map(platform => {
                const label = platforms.labels[platform.id];
                return (
                  <div key={platform.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-colors">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-2xs"
                      style={{ backgroundColor: platform.color }}
                    >
                      {label.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="block text-[11px] font-bold text-slate-700 truncate">{label}</label>
                      <input
                        type="text"
                        value={inputs[platform.id] || ''}
                        onChange={(e) => handleInputChange(platform.id, e.target.value)}
                        placeholder={platforms.placeholders[platform.id]}
                        className="w-full mt-0.5 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                {copy.channels(filledPlatforms.length)}
              </p>
              <button
                onClick={handleGenerate}
                disabled={filledPlatforms.length === 0}
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {copy.generate}
              </button>
            </div>

            {/* Results Grid */}
            {generated && filledPlatforms.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-200 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-900">{copy.readyHeading}</h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    {copy.readyBadge}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filledPlatforms.map(platform => {
                    const label = platforms.labels[platform.id];
                    return (
                      <div
                        key={platform.id}
                        className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center text-center shadow-2xs hover:shadow-xs transition-all"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                            style={{ backgroundColor: platform.color }}
                          >
                            {label.charAt(0)}
                          </div>
                          <span className="text-xs font-bold text-slate-900">{label}</span>
                        </div>

                        <div
                          ref={el => (qrRefs.current[platform.id] = el)}
                          className="w-36 h-36 bg-white p-2 rounded-xl border border-slate-200 mb-3 flex items-center justify-center"
                        />

                        <p className="text-[10px] font-mono text-slate-500 truncate w-full mb-3">
                          {getFullUrl(platform)}
                        </p>

                        <div className="flex gap-2 w-full">
                          <button
                            onClick={() => handleDownload(platform.id, 'png')}
                            className="flex-1 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                          >
                            PNG
                          </button>
                          <button
                            onClick={() => handleDownload(platform.id, 'svg')}
                            className="flex-1 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                          >
                            SVG
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ═══════════════════════════ 1800+ WORDS DETAILED GUIDE ═══════════════════════════ */}
          <div className="space-y-16 text-slate-700">

            {/* Section 1: Omnichannel Audience Growth */}
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

            {/* Section 2: Static Individual Codes vs Dynamic Bio Links */}
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
                {article.s2.cards.map((card, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl border space-y-2 ${i === 0 ? 'bg-slate-50 border-slate-200' : 'bg-emerald-50/50 border-emerald-200'}`}
                  >
                    <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {renderInline(card.body)}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 3: High-Converting Physical Placements */}
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
              <div className="grid md:grid-cols-4 gap-4 mt-4 text-xs">
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
    </div>
  );
};

export default SocialMediaQRPage;
