/**
 * Bridge between the build-time prerender content and the React runtime.
 *
 * `scripts/*.js` are the single source of truth for long-form page copy.
 * `scripts/prerender.js` reads them to emit static HTML; this module reads the
 * exact same objects so the client renders identical content after mount.
 *
 * If these two ever diverge, Googlebot indexes the rendered DOM and the
 * prerendered copy is silently discarded — which is the bug this file exists
 * to prevent. Add new page copy to scripts/, never here.
 */

// @ts-ignore - plain ESM data modules, intentionally untyped at source
import { ROUTE_CONTENT as RAW_ROUTE_CONTENT } from '../scripts/routeContent.js';
// @ts-ignore
import { TOOL_RICH_DATA } from '../scripts/toolRichData.js';
// @ts-ignore
import { FEATURE_RICH_DATA } from '../scripts/featureRichData.js';
// @ts-ignore
import { BLOG_RICH_DATA } from '../scripts/blogRichData.js';
// @ts-ignore
import { COMPANY_RICH_DATA } from '../scripts/companyRichData.js';

export interface ContentSection {
  title: string;
  paragraphs: string[];
}

export interface RouteContent {
  path: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  badge?: string;
  lead?: string;
  sections?: ContentSection[];
}

export interface RichTable {
  title: string;
  description?: string;
  headers: string[];
  rows: string[][];
}

export interface RichStep {
  number: number;
  title: string;
  description: string;
}

export interface RichCard {
  title: string;
  description: string;
}

export interface RichFAQ {
  q: string;
  a: string;
}

export interface RichContent {
  technicalOverview?: ContentSection & { title: string };
  comparisonTable?: RichTable;
  steps?: RichStep[];
  features?: RichCard[];
  sizingMatrix?: RichTable;
  useCases?: RichCard[];
  troubleshooting?: { title: string; points: string[] };
  faqs?: RichFAQ[];
  bestPractices?: string;
}

/** Every rich-content block, keyed by pathname. */
export const ALL_RICH_DATA: Record<string, RichContent> = {
  ...(TOOL_RICH_DATA as Record<string, RichContent>),
  ...(FEATURE_RICH_DATA as Record<string, RichContent>),
  ...(BLOG_RICH_DATA as Record<string, RichContent>),
  ...(COMPANY_RICH_DATA as Record<string, RichContent>)
};

/** Route copy (h1, lead, intro sections), keyed by pathname. */
export const ROUTE_CONTENT: Record<string, RouteContent> = (
  RAW_ROUTE_CONTENT as RouteContent[]
).reduce((acc: Record<string, RouteContent>, route: RouteContent) => {
  acc[route.path] = route;
  return acc;
}, {});

/** Normalise a location.pathname the way the prerenderer keys its output. */
export const normalisePath = (pathname: string): string => {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
};

export const getRouteContent = (pathname: string): RouteContent | null =>
  ROUTE_CONTENT[normalisePath(pathname)] || null;

export const getRichContent = (pathname: string): RichContent | null =>
  ALL_RICH_DATA[normalisePath(pathname)] || null;
