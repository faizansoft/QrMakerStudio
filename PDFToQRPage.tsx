import React, { useState, useRef, useEffect } from 'react';
import Link from './components/LocaleLink';
import QRCodeStyling, { DotType, CornerSquareType, CornerDotType } from 'qr-code-styling';
import { useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { createDynamicLink } from './services/dynamicQrService';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';
import { useDialogBehaviour } from './components/Modal';

const PDF_FAQS = [
  {
    q: 'How does a PDF to QR Code work?',
    a: 'A PDF QR code connects physical materials (restaurant menus, brochures, product packaging, catalogs) to a digital PDF document hosted online (such as Google Drive, Dropbox, OneDrive, or your website server). When scanned, the visitor’s smartphone camera opens the PDF document instantly in their mobile browser.'
  },
  {
    q: 'Can I change or update the PDF document after printing the QR code?',
    a: 'Yes, if you use a Dynamic QR Code! With our dynamic platform, you can update the destination PDF URL or upload a new seasonal menu anytime from your dashboard without ever reprinting your physical flyers, table stands, or product packaging.'
  },
  {
    q: 'How do I generate a QR code for a Google Drive or Dropbox PDF?',
    a: 'Upload your PDF to Google Drive or Dropbox, set the sharing permissions to "Anyone with the link can view", copy the shareable link, paste it into our generator above, and click Generate. Our system automatically optimizes the link for mobile scanning.'
  },
  {
    q: 'What is the recommended PDF file size for fast QR code scanning?',
    a: 'We recommend compressing your PDF file size to under 5MB (ideally under 2MB). Large multi-page PDF files can cause slow loading times on cellular mobile connections when customers scan your QR code.'
  },
  {
    q: 'Can I track how many people scan and view my PDF QR code?',
    a: 'Yes. By saving your PDF QR code as a free Dynamic QR code, your dashboard tracks total scan counts, unique visitors, scan dates, device operating systems (iOS vs Android), and geographic locations (country and city).'
  },
  {
    q: 'Can I customize the design and add my restaurant or business logo?',
    a: 'Yes. You can customize the QR foreground and background colors, dot styles (rounded, classy, dots), corner square shapes, and upload your high-resolution business logo to display in the center.'
  }
];

const PDFToQRPage: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [docTitle, setDocTitle] = useState('');
  const [fgColor, setFgColor] = useState('#2B6F53');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [cornerSquareColor, setCornerSquareColor] = useState('#0F172A');
  const [cornerDotColor, setCornerDotColor] = useState('#2B6F53');
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
      'PDF to QR Code Generator',
      '/pdf-qr-code-generator',
      'Convert PDF documents, restaurant menus, and catalogs into custom scannable QR codes.'
    ));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'PDF to QR Code Generator', url: '/pdf-qr-code-generator' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(PDF_FAQS.map(f => ({ question: f.q, answer: f.a }))));
    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, []);

  const effectiveData = pdfUrl.trim() || 'https://qr-generator.online';

  useEffect(() => {
    if (!qrInstanceRef.current) {
      qrInstanceRef.current = new QRCodeStyling({
        width: 280,
        height: 280,
        data: effectiveData,
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
        data: effectiveData,
        dotsOptions: { color: fgColor, type: dotStyle },
        backgroundOptions: { color: bgColor },
        cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
        cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
        image: logoSrc || undefined,
      });
    }
  }, [effectiveData, fgColor, bgColor, cornerSquareColor, cornerDotColor, dotStyle, cornerSquareStyle, cornerDotStyle, logoSrc]);

  const handleDownload = (format: 'png' | 'svg') => {
    if (!qrInstanceRef.current) return;
    const safeTitle = (docTitle.trim() || 'pdf_qr').replace(/[^a-zA-Z0-9]/g, '_');
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
    if (!pdfUrl.trim()) return;
    if (!user) {
      setShowAuthModal(true);
    } else {
      setShowDynamicSaveModal(true);
    }
  };

  const handleSaveDynamic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfUrl.trim()) return;
    setSavingDynamic(true);
    setDynamicError(null);

    const { data, error } = await createDynamicLink({
      targetUrl: pdfUrl.trim(),
      title: docTitle.trim() || 'PDF Menu / Document',
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
            Document & Menu Suite
          </div>
          <h1 className="h1-page mb-4">
            Free PDF to QR Code Generator
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Convert digital menus, brochures, product catalogs, and whitepapers into branded, high-resolution QR codes. Enable instant smartphone viewing with zero app download and editable dynamic updates.
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
                    PDF Document / Menu URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={pdfUrl}
                    onChange={(e) => setPdfUrl(e.target.value)}
                    placeholder="https://drive.google.com/file/... or https://yoursite.com/menu.pdf"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Paste a direct PDF link, Google Drive share link, Dropbox link, or hosted document URL.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Document / Campaign Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={docTitle}
                    onChange={(e) => setDocTitle(e.target.value)}
                    placeholder="e.g. Summer Dinner Menu 2026 or Product Catalog"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
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
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Upload Logo</label>
                    <label className="cursor-pointer flex items-center justify-center h-9 px-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition-colors">
                      <span>{logoSrc ? 'Change Logo' : 'Add Logo'}</span>
                      <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Dynamic QR Upgrade Box */}
                <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-xs font-bold text-emerald-900">Make PDF QR Code Dynamic</p>
                    </div>
                    <p className="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
                      Update your seasonal menu or PDF document anytime without reprinting your table stands.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenDynamicModal}
                    disabled={!pdfUrl.trim()}
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
                  {pdfUrl.trim() || 'Enter a PDF URL above to preview'}
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
            
            {/* Section 1: The Modern PDF QR Revolution */}
            <article className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-lg">
                Document Digitalization
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                The Complete Guide to PDF QR Codes for Menus, Catalogs & Documents
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                In commercial dining, trade conferences, real estate sales, and corporate education, printing physical multi-page paper catalogs or laminated restaurant menus is expensive, environmentally wasteful, and impossible to update once printed. A single price modification or seasonal menu overhaul previously required thousands of dollars in complete reprint runs.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                A PDF to QR Code bridges the physical world to rich, high-resolution digital documents. When placed on table tents, product packaging, exhibition booths, or storefront windows, customers simply aim their smartphone cameras to open your full PDF brochure, digital menu, or technical instruction manual in seconds—without downloading any specialized apps or typing complex web addresses.
              </p>
            </article>

            {/* Section 2: Static vs Dynamic PDF QR Codes */}
            <article className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-lg">
                Menu Management
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Static vs. Dynamic PDF QR Codes: Updating Menus Without Reprinting
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                When printing QR codes on physical acrylic stands, metal table plates, or permanent vinyl banners, choosing between static and dynamic codes determines whether your printed assets can adapt over time:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Static PDF QR Code</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encodes the permanent link directly into the 2D pixel matrix. If your Google Drive URL changes, or if you rename your server file, the printed code breaks permanently and cannot be fixed without a complete reprinting run.
                  </p>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Dynamic PDF QR Code (Recommended)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encodes a permanent short redirect link (<code className="text-accent font-bold">qr-generator.online/r/menu</code>). Whenever you update your weekly specials, adjust beverage pricing, or release a new product catalog edition, you simply update the target URL in your dashboard. The physical table stands remain 100% functional.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3: Industry Use Cases */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Industry Applications for PDF QR Codes
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Restaurants & Wine Bars</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Display contactless table QR stands linking to your full food and cocktail PDF menu with allergy warnings and high-resolution food photography.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Real Estate Property Flyers</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Add PDF QR codes to yard signs and listing flyers to provide buyers with comprehensive architectural blueprints, HOA documentation, and floor plans.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Product Packaging Manuals</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Replace bulky multi-language printed instruction booklets with a single compact QR code linking to an interactive multilingual PDF user guide.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Medical & Pharmaceutical Inserts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provide patients and healthcare professionals with downloadable clinical dosage guidelines, safety datasheets, and prescribing documentation.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Academic & Research Posters</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Include QR codes in the bottom corner of scientific conference presentation posters to let attendees download full peer-reviewed research papers.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">B2B Trade Show Catalogs</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Eliminate heavy printed wholesale product binders by providing buyers with a scannable badge link to your complete wholesale price list.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4: Step-by-Step Hosting Tutorial */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Step-by-Step Tutorial: How to Host & Generate a PDF QR Code
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Upload PDF to Cloud Storage or Your Website</h3>
                    <p className="text-xs text-slate-600 mt-1">Upload your menu or brochure PDF to Google Drive, Dropbox, Microsoft OneDrive, or your WordPress/Shopify media library.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Set Share Permissions to "Public"</h3>
                    <p className="text-xs text-slate-600 mt-1">In Google Drive or Dropbox, ensure access is configured to <strong>"Anyone with the link can view"</strong> so customers never encounter login walls.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Paste Link & Customize Brand Colors</h3>
                    <p className="text-xs text-slate-600 mt-1">Paste the shareable URL into the generator field above, customize your brand palette, upload your restaurant or business logo, and download high-resolution print files.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 5: Comparison Table */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Digital PDF QR Code vs. Traditional Paper Menus & Brochures
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-3.5">Feature & Factor</th>
                      <th className="p-3.5 text-accent">PDF to QR Code Menu</th>
                      <th className="p-3.5">Physical Printed Paper Menu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Cost of Updating Items / Pricing</td>
                      <td className="p-3.5 text-accent font-semibold">$0 (Instant cloud update via Dynamic QR)</td>
                      <td className="p-3.5">$200–$1,500+ per complete reprint run</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Cleanliness & Hygiene</td>
                      <td className="p-3.5 text-accent font-semibold">100% Contactless on customer phone</td>
                      <td className="p-3.5">Requires sanitizing physical laminates</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Page Capacity & Imagery</td>
                      <td className="p-3.5 text-accent font-semibold">Unlimited pages with zoomable photos</td>
                      <td className="p-3.5">Constrained by physical booklet size</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Analytics & Engagement Tracking</td>
                      <td className="p-3.5 text-accent font-semibold">Live scan counts, times, and devices</td>
                      <td className="p-3.5">Zero tracking data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">PDF QR Code FAQ</h2>
                <p className="text-xs text-slate-500">Everything you need to know about creating PDF QR codes and digital menus.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {PDF_FAQS.map((faq, idx) => (
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
                {savedShortCode ? 'Dynamic PDF QR Created!' : 'Save Dynamic PDF QR Code'}
              </h3>
              <button onClick={() => { setShowDynamicSaveModal(false); setSavedShortCode(null); }} className="text-slate-500 hover:text-slate-600 p-1 rounded-lg">✕</button>
            </div>

            {savedShortCode ? (
              <div className="text-center space-y-4">
                <p className="text-xs text-slate-600">
                  Your PDF is now linked to a dynamic shortlink. You can change your PDF destination anytime from your dashboard!
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
                    value={docTitle}
                    onChange={(e) => setDocTitle(e.target.value)}
                    placeholder="e.g. Main Dining Menu"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target PDF URL</label>
                  <input type="text" disabled value={pdfUrl} className="w-full px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono truncate" />
                </div>
                <button
                  type="submit"
                  disabled={savingDynamic}
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white text-xs font-bold rounded-xl shadow-xs transition-colors disabled:opacity-50"
                >
                  {savingDynamic ? 'Creating Link...' : 'Create Dynamic PDF QR Code'}
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
        title="Create Account for Dynamic PDF QR"
        subtitle="Sign in or register to update your PDF document anytime without reprinting."
      />
    </div>
  );
};

export default PDFToQRPage;
