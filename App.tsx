import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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

  // Detect basename for environments that host the app in a sub-folder (like preview URLs)
  const basename = useMemo(() => {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    
    // Heuristic: If the first part is very long (UUID/Hash) and NOT one of our tool routes
    if (parts.length > 0) {
      const firstPart = parts[0];
      const isToolPath = firstPart.includes('qr-code-generator') || 
                         ['about', 'contact', 'privacy', 'terms'].includes(firstPart);
      
      // Typical preview IDs are 30+ chars or specific hex patterns
      if (!isToolPath && firstPart.length > 25) {
        return `/${firstPart}`;
      }
    }
    return '';
  }, []);

  return (
    <Router basename={basename}>
      <ScrollToTop />
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* If no route matches, redirect to home to clean up the URL */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;