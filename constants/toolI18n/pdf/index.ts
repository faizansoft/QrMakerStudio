export type { PdfCopy, PdfFaq } from './types';
export { default as PDF_EN } from './en';

/** Each translated locale is its own chunk; English ships with the page. */
export const PDF_LOADERS = {
  es: () => import('./es'),
  hi: () => import('./hi'),
  ar: () => import('./ar'),
  tr: () => import('./tr'),
  vi: () => import('./vi')
};
