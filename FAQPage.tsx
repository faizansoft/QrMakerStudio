import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from './constants';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getFAQSchema, getBreadcrumbSchema } from './services/seoUtils';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Help & FAQ | Free QR Code Generator Guide";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Answers to common QR code questions. Learn about SVG vector downloads, custom branding, WiFi QR codes, vCard business cards, and print scannability.');
    }

    // Structured Data (JSON-LD)
    injectJSONLD('jsonld-faq', getFAQSchema(FAQ_ITEMS));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Help & FAQ', url: '/faqs-qr-code-generator' }
    ]));

    return () => {
      removeJSONLD('jsonld-faq');
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => 
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Help & Knowledge Base
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about creating, customizing, and printing professional QR Codes.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search keywords: 'logo', 'svg', 'wifi', 'vcard', 'print'..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-neutral-300 rounded-2xl focus:border-accent focus:bg-white outline-none font-medium text-base transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  openIndex === idx ? 'border-accent bg-accent/5' : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase text-accent tracking-wider">{item.category}</span>
                    <h3 className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-accent' : 'text-gray-900'}`}>{item.question}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${openIndex === idx ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm">
                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-neutral-300">
              <p className="text-gray-600 font-medium mb-4">No matching questions found for "{search}"</p>
              <button onClick={() => setSearch('')} className="text-accent font-bold hover:underline">Clear Search</button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#1E1E1E] text-white p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Have Additional Questions?</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Our team is always ready to help you optimize your QR codes for print, digital campaigns, and branding.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-sm transition-colors shadow-md"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;