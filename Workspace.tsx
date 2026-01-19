import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCodeStyling, { Options } from 'qr-code-styling';
import { QRConfig, QRType, FrameType } from './types';
import { DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, GENERATOR_DETAILS, FRAME_STYLES } from './constants';
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
  const [activeTab, setActiveTab] = useState<'content' | 'pattern' | 'frames' | 'logo'>('content');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiMood, setAiMood] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const compositeRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);
  const details = GENERATOR_DETAILS[type];

  useEffect(() => {
    const pageTitle = `${details.title} | QR Studio Pro`;
    const pageDesc = `${details.desc} Create high-resolution custom QR codes for ${type} with your own logo.`;
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);
  }, [type, details]);

  useEffect(() => {
    const options: Options = {
      width: 800, // Higher res internally for compositing
      height: 800,
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
      // Ensure the rendered canvas/svg is responsive in the preview
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.maxWidth = '300px';
      }
    }
  }, [qrCode]);

  // HIGH-RES DOWNLOAD ENGINE
  const handleDownload = async (format: 'png' | 'svg' | 'webp') => {
    if (styling.frameType === 'none') {
      qrCode.download({ name: `qr-${type}`, extension: format });
      return;
    }

    // FIX: getRawData returns a Blob or Buffer, not a canvas directly. 
    // We fetch a PNG blob to draw onto our composite canvas.
    const blob = await qrCode.getRawData('png');
    if (!blob) return;

    const img = await new Promise<HTMLImageElement>((resolve) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.src = URL.createObjectURL(blob as Blob);
    });

    // Composite Logic for Frames
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate dimensions based on frame
    const qrSize = 1000;
    const padding = 100;
    const bottomHeight = styling.frameType === 'standard' || styling.frameType === 'pill' ? 250 : 0;
    const totalWidth = qrSize + (padding * 2);
    const totalHeight = qrSize + (padding * 2) + bottomHeight;

    canvas.width = totalWidth;
    canvas.height = totalHeight;

    // 1. Draw Background
    ctx.fillStyle = styling.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw Frame Decoration
    ctx.fillStyle = styling.frameColor;
    if (styling.frameType === 'standard') {
      ctx.fillRect(0, totalHeight - bottomHeight, totalWidth, bottomHeight);
    } else if (styling.frameType === 'pill') {
      const pillMargin = 40;
      ctx.beginPath();
      // Use any cast to handle potential absence of roundRect in some browser TS libs
      (ctx as any).roundRect(pillMargin, totalHeight - bottomHeight + pillMargin, totalWidth - (pillMargin * 2), bottomHeight - (pillMargin * 2), 60);
      ctx.fill();
    } else if (styling.frameType === 'brackets') {
      ctx.strokeStyle = styling.frameColor;
      ctx.lineWidth = 40;
      const bMargin = 40;
      // Corners
      ctx.beginPath();
      ctx.moveTo(bMargin + 150, bMargin); ctx.lineTo(bMargin, bMargin); ctx.lineTo(bMargin, bMargin + 150);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(totalWidth - bMargin - 150, bMargin); ctx.lineTo(totalWidth - bMargin, bMargin); ctx.lineTo(totalWidth - bMargin, bMargin + 150);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bMargin + 150, totalHeight - bMargin); ctx.lineTo(bMargin, totalHeight - bMargin); ctx.lineTo(bMargin, totalHeight - bMargin - 150);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(totalWidth - bMargin - 150, totalHeight - bMargin); ctx.lineTo(totalWidth - bMargin, totalHeight - bMargin); ctx.lineTo(totalWidth - bMargin, totalHeight - bMargin - 150);
      ctx.stroke();
    } else if (styling.frameType === 'postcard') {
      ctx.strokeStyle = styling.frameColor;
      ctx.lineWidth = 30;
      ctx.strokeRect(40, 40, totalWidth - 80, totalHeight - 80);
    }

    // 3. Draw QR Code
    ctx.drawImage(img, padding, padding, qrSize, qrSize);
    URL.revokeObjectURL(img.src);

    // 4. Draw Text
    // FIX: Removed redundant check for 'none' as it's already handled by early return at start of function.
    ctx.fillStyle = styling.frameType === 'pill' || styling.frameType === 'standard' ? styling.frameTextColor : styling.frameColor;
    ctx.font = `bold ${totalWidth * 0.08}px "Plus Jakarta Sans", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    let textY = totalHeight - (bottomHeight / 2);
    if (styling.frameType === 'brackets') textY = totalHeight - 80;
    if (styling.frameType === 'badge') {
       ctx.font = `bold 40px "Plus Jakarta Sans"`;
       ctx.fillText(styling.frameText, totalWidth - 100, totalHeight - 50);
    } else {
       ctx.fillText(styling.frameText, totalWidth / 2, textY);
    }

    // Export
    const link = document.createElement('a');
    link.download = `qr-${type}-framed.${format}`;
    link.href = canvas.toDataURL(`image/${format === 'svg' ? 'png' : format}`, 1.0);
    link.click();
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Explore All Tools
          </button>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            <span className="text-2xl" role="img" aria-label="icon">{details.icon}</span>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-slate-900 leading-none mb-1">{details.title}</h1>
              <span className="text-[9px] font-black uppercase text-indigo-500 tracking-tighter">Studio Session Active</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
            <div className="flex bg-slate-50/50 border-b border-slate-100 p-2 overflow-x-auto no-scrollbar">
              {(['content', 'pattern', 'frames', 'logo'] as const).map(tab => (
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
                      {isAiLoading ? "Analyzing Brand..." : "✨ AI Stylist: Perfect Color Match"}
                    </Button>
                    {aiMood && <p className="text-center text-[10px] font-black uppercase text-indigo-500 tracking-widest animate-pulse">Theme: {aiMood}</p>}
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
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Colors</label>
                    <div className="space-y-4">
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
                </div>
              )}
              {activeTab === 'frames' && (
                <div className="space-y-12 animate-in fade-in duration-300">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Frame Text</label>
                    <input 
                      type="text" 
                      value={styling.frameText} 
                      onChange={e => setStyling({...styling, frameText: e.target.value})} 
                      maxLength={20}
                      className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-xl uppercase" 
                      placeholder="SCAN ME"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Select Frame Style</label>
                      <div className="grid grid-cols-2 gap-3">
                        {FRAME_STYLES.map(s => (
                          <button key={s.value} onClick={() => setStyling({...styling, frameType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.frameType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>
                            <span className="text-xl block mb-2">{s.icon}</span>
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Frame Colors</label>
                      <div className="space-y-4">
                         <div>
                            <span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Frame Accent</span>
                            <input type="color" value={styling.frameColor} onChange={e => setStyling({...styling, frameColor: e.target.value})} className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                         </div>
                         <div>
                            <span className="text-[9px] font-black text-slate-400 uppercase mb-2 block">Text Color</span>
                            <input type="color" value={styling.frameTextColor} onChange={e => setStyling({...styling, frameTextColor: e.target.value})} className="w-full h-12 rounded-xl cursor-pointer p-1 bg-slate-50 border border-slate-200" />
                         </div>
                      </div>
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
              <div className="relative p-8 bg-slate-50 rounded-[2.5rem] shadow-inner mb-8 flex flex-col justify-center items-center min-h-[460px] overflow-hidden group">
                <div 
                  className="flex flex-col items-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: styling.bgColor,
                    padding: styling.frameType === 'none' ? '0' : '20px',
                    borderRadius: '32px',
                    border: styling.frameType === 'postcard' ? `8px solid ${styling.frameColor}` : 'none'
                  }}
                >
                  <div ref={qrRef} className="bg-white p-4 rounded-3xl" />
                  
                  {styling.frameType !== 'none' && (
                    <div 
                      className="mt-4 w-full flex items-center justify-center font-display font-black uppercase tracking-widest"
                      style={{
                        backgroundColor: styling.frameType === 'standard' || styling.frameType === 'pill' ? styling.frameColor : 'transparent',
                        color: styling.frameType === 'pill' || styling.frameType === 'standard' ? styling.frameTextColor : styling.frameColor,
                        padding: styling.frameType === 'pill' ? '12px 24px' : '16px',
                        borderRadius: styling.frameType === 'pill' ? '99px' : '0',
                        marginTop: styling.frameType === 'pill' ? '20px' : '16px',
                        marginBottom: styling.frameType === 'pill' ? '10px' : '0',
                        fontSize: '1.2rem',
                        border: styling.frameType === 'brackets' ? 'none' : '',
                        position: styling.frameType === 'brackets' ? 'relative' : 'static'
                      }}
                    >
                      {styling.frameText}
                      {styling.frameType === 'brackets' && (
                        <>
                          <div className="absolute -top-64 -left-4 w-12 h-12 border-t-4 border-l-4" style={{borderColor: styling.frameColor}}></div>
                          <div className="absolute -top-64 -right-4 w-12 h-12 border-t-4 border-r-4" style={{borderColor: styling.frameColor}}></div>
                          <div className="absolute top-12 -left-4 w-12 h-12 border-b-4 border-l-4" style={{borderColor: styling.frameColor}}></div>
                          <div className="absolute top-12 -right-4 w-12 h-12 border-b-4 border-r-4" style={{borderColor: styling.frameColor}}></div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button onClick={() => handleDownload('png')} className="w-full py-5 rounded-2xl shadow-lg shadow-indigo-100 text-[10px] font-black uppercase tracking-widest">
                  Download Framed PNG
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" onClick={() => handleDownload('png')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">
                    SVG (Beta)
                  </Button>
                  <Button variant="outline" onClick={() => handleDownload('webp')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">
                    WebP (Web)
                  </Button>
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest pt-2">Professional Studio Export</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 space-y-16 border-t border-slate-200 mt-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Professional Branding Guide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Learn how to combine patterns and frames to create high-conversion QR codes.</p>
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