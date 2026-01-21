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

const EmailPage: React.FC<PageProps> = (props) => {
  const { t } = useLanguage();
  const [e, setE] = useState({ to: '', sub: '', body: '' });
  const val = `mailto:${e.to}?subject=${encodeURIComponent(e.sub)}&body=${encodeURIComponent(e.body)}`;

  useEffect(() => {
    document.title = t('meta_email_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_email_desc'));
    }
  }, [t]);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-sky-100 mb-6">
            Contact Automation Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Email <span className="text-sky-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate the barrier to formal communication. Our <strong>branded email QR generator</strong> allows you to pre-fill the recipient address, subject line, and message body, creating a seamless "one-scan" inquiry process for your clients.
          </p>
        </div>
      </section>

      <Workspace type="email" value={val} {...props}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recipient Email Address</label>
            <input type="email" value={e.to} onChange={ev => setE({...e, to: ev.target.value})} placeholder="e.g. support@brand.com" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Line</label>
            <input type="text" value={e.sub} onChange={ev => setE({...e, sub: ev.target.value})} placeholder="e.g. Inquiry about Professional Services" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pre-written Body Content</label>
            <textarea value={e.body} onChange={ev => setE({...e, body: ev.target.value})} placeholder="e.g. Hello team, I'm interested in..." className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-sky-500 outline-none font-bold resize-none" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Streamlining Customer Inquiries</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                For professional services and high-ticket sales, email remains the primary channel for serious leads. However, customers often delay reaching out because of the "blank page" problem—they don't know how to start the email or what information you need. 
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                A <strong>customizable email QR code</strong> bypasses this friction. By pre-filling the subject line and body, you guide the customer on exactly what info to provide. It also ensures that incoming emails are correctly categorized by your team or CRM system, as every inquiry from a specific QR code can share a unique subject prefix.
              </p>
            </div>
            <div className="p-8 bg-sky-50 rounded-[3rem] border border-sky-100 space-y-4">
              <h3 className="text-lg font-bold text-sky-900">Why Use Email QRs?</h3>
              <ul className="space-y-3 text-sm text-sky-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Zero Typos:</strong> No more lost leads from misspelled addresses.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Lead Routing:</strong> Use specific subjects to auto-sort emails.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Brand Trust:</strong> Add your brand logo to the center for a pro look.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Use Cases for Branded Email QRs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Product Support</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Include a <strong>support QR code</strong> on product packaging. Let customers email your technical team directly with their model number pre-filled in the subject.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Event RSVP</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Place an <strong>RSVP QR code</strong> on physical invitations. Scanning opens a pre-written email like "I would love to attend the Annual Gala."
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Service Quotes</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add an <strong>email QR link</strong> to your service van or billboard. Potential clients can request a quote while they are on the go.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded QR maker</strong> ensures that your <strong>email QR code</strong> utilizes the universal `mailto:` URI scheme. This is recognized by all major email clients including Gmail, Outlook, and Apple Mail. For high-quality printing, we recommend downloading your asset as an <strong>SVG file</strong>. This vector format ensures perfectly sharp dots and scannability on everything from glossy magazines to matte banners.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Email QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the email QR code generator free?", a: "Yes. <strong>QR Generator Online</strong> provides this tool free of charge for all business and personal use cases. No subscriptions required." },
               { q: "Will scanning automatically send the email?", a: "No. For privacy and security, scanning will open the user's default email app with the fields filled. The user must then tap 'Send'." },
               { q: "Can I add a logo to an email QR code?", a: "Absolutely. Use the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> to boost trust." },
               { q: "What happens if I have multiple email apps?", a: "Modern smartphones will prompt the user to choose their preferred email application if multiple are installed." }
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
            <Link to="/whatsapp-qr-code-generator" title="Go to WhatsApp Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WhatsApp Messaging</Link>
            <Link to="/sms-qr-code-generator" title="Go to SMS Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">SMS Texting</Link>
            <Link to="/url-qr-code-generator" title="Go to URL Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default EmailPage;