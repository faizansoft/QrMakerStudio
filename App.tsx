import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/url-qr-generator" element={<URLPage {...commonProps} />} />
            <Route path="/wifi-qr-generator" element={<WiFiPage {...commonProps} />} />
            <Route path="/vcard-qr-generator" element={<VCardPage {...commonProps} />} />
            <Route path="/phone-qr-generator" element={<PhonePage {...commonProps} />} />
            <Route path="/sms-qr-generator" element={<SMSPage {...commonProps} />} />
            <Route path="/email-qr-generator" element={<EmailPage {...commonProps} />} />
            <Route path="/text-qr-generator" element={<TextPage {...commonProps} />} />
            <Route path="/event-qr-generator" element={<EventPage {...commonProps} />} />
            <Route path="/location-qr-generator" element={<LocationPage {...commonProps} />} />
            <Route path="/crypto-qr-generator" element={<CryptoPage {...commonProps} />} />
            <Route path="/facebook-qr-generator" element={<FacebookPage {...commonProps} />} />
            <Route path="/whatsapp-qr-generator" element={<WhatsAppPage {...commonProps} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;