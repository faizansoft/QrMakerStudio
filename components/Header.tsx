import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Link from './LocaleLink';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';
import { languageMeta, SupportedLanguage } from '../translations';
import { useContentLocale } from '../context/ContentLocaleContext';
import { stripLocalePrefix, isRoutedLocale } from '../constants/routeMetaI18n';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const contentLocale = useContentLocale();
  // Home link and the "active page" scroll-to-generator behaviour must
  // resolve against the path WITHOUT any /<locale>/ prefix, and the home
  // link itself must stay inside the current locale rather than dropping
  // the visitor back onto the English homepage.
  const homeHref = contentLocale ? `/${contentLocale}` : '/';
  const { user, signOut } = useAuth();
  const [showLang, setShowLang] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLang(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
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
    if (stripLocalePrefix(location.pathname) === '/') {
      e.preventDefault();
      const element = document.getElementById('qr-generator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthModalMode(mode);
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  };

  const activeLangData = languageMeta.find(l => l.code === language) || languageMeta[0];

  const qrTypes = [
    { label: t('footer_pdf_qr'), href: '/pdf-qr-code-generator' },
    { label: t('footer_app_store_qr'), href: '/app-store-qr-code-generator' },
    { label: t('tab_url_label'), href: '/url-qr-code-generator' },
    { label: t('tab_text_label'), href: '/text-qr-code-generator' },
    { label: t('tab_vcard_label'), href: '/vcard-qr-code-generator' },
    { label: t('tab_wifi_label'), href: '/wifi-qr-code-generator' },
    { label: t('tab_instagram_label'), href: '/instagram-qr-code-generator' },
    { label: t('tab_youtube_label'), href: '/youtube-qr-code-generator' },
    { label: t('tab_linkedin_label'), href: '/linkedin-qr-code-generator' },
    { label: t('tab_twitter_label'), href: '/twitter-qr-code-generator' },
    { label: t('tab_tiktok_label'), href: '/tiktok-qr-code-generator' },
    { label: t('tab_telegram_label'), href: '/telegram-qr-code-generator' },
    { label: t('tab_paypal_label'), href: '/paypal-qr-code-generator' },
    { label: t('tab_upi_label'), href: '/upi-qr-code-generator' },
    { label: t('tab_email_label'), href: '/email-qr-code-generator' },
    { label: t('tab_sms_label'), href: '/sms-qr-code-generator' },
    { label: t('tab_phone_label'), href: '/phone-qr-code-generator' },
    { label: t('tab_whatsapp_label'), href: '/whatsapp-qr-code-generator' },
    { label: t('tab_facebook_label'), href: '/facebook-qr-code-generator' },
    { label: t('tab_location_label'), href: '/location-qr-code-generator' },
    { label: t('tab_event_label'), href: '/event-qr-code-generator' },
    { label: t('tab_crypto_label'), href: '/crypto-qr-code-generator' },
    { label: t('tab_googleform_label'), href: '/googleform-qr-code-generator' },
  ];

  const features = [
    { label: t('footer_pdf_qr'), href: '/pdf-qr-code-generator' },
    { label: t('footer_app_store_qr'), href: '/app-store-qr-code-generator' },
    { label: t('footer_bulk_qr'), href: '/bulk-qr-code-generator' },
    { label: t('footer_qr_scanner'), href: '/qr-code-scanner' },
    { label: t('footer_social_media_qr'), href: '/social-media-qr-code' },
    { label: t('feature_logo'), href: '/qr-code-with-logo' },
    { label: t('feature_custom'), href: '/custom-qr-codes' },
    { label: t('feature_color'), href: '/colored-qr-code-generator' },
    { label: t('feature_svg'), href: '/svg-qr-code-generator' },
    { label: t('feature_hd'), href: '/high-resolution-qr-codes' },
  ];

  const resources = [
    { label: t('nav_blog'), href: '/blog' },
    { label: t('nav_faq'), href: '/faqs-qr-code-generator' },
    { label: t('nav_about'), href: '/about' },
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
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-8">
            <Link to={homeHref} title="QR Generator Online Homepage" className="flex shrink-0 items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight hidden sm:block">QR Generator Online</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-3 lg:flex xl:gap-6" ref={dropdownRef}>
              <Link
                to={homeHref}
                onClick={handleCreateClick}
                className="whitespace-nowrap text-sm xl:text-base transition-colors text-slate-900 hover:text-accent font-medium"
              >
                QR Generator
              </Link>

              {/* QR Code Types Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('types')}
                  className="flex items-center gap-1 whitespace-nowrap text-sm xl:text-base transition-colors text-slate-900 hover:text-accent font-medium"
                >
                  {t('nav_tools')}
                  <ChevronIcon />
                </button>
                {openDropdown === 'types' && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-56 max-h-[420px] overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                    {qrTypes.map(item => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
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
                  className="flex items-center gap-1 whitespace-nowrap text-sm xl:text-base transition-colors text-slate-900 hover:text-accent font-medium"
                >
                  {t('nav_features')}
                  <ChevronIcon />
                </button>
                {openDropdown === 'features' && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                    {features.map(item => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* My QR Codes Link */}
              <Link
                to={user ? "/dashboard" : "/login"}
                className="whitespace-nowrap text-sm xl:text-base transition-colors text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                My QR Codes
              </Link>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center gap-1 whitespace-nowrap text-sm xl:text-base transition-colors text-slate-900 hover:text-accent font-medium"
                >
                  {t('nav_resources')}
                  <ChevronIcon />
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                    {resources.map(item => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="whitespace-nowrap text-sm xl:text-base transition-colors text-slate-900 hover:text-accent font-medium"
              >
                {t('nav_pricing')}
              </Link>
            </nav>
          </div>

          {/* Right: Language + User Auth / CTA (Desktop) */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setShowLang(!showLang)}
                className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm xl:text-base text-slate-500 hover:bg-slate-100 hover:text-slate-900"
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
                <div className="absolute right-0 top-full z-50 mt-1 w-48 max-h-[400px] overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
                  {languageMeta.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        const code = lang.code as SupportedLanguage;
                        setLanguage(code);
                        setShowLang(false);
                        // Every language here is either 'en' (unprefixed) or
                        // a routed locale with a real /<code>/... URL tree —
                        // follow the visitor into (or out of) it.
                        const base = stripLocalePrefix(location.pathname);
                        navigate(isRoutedLocale(code) ? `/${code}${base === '/' ? '' : base}` : base);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 transition-colors ${language === lang.code ? 'font-semibold text-accent' : 'text-slate-600 hover:text-slate-900'}`}
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

            {/* Auth Buttons or User Menu */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-accent text-white font-bold text-xs flex items-center justify-center">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 max-w-[120px] truncate hidden xl:inline">
                    {user.email}
                  </span>
                  <ChevronIcon />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-[10px] uppercase font-bold text-slate-500">Signed in as</p>
                      <p className="text-xs font-bold text-slate-900 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-accent font-medium transition-colors"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      My QR Codes
                    </Link>
                    <Link
                      to={homeHref}
                      onClick={handleCreateClick}
                      className="flex items-center gap-2 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-accent font-medium transition-colors"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Create New QR
                    </Link>
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button
                        onClick={() => { signOut(); setShowUserMenu(false); }}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenAuth('signin')}
                  className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => handleOpenAuth('signup')}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-semibold rounded-button transition-colors border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-4 py-1.5 text-sm"
                >
                  Sign Up Free
                </button>
              </div>
            )}
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {user ? (
              <Link
                to="/dashboard"
                className="px-3 py-1.5 bg-accent/10 text-accent font-bold rounded-lg text-xs"
              >
                Dashboard
              </Link>
            ) : (
              <button
                onClick={() => handleOpenAuth('signup')}
                className="px-3 py-1.5 bg-accent text-white font-bold rounded-lg text-xs"
              >
                Sign Up
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-slate-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
            <Link to={homeHref} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-lg">
              QR Code Generator
            </Link>
            <Link to={user ? "/dashboard" : "/login"} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-bold text-emerald-700 hover:bg-emerald-50 rounded-lg">
              My QR Codes & Analytics
            </Link>
            <div className="px-3 py-2">
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">QR Code Types</p>
              <div className="grid grid-cols-2 gap-1">
                {qrTypes.slice(0, 12).map(item => (
                  <Link key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-xs text-slate-600 hover:text-accent transition-colors truncate">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {user ? (
              <div className="border-t border-slate-100 pt-2 px-3">
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2 text-sm text-red-600 font-bold"
                >
                  Sign Out ({user.email})
                </button>
              </div>
            ) : (
              <div className="border-t border-slate-100 pt-3 flex gap-2 px-3">
                <button
                  onClick={() => handleOpenAuth('signin')}
                  className="flex-1 py-2 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl"
                >
                  Log In
                </button>
                <button
                  onClick={() => handleOpenAuth('signup')}
                  className="flex-1 py-2 bg-accent text-white text-xs font-bold rounded-xl"
                >
                  Sign Up Free
                </button>
              </div>
            )}
          </nav>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authModalMode}
      />
    </>
  );
};
