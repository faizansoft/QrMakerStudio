import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const EmailPage: React.FC<PageProps> = (props) => {
  const [e, setE] = useState({ to: '', sub: '', body: '' });
  const val = `mailto:${e.to}?subject=${encodeURIComponent(e.sub)}&body=${encodeURIComponent(e.body)}`;
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-sky-100 mb-6">
            Direct Email Automation
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Email <span className="text-sky-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Stop losing support requests to typos. Our <strong>qr code generator email</strong> tool pre-fills the address, subject, and message, making customer communication effortless.
          </p>
        </div>
      </section>

      <Workspace type="email" value={val} {...props}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recipient Email Address</label>
            <input type="email" value={e.to} onChange={ev => setE({...e, to: ev.target.value})} placeholder="support@brand.com" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Default Subject Line</label>
            <input type="text" value={e.sub} onChange={ev => setE({...e, sub: ev.target.value})} placeholder="Product Inquiry - Support Ticket" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-written Email Body</label>
            <textarea value={e.body} onChange={ev => setE({...e, body: ev.target.value})} placeholder="Hello team, I need help with..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold resize-none" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Professional qr code generator for email</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Customer support often breaks down because the barrier to entry is too high. A <strong>qr email generator</strong> eliminates the friction of searching for a contact address and drafting a formal message. When a user scans your code, their mail app opens with a professional draft ready to go.
            </p>
            <div className="p-8 bg-sky-50 rounded-[3rem] border border-sky-100">
               <h4 className="font-bold text-sky-900 mb-2">Workflow Tip</h4>
               <p className="text-sm text-sky-700 leading-relaxed">Use unique subject lines in your <strong>email qr code generator</strong> for different marketing campaigns. This allows you to automatically filter and route incoming emails to the right department.</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Technical Support", desc: "Place a <strong>qr code generator email</strong> on hardware manuals. Let users send a diagnostic request with one scan." },
             { title: "Warranty Registration", desc: "Include a <strong>qr code with logo in middle</strong> on product packaging. Make registering a product as easy as sending an email." },
             { title: "Real Estate Agents", desc: "Use a <strong>custom qr code</strong> on house listings. 'Email for a private viewing' pre-fills the property address in the subject." }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-sky-200 transition-all">
                <h4 className="font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8">
           <h3 className="text-3xl font-display font-black">Designed for Print Professionals</h3>
           <p className="text-slate-400 font-medium leading-relaxed">
             A blurry QR code is an unusable QR code. Our <strong>qr code generator svg</strong> tool ensures that your <strong>email qr</strong> remains razor-sharp at any size. From small stickers to massive billboards, we provide the vector paths needed for a perfect scan every time.
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {['SVG Format', 'PNG Export', 'WebP Optimized', 'Transparency Support'].map(f => (
               <div key={f} className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                 </div>
                 <span className="text-[9px] font-black uppercase text-slate-500">{f}</span>
               </div>
             ))}
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Email QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the email qr code generator?", a: "Input the recipient email, subject, and body. The tool will encode a 'mailto:' link into your <strong>custom qr code</strong> instantly." },
               { q: "Is the qr code generator for email free?", a: "Yes, it is 100% free with no limits on the number of codes or scans." },
               { q: "Will this work with Gmail and Outlook?", a: "Yes, our <strong>email qr code generator</strong> uses standard protocols that all major email clients recognize." },
               { q: "Can I track who scanned it?", a: "Since we generate <strong>static QR codes</strong> for privacy, we don't track the scans. However, you'll know it worked when you receive the pre-filled email!" }
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

export default EmailPage;