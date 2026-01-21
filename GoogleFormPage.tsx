import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Workspace from './Workspace';
import { QRConfig } from './types';
import { useLanguage } from './context/LanguageContext';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const GoogleFormPage: React.FC<PageProps> = (props) => {
  const { t } = useLanguage();
  const [url, setUrl] = useState('');

  useEffect(() => {
    document.title = t('meta_googleform_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_googleform_desc'));
    }
  }, [t]);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-100 mb-6">
            Feedback & Insights Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Google Form <span className="text-purple-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Maximize your survey response rates. Our <strong>branded Google Form QR maker</strong> turns complex survey links into a simple, scannable portal, making it easier for your audience to provide the insights you need.
          </p>
        </div>
      </section>

      <Workspace type="googleform" value={url} {...props}>
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Paste Your Google Form Link</label>
          <input 
            type="text" 
            value={url} 
            onChange={e => setUrl(e.target.value)} 
            placeholder="e.g. https://forms.gle/abc-123..." 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-purple-500 outline-none font-bold text-2xl shadow-inner" 
          />
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Works with both full and shortened Google Form URLs.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Improving Data Quality Through Ease of Use</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                The success of any survey or feedback form depends entirely on the volume and quality of responses. For physical businesses and events, the biggest hurdle to getting data is the transition from a physical person to a digital form. Manual typing of long, complex Google Form URLs is the primary reason why response rates fail.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                By providing a <strong>custom Google Form QR code</strong> on your table tents, posters, or packaging, you're making participation frictionless. A single scan launches the form in the user's browser, ready to fill. Using our <strong>customizable QR maker with logo</strong>, you can brand the code with the iconic Google purple (#673ab7) and your own logo to create a professional, verified look that encourages more scans.
              </p>
            </div>
            <div className="p-8 bg-purple-50 rounded-[3rem] border border-purple-100 space-y-4">
              <h3 className="text-lg font-bold text-purple-900">Why Researchers Use Google Form QRs:</h3>
              <ul className="space-y-3 text-sm text-purple-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Instant Access:</strong> No manual link typing.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Mobile Optimized:</strong> Most users take surveys on phones.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Trust & Security:</strong> Branded patterns increase engagement.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Top Use Cases for Survey QRs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Customer Feedback</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Place a <strong>survey QR code</strong> on restaurant table tents. Get real-time feedback while the dining experience is fresh in their minds.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Event Registration</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add an <strong>RSVP QR code</strong> to your physical posters. Attendees can sign up for workshops or newsletters on the spot.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Academic Research</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Display <strong>research QR links</strong> in campus halls or community centers to reach a diverse physical audience for your studies.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded Google Form QR maker</strong> works with both standard and shortened (forms.gle) URLs. For high-quality printing on survey flyers and table tents, we recommend our <strong>SVG vector format</strong>. This ensuring that your <strong>Google Form QR code</strong> remains mathematically perfect and scannable even at small sizes or on textured paper materials.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Google Form QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the Google Form QR generator free?", a: "Yes. <strong>QR Generator Online</strong> provides this tool free of charge for all businesses and researchers. No account required." },
               { q: "Can I use the shortened URL?", a: "Yes. We highly recommend using the 'Shorten URL' option in Google Forms before pasting, as it results in a cleaner, faster-scanning QR pattern." },
               { q: "Can I add my logo to the code?", a: "Absolutely. Use the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> to boost trust." },
               { q: "Does the code ever expire?", a: "No. These are <strong>static QR codes</strong>. As long as your Google Form is active and accepting responses, the code will work forever." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore Related Digital Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/url-qr-code-generator" title="Go to URL Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">URL Maker</Link>
            <Link to="/facebook-qr-code-generator" title="Go to Facebook Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Facebook Groups</Link>
            <Link to="/vcard-qr-code-generator" title="Go to vCard Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Business Cards</Link>
            <Link to="/location-qr-code-generator" title="Go to Location Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Maps Navigation</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default GoogleFormPage;