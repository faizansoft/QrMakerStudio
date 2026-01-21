import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "Facebook QR Code Generator | Grow Your Brand Community";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a professional Facebook QR code for your page, group, or profile. Increase followers with scannable links in high-resolution SVG format.');
    }
  }, []);
  
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
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facebook URL</label>
          <input 
            type="text" 
            value={fb} 
            onChange={e => setFb(e.target.value)} 
            placeholder="https://facebook.com/your-brand-page" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg shadow-inner" 
          />
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Facebook QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate facebook qr code?", a: "Copy your Page or Group URL from Facebook and paste it into the tool above." },
               { q: "Is the facebook qr code permanent?", a: "Yes. It will work forever as long as your Facebook URL doesn't change." },
               { q: "Can I use this for groups?", a: "Absolutely. It works for profiles, pages, and public groups seamlessly." },
               { q: "Is the generator free?", a: "Yes, it is 100% free for everyone." }
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