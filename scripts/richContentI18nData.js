/**
 * Node-side aggregate of the per-locale rich-content modules.
 *
 * scripts/prerender.js and scripts/generateSitemap.js run under plain Node and
 * want every locale at once, so they import this. The React client must NOT —
 * it would pull all five locales into one chunk. The client reads the locale
 * it actually needs via constants/richContentI18n.ts (inline JSON on first
 * paint, per-locale dynamic chunk on SPA navigation).
 *
 * Authoring lives in scripts/richContentI18n/<locale>.js — edit there.
 */

import { RICH_CONTENT as es } from './richContentI18n/es.js';
import { RICH_CONTENT as ar } from './richContentI18n/ar.js';
import { RICH_CONTENT as hi } from './richContentI18n/hi.js';
import { RICH_CONTENT as tr } from './richContentI18n/tr.js';
import { RICH_CONTENT as vi } from './richContentI18n/vi.js';

export const RICH_CONTENT_I18N = { es, ar, hi, tr, vi };
