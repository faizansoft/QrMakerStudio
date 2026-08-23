/**
 * SEO length audit for every title and meta description that ships.
 *
 * Ahrefs Site Audit flags:
 *   - "Title too long"             > 60 characters
 *   - "Meta description too long"  > 160 characters
 *   - "Meta description too short" < 110 characters
 *
 * Ahrefs only reports what its crawl actually reached, so fixing its CSV
 * export alone leaves the same defect on every page it did not visit. This
 * reads the source data instead — all 44 English routes plus all 220
 * localized variants — so the fix can be complete rather than sampled.
 *
 * Translated copy is the usual culprit: Turkish, Spanish, Vietnamese and
 * Hindi run roughly 15-30% longer than the English they were translated
 * from, so English strings that sat comfortably under the limit go over.
 *
 * Usage: node scripts/auditMetaLengths.mjs [--all]
 */

import { ROUTE_CONTENT } from './routeContent.js';
import { ROUTED_LOCALES, ROUTE_META_I18N } from './routeMetaI18nData.js';

const TITLE_MAX = 60;
const DESC_MAX = 160;
const DESC_MIN = 110;

const rows = [];

for (const route of ROUTE_CONTENT) {
  if (route.noindex) continue;
  rows.push({ locale: 'en', path: route.path, title: route.title, desc: route.description });
  for (const loc of ROUTED_LOCALES) {
    const m = ROUTE_META_I18N[loc]?.[route.path];
    if (m) rows.push({ locale: loc, path: route.path, title: m.title, desc: m.description });
  }
}

const titleLong = rows.filter((r) => r.title.length > TITLE_MAX);
const descLong = rows.filter((r) => r.desc.length > DESC_MAX);
const descShort = rows.filter((r) => r.desc.length < DESC_MIN);

const byLocale = (list) =>
  list.reduce((a, r) => ((a[r.locale] = (a[r.locale] || 0) + 1), a), {});

console.log(`Audited ${rows.length} (locale, path) pairs\n`);
console.log(`Title > ${TITLE_MAX}          : ${titleLong.length}\t${JSON.stringify(byLocale(titleLong))}`);
console.log(`Description > ${DESC_MAX}    : ${descLong.length}\t${JSON.stringify(byLocale(descLong))}`);
console.log(`Description < ${DESC_MIN}    : ${descShort.length}\t${JSON.stringify(byLocale(descShort))}`);

if (process.argv.includes('--all')) {
  const show = (label, list, field, max) => {
    if (!list.length) return;
    console.log(`\n── ${label} ──`);
    list
      .sort((a, b) => b[field].length - a[field].length)
      .forEach((r) => {
        const over = max ? `${r[field].length}` : `${r[field].length}`;
        console.log(`  ${over.padStart(4)}  /${r.locale}${r.path === '/' ? '' : r.path}`);
      });
  };
  show(`Titles over ${TITLE_MAX}`, titleLong, 'title', TITLE_MAX);
  show(`Descriptions over ${DESC_MAX}`, descLong, 'desc', DESC_MAX);
  show(`Descriptions under ${DESC_MIN}`, descShort, 'desc', DESC_MIN);
}

const total = titleLong.length + descLong.length + descShort.length;
if (total) {
  console.log(`\n❌ ${total} length violations.`);
  process.exitCode = 1;
} else {
  console.log('\n✅ All titles and meta descriptions within SEO length limits.');
}

export { TITLE_MAX, DESC_MAX, DESC_MIN };
