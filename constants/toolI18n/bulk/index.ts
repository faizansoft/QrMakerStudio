export type { BulkCopy, BulkFaq, BulletPoint } from './types';
export { default as BULK_EN } from './en';

/** Each translated locale is its own chunk; English ships with the page. */
export const BULK_LOADERS = {
  es: () => import('./es'),
  hi: () => import('./hi'),
  ar: () => import('./ar'),
  tr: () => import('./tr'),
  vi: () => import('./vi')
};
