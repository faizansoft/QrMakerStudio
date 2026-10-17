import { useEffect, useState } from 'react';
import type { ContentLocale } from '../routeMetaI18n';

/**
 * Picks the tool-page copy for the URL locale. English is bundled with the
 * page and returned synchronously. A translated locale is loaded as its own
 * chunk, so visitors only download the language they read; until it resolves
 * the English copy is shown.
 */
export function useLocalizedCopy<T>(
  locale: ContentLocale | null,
  en: T,
  loaders: Partial<Record<ContentLocale, () => Promise<{ default: T }>>>
): T {
  const [loaded, setLoaded] = useState<{ locale: ContentLocale; copy: T } | null>(null);

  useEffect(() => {
    const load = locale ? loaders[locale] : undefined;
    if (!locale || !load) return;
    let live = true;
    load().then((m) => {
      if (live) setLoaded({ locale, copy: m.default });
    });
    return () => {
      live = false;
    };
  }, [locale]);

  return locale && loaded?.locale === locale ? loaded.copy : en;
}
