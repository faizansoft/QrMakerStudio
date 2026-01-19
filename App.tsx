import React, { useState, useRef, useEffect, useMemo } from 'react';
import QRCodeStyling, { Options, Gradient } from 'qr-code-styling';
import { QRConfig, QRType } from './types';
import { DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, FAQ_ITEMS, GENERATOR_DETAILS } from './constants';
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
  // Navigation State
  const [view, setView] = useState<'home' | 'generator'>('home');
  const [activeType, setActiveType] = useState<QRType>('url');
  
  // Content States
  const [url, setUrl] = useState('https://shortnow.link');
  const [wifi, setWifi] = useState({ ssid: '', pass: '', enc: 'WPA' });
  const [vcard, setVcard] = useState({ firstName: '', lastName: '', mobile: '', email: '', org: '', job: '' });
  const [phone, setPhone] = useState('');
  const [sms, setSms] = useState({ num: '', msg: '' });
  const [email, setEmail] = useState({ to: '', sub: '', body: '' });
  const [text, setText] = useState('');

  // Styling State
  const [config, setConfig] = useState<QRConfig>({
    value: '',
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
  });

  const [activeTab, setActiveTab] = useState<'content' | 'pattern' | 'corners' | 'logo'>('content');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColor, setGradientColor] = useState('#6366f1');

  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);

  const computedValue = useMemo(() => {
    switch (activeType) {
      case 'url': return url || ' ';
      case 'wifi': return `WIFI:S:${wifi.ssid};T:${wifi.enc};P:${wifi.pass};;`;
      case 'vcard': return `BEGIN:VCARD\nVERSION:3.0\nN:${vcard.lastName};${vcard.firstName}\nFN:${vcard.firstName} ${vcard.lastName}\nORG:${vcard.org}\nTITLE:${vcard.job}\nTEL;TYPE=CELL:${vcard.mobile}\nEMAIL:${vcard.email}\nEND:VCARD`;
      case 'phone': return `tel:${phone}`;
      case 'sms': return `smsto:${sms.num}:${sms.msg}`;
      case 'email': return `mailto:${email.to}?subject=${encodeURIComponent(email.sub)}&body=${encodeURIComponent(email.body)}`;
      case 'text': return text || ' ';
      default: return '';
    }
  }, [activeType, url, wifi, vcard, phone, sms, email, text]);

  useEffect(() => {
    const options: Options = {
      width: 300,
      height: 300,
      data: computedValue,
      margin: config.includeMargin ? 15 : 5,
      qrOptions: { errorCorrectionLevel: config.level },
      image: logoSrc || undefined,
      dotsOptions: { 
        color: config.fgColor, 
        type: config.dotType,
        gradient: useGradient ? {
          type: 'linear',
          rotation: 45,
          colorStops: [{ offset: 0, color: config.fgColor }, { offset: 1, color: gradientColor }]
        } as Gradient : undefined
      },
      backgroundOptions: { color: config.bgColor },
      imageOptions: { crossOrigin: 'anonymous', margin: 8, imageSize: 0.4, hideBackgroundDots: true },
      cornersSquareOptions: { type: config.cornerSquareType, color: config.cornerSquareColor },
      cornersDotOptions: { type: config.cornerDotType, color: config.cornerDotColor }
    };
    qrCode.update(options);
  }, [config, logoSrc, qrCode, useGradient, gradientColor, computedValue]);

  useEffect(() => {
    if (view === 'generator' && qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
    }
  }, [qrCode, view]);

  const addToast = (message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type: 'success' }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const handleDownload = (format: 'png' | 'svg' | 'webp') => {
    qrCode.download({ name: `qr-${activeType}-${Date.now()}`, extension: format });
    addToast(`Exported as ${format.toUpperCase()}!`);
  };

  const applySmartStyle = () => {
    setIsAiLoading(true);
    setTimeout(() => {
      let primary = '#6366f1';
      let accent = '#4f46e5';
      let dot: any = 'square';

      if (activeType === 'wifi') { primary = '#0ea5e9'; accent = '#0284c7'; dot = 'dots'; }
      else if (activeType === 'vcard') { primary = '#1e293b'; accent = '#475569'; dot = 'classy'; }
      else if (activeType === 'sms' || activeType === 'phone') { primary = '#10b981'; accent = '#059669'; dot = 'rounded'; }
      else if (activeType === 'email') { primary = '#f43f5e'; accent = '#e11d48'; dot = 'extra-rounded'; }

      const cSquare = CORNER_SQUARE_STYLES[Math.floor(Math.random() * CORNER_SQUARE_STYLES.length)].value;
      const cDot = CORNER_DOT_STYLES[Math.floor(Math.random() * CORNER_DOT_STYLES.length)].value;

      setConfig(prev => ({ ...prev, fgColor: primary, cornerSquareColor: primary, cornerDotColor: accent, dotType: dot, cornerSquareType: cSquare, cornerDotType: cDot }));
      setIsAiLoading(false);
      addToast('Style Optimized!');
    }, 400);
  };

  const openGenerator = (type: QRType) => {
    setActiveType(type);
    setView('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center max-w-3xl mx-auto space-y-6">
         <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-100">Premium QR Suite</span>
         <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9]">Select Your <span className="text-indigo-600">Tool</span></h1>
         <p className="text-xl text-slate-500 font-medium">Choose from our suite of specialized QR generators. Each tool is built for high-performance scanning and full brand customization.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {(Object.keys(GENERATOR_DETAILS) as QRType[]).map(type => {
          const details = GENERATOR_DETAILS[type];
          return (
            <div 
              key={type} 
              onClick={() => openGenerator(type)}
              className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-indigo-50 transition-transform">
                  {details.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{details.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{details.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                  Open Generator
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderGenerator = () => {
    const details = GENERATOR_DETAILS[activeType];
    return (
      <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
        {/* Generator Navigation */}
        <div className="flex items-center justify-between">
           <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
              Back to Tools
           </button>
           <div className="flex items-center gap-3">
              <span className="text-2xl">{details.icon}</span>
              <h2 className="text-xl font-bold text-slate-900">{details.title}</h2>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Editor Sidebar */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="flex bg-slate-50/50 border-b border-slate-100 p-2">
              {(['content', 'pattern', 'corners', 'logo'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${
                    activeTab === tab ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="p-8 md:p-12">
               {activeTab === 'content' && (
                 <div className="space-y-8 animate-in fade-in duration-300">
                    {/* Specialized Forms */}
                    {activeType === 'url' && <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://your-link.com" className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl" />}
                    {activeType === 'wifi' && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" value={wifi.ssid} onChange={e => setWifi({...wifi, ssid: e.target.value})} placeholder="SSID (Name)" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100" />
                        <input type="text" value={wifi.pass} onChange={e => setWifi({...wifi, pass: e.target.value})} placeholder="Password" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100" />
                        <select value={wifi.enc} onChange={e => setWifi({...wifi, enc: e.target.value})} className="col-span-full w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold">
                           <option value="WPA">WPA / WPA2 (Recommended)</option>
                           <option value="WEP">WEP</option>
                           <option value="nopass">Open (No Password)</option>
                        </select>
                      </div>
                    )}
                    {activeType === 'vcard' && (
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="First Name" value={vcard.firstName} onChange={e => setVcard({...vcard, firstName: e.target.value})} className="p-4 rounded-xl bg-slate-50 border border-slate-100" />
                          <input type="text" placeholder="Last Name" value={vcard.lastName} onChange={e => setVcard({...vcard, lastName: e.target.value})} className="p-4 rounded-xl bg-slate-50 border border-slate-100" />
                          <input type="text" placeholder="Mobile" value={vcard.mobile} onChange={e => setVcard({...vcard, mobile: e.target.value})} className="col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-100" />
                          <input type="text" placeholder="Email" value={vcard.email} onChange={e => setVcard({...vcard, email: e.target.value})} className="col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-100" />
                       </div>
                    )}
                    {activeType === 'phone' && <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 234 567 890" className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl" />}
                    {activeType === 'text' && <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type your text content here..." className="w-full h-48 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold resize-none" />}
                    {activeType === 'sms' && (
                      <div className="space-y-4">
                        <input type="tel" value={sms.num} onChange={e => setSms({...sms, num: e.target.value})} placeholder="Recipient Number" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100" />
                        <textarea value={sms.msg} onChange={e => setSms({...sms, msg: e.target.value})} placeholder="Message body..." className="w-full h-32 p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none resize-none" />
                      </div>
                    )}
                    {activeType === 'email' && (
                      <div className="space-y-4">
                        <input type="email" value={email.to} onChange={e => setEmail({...email, to: e.target.value})} placeholder="To (Recipient)" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100" />
                        <input type="text" value={email.sub} onChange={e => setEmail({...email, sub: e.target.value})} placeholder="Subject" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100" />
                        <textarea value={email.body} onChange={e => setEmail({...email, body: e.target.value})} placeholder="Email body..." className="w-full h-32 p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none resize-none" />
                      </div>
                    )}

                    <div className="pt-8 border-t border-slate-100">
                      <Button onClick={applySmartStyle} loading={isAiLoading} className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest font-black">✨ Match Matching Style</Button>
                    </div>
                 </div>
               )}

               {activeTab === 'pattern' && (
                  <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                    <div className="space-y-6">
                       <label className="text-[10px] font-black uppercase text-slate-400">Dot Patterns</label>
                       <div className="grid grid-cols-2 gap-3">
                          {DOT_STYLES.map(s => (
                            <button key={s.value} onClick={() => setConfig({...config, dotType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${config.dotType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>{s.label}</button>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-6">
                       <label className="text-[10px] font-black uppercase text-slate-400">Colors</label>
                       <div className="space-y-4">
                          <input type="color" value={config.fgColor} onChange={e => setConfig({...config, fgColor: e.target.value})} className="w-full h-14 rounded-2xl cursor-pointer" />
                          <div className="flex gap-2 text-[9px] font-black uppercase text-slate-400 tracking-widest">
                             Hex: <span className="text-slate-900">{config.fgColor}</span>
                          </div>
                       </div>
                    </div>
                  </div>
               )}

               {activeTab === 'corners' && (
                  <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-slate-400">Outer Frame</label>
                      <div className="grid grid-cols-1 gap-2">
                         {CORNER_SQUARE_STYLES.map(s => (
                           <button key={s.value} onClick={() => setConfig({...config, cornerSquareType: s.value})} className={`p-4 rounded-xl border-2 text-[10px] font-bold ${config.cornerSquareType === s.value ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}>{s.label}</button>
                         ))}
                      </div>
                      <input type="color" value={config.cornerSquareColor} onChange={e => setConfig({...config, cornerSquareColor: e.target.value})} className="w-full h-10 rounded-xl cursor-pointer" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-slate-400">Inner Eye</label>
                      <div className="grid grid-cols-1 gap-2">
                         {CORNER_DOT_STYLES.map(s => (
                           <button key={s.value} onClick={() => setConfig({...config, cornerDotType: s.value})} className={`p-4 rounded-xl border-2 text-[10px] font-bold ${config.cornerDotType === s.value ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}>{s.label}</button>
                         ))}
                      </div>
                      <input type="color" value={config.cornerDotColor} onChange={e => setConfig({...config, cornerDotColor: e.target.value})} className="w-full h-10 rounded-xl cursor-pointer" />
                    </div>
                  </div>
               )}

               {activeTab === 'logo' && <LogoUploader onUpload={setLogoSrc} currentLogo={logoSrc} />}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200 text-center">
                <div className="relative p-6 bg-slate-50 rounded-[2rem] shadow-inner mb-8 flex justify-center items-center min-h-[300px]">
                   <div ref={qrRef} className="bg-white p-4 rounded-3xl shadow-2xl transition-transform hover:scale-105" />
                </div>
                <div className="space-y-4">
                   <Button onClick={() => handleDownload('png')} className="w-full py-5 rounded-2xl shadow-lg shadow-indigo-100 text-[10px] font-black uppercase tracking-widest">Download HD PNG</Button>
                   <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" onClick={() => handleDownload('svg')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">Vector SVG</Button>
                      <Button variant="outline" onClick={() => handleDownload('webp')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">WebP</Button>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Specialized Detailed Guide */}
        <div className="pt-24 space-y-12">
           <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight text-center">How to use {details.title}</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {details.guide.map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                   <div className="relative z-10">
                      <div className="text-4xl font-black text-indigo-500/20 mb-6 font-display">0{idx+1}</div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{item.step}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{item.detail}</p>
                   </div>
                   <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100">
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg></div>
            <span className="text-xl font-display font-black text-slate-900 tracking-tight">QR Studio Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
             <button onClick={() => setView('home')} className="text-[10px] font-black uppercase text-slate-400 hover:text-indigo-600 tracking-widest">Studio Tools</button>
             <button onClick={() => setModalType('privacy')} className="text-[10px] font-black uppercase text-slate-400 hover:text-indigo-600 tracking-widest">Privacy</button>
          </nav>
          <Button size="sm" variant="primary" className="rounded-full px-6" onClick={() => { if(view==='home') openGenerator('url'); else window.scrollTo({top:0, behavior:'smooth'}) }}>{view === 'home' ? 'Start Creating' : 'Go Top'}</Button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-24">
        {view === 'home' ? renderHome() : renderGenerator()}

        {/* Shared FAQ Section (Visible on all pages for SEO) */}
        <section className="mt-48 max-w-4xl mx-auto space-y-12">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center tracking-tight uppercase">Studio Intelligence FAQ</h2>
           <div className="grid gap-4">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-2">{item.question}</h4>
                   <p className="text-slate-500 leading-relaxed text-sm">{item.answer}</p>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 border-b border-slate-900 pb-20">
          <div className="col-span-2 space-y-8">
             <div className="flex items-center gap-4">
                <div className="qr-gradient w-8 h-8 rounded-lg" />
                <span className="font-display font-black text-2xl tracking-tight">QR Studio Pro</span>
             </div>
             <p className="text-slate-500 max-w-sm leading-relaxed">The #1 Professional <span className="text-indigo-400">qr code maker free</span> platform. Built for designers, brands, and enterprise teams who demand excellence without the price tag.</p>
          </div>
          <div className="space-y-6">
             <h6 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Tools</h6>
             <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => openGenerator('url')} className="hover:text-white transition-colors">URL Generator</button></li>
                <li><button onClick={() => openGenerator('wifi')} className="hover:text-white transition-colors">WiFi Access</button></li>
                <li><button onClick={() => openGenerator('vcard')} className="hover:text-white transition-colors">Digital vCard</button></li>
             </ul>
          </div>
          <div className="space-y-6">
             <h6 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Legal</h6>
             <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">Privacy Shield</button></li>
                <li><button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">Studio License</button></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-600">
           <span>© 2026 QR Studio Pro — Global Edition</span>
           <div className="flex gap-8">
              <span className="text-indigo-500">Servers 100% Online</span>
              <span>v6.1.0-STABLE</span>
           </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-3">
        {toasts.map(t => (
          <div key={t.id} className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right duration-300 font-black text-[9px] uppercase tracking-widest border-l-4 border-indigo-500">
            {t.message}
          </div>
        ))}
      </div>

      <Modal title="Privacy Shield" isOpen={modalType === 'privacy'} onClose={() => setModalType(null)}>
        <p className="mb-4 font-bold text-slate-900">Your privacy is non-negotiable.</p>
        <p>This generator processes all data locally in your browser. We never transmit your sensitive WiFi passwords, contact details, or private text to any server. No cookies, no tracking, no signup.</p>
      </Modal>

      <Modal title="Studio License" isOpen={modalType === 'terms'} onClose={() => setModalType(null)}>
        <p className="mb-4">Professional Use License included.</p>
        <p>You are granted an irrevocable, worldwide, perpetual license to use the QR codes generated on this platform for any personal or commercial project. No attribution required.</p>
      </Modal>
    </div>
  );
};

export default App;