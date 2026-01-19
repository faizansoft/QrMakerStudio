import React, { useRef, useEffect, useMemo, useState } from 'react';
import QRCodeStyling, { Options, Gradient } from 'qr-code-styling';
import { QRConfig, QRType } from './types';
import { DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, GENERATOR_DETAILS } from './constants';
import { Button } from './components/Button';
import { LogoUploader } from './components/LogoUploader';

interface WorkspaceProps {
  type: QRType;
  value: string;
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
  onBack: () => void;
  children: React.ReactNode; // The specialized input form
}

const Workspace: React.FC<WorkspaceProps> = ({ type, value, styling, setStyling, logoSrc, setLogoSrc, onBack, children }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'pattern' | 'corners' | 'logo'>('content');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useMemo(() => new QRCodeStyling(), []);
  const details = GENERATOR_DETAILS[type];

  useEffect(() => {
    const options: Options = {
      width: 300,
      height: 300,
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

  const applySmartStyle = () => {
    setIsAiLoading(true);
    setTimeout(() => {
      setStyling(prev => ({
        ...prev,
        fgColor: '#' + Math.floor(Math.random()*16777215).toString(16),
        dotType: DOT_STYLES[Math.floor(Math.random() * DOT_STYLES.length)].value
      }));
      setIsAiLoading(false);
    }, 400);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Back to Tools
          </button>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{details.icon}</span>
            <h2 className="text-xl font-bold text-slate-900">{details.title}</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="flex bg-slate-50/50 border-b border-slate-100 p-2">
              {(['content', 'pattern', 'corners', 'logo'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${activeTab === tab ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'}`}>
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="p-10 md:p-12 min-h-[450px]">
              {activeTab === 'content' && <div className="space-y-8 animate-in fade-in duration-300">{children}<div className="pt-8 border-t border-slate-50"><Button onClick={applySmartStyle} loading={isAiLoading} className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest font-black">✨ Match Matching Style</Button></div></div>}
              {activeTab === 'pattern' && (
                <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400">Dot Pattern</label>
                    <div className="grid grid-cols-2 gap-3">
                      {DOT_STYLES.map(s => <button key={s.value} onClick={() => setStyling({...styling, dotType: s.value})} className={`p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest transition-all ${styling.dotType === s.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}`}>{s.label}</button>)}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-400">Pattern Color</label>
                    <input type="color" value={styling.fgColor} onChange={e => setStyling({...styling, fgColor: e.target.value})} className="w-full h-14 rounded-2xl cursor-pointer" />
                  </div>
                </div>
              )}
              {activeTab === 'corners' && (
                <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-300">
                  <div className="space-y-6"><label className="text-[10px] font-black uppercase text-slate-400">Frame</label><div className="grid gap-2">{CORNER_SQUARE_STYLES.map(s => <button key={s.value} onClick={() => setStyling({...styling, cornerSquareType: s.value})} className={`p-4 rounded-xl border-2 text-[10px] font-bold ${styling.cornerSquareType === s.value ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}>{s.label}</button>)}</div></div>
                  <div className="space-y-6"><label className="text-[10px] font-black uppercase text-slate-400">Eye</label><div className="grid gap-2">{CORNER_DOT_STYLES.map(s => <button key={s.value} onClick={() => setStyling({...styling, cornerDotType: s.value})} className={`p-4 rounded-xl border-2 text-[10px] font-bold ${styling.cornerDotType === s.value ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}>{s.label}</button>)}</div></div>
                </div>
              )}
              {activeTab === 'logo' && <LogoUploader onUpload={setLogoSrc} currentLogo={logoSrc} />}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-200 text-center">
              <div className="relative p-8 bg-slate-50 rounded-[2.5rem] shadow-inner mb-8 flex justify-center items-center min-h-[340px]">
                <div ref={qrRef} className="bg-white p-4 rounded-3xl shadow-2xl transition-transform hover:scale-105" />
              </div>
              <div className="space-y-4">
                <Button onClick={() => handleDownload('png')} className="w-full py-5 rounded-2xl shadow-lg shadow-indigo-100 text-[10px] font-black uppercase tracking-widest">Download High Res PNG</Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" onClick={() => handleDownload('svg')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">Vector SVG</Button>
                  <Button variant="outline" onClick={() => handleDownload('webp')} className="text-[9px] font-black uppercase py-4 rounded-xl tracking-widest">WebP Image</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 space-y-16">
          <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight text-center">Step-by-Step Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {details.guide.map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm group hover:border-indigo-100 transition-all">
                <div className="text-5xl font-black text-indigo-500/10 mb-8 font-display">0{idx+1}</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.step}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;