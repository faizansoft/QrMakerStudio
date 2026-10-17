import type { ScannerCopy } from './types';

const en: ScannerCopy = {
  hero: {
    badge: 'In-Browser Optical Decoder',
    h1: 'Free Online QR Code Scanner & Reader',
    lead: 'Scan and decode any QR code directly in your browser using your webcam, mobile camera, or image upload. 100% private, instant URL inspection, and zero app download required.'
  },
  viewport: {
    title: 'Optical Camera Viewport Ready',
    hint: 'Click "Start Camera" to scan via live video stream, or upload an image file from your device.'
  },
  controls: {
    startCamera: 'Start Camera',
    stopScanning: 'Stop Scanning',
    uploadImage: 'Upload Image'
  },
  errors: {
    camera: 'Camera access denied or not available. Please ensure camera permissions are enabled in your browser settings.',
    noCode: 'No scannable QR code detected in the uploaded image. Please ensure the barcode is clearly focused with high contrast.'
  },
  result: {
    decoded: 'QR Code Decoded Successfully',
    copy: 'Copy Text',
    copied: 'Copied',
    openLink: 'Open Verified Link ↗'
  },
  article: {
    s1: {
      badge: 'Decoder Mechanics',
      h2: 'The Complete Guide to Browser-Based Optical QR Code Scanning',
      paragraphs: [
        'For years, scanning a QR code required downloading third-party mobile applications cluttered with invasive ads, subscription paywalls, and privacy-violating telemetry trackers. Today, advances in WebAssembly (WASM) and browser standard APIs enable optical barcode recognition directly within standard web browsers with desktop-grade accuracy and zero app installation.',
        'Our free online QR scanner operates on a high-speed JavaScript and WebAssembly binary matrix decoder. When you grant camera access, the application samples the live video feed at 12–15 frames per second, runs edge-detection algorithms to locate the three universal corner finder patterns (position detection patterns), corrects optical perspective distortions, and parses the Reed-Solomon polynomial data modules in milliseconds.'
      ]
    },
    s2: {
      badge: 'Cybersecurity & Safety',
      h2: 'Decoding Dynamic vs. Static QR Codes: Link Verification',
      intro: 'One of the greatest security hazards of blind barcode scanning is "QR phishing" (or quishing), where malicious actors paste fraudulent stickers over authentic restaurant menus or payment terminals. Our scanner acts as an intelligent firewall by giving you a clear, plaintext preview of the encoded link before your browser navigates to the website:',
      cards: [
        {
          title: 'Static QR Code Payload Inspection',
          body: 'Static codes reveal their complete final URL or raw text string immediately. You can verify the hostname, check for misspelled domain names (e.g. `paypa1.com` instead of `paypal.com`), and copy the link safely to clipboard without triggering malicious scripts.'
        },
        {
          title: 'Dynamic QR Shortlink Analysis',
          body: 'Dynamic QR codes route through clean shortlinks (e.g. `qr-generator.online/r/h9K7WX`). Our engine verifies the redirection endpoint in real time and ensures you are navigating to a legitimate campaign created within the secure platform routing table.'
        }
      ]
    },
    s3: {
      h2: 'Supported Payload Standards & Automatic Format Parsing',
      intro: 'QR codes can encapsulate far more than standard website URLs. Our online reader recognizes and parses structured payload protocols automatically:',
      cards: [
        { title: 'WiFi Access Strings', body: 'Decodes `WIFI:S:MyNetwork;P:pass;T:WPA;;` formats so you can copy passwords without manual transcription.' },
        { title: 'vCard Contact Files', body: 'Extracts full names, telephone numbers, emails, and company titles from `BEGIN:VCARD` business card barcodes.' },
        { title: 'Crypto Wallet Addresses', body: 'Accurately reads alphanumeric Bitcoin (`bitcoin:1A...`), Ethereum (`ethereum:0x...`), and Solana wallet strings.' },
        { title: 'Geo Location Coordinates', body: 'Parses `geo:lat,lng` coordinates for instant one-click navigation in Google Maps or Apple Maps.' },
        { title: 'WhatsApp & SMS Links', body: 'Decodes pre-filled mobile chat and SMS keyword messaging links directly into readable format.' },
        { title: 'iCal Event Schedules', body: 'Parses calendar event summaries, timestamps, and venue locations encoded in `BEGIN:VEVENT` structures.' }
      ]
    },
    s4: {
      h2: 'Troubleshooting Guide: Why Some QR Codes Fail to Scan',
      intro: 'If you encounter a barcode that fails optical detection, the issue is almost always rooted in one of these four common physical or digital anomalies:',
      items: [
        { title: '1. Missing or Violated Quiet Zone', body: 'If artwork, text, or the edge of a flyer touches the outer black squares without a 4-module blank white margin, optical sensors cannot calculate the barcode boundaries.' },
        { title: '2. Overcrowded Data Density in Static Barcodes', body: 'Encoding a 250-character URL into a static QR code generates thousands of microscopic modules that blur easily on low-resolution cameras. Using **Dynamic QR Codes** eliminates this problem by maintaining clean, low-density matrices.' },
        { title: '3. Low Contrast & Inverted Color Polarity', body: 'Standard barcode readers expect dark data dots on a lighter background. White dots on a dark background or low-contrast combinations (like yellow on white) frequently fail optical decoding.' }
      ]
    },
    s5: {
      h2: 'Online Web Scanner vs. Native Mobile Apps',
      headers: ['Feature', 'QR Generator Online Web Scanner', 'Third-Party App Store Scanners'],
      rows: [
        ['Installation Required', 'Zero (Runs in browser instantly)', 'Requires 50MB+ download & store login'],
        ['Data Privacy & Tracking', '100% Private (Local memory only)', 'Often tracks browsing history & ad IDs'],
        ['Image / Screenshot Upload', 'Supported (Drag & drop any file)', 'Often locked behind paid premium tiers'],
        ['Cross-Platform Support', 'Universal (iOS, Android, Mac, Windows, Linux)', 'Platform specific']
      ]
    },
    s6: {
      h2: 'QR Code Scanner FAQ',
      sub: 'Answers to common technical questions about scanning and barcode safety.'
    }
  },
  faq: [
    {
      q: 'How does this online QR code scanner work without an app?',
      a: 'Our browser-based QR code scanner utilizes modern WebAssembly and the HTML5 MediaDevices API to interface directly with your device webcam or smartphone camera. Video stream frames are processed in real time in browser memory without sending any video data to cloud servers.'
    },
    {
      q: 'Can I scan and decode QR codes from saved image files or screenshots?',
      a: 'Yes. Simply click "Upload Image" to select any PNG, JPG, WEBP, or SVG screenshot from your computer or smartphone photo gallery. The engine analyzes the image pixels and decodes the embedded barcode string instantly.'
    },
    {
      q: 'How does the scanner handle Dynamic QR codes?',
      a: 'When you scan a Dynamic QR code (such as shortlinks starting with qr-generator.online/r/), our scanner detects the redirection URL and provides a secure preview. You can inspect the destination link before choosing to open it, ensuring full security and phishing protection.'
    },
    {
      q: 'Is scanning QR codes online safe and private?',
      a: 'Yes, 100%. Camera permissions and image file processing operate strictly within your local browser sandbox. No images, video frames, or decoded payload histories are ever uploaded, recorded, or transmitted to any third-party servers.'
    },
    {
      q: 'What types of QR codes can this scanner decode?',
      a: 'Our engine decodes all standard 2D matrix symbologies including Website URLs, Dynamic shortlinks, WiFi credentials (WIFI:), vCard 3.0 digital business cards (BEGIN:VCARD), WhatsApp chats, SMS text messages, Google Maps geo-coordinates, cryptocurrency wallet addresses (Bitcoin, Ethereum), and calendar events.'
    },
    {
      q: 'Why does my camera fail to scan a specific QR code?',
      a: 'Scanning failures typically occur due to insufficient ambient lighting, lens glare on glossy surfaces, inverted barcode colors (light dots on dark background without proper contrast), or damaged barcode finder patterns. For damaged codes, taking a close-up photo and uploading the image file often yields successful decoding.'
    }
  ]
};

export default en;
