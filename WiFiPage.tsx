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
    <div className="flex flex-col">
      {/* SEO Optimized Heading */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Create WiFi QR Code
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            The fastest way to share your network credentials. Use our wifi qr code generator to create a scannable connection for guests.
          </p>
        </div>
      </section>

      {/* Generator Tool */}
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

      {/* SEO Article Guide Section */}
      <article className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-200 mt-12 space-y-16">
        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">The Ultimate Guide to WiFi QR Codes</h2>
          <p className="text-slate-600 leading-relaxed font-medium">
            Sharing your internet connection shouldn't involve shouting long, complex passwords across the room. Whether you're a business owner or a home host, learning how to <strong>generate qr code for wifi</strong> is the modern standard for hospitality and security. A <strong>wifi qr code</strong> stores your network name (SSID), security type, and password in a format that smartphones can read instantly.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Why use a wifi qr code generator?</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="flex gap-2">
                <span className="text-indigo-600 font-black">✓</span>
                <span><strong>Instant Connection:</strong> Guests just scan and join—no manual typing required.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 font-black">✓</span>
                <span><strong>Better Security:</strong> You don't have to write your <strong>wifi password qr code</strong> on a piece of paper that anyone can read.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 font-black">✓</span>
                <span><strong>Professional Look:</strong> Perfect for cafes, Airbnbs, and offices looking to streamline operations.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">How to scan wifi qr code?</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Most modern mobile devices have a built-in <strong>wifi qr code</strong> scanner directly in the camera app. 
              <strong> For iPhone (iOS):</strong> Open the Camera, point it at the code, and tap the "Join Network" banner. 
              <strong> For Android:</strong> Use the Camera or the "Quick Settings" WiFi toggle to find the QR scanner icon.
            </p>
          </section>
        </div>

        <section className="bg-slate-900 text-white p-12 rounded-[3rem] space-y-6">
          <h2 className="text-2xl font-display font-black">Technical Compatibility for WiFi Sharing</h2>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            Our <strong>wifi qr code generator</strong> supports all global security standards, including WPA, WPA2, and the newer WPA3. When you <strong>create wifi qr code</strong> images with our tool, we encode the data using the standard MECARD format, ensuring it works across Apple, Samsung, Google, and other major smartphone brands. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div>
              <div className="text-indigo-400 font-black text-xs uppercase mb-2">SSID</div>
              <p className="text-[11px] text-slate-500">The public name of your wireless network.</p>
            </div>
            <div>
              <div className="text-indigo-400 font-black text-xs uppercase mb-2">Encryption</div>
              <p className="text-[11px] text-slate-500">Security type (WPA2 is the most common).</p>
            </div>
            <div>
              <div className="text-indigo-400 font-black text-xs uppercase mb-2">Password</div>
              <p className="text-[11px] text-slate-500">Securely encoded key for your internet.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-display font-black text-slate-900">Ready to share wifi qr code access?</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Scroll back up to the tool to input your details. Once you <strong>generate qr code for wifi</strong>, download it as a high-resolution PNG for your wall or an SVG for professional signage. QR Studio Pro is the leading <strong>wifi qr code generator</strong> designed for speed and privacy.
          </p>
        </section>
      </article>
    </div>
  );
};

export default WiFiPage;