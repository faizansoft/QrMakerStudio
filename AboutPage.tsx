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
            Empowering Connections <br/>
            <span className="text-indigo-600">Through Design.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            QR Studio Pro was born out of a simple need: to provide high-end, professional QR code tools to everyone, without the hidden costs or expiration dates.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-black text-slate-900">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              In a world where digital interaction is constant, we believe that the first point of contact—the QR code—should be as beautiful and professional as the brand it represents. Our mission is to bridge the gap between functionality and aesthetics.
            </p>
            <ul className="space-y-4">
              {[
                "Uncompromising Vector Quality (SVG)",
                "No Registration or Subscription Required",
                "Advanced AI-Powered Styling Suggestions",
                "Total Privacy and Data Security"
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
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </div>

        {/* Why Us */}
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "AI Enhanced",
              desc: "Our integration with Gemini AI allows you to generate stunning color palettes and patterns that perfectly suit your content's mood.",
              icon: "✨"
            },
            {
              title: "Privacy First",
              desc: "We don't track your scans. We don't store your data. Your QR codes are generated directly in your browser for maximum security.",
              icon: "🛡️"
            },
            {
              title: "Vector Perfect",
              desc: "Download in SVG format for professional printing. Our codes stay crystal clear from business cards to massive billboards.",
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

        {/* CTA */}
        <div className="text-center pt-12">
          <Link to="/url-qr-generator">
            <Button size="lg" className="rounded-full px-12 py-5 shadow-2xl shadow-indigo-200">Start Designing Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;