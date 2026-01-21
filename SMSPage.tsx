import React, { useState, useEffect } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const SMSPage: React.FC<PageProps> = (props) => {
  const [s, setS] = useState({ num: '', msg: '' });
  const val = `smsto:${s.num}:${s.msg}`;

  useEffect(() => {
    document.title = "SMS QR Code Generator | Pre-filled Text Message Links";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create an SMS QR code that pre-fills the recipient number and message body. Speed up customer inquiries and lead generation with professional branding.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-100 mb-6">
            Text Marketing Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            SMS Text <span className="text-teal-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Automate your incoming text inquiries. Our <strong>qr code generator for sms</strong> pre-fills messages, making it easier for customers to reach out and harder for them to ignore your CTA.
          </p>
        </div>
      </section>

      <Workspace type="sms" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recipient Number (with country code)</label>
            <input type="tel" value={s.num} onChange={e => setS({...s, num: e.target.value})} placeholder="e.g. +14155552671" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-filled Message Body (Optional)</label>
            <textarea value={s.msg} onChange={e => setS({...s, msg: e.target.value})} placeholder="I'd like to inquire about..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none font-bold focus:border-teal-500 outline-none" />
            <p className="text-[9px] text-slate-400 font-bold uppercase">The text will appear in the user's messaging app automatically.</p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">The Easiest Way <br/>to Start a Lead.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Texting is the most personal and high-conversion channel for small businesses today. A <strong>qr code generator for sms</strong> allows you to bridge the gap between a flyer and a conversion. By pre-filling the message, you're doing the "thinking" for your customer.
            </p>
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">SMS QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to make a qr code for a phone number and text?", a: "Enter the number and text above. Our <strong>qr code generator for sms</strong> handles the rest." },
               { q: "Does this work on iPhone and Android?", a: "Yes. Both major operating systems support the 'smsto:' prefix universally." },
               { q: "Is the data private?", a: "Absolutely. We do not log phone numbers or messages. It happens entirely in your local browser." },
               { q: "Can I add a custom logo?", a: "Yes! Use the 'Logo' tab to create a <strong>qr code with logo in middle</strong> to boost trust." }
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

export default SMSPage;