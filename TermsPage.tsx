import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Terms of Service', url: '/terms' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
            Commercial Usage Governance
          </div>
          <h1 className="h1-page">
            Terms of Service & Usage Rights
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Full commercial ownership, transparent governance, print scannability standards, and acceptable usage rules.
          </p>
          <div className="text-xs text-slate-500 pt-2">
            Last Updated: August 3, 2026 • Policy Version 2.4
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ MAIN CONTENT CONTAINER ═══════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-slate-700 leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            1. Unrestricted Commercial Ownership & Royalty-Free Rights
          </h2>
          <p>
            You hold <strong>100% full, perpetual, worldwide commercial ownership rights</strong> to all QR Code graphic assets (PNG, SVG, WebP) generated through <strong>QR Generator Online</strong>.
          </p>
          <p>
            You are free to print, publish, broadcast, distribute, or sell marketing collateral, product packaging, corporate stationery, clothing, and digital media containing QR codes created on our platform. We impose zero mandatory attribution requirements, zero licensing fees, and zero scan limits.
          </p>
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 text-sm">
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider text-accent">Summary of Commercial Rights</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Commercial & Personal Use: 100% Free forever.</li>
              <li>Watermarks & Attribution: Zero watermarks or required back-links.</li>
              <li>Scan Limits: Unlimited scans for the lifetime of your printed material.</li>
              <li>Vector Export Rights: Free <Link to="/svg-qr-code-generator" className="text-accent underline font-bold">Scalable Vector Graphics (SVG)</Link> downloads for commercial print press production.</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            2. ISO/IEC 18004 Standard Compliance & Print Scannability Disclaimer
          </h2>
          <p>
            Our generator engine compiles 2D matrix modules strictly in compliance with international <strong>ISO/IEC 18004 QR Code specifications</strong>. However, real-world camera scannability is subject to external graphic design and printing variables beyond our direct control.
          </p>
          <p>
            Variables such as low color contrast, insufficient outer Quiet Zone margins, tiny print scaling below 0.8 inches (2cm), reflective glossy lamination under direct sunlight, or damaged camera lenses can impact scan success.
          </p>
          <div className="bg-[#0F172A] text-white p-6 md:p-8 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-[#A8D5C2] font-bold text-base uppercase tracking-wider">Mandatory Pre-Print Proofing Checklist</h3>
            <ul className="space-y-2 text-xs md:text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="text-[#A8D5C2]">✓</span>
                <span>Always perform test scans using multiple iOS and Android mobile devices on printed proofs before initiating commercial print runs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A8D5C2]">✓</span>
                <span>Use <Link to="/svg-qr-code-generator" className="text-[#A8D5C2] underline font-bold">Vector SVG Export</Link> for commercial print press orders, posters, and billboards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A8D5C2]">✓</span>
                <span>Maintain strong optical contrast between dark pattern dots and light backgrounds using our <Link to="/colored-qr-code-generator" className="text-[#A8D5C2] underline font-bold">Colored QR Code Generator</Link>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A8D5C2]">✓</span>
                <span>Enable <Link to="/qr-code-with-logo" className="text-[#A8D5C2] underline font-bold">Level H Error Correction</Link> when inserting company logos in the center of the barcode.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            3. Static QR Code Payload Modification Limitations
          </h2>
          <p>
            QR Generator Online produces <strong>Static QR Codes</strong>. In a static QR code, your payload data (such as a <Link to="/url-qr-code-generator" className="text-accent font-bold hover:underline">URL link</Link>, <Link to="/wifi-qr-code-generator" className="text-accent font-bold hover:underline">WiFi passphrase</Link>, or <Link to="/vcard-qr-code-generator" className="text-accent font-bold hover:underline">vCard record</Link>) is hardcoded directly into the geometric module pattern.
          </p>
          <p>
            Once a static QR code image is generated and printed on physical media, the payload content encoded within that physical pattern cannot be edited or redirected on our server. Users are responsible for verifying all payload URLs, phone numbers, and text for accuracy prior to physical print execution.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            4. Acceptable Use Policy & Prohibited Conduct
          </h2>
          <p>
            You agree to use QR Generator Online exclusively for lawful business and personal purposes. You are strictly prohibited from generating QR codes that link to or promote:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Malicious software, phishing schemes, ransomware, or spyware distribution.</li>
            <li>Fraudulent financial schemes, deceptive spam, or unauthorized phishing landing pages.</li>
            <li>Illegal goods, unauthorized distribution of copyrighted materials, or hate speech.</li>
            <li>Content that violates international intellectual property or privacy laws.</li>
          </ul>
          <p className="text-xs text-slate-500 italic">
            We reserve the right to report malicious phishing or illegal content to cybersecurity clearinghouses and domain registrar authorities.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            5. Intellectual Property & Brand Trademarks
          </h2>
          <p>
            The software, visual styling, logo assets, UI component design, and underlying client-side codebase of <strong>QR Generator Online</strong> are protected by international copyright and intellectual property laws. Users may not clone, scrape, reverse-engineer, or rebrand our web platform without explicit prior written authorization.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            6. Disclaimer of Warranties
          </h2>
          <p>
            QR Generator Online is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            While we strive for 100% application uptime and client-side rendering accuracy, we do not warrant that our web application will be uninterrupted, error-free, or entirely free of client-side browser rendering anomalies.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            7. Limitation of Liability
          </h2>
          <p>
            In no event shall QR Generator Online, its developers, partners, or affiliates be held liable for any indirect, incidental, consequential, special, or punitive damages (including loss of business profits, print material costs, or marketing expenses) arising out of or related to your use of, or inability to use, our generator tools or printed QR code images.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            8. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with international digital commerce principles and applicable local jurisdiction laws, without regard to conflict of law provisions.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            9. Service Modifications & Terms Updates
          </h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Any changes will be updated on this page with an updated revision date. Continued usage of our website following changes indicates full agreement with the revised terms.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight border-b border-slate-200 pb-2">
            10. Contacting Legal & Support
          </h2>
          <p>
            If you have questions regarding commercial licensing, enterprise usage, or these Terms of Service, please reach out to our legal support team via email at <a href="mailto:support@qr-generator.online" className="text-accent font-bold underline">support@qr-generator.online</a> or through our <Link to="/contact" className="text-accent font-bold hover:underline">Contact Support Page</Link>.
          </p>
        </section>

        {/* Bottom Navigation Buttons */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4">
          <Link to="/privacy" className="px-6 py-3 bg-accent text-white font-bold rounded-xl text-xs hover:bg-accent-dark transition-colors shadow-md">
            Read Privacy Policy →
          </Link>
          <Link to="/about" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors">
            About Our Studio
          </Link>
          <Link to="/" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors">
            Create QR Code Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TermsPage;