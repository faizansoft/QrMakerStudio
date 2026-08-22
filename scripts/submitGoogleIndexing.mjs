/**
 * Google Indexing API client.
 *
 *   node scripts/submitGoogleIndexing.mjs                 # URLs whose lastmod is today
 *   node scripts/submitGoogleIndexing.mjs --all           # every indexable URL
 *   node scripts/submitGoogleIndexing.mjs --dry-run       # print, submit nothing
 *   node scripts/submitGoogleIndexing.mjs --url <url>     # one URL
 *   node scripts/submitGoogleIndexing.mjs remove --url <url>   # URL_DELETED
 *   node scripts/submitGoogleIndexing.mjs status               # what Google recorded
 *   node scripts/submitGoogleIndexing.mjs auth --credentials <path>  # OAuth path only
 *
 * READ THIS BEFORE RELYING ON IT
 * ------------------------------
 * Google supports the Indexing API for exactly two kinds of page: those
 * carrying JobPosting structured data, and those carrying BroadcastEvent
 * inside a VideoObject (livestreams). Nothing on qr-generator.online is
 * either. The endpoint still answers HTTP 200 for any URL you own — it does
 * not validate the page type at submission time — so a green run here is
 * *not* evidence that Google accepted the page for indexing. It almost
 * certainly discarded it.
 *
 * That is why this is a standalone command and is deliberately NOT part of
 * `npm run build`, unlike the sitemap. What actually moves indexing for this
 * site, in order of effect:
 *
 *   1. public/sitemap.xml with honest content-derived <lastmod> (build step)
 *   2. `node scripts/gsc.mjs inspect` to see real per-URL index state, and
 *      Search Console's "Request indexing" for genuinely urgent single pages
 *   3. `npm run indexnow` for Bing/Yandex/Seznam/Naver, which do accept
 *      arbitrary page types
 *
 * Keep this script for the day a /jobs page ships, and for measuring what
 * Google records via `status`.
 *
 * Credentials
 * -----------
 * Two ways in; a service account is the path Google documents.
 *
 * A. Service account (recommended)
 *      Google Cloud → IAM → Service Accounts → create → Keys → add JSON key.
 *      Then in Search Console → Settings → Users and permissions, add the
 *      service account's client_email as an **Owner** of the property.
 *      Ownership is the whole authorisation model here: without it every
 *      publish returns 403 "Failed to verify the URL ownership".
 *
 *        set GOOGLE_INDEXING_CREDENTIALS=C:\path\to\service-account.json
 *        node scripts/submitGoogleIndexing.mjs --dry-run
 *
 * B. OAuth desktop client (reuses the client_secret gsc.mjs already uses)
 *      The account you consent with must itself be an Owner of the property.
 *      The refresh token gsc.mjs saved cannot be reused — refresh tokens are
 *      scope-bound and that one only carries webmasters.readonly — so this
 *      keeps its own token file.
 *
 *        node scripts/submitGoogleIndexing.mjs auth --credentials <path>
 *
 * Enable "Indexing API" in the Cloud project either way:
 *   https://console.cloud.google.com/apis/library/indexing.googleapis.com
 *
 * Nothing secret is written into this repository. The refresh token lives in
 * your home directory as .google-indexing-token.json.
 */

import fs from 'fs';
import os from 'os';
import path from 'path';
import http from 'http';
import crypto from 'crypto';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SCOPE = 'https://www.googleapis.com/auth/indexing';
const PUBLISH = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
const METADATA = 'https://indexing.googleapis.com/v3/urlNotifications/metadata';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const TOKEN_FILE = path.join(os.homedir(), '.google-indexing-token.json');

// Google grants 200 publish calls/day until you request more, and counts
// quota per URL even inside a batch. 44 indexable pages fits comfortably.
const DAILY_QUOTA = 200;
// The per-minute ceiling is far higher than this; the delay is politeness and
// keeps a failing run from burning the daily allowance in one burst.
const DELAY_MS = 250;

const args = process.argv.slice(2);
const command = ['auth', 'submit', 'remove', 'status'].includes(args[0]) ? args[0] : 'submit';

const has = (name) => args.includes(`--${name}`);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

const submitAll = has('all');
const dryRun = has('dry-run');
const singleUrl = flag('url');
const limit = flag('limit') ? Number(flag('limit')) : undefined;

/* ── credentials ─────────────────────────────────────────────────────────── */

function credentialsPath() {
  return (
    flag('credentials') ||
    process.env.GOOGLE_INDEXING_CREDENTIALS ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS
  );
}

function loadCredentials() {
  const p = credentialsPath();
  if (!p) {
    console.error(
      'No credentials given.\n' +
        '  set GOOGLE_INDEXING_CREDENTIALS=C:\\path\\to\\service-account.json\n' +
        '  or pass --credentials "C:\\path\\to\\service-account.json"\n\n' +
        'See the header of this file for how to create the service account and\n' +
        'make it an Owner of the Search Console property.'
    );
    process.exit(1);
  }
  if (!fs.existsSync(p)) {
    console.error(`Credentials file not found: ${p}`);
    process.exit(1);
  }
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (json.type === 'service_account') return { kind: 'service_account', json };
  const oauth = json.installed || json.web;
  if (oauth) return { kind: 'oauth', client: oauth };
  console.error(
    'That file is neither a service account key (no "type": "service_account")\n' +
      'nor an OAuth client (no "installed"/"web" key).'
  );
  process.exit(1);
}

const b64url = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');

/** Service account → signed JWT → access token. No external dependency needed. */
async function serviceAccountToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned =
    b64url({ alg: 'RS256', typ: 'JWT' }) +
    '.' +
    b64url({
      iss: sa.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600
    });

  const signature = crypto
    .createSign('RSA-SHA256')
    .update(unsigned)
    .sign(sa.private_key)
    .toString('base64url');

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`
    })
  });
  const tok = await res.json();
  if (!tok.access_token) {
    console.error('Could not exchange the service account key for a token:', tok);
    process.exit(1);
  }
  return tok.access_token;
}

/** One-time consent for the OAuth path; stores a refresh token outside the repo. */
async function authorize() {
  const cred = loadCredentials();
  if (cred.kind !== 'oauth') {
    console.log(
      'That is a service account key — it needs no consent step.\n' +
        'Just make sure its client_email is an Owner in Search Console:\n' +
        `  ${cred.json.client_email}`
    );
    return;
  }
  const client = cred.client;

  const server = http.createServer();
  const port = await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server.address().port));
  });
  const redirectUri = `http://localhost:${port}`;

  const url =
    'https://accounts.google.com/o/oauth2/v2/auth?' +
    new URLSearchParams({
      client_id: client.client_id,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: SCOPE,
      access_type: 'offline',
      prompt: 'consent'
    });

  console.log('\nOpening your browser to authorise the Indexing API scope…');
  console.log('If it does not open, paste this into a browser:\n');
  console.log(url + '\n');

  const opener =
    process.platform === 'win32' ? ['cmd', ['/c', 'start', '""', url]]
    : process.platform === 'darwin' ? ['open', [url]]
    : ['xdg-open', [url]];
  try { spawn(opener[0], opener[1], { detached: true, stdio: 'ignore' }).unref(); } catch { /* paste it manually */ }

  const code = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timed out waiting for consent')), 300000);
    server.on('request', (req, res) => {
      const q = new URL(req.url, redirectUri).searchParams;
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      if (q.get('error')) {
        res.end('<h2>Authorisation refused</h2><p>You can close this tab.</p>');
        clearTimeout(timer);
        reject(new Error(q.get('error')));
      } else {
        res.end('<h2>Done</h2><p>Authorised. You can close this tab and return to the terminal.</p>');
        clearTimeout(timer);
        resolve(q.get('code'));
      }
      server.close();
    });
  });

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: client.client_id,
      client_secret: client.client_secret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    })
  });
  const tok = await res.json();
  if (!tok.refresh_token) {
    console.error('No refresh token returned:', tok);
    process.exit(1);
  }

  fs.writeFileSync(TOKEN_FILE, JSON.stringify({ refresh_token: tok.refresh_token }, null, 2), {
    mode: 0o600
  });
  console.log(`\n✅ Authorised. Refresh token saved to ${TOKEN_FILE}`);
  console.log('   (outside the repo, and never committed)\n');
}

async function oauthToken(client) {
  if (!fs.existsSync(TOKEN_FILE)) {
    console.error(
      'Not authorised for the Indexing API yet. Run:\n' +
        '  node scripts/submitGoogleIndexing.mjs auth --credentials "<path>"\n\n' +
        'The token gsc.mjs saved does not carry this scope, so it cannot be reused.'
    );
    process.exit(1);
  }
  const { refresh_token } = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token,
      client_id: client.client_id,
      client_secret: client.client_secret,
      grant_type: 'refresh_token'
    })
  });
  const tok = await res.json();
  if (!tok.access_token) {
    console.error('Could not refresh the access token:', tok);
    process.exit(1);
  }
  return tok.access_token;
}

let cachedToken;
async function accessToken() {
  if (cachedToken) return cachedToken;
  const cred = loadCredentials();
  cachedToken =
    cred.kind === 'service_account'
      ? await serviceAccountToken(cred.json)
      : await oauthToken(cred.client);
  return cachedToken;
}

/* ── URL source: the same sitemap IndexNow submits from ──────────────────── */

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

function targetUrls() {
  if (singleUrl) return [singleUrl];
  const entries = readSitemap();
  const today = new Date().toISOString().slice(0, 10);
  const list = (submitAll ? entries : entries.filter((e) => e.lastmod === today)).map((e) => e.loc);
  return limit ? list.slice(0, limit) : list;
}

/* ── API ─────────────────────────────────────────────────────────────────── */

/** Turns Google's terser failures into the thing you actually have to go fix. */
function explain(status, message) {
  if (/has not been used in project|is disabled/i.test(message)) {
    return (
      'The Indexing API is not enabled for this Cloud project. Enable it, wait a\n' +
      '   minute, then retry:\n' +
      '   https://console.cloud.google.com/apis/library/indexing.googleapis.com'
    );
  }
  if (status === 403 && /ownership/i.test(message)) {
    return (
      'Google does not consider this identity an owner of the property. Add the\n' +
      '   service account client_email (or the account you consented with) as an\n' +
      '   **Owner** — not "Full" — in Search Console → Settings → Users and\n' +
      '   permissions, then retry.'
    );
  }
  if (status === 429) {
    return `Daily quota exhausted (${DAILY_QUOTA}/day by default). Retry tomorrow or request more in Cloud Console.`;
  }
  return null;
}

async function publish(url, type) {
  const token = await accessToken();
  const res = await fetch(PUBLISH, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, type })
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

async function metadata(url) {
  const token = await accessToken();
  const res = await fetch(`${METADATA}?url=${encodeURIComponent(url)}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

const short = (u) => u.replace('https://qr-generator.online', '') || '/';

/* ── commands ────────────────────────────────────────────────────────────── */

async function runPublish(type) {
  // Fail on missing/malformed credentials before printing a banner that
  // implies work is about to happen.
  if (!dryRun) loadCredentials();

  const urls = targetUrls();

  if (!urls.length) {
    console.log(
      `Nothing to submit — no page has a lastmod of ${new Date().toISOString().slice(0, 10)}. ` +
        'Use --all to resubmit every indexable URL.'
    );
    return;
  }

  console.log(
    `\nGoogle Indexing API · ${type} · ${urls.length} URL(s)` +
      (singleUrl ? '' : submitAll ? ' (all)' : ' changed today')
  );
  console.log(
    '⚠️  Google only honours this API for JobPosting and BroadcastEvent pages.\n' +
      '   These are ordinary pages, so expect HTTP 200 and no indexing effect.\n'
  );

  if (urls.length > DAILY_QUOTA) {
    console.log(
      `⚠️  ${urls.length} URLs exceeds the default ${DAILY_QUOTA}/day quota; ` +
        `the tail will 429. Use --limit ${DAILY_QUOTA} to stay inside it.\n`
    );
  }

  if (dryRun) {
    urls.forEach((u) => console.log('   ' + short(u)));
    console.log('\n--dry-run: nothing submitted.');
    return;
  }

  let recorded = 0;
  let discarded = 0;
  const failures = [];

  for (const url of urls) {
    const { ok: success, status, body } = await publish(url, type);
    if (success) {
      // HTTP 200 alone means nothing. Google echoes back the URL for any
      // request it accepts, but only *records* a notification for an eligible
      // page — and a recorded one carries latestUpdate.notifyTime. A 200 with
      // no notifyTime is a silent discard, which is what ordinary pages get.
      const meta = body?.urlNotificationMetadata;
      const at = (type === 'URL_DELETED' ? meta?.latestRemove : meta?.latestUpdate)?.notifyTime;
      if (at) {
        recorded++;
        console.log(`  ✓ ${short(url).padEnd(38)} recorded ${at.slice(0, 19).replace('T', ' ')}`);
      } else {
        discarded++;
        console.log(`  ⊘ ${short(url).padEnd(38)} HTTP 200 but not recorded — discarded`);
      }
    } else {
      const message = body?.error?.message || `HTTP ${status}`;
      console.log(`  ✗ ${short(url).padEnd(38)} ${message}`);
      failures.push({ url, status, message });
      // Ownership and enablement failures apply to every URL — stop rather
      // than spending the daily quota on 43 more copies of the same error.
      if (status === 403 || status === 401 || /is disabled|has not been used/i.test(message)) {
        console.log('\n  Aborting: this failure affects every URL, not just this one.');
        break;
      }
      if (status === 429) {
        console.log('\n  Aborting: daily quota exhausted.');
        break;
      }
    }
    await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  console.log(
    `\n${recorded} recorded, ${discarded} discarded, ${failures.length} failed ` +
      `(of ${urls.length}).`
  );

  if (failures.length) {
    const hint = explain(failures[0].status, failures[0].message);
    if (hint) console.error(`\n❌ ${hint}\n`);
    process.exitCode = 1;
    return;
  }

  if (discarded) {
    console.log(
      `\n⊘ Google took the call and kept no record for ${discarded} URL(s). That is\n` +
        '  the documented behaviour for pages that are not JobPosting or\n' +
        '  BroadcastEvent: the endpoint does not reject them, it ignores them.\n' +
        '  Confirm for yourself with:  node scripts/submitGoogleIndexing.mjs status --all\n' +
        '  For pages like these, use `npm run indexnow` and the sitemap instead.\n'
    );
  }

  if (recorded) {
    console.log(
      'Recorded ≠ indexed. Verify real index state with:\n' +
        '  node scripts/gsc.mjs inspect\n'
    );
  }
}

async function runStatus() {
  loadCredentials();
  const urls = singleUrl ? [singleUrl] : targetUrls();
  if (!urls.length) {
    console.log('No URLs to check. Use --all or --url <url>.');
    return;
  }

  console.log(`\nNotification history Google has on record (${urls.length} URL(s)):\n`);

  for (const url of urls) {
    const { ok, status, body } = await metadata(url);
    if (ok) {
      const updated = body?.latestUpdate?.notifyTime;
      const removed = body?.latestRemove?.notifyTime;
      console.log(
        `  ${short(url).padEnd(38)} updated: ${updated ? updated.slice(0, 19).replace('T', ' ') : '—'}` +
          (removed ? `  removed: ${removed.slice(0, 19).replace('T', ' ')}` : '')
      );
    } else if (status === 404) {
      // Expected for any URL never submitted; not an error worth flagging.
      console.log(`  ${short(url).padEnd(38)} never submitted`);
    } else {
      const message = body?.error?.message || `HTTP ${status}`;
      console.log(`  ${short(url).padEnd(38)} ✗ ${message}`);
      const hint = explain(status, message);
      if (hint) {
        console.error(`\n❌ ${hint}\n`);
        process.exitCode = 1;
        return;
      }
    }
    await new Promise((r) => setTimeout(r, DELAY_MS));
  }
  console.log();
}

async function main() {
  switch (command) {
    case 'auth':
      return authorize();
    case 'status':
      return runStatus();
    case 'remove':
      if (!singleUrl && !submitAll) {
        console.error(
          'Refusing to guess. Removal is destructive — name the page:\n' +
            '  node scripts/submitGoogleIndexing.mjs remove --url https://qr-generator.online/<path>\n' +
            '  (or --all, which asks Google to drop every sitemap URL)'
        );
        process.exit(1);
      }
      return runPublish('URL_DELETED');
    case 'submit':
    default:
      return runPublish('URL_UPDATED');
  }
}

main().catch((e) => {
  console.error('❌', e.message);
  process.exitCode = 1;
});
