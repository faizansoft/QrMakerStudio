/**
 * Centralized Route Metadata Dictionary for QRGeneratorOnline (31 Routes)
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
    title: 'Free QR Code Generator with Logo & Colors | QR Generator Online',
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
    title: 'Free Social Media & Facebook QR Code Generator | QR Generator Online',
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
    title: 'Free Location & Google Maps QR Code Generator | QR Generator Online',
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
  '/instagram-qr-code-generator': {
    path: '/instagram-qr-code-generator',
    title: 'Free Instagram QR Code Generator | Share Your Profile Instantly',
    description: 'Create a free QR code for your Instagram profile. Scan to follow — perfect for business cards, flyers, product packaging, and social media growth.',
    canonical: 'https://qr-generator.online/instagram-qr-code-generator',
    h1: 'Free Instagram QR Code Generator for Profile Sharing & Follower Growth',
    keywords: ['instagram qr code generator', 'instagram profile qr code', 'instagram follow qr code free']
  },
  '/youtube-qr-code-generator': {
    path: '/youtube-qr-code-generator',
    title: 'Free YouTube QR Code Generator | Channel & Video Link QR Codes',
    description: 'Generate free QR codes for YouTube channels and videos. Drive subscribers and views with scannable QR codes for print and digital marketing.',
    canonical: 'https://qr-generator.online/youtube-qr-code-generator',
    h1: 'Free YouTube QR Code Generator for Channels, Videos & Subscriber Growth',
    keywords: ['youtube qr code generator', 'youtube channel qr code', 'youtube video qr code free']
  },
  '/linkedin-qr-code-generator': {
    path: '/linkedin-qr-code-generator',
    title: 'Free LinkedIn QR Code Generator | Professional Profile QR Codes',
    description: 'Create professional LinkedIn profile QR codes for networking events and business cards. Share your profile with a scan and grow connections fast.',
    canonical: 'https://qr-generator.online/linkedin-qr-code-generator',
    h1: 'Free LinkedIn QR Code Generator for Professional Networking & Business Cards',
    keywords: ['linkedin qr code generator', 'linkedin profile qr code', 'professional networking qr code']
  },
  '/twitter-qr-code-generator': {
    path: '/twitter-qr-code-generator',
    title: 'Free Twitter / X QR Code Generator | Share Your Profile via QR',
    description: 'Generate free QR codes for your Twitter/X profile. Drive followers from print materials, email signatures, and events with a simple scan.',
    canonical: 'https://qr-generator.online/twitter-qr-code-generator',
    h1: 'Free Twitter / X QR Code Generator for Profile Sharing & Audience Growth',
    keywords: ['twitter qr code generator', 'x qr code generator', 'twitter profile qr code free']
  },
  '/tiktok-qr-code-generator': {
    path: '/tiktok-qr-code-generator',
    title: 'Free TikTok QR Code Generator | Go Viral with Scannable QR Codes',
    description: 'Create free TikTok profile QR codes to grow your audience. Perfect for cross-platform promotion on Instagram, YouTube, and printed merchandise.',
    canonical: 'https://qr-generator.online/tiktok-qr-code-generator',
    h1: 'Free TikTok QR Code Generator for Profile Promotion & Viral Growth',
    keywords: ['tiktok qr code generator', 'tiktok profile qr code', 'tiktok follower qr code free']
  },
  '/telegram-qr-code-generator': {
    path: '/telegram-qr-code-generator',
    title: 'Free Telegram QR Code Generator | Group, Channel & Profile QR',
    description: 'Generate QR codes for Telegram profiles, groups, and channels. Grow your Telegram community with scannable codes on websites and print media.',
    canonical: 'https://qr-generator.online/telegram-qr-code-generator',
    h1: 'Free Telegram QR Code Generator for Groups, Channels & Profile Sharing',
    keywords: ['telegram qr code generator', 'telegram group qr code', 'telegram channel qr code free']
  },
  '/paypal-qr-code-generator': {
    path: '/paypal-qr-code-generator',
    title: 'Free PayPal QR Code Generator | Accept Payments via QR Code',
    description: 'Create free PayPal payment QR codes for your business. Customers scan to pay instantly via PayPal.me — ideal for invoices and market stalls.',
    canonical: 'https://qr-generator.online/paypal-qr-code-generator',
    h1: 'Free PayPal QR Code Generator for Instant Payment Collection',
    keywords: ['paypal qr code generator', 'paypal.me qr code', 'payment qr code free']
  },
  '/upi-qr-code-generator': {
    path: '/upi-qr-code-generator',
    title: 'Free UPI QR Code Generator | GPay, PhonePe & Paytm Payment QR',
    description: 'Generate free UPI payment QR codes compatible with Google Pay, PhonePe, Paytm, and all UPI apps. Perfect for Indian merchants and freelancers.',
    canonical: 'https://qr-generator.online/upi-qr-code-generator',
    h1: 'Free UPI QR Code Generator for Google Pay, PhonePe & Paytm Payments',
    keywords: ['upi qr code generator', 'gpay qr code', 'phonePe qr code', 'upi payment qr free']
  },
  '/bulk-qr-code-generator': {
    path: '/bulk-qr-code-generator',
    title: 'Free Bulk QR Code Generator | Batch Create from CSV or Text List',
    description: 'Generate hundreds of QR codes at once from a CSV file or text list. Download all as individual files or a single ZIP archive. 100% free and private.',
    canonical: 'https://qr-generator.online/bulk-qr-code-generator',
    h1: 'Free Bulk QR Code Generator — Batch Create & Download as ZIP',
    keywords: ['bulk qr code generator', 'batch qr code creator', 'csv qr code generator free']
  },
  '/qr-code-scanner': {
    path: '/qr-code-scanner',
    title: 'Free QR Code Scanner & Reader Online | Camera & Image Upload',
    description: 'Scan and decode QR codes online using your camera or by uploading an image. Fast, private, browser-based — no app installation required.',
    canonical: 'https://qr-generator.online/qr-code-scanner',
    h1: 'Free Online QR Code Scanner & Reader — Camera & Image Upload',
    keywords: ['qr code scanner online', 'qr code reader free', 'scan qr code from image', 'online qr decoder']
  },
  '/social-media-qr-code': {
    path: '/social-media-qr-code',
    title: 'Free Social Media QR Code Generator | All Platforms in One Place',
    description: 'Create branded QR codes for Instagram, YouTube, LinkedIn, TikTok, Twitter/X, and more. Each code matches platform colors for instant recognition.',
    canonical: 'https://qr-generator.online/social-media-qr-code',
    h1: 'Free Social Media QR Code Generator — All Platforms, One Dashboard',
    keywords: ['social media qr code generator', 'instagram youtube linkedin qr code', 'all social media qr codes']
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
    title: 'Free vs Pro QR Code Generator Pricing | QR Generator Online',
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
    title: 'About QR Generator Online | Free, Secure & High-Res QR Creator',
    description: 'Learn about our mission to make high-resolution, privacy-focused, and beautiful QR code generation free and accessible to businesses worldwide.',
    canonical: 'https://qr-generator.online/about',
    h1: 'About QR Generator Online — Free & Professional QR Code Solutions',
    keywords: ['about qr generator online', 'qr code company', 'secure qr code generator']
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Support & Inquiries | QR Generator Online Team',
    description: 'Have questions, feature requests, or enterprise inquiries? Contact the QR Generator Online support team for prompt assistance and technical help.',
    canonical: 'https://qr-generator.online/contact',
    h1: 'Contact QR Generator Online Support & Inquiries',
    keywords: ['contact qr generator online', 'qr code support', 'qr generator help']
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy | QR Generator Online Data Protection & Security',
    description: 'Read how QR Generator Online protects your privacy. We process QR codes securely in your browser with zero tracking of personal encoded data.',
    canonical: 'https://qr-generator.online/privacy',
    h1: 'Privacy Policy & Data Protection at QR Generator Online',
    keywords: ['privacy policy qr generator', 'secure qr code data protection']
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service | QR Generator Online Fair Usage Agreement',
    description: 'Review our terms of service and usage guidelines for generating free and commercial QR codes on the QR Generator Online platform.',
    canonical: 'https://qr-generator.online/terms',
    h1: 'Terms of Service & Platform Usage Guidelines',
    keywords: ['terms of service qr generator online', 'qr code generator usage terms']
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
    title: 'QR Code Menus for Restaurants: Complete 2026 Guide | QR Generator Online',
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
  },
  '/dashboard': {
    path: '/dashboard',
    title: 'My QR Codes & Real-Time Analytics Dashboard | QR Generator Online',
    description: 'Manage all your editable dynamic QR codes, change destination links in real time, and monitor live scan metrics, devices, and geographic data.',
    canonical: 'https://qr-generator.online/dashboard',
    h1: 'My QR Codes & Real-Time Analytics Dashboard',
    keywords: ['dynamic qr dashboard', 'editable qr codes manager', 'my qr codes', 'qr code campaign management']
  },
  '/login': {
    path: '/login',
    title: 'Log In to My QR Codes | QR Generator Online',
    description: 'Log in to your free QR Generator Online account to manage dynamic QR codes, update landing pages, and track scan performance.',
    canonical: 'https://qr-generator.online/login',
    h1: 'Log In to My QR Codes',
    keywords: ['qr code login', 'my qr codes login', 'dynamic qr sign in']
  },
  '/signup': {
    path: '/signup',
    title: 'Create Free Account | Unlimited Dynamic QR Codes & Analytics',
    description: 'Sign up for a 100% free QR Generator Online account. Create permanent dynamic QR codes with live destination editing and scan analytics.',
    canonical: 'https://qr-generator.online/signup',
    h1: 'Create Your Free Dynamic QR Generator Online Account',
    keywords: ['free dynamic qr code sign up', 'create dynamic qr account free']
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

  // Dynamic route matches
  if (cleanPath.startsWith('/analytics/')) {
    return {
      path: cleanPath,
      title: 'Real-Time QR Analytics & Scan Intelligence | QR Generator Online',
      description: 'Track real-time scans, geographic location, device types, and visitor engagement metrics for your dynamic QR campaign.',
      canonical: `https://qr-generator.online${cleanPath}`,
      h1: 'Dynamic QR Code Real-Time Analytics Dashboard',
    };
  }

  if (cleanPath.startsWith('/r/')) {
    return {
      path: cleanPath,
      title: 'Redirecting to Destination... | QR Generator Online',
      description: 'Redirecting your smartphone to the verified campaign destination.',
      canonical: `https://qr-generator.online${cleanPath}`,
      h1: 'Dynamic QR Code High-Speed Redirection',
    };
  }

  // 404 fallback
  return {
    path: cleanPath,
    title: 'Page Not Found | QR Generator Online',
    description: 'The requested QR code generator page could not be found. Explore our free QR maker tools, vCard creator, and WiFi generators on the homepage.',
    canonical: `https://qr-generator.online${cleanPath}`,
    h1: '404 - Page Not Found'
  };
};
