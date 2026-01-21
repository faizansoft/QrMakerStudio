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

const WhatsAppPage: React.FC<PageProps> = (props) => {
  const { t } = useLanguage();
  const [wa, setWa] = useState({ num: '', msg: '' });
  const val = `https://wa.me/${wa.num.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(wa.msg)}`;

  useEffect(() => {
    document.title = t('meta_whatsapp_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_whatsapp_desc'));
    }
  }, [t]);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100 mb-6">
            Direct Messaging Solutions
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            WhatsApp <span className="text-green-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate the "Add to Contacts" hurdle. Our <strong>branded WhatsApp QR maker</strong> allows customers to start a chat with you instantly, complete with a pre-filled message that starts the sale for you.
          </p>
        </div>
      </section>

      <Workspace type="whatsapp" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Phone Number</label>
            <input type="tel" placeholder="e.g. 14155552671" value={wa.num} onChange={e => setWa({...wa, num: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold text-lg focus:border-green-500 outline-none shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-filled Chat Message (Optional)</label>
            <textarea placeholder="e.g. Hi! I'm interested in your product..." value={wa.msg} onChange={e => setWa({...wa, msg: e.target.value})} className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none focus:border-green-500 outline-none font-bold" />
            <p className="text-[9px] text-slate-400 font-bold uppercase">This text will appear in the user's chat box automatically when they scan.</p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Conversational Commerce at Scale</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                WhatsApp has become the world's most popular messaging platform, and for many businesses, it is the primary channel for support and sales. However, the standard process of "saving a number to contacts" before being able to send a message is a major barrier for new customers. 
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                By using a <strong>WhatsApp QR code with pre-filled message</strong>, you remove this friction entirely. A single scan bypasses the contact saving process and puts the user directly into a conversation with your brand. Using our <strong>customizable WhatsApp QR maker</strong>, you can also include a <strong>logo in the middle</strong> and match the WhatsApp green aesthetic, ensuring your customers know they are entering a safe, verified support channel.
              </p>
            </div>
            <div className="p-8 bg-green-50 rounded-[3rem] border border-green-100 space-y-4">
              <h3 className="text-lg font-bold text-green-900">Why Businesses Love WhatsApp QRs:</h3>
              <ul className="space-y-3 text-sm text-green-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>One-Tap Chat:</strong> No number saving required.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Sales Automation:</strong> Pre-filled messages start the deal.</li>
                <li className="flex gap-2"><span>✓</span> <strong>High Engagement:</strong> 98% open rates for messaging apps.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Where to use WhatsApp QRs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Website 'Contact Us'</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add an <strong>email alternative QR code</strong> to your footer. Let users switch from desktop to mobile chat instantly.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Marketing Brochures</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Print a <strong>WhatsApp QR link</strong> on your physical marketing materials to get immediate feedback or inquiries.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Food Delivery Labels</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Include a <strong>support QR</strong> on order bags. Let customers report issues or leave reviews via WhatsApp.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded WhatsApp QR maker</strong> uses the official `wa.me` short-link API. This ensures maximum compatibility and speed across all device types. For professional printing on business cards and posters, we recommend our <strong>SVG vector format</strong>. This ensures that the small dots of the QR pattern remain perfectly clear, guaranteeing a 100% scan rate even at small sizes.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">WhatsApp QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the WhatsApp QR generator free?", a: "Yes. <strong>QR Generator Online</strong> provides this tool free for all businesses and individuals. No account required." },
               { q: "Will this work for Personal and Business accounts?", a: "Absolutely. Our <strong>WhatsApp QR generator</strong> works for standard WhatsApp and WhatsApp Business accounts seamlessly." },
               { q: "Can I add a logo to the code?", a: "Yes! Use the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> to boost trust." },
               { q: "Does the code expire?", a: "No. These are <strong>static QR codes</strong>. As long as your WhatsApp number remains active, the code will work forever." }
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
            <Link to="/facebook-qr-code-generator" title="Go to Facebook Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Facebook Growth</Link>
            <Link to="/email-qr-code-generator" title="Go to Email Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Email Automation</Link>
            <Link to="/vcard-qr-code-generator" title="Go to vCard Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/url-qr-code-generator" title="Go to URL Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default WhatsAppPage;