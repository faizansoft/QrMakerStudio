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

const TextPage: React.FC<PageProps> = (props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = "Text to QR Code Generator | Secure Offline Data Storage";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Convert notes, serial numbers, or raw text into a scannable QR code. Works offline. High-resolution SVG exports for professional inventory and labeling.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 mb-6">
            Universal Data Storage
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Text to QR <span className="text-emerald-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Transform raw data into a scannable format. Our <strong>branded text QR maker</strong> is the ideal solution for inventory management, offline notes, and technical labeling where an internet connection isn't required.
          </p>
        </div>
      </section>

      <Workspace type="text" value={text} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enter Text Content (Up to 2000 chars)</label>
          <textarea 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="e.g. Serial Number: 12345-ABC-XYZ..." 
            className="w-full h-64 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold resize-none focus:border-emerald-500 shadow-inner" 
          />
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">A text QR code stores information directly in the pattern—no internet needed.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Digital Utility, Stored Physically.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                While most QR codes act as a "bridge" to the internet, the <strong>plain text QR code</strong> is unique because it is entirely self-contained. The information you enter—whether it is a password, a serial number, or a complex instruction—is encoded mathematically into the dots of the pattern. 
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                This makes <strong>text to QR generator</strong> output the gold standard for high-security environments, manufacturing floors, and offline inventory tracking. Because no internet redirection is required, the data is accessible even in deep basements, industrial warehouses, or remote outdoor locations where cellular data is unavailable.
              </p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-4">
              <h3 className="text-lg font-bold text-emerald-900">Why Use Text QRs?</h3>
              <ul className="space-y-3 text-sm text-emerald-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Works Offline:</strong> Scans anywhere, zero data required.</li>
                <li className="flex gap-2"><span>✓</span> <strong>High Security:</strong> No tracking servers involved.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Data Integrity:</strong> Error correction ensures scannability.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Industry Use Cases for Text QRs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Inventory & Logistics</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Label warehouse bins with <strong>custom text QR codes</strong> containing part numbers and quantities. Staff can scan and read data instantly without an app.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Product Authentication</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Encode unique serial numbers into a <strong>branded QR code</strong>. Use our <strong>SVG export</strong> to print sharp codes on tamper-evident labels.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Education & Training</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Place <strong>plain text QR codes</strong> in textbooks or training manuals to provide "revealable" answers or hints to students during exercises.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Understanding Data Density & Print</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            When you <strong>create a text QR code</strong>, the more characters you add, the denser the pattern becomes. For professional labels, we recommend using 'High' (Level H) error correction. This ensures that even if a part of the label is scratched or damaged on a warehouse shelf, the data remains scannable. Our <strong>SVG vector format</strong> is essential for text codes to ensure that the high-density dots remain perfectly clear during the printing process.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Text QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the text to QR generator free?", a: "Yes. <strong>QR Generator Online</strong> provides this as a free professional utility. Create unlimited codes for labeling or notes." },
               { q: "How much text can I fit?", a: "You can encode up to roughly 2,000 alphanumeric characters. However, for the best scannability, we recommend keeping content under 500 characters." },
               { q: "Can I add a logo to a text QR?", a: "Yes. Navigate to the 'Logo' tab to create a <strong>QR code with logo in middle</strong> to brand your professional inventory." },
               { q: "Does the code ever expire?", a: "No. Since the data is stored directly in the pattern (static), it will work as long as the physical code exists." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Discover More Utility Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/wifi-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WiFi Sharing</Link>
            <Link to="/crypto-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Crypto Payments</Link>
            <Link to="/location-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Maps Locations</Link>
            <Link to="/url-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default TextPage;