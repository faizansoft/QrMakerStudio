import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const WhatsAppPage: React.FC<PageProps> = (props) => {
  const [wa, setWa] = useState({ num: '', msg: '' });
  const val = `https://wa.me/${wa.num.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(wa.msg)}`;

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100 mb-6">
            Direct Messaging Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            WhatsApp <span className="text-green-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate the "Add to Contacts" friction. Start conversations instantly with our <strong>whatsapp qr code generator</strong>. The perfect bridge for business support.
          </p>
        </div>
      </section>

      <Workspace type="whatsapp" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number (with country code)</label>
            <input type="tel" placeholder="e.g. 14155552671" value={wa.num} onChange={e => setWa({...wa, num: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold text-lg focus:border-green-500 outline-none shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-filled Message (Optional)</label>
            <textarea placeholder="Hi! I'd like more information about..." value={wa.msg} onChange={e => setWa({...wa, msg: e.target.value})} className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none focus:border-green-500 outline-none font-bold" />
            <p className="text-[9px] text-slate-400 font-bold uppercase">This message will appear in the user's chat box automatically.</p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Turning Scans into Conversations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              The biggest drop-off in customer support happens when a user has to manually save a number to their phone. Our <strong>whatsapp qr code generator</strong> solves this by using the official WhatsApp 'wa.me' API. 
            </p>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              When someone scans your <strong>whatsapp qr</strong>, their chat app opens immediately with your number and a pre-written message. It transforms a cold lead into an active conversation in under two seconds.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-4">Service & Logistics</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Place your <strong>whatsapp qr code</strong> on delivery vehicles. Let customers text for updates instantly without the hassle of a phone call.</p>
           </div>
           <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-4">Event RSVP</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Include a <strong>qr code generator whatsapp</strong> link on invites. Guests can text 'I'll be there!' with one scan, making coordination easy.</p>
           </div>
        </section>

        <section className="bg-green-900 text-white p-12 rounded-[4rem] space-y-6">
          <h3 className="text-3xl font-display font-black">Optimization Tips</h3>
          <p className="text-green-100/80 font-medium leading-relaxed">
            To get the best results from your <strong>whatsapp qr code generator</strong>, we recommend adding a <strong>logo in the middle</strong> (the WhatsApp icon or your own brand). This visually confirms the scan destination. Also, keep your pre-filled message friendly and action-oriented.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {['No App Required', 'Direct wa.me Link', 'Desktop & Mobile', 'Static & Permanent'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-green-800/50 rounded-full text-[9px] font-black uppercase tracking-widest">{tag}</span>
            ))}
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">WhatsApp QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Do I need WhatsApp Business?", a: "No. Our <strong>whatsapp qr code generator</strong> works for both personal and Business accounts seamlessly." },
               { q: "Is my phone number private?", a: "The QR code will display your phone number to the person who scans it, as it is a direct chat link. This tool is best for public-facing business numbers." },
               { q: "Does the code expire?", a: "Never. As long as you keep your phone number, the <strong>whatsapp qr</strong> will remain active forever." },
               { q: "Is this a free qr code generator whatsapp tool?", a: "Yes, it's 100% free with no tracking, no redirects, and no hidden subscriptions." }
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

export default WhatsAppPage;