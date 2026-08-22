/**
 * Localized route metadata — TypeScript bridge for the React app.
 *
 * The actual translated content lives in scripts/routeMetaI18nData.js, a
 * plain JS file, because scripts/prerender.js runs directly under Node and
 * cannot import TypeScript. This mirrors how constants/richContent.ts
 * bridges the other scripts/*RichData.js files into the app — the content
 * has exactly one source, read by both the prerenderer and React.
 *
 * Scope, deliberately bounded: only the highest-demand pages (ranked by real
 * Search Console impressions) are localized in phase 1 — title, meta
 * description, H1, hero badge, and hero lead. Deep body content (long-form
 * sections, comparison tables, FAQs) is NOT translated; it continues to
 * render in English beneath the localized hero. That is a separate, much
 * larger phase.
 *
 * Only (language, path) pairs present in the data file get a real
 * prerendered URL, a sitemap entry, and hreflang alternates — see
 * scripts/prerender.js and scripts/generateSitemap.js. A path with no entry
 * for a given language simply has no localized URL for that language: this
 * does not generate thin or duplicate-content pages by stamping a foreign-
 * language URL on English content.
 *
 * Languages were chosen from Search Console country data (2026-08-22 export,
 * ~7 months, average position ~67): Hindi (India, 340 impressions), Arabic
 * (UAE/Jordan/Saudi/Morocco/Algeria/Qatar/Kuwait/Bahrain, 178), Turkish
 * (Turkey, 101), Spanish (Spain/Mexico/LatAm, ~101), Vietnamese (Vietnam, 71).
 */

// @ts-ignore - plain ESM data module, intentionally untyped at source
import { ROUTED_LOCALES as ROUTED_LOCALES_RAW, ROUTE_META_I18N as ROUTE_META_I18N_RAW } from '../scripts/routeMetaI18nData.js';

export type ContentLocale = 'ar' | 'hi' | 'tr' | 'es' | 'vi';

export const ROUTED_LOCALES: ContentLocale[] = ROUTED_LOCALES_RAW as ContentLocale[];

export interface LocalizedRouteMeta {
  title: string;
  description: string;
  h1: string;
  badge: string;
  lead: string;
}

export const ROUTE_META_I18N: Record<ContentLocale, Record<string, LocalizedRouteMeta>> =
  ROUTE_META_I18N_RAW as Record<ContentLocale, Record<string, LocalizedRouteMeta>>;

export function getLocalizedRouteMeta(lang: string, path: string): LocalizedRouteMeta | null {
  return (ROUTE_META_I18N as Record<string, Record<string, LocalizedRouteMeta>>)[lang]?.[path] || null;
}

export function isRoutedLocale(lang: string): lang is ContentLocale {
  return (ROUTED_LOCALES as string[]).includes(lang);
}

/**
 * Strips a leading /<locale>/ segment, returning the unprefixed (English)
 * path: '/es/wifi-qr-code-generator' -> '/wifi-qr-code-generator'.
 *
 * Every content lookup (getRouteContent, getRichContent, getRouteMeta,
 * getSectionHeadings…) is keyed by the plain English path. Once locale-
 * prefixed routes exist, `location.pathname` on those pages carries the
 * prefix — callers MUST strip it before using pathname as a lookup key, or
 * the lookup silently misses and falls back to defaults on every localized
 * page.
 */
export function stripLocalePrefix(pathname: string): string {
  const m = pathname.match(/^\/([a-z]{2})(\/.*|$)/);
  if (m && (ROUTED_LOCALES as string[]).includes(m[1])) {
    return m[2] || '/';
  }
  return pathname;
}
