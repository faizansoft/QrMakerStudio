import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
  onBack: () => void;
}

const URLPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('https://shortnow.link');
  return (
    <Workspace type="url" value={url} {...props}>
      <div className="space-y-4">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Website Address</label>
        <input 
          type="text" 
          value={url} 
          onChange={e => setUrl(e.target.value)} 
          placeholder="https://example.com" 
          className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl" 
        />
        <p className="text-xs text-slate-400">Make sure to include http:// or https:// for proper redirection.</p>
      </div>
    </Workspace>
  );
};

export default URLPage;