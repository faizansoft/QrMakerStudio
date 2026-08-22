/**
 * Submits changed URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * The IndexNow key was already verified and served at
 * /faa043d73afe40288866307a2e80e2b8.txt, but nothing ever POSTed to the API —
 * so Ahrefs reported all 44 pages as still pending submission. This closes
 * that loop.
 *
 * By default it submits only pages whose <lastmod> is today, which is exactly
 * the set scripts/generateSitemap.js just re-stamped because their content
 * hash changed. Pinging unchanged URLs repeatedly is what gets a host
 * throttled, so the narrow default is deliberate.
 *
 *   node scripts/submitIndexNow.js            # changed pages only
 *   node scripts/submitIndexNow.js --all      # every indexable URL
 *   node scripts/submitIndexNow.js --dry-run  # print, submit nothing
 *
 * Google does not participate in IndexNow; it discovers changes via the
 * sitemap and its own crawl schedule.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const HOST = 'qr-generator.online';
const KEY = 'faa043d73afe40288866307a2e80e2b8';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

const args = process.argv.slice(2);
const submitAll = args.includes('--all');
const dryRun = args.includes('--dry-run');

function readSitemap() {
  const file = path.join(rootDir, 'public', 'sitemap.xml');
  if (!fs.existsSync(file)) {
    console.error('❌ public/sitemap.xml not found — run the build first.');
    process.exit(1);
  }
  const xml = fs.readFileSync(file, 'utf8');
  const entries = [];
  const re = /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g;
  let m;
  while ((m = re.exec(xml))) entries.push({ loc: m[1], lastmod: m[2] });
  return entries;
}

async function run() {
  const entries = readSitemap();
  const today = new Date().toISOString().slice(0, 10);

  const urlList = (submitAll ? entries : entries.filter((e) => e.lastmod === today)).map(
    (e) => e.loc
  );

  if (!urlList.length) {
    console.log(
      `Nothing to submit — no page has a lastmod of ${today}. ` +
        'Use --all to resubmit every indexable URL.'
    );
    return;
  }

  console.log(`IndexNow: ${urlList.length} URL(s)${submitAll ? ' (all)' : ' changed today'}`);
  urlList.slice(0, 10).forEach((u) => console.log('   ' + u));
  if (urlList.length > 10) console.log(`   … and ${urlList.length - 10} more`);

  if (dryRun) {
    console.log('\n--dry-run: nothing submitted.');
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })
  });

  // 200 accepted, 202 accepted but key validation pending.
  if (res.status === 200 || res.status === 202) {
    console.log(`✅ Submitted (HTTP ${res.status}).`);
  } else {
    console.error(`❌ IndexNow returned HTTP ${res.status}: ${await res.text()}`);
    process.exitCode = 1;
  }
}

run().catch((err) => {
  console.error('❌ IndexNow submission failed:', err.message);
  process.exitCode = 1;
});
