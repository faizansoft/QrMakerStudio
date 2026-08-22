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
import FeaturePage from './FeaturePage';
import BlogPage from './BlogPage';
import BlogPostPage from './BlogPostPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NotFoundPage from './NotFoundPage';
import BulkGeneratorPage from './BulkGeneratorPage';
import QRScannerPage from './QRScannerPage';
import SocialMediaQRPage from './SocialMediaQRPage';
import PDFToQRPage from './PDFToQRPage';
import AppStoreQRPage from './AppStoreQRPage';
import DashboardPage from './DashboardPage';
import AnalyticsPage from './AnalyticsPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import RedirectHandler from './RedirectHandler';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { injectJSONLD, purgeStalePrerenderedSchema, getOrganizationSchema, getWebSiteSchema } from './services/seoUtils';
import { getRouteMeta } from './constants/routeMeta';

const SEOManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 0. Prerendered JSON-LD only describes the URL the page was served for.
    //    Once we navigate client-side it is stale, so drop it and take over.
    purgeStalePrerenderedSchema(location.pathname);

    // 1. Base JSON-LD Organization & WebSite Schemas
    injectJSONLD('jsonld-organization', getOrganizationSchema());
    injectJSONLD('jsonld-website', getWebSiteSchema());

    // 2. Fetch Centralized Route Metadata
    const meta = getRouteMeta(location.pathname);

    // 3. Set Document Title & Meta Description
    //    This is the ONLY place titles are set. Page components used to set
    //    their own, which raced this effect and overwrote the prerendered
    //    values with different text — so the static HTML and the indexed
    //    (rendered) DOM disagreed on title, description and H1.
    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);

    // 4. Manage Canonical Tag (Self-referencing, no trailing slash except root)
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", meta.canonical);

    // 4b. Robots directive — gated/transient routes must stay out of the index.
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.setAttribute(
      'content',
      meta.noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
    );

    // 5. Manage Hreflang Tags (Self-referencing to own canonical)
    ['en', 'x-default'].forEach(lang => {
      let hreflangEl = document.querySelector(`link[rel='alternate'][hreflang='${lang}']`) as HTMLLinkElement;
      if (!hreflangEl) {
        hreflangEl = document.createElement('link');
        hreflangEl.setAttribute('rel', 'alternate');
        hreflangEl.setAttribute('hreflang', lang);
        document.head.appendChild(hreflangEl);
      }
      hreflangEl.setAttribute('href', meta.canonical);
    });

    // 6. Manage Social Meta Tags (OG & Twitter)
    const ogTags = [
      { property: 'og:url', content: meta.canonical },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:type', content: meta.type || 'website' }
    ];

    ogTags.forEach(tag => {
      let ogEl = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!ogEl) {
        ogEl = document.createElement('meta');
        ogEl.setAttribute('property', tag.property);
        document.head.appendChild(ogEl);
      }
      ogEl.setAttribute('content', tag.content);
    });

    const twitterTags = [
      { name: 'twitter:url', content: meta.canonical },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:card', content: 'summary_large_image' }
    ];

    twitterTags.forEach(tag => {
      let twEl = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!twEl) {
        twEl = document.createElement('meta');
        twEl.setAttribute('name', tag.name);
        document.head.appendChild(twEl);
      }
      twEl.setAttribute('content', tag.content);
    });
  }, [location]);

  return null;
};

// Route wrapper for specific QR tool URLs (e.g., /wifi-qr-code-generator)
const ToolRouteHandler: React.FC<{ toolId: string }> = ({ toolId }) => {
  return <Home initialTab={toolId} />;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
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
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/analytics/:linkId" element={<AnalyticsPage />} />
                <Route path="/analytics/:linkId/*" element={<AnalyticsPage />} />
                <Route path="/r/:shortCode" element={<RedirectHandler />} />
                <Route path="/r/:shortCode/*" element={<RedirectHandler />} />

                {/* Feature Dedicated Routes */}
                <Route path="/qr-code-with-logo" element={<FeaturePage featureId="qr-code-with-logo" />} />
                <Route path="/custom-qr-codes" element={<FeaturePage featureId="custom-qr-codes" />} />
                <Route path="/colored-qr-code-generator" element={<FeaturePage featureId="colored-qr-code-generator" />} />
                <Route path="/svg-qr-code-generator" element={<FeaturePage featureId="svg-qr-code-generator" />} />
                <Route path="/high-resolution-qr-codes" element={<FeaturePage featureId="high-resolution-qr-codes" />} />

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
                <Route path="/instagram-qr-code-generator" element={<ToolRouteHandler toolId="instagram" />} />
                <Route path="/youtube-qr-code-generator" element={<ToolRouteHandler toolId="youtube" />} />
                <Route path="/linkedin-qr-code-generator" element={<ToolRouteHandler toolId="linkedin" />} />
                <Route path="/twitter-qr-code-generator" element={<ToolRouteHandler toolId="twitter" />} />
                <Route path="/tiktok-qr-code-generator" element={<ToolRouteHandler toolId="tiktok" />} />
                <Route path="/telegram-qr-code-generator" element={<ToolRouteHandler toolId="telegram" />} />
                <Route path="/paypal-qr-code-generator" element={<ToolRouteHandler toolId="paypal" />} />
                <Route path="/upi-qr-code-generator" element={<ToolRouteHandler toolId="upi" />} />
                <Route path="/pdf-qr-code-generator" element={<ToolRouteHandler toolId="pdf" />} />

                {/* Utility Pages */}
                <Route path="/app-store-qr-code-generator" element={<AppStoreQRPage />} />
                <Route path="/bulk-qr-code-generator" element={<BulkGeneratorPage />} />
                <Route path="/qr-code-scanner" element={<QRScannerPage />} />
                <Route path="/social-media-qr-code" element={<SocialMediaQRPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;