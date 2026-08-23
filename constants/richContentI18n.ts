/**
 * Client-side access to localized deep body content.
 *
 * Two sources, deliberately:
 *
 * 1. **Inline JSON** (`<script id="rich-i18n-data">`), written into each
 *    localized page by scripts/prerender.js. Read synchronously at module
 *    load, so the very first React render on a localized URL already has the
 *    translated body — no English flash, and the rendered DOM Google indexes
 *    matches the prerendered HTML byte for byte. Costs no extra request: it
 *    ships inside the HTML the visitor is already downloading, and only ever
 *    carries the one page they asked for.
 *
 * 2. **Per-locale dynamic chunk**, loaded on demand for client-side
 *    navigation to a *different* page within the same locale (the inline JSON
 *    only covers the landing page). Crawlers never take this path — they fetch
 *    each URL fresh and get its own prerendered HTML — so a brief English
 *    fallback while the chunk resolves is a UX detail, not an SEO one.
 *
 * Importing all five locales statically instead would have put every language
 * in the initial graph for every visitor: ~2 MB of `seo-content` where an
 * English reader needs 357 KB and a Spanish reader needs 357 KB + Spanish.
 */

import { useSyncExternalStore } from 'react';
import type { RichContent } from './richContent';
import type { ContentLocale } from './routeMetaI18n';

type LocaleBundle = Record<string, RichContent>;

/** Loaders are per-locale so Vite emits one chunk per language. */
const LOADERS: Record<ContentLocale, () => Promise<{ RICH_CONTENT: LocaleBundle }>> = {
  // @ts-ignore - plain ESM data modules, intentionally untyped at source
  es: () => import('../scripts/richContentI18n/es.js'),
  // @ts-ignore
  ar: () => import('../scripts/richContentI18n/ar.js'),
  // @ts-ignore
  hi: () => import('../scripts/richContentI18n/hi.js'),
  // @ts-ignore
  tr: () => import('../scripts/richContentI18n/tr.js'),
  // @ts-ignore
  vi: () => import('../scripts/richContentI18n/vi.js')
};

/** Whatever we know right now, keyed `locale:path`. Seeded from inline JSON. */
const cache = new Map<string, RichContent>();
const loading = new Set<ContentLocale>();

/** Bumped whenever a dynamic chunk lands, so subscribed components re-render. */
let version = 0;
const listeners = new Set<() => void>();

function seedFromInlineJson() {
  if (typeof document === 'undefined') return;
  const el = document.getElementById('rich-i18n-data');
  if (!el?.textContent) return;
  try {
    const { locale, path, content } = JSON.parse(el.textContent) as {
      locale: ContentLocale;
      path: string;
      content: RichContent;
    };
    if (locale && path && content) cache.set(`${locale}:${path}`, content);
  } catch {
    // Malformed inline payload must never break the page; the dynamic chunk
    // and the English fallback both still work.
  }
}
seedFromInlineJson();

function ensureLocaleLoaded(locale: ContentLocale) {
  if (loading.has(locale)) return;
  loading.add(locale);
  LOADERS[locale]()
    .then((m) => {
      for (const [path, content] of Object.entries(m.RICH_CONTENT || {})) {
        const key = `${locale}:${path}`;
        if (!cache.has(key)) cache.set(key, content);
      }
      version++;
      listeners.forEach((fn) => fn());
    })
    .catch(() => {
      // Offline or chunk fetch failed — English content stays on screen.
      loading.delete(locale);
    });
}

/**
 * Localized rich content for (locale, path), or null if not (yet) available —
 * callers fall back to the English object whole.
 */
export function getLocalizedRichContent(locale: ContentLocale | null, path: string): RichContent | null {
  if (!locale) return null;
  const hit = cache.get(`${locale}:${path}`);
  if (hit) return hit;
  ensureLocaleLoaded(locale);
  return null;
}

function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/**
 * React binding. Returns the localized content for (locale, path), re-rendering
 * once the locale's chunk lands on a client-side navigation. On a prerendered
 * landing page the inline JSON means this is already populated on first render.
 */
export function useLocalizedRichContent(
  locale: ContentLocale | null,
  path: string
): RichContent | null {
  // Version counter is the store; the actual read happens below so the value
  // stays referentially stable between chunk loads (Map.get returns the same
  // object), which keeps this safe for useSyncExternalStore.
  useSyncExternalStore(
    subscribe,
    () => version,
    () => version
  );
  return getLocalizedRichContent(locale, path);
}
