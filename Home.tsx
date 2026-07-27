import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QRType } from './types';
import { GENERATOR_DETAILS } from './constants';
import { useLanguage } from './context/LanguageContext';
import RecentCodes from './components/RecentCodes';

const IconWrapper: React.FC<{ type: QRType }> = ({ type }) => {
  const iconConfig: Record<QRType, { color: string, svg: React.ReactNode }> = {
    url: { color: 'bg-cyan-500', svg: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></> },
    googleform: { color: 'bg-purple-500', svg: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6" /><path d="M9 17h6" /><path d="M9 9h1" /></> },
    vcard: { color: 'bg-teal-500', svg: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></> },
    event: { color: 'bg-orange-500', svg: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
    wifi: { color: 'bg-blue-500', svg: <><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></> },
    location: { color: 'bg-pink-500', svg: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> },
    crypto: { color: 'bg-orange-600', svg: <><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894" /><path d="M12.983 12.195l-5.908 1.042" /><path d="M11.767 19.089l-.347 1.97" /><path d="M14.215 6.893c4.924.869 6.14-6.025 1.215-6.893" /></> },
    facebook: { color: 'bg-blue-600', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1-1h3z" /> },
    text: { color: 'bg-emerald-500', svg: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></> },
    whatsapp: { color: 'bg-green-500', svg: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L21 3z" /> },
    email: { color: 'bg-sky-500', svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
    sms: { color: 'bg-teal-400', svg: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
    phone: { color: 'bg-rose-500', svg: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> }
  };
  const config = iconConfig[type];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">{config.svg}</svg>
  );
};

const Home: React.FC = () => {
  const toolKeys = Object.keys(GENERATOR_DETAILS) as QRType[];
  const { hash } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = 'QR Generator Online | Professional Branded QR Code Studio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create professional, high-resolution custom QR codes. Specialized tools for WiFi, vCard, and URLs with high-quality SVG exports.');
    }

    if (hash === '#tools') {
      const element = document.getElementById('tools');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash, language]);

  return (
    <div className="animate-in">
      {/* Clean Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary-100">
                Free QR Code Generator
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
                Create Free QR Codes in Seconds
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                The all-in-one tool to create, customize, and download professional QR codes. No sign-up required, completely free forever.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/url-qr-code-generator">
                  <button className="btn-premium px-8 py-3 rounded-full text-white font-bold text-sm uppercase tracking-widest">
                    Create QR Code
                  </button>
                </Link>
                <Link to="/about">
                  <button className="px-8 py-3 bg-slate-100 border-2 border-slate-200 rounded-full font-bold text-sm uppercase tracking-widest text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all">
                    Learn More
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-700">4.8/5</span>
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Trusted by <span className="font-bold text-slate-900">50,000+</span> users
                </div>
              </div>
            </div>
            
            {/* QR Preview Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900">QR Code Preview</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Static</span>
              </div>
              <div className="bg-white rounded-2xl p-8 mb-6 flex items-center justify-center aspect-square">
                <div className="w-48 h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                  </svg>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all">
                  PNG
                </button>
                <button className="flex-1 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all">
                  SVG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Types Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">QR Code Types</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Choose the perfect QR code type for your needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {toolKeys.map(type => (
              <Link 
                key={type}
                to={`/${type}-qr-code-generator`}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary-400 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center text-white shadow-sm">
                  <div className={`${iconConfig[type].color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm`}>
                    <IconWrapper type={type} />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{GENERATOR_DETAILS[type].title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{GENERATOR_DETAILS[type].desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">How to create a free QR Code in 3 simple steps</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-2xl">1</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Choose your QR Code type</h3>
              <p className="text-slate-600 text-sm">Select from URL, WiFi, vCard, and more. Each type is optimized for its specific use case.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-2xl">2</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Customize it your way</h3>
              <p className="text-slate-600 text-sm">Add your details, change colors, add a logo, and test it in real-time before downloading.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-2xl">3</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Download & share</h3>
              <p className="text-slate-600 text-sm">Choose PNG or SVG format, download, and share it anywhere!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Why choose our QR Code Generator?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 mb-4 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">100% Free</h3>
              <p className="text-slate-600 text-sm">No hidden fees, no subscriptions. Completely free forever.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 mb-4 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Privacy First</h3>
              <p className="text-slate-600 text-sm">All processing happens in your browser. Your data never leaves your device.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">High Quality</h3>
              <p className="text-slate-600 text-sm">SVG exports for perfect printing at any size.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 mb-4 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Instant Download</h3>
              <p className="text-slate-600 text-sm">Get your QR codes immediately in multiple formats.</p>
            </div>
          </div>
        </div>
      </section>

      <RecentCodes />

      <article className="py-24 bg-white max-w-5xl mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900">Ready to create your first QR Code?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">Join thousands of businesses and creators who trust our platform for their QR code needs.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/url-qr-code-generator">
              <button className="btn-premium px-10 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest">
                Create Your First QR Code
              </button>
            </Link>
            <Link to="/about">
              <button className="px-10 py-4 bg-slate-100 border-2 border-slate-200 rounded-full font-bold text-sm uppercase tracking-widest text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;