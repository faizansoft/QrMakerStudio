import React, { createContext, useContext } from 'react';
import type { ContentLocale } from '../constants/routeMetaI18n';

/**
 * The URL-driven content locale — distinct from LanguageContext's `language`.
 *
 * LanguageContext is a client-side UI preference (localStorage, 15 languages,
 * chrome-only: nav/footer/buttons). It cannot drive SEO because it isn't part
 * of the URL — Google indexes one URL per page regardless of what a visitor's
 * browser toggle shows.
 *
 * This context is the opposite: it reflects which `/​<locale>/...` URL prefix
 * the page was actually served at (only 'ar' | 'hi' | 'tr' | 'es' | 'vi' have
 * one — see ROUTED_LOCALES in constants/routeMetaI18n.ts). Page components
 * read it to select translated title/H1/description content via
 * getLocalizedRouteMeta(). Defaulting to null (no provider) means "the
 * unprefixed, English route" — the vast majority of the site today.
 */
const ContentLocaleContext = createContext<ContentLocale | null>(null);

export const ContentLocaleProvider: React.FC<{ locale: ContentLocale; children: React.ReactNode }> = ({
  locale,
  children
}) => <ContentLocaleContext.Provider value={locale}>{children}</ContentLocaleContext.Provider>;

export const useContentLocale = (): ContentLocale | null => useContext(ContentLocaleContext);
