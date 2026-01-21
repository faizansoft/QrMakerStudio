
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
            Social Messaging
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            WhatsApp <span className="text-green-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Start conversations instantly with our <strong>whatsapp qr code generator</strong>. The easiest <strong>qr code generator whatsapp</strong> tool for business.
          </p>
        </div>
      </section>

      <Workspace type="whatsapp" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Number (with Country Code)</label>
            <input type="tel" placeholder="e.g. 14155552671" value={wa.num} onChange={e => setWa({...wa, num: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold text-lg focus:border-green-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Default Message</label>
            <textarea placeholder="Hi! I have a question about..." value={wa.msg} onChange={e => setWa({...wa, msg: e.target.value})} className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none focus:border-green-500 outline-none font-bold" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Grow your business with a whatsapp qr code generator</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            In the modern digital landscape, speed is everything. A <strong>whatsapp qr code generator</strong> allows your customers to bypass the 'Add to Contacts' step and chat with you immediately. Whether for sales, support, or general inquiries, our <strong>qr code generator whatsapp</strong> is built to increase your conversion rates and engagement.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Direct Support</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Add a <strong>whatsapp qr code generator</strong> link to your website header for instant customer service.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Offline-to-Online</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Print your <strong>qr code generator whatsapp</strong> on posters or business cards to bring physical traffic to your digital chat.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">WhatsApp QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is this a free whatsapp qr code generator?", a: "Yes, our <strong>whatsapp qr code generator</strong> is 100% free and creates permanent links for your business." },
               { q: "How do I create a whatsapp qr code?", a: "Input your full phone number with country code and a welcome message. The <strong>qr code generator whatsapp</strong> will update automatically." },
               { q: "Can I track scans on my whatsapp qr?", a: "Since we generate static codes for privacy, we don't track them. However, you can see new chats initiated via the pre-filled message." },
               { q: "Does this work for WhatsApp Business?", a: "Absolutely. Our <strong>whatsapp qr code generator</strong> works for both personal and Business accounts." }
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
