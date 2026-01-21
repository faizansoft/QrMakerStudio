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
    document.title = "Professional QR Code Generator | Custom Branded QR Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create professional, branded QR codes for URLs, WiFi, business cards, and social media. High-resolution SVG exports, custom patterns, and logo center integration.');
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
            Reliable Branded QR Assets
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight mb-6">
            The Professional Way to Create <br/><span className="text-indigo-600">Customizable QR Codes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Welcome to the definitive <strong>branded QR code generator</strong>. We provide specialized tools for high-quality marketing, networking, and digital access. Transform standard links into unique visual assets that stay active forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#tools"><Button size="lg" className="rounded-full px-8 py-4 shadow-xl shadow-indigo-100 uppercase tracking-widest text-xs font-black">Select a Tool</Button></Link>
            <Link to="/about"><Button variant="outline" size="lg" className="rounded-full px-8 py-4 uppercase tracking-widest text-xs font-black">Our Philosophy</Button></Link>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-400 rounded-full blur-[120px]"></div>
        </div>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-black text-slate-900 mb-4">Explore Our QR Generation Suite</h2>
          <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 font-medium text-sm">Every tool is optimized for the highest scannability and professional branding standards.</p>
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
                Go to Generator <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-black text-slate-900 leading-tight">Why Settle for Standard Squares?</h2>
            <div className="space-y-4">
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                Most online QR makers produce low-resolution, generic patterns that fail to inspire confidence in your audience. In a digital-first era, your <strong>custom QR code</strong> is often the first physical touchpoint for your brand.
              </p>
              <p className="text-slate-600 font-medium leading-relaxed">
                Whether you are linking to a restaurant menu, sharing a WiFi password, or handing out a <strong>digital business card</strong>, the visual quality of your QR asset speaks volumes about your attention to detail. We provide the tools to ensure that quality is uncompromising.
              </p>
            </div>
            <div className="pt-4 flex gap-8">
              <div className="flex flex-col"><span className="text-2xl font-black text-indigo-600">100%</span><span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Static Stability</span></div>
              <div className="flex flex-col"><span className="text-2xl font-black text-indigo-600">No</span><span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Scan Limits</span></div>
              <div className="flex flex-col"><span className="text-2xl font-black text-indigo-600">Free</span><span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">SVG Exports</span></div>
            </div>
          </div>
          <div className="relative p-1 bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden group aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Business Networking" 
              loading="lazy"
              fetchpriority="high"
              className="w-full h-full object-cover rounded-[2.8rem] opacity-90 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
               <p className="text-sm font-bold text-slate-900 leading-relaxed">"Upgrading our business materials with branded, high-res codes improved our client engagement rates immediately."</p>
               <div className="mt-4 flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-[10px]">AR</div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase text-slate-900">Alex Reed</span>
                   <span className="text-[9px] font-bold text-indigo-500 uppercase">Creative Director</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-24 bg-white max-w-5xl mx-auto px-6 space-y-32">
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">The Psychology of the QR Scan</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Why customization is no longer optional for serious businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Trust and Recognition</h3>
              <p className="text-slate-600 leading-relaxed">
                Generic QR codes are often associated with spam or phishing. By adding a <strong>logo in the middle</strong> of your QR code, you provide instant brand recognition. This visual anchor signals to the user that the code belongs to a legitimate entity, significantly increasing the likelihood of a successful scan.
              </p>
              <h3 className="text-2xl font-bold text-slate-900">Brand Consistency</h3>
              <p className="text-slate-600 leading-relaxed">
                Every marketing touchpoint should reflect your brand identity. Our <strong>customizable QR maker</strong> allows you to apply your brand's specific color palette to the dots and eyes of the QR pattern. This turns a functional tool into a beautiful design element that complements your flyers, posters, and digital ads.
              </p>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
               <div className="relative z-10 space-y-6">
                  <h3 className="text-xl font-bold text-indigo-400 uppercase tracking-widest">The SVG Advantage</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    Unlike standard PNG images, our <strong>SVG QR code generator</strong> outputs mathematical vector paths. This is critical for professional printing. Whether you are placing a code on a 2-inch business card or a 20-foot billboard, an SVG ensures perfectly sharp edges and zero scan errors due to pixelation.
                  </p>
                  <Link to="/url-qr-code-generator"><Button variant="outline" className="text-white border-white/20 hover:bg-white/10 uppercase tracking-widest text-[10px] font-black rounded-full px-8">Try Vector Export</Button></Link>
               </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 text-center tracking-tight">Built for Long-term Utility</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h3 className="text-xl font-bold">Privacy Guaranteed</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Your sensitive data never leaves your device. This <strong>secure QR generator</strong> processes all pattern rendering locally in your browser. We don't store your URLs, WiFi passwords, or contact details on any server.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold">No Expiration Dates</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We specialize in <strong>static QR codes</strong>. Unlike "dynamic" services that charge monthly fees to keep your links alive, our codes encode data directly into the pattern. Once you download it, it works forever.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              </div>
              <h3 className="text-xl font-bold">Print Optimization</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our <strong>QR code SVG generator</strong> includes options for error correction levels (L, M, Q, H). Use "High" correction if you plan to print your code on textured surfaces or in high-traffic environments.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 rounded-[4rem] p-12 md:p-20 text-center space-y-8">
           <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Ready to elevate your brand?</h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
             Join thousands of designers and businesses using <strong>QR Generator Online</strong> to create professional, reliable, and beautiful digital gateways.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
             <Link to="/url-qr-code-generator"><Button size="lg" className="rounded-full px-12 shadow-2xl shadow-indigo-200 uppercase tracking-widest text-[11px] font-black">Get Started Free</Button></Link>
             <Link to="/faqs-qr-code-generator"><Button variant="outline" size="lg" className="rounded-full px-12 uppercase tracking-widest text-[11px] font-black">Learn More</Button></Link>
           </div>
           <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Link to="/wifi-qr-code-generator" className="hover:text-indigo-600 transition-colors">WiFi Tool</Link>
              <Link to="/vcard-qr-code-generator" className="hover:text-indigo-600 transition-colors">vCard Tool</Link>
              <Link to="/email-qr-code-generator" className="hover:text-indigo-600 transition-colors">Email Tool</Link>
              <Link to="/whatsapp-qr-code-generator" className="hover:text-indigo-600 transition-colors">WhatsApp Tool</Link>
           </div>
        </section>
      </article>
    </div>
  );
};

export default Home;