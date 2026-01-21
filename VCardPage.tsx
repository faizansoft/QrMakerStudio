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
            Modern Networking Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Digital Business <span className="text-teal-600">Card</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Paper cards are easily lost or thrown away. Build a <strong>qr code business card generator</strong> link that saves your info directly to a smartphone in one tap.
          </p>
        </div>
      </section>

      <Workspace type="vcard" value={val} {...props}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
            <input type="text" placeholder="John" value={v.first} onChange={e => setV({...v, first: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-1 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
            <input type="text" placeholder="Doe" value={v.last} onChange={e => setV({...v, last: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
            <input type="tel" placeholder="+1 234 567 890" value={v.tel} onChange={e => setV({...v, tel: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
            <input type="email" placeholder="john@example.com" value={v.email} onChange={e => setV({...v, email: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Organization</label>
            <input type="text" placeholder="Acme Corp" value={v.org} onChange={e => setV({...v, org: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Networking, Evolved.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              We’ve all been there: you meet someone great at a conference, you hand them your card, and by the next morning, that card is at the bottom of a bag or in a hotel wastebasket. 
            </p>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              A <strong>qr code business card</strong> is permanent. When someone scans it, their phone prompts them to "Create New Contact". Your name, number, and email are instantly saved into their digital life. No typing, no typos, no lost leads.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Conference Hack", desc: "Set your <strong>qr code contact card</strong> as your phone wallpaper. Instant networking without reaching for your wallet." },
            { title: "Real Estate Savvy", desc: "Add a <strong>qr code visiting card</strong> to house signs. Let potential buyers save your info while standing on the curb." },
            { title: "Eco-Friendly Choice", desc: "Ditch the paper and save the trees. Use our <strong>vcard qr code generator</strong> to go 100% paperless." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </section>

        <section className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 space-y-8">
           <h3 className="text-2xl font-display font-black text-slate-900">Universal Compatibility</h3>
           <p className="text-slate-600 font-medium leading-relaxed">
             Our <strong>vcard qr code generator</strong> uses the industry-standard <strong>vCard 3.0 format</strong>. This ensures that whether your contact uses an iPhone, a Samsung, or a Pixel, the data will be recognized and sorted into the correct fields (First Name, Last Name, Org, etc.) without any third-party apps.
           </p>
           <div className="flex gap-4">
             {['iPhone (iOS)', 'Android', 'Outlook', 'Google Contacts'].map(sys => (
               <span key={sys} className="px-4 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">{sys}</span>
             ))}
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">vCard FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is it safe to put my phone number in a QR code?", a: "Yes. The QR code only contains the data you enter. It is a <strong>static</strong> code, meaning we do not track who scans it or store your info on our servers." },
               { q: "How do I save the contact on my phone?", a: "Just open your camera, point it at the code, and tap the notification. Your phone will ask if you want to 'Add to Contacts'." },
               { q: "Can I add my logo to the card?", a: "Yes! Use the 'Logo' tab in our workspace to create a <strong>qr code with logo in middle</strong> for your professional brand." },
               { q: "What is a vCard exactly?", a: "A vCard (.vcf) is a virtual business card file format. It's the digital standard for exchanging contact information globally." }
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