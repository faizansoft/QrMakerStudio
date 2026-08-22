/**
 * Extracts the long-form copy that lives as hardcoded JSX inside the five
 * utility page components, and writes it to scripts/generatedPageContent.js
 * for the prerenderer to emit.
 *
 * Why this exists
 * ---------------
 * QRScannerPage, SocialMediaQRPage, BulkGeneratorPage, AppStoreQRPage and
 * PDFToQRPage each render ~700-1,100 words of guide content written directly
 * in JSX. The prerenderer had no data for those routes, so the static HTML
 * shipped 376-566 words while the JS-rendered page showed the full article.
 * Crawlers that do not execute JavaScript — Bing, and the GPTBot /
 * PerplexityBot / ClaudeBot agents this site explicitly allows in robots.txt —
 * only ever saw the thin version.
 *
 * Rather than keep a second hand-maintained copy of that prose (the exact
 * drift problem this codebase already had between prerender and render), this
 * runs at build time and derives the content from the components themselves.
 * Edit the JSX; the prerendered HTML follows automatically.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SOURCES = {
  '/qr-code-scanner': 'QRScannerPage.tsx',
  '/social-media-qr-code': 'SocialMediaQRPage.tsx',
  '/bulk-qr-code-generator': 'BulkGeneratorPage.tsx',
  '/app-store-qr-code-generator': 'AppStoreQRPage.tsx',
  '/pdf-qr-code-generator': 'PDFToQRPage.tsx'
};

/** Turn a JSX fragment into plain readable text, or null if it is dynamic. */
function toText(jsx) {
  // Bail on anything containing a JS expression — those are runtime values we
  // cannot resolve statically, and half-resolved text is worse than none.
  const stripped = jsx.replace(/<[^>]*>/g, '');
  if (/[{}]/.test(stripped)) return null;
  return stripped
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Pull the inner HTML of every occurrence of a tag.
 *
 * Uses the dotAll flag rather than `(?:.|\n)`: these files have CRLF endings,
 * and JavaScript treats \r as a line terminator too, so `.` excludes it and
 * the alternation form silently matches nothing.
 */
function blocks(src, tag) {
  const re = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, 'gs');
  return [...src.matchAll(re)].map((m) => m[1]);
}

function extract(file) {
  const src = fs.readFileSync(path.join(rootDir, file), 'utf8');
  const sections = [];

  for (const article of blocks(src, 'article')) {
    const h2 = blocks(article, 'h2')[0];
    if (!h2) continue;
    const title = toText(h2);
    if (!title) continue;

    const paragraphs = [];

    for (const p of blocks(article, 'p')) {
      const t = toText(p);
      // Short fragments are captions and labels, not body copy.
      if (t && t.length > 60) paragraphs.push(t);
    }

    // List items carry a lot of the substance on these pages (spec lists,
    // troubleshooting steps). Collect them into one paragraph so the
    // prerendered text matches what a reader sees.
    const items = [];
    for (const li of blocks(article, 'li')) {
      const t = toText(li);
      if (t && t.length > 25) items.push(t);
    }
    if (items.length) paragraphs.push(items.join(' '));

    // Table rows: join cells per row.
    const rows = [];
    for (const tr of blocks(article, 'tr')) {
      const cells = [...blocks(tr, 'td'), ...blocks(tr, 'th')]
        .map(toText)
        .filter(Boolean);
      if (cells.length >= 2) rows.push(cells.join(' — '));
    }
    if (rows.length) paragraphs.push(rows.join('. '));

    if (paragraphs.length) sections.push({ title, paragraphs });
  }

  return sections;
}

function run() {
  const out = {};
  let totalWords = 0;

  for (const [route, file] of Object.entries(SOURCES)) {
    const sections = extract(file);
    const words = sections.reduce(
      (n, s) => n + s.paragraphs.reduce((m, p) => m + p.split(/\s+/).length, 0),
      0
    );
    totalWords += words;
    out[route] = sections;
    console.log(`   ${route.padEnd(32)} ${String(sections.length).padStart(2)} sections, ${String(words).padStart(4)} words`);
  }

  const banner = `/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Written by scripts/extractPageContent.js during \`npm run build\`.
 * The source of truth is the JSX in the page components listed there.
 */

`;
  fs.writeFileSync(
    path.join(__dirname, 'generatedPageContent.js'),
    banner + 'export const GENERATED_PAGE_CONTENT = ' + JSON.stringify(out, null, 2) + ';\n',
    'utf8'
  );
  console.log(`📄 Extracted ${totalWords} words of page copy for the prerenderer.`);
}

run();
