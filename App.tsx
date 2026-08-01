import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { QRConfig } from './types';
import Home from './Home';
import AboutPage from './AboutPage';
import FAQPage from './FAQPage';
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import PricingPage from './PricingPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

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
    const timeout = setTimeout(() => {
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

      const ogTags = [
        { property: 'og:url', content: absoluteUrl },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' }
      ];

      ogTags.forEach(tag => {
        let meta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', tag.property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', tag.content);
      });

      const twitterTags = [
        { name: 'twitter:url', content: absoluteUrl },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' }
      ];

      twitterTags.forEach(tag => {
        let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', tag.name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', tag.content);
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

// Route wrapper for specific QR tool URLs (e.g., /wifi-qr-code-generator)
const ToolRouteHandler: React.FC<{ toolId: string }> = ({ toolId }) => {
  return <Home initialTab={toolId} />;
};

const App: React.FC = () => {
  const basename = useMemo(() => {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    if (parts.length > 0) {
      const firstPart = parts[0];
      const isToolPath = firstPart.includes('qr-code-generator') || 
                         ['about', 'contact', 'privacy', 'terms', 'faqs', 'pricing'].includes(firstPart);
      if (!isToolPath && firstPart.length > 25) {
        return `/${firstPart}`;
      }
    }
    return '';
  }, []);

  return (
    <LanguageProvider>
      <Router basename={basename}>
        <ScrollToTop />
        <SEOManager />
        <div className="min-h-screen bg-white selection:bg-green-100 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs-qr-code-generator" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* QR Code Tool Specific Routes */}
              <Route path="/url-qr-code-generator" element={<ToolRouteHandler toolId="url" />} />
              <Route path="/text-qr-code-generator" element={<ToolRouteHandler toolId="text" />} />
              <Route path="/vcard-qr-code-generator" element={<ToolRouteHandler toolId="vcard" />} />
              <Route path="/wifi-qr-code-generator" element={<ToolRouteHandler toolId="wifi" />} />
              <Route path="/email-qr-code-generator" element={<ToolRouteHandler toolId="email" />} />
              <Route path="/sms-qr-code-generator" element={<ToolRouteHandler toolId="sms" />} />
              <Route path="/phone-qr-code-generator" element={<ToolRouteHandler toolId="phone" />} />
              <Route path="/whatsapp-qr-code-generator" element={<ToolRouteHandler toolId="whatsapp" />} />
              <Route path="/facebook-qr-code-generator" element={<ToolRouteHandler toolId="facebook" />} />
              <Route path="/location-qr-code-generator" element={<ToolRouteHandler toolId="location" />} />
              <Route path="/event-qr-code-generator" element={<ToolRouteHandler toolId="event" />} />
              <Route path="/crypto-qr-code-generator" element={<ToolRouteHandler toolId="crypto" />} />
              <Route path="/googleform-qr-code-generator" element={<ToolRouteHandler toolId="googleform" />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;