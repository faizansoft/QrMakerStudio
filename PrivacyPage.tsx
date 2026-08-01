import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Privacy Policy | Client-Side Security Standards | QR Maker Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'QR Maker Studio privacy policy. All QR code generation happens locally in your browser with client-side rendering. Zero data tracking, zero server uploads.');
    }
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            On-Device Data Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Your privacy is guaranteed by design. All QR Code generation happens locally in your browser.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-gray-700 leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Client-Side Rendering Architecture</h2>
          <p>
            Unlike traditional platforms that send your WiFi credentials, vCard details, or text payloads to cloud servers for rendering, <strong>QR Maker Studio</strong> operates 100% client-side via browser JavaScript.
          </p>
          <div className="bg-[#1E1E1E] text-white p-6 rounded-2xl border border-white/10 text-sm space-y-2">
            <h3 className="text-[#BEF392] font-bold">Zero Data Storage</h3>
            <p className="text-white/80">
              Your inputs never touch external databases or server logs. If you close your browser tab, your session state is cleared immediately.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. Static vs Dynamic QR Tracking</h2>
          <p>
            Dynamic QR codes utilize redirect servers that log user IP addresses, location data, and device specs. <strong>QR Maker Studio produces static QR codes</strong>. Static QR codes encode payload data directly into the pattern, ensuring no middleman can track or intercept your users.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Analytics & Communications</h2>
          <p>
            We collect anonymized, aggregated page view metrics (via Google Tag Manager) solely to measure traffic and optimize client rendering performance. We do not link analytics to individual QR code content or user identities.
          </p>
        </section>

        <div className="pt-8 border-t border-neutral-200 flex flex-wrap gap-4">
          <Link to="/terms" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition-colors">
            Terms of Service
          </Link>
          <Link to="/about" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition-colors">
            About Our Studio
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;