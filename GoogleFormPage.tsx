import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const GoogleFormPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('');
  
  return (
    <Workspace type="googleform" value={url} {...props}>
      <div className="space-y-4">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Google Form Link</label>
        <input 
          type="text" 
          value={url} 
          onChange={e => setUrl(e.target.value)} 
          placeholder="https://forms.gle/..." 
          className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl" 
        />
        <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
          <p className="text-[11px] text-purple-700 font-bold leading-relaxed">
            <b>Pro Tip:</b> When sharing your form, use the "Shorten URL" option. Short links create cleaner QR codes that are much easier to scan from a distance or when printed small.
          </p>
        </div>
      </div>
    </Workspace>
  );
};

export default GoogleFormPage;