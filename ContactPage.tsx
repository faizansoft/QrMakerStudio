import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact Us', url: '/contact' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Responsive Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Our Support Team
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have questions about SVG vector printing, custom logo placement, or tool features? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">We'd Love to Hear From You</h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you need advice on error correction levels for outdoor signs or want to request new QR code generator features, drop us a message.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:support@qr-generator.online" className="text-base font-bold text-gray-900 hover:text-accent transition-colors">
                    support@qr-generator.online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Support Response Time</h4>
                  <p className="text-base font-bold text-gray-900">Within 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] text-white p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-[#BEF392] mb-2">Technical Assistance</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                For SVG vector print inquiries or high error correction level guidance, make sure to specify your intended printing medium in your message.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-accent text-white font-bold rounded-xl text-sm hover:bg-accent-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-accent outline-none text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-accent outline-none text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-accent outline-none text-sm font-medium">
                    <option>General Support</option>
                    <option>Technical Print / SVG Help</option>
                    <option>Feature Suggestion</option>
                    <option>Business Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Message *</label>
                  <textarea
                    required
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-accent outline-none text-sm font-medium resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-sm transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;