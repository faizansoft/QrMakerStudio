import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | Professional Usage Rights | QR Generator Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Review the terms of service for QR Generator Online. Understand your full commercial ownership of generated QR codes and our professional print liability policies.');
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Transparent Governance
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Terms of <br/><span className="text-indigo-600">Service.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">Professional rules for a professional utility. No hidden "gotchas" or fine-print traps.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <article className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">1. Full Commercial Ownership</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            Unlike many "freemium" sites, <strong>QR Generator Online</strong> grants you full, perpetual ownership of the visual assets you generate. Whether you are using our <strong>QR business card generator</strong> for your personal brand or producing thousands of <strong>restaurant menu QR codes</strong> for a client, you hold the commercial rights to the output files.
          </p>
          <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100">
             <p className="text-sm text-indigo-900 font-bold leading-relaxed">
               You are free to print, distribute, and resell the generated QR images as part of your design services. We do not require any attribution or "watermarking" on your final high-resolution exports.
             </p>
          </div>
        </article>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">2. Ethical Usage & Responsibility</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            While we provide a <strong>customizable QR maker</strong> for all, we maintain a zero-tolerance policy for malicious activity. You agree not to use our tool to create links to phishing websites, malware distribution centers, or illegal content.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Since our codes are <strong>static QR codes</strong>, we do not have the technical ability to "turn off" a code once it is printed. However, we reserve the right to ban specific users or IP ranges from accessing our generation studio if they are found to be violating these ethical standards. You are solely responsible for the content you encode into your <strong>custom QR codes</strong>.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">3. Print Warranty & Scannability</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We use the highest industry standards for QR generation (ISO/IEC 18004). However, environmental factors such as ink bleed, paper texture, lighting conditions, and camera hardware quality are outside of our control. 
          </p>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-6">
             <h4 className="font-bold text-slate-900 uppercase text-[10px] tracking-[0.3em]">Mandatory Print Checklist</h4>
             <p className="text-xs text-slate-500 leading-relaxed">
               By using this site, you acknowledge that <strong>QR Generator Online</strong> is not liable for any costs associated with misprinted marketing materials, blurry signage, or unreadable codes. We strongly recommend:
             </p>
             <ul className="space-y-3 text-xs text-slate-500 list-disc pl-5">
               <li>Always performing a <strong>test scan</strong> with multiple devices before bulk printing.</li>
               <li>Utilizing our <strong>QR code SVG export</strong> for any material larger than a business card.</li>
               <li>Using "High" error correction for any code featuring a <strong>logo in the middle</strong>.</li>
               <li>Maintaining high contrast between the pattern and the background color.</li>
             </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">4. Intellectual Property</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            While you own the generated QR files, the underlying software, unique pattern algorithms, and brand assets of <strong>QR Generator Online</strong> are our protected intellectual property. You may not scrape our site, reverse-engineer our design theme engine, or attempt to repackage our core generation logic as a competing commercial service without express written permission.
          </p>
        </section>

        <section className="space-y-6 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900">5. Limitation of Liability</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Our <strong>branded QR code generator</strong> is provided "as is" without any warranties of any kind. We are not responsible for business losses, data corruption, or indirect damages resulting from the use or inability to use our studio tools.
          </p>
          <p className="text-slate-500 text-sm italic">
            Terms of Service Last Updated: January 2026. For legal or licensing inquiries, please contact <a href="mailto:frehmankt@gmail.com" className="text-indigo-600 font-bold">frehmankt@gmail.com</a>.
          </p>
        </section>

        <div className="pt-12 text-center">
           <Link to="/about" className="text-[10px] font-black uppercase text-indigo-500 hover:underline tracking-widest mx-4">Our Mission</Link>
           <Link to="/privacy" className="text-[10px] font-black uppercase text-indigo-500 hover:underline tracking-widest mx-4">Privacy Policy</Link>
           <Link to="/contact" className="text-[10px] font-black uppercase text-indigo-500 hover:underline tracking-widest mx-4">Contact Support</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;