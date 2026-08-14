
# IDE Agent Brief — qr-generator.online SEO fixes

Everything below is verified against the live site on 2026-08-14. Hand it to your IDE agent as-is.

---

## CONTEXT FOR THE AGENT

You are fixing SEO defects in the website `qr-generator.online`. It is a client-side-rendered
React + Vite SPA: the server returns one static `index.html` shell (`<div id="app">`, bundle at
`/assets/index-*.js`) for every route, and all content is injected by JavaScript.

Facts established by fetching the live site — treat as ground truth, but confirm each against the
repo before editing:

- Raw HTML of `/` contains 0 body words, 0 `<a>` elements, and no `<h1>`.
- `/wifi-qr-code-generator` returns a byte-identical shell to `/`.
- Every route serves `<link rel="canonical" href="https://qr-generator.online/">` and
  `<meta property="og:url" content="https://qr-generator.online/">`.
- `<title>` is `QR Maker Studio: Create Free QR Codes` on every route.
- `<meta name="description">` is 170 characters, identical on every route.
- `sitemap.xml` lists 31 URLs; Ahrefs could only crawl 5.
- An unknown route (`/this-page-does-not-exist-xyz`) returns HTTP 200.
- `robots.txt` is fine: `User-agent: * / Allow: /` + sitemap reference.
- `https://www.qr-generator.online/` → `307` → apex. `http://qr-generator.online/` → `308` → https.

Rules:
- Do **not** invent copy. Where per-page text is needed, derive it from what the React route
  component already renders, or leave a clearly-marked `TODO` for a human.
- Do **not** change unrelated functionality, dependencies, or styling.
- Make each task a separate commit. Do not merge or deploy.

---

## TASK 1 — Per-route meta tags (canonical, title, description, og) — HIGHEST PRIORITY

**Problem:** every route claims to be a duplicate of the homepage via a hardcoded canonical. This
alone can keep all ~30 sub-pages out of Google's index.

**Do:**
1. Remove the hardcoded `<link rel="canonical">`, `<title>`, `<meta name="description">`, and the
   `og:*` / `twitter:*` URL+title+description tags from the static `index.html` head — or keep them
   strictly as homepage defaults only.
2. Add a per-route metadata layer. Preferred: `react-helmet-async` (or the project's existing head
   manager if one is present — check `package.json` first).
3. Create a single source of truth, e.g. `src/seo/routeMeta.ts`, mapping every route in
   `sitemap.xml` to `{ path, title, description, canonical }`. Canonical must be
   `https://qr-generator.online` + the route's own path, with no trailing slash except the root.
4. Render it from the shared layout so every route gets its own tags.

**Acceptance:** `/wifi-qr-code-generator` and `/pricing` each emit a canonical equal to their own
URL, and a unique `<title>`. No two routes share a canonical.

---

## TASK 2 — Make content crawlable (SSR or prerender)

**Problem:** this is the root cause of the Critical "no outgoing links" issue plus the missing-H1
and 7-word low-word-count warnings. Crawlers see an empty shell.

**Do — pick the lowest-risk option that fits the repo:**
- **Option A (recommended for a Vite SPA):** add build-time prerendering, e.g.
  `vite-plugin-prerender` / `puppeteer`-based prerender, or migrate the build to `vite-ssg`.
  Prerender **every** URL listed in `sitemap.xml` so each ships real HTML.
- **Option B:** if the host is Vercel/Netlify, enable their prerender/SSR adapter.
- **Option C (last resort, only if A and B are rejected):** server-side inject per-route
  `<h1>`, a short intro paragraph, and the nav link list into the shell.

Do not attempt a full Next.js migration.

**Acceptance:** `curl -s https://<preview-host>/wifi-qr-code-generator | grep -c '<h1'` returns ≥1,
and the same command for `<a ` returns a count matching the visible nav.

---

## TASK 3 — One `<h1>` per route

**Problem:** Ahrefs "H1 tag missing or empty" (Warning, 1 page — will apply to all ~30 once they're
crawlable).

**Do:** ensure every route component renders exactly one `<h1>` containing that page's primary
heading (e.g. `/wifi-qr-code-generator` → a WiFi-QR-specific heading). If a route currently styles
its heading as a `<div>`/`<span>`/`<h2>`, promote the top one to `<h1>` and keep styling identical
via classes. Never more than one `<h1>` per route.

**Acceptance:** every route has exactly 1 `<h1>` in rendered HTML; no visual change.

---

## TASK 4 — Shorten the meta description to ≤160 chars

**Problem:** Ahrefs "Meta description too long" — current homepage description is **170** chars and
will be truncated in the SERP.

Current value:
`Create free static and dynamic QR Codes using custom logos and colors. All-in-one tool to generate professional QR codes, customize them, and download in high resolution.`

**Do:** replace the homepage description with a version of **110–160 characters**. Suggested (150
chars, verify the count before committing):
`Create free static and dynamic QR codes with custom logos and colors. Generate, customize and download professional QR codes in high resolution.`

Apply per-route descriptions from Task 1's `routeMeta` map, each 110–160 chars.

**Acceptance:** no route emits a description outside 110–160 characters.

---

## TASK 5 — Real 404s instead of soft 404s

**Problem:** unknown routes return HTTP 200 with the app shell, so Google can index unlimited junk
URLs. Not in the Ahrefs list only because its crawler found no links to follow.

**Do:** add a catch-all route that returns a genuine **404 status** (host-level config: Vercel
`vercel.json`, Netlify `_redirects`, or the server framework in use) and renders a NotFound view
with `<meta name="robots" content="noindex">`.

**Acceptance:** `curl -o /dev/null -w "%{http_code}" https://<host>/nonexistent-xyz` → `404`.

---

## TASK 6 — Internal links in HTML

**Problem:** the Critical Ahrefs issue "Page has no outgoing links". The homepage's raw HTML has
zero `<a>` elements; the sitemap's 31 URLs are unreachable by crawl.

**Do:**
1. Verify navigation uses `<Link to>` / `<a href>` producing real `href` attributes — **not**
   `onClick={() => navigate(...)}` on a `div`/`button`. Convert any such handlers to real links.
2. Ensure the footer/nav exposes links to the main generator pages, `/blog`, `/pricing`, `/about`,
   `/contact`, `/privacy`, `/terms` — so every sitemap URL is reachable within ~2 clicks.
3. Combined with Task 2, those links must appear in the served HTML.

**Acceptance:** homepage HTML contains `<a href>` links covering the main sections; no sitemap URL
is orphaned.

---

## TASK 7 — `www` redirect: 307 → 301 (config, low priority)

**Problem:** Ahrefs "3XX redirect" (Warning, 2 pages). `http`→`https` is already a correct `308`.
But `https://www.qr-generator.online/` → apex uses **307 Temporary**, which does not consolidate
ranking signals as clearly as a permanent redirect.

**Do:** change the `www`→apex redirect to **301** (or 308) at the host/DNS layer — Vercel domain
redirect setting, Netlify `_redirects`, or Cloudflare rule. This is a hosting config change, not
code.

**Acceptance:** `curl -o /dev/null -w "%{http_code}" https://www.qr-generator.online/` → `301`/`308`.

---

## EXPLICITLY OUT OF SCOPE

- **"HTTP to HTTPS redirect"** (Notice) — already a correct 308. Do nothing.
- **"Redirected page has no incoming internal links"** (Warning) — this is the `www` variant;
  expected and correct. Do **not** add links to the `www` host.
- **"Pages to submit to IndexNow"** (Notice) — an action in the Ahrefs UI, not a code change.

---

## VERIFY (run after the work, before deploy)

```bash
HOST=https://qr-generator.online   # or your preview URL

for p in / /wifi-qr-code-generator /pricing /blog /url-qr-code-generator; do
  echo "== $p"
  curl -s "$HOST$p" \
    | grep -oE '<title>[^<]*|rel="canonical" href="[^"]*"|<h1[^>]*>' \
    | head -5
done

# soft-404 check — must be 404
curl -s -o /dev/null -w "404 check: %{http_code}\n" "$HOST/nonexistent-xyz"

# www redirect — must be 301 or 308
curl -s -o /dev/null -w "www: %{http_code}\n" https://www.qr-generator.online/
```

Expected: unique title + self-referencing canonical + one `<h1>` per route; `404`; `301`/`308`.
