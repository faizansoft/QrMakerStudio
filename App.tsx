
import React, { useState, useRef, useEffect, useMemo } from 'react';
import QRCodeStyling, { Options, DrawType, Gradient } from 'qr-code-styling';
import { QRConfig, QRType, StylePreset, AIStyleSuggestion } from './types';
import { STYLE_PRESETS, ERROR_CORRECTION_LEVELS, DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES } from './constants';
import { getAIStyleSuggestion } from './services/geminiService';
import { Button } from './components/Button';
import { LogoUploader } from './components/LogoUploader';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const Modal: React.FC<{ title: string, isOpen: boolean, onClose: () => void, children: React.ReactNode }> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200">
        <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xl font-display font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8 prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium text-sm">
          {children}
        </div>
        <div className="p-8 border-t border-slate-50 flex justify-end">
          <Button onClick={onClose} size="sm" variant="secondary">Close</Button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const initialConfig: QRConfig = {
    value: 'https://qrstudiopro.app',
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
  const [history, setHistory] = useState<{value: string, timestamp: number}[]>([]);
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColor, setGradientColor] = useState('#6366f1');

  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);

  useEffect(() => {
    const saved = localStorage.getItem('qr_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

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
      width: 320,
      height: 320,
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
    qrCode.download({ name: `qr-studio-pro-${Date.now()}`, extension: format });
    addToast(`Successfully downloaded as ${format.toUpperCase()}`);
    
    const newHistory = [{ value: config.value, timestamp: Date.now() }, ...history.slice(0, 4)];
    setHistory(newHistory);
    localStorage.setItem('qr_history', JSON.stringify(newHistory));
  };

  const copyToClipboard = async () => {
    try {
      const blob = await qrCode.getRawData('png');
      if (blob) {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        addToast('QR Code copied to clipboard!');
      }
    } catch (err) {
      addToast('Failed to copy. Try downloading instead.', 'error');
    }
  };

  const applyAIStyle = async () => {
    if (!config.value) return;
    setIsAiLoading(true);
    setAiResult(null);
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
      addToast('AI Style applied successfully!');
    } catch (err) {
      addToast('AI suggestion failed. Please try again.', 'error');
    } finally { setIsAiLoading(false); }
  };

  const handleReset = () => {
    setConfig(initialConfig);
    setLogoSrc(null);
    setUseGradient(false);
    setAiResult(null);
    addToast('Configuration reset to defaults.', 'info');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* HEADER & NAVIGATION */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="qr-gradient w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100 ring-4 ring-white transition-transform group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-display font-black text-slate-900 tracking-tight leading-none">QR Maker <span className="text-indigo-600">Studio</span></h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Free QR Code Generator</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            {['how-to', 'benefits', 'faq'].map(section => (
              <button key={section} onClick={() => scrollToSection(section)} className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-all border-b-2 border-transparent hover:border-indigo-200 pb-1">{section.replace('-', ' ')}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
             <div className="px-5 py-2.5 bg-emerald-50 text-emerald-700 text-[11px] font-black uppercase tracking-[0.2em] rounded-full flex items-center gap-2 border-2 border-emerald-100 shadow-sm animate-pulse">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                No Signup Required
             </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* HERO SECTION */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex px-5 py-2 bg-indigo-50 text-indigo-700 text-[11px] font-black uppercase tracking-[0.4em] rounded-full border-2 border-indigo-100 mb-2">
            Free Qrcode Generator • Guest Mode Always Active
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Professional <br/><span className="text-transparent bg-clip-text qr-gradient">QR Code Generator</span>
          </h2>
          <p className="text-2xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed">
            The ultimate designer <span className="keyword-box text-sm">qrcode generator</span>. Create custom codes with logos, AI styles, and high-res vector exports. <span className="font-black text-indigo-600">Generate QR as a guest</span> with 100% privacy—no email, no account, no signup required.
          </p>
        </div>

        {/* GENERATOR GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden">
              <div className="flex bg-slate-50/80 border-b border-slate-100 p-3 gap-2">
                {(['content', 'pattern', 'corners', 'logo'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-4 text-[11px] font-black uppercase tracking-[0.25em] transition-all rounded-[2rem] ${
                      activeTab === tab ? 'text-indigo-600 bg-white shadow-md ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-12">
                {activeTab === 'content' && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
                    <div className="flex flex-wrap gap-3 p-2.5 bg-slate-100/50 rounded-3xl w-fit">
                      {(['url', 'text', 'email', 'phone', 'vcard'] as QRType[]).map(type => (
                        <button key={type} onClick={() => setActiveType(type)} className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${activeType === type ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>{type}</button>
                      ))}
                    </div>
                    <div className="relative group">
                      <textarea 
                        value={config.value} 
                        onChange={(e) => setConfig(prev => ({ ...prev, value: e.target.value }))} 
                        placeholder={`Paste your ${activeType} for the qrcode generator...`} 
                        className={`w-full h-56 p-10 rounded-[3.5rem] border-2 bg-white text-slate-900 placeholder:text-slate-200 focus:ring-[12px] outline-none transition-all resize-none text-2xl font-bold shadow-inner ${isValid ? 'border-slate-100 focus:ring-indigo-50/50 focus:border-indigo-400' : 'border-red-100 focus:ring-red-50/50 focus:border-red-400'}`}
                      />
                      <div className="absolute bottom-10 right-10 flex items-center gap-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full border-2 shadow-sm ${isValid ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                          {isValid ? 'Ready to Download' : 'Invalid Content'}
                        </span>
                      </div>
                    </div>

                    {aiResult && (
                      <div className="p-8 rounded-[3rem] bg-indigo-50 border-2 border-indigo-100 animate-in zoom-in-95 duration-500">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 bg-white px-3 py-1 rounded-full shadow-sm">AI Analysis</span>
                          <span className="text-sm font-black text-indigo-900">{aiResult.mood} Mood Applied</span>
                        </div>
                        <p className="text-sm text-indigo-700 font-medium leading-relaxed italic">
                          "{aiResult.description}"
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-50 gap-6">
                      <Button variant="ghost" size="lg" onClick={applyAIStyle} loading={isAiLoading} className="w-full sm:w-auto text-indigo-600 font-black tracking-widest text-[11px] uppercase hover:bg-indigo-50 px-10 rounded-3xl border-2 border-indigo-100 shadow-sm">
                        <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Use AI QR Maker Theme
                      </Button>
                      <button onClick={handleReset} className="text-[10px] font-black text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        Reset Studio
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'pattern' && (
                  <div className="space-y-12 animate-in fade-in duration-500">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {DOT_STYLES.map(style => (
                        <button key={style.value} onClick={() => setConfig(prev => ({ ...prev, dotType: style.value }))} className={`p-8 rounded-[3rem] border-2 text-left transition-all group ${config.dotType === style.value ? 'border-indigo-500 bg-indigo-50/50 shadow-xl' : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                          <span className={`text-[11px] font-black uppercase tracking-[0.25em] block mb-2 ${config.dotType === style.value ? 'text-indigo-600' : 'text-slate-400'}`}>{style.label}</span>
                          <p className="text-[10px] text-slate-400 leading-tight">Professional <br/>{style.label} Pattern</p>
                        </button>
                      ))}
                    </div>
                    
                    <div className="p-10 bg-slate-50/50 rounded-[3.5rem] border-2 border-slate-100 space-y-10 shadow-inner">
                       <div className="flex items-center justify-between">
                         <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3">
                            <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
                            QRcode Generator Branding
                         </h4>
                         <label className="flex items-center gap-3 cursor-pointer">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gradient Mode</span>
                            <div className={`w-12 h-6 rounded-full transition-colors relative ${useGradient ? 'bg-indigo-600' : 'bg-slate-200'}`} onClick={() => setUseGradient(!useGradient)}>
                              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${useGradient ? 'left-7' : 'left-1'}`}></div>
                            </div>
                         </label>
                       </div>
                       
                       <div className="grid sm:grid-cols-2 gap-10">
                          <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pattern Color {useGradient ? 'Start' : ''}</label>
                            <div className="flex gap-5 items-center p-5 bg-white rounded-3xl border-2 border-slate-100 focus-within:border-indigo-300 transition-all shadow-sm">
                              <input type="color" value={config.fgColor} onChange={(e) => setConfig(prev => ({ ...prev, fgColor: e.target.value }))} className="w-14 h-14 rounded-2xl cursor-pointer border-0 p-0 bg-transparent ring-2 ring-slate-100 hover:scale-105 transition-transform"/>
                              <input type="text" value={config.fgColor} onChange={(e) => setConfig(prev => ({ ...prev, fgColor: e.target.value }))} className="bg-transparent text-base font-mono font-bold uppercase outline-none flex-1 text-slate-700" />
                            </div>
                          </div>
                          
                          {useGradient && (
                            <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pattern Color End</label>
                              <div className="flex gap-5 items-center p-5 bg-white rounded-3xl border-2 border-slate-100 focus-within:border-indigo-300 transition-all shadow-sm">
                                <input type="color" value={gradientColor} onChange={(e) => setGradientColor(e.target.value)} className="w-14 h-14 rounded-2xl cursor-pointer border-0 p-0 bg-transparent ring-2 ring-slate-100 hover:scale-105 transition-transform"/>
                                <input type="text" value={gradientColor} onChange={(e) => setGradientColor(e.target.value)} className="bg-transparent text-base font-mono font-bold uppercase outline-none flex-1 text-slate-700" />
                              </div>
                            </div>
                          )}

                          <div className="space-y-4">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Background Fill</label>
                            <div className="flex gap-5 items-center p-5 bg-white rounded-3xl border-2 border-slate-100 focus-within:border-indigo-300 transition-all shadow-sm">
                              <input type="color" value={config.bgColor} onChange={(e) => setConfig(prev => ({ ...prev, bgColor: e.target.value }))} className="w-14 h-14 rounded-2xl cursor-pointer border-0 p-0 bg-transparent ring-2 ring-slate-100 hover:scale-105 transition-transform"/>
                              <input type="text" value={config.bgColor} onChange={(e) => setConfig(prev => ({ ...prev, bgColor: e.target.value }))} className="bg-transparent text-base font-mono font-bold uppercase outline-none flex-1 text-slate-700" />
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'corners' && (
                  <div className="grid sm:grid-cols-2 gap-16 animate-in fade-in duration-500">
                    <div className="space-y-8">
                      <label className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Outer Eye Style</label>
                      <div className="space-y-4">
                        {CORNER_SQUARE_STYLES.map(s => (
                          <button key={s.value} onClick={() => setConfig(prev => ({ ...prev, cornerSquareType: s.value }))} className={`w-full p-7 rounded-[2rem] border-2 text-left text-[12px] font-black uppercase tracking-widest transition-all ${config.cornerSquareType === s.value ? 'border-indigo-500 bg-indigo-50 shadow-xl text-indigo-700' : 'border-slate-50 hover:border-slate-200 text-slate-500 bg-slate-50/30'}`}>{s.label}</button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-8">
                      <label className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Inner Dot Style</label>
                      <div className="space-y-4">
                        {CORNER_DOT_STYLES.map(s => (
                          <button key={s.value} onClick={() => setConfig(prev => ({ ...prev, cornerDotType: s.value }))} className={`w-full p-7 rounded-[2rem] border-2 text-left text-[12px] font-black uppercase tracking-widest transition-all ${config.cornerDotType === s.value ? 'border-indigo-500 bg-indigo-50 shadow-xl text-indigo-700' : 'border-slate-50 hover:border-slate-200 text-slate-500 bg-slate-50/30'}`}>{s.label}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'logo' && (
                  <div className="space-y-12 animate-in fade-in duration-500">
                    <LogoUploader onUpload={setLogoSrc} currentLogo={logoSrc} />
                    <div className="p-10 rounded-[4rem] bg-indigo-950 text-white relative overflow-hidden shadow-2xl border-4 border-indigo-900/50">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[80px] -mr-10 -mt-10 rounded-full"></div>
                      <h4 className="text-[12px] font-black uppercase tracking-[0.4em] mb-6 text-indigo-400 flex items-center gap-3">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>
                         Corporate Identity
                      </h4>
                      <p className="text-base leading-relaxed text-indigo-100/90 font-medium tracking-tight">
                        Embed your brand into our <span className="text-white font-black italic">qrcode generator</span> logic. Level H error correction (30%) guarantees scannability even with complex icons. Best of all, <span className="underline decoration-indigo-500 decoration-4">no signup required</span> for logo integration.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* PREVIEW & DOWNLOAD ASIDE */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-10">
            <div className="bg-white p-14 rounded-[4.5rem] shadow-2xl border-2 border-slate-100 flex flex-col items-center group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-4 qr-gradient"></div>
              
              <div className="w-full flex justify-between items-center mb-10">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Verified Access</span>
                    <span className="text-sm font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                       Guest Status: Active
                    </span>
                 </div>
                 <button onClick={copyToClipboard} className="p-4 bg-slate-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-3xl transition-all border-2 border-slate-100 group/copy shadow-sm" title="Copy QR to Clipboard">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                 </button>
              </div>

              <div className="relative p-10 rounded-[4rem] bg-slate-50 shadow-inner group-hover:bg-slate-50/50 transition-colors">
                <div ref={qrRef} className="relative z-10 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white border-[12px] border-white ring-2 ring-slate-100" />
                <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full scale-50 group-hover:scale-110 transition-transform duration-1000"></div>
              </div>

              <div className="w-full mt-14 space-y-5">
                <Button onClick={() => handleDownload('png')} disabled={!isValid} className="w-full py-8 text-xl rounded-[2.5rem] shadow-indigo-200 shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] hover:-translate-y-2 transition-all">Download QR Code PNG</Button>
                <div className="grid grid-cols-2 gap-5">
                  <Button onClick={() => handleDownload('svg')} disabled={!isValid} variant="outline" className="w-full py-5 text-[11px] font-black tracking-[0.3em] border-2 border-slate-200 uppercase hover:bg-slate-50 rounded-3xl shadow-sm">High-Res SVG</Button>
                  <Button onClick={() => handleDownload('webp')} disabled={!isValid} variant="outline" className="w-full py-5 text-[11px] font-black tracking-[0.3em] border-2 border-slate-200 uppercase hover:bg-slate-50 rounded-3xl shadow-sm">WebP Image</Button>
                </div>
              </div>
              
              <p className="mt-10 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] text-center">Free QR Code Generator Pro <br/> No Registration Required</p>
            </div>
            
            <div className="p-10 bg-indigo-50 border-2 border-indigo-100 rounded-[3.5rem] flex items-center gap-8 shadow-sm">
               <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-indigo-600 shadow-md border-2 border-indigo-100 shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
               </div>
               <div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-indigo-900 leading-none">Security Guaranteed</h4>
                  <p className="text-[13px] text-indigo-700/80 font-bold leading-snug mt-2">Generate QR as a guest with 100% anonymity. No signup required for unlimited, professional-grade code generation.</p>
               </div>
            </div>

            {history.length > 0 && (
              <div className="p-10 bg-white border-2 border-slate-100 rounded-[3.5rem] shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-slate-400">Recent Studio Activity</h4>
                <div className="space-y-4">
                  {history.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setConfig(prev => ({ ...prev, value: item.value }))}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-slate-100 transition-colors text-left"
                    >
                      <span className="text-xs font-bold text-slate-600 truncate max-w-[200px]">{item.value}</span>
                      <span className="text-[9px] font-black uppercase text-slate-300 tracking-widest">{new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* AGGRESSIVE SEO CONTENT SECTION */}
        <article className="mt-48 seo-content max-w-6xl mx-auto border-t-2 border-slate-200 pt-32 pb-24">
          <div className="inline-block px-6 py-2 bg-slate-100 rounded-full text-[11px] font-black uppercase tracking-[0.5em] text-slate-600 mb-10 shadow-sm border border-slate-200">
             Official 2026 QRcode Generator Guide
          </div>
          
          <h2 id="how-to">The #1 Professional QR Code Generator & QRcode Generator Online</h2>
          <p>
            Looking for the most reliable <span className="keyword-box">qr code generator</span> on the internet? You've found it. Our platform is the definitive <span className="keyword-box">qrcode generator</span> designed specifically for users who value speed and design without the typical roadblocks. Our promise is simple: <span className="font-black text-indigo-600 italic underline decoration-indigo-200 decoration-8 underline-offset-4">no signup required</span>. Whether you are a business owner or a marketing professional, you can <span className="keyword-box">generate qr as a guest</span> in seconds and get high-resolution assets for free.
          </p>
          
          <h3>Why Use a No Signup QR Code Generator?</h3>
          <p>
            Most tools claiming to be a "free <span className="keyword-box">qrcode generator</span>" are actually lead-generation traps that force you to create an account before you can download your image. We provide a pure, friction-free experience where there is absolutely <span className="font-bold text-slate-900">no signup required</span>. We believe in providing the best <span className="keyword-box">qr code generator</span> utility that works for everyone, every time, with zero registration needed. This allows you to <span className="keyword-box">generate qr as a guest</span> for spontaneous marketing campaigns, one-time events, or permanent business signage.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-20">
             <div className="p-12 bg-white border-2 border-slate-100 rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 mb-8 shadow-sm">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/></svg>
                </div>
                <h4 className="font-black text-slate-900 mb-6 text-2xl tracking-tight">QR Code Generator Guest Access</h4>
                <p className="text-base text-slate-500 leading-relaxed">Our <span className="keyword-box">qrcode generator</span> prioritizes your data safety. By allowing you to <span className="keyword-box">generate qr as a guest</span>, we ensure that your destination URLs and brand assets remain completely anonymous and private.</p>
             </div>
             <div className="p-12 bg-white border-2 border-slate-100 rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 mb-8 shadow-sm">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17l.354-.354"/></svg>
                </div>
                <h4 className="font-black text-slate-900 mb-6 text-2xl tracking-tight">AI-Enhanced QRcode Design</h4>
                <p className="text-base text-slate-500 leading-relaxed">Even as a guest with <span className="keyword-box">no signup required</span>, you get access to our high-end styling engine. Customize every pixel of your <span className="keyword-box">qr code generator</span> output with custom shapes, gradients, and brand logos.</p>
             </div>
          </div>

          <h3>Advanced Capabilities of our QRcode Generator Suite</h3>
          <ul>
            <li><strong>No Signup Required Ever:</strong> We never ask for your email address to use our premium <span className="keyword-box text-sm">qr code generator</span>.</li>
            <li><strong>Generate QR as a Guest:</strong> Immediate, anonymous downloads of high-resolution vector and raster files.</li>
            <li><strong>Pro Branding Integration:</strong> Embed your corporate logo into the <span className="keyword-box text-sm">qrcode generator</span> structure without functional loss.</li>
            <li><strong>AI Intelligent Themes:</strong> Leverage Gemini AI to suggest the most scannable and beautiful styles for your <span className="keyword-box text-sm">qr code maker</span> project.</li>
            <li><strong>Print-Ready Exports:</strong> Get SVG vectors from our <span className="keyword-box text-sm">qrcode generator</span> suitable for billboards and signage.</li>
          </ul>

          <h2 id="benefits">The Ultimate Free QR Maker for Business & Personal Use</h2>
          <p>
            In a world where digital connectivity is paramount, having a trustworthy <span className="keyword-box">qr code generator</span> is critical. Our <span className="keyword-box">no signup required</span> model is designed to support the freedom of information. When you <span className="keyword-box">generate qr as a guest</span> here, you are using the most advanced <span className="keyword-box">qrcode generator</span> architecture available in 2026. Perfect for restaurant menus, real estate listings, Wi-Fi access, and professional portfolios.
          </p>
          
          <h2 id="faq">Expert FAQ: QR Code Generator & QRcode Maker</h2>
          <div className="space-y-6">
            {[
              { q: "Is this really a qrcode generator with no signup required?", a: "Yes. Every professional tool on our site is open to the public. You can generate qr as a guest and download unlimited high-resolution files without ever entering an email or creating a login." },
              { q: "Can I use this qr code generator for large-scale commercial printing?", a: "Absolutely. Our free qr maker provides high-resolution SVG and PNG exports that are standard for professional printing, advertising, and global brand campaigns." },
              { q: "What is the difference between a qrcode generator and a qr code maker?", a: "There is no functional difference—both terms describe tools that create machine-readable codes. Our qrcode generator is the industry leader in providing these tools for free without a signup requirement." }
            ].map((faq, i) => (
              <details key={i} className="p-10 bg-slate-50 rounded-[3rem] cursor-pointer group transition-all hover:bg-white border-2 border-transparent hover:border-slate-100 shadow-sm hover:shadow-xl">
                <summary className="font-black text-slate-900 list-none flex justify-between items-center text-xl tracking-tight leading-tight">
                    {faq.q}
                    <span className="text-indigo-600 transition-transform group-open:rotate-180 p-3 bg-white rounded-full shadow-md border border-slate-100">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"/></svg>
                    </span>
                </summary>
                <p className="mt-8 text-lg text-slate-500 leading-relaxed font-medium">{faq.a}</p>
              </details>
            ))}
          </div>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-20 text-sm">
          <div className="space-y-8">
            <h5 className="font-display font-black text-4xl tracking-tighter">QR Maker <span className="text-indigo-500">Studio</span></h5>
            <p className="text-slate-400 leading-relaxed text-base font-medium">The world's premier <span className="keyword-box text-[10px] bg-slate-900 text-indigo-400">qr code generator</span>. Fast, professional, and <span className="font-black text-white italic">no signup required</span>.</p>
          </div>
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-[0.5em] text-[11px] text-indigo-400">Guest Resources</h6>
            <ul className="space-y-5 text-slate-400 font-bold tracking-tight text-base">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Free QRcode Generator</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Generate QR as a Guest</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">No Login QR Maker</button></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-[0.5em] text-[11px] text-indigo-400">Global Standards</h6>
            <ul className="space-y-5 text-slate-400 font-bold tracking-tight text-base">
              <li><button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">Privacy & Data Shield</button></li>
              <li><button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">Usage License</button></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-[0.5em] text-[11px] text-indigo-400">Our Vow</h6>
            <p className="text-[13px] text-slate-500 leading-relaxed font-bold">Democratizing elite <span className="keyword-box text-[10px] bg-slate-900 text-indigo-400">qrcode generator</span> technology for every guest, with <span className="text-slate-300">no signup required</span>, forever.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-32 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] text-slate-600 text-center md:text-left">
          <span>© 2026 QR Code Generator Studio • No Signup Required</span>
          <div className="flex gap-10">
             <span>Release v4.5.0-ELITE</span>
             <span className="text-indigo-500">Generate QR as a Guest</span>
          </div>
        </div>
      </footer>

      {/* TOASTS */}
      <div className="fixed top-24 right-8 z-[200] flex flex-col gap-4 pointer-events-none">
        {toasts.map(toast => (
          <div key={toast.id} className={`p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-10 duration-300 pointer-events-auto border-l-8 ${
            toast.type === 'error' ? 'bg-red-50 text-red-800 border-red-500' : 
            toast.type === 'info' ? 'bg-sky-50 text-sky-800 border-sky-500' : 
            'bg-emerald-50 text-emerald-800 border-emerald-500'
          }`}>
            <span className="text-sm font-bold">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* MODALS */}
      <Modal title="Privacy Shield" isOpen={modalType === 'privacy'} onClose={() => setModalType(null)}>
        <p><strong>Private QRcode Generator Architecture:</strong> We do not track, store, or sell your data. Our "No Signup Required" philosophy is a hard commitment to user anonymity. When you generate QR as a guest, your links and branding never touch our persistent storage.</p>
      </Modal>

      <Modal title="Terms of Service" isOpen={modalType === 'terms'} onClose={() => setModalType(null)}>
        <p><strong>Universal QR Code Generator License:</strong> Every QR code generated as a guest is provided under an unrestricted, royalty-free license for commercial, industrial, and personal applications worldwide.</p>
      </Modal>
    </div>
  );
};

export default App;
