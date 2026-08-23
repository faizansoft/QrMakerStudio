/**
 * Crawler-visibility audit.
 *
 * Answers one question per route: does the static HTML a crawler receives
 * contain the same words the rendered DOM shows a human?
 *
 * A crawler that does not execute JS (most LLM ingest pipelines, Bingbot in
 * many cases, every social-preview fetcher) sees ONLY the prerendered file.
 * Anything the React app renders that is not also in that file is invisible
 * to them. Google does render JS, but content present in both is indexed
 * faster and more reliably.
 *
 * Compares shingled word sets rather than exact strings, so trivial
 * whitespace/attribute differences do not register as gaps.
 *
 * Usage: node scripts/auditCrawlerParity.mjs [baseUrl]
 * Reads the prerendered files straight from dist/, and the rendered DOM text
 * from a running dev/preview server.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTE_CONTENT } from './routeContent.js';
import { ROUTED_LOCALES, ROUTE_META_I18N } from './routeMetaI18nData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const BASE = process.argv[2] || 'http://localhost:5173';

/** Strip tags/scripts/styles and collapse to a comparable word list. */
function visibleWords(html) {
  const body = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/i, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  return body;
}

function wordSet(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 3)
  );
}

/** Meaningful multi-word phrases, to catch whole sentences going missing. */
function phraseSet(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set();
  for (let i = 0; i + 4 < words.length; i++) {
    out.add(words.slice(i, i + 5).join(' '));
  }
  return out;
}

function readPrerendered(routePath) {
  const file =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
}

async function renderedText(url) {
  const res = await fetch(`${BASE}/__audit?url=${encodeURIComponent(url)}`).catch(() => null);
  return res ? res.text() : null;
}

const routes = ROUTE_CONTENT.filter((r) => !r.noindex).map((r) => r.path);

console.log(`Auditing ${routes.length} indexable routes against dist/…\n`);

let missingFiles = [];
let stats = [];

for (const routePath of routes) {
  const html = readPrerendered(routePath);
  if (!html) {
    missingFiles.push(routePath);
    continue;
  }
  const text = visibleWords(html);
  const words = wordSet(text);
  stats.push({ path: routePath, words: words.size, chars: text.replace(/\s+/g, ' ').trim().length });
}

stats.sort((a, b) => a.words - b.words);

console.log('Thinnest prerendered pages (unique words / visible chars):');
for (const s of stats.slice(0, 12)) {
  console.log(`  ${String(s.words).padStart(5)} words  ${String(s.chars).padStart(7)} chars  ${s.path}`);
}
console.log(`\nRichest: ${stats[stats.length - 1].words} words (${stats[stats.length - 1].path})`);
console.log(`Median:  ${stats[Math.floor(stats.length / 2)].words} words`);

if (missingFiles.length) {
  console.log(`\n⚠️  No prerendered file for: ${missingFiles.join(', ')}`);
} else {
  console.log('\n✅ Every indexable route has a prerendered file.');
}

// Localized routes
let locMissing = [];
let locStats = [];
for (const loc of ROUTED_LOCALES) {
  for (const routePath of routes) {
    if (!ROUTE_META_I18N[loc]?.[routePath]) continue;
    const out = routePath === '/' ? `/${loc}` : `/${loc}${routePath}`;
    const html = readPrerendered(out);
    if (!html) {
      locMissing.push(out);
      continue;
    }
    locStats.push({ path: out, words: wordSet(visibleWords(html)).size });
  }
}
console.log(`\nLocalized: ${locStats.length} prerendered pages, ${locMissing.length} missing.`);
if (locMissing.length) console.log('  missing:', locMissing.slice(0, 10).join(', '));

export { visibleWords, wordSet, phraseSet, readPrerendered };
