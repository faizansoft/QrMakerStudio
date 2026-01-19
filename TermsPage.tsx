import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-500 font-medium">Simple rules for a professional tool.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-display font-black text-slate-900">1. Free for Everyone</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            QR Studio Pro is free to use for both personal and commercial projects. You may generate as many codes as you need without scan limits or expiration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-black text-slate-900">2. Prohibited Uses</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            You agree not to use our tool to create QR codes that link to malicious software, phishing sites, or illegal content. While we don't monitor your codes, we expect all users to act ethically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-black text-slate-900">3. No Warranty</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We provide this tool "as is." While we strive for 100% scannability, it is your responsibility to test your QR codes before printing them in high volumes. We are not liable for costs associated with misprinted or unreadable codes.
          </p>
        </section>

        <section className="space-y-4 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900">Ownership</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            You own the QR codes you generate. We own the underlying software, design, and trademark of QR Studio Pro.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;