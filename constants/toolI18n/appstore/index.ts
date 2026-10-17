export type { AppStoreCopy, AppStoreFaq } from './types';
export { default as APPSTORE_EN } from './en';

/** Each translated locale is its own chunk; English ships with the page. */
export const APPSTORE_LOADERS = {
  es: () => import('./es'),
  hi: () => import('./hi'),
  ar: () => import('./ar'),
  tr: () => import('./tr'),
  vi: () => import('./vi')
};
