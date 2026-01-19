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

const PhonePage: React.FC<PageProps> = (props) => {
  const [num, setNum] = useState('');
  return (
    <Workspace type="phone" value={`tel:${num}`} {...props}>
      <div className="space-y-4">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
        <input 
          type="tel" 
          value={num} 
          onChange={e => setNum(e.target.value)} 
          placeholder="+1 234 567 890" 
          className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-2xl" 
        />
      </div>
    </Workspace>
  );
};

export default PhonePage;