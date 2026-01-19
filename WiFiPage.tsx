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
      <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in duration-300">
        <div className="space-y-3 col-span-full">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Name (SSID)</label>
          <input 
            type="text" 
            value={wifi.ssid} 
            onChange={e => setWifi({...wifi, ssid: e.target.value})} 
            placeholder="Home WiFi Name" 
            className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-lg" 
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
          <input 
            type="text" 
            value={wifi.pass} 
            onChange={e => setWifi({...wifi, pass: e.target.value})} 
            placeholder="Network Password" 
            className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-lg" 
            disabled={wifi.enc === 'nopass'}
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Security Type</label>
          <select 
            value={wifi.enc} 
            onChange={e => setWifi({...wifi, enc: e.target.value})} 
            className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-lg appearance-none cursor-pointer focus:border-indigo-500"
          >
            <option value="WPA">WPA / WPA2 (Default)</option>
            <option value="WPA3">WPA3 (Latest Standard)</option>
            <option value="WEP">WEP (Legacy)</option>
            <option value="nopass">None (Open Network)</option>
          </select>
        </div>
      </div>
      <div className="mt-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
        <p className="text-[10px] text-indigo-700 font-bold uppercase tracking-tight">
          Pro Tip: Most modern routers use WPA/WPA2. If your router is brand new (Wi-Fi 6), try WPA3.
        </p>
      </div>
    </Workspace>
  );
};

export default WiFiPage;