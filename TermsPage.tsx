import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';

const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Terms of Service | Commercial Usage Rights | QR Maker Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'QR Maker Studio terms of service. Enjoy 100% full commercial ownership of all generated QR code images with zero attribution or licensing fees.');
    }
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-hero pt-16 pb-16 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Commercial Usage Rights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Full commercial ownership, transparent governance, and print guidelines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-gray-700 leading-relaxed">
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Commercial Ownership</h2>
          <p>
            You hold 100% full, perpetual commercial rights to all QR Code images (PNG, SVG, WebP) created using <strong>QR Maker Studio</strong>. You can print, publish, or sell marketing materials featuring these QR codes without licensing fees or mandatory watermarks.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. Print Guidelines & Scannability</h2>
          <p>
            While our generator strictly adheres to ISO/IEC 18004 standards, environmental print factors (contrast, quiet zone margins, surface texture, lighting) affect scannability.
          </p>
          <div className="bg-gray-50 border border-neutral-200 rounded-2xl p-6 space-y-3 text-sm">
            <h3 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Mandatory Print Checklist</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Always conduct test scans on multiple phone devices before mass printing.</li>
              <li>Use <strong>Vector SVG</strong> for billboard or large print formats.</li>
              <li>Set error correction to <strong>Level H</strong> when adding center brand logos.</li>
              <li>Maintain high contrast between pattern and background colors.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Acceptable Use Policy</h2>
          <p>
            Users are strictly prohibited from using QR Maker Studio to generate codes pointing to phishing sites, malware, scam portals, or illegal content.
          </p>
        </section>

        <div className="pt-8 border-t border-neutral-200 flex flex-wrap gap-4">
          <Link to="/privacy" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition-colors">
            Privacy Policy
          </Link>
          <Link to="/contact" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition-colors">
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TermsPage;