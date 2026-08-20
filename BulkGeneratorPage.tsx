import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';

interface BulkItem {
  id: number;
  text: string;
  blob?: Blob;
}

const BulkGeneratorPage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<BulkItem[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [format, setFormat] = useState<'png' | 'svg'>('png');
  const canvasRef = useRef<HTMLDivElement>(null);

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

      // Wait a bit for rendering
      await new Promise(resolve => setTimeout(resolve, 150));

      const blob = await qr.getRawData(format);
      document.body.removeChild(tempDiv);

      results.push({ ...item, blob: blob || undefined });
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
          zip.file(`qr_${String(idx + 1).padStart(3, '0')}_${safeName}.${format}`, item.blob);
        }
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qr_codes_bulk.zip';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('ZIP generation failed:', err);
    }
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const csv = event.target?.result as string;
      const lines = csv.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      // Skip header row if it looks like a header
      const startIdx = lines[0]?.toLowerCase().includes('url') || lines[0]?.toLowerCase().includes('text') ? 1 : 0;
      setInputText(lines.slice(startIdx).join('\n'));
    };
    reader.readAsText(file);
  };

  const lineCount = inputText.split('\n').filter(l => l.trim().length > 0).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Bulk Generator
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Bulk QR Code Generator — Free Batch Creator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate hundreds of QR codes at once from a list of URLs, text, or CSV file. Download all as individual files or a single ZIP archive. 100% free, no limits.
          </p>
        </div>
      </section>

      {/* Generator UI */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Input */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-bold text-gray-900">Enter URLs or Text</h2>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                    Upload CSV
                    <input type="file" accept=".csv,.txt" className="hidden" onChange={handleCSVUpload} />
                  </label>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={"Enter one URL or text per line:\nhttps://example.com\nhttps://mywebsite.com\nhttps://another-link.com"}
                  rows={12}
                  className="w-full p-4 border border-slate-300 rounded-xl text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none bg-slate-50"
                />
                <p className="text-xs text-slate-500 mt-2">{lineCount} {lineCount === 1 ? 'item' : 'items'} detected • One per line</p>

                {/* Options */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Foreground</label>
                    <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-full h-9 rounded-lg cursor-pointer border border-slate-200" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Background</label>
                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-9 rounded-lg cursor-pointer border border-slate-200" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Format</label>
                    <select value={format} onChange={(e) => setFormat(e.target.value as 'png' | 'svg')} className="w-full h-9 rounded-lg border border-slate-200 text-sm px-2">
                      <option value="png">PNG</option>
                      <option value="svg">SVG</option>
                    </select>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={lineCount === 0 || generating}
                  className="mt-4 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {generating ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      Generating {items.length} / {lineCount}...
                    </>
                  ) : (
                    <>Generate {lineCount} QR Codes</>
                  )}
                </button>
              </div>

              {/* Right: Preview & Download */}
              <div>
                {generated && items.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-lg font-bold text-gray-900">{items.length} QR Codes Ready</h2>
                      <button
                        onClick={handleDownloadAll}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                        Download All (ZIP)
                      </button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-2">
                      {items.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleDownloadSingle(item)}
                          className="group relative bg-white border border-slate-200 rounded-xl p-2 hover:border-indigo-400 hover:shadow-md transition-all"
                          title={`Download: ${item.text}`}
                        >
                          {item.blob && (
                            <img
                              src={URL.createObjectURL(item.blob)}
                              alt={item.text}
                              className="w-full aspect-square rounded-lg"
                            />
                          )}
                          <p className="text-[9px] text-slate-500 mt-1 truncate">{item.text}</p>
                          <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 rounded-xl transition-colors flex items-center justify-center">
                            <svg className="w-6 h-6 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                    <svg className="w-16 h-16 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    <p className="text-slate-500 font-medium">QR code previews will appear here</p>
                    <p className="text-slate-400 text-sm mt-1">Enter URLs or text on the left, then click Generate</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info Sections */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">CSV Upload Support</h3>
              <p className="text-sm text-gray-600">Upload a CSV or TXT file with one URL per line. The generator parses and processes each row automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">ZIP Download</h3>
              <p className="text-sm text-gray-600">Download all generated QR codes at once as a single ZIP archive. Click individual codes to download them separately.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">100% Privacy</h3>
              <p className="text-sm text-gray-600">All QR codes are generated locally in your browser. Your URLs and data never leave your device.</p>
            </div>
          </div>
        </div>
      </section>
      <div ref={canvasRef} className="hidden" />
    </div>
  );
};

export default BulkGeneratorPage;
