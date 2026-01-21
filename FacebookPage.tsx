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

const FacebookPage: React.FC<PageProps> = (props) => {
  const [fb, setFb] = useState('https://facebook.com/');

  useEffect(() => {
    document.title = "Facebook QR Code Generator | Grow Your Brand Community";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a professional Facebook QR code for your page or group. Increase followers and engagement with scannable links. Free SVG exports for print.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 mb-6">
            Social Media Community Building
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Facebook <span className="text-blue-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Bridge your physical and digital worlds. Our <strong>branded Facebook QR maker</strong> allows you to turn your page, group, or personal profile into a scannable gateway, helping you grow your audience with professional style.
          </p>
        </div>
      </section>

      <Workspace type="facebook" value={fb} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facebook Destination URL</label>
          <input 
            type="text" 
            value={fb} 
            onChange={e => setFb(e.target.value)} 
            placeholder="e.g. https://facebook.com/your-brand-page" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-500 outline-none font-bold text-lg shadow-inner" 
          />
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Works for pages, public groups, and personal profile links.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Growing Your Digital Footprint</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                In an era where attention is the most valuable currency, losing a potential follower because they couldn't find your page is a missed opportunity. While people might recognize your brand name, searching for it on Facebook often returns a sea of similar results, making it easy for customers to get lost.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                A <strong>Facebook QR code generator</strong> eliminates this "search friction." By providing a direct, scannable link, you ensure that 100% of the traffic you drive from a physical sign or flyer ends up exactly on your official page. Using our <strong>customizable Facebook QR maker</strong> with your brand's colors and the iconic "f" logo in the middle further reinforces trust and encourages scanning.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100 space-y-4">
              <h3 className="text-lg font-bold text-blue-900">Why Social Marketers Use QRs:</h3>
              <ul className="space-y-3 text-sm text-blue-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Instant Follows:</strong> No searching required.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Group Growth:</strong> Perfect for local community groups.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Visual Trust:</strong> Branded patterns increase scan rates.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Where to Display Facebook QRs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Product Packaging</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Invite customers to join your <strong>Facebook community</strong> by adding a <strong>branded QR code</strong> to your box or label. 
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Event Signage</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>custom Facebook QR</strong> to your booth or stage screen. Let attendees find your photos and updates instantly.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Business Cards</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Turn a networking meeting into a lasting digital connection by adding a <strong>Facebook profile QR</strong> to your card.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Vector Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded social QR maker</strong> is built for the "real world" of professional marketing. For high-quality printing on flyers, posters, and merchandise, we recommend our <strong>SVG vector format</strong>. Unlike standard PNG images, SVG files stay perfectly sharp at any size, ensuring that your <strong>Facebook QR code</strong> scans perfectly whether it is on a sticker or a stadium screen.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Facebook QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the Facebook QR generator free?", a: "Yes. <strong>QR Generator Online</strong> provides this tool free of charge for all brands and creators. No account required." },
               { q: "Does it work for Facebook Groups?", a: "Absolutely. Just paste the URL of your public or private group, and the <strong>custom QR code</strong> will link directly to it." },
               { q: "Can I add a logo to the code?", a: "Yes! Use the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> to boost trust." },
               { q: "Will the code ever expire?", a: "No. These are <strong>static QR codes</strong>. As long as your Facebook URL remains the same, the code will work forever." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore More Branded Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/whatsapp-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WhatsApp Links</Link>
            <Link to="/vcard-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/googleform-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Google Forms</Link>
            <Link to="/url-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default FacebookPage;