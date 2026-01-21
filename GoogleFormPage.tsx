import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const GoogleFormPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('');
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-100 mb-6">
            Feedback & Survey Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Google Form <span className="text-purple-600">QR Code</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Stop losing potential survey responses. Use our <strong>qr code generator for google forms</strong> to make feedback as easy as a single scan.
          </p>
        </div>
      </section>

      <Workspace type="googleform" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Google Form Link</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="https://forms.gle/your-form-id" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-purple-500 outline-none font-bold text-2xl shadow-inner" 
          />
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
            <p className="text-[11px] text-purple-700 font-bold leading-relaxed">
              <b>Pro Optimization:</b> Shortening your URL (forms.gle) results in a less dense QR pattern, which significantly improves scan speed in low-light environments.
            </p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Better Data Through Better Access</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Collecting feedback is hard. Whether it’s at a trade show or a dinner table, people rarely have the patience to type in a long URL. A <strong>google form qr code</strong> eliminates that hurdle. It takes the user directly to your survey, questionnaire, or registration page.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Our <strong>google form qr code generator</strong> is built for scale. If you're printing 10,000 feedback cards, you need a code that works every time. We offer high-res <strong>SVG exports</strong> to ensure your survey access remains perfect at any print size.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-purple-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-4">Event Registrations</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Add a <strong>qr code for google form</strong> to your check-in desk. Let guests sign up on their own devices without the wait.</p>
           </div>
           <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-purple-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-4">Lead Generation</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Print a branded <strong>google forms qr code</strong> on flyers. Capture interested customers while your message is fresh in their minds.</p>
           </div>
           <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-purple-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-4">Workshop Feedback</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Display a large <strong>qr code generator for google forms</strong> output on your final slide. Get 100% completion rates before the session ends.</p>
           </div>
        </section>

        <section className="bg-purple-900 text-white p-12 rounded-[4rem] space-y-8">
           <h3 className="text-3xl font-display font-black">Branding Your Surveys</h3>
           <p className="text-purple-100/80 font-medium leading-relaxed">
             A survey feels more official when it’s branded. Use our <strong>customizable qr code</strong> tools to match your form's purple theme or your company's palette. Adding a <strong>logo in the middle</strong> can increase scan confidence by signaling that the form is legitimately yours.
           </p>
           <div className="flex gap-4">
             {['Google Forms optimized', 'High-Res SVG', 'Static & Permanent', 'Zero Tracking'].map(tag => (
               <span key={tag} className="px-4 py-1 bg-purple-800/50 border border-purple-700 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
             ))}
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Google Form QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate qr code for google form?", a: "Go to your Google Form, click 'Send', copy the 'Link', and paste it into our <strong>google forms qr code generator</strong> above." },
               { q: "Can I use the QR code in print materials?", a: "Yes! Our <strong>qr code generator svg</strong> export provides high-quality vector files specifically for professional printing." },
               { q: "Does the link ever expire?", a: "No. The QR code is a direct link to your form. As long as your Google Form is active, the <strong>qr code for google form</strong> will work." },
               { q: "Is this tool free for business use?", a: "Absolutely. <strong>QR Generator Online</strong> is free for everyone, with no limits on scans or number of codes." }
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

export default GoogleFormPage;