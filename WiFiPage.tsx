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

      {/* Generator Tool */}
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
          <div className="text-xl">💡</div>
          <p className="text-[11px] text-blue-800 font-bold leading-relaxed">
            <b>SECURITY TIP:</b> Your credentials are never sent to our servers. This <strong>wifi qr code generator</strong> creates code directly in your browser using local script processing.
          </p>
        </div>
      </Workspace>

      {/* NEW SECTION: How to Generate Guide */}
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

      {/* SEO Article Guide Section */}
      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">The Ultimate Guide to WiFi QR Codes</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Sharing your internet connection shouldn't involve shouting long, complex passwords across the room. Whether you're a business owner or a home host, learning how to <strong>generate qr code for wifi</strong> is the modern standard for hospitality and security. A <strong>wifi qr code</strong> stores your network name (SSID), security type, and password in a format that smartphones can read instantly.
          </p>
        </section>

        {/* Use Cases Grid */}
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

        {/* Printing Tips - NEW SEO SECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Expert Printing & Placement Tips</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              To ensure your <strong>high resolution qr code</strong> works perfectly every time, follow these industry standards:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                <p className="text-xs text-slate-600"><strong>Use High Contrast:</strong> Always keep a dark pattern on a light background. Our <strong>custom qr code maker</strong> lets you test these combinations easily.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                <p className="text-xs text-slate-600"><strong>Download SVG for Print:</strong> Use our <strong>qr code generator svg</strong> feature for professional printing on banners, acrylic stands, or wood-engraved signs.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                <p className="text-xs text-slate-600"><strong>Minimum Size:</strong> For WiFi access, ensure the printed code is at least 2cm x 2cm. A <strong>customizable qr code</strong> shouldn't be too small to scan.</p>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-[2.5rem] border border-slate-200">
             <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-[10px] font-black uppercase text-slate-400">Print Checklist</span>
                  <span className="text-blue-600 text-[10px] font-black">PRO MODE</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked readOnly className="rounded text-blue-600" />
                    <span className="text-[11px] font-bold text-slate-700">SVG Format Exported</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked readOnly className="rounded text-blue-600" />
                    <span className="text-[11px] font-bold text-slate-700">Minimum 300 DPI Resolution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked readOnly className="rounded text-blue-600" />
                    <span className="text-[11px] font-bold text-slate-700">Tested with iOS & Android</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Why use a wifi qr code generator?</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="flex gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Instant Connection:</strong> Guests just scan and join—no manual typing required with our <strong>wifi qr code generator</strong>.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Better Security:</strong> You don't have to write your <strong>wifi password qr code</strong> on a piece of paper that anyone can read.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Professional Look:</strong> Perfect for cafes, Airbnbs, and offices looking to streamline operations with a <strong>custom qr code</strong>.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">How to scan wifi qr code?</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Most modern mobile devices have a built-in <strong>wifi qr code</strong> scanner directly in the camera app. 
              <strong> For iPhone (iOS):</strong> Open the Camera, point it at the code, and tap the "Join Network" banner. 
              <strong> For Android:</strong> Use the Camera or the "Quick Settings" WiFi toggle to find the QR scanner icon. Our <strong>generate qr code for wifi</strong> tools follow all international standards.
            </p>
          </section>
        </div>

        {/* Technical Deep Dive */}
        <section className="bg-blue-50/50 p-12 rounded-[3.5rem] border border-blue-100 space-y-8">
           <h3 className="text-2xl font-display font-black text-slate-900">Technical Standards: MECARD vs WIFI String</h3>
           <div className="grid md:grid-cols-2 gap-12 text-sm">
             <div className="space-y-4">
               <p className="text-slate-600 font-medium">
                 When you use our <strong>create wifi qr code</strong> tool, we generate a specific string format understood by Android and iOS. The syntax follows a strict structure:
               </p>
               <code className="block bg-slate-900 text-blue-400 p-4 rounded-xl text-xs overflow-x-auto">
                 WIFI:S:Network_Name;T:WPA;P:Password_Here;;
               </code>
             </div>
             <div className="space-y-4">
               <p className="text-slate-600 font-medium">
                 This is known as the <strong>MECARD format for WiFi</strong>. It is a static QR code, meaning the data is permanently etched into the pattern. This ensures your <strong>wifi qr code generator</strong> results work offline and forever without needing an internet connection.
               </p>
             </div>
           </div>
        </section>

        {/* Troubleshooting Section - NEW SEO SECTION */}
        <section className="bg-white p-12 rounded-[3rem] border border-slate-200 space-y-8">
          <div className="text-center space-y-3">
             <h3 className="text-2xl font-bold text-slate-900">Why is my WiFi QR Code not scanning?</h3>
             <p className="text-slate-500 text-sm">Check these common reasons if your <strong>customizable qr code</strong> is having issues.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-blue-600 font-black mb-2 uppercase text-[10px]">Blurry Print</div>
              <p className="text-xs text-slate-500 leading-relaxed">Low resolution can make codes unreadable. Always use <strong>qr code generator svg</strong> for large prints.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-blue-600 font-black mb-2 uppercase text-[10px]">Incorrect SSID</div>
              <p className="text-xs text-slate-500 leading-relaxed">WiFi names are case-sensitive. Ensure your <strong>wifi qr code</strong> exactly matches your router name.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-blue-600 font-black mb-2 uppercase text-[10px]">Too Many Details</div>
              <p className="text-xs text-slate-500 leading-relaxed">Adding a massive logo in the middle can block too much data. Try <strong>qr code with logo in middle</strong> with High error correction.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[3rem] space-y-6">
          <h2 className="text-2xl font-display font-black">Technical Compatibility for WiFi Sharing</h2>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            Our <strong>wifi qr code generator</strong> supports all global security standards, including WPA, WPA2, and the newer WPA3. When you <strong>create wifi qr code</strong> images with our tool, we encode the data using the standard MECARD format, ensuring it works across Apple, Samsung, Google, and other major smartphone brands. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div>
              <div className="text-blue-400 font-black text-xs uppercase mb-2">SSID</div>
              <p className="text-[11px] text-slate-500">The public name of your wireless network for <strong>wifi qr code</strong>.</p>
            </div>
            <div>
              <div className="text-blue-400 font-black text-xs uppercase mb-2">Encryption</div>
              <p className="text-[11px] text-slate-500">Security type (WPA2 is the standard).</p>
            </div>
            <div>
              <div className="text-blue-400 font-black text-xs uppercase mb-2">Password</div>
              <p className="text-[11px] text-slate-500">Securely encoded key for your internet.</p>
            </div>
          </div>
        </section>

        {/* Frequently Asked WiFi Questions */}
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">WiFi QR Code FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is a wifi qr code generator safe?", a: "Yes, our tool generates the code locally on your machine. Your password never touches our servers, making it safer than sending passwords via email or chat. This is why we are the top <strong>free wifi qr generator</strong>." },
               { q: "Will the code expire?", a: "No. A static <strong>wifi qr code</strong> never expires. It will work as long as your network name and password remain the same." },
               { q: "Can I add a logo?", a: "Absolutely! Use our 'Logo' tab in the workspace above to create a <strong>wifi qr code with logo</strong> for your brand or cafe." },
               { q: "Does it work on Android and iPhone?", a: "Yes, our <strong>wifi qr code</strong> format is universal and compatible with all modern smartphones running iOS 11+ or Android 9+." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="space-y-6 text-center pt-12 border-t border-slate-100">
          <h2 className="text-3xl font-display font-black text-slate-900">Ready to share wifi qr code access?</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Scroll back up to the tool to input your details. Once you <strong>generate qr code for wifi</strong>, download it as a high-resolution PNG for your wall or an SVG for professional signage. <strong>QR Generator Online</strong> is the leading <strong>wifi qr code generator</strong> designed for speed and privacy.
          </p>
        </section>
      </article>
    </div>
  );
};

export default WiFiPage;