/**
 * Per-page headings for the five templated long-form sections.
 *
 * These five H2s used to be hardcoded strings in scripts/prerender.js, so
 * "Core Capabilities & Enterprise Advantages" and four others appeared
 * byte-identical on all 39 long-form pages. The body copy beneath them is
 * genuinely unique (measured boilerplate ratio is ~21%), but identical
 * headings across 39 URLs read as mass-generated templating to both search
 * engines and human readers, and they waste the strongest on-page keyword slot
 * a section has.
 *
 * Tool and feature pages derive their headings from an entity label; blog and
 * company pages get explicit headings, because "How to Create a Privacy Policy
 * in 3 Steps" is not a sentence anyone wants.
 *
 * Shared by scripts/prerender.js and, via constants/richContent.ts, the React
 * components — so the static HTML and the rendered DOM stay in agreement.
 */

/** Entity label per tool/feature route, used to build headings. */
const ENTITY = {
  '/url-qr-code-generator': 'URL QR Code',
  '/wifi-qr-code-generator': 'WiFi QR Code',
  '/vcard-qr-code-generator': 'vCard QR Code',
  '/whatsapp-qr-code-generator': 'WhatsApp QR Code',
  '/facebook-qr-code-generator': 'Facebook QR Code',
  '/email-qr-code-generator': 'Email QR Code',
  '/sms-qr-code-generator': 'SMS QR Code',
  '/phone-qr-code-generator': 'Phone QR Code',
  '/location-qr-code-generator': 'Location QR Code',
  '/event-qr-code-generator': 'Event QR Code',
  '/crypto-qr-code-generator': 'Crypto QR Code',
  '/text-qr-code-generator': 'Text QR Code',
  '/googleform-qr-code-generator': 'Google Forms QR Code',
  '/instagram-qr-code-generator': 'Instagram QR Code',
  '/youtube-qr-code-generator': 'YouTube QR Code',
  '/linkedin-qr-code-generator': 'LinkedIn QR Code',
  '/twitter-qr-code-generator': 'X (Twitter) QR Code',
  '/tiktok-qr-code-generator': 'TikTok QR Code',
  '/telegram-qr-code-generator': 'Telegram QR Code',
  '/paypal-qr-code-generator': 'PayPal QR Code',
  '/upi-qr-code-generator': 'UPI QR Code',
  '/qr-code-with-logo': 'QR Code with a Logo',
  '/custom-qr-codes': 'Custom QR Code',
  '/colored-qr-code-generator': 'Colored QR Code',
  '/svg-qr-code-generator': 'SVG QR Code',
  '/high-resolution-qr-codes': 'High-Resolution QR Code',
  '/qr-code-scanner': 'QR Code Scanner',
  '/social-media-qr-code': 'Social Media QR Code',
  '/bulk-qr-code-generator': 'Bulk QR Code',
  '/app-store-qr-code-generator': 'App Store QR Code',
  '/pdf-qr-code-generator': 'PDF QR Code'
};

/** Plural form for the "where to use" heading, where the simple +s is wrong. */
const PLURAL = {
  '/qr-code-with-logo': 'QR Codes with Logos',
  '/custom-qr-codes': 'Custom QR Codes',
  '/high-resolution-qr-codes': 'High-Resolution QR Codes',
  '/twitter-qr-code-generator': 'X (Twitter) QR Codes',
  '/qr-code-scanner': 'the QR Code Scanner',
  '/bulk-qr-code-generator': 'Bulk QR Codes'
};

/** Blog and company pages, where the templated phrasing does not apply. */
const EXPLICIT = {
  '/': {
    steps: 'How to Make a QR Code in 3 Steps',
    features: 'What You Can Customize on Every QR Code',
    useCases: 'What People Use Our QR Codes For',
    faqs: 'QR Code Generator FAQ',
    bestPractices: 'Checklist Before You Print a QR Code'
  },
  '/pricing': {
    steps: 'How to Start Using the Free Plan',
    features: 'What the Free Plan Includes',
    useCases: 'Who Each Plan Suits Best',
    faqs: 'Pricing & Billing FAQ',
    bestPractices: 'What to Check Before Paying for a QR Tool'
  },
  '/faqs-qr-code-generator': {
    steps: 'How to Get an Answer Fast',
    features: 'Topics This Help Centre Covers',
    useCases: 'Common Situations We Get Asked About',
    faqs: 'Frequently Asked Questions',
    bestPractices: 'Troubleshooting Checklist'
  },
  '/about': {
    steps: 'How QR Generator Online Works',
    features: 'What Makes This Tool Different',
    useCases: 'Who Uses QR Generator Online',
    faqs: 'About QR Generator Online — FAQ',
    bestPractices: 'Our Commitments to You'
  },
  '/contact': {
    steps: 'How to Reach Support in 3 Steps',
    features: 'What Our Support Team Can Help With',
    useCases: 'Common Reasons People Get in Touch',
    faqs: 'Support & Contact FAQ',
    bestPractices: 'What to Include in Your Message'
  },
  '/privacy': {
    steps: 'How Your Data Is Handled, Step by Step',
    features: 'Our Privacy Guarantees',
    useCases: 'What This Means in Practice',
    faqs: 'Privacy & Data FAQ',
    bestPractices: 'How to Keep Your QR Data Private'
  },
  '/terms': {
    steps: 'Your Agreement in 3 Points',
    features: 'What You Are Permitted to Do',
    useCases: 'Commercial Use Explained',
    faqs: 'Terms of Service FAQ',
    bestPractices: 'Responsible Use Checklist'
  },
  '/blog': {
    steps: 'How to Use These Guides',
    features: 'What Our Guides Cover',
    useCases: 'Industries We Write About',
    faqs: 'QR Code Guides FAQ',
    bestPractices: 'Where to Start if You Are New to QR Codes'
  },
  '/blog/qr-codes-for-restaurants': {
    steps: 'How to Set Up a QR Menu in 3 Steps',
    features: 'What a Good QR Menu Needs',
    useCases: 'Where QR Menus Work Best in a Venue',
    faqs: 'Restaurant QR Menu FAQ',
    bestPractices: 'Checklist Before Printing Table Menus'
  },
  '/blog/printing-qr-codes-guide': {
    steps: 'How to Prepare a QR Code for Print',
    features: 'What Affects Print Scannability',
    useCases: 'QR Codes Across Print Formats',
    faqs: 'QR Code Printing FAQ',
    bestPractices: 'Pre-Press Checklist for QR Codes'
  },
  '/blog/vcard-qr-code-business-cards': {
    steps: 'How to Put a vCard on Your Business Card',
    features: 'What to Include on a Digital Card',
    useCases: 'Where Digital Business Cards Pay Off',
    faqs: 'vCard Business Card FAQ',
    bestPractices: 'Checklist Before Ordering Business Cards'
  },
  '/blog/qr-codes-for-real-estate': {
    steps: 'How to Add QR Codes to a Listing',
    features: 'What Listing QR Codes Should Link To',
    useCases: 'Where Agents Place QR Codes',
    faqs: 'Real Estate QR Code FAQ',
    bestPractices: 'Checklist for Yard Signs & Brochures'
  },
  '/blog/wifi-qr-codes-for-hospitality': {
    steps: 'How to Set Up Guest WiFi QR Codes',
    features: 'What Guest WiFi Codes Should Do',
    useCases: 'Where to Place WiFi Codes in a Property',
    faqs: 'Guest WiFi QR Code FAQ',
    bestPractices: 'Checklist for Hosts & Hotel Managers'
  }
};

/**
 * Returns the five section headings for a path.
 * Falls back to the original generic wording for any page not covered.
 */
export function getSectionHeadings(pathname) {
  if (EXPLICIT[pathname]) return EXPLICIT[pathname];

  const entity = ENTITY[pathname];
  if (!entity) {
    return {
      steps: 'How to Generate & Deploy (3-Step Practical Manual)',
      features: 'Core Capabilities & Enterprise Advantages',
      useCases: 'Cross-Industry Practical Applications',
      faqs: 'Comprehensive Technical & Practical FAQ',
      bestPractices: 'Production Checklist & Scanning Quality Assurance'
    };
  }

  const plural = PLURAL[pathname] || `${entity}s`;
  return {
    steps: `How to Create a ${entity} in 3 Steps`,
    features: `${entity} Features & Capabilities`,
    useCases: `Where to Use ${plural}`,
    faqs: `${entity} FAQ`,
    bestPractices: `${entity} Print & Scan Checklist`
  };
}
