import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const TextPage: React.FC<PageProps> = (props) => {
  const [text, setText] = useState('');
  return (
    <Workspace type="text" value={text} {...props}>
      <div className="space-y-4">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Text Content</label>
        <textarea 
          value={text} 
          onChange={e => setText(e.target.value)} 
          placeholder="Paste your text, notes, or data here..." 
          className="w-full h-64 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold resize-none" 
        />
      </div>
    </Workspace>
  );
};

export default TextPage;
