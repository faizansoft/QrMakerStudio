
import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const URLPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('https://qr-generator.online');
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Universal Tool
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Custom QR Code <span className="text-indigo-600">Maker</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Create a <strong>custom qr code</strong> for any website or digital link. Our <strong>customizable qr code</strong> tool allows for full branding control with <strong>qr code with logo in middle</strong> capabilities.
          </p>
        </div>
      </section>

      <Workspace type="url" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Link / URL Address</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="https://example.com" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl" 
          />
          <p className="text-xs text-slate-400">Make sure to include http:// or https:// for proper redirection.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">How to create a custom qr code?</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            A professional presence requires more than a basic black and white square. Our <strong>custom qr code maker</strong> allows you to change patterns, eye shapes, and colors. If you need a <strong>qr code with logo in the middle</strong>, simply upload your brand asset and our <strong>qr code generator with logo in middle</strong> will perfectly position it for maximum scannability.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Brand Identity", desc: "Use our <strong>custom qr code</strong> tools to match your brand colors perfectly (#hex codes supported)." },
            { title: "Logo Integration", desc: "A <strong>qr code with logo in middle</strong> increases scan rates by up to 40% by building user trust." },
            { title: "Vector Graphics", desc: "Download as a <strong>qr code generator svg</strong> for high-resolution printing on any marketing material." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Frequently Asked URL Questions</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is this a free custom qr code maker?", a: "Yes! <strong>QR Generator Online</strong> provides all branding tools including <strong>qr code with logo in middle</strong> for free with no expiration." },
               { q: "Can I download an svg qr code generator file?", a: "Absolutely. Our <strong>qr code svg generator</strong> provides clean vector files for professional graphic designers." },
               { q: "Will the custom qr code expire?", a: "No. These are static codes. Once you <strong>create a custom qr code</strong>, it will work forever." },
               { q: "How do I make a qr code with logo customization?", a: "Navigate to the 'Logo' tab in our workspace above, upload your PNG, and the <strong>qr code generator with logo customization</strong> will do the rest." }
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

export default URLPage;
