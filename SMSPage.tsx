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

const SMSPage: React.FC<PageProps> = (props) => {
  const [s, setS] = useState({ num: '', msg: '' });
  return (
    <Workspace type="sms" value={`smsto:${s.num}:${s.msg}`} {...props}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Recipient Number</label>
          <input type="tel" value={s.num} onChange={e => setS({...s, num: e.target.value})} placeholder="Phone Number" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Message Body</label>
          <textarea value={s.msg} onChange={e => setS({...s, msg: e.target.value})} placeholder="Hello, I would like to inquire about..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none" />
        </div>
      </div>
    </Workspace>
  );
};

export default SMSPage;