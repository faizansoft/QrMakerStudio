import React, { useEffect } from 'react';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | QR Generator Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Terms and conditions for using QR Generator Online. Understand your rights to the permanent QR codes you generate for personal and commercial use.');
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Legal Transparency
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Terms of <br/><span className="text-indigo-600">Service.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">Straightforward rules for a professional utility. No fine print traps.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">1. Usage Rights</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            <strong>QR Generator Online</strong> is free for everyone. You are granted a non-exclusive, perpetual license to use the QR codes you generate for any purpose—personal, educational, or commercial. 
          </p>
          <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100">
             <p className="text-sm text-indigo-900 font-bold leading-relaxed">
               You own the output. Whether it's a <strong>qr code business card</strong> for your startup or a <strong>bitcoin qr code generator</strong> link for your donations, you have full ownership of the generated image.
             </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">2. Ethical Responsibility</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            By using our <strong>custom qr code maker</strong>, you agree not to use it for malicious intent. This includes creating codes that link to phishing sites, malware, or illegal content. While we don't monitor the content of static codes, we reserve the right to block access to our interface for users who violate these ethical standards.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">3. Print Warranty</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We strive for 100% scannability across all devices. However, environmental factors (lighting, print material, scanner quality) are out of our control. 
          </p>
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-4">
             <h4 className="font-bold text-slate-900 uppercase text-[10px] tracking-widest">Pro Recommendation</h4>
             <p className="text-xs text-slate-500 leading-relaxed">
               Always perform a test scan of your <strong>custom qr code</strong> before printing in bulk. We are not liable for costs associated with misprinted marketing materials or unreadable codes. Use our <strong>qr code generator svg</strong> for the highest quality results.
             </p>
          </div>
        </section>

        <section className="space-y-6 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900">Intellectual Property</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            The software, unique pattern algorithms, and brand assets of <strong>QR Generator Online</strong> are protected. You may not scrape our site, reverse-engineer our design themes, or attempt to resell our core interface as your own service without written permission.
          </p>
          <p className="text-slate-500 text-sm italic">
            Last Updated: January 2026. For legal inquiries, please contact <a href="mailto:frehmankt@gmail.com" className="text-indigo-600 font-bold">frehmankt@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;