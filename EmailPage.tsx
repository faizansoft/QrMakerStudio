
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
            Direct Messaging
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Email <span className="text-sky-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Streamline customer support with a <strong>qr code generator email</strong> tool. Create pre-filled drafts with our <strong>email qr code generator</strong>.
          </p>
        </div>
      </section>

      <Workspace type="email" value={val} {...props}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recipient Email</label>
            <input type="email" value={e.to} onChange={ev => setE({...e, to: ev.target.value})} placeholder="support@brand.com" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Line</label>
            <input type="text" value={e.sub} onChange={ev => setE({...e, sub: ev.target.value})} placeholder="Inquiry about product..." className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Body</label>
            <textarea value={e.body} onChange={ev => setE({...e, body: ev.target.value})} placeholder="Hello, I would like to..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold resize-none" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Professional qr code generator for email</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Encourage customer interaction by using a <strong>qr email generator</strong>. When a user scans the code, their default mail client opens with the recipient, subject, and body already filled in. This is perfect for <strong>qr code generator for email</strong> marketing campaigns or 'Contact Us' displays on product packaging.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Support Desks</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Place an <strong>email qr code generator</strong> output at your front desk for instant customer tickets.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Product Feedback</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Include a <strong>qr email generator</strong> on manuals for quick technical support requests.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Marketing Replies</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Use a <strong>qr code generator email</strong> to let users enter competitions with a single scan.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Email QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the email qr code generator?", a: "Simply enter your email, a subject, and a message. Our <strong>email qr code generator</strong> will create a scannable link instantly." },
               { q: "Is the qr email generator free?", a: "Yes, our <strong>qr email generator</strong> is part of our professional suite and is 100% free to use for commercial projects." },
               { q: "Can I add a logo to my email qr?", a: "Yes, using the 'Logo' tab in the workspace, you can create a <strong>qr code generator email</strong> with your company branding." },
               { q: "Does the code work with Outlook and Gmail?", a: "Yes, the <strong>qr code generator for email</strong> uses standard 'mailto' syntax which works with all major mail apps." }
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
