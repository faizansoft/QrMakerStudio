import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';
import { useContentLocale } from './context/ContentLocaleContext';
import { getLocalizedRouteMeta } from './constants/routeMetaI18n';
import { SCANNER_EN, SCANNER_LOADERS } from './constants/toolI18n/scanner';
import { useLocalizedCopy } from './constants/toolI18n/useLocalizedCopy';
import { renderInline } from './constants/toolI18n/inline';

const PATH = '/qr-code-scanner';

const QRScannerPage: React.FC = () => {
  const contentLocale = useContentLocale();
  const copy = useLocalizedCopy(contentLocale, SCANNER_EN, SCANNER_LOADERS);
  const heroMeta = contentLocale ? getLocalizedRouteMeta(contentLocale, PATH) : null;
  const hero = heroMeta ?? copy.hero;

  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const scannerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-software', getToolSoftwareSchema(
      'Online QR Code Scanner',
      '/qr-code-scanner',
      'Free online optical QR barcode reader to decode QR codes via webcam, phone camera, or image upload.'
    ));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'QR Code Scanner', url: '/qr-code-scanner' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(copy.faq.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, [copy]);

  const startScanning = async () => {
    try {
      setError(null);
      setResult(null);
      const { Html5Qrcode } = await import('html5-qrcode');

      if (scannerRef.current) {
        try { await scannerRef.current.stop(); } catch {}
      }

      const scanner = new Html5Qrcode('qr-scanner-viewport');
      scannerRef.current = scanner;
      setScanning(true);

      await scanner.start(
        { facingMode: 'environment' },
        { fps: 12, qrbox: { width: 260, height: 260 } },
        (decodedText: string) => {
          setResult(decodedText);
          scanner.stop().catch(() => {});
          setScanning(false);
        },
        () => {} // silent scan frame failures
      );
    } catch (err: any) {
      setError(copy.errors.camera);
      setScanning(false);
    }
  };

  const stopScanning = async () => {
    if (scannerRef.current) {
      try { await scannerRef.current.stop(); } catch {}
      setScanning(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setError(null);
      setResult(null);
      const { Html5Qrcode } = await import('html5-qrcode');
      const scanner = new Html5Qrcode('qr-scanner-file-temp');

      const decoded = await scanner.scanFile(file, true);
      setResult(decoded);
      scanner.clear();
    } catch (err: any) {
      setError(copy.errors.noCode);
    }
  };

  const copyResult = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isURL = (text: string) => {
    try { new URL(text); return true; } catch { return false; }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        try { scannerRef.current.stop(); } catch {}
      }
    };
  }, []);

  const { article } = copy;

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
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {hero.lead}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ SCANNER INTERFACE ═══════════════════════════ */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden mb-16">

            {/* Viewport View */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden" style={{ minHeight: '340px' }}>
              <div id="qr-scanner-viewport" ref={containerRef} className="w-full" />
              <div id="qr-scanner-file-temp" className="hidden" />

              {!scanning && !result && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-4 backdrop-blur-xs">
                    <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">{copy.viewport.title}</p>
                  <p className="text-white/60 text-xs mt-1 max-w-xs leading-relaxed">
                    {copy.viewport.hint}
                  </p>
                </div>
              )}
            </div>

            {/* Controls Bar */}
            <div className="p-6 bg-white space-y-4">
              <div className="flex gap-3">
                {!scanning ? (
                  <button
                    onClick={startScanning}
                    className="flex-1 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {copy.controls.startCamera}
                  </button>
                ) : (
                  <button
                    onClick={stopScanning}
                    className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
                    </svg>
                    {copy.controls.stopScanning}
                  </button>
                )}

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {copy.controls.uploadImage}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3.5 bg-red-50 border border-red-200/80 rounded-2xl text-red-700 text-xs font-medium flex items-start gap-2">
                  <svg className="w-4 h-4 shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {/* Scan Result Box */}
              {result && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      {copy.result.decoded}
                    </span>
                    <button
                      onClick={copyResult}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors shadow-2xs"
                    >
                      {copied ? `✓ ${copy.result.copied}` : copy.result.copy}
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-emerald-200 font-mono text-xs text-slate-800 break-all select-all">
                    {result}
                  </div>

                  {isURL(result) && (
                    <div className="pt-1 flex items-center gap-2">
                      <a
                        href={result}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-xs shadow-xs transition-all"
                      >
                        <span>{copy.result.openLink}</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ═══════════════════════════ 1800+ WORDS DETAILED GUIDE ═══════════════════════════ */}
          <div className="space-y-16 text-slate-700">

            {/* Section 1: In-Browser Optical Decoding Architecture */}
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

            {/* Section 2: Decoding Dynamic vs Static Codes & Security */}
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

            {/* Section 3: Specialized Payload Parsing */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s3.h2}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                {article.s3.intro}
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-xs">
                {article.s3.cards.map((card, i) => (
                  <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <p className="font-bold text-slate-900 text-sm">{card.title}</p>
                    <p className="text-slate-600 leading-relaxed">{renderInline(card.body)}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 4: Troubleshooting Unscannable Codes */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s4.h2}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                {article.s4.intro}
              </p>

              <div className="space-y-3">
                {article.s4.items.map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-xl bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-1">{renderInline(item.body)}</p>
                    </div>
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

export default QRScannerPage;
