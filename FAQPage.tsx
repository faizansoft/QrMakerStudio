import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from './constants';
import { useLanguage } from './context/LanguageContext';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = t('meta_faq_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_faq_desc'));
    }
  }, [t]);

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => 
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Expert Knowledge Base
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8">
            Frequently Asked <span className="text-indigo-600">Questions.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Master the art of <strong>branded QR codes</strong>. Learn about technical standards, print reliability, and professional customization.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative mb-16">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text"
            placeholder="Search keywords: 'logo', 'svg', 'print'..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-14 pr-6 py-5 bg-white border-2 border-slate-100 rounded-[2rem] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all font-bold text-lg outline-none shadow-sm"
          />
        </div>

        <div className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => (
              <div 
                key={idx} 
                className={`group border-2 transition-all duration-300 rounded-[2.5rem] overflow-hidden ${openIndex === idx ? 'border-indigo-600 bg-indigo-50/20' : 'border-slate-50 bg-white hover:border-slate-100'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">{item.category}</span>
                    <h3 className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-indigo-600' : 'text-slate-900'}`}>{item.question}</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-8 pb-10">
                    <p className="text-slate-600 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    <div className="mt-8 pt-6 border-t border-indigo-100/50 flex gap-4">
                       <Link to="/contact" title="Contact for Help" className="text-[10px] font-black uppercase text-indigo-500 hover:underline tracking-widest">More Help Needed? →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No matching questions found</h3>
              <p className="text-slate-500">Try searching for generic terms like "print", "expire", or "free".</p>
              <button onClick={() => setSearch('')} className="mt-6 text-indigo-600 font-bold hover:underline">Reset Search</button>
            </div>
          )}
        </div>

        <article className="mt-24 py-16 bg-slate-50 rounded-[4rem] px-8 md:px-16 space-y-12">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Pro Guide: Mastering QR Scannability</h2>
           <div className="space-y-8">
              <div className="space-y-4">
                 <h3 className="text-xl font-bold text-slate-900">Understanding Error Correction Levels (L, M, Q, H)</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   Our <strong>branded QR maker</strong> allows you to choose from four levels of Reed-Solomon error correction. 
                   <strong>Level L (Low)</strong> recovers 7% of data and is best for clean, digital displays. 
                   <strong>Level H (High)</strong> recovers up to 30% of data and is mandatory if you are adding a <strong>logo in the middle</strong> of your QR code or printing on materials that might get scratched, like warehouse labels or outdoor signage.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-xl font-bold text-slate-900">Why Use SVG for Professional Printing?</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   If you are working with a professional print shop for business cards or posters, they will always ask for vector files. Our <strong>QR code SVG generator</strong> produces mathematical paths rather than pixels. This means your <strong>vCard QR code</strong> or <strong>WiFi sharing link</strong> will have razor-sharp edges regardless of the print size, preventing the scan errors common with blurry JPG or PNG files.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-xl font-bold text-slate-900">The "Quiet Zone" Requirement</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   A common mistake in QR design is removing the white border (the quiet zone). Scanners need this high-contrast space to distinguish the code from its surroundings. Our <strong>customizable QR maker</strong> includes a margin toggle to ensure your design remains functional and compliant with global scanning standards.
                 </p>
              </div>
           </div>
           <div className="pt-12 text-center">
              <Link to="/url-qr-code-generator" title="Get Started">
                <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">Start Designing Now</button>
              </Link>
           </div>
        </article>

        <section className="mt-32 space-y-12 border-t border-slate-100 pt-20">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore Tool Tutorials</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/vcard-qr-code-generator" title="vCard Tutorial" className="group p-6 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600 transition-all">
               <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2">Tutorial</h4>
               <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Digital Business Cards →</p>
            </Link>
            <Link to="/wifi-qr-code-generator" title="WiFi Tutorial" className="group p-6 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600 transition-all">
               <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2">Tutorial</h4>
               <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">WiFi Sharing Setup →</p>
            </Link>
            <Link to="/location-qr-code-generator" title="Location Tutorial" className="group p-6 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600 transition-all">
               <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2">Tutorial</h4>
               <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Maps Navigation →</p>
            </Link>
            <Link to="/crypto-qr-code-generator" title="Crypto Tutorial" className="group p-6 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600 transition-all">
               <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2">Tutorial</h4>
               <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Crypto Payments →</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQPage;