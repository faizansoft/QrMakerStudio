import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useContentLocale } from '../context/ContentLocaleContext';
import { getLocalizedRouteMeta } from '../constants/routeMetaI18n';

/**
 * Drop-in replacement for react-router-dom's Link. AppRoutes (see App.tsx)
 * is mounted once unprefixed (English) and once per routed locale
 * (/es/*, /ar/*, /hi/*, /tr/*, /vi/*) as separate sibling route trees. A
 * plain absolute `to="/foo"` always resolves against the unprefixed tree —
 * so an ordinary <Link> silently drops the visitor back to English on every
 * single click, which is why translated pages "stop translating" the moment
 * someone navigates. This prefixes `to` with the active locale (read from
 * ContentLocaleContext, itself derived from the current URL) so internal
 * navigation stays inside the current locale until the visitor explicitly
 * switches languages via the header switcher.
 */
const LocaleLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const locale = useContentLocale();
  let href = to;
  const path = typeof to === 'string' ? to.split(/[?#]/)[0] : '';
  // Only prefix when the localized page actually exists; otherwise the link
  // would 308 through the locale redirect (pages not yet translated).
  const localized = path === '/' || !!(locale && getLocalizedRouteMeta(locale, path));
  if (locale && localized && typeof to === 'string' && to.startsWith('/') && !to.startsWith(`/${locale}/`) && to !== `/${locale}`) {
    href = to === '/' ? `/${locale}` : `/${locale}${to}`;
  }
  return <Link ref={ref} to={href} {...rest} />;
});
LocaleLink.displayName = 'LocaleLink';

export default LocaleLink;
