import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const WhatsAppPage: React.FC<PageProps> = (props) => {
  const [wa, setWa] = useState({ num: '', msg: '' });
  // WhatsApp format: https://wa.me/number?text=encodedtext
  const val = `https://wa.me/${wa.num.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(wa.msg)}`;

  return (
    <Workspace type="whatsapp" value={val} {...props}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Number (with Country Code)</label>
          <input type="tel" placeholder="e.g. 14155552671" value={wa.num} onChange={e => setWa({...wa, num: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold text-lg" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Default Message</label>
          <textarea placeholder="Hi! I have a question about..." value={wa.msg} onChange={e => setWa({...wa, msg: e.target.value})} className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none" />
        </div>
      </div>
    </Workspace>
  );
};

export default WhatsAppPage;