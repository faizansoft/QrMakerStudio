import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
      const element = document.getElementById('qr-generator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const activeLangData = languageMeta.find(l => l.code === language) || languageMeta[0];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" title="Return to QR Generator Online Homepage" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white text-xl font-bold">QR</span>
          </div>
          <span className="text-xl font-display font-bold text-slate-900 tracking-tight">QR Generator Online</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" onClick={handleCreateClick} title="Create QR codes" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Create QR</Link>
          <Link to="/about" title="Learn about our mission" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</Link>
          <Link to="/contact" title="Get in touch" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Language Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowLang(!showLang)}
              title={`Active Language: ${activeLangData.label}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200"
            >
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
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
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
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

          <Link to="/" onClick={handleCreateClick} title="Start creating QR codes" className="hidden sm:block">
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transition-all">
              Create QR
            </button>
          </Link>
          <Link to="/" onClick={handleCreateClick} title="Create QR" className="sm:hidden">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
              QR
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
