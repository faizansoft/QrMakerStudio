import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    document.title = "WiFi QR Code Generator | Connect Instantly & Securely";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a secure WiFi QR code for your home, cafe, or office. Let guests scan to connect without typing passwords. High-resolution SVG and PNG exports.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 mb-6">
            Contactless Network Access
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            WiFi QR Code <span className="text-blue-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Sharing your internet password shouldn't be a chore. Our <strong>free WiFi QR generator</strong> allows guests to scan and join your network in a single second, eliminating typos and security risks.
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
              placeholder="e.g. My_Brand_Guest_WiFi" 
              className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WiFi Password</label>
            <input 
              type="text" 
              value={wifi.pass} 
              onChange={e => setWifi({...wifi, pass: e.target.value})} 
              placeholder="Secure Password" 
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
              <option value="WPA">WPA / WPA2 (Global Standard)</option>
              <option value="WPA3">WPA3 (Latest Security)</option>
              <option value="WEP">WEP (Legacy Devices)</option>
              <option value="nopass">None (Public Network)</option>
            </select>
          </div>
        </div>
        <div className="mt-6 p-5 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <p className="text-[11px] text-blue-800 font-bold leading-relaxed">
            <strong>PRIVACY FIRST:</strong> This <strong>WiFi QR code generator</strong> works entirely in your browser. Your network name and password are never sent to our servers.
          </p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">The Modern Way to Share Connectivity</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Shouting WiFi passwords across a crowded cafe or printing them on small, easy-to-lose slips of paper is a relic of the past. A <strong>branded WiFi QR code</strong> is the gold standard for modern hospitality and office management.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                When you <strong>create a WiFi QR code</strong>, you're not just providing convenience; you're enhancing security. Guests no longer need to see or type the raw password, reducing the risk of it being shared incorrectly or recorded by unauthorized parties. Our generator supports everything from open networks to the latest WPA3 security standards.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-200">
               <h3 className="text-lg font-bold text-slate-900 mb-4">Key Benefits for Businesses</h3>
               <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Zero Typos:</strong> No more "Is that a zero or an 'O'?"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Instant Access:</strong> Scan to join takes under 2 seconds.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Brand Trust:</strong> Add your cafe or hotel logo to the center.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Scalable Print:</strong> High-res SVG for large wall posters.</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Perfect Placement for WiFi Codes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: "Vacation Rentals", d: "Place a framed <strong>WiFi QR</strong> in the living room for Airbnb guests." },
              { t: "Retail Stores", d: "Add a small code near the checkout to keep shoppers connected." },
              { t: "Medical Offices", d: "Improve patient waiting room experiences with easy internet." },
              { t: "Tech Conferences", d: "Display on huge screens for thousands of attendees at once." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                <h3 className="font-bold text-slate-900 text-sm mb-2" dangerouslySetInnerHTML={{ __html: item.t }} />
                <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.d }} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-600 text-white p-12 rounded-[4rem] space-y-8">
          <h2 className="text-3xl font-display font-black">Security Standards & Scannability</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-blue-50 font-medium leading-relaxed">
              Our <strong>WiFi password QR code</strong> generator uses the universal `WIFI:S:SSID;T:TYPE;P:PASS;;` standard. This is recognized by all modern iOS and Android devices without the need for additional apps. For the highest security, we recommend using WPA2 or WPA3 settings.
            </p>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
               <h3 className="text-lg font-bold mb-2">Did You Know?</h3>
               <p className="text-sm opacity-90 leading-relaxed">Most modern smartphones will automatically verify the network credentials and prompt a "Join" button. This prevents users from connecting to "evil twin" networks by mistake.</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">WiFi QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the WiFi QR generator safe?", a: "Yes. Your network details are processed locally in your browser memory and never uploaded to our servers. Your privacy is 100% guaranteed." },
               { q: "Does this work on both iPhone and Android?", a: "Absolutely. Our <strong>WiFi QR code</strong> format is compliant with international standards and works with the native camera apps on both platforms." },
               { q: "Can I add my logo to the WiFi code?", a: "Yes. Use the 'Logo' tab in our workspace to upload your branding. A <strong>WiFi QR code with logo</strong> increases professional trust for your business." },
               { q: "What happens if I change my password?", a: "Static WiFi codes store the password data directly. If you change your router password, you will need to generate and print a new <strong>WiFi QR code</strong>." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Need Other Digital Assets?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/url-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">URL Links</Link>
            <Link to="/vcard-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/googleform-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Google Forms</Link>
            <Link to="/location-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Maps Locations</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default WiFiPage;