/**
 * Google Search Console client.
 *
 *   node scripts/gsc.mjs auth      # one-time browser consent, saves a refresh token
 *   node scripts/gsc.mjs sites     # list every property you can access + permission level
 *   node scripts/gsc.mjs queries   # top search queries (last 3 months)
 *   node scripts/gsc.mjs pages     # top pages
 *   node scripts/gsc.mjs export    # write the full query+page dataset to gsc-data.json
 *
 * Credentials
 * -----------
 * Uses an OAuth 2.0 *Desktop app* client (the file Google gave you, with an
 * "installed" key). Point at it with either:
 *   set GSC_CLIENT_SECRET=C:\path\to\client_secret_xxx.json
 * or
 *   node scripts/gsc.mjs sites --credentials "C:\path\to\client_secret_xxx.json"
 *
 * Nothing secret is written into this repository. The refresh token is stored
 * in your home directory as .gsc-token.json, and the client secret is only
 * ever read from the path you supply.
 *
 * Prerequisites in Google Cloud (project: qrstudio-new)
 *   1. Enable the "Google Search Console API"
 *   2. OAuth consent screen configured; if the app is in Testing mode, add
 *      your own Google account under Test users, or consent will be refused
 */

import fs from 'fs';
import os from 'os';
import path from 'path';
import http from 'http';
import { spawn } from 'child_process';

const TOKEN_FILE = path.join(os.homedir(), '.gsc-token.json');
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const API = 'https://searchconsole.googleapis.com/webmasters/v3';
const API_V1 = 'https://searchconsole.googleapis.com/v1';

const args = process.argv.slice(2);
const command = args[0] || 'sites';

function flag(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
}

function loadClient() {
  const p = flag('credentials') || process.env.GSC_CLIENT_SECRET;
  if (!p) {
    console.error(
      'No credentials given.\n' +
        '  set GSC_CLIENT_SECRET=C:\\path\\to\\client_secret_xxx.json\n' +
        '  or pass --credentials "C:\\path\\to\\client_secret_xxx.json"'
    );
    process.exit(1);
  }
  if (!fs.existsSync(p)) {
    console.error(`Credentials file not found: ${p}`);
    process.exit(1);
  }
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  const c = json.installed || json.web;
  if (!c) {
    console.error(
      'That file has neither an "installed" nor a "web" key. You need an ' +
        'OAuth 2.0 Client ID of type "Desktop app".'
    );
    process.exit(1);
  }
  return c;
}

/** One-time consent: opens a browser, catches the redirect, stores a refresh token. */
async function authorize() {
  const client = loadClient();

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

  console.log('\nOpening your browser to authorise access…');
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

  const res = await fetch('https://oauth2.googleapis.com/token', {
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

async function accessToken() {
  if (!fs.existsSync(TOKEN_FILE)) {
    console.error('Not authorised yet. Run:  node scripts/gsc.mjs auth --credentials "<path>"');
    process.exit(1);
  }
  const client = loadClient();
  const { refresh_token } = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  const res = await fetch('https://oauth2.googleapis.com/token', {
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

async function api(pathname, init = {}) {
  const token = await accessToken();
  const base = pathname.startsWith('/v1/') ? API_V1.replace('/v1', '') : API;
  const res = await fetch(base + pathname, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...(init.headers || {}) }
  });
  const body = await res.json();
  if (!res.ok) {
    const msg = body?.error?.message || JSON.stringify(body);
    if (/Search Console API has not been used|is disabled/i.test(msg)) {
      console.error(
        '\n❌ The Search Console API is not enabled for this Google Cloud project.\n' +
          '   Enable it here, wait a minute, then retry:\n' +
          '   https://console.cloud.google.com/apis/library/searchconsole.googleapis.com\n'
      );
      process.exit(1);
    }
    console.error(`❌ HTTP ${res.status}: ${msg}`);
    process.exit(1);
  }
  return body;
}

const dateRange = (days) => {
  const end = new Date(Date.now() - 2 * 864e5); // GSC data lags ~2 days
  const start = new Date(end.getTime() - days * 864e5);
  return { startDate: start.toISOString().slice(0, 10), endDate: end.toISOString().slice(0, 10) };
};

async function listSites() {
  const { siteEntry = [] } = await api('/sites');
  if (!siteEntry.length) {
    console.log('\nNo properties found for this Google account.');
    console.log('Either nothing is verified, or you authorised with a different account.\n');
    return [];
  }
  console.log(`\nProperties this account can read (${siteEntry.length}):\n`);
  for (const s of siteEntry) {
    const kind = s.siteUrl.startsWith('sc-domain:') ? 'Domain property' : 'URL-prefix property';
    console.log(`  ${s.siteUrl}`);
    console.log(`     ${kind} · permission: ${s.permissionLevel}`);
  }
  const mine = siteEntry.filter((s) => s.siteUrl.includes('qr-generator.online'));
  console.log(
    mine.length
      ? `\n✅ qr-generator.online is verified — use: ${mine[0].siteUrl}\n`
      : '\n⚠️  No qr-generator.online property on this account.\n'
  );
  return siteEntry;
}

async function pickSite() {
  const explicit = flag('site');
  if (explicit) return explicit;
  const { siteEntry = [] } = await api('/sites');
  const mine = siteEntry.filter((s) => s.siteUrl.includes('qr-generator.online'));
  // Prefer a domain property; it aggregates http/https and www/apex.
  const chosen = mine.find((s) => s.siteUrl.startsWith('sc-domain:')) || mine[0];
  if (!chosen) {
    console.error('No qr-generator.online property found. Run "sites" to see what is available.');
    process.exit(1);
  }
  return chosen.siteUrl;
}

async function report(dimensions, rowLimit = 100, days = 90) {
  const site = await pickSite();
  const body = await api(`/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
    method: 'POST',
    body: JSON.stringify({ ...dateRange(days), dimensions, rowLimit, type: 'web' })
  });
  return { site, rows: body.rows || [] };
}

async function main() {
  switch (command) {
    case 'auth':
      return authorize();

    case 'sites':
      return void (await listSites());

    case 'queries': {
      const { site, rows } = await report(['query'], 50);
      console.log(`\nTop queries — ${site} (last 90 days)\n`);
      console.log('  pos   clicks  impr   ctr     query');
      rows.forEach((r) =>
        console.log(
          `  ${r.position.toFixed(1).padStart(5)} ${String(r.clicks).padStart(6)} ` +
            `${String(r.impressions).padStart(6)} ${(r.ctr * 100).toFixed(1).padStart(5)}%  ${r.keys[0]}`
        )
      );
      if (!rows.length) console.log('  (no data yet — a new property can take days to populate)');
      return;
    }

    case 'pages': {
      const { site, rows } = await report(['page'], 50);
      console.log(`\nTop pages — ${site} (last 90 days)\n`);
      console.log('  pos   clicks  impr   page');
      rows.forEach((r) =>
        console.log(
          `  ${r.position.toFixed(1).padStart(5)} ${String(r.clicks).padStart(6)} ` +
            `${String(r.impressions).padStart(6)}  ${r.keys[0].replace('https://qr-generator.online', '')}`
        )
      );
      return;
    }

    case 'inspect': {
      // "No impressions" does not mean "not indexed" — a page can be indexed
      // and simply never rank high enough to be seen. Only the URL Inspection
      // API distinguishes the two, so check every sitemap URL directly.
      const site = await pickSite();
      const sitemap = fs.readFileSync(path.join('public', 'sitemap.xml'), 'utf8');
      const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      const only = flag('only');
      const list = only ? urls.filter((u) => u.includes(only)) : urls;

      console.log(`\nInspecting ${list.length} URL(s) against ${site}…`);
      console.log('(URL Inspection allows 2,000/day, 600/min — this stays well inside that)\n');

      const buckets = {};
      for (const url of list) {
        const body = await api('/v1/urlInspection/index:inspect', {
          method: 'POST',
          body: JSON.stringify({ inspectionUrl: url, siteUrl: site })
        }).catch((e) => ({ error: e.message }));

        const r = body?.inspectionResult?.indexStatusResult;
        const state = r?.coverageState || body?.error || 'unknown';
        const crawled = r?.lastCrawlTime ? r.lastCrawlTime.slice(0, 10) : 'never';
        const verdict = body?.inspectionResult?.indexStatusResult?.verdict || '?';
        (buckets[state] = buckets[state] || []).push(url.replace('https://qr-generator.online', '') || '/');
        console.log(
          `  ${verdict === 'PASS' ? '✓' : '✗'} ${String(crawled).padEnd(11)} ` +
            `${(url.replace('https://qr-generator.online', '') || '/').padEnd(36)} ${state}`
        );
        await new Promise((r2) => setTimeout(r2, 250)); // stay under the per-minute cap
      }

      console.log('\n── Summary ──');
      for (const [state, arr] of Object.entries(buckets).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`  ${String(arr.length).padStart(3)}  ${state}`);
      }
      console.log();
      return;
    }

    case 'export': {
      const queries = await report(['query'], 5000);
      const pages = await report(['page'], 1000);
      const pairs = await report(['page', 'query'], 5000);
      const out = {
        site: queries.site,
        range: dateRange(90),
        queries: queries.rows,
        pages: pages.rows,
        pageQueryPairs: pairs.rows
      };
      fs.writeFileSync('gsc-data.json', JSON.stringify(out, null, 2));
      console.log(
        `\n✅ Wrote gsc-data.json — ${queries.rows.length} queries, ` +
          `${pages.rows.length} pages, ${pairs.rows.length} page/query pairs.\n`
      );
      return;
    }

    default:
      console.log('Commands: auth | sites | queries | pages | inspect | export');
  }
}

main().catch((e) => {
  console.error('❌', e.message);
  process.exitCode = 1;
});
