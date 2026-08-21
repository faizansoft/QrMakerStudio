/**
 * SEO & Structured Data (JSON-LD) Utilities for QRGeneratorOnline
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItemSchema {
  question: string;
  answer: string;
}

/**
 * Safely injects or updates a JSON-LD script tag in document head.
 */
export const injectJSONLD = (id: string, schemaObject: object | object[]) => {
  if (typeof document === 'undefined') return;

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
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '2450',
    bestRating: '5'
  }
});
