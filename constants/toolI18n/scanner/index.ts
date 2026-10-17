export type { ScannerCopy, ScannerFaq } from './types';
export { default as SCANNER_EN } from './en';

/** Each translated locale is its own chunk; English ships with the page. */
export const SCANNER_LOADERS = {
  es: () => import('./es'),
  hi: () => import('./hi'),
  ar: () => import('./ar'),
  tr: () => import('./tr'),
  vi: () => import('./vi')
};
