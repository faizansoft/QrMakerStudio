
import React, { useState } from 'react';
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
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-100 mb-6">
            Survey Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Google Form <span className="text-purple-600">QR Code</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Maximize survey responses by creating a branded <strong>google form qr code</strong>. Our <strong>qr code generator for google forms</strong> is designed for speed and clarity.
          </p>
        </div>
      </section>

      <Workspace type="googleform" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Google Form Link</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="https://forms.gle/..." 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl" 
          />
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
            <p className="text-[11px] text-purple-700 font-bold leading-relaxed">
              <b>Pro Tip:</b> When you <strong>create qr code for google form</strong>, use the "Shorten URL" option. Short links create cleaner patterns that are easier to scan.
            </p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Why use a qr code for google form?</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Typing survey links is tedious. A <strong>google forms qr code</strong> allows respondents to access your feedback form instantly. Whether you are collecting customer feedback in a restaurant or registrations at an event, our <strong>google form qr code</strong> generator makes the process frictionless.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Event Registration</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Print your <strong>google form qr code</strong> on posters to allow quick check-ins and sign-ups for guests.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Customer Feedback</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Place a <strong>qr code for google form</strong> on receipts to gather valuable reviews effortlessly.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Google Form QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to make a qr code for google form?", a: "Copy your form's share link, paste it into the tool above, and <strong>create qr code for google form</strong> instantly." },
               { q: "Can I customize the google forms qr code colors?", a: "Yes, use the 'Pattern' and 'Corners' tabs above to match the purple Google aesthetic or your own brand." },
               { q: "Is this the best qr code generator for google forms?", a: "Our tool is optimized for <strong>google forms qr code</strong> generation, offering SVG high-res exports for printing on banners." },
               { q: "Does the google form qr code expire?", a: "No, the QR code is static and will work as long as your form remains active on Google's servers." }
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
