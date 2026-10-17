export type { SocialCopy, SocialFaq } from './types';
export { default as SOCIAL_EN } from './en';

/** Each translated locale is its own chunk; English ships with the page. */
export const SOCIAL_LOADERS = {
  es: () => import('./es'),
  hi: () => import('./hi'),
  ar: () => import('./ar'),
  tr: () => import('./tr'),
  vi: () => import('./vi')
};
