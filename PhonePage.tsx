import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "Phone QR Code Generator | One-Tap Call Links";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a QR code that opens the phone dialer instantly. Best for service businesses, support lines, and physical marketing where typing is friction.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-rose-100 mb-6">
            Direct Voice Communication
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Phone Call <span className="text-rose-600">QR Code</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate the typing hurdle. Our <strong>qr code generator phone number</strong> tool creates an instant dialer link. One scan, one tap, and your customers are speaking with you.
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
            placeholder="e.g. +14155552671" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-2xl focus:border-rose-500 shadow-inner" 
          />
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Scanning this will automatically open the phone's dialer.</p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Reduce Friction, <br/>Increase Conversations.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              In a mobile-first world, nobody wants to memorize a 10-digit number from a sign and type it manually into their dialer. Mistakes happen, and leads are lost. A <strong>qr code generator phone number</strong> solves this by using the universal 'tel:' protocol. 
            </p>
            <div className="p-8 bg-rose-50 rounded-[3rem] border border-rose-100 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-rose-600 shadow-sm">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <p className="text-sm text-rose-900 font-bold leading-relaxed">By providing a <strong>custom qr code</strong> for phone calls, you're meeting your customers exactly where they are—on their smartphones.</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Phone QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the qr code generator phone number tool free?", a: "Yes, 100%. We believe basic digital tools should be accessible to everyone without hidden fees." },
               { q: "Will this automatically start the call?", a: "For security, modern phones will open the dialer with your number pre-filled. The user must then tap 'Call'." },
               { q: "How to generate qr code for contact info?", a: "For more than just a number, we recommend our <strong>vcard qr code generator</strong> instead." },
               { q: "Does it work with international numbers?", a: "Absolutely. Just ensure you include the '+' and country code." }
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