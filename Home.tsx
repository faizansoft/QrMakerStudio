import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QRType } from './types';
import { GENERATOR_DETAILS, FAQ_ITEMS } from './constants';
import { Button } from './components/Button';

const IconWrapper: React.FC<{ type: QRType }> = ({ type }) => {
  const iconConfig: Record<QRType, { color: string, svg: React.ReactNode }> = {
    url: { 
      color: 'bg-cyan-500', 
      svg: (
        <>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </>
      ) 
    },
    googleform: {
      color: 'bg-purple-600',
      svg: (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
          <path d="M9 9h1" />
        </>
      )
    },
    vcard: { 
      color: 'bg-teal-500', 
      svg: (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </>
      ) 
    },
    event: { 
      color: 'bg-orange-500', 
      svg: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </>
      ) 
    },
    wifi: { 
      color: 'bg-blue-500', 
      svg: (
        <>
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </>
      ) 
    },
    location: { 
      color: 'bg-pink-500', 
      svg: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ) 
    },
    crypto: { 
      color: 'bg-orange-600', 
      svg: (
        <>
          <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894" />
          <path d="M12.983 12.195l-5.908 1.042" />
          <path d="M11.767 19.089l-.347 1.97" />
          <path d="M14.215 6.893c4.924.869 6.14-6.025 1.215-6.893" />
        </>
      ) 
    },
    facebook: { 
      color: 'bg-blue-600', 
      svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> 
    },
    text: { 
      color: 'bg-emerald-500', 
      svg: (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </>
      ) 
    },
    whatsapp: { 
      color: 'bg-green-500', 
      svg: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L21 3z" /> 
    },
    email: { 
      color: 'bg-sky-500', 
      svg: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ) 
    },
    sms: { 
      color: 'bg-teal-400', 
      svg: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> 
    },
    phone: { 
      color: 'bg-rose-500', 
      svg: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> 
    }
  };

  const config = iconConfig[type];

  return (
    <div className={`${config.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        {config.svg}
      </svg>
    </div>
  );
};

const Home: React.FC = () => {
  const toolKeys = Object.keys(GENERATOR_DETAILS) as QRType[];
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#tools') {
      const element = document.getElementById('tools');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-indigo-100 mb-6">
            Everything you need in one place
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight mb-6">
            A Better Way to Create <br/><span className="text-indigo-600">Custom QR Codes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            We built this because most QR generators are clunky, full of ads, or expire for no reason. <strong>QR Generator Online</strong> is simple, professional, and stays yours forever. Create a <strong>customizable qr code</strong> with your <strong>logo in middle</strong> in just a few clicks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#tools">
              <Button size="lg" className="rounded-full px-8 py-4 shadow-xl shadow-indigo-100 uppercase tracking-widest text-xs font-black">Browse Tools</Button>
            </Link>
            <Link to="/faqs-qr-code-generator">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-4 uppercase tracking-widest text-xs font-black">Common Questions</Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-400 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-black text-slate-900 mb-4">Choose Your Generator</h2>
          <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 font-medium text-sm">Thirteen specialized tools from <strong>wifi qr code generator</strong> to <strong>google forms qr code</strong> makers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {toolKeys.map(type => {
            const d = GENERATOR_DETAILS[type];
            return (
              <Link 
                to={`/${type}-qr-code-generator`}
                key={type} 
                className="group flex flex-col items-start bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <IconWrapper type={type} />
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{d.title}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {d.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-indigo-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Select Tool
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 leading-tight">Brand Identity <br/><span className="text-indigo-600">Without Compromise</span></h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">
                  A basic black and white square is fine, but it doesn't build trust. Our <strong>custom qr code maker</strong> lets you match your brand's exact aesthetics. Whether it's a <strong>qr code business card</strong> or a <strong>whatsapp qr code</strong>, we ensure your users feel safe scanning.
                </p>
                <div className="grid gap-6">
                  {[
                    { t: "Pixel-Perfect Logo Center", d: "Add your brand's <strong>logo in middle</strong> of the QR code with smart error correction." },
                    { t: "SVG for Large Scale", d: "Export as high-quality vector <strong>qr code svg generator</strong> files for banners and merchandise." },
                    { t: "No Tracking, Just Data", d: "We generate static codes. No middleman redirects, no data harvesting, just direct links." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1" dangerouslySetInnerHTML={{ __html: item.t }} />
                        <p className="text-sm text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.d }} />
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative group">
                <div className="absolute inset-0 bg-indigo-600/5 rounded-[4rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="bg-slate-50 p-12 rounded-[3.5rem] relative z-10 border border-slate-100 shadow-sm flex items-center justify-center">
                   <div className="bg-white p-4 rounded-3xl shadow-2xl relative">
                      <div className="w-48 h-48 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234f46e5%22 stroke-width=%221%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Crect x=%223%22 y=%223%22 width=%2218%22 height=%2218%22 rx=%222%22 ry=%222%22 /%3E%3Crect x=%227%22 y=%227%22 width=%223%22 height=%223%22 /%3E%3Crect x=%2214%22 y=%227%22 width=%223%22 height=%223%22 /%3E%3Crect x=%227%22 y=%2214%22 width=%223%22 height=%223%22 /%3E%3C/svg%3E')] bg-center bg-no-repeat opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white font-black text-xs uppercase tracking-tighter">Identity</div>
                      </div>
                   </div>
                   <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Custom Styled</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Professional Commitment Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-black text-slate-900 leading-tight">Built to last, <br/>not to expire.</h2>
              <p className="text-slate-500 font-medium leading-relaxed">We noticed a trend where "free" QR sites would deactivate codes after a month to force a paid upgrade. We find that practice unethical. Our <strong>custom qr code maker</strong> produces standardized, static codes that work for as long as the destination exists. No catch.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-indigo-600 font-black text-2xl mb-1">0</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Expiration Dates</div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-indigo-600 font-black text-2xl mb-1">∞</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Monthly Scans</div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/faqs-qr-code-generator">
                  <Button variant="outline" className="rounded-full px-8 text-xs font-black uppercase tracking-widest">Learn More in Our FAQ</Button>
                </Link>
              </div>
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