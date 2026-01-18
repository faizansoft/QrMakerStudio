import React, { useState, useRef, useEffect, useMemo } from 'react';
import QRCodeStyling, { Options, DrawType, Gradient } from 'qr-code-styling';
import { QRConfig, QRType, StylePreset, AIStyleSuggestion } from './types';
import { STYLE_PRESETS, ERROR_CORRECTION_LEVELS, DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, FAQ_ITEMS, GUIDE_STEPS } from './constants';
import { getAIStyleSuggestion } from './services/geminiService';
import { Button } from './components/Button';
import { LogoUploader } from './components/LogoUploader';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const AdPlaceholder: React.FC<{ slot: string; className?: string }> = ({ slot, className }) => (
  <div className={`bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-400 overflow-hidden min-h-[100px] ${className}`}>
    <span>Advertisement Space - {slot}</span>
    {/* Inserts AdSense code here */}
  </div>
);

const Modal: React.FC<{ title: string, isOpen: boolean, onClose: () => void, children: React.ReactNode }> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-slate-200">
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 md:py-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-display font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-6 md:p-8 text-slate-600 text-sm md:text-base leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const initialConfig: QRConfig = {
    value: 'https://shortnow.link',
    fgColor: '#1e293b',
    bgColor: '#ffffff',
    level: 'H',
    size: 512,
    includeMargin: true,
    dotType: 'square',
    cornerSquareType: 'square',
    cornerDotType: 'square',
    cornerSquareColor: '#1e293b',
    cornerDotColor: '#1e293b',
  };

  const [config, setConfig] = useState<QRConfig>(initialConfig);
  const [activeType, setActiveType] = useState<QRType>('url');
  const [activeTab, setActiveTab] = useState<'content' | 'pattern' | 'corners' | 'logo'>('content');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<AIStyleSuggestion | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColor, setGradientColor] = useState('#6366f1');

  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const isValid = useMemo(() => {
    if (!config.value.trim()) return false;
    if (activeType === 'url') {
      try { new URL(config.value); return true; } catch { return config.value.includes('.'); }
    }
    return true;
  }, [config.value, activeType]);

  useEffect(() => {
    const options: Options = {
      width: 300,
      height: 300,
      data: config.value || ' ',
      margin: config.includeMargin ? 15 : 5,
      qrOptions: { errorCorrectionLevel: config.level },
      image: logoSrc || undefined,
      dotsOptions: { 
        color: config.fgColor, 
        type: config.dotType,
        gradient: useGradient ? {
          type: 'linear',
          rotation: 45,
          colorStops: [
            { offset: 0, color: config.fgColor },
            { offset: 1, color: gradientColor }
          ]
        } as Gradient : undefined
      },
      backgroundOptions: { color: config.bgColor },
      imageOptions: { crossOrigin: 'anonymous', margin: 8, imageSize: 0.4, hideBackgroundDots: true },
      cornersSquareOptions: { type: config.cornerSquareType, color: config.cornerSquareColor },
      cornersDotOptions: { type: config.cornerDotType, color: config.cornerDotColor }
    };
    qrCode.update(options);
  }, [config, logoSrc, qrCode, useGradient, gradientColor]);

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
    }
  }, [qrCode]);

  const handleDownload = (format: 'png' | 'svg' | 'webp') => {
    qrCode.download({ name: `free-qr-code-${Date.now()}`, extension: format });
    addToast(`Success! Your QR is ready in ${format.toUpperCase()}`);
  };

  const copyToClipboard = async () => {
    try {
      const blob = await qrCode.getRawData('png');
      if (blob) {
        const item = new ClipboardItem({ 'image/png': blob as Blob });
        await navigator.clipboard.write([item]);
        addToast('QR Code copied to clipboard!');
      }
    } catch (err) {
      addToast('Failed to copy. Try downloading.', 'error');
    }
  };

  const applyAIStyle = async () => {
    if (!config.value) return;
    setIsAiLoading(true);
    try {
      const suggestion = await getAIStyleSuggestion(config.value);
      setAiResult(suggestion);
      setConfig(prev => ({
        ...prev,
        fgColor: suggestion.primaryColor,
        bgColor: suggestion.secondaryColor,
        cornerSquareColor: suggestion.cornerSquareColor,
        cornerDotColor: suggestion.cornerDotColor,
        dotType: suggestion.dotType,
        cornerSquareType: suggestion.cornerSquareType,
        cornerDotType: suggestion.cornerDotType,
      }));
      addToast('AI Style Applied!');
    } catch (err) {
      addToast('AI logic failed.', 'error');
    } finally { setIsAiLoading(false); }
  };

  const handleReset = () => {
    setConfig(initialConfig);
    setLogoSrc(null);
    setUseGradient(false);
    setAiResult(null);
    addToast('Configuration reset.', 'info');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 overflow-x-hidden">
      {/* NAVIGATION BAR */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
            </div>
            <span className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight leading-none">QR Maker Studio</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {['guide', 'features', 'faq'].map(section => (
              <button key={section} onClick={() => scrollToSection(section)} className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-all">{section}</button>
            ))}
          </nav>
          <Button size="sm" variant="primary" className="rounded-full px-5 md:px-7" onClick={() => scrollToSection('generator')}>Generate Free</Button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 md:py-16">
        
        {/* HERO SEO BLOCK */}
        <section className="text-center mb-8 md:mb-16 space-y-6">
          <div className="inline-flex px-4 py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-100 mb-2">
            The #1 Free QR Code Maker Online
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 tracking-tighter leading-[1.05]">
            Best Free <br/><span className="text-indigo-600">QR Code Generator</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Create professional, custom qrcodes free of charge with our elite qrcode generator. No signup, no expiration, and full logo support.
          </p>
        </section>

        {/* ADSENSE TOP LEADERBOARD */}
        <AdPlaceholder slot="Leaderboard_Top" className="w-full h-[90px] mb-12" />

        {/* GENERATOR CORE */}
        <div id="generator" className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* QR PREVIEW COLUMN - High Visibility on All Devices */}
          <aside className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl md:rounded-[3.5rem] shadow-xl border border-slate-200 flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-6">
                 <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Live Preview</span>
                    <span className="text-xs font-black uppercase text-indigo-600">Free qrcode maker</span>
                 </div>
                 <button onClick={copyToClipboard} className="p-3 bg-slate-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl transition-all border border-slate-100 shadow-sm" title="Copy to Clipboard">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                 </button>
              </div>

              {/* RESPONSIVE QR CONTAINER */}
              <div className="relative p-3 sm:p-6 md:p-8 rounded-3xl bg-slate-50 shadow-inner w-full flex justify-center border border-slate-100 overflow-hidden min-h-[250px] sm:min-h-[350px]">
                <div 
                  ref={qrRef} 
                  className="shadow-2xl rounded-2xl overflow-hidden bg-white p-2 sm:p-4 transition-all duration-300 ring-4 ring-white max-w-full flex justify-center items-center"
                  style={{ transform: 'scale(1)', transformOrigin: 'center' }}
                />
              </div>

              <div className="w-full mt-8 space-y-4">
                <Button onClick={() => handleDownload('png')} disabled={!isValid} size="lg" className="w-full py-5 rounded-2xl text-base font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:scale-[1.02]">Download PNG (Free)</Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={() => handleDownload('svg')} disabled={!isValid} variant="outline" className="py-4 text-[10px] font-black tracking-widest border border-slate-200 uppercase rounded-xl">SVG (Vector)</Button>
                  <Button onClick={() => handleDownload('webp')} disabled={!isValid} variant="outline" className="py-4 text-[10px] font-black tracking-widest border border-slate-200 uppercase rounded-xl">WebP Export</Button>
                </div>
              </div>

              {/* ADSENSE SIDEBAR AD */}
              <AdPlaceholder slot="Sidebar_Display" className="w-full h-[250px] mt-8" />
            </div>
          </aside>

          {/* CONTROLS COLUMN */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <section className="bg-white rounded-3xl md:rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden">
              <div className="flex overflow-x-auto no-scrollbar bg-slate-50/50 border-b border-slate-100 p-2 gap-1">
                {(['content', 'pattern', 'corners', 'logo'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap flex-1 px-4 py-3 md:py-4 text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all rounded-xl md:rounded-2xl ${
                      activeTab === tab ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6 md:p-12">
                {activeTab === 'content' && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="flex flex-wrap gap-2">
                      {(['url', 'text', 'email', 'phone', 'vcard'] as QRType[]).map(type => (
                        <button key={type} onClick={() => setActiveType(type)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeType === type ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>{type}</button>
                      ))}
                    </div>
                    <textarea 
                      value={config.value} 
                      onChange={(e) => setConfig(prev => ({ ...prev, value: e.target.value }))} 
                      placeholder={`Enter your ${activeType}...`} 
                      className="w-full min-h-[180px] p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border-2 border-slate-100 bg-white text-slate-900 placeholder:text-slate-300 focus:ring-8 focus:ring-indigo-50/50 focus:border-indigo-400 outline-none transition-all resize-none text-xl md:text-2xl font-bold"
                    />

                    {aiResult && (
                      <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
                        <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-2 block">AI Design Context</span>
                        <p className="text-sm text-indigo-700 font-medium italic leading-relaxed">"{aiResult.description}"</p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-50">
                      <Button variant="primary" size="lg" onClick={applyAIStyle} loading={isAiLoading} className="flex-1 rounded-2xl py-4 shadow-lg shadow-indigo-100">
                        ✨ Generate AI Theme
                      </Button>
                      <button onClick={handleReset} className="text-[10px] font-black text-slate-400 hover:text-red-500 uppercase tracking-widest px-6 h-12">Reset Form</button>
                    </div>
                  </div>
                )}

                {activeTab === 'pattern' && (
                  <div className="space-y-10 animate-in fade-in duration-500">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {DOT_STYLES.map(style => (
                        <button key={style.value} onClick={() => setConfig(prev => ({ ...prev, dotType: style.value }))} className={`p-4 md:p-6 rounded-2xl border-2 text-center transition-all ${config.dotType === style.value ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-slate-50 hover:border-slate-100'}`}>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${config.dotType === style.value ? 'text-indigo-600' : 'text-slate-400'}`}>{style.label}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex justify-between items-center">
                          Foreground Color
                          <span className="font-mono text-[9px] uppercase">{config.fgColor}</span>
                        </label>
                        <div className="flex gap-4 items-center p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                          <input type="color" value={config.fgColor} onChange={(e) => setConfig(prev => ({ ...prev, fgColor: e.target.value }))} className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 bg-transparent ring-1 ring-slate-100"/>
                          <div className="flex-1 text-xs font-bold text-slate-400">Main QR Pattern</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex justify-between items-center">
                          Background Color
                          <span className="font-mono text-[9px] uppercase">{config.bgColor}</span>
                        </label>
                        <div className="flex gap-4 items-center p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                          <input type="color" value={config.bgColor} onChange={(e) => setConfig(prev => ({ ...prev, bgColor: e.target.value }))} className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 bg-transparent ring-1 ring-slate-100"/>
                          <div className="flex-1 text-xs font-bold text-slate-400">Outer Canvas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'corners' && (
                  <div className="grid sm:grid-cols-2 gap-8 md:gap-12 animate-in fade-in duration-500">
                    <div className="space-y-8">
                      <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest block border-b pb-2">Corner Frames</label>
                      <div className="space-y-3">
                        {CORNER_SQUARE_STYLES.map(s => (
                          <button key={s.value} onClick={() => setConfig(prev => ({ ...prev, cornerSquareType: s.value }))} className={`w-full p-4 rounded-xl border-2 text-left text-[11px] font-black uppercase tracking-widest transition-all ${config.cornerSquareType === s.value ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md' : 'border-slate-50 text-slate-400 hover:border-slate-100'}`}>{s.label}</button>
                        ))}
                      </div>
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <label className="text-[9px] font-black text-slate-400 uppercase mb-3 block">Outer Accent Color</label>
                        <input type="color" value={config.cornerSquareColor} onChange={(e) => setConfig(prev => ({ ...prev, cornerSquareColor: e.target.value }))} className="w-full h-10 rounded-xl cursor-pointer" />
                      </div>
                    </div>
                    <div className="space-y-8">
                      <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest block border-b pb-2">Corner Eyes</label>
                      <div className="space-y-3">
                        {CORNER_DOT_STYLES.map(s => (
                          <button key={s.value} onClick={() => setConfig(prev => ({ ...prev, cornerDotType: s.value }))} className={`w-full p-4 rounded-xl border-2 text-left text-[11px] font-black uppercase tracking-widest transition-all ${config.cornerDotType === s.value ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md' : 'border-slate-50 text-slate-400 hover:border-slate-100'}`}>{s.label}</button>
                        ))}
                      </div>
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <label className="text-[9px] font-black text-slate-400 uppercase mb-3 block">Inner Accent Color</label>
                        <input type="color" value={config.cornerDotColor} onChange={(e) => setConfig(prev => ({ ...prev, cornerDotColor: e.target.value }))} className="w-full h-10 rounded-xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'logo' && (
                  <div className="space-y-10 animate-in fade-in duration-500">
                    <LogoUploader onUpload={setLogoSrc} currentLogo={logoSrc} />
                    <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-xl relative overflow-hidden">
                       <div className="relative z-10">
                          <h4 className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Branding Recommendation</h4>
                          <p className="text-slate-300 leading-relaxed font-medium">For the best results, use a high-contrast logo with a transparent background. We automatically apply 30% error correction (Level H) to ensure your QR code remains scannable even with a large central icon.</p>
                       </div>
                       <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* GUIDE SECTION - SEO GOLD */}
        <section id="guide" className="mt-24 md:mt-48 max-w-5xl mx-auto seo-box">
          <div className="text-center mb-16">
            <h2 className="border-none p-0 inline-block uppercase tracking-tighter">How to use our Free QR Code Maker (Guide)</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Follow these four simple steps to use the best qrcode generator on the web and download high-resolution files in seconds.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GUIDE_STEPS.map((step, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-3xl border border-slate-200 shadow-sm group hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-indigo-100">
                  {idx + 1}
                </div>
                <h3 className="m-0 text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed m-0">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADSENSE IN-CONTENT AD */}
        <AdPlaceholder slot="In-Content_Horizontal" className="w-full h-[200px] mt-24" />

        {/* FEATURES SECTION */}
        <section id="features" className="mt-24 md:mt-48 max-w-5xl mx-auto seo-box">
          <h2 className="uppercase tracking-tighter">Best QR Code Generator Features</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Unlimited Free Generation</h4>
              <p className="text-slate-600 leading-relaxed">Unlike other qrcode makers, we don't limit your usage. At QR Maker Studio, we provide 100% <span className="keyword-highlight">qr code maker free</span> services with no hidden limits. Forever.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Advanced Vector Exports</h4>
              <p className="text-slate-600 leading-relaxed">Our <span className="keyword-highlight">qrcode generator</span> supports SVG vector exports. This is essential for professional printing on large-scale marketing materials without any loss in clarity.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">AI-Enhanced Styling</h4>
              <p className="text-slate-600 leading-relaxed">Let our Gemini-powered engine suggest the perfect style. It analyzes your content to suggest a mood-matched color palette automatically for your <span className="keyword-highlight">qrcode maker free</span>.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Privacy First Approach</h4>
              <p className="text-slate-600 leading-relaxed">We don't track your scans or store your sensitive URLs. Your data is processed securely, making this the most trusted <span className="keyword-highlight">qrcode generator</span> available.</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="mt-24 md:mt-48 max-w-4xl mx-auto seo-box">
          <div className="text-center mb-16">
            <h2 className="border-none p-0 inline-block uppercase tracking-tighter">QR Code Generator FAQ</h2>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
                <h3 className="m-0 text-xl md:text-2xl font-bold text-slate-900 mb-4">{item.question}</h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed m-0">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADSENSE BOTTOM DISPLAY */}
        <AdPlaceholder slot="Bottom_Footer_Display" className="w-full h-[250px] mt-24" />
      </main>

      {/* FIXED FOOTER */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-slate-900 pb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
              </div>
              <span className="font-display font-black text-xl tracking-tighter">QR Maker Studio</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">The world's most accessible professional <span className="text-indigo-400 font-bold">qrcode maker free</span>. Designed for speed, privacy, and elite branding for creators.</p>
          </div>
          
          <div className="space-y-6">
            <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-indigo-400">Navigation</h6>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Generator Studio</button></li>
              <li><button onClick={() => scrollToSection('guide')} className="hover:text-white transition-colors">Usage Guide</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-indigo-400">Terms</h6>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">Privacy Shield</button></li>
              <li><button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">License Agreement</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-indigo-400">Status</h6>
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Servers Live</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <span>© 2026 QR Maker Studio — Professional qrcode generator</span>
          <div className="flex items-center gap-8">
            <span className="text-indigo-500">Free forever</span>
            <span>V4.6.3-SEO</span>
          </div>
        </div>
      </footer>

      {/* TOAST SYSTEM */}
      <div className="fixed bottom-6 right-4 md:right-8 z-[200] flex flex-col gap-3 pointer-events-none">
        {toasts.map(toast => (
          <div key={toast.id} className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right-4 duration-300 pointer-events-auto border-l-4 ${
            toast.type === 'error' ? 'bg-red-50 text-red-800 border-red-500' : 'bg-emerald-50 text-emerald-800 border-emerald-500'
          }`}>
            <span className="text-xs font-black uppercase tracking-widest">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* MODALS */}
      <Modal title="Privacy Shield" isOpen={modalType === 'privacy'} onClose={() => setModalType(null)}>
        <p className="mb-4">We do not store your data. All generation is done instantly in your browser. We do not use tracking cookies or session logs to identify users.</p>
        <p>Your privacy is absolute. No signup means no email harvesting or marketing tracking.</p>
      </Modal>

      <Modal title="License Agreement" isOpen={modalType === 'terms'} onClose={() => setModalType(null)}>
        <p className="mb-4">All QR codes generated here are free for lifetime use. We grant a worldwide, royalty-free, perpetual license for both personal and high-volume commercial use.</p>
        <p>Users are encouraged to test codes before printing large quantities.</p>
      </Modal>
    </div>
  );
};

export default App;