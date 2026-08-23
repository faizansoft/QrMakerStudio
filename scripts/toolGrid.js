/**
 * The 22 QR types shown in the generator's tab strip and in the "All 22 QR
 * Code Generators" grid at the bottom of every tool page.
 *
 * `id` matches the tab ids in Home.tsx's TABS array (and therefore the
 * `tab_<id>_label` / `tab_<id>_desc` keys in scripts/uiStringsData.js);
 * `path` is the dedicated page each grid tile links to.
 *
 * Kept as plain JS, and deliberately WITHOUT the SVG icons that TABS carries,
 * so scripts/prerender.js can emit this grid into the static HTML. Before this
 * existed the grid was client-rendered only: 22 keyword-rich labels,
 * descriptions and internal links that no non-JS crawler — which is most LLM
 * ingest pipelines — could see.
 *
 * scripts/prerender.js asserts every path here exists in routeContent.js, so
 * this list cannot silently drift out of sync with the routes that ship.
 */

export const TOOL_GRID = [
  { id: 'url', path: '/url-qr-code-generator' },
  { id: 'pdf', path: '/pdf-qr-code-generator' },
  { id: 'text', path: '/text-qr-code-generator' },
  { id: 'vcard', path: '/vcard-qr-code-generator' },
  { id: 'wifi', path: '/wifi-qr-code-generator' },
  { id: 'email', path: '/email-qr-code-generator' },
  { id: 'sms', path: '/sms-qr-code-generator' },
  { id: 'phone', path: '/phone-qr-code-generator' },
  { id: 'whatsapp', path: '/whatsapp-qr-code-generator' },
  { id: 'facebook', path: '/facebook-qr-code-generator' },
  { id: 'location', path: '/location-qr-code-generator' },
  { id: 'event', path: '/event-qr-code-generator' },
  { id: 'crypto', path: '/crypto-qr-code-generator' },
  { id: 'googleform', path: '/googleform-qr-code-generator' },
  { id: 'instagram', path: '/instagram-qr-code-generator' },
  { id: 'youtube', path: '/youtube-qr-code-generator' },
  { id: 'linkedin', path: '/linkedin-qr-code-generator' },
  { id: 'twitter', path: '/twitter-qr-code-generator' },
  { id: 'tiktok', path: '/tiktok-qr-code-generator' },
  { id: 'telegram', path: '/telegram-qr-code-generator' },
  { id: 'paypal', path: '/paypal-qr-code-generator' },
  { id: 'upi', path: '/upi-qr-code-generator' }
];
