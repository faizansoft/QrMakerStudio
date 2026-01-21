import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const URLPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('https://qr-generator.online');
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            The Most Used Tool
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Custom QR Code <span className="text-indigo-600">Maker</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Bridge the gap between your physical marketing and your digital presence. Whether it’s a portfolio, a menu, or a social link, our <strong>customizable qr code</strong> tool gives you full creative control.
          </p>
        </div>
      </section>

      <Workspace type="url" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Target URL / Link Address</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="https://example.com" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl shadow-inner" 
          />
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Include http:// or https:// for a working link.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Why Branding Your Links Matters</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              In a world where security is paramount, users are hesitant to scan random black-and-white QR codes. They want to know where they are going. A <strong>custom qr code</strong> that features your brand colors and a <strong>logo in the middle</strong> builds immediate trust. It signals that the destination is official, secure, and professional.
            </p>
            <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100">
              <h4 className="text-lg font-bold text-indigo-900 mb-4">Did you know?</h4>
              <p className="text-sm text-indigo-700 leading-relaxed">Branded QR codes receive up to <strong>30% more scans</strong> than standard ones. When users see a familiar logo, their psychological barrier to scanning drops significantly.</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Personal Portfolios", desc: "Add a <strong>customizable qr code</strong> to your physical resume. Let recruiters jump straight to your live work." },
            { title: "Restaurant Menus", desc: "Ditch the paper. Create a <strong>qr code with logo in middle</strong> to provide a hygienic, digital dining experience." },
            { title: "E-commerce & Retail", desc: "Link directly to product reviews on Amazon or your own store from the physical product packaging." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all">
              <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8">
          <h3 className="text-3xl font-display font-black">Professional Export Standards</h3>
          <p className="text-slate-400 font-medium leading-relaxed">
            Our <strong>qr code generator svg</strong> tool is built for the "real world" of printing. Most online tools export low-res PNGs that look blurry on posters. We provide mathematically perfect <strong>vector files</strong> that you can scale to the size of a building without losing a single pixel of scan quality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['No Pixels', 'Vector Format', 'Transparent Support', 'Ready for Print'].map(item => (
              <div key={item} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">✓</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Frequently Asked Questions</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is this really free?", a: "Yes. No accounts, no credit cards, no 'trial periods'. <strong>QR Generator Online</strong> is a free community tool for professional <strong>custom qr code</strong> creation." },
               { q: "Can I use an SVG for printing?", a: "Always. Our <strong>qr code svg generator</strong> is the gold standard for high-res marketing. Use the SVG for flyers, banners, and business cards." },
               { q: "Will my code ever stop working?", a: "No. These are <strong>static</strong> QR codes. The data is encoded directly into the pattern, so it works forever as long as your website exists." },
               { q: "Can I change the link later?", a: "Because these are static codes, you cannot change the link after printing. If you need that, look for 'Dynamic QR' services—though they usually require a paid monthly fee." }
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

export default URLPage;