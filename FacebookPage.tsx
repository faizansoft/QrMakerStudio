import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const FacebookPage: React.FC<PageProps> = (props) => {
  const [fb, setFb] = useState('https://facebook.com/');
  return (
    <Workspace type="facebook" value={fb} {...props}>
      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facebook Profile / Page URL</label>
        <div className="relative">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">f</div>
          <input 
            type="text" 
            value={fb} 
            onChange={e => setFb(e.target.value)} 
            placeholder="https://facebook.com/yourbrand" 
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-lg" 
          />
        </div>
        <p className="text-[10px] text-slate-400 font-medium">Link directly to your timeline, business page, or group.</p>
      </div>
    </Workspace>
  );
};

export default FacebookPage;