/**
 * Sitemap generator.
 *
 * Built from scripts/routeContent.js — the same route list the prerenderer
 * uses — so the sitemap can no longer drift from the pages that actually ship.
 *
 * lastmod is content-derived, not "today". Each route's copy is hashed and the
 * hash is kept in scripts/sitemap-lastmod.json; the date only moves when the
 * hash moves. A sitemap that stamps every URL with the build date tells Google
 * nothing, and Google discounts the field accordingly.
 *
 * Routes flagged `noindex` are excluded. <changefreq> and <priority> are
 * omitted deliberately — Google ignores both.
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { ROUTE_CONTENT } from './routeContent.js';
import { TOOL_RICH_DATA } from './toolRichData.js';
import { FEATURE_RICH_DATA } from './featureRichData.js';
import { BLOG_RICH_DATA } from './blogRichData.js';
import { COMPANY_RICH_DATA } from './companyRichData.js';

const ALL_RICH_DATA = {
  ...TOOL_RICH_DATA,
  ...FEATURE_RICH_DATA,
  ...BLOG_RICH_DATA,
  ...COMPANY_RICH_DATA
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const stateFile = path.join(__dirname, 'sitemap-lastmod.json');

const ORIGIN = 'https://qr-generator.online';

const today = () => new Date().toISOString().slice(0, 10);

const hashRoute = (route) => {
  const payload = JSON.stringify({
    title: route.title,
    description: route.description,
    h1: route.h1,
    lead: route.lead,
    sections: route.sections || [],
    rich: ALL_RICH_DATA[route.path] || null
  });
  return crypto.createHash('sha1').update(payload).digest('hex').slice(0, 16);
};

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function generateSitemap() {
  const previous = fs.existsSync(stateFile)
    ? JSON.parse(fs.readFileSync(stateFile, 'utf8'))
    : {};

  const seen = new Set();
  const routes = ROUTE_CONTENT.filter((route) => {
    if (route.noindex) return false;
    if (seen.has(route.path)) return false; // defensive: never emit a URL twice
    seen.add(route.path);
    return true;
  });

  const state = {};
  let changed = 0;

  const entries = routes.map((route) => {
    const hash = hashRoute(route);
    const prior = previous[route.path];
    const lastmod = prior && prior.hash === hash ? prior.lastmod : today();
    if (!prior || prior.hash !== hash) changed++;
    state[route.path] = { hash, lastmod };
    const loc = route.path === '/' ? `${ORIGIN}/` : `${ORIGIN}${route.path}`;
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.join('\n') +
    '\n</urlset>\n';

  // public/ is the committed source; dist/ is what this build serves. vite has
  // already copied public/ by the time this runs, so write both.
  const targets = [path.join(rootDir, 'public', 'sitemap.xml')];
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) targets.push(path.join(distDir, 'sitemap.xml'));

  targets.forEach((t) => fs.writeFileSync(t, xml, 'utf8'));
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2) + '\n', 'utf8');

  const excluded = ROUTE_CONTENT.filter((r) => r.noindex).map((r) => r.path);
  console.log(
    `🗺️  Sitemap: ${entries.length} URLs (${changed} with a new lastmod). ` +
      `Excluded noindex: ${excluded.join(', ')}`
  );
}

generateSitemap();
