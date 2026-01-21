import React, { useState } from 'react';
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
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-100 mb-6">
            Messaging Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            SMS QR <span className="text-teal-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Automate text replies. Our <strong>qr code generator for sms</strong> lets you pre-fill messages for effortless customer engagement.
          </p>
        </div>
      </section>

      <Workspace type="sms" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recipient Number</label>
            <input type="tel" value={s.num} onChange={e => setS({...s, num: e.target.value})} placeholder="e.g. +14155552671" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message Body (Optional)</label>
            <textarea value={s.msg} onChange={e => setS({...s, msg: e.target.value})} placeholder="Hi, I'm interested in..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none font-bold focus:border-teal-500" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Why use a qr code generator for sms?</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            A <strong>qr code generator for sms</strong> allows you to start a direct text conversation with pre-filled content. This is a game-changer for lead generation, where you want to know exactly what a customer is inquiring about from their first message.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Real Estate leads</h4>
              <p className="text-sm text-slate-500 leading-relaxed">"SMS [PropertyID] to [Number]" becomes "Scan to Inquire". Use a <strong>qr code generator for sms</strong> on signage.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Service Appointments</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Let clients text you for a quote. A <strong>custom qr code</strong> with pre-filled text "I need a quote" makes it 10x easier.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Retail Support</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Place a <strong>qr code with logo in middle</strong> on product shelf tags for instant texting support.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">SMS QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the qr code generator for sms?", a: "Input the recipient number and the message you want. The <strong>qr code generator for sms</strong> will encode this into a 'SMSTO:' link." },
               { q: "Is the SMS sent automatically?", a: "No. For security, the user's phone will open the message app with the text pre-filled. They still have to hit 'Send'." },
               { q: "Can I use an svg qr code generator for my SMS codes?", a: "Yes, our <strong>qr code svg generator</strong> provides vector files perfect for print ads and billboards." },
               { q: "Are there any costs to scan?", a: "Scanning is free, but standard carrier SMS rates apply to the user when they send the text message." }
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