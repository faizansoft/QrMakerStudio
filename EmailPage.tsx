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

const EmailPage: React.FC<PageProps> = (props) => {
  const [e, setE] = useState({ to: '', sub: '', body: '' });
  const val = `mailto:${e.to}?subject=${encodeURIComponent(e.sub)}&body=${encodeURIComponent(e.body)}`;
  
  return (
    <Workspace type="email" value={val} {...props}>
      <div className="space-y-4">
        <input type="email" value={e.to} onChange={ev => setE({...e, to: ev.target.value})} placeholder="Recipient Email" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        <input type="text" value={e.sub} onChange={ev => setE({...e, sub: ev.target.value})} placeholder="Subject Line" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        <textarea value={e.body} onChange={ev => setE({...e, body: ev.target.value})} placeholder="Email message..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none" />
      </div>
    </Workspace>
  );
};

export default EmailPage;