
import React from 'react';
import { Button } from './components/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8">
            Better QR tools, <br/>
            <span className="text-indigo-600">Zero complexity.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            We built <strong>QR Generator Online</strong> to solve a simple problem: most QR makers are either expensive, expire after a week, or look like they're from 1995. This is our solution.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">Why we exist</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Digital links shouldn't be boring or difficult to scan. We provide a professional-grade interface that runs entirely in your browser. This means your data never touches our servers, and your codes are ready for professional printing instantly.
            </p>
            <ul className="space-y-4">
              {[
                "Vector SVG exports for high-res printing",
                "No scan limits, no expiration dates",
                "Clean, ad-free design environment",
                "Completely private generation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-indigo-50 rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
             <div className="qr-gradient w-48 h-48 rounded-[2.5rem] shadow-2xl flex items-center justify-center z-10">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Modern Design",
              desc: "Choose from sleek patterns and fluid shapes that match your brand identity without the pixelated look.",
              icon: "✨"
            },
            {
              title: "Privacy First",
              desc: "We don't track who scans your codes or what's in them. Your business is your own.",
              icon: "🛡️"
            },
            {
              title: "Universal",
              desc: "Works for everything from simple links to complex vCards and cryptocurrency payments.",
              icon: "📐"
            }
          ].map((card, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-indigo-100 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{card.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Fixed: Added missing default export
export default AboutPage;