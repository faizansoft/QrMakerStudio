import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    document.title = "vCard QR Code Generator | Professional Digital Business Cards";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a professional QR code business card using the vCard 3.0 standard. Let contacts save your info instantly. High-quality SVG for networking.');
    }
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-100 mb-6">
            Modern Networking Solutions
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Digital Business <span className="text-teal-600">Card Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Stop handing out paper that gets thrown away. Our <strong>vCard QR code generator</strong> creates a permanent digital link that saves your contact information directly to a smartphone in one tap.
          </p>
        </div>
      </section>

      <Workspace type="vcard" value={val} {...props}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
            <input type="text" placeholder="e.g. John" value={v.first} onChange={e => setV({...v, first: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-1 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
            <input type="text" placeholder="e.g. Doe" value={v.last} onChange={e => setV({...v, last: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
            <input type="tel" placeholder="+1 234 567 890" value={v.tel} onChange={e => setV({...v, tel: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
            <input type="email" placeholder="john@example.com" value={v.email} onChange={e => setV({...v, email: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company / Org</label>
            <input type="text" placeholder="Global Brand Studio" value={v.org} onChange={e => setV({...v, org: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Networking, Evolved.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Traditional business cards are relics of a slower age. They are easily lost, expensive to print, and offer no easy way for a contact to actually save your details. A <strong>QR code business card</strong> changes the dynamic of every professional meeting.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                When a new contact scans your <strong>branded vCard QR code</strong>, their smartphone automatically parses your first name, last name, phone number, and organization. They are prompted with a single "Create New Contact" button. No typing, no spelling errors, and zero friction. This ensures you end up in their digital contact list—the most valuable real estate in modern business.
              </p>
            </div>
            <div className="p-10 bg-teal-50 rounded-[3rem] border border-teal-100 shadow-sm flex flex-col justify-center gap-6">
               <h3 className="text-xl font-bold text-teal-900">Why Use Our vCard Tool?</h3>
               <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-teal-800 font-medium"><span>✓</span> <strong>vCard 3.0 Standard:</strong> Maximum compatibility with iOS, Android, and Outlook.</li>
                  <li className="flex gap-3 text-sm text-teal-800 font-medium"><span>✓</span> <strong>High Data Density:</strong> Our patterns are optimized for fast scanning even with long names.</li>
                  <li className="flex gap-3 text-sm text-teal-800 font-medium"><span>✓</span> <strong>Center Logo Support:</strong> Build trust by placing your professional headshot or brand logo in the middle.</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Where to Display Your vCard QR</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Phone Wallpapers</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Set your <strong>custom QR code contact card</strong> as your lock screen wallpaper. You'll never need to reach for a wallet again—just show your phone and let them scan.
              </p>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Email Signatures</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Include a <strong>digital business card QR</strong> in your email footer. It allows clients to save your mobile number to their phone while they are reading your message on their computer.
              </p>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Presentation Slides</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>vCard QR code</strong> to the final slide of your keynote. Let hundreds of attendees save your contact information simultaneously without waiting in line at the podium.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Vector Standards for Print</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Most online tools export low-quality images that look blurry when printed on visiting cards. Our <strong>QR code SVG generator</strong> provides mathematically perfect vector files. Whether you are printing 50 cards or 5,000, your <strong>custom QR code</strong> will remain sharp, professional, and 100% scannable.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             <span className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-teal-400">Illustrator Ready</span>
             <span className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-teal-400">CMYK Optimized</span>
             <span className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-teal-400">Zero Pixelation</span>
          </div>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">vCard FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is a vCard QR code generator secure?", a: "Yes. Our tool handles your contact information locally in your browser. We never store or transmit your phone number or email address to our servers." },
               { q: "What is the difference between a vCard and a QR contact?", a: "A vCard (.vcf) is the standard file format for digital cards. Our <strong>vCard QR generator</strong> encodes this standard format so every smartphone knows how to read it." },
               { q: "Can I include my LinkedIn or Website?", a: "To keep the QR pattern simple and easy to scan, we focus on the core contact fields. For complex links, we recommend our <strong>URL QR tool</strong>." },
               { q: "How do I ensure it scans quickly?", a: "Use high contrast (dark pattern on light background) and avoid adding too much text in the 'Organization' field, as more text makes the pattern denser." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Discover More Branded Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/url-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">URL Maker</Link>
            <Link to="/wifi-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WiFi Sharing</Link>
            <Link to="/email-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Email Automation</Link>
            <Link to="/phone-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Phone Dialing</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default VCardPage;