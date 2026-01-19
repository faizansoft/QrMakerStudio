import React from 'react';
import { QRType } from './types';
import { GENERATOR_DETAILS, FAQ_ITEMS } from './constants';
import { Button } from './components/Button';

interface HomeProps {
  onSelect: (type: QRType) => void;
}

const Home: React.FC<HomeProps> = ({ onSelect }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
            </div>
            <span className="text-xl font-display font-black text-slate-900">QR Studio Pro</span>
          </div>
          <Button size="sm" variant="primary" className="rounded-full px-6" onClick={() => onSelect('url')}>Get Started</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-100">Professional QR Solutions</span>
          <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9]">Select Your <span className="text-indigo-600">Studio</span></h1>
          <p className="text-xl text-slate-500 font-medium">Generate specialized QR codes for any use case. Fully customizable, high-resolution, and 100% free.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(GENERATOR_DETAILS) as QRType[]).map(type => {
            const d = GENERATOR_DETAILS[type];
            return (
              <div 
                key={type} 
                onClick={() => onSelect(type)}
                className="group relative bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all cursor-pointer overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-indigo-50 transition-transform">
                    {d.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{d.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{d.desc}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                    Create {d.title}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
              </div>
            );
          })}
        </div>

        <section className="mt-48 max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center tracking-tight uppercase">Platform FAQ</h2>
          <div className="grid gap-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">{item.question}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white pt-24 pb-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-600">
           <div className="flex items-center gap-4">
              <div className="qr-gradient w-8 h-8 rounded-lg"></div>
              <span>© 2026 QR Studio Pro</span>
           </div>
           <span>Enterprise Grade • No Tracking</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;