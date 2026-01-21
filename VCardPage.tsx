
import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const VCardPage: React.FC<PageProps> = (props) => {
  const [v, setV] = useState({ first: '', last: '', tel: '', email: '', org: '' });
  const val = `BEGIN:VCARD\nVERSION:3.0\nN:${v.last};${v.first}\nFN:${v.first} ${v.last}\nORG:${v.org}\nTEL;TYPE=CELL:${v.tel}\nEMAIL:${v.email}\nEND:VCARD`;

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-100 mb-6">
            Business Networking
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            QR Business <span className="text-teal-600">Card</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Upgrade your networking with a <strong>qr code business card generator</strong>. Share your details instantly with a <strong>contact qr code generator</strong>.
          </p>
        </div>
      </section>

      <Workspace type="vcard" value={val} {...props}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
            <input type="text" placeholder="John" value={v.first} onChange={e => setV({...v, first: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
          </div>
          <div className="col-span-1 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
            <input type="text" placeholder="Doe" value={v.last} onChange={e => setV({...v, last: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
            <input type="tel" placeholder="+1 234 567 890" value={v.tel} onChange={e => setV({...v, tel: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
            <input type="email" placeholder="john@example.com" value={v.email} onChange={e => setV({...v, email: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Organization</label>
            <input type="text" placeholder="Acme Corp" value={v.org} onChange={e => setV({...v, org: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Why create a qr code visiting card?</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Traditional business cards often end up in the trash. A <strong>qr code business card generator</strong> creates a digital link that saves your information directly to a contacts list. By using a <strong>contact info qr code</strong>, you ensure that potential clients never lose your number. This <strong>vcard qr code generator</strong> follows the industry standard v3.0 format for universal compatibility.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Digital Networking", desc: "Share your <strong>qr code contact card</strong> on your phone screen at conferences for paperless exchange." },
            { title: "Physical Print", desc: "Add a <strong>qr code visiting card</strong> pattern to your physical cards for one-tap contact saving." },
            { title: "Professional vCard", desc: "Our <strong>vcard generator</strong> includes phone, email, and company details in one compact code." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Contact QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How do I generate qr code for contact info?", a: "Fill in the form above with your name and number, and our <strong>contact qr code generator</strong> will create a vCard for you." },
               { q: "What is a qr business card?", a: "A <strong>qr business card</strong> is a digital version of your contact info that can be scanned by any smartphone to save your details instantly." },
               { q: "Is this a free vcard qr code generator?", a: "Yes, you can <strong>generate qr code for contact info</strong> for free, download it, and use it forever without a subscription." },
               { q: "Can I make a qr contact card for multiple people?", a: "Absolutely. Just clear the form and enter new details to use our <strong>qr contact card</strong> tool again." }
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

export default VCardPage;
