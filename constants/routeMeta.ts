/**
 * Centralized Route Metadata Dictionary for QrMakerStudio (31 Routes)
 * 
 * Strict SEO Constraints (verified against Ahrefs guidelines):
 * 1. Title is unique for every route.
 * 2. Canonical is strictly `https://qr-generator.online` + path (no trailing slash except root).
 * 3. Meta description length is strictly between 110 and 160 characters.
 * 4. Every route has a clearly defined primary H1 heading.
 */

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  keywords?: string[];
  type?: 'website' | 'article';
}

export const ROUTE_METADATA: Record<string, RouteMeta> = {
  // ── 1. Homepage ──
  '/': {
    path: '/',
    title: 'Free QR Code Generator with Logo & Colors | QR Maker Studio',
    description: 'Create free static and dynamic QR codes with custom logos and colors. Generate, customize and download professional QR codes in high resolution.',
    canonical: 'https://qr-generator.online/',
    h1: 'Free Custom QR Code Generator with Logo & Vector SVG Export',
    keywords: ['free qr code generator', 'qr code maker', 'custom qr code with logo', 'qr generator online', 'svg qr code']
  },

  // ── 2. Tool Routes (13 Tools) ──
  '/url-qr-code-generator': {
    path: '/url-qr-code-generator',
    title: 'Free URL QR Code Generator | Custom Website Link QR Codes',
    description: 'Convert any website link or landing page into a custom QR code with logos and brand colors. Download in vector SVG or high-res PNG for free.',
    canonical: 'https://qr-generator.online/url-qr-code-generator',
    h1: 'Free URL QR Code Generator with Logo & SVG Vector Download',
    keywords: ['url qr code generator', 'website link qr code', 'free link to qr code', 'custom logo url qr code']
  },
  '/googleform-qr-code-generator': {
    path: '/googleform-qr-code-generator',
    title: 'Free Google Forms QR Code Generator | Survey & Feedback QR',
    description: 'Create free QR codes for Google Forms, surveys, and registrations. Add your logo and download vector SVG or PNG with unlimited instant scans.',
    canonical: 'https://qr-generator.online/googleform-qr-code-generator',
    h1: 'Free Google Forms QR Code Generator for Surveys & Sign-Ups',
    keywords: ['google forms qr code', 'survey qr code generator', 'feedback form qr code']
  },
  '/wifi-qr-code-generator': {
    path: '/wifi-qr-code-generator',
    title: 'Free WiFi QR Code Generator | Instant Connect Without Typing',
    description: 'Generate free WiFi QR codes for instant connection without typing passwords. Supports WPA, WPA2, and WEP with high-resolution downloads.',
    canonical: 'https://qr-generator.online/wifi-qr-code-generator',
    h1: 'Free WiFi QR Code Generator for Instant Mobile Network Connection',
    keywords: ['wifi qr code generator', 'connect wifi qr code', 'wifi password qr maker']
  },
  '/vcard-qr-code-generator': {
    path: '/vcard-qr-code-generator',
    title: 'Free vCard QR Code Generator | Digital Contact Business Cards',
    description: 'Create digital business card vCard QR codes. Share your phone, email, company, and social links instantly on smartphones with zero app needed.',
    canonical: 'https://qr-generator.online/vcard-qr-code-generator',
    h1: 'Free vCard QR Code Generator for Digital Business Cards & Contacts',
    keywords: ['vcard qr code generator', 'digital business card qr', 'contact qr code']
  },
  '/whatsapp-qr-code-generator': {
    path: '/whatsapp-qr-code-generator',
    title: 'Free WhatsApp QR Code Generator | Direct Chat & Support Link',
    description: 'Generate custom WhatsApp QR codes with pre-filled messages. Let customers start chats and reach your business instantly with one quick scan.',
    canonical: 'https://qr-generator.online/whatsapp-qr-code-generator',
    h1: 'Free WhatsApp QR Code Generator for Instant Chat & Support',
    keywords: ['whatsapp qr code generator', 'whatsapp chat qr', 'whatsapp link qr code']
  },
  '/facebook-qr-code-generator': {
    path: '/facebook-qr-code-generator',
    title: 'Free Social Media & Facebook QR Code Generator | QR Studio',
    description: 'Create free QR codes for Facebook pages, Instagram, TikTok, and social profiles. Grow your followers with custom branded QR codes in SVG & PNG.',
    canonical: 'https://qr-generator.online/facebook-qr-code-generator',
    h1: 'Free Social Media & Facebook QR Code Generator for Profiles',
    keywords: ['facebook qr code generator', 'social media qr code', 'instagram qr code']
  },
  '/email-qr-code-generator': {
    path: '/email-qr-code-generator',
    title: 'Free Email QR Code Generator | Pre-Filled Mailto Messages',
    description: 'Generate email QR codes with pre-filled recipient address, subject, and body text. Streamline customer inquiries and support requests for free.',
    canonical: 'https://qr-generator.online/email-qr-code-generator',
    h1: 'Free Email QR Code Generator for Pre-Filled Inquiries & Feedback',
    keywords: ['email qr code generator', 'mailto qr code', 'contact email qr']
  },
  '/phone-qr-code-generator': {
    path: '/phone-qr-code-generator',
    title: 'Free Phone Call QR Code Generator | Click-to-Call Barcodes',
    description: 'Create instant click-to-call phone QR codes. Enable customers to dial your sales or support line directly from flyers, posters, and packages.',
    canonical: 'https://qr-generator.online/phone-qr-code-generator',
    h1: 'Free Phone Call QR Code Generator for Direct Dialing & Support',
    keywords: ['phone call qr code', 'dial phone qr generator', 'click to call qr']
  },
  '/sms-qr-code-generator': {
    path: '/sms-qr-code-generator',
    title: 'Free SMS Text QR Code Generator | Pre-Composed Text Messages',
    description: 'Create SMS QR codes with pre-filled phone numbers and text messages. Perfect for marketing campaigns, opt-ins, customer surveys, and alerts.',
    canonical: 'https://qr-generator.online/sms-qr-code-generator',
    h1: 'Free SMS QR Code Generator with Pre-Filled Text Messages',
    keywords: ['sms qr code generator', 'text message qr code', 'prefilled sms qr']
  },
  '/location-qr-code-generator': {
    path: '/location-qr-code-generator',
    title: 'Free Location & Google Maps QR Code Generator | QR Studio',
    description: 'Create Google Maps location QR codes with custom coordinates. Guide customers directly to your store, office, or event venue with one scan.',
    canonical: 'https://qr-generator.online/location-qr-code-generator',
    h1: 'Free Location & Google Maps QR Code Generator for Directions',
    keywords: ['location qr code generator', 'google maps qr code', 'gps coordinates qr']
  },
  '/crypto-qr-code-generator': {
    path: '/crypto-qr-code-generator',
    title: 'Free Crypto QR Code Generator | Bitcoin & Ethereum Wallet QR',
    description: 'Generate secure cryptocurrency QR codes for Bitcoin, Ethereum, and crypto wallets. Prevent payment errors and receive transfers with ease.',
    canonical: 'https://qr-generator.online/crypto-qr-code-generator',
    h1: 'Free Cryptocurrency QR Code Generator for Crypto Wallet Transfers',
    keywords: ['crypto qr code generator', 'bitcoin wallet qr code', 'ethereum qr code']
  },
  '/text-qr-code-generator': {
    path: '/text-qr-code-generator',
    title: 'Free Plain Text QR Code Generator | Encode Raw Text & Notes',
    description: 'Convert plain text, notes, serial numbers, codes, or instructions into scannable QR codes. 100% offline scannable with zero internet needed.',
    canonical: 'https://qr-generator.online/text-qr-code-generator',
    h1: 'Free Plain Text QR Code Generator for Notes & Serial Numbers',
    keywords: ['plain text qr code generator', 'text to qr code', 'raw text qr code']
  },
  '/event-qr-code-generator': {
    path: '/event-qr-code-generator',
    title: 'Free Event & Calendar QR Code Generator | Save Date in 1 Scan',
    description: 'Generate calendar event QR codes with event title, location, date, and description. Let guests save appointments to their calendar instantly.',
    canonical: 'https://qr-generator.online/event-qr-code-generator',
    h1: 'Free Event & Calendar QR Code Generator for Invitations & RSVP',
    keywords: ['event qr code generator', 'calendar qr code', 'save date qr code']
  },

  // ── 3. Feature Landing Pages (5 Features) ──
  '/qr-code-with-logo': {
    path: '/qr-code-with-logo',
    title: 'Free QR Code Generator with Logo | Custom Branded QR Codes',
    description: 'Add your company logo or brand icon to the center of high-resolution QR codes. Boost scan rates, brand trust, and recognition in SVG & PNG.',
    canonical: 'https://qr-generator.online/qr-code-with-logo',
    h1: 'Free QR Code Generator with Custom Logo Integration',
    keywords: ['qr code with logo', 'add logo to qr code', 'branded qr code free', 'custom logo qr']
  },
  '/custom-qr-codes': {
    path: '/custom-qr-codes',
    title: 'Custom QR Code Generator | Design Unique Patterns & Frames',
    description: 'Design unique QR codes with custom dot patterns, corner square eyes, and color palettes. Create high-converting branded QR codes for free.',
    canonical: 'https://qr-generator.online/custom-qr-codes',
    h1: 'Custom QR Code Generator for Personalized Barcode Designs',
    keywords: ['custom qr codes', 'design custom qr code', 'qr code dot styles']
  },
  '/colored-qr-code-generator': {
    path: '/colored-qr-code-generator',
    title: 'Colored QR Code Generator | Custom Color Palettes & Styles',
    description: 'Create vibrant colored QR codes matching your brand guidelines. Customize foreground, background, and corner eye colors with vector SVG export.',
    canonical: 'https://qr-generator.online/colored-qr-code-generator',
    h1: 'Free Colored QR Code Generator with Custom Palettes & SVG Export',
    keywords: ['colored qr code generator', 'custom color qr codes', 'gradient qr code']
  },
  '/svg-qr-code-generator': {
    path: '/svg-qr-code-generator',
    title: 'Free SVG Vector QR Code Generator | Scalable for Print Media',
    description: 'Download crisp vector SVG QR codes with transparent backgrounds. Perfect for high-resolution billboards, posters, product packaging, and print.',
    canonical: 'https://qr-generator.online/svg-qr-code-generator',
    h1: 'Free SVG Vector QR Code Generator for High-Resolution Print Media',
    keywords: ['svg qr code generator', 'vector qr code free', 'scalable qr code print']
  },
  '/high-resolution-qr-codes': {
    path: '/high-resolution-qr-codes',
    title: 'High Resolution QR Code Generator | 4K HD PNG & Vector SVG',
    description: 'Generate high-resolution 4K HD PNG and vector SVG QR codes for professional commercial printing. 100% free with unlimited scans and no blur.',
    canonical: 'https://qr-generator.online/high-resolution-qr-codes',
    h1: 'High-Resolution 4K QR Code Generator for Professional Printing',
    keywords: ['high resolution qr code', 'hd qr code generator', 'print quality qr code']
  },

  // ── 4. Main Site Pages (6 Pages) ──
  '/pricing': {
    path: '/pricing',
    title: 'Free vs Pro QR Code Generator Pricing | QR Maker Studio',
    description: 'Explore 100% free QR code creation with unlimited scans and transparent Pro features for high-volume enterprise campaigns and dynamic links.',
    canonical: 'https://qr-generator.online/pricing',
    h1: 'Simple, Transparent Pricing with 100% Free Core Features',
    keywords: ['qr code generator pricing', 'free qr code maker', 'pro qr code plans']
  },
  '/faqs-qr-code-generator': {
    path: '/faqs-qr-code-generator',
    title: 'QR Code Generator FAQs | Answers to Common QR Questions',
    description: 'Get clear answers on static vs dynamic QR codes, logo embedding, vector SVG printing, scanning compatibility, and scan expiration policies.',
    canonical: 'https://qr-generator.online/faqs-qr-code-generator',
    h1: 'Frequently Asked Questions About QR Code Creation & Scanning',
    keywords: ['qr code faq', 'how do qr codes work', 'qr code expiration faq']
  },
  '/about': {
    path: '/about',
    title: 'About QR Maker Studio | Free, Secure & High-Res QR Creator',
    description: 'Learn about our mission to make high-resolution, privacy-focused, and beautiful QR code generation free and accessible to businesses worldwide.',
    canonical: 'https://qr-generator.online/about',
    h1: 'About QR Maker Studio — Free & Professional QR Code Solutions',
    keywords: ['about qr maker studio', 'qr code company', 'secure qr code generator']
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Support & Inquiries | QR Maker Studio Team',
    description: 'Have questions, feature requests, or enterprise inquiries? Contact the QR Maker Studio support team for prompt assistance and technical help.',
    canonical: 'https://qr-generator.online/contact',
    h1: 'Contact QR Maker Studio Support & Inquiries',
    keywords: ['contact qr maker studio', 'qr code support', 'qr generator help']
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy | QR Maker Studio Data Protection & Security',
    description: 'Read how QR Maker Studio protects your privacy. We process QR codes securely in your browser with zero tracking of personal encoded data.',
    canonical: 'https://qr-generator.online/privacy',
    h1: 'Privacy Policy & Data Protection at QR Maker Studio',
    keywords: ['privacy policy qr generator', 'secure qr code data protection']
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service | QR Maker Studio Fair Usage Agreement',
    description: 'Review our terms of service and usage guidelines for generating free and commercial QR codes on the QR Maker Studio platform.',
    canonical: 'https://qr-generator.online/terms',
    h1: 'Terms of Service & Platform Usage Guidelines',
    keywords: ['terms of service qr maker studio', 'qr code generator usage terms']
  },

  // ── 5. Blog Hub & Posts (6 Pages) ──
  '/blog': {
    path: '/blog',
    title: 'QR Code Marketing & Design Blog | Guides & Best Practices',
    description: 'Read actionable tutorials on QR code design, print best practices, restaurant digital menus, real estate marketing, and vCard business cards.',
    canonical: 'https://qr-generator.online/blog',
    h1: 'QR Code Marketing, Design & Technology Insights Blog',
    keywords: ['qr code blog', 'qr code marketing guides', 'qr code best practices']
  },
  '/blog/qr-codes-for-restaurants': {
    path: '/blog/qr-codes-for-restaurants',
    title: 'QR Code Menus for Restaurants: Complete 2026 Guide | QR Studio',
    description: 'Learn how digital QR menus cut printing costs by 90%, increase average order values by 15%, and boost table turnover rates for restaurants.',
    canonical: 'https://qr-generator.online/blog/qr-codes-for-restaurants',
    h1: 'How Restaurants & Cafes Increase Table Turnover with QR Code Menus',
    type: 'article',
    keywords: ['qr code menus for restaurants', 'digital menu qr code', 'contactless dining qr']
  },
  '/blog/printing-qr-codes-guide': {
    path: '/blog/printing-qr-codes-guide',
    title: 'Ultimate Guide to Printing QR Codes: Size, Resolution & SVG',
    description: 'Master QR code printing: learn minimum size calculation formulas, quiet zone rules, contrast ratios, and vector SVG vs raster PNG print formats.',
    canonical: 'https://qr-generator.online/blog/printing-qr-codes-guide',
    h1: 'The Ultimate Guide to Printing QR Codes: Sizing, Contrast & Vector SVG',
    type: 'article',
    keywords: ['printing qr codes guide', 'qr code print size calculation', 'svg vector qr print']
  },
  '/blog/vcard-qr-code-business-cards': {
    path: '/blog/vcard-qr-code-business-cards',
    title: 'How to Put a vCard QR Code on Business Cards (2026 Guide)',
    description: 'Discover how to design smart business cards with vCard QR codes. Share contact info with one tap and eliminate outdated paper business cards.',
    canonical: 'https://qr-generator.online/blog/vcard-qr-code-business-cards',
    h1: 'How to Create Digital Business Cards with vCard QR Codes',
    type: 'article',
    keywords: ['vcard qr code business cards', 'digital business card guide', 'smart business cards']
  },
  '/blog/qr-codes-for-real-estate': {
    path: '/blog/qr-codes-for-real-estate',
    title: 'QR Codes for Real Estate: Drive Property Inquiries & Tours',
    description: 'Discover how top real estate agents use QR codes on yard signs, flyers, and brochures to drive 3D virtual tours and capture qualified buyer leads.',
    canonical: 'https://qr-generator.online/blog/qr-codes-for-real-estate',
    h1: 'QR Codes for Real Estate: How to Drive Property Inquiries & Tours',
    type: 'article',
    keywords: ['qr codes for real estate', 'real estate yard sign qr', 'property virtual tour qr']
  },
  '/blog/wifi-qr-codes-for-hospitality': {
    path: '/blog/wifi-qr-codes-for-hospitality',
    title: 'WiFi QR Codes for Hotels, Cafes & Airbnb Hosts (2026 Guide)',
    description: 'Eliminate guest WiFi password complaints in hotels, cafes, and Airbnbs with custom branded WiFi QR codes. Instant connection with zero typing.',
    canonical: 'https://qr-generator.online/blog/wifi-qr-codes-for-hospitality',
    h1: 'WiFi QR Codes for Hotels, Cafes & Airbnb Hosts: Seamless Guest Access',
    type: 'article',
    keywords: ['wifi qr codes for hotels', 'airbnb wifi qr code', 'hospitality guest wifi qr']
  }
};

/**
 * Returns metadata for a given path or sensible fallback for 404
 */
export const getRouteMeta = (pathname: string): RouteMeta => {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  if (ROUTE_METADATA[cleanPath]) {
    return ROUTE_METADATA[cleanPath];
  }

  // 404 fallback
  return {
    path: cleanPath,
    title: 'Page Not Found | QR Maker Studio',
    description: 'The requested QR code generator page could not be found. Explore our free QR maker tools, vCard creator, and WiFi generators on the homepage.',
    canonical: `https://qr-generator.online${cleanPath}`,
    h1: '404 - Page Not Found'
  };
};
