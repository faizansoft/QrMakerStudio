import React from 'react';
import { useContentLocale } from '../context/ContentLocaleContext';
import { useLocalizedRichContent } from '../constants/richContentI18n';
import { getLocalizedRouteMeta } from '../constants/routeMetaI18n';
import RichSeoSections from './RichSeoSections';

/**
 * Full translated page body for routes whose page component is otherwise
 * English-only (about, pricing, blog posts, ...). Hero comes from the localized
 * route meta; every long-form section comes from the localized rich data, the
 * same data scripts/prerender.js writes into the static HTML, so the rendered
 * DOM matches what crawlers receive.
 */
const LocalizedRichPage: React.FC<{ path: string; children?: React.ReactNode }> = ({ path, children }) => {
  const contentLocale = useContentLocale();
  const rich = useLocalizedRichContent(contentLocale, path);
  const meta = contentLocale ? getLocalizedRouteMeta(contentLocale, path) : null;

  if (!rich || !meta) return null;

  return (
    <div className="animate-in pb-24 bg-white">
      <section className="bg-gradient-hero pt-16 pb-20 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
            {meta.badge}
          </div>
          <h1 className="h1-page">{meta.h1}</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{meta.lead}</p>
        </div>
      </section>
      {children}
      <RichSeoSections rich={rich} pathname={path} sections={rich.sections} includeSharedSections />
    </div>
  );
};

export default LocalizedRichPage;
