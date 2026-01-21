import React, { useState, useMemo, useEffect } from 'react';
import { FAQ_ITEMS } from './constants';

const FAQPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Help & FAQ | QR Generator Online";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Find answers to frequently asked questions about QR code generation, custom styles, center logos, and technical standards for printing.');
    }
  }, []);

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => 
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8">
            Frequently Asked <span className="text-indigo-600">Questions.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our <strong>professional QR code generator</strong>. Find answers about custom logos, WiFi sharing, and more.
          </p>
        </div>
      </section>

      {/* Search & Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text"
            placeholder="Search FAQs (e.g., 'logo', 'wifi', 'svg')..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-14 pr-6 py-5 bg-white border-2 border-slate-100 rounded-[2rem] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all font-bold text-lg outline-none shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => (
              <div 
                key={idx} 
                className={`group border-2 transition-all duration-300 rounded-[2rem] overflow-hidden ${openIndex === idx ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-50 bg-white hover:border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">{item.category}</span>
                    <h3 className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-indigo-600' : 'text-slate-900'}`}>{item.question}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8">
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No matching questions found</h3>
              <p className="text-slate-500">Try searching for keywords like "logo", "wifi", or "svg".</p>
              <button onClick={() => setSearch('')} className="mt-6 text-indigo-600 font-bold hover:underline">Clear search</button>
            </div>
          )}
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="bg-slate-900 text-white py-24 mt-12 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-black tracking-tighter leading-none">The Best Professional <br/><span className="text-indigo-400">QR Generation Studio</span></h2>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">
                We've built a comprehensive suite of tools to handle everything from <strong>contact qr code generator</strong> needs to <strong>crypto qr code generator</strong> payments. Our platform is optimized for both mobile and desktop, ensuring you can <strong>create custom qr code</strong> designs anywhere.
              </p>
              <div className="flex flex-wrap gap-3">
                {['High-Res SVG', 'Custom Branding', 'Zero Tracking', 'Instant Export'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-300">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                   <div className="text-indigo-400 font-black mb-2 uppercase text-[10px]">Security</div>
                   <p className="text-xs text-slate-300">Our <strong>wifi qr code generator</strong> uses on-device encryption for safety.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                   <div className="text-indigo-400 font-black mb-2 uppercase text-[10px]">Print</div>
                   <p className="text-xs text-slate-300">Download <strong>qr code generator svg</strong> files for professional printing.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                   <div className="text-indigo-400 font-black mb-2 uppercase text-[10px]">Marketing</div>
                   <p className="text-xs text-slate-300">Boost engagement with a <strong>qr code with logo in the middle</strong>.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                   <div className="text-indigo-400 font-black mb-2 uppercase text-[10px]">Social</div>
                   <p className="text-xs text-slate-300">One-tap <strong>whatsapp qr code generator</strong> for your support team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      </section>
    </div>
  );
};

export default FAQPage;