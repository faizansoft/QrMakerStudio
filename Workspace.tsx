
import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'content' | 'pattern' | 'corners' | 'logo'>('content');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiMood, setAiMood] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);
  const details = GENERATOR_DETAILS[type];

  // Update Page Metadata
  useEffect(() => {
    const pageTitle = `${details.title} | QR Generator Online`;
    const pageDesc = `${details.desc} Create high-resolution custom QR codes with QR Generator Online.`;
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);
  }, [type, details]);

  // Robust QR Update & Mount Effect
  useEffect(() => {
    if (!qrRef.current) return;

    // 1. Configure Options
    const options: Options = {
      width: 1000, 
      height: 1000,
      data: value || ' ',
      margin: styling.includeMargin ? 20 : 0,
      qrOptions: { errorCorrectionLevel: styling.level },
      image: logoSrc || undefined,
      dotsOptions: { color: styling.fgColor, type: styling.dotType },
      backgroundOptions: { color: styling.bgColor },
      imageOptions: { 
        crossOrigin: 'anonymous', 
        margin: 10, 
        imageSize: 0.4, 
        hideBackgroundDots: true,
        saveAsBlob: true
      },
      cornersSquareOptions: { 
        type: styling.cornerSquareType, 
        color: styling.cornerSquareColor 
      },
      cornersDotOptions: { 
        type: styling.cornerDotType, 
        color: styling.cornerDotColor 
      }
    };

    // 2. Initialize or Update
    if (qrRef.current.childNodes.length === 0) {
      qrCode.append(qrRef.current);
    }
    
    qrCode.update(options);

    // 3. Ensure Responsiveness in Preview
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';
      canvas.style.maxWidth = '100%';
    }
  }, [styling, logoSrc, value, qrCode]);

  const handleDownload = (format: 'png' | 'svg' | 'webp') => {
    qrCode.download({ name: `qr-${type}`, extension: format });
  };

  const applySmartStyle = async () => {
    setIsAiLoading(true);
    try {
      const suggestion = await getAIStyleSuggestion(value || "creative style");
      setStyling(prev => ({
        ...prev,
        fgColor: suggestion.primaryColor,
        bgColor: suggestion.secondaryColor,
        cornerSquareColor: suggestion.cornerSquareColor,
        cornerDotColor: suggestion.cornerDotColor,
        dotType: suggestion.dotType,
        cornerSquareType: suggestion.cornerSquareType,
        cornerDotType: suggestion.cornerDotType,
      }));
      setAiMood(suggestion.mood);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-24">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Explore All Tools
          </button>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            <span className="text-2xl" role="img" aria-label="icon">{details.icon}</span>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-slate-900 leading-none mb-1">{details.title}</h1>
              <span className="text-[9px] font-black uppercase text-indigo-500 tracking-tighter">Generator Session Active</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
            <div className="flex bg-slate-50/50 border-b border-slate-100 p-2 overflow-x-auto no-scrollbar">
              {(['content', 'pattern', 'corners', 'logo'] as const).map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)} 
                  className={`flex-1 min-w-[100px] py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${activeTab === tab ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="p-8 md:p-12 min-h-[500px]">
              {activeTab === 'content' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  {children}
                  <div className="pt-8 border-t border-slate-50 space-y-4">
                    <Button onClick={applySmartStyle} loading={isAiLoading} className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest font-black transition-transform active:scale-95">
                      {isAiLoading ? "Crafting Design..." : "✨ Generate Random Design"}
                    </Button>
                    {aiMood && <p className="text-center text-[10px] font-black uppercase text-indigo-500 tracking-widest animate-pulse">Theme: {aiMood}</p>}
                  </div>
                </div>
              )}
              
              {activeTab === 'pattern' && (
                <div className="space-y-12 animate-in fade-in duration-300">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Main Colors</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Pattern Color</span>
                        <input type="color" value={styling.fgColor} onChange={e => setStyling({...styling, fgColor: e.target.value})} className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Background</span>
                        <input type="color" value={styling.bgColor} onChange={e => setStyling({...styling, bgColor: e.target.value})} className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Dot Style</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {DOT_STYLES.map(s => (
                        <button key={s.value} onClick={() => setStyling({...styling, dotType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.dotType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'corners' && (
                <div className="space-y-12 animate-in fade-in duration-300">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Corner Colors</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Outer Frame</span>
                        <input type="color" value={styling.cornerSquareColor} onChange={e => setStyling({...styling, cornerSquareColor: e.target.value})} className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Inner Eye</span>
                        <input type="color" value={styling.cornerDotColor} onChange={e => setStyling({...styling, cornerDotColor: e.target.value})} className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Corner Frame Shape</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {CORNER_SQUARE_STYLES.map(s => (
                        <button key={s.value} onClick={() => setStyling({...styling, cornerSquareType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.cornerSquareType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Corner Eye Shape</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {CORNER_DOT_STYLES.map(s => (
                        <button key={s.value} onClick={() => setStyling({...styling, cornerDotType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.cornerDotType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'logo' && (
                <div className="animate-in fade-in duration-300">
                  <LogoUploader onUpload={setLogoSrc} currentLogo={logoSrc} />
                  <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100 text-slate-500 text-xs leading-relaxed">
                    <b>Pro Tip:</b> For best results, use a transparent PNG logo.
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200 text-center">
              <div className="relative p-6 bg-slate-50 rounded-[2.5rem] shadow-inner mb-8 flex flex-col justify-center items-center min-h-[460px] overflow-hidden group">
                <div 
                  className="relative p-6 transition-all duration-500 group-hover:scale-105 flex flex-col items-center"
                  style={{
                    backgroundColor: styling.bgColor,
                    borderRadius: '40px',
                    minWidth: '320px'
                  }}
                >
                  <div ref={qrRef} className="bg-white p-2 rounded-2xl w-[280px] aspect-square shadow-sm overflow-hidden" />
                </div>
              </div>
              
              <div className="space-y-4">
                <Button onClick={() => handleDownload('png')} className="w-full py-5 rounded-2xl shadow-lg shadow-indigo-100 text-[10px] font-black uppercase tracking-widest">
                  Download PNG
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" onClick={() => handleDownload('svg')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">
                    SVG (Print)
                  </Button>
                  <Button variant="outline" onClick={() => handleDownload('webp')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">
                    WebP (Web)
                  </Button>
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest pt-2">Professional Generator Export</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 space-y-16 border-t border-slate-200 mt-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Professional Branding Guide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Learn how to combine patterns and colors to create high-conversion QR codes with <strong>QR Generator Online</strong>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {details.guide.map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:border-indigo-100 transition-all">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-black text-sm mb-8 font-display">
                  {idx+1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.step}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
