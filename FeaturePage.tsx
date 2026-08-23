import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Link from './components/LocaleLink';
import { FEATURE_SEO_DATA } from './constants/featureSeoData';
import { TOOL_SEO_DATA } from './constants/toolSeoData';
import Home from './Home';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getToolSoftwareSchema, getFAQSchema, getBreadcrumbSchema } from './services/seoUtils';
import { getRichContent, getRouteContent, getSectionHeadings } from './constants/richContent';
import RichSeoSections from './components/RichSeoSections';
import { getRouteMeta } from './constants/routeMeta';
import { stripLocalePrefix, getLocalizedRouteMeta } from './constants/routeMetaI18n';
import { useContentLocale } from './context/ContentLocaleContext';

interface FeaturePageProps {
  featureId: string;
}

const FeaturePage: React.FC<FeaturePageProps> = ({ featureId }) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const featureSeo = useMemo(() => {
    return FEATURE_SEO_DATA[featureId] || FEATURE_SEO_DATA['qr-code-with-logo'];
  }, [featureId]);

  // Long-form copy shared with scripts/prerender.js — see constants/richContent.ts.
  // location.pathname carries a /<locale>/ prefix on localized routes — every
  // content lookup below is keyed by the plain English path.
  const pathname = stripLocalePrefix(location.pathname);
  const contentLocale = useContentLocale();
  const richContent = useMemo(() => getRichContent(pathname), [pathname]);
  const routeContent = useMemo(() => getRouteContent(pathname), [pathname]);
  const routeMeta = useMemo(() => getRouteMeta(pathname), [pathname]);
  const localizedMeta = useMemo(
    () => (contentLocale ? getLocalizedRouteMeta(contentLocale, pathname) : null),
    [contentLocale, pathname]
  );

  // Visible FAQ must match the FAQPage schema in the prerendered HTML.
  const faqItems = useMemo(() => {
    if (richContent?.faqs?.length) {
      return richContent.faqs.map(f => ({ question: f.q, answer: f.a }));
    }
    return featureSeo.faqs;
  }, [richContent, featureSeo]);

  // Prefer the prerendered (longer) copy so the static HTML and the rendered
  // DOM describe this page with the same words. See Home.tsx for the rationale.
  const sectionHeadings = useMemo(() => getSectionHeadings(pathname), [pathname]);

  const stepsTitle = richContent?.steps?.length ? sectionHeadings.steps : featureSeo.stepsTitle;
  const stepItems = richContent?.steps?.length ? richContent.steps : featureSeo.steps;

  const featuresTitle = richContent?.features?.length ? sectionHeadings.features : featureSeo.featuresTitle;
  const featureItems = richContent?.features?.length ? richContent.features : featureSeo.features;

  const useCasesTitle = richContent?.useCases?.length ? sectionHeadings.useCases : featureSeo.useCasesTitle;
  const useCaseItems = richContent?.useCases?.length ? richContent.useCases : featureSeo.useCases;

  const introSections = routeContent?.sections?.length
    ? routeContent.sections
    : [{ title: featureSeo.introTitle, paragraphs: featureSeo.introParagraphs }];

  useEffect(() => {
    // Title/description/canonical are owned by SEOManager in App.tsx.
    // injectJSONLD no-ops for any @type already present from the prerender.
    injectJSONLD('jsonld-feature', getToolSoftwareSchema(featureSeo.title, featureSeo.slug, featureSeo.metaDescription));
    injectJSONLD('jsonld-faq', getFAQSchema(faqItems));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: featureSeo.title, url: featureSeo.slug }
    ]));

    return () => {
      removeJSONLD('jsonld-feature');
      removeJSONLD('jsonld-faq');
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [featureSeo, faqItems, language]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* ═══════════════════════════ HERO SECTION ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-10 pb-12 md:pt-16 md:pb-20 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            {localizedMeta?.badge || routeContent?.badge || featureSeo.badge}
          </div>
          <h1 className="h1-page mb-4">
            {localizedMeta?.h1 || routeMeta.h1}
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {localizedMeta?.lead || routeContent?.lead || featureSeo.subheadline}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ LIVE GENERATOR WIDGET ═══════════════════════════ */}
      <div id="live-generator">
        <Home initialTab="url" embedded />
      </div>

      {/* ═══════════════════════════ EXPLANATORY GUIDE ARTICLE ═══════════════════════════ */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Feature Deep Dive
          </div>
          {introSections.map((section, si) => (
            <div key={si} className={si > 0 ? 'mt-12' : undefined}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-base md:text-lg text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════ HOW TO STEPS ═══════════════════════════ */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{stepsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stepItems.map((step) => (
              <div key={step.number} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mb-6 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ KEY FEATURES & BENEFITS ═══════════════════════════ */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{featuresTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureItems.map((feat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-accent/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-accent">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ USE CASES ═══════════════════════════ */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{useCasesTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCaseItems.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LONG-FORM SEO SECTIONS (shared with scripts/prerender.js) ═══════ */}
      <RichSeoSections rich={richContent} pathname={pathname} />

      {/* ═══════════════════════════ FEATURE FAQ ACCORDION ═══════════════════════════ */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              Help & Knowledge Base
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Frequently Asked Questions about {featureSeo.title}
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base">
              Everything you need to know about setting up and printing {featureSeo.title}s.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  openFaqIndex === idx ? 'border-accent bg-accent/5' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none"
                >
                  <h3 className={`text-lg font-bold transition-colors ${openFaqIndex === idx ? 'text-accent' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${openFaqIndex === idx ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {/* Answers stay mounted and are toggled with CSS — see Home.tsx. */}
                <div
                  className={`px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-100/50 pt-3 ${openFaqIndex === idx ? '' : 'hidden'}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ EXPLORE OTHER FEATURES & QR TYPES ═══════════════════════════ */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Explore All Features & Generator Tools</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Select any feature or QR code type below to customize and generate your codes instantly.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.values(FEATURE_SEO_DATA).map((item) => (
              <Link
                key={item.id}
                to={item.slug}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`p-5 rounded-2xl border bg-white transition-all text-left ${
                  featureId === item.id ? 'border-accent ring-2 ring-accent/20 bg-accent/5' : 'border-slate-200 hover:border-accent hover:shadow-md'
                }`}
              >
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{item.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePage;
