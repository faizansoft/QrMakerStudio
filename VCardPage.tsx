import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const VCardPage: React.FC<PageProps> = (props) => {
  const [v, setV] = useState({ first: '', last: '', tel: '', email: '', org: '' });
  const val = `BEGIN:VCARD\nVERSION:3.0\nN:${v.last};${v.first}\nFN:${v.first} ${v.last}\nORG:${v.org}\nTEL;TYPE=CELL:${v.tel}\nEMAIL:${v.email}\nEND:VCARD`;

  return (
    <Workspace type="vcard" value={val} {...props}>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" value={v.first} onChange={e => setV({...v, first: e.target.value})} className="p-4 rounded-xl bg-slate-50 border border-slate-100" />
        <input type="text" placeholder="Last Name" value={v.last} onChange={e => setV({...v, last: e.target.value})} className="p-4 rounded-xl bg-slate-50 border border-slate-100" />
        <input type="tel" placeholder="Mobile Number" value={v.tel} onChange={e => setV({...v, tel: e.target.value})} className="col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-100" />
        <input type="email" placeholder="Email Address" value={v.email} onChange={e => setV({...v, email: e.target.value})} className="col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-100" />
        <input type="text" placeholder="Organization / Company" value={v.org} onChange={e => setV({...v, org: e.target.value})} className="col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-100" />
      </div>
    </Workspace>
  );
};

export default VCardPage;
