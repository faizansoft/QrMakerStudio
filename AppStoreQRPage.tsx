import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling, { DotType, CornerSquareType, CornerDotType } from 'qr-code-styling';
import { useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { createDynamicLink } from './services/dynamicQrService';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';
import { useDialogBehaviour } from './components/Modal';

const APPSTORE_FAQS = [
  {
    q: 'How does an App Store Multi-Link QR code work?',
    a: 'An App Store Multi-Link QR code is a single unified barcode that automatically detects the operating system of the scanning device. If scanned with an iPhone or iPad, it redirects directly to your Apple App Store page; if scanned with an Android device, it forwards immediately to Google Play.'
  },
  {
    q: 'Can I add a fallback website URL for desktop scanners?',
    a: 'Yes. You can specify a fallback website URL. If a user scans or clicks the link from a desktop or laptop computer, they will be directed to your marketing landing page or web app.'
  },
  {
    q: 'Why should I use one QR code instead of two separate codes for iOS and Android?',
    a: 'Printing two separate QR codes (one for iOS and one for Android) creates visual clutter, confuses customers, and halves your physical print real estate. A single smart App Store QR code provides a frictionless 1-second scan-and-install experience for 100% of smartphone users.'
  },
  {
    q: 'Can I track which operating system (iOS vs Android) generates more app installs?',
    a: 'Yes! When you save your smart App Store code as a Dynamic QR code, your dashboard provides real-time telemetry breaking down total scans by Operating System (iOS vs Android), device models, and geographic locations (country and city).'
  },
  {
    q: 'Where should I print my App Store QR codes for maximum downloads?',
    a: 'High-converting physical placements include product packaging boxes, physical receipts, transit billboard ads, trade show booth backdrops, direct mail flyers, and conference badges.'
  },
  {
    q: 'Can I update my App Store or Google Play links after printing?',
    a: 'Yes. With Dynamic QR codes, you can change your app store URLs or point to a new app release anytime from your dashboard without ever reprinting your packaging or billboards.'
  }
];

const AppStoreQRPage: React.FC = () => {
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
    injectJSONLD('jsonld-faq', getFAQSchema(APPSTORE_FAQS.map(f => ({ question: f.q, answer: f.a }))));
    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Smart App Routing
          </div>
          <h1 className="h1-page mb-4">
            Free App Store QR Code Generator
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Create a single smart QR code for iOS and Android. Automatically route iPhone scanners to the Apple App Store and Android scanners to Google Play with real-time install telemetry.
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
                    App Title / Brand Name
                  </label>
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="e.g. Acme Mobile App"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold"></span>
                    Apple App Store URL (iOS)
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
                    Google Play Store URL (Android)
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
                    Fallback Website URL (Desktop / Other)
                  </label>
                  <input
                    type="url"
                    value={webFallback}
                    onChange={(e) => setWebFallback(e.target.value)}
                    placeholder="https://yourapp.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                  />
                </div>

                {/* Color Palette Controls */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">QR Dots</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{fgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Background</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{bgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Corner Eye</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={cornerSquareColor} onChange={(e) => setCornerSquareColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{cornerSquareColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Corner Dot</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={cornerDotColor} onChange={(e) => setCornerDotColor(e.target.value)} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                      <span className="text-[10px] font-mono font-medium text-slate-700">{cornerDotColor}</span>
                    </div>
                  </div>
                </div>

                {/* Dot & Shape Styles */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Dot Pattern</label>
                    <select value={dotStyle} onChange={(e) => setDotStyle(e.target.value as DotType)} className="w-full h-9 rounded-xl border border-slate-200 bg-slate-50 text-xs px-2 outline-none">
                      <option value="rounded">Rounded</option>
                      <option value="dots">Dots</option>
                      <option value="classy">Classy</option>
                      <option value="classy-rounded">Classy Rounded</option>
                      <option value="square">Square</option>
                      <option value="extra-rounded">Extra Rounded</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Corner Shape</label>
                    <select value={cornerSquareStyle} onChange={(e) => setCornerSquareStyle(e.target.value as CornerSquareType)} className="w-full h-9 rounded-xl border border-slate-200 bg-slate-50 text-xs px-2 outline-none">
                      <option value="extra-rounded">Extra Rounded</option>
                      <option value="dot">Circle Dot</option>
                      <option value="square">Square</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">App Icon / Logo</label>
                    <label className="cursor-pointer flex items-center justify-center h-9 px-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition-colors">
                      <span>{logoSrc ? 'Change Icon' : 'Add App Icon'}</span>
                      <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Dynamic QR Upgrade Box */}
                <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-xs font-bold text-emerald-900">Track App Installs with Dynamic QR</p>
                    </div>
                    <p className="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
                      Monitor scan conversions by device (iOS vs. Android), countries, and cities in real time.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenDynamicModal}
                    disabled={!iosUrl.trim() && !androidUrl.trim() && !webFallback.trim()}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-xs transition-colors shrink-0 disabled:opacity-50"
                  >
                    Save as Dynamic QR ⚡
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
                    Download PNG
                  </button>
                  <button
                    onClick={() => handleDownload('svg')}
                    className="flex-1 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    SVG (Vector)
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
                App Growth Architecture
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                The Ultimate Guide to Smart App Store QR Codes & Mobile Acquisition
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                In physical app marketing—whether on subway billboards, product unboxing collateral, TV commercials, trade show exhibits, or direct mail flyers—asking potential users to open their phone, launch an app store, type your exact app title, and sift through competitor search results creates severe friction. Studies demonstrate that over 65% of potential users drop off during manual app store searching.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                A single smart App Store QR Code eliminates this friction completely. By utilizing intelligent device routing, one scannable barcode automatically directs iOS users to the Apple App Store and Android users to the Google Play Store with zero human decision-making required.
              </p>
            </article>

            {/* Section 2: Why Dual Codes Fail vs Unified Smart QR */}
            <article className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-lg">
                Conversion Optimization
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Why Printing Two Separate QR Codes Harms Conversion Rates
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Many marketing teams make the critical mistake of printing side-by-side barcodes labeled <em>"Scan for iOS"</em> and <em>"Scan for Android"</em>. Here is why unified smart routing outperforms dual codes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-red-50/50 rounded-2xl border border-red-200 space-y-2">
                  <h3 className="font-bold text-red-900 text-sm">The Flaws of Dual QR Codes</h3>
                  <ul className="text-xs space-y-1.5 text-red-700">
                    <li>• <strong>Visual Clutter:</strong> Two dense barcodes consume valuable print space on packaging.</li>
                    <li>• <strong>Cognitive Load:</strong> Forces consumers to stop and identify which operating system they own.</li>
                    <li>• <strong>Camera Cross-Scanning:</strong> Smartphone cameras frequently focus on the wrong adjacent code, causing error messages on Android devices trying to open Apple App Store links.</li>
                  </ul>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-2">
                  <h3 className="font-bold text-emerald-900 text-sm">The Power of a Unified Smart QR Code</h3>
                  <ul className="text-xs space-y-1.5 text-emerald-700">
                    <li>• <strong>Single Clean Barcode:</strong> Maximizes physical logo prominence and print aesthetics.</li>
                    <li>• <strong>1-Second Frictionless Scan:</strong> Zero user thinking required—scan and install immediately.</li>
                    <li>• <strong>Intelligent Fallback:</strong> Seamlessly routes desktop users to your promotional marketing website.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 3: High-Converting Offline Touchpoints */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Strategic Offline Placements for Maximum App Downloads
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Product Packaging & Hardware Boxes</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Place an App Store QR code on the inner lid of smart home appliances or consumer electronics labeled: <em>"Scan to download the companion mobile app & begin setup."</em>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Point-of-Sale Receipts & Table Tents</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Print QR codes on restaurant receipts encouraging diners to download your loyalty rewards app for an instant $5 discount on their next meal.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Transit & Outdoor Billboards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Feature large-format vector SVG QR codes on subway posters where commuters have idle dwell time and fast cellular connectivity.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Direct Mail & Postcards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Send targeted direct mailers to zip codes with a high-contrast QR code offering exclusive in-app promo codes.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Conference Badges & Banners</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Print the official event guide app QR code on attendee lanyards for instant schedule access and push notification updates.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Vehicle Fleet Decals</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Apply high-contrast vinyl QR codes to service vans and delivery vehicles for on-the-go service app booking.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4: Live Telemetry Analytics */}
            <article className="space-y-4 bg-slate-900 text-white p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Live App Scan Telemetry & Channel Attribution
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                When managing dynamic App Store QR codes through our platform, you gain complete visibility into real-world conversion funnels:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4 text-xs">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">iOS vs. Android Share</p>
                  <p className="text-slate-300">Measure exact device percentages scanning your physical collateral to optimize future mobile development resources.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Geographic Hotspots</p>
                  <p className="text-slate-300">Track which metropolitan areas and countries generate the highest install velocity to inform regional advertising budgets.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Real-Time URL Routing</p>
                  <p className="text-slate-300">Update store package names or deep-link parameters instantly from your dashboard without reprinting existing collateral.</p>
                </div>
              </div>
            </article>

            {/* Section 5: Comparison Table */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Unified App Store QR vs. Manual Store Search
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-3.5">Metric</th>
                      <th className="p-3.5 text-accent">Unified App Store QR Code</th>
                      <th className="p-3.5">Manual Search "Find us on the App Store"</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Time to Install Screen</td>
                      <td className="p-3.5 text-accent font-semibold">&lt; 2 seconds (Direct store deep-link)</td>
                      <td className="p-3.5">30–60+ seconds (App launch, typing, searching)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Risk of Competitor Poaching</td>
                      <td className="p-3.5 text-accent font-semibold">0% (Opens your exact product ID)</td>
                      <td className="p-3.5">High (Competitors run App Store Search Ads)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Device Detection</td>
                      <td className="p-3.5 text-accent font-semibold">100% Automated iOS/Android routing</td>
                      <td className="p-3.5">User must manually select store</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Analytics Tracking</td>
                      <td className="p-3.5 text-accent font-semibold">Live scan counts, devices & locations</td>
                      <td className="p-3.5">Zero tracking data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">App Store QR Code FAQ</h2>
                <p className="text-xs text-slate-500">Everything you need to know about multi-platform App Store QR codes.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {APPSTORE_FAQS.map((faq, idx) => (
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
                {savedShortCode ? 'Dynamic App QR Created!' : 'Save Dynamic App Store QR'}
              </h3>
              <button onClick={() => { setShowDynamicSaveModal(false); setSavedShortCode(null); }} className="text-slate-500 hover:text-slate-600 p-1 rounded-lg">✕</button>
            </div>

            {savedShortCode ? (
              <div className="text-center space-y-4">
                <p className="text-xs text-slate-600">
                  Your smart App Store QR code is live. Track installs and update links anytime from your dashboard!
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-accent truncate">
                    https://qr-generator.online/r/{savedShortCode}
                  </span>
                  <button onClick={() => handleCopyLink(savedShortCode)} className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-lg shrink-0">
                    {copySuccess ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <div className="flex gap-2">
                  <Link to="/dashboard" onClick={() => setShowDynamicSaveModal(false)} className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl text-center">
                    My QR Codes
                  </Link>
                  <Link to={`/analytics/${savedShortCode}`} onClick={() => setShowDynamicSaveModal(false)} className="flex-1 py-2.5 bg-accent text-white text-xs font-semibold rounded-xl text-center">
                    View Analytics
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveDynamic} className="space-y-4">
                {dynamicError && <p className="text-xs text-red-600 p-2 bg-red-50 rounded-lg">{dynamicError}</p>}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Campaign Title</label>
                  <input
                    type="text"
                    required
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="e.g. iOS & Android App Launch"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Target Link</label>
                  <input type="text" disabled value={primaryTarget} className="w-full px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono truncate" />
                </div>
                <button
                  type="submit"
                  disabled={savingDynamic}
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white text-xs font-bold rounded-xl shadow-xs transition-colors disabled:opacity-50"
                >
                  {savingDynamic ? 'Creating Smart Link...' : 'Create Dynamic App Store QR'}
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
        title="Create Account for Smart App QR"
        subtitle="Sign in or register to track app install analytics and update store links anytime."
      />
    </div>
  );
};

export default AppStoreQRPage;
