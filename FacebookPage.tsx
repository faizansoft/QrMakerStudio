import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const FacebookPage: React.FC<PageProps> = (props) => {
  const [fb, setFb] = useState('https://facebook.com/');
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 mb-6">
            Social Media Expansion
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Facebook <span className="text-blue-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Bridge your physical and digital communities. Our tool lets you <strong>generate facebook qr code</strong> designs for your page, group, or profile in seconds with professional branding.
          </p>
        </div>
      </section>

      <Workspace type="facebook" value={fb} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facebook Profile / Page / Group URL</label>
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <input 
              type="text" 
              value={fb} 
              onChange={e => setFb(e.target.value)} 
              placeholder="https://facebook.com/your-brand-page" 
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg shadow-inner" 
            />
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Include the full URL starting with https://.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Build Community <br/>Everywhere You Go.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Facebook remains one of the most powerful places for brand community. But getting people to search for your name on their phone is a struggle. When you <strong>generate facebook qr code</strong> patterns for your business cards or checkout counter, you make following your brand a one-tap experience.
            </p>
            <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100 flex flex-col gap-4">
               <h4 className="font-bold text-blue-900 uppercase text-[10px] tracking-widest">Marketing Tip</h4>
               <p className="text-sm text-blue-700 leading-relaxed">Don't just use standard black. Match the 'Facebook Blue' (#1877F2) in your <strong>custom qr code</strong> to make it instantly recognizable to social media users.</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Physical Storefronts", desc: "Let window shoppers find your community. A <strong>qr code with logo in middle</strong> signals that your brand is digital-ready." },
             { title: "Product Packaging", desc: "Turn customers into followers. Use our <strong>qr code generator svg</strong> for sharp printing on boxes and bags." },
             { title: "Business Meetings", desc: "Generate a <strong>qr code for facebook profile</strong> to bridge personal networking into professional social circles." }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 relative overflow-hidden">
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl font-display font-black">SVG Vector Quality for Large Scale</h3>
             <p className="text-slate-400 font-medium leading-relaxed max-w-3xl">
               If you're advertising on a banner or billboards, resolution is everything. Our <strong>qr code generator svg</strong> export provides mathematically perfect paths. No pixels, no blur—just clean data that works from 50 feet away as well as it does from 5 inches.
             </p>
             <div className="flex flex-wrap gap-4">
                {['SVG Support', 'PNG Ready', 'Social Optimized', 'Privacy First'].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-slate-800 rounded-full text-[10px] font-black uppercase text-blue-400 tracking-widest">{tag}</span>
                ))}
             </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Facebook QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate facebook qr code?", a: "Copy your Page or Group URL from Facebook, paste it into the tool above, and export your code. You can even add your logo using our <strong>qr code with logo in middle</strong> feature." },
               { q: "Is the facebook qr code permanent?", a: "Yes. Our tool generates <strong>static QR codes</strong>. They will work forever as long as your Facebook URL doesn't change." },
               { q: "Can I use this for groups too?", a: "Absolutely. Our <strong>facebook qr code generator</strong> works for personal profiles, business pages, and public groups seamlessly." },
               { q: "Is the generator free to use?", a: "Yes, <strong>QR Generator Online</strong> is a free community service for all your professional social marketing needs." }
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

export default FacebookPage;