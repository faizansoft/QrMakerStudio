import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Privacy Policy & Client-Side Data Security Standards | QR Generator Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Comprehensive Privacy Policy of QR Generator Online. Learn about our 100% browser-based client-side QR generation engine, zero server data logging, GDPR/CCPA compliance, and strict zero-tracking architecture.');
    }

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
            Zero-Tracking Data Guarantee
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Privacy Policy & Data Security
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy is protected by design. Learn how our browser-based client-side architecture keeps your URLs, contacts, WiFi passwords, and files 100% private.
          </p>
          <div className="text-xs text-gray-400 pt-2">
            Last Updated: August 3, 2026 • Policy Version 2.4
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ MAIN CONTENT CONTAINER ═══════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-gray-700 leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            1. Core Architectural Privacy Principle: Client-Side Rendering
          </h2>
          <p>
            At <strong>QR Generator Online</strong>, privacy is not an afterthought or a secondary configuration setting; it is built into the fundamental software architecture of our web application.
          </p>
          <p>
            Traditional online QR code platforms compile barcode matrices on cloud servers, requiring your inputs (such as website addresses, private <Link to="/vcard-qr-code-generator" className="text-accent font-bold hover:underline">vCard contact details</Link>, or confidential <Link to="/wifi-qr-code-generator" className="text-accent font-bold hover:underline">WiFi network passwords</Link>) to be transmitted across HTTP networks to remote databases.
          </p>
          <div className="bg-[#1E1E1E] text-white p-6 md:p-8 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-[#BEF392] font-bold text-lg">🛡️ Zero-Transmission Guarantee</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              All barcode rendering in QR Generator Online executes locally inside your personal web browser using client-side JavaScript. Your text, URLs, custom brand logos, and credentials never cross network requests to our servers, ensuring absolute data confidentiality.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            2. Data We Do NOT Collect or Store
          </h2>
          <p>
            Because compilation happens locally inside your device’s memory, we do not log, harvest, or store any of the following payload data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Payload Content:</strong> Target URLs, text messages, phone numbers, email addresses, or social media links.</li>
            <li><strong>Personal Contact Records:</strong> Names, job titles, business addresses, or phone numbers entered into our <Link to="/vcard-qr-code-generator" className="text-accent font-bold hover:underline">vCard Digital Business Card Generator</Link>.</li>
            <li><strong>WiFi Network Credentials:</strong> SSIDs, WPA2/WPA3 passphrases, or security keys entered into our <Link to="/wifi-qr-code-generator" className="text-accent font-bold hover:underline">WiFi QR Code Generator</Link>.</li>
            <li><strong>Uploaded Graphic Logos:</strong> Company logos, brand icons, or profile headshots uploaded to our <Link to="/qr-code-with-logo" className="text-accent font-bold hover:underline">QR Code with Logo</Link> feature.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            3. Static vs Dynamic QR Codes: The Tracking Difference
          </h2>
          <p>
            Many commercial platforms advocate for "Dynamic QR Codes" because dynamic codes route scanners through proxy tracking servers. This allows third parties to log scanner IP addresses, physical GPS coordinates, smartphone operating systems, and scanning timestamps.
          </p>
          <p>
            <strong>QR Generator Online produces 100% Static QR Codes</strong>. When a customer or client scans a static QR code generated by our tools (such as a <Link to="/url-qr-code-generator" className="text-accent font-bold hover:underline">URL QR Code</Link> or <Link to="/location-qr-code-generator" className="text-accent font-bold hover:underline">Google Maps QR Code</Link>), their smartphone camera reads the encoded payload directly from the physical barcode modules without routing through any middleman tracking server.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            4. Cookies, LocalStorage & Browser Session Data
          </h2>
          <p>
            QR Generator Online does not set persistent tracking cookies or user identification tokens. We use browser `localStorage` solely for transient user interface preferences (such as saving your active generator color scheme or tab selection). Clearing your browser cache or closing your browser window instantly resets all session state.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            5. Anonymous Web Analytics & Performance Metrics
          </h2>
          <p>
            To monitor website health, detect server downtime, and optimize client-side rendering speed, we utilize standard anonymized web analytics (such as Google Tag Manager). This aggregated telemetry collects non-personally identifiable metrics (such as browser type, general country origin, and page view counts). Analytics data is strictly decoupled from your QR code content and cannot be linked to any individual user identity.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            6. GDPR & CCPA International Compliance
          </h2>
          <p>
            Under the European Union General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), individuals hold rights regarding the collection and processing of Personal Identifiable Information (PII).
          </p>
          <p>
            Because QR Generator Online does not collect, process, or sell any PII, payload data, or user identities to third-party data brokers, our platform inherently complies with GDPR Article 25 ("Data Protection by Design and by Default") and CCPA privacy standards.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            7. External Third-Party Web Links
          </h2>
          <p>
            Our web application and <Link to="/blog" className="text-accent font-bold hover:underline">Industry Blog Articles</Link> may contain links to external third-party websites. QR Generator Online is not responsible for the privacy practices, content, or cookie policies of third-party domains. We encourage users to review the privacy policies of any external destination they visit.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            8. Policy Revisions & Updates
          </h2>
          <p>
            We reserve the right to update or modify this Privacy Policy as browser standards and web technologies evolve. Any architectural updates will be published immediately on this page with an updated revision date. Continued usage of QR Generator Online constitutes acceptance of the current Privacy Policy terms.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-neutral-200 pb-2">
            9. Contacting Our Data Privacy Officer
          </h2>
          <p>
            If you have technical questions or privacy inquiries regarding our client-side software architecture, please contact our data security team via email at <a href="mailto:privacy@qr-generator.online" className="text-accent font-bold underline">privacy@qr-generator.online</a> or through our <Link to="/contact" className="text-accent font-bold hover:underline">Contact Support Page</Link>.
          </p>
        </section>

        {/* Bottom Navigation Buttons */}
        <div className="pt-8 border-t border-neutral-200 flex flex-wrap gap-4">
          <Link to="/terms" className="px-6 py-3 bg-accent text-white font-bold rounded-xl text-xs hover:bg-accent-dark transition-colors shadow-md">
            Read Terms of Service →
          </Link>
          <Link to="/about" className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition-colors">
            About QR Generator Online
          </Link>
          <Link to="/" className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition-colors">
            Create QR Code Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;