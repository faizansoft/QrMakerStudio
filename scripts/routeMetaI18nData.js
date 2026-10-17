/**
 * Localized route metadata that is actually served.
 *
 * The raw translations live in scripts/routeMetaI18nAll.js. Only the
 * (locale, path) pairs whose BODY is also translated are exported here,
 * per scripts/localeBodyCoverage.js. A hero-only translation over English
 * body copy is a duplicate-content risk, so it gets no URL, sitemap entry,
 * hreflang, or language-switch link. Regenerate coverage with
 * scripts/syncLocaleCoverage.js (run by `npm run build`).
 */

import { ROUTED_LOCALES, ROUTE_META_I18N_ALL } from './routeMetaI18nAll.js';
import { LOCALE_BODY_PATHS } from './localeBodyCoverage.js';

export { ROUTED_LOCALES };

export const ROUTE_META_I18N = Object.fromEntries(
  ROUTED_LOCALES.map((locale) => {
    const covered = new Set(LOCALE_BODY_PATHS[locale] || []);
    const all = ROUTE_META_I18N_ALL[locale] || {};
    return [
      locale,
      Object.fromEntries(Object.entries(all).filter(([p]) => covered.has(p)))
    ];
  })
);
