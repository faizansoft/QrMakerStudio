import React from 'react';
import { Link } from 'react-router-dom';
import { QRType } from './types';
import { GENERATOR_DETAILS, FAQ_ITEMS } from './constants';
import { Button } from './components/Button';

const Home: React.FC = () => {
  const toolKeys = Object.keys(GENERATOR_DETAILS) as QRType[];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next-Gen QR Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
            The World's Best <br/>
            <span className="text-indigo-600">QR Code Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-12">
            Professional-grade QR codes with high-res vector downloads, custom branding, and AI-powered styles. 100% Free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/url-qr-generator">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-2xl shadow-indigo-200">Start Designing Now</Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg">View Templates</Button>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-[160px]"></div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Our Professional Tools</h2>
            <p className="text-slate-500 font-medium">Select a specialized generator for your specific business need.</p>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-500 tracking-widest">SVG Vector</div>
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-500 tracking-widest">High Res PNG</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolKeys.map(type => {
            const d = GENERATOR_DETAILS[type];
            return (
              <Link 
                to={`/${type}-qr-generator`}
                key={type} 
                className="group relative bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all cursor-pointer overflow-hidden block"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-indigo-50 transition-transform">
                    {d.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{d.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{d.desc}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                    Build {d.title}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO Content / FAQ */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight uppercase">Platform Deep-Dive</h2>
            <p className="text-slate-500">Everything you need to know about the world's most powerful QR generator.</p>
          </div>
          <div className="grid gap-6">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.question}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-End Feature Callout */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-black leading-tight">Professional Design Control at Your Fingertips.</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">✓</div>
                  Custom Logo Integration with Error Correction
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">✓</div>
                  Vector SVG Exports for Billboards & Printing
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">✓</div>
                  AI-Powered Style Analysis (Powered by Gemini)
                </li>
              </ul>
              <Button variant="secondary" size="lg" className="rounded-full px-12 bg-white text-indigo-600 hover:bg-slate-50">Try All Features</Button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-white/10 rounded-[3rem] backdrop-blur-3xl border border-white/20 p-12 flex items-center justify-center">
                 <div className="w-full aspect-square bg-white rounded-2xl p-4 shadow-2xl">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234f46e5' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='2'/><rect x='7' y='7' width='3' height='3'/><rect x='14' y='7' width='3' height='3'/><rect x='7' y='14' width='3' height='3'/><rect x='14' y='14' width='3' height='3'/></svg>" className="w-full opacity-20" />
                 </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;