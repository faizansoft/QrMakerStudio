import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100 mb-6">
            Privacy First Design
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Your Privacy <br/><span className="text-indigo-600">Is The Default.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">We built <strong>QR Generator Online</strong> because we were tired of tools that tracked us. Here is how we protect you.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">1. On-Device Execution</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            Unlike 90% of QR generators online, our tool is a "local-first" application. When you enter a <strong>wifi qr code</strong> password or your personal <strong>vcard</strong> details, that data is processed by your browser's CPU, not our server. 
          </p>
          <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
             <p className="text-sm text-slate-500 leading-relaxed">
               Technically speaking: The JavaScript library responsible for rendering your <strong>custom qr code</strong> runs in your local memory space. Your sensitive inputs are never transmitted over the internet to be stored or logged in a remote database.
             </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">2. No Tracking Redirections</h2>
          <p className="text-slate-600 font-medium leading-relaxed text-lg">
            We generate <strong>static QR codes</strong>. A static code contains the actual data (like your website URL). Many other sites provide "Dynamic QR codes" which actually link to their own servers, allowing them to track every scan, location, and device type.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Because our codes are static, we have zero visibility into who scans them. Once you print your <strong>google forms qr code</strong> or <strong>whatsapp qr</strong>, the connection is between the scanner and the destination—we are out of the loop.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-display font-black text-slate-900">3. Analytics & Cookies</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We use minimal, privacy-compliant analytics (like Google Analytics with IP anonymization) to understand which of our tools are most popular. We do not use advertising trackers or sell your behavioral data to third-party brokers. Our goal is utility, not data harvesting.
          </p>
        </section>

        <section className="space-y-6 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-display font-black text-slate-900 text-indigo-600">Our Commitment</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Our commitment is to keep this tool transparent and secure. If we ever change how data is processed, we will update this page clearly. For any questions regarding your digital footprint on our site, please reach out directly to our engineering lead at <a href="mailto:frehmankt@gmail.com" className="text-indigo-600 font-bold border-b border-indigo-200 hover:border-indigo-600 transition-all">frehmankt@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;