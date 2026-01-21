import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const PhonePage: React.FC<PageProps> = (props) => {
  const [num, setNum] = useState('');
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-rose-100 mb-6">
            Voice Call Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Phone QR <span className="text-rose-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Make it easy for clients to call you. Use our <strong>qr code generator phone number</strong> tool to create a scannable dialer link for your business.
          </p>
        </div>
      </section>

      <Workspace type="phone" value={`tel:${num}`} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number (with Country Code)</label>
          <input 
            type="tel" 
            value={num} 
            onChange={e => setNum(e.target.value)} 
            placeholder="e.g. +1 415 555 2671" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-2xl focus:border-rose-500" 
          />
          <p className="text-xs text-slate-400">Scanning this will automatically open the phone's dialer.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">The Power of a qr code generator phone number</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-3xl mx-auto">
            Traditional phone numbers on flyers often go uncalled because of the friction of manual dialing. A <strong>qr code generator phone number</strong> removes this barrier, allowing customers to connect with your support or sales team with a single scan.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Service Businesses</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Plumbers, electricians, and handymen can <strong>generate qr code for contact info</strong> on their vehicles for instant emergency calls.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Real Estate Agents</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Add a <strong>qr code with logo in middle</strong> to 'For Sale' signs to get calls from potential buyers directly from the curb.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Phone QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to make a qr code for a phone number?", a: "Simply enter your number (including +country code) into the <strong>qr code generator phone number</strong> tool above and download your code." },
               { q: "Does it work on both iPhone and Android?", a: "Yes. All modern smartphones recognize the 'tel:' protocol used by our <strong>custom qr code maker</strong>." },
               { q: "Is this the best qr code generator phone number tool?", a: "We provide high-resolution <strong>qr code generator svg</strong> files for free, making us the top choice for professionals." },
               { q: "Will the caller see my name?", a: "A phone QR only opens the dialer with your number. To share your name and info, use our <strong>vcard qr code generator</strong> instead." }
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

export default PhonePage;