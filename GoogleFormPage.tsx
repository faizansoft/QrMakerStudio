import React, { useState, useEffect } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const GoogleFormPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    document.title = "Google Forms QR Code Generator | Easy Survey Access";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a professional QR code for your Google Forms. Boost response rates with scannable links on flyers, table tents, and posters. Free SVG exports.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-100 mb-6">
            Feedback & Survey Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Google Form <span className="text-purple-600">QR Code</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Stop losing potential survey responses. Use our <strong>qr code generator for google forms</strong> to make feedback as easy as a single scan.
          </p>
        </div>
      </section>

      <Workspace type="googleform" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Google Form Link</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="https://forms.gle/your-form-id" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-purple-500 outline-none font-bold text-2xl shadow-inner" 
          />
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Google Form QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate qr code for google form?", a: "Go to your Google Form, click 'Send', copy the 'Link', and paste it above." },
               { q: "Can I use the QR code in print materials?", a: "Yes! Our SVG export is specifically designed for professional high-quality printing." },
               { q: "Does the link ever expire?", a: "No. As long as your Google Form is active, the QR code will work." },
               { q: "Is this tool free for business?", a: "Absolutely. <strong>QR Generator Online</strong> is free for everyone." }
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

export default GoogleFormPage;