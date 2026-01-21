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
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              When someone scans your <strong>sms qr code</strong>, their phone doesn't just open a blank screen—it's already prepared to say "I'm interested in the property on Oak Street" or "I'd like a quote for plumbing." All they have to do is tap send.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Real Estate Agents", desc: "Use a <strong>qr code generator for sms</strong> on lawn signs. Let buyers text for a digital brochure instantly." },
             { title: "Repair Services", desc: "Include a <strong>qr code with logo in middle</strong> on your fridge magnets. 'Text for an appointment' with one scan." },
             { title: "Retail Discounts", desc: "Place a <strong>custom qr code</strong> near the checkout. 'Text JOIN to get 10% off' becomes a seamless experience." }
           ].map((item, idx) => (
             <div key={idx} className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:border-teal-200 transition-all">
                <h4 className="font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-teal-900 text-white p-12 rounded-[4rem] flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-display font-black">Bulk Campaign Ready</h3>
            <p className="text-teal-100/70 font-medium leading-relaxed">
              If you're running a massive outdoor advertising campaign, you need reliability. Our <strong>qr code generator svg</strong> export provides high-resolution vector data that stays readable even when scanned from across a street or from a moving vehicle.
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 mt-3">Free Unlimited Downloads</span>
            </div>
          </div>
          <div className="w-full md:w-64 aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center p-8">
             <div className="w-full h-full bg-teal-400/20 rounded-2xl animate-pulse"></div>
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">SMS QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to make a qr code for a phone number and text?", a: "Use the tool above. Enter the destination number and your pre-filled text. Our <strong>qr code generator for sms</strong> handles the rest." },
               { q: "Does this work on iPhone and Android?", a: "Yes. Both major operating systems support the 'smsto:' prefix, ensuring a universal experience for all your customers." },
               { q: "Is the data private?", a: "Absolutely. We do not log the phone numbers or messages you enter. The <strong>sms qr code generator</strong> happens entirely in your local browser session." },
               { q: "Can I add a custom logo?", a: "Yes! Use the 'Logo' tab to create a <strong>qr code with logo in middle</strong> to boost trust and scan rates for your campaign." }
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