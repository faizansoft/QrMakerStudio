import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOOL_RICH_DATA } from './toolRichData.js';
import { FEATURE_RICH_DATA } from './featureRichData.js';
import { BLOG_RICH_DATA } from './blogRichData.js';
import { COMPANY_RICH_DATA } from './companyRichData.js';

const ALL_RICH_DATA = {
  ...TOOL_RICH_DATA,
  ...FEATURE_RICH_DATA,
  ...BLOG_RICH_DATA,
  ...COMPANY_RICH_DATA
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Full route definitions for all 31 routes with rich body copy & headings
const ROUTES = [
  {
    path: '/',
    title: 'Free QR Code Generator with Logo & Colors | QR Maker Studio',
    description: 'Create free static and dynamic QR codes with custom logos and colors. Generate, customize and download professional QR codes in high resolution.',
    canonical: 'https://qr-generator.online/',
    h1: 'Free Custom QR Code Generator with Logo & Vector SVG Export',
    badge: 'Free Online QR Generator',
    lead: 'Generate high-resolution QR codes with custom colors, dot patterns, frames, and company logos. 100% free with unlimited scans and zero expiration.',
    sections: [
      {
        title: 'Why Choose QR Maker Studio?',
        paragraphs: [
          'QR Maker Studio is the web’s most flexible, privacy-focused, and 100% free QR code generator. Whether you need a simple link for a marketing flyer, a digital business card, or instant guest WiFi access, our platform creates professional, scannable QR codes in seconds.',
          'Unlike other tools that lock high-resolution downloads behind paywalls or expire your codes after 14 days, all static QR codes created on QR Maker Studio remain permanent and functional forever with unlimited scans.'
        ]
      },
      {
        title: 'Complete Customization Options',
        paragraphs: [
          'Customize every detail of your QR code to match your corporate brand identity. Choose from multiple dot styling patterns, outer corner square shapes, inner eye accents, custom color gradients, and center-embedded logos.',
          'Export your designs in print-ready vector SVG format for large billboard advertising or crisp high-resolution PNG for digital social media campaigns.'
        ]
      }
    ]
  },
  {
    path: '/url-qr-code-generator',
    title: 'Free URL QR Code Generator | Custom Website Link QR Codes',
    description: 'Convert any website link or landing page into a custom QR code with logos and brand colors. Download in vector SVG or high-res PNG for free.',
    canonical: 'https://qr-generator.online/url-qr-code-generator',
    h1: 'Free URL QR Code Generator with Logo & SVG Vector Download',
    badge: 'Website Link QR Code',
    lead: 'Convert any website link, landing page, portfolio, or online catalog into a custom, high-resolution QR Code instantly.',
    sections: [
      {
        title: 'Connect Offline Audiences to Any Online Destination',
        paragraphs: [
          'A URL QR Code bridges the gap between physical marketing collateral and your digital online presence. Users simply point their smartphone camera at your code to open web links, promo pages, or digital menus without typing long URLs.',
          'Our URL QR codes support full design customization including custom brand colors, unique dot shapes, and high-resolution vector SVG exports for commercial printing.'
        ]
      }
    ]
  },
  {
    path: '/wifi-qr-code-generator',
    title: 'Free WiFi QR Code Generator | Instant Connect Without Typing',
    description: 'Generate free WiFi QR codes for instant connection without typing passwords. Supports WPA, WPA2, and WEP with high-resolution downloads.',
    canonical: 'https://qr-generator.online/wifi-qr-code-generator',
    h1: 'Free WiFi QR Code Generator for Instant Mobile Network Connection',
    badge: 'WiFi Network QR Code',
    lead: 'Allow guests, clients, and customers to connect to your WiFi network instantly by scanning a QR code without ever typing complex passwords.',
    sections: [
      {
        title: 'Seamless WiFi Access for Homes, Cafes & Offices',
        paragraphs: [
          'Eliminate password sharing frustration. When guests scan your WiFi QR code using their iPhone or Android camera, their device automatically prompts them to join your wireless network.',
          'Supports all standard wireless network security protocols including WPA/WPA2, WEP, and Open unencrypted networks. Download your printable WiFi tent card in crisp vector SVG or HD PNG.'
        ]
      }
    ]
  },
  {
    path: '/vcard-qr-code-generator',
    title: 'Free vCard QR Code Generator | Digital Contact Business Cards',
    description: 'Create digital business card vCard QR codes. Share your phone, email, company, and social links instantly on smartphones with zero app needed.',
    canonical: 'https://qr-generator.online/vcard-qr-code-generator',
    h1: 'Free vCard QR Code Generator for Digital Business Cards & Contacts',
    badge: 'Digital Contact Card',
    lead: 'Share your phone number, email address, job title, company website, and social links directly into any smartphone address book.',
    sections: [
      {
        title: 'Modern Digital Networking for Professionals',
        paragraphs: [
          'Never run out of paper business cards again. A vCard QR code instantly transfers your complete professional contact card into the scanner’s mobile phone with one tap.',
          'Include full name, organization, job title, work phone, mobile, email address, website, and physical address. Perfect for business cards, resumes, email signatures, and conference badges.'
        ]
      }
    ]
  },
  {
    path: '/googleform-qr-code-generator',
    title: 'Free Google Forms QR Code Generator | Survey & Feedback QR',
    description: 'Create free QR codes for Google Forms, surveys, and registrations. Add your logo and download vector SVG or PNG with unlimited instant scans.',
    canonical: 'https://qr-generator.online/googleform-qr-code-generator',
    h1: 'Free Google Forms QR Code Generator for Surveys & Sign-Ups',
    badge: 'Forms & Surveys',
    lead: 'Connect respondents directly to your Google Forms surveys, feedback forms, and event registrations with one quick smartphone scan.',
    sections: [
      {
        title: 'Maximize Survey and Feedback Response Rates',
        paragraphs: [
          'Placing a Google Forms QR code on product packaging, receipts, event signage, or presentation slides allows audiences to complete questionnaires instantly on their mobile devices.',
          'Eliminate manual data entry errors and increase customer response rates with direct, friction-free access.'
        ]
      }
    ]
  },
  {
    path: '/whatsapp-qr-code-generator',
    title: 'Free WhatsApp QR Code Generator | Direct Chat & Support Link',
    description: 'Generate custom WhatsApp QR codes with pre-filled messages. Let customers start chats and reach your business instantly with one quick scan.',
    canonical: 'https://qr-generator.online/whatsapp-qr-code-generator',
    h1: 'Free WhatsApp QR Code Generator for Instant Chat & Support',
    badge: 'Direct Messaging',
    lead: 'Enable customers to open a direct WhatsApp chat with your support or sales team with an optional pre-filled introductory message.',
    sections: [
      {
        title: 'Direct Customer Communication & Support',
        paragraphs: [
          'Start conversational marketing and customer support with zero friction. Scanning opens WhatsApp directly to a pre-addressed chat with pre-written text ready to send.',
          'Ideal for customer service desks, restaurant reservations, product inquiry posters, and e-commerce packaging.'
        ]
      }
    ]
  },
  {
    path: '/facebook-qr-code-generator',
    title: 'Free Social Media & Facebook QR Code Generator | QR Studio',
    description: 'Create free QR codes for Facebook pages, Instagram, TikTok, and social profiles. Grow your followers with custom branded QR codes in SVG & PNG.',
    canonical: 'https://qr-generator.online/facebook-qr-code-generator',
    h1: 'Free Social Media & Facebook QR Code Generator for Profiles',
    badge: 'Social Media Growth',
    lead: 'Drive followers and engagement by routing users directly to your Facebook page, Instagram profile, YouTube channel, or TikTok.',
    sections: [
      {
        title: 'Grow Your Social Media Audience Everywhere',
        paragraphs: [
          'Make it easy for in-store customers and event attendees to find and follow your brand across social media channels without manual username searches.',
          'Embed official platform icons into the center of your QR codes to increase brand recognition and scan conversion rates.'
        ]
      }
    ]
  },
  {
    path: '/email-qr-code-generator',
    title: 'Free Email QR Code Generator | Pre-Filled Mailto Messages',
    description: 'Generate email QR codes with pre-filled recipient address, subject, and body text. Streamline customer inquiries and support requests for free.',
    canonical: 'https://qr-generator.online/email-qr-code-generator',
    h1: 'Free Email QR Code Generator for Pre-Filled Inquiries & Feedback',
    badge: 'Email Mailto QR',
    lead: 'Make contacting your business effortless by opening a pre-addressed email draft with subject line and body text ready to send.',
    sections: [
      {
        title: 'Streamline Customer Feedback & Contact Inquiries',
        paragraphs: [
          'When users scan an email QR code, their default email app opens with your support address, custom subject, and body message template pre-populated.',
          'Perfect for product feedback, customer warranty registrations, job application posters, and technical support.'
        ]
      }
    ]
  },
  {
    path: '/phone-qr-code-generator',
    title: 'Free Phone Call QR Code Generator | Click-to-Call Barcodes',
    description: 'Create instant click-to-call phone QR codes. Enable customers to dial your sales or support line directly from flyers, posters, and packages.',
    canonical: 'https://qr-generator.online/phone-qr-code-generator',
    h1: 'Free Phone Call QR Code Generator for Direct Dialing & Support',
    badge: 'Instant Dialing',
    lead: 'Enable immediate telephone dialing on any mobile device when users scan your posters, business cards, brochures, or storefront signs.',
    sections: [
      {
        title: 'One-Tap Dialing for Emergency and Customer Support',
        paragraphs: [
          'Scanning a phone QR code immediately prompts the mobile device’s native dialer with your exact telephone number ready to call.',
          'Eliminates dialing mistakes and saves time for urgent hotline support, reservations, and roadside assistance.'
        ]
      }
    ]
  },
  {
    path: '/sms-qr-code-generator',
    title: 'Free SMS Text QR Code Generator | Pre-Composed Text Messages',
    description: 'Create SMS QR codes with pre-filled phone numbers and text messages. Perfect for marketing campaigns, opt-ins, customer surveys, and alerts.',
    canonical: 'https://qr-generator.online/sms-qr-code-generator',
    h1: 'Free SMS QR Code Generator with Pre-Filled Text Messages',
    badge: 'SMS Marketing',
    lead: 'Streamline SMS opt-ins, contest entries, and customer communication with pre-formatted text messages ready to send in one tap.',
    sections: [
      {
        title: 'Direct SMS Lead Generation & Marketing Opt-Ins',
        paragraphs: [
          'Pre-fill destination phone numbers and keyword triggers (such as "JOIN" or "DISCOUNT") so customers can subscribe to text updates in a single click.',
          'Ideal for retail promotions, VIP club registrations, and sweepstake contests.'
        ]
      }
    ]
  },
  {
    path: '/location-qr-code-generator',
    title: 'Free Location & Google Maps QR Code Generator | QR Studio',
    description: 'Create Google Maps location QR codes with custom coordinates. Guide customers directly to your store, office, or event venue with one scan.',
    canonical: 'https://qr-generator.online/location-qr-code-generator',
    h1: 'Free Location & Google Maps QR Code Generator for Directions',
    badge: 'Google Maps Navigation',
    lead: 'Guide clients, guests, and delivery drivers directly to your physical address or GPS coordinates using Google Maps navigation.',
    sections: [
      {
        title: 'Turn-by-Turn Directions for Stores and Venues',
        paragraphs: [
          'Print location QR codes on invitations, flyers, real estate signs, or business cards to provide instant GPS navigation to your doorstep.',
          'Compatible with Google Maps, Apple Maps, and standard navigation apps on iOS and Android.'
        ]
      }
    ]
  },
  {
    path: '/crypto-qr-code-generator',
    title: 'Free Crypto QR Code Generator | Bitcoin & Ethereum Wallet QR',
    description: 'Generate secure cryptocurrency QR codes for Bitcoin, Ethereum, and crypto wallets. Prevent payment errors and receive transfers with ease.',
    canonical: 'https://qr-generator.online/crypto-qr-code-generator',
    h1: 'Free Cryptocurrency QR Code Generator for Crypto Wallet Transfers',
    badge: 'Crypto Wallet QR',
    lead: 'Prevent costly crypto transfer typos by generating scannable QR codes for Bitcoin, Ethereum, USDT, and popular wallet addresses.',
    sections: [
      {
        title: 'Error-Free Cryptocurrency Payments & Donations',
        paragraphs: [
          'Cryptocurrency wallet addresses are long and prone to manual copy-paste mistakes. QR codes ensure 100% address accuracy during point-of-sale transactions or online donations.',
          'Works seamlessly with MetaMask, Trust Wallet, Coinbase Wallet, and all leading crypto apps.'
        ]
      }
    ]
  },
  {
    path: '/text-qr-code-generator',
    title: 'Free Plain Text QR Code Generator | Encode Raw Text & Notes',
    description: 'Convert plain text, notes, serial numbers, codes, or instructions into scannable QR codes. 100% offline scannable with zero internet needed.',
    canonical: 'https://qr-generator.online/text-qr-code-generator',
    h1: 'Free Plain Text QR Code Generator for Notes & Serial Numbers',
    badge: 'Offline Text QR',
    lead: 'Encode notes, alphanumeric serial numbers, product codes, or instructions into offline-readable QR codes.',
    sections: [
      {
        title: '100% Offline Scannable Text & Data Encoding',
        paragraphs: [
          'Plain text QR codes store alphanumeric data directly inside the barcode pattern. Scanning works instantly even without mobile data or internet connection.',
          'Great for warehouse inventory labeling, equipment instructions, serial tracking, and secret messages.'
        ]
      }
    ]
  },
  {
    path: '/event-qr-code-generator',
    title: 'Free Event & Calendar QR Code Generator | Save Date in 1 Scan',
    description: 'Generate calendar event QR codes with event title, location, date, and description. Let guests save appointments to their calendar instantly.',
    canonical: 'https://qr-generator.online/event-qr-code-generator',
    h1: 'Free Event & Calendar QR Code Generator for Invitations & RSVP',
    badge: 'Calendar Event QR',
    lead: 'Enable attendees to add webinars, weddings, conferences, or appointments directly to their Apple or Google Calendar with one scan.',
    sections: [
      {
        title: 'Boost Event Attendance with One-Tap Calendar Sync',
        paragraphs: [
          'Add event QR codes to save-the-date cards, conference badges, ticket confirmations, or webinar landing pages.',
          'Includes event title, start and end timestamps, venue address, and description notes.'
        ]
      }
    ]
  },
  {
    path: '/qr-code-with-logo',
    title: 'Free QR Code Generator with Logo | Custom Branded QR Codes',
    description: 'Add your company logo or brand icon to the center of high-resolution QR codes. Boost scan rates, brand trust, and recognition in SVG & PNG.',
    canonical: 'https://qr-generator.online/qr-code-with-logo',
    h1: 'Free QR Code Generator with Custom Logo Integration',
    badge: 'Branded QR Codes',
    lead: 'Embed your company logo, brand icon, or profile headshot directly into high-resolution QR Codes for maximum brand recognition.',
    sections: [
      {
        title: 'Why Branded QR Codes Get Up to 30% More Scans',
        paragraphs: [
          'Unbranded generic QR codes can look suspicious or uninviting. Embedding your official company logo gives users confidence in the authenticity and safety of the destination link.',
          'Our generator uses Level H error correction (30% redundancy) to guarantee flawless scanning reliability while showcasing your brand.'
        ]
      }
    ]
  },
  {
    path: '/custom-qr-codes',
    title: 'Custom QR Code Generator | Design Unique Patterns & Frames',
    description: 'Design unique QR codes with custom dot patterns, corner square eyes, and color palettes. Create high-converting branded QR codes for free.',
    canonical: 'https://qr-generator.online/custom-qr-codes',
    h1: 'Custom QR Code Generator for Personalized Barcode Designs',
    badge: 'Custom Design',
    lead: 'Transform boring black-and-white barcodes into stunning branded visual assets with custom dot patterns, corner shapes, and frames.',
    sections: [
      {
        title: 'Stand Out with Beautiful Visual QR Code Styling',
        paragraphs: [
          'Choose between rounded dots, dots with outlines, geometric square pixels, and artistic styles. Customize outer corner squares and center dots independently.',
          'Generate high-converting marketing materials that look modern, professional, and visually engaging.'
        ]
      }
    ]
  },
  {
    path: '/colored-qr-code-generator',
    title: 'Colored QR Code Generator | Custom Color Palettes & Styles',
    description: 'Create vibrant colored QR codes matching your brand guidelines. Customize foreground, background, and corner eye colors with vector SVG export.',
    canonical: 'https://qr-generator.online/colored-qr-code-generator',
    h1: 'Free Colored QR Code Generator with Custom Palettes & SVG Export',
    badge: 'Color Palettes',
    lead: 'Match your exact brand color scheme with custom foreground dots, background colors, and corner eye tints in high resolution.',
    sections: [
      {
        title: 'Vibrant Colors Tailored to Your Visual Identity',
        paragraphs: [
          'Say goodbye to monochromatic barcodes. Pick any hex color code for the foreground pattern, corner eye frames, and background canvas.',
          'Built-in contrast optimization ensures your QR code maintains high contrast for quick camera focus and instant scanning.'
        ]
      }
    ]
  },
  {
    path: '/svg-qr-code-generator',
    title: 'Free SVG Vector QR Code Generator | Scalable for Print Media',
    description: 'Download crisp vector SVG QR codes with transparent backgrounds. Perfect for high-resolution billboards, posters, product packaging, and print.',
    canonical: 'https://qr-generator.online/svg-qr-code-generator',
    h1: 'Free SVG Vector QR Code Generator for High-Resolution Print Media',
    badge: 'Vector SVG Format',
    lead: 'Export infinitely scalable vector SVG QR codes that maintain flawless crispness from business cards to giant roadside billboards.',
    sections: [
      {
        title: 'The Gold Standard for Professional Commercial Printing',
        paragraphs: [
          'Unlike pixelated raster PNG or JPEG images, vector SVG files never blur when scaled to large print formats.',
          'Easily import SVG files into Adobe Illustrator, Photoshop, InDesign, Figma, or Canva for graphic design workflows.'
        ]
      }
    ]
  },
  {
    path: '/high-resolution-qr-codes',
    title: 'High Resolution QR Code Generator | 4K HD PNG & Vector SVG',
    description: 'Generate high-resolution 4K HD PNG and vector SVG QR codes for professional commercial printing. 100% free with unlimited scans and no blur.',
    canonical: 'https://qr-generator.online/high-resolution-qr-codes',
    h1: 'High-Resolution 4K QR Code Generator for Professional Printing',
    badge: '4K HD Resolution',
    lead: 'Generate ultra-high-resolution 4K PNG and SVG files engineered specifically for professional offset and digital commercial printing.',
    sections: [
      {
        title: 'Flawless Clarity for Packaging, Menus, and Signage',
        paragraphs: [
          'High DPI resolution prevents blurry edges and scanning failures on glossy print surfaces, textured packaging, or low-light environments.',
          'Export crystal-clear QR codes with transparent backgrounds ready for immediate placement on marketing collateral.'
        ]
      }
    ]
  },
  {
    path: '/pricing',
    title: 'Free vs Pro QR Code Generator Pricing | QR Maker Studio',
    description: 'Explore 100% free QR code creation with unlimited scans and transparent Pro features for high-volume enterprise campaigns and dynamic links.',
    canonical: 'https://qr-generator.online/pricing',
    h1: 'Simple, Transparent Pricing with 100% Free Core Features',
    badge: 'Transparent Plans',
    lead: 'Generate unlimited static QR codes 100% free forever, or upgrade for dynamic editable URLs, scan analytics, and bulk creation.',
    sections: [
      {
        title: 'Free Forever vs Enterprise Pro Features',
        paragraphs: [
          'Our Core Free Plan provides unlimited static QR code generation across all 13 tool types with no scan limits, no watermarks, and vector SVG exports at zero cost.',
          'For marketing teams and enterprises needing editable dynamic URLs, password protection, and detailed scan analytics, our Pro tier offers flexible, affordable billing.'
        ]
      }
    ]
  },
  {
    path: '/faqs-qr-code-generator',
    title: 'QR Code Generator FAQs | Answers to Common QR Questions',
    description: 'Get clear answers on static vs dynamic QR codes, logo embedding, vector SVG printing, scanning compatibility, and scan expiration policies.',
    canonical: 'https://qr-generator.online/faqs-qr-code-generator',
    h1: 'Frequently Asked Questions About QR Code Creation & Scanning',
    badge: 'Help & FAQ Guide',
    lead: 'Find authoritative answers to common questions regarding QR code expiration, print resolution, error correction, and logo customization.',
    sections: [
      {
        title: 'Frequently Asked Questions & Technical Advice',
        paragraphs: [
          'Do static QR codes expire? No, static QR codes created on QR Maker Studio contain raw data and will never expire as long as your destination link remains active.',
          'What is the best format for print? Vector SVG is the recommended format for commercial printing as it scales to any physical dimension without pixelation or quality loss.'
        ]
      }
    ]
  },
  {
    path: '/about',
    title: 'About QR Maker Studio | Free, Secure & High-Res QR Creator',
    description: 'Learn about our mission to make high-resolution, privacy-focused, and beautiful QR code generation free and accessible to businesses worldwide.',
    canonical: 'https://qr-generator.online/about',
    h1: 'About QR Maker Studio — Free & Professional QR Code Solutions',
    badge: 'Our Mission & Story',
    lead: 'Our mission is to empower individuals and businesses with fast, secure, beautiful, and completely free QR code creation tools.',
    sections: [
      {
        title: 'Building Privacy-First Barcode Technology',
        paragraphs: [
          'QR Maker Studio was built to solve the frustration of paywalled, predatory QR generators that hold user links hostage after free trials.',
          'All static generation is processed 100% in your browser without logging personal contact info or sensitive WiFi credentials on our servers.'
        ]
      }
    ]
  },
  {
    path: '/contact',
    title: 'Contact Support & Inquiries | QR Maker Studio Team',
    description: 'Have questions, feature requests, or enterprise inquiries? Contact the QR Maker Studio support team for prompt assistance and technical help.',
    canonical: 'https://qr-generator.online/contact',
    h1: 'Contact QR Maker Studio Support & Inquiries',
    badge: 'Support & Inquiries',
    lead: 'We are here to help with questions about custom designs, vector printing formats, enterprise integrations, or feature requests.',
    sections: [
      {
        title: 'Reach Out to Our Engineering & Support Team',
        paragraphs: [
          'Have questions regarding custom QR code formats, printing best practices, or bulk generation? Send us an email at support@qr-generator.online.',
          'Our technical support team responds to all inquiries within 24 business hours.'
        ]
      }
    ]
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | QR Maker Studio Data Protection & Security',
    description: 'Read how QR Maker Studio protects your privacy. We process QR codes securely in your browser with zero tracking of personal encoded data.',
    canonical: 'https://qr-generator.online/privacy',
    h1: 'Privacy Policy & Data Protection at QR Maker Studio',
    badge: 'Privacy & Security',
    lead: 'Your privacy is paramount. Learn how our client-side generator ensures your contact details, passwords, and link data remain secure.',
    sections: [
      {
        title: 'Client-Side Data Processing & Zero Storage',
        paragraphs: [
          'QR Maker Studio processes static QR code generation locally in your web browser. We do not store, harvest, or sell the text, passwords, or contact info you encode.',
          'We adhere strictly to international data privacy regulations including GDPR and CCPA.'
        ]
      }
    ]
  },
  {
    path: '/terms',
    title: 'Terms of Service | QR Maker Studio Fair Usage Agreement',
    description: 'Review our terms of service and usage guidelines for generating free and commercial QR codes on the QR Maker Studio platform.',
    canonical: 'https://qr-generator.online/terms',
    h1: 'Terms of Service & Platform Usage Guidelines',
    badge: 'Terms of Service',
    lead: 'Review terms and conditions governing the generation, distribution, and commercial usage of QR codes created on QR Maker Studio.',
    sections: [
      {
        title: 'Fair Usage & Commercial Distribution Terms',
        paragraphs: [
          'Static QR codes generated through QR Maker Studio can be used freely for both personal and commercial purposes across print and digital media.',
          'Users are responsible for ensuring that encoded content complies with applicable legal standards.'
        ]
      }
    ]
  },
  {
    path: '/blog',
    title: 'QR Code Marketing & Design Blog | Guides & Best Practices',
    description: 'Read actionable tutorials on QR code design, print best practices, restaurant digital menus, real estate marketing, and vCard business cards.',
    canonical: 'https://qr-generator.online/blog',
    h1: 'QR Code Marketing, Design & Technology Insights Blog',
    badge: 'Knowledge Hub & Articles',
    lead: 'Expert guides, actionable strategies, and print design tutorials to help you maximize scan rates and customer engagement with QR codes.',
    sections: [
      {
        title: 'Practical QR Code Guides for Business Growth',
        paragraphs: [
          'Explore our library of detailed tutorials covering restaurant menu optimization, minimum print sizing formulas, real estate yard sign lead generation, and hospitality guest WiFi setups.',
          'Learn how modern brands leverage QR technology to drive offline-to-online engagement.'
        ]
      }
    ]
  },
  {
    path: '/blog/qr-codes-for-restaurants',
    title: 'QR Code Menus for Restaurants: Complete 2026 Guide | QR Studio',
    description: 'Learn how digital QR menus cut printing costs by 90%, increase average order values by 15%, and boost table turnover rates for restaurants.',
    canonical: 'https://qr-generator.online/blog/qr-codes-for-restaurants',
    h1: 'How Restaurants & Cafes Increase Table Turnover with QR Code Menus',
    badge: 'Hospitality Technology',
    lead: 'Discover how digital touchless menus streamline dining operations, eliminate reprinting costs, and boost table turnover rates.',
    sections: [
      {
        title: 'The Shift to Contactless Digital Menus',
        paragraphs: [
          'In modern hospitality, speed and service accuracy are essential. Digital QR menus on table tents allow guests to view up-to-date food and drink options immediately upon seating.',
          'Restaurants cut reprinting expenses whenever prices change while highlighting seasonal specials and high-margin dishes.'
        ]
      },
      {
        title: 'How to Set Up a QR Code Menu for Your Restaurant',
        paragraphs: [
          'Getting started takes under five minutes. Upload your existing PDF menu or link your online ordering page, then generate a branded QR code with your restaurant logo in the center. Print it on durable laminated table tents, window decals, or receipt footers.',
          'Studies show that restaurants using digital QR menus see an average 15% increase in average order value because guests explore full menus at their own pace rather than relying on verbal specials. Updating items, prices, or seasonal offerings is instant — no reprinting needed. Pair each QR code with a short descriptive call-to-action like "Scan to view today\'s full menu" for best results.'
        ]
      }
    ]
  },
  {
    path: '/blog/printing-qr-codes-guide',
    title: 'Ultimate Guide to Printing QR Codes: Size, Resolution & SVG',
    description: 'Master QR code printing: learn minimum size calculation formulas, quiet zone rules, contrast ratios, and vector SVG vs raster PNG print formats.',
    canonical: 'https://qr-generator.online/blog/printing-qr-codes-guide',
    h1: 'The Ultimate Guide to Printing QR Codes: Sizing, Contrast & Vector SVG',
    badge: 'Print Production Guide',
    lead: 'Avoid costly reprinting mistakes with our comprehensive guide to QR code printing formulas, quiet zones, contrast ratios, and vector formats.',
    sections: [
      {
        title: 'Calculating Minimum QR Code Print Sizing',
        paragraphs: [
          'A simple formula for print sizing is the 10:1 distance-to-size ratio. For example, a poster scanned from 1 meter away requires a minimum QR code width of 10 cm.',
          'Always preserve the 4-module quiet zone margin and export in vector SVG for flawless offset and digital press output.'
        ]
      },
      {
        title: 'Color Contrast, Error Correction & Format Recommendations',
        paragraphs: [
          'Always maintain a minimum contrast ratio of 4:1 between the QR code foreground and background. Avoid printing light QR patterns on pale backgrounds — low contrast is the leading cause of scanning failure in glossy print environments. Use Level H error correction (30% data redundancy) when embedding logos to maintain reliable scanning.',
          'For commercial offset printing, always provide files in vector SVG or EPS format to your print house. Raster PNG or JPEG images pixelate when scaled beyond their original resolution, leading to blurry module edges that confuse scanners. At minimum, export a 2048×2048 pixel PNG at 300 DPI when SVG is not accepted. Always request a physical test print and perform a scan test before approving large print runs.'
        ]
      }
    ]
  },
  {
    path: '/blog/vcard-qr-code-business-cards',
    title: 'How to Put a vCard QR Code on Business Cards (2026 Guide)',
    description: 'Discover how to design smart business cards with vCard QR codes. Share contact info with one tap and eliminate outdated paper business cards.',
    canonical: 'https://qr-generator.online/blog/vcard-qr-code-business-cards',
    h1: 'How to Create Digital Business Cards with vCard QR Codes',
    badge: 'Networking Strategy',
    lead: 'Upgrade traditional paper business cards into interactive networking tools that save full contact profiles into smartphones in one tap.',
    sections: [
      {
        title: 'Turning Business Cards into One-Tap Contact Savers',
        paragraphs: [
          'A vCard QR code eliminates manual contact typing errors during networking events and trade shows.',
          'Recipients scan the back of your business card to immediately add your name, mobile number, email, and LinkedIn profile to their address book.'
        ]
      },
      {
        title: 'Design Tips for Business Cards with QR Codes',
        paragraphs: [
          'Place the QR code on the reverse side of your business card with a clear call-to-action such as "Scan to save my contact." Keep the code at least 2.5 cm × 2.5 cm (1 inch × 1 inch) for reliable scanning. Leave a white quiet zone border of at least 4 modules around all four edges. Embedding your professional headshot or company logo in the center boosts confidence and scan rates.',
          'Use QR Maker Studio to encode your full vCard 3.0 profile including first name, last name, job title, company, work phone, mobile phone, email, website, and postal address. Export in vector SVG to ensure flawless quality at any card print size. Premium business card stock with a matte finish provides the highest scan reliability compared to glossy laminate, which can create lens glare under bright lighting.'
        ]
      }
    ]
  },
  {
    path: '/blog/qr-codes-for-real-estate',
    title: 'QR Codes for Real Estate: Drive Property Inquiries & Tours',
    description: 'Discover how top real estate agents use QR codes on yard signs, flyers, and brochures to drive 3D virtual tours and capture qualified buyer leads.',
    canonical: 'https://qr-generator.online/blog/qr-codes-for-real-estate',
    h1: 'QR Codes for Real Estate: How to Drive Property Inquiries & Tours',
    badge: 'Real Estate Marketing',
    lead: 'Learn how modern realtors use QR codes on yard signs and flyers to connect prospective home buyers directly to virtual 3D property walkthroughs.',
    sections: [
      {
        title: 'Engage Prospective Buyers Directly from Yard Signs',
        paragraphs: [
          'Placing a QR code on "For Sale" yard signs allows passersby to tour 3D floor plans, view video walkthroughs, and review pricing instantly from their car.',
          'Capture high-intent buyer inquiries 24/7 without waiting for open houses.'
        ]
      },
      {
        title: 'Best Practices for Real Estate QR Code Campaigns',
        paragraphs: [
          'Link your QR code directly to a dedicated property landing page rather than your general homepage. Include the full address, listing price, bedroom and bathroom count, square footage, and an embedded video walkthrough. Dynamic QR codes allow you to update the destination URL if the listing price changes or if the property sells and you wish to redirect to a similar listing without reprinting yard signs.',
          'For maximum outdoor scan reliability, print QR codes at a minimum size of 7 cm × 7 cm (approximately 2.75 inches) on weather-resistant signage. Use high-contrast black on white or dark green on white to ensure visibility in direct sunlight. Adding a branded logo and a short tagline like "Scan for Virtual Tour" significantly increases scan rates from drive-by traffic. Track scan analytics to understand which neighborhoods and listing types generate the most buyer interest.'
        ]
      }
    ]
  },
  {
    path: '/blog/wifi-qr-codes-for-hospitality',
    title: 'WiFi QR Codes for Hotels, Cafes & Airbnb Hosts (2026 Guide)',
    description: 'Eliminate guest WiFi password complaints in hotels, cafes, and Airbnbs with custom branded WiFi QR codes. Instant connection with zero typing.',
    canonical: 'https://qr-generator.online/blog/wifi-qr-codes-for-hospitality',
    h1: 'WiFi QR Codes for Hotels, Cafes & Airbnb Hosts: Seamless Guest Access',
    badge: 'Hospitality & Airbnb',
    lead: 'Eliminate friction for guests by providing scannable WiFi QR codes for hotel rooms, cafe tables, co-working lounges, and vacation rentals.',
    sections: [
      {
        title: 'Seamless Wireless Connectivity for Guests',
        paragraphs: [
          'Hotel and Airbnb guests frequently struggle with typing complex WiFi passwords into their phones and laptops.',
          'A customized, framed WiFi QR code card on the nightstand or cafe counter lets guests scan and connect instantly.'
        ]
      },
      {
        title: 'How to Deploy WiFi QR Codes in Hotels & Vacation Rentals',
        paragraphs: [
          'Generate a separate WiFi QR code for each network zone — guest room WiFi, lobby WiFi, and pool area WiFi — and print them on individually branded cards. For hotels, laminate the QR code card and place it on the in-room desk and bathroom mirror where guests naturally look for connectivity instructions. Include the network name (SSID) and a note confirming whether a password is pre-filled so guests feel confident about what the scan will do.',
          'For Airbnb hosts, embedding a WiFi QR code into a custom welcome booklet alongside house rules and local recommendations dramatically improves guest check-in satisfaction scores. Cafes and co-working spaces benefit most from large-format table displays with framed QR codes at eye level. Rotate WiFi passwords monthly for security and simply generate a new QR code — no reprinting needed if using digital menu boards or replaceable card inserts.'
        ]
      }
    ]
  }
];

const ALL_LINKS = [
  { label: 'URL QR Code', href: '/url-qr-code-generator' },
  { label: 'WiFi QR Code', href: '/wifi-qr-code-generator' },
  { label: 'vCard QR Code', href: '/vcard-qr-code-generator' },
  { label: 'Google Forms QR', href: '/googleform-qr-code-generator' },
  { label: 'WhatsApp QR', href: '/whatsapp-qr-code-generator' },
  { label: 'Text QR Code', href: '/text-qr-code-generator' },
  { label: 'Email QR Code', href: '/email-qr-code-generator' },
  { label: 'SMS QR Code', href: '/sms-qr-code-generator' },
  { label: 'Phone QR Code', href: '/phone-qr-code-generator' },
  { label: 'Location QR Code', href: '/location-qr-code-generator' },
  { label: 'Crypto QR Code', href: '/crypto-qr-code-generator' },
  { label: 'Event QR Code', href: '/event-qr-code-generator' },
  { label: 'Facebook QR Code', href: '/facebook-qr-code-generator' },
  { label: 'QR Code with Logo', href: '/qr-code-with-logo' },
  { label: 'Custom QR Codes', href: '/custom-qr-codes' },
  { label: 'Colored QR Code', href: '/colored-qr-code-generator' },
  { label: 'SVG Vector QR', href: '/svg-qr-code-generator' },
  { label: 'High Resolution QR', href: '/high-resolution-qr-codes' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Help & FAQ', href: '/faqs-qr-code-generator' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Restaurant QR Menus', href: '/blog/qr-codes-for-restaurants' },
  { label: 'Printing QR Guide', href: '/blog/printing-qr-codes-guide' },
  { label: 'vCard Business Cards', href: '/blog/vcard-qr-code-business-cards' },
  { label: 'Real Estate QR', href: '/blog/qr-codes-for-real-estate' },
  { label: 'Hospitality WiFi QR', href: '/blog/wifi-qr-codes-for-hospitality' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

function buildHeaderHtml() {
  return `
    <header class="prerender-header" style="background:#ffffff; border-bottom:1px solid #e5e7eb; padding:16px 24px;">
      <div style="max-width:1280px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <a href="/" style="display:flex; align-items:center; gap:8px; font-weight:800; font-size:20px; color:#111827; text-decoration:none;">
          <span style="display:inline-block; width:28px; height:28px; background:#2B6F53; border-radius:6px;"></span>
          QR Maker Studio
        </a>
        <nav style="display:flex; gap:16px; flex-wrap:wrap; font-size:14px; font-weight:600;">
          <a href="/" style="color:#2B6F53; text-decoration:none;">Home</a>
          <a href="/wifi-qr-code-generator" style="color:#4b5563; text-decoration:none;">WiFi QR</a>
          <a href="/url-qr-code-generator" style="color:#4b5563; text-decoration:none;">URL QR</a>
          <a href="/vcard-qr-code-generator" style="color:#4b5563; text-decoration:none;">vCard QR</a>
          <a href="/qr-code-with-logo" style="color:#4b5563; text-decoration:none;">Logo QR</a>
          <a href="/pricing" style="color:#4b5563; text-decoration:none;">Pricing</a>
          <a href="/faqs-qr-code-generator" style="color:#4b5563; text-decoration:none;">FAQ</a>
          <a href="/blog" style="color:#4b5563; text-decoration:none;">Blog</a>
        </nav>
      </div>
    </header>
  `;
}

function buildFooterHtml() {
  const toolsLinks = ALL_LINKS.slice(0, 13).map(l => `<li><a href="${l.href}" style="color:#9ca3af; text-decoration:none; font-size:13px; display:block; padding:3px 0;">${l.label}</a></li>`).join('');
  const featureLinks = ALL_LINKS.slice(13, 18).map(l => `<li><a href="${l.href}" style="color:#9ca3af; text-decoration:none; font-size:13px; display:block; padding:3px 0;">${l.label}</a></li>`).join('');
  const blogLinks = ALL_LINKS.slice(21, 27).map(l => `<li><a href="${l.href}" style="color:#9ca3af; text-decoration:none; font-size:13px; display:block; padding:3px 0;">${l.label}</a></li>`).join('');
  const companyLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Help & FAQ', href: '/faqs-qr-code-generator' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ].map(l => `<li><a href="${l.href}" style="color:#9ca3af; text-decoration:none; font-size:13px; display:block; padding:3px 0;">${l.label}</a></li>`).join('');

  return `
    <footer class="prerender-footer" style="background:#111827; color:#ffffff; padding:52px 24px 32px;">
      <div style="max-width:1280px; margin:0 auto;">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:36px; margin-bottom:40px;">
          <div>
            <h4 style="font-size:14px; font-weight:700; color:#ffffff; margin-bottom:16px; text-transform:uppercase; letter-spacing:0.05em;">QR Code Tools</h4>
            <ul style="list-style:none; padding:0; margin:0;">${toolsLinks}</ul>
          </div>
          <div>
            <h4 style="font-size:14px; font-weight:700; color:#ffffff; margin-bottom:16px; text-transform:uppercase; letter-spacing:0.05em;">Features</h4>
            <ul style="list-style:none; padding:0; margin:0;">${featureLinks}</ul>
          </div>
          <div>
            <h4 style="font-size:14px; font-weight:700; color:#ffffff; margin-bottom:16px; text-transform:uppercase; letter-spacing:0.05em;">Guides & Blog</h4>
            <ul style="list-style:none; padding:0; margin:0;">${blogLinks}</ul>
          </div>
          <div>
            <h4 style="font-size:14px; font-weight:700; color:#ffffff; margin-bottom:16px; text-transform:uppercase; letter-spacing:0.05em;">Company & Support</h4>
            <ul style="list-style:none; padding:0; margin:0;">${companyLinks}</ul>
            <div style="margin-top:16px;"><a href="mailto:support@qr-generator.online" style="color:#34d399; font-size:12px; text-decoration:none;">support@qr-generator.online</a></div>
          </div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:24px; text-align:center; color:#9ca3af; font-size:13px;">
          <p>© ${new Date().getFullYear()} QR Maker Studio. All rights reserved. Free QR Code Generator.</p>
        </div>
      </div>
    </footer>
  `;
}

function buildBodyHtml(route) {
  const sectionsHtml = (route.sections || []).map(sec => `
    <div style="margin-bottom:28px;">
      <h2 style="font-size:22px; font-weight:700; color:#111827; margin-bottom:12px;">${sec.title}</h2>
      ${sec.paragraphs.map(p => `<p style="color:#4b5563; font-size:15px; line-height:1.7; margin-bottom:12px;">${p}</p>`).join('')}
    </div>
  `).join('');

  // Look up rich structured data for all routes (tools, features, blog, company)
  const rich = ALL_RICH_DATA[route.path] || null;

  const techOverviewHtml = rich && rich.technicalOverview ? `
    <section style="margin-top:40px; padding:32px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:16px;">
      <div style="display:inline-block; padding:4px 12px; background:rgba(43,111,83,0.1); color:#2B6F53; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; border-radius:9999px; margin-bottom:12px;">
        Technical Architecture &amp; Protocol
      </div>
      <h2 style="font-size:24px; font-weight:800; color:#111827; margin-bottom:16px;">${rich.technicalOverview.title}</h2>
      ${rich.technicalOverview.paragraphs.map(p => `<p style="color:#4b5563; font-size:15px; line-height:1.75; margin-bottom:14px;">${p}</p>`).join('')}
    </section>
  ` : '';

  const comparisonTableHtml = rich && rich.comparisonTable ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #e5e7eb;">
      <h2 style="font-size:22px; font-weight:700; color:#111827; margin-bottom:20px; text-align:center;">${rich.comparisonTable.title}</h2>
      <div style="overflow-x:auto; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; background:#fff; border:1px solid #e5e7eb; border-radius:12px; font-size:14px; text-align:left;">
          <thead>
            <tr style="background:#f3f4f6; border-bottom:2px solid #e5e7eb;">
              ${rich.comparisonTable.headers.map((h, i) => `<th style="padding:14px 16px; font-weight:700; color:${i === 1 ? '#166534' : '#111827'};">${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rich.comparisonTable.rows.map((row, idx) => `
              <tr style="border-bottom:1px solid #e5e7eb; background:${idx % 2 === 0 ? '#fff' : '#f9fafb'};">
                <td style="padding:12px 16px; font-weight:600; color:#1f2937;">${row[0]}</td>
                <td style="padding:12px 16px; color:#166534; font-weight:600;">${row[1]}</td>
                <td style="padding:12px 16px; color:#6b7280;">${row[2]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  const stepsHtml = rich && rich.steps ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #e5e7eb;">
      <h2 style="font-size:22px; font-weight:700; color:#111827; margin-bottom:20px; text-align:center;">How to Generate &amp; Deploy (3-Step Practical Manual)</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px,1fr)); gap:16px;">
        ${rich.steps.map(s => `
          <div style="background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:22px;">
            <div style="width:36px; height:36px; background:#2B6F53; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:15px; margin-bottom:12px;">${s.number}</div>
            <h3 style="font-size:16px; font-weight:700; color:#111827; margin-bottom:8px;">${s.title}</h3>
            <p style="font-size:13px; color:#6b7280; line-height:1.6; margin:0;">${s.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const featuresHtml = rich && rich.features ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #e5e7eb;">
      <h2 style="font-size:22px; font-weight:700; color:#111827; margin-bottom:20px; text-align:center;">Core Capabilities &amp; Enterprise Advantages</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:16px;">
        ${rich.features.map(f => `
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:20px;">
            <h3 style="font-size:15px; font-weight:700; color:#166534; margin-bottom:8px;">${f.title}</h3>
            <p style="font-size:13px; color:#4b5563; line-height:1.6; margin:0;">${f.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const sizingMatrixHtml = rich && rich.sizingMatrix ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #e5e7eb;">
      <h2 style="font-size:22px; font-weight:700; color:#111827; margin-bottom:10px; text-align:center;">${rich.sizingMatrix.title}</h2>
      <p style="text-align:center; color:#6b7280; font-size:14px; max-width:720px; margin:0 auto 20px;">${rich.sizingMatrix.description}</p>
      <div style="overflow-x:auto; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; background:#fff; border:1px solid #e5e7eb; border-radius:12px; font-size:13px; text-align:left;">
          <thead>
            <tr style="background:#f3f4f6; border-bottom:2px solid #e5e7eb;">
              ${rich.sizingMatrix.headers.map(h => `<th style="padding:12px 14px; font-weight:700; color:#111827;">${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rich.sizingMatrix.rows.map((row, idx) => `
              <tr style="border-bottom:1px solid #e5e7eb; background:${idx % 2 === 0 ? '#fff' : '#f9fafb'};">
                <td style="padding:10px 14px; font-weight:600; color:#1f2937;">${row[0]}</td>
                <td style="padding:10px 14px; color:#4b5563;">${row[1]}</td>
                <td style="padding:10px 14px; color:#166534; font-weight:600;">${row[2]}</td>
                <td style="padding:10px 14px; color:#6b7280;">${row[3]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  const useCasesHtml = rich && rich.useCases ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #e5e7eb;">
      <h2 style="font-size:22px; font-weight:700; color:#111827; margin-bottom:20px; text-align:center;">Cross-Industry Practical Applications</h2>
      <ul style="list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:16px;">
        ${rich.useCases.map((u, i) => `
          <li style="background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:20px;">
            <div style="width:26px; height:26px; background:#2B6F53; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:12px; margin-bottom:10px;">${i+1}</div>
            <h3 style="font-size:15px; font-weight:700; color:#111827; margin-bottom:6px;">${u.title}</h3>
            <p style="font-size:13px; color:#6b7280; line-height:1.6; margin:0;">${u.description}</p>
          </li>
        `).join('')}
      </ul>
    </section>
  ` : '';

  const troubleshootingHtml = rich && rich.troubleshooting ? `
    <section style="margin-top:48px; padding:28px 32px; background:#fef2f2; border:1px solid #fecaca; border-radius:16px;">
      <h2 style="font-size:20px; font-weight:800; color:#991b1b; margin-bottom:16px;">${rich.troubleshooting.title}</h2>
      <ul style="margin:0; padding-left:20px; color:#7f1d1d; font-size:14px; line-height:1.75;">
        ${rich.troubleshooting.points.map(pt => `<li style="margin-bottom:10px;">${pt}</li>`).join('')}
      </ul>
    </section>
  ` : '';

  const faqsHtml = rich && rich.faqs ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #e5e7eb;">
      <h2 style="font-size:24px; font-weight:800; color:#111827; margin-bottom:8px; text-align:center;">Comprehensive Technical &amp; Practical FAQ</h2>
      <p style="text-align:center; color:#6b7280; font-size:14px; margin-bottom:24px;">Everything developers, marketers, and business owners need to know.</p>
      <div style="max-width:820px; margin:0 auto;">
        ${rich.faqs.map(f => `
          <details style="border:1px solid #e5e7eb; border-radius:10px; margin-bottom:12px; background:#fff; overflow:hidden;">
            <summary style="padding:16px 20px; font-size:15px; font-weight:700; color:#111827; cursor:pointer; list-style:none;">${f.q}</summary>
            <div style="padding:0 20px 16px; font-size:14px; color:#4b5563; line-height:1.7; border-top:1px solid #f3f4f6;">${f.a}</div>
          </details>
        `).join('')}
      </div>
    </section>
  ` : '';

  const bestPracticesHtml = rich && rich.bestPractices ? `
    <section style="margin-top:48px; padding:28px 32px; background:#111827; border-radius:16px; color:#fff;">
      <h2 style="font-size:18px; font-weight:700; color:#34d399; margin-bottom:10px;">Production Checklist &amp; Scanning Quality Assurance</h2>
      <p style="font-size:14px; color:#d1d5db; line-height:1.8; margin:0;">${rich.bestPractices}</p>
    </section>
  ` : '';

  return `
    <div id="app" class="min-h-screen flex flex-col">
      ${buildHeaderHtml()}
      <main id="router-view" class="flex-grow" style="padding:48px 24px; max-width:1120px; margin:0 auto; width:100%;">
        <div style="text-align:center; margin-bottom:40px;">
          <span style="display:inline-block; padding:6px 14px; background:rgba(43,111,83,0.1); color:#2B6F53; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; border-radius:9999px; margin-bottom:16px;">
            ${route.badge || 'QR Code Generator'}
          </span>
          <h1 style="font-size:32px; sm:font-size:44px; font-weight:800; color:#111827; line-height:1.2; margin-bottom:16px; max-width:900px; margin-left:auto; margin-right:auto;">
            ${route.h1}
          </h1>
          <p style="font-size:17px; color:#4b5563; line-height:1.6; max-width:760px; margin:0 auto 28px;">
            ${route.lead}
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <a href="/" style="padding:12px 24px; background:#2B6F53; color:#ffffff; font-weight:700; border-radius:10px; text-decoration:none; display:inline-block;">Create QR Code Now</a>
            <a href="/pricing" style="padding:12px 24px; background:#ffffff; color:#374151; font-weight:600; border:1px solid #d1d5db; border-radius:10px; text-decoration:none; display:inline-block;">View Features</a>
          </div>
        </div>

        <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:16px; padding:32px; margin-bottom:36px;">
          ${sectionsHtml}
        </div>

        ${techOverviewHtml}
        ${comparisonTableHtml}
        ${stepsHtml}
        ${featuresHtml}
        ${sizingMatrixHtml}
        ${useCasesHtml}
        ${troubleshootingHtml}
        ${faqsHtml}
        ${bestPracticesHtml}
      </main>
      ${buildFooterHtml()}
    </div>
  `;
}

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.log('Template dist/index.html not found yet. It will be pre-rendered upon "vite build".');
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  console.log(`Starting static pre-rendering for ${ROUTES.length} routes...`);

  let generatedCount = 0;

  for (const route of ROUTES) {
    let html = template;

    // 1. Update Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Update Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}">`
    );

    // 3. Update Self-Referencing Canonical Tag
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 4. Update Self-Referencing Hreflang Tags (TASK 2)
    html = html.replace(
      /<link\s+rel="alternate"\s+hreflang="en"\s+href=".*?"\s*\/?>/i,
      `<link rel="alternate" hreflang="en" href="${route.canonical}">`
    );
    html = html.replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href=".*?"\s*\/?>/i,
      `<link rel="alternate" hreflang="x-default" href="${route.canonical}">`
    );

    // 5. Update OpenGraph Tags
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}">`
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}">`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}">`
    );

    // 6. Update Twitter Tags
    html = html.replace(
      /<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:url" content="${route.canonical}">`
    );
    html = html.replace(
      /<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:title" content="${route.title}">`
    );
    html = html.replace(
      /<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:description" content="${route.description}">`
    );

    // 7. Inject full semantic pre-rendered body into #app shell
    const prerenderedBody = buildBodyHtml(route);
    html = html.replace(
      /<div id="app"[\s\S]*?<\/footer>\s*<\/div>/i,
      prerenderedBody
    );

    // 8. Write file to disk
    if (route.path === '/') {
      fs.writeFileSync(templatePath, html, 'utf8');
      generatedCount++;
    } else {
      const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
      generatedCount++;
    }
  }

  console.log(`✅ Pre-rendered ${generatedCount} static HTML pages in dist/!`);
}

prerender();
