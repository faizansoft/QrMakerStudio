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

const PhonePage: React.FC<PageProps> = (props) => {
  const { t } = useLanguage();
  const [num, setNum] = useState('');

  useEffect(() => {
    document.title = t('meta_phone_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_phone_desc'));
    }
  }, [t]);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-rose-100 mb-6">
            Direct Voice Communication
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Phone Call <span className="text-rose-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate the hurdle of manual dialing. Our <strong>branded phone QR generator</strong> creates an instant link that opens a smartphone's dialer automatically. One scan, one tap, and your customers are connected to your team.
          </p>
        </div>
      </section>

      <Workspace type="phone" value={`tel:${num}`} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Phone Number</label>
          <input 
            type="tel" 
            value={num} 
            onChange={e => setNum(e.target.value)} 
            placeholder="e.g. +14155552671" 
            className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-2xl focus:border-rose-500 shadow-inner" 
          />
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Always include your country code for international compatibility.</p>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Reduce Friction, Increase Sales.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                In a mobile-first world, your customers expect instant gratification. Asking a potential lead to memorize a 10-digit number from a sign, flyer, or website and then type it manually into their phone dialer is a massive point of friction. Every digit typed is a moment where a conversion can be lost.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                A <strong>customizable phone QR code</strong> solves this by using the universal `tel:` protocol. When scanned, the smartphone recognizes the instruction and pre-fills the dialer with your exact number. It is the most efficient way to drive inbound calls for emergency services, sales consultations, and customer support.
              </p>
            </div>
            <div className="p-8 bg-rose-50 rounded-[3rem] border border-rose-100 space-y-4">
              <h3 className="text-lg font-bold text-rose-900">Why Professionals Use Phone QRs:</h3>
              <ul className="space-y-3 text-sm text-rose-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Zero Errors:</strong> Eliminates wrong numbers from manual typing.</li>
                <li className="flex gap-2"><span>✓</span> <strong>High Visibility:</strong> Perfect for store windows and "For Sale" signs.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Brand Trust:</strong> Add your business logo to the center for a verified look.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Best Practices for Placement</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Outdoor Signage</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Whether it's a real estate sign or a construction site banner, a <strong>phone number QR code</strong> allows passersby to call for info while they are actually looking at your work. Use our <strong>SVG export</strong> for large-scale clarity.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Direct Mail & Flyers</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>custom QR code</strong> to your physical mailers. Instead of just listing your number, provide the scannable shortcut that gets the phone ringing immediately.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">In-Store Displays</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Help desk unattended? Place a <strong>scannable call link</strong> on your counter so customers can reach a remote manager or support agent instantly.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded QR maker</strong> ensures that your <strong>phone call QR code</strong> complies with international telecom standards. By using the `tel:` URI scheme, we ensure compatibility across all major mobile operating systems, including iOS, Android, and HarmonyOS. For professional printing, we recommend our <strong>SVG vector format</strong> to maintain sharp edges on small business cards or large billboards.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Frequently Asked Questions</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the phone QR generator really free?", a: "Yes. Like all tools on QR Generator Online, the <strong>phone QR code generator</strong> is a free community utility for professionals. No subscriptions are required." },
               { q: "Will scanning automatically start the call?", a: "For security reasons, most smartphones will open the dialer with the number pre-filled. The user must then perform one final tap on the 'Call' button." },
               { q: "Can I add a logo to a phone QR code?", a: "Absolutely. Navigate to the 'Logo' tab in our studio to create a <strong>QR code with logo in middle</strong> to boost trust and brand recognition." },
               { q: "Do I need to include the '+' sign?", a: "Yes, we highly recommend using the full E.164 format (e.g., +14155552671) to ensure the code works for users traveling from abroad." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore Related Branded Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/vcard-qr-code-generator" title="Go to vCard Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/sms-qr-code-generator" title="Go to SMS Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">SMS Text Links</Link>
            <Link to="/whatsapp-qr-code-generator" title="Go to WhatsApp Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WhatsApp Chat</Link>
            <Link to="/url-qr-code-generator" title="Go to URL Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PhonePage;