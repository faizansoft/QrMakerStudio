import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const WiFiPage: React.FC<PageProps> = (props) => {
  const [wifi, setWifi] = useState({ ssid: '', pass: '', enc: 'WPA' });
  const val = `WIFI:S:${wifi.ssid};T:${wifi.enc};P:${wifi.pass};;`;
  
  return (
    <Workspace type="wifi" value={val} {...props}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2 col-span-full">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Network Name (SSID)</label>
          <input type="text" value={wifi.ssid} onChange={e => setWifi({...wifi, ssid: e.target.value})} placeholder="Home WiFi" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
          <input type="text" value={wifi.pass} onChange={e => setWifi({...wifi, pass: e.target.value})} placeholder="••••••••" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Encryption</label>
          <select value={wifi.enc} onChange={e => setWifi({...wifi, enc: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 outline-none font-bold">
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">None</option>
          </select>
        </div>
      </div>
    </Workspace>
  );
};

export default WiFiPage;
