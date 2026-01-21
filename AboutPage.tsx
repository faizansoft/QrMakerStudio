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
            Our Story and Purpose
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            Designed for <br/>
            <span className="text-indigo-600">Simplicity and Quality.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            QR Generator Online started as a project to fix a simple problem. We needed a professional QR tool that didn't expire quickly and offered better design options for our own projects.
          </p>
        </div>
      </section>

      {/* Main Narrative Content */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* Section 1: The Problem */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">Why typical QR makers fail.</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              We have all experienced it. You print a code on thousands of flyers only to find out it stops working because you didn't pay for a monthly subscription. This happens because many tools use redirects that they can turn off at any time.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our tool creates standardized, static codes that stay active as long as your destination is online. No catch and no expiration issues.
            </p>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-8 border border-slate-100 shadow-inner">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4">
                <div className="w-12 h-1.5 bg-indigo-100 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-100 rounded-md w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded-md w-1/2"></div>
                </div>
                <div className="pt-4 flex items-center gap-2 text-indigo-500 font-black text-[10px] uppercase tracking-widest">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  Permanent Link Stability
                </div>
             </div>
             <p className="mt-6 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">Reliability is our priority</p>
          </div>
        </div>

        {/* Section 2: Privacy Philosophy */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black">Private by Default</h3>
              <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
                When you use our customizable QR generator, your data is processed locally. This means your passwords or contact details never leave your computer during the generation process.
              </p>
              <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
                We believe privacy is a fundamental standard for any professional tool. That is why our rendering happens in your browser.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">Professional Tools for Everyone.</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Whether you are a solo freelancer or a large agency, you deserve high-quality assets. We provide professional design features like center logos and custom patterns for every tool in our studio.
            </p>
          </div>
        </div>

        {/* Section 3: Professional Exports */}
        <div className="space-y-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Built for Designers.</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Standard image formats are often too blurry for large-scale printing. We offer SVG exports to ensure your codes are mathematically perfect vector files. They stay sharp on anything from a sticker to a billboard.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8 text-left">
            {[
              { 
                label: "Brand Designers", 
                icon: (
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                ), 
                desc: "Export perfect vector files for Illustrator, Canva, or Photoshop." 
              },
              { 
                label: "Small Businesses", 
                icon: (
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                ), 
                desc: "Increase customer trust by adding your branded logo to the center." 
              },
              { 
                label: "Event Planners", 
                icon: (
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                ), 
                desc: "Create easy scan-to-save calendar links for your event guests." 
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

        {/* Section 4: Future Focus */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <h2 className="text-3xl md:text-5xl font-display font-black relative z-10">Improving every day.</h2>
          <p className="text-slate-400 text-lg max-w-2xl relative z-10">
            We are constantly updating our generator with new styles and features. We are committed to providing a professional, reliable tool for all your digital and physical branding needs.
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