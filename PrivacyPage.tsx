import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('meta_privacy_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_privacy_desc'));
    }
  }, [t]);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 mb-6">
            On-Device Protection
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            A New Standard for <br/><span className="text-indigo-600">User Privacy.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">At <strong>QR Generator Online</strong>, we believe your data belongs to you. Here is the technical breakdown of our security promise.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <article className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">1. Client-Side Processing Architecture</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            The most significant privacy feature of our <strong>branded QR maker</strong> is where the generation happens. Traditional tools send your input (like your <strong>WiFi password</strong> or <strong>personal phone number</strong>) to their servers, where the image is generated and sent back to you. This creates a data footprint on their database.
          </p>
          <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-900 space-y-6 shadow-2xl">
             <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm">How Our Technology Differs</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               We utilize modern web technologies to perform all calculations locally within your browser's memory. When you enter data, our JavaScript engine creates the QR pattern on your machine. Your sensitive information is never uploaded to our servers. This "Zero-Knowledge" approach ensures that even if our site were compromised, your individual <strong>QR code data</strong> would remain unreachable.
             </p>
          </div>
        </article>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">2. The Static vs. Dynamic Tracking Gap</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            Many <strong>custom QR generators</strong> push users toward "Dynamic" codes. These codes contain a redirect link that allows the provider to track every single person who scans it—recording their IP address, location, and device type.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Our studio specializes in <strong>Static QR Codes</strong>. A static code encodes your actual URL or <strong>vCard data</strong> directly into the pattern. There is no middleman and no tracking server. This protects your users from unwanted surveillance and ensures that your <strong>scannable business cards</strong> remain functional without requiring an external service to stay online.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">3. Minimal Data Collection</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We do not require accounts, credit cards, or email signups to use our professional suite. We use anonymized, aggregated analytics (like Google Analytics) to understand which tools (e.g., our <strong>crypto QR generator</strong> or <strong>Google Form maker</strong>) are most popular so we can optimize our server load and improve the user interface. This data is never linked to individual users or the content of the codes they create.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            If you contact us via our <Link to="/contact" title="Contact Us" className="text-indigo-600 font-bold border-b border-indigo-100 hover:border-indigo-600 transition-all">Support Channel</Link>, we only use your email to reply to your specific inquiry. We do not sell your contact details to marketing firms or third parties.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">4. Third-Party Integrations</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            To provide high-quality design suggestions, we occasionally utilize AI models. However, this is an optional feature. When you use the "Get Random Design" feature, only the <strong>intent</strong> of the content is analyzed to suggest colors—not the raw passwords or private details. We recommend using standard manual styling for highly sensitive <strong>WiFi or vCard</strong> data.
          </p>
        </section>

        <section className="space-y-6 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900 text-indigo-600">GDPR and Global Compliance</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Because we do not store "Personal Identifiable Information" (PII) of your end-users, our tools are inherently compatible with GDPR, CCPA, and other global privacy frameworks. You can use our <strong>QR code SVG generator</strong> for your European or Californian clients with total peace of mind.
          </p>
          <p className="text-slate-500 text-sm italic">
            Privacy Policy Last Updated: January 2026. For privacy-specific technical inquiries, please reach out to our engineering lead at <a href="mailto:frehmankt@gmail.com" title="Email Lead Engineer" className="text-indigo-600 font-bold">frehmankt@gmail.com</a>.
          </p>
        </section>

        <section className="pt-12 flex flex-wrap justify-center gap-4">
           <Link to="/terms" title="Terms of Service" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all">View Terms of Service</Link>
           <Link to="/about" title="About Philosophy" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all">Our Philosophy</Link>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;