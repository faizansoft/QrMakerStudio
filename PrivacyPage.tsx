import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-500 font-medium">Clear and simple: We don't track your data.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-display font-black text-slate-900">1. On-Device Generation</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            QR Studio Pro is designed as a "static" application. This means the actual code generation process happens entirely within your web browser. Your inputs (URLs, phone numbers, email addresses) never leave your device to be processed on a remote server.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-black text-slate-900">2. No Data Collection</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We do not maintain a database of the QR codes generated on this site. We do not store your contact information, WiFi passwords, or location data. Once you close your browser tab, the information you entered is gone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-black text-slate-900">3. Scan Privacy</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Since the QR codes generated are "static," they do not redirect through our servers. We have no way to track when a code is scanned, who scans it, or where they are located.
          </p>
        </section>

        <section className="space-y-4 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900">Questions?</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            If you have concerns about your digital privacy on this platform, feel free to reach out to us at <a href="mailto:frehmankt@gmail.com" className="text-indigo-600 font-bold">frehmankt@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;