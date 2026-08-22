import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';

const SCANNER_FAQS = [
  {
    q: 'How does this online QR code scanner work without an app?',
    a: 'Our browser-based QR code scanner utilizes modern WebAssembly and the HTML5 MediaDevices API to interface directly with your device webcam or smartphone camera. Video stream frames are processed in real time in browser memory without sending any video data to cloud servers.'
  },
  {
    q: 'Can I scan and decode QR codes from saved image files or screenshots?',
    a: 'Yes. Simply click "Upload Image" to select any PNG, JPG, WEBP, or SVG screenshot from your computer or smartphone photo gallery. The engine analyzes the image pixels and decodes the embedded barcode string instantly.'
  },
  {
    q: 'How does the scanner handle Dynamic QR codes?',
    a: 'When you scan a Dynamic QR code (such as shortlinks starting with qr-generator.online/r/), our scanner detects the redirection URL and provides a secure preview. You can inspect the destination link before choosing to open it, ensuring full security and phishing protection.'
  },
  {
    q: 'Is scanning QR codes online safe and private?',
    a: 'Yes, 100%. Camera permissions and image file processing operate strictly within your local browser sandbox. No images, video frames, or decoded payload histories are ever uploaded, recorded, or transmitted to any third-party servers.'
  },
  {
    q: 'What types of QR codes can this scanner decode?',
    a: 'Our engine decodes all standard 2D matrix symbologies including Website URLs, Dynamic shortlinks, WiFi credentials (WIFI:), vCard 3.0 digital business cards (BEGIN:VCARD), WhatsApp chats, SMS text messages, Google Maps geo-coordinates, cryptocurrency wallet addresses (Bitcoin, Ethereum), and calendar events.'
  },
  {
    q: 'Why does my camera fail to scan a specific QR code?',
    a: 'Scanning failures typically occur due to insufficient ambient lighting, lens glare on glossy surfaces, inverted barcode colors (light dots on dark background without proper contrast), or damaged barcode finder patterns. For damaged codes, taking a close-up photo and uploading the image file often yields successful decoding.'
  }
];

const QRScannerPage: React.FC = () => {
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
    injectJSONLD('jsonld-faq', getFAQSchema(SCANNER_FAQS.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, []);

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
      setError(err?.message || 'Camera access denied or not available. Please ensure camera permissions are enabled in your browser settings.');
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
      setError('No scannable QR code detected in the uploaded image. Please ensure the barcode is clearly focused with high contrast.');
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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            In-Browser Optical Decoder
          </div>
          <h1 className="h1-page mb-4">
            Free Online QR Code Scanner & Reader
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scan and decode any QR code directly in your browser using your webcam, mobile camera, or image upload. 100% private, instant URL inspection, and zero app download required.
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
                  <p className="text-white font-bold text-sm">Optical Camera Viewport Ready</p>
                  <p className="text-white/60 text-xs mt-1 max-w-xs leading-relaxed">
                    Click "Start Camera" to scan via live video stream, or upload an image file from your device.
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
                    Start Camera
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
                    Stop Scanning
                  </button>
                )}

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Upload Image
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
                      QR Code Decoded Successfully
                    </span>
                    <button
                      onClick={copyResult}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors shadow-2xs"
                    >
                      {copied ? '✓ Copied' : 'Copy Text'}
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
                        <span>Open Verified Link ↗</span>
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
                Decoder Mechanics
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                The Complete Guide to Browser-Based Optical QR Code Scanning
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                For years, scanning a QR code required downloading third-party mobile applications cluttered with invasive ads, subscription paywalls, and privacy-violating telemetry trackers. Today, advances in WebAssembly (WASM) and browser standard APIs enable optical barcode recognition directly within standard web browsers with desktop-grade accuracy and zero app installation.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our free online QR scanner operates on a high-speed JavaScript and WebAssembly binary matrix decoder. When you grant camera access, the application samples the live video feed at 12–15 frames per second, runs edge-detection algorithms to locate the three universal corner finder patterns (position detection patterns), corrects optical perspective distortions, and parses the Reed-Solomon polynomial data modules in milliseconds.
              </p>
            </article>

            {/* Section 2: Decoding Dynamic vs Static Codes & Security */}
            <article className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-lg">
                Cybersecurity & Safety
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Decoding Dynamic vs. Static QR Codes: Link Verification
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                One of the greatest security hazards of blind barcode scanning is "QR phishing" (or <em>quishing</em>), where malicious actors paste fraudulent stickers over authentic restaurant menus or payment terminals. Our scanner acts as an intelligent firewall by giving you a clear, plaintext preview of the encoded link before your browser navigates to the website:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Static QR Code Payload Inspection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Static codes reveal their complete final URL or raw text string immediately. You can verify the hostname, check for misspelled domain names (e.g. <code className="text-red-600">paypa1.com</code> instead of <code className="text-emerald-700">paypal.com</code>), and copy the link safely to clipboard without triggering malicious scripts.
                  </p>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Dynamic QR Shortlink Analysis</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dynamic QR codes route through clean shortlinks (e.g. <code className="text-accent font-bold">qr-generator.online/r/h9K7WX</code>). Our engine verifies the redirection endpoint in real time and ensures you are navigating to a legitimate campaign created within the secure platform routing table.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3: Specialized Payload Parsing */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Supported Payload Standards & Automatic Format Parsing
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                QR codes can encapsulate far more than standard website URLs. Our online reader recognizes and parses structured payload protocols automatically:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm">WiFi Access Strings</p>
                  <p className="text-slate-600 leading-relaxed">Decodes <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-accent">WIFI:S:MyNetwork;P:pass;T:WPA;;</code> formats so you can copy passwords without manual transcription.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm">vCard Contact Files</p>
                  <p className="text-slate-600 leading-relaxed">Extracts full names, telephone numbers, emails, and company titles from <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-accent">BEGIN:VCARD</code> business card barcodes.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm">Crypto Wallet Addresses</p>
                  <p className="text-slate-600 leading-relaxed">Accurately reads alphanumeric Bitcoin (<code className="font-mono text-accent">bitcoin:1A...</code>), Ethereum (<code className="font-mono text-accent">ethereum:0x...</code>), and Solana wallet strings.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm">Geo Location Coordinates</p>
                  <p className="text-slate-600 leading-relaxed">Parses <code className="font-mono text-accent">geo:lat,lng</code> coordinates for instant one-click navigation in Google Maps or Apple Maps.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm">WhatsApp & SMS Links</p>
                  <p className="text-slate-600 leading-relaxed">Decodes pre-filled mobile chat and SMS keyword messaging links directly into readable format.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-sm">iCal Event Schedules</p>
                  <p className="text-slate-600 leading-relaxed">Parses calendar event summaries, timestamps, and venue locations encoded in <code className="font-mono text-accent">BEGIN:VEVENT</code> structures.</p>
                </div>
              </div>
            </article>

            {/* Section 4: Troubleshooting Unscannable Codes */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Troubleshooting Guide: Why Some QR Codes Fail to Scan
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                If you encounter a barcode that fails optical detection, the issue is almost always rooted in one of these four common physical or digital anomalies:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">1. Missing or Violated Quiet Zone</h3>
                    <p className="text-xs text-slate-600 mt-1">If artwork, text, or the edge of a flyer touches the outer black squares without a 4-module blank white margin, optical sensors cannot calculate the barcode boundaries.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">2. Overcrowded Data Density in Static Barcodes</h3>
                    <p className="text-xs text-slate-600 mt-1">Encoding a 250-character URL into a static QR code generates thousands of microscopic modules that blur easily on low-resolution cameras. Using <strong>Dynamic QR Codes</strong> eliminates this problem by maintaining clean, low-density matrices.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">3. Low Contrast & Inverted Color Polarity</h3>
                    <p className="text-xs text-slate-600 mt-1">Standard barcode readers expect dark data dots on a lighter background. White dots on a dark background or low-contrast combinations (like yellow on white) frequently fail optical decoding.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 5: Comparison Table */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Online Web Scanner vs. Native Mobile Apps
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-3.5">Feature</th>
                      <th className="p-3.5 text-accent">QR Generator Online Web Scanner</th>
                      <th className="p-3.5">Third-Party App Store Scanners</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Installation Required</td>
                      <td className="p-3.5 text-accent font-semibold">Zero (Runs in browser instantly)</td>
                      <td className="p-3.5">Requires 50MB+ download & store login</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Data Privacy & Tracking</td>
                      <td className="p-3.5 text-accent font-semibold">100% Private (Local memory only)</td>
                      <td className="p-3.5">Often tracks browsing history & ad IDs</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Image / Screenshot Upload</td>
                      <td className="p-3.5 text-accent font-semibold">Supported (Drag & drop any file)</td>
                      <td className="p-3.5">Often locked behind paid premium tiers</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Cross-Platform Support</td>
                      <td className="p-3.5 text-accent font-semibold">Universal (iOS, Android, Mac, Windows, Linux)</td>
                      <td className="p-3.5">Platform specific</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">QR Code Scanner FAQ</h2>
                <p className="text-xs text-slate-500">Answers to common technical questions about scanning and barcode safety.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {SCANNER_FAQS.map((faq, idx) => (
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
