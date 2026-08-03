import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { languageMeta, SupportedLanguage } from '../translations';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [showLang, setShowLang] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLang(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCreateClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('qr-generator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const activeLangData = languageMeta.find(l => l.code === language) || languageMeta[0];

  const qrTypes = [
    { label: 'URL Website', href: '/url-qr-code-generator' },
    { label: 'Plain Text', href: '/text-qr-code-generator' },
    { label: 'vCard Contact', href: '/vcard-qr-code-generator' },
    { label: 'WiFi Password', href: '/wifi-qr-code-generator' },
    { label: 'Email Link', href: '/email-qr-code-generator' },
    { label: 'SMS Message', href: '/sms-qr-code-generator' },
    { label: 'Phone Call', href: '/phone-qr-code-generator' },
    { label: 'WhatsApp Chat', href: '/whatsapp-qr-code-generator' },
    { label: 'Social Media', href: '/facebook-qr-code-generator' },
    { label: 'Google Maps Location', href: '/location-qr-code-generator' },
    { label: 'Event Calendar', href: '/event-qr-code-generator' },
    { label: 'Crypto Address', href: '/crypto-qr-code-generator' },
    { label: 'Google Forms Survey', href: '/googleform-qr-code-generator' },
  ];

  const features = [
    { label: 'QR Code with Logo', href: '/qr-code-with-logo' },
    { label: 'Customizable Designs', href: '/custom-qr-codes' },
    { label: 'Colored QR Codes', href: '/colored-qr-code-generator' },
    { label: 'Vector SVG Export', href: '/svg-qr-code-generator' },
    { label: 'High-Res Downloads', href: '/high-resolution-qr-codes' },
  ];

  const resources = [
    { label: 'Blog', href: '/about' },
    { label: 'Help & FAQ', href: '/faqs-qr-code-generator' },
    { label: 'About Us', href: '/about' },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const ChevronIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform">
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-3 lg:gap-4 xl:gap-8">
          <Link to="/" title="QR Maker Studio Homepage" className="flex shrink-0 items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight hidden sm:block">QR Maker Studio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-3 lg:flex xl:gap-6" ref={dropdownRef}>
            <Link
              to="/"
              onClick={handleCreateClick}
              className="whitespace-nowrap text-sm xl:text-base transition-colors text-gray-900 hover:text-accent font-medium"
            >
              QR Code Generator
            </Link>

            {/* QR Code Types Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('types')}
                className="flex items-center gap-1 whitespace-nowrap text-sm xl:text-base transition-colors text-gray-900 hover:text-accent font-medium"
              >
                QR Code Types
                <ChevronIcon />
              </button>
              {openDropdown === 'types' && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg">
                  {qrTypes.map(item => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-50 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('features')}
                className="flex items-center gap-1 whitespace-nowrap text-sm xl:text-base transition-colors text-gray-900 hover:text-accent font-medium"
              >
                Features
                <ChevronIcon />
              </button>
              {openDropdown === 'features' && (
                <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg">
                  {features.map(item => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-50 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center gap-1 whitespace-nowrap text-sm xl:text-base transition-colors text-gray-900 hover:text-accent font-medium"
              >
                Resources
                <ChevronIcon />
              </button>
              {openDropdown === 'resources' && (
                <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg">
                  {resources.map(item => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-50 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="whitespace-nowrap text-sm xl:text-base transition-colors text-gray-900 hover:text-accent font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: Language + CTA (Desktop) */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setShowLang(!showLang)}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm xl:text-base text-gray-500 hover:bg-neutral-100 hover:text-gray-900"
              aria-label="Select language"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="uppercase text-sm font-medium">{activeLangData.code}</span>
              <svg className="h-3 w-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLang && (
              <div className="absolute right-0 top-full z-50 mt-1 w-48 max-h-[400px] overflow-y-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
                {languageMeta.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code as SupportedLanguage); setShowLang(false); }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50 transition-colors ${language === lang.code ? 'font-semibold text-accent' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <span>{lang.native}</span>
                    {language === lang.code && (
                      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <Link
            to="/"
            onClick={handleCreateClick}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-button transition-colors duration-150 border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-5 py-2 text-sm"
          >
            Create QR Code
          </Link>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/"
            onClick={handleCreateClick}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-button transition-colors duration-150 border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-4 py-1.5 text-sm"
          >
            Create QR
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-1">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-neutral-50 rounded-lg">
            QR Code Generator
          </Link>
          <div className="px-3 py-2">
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">QR Code Types</p>
            <div className="grid grid-cols-2 gap-1">
              {qrTypes.map(item => (
                <Link key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)} className="px-2 py-2 text-sm text-gray-600 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-neutral-50 rounded-lg">
            About
          </Link>
          <Link to="/faqs-qr-code-generator" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-neutral-50 rounded-lg">
            Help & FAQ
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-neutral-50 rounded-lg">
            Contact
          </Link>

          {/* Mobile Language */}
          <div className="px-3 py-2 border-t border-neutral-100 mt-2 pt-3">
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Language</p>
            <div className="grid grid-cols-3 gap-1">
              {languageMeta.slice(0, 9).map(lang => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code as SupportedLanguage); setMobileMenuOpen(false); }}
                  className={`px-2 py-2 text-sm rounded-lg transition-colors ${language === lang.code ? 'bg-accent/10 text-accent font-semibold' : 'text-gray-600 hover:bg-neutral-50'}`}
                >
                  {lang.native}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
