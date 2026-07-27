import React, { useEffect } from 'react';
import { Button } from './components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('meta_about_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('about_mission_desc'));
    }

    // Add structured data for the about page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About QR Generator Online",
      "url": "https://qr-generator.online/about",
      "description": t('about_mission_desc'),
      "mainEntity": {
        "@type": "Organization",
        "name": "QR Generator Online",
        "url": "https://qr-generator.online",
        "description": "Professional QR code generator with custom branding options",
        "founder": "Digital designers and engineers",
        "foundingDate": "2024",
        "slogan": "Professional QR codes for everyone"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"][data-schema="about"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-schema', 'about');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [t]);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            The Mission Behind the Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            {t('about_mission_title')}
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            {t('about_mission_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">{t('about_story_title')}</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t('about_story_desc')}
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              We believe that a <strong>customizable QR code</strong> is a fundamental business asset, not a temporary rental. Our studio produces <strong>static QR codes</strong>—mathematically encoded patterns that contain your data directly. This means your <strong>WiFi QR codes</strong> or <strong>vCard business cards</strong> will work for as long as the material they are printed on exists. No redirects, no "scan limits," and no expiration dates.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              By removing the middleman, we provide a more stable and secure experience for your customers. They aren't being tracked by a third-party server before reaching your site; they are going directly to the source.
            </p>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-8 border border-slate-100 shadow-inner">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-indigo-900">The Static Advantage</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-indigo-700 font-bold">
                    <span>✓</span> Permanent Scan Link
                  </li>
                  <li className="flex gap-3 text-sm text-indigo-700 font-bold">
                    <span>✓</span> Zero Subscription Fees
                  </li>
                  <li className="flex gap-3 text-sm text-indigo-700 font-bold">
                    <span>✓</span> High-Resolution SVG Files
                  </li>
                </ul>
                <div className="pt-4 flex items-center gap-2 text-indigo-500 font-black text-[10px] uppercase tracking-widest">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  Reliability Guaranteed
                </div>
             </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black">Our Privacy Philosophy</h3>
              <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
                Data security is at the core of our technical architecture. When you generate a <strong>QR code with a logo</strong> or enter sensitive <strong>crypto wallet addresses</strong>, that processing happens locally within your browser's execution context.
              </p>
              <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
                We utilize modern Client-Side Rendering (CSR) technologies to ensure that the "secrets" of your QR code never touch our database. This makes our <strong>branded QR maker</strong> one of the most private tools on the web. We don't want your data; we want your brand to succeed.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">Technical Excellence.</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              A <strong>professional QR code generator</strong> must serve the needs of the modern designer. This is why we prioritize <strong>SVG (Scalable Vector Graphics)</strong> exports. While PNGs are fine for social media, professional printers require vectors that can scale to the size of a billboard without pixelating.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our pattern engine allows for incredible variety—from "Classy" dots for high-end fashion brands to "Tech" squares for software startups. Every element, from the eyes to the quiet zone, is customizable.
            </p>
          </div>
        </section>

        <section className="space-y-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">{t('about_values_title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 className="font-bold text-slate-900">Quality First</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t('about_values_1')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h4 className="font-bold text-slate-900">Privacy First</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t('about_values_2')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 className="font-bold text-slate-900">Accessibility</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t('about_values_3')}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-black">{t('about_team_title')}</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t('about_team_desc')}
            </p>
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-4">{t('about_cta_title')}</h3>
              <p className="text-slate-400 mb-8">{t('about_cta_desc')}</p>
              <Link to="/url-qr-code-generator" title="Start Creating QR Codes">
                <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">
                  {t('home_cta_primary')}
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-white text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-display font-black">Join our community.</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-slate-400 text-lg leading-relaxed">
              We are a team of two designers and one engineer based in the US and Europe. We are dedicated to maintaining <strong>QR Generator Online</strong> as a free, professional alternative to the corporate "pay-to-scan" model.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Your support and feedback help us improve our pattern algorithms and add new tool sets like <strong>event calendar links</strong> and <strong>WhatsApp automation</strong>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" title="Contact Us">
              <Button size="lg" className="rounded-full px-12 font-black uppercase tracking-widest text-xs">Send Feedback</Button>
            </Link>
            <Link to="/faqs-qr-code-generator" title="View Help">
              <Button variant="outline" size="lg" className="rounded-full px-12 font-black uppercase tracking-widest text-xs border-slate-700 text-white hover:bg-slate-900">View Help Docs</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;