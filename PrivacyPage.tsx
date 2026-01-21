import React, { useEffect } from 'react';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | QR Generator Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Our commitment to your privacy. Learn how QR Generator Online processes your data locally and securely without server-side tracking.');
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100 mb-6">
            Secure Design
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Your Privacy <br/><span className="text-indigo-600">is Guaranteed.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">We built <strong>QR Generator Online</strong> to be a reliable and safe utility. Here is how we handle your information.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">1. Local Generation</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            Unlike many other tools, our generator works on your device. When you enter details like WiFi passwords or personal contact information, that data is processed by your own browser. 
          </p>
          <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
             <p className="text-sm text-slate-500 leading-relaxed">
               The scripts used to create your QR pattern run in your local memory. This means your sensitive inputs are not sent to our servers for storage or logging.
             </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">2. Static Asset Creation</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            We focus on creating static QR codes. A static code contains your actual data directly in the pattern. This is different from redirect services that track every scan and device type.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Since our codes are static, we do not track who scans your code or where they are located. Once you export your asset, the connection is directly between the user and your content.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">3. Analytics and Data</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We use standard analytics to understand which tools are popular so we can improve the site. We do not sell your personal data to third parties. Our main goal is to provide a high-quality utility for our users.
          </p>
        </section>

        <section className="space-y-6 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900 text-indigo-600">Our Commitment</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We are committed to keeping this tool secure and transparent. If you have any questions about how your data is handled, please feel free to reach out to us at <a href="mailto:frehmankt@gmail.com" className="text-indigo-600 font-bold border-b border-indigo-200 hover:border-indigo-600 transition-all">frehmankt@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;