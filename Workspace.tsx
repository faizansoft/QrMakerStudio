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

  useEffect(() => {
    const options: Options = {
      width: 400,
      height: 400,
      data: value || ' ',
      margin: styling.includeMargin ? 15 : 5,
      qrOptions: { errorCorrectionLevel: styling.level },
      image: logoSrc || undefined,
      dotsOptions: { color: styling.fgColor, type: styling.dotType },
      backgroundOptions: { color: styling.bgColor },
      imageOptions: { crossOrigin: 'anonymous', margin: 8, imageSize: 0.4, hideBackgroundDots: true },
      cornersSquareOptions: { type: styling.cornerSquareType, color: styling.cornerSquareColor },
      cornersDotOptions: { type: styling.cornerDotType, color: styling.cornerDotColor }
    };
    qrCode.update(options);
  }, [styling, logoSrc, qrCode, value]);

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
    }
  }, [qrCode]);

  const handleDownload = (format: 'png' | 'svg' | 'webp') => {
    qrCode.download({ name: `qr-${type}-${Date.now()}`, extension: format });
  };

  const applySmartStyle = async () => {
    if (!value || value.length < 3) return;
    setIsAiLoading(true);
    try {
      const suggestion = await getAIStyleSuggestion(value);
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
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Explore All Tools
          </button>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            <span className="text-2xl">{details.icon}</span>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-slate-900 leading-none mb-1">{details.title}</h2>
              <span className="text-[9px] font-black uppercase text-indigo-500 tracking-tighter">Studio Session Active</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Panel: Editing Studio */}
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
                    <Button 
                      onClick={applySmartStyle} 
                      loading={isAiLoading} 
                      className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest font-black transition-transform active:scale-95"
                    >
                      {isAiLoading ? "Analyzing Brand..." : "✨ AI Stylist: Perfect Color Match"}
                    </Button>
                    {aiMood && (
                      <p className="text-center text-[10px] font-black uppercase text-indigo-500 tracking-widest animate-pulse">Theme: {aiMood}</p>
                    )}
                  </div>
                </div>
              )}
              {activeTab === 'pattern' && (
                <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Dot Style</label>
                    <div className="grid grid-cols-2 gap-3">
                      {DOT_STYLES.map(s => (
                        <button key={s.value} onClick={() => setStyling({...styling, dotType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.dotType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Primary Color</label>
                    <div className="space-y-4">
                      <input type="color" value={styling.fgColor} onChange={e => setStyling({...styling, fgColor: e.target.value})} className="w-full h-24 rounded-3xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                      <div className="grid grid-cols-5 gap-2">
                        {['#000000', '#6366f1', '#10b981', '#f59e0b', '#ef4444'].map(c => (
                          <button key={c} onClick={() => setStyling({...styling, fgColor: c})} className="w-8 h-8 rounded-full border border-white shadow-sm" style={{backgroundColor: c}} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'corners' && (
                <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Outer Frame</label>
                    <div className="grid gap-2">
                      {CORNER_SQUARE_STYLES.map(s => (
                        <button key={s.value} onClick={() => setStyling({...styling, cornerSquareType: s.value})} className={`p-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all ${styling.cornerSquareType === s.value ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Inner Eye</label>
                    <div className="grid gap-2">
                      {CORNER_DOT_STYLES.map(s => (
                        <button key={s.value} onClick={() => setStyling({...styling, cornerDotType: s.value})} className={`p-4 rounded-xl border-2 text-[10px] font-black uppercase tracking-widest transition-all ${styling.cornerDotType === s.value ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}>
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
                    <b>Pro Tip:</b> For best results, use a transparent PNG logo and set the Error Correction to "High" in the Advanced settings.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Live Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200 text-center">
              <div className="relative p-8 bg-slate-50 rounded-[2.5rem] shadow-inner mb-8 flex justify-center items-center min-h-[360px] overflow-hidden group">
                <div ref={qrRef} className="bg-white p-4 rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-all pointer-events-none" />
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => handleDownload('png')} 
                  className="w-full py-5 rounded-2xl shadow-lg shadow-indigo-100 text-[10px] font-black uppercase tracking-widest"
                >
                  Download High-Resolution PNG
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" onClick={() => handleDownload('svg')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">
                    Vector SVG (Print)
                  </Button>
                  <Button variant="outline" onClick={() => handleDownload('webp')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">
                    WebP (Optimized)
                  </Button>
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest pt-2">No expiration • Unlimited scans • Free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed SEO Guide Section */}
        <div className="pt-24 space-y-16 border-t border-slate-200 mt-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">How to Build a Perfect {details.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Follow our professional workspace guide to ensure your custom QR code works flawlessly in every environment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {details.guide.map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:border-indigo-100 transition-all">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-black text-sm mb-8 font-display">
                  {idx+1}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.step}</h4>
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