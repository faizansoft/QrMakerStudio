import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "About QR Maker Studio | Free Custom QR Code Generator";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about QR Maker Studio: Our privacy-first mission to empower creators with free, high-resolution customizable static QR codes with logo integration and vector SVG downloads.');
    }

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            The Mission Behind QR Maker Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Empowering Brands with Permanent, Custom QR Codes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
            We believe a high-resolution branded QR code should be a permanent digital asset, not an expensive monthly subscription.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">The Static QR Advantage</h2>
            <p className="text-gray-600 leading-relaxed">
              Traditional QR code generators trap users into dynamic redirects that expire or cost money every month. At <strong>QR Maker Studio</strong>, we specialize in <strong>static QR codes</strong>. Your payload is mathematically encoded into the pattern itself.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are generating a <strong>vCard digital business card</strong>, a <strong>WiFi password QR code</strong>, or a <strong>Google Form survey link</strong>, your code will work for as long as it exists — with zero scan limits and zero fees.
            </p>
          </div>
          <div className="bg-[#1E1E1E] text-white rounded-3xl p-8 shadow-xl border border-white/10">
            <h3 className="text-xl font-bold text-[#BEF392] mb-6">Why Creators Trust Us</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Zero Expiration:</strong> Codes stay valid forever.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Vector SVG Download:</strong> Sharp print quality at any size.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Local Client-Side Processing:</strong> Complete privacy protection.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Privacy & Engineering Section */}
        <section className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-neutral-200">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Privacy & Security First</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              All QR code generation in QR Maker Studio occurs locally in your web browser via JavaScript. Your URLs, passwords, personal contacts, and sensitive payloads are never uploaded or saved to external databases.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                to="/privacy"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-sm transition-colors shadow-md"
              >
                Read Privacy Policy
              </Link>
              <Link
                to="/"
                className="px-6 py-3 bg-white border border-neutral-300 text-gray-800 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                Create QR Code
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;