import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { QRConfig } from './types';
import Home from './Home';
import URLPage from './URLPage';
import WiFiPage from './WiFiPage';
import VCardPage from './VCardPage';
import PhonePage from './PhonePage';
import SMSPage from './SMSPage';
import EmailPage from './EmailPage';
import TextPage from './TextPage';
import EventPage from './EventPage';
import LocationPage from './LocationPage';
import CryptoPage from './CryptoPage';
import FacebookPage from './FacebookPage';
import WhatsAppPage from './WhatsAppPage';
import GoogleFormPage from './GoogleFormPage';
import AboutPage from './AboutPage';
import FAQPage from './FAQPage';
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const SEOManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 1. Manage Canonical Tag
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const cleanPath = location.pathname === '/' ? '' : location.pathname.replace(/\/$/, "");
    const absoluteUrl = `https://qr-generator.online${cleanPath}`;
    canonical.setAttribute("href", absoluteUrl);

    // 2. Manage Social Meta Tags (OG & Twitter)
    // We wrap this in a tiny timeout to ensure the child Page components 
    // have finished updating document.title and the description meta tag.
    const timeout = setTimeout(() => {
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

      // Open Graph
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', absoluteUrl);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

      // Twitter
      document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', absoluteUrl);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    }, 50);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [styling, setStyling] = useState<Omit<QRConfig, 'value'>>({
    fgColor: '#1e293b',
    bgColor: '#ffffff',
    level: 'H',
    size: 512,
    includeMargin: true,
    dotType: 'square',
    cornerSquareType: 'square',
    cornerDotType: 'square',
    cornerSquareColor: '#1e293b',
    cornerDotColor: '#1e293b',
  });

  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const commonProps = { styling, setStyling, logoSrc, setLogoSrc };

  const basename = useMemo(() => {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    if (parts.length > 0) {
      const firstPart = parts[0];
      const isToolPath = firstPart.includes('qr-code-generator') || 
                         ['about', 'contact', 'privacy', 'terms', 'faqs'].includes(firstPart);
      if (!isToolPath && firstPart.length > 25) {
        return `/${firstPart}`;
      }
    }
    return '';
  }, []);

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <SEOManager />
      <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/url-qr-code-generator" element={<URLPage {...commonProps} />} />
            <Route path="/googleform-qr-code-generator" element={<GoogleFormPage {...commonProps} />} />
            <Route path="/wifi-qr-code-generator" element={<WiFiPage {...commonProps} />} />
            <Route path="/vcard-qr-code-generator" element={<VCardPage {...commonProps} />} />
            <Route path="/phone-qr-code-generator" element={<PhonePage {...commonProps} />} />
            <Route path="/sms-qr-code-generator" element={<SMSPage {...commonProps} />} />
            <Route path="/email-qr-code-generator" element={<EmailPage {...commonProps} />} />
            <Route path="/text-qr-code-generator" element={<TextPage {...commonProps} />} />
            <Route path="/event-qr-code-generator" element={<EventPage {...commonProps} />} />
            <Route path="/location-qr-code-generator" element={<LocationPage {...commonProps} />} />
            <Route path="/crypto-qr-code-generator" element={<CryptoPage {...commonProps} />} />
            <Route path="/facebook-qr-code-generator" element={<FacebookPage {...commonProps} />} />
            <Route path="/whatsapp-qr-code-generator" element={<WhatsAppPage {...commonProps} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs-qr-code-generator" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;