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

const URLPage: React.FC<PageProps> = (props) => {
  const [url, setUrl] = useState('https://qr-generator.online');

  useEffect(() => {
    document.title = "Custom URL QR Code Generator | Branded QR Maker Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create a professional branded URL QR code. High-resolution SVG exports, custom logos, and unique pattern styles for marketing, menus, and business cards.');
    }
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Professional Link Management
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Custom URL <span className="text-indigo-600">QR Code Maker</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Generate high-quality, scannable portals for your digital content. From restaurant menus to personal portfolios, our <strong>branded QR code generator</strong> ensures your links look as professional as your brand.
          </p>
        </div>
      </section>

      <Workspace type="url" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Enter Your Destination URL</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="https://yourwebsite.com" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-2xl shadow-inner" 
          />
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">A static QR code works forever and requires no internet redirection.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">The Power of Branded URL QR Codes</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                In the modern marketing landscape, a simple black-and-white QR code is often overlooked. Users are increasingly wary of "blind scans"—codes that look generic and offer no visual clues about their destination. By using a <strong>custom QR code maker with logo</strong>, you bridge the trust gap instantly.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our tool allows you to integrate your brand's specific hex colors and central logo, which has been shown to increase scan rates by up to 30%. When a customer sees your official logo in the center of a QR pattern, the psychological barrier to scanning drops, as the asset is recognized as a legitimate extension of your brand.
              </p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Why Choose Static URLs?</h3>
              <ul className="space-y-4 text-sm text-indigo-800 font-medium">
                <li className="flex gap-3"><span>✓</span> <strong>Permanent Longevity:</strong> Your code never expires because the data is hard-coded into the pattern.</li>
                <li className="flex gap-3"><span>✓</span> <strong>Zero Monthly Fees:</strong> Unlike dynamic codes, static ones cost nothing to maintain.</li>
                <li className="flex gap-3"><span>✓</span> <strong>Privacy First:</strong> No intermediate tracking servers mean your users' data stays between them and the destination.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Industry-Specific Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Restaurants & Hospitality</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Replace physical menus with <strong>contactless QR menus</strong>. Add a <strong>QR code with logo</strong> to table tents so guests can browse your offerings without waiting for a server. This is hygienic, cost-effective, and allows for instant digital menu updates.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Real Estate & Signage</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>customizable QR code</strong> to "For Sale" signs. Potential buyers can scan to see a virtual tour or detailed floor plans while standing right in front of the property. Use our <strong>SVG export</strong> for large-scale outdoor printing.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Events & Conferencing</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Link to your presentation slides or event schedule. Place a <strong>URL QR code</strong> on attendee badges or entry posters to ensure everyone has the most up-to-date information on their smartphones.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-display font-black">Technical Excellence: PNG vs SVG</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Understanding the best format for your branded assets.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-400">The Power of SVG</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our <strong>QR code generator SVG</strong> option provides vector-based files. Unlike pixel-based images, an SVG (Scalable Vector Graphics) is a mathematical description of the pattern. This means you can scale it to the size of a billboard or shrink it to a postage stamp without any loss in sharpness or scannability.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-400">Web-Ready PNG & WebP</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                For websites, emails, and social media posts, our high-resolution PNG and WebP exports are optimized for fast loading and clear display on all screens, including Retina and high-DPI displays.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Frequently Asked Questions</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the URL QR code generator really free?", a: "Yes. QR Generator Online provides a professional-grade <strong>custom QR maker</strong> without subscriptions or account requirements. You can create unlimited static codes." },
               { q: "Can I track scans on a static QR code?", a: "Static codes store the URL directly. To track scans, you can use a URL shortener like Bitly or add UTM parameters to your link before generating the code." },
               { q: "How do I add a logo to the middle of my QR?", a: "Simply navigate to the 'Logo' tab in our workspace. Upload your brand mark, and our <strong>QR code with logo in middle</strong> engine will handle the placement and scannability checks." },
               { q: "What is the best size for printing?", a: "For a standard URL on a business card, we recommend a minimum size of 2cm x 2cm. For flyers, 4cm x 4cm is ideal. Always test scan before bulk printing." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore Other Professional Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/wifi-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WiFi Sharing</Link>
            <Link to="/vcard-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/googleform-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Google Forms</Link>
            <Link to="/facebook-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Facebook Groups</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default URLPage;