import React from 'react';
import { Button } from './components/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Our Mission & Story
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            We built the tool <br/>
            <span className="text-indigo-600">we wanted to use.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            QR Generator Online started as a small internal project. We were tired of "free" tools that expired after a week or tracked every single scan for data harvesting.
          </p>
        </div>
      </section>

      {/* Main Narrative Content */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* Section 1: The Problem */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">The "Free" QR Trap</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Have you ever printed 500 business cards only to find out your QR code expired because you didn't pay a monthly subscription? We have. It's a frustrating experience that has become the industry standard. 
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Most QR generators online are actually <strong>redirect services</strong>. They don't give you the data; they give you a link to their server, which they can turn off at any moment. We decided to do things differently.
            </p>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-8 border border-slate-100 shadow-inner">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4">
                <div className="w-12 h-1.5 bg-red-100 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-100 rounded-md w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded-md w-1/2"></div>
                </div>
                <div className="pt-4 flex items-center gap-2 text-red-500 font-black text-[10px] uppercase tracking-widest">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
                  Expiration Warning
                </div>
             </div>
             <p className="mt-6 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">Avoid the subscription trap</p>
          </div>
        </div>

        {/* Section 2: Our Technical Philosophy */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black">Local-First Privacy</h3>
              <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
                When you use our <strong>custom qr code maker</strong>, your sensitive data—like your <strong>wifi qr code</strong> password or your personal <strong>vcard</strong> details—never leaves your computer. 
              </p>
              <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
                We use browser-side JavaScript to render every dot and pattern. Our servers don't even know what you're typing. It's not just "private-ish"—it's private by design.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">Privacy shouldn't be a premium feature.</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our tool is built on the principle that basic digital utility should be free, open, and secure. Whether you are generating a <strong>google forms qr code</strong> for a community event or a <strong>bitcoin qr code generator</strong> link for your side hustle, you deserve professional quality without trackers.
            </p>
          </div>
        </div>

        {/* Section 3: High-Res Vectors */}
        <div className="space-y-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Built for Professionals.</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            As designers and engineers, we know that "sharp enough" isn't good enough for print. That's why we built a <strong>qr code generator svg</strong> export that creates mathematically perfect vector files. No pixels, no blur, just clean data that stays sharp on anything from a coffee mug to a billboard.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8 text-left">
            {[
              { 
                label: "Designers", 
                icon: (
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                ), 
                desc: "Download vector <strong>qr code svg generator</strong> files for Adobe Illustrator or Canva." 
              },
              { 
                label: "Small Business", 
                icon: (
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                ), 
                desc: "Create a <strong>qr code with logo in middle</strong> to build trust with your customers." 
              },
              { 
                label: "Event Hosts", 
                icon: (
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                ), 
                desc: "Generate <strong>whatsapp qr code generator</strong> links for instant guest support." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Commitment to the Future */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <h2 className="text-3xl md:text-5xl font-display font-black relative z-10">We're just getting started.</h2>
          <p className="text-slate-400 text-lg max-w-2xl relative z-10">
            Our studio is constantly updated with new styles, better encryption, and smarter tools. We are focused on providing a high-quality, professional experience for all your branding needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link to="/url-qr-code-generator">
              <Button size="lg" className="rounded-full px-12 uppercase tracking-widest text-xs font-black shadow-2xl shadow-indigo-500/20">Start Creating Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-12 uppercase tracking-widest text-xs font-black border-slate-700 text-white hover:bg-slate-800">Send us feedback</Button>
            </Link>
          </div>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] pt-8">Static • Secure • Standardized</p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;