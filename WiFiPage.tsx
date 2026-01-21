import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "WiFi QR Code Generator | Connect Instantly Without Passwords";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a secure WiFi QR code. Let guests scan and connect to your network instantly without typing passwords. Private, secure, and locally rendered.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 mb-6">
            Free WiFi Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            WiFi QR Code <span className="text-blue-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Stop sharing complex passwords manually. Use our <strong>free wifi qr generator</strong> to create a custom code that connects guests to your internet in one second. 
            Perfect for hotels, cafes, and modern homes.
          </p>
        </div>
      </section>

      <Workspace type="wifi" value={val} {...props}>
        <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in duration-300">
          <div className="space-y-3 col-span-full">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Name (SSID)</label>
            <input 
              type="text" 
              value={wifi.ssid} 
              onChange={e => setWifi({...wifi, ssid: e.target.value})} 
              placeholder="e.g. My_Home_WiFi" 
              className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WiFi Password</label>
            <input 
              type="text" 
              value={wifi.pass} 
              onChange={e => setWifi({...wifi, pass: e.target.value})} 
              placeholder="Network Password" 
              className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg" 
              disabled={wifi.enc === 'nopass'}
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Encryption Level</label>
            <select 
              value={wifi.enc} 
              onChange={e => setWifi({...wifi, enc: e.target.value})} 
              className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-lg appearance-none cursor-pointer focus:border-blue-500"
            >
              <option value="WPA">WPA / WPA2 (Most Common)</option>
              <option value="WPA3">WPA3 (Latest & Secure)</option>
              <option value="WEP">WEP (Legacy Devices)</option>
              <option value="nopass">None (Public/Open)</option>
            </select>
          </div>
        </div>
        <div className="mt-6 p-5 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <p className="text-[11px] text-blue-800 font-bold leading-relaxed">
            <b>SECURITY TIP:</b> Your credentials are never sent to our servers. This <strong>wifi qr code generator</strong> creates code directly in your browser using local script processing.
          </p>
        </div>
      </Workspace>

      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">How to share WiFi with QR code?</h2>
            <p className="text-slate-500 font-medium">Generating your network access code takes less than 30 seconds with our <strong>create wifi qr code</strong> tool.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enter SSID", desc: "Type in your WiFi network name exactly as it appears on your router settings for this <strong>generate qr code for wifi</strong> tool." },
              { step: "02", title: "Add Password", desc: "Input your security key. Our <strong>wifi qr code generator</strong> supports WPA2 and the ultra-secure WPA3 standards." },
              { step: "03", title: "Personalize", desc: "Add your logo or change the colors to match your brand branding using our <strong>wifi qr code with logo</strong> feature." },
              { step: "04", title: "Print & Display", desc: "Download in high-res SVG or PNG and place it on a wall or desk for guests to <strong>scan wifi qr code</strong> instantly." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="text-5xl font-black text-slate-100 absolute -right-2 -top-2 group-hover:text-blue-50 transition-colors">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">The Ultimate Guide to WiFi QR Codes</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Sharing your internet connection shouldn't involve shouting long, complex passwords across the room. Whether you're a business owner or a home host, learning how to <strong>generate qr code for wifi</strong> is the modern standard for hospitality and security. A <strong>wifi qr code</strong> stores your network name (SSID), security type, and password in a format that smartphones can read instantly.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="col-span-full mb-4">
            <h3 className="text-2xl font-bold text-slate-900">Where to use a WiFi QR Code?</h3>
          </div>
          {[
            { title: "Cafes & Restaurants", desc: "Place a <strong>wifi qr code with logo</strong> on table tents to let customers connect without asking staff every time." },
            { title: "Hotels & Airbnbs", desc: "Include a <strong>wifi password qr code</strong> in your welcome book or frame it in the living area for a 5-star guest experience." },
            { title: "Corporate Offices", desc: "Securely share guest network access in meeting rooms. Our <strong>wifi qr code generator</strong> is perfect for professional environments." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Expert Printing & Placement Tips</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                <p className="text-xs text-slate-600"><strong>Use High Contrast:</strong> Always keep a dark pattern on a light background.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                <p className="text-xs text-slate-600"><strong>Download SVG for Print:</strong> Use our <strong>qr code generator svg</strong> feature for professional signs.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                <p className="text-xs text-slate-600"><strong>Minimum Size:</strong> For WiFi access, ensure the printed code is at least 2cm x 2cm.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">WiFi QR Code FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is a wifi qr code generator safe?", a: "Yes, our tool generates the code locally on your machine. Your password never touches our servers." },
               { q: "Will the code expire?", a: "No. A static <strong>wifi qr code</strong> never expires." },
               { q: "Can I add a logo?", a: "Absolutely! Use our 'Logo' tab to create a <strong>wifi qr code with logo</strong> for your brand." },
               { q: "Does it work on Android and iPhone?", a: "Yes, our <strong>wifi qr code</strong> format is compatible with all modern smartphones." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>
      </article>
    </div>
  );
};

export default WiFiPage;