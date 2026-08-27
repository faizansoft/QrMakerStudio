/**
 * Keyword → page assignment (read-only analysis).
 *
 * Reads a Keyword Planner export and assigns each keyword to the single
 * best-fit page of the 44 indexable routes, then surfaces:
 *   - the assignment table (keyword, volume, competition, page)
 *   - per-page keyword clusters with total addressable volume
 *   - cannibalisation: keywords a second page also scores highly for
 *   - gaps: high-volume keywords no page covers well
 *   - orphans: pages with little/no keyword support
 *
 * Scoring is token-overlap with intent signals. Each page declares the tokens
 * that mean "this page" (e.g. wifi → wifi, wi-fi, wireless, network, password).
 * A keyword is scored against every page's signal set; the home page is the
 * fallback for generic "qr code generator" head terms that belong nowhere
 * more specific.
 *
 * Deliberately not fuzzy/embedding-based: the QR domain vocabulary is small
 * and unambiguous, so explicit signal tokens are more predictable and auditable
 * than a similarity model, and produce a mapping a human can sanity-check line
 * by line.
 *
 * Usage: node scripts/mapKeywords.mjs <keywords.csv> [--full]
 */

import fs from 'fs';

const csvPath = process.argv[2];
if (!csvPath) {
  console.error('usage: node scripts/mapKeywords.mjs <keywords.csv> [--full]');
  process.exit(1);
}

// ── Read UTF-16 Keyword Planner export ─────────────────────────────────────
let raw = fs.readFileSync(csvPath);
// strip BOM + decode utf16le
let text = raw.toString('utf16le');
if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
const lines = text.split(/\r?\n/);
// Planner prepends a title line and a date-range line before the header.
const headerIdx = lines.findIndex((l) => /^Keyword\t/.test(l));
const body = lines.slice(headerIdx + 1);

const keywords = [];
for (const line of body) {
  if (!line.trim()) continue;
  const cols = line.split('\t');
  const kw = (cols[0] || '').trim().toLowerCase();
  if (!kw) continue;
  const vol = parseInt(cols[2], 10) || 0;
  const comp = (cols[5] || '').trim();
  keywords.push({ kw, vol, comp });
}

// ── Page signal tokens ─────────────────────────────────────────────────────
// `must` tokens are strong intent markers; a keyword needs at least one of a
// page's `must` tokens (or the page is `generic`) to be assigned there.
const PAGES = [
  { path: '/', generic: true, must: [], also: ['generator', 'maker', 'create', 'free', 'online', 'builder', 'generate', 'qrcode', 'scan code'] },
  { path: '/url-qr-code-generator', must: ['url', 'link', 'website', 'web', 'redirect', 'landing'], also: ['page'] },
  { path: '/wifi-qr-code-generator', must: ['wifi', 'wi-fi', 'wireless', 'network'], also: ['password', 'internet', 'router', 'guest'] },
  { path: '/vcard-qr-code-generator', must: ['vcard', 'contact', 'business card', 'namecard', 'name card'], also: ['digital card'] },
  { path: '/googleform-qr-code-generator', must: ['google form', 'form', 'survey', 'feedback'], also: ['questionnaire'] },
  { path: '/whatsapp-qr-code-generator', must: ['whatsapp', 'whats app', 'wa.me'], also: ['chat', 'message'] },
  { path: '/facebook-qr-code-generator', must: ['facebook', 'fb'], also: ['page', 'profile'] },
  { path: '/email-qr-code-generator', must: ['email', 'e-mail', 'mailto', 'gmail'], also: ['mail'] },
  { path: '/phone-qr-code-generator', must: ['phone', 'call', 'dial', 'telephone', 'mobile number'], also: ['tel'] },
  { path: '/sms-qr-code-generator', must: ['sms', 'text message', 'text msg'], also: ['message'] },
  { path: '/location-qr-code-generator', must: ['location', 'map', 'maps', 'gps', 'address', 'geo', 'directions'], also: ['place'] },
  { path: '/crypto-qr-code-generator', must: ['crypto', 'bitcoin', 'btc', 'ethereum', 'eth', 'wallet', 'usdt', 'blockchain'], also: ['coin'] },
  { path: '/text-qr-code-generator', must: ['text', 'plain text', 'note', 'message'], also: ['string'] },
  { path: '/event-qr-code-generator', must: ['event', 'calendar', 'ical', 'save the date', 'invitation', 'wedding'], also: ['rsvp'] },
  { path: '/instagram-qr-code-generator', must: ['instagram', 'insta', 'ig'], also: [] },
  { path: '/youtube-qr-code-generator', must: ['youtube', 'yt', 'video channel'], also: ['video'] },
  { path: '/linkedin-qr-code-generator', must: ['linkedin'], also: ['profile'] },
  { path: '/twitter-qr-code-generator', must: ['twitter', 'x.com', 'tweet'], also: [] },
  { path: '/tiktok-qr-code-generator', must: ['tiktok', 'tik tok'], also: [] },
  { path: '/telegram-qr-code-generator', must: ['telegram', 't.me'], also: ['channel', 'group'] },
  { path: '/paypal-qr-code-generator', must: ['paypal', 'paypal.me'], also: ['payment', 'pay'] },
  { path: '/upi-qr-code-generator', must: ['upi', 'gpay', 'google pay', 'phonepe', 'paytm', 'bhim'], also: ['payment'] },
  { path: '/bulk-qr-code-generator', must: ['bulk', 'batch', 'multiple', 'mass', 'csv'], also: ['many'] },
  { path: '/qr-code-scanner', must: ['scanner', 'scan qr', 'read qr', 'reader', 'decode', 'scan a qr'], also: ['scanner online'] },
  { path: '/social-media-qr-code', must: ['social media', 'social'], also: ['platform'] },
  { path: '/qr-code-with-logo', must: ['logo', 'branded', 'brand'], also: ['icon', 'image'] },
  { path: '/custom-qr-codes', must: ['custom', 'design', 'personalized', 'personalised', 'style', 'pattern', 'aesthetic'], also: ['unique'] },
  { path: '/colored-qr-code-generator', must: ['color', 'colour', 'colored', 'coloured', 'gradient'], also: ['rgb'] },
  { path: '/svg-qr-code-generator', must: ['svg', 'vector', 'eps'], also: ['scalable'] },
  { path: '/high-resolution-qr-codes', must: ['high resolution', 'hi-res', 'hd', '4k', 'print quality', 'dpi', 'large'], also: ['resolution', 'png'] },
  { path: '/pdf-qr-code-generator', must: ['pdf', 'document', 'menu pdf', 'brochure', 'catalog'], also: ['file'] },
  { path: '/app-store-qr-code-generator', must: ['app store', 'play store', 'google play', 'app download', 'ios android'], also: ['app'] },
  { path: '/pricing', must: ['price', 'pricing', 'cost', 'plan', 'subscription', 'paid'], also: [] },
  { path: '/blog/qr-codes-for-restaurants', must: ['restaurant', 'menu qr', 'cafe menu', 'table', 'dining'], also: ['food'] },
  { path: '/blog/qr-codes-for-real-estate', must: ['real estate', 'property', 'realtor', 'yard sign', 'listing'], also: ['house'] },
  { path: '/blog/wifi-qr-codes-for-hospitality', must: ['hotel', 'hospitality', 'airbnb', 'guest wifi'], also: ['room'] },
  { path: '/blog/printing-qr-codes-guide', must: ['print', 'printing', 'size', 'sizing'], also: ['dpi'] },
  { path: '/blog/vcard-qr-code-business-cards', must: ['business card qr', 'card qr code'], also: [] }
];

const has = (kw, token) => {
  if (token.includes(' ')) return kw.includes(token);
  return new RegExp(`(^|[^a-z])${token.replace('.', '\\.')}([^a-z]|$)`).test(kw);
};

function scorePage(kw, page) {
  let s = 0;
  let hitMust = false;
  for (const t of page.must) if (has(kw, t)) { s += 10; hitMust = true; }
  for (const t of page.also || []) if (has(kw, t)) s += 2;
  if (page.generic) {
    // generic head-term signals
    for (const t of page.also) if (has(kw, t)) s += 1;
    if (/qr ?code|qr generator|qrcode|scan code/.test(kw)) s += 3;
  }
  return { score: s, hitMust };
}

// Assign each keyword to best page; also track the runner-up for cannibalisation
for (const k of keywords) {
  const scored = PAGES.map((p) => ({ path: p.path, ...scorePage(k.kw, p), generic: !!p.generic }));
  scored.sort((a, b) => b.score - a.score);
  const specific = scored.filter((s) => !s.generic && s.hitMust && s.score > 0);
  if (specific.length) {
    k.page = specific[0].path;
    k.score = specific[0].score;
    k.runnerUp = specific[1] && specific[1].score >= specific[0].score * 0.6 ? specific[1] : null;
  } else if (scored[0].generic && scored[0].score > 0) {
    k.page = '/';
    k.score = scored[0].score;
  } else {
    k.page = null; // gap
    k.score = 0;
  }
}

// ── Aggregate per page ─────────────────────────────────────────────────────
const byPage = new Map();
PAGES.forEach((p) => byPage.set(p.path, []));
for (const k of keywords) if (k.page) byPage.get(k.page).push(k);

console.log('═══ KEYWORD → PAGE MAP ═══\n');
console.log(`Keywords parsed : ${keywords.length}`);
console.log(`Assigned        : ${keywords.filter((k) => k.page).length}`);
console.log(`Unassigned (gap): ${keywords.filter((k) => !k.page).length}`);
console.log(`\nNote: Planner volumes are bucketed ranges (500000, 50000, 5000…),\nnot exact — use them for RANK ORDER, not absolute traffic.\n`);

const pageRows = [...byPage.entries()]
  .map(([path, ks]) => ({
    path,
    n: ks.length,
    vol: ks.reduce((a, b) => a + b.vol, 0),
    top: ks.slice().sort((a, b) => b.vol - a.vol).slice(0, 5)
  }))
  .sort((a, b) => b.vol - a.vol);

console.log('── Pages ranked by total addressable search volume ──\n');
for (const p of pageRows) {
  console.log(`${p.path}`);
  console.log(`   ${p.n} keywords · ~${p.vol.toLocaleString()} combined monthly volume`);
  p.top.forEach((k) => console.log(`      ${String(k.vol).padStart(7)}  ${k.comp.padEnd(6)} ${k.kw}`));
  console.log('');
}

// ── Cannibalisation ────────────────────────────────────────────────────────
const cann = keywords.filter((k) => k.runnerUp);
console.log(`── Cannibalisation risk (keyword scores well for 2 pages): ${cann.length} ──`);
cann
  .sort((a, b) => b.vol - a.vol)
  .slice(0, 20)
  .forEach((k) => console.log(`   ${String(k.vol).padStart(7)}  "${k.kw}"  →  ${k.page}  vs  ${k.runnerUp.path}`));

// ── Gaps ───────────────────────────────────────────────────────────────────
const gaps = keywords.filter((k) => !k.page && k.vol >= 1000).sort((a, b) => b.vol - a.vol);
console.log(`\n── High-volume GAPS (≥1k vol, no page fits): ${gaps.length} ──`);
gaps.slice(0, 30).forEach((k) => console.log(`   ${String(k.vol).padStart(7)}  ${k.comp.padEnd(6)} ${k.kw}`));

// ── Orphans ────────────────────────────────────────────────────────────────
const orphans = pageRows.filter((p) => p.n <= 1);
console.log(`\n── Thin/orphan pages (≤1 keyword mapped): ${orphans.length} ──`);
orphans.forEach((p) => console.log(`   ${p.path}  (${p.n})`));

if (process.argv.includes('--full')) {
  console.log('\n\n═══ FULL ASSIGNMENT ═══');
  keywords
    .filter((k) => k.page)
    .sort((a, b) => (a.page < b.page ? -1 : a.page > b.page ? 1 : b.vol - a.vol))
    .forEach((k) => console.log(`${k.page}\t${k.vol}\t${k.comp}\t${k.kw}`));
}
