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

const App: React.FC = () => {
  // Shared styling state remains in root to persist brand identity across different tool pages
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
      <div className="min-h-screen bg-slate-50 selection:bg-indigo-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/url-qr-generator" element={<URLPage {...commonProps} />} />
          <Route path="/wifi-qr-generator" element={<WiFiPage {...commonProps} />} />
          <Route path="/vcard-qr-generator" element={<VCardPage {...commonProps} />} />
          <Route path="/phone-qr-generator" element={<PhonePage {...commonProps} />} />
          <Route path="/sms-qr-generator" element={<SMSPage {...commonProps} />} />
          <Route path="/email-qr-generator" element={<EmailPage {...commonProps} />} />
          <Route path="/text-qr-generator" element={<TextPage {...commonProps} />} />
          {/* Catch-all fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;