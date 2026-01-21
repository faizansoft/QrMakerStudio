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
            Social Growth Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Facebook QR <span className="text-blue-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Grow your audience instantly. Use our tool to <strong>generate facebook qr code</strong> for your profile, business page, or group with custom branding.
          </p>
        </div>
      </section>

      <Workspace type="facebook" value={fb} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facebook Profile / Page URL</label>
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">f</div>
            <input 
              type="text" 
              value={fb} 
              onChange={e => setFb(e.target.value)} 
              placeholder="https://facebook.com/yourbrand" 
              className="w-full pl-12 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg" 
            />
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Include the full URL starting with https://.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Grow your social presence with a Facebook QR Code</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-3xl mx-auto">
            Offline traffic shouldn't be lost. When you <strong>generate facebook qr code</strong> patterns for your business cards or storefront, you make it effortless for customers to follow, like, and engage with your brand on social media.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Business Pages", desc: "Drive customer reviews and likes by placing a <strong>custom qr code</strong> on your check-out counter." },
            { title: "Facebook Groups", desc: "Easily onboard new members at events with a <strong>qr code with logo in middle</strong> of your group badge." },
            { title: "Event Promotion", desc: "Link directly to Facebook Events. Download as <strong>qr code generator svg</strong> for high-quality posters." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Facebook QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate facebook qr code?", a: "Copy your Facebook page URL, paste it into the tool above, and customize your colors. You can even add a <strong>qr code with logo in middle</strong> for professional branding." },
               { q: "Does the code expire?", a: "No. These are static QR codes. Once you <strong>generate facebook qr code</strong> designs, they will work forever unless your Facebook URL changes." },
               { q: "Can I download as SVG?", a: "Yes! Our <strong>svg qr code generator</strong> allows you to download vector files that stay sharp on huge banners." },
               { q: "Is it safe for my privacy?", a: "Absolutely. Our <strong>custom qr code maker</strong> processes everything in your browser. No personal data is stored on our servers." }
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