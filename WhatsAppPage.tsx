import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "WhatsApp QR Code Generator | Start Chats Without Contacts";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create a WhatsApp QR code with a pre-filled message. Let users start a conversation with you instantly without saving your phone number.');
    }
  }, []);

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
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-filled Message</label>
            <textarea placeholder="Hi! I'd like more information..." value={wa.msg} onChange={e => setWa({...wa, msg: e.target.value})} className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none focus:border-green-500 outline-none font-bold" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">WhatsApp QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Do I need WhatsApp Business?", a: "No. Our generator works for both personal and Business accounts seamlessly." },
               { q: "Is my phone number private?", a: "The QR code will display your phone number to the person who scans it, as it is a direct chat link." },
               { q: "Does the code expire?", a: "Never. As long as you keep your phone number, the <strong>whatsapp qr</strong> will remain active." },
               { q: "Is this a free tool?", a: "Yes, it's 100% free with no tracking and no hidden subscriptions." }
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