import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { useContentLocale } from './context/ContentLocaleContext';
import { getLocalizedRouteMeta } from './constants/routeMetaI18n';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const SUPPORT_EMAIL = 'support@qr-generator.online';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const contentLocale = useContentLocale();
  const localizedH1 = contentLocale ? getLocalizedRouteMeta(contentLocale, '/contact')?.h1 : null;
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

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Support',
    message: ''
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  /**
   * There is no backend to post to, so the form hands the message off to the
   * visitor's own mail client. Previously it discarded every field and showed
   * "Message Sent!" regardless — people believed they had contacted support
   * and never heard back, because nothing was ever sent anywhere.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message
    ].join('\n');

    const href =
      `mailto:${SUPPORT_EMAIL}` +
      `?subject=${encodeURIComponent(`[${form.subject}] Message from ${form.name || 'website visitor'}`)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  };

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Responsive Support
          </div>
          <h1 className="h1-page mb-4">
            {localizedH1 || 'Contact Our Support Team'}
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">We'd Love to Hear From You</h2>
              <p className="text-slate-600 leading-relaxed">
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
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:support@qr-generator.online" className="text-base font-bold text-slate-900 hover:text-accent transition-colors">
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
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Support Response Time</h4>
                  <p className="text-base font-bold text-slate-900">Within 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] text-white p-8 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold text-[#A8D5C2] mb-2">Technical Assistance</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                For SVG vector print inquiries or high error correction level guidance, make sure to specify your intended printing medium in your message.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Your email is ready to send</h3>
                <p className="text-slate-600">
                  We opened your email app with the message filled in — press send there and it
                  reaches us. If nothing opened, email us directly at{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-accent hover:underline">
                    {SUPPORT_EMAIL}
                  </a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-accent text-white font-bold rounded-xl text-sm hover:bg-accent-dark transition-colors"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-accent outline-none text-sm font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-accent outline-none text-sm font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="text-xs font-bold text-slate-700 block mb-1">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={update('subject')}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-accent outline-none text-sm font-medium"
                  >
                    <option>General Support</option>
                    <option>Technical Print / SVG Help</option>
                    <option>Feature Suggestion</option>
                    <option>Business Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block mb-1">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={update('message')}
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-accent outline-none text-sm font-medium resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-sm transition-colors shadow-md"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-slate-500">
                  This opens your email app with the message ready to send.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;