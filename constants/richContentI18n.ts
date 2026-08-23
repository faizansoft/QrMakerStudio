/**
 * TypeScript bridge for scripts/richContentI18nData.js — mirrors how
 * constants/routeMetaI18n.ts bridges routeMetaI18nData.js. The prerenderer
 * (plain Node, no TS support) reads the .js file directly; React reads it
 * through this typed re-export. One source of truth either way.
 */

// @ts-ignore - plain ESM data module, intentionally untyped at source
import { RICH_CONTENT_I18N } from '../scripts/richContentI18nData.js';
import type { RichContent } from './richContent';
import type { ContentLocale } from './routeMetaI18n';

const DATA: Record<string, Record<string, RichContent>> = RICH_CONTENT_I18N;

/** Localized rich content for (locale, path), or null if untranslated — caller falls back to English. */
export function getLocalizedRichContent(locale: ContentLocale | null, path: string): RichContent | null {
  if (!locale) return null;
  return DATA[locale]?.[path] || null;
}
