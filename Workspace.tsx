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
  const qrCode = useMemo(() => new QRCodeStyling(), []);
  const details = GENERATOR_DETAILS[type];

  useEffect(() => {
    const pageTitle = `${details.title} | QR Studio Pro`;
    const pageDesc = `${details.desc} Create high-resolution custom QR codes.`;
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);
  }, [type, details]);

  useEffect(() => {
    const options: Options = {
      width: 1000, 
      height: 1000,
      data: value || ' ',
      margin: styling.includeMargin ? 20 : 0,
      qrOptions: { errorCorrectionLevel: styling.level },
      image: logoSrc || undefined,
      dotsOptions: { color: styling.fgColor, type: styling.dotType },
      backgroundOptions: { color: styling.bgColor },
      imageOptions: { crossOrigin: 'anonymous', margin: 10, imageSize: 0.4, hideBackgroundDots: true },
      cornersSquareOptions: { type: styling.cornerSquareType, color: styling.cornerSquareColor },
      cornersDotOptions: { type: styling.cornerDotType, color: styling.cornerDotColor }
    };
    qrCode.update(options);
  }, [styling, logoSrc, qrCode, value]);

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.display = 'block';
      }
    }
  }, [qrCode]);

  const handleDownload = async (format: 'png' | 'svg' | 'webp') => {
    if (styling.frameType === 'none') {
      qrCode.download({ name: `qr-${type}`, extension: format });
      return;
    }

    const blob = await qrCode.getRawData('png');
    if (!blob) return;

    const img = await new Promise<HTMLImageElement>((resolve) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.src = URL.createObjectURL(blob as Blob);
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const qrSize = 1200;
    const padding = 120;
    const bottomHeight = (styling.frameType === 'standard' || styling.frameType === 'pill' || styling.frameType === 'speech-bubble') ? 300 : 0;
    
    canvas.width = qrSize + (padding * 2);
    canvas.height = qrSize + (padding * 2) + bottomHeight;

    // 1. Background
    ctx.fillStyle = styling.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Frame Decoration
    ctx.fillStyle = styling.frameColor;
    ctx.strokeStyle = styling.frameColor;
    ctx.lineWidth = 40;

    const centerX = canvas.width / 2;
    const qrRectTop = padding;
    const qrRectBottom = padding + qrSize;

    if (styling.frameType === 'standard') {
      ctx.fillRect(0, canvas.height - bottomHeight, canvas.width, bottomHeight);
    } else if (styling.frameType === 'pill') {
      const pW = canvas.width * 0.8;
      const pH = 180;
      (ctx as any).roundRect(centerX - pW/2, canvas.height - bottomHeight/2 - pH/2, pW, pH, pH/2);
      ctx.fill();
    } else if (styling.frameType === 'speech-bubble') {
      const pW = canvas.width * 0.85;
      const pH = 180;
      const rectY = canvas.height - bottomHeight/2 - pH/2;
      (ctx as any).roundRect(centerX - pW/2, rectY, pW, pH, 40);
      ctx.fill();
      // Triangle
      ctx.beginPath();
      ctx.moveTo(centerX - 30, rectY);
      ctx.lineTo(centerX, rectY - 40);
      ctx.lineTo(centerX + 30, rectY);
      ctx.fill();
    } else if (styling.frameType === 'brackets') {
      const bL = 200;
      const bM = 60;
      // Top Left
      ctx.beginPath(); ctx.moveTo(bM + bL, bM); ctx.lineTo(bM, bM); ctx.lineTo(bM, bM + bL); ctx.stroke();
      // Top Right
      ctx.beginPath(); ctx.moveTo(canvas.width - bM - bL, bM); ctx.lineTo(canvas.width - bM, bM); ctx.lineTo(canvas.width - bM, bM + bL); ctx.stroke();
      // Bottom Left
      ctx.beginPath(); ctx.moveTo(bM + bL, canvas.height - bM); ctx.lineTo(bM, canvas.height - bM); ctx.lineTo(bM, canvas.height - bM - bL); ctx.stroke();
      // Bottom Right
      ctx.beginPath(); ctx.moveTo(canvas.width - bM - bL, canvas.height - bM); ctx.lineTo(canvas.width - bM, canvas.height - bM); ctx.lineTo(canvas.width - bM, canvas.height - bM - bL); ctx.stroke();
    } else if (styling.frameType === 'postcard') {
      ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
    } else if (styling.frameType === 'badge') {
      ctx.beginPath();
      ctx.moveTo(canvas.width, canvas.height - 300);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(canvas.width - 300, canvas.height);
      ctx.closePath();
      ctx.fill();
    }

    // 3. QR Code
    ctx.drawImage(img, padding, padding, qrSize, qrSize);
    URL.revokeObjectURL(img.src);

    // 4. Text
    ctx.fillStyle = (styling.frameType === 'pill' || styling.frameType === 'standard' || styling.frameType === 'speech-bubble') ? styling.frameTextColor : styling.frameColor;
    if (styling.frameType === 'badge') ctx.fillStyle = styling.frameTextColor;

    ctx.font = `bold ${canvas.width * 0.07}px "Plus Jakarta Sans", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    if (styling.frameType === 'badge') {
      ctx.save();
      ctx.translate(canvas.width - 100, canvas.height - 100);
      ctx.rotate(-Math.PI / 4);
      ctx.font = `bold 60px "Plus Jakarta Sans"`;
      ctx.fillText(styling.frameText, 0, 0);
      ctx.restore();
    } else {
      let textY = canvas.height - (bottomHeight / 2);
      if (styling.frameType === 'brackets' || styling.frameType === 'postcard') textY = canvas.height - 150;
      ctx.fillText(styling.frameText, canvas.width / 2, textY);
    }

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
              <div className="relative p-6 bg-slate-50 rounded-[2.5rem] shadow-inner mb-8 flex flex-col justify-center items-center min-h-[460px] overflow-hidden group">
                <div 
                  className="relative p-6 transition-all duration-500 group-hover:scale-105 flex flex-col items-center"
                  style={{
                    backgroundColor: styling.bgColor,
                    borderRadius: '40px',
                    border: styling.frameType === 'postcard' ? `4px solid ${styling.frameColor}` : 'none',
                    minWidth: '320px'
                  }}
                >
                  {/* Fixed Brackets Preview */}
                  {styling.frameType === 'brackets' && (
                    <>
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4" style={{borderColor: styling.frameColor}}></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4" style={{borderColor: styling.frameColor}}></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4" style={{borderColor: styling.frameColor}}></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4" style={{borderColor: styling.frameColor}}></div>
                    </>
                  )}

                  {/* QR Core */}
                  <div ref={qrRef} className="bg-white p-2 rounded-2xl w-[260px] aspect-square" />
                  
                  {/* Frame Footer Preview */}
                  {styling.frameType !== 'none' && styling.frameType !== 'brackets' && styling.frameType !== 'postcard' && (
                    <div className="w-full mt-4 flex flex-col items-center">
                      {styling.frameType === 'speech-bubble' && (
                        <div className="w-4 h-4" style={{borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: `8px solid ${styling.frameColor}`, transform: 'rotate(180deg)'}}></div>
                      )}
                      <div 
                        className="w-full flex items-center justify-center font-display font-black uppercase tracking-widest text-sm"
                        style={{
                          backgroundColor: (styling.frameType === 'standard' || styling.frameType === 'pill' || styling.frameType === 'speech-bubble') ? styling.frameColor : 'transparent',
                          color: (styling.frameType === 'standard' || styling.frameType === 'pill' || styling.frameType === 'speech-bubble') ? styling.frameTextColor : styling.frameColor,
                          padding: '12px 20px',
                          borderRadius: styling.frameType === 'pill' ? '99px' : styling.frameType === 'speech-bubble' ? '16px' : '0',
                          marginTop: styling.frameType === 'speech-bubble' ? '0' : '8px'
                        }}
                      >
                        {styling.frameText}
                      </div>
                    </div>
                  )}

                  {(styling.frameType === 'brackets' || styling.frameType === 'postcard') && (
                    <div className="mt-4 font-display font-black uppercase tracking-widest text-sm" style={{color: styling.frameColor}}>
                      {styling.frameText}
                    </div>
                  )}

                  {styling.frameType === 'badge' && (
                    <div className="absolute bottom-0 right-0 p-3 bg-indigo-600 text-white rounded-tl-3xl font-black text-[10px] uppercase tracking-tighter shadow-lg" style={{backgroundColor: styling.frameColor, color: styling.frameTextColor}}>
                       {styling.frameText}
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