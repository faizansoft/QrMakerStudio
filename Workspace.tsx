import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import QRCodeStyling, { Options } from 'qr-code-styling';
import { QRConfig, QRType } from './types';
import { DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, GENERATOR_DETAILS } from './constants';
import { Button } from './components/Button';
import { LogoUploader } from './components/LogoUploader';
import { getAIStyleSuggestion } from './services/geminiService';

interface WorkspaceProps {
  type: QRType;
  value: string;
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
  children: React.ReactNode; 
}

const Workspace: React.FC<WorkspaceProps> = ({ type, value, styling, setStyling, logoSrc, setLogoSrc, children }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'pattern' | 'corners' | 'logo'>('content');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiMood, setAiMood] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);
  const details = GENERATOR_DETAILS[type];

  const typeIcons: Record<QRType, React.ReactNode> = {
    url: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />,
    wifi: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />,
    vcard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    sms: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
    email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    text: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    event: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    location: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
    crypto: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    facebook: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
    whatsapp: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    googleform: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  };

  useEffect(() => {
    if (!qrRef.current) return;
    const options: Options = {
      width: 1000, 
      height: 1000,
      data: value || ' ',
      margin: styling.includeMargin ? 20 : 0,
      qrOptions: { errorCorrectionLevel: styling.level },
      image: logoSrc || undefined,
      dotsOptions: { color: styling.fgColor, type: styling.dotType },
      backgroundOptions: { color: styling.bgColor },
      imageOptions: { crossOrigin: 'anonymous', margin: 10, imageSize: 0.4, hideBackgroundDots: true, saveAsBlob: true },
      cornersSquareOptions: { type: styling.cornerSquareType, color: styling.cornerSquareColor },
      cornersDotOptions: { type: styling.cornerDotType, color: styling.cornerDotColor }
    };
    if (qrRef.current.childNodes.length === 0) qrCode.append(qrRef.current);
    qrCode.update(options);
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) { canvas.style.width = '100%'; canvas.style.height = '100%'; canvas.style.display = 'block'; canvas.style.maxWidth = '100%'; }
  }, [styling, logoSrc, value, qrCode]);

  const handleDownload = (format: 'png' | 'svg' | 'webp') => qrCode.download({ name: `qr-${type}`, extension: format });

  const applySmartStyle = async () => {
    setIsAiLoading(true);
    try {
      const suggestion = await getAIStyleSuggestion(value || "creative style");
      setStyling(prev => ({ ...prev, fgColor: suggestion.primaryColor, bgColor: suggestion.secondaryColor, cornerSquareColor: suggestion.cornerSquareColor, cornerDotColor: suggestion.cornerDotColor, dotType: suggestion.dotType, cornerSquareType: suggestion.cornerSquareType, cornerDotType: suggestion.cornerDotType }));
      setAiMood(suggestion.mood);
    } catch (err) { console.error(err); } finally { setIsAiLoading(false); }
  };

  return (
    <div className="animate-in pb-24">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Explore All Tools
          </Link>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">{typeIcons[type]}</svg></div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-slate-900 leading-none mb-1">{details.title}</h1>
              <span className="text-[9px] font-black uppercase text-indigo-500 tracking-tighter">Generator Active</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex bg-slate-50/50 border-b border-slate-100 p-2 overflow-x-auto no-scrollbar">
              {(['content', 'pattern', 'corners', 'logo'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} aria-label={`Switch to ${tab} settings`} className={`flex-1 min-w-[80px] py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${activeTab === tab ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'}`}>{tab}</button>
              ))}
            </div>
            <div className="p-8 md:p-12 min-h-[400px]">
              {activeTab === 'content' && <div className="space-y-8 animate-in">{children}<div className="pt-8 border-t border-slate-50 space-y-4"><Button onClick={applySmartStyle} loading={isAiLoading} aria-label="Generate AI suggested style" className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest font-black transition-transform active:scale-95">{isAiLoading ? "Crafting Style..." : "Get Random Design"}</Button>{aiMood && <p className="text-center text-[10px] font-black uppercase text-indigo-500 tracking-widest animate-pulse">Style Theme: {aiMood}</p>}</div></div>}
              {activeTab === 'pattern' && <div className="space-y-12 animate-in"><div className="space-y-6"><label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Main Colors</label><div className="grid md:grid-cols-2 gap-4"><div><span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Pattern Color</span><input type="color" value={styling.fgColor} onChange={e => setStyling({...styling, fgColor: e.target.value})} aria-label="Pick pattern color" className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" /></div><div><span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Background</span><input type="color" value={styling.bgColor} onChange={e => setStyling({...styling, bgColor: e.target.value})} aria-label="Pick background color" className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" /></div></div></div><div className="space-y-6"><label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Dot Style</label><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{DOT_STYLES.map(s => (<button key={s.value} onClick={() => setStyling({...styling, dotType: s.value})} aria-label={`Apply ${s.label} dot style`} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.dotType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>{s.label}</button>))}</div></div></div>}
              {activeTab === 'corners' && <div className="space-y-12 animate-in"><div className="space-y-6"><label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Corner Colors</label><div className="grid md:grid-cols-2 gap-4"><div><span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Outer Frame</span><input type="color" value={styling.cornerSquareColor} onChange={e => setStyling({...styling, cornerSquareColor: e.target.value})} aria-label="Pick outer corner color" className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" /></div><div><span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Inner Eye</span><input type="color" value={styling.cornerDotColor} onChange={e => setStyling({...styling, cornerDotColor: e.target.value})} aria-label="Pick inner corner color" className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" /></div></div></div><div className="space-y-6"><label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Corner Shapes</label><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{CORNER_SQUARE_STYLES.map(s => (<button key={s.value} onClick={() => setStyling({...styling, cornerSquareType: s.value})} aria-label={`Apply ${s.label} frame shape`} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.cornerSquareType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>{s.label}</button>))}</div></div></div>}
              {activeTab === 'logo' && <div className="animate-in"><LogoUploader onUpload={setLogoSrc} currentLogo={logoSrc} /><div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100 text-slate-500 text-xs leading-relaxed"><b>Design Tip:</b> Transparent PNG logos work best. High error correction is automatically applied for scan reliability.</div></div>}
            </div>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-24 order-first lg:order-last">
            <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border border-slate-200 text-center">
              <div className="relative p-4 bg-slate-50 rounded-[2.5rem] mb-8 flex flex-col justify-center items-center min-h-[320px] lg:min-h-[420px] overflow-hidden group">
                <div className="relative p-4 transition-all duration-500 group-hover:scale-105 flex flex-col items-center" style={{ backgroundColor: styling.bgColor, borderRadius: '40px', minWidth: '240px' }}><div ref={qrRef} className="bg-white p-2 rounded-2xl w-[200px] lg:w-[260px] aspect-square shadow-sm overflow-hidden" /></div>
              </div>
              <div className="space-y-3">
                <Button onClick={() => handleDownload('png')} aria-label="Download QR as PNG" className="w-full py-4 rounded-2xl shadow-lg text-[10px] font-black uppercase tracking-widest">Download PNG</Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" onClick={() => handleDownload('svg')} aria-label="Download QR as SVG" className="text-[9px] font-black uppercase py-3 rounded-xl tracking-widest">SVG (Print)</Button>
                  <Button variant="outline" onClick={() => handleDownload('webp')} aria-label="Download QR as WebP" className="text-[9px] font-black uppercase py-3 rounded-xl tracking-widest">WebP (Web)</Button>
                </div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest pt-2">Standard Static QR Export</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24 space-y-16 border-t border-slate-200 mt-24">
          <div className="text-center space-y-4"><h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">Professional Standards</h2><p className="text-slate-500 max-w-2xl mx-auto">Ensuring your QR assets perform perfectly in the real world.</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {details.guide.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all"><div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-black text-sm mb-6 font-display">{idx+1}</div><h3 className="text-xl font-bold text-slate-900 mb-3">{item.step}</h3><p className="text-slate-500 leading-relaxed font-medium text-sm">{item.detail}</p></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Workspace;