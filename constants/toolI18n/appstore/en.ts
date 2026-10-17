import type { AppStoreCopy } from './types';

const en: AppStoreCopy = {
  hero: {
    badge: 'Smart App Routing',
    h1: 'Free App Store QR Code Generator',
    lead: 'Create a single smart QR code for iOS and Android. Automatically route iPhone scanners to the Apple App Store and Android scanners to Google Play with real-time install telemetry.'
  },
  form: {
    appTitleLabel: 'App Title / Brand Name',
    appTitlePlaceholder: 'e.g. Acme Mobile App',
    iosLabel: 'Apple App Store URL (iOS)',
    androidLabel: 'Google Play Store URL (Android)',
    webLabel: 'Fallback Website URL (Desktop / Other)',
    webPlaceholder: 'https://yourapp.com',
    qrDots: 'QR Dots',
    background: 'Background',
    cornerEye: 'Corner Eye',
    cornerDot: 'Corner Dot',
    dotPattern: 'Dot Pattern',
    cornerShape: 'Corner Shape',
    appIcon: 'App Icon / Logo',
    changeIcon: 'Change Icon',
    addIcon: 'Add App Icon',
    dotStyles: {
      rounded: 'Rounded',
      dots: 'Dots',
      classy: 'Classy',
      'classy-rounded': 'Classy Rounded',
      square: 'Square',
      'extra-rounded': 'Extra Rounded'
    },
    cornerShapes: {
      'extra-rounded': 'Extra Rounded',
      dot: 'Circle Dot',
      square: 'Square'
    }
  },
  dynamicBox: {
    title: 'Track App Installs with Dynamic QR',
    body: 'Monitor scan conversions by device (iOS vs. Android), countries, and cities in real time.',
    cta: 'Save as Dynamic QR ⚡'
  },
  preview: {
    downloadPng: 'Download PNG',
    downloadSvg: 'SVG (Vector)'
  },
  modal: {
    createdTitle: 'Dynamic App QR Created!',
    saveTitle: 'Save Dynamic App Store QR',
    createdBody: 'Your smart App Store QR code is live. Track installs and update links anytime from your dashboard!',
    copy: 'Copy',
    copied: 'Copied',
    myQrCodes: 'My QR Codes',
    viewAnalytics: 'View Analytics',
    campaignTitle: 'Campaign Title',
    campaignPlaceholder: 'e.g. iOS & Android App Launch',
    primaryTarget: 'Primary Target Link',
    creating: 'Creating Smart Link...',
    createButton: 'Create Dynamic App Store QR'
  },
  auth: {
    title: 'Create Account for Smart App QR',
    subtitle: 'Sign in or register to track app install analytics and update store links anytime.'
  },
  article: {
    s1: {
      badge: 'App Growth Architecture',
      h2: 'The Ultimate Guide to Smart App Store QR Codes & Mobile Acquisition',
      paragraphs: [
        'In physical app marketing—whether on subway billboards, product unboxing collateral, TV commercials, trade show exhibits, or direct mail flyers—asking potential users to open their phone, launch an app store, type your exact app title, and sift through competitor search results creates severe friction. Studies demonstrate that over 65% of potential users drop off during manual app store searching.',
        'A single smart App Store QR Code eliminates this friction completely. By utilizing intelligent device routing, one scannable barcode automatically directs iOS users to the Apple App Store and Android users to the Google Play Store with zero human decision-making required.'
      ]
    },
    s2: {
      badge: 'Conversion Optimization',
      h2: 'Why Printing Two Separate QR Codes Harms Conversion Rates',
      intro: 'Many marketing teams make the critical mistake of printing side-by-side barcodes labeled "Scan for iOS" and "Scan for Android". Here is why unified smart routing outperforms dual codes:',
      dualTitle: 'The Flaws of Dual QR Codes',
      dualItems: [
        '**Visual Clutter:** Two dense barcodes consume valuable print space on packaging.',
        '**Cognitive Load:** Forces consumers to stop and identify which operating system they own.',
        '**Camera Cross-Scanning:** Smartphone cameras frequently focus on the wrong adjacent code, causing error messages on Android devices trying to open Apple App Store links.'
      ],
      unifiedTitle: 'The Power of a Unified Smart QR Code',
      unifiedItems: [
        '**Single Clean Barcode:** Maximizes physical logo prominence and print aesthetics.',
        '**1-Second Frictionless Scan:** Zero user thinking required—scan and install immediately.',
        '**Intelligent Fallback:** Seamlessly routes desktop users to your promotional marketing website.'
      ]
    },
    s3: {
      h2: 'Strategic Offline Placements for Maximum App Downloads',
      cards: [
        { title: 'Product Packaging & Hardware Boxes', body: 'Place an App Store QR code on the inner lid of smart home appliances or consumer electronics labeled: "Scan to download the companion mobile app & begin setup."' },
        { title: 'Point-of-Sale Receipts & Table Tents', body: 'Print QR codes on restaurant receipts encouraging diners to download your loyalty rewards app for an instant $5 discount on their next meal.' },
        { title: 'Transit & Outdoor Billboards', body: 'Feature large-format vector SVG QR codes on subway posters where commuters have idle dwell time and fast cellular connectivity.' },
        { title: 'Direct Mail & Postcards', body: 'Send targeted direct mailers to zip codes with a high-contrast QR code offering exclusive in-app promo codes.' },
        { title: 'Conference Badges & Banners', body: 'Print the official event guide app QR code on attendee lanyards for instant schedule access and push notification updates.' },
        { title: 'Vehicle Fleet Decals', body: 'Apply high-contrast vinyl QR codes to service vans and delivery vehicles for on-the-go service app booking.' }
      ]
    },
    s4: {
      h2: 'Live App Scan Telemetry & Channel Attribution',
      intro: 'When managing dynamic App Store QR codes through our platform, you gain complete visibility into real-world conversion funnels:',
      items: [
        { title: 'iOS vs. Android Share', body: 'Measure exact device percentages scanning your physical collateral to optimize future mobile development resources.' },
        { title: 'Geographic Hotspots', body: 'Track which metropolitan areas and countries generate the highest install velocity to inform regional advertising budgets.' },
        { title: 'Real-Time URL Routing', body: 'Update store package names or deep-link parameters instantly from your dashboard without reprinting existing collateral.' }
      ]
    },
    s5: {
      h2: 'Unified App Store QR vs. Manual Store Search',
      headers: ['Metric', 'Unified App Store QR Code', 'Manual Search "Find us on the App Store"'],
      rows: [
        ['Time to Install Screen', '< 2 seconds (Direct store deep-link)', '30–60+ seconds (App launch, typing, searching)'],
        ['Risk of Competitor Poaching', '0% (Opens your exact product ID)', 'High (Competitors run App Store Search Ads)'],
        ['Device Detection', '100% Automated iOS/Android routing', 'User must manually select store'],
        ['Analytics Tracking', 'Live scan counts, devices & locations', 'Zero tracking data']
      ]
    },
    s6: {
      h2: 'App Store QR Code FAQ',
      sub: 'Everything you need to know about multi-platform App Store QR codes.'
    }
  },
  faq: [
    {
      q: 'How does an App Store Multi-Link QR code work?',
      a: 'An App Store Multi-Link QR code is a single unified barcode that automatically detects the operating system of the scanning device. If scanned with an iPhone or iPad, it redirects directly to your Apple App Store page; if scanned with an Android device, it forwards immediately to Google Play.'
    },
    {
      q: 'Can I add a fallback website URL for desktop scanners?',
      a: 'Yes. You can specify a fallback website URL. If a user scans or clicks the link from a desktop or laptop computer, they will be directed to your marketing landing page or web app.'
    },
    {
      q: 'Why should I use one QR code instead of two separate codes for iOS and Android?',
      a: 'Printing two separate QR codes (one for iOS and one for Android) creates visual clutter, confuses customers, and halves your physical print real estate. A single smart App Store QR code provides a frictionless 1-second scan-and-install experience for 100% of smartphone users.'
    },
    {
      q: 'Can I track which operating system (iOS vs Android) generates more app installs?',
      a: 'Yes! When you save your smart App Store code as a Dynamic QR code, your dashboard provides real-time telemetry breaking down total scans by Operating System (iOS vs Android), device models, and geographic locations (country and city).'
    },
    {
      q: 'Where should I print my App Store QR codes for maximum downloads?',
      a: 'High-converting physical placements include product packaging boxes, physical receipts, transit billboard ads, trade show booth backdrops, direct mail flyers, and conference badges.'
    },
    {
      q: 'Can I update my App Store or Google Play links after printing?',
      a: 'Yes. With Dynamic QR codes, you can change your app store URLs or point to a new app release anytime from your dashboard without ever reprinting your packaging or billboards.'
    }
  ]
};

export default en;
