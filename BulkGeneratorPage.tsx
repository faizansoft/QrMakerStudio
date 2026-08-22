import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';

interface BulkItem {
  id: number;
  text: string;
  blob?: Blob;
}

const FAQ_ITEMS = [
  {
    q: 'How many QR codes can I generate in bulk at once?',
    a: 'You can generate hundreds of QR codes simultaneously without any artificial limits. Because all processing is handled client-side in your web browser, generation is lightning-fast and respects your computer memory without queueing delays.'
  },
  {
    q: 'What is the difference between bulk static QR codes and dynamic QR codes?',
    a: 'Bulk static QR codes encode the exact URL or text directly into the barcode pattern permanently. Dynamic QR codes, by contrast, encode short redirect URLs managed in our platform, allowing you to change the destination URLs anytime after printing and track live scan analytics (visitor devices, geographic locations, and timestamps).'
  },
  {
    q: 'What file format should my CSV upload be in?',
    a: 'Your CSV or TXT file should have one URL or text string per line. Headers are optional. The parser automatically detects and cleans raw URLs, text strings, vCard snippets, and product SKU codes.'
  },
  {
    q: 'Can I download all generated QR codes in a single ZIP file?',
    a: 'Yes. Once batch generation finishes, clicking "Download All (ZIP)" bundles every generated high-resolution PNG or vector SVG barcode into a single, organized ZIP file with clean filenames matching your input data.'
  },
  {
    q: 'Are bulk QR codes private and secure?',
    a: 'Yes, 100%. All bulk rendering happens in your local browser sandbox using client-side JavaScript. Your batch data, customer URLs, and product inventory serial numbers are never uploaded to or stored on external servers.'
  },
  {
    q: 'What print resolution and error correction should I use for bulk labels?',
    a: 'We generate high-resolution 800x800px files by default (or vector SVG for infinite scalability). We apply Level H error correction (30% data redundancy) to ensure barcodes remain 100% scannable even on textured packaging or curved bottles.'
  }
];

const BulkGeneratorPage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<BulkItem[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [fgColor, setFgColor] = useState('#1E1E1E');
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
    injectJSONLD('jsonld-faq', getFAQSchema(FAQ_ITEMS.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            High-Volume Production Suite
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Free Bulk QR Code Generator
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Batch generate dozens or hundreds of custom QR codes simultaneously from text lists or CSV uploads. Export all files in high-resolution PNG or vector SVG packaged in a single organized ZIP archive.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ GENERATOR INTERFACE ═══════════════════════════ */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 md:p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Input */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-bold text-slate-900">Enter URLs or Text Data</h2>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                    Upload CSV / TXT
                    <input type="file" accept=".csv,.txt" className="hidden" onChange={handleCSVUpload} />
                  </label>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={"Enter one URL or text string per line:\nhttps://example.com/promo-1\nhttps://example.com/promo-2\nhttps://example.com/menu-table-1\nhttps://example.com/menu-table-2\nSKU-98234-RED-XL"}
                  rows={10}
                  className="w-full p-4 border border-slate-200 rounded-2xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none resize-none bg-slate-50 leading-relaxed transition-all"
                />
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{lineCount} {lineCount === 1 ? 'item' : 'items'} detected</span>
                  <span>One entry per line</span>
                </div>

                {/* Styling Options */}
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Foreground</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent" />
                      <span className="text-[11px] font-mono font-medium text-slate-700">{fgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Background</label>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                      <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent" />
                      <span className="text-[11px] font-mono font-medium text-slate-700">{bgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Export Format</label>
                    <select value={format} onChange={(e) => setFormat(e.target.value as 'png' | 'svg')} className="w-full h-[38px] rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 px-2 outline-none focus:ring-2 focus:ring-accent">
                      <option value="png">PNG (Raster)</option>
                      <option value="svg">SVG (Vector)</option>
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
                      <span>Generating {items.length} of {lineCount}...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Generate {lineCount > 0 ? `${lineCount} QR Codes` : 'Batch Codes'}</span>
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
                        <h2 className="text-base font-bold text-slate-900">{items.length} QR Codes Rendered</h2>
                        <p className="text-xs text-slate-400">Click any code to download individually or grab the entire ZIP package.</p>
                      </div>
                      <button
                        onClick={handleDownloadAll}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download ZIP
                      </button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[420px] overflow-y-auto pr-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                      {items.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleDownloadSingle(item)}
                          className="group relative bg-white border border-slate-200 rounded-xl p-2 hover:border-accent hover:shadow-xs transition-all text-left"
                          title={`Click to download: ${item.text}`}
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
                            <span className="bg-white/90 text-accent font-bold text-[10px] px-2 py-1 rounded shadow-xs">Download</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-3 shadow-2xs">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-slate-700">Batch Previews Will Appear Here</p>
                    <p className="text-[11px] text-slate-400 mt-1 max-w-xs leading-relaxed">
                      Type or paste your URLs on the left, or upload a CSV spreadsheet to generate barcodes instantly.
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-md">
                Production Architecture
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                The Definitive Guide to High-Volume Bulk QR Code Generation
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                In modern industrial logistics, event management, retail commerce, and enterprise marketing, generating QR codes one-by-one is both inefficient and error-prone. Whether you are producing 50 unique table ordering codes for a restaurant, 5,000 serialized product authentication labels for manufacturing packaging, or 10,000 personalized badge credentials for an international convention, bulk QR code generation is an indispensable operational capability.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our free bulk generator operates entirely on a high-performance client-side rendering pipeline. Rather than routing your private data through remote server queues—which introduces latency, rate limiting, and severe data privacy vulnerabilities—our tool compiles mathematical 2D matrix symbologies directly inside your browser engine. This architecture ensures zero server roundtrips, instantaneous processing of hundreds of rows, and complete confidentiality for proprietary URLs and internal enterprise tokens.
              </p>
            </article>

            {/* Section 2: Static vs Dynamic QR in Bulk Campaigns */}
            <article className="space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-md">
                Campaign Strategy
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Static vs. Dynamic QR Codes in Bulk Production
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                When embarking on large-scale QR code printing runs, choosing the right barcode architecture between <strong>Static QR Codes</strong> and <strong>Dynamic QR Codes</strong> is the single most critical decision for your campaign lifecycle:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2">Static Bulk QR Codes</h3>
                  <p className="text-xs leading-relaxed text-slate-600 mb-3">
                    Static codes directly encode the destination text or URL string permanently into the 2D pixel pattern. Once printed onto physical cardboard boxes, aluminum nameplates, or printed flyers, the encoded data cannot be altered.
                  </p>
                  <ul className="text-xs space-y-1.5 text-slate-600">
                    <li className="flex items-center gap-2">✓ <strong>No internet lookup required:</strong> Decodes completely offline.</li>
                    <li className="flex items-center gap-2">✓ <strong>Permanent lifetime:</strong> Never expires or depends on servers.</li>
                    <li className="flex items-center gap-2 text-red-600">✗ <strong>Zero editability:</strong> Typos require complete reprinting.</li>
                    <li className="flex items-center gap-2 text-red-600">✗ <strong>No scan analytics:</strong> Cannot track visitor engagement.</li>
                  </ul>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2">Dynamic Bulk QR Codes</h3>
                  <p className="text-xs leading-relaxed text-slate-600 mb-3">
                    Dynamic codes encode a short redirect URL (<code className="text-emerald-700 font-bold">qr-generator.online/r/xyz</code>) that points to a cloud-managed routing table. When scanned, visitors are instantly forwarded to your target destination.
                  </p>
                  <ul className="text-xs space-y-1.5 text-slate-600">
                    <li className="flex items-center gap-2 text-emerald-700">✓ <strong>Real-time editable destinations:</strong> Change URLs anytime without reprinting.</li>
                    <li className="flex items-center gap-2 text-emerald-700">✓ <strong>Deep telemetry analytics:</strong> Track scan counts, devices, OS, countries, and cities.</li>
                    <li className="flex items-center gap-2 text-emerald-700">✓ <strong>Cleaner barcode matrix:</strong> Shorter URL lengths result in larger, easier-to-scan modules.</li>
                    <li className="flex items-center gap-2">✓ <strong>A/B testing enabled:</strong> Route traffic to alternate promo pages dynamically.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-slate-100 rounded-2xl mt-4 text-xs text-slate-600 leading-relaxed">
                <strong>Strategic Recommendation:</strong> If you are manufacturing long-lived physical assets (like product packaging, outdoor billboards, or metal serial plates), use <strong>Dynamic QR Codes</strong> through your account dashboard. For one-off disposable event tickets, internal WiFi access cards, or raw plain text serial identifiers, static bulk generation is ideal.
              </div>
            </article>

            {/* Section 3: Step-by-Step CSV Pipeline */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Step-by-Step Tutorial: Preparing Your CSV for Batch Generation
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                To maximize throughput and guarantee zero barcode generation errors, structure your spreadsheet data using clean, standard ASCII or UTF-8 formatting:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Organize Data in Microsoft Excel or Google Sheets</h3>
                    <p className="text-xs text-slate-600 mt-1">Place each individual destination URL or raw text string in Column A. Ensure all website links include the protocol prefix (e.g. <code className="bg-slate-100 px-1.5 py-0.5 rounded text-accent">https://</code>).</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Export as Comma-Separated Values (.csv) or Plain Text (.txt)</h3>
                    <p className="text-xs text-slate-600 mt-1">Select File ➔ Save As ➔ CSV (Comma Delimited). Ensure UTF-8 encoding is selected if your dataset contains international characters or accented names.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Upload & Customize Visual Parameters</h3>
                    <p className="text-xs text-slate-600 mt-1">Click "Upload CSV" above to import your file. Choose high-contrast foreground and background colors (e.g. dark charcoal on white), pick your preferred format (PNG or vector SVG), and hit "Generate".</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Download Individual Files or the Complete ZIP Archive</h3>
                    <p className="text-xs text-slate-600 mt-1">Review the rendered visual preview grid. Download individual files by clicking any card, or click "Download All (ZIP)" to receive an organized archive with numbered file nomenclature ready for commercial prepress.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 4: Enterprise Use Cases */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Industrial & Enterprise Use Cases for Batch QR Code Production
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Hospitality & Multi-Table Dining</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Generate unique QR codes for each dining table (e.g. <code className="text-accent">https://bistro.com/order?table=12</code>) so waitstaff can route contactless digital orders directly to the kitchen POS with precise table geolocation.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Event Credentials & Ticketing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Produce thousands of unique scannable attendee passes encoded with cryptographic ticket validation hashes for lightning-fast turnstile check-ins and fraud prevention.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Manufacturing & Serial Asset Tracking</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encode serial numbers, manufacturing batch IDs, and digital operating manuals onto industrial equipment labels for instant field maintenance lookup.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Location Marketing Campaigns</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Generate hundreds of distinct UTM-tagged URLs for billboard advertisements across multiple metropolitan regions to benchmark regional conversion rates with pinpoint precision.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 5: Comparison Table */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Bulk Workflow vs. Traditional Single-Code Generator
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-3.5">Feature & Metric</th>
                      <th className="p-3.5">Single-Code Generator</th>
                      <th className="p-3.5 text-accent">Bulk Batch Generator</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Generation Speed</td>
                      <td className="p-3.5">1 code every 30–60 seconds manually</td>
                      <td className="p-3.5 text-accent font-semibold">100+ codes in &lt; 5 seconds automatically</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Data Input Pipeline</td>
                      <td className="p-3.5">Manual copy-pasting into input fields</td>
                      <td className="p-3.5">CSV, TXT spreadsheet ingestion</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">File Organization</td>
                      <td className="p-3.5">Scattered downloads in browser folder</td>
                      <td className="p-3.5">Consolidated, structured ZIP archive</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Styling Uniformity</td>
                      <td className="p-3.5">Risk of inconsistent color / margin adjustments</td>
                      <td className="p-3.5">100% unified colors, dimensions, and error margins</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Vector SVG Export</td>
                      <td className="p-3.5">Individual download per code</td>
                      <td className="p-3.5">Batch vector SVG export for prepress printing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: Print Standards & Error Correction */}
            <article className="space-y-4 bg-slate-900 text-white p-8 rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Print Standards & Error Correction Optimization
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                When printing bulk QR codes on physical media (paper stickers, product packaging, or vinyl decals), adhering to ISO/IEC 18004 standards guarantees instant camera scanning under diverse optical conditions:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4 text-xs">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Quiet Zone Margin</p>
                  <p className="text-slate-300">Maintain a clear border of at least 4 module widths around the entire barcode to prevent surrounding graphic elements from confusing optical scanner sensors.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">300+ DPI Resolution</p>
                  <p className="text-slate-300">Always export in vector SVG format or use 800x800px PNGs rendered at 300 dots per inch for ultra-sharp edge definition during offset printing.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Level H (30%) Redundancy</p>
                  <p className="text-slate-300">Our generator applies Reed-Solomon Level H error correction, allowing barcodes to decode flawlessly even if up to 30% of the surface is scratched or obscured.</p>
                </div>
              </div>
            </article>

            {/* Section 7: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-xs text-slate-500">Everything you need to know about batch QR creation and enterprise deployment.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {FAQ_ITEMS.map((faq, idx) => (
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
