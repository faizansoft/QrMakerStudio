import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QRType } from './types';
import { GENERATOR_DETAILS, FAQ_ITEMS } from './constants';
import { Button } from './components/Button';

const IconWrapper: React.FC<{ type: QRType }> = ({ type }) => {
  const iconConfig: Record<QRType, { color: string, svg: React.ReactNode }> = {
    url: { color: 'bg-cyan-500', svg: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></> },
    googleform: { color: 'bg-purple-600', svg: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6" /><path d="M9 17h6" /><path d="M9 9h1" /></> },
    vcard: { color: 'bg-teal-500', svg: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></> },
    event: { color: 'bg-orange-500', svg: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
    wifi: { color: 'bg-blue-500', svg: <><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></> },
    location: { color: 'bg-pink-500', svg: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> },
    crypto: { color: 'bg-orange-600', svg: <><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894" /><path d="M12.983 12.195l-5.908 1.042" /><path d="M11.767 19.089l-.347 1.97" /><path d="M14.215 6.893c4.924.869 6.14-6.025 1.215-6.893" /></> },
    facebook: { color: 'bg-blue-600', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
    text: { color: 'bg-emerald-500', svg: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></> },
    whatsapp: { color: 'bg-green-500', svg: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L21 3z" /> },
    email: { color: 'bg-sky-500', svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
    sms: { color: 'bg-teal-400', svg: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
    phone: { color: 'bg-rose-500', svg: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> }
  };
  const config = iconConfig[type];
  return (
    <div className={`${config.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">{config.svg}</svg>
    </div>
  );
};

const Home: React.FC = () => {
  const toolKeys = Object.keys(GENERATOR_DETAILS) as QRType[];
  const { hash } = useLocation();

  useEffect(() => {
    // SEO Update for Home
    document.title = "QR Generator Online | Professional Branded QR Code Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create professional, high-resolution custom QR codes. Our studio offers specialized tools for WiFi, business cards, and URLs with high-quality SVG exports.');
    }

    if (hash === '#tools') {
      const element = document.getElementById('tools');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="animate-in">
      <section className="relative overflow-hidden bg-white pt-16 pb-24 hero-min-height">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-indigo-100 mb-6">
            Reliable QR Tools for Professionals
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight mb-6">
            The Modern Way to Create <br/><span className="text-indigo-600">Branded QR Codes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            We built this studio because many online QR tools are hard to use and offer basic results. QR Generator Online is a professional platform designed for high-quality branding and permanent digital links.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#tools"><Button size="lg" className="rounded-full px-8 py-4 shadow-xl shadow-indigo-100 uppercase tracking-widest text-xs font-black">Browse All Tools</Button></Link>
            <Link to="/faqs-qr-code-generator"><Button variant="outline" size="lg" className="rounded-full px-8 py-4 uppercase tracking-widest text-xs font-black">Read the Guide</Button></Link>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-400 rounded-full blur-[120px]"></div>
        </div>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-black text-slate-900 mb-4">Select a Generator</h2>
          <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 font-medium text-sm">Choose from our specialized tools to start creating your custom assets.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {toolKeys.map(type => (
            <Link to={`/${type}-qr-code-generator`} key={type} className="group flex flex-col items-start bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <IconWrapper type={type} />
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{GENERATOR_DETAILS[type].title}</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{GENERATOR_DETAILS[type].desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-indigo-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Select Tool <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-black text-slate-900 leading-tight">Better Experiences Start with a Simple Scan.</h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              In a digital-first world, your first interaction is often physical. It might be a business card at a conference or a menu at a cafe. 
            </p>
            <p className="text-slate-600 font-medium leading-relaxed">
              Our customizable QR codes make that transition seamless. We ensure every scan is a perfect extension of your professional brand identity.
            </p>
            <div className="pt-4 flex gap-4">
              <div className="flex flex-col"><span className="text-2xl font-black text-indigo-600">100%</span><span className="text-[10px] font-black uppercase text-slate-400">Static Codes</span></div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col"><span className="text-2xl font-black text-indigo-600">No</span><span className="text-[10px] font-black uppercase text-slate-400">Expiration</span></div>
            </div>
          </div>
          <div className="relative p-1 bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden group aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
              alt="Networking and Collaboration" 
              loading="lazy"
              decoding="async"
              /* Performance optimization: high fetch priority for hero image */
              fetchpriority="high"
              className="w-full h-full object-cover rounded-[2.8rem] opacity-90 group-hover:scale-105 transition-transform duration-700" 
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
               <p className="text-sm font-bold text-slate-900">"We updated our business materials with these styled codes. They look professional and were easy to set up."</p>
               <div className="mt-4 flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase text-slate-900">Alex Reed</span>
                   <span className="text-[9px] font-bold text-indigo-500 uppercase">Brand Designer</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 leading-tight">Design Without Compromise</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">
                  Basic QR tools give you standard black squares. We give you tools to create assets that stand out. From business cards to WiFi access, your codes should be as unique as your brand.
                </p>
                <div className="grid gap-6">
                  {[
                    { t: "Logo Center Support", d: "Add your personal or brand logo to the middle of the code with ease." },
                    { t: "High Resolution SVG", d: "Download vector files that stay sharp on large prints like banners." },
                    { t: "Custom Pattern Styles", d: "Choose from different shapes and corner styles to match your identity." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-1">✓</div>
                      <div><h4 className="font-bold text-slate-900 mb-1" dangerouslySetInnerHTML={{ __html: item.t }} /><p className="text-sm text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.d }} /></div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative group p-4">
                <div className="bg-slate-50 p-8 md:p-12 rounded-[4rem] relative z-10 border border-slate-100 shadow-sm flex items-center justify-center min-h-[400px]">
                   <div className="bg-white p-6 rounded-[3.5rem] shadow-2xl relative transition-transform duration-500 group-hover:scale-[1.02]">
                      <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-56 md:h-56 text-slate-900" fill="currentColor" aria-hidden="true">
                        <rect x="0" y="0" width="30" height="30" rx="8" fill="#4f46e5" /><rect x="5" y="5" width="20" height="20" rx="4" fill="white" /><rect x="10" y="10" width="10" height="10" rx="2" fill="#4f46e5" />
                        <rect x="70" y="0" width="30" height="30" rx="8" fill="#4f46e5" /><rect x="75" y="5" width="20" height="20" rx="4" fill="white" /><rect x="80" y="10" width="10" height="10" rx="2" fill="#4f46e5" />
                        <rect x="0" y="70" width="30" height="30" rx="8" fill="#4f46e5" /><rect x="5" y="75" width="20" height="20" rx="4" fill="white" /><rect x="10" y="80" width="10" height="10" rx="2" fill="#4f46e5" />
                        <circle cx="50" cy="50" r="18" fill="white" />
                        {[...Array(8)].map((_, i) => (<circle key={i} cx={20 + Math.random() * 60} cy={20 + Math.random() * 60} r={2} fill="#818cf8" className="opacity-60" />))}
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-xl flex items-center justify-center text-white ring-4 ring-white">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
             <div className="w-12 h-12 mx-auto md:mx-0 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
             </div>
             <h3 className="text-xl font-bold">Privacy First</h3>
             <p className="text-slate-400 text-sm leading-relaxed font-medium">Your data stays on your device. We generate the QR pattern locally in your browser so your personal info stays private.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 mx-auto md:mx-0 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
             </div>
             <h3 className="text-xl font-bold">Sharp Export</h3>
             <p className="text-slate-400 text-sm leading-relaxed font-medium">Download SVG files to keep your code mathematically perfect and easy to scan at any size or on any material.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 mx-auto md:mx-0 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
             </div>
             <h3 className="text-xl font-bold">Permanent Codes</h3>
             <p className="text-slate-400 text-sm leading-relaxed font-medium">We create static codes with no scan limits and no hidden expiry. Once generated, the code is yours to use forever.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-black text-slate-900 leading-tight">Built for Long-term Use.</h2>
              <p className="text-slate-500 font-medium leading-relaxed">Some sites deactivate your codes after a few weeks to try and force a subscription. We do not do that. Our studio produces standardized codes that work as long as your destination exists.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-indigo-600 font-black text-2xl mb-1">0</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Expiration Dates</div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-indigo-600 font-black text-2xl mb-1">∞</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Total Scans</div>
                </div>
              </div>
              <div className="pt-4"><Link to="/faqs-qr-code-generator"><Button variant="outline" className="rounded-full px-8 text-xs font-black uppercase tracking-widest">See More in FAQ</Button></Link></div>
            </div>
            <div className="space-y-4">
              {FAQ_ITEMS.slice(0, 4).map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{item.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;