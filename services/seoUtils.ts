/**
 * SEO & Structured Data (JSON-LD) Utilities for QRGeneratorOnline
 *
 * Duplicate-schema policy
 * -----------------------
 * scripts/prerender.js writes JSON-LD (WebApplication, BreadcrumbList, HowTo,
 * FAQPage) straight into the static HTML. The React app then injects its own
 * blocks on mount. Without a guard the page ends up declaring FAQPage twice
 * with different Q&A sets, which is a common cause of lost FAQ rich results.
 *
 * So: on boot we tag every unmanaged block as prerendered and record its
 * @type. injectJSONLD skips any @type already covered. The moment the user
 * navigates client-side those blocks describe the wrong URL, so they are
 * purged and React takes ownership from then on.
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItemSchema {
  question: string;
  answer: string;
}

const PRERENDERED_ATTR = 'data-prerendered-schema';

/** Pathname the prerendered markup was generated for, or null once purged. */
let prerenderedPath: string | null =
  typeof window !== 'undefined' ? window.location.pathname : null;

/** Collect every @type declared by a schema object (or array of them). */
const collectTypes = (schema: object | object[]): string[] => {
  const list = Array.isArray(schema) ? schema : [schema];
  return list
    .map((s) => (s as Record<string, unknown>)['@type'])
    .filter((t): t is string => typeof t === 'string');
};

/**
 * Tag the JSON-LD that shipped in the prerendered HTML. Runs once, lazily, so
 * it cannot race the first injectJSONLD call.
 */
let indexed = false;
const indexPrerenderedSchema = () => {
  if (indexed || typeof document === 'undefined') return;
  indexed = true;

  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    // Anything React created carries an id; anything else came from the build.
    if (el.id) return;
    try {
      const parsed = JSON.parse(el.textContent || '{}');
      const types = collectTypes(parsed);
      if (types.length) el.setAttribute(PRERENDERED_ATTR, types.join(','));
    } catch {
      /* malformed block — leave it untouched rather than guess */
    }
  });
};

/** Drop prerendered blocks once they no longer describe the current URL. */
export const purgeStalePrerenderedSchema = (currentPath: string) => {
  if (typeof document === 'undefined') return;
  indexPrerenderedSchema();
  if (prerenderedPath === null || currentPath === prerenderedPath) return;

  document.querySelectorAll(`[${PRERENDERED_ATTR}]`).forEach((el) => el.remove());
  prerenderedPath = null;
};

/**
 * schema.org subtypes that already satisfy a broader type.
 *
 * The prerenderer emits WebApplication; the client separately builds a
 * SoftwareApplication for the same tool. Because the @type strings differ,
 * the plain equality check let both through — two schema entities describing
 * one app, which is exactly the redundancy that muddies entity resolution for
 * rich results and LLM ingest. WebApplication IS-A SoftwareApplication, so the
 * narrower one already covers the broader one.
 */
const TYPE_COVERS: Record<string, string[]> = {
  SoftwareApplication: ['WebApplication', 'MobileApplication'],
  CreativeWork: ['WebPage', 'Article', 'BlogPosting'],
  WebPage: ['FAQPage']
};

const covers = (existing: Set<string>, wanted: string): boolean =>
  (TYPE_COVERS[wanted] || []).some((sub) => existing.has(sub));

const prerenderedTypes = (): Set<string> => {
  const set = new Set<string>();
  if (typeof document === 'undefined' || prerenderedPath === null) return set;
  document.querySelectorAll(`[${PRERENDERED_ATTR}]`).forEach((el) => {
    (el.getAttribute(PRERENDERED_ATTR) || '').split(',').forEach((t) => set.add(t));
  });
  return set;
};

/**
 * Injects or updates a JSON-LD script tag, unless the prerendered HTML already
 * declares the same @type for this URL.
 */
export const injectJSONLD = (id: string, schemaObject: object | object[]) => {
  if (typeof document === 'undefined') return;
  indexPrerenderedSchema();

  const existingTypes = prerenderedTypes();
  const types = collectTypes(schemaObject);
  if (types.length && types.every((t) => existingTypes.has(t) || covers(existingTypes, t))) {
    // Already covered by the static HTML — injecting would duplicate it.
    return;
  }

  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObject, null, 2);
};

/**
 * Removes a JSON-LD script tag by ID.
 */
export const removeJSONLD = (id: string) => {
  if (typeof document === 'undefined') return;
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
};

/**
 * Organization Schema
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QR Generator Online',
  url: 'https://qr-generator.online',
  logo: 'https://qr-generator.online/logo.png',
  description: 'Create free static and dynamic QR Codes using custom logos and colors.',
  sameAs: [
    'https://qr-generator.online'
  ]
});

/**
 * WebSite Schema with SearchAction
 */
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'QR Generator Online',
  url: 'https://qr-generator.online',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://qr-generator.online/faqs-qr-code-generator?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});

/**
 * BreadcrumbList Schema
 */
export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `https://qr-generator.online${item.url}`
  }))
});

/**
 * FAQPage Schema
 */
export const getFAQSchema = (faqs: FAQItemSchema[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer.replace(/<[^>]*>?/gm, '') // Strip HTML tags for clean schema text
    }
  }))
});

/**
 * SoftwareApplication Schema for specific QR Code Generator Tools
 *
 * Deliberately carries no aggregateRating: the site collects no reviews, and
 * review markup without corresponding on-page reviews violates Google's
 * structured data policy and risks a manual action.
 */
export const getToolSoftwareSchema = (
  toolName: string,
  toolPath: string,
  description: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: `${toolName} - QR Generator Online`,
  url: `https://qr-generator.online${toolPath}`,
  description: description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
});
