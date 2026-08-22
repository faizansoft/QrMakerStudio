import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { ContentLocaleProvider, useContentLocale } from './context/ContentLocaleContext';
import { ROUTED_LOCALES, getLocalizedRouteMeta, stripLocalePrefix, type ContentLocale } from './constants/routeMetaI18n';
import { injectJSONLD, purgeStalePrerenderedSchema, getOrganizationSchema, getWebSiteSchema } from './services/seoUtils';
import { getRouteMeta } from './constants/routeMeta';

const SEOManager = () => {
  const location = useLocation();
  const contentLocale = useContentLocale();

  useEffect(() => {
    // 0. Prerendered JSON-LD only describes the URL the page was served for.
    //    Once we navigate client-side it is stale, so drop it and take over.
    purgeStalePrerenderedSchema(location.pathname);

    // 1. Base JSON-LD Organization & WebSite Schemas
    injectJSONLD('jsonld-organization', getOrganizationSchema());
    injectJSONLD('jsonld-website', getWebSiteSchema());

    // 2. Fetch Centralized Route Metadata (always for the underlying English
    //    path — canonical/OG/robots policy is defined once per path, not per
    //    locale, and locale titles overlay on top of it below).
    const basePath = stripLocalePrefix(location.pathname);
    const meta = getRouteMeta(basePath);
    const localized = contentLocale ? getLocalizedRouteMeta(contentLocale, basePath) : null;

    // 3. Set Document Title & Meta Description
    //    This is the ONLY place titles are set. Page components used to set
    //    their own, which raced this effect and overwrote the prerendered
    //    values with different text — so the static HTML and the indexed
    //    (rendered) DOM disagreed on title, description and H1.
    document.title = localized?.title || meta.title;

    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', localized?.description || meta.description);

    // 4. Manage Canonical Tag. Each locale gets its OWN canonical (its own
    //    URL), not a self-reference back to the English original — the two
    //    are genuinely different pages (different language), not duplicates.
    const canonicalHref = contentLocale
      ? `https://qr-generator.online/${contentLocale}${basePath === '/' ? '' : basePath}`
      : meta.canonical;
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // 4b. Robots directive — gated/transient routes must stay out of the
    //     index regardless of locale prefix.
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.setAttribute(
      'content',
      meta.noindex
        ? `noindex, ${meta.nofollow ? 'nofollow' : 'follow'}`
        : 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
    );

    // 5. Hreflang alternates. Only emit an alternate for a locale that
    //    actually has translated content for this path — pointing hreflang at
    //    a URL that 404s (or worse, silently falls back to English) is worse
    //    than omitting it. The English original is always the anchor plus
    //    x-default.
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());
    const alternates: Array<[string, string]> = [
      ['en', `https://qr-generator.online${basePath === '/' ? '/' : basePath}`],
      ['x-default', `https://qr-generator.online${basePath === '/' ? '/' : basePath}`]
    ];
    ROUTED_LOCALES.forEach((loc) => {
      if (getLocalizedRouteMeta(loc, basePath)) {
        alternates.push([loc, `https://qr-generator.online/${loc}${basePath === '/' ? '' : basePath}`]);
      }
    });
    alternates.forEach(([hreflang, href]) => {
      const el = document.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('hreflang', hreflang);
      el.setAttribute('href', href);
      document.head.appendChild(el);
    });

    // 6. Manage Social Meta Tags (OG & Twitter)
    const ogTitle = localized?.title || meta.title;
    const ogDesc = localized?.description || meta.description;
    const ogTags = [
      { property: 'og:url', content: canonicalHref },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDesc },
      { property: 'og:type', content: meta.type || 'website' },
      { property: 'og:locale', content: contentLocale || 'en_US' }
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
      { name: 'twitter:url', content: canonicalHref },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: ogDesc },
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
  }, [location, contentLocale]);

  return null;
};

/**
 * Keeps LanguageContext (UI chrome + <html lang>/dir) in sync with the URL's
 * locale prefix. One-directional, URL -> context: landing on /es/... sets the
 * chrome language to Spanish; leaving the prefix (browsing the unprefixed
 * site) does not force it back, since that's an ordinary user preference.
 */
const LocaleUrlSync: React.FC<{ locale: ContentLocale }> = ({ locale }) => {
  const { language, setLanguage } = useLanguage();
  useEffect(() => {
    if (language !== locale) setLanguage(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);
  return null;
};

// Route wrapper for specific QR tool URLs (e.g., /wifi-qr-code-generator)
const ToolRouteHandler: React.FC<{ toolId: string }> = ({ toolId }) => {
  return <Home initialTab={toolId} />;
};

/**
 * The full route table, shared verbatim by the unprefixed (English) mount and
 * every /​<locale>/* mount below. Paths are relative (no leading "/") so this
 * works correctly nested under a parent <Route path="xx/*"> as well as at the
 * top level — the "multiple route trees" pattern documented for React Router.
 */
const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="pricing" element={<PricingPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="faqs-qr-code-generator" element={<FAQPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="terms" element={<TermsPage />} />
    <Route path="blog" element={<BlogPage />} />
    <Route path="blog/:slug" element={<BlogPostPage />} />

    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="dashboard" element={<DashboardPage />} />
    <Route path="analytics/:linkId" element={<AnalyticsPage />} />
    <Route path="analytics/:linkId/*" element={<AnalyticsPage />} />
    <Route path="r/:shortCode" element={<RedirectHandler />} />
    <Route path="r/:shortCode/*" element={<RedirectHandler />} />

    {/* Feature Dedicated Routes */}
    <Route path="qr-code-with-logo" element={<FeaturePage featureId="qr-code-with-logo" />} />
    <Route path="custom-qr-codes" element={<FeaturePage featureId="custom-qr-codes" />} />
    <Route path="colored-qr-code-generator" element={<FeaturePage featureId="colored-qr-code-generator" />} />
    <Route path="svg-qr-code-generator" element={<FeaturePage featureId="svg-qr-code-generator" />} />
    <Route path="high-resolution-qr-codes" element={<FeaturePage featureId="high-resolution-qr-codes" />} />

    {/* QR Code Tool Specific Routes */}
    <Route path="url-qr-code-generator" element={<ToolRouteHandler toolId="url" />} />
    <Route path="text-qr-code-generator" element={<ToolRouteHandler toolId="text" />} />
    <Route path="vcard-qr-code-generator" element={<ToolRouteHandler toolId="vcard" />} />
    <Route path="wifi-qr-code-generator" element={<ToolRouteHandler toolId="wifi" />} />
    <Route path="email-qr-code-generator" element={<ToolRouteHandler toolId="email" />} />
    <Route path="sms-qr-code-generator" element={<ToolRouteHandler toolId="sms" />} />
    <Route path="phone-qr-code-generator" element={<ToolRouteHandler toolId="phone" />} />
    <Route path="whatsapp-qr-code-generator" element={<ToolRouteHandler toolId="whatsapp" />} />
    <Route path="facebook-qr-code-generator" element={<ToolRouteHandler toolId="facebook" />} />
    <Route path="location-qr-code-generator" element={<ToolRouteHandler toolId="location" />} />
    <Route path="event-qr-code-generator" element={<ToolRouteHandler toolId="event" />} />
    <Route path="crypto-qr-code-generator" element={<ToolRouteHandler toolId="crypto" />} />
    <Route path="googleform-qr-code-generator" element={<ToolRouteHandler toolId="googleform" />} />
    <Route path="instagram-qr-code-generator" element={<ToolRouteHandler toolId="instagram" />} />
    <Route path="youtube-qr-code-generator" element={<ToolRouteHandler toolId="youtube" />} />
    <Route path="linkedin-qr-code-generator" element={<ToolRouteHandler toolId="linkedin" />} />
    <Route path="twitter-qr-code-generator" element={<ToolRouteHandler toolId="twitter" />} />
    <Route path="tiktok-qr-code-generator" element={<ToolRouteHandler toolId="tiktok" />} />
    <Route path="telegram-qr-code-generator" element={<ToolRouteHandler toolId="telegram" />} />
    <Route path="paypal-qr-code-generator" element={<ToolRouteHandler toolId="paypal" />} />
    <Route path="upi-qr-code-generator" element={<ToolRouteHandler toolId="upi" />} />
    <Route path="pdf-qr-code-generator" element={<ToolRouteHandler toolId="pdf" />} />

    {/* Utility Pages */}
    <Route path="app-store-qr-code-generator" element={<AppStoreQRPage />} />
    <Route path="bulk-qr-code-generator" element={<BulkGeneratorPage />} />
    <Route path="qr-code-scanner" element={<QRScannerPage />} />
    <Route path="social-media-qr-code" element={<SocialMediaQRPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Unprefixed = English, the default site. */}
            <Route
              path="/*"
              element={
                <>
                  <SEOManager />
                  <div className="min-h-screen bg-white selection:bg-green-100 flex flex-col">
                    <Header />
                    <main className="flex-grow"><AppRoutes /></main>
                    <Footer />
                  </div>
                </>
              }
            />
            {/* One mount per routed locale. Same route table, same page
                components — only the content-locale context differs, which
                page components read to prefer translated title/H1/description
                over the English default. See constants/routeMetaI18n.ts for
                which (locale, path) pairs actually have a translation; pairs
                without one simply render with English content under the
                localized URL rather than 404 or block navigation. */}
            {ROUTED_LOCALES.map((loc) => (
              <Route
                key={loc}
                path={`${loc}/*`}
                element={
                  <ContentLocaleProvider locale={loc}>
                    <LocaleUrlSync locale={loc} />
                    <SEOManager />
                    <div
                      className="min-h-screen bg-white selection:bg-green-100 flex flex-col"
                      dir={loc === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <Header />
                      <main className="flex-grow"><AppRoutes /></main>
                      <Footer />
                    </div>
                  </ContentLocaleProvider>
                }
              />
            ))}
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
