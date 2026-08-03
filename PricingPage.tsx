import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const PricingPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Free & Enterprise Pricing Plans | QR Maker Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore QR Maker Studio pricing. 100% Free static QR Code generation forever with high-resolution vector SVG exports, custom logos, and no limits.');
    }

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Pricing', url: '/pricing' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            100% Free Forever. Upgrade When Ready.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate unlimited static QR Codes for free with vector SVG downloads and full brand customization. No subscription required.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">

          {/* Free Forever Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-accent shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              Most Popular
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Free Studio Plan</h2>
              <p className="text-sm text-gray-500 mb-6">Perfect for creators, individuals, and small businesses.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-900">$0</span>
                <span className="text-gray-500 font-medium">/ forever free</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-700 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Unlimited</strong> Static QR Codes</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Vector SVG</strong> & PNG/WebP Export</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Custom Brand Colors</strong> & Eye Styles</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Add Custom Logo</strong> in Center</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>13 QR Code Types</strong> (WiFi, vCard, WhatsApp, etc.)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Zero Expiration</strong> & No Scan Limits</span>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-center block transition-colors shadow-md"
            >
              Start Generating Free
            </Link>
          </div>

          {/* Enterprise / Dynamic Plan */}
          <div className="bg-[#1E1E1E] text-white rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">Enterprise & Dynamic</h2>
              <p className="text-sm text-white/60 mb-6">For brands needing editable destination links & scan analytics.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-white">Custom</span>
              </div>

              <ul className="space-y-4 text-sm text-white/80 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#BEF392] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Editable Destination URLs</strong> Anytime</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#BEF392] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Real-time Scan Analytics</strong> & GEO Insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#BEF392] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Custom Short Domains</strong> & White-label</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#BEF392] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Bulk Generation API</strong> & Integration</span>
                </li>
              </ul>
            </div>

            <Link
              to="/contact"
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-[#BEF392] border border-[#BEF392]/30 font-bold rounded-xl text-center block transition-colors"
            >
              Contact Team
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricingPage;
