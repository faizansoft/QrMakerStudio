import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Import route metadata
// Since routeMeta is TypeScript, we declare the 31 routes directly for node execution
const ROUTES = [
  {
    path: '/',
    title: 'Free QR Code Generator with Logo & Colors | QR Maker Studio',
    description: 'Create free static and dynamic QR codes with custom logos and colors. Generate, customize and download professional QR codes in high resolution.',
    canonical: 'https://qr-generator.online/',
    h1: 'Free Custom QR Code Generator with Logo & Vector SVG Export',
    lead: 'Generate high-resolution QR codes with custom colors, dot patterns, frames, and company logos. 100% free with unlimited scans and zero expiration.'
  },
  {
    path: '/url-qr-code-generator',
    title: 'Free URL QR Code Generator | Custom Website Link QR Codes',
    description: 'Convert any website link or landing page into a custom QR code with logos and brand colors. Download in vector SVG or high-res PNG for free.',
    canonical: 'https://qr-generator.online/url-qr-code-generator',
    h1: 'Free URL QR Code Generator with Logo & SVG Vector Download',
    lead: 'Convert any website link, landing page, portfolio, or online catalog into a custom, high-resolution QR Code instantly.'
  },
  {
    path: '/googleform-qr-code-generator',
    title: 'Free Google Forms QR Code Generator | Survey & Feedback QR',
    description: 'Create free QR codes for Google Forms, surveys, and registrations. Add your logo and download vector SVG or PNG with unlimited instant scans.',
    canonical: 'https://qr-generator.online/googleform-qr-code-generator',
    h1: 'Free Google Forms QR Code Generator for Surveys & Sign-Ups',
    lead: 'Connect respondents directly to your Google Forms surveys, feedback forms, and event registrations with one quick smartphone scan.'
  },
  {
    path: '/wifi-qr-code-generator',
    title: 'Free WiFi QR Code Generator | Instant Connect Without Typing',
    description: 'Generate free WiFi QR codes for instant connection without typing passwords. Supports WPA, WPA2, and WEP with high-resolution downloads.',
    canonical: 'https://qr-generator.online/wifi-qr-code-generator',
    h1: 'Free WiFi QR Code Generator for Instant Mobile Network Connection',
    lead: 'Allow guests and customers to connect to your WiFi network instantly by scanning a QR code without ever typing complex passwords.'
  },
  {
    path: '/vcard-qr-code-generator',
    title: 'Free vCard QR Code Generator | Digital Contact Business Cards',
    description: 'Create digital business card vCard QR codes. Share your phone, email, company, and social links instantly on smartphones with zero app needed.',
    canonical: 'https://qr-generator.online/vcard-qr-code-generator',
    h1: 'Free vCard QR Code Generator for Digital Business Cards & Contacts',
    lead: 'Share your phone number, email address, job title, company website, and social links directly into any smartphone address book.'
  },
  {
    path: '/whatsapp-qr-code-generator',
    title: 'Free WhatsApp QR Code Generator | Direct Chat & Support Link',
    description: 'Generate custom WhatsApp QR codes with pre-filled messages. Let customers start chats and reach your business instantly with one quick scan.',
    canonical: 'https://qr-generator.online/whatsapp-qr-code-generator',
    h1: 'Free WhatsApp QR Code Generator for Instant Chat & Support',
    lead: 'Enable customers to open a direct WhatsApp chat with your support or sales team with an optional pre-filled introductory message.'
  },
  {
    path: '/facebook-qr-code-generator',
    title: 'Free Social Media & Facebook QR Code Generator | QR Studio',
    description: 'Create free QR codes for Facebook pages, Instagram, TikTok, and social profiles. Grow your followers with custom branded QR codes in SVG & PNG.',
    canonical: 'https://qr-generator.online/facebook-qr-code-generator',
    h1: 'Free Social Media & Facebook QR Code Generator for Profiles',
    lead: 'Drive followers and engagement by routing users directly to your Facebook page, Instagram profile, YouTube channel, or TikTok.'
  },
  {
    path: '/email-qr-code-generator',
    title: 'Free Email QR Code Generator | Pre-Filled Mailto Messages',
    description: 'Generate email QR codes with pre-filled recipient address, subject, and body text. Streamline customer inquiries and support requests for free.',
    canonical: 'https://qr-generator.online/email-qr-code-generator',
    h1: 'Free Email QR Code Generator for Pre-Filled Inquiries & Feedback',
    lead: 'Make contacting your business effortless by opening a pre-addressed email draft with subject line and body text ready to send.'
  },
  {
    path: '/phone-qr-code-generator',
    title: 'Free Phone Call QR Code Generator | Click-to-Call Barcodes',
    description: 'Create instant click-to-call phone QR codes. Enable customers to dial your sales or support line directly from flyers, posters, and packages.',
    canonical: 'https://qr-generator.online/phone-qr-code-generator',
    h1: 'Free Phone Call QR Code Generator for Direct Dialing & Support',
    lead: 'Enable immediate telephone dialing on any mobile device when users scan your posters, business cards, brochures, or storefront signs.'
  },
  {
    path: '/sms-qr-code-generator',
    title: 'Free SMS Text QR Code Generator | Pre-Composed Text Messages',
    description: 'Create SMS QR codes with pre-filled phone numbers and text messages. Perfect for marketing campaigns, opt-ins, customer surveys, and alerts.',
    canonical: 'https://qr-generator.online/sms-qr-code-generator',
    h1: 'Free SMS QR Code Generator with Pre-Filled Text Messages',
    lead: 'Streamline SMS opt-ins, contest entries, and customer communication with pre-formatted text messages ready to send in one tap.'
  },
  {
    path: '/location-qr-code-generator',
    title: 'Free Location & Google Maps QR Code Generator | QR Studio',
    description: 'Create Google Maps location QR codes with custom coordinates. Guide customers directly to your store, office, or event venue with one scan.',
    canonical: 'https://qr-generator.online/location-qr-code-generator',
    h1: 'Free Location & Google Maps QR Code Generator for Directions',
    lead: 'Guide clients, guests, and delivery drivers directly to your physical address or GPS coordinates using Google Maps navigation.'
  },
  {
    path: '/crypto-qr-code-generator',
    title: 'Free Crypto QR Code Generator | Bitcoin & Ethereum Wallet QR',
    description: 'Generate secure cryptocurrency QR codes for Bitcoin, Ethereum, and crypto wallets. Prevent payment errors and receive transfers with ease.',
    canonical: 'https://qr-generator.online/crypto-qr-code-generator',
    h1: 'Free Cryptocurrency QR Code Generator for Crypto Wallet Transfers',
    lead: 'Prevent costly crypto transfer typos by generating scannable QR codes for Bitcoin, Ethereum, USDT, and popular wallet addresses.'
  },
  {
    path: '/text-qr-code-generator',
    title: 'Free Plain Text QR Code Generator | Encode Raw Text & Notes',
    description: 'Convert plain text, notes, serial numbers, codes, or instructions into scannable QR codes. 100% offline scannable with zero internet needed.',
    canonical: 'https://qr-generator.online/text-qr-code-generator',
    h1: 'Free Plain Text QR Code Generator for Notes & Serial Numbers',
    lead: 'Encode notes, alphanumeric serial numbers, product codes, or instructions into offline-readable QR codes.'
  },
  {
    path: '/event-qr-code-generator',
    title: 'Free Event & Calendar QR Code Generator | Save Date in 1 Scan',
    description: 'Generate calendar event QR codes with event title, location, date, and description. Let guests save appointments to their calendar instantly.',
    canonical: 'https://qr-generator.online/event-qr-code-generator',
    h1: 'Free Event & Calendar QR Code Generator for Invitations & RSVP',
    lead: 'Enable attendees to add webinars, weddings, conferences, or appointments directly to their Apple or Google Calendar with one scan.'
  },
  {
    path: '/qr-code-with-logo',
    title: 'Free QR Code Generator with Logo | Custom Branded QR Codes',
    description: 'Add your company logo or brand icon to the center of high-resolution QR codes. Boost scan rates, brand trust, and recognition in SVG & PNG.',
    canonical: 'https://qr-generator.online/qr-code-with-logo',
    h1: 'Free QR Code Generator with Custom Logo Integration',
    lead: 'Embed your company logo, brand icon, or profile headshot directly into high-resolution QR Codes for maximum brand recognition.'
  },
  {
    path: '/custom-qr-codes',
    title: 'Custom QR Code Generator | Design Unique Patterns & Frames',
    description: 'Design unique QR codes with custom dot patterns, corner square eyes, and color palettes. Create high-converting branded QR codes for free.',
    canonical: 'https://qr-generator.online/custom-qr-codes',
    h1: 'Custom QR Code Generator for Personalized Barcode Designs',
    lead: 'Transform boring black-and-white barcodes into stunning branded visual assets with custom dot patterns, corner shapes, and frames.'
  },
  {
    path: '/colored-qr-code-generator',
    title: 'Colored QR Code Generator | Custom Color Palettes & Styles',
    description: 'Create vibrant colored QR codes matching your brand guidelines. Customize foreground, background, and corner eye colors with vector SVG export.',
    canonical: 'https://qr-generator.online/colored-qr-code-generator',
    h1: 'Free Colored QR Code Generator with Custom Palettes & SVG Export',
    lead: 'Match your exact brand color scheme with custom foreground dots, background colors, and corner eye tints in high resolution.'
  },
  {
    path: '/svg-qr-code-generator',
    title: 'Free SVG Vector QR Code Generator | Scalable for Print Media',
    description: 'Download crisp vector SVG QR codes with transparent backgrounds. Perfect for high-resolution billboards, posters, product packaging, and print.',
    canonical: 'https://qr-generator.online/svg-qr-code-generator',
    h1: 'Free SVG Vector QR Code Generator for High-Resolution Print Media',
    lead: 'Export infinitely scalable vector SVG QR codes that maintain flawless crispness from business cards to giant roadside billboards.'
  },
  {
    path: '/high-resolution-qr-codes',
    title: 'High Resolution QR Code Generator | 4K HD PNG & Vector SVG',
    description: 'Generate high-resolution 4K HD PNG and vector SVG QR codes for professional commercial printing. 100% free with unlimited scans and no blur.',
    canonical: 'https://qr-generator.online/high-resolution-qr-codes',
    h1: 'High-Resolution 4K QR Code Generator for Professional Printing',
    lead: 'Generate ultra-high-resolution 4K PNG and SVG files engineered specifically for professional offset and digital commercial printing.'
  },
  {
    path: '/pricing',
    title: 'Free vs Pro QR Code Generator Pricing | QR Maker Studio',
    description: 'Explore 100% free QR code creation with unlimited scans and transparent Pro features for high-volume enterprise campaigns and dynamic links.',
    canonical: 'https://qr-generator.online/pricing',
    h1: 'Simple, Transparent Pricing with 100% Free Core Features',
    lead: 'Generate unlimited static QR codes 100% free forever, or upgrade for dynamic editable URLs, scan analytics, and bulk creation.'
  },
  {
    path: '/faqs-qr-code-generator',
    title: 'QR Code Generator FAQs | Answers to Common QR Questions',
    description: 'Get clear answers on static vs dynamic QR codes, logo embedding, vector SVG printing, scanning compatibility, and scan expiration policies.',
    canonical: 'https://qr-generator.online/faqs-qr-code-generator',
    h1: 'Frequently Asked Questions About QR Code Creation & Scanning',
    lead: 'Find authoritative answers to common questions regarding QR code expiration, print resolution, error correction, and logo customization.'
  },
  {
    path: '/about',
    title: 'About QR Maker Studio | Free, Secure & High-Res QR Creator',
    description: 'Learn about our mission to make high-resolution, privacy-focused, and beautiful QR code generation free and accessible to businesses worldwide.',
    canonical: 'https://qr-generator.online/about',
    h1: 'About QR Maker Studio — Free & Professional QR Code Solutions',
    lead: 'Our mission is to empower individuals and businesses with fast, secure, beautiful, and completely free QR code creation tools.'
  },
  {
    path: '/contact',
    title: 'Contact Support & Inquiries | QR Maker Studio Team',
    description: 'Have questions, feature requests, or enterprise inquiries? Contact the QR Maker Studio support team for prompt assistance and technical help.',
    canonical: 'https://qr-generator.online/contact',
    h1: 'Contact QR Maker Studio Support & Inquiries',
    lead: 'We are here to help with questions about custom designs, vector printing formats, enterprise integrations, or feature requests.'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | QR Maker Studio Data Protection & Security',
    description: 'Read how QR Maker Studio protects your privacy. We process QR codes securely in your browser with zero tracking of personal encoded data.',
    canonical: 'https://qr-generator.online/privacy',
    h1: 'Privacy Policy & Data Protection at QR Maker Studio',
    lead: 'Your privacy is paramount. Learn how our client-side generator ensures your contact details, passwords, and link data remain secure.'
  },
  {
    path: '/terms',
    title: 'Terms of Service | QR Maker Studio Fair Usage Agreement',
    description: 'Review our terms of service and usage guidelines for generating free and commercial QR codes on the QR Maker Studio platform.',
    canonical: 'https://qr-generator.online/terms',
    h1: 'Terms of Service & Platform Usage Guidelines',
    lead: 'Review terms and conditions governing the generation, distribution, and commercial usage of QR codes created on QR Maker Studio.'
  },
  {
    path: '/blog',
    title: 'QR Code Marketing & Design Blog | Guides & Best Practices',
    description: 'Read actionable tutorials on QR code design, print best practices, restaurant digital menus, real estate marketing, and vCard business cards.',
    canonical: 'https://qr-generator.online/blog',
    h1: 'QR Code Marketing, Design & Technology Insights Blog',
    lead: 'Expert guides, actionable strategies, and print design tutorials to help you maximize scan rates and customer engagement with QR codes.'
  },
  {
    path: '/blog/qr-codes-for-restaurants',
    title: 'QR Code Menus for Restaurants: Complete 2026 Guide | QR Studio',
    description: 'Learn how digital QR menus cut printing costs by 90%, increase average order values by 15%, and boost table turnover rates for restaurants.',
    canonical: 'https://qr-generator.online/blog/qr-codes-for-restaurants',
    h1: 'How Restaurants & Cafes Increase Table Turnover with QR Code Menus',
    lead: 'Discover how digital touchless menus streamline dining operations, eliminate reprinting costs, and boost table turnover rates.'
  },
  {
    path: '/blog/printing-qr-codes-guide',
    title: 'Ultimate Guide to Printing QR Codes: Size, Resolution & SVG',
    description: 'Master QR code printing: learn minimum size calculation formulas, quiet zone rules, contrast ratios, and vector SVG vs raster PNG print formats.',
    canonical: 'https://qr-generator.online/blog/printing-qr-codes-guide',
    h1: 'The Ultimate Guide to Printing QR Codes: Sizing, Contrast & Vector SVG',
    lead: 'Avoid costly reprinting mistakes with our comprehensive guide to QR code printing formulas, quiet zones, contrast ratios, and vector formats.'
  },
  {
    path: '/blog/vcard-qr-code-business-cards',
    title: 'How to Put a vCard QR Code on Business Cards (2026 Guide)',
    description: 'Discover how to design smart business cards with vCard QR codes. Share contact info with one tap and eliminate outdated paper business cards.',
    canonical: 'https://qr-generator.online/blog/vcard-qr-code-business-cards',
    h1: 'How to Create Digital Business Cards with vCard QR Codes',
    lead: 'Upgrade traditional paper business cards into interactive networking tools that save full contact profiles into smartphones in one tap.'
  },
  {
    path: '/blog/qr-codes-for-real-estate',
    title: 'QR Codes for Real Estate: Drive Property Inquiries & Tours',
    description: 'Discover how top real estate agents use QR codes on yard signs, flyers, and brochures to drive 3D virtual tours and capture qualified buyer leads.',
    canonical: 'https://qr-generator.online/blog/qr-codes-for-real-estate',
    h1: 'QR Codes for Real Estate: How to Drive Property Inquiries & Tours',
    lead: 'Learn how modern realtors use QR codes on yard signs and flyers to connect prospective home buyers directly to virtual 3D property walkthroughs.'
  },
  {
    path: '/blog/wifi-qr-codes-for-hospitality',
    title: 'WiFi QR Codes for Hotels, Cafes & Airbnb Hosts (2026 Guide)',
    description: 'Eliminate guest WiFi password complaints in hotels, cafes, and Airbnbs with custom branded WiFi QR codes. Instant connection with zero typing.',
    canonical: 'https://qr-generator.online/blog/wifi-qr-codes-for-hospitality',
    h1: 'WiFi QR Codes for Hotels, Cafes & Airbnb Hosts: Seamless Guest Access',
    lead: 'Eliminate friction for guests by providing scannable WiFi QR codes for hotel rooms, cafe tables, co-working lounges, and vacation rentals.'
  }
];

const NAV_LINKS = [
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
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

function buildNavigationHtml() {
  const linksHtml = NAV_LINKS.map(l => `<a href="${l.href}" class="prerender-link">${l.label}</a>`).join(' ');
  return `
    <header class="prerender-header" style="padding:16px; background:#fff; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
      <a href="/" style="font-weight:bold; font-size:18px; color:#111; text-decoration:none;">QR Maker Studio</a>
      <nav style="display:flex; gap:12px; flex-wrap:wrap; font-size:14px;">
        <a href="/" style="color:#2B6F53; text-decoration:none;">Home</a>
        <a href="/wifi-qr-code-generator" style="color:#555; text-decoration:none;">WiFi QR</a>
        <a href="/url-qr-code-generator" style="color:#555; text-decoration:none;">URL QR</a>
        <a href="/vcard-qr-code-generator" style="color:#555; text-decoration:none;">vCard QR</a>
        <a href="/pricing" style="color:#555; text-decoration:none;">Pricing</a>
        <a href="/blog" style="color:#555; text-decoration:none;">Blog</a>
      </nav>
    </header>
  `;
}

function buildFooterHtml() {
  const linksHtml = NAV_LINKS.map(l => `<li style="margin-bottom:6px;"><a href="${l.href}" style="color:#9ca3af; text-decoration:none;">${l.label}</a></li>`).join('');
  return `
    <footer class="prerender-footer" style="background:#111827; color:#fff; padding:40px 20px; font-size:14px;">
      <div style="max-w:1200px; margin:0 auto;">
        <h3 style="font-size:16px; font-weight:bold; margin-bottom:12px;">Explore Free QR Code Generator Tools</h3>
        <ul style="list-style:none; padding:0; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:8px;">
          ${linksHtml}
        </ul>
        <p style="margin-top:24px; color:#6b7280; font-size:12px;">© ${new Date().getFullYear()} QR Maker Studio. Free Custom QR Code Generator.</p>
      </div>
    </footer>
  `;
}

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found! Run "vite build" first.');
    process.exit(1);
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

    // 3. Update Canonical Tag
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 4. Update OpenGraph Tags
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

    // 5. Update Twitter Tags
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

    // 6. Pre-render Server HTML Shell into <div id="app">
    const semanticContent = `
      ${buildNavigationHtml()}
      <main class="prerender-content" style="max-width:1200px; margin:0 auto; padding:32px 16px;">
        <h1 style="font-size:32px; font-weight:800; color:#111827; margin-bottom:16px;">${route.h1}</h1>
        <p style="font-size:18px; color:#4b5563; line-height:1.6; margin-bottom:24px;">${route.lead}</p>
        <div style="padding:24px; background:#f9fafb; border-radius:12px; border:1px solid #e5e7eb; margin-bottom:32px;">
          <h2 style="font-size:20px; font-weight:700; color:#111827; margin-bottom:12px;">Create and Customize Your QR Code Instantly</h2>
          <p style="color:#6b7280; margin-bottom:16px;">Generate free, high-resolution QR codes with custom logos, colors, and styles. Download in vector SVG or crisp PNG with no expiration.</p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="/wifi-qr-code-generator" style="padding:10px 18px; background:#2B6F53; color:#fff; border-radius:8px; text-decoration:none; font-weight:600;">Create WiFi QR</a>
            <a href="/url-qr-code-generator" style="padding:10px 18px; background:#111827; color:#fff; border-radius:8px; text-decoration:none; font-weight:600;">Create URL QR</a>
            <a href="/vcard-qr-code-generator" style="padding:10px 18px; background:#4b5563; color:#fff; border-radius:8px; text-decoration:none; font-weight:600;">Create vCard QR</a>
            <a href="/qr-code-with-logo" style="padding:10px 18px; background:#e5e7eb; color:#111827; border-radius:8px; text-decoration:none; font-weight:600;">Add Logo to QR</a>
          </div>
        </div>
      </main>
      ${buildFooterHtml()}
    `;

    // Inject semantic content into app root
    html = html.replace(
      '<div id="app" class="min-h-screen flex flex-col"><header id="main-header"></header><main id="router-view" class="flex-grow"></main><footer id="main-footer"></footer></div>',
      `<div id="app" class="min-h-screen flex flex-col">${semanticContent}</div>`
    );

    // 7. Write to appropriate destination
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

  console.log(`✅ Successfully pre-rendered ${generatedCount} static HTML pages in dist/!`);
}

prerender();
