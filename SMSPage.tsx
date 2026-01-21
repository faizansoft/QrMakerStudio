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

const SMSPage: React.FC<PageProps> = (props) => {
  const { t } = useLanguage();
  const [s, setS] = useState({ num: '', msg: '' });
  const val = `smsto:${s.num}:${s.msg}`;

  useEffect(() => {
    document.title = t('meta_sms_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_sms_desc'));
    }
  }, [t]);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-100 mb-6">
            Text Marketing Automation
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            SMS Text <span className="text-teal-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Revolutionize your customer outreach. Our <strong>branded SMS QR generator</strong> pre-fills the recipient number and the message body, making it effortless for leads to start a conversation with your brand.
          </p>
        </div>
      </section>

      <Workspace type="sms" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recipient Phone Number</label>
            <input type="tel" value={s.num} onChange={e => setS({...s, num: e.target.value})} placeholder="e.g. +14155552671" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-teal-500 outline-none shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-filled Message (Optional)</label>
            <textarea value={s.msg} onChange={e => setS({...s, msg: e.target.value})} placeholder="e.g. I'm interested in a free quote..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none font-bold focus:border-teal-500 outline-none" />
            <p className="text-[9px] text-slate-400 font-bold uppercase">This message will appear automatically in the user's messaging app.</p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">The Psychology of the SMS Lead</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Text messaging is the most personal and high-conversion communication channel available to modern businesses. However, many customers hesitate to start a conversation because they don't know what to say or feel overwhelmed by the effort of typing out a manual request. 
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                By using an <strong>SMS QR code with pre-filled message</strong>, you are doing the "thinking" for your customer. You provide a clear Call to Action (CTA) like "Text us for a quote" and then fulfill that promise instantly when they scan. This reduces the cognitive load on the customer and results in significantly higher conversion rates for your marketing campaigns.
              </p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Marketing Benefits</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><span>✓</span> <strong>Instant Lead Capture:</strong> Get their number immediately.</li>
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><span>✓</span> <strong>Higher Engagement:</strong> People prefer texting over calling.</li>
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><span>✓</span> <strong>Brand Consistency:</strong> Use your brand colors in the QR pattern.</li>
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><span>✓</span> <strong>High-Res SVG:</strong> Perfect for billboards and posters.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Where to use SMS QR Codes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Retail Windows</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                "Text JOIN to learn about new arrivals." Place a <strong>custom SMS QR</strong> on your storefront to capture leads even when your doors are closed.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Real Estate Flyers</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                "Text INFO for property details." A <strong>scannable SMS link</strong> on a flyer allows potential buyers to get automated info while standing on the curb.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Support Channels</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add an <strong>SMS QR code</strong> to your product packaging. Let users text your support team directly if they have assembly questions or issues.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-teal-600 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Universal Compatibility Standards</h2>
          <p className="text-teal-50 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded SMS QR maker</strong> uses the global `smsto:` protocol. This standard is natively supported by both iOS (iPhone) and Android devices. For professional marketing materials, we recommend our <strong>QR code SVG export</strong>. Unlike pixel-based images, SVG files stay perfectly sharp at any print size, ensuring your leads can always scan successfully.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">SMS QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the SMS QR code generator free?", a: "Yes. All tools on <strong>QR Generator Online</strong> are provided free of charge for professional and commercial use. No accounts or credits needed." },
               { q: "Will scanning automatically send the text?", a: "No. For privacy and security, the scan will open the messaging app with the number and message pre-filled. The user must then tap the 'Send' button." },
               { q: "Does this work with international numbers?", a: "Yes. Ensure you include the country code (e.g., +1) at the start of the recipient number for global compatibility." },
               { q: "Can I add a logo to my SMS QR?", a: "Yes. Use the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> to enhance your professional branding." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore More Digital Gateways</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/whatsapp-qr-code-generator" title="Go to WhatsApp Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WhatsApp Messaging</Link>
            <Link to="/email-qr-code-generator" title="Go to Email Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Email Automation</Link>
            <Link to="/phone-qr-code-generator" title="Go to Phone Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Phone Calls</Link>
            <Link to="/url-qr-code-generator" title="Go to URL Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SMSPage;