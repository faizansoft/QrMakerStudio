import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { languageMeta, SupportedLanguage } from '../translations';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [showLang, setShowLang] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLang(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCreateClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('tools');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const activeLangData = languageMeta.find(l => l.code === language) || languageMeta[0];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" title="Return to QR Generator Online Homepage" className="flex items-center gap-3 group">
          <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-indigo-500/10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <span className="text-xl font-display font-black text-slate-900 tracking-tight">QR Generator <span className="text-indigo-600">Online</span></span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/#tools" onClick={handleCreateClick} title="Explore our specialized QR generation tools" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">{t('nav_tools')}</Link>
          <Link to="/faqs-qr-code-generator" title="Get help and view frequently asked questions" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">{t('nav_faq')}</Link>
          <Link to="/about" title="Learn about our mission and technical standards" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">{t('nav_about')}</Link>
          <Link to="/contact" title="Get in touch with our professional support team" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">{t('nav_contact')}</Link>
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Enhanced Language Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowLang(!showLang)}
              title={`Active Language: ${activeLangData.label}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-200"
            >
              <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              <span className="hidden sm:inline">{activeLangData.native}</span>
              <span className="sm:hidden">{activeLangData.code.toUpperCase()}</span>
            </button>
            {showLang && (
              <div className="absolute top-full right-0 mt-2 w-64 max-h-[400px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 animate-in fade-in zoom-in duration-200 no-scrollbar">
                <div className="grid grid-cols-1 gap-1">
                  {languageMeta.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code as SupportedLanguage); setShowLang(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${language === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-bold">{lang.native}</span>
                        <span className="text-[9px] uppercase tracking-tighter opacity-60 font-black">{lang.label}</span>
                      </div>
                      {language === lang.code && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/#tools" onClick={handleCreateClick} title="Start creating your first professional QR code" className="hidden sm:block">
            <Button size="sm" variant="primary" className="rounded-full px-6 shadow-xl shadow-indigo-100" aria-label="Create Free QR Code">{t('cta_create_free')}</Button>
          </Link>
          <Link to="/#tools" onClick={handleCreateClick} title="Create QR" className="sm:hidden">
            <Button size="sm" variant="primary" className="rounded-full px-4 font-black text-[10px]" aria-label="Create New QR">NEW</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
