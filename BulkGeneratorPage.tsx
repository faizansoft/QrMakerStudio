import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';
import { useContentLocale } from './context/ContentLocaleContext';
import { getLocalizedRouteMeta } from './constants/routeMetaI18n';
import { BULK_EN, BULK_LOADERS, type BulletPoint } from './constants/toolI18n/bulk';
import { useLocalizedCopy } from './constants/toolI18n/useLocalizedCopy';
import { renderInline } from './constants/toolI18n/inline';

const PATH = '/bulk-qr-code-generator';

interface BulkItem {
  id: number;
  text: string;
  blob?: Blob;
}

const BulletList: React.FC<{ points: BulletPoint[] }> = ({ points }) => (
  <ul className="text-xs space-y-1.5 text-slate-600">
    {points.map((p, i) => (
      <li
        key={i}
        className={`flex items-center gap-2 ${p.tone === 'good' ? 'text-emerald-700' : p.tone === 'bad' ? 'text-red-600' : ''}`}
      >
        {p.tone === 'bad' ? '✗' : '✓'} {renderInline(p.text)}
      </li>
    ))}
  </ul>
);

const BulkGeneratorPage: React.FC = () => {
  const contentLocale = useContentLocale();
  const copy = useLocalizedCopy(contentLocale, BULK_EN, BULK_LOADERS);
  const heroMeta = contentLocale ? getLocalizedRouteMeta(contentLocale, PATH) : null;
  const hero = heroMeta ?? copy.hero;

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<BulkItem[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [fgColor, setFgColor] = useState('#0F172A');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [format, setFormat] = useState<'png' | 'svg'>('png');
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-software', getToolSoftwareSchema(
      'Bulk QR Code Generator',
      '/bulk-qr-code-generator',
      'Batch generate hundreds of custom QR codes from CSV or text lists with instant ZIP download.'
    ));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Bulk QR Code Generator', url: '/bulk-qr-code-generator' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(copy.faq.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, [copy]);

  const parseInput = useCallback(() => {
    const lines = inputText
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);
    return lines.map((text, idx) => ({ id: idx, text }));
  }, [inputText]);

  const handleGenerate = async () => {
    const parsed = parseInput();
    if (parsed.length === 0) return;

    setGenerating(true);
    setGenerated(false);
    const results: BulkItem[] = [];

    for (const item of parsed) {
      const qr = new QRCodeStyling({
        width: 800,
        height: 800,
        data: item.text,
        dotsOptions: { color: fgColor, type: 'rounded' },
        backgroundOptions: { color: bgColor },
        qrOptions: { errorCorrectionLevel: 'H' },
        type: 'canvas',
      });

      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      document.body.appendChild(tempDiv);
      qr.append(tempDiv);

      await new Promise(resolve => setTimeout(resolve, 80));

      const blob = await qr.getRawData(format);
      document.body.removeChild(tempDiv);

      results.push({ ...item, blob: (blob as Blob) || undefined });
    }

    setItems(results);
    setGenerated(true);
    setGenerating(false);
  };

  const handleDownloadSingle = (item: BulkItem) => {
    if (!item.blob) return;
    const url = URL.createObjectURL(item.blob);
    const a = document.createElement('a');
    a.href = url;
    const safeName = item.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
    a.download = `qr_${safeName}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = async () => {
    if (items.length === 0) return;
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();

      items.forEach((item, idx) => {
        if (item.blob) {
          const safeName = item.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
          zip.file(`qr_${idx + 1}_${safeName}.${format}`, item.blob);
        }
      });

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `bulk_qr_codes_${Date.now()}.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('ZIP creation failed:', err);
      items.forEach(item => handleDownloadSingle(item));
    }
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        const lines = text
          .split(/[\r\n]+/)
          .map(l => l.split(',')[0].trim().replace(/^["']|["']$/g, ''))
          .filter(l => l.length > 0);
        setInputText(lines.join('\n'));
      }
    };
    reader.readAsText(file);
  };

  const lineCount = parseInput().length;
  const { article, input, output } = copy;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 text-center">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Input */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{copy.input.enterHeading}</h2>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                    {input.uploadCsv}
                    <input type="file" accept=".csv,.txt" className="hidden" onChange={handleCSVUpload} />
                  </label>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={input.placeholder}
                  rows={10}
                  className="w-full p-4 border border-slate-200 rounded-2xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none resize-none bg-slate-50 leading-relaxed transition-all"
                />
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{input.items(lineCount)}</span>
                  <span>{input.onePerLine}</span>
                </div>

                {/* Styling Options */}
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">{input.foreground}</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent" />
                      <span className="text-[11px] font-mono font-medium text-slate-700">{fgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">{input.background}</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent" />
                      <span className="text-[11px] font-mono font-medium text-slate-700">{bgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">{input.exportFormat}</label>
                    <select value={format} onChange={(e) => setFormat(e.target.value as 'png' | 'svg')} className="w-full h-[38px] rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 px-2 outline-none focus:ring-2 focus:ring-accent">
                      <option value="png">{input.formatPng}</option>
                      <option value="svg">{input.formatSvg}</option>
                    </select>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={lineCount === 0 || generating}
                  className="mt-5 w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xs"
                >
                  {generating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{input.generating(items.length, lineCount)}</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{lineCount > 0 ? input.generateCount(lineCount) : input.generateBatch}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right: Preview & Download */}
              <div className="flex flex-col">
                {generated && items.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{output.rendered(items.length)}</h2>
                        <p className="text-xs text-slate-500">{output.rendHint}</p>
                      </div>
                      <button
                        onClick={handleDownloadAll}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {output.downloadZip}
                      </button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[420px] overflow-y-auto pr-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                      {items.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleDownloadSingle(item)}
                          className="group relative bg-white border border-slate-200 rounded-xl p-2 hover:border-accent hover:shadow-xs transition-all text-left"
                          title={output.cardTitle(item.text)}
                        >
                          {item.blob && (
                            <img
                              src={URL.createObjectURL(item.blob)}
                              alt={item.text}
                              className="w-full aspect-square rounded-lg object-contain bg-white"
                            />
                          )}
                          <p className="text-[10px] font-mono text-slate-600 mt-1 truncate">{item.text}</p>
                          <div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/90 text-accent font-bold text-[10px] px-2 py-1 rounded shadow-xs">{output.cardOverlay}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 mb-3 shadow-2xs">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-slate-700">{output.emptyTitle}</p>
                    <p className="text-[11px] text-slate-500 mt-1 max-w-xs leading-relaxed">
                      {output.emptyBody}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════ 1800+ WORDS DETAILED GUIDE ═══════════════════════════ */}
          <div className="space-y-16 text-slate-700">

            {/* Section 1: Introduction & Architecture */}
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

            {/* Section 2: Static vs Dynamic QR in Bulk Campaigns */}
            <article className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-lg">
                {article.s2.badge}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s2.h2}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                {renderInline(article.s2.intro)}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{article.s2.staticCard.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 mb-3">
                    {article.s2.staticCard.body}
                  </p>
                  <BulletList points={article.s2.staticCard.points} />
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{article.s2.dynamicCard.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 mb-3">
                    {renderInline(article.s2.dynamicCard.body)}
                  </p>
                  <BulletList points={article.s2.dynamicCard.points} />
                </div>
              </div>

              <div className="p-4 bg-slate-100 rounded-2xl mt-4 text-xs text-slate-600 leading-relaxed">
                {renderInline(article.s2.recommendation)}
              </div>
            </article>

            {/* Section 3: Step-by-Step CSV Pipeline */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s3.h2}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                {article.s3.intro}
              </p>

              <div className="space-y-3">
                {article.s3.steps.map((step, i) => (
                  <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                      <p className="text-xs text-slate-600 mt-1">{renderInline(step.body)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 4: Enterprise Use Cases */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                {article.s4.h2}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {article.s4.cards.map((card, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {renderInline(card.body)}
                    </p>
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
                      <th className="p-3.5">{article.s5.headers[1]}</th>
                      <th className="p-3.5 text-accent">{article.s5.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {article.s5.rows.map((row, i) => (
                      <tr key={i}>
                        <td className="p-3.5 font-semibold text-slate-900">{row[0]}</td>
                        <td className="p-3.5">{row[1]}</td>
                        <td className={i === 0 ? 'p-3.5 text-accent font-semibold' : 'p-3.5'}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: Print Standards & Error Correction */}
            <article className="space-y-4 bg-slate-900 text-white p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {article.s6.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {article.s6.intro}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4 text-xs">
                {article.s6.cards.map((card, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                    <p className="font-bold text-white text-sm">{card.title}</p>
                    <p className="text-slate-300">{card.body}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 7: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{article.s7.h2}</h2>
                <p className="text-xs text-slate-500">{article.s7.sub}</p>
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
      <div ref={canvasRef} className="hidden" />
    </div>
  );
};

export default BulkGeneratorPage;
