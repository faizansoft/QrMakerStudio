import React, { useState } from 'react';
import { QRConfig, QRType } from './types';
import Home from './Home';
import URLPage from './URLPage';
import WiFiPage from './WiFiPage';
import VCardPage from './VCardPage';
import PhonePage from './PhonePage';
import SMSPage from './SMSPage';
import EmailPage from './EmailPage';
import TextPage from './TextPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<QRType | 'home'>('home');

  // Styling state is shared so users keep their brand colors while switching types
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

  const navigate = (page: QRType | 'home') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const commonProps = { styling, setStyling, logoSrc, setLogoSrc, onBack: () => navigate('home') };

    switch (currentPage) {
      case 'home': return <Home onSelect={navigate} />;
      case 'url': return <URLPage {...commonProps} />;
      case 'wifi': return <WiFiPage {...commonProps} />;
      case 'vcard': return <VCardPage {...commonProps} />;
      case 'phone': return <PhonePage {...commonProps} />;
      case 'sms': return <SMSPage {...commonProps} />;
      case 'email': return <EmailPage {...commonProps} />;
      case 'text': return <TextPage {...commonProps} />;
      default: return <Home onSelect={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100">
      {renderPage()}
    </div>
  );
};

export default App;