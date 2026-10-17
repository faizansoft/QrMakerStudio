import type { SocialCopy } from './types';

const en: SocialCopy = {
  hero: {
    badge: 'Omnichannel Social Hub',
    h1: 'Free Social Media QR Code Generator',
    lead: 'Create branded, color-matched QR codes for Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Facebook, and WhatsApp. Bridge your physical audience to your digital social channels with one tap.'
  },
  brandLabel: 'Brand / Creator Title',
  brandPlaceholder: 'e.g. Acme Brand or @AlexCreator',
  configureHeading: 'Configure Your Social Channels',
  platforms: {
    labels: {
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      twitter: 'Twitter / X',
      tiktok: 'TikTok',
      facebook: 'Facebook',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      website: 'Website',
      email: 'Email'
    },
    placeholders: {
      instagram: 'username',
      youtube: 'https://youtube.com/@channel',
      linkedin: 'https://linkedin.com/in/name',
      twitter: 'handle',
      tiktok: 'username',
      facebook: 'https://facebook.com/page',
      telegram: 'username',
      whatsapp: 'phone number',
      website: 'https://yoursite.com',
      email: 'you@email.com'
    }
  },
  channels: (n) => (n === 1 ? '1 channel configured' : `${n} channels configured`),
  generate: 'Generate Social QR Codes',
  readyHeading: 'Branded Social QR Codes Ready',
  readyBadge: 'High-Res Vector Ready',
  article: {
    s1: {
      badge: 'Audience Acquisition',
      h2: 'The Ultimate Guide to Social Media QR Codes & Audience Conversion',
      paragraphs: [
        'In an era where consumer attention is fragmented across dozens of digital ecosystems—from short-form TikTok reels and Instagram stories to professional LinkedIn networks, YouTube masterclasses, and WhatsApp VIP channels—forcing physical audiences to manually type usernames and search handles results in an immediate 70%+ conversion drop-off.',
        'A branded Social Media QR code completely dissolves friction between physical touchpoints and digital followers. By scanning a high-contrast, visually tailored barcode on packaging, table cards, or storefront glass, smartphone cameras immediately trigger native application deep-links directly to your verified profile, ensuring instant follows, subscribes, and customer chats.'
      ]
    },
    s2: {
      badge: 'Strategy Comparison',
      h2: 'Individual Channel Codes vs. Dynamic Multi-Link Bio Pages',
      intro: 'Depending on your marketing campaign architecture and physical real estate, you can deploy social QR codes in two distinct configurations:',
      cards: [
        {
          title: 'Individual Branded Social Codes',
          body: 'Generates focused, single-purpose QR codes color-matched to specific platform palettes (YouTube red, Instagram gradient, LinkedIn blue). Best for dedicated collateral like a "Follow us on Instagram" table tent in a cafe or a "Subscribe on YouTube" end-card on physical merchandise.'
        },
        {
          title: 'Dynamic Multi-Link Bio Hub Codes',
          body: 'Encodes a single dynamic shortlink that routes visitors to a clean mobile landing page housing all your social links simultaneously. Powered by our dynamic engine, you can add new profiles, update links, and view live geographic scan analytics anytime without reprinting.'
        }
      ]
    },
    s3: {
      h2: 'Strategic Physical Placements for High Follower Conversion',
      cards: [
        { title: 'E-Commerce Packaging Inserts', body: 'Place an unboxing card inside customer packages with a bold CTA: "Scan & tag us on Instagram for a 15% discount on your next order."' },
        { title: 'Hospitality Table Tents', body: 'Display an elegant wooden table stand linking to your Instagram food reels and Google review page while guests wait for their meal.' },
        { title: 'Trade Show Booth Banners', body: 'Print large-format 10x10cm vector SVG QR codes on booth backdrops enabling passing attendees to connect instantly on LinkedIn.' },
        { title: 'Retail Store Checkout Decals', body: 'Position a counter sticker near the credit card terminal inviting shoppers to join your VIP WhatsApp channel for exclusive flash sales.' },
        { title: 'Event Presentation Slides', body: 'Embed your LinkedIn and X/Twitter QR codes on the final slide of your keynote presentation for instant audience connection during Q&A.' },
        { title: 'Artist & Musician Merch', body: 'Print scannable QR codes onto concert t-shirt hangtags linking directly to Spotify profiles, Apple Music albums, and tour schedules.' }
      ]
    },
    s4: {
      h2: 'Live Scan Analytics & Audience Telemetry',
      intro: 'When managing dynamic social media QR codes through our platform, you unlock comprehensive real-time intelligence into your offline audience behavior:',
      items: [
        { title: 'Scan Velocity', body: 'Track total and unique scan interactions over 7-day, 30-day, and lifetime horizons with hourly engagement spikes.' },
        { title: 'Geographic Breakdown', body: 'Map scanner distribution across worldwide countries and metropolitan cities powered by dual-tier IP + timezone telemetry.' },
        { title: 'Device & OS Insights', body: 'Identify whether your audience primarily scans on Apple iOS, Android, or desktop cameras to tailor mobile landing experiences.' },
        { title: 'Zero Reprinting', body: 'Update destination landing pages instantly when launching seasonal promotions without reprinting existing merchandise.' }
      ]
    },
    s5: {
      h2: 'Multi-Link Social QR Codes vs. Traditional Printed Handles',
      headers: ['Metric & Feature', 'Social Media QR Code', 'Printed Text Handle (@name)'],
      rows: [
        ['User Friction', '1-second optical camera scan', 'Manual app opening, typing & searching'],
        ['Conversion Rate', 'High (Direct deep-link to profile)', 'Low (Over 70% drop-off during manual search)'],
        ['Multiple Platform Access', 'All platforms under one scannable hub', 'Cluttered text lists on printed artwork'],
        ['Real-Time Destination Editing', 'Instant cloud update (Dynamic QR)', 'Impossible without total reprinting'],
        ['Engagement Telemetry', 'Full scan counts, devices & locations', 'Zero tracking visibility']
      ]
    },
    s6: {
      h2: 'Social Media QR Code FAQ',
      sub: 'Everything you need to know about social media QR codes and multichannel marketing.'
    }
  },
  faq: [
    {
      q: 'What is a Social Media QR Code?',
      a: 'A Social Media QR code connects offline audiences directly to your digital social profiles (Instagram, YouTube, TikTok, LinkedIn, X, Facebook, and WhatsApp). Instead of asking customers to manually search your brand name on each app, scanning the code opens your verified channel instantly.'
    },
    {
      q: 'How do Dynamic QR Codes improve social media marketing?',
      a: 'When you use a Dynamic QR code for social campaigns, you can change your target promotion, link to new YouTube video uploads, or update your bio link destinations in real time without ever reprinting your packaging, event banners, or business cards. You also get full scan telemetry (total scans, unique devices, operating systems, and geographic visitor locations).'
    },
    {
      q: 'Can I generate individual branded QR codes for each social platform?',
      a: 'Yes. Our tool allows you to input multiple handles simultaneously and generates color-matched, high-resolution QR codes for each platform (e.g. YouTube red, Instagram gradient, LinkedIn navy, WhatsApp emerald) with instant vector SVG and PNG downloads.'
    },
    {
      q: 'Where should I print my Social Media QR codes for maximum followers?',
      a: 'High-converting physical placements include product packaging boxes, unboxing thank-you cards, restaurant table menus, retail store checkout counters, vehicle decals, trade show booth banners, conference presentation slides, and business cards.'
    },
    {
      q: 'Do visitors need an app to scan social media QR codes?',
      a: 'No. Modern iOS and Android camera apps automatically detect the QR code and trigger a direct native app deep-link or mobile browser preview with zero friction.'
    },
    {
      q: 'Can I track which social platforms generate the most scans?',
      a: 'Yes. By registering a free account and using Dynamic QR Codes with distinct campaign titles for each channel, your dashboard displays real-time scan analytics, daily engagement graphs, and geographical location heatmaps.'
    }
  ]
};

export default en;
