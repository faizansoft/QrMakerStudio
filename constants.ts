
import { StylePreset, DotType, CornerSquareType, CornerDotType, QRType } from './types';

export const STYLE_PRESETS: StylePreset[] = [
  { id: 'classic', name: 'Classic Black', fgColor: '#000000', bgColor: '#FFFFFF', className: 'bg-white border-slate-200' },
  { id: 'ocean', name: 'Deep Ocean', fgColor: '#0f172a', bgColor: '#e0f2fe', className: 'bg-sky-50 border-sky-200' },
  { id: 'midnight', name: 'Midnight', fgColor: '#f8fafc', bgColor: '#020617', className: 'bg-slate-950 border-slate-800' },
  { id: 'sunset', name: 'Sunset Glow', fgColor: '#7c2d12', bgColor: '#fff7ed', className: 'bg-orange-50 border-orange-200' },
  { id: 'forest', name: 'Evergreen', fgColor: '#064e3b', bgColor: '#f0fdf4', className: 'bg-emerald-50 border-emerald-200' },
  { id: 'royal', name: 'Royal Purple', fgColor: '#4c1d95', bgColor: '#f5f3ff', className: 'bg-violet-50 border-violet-200' },
];

export const ERROR_CORRECTION_LEVELS = [
  { value: 'L', label: 'Low (7%)' },
  { value: 'M', label: 'Medium (15%)' },
  { value: 'Q', label: 'Quartile (25%)' },
  { value: 'H', label: 'High (30%)' },
];

export const DOT_STYLES: { value: DotType; label: string }[] = [
  { value: 'square', label: 'Classic Square' },
  { value: 'rounded', label: 'Modern Rounded' },
  { value: 'dots', label: 'Tech Dots' },
  { value: 'extra-rounded', label: 'Friendly Soft' },
  { value: 'classy', label: 'Premium Classy' },
  { value: 'classy-rounded', label: 'Elegant Fluid' },
];

export const CORNER_SQUARE_STYLES: { value: CornerSquareType; label: string }[] = [
  { value: 'square', label: 'Square Frame' },
  { value: 'extra-rounded', label: 'Soft Frame' },
  { value: 'dot', label: 'Circular Frame' },
];

export const CORNER_DOT_STYLES: { value: CornerDotType; label: string }[] = [
  { value: 'square', label: 'Classic Eye' },
  { value: 'dot', label: 'Modern Dot' },
];

export const FAQ_ITEMS = [
  {
    category: "General",
    question: "How do I make a QR code with logo in middle?",
    answer: "Using our advanced workspace, you can create a QR code with logo in middle by navigating to the 'Logo' tab. Simply upload your PNG or SVG file, and our QR code generator with logo in middle functionality will automatically position it for maximum scannability. We recommend using 'High' error correction when adding center logos to ensure reliable scanning even with the logo overlay. This custom QR code maker with logo integration is perfect for brand identity and professional marketing materials."
  },
  {
    category: "Design",
    question: "Can I create a custom QR code for my brand?",
    answer: "Yes! Our custom QR code maker allows you to change patterns, eye shapes, and colors. Whether you need a QR code generator with logo customization or unique dot styles like 'Classy' or 'Fluid', our tool provides everything you need to create a custom QR code that matches your brand identity perfectly. Choose from preset color themes or enter custom hex codes for precise brand matching. The QR code SVG generator ensures your designs remain sharp at any size."
  },
  {
    category: "WiFi",
    question: "How can I generate QR code for WiFi access?",
    answer: "To generate QR code for WiFi, select the 'WiFi' tool from our homepage. Simply enter your network SSID and password. This create WiFi QR code tool produces a permanent WiFi QR code that guests can scan to join your network instantly without typing a password. It is the most secure WiFi QR code generator available online, supporting WPA, WPA2, and WEP encryption standards. Perfect for restaurants, hotels, offices, and home networks."
  },
  {
    category: "Business",
    question: "How do I create a QR code business card or visiting card?",
    answer: "Our QR code business card generator (vCard) allows you to encode your name, phone, email, company, and job title. You can generate a QR code visiting card that saves your contact details directly to a user's phone contacts app. This QR business card is perfect for digital networking, conferences, and professional vCard QR code generator needs. The vCard 3.0 standard ensures compatibility with all major smartphone platforms."
  },
  {
    category: "Communication",
    question: "Is there a QR code generator for email or WhatsApp?",
    answer: "Absolutely. We offer a dedicated QR code generator email tool and a WhatsApp QR code generator. You can use our QR email generator to pre-fill recipients, subjects, and message bodies, or use the QR code generator for email to streamline customer inquiries and support requests. Our WhatsApp QR code generator also supports pre-written messages for instant chat initiation, making it ideal for customer service and marketing campaigns."
  },
  {
    category: "Social Media",
    question: "How do I generate Facebook QR code for my page?",
    answer: "To generate Facebook QR code, use our Facebook tool and paste your profile or business page URL. It creates a direct link that helps grow your social media presence instantly. This social media QR code generator works for Facebook pages, groups, and events. Perfect for print advertising, business cards, and promotional materials where you want to drive traffic to your social media presence."
  },
  {
    category: "Forms",
    question: "How can I make a QR code for Google Form?",
    answer: "To create QR code for Google Form, copy your form's share link and paste it into our Google Form QR code tool. This QR code generator for Google Forms is ideal for surveys, feedback collection, event registrations, and lead generation. It's the simplest way to get more Google Forms QR code responses. The tool supports both long and shortened URLs for optimal QR code density and scannability."
  },
  {
    category: "Location",
    question: "Can I use a QR code generator for location or Google Maps?",
    answer: "Yes, our QR code generator location tool lets you enter coordinates or addresses. You can generate QR code for Google Maps specifically, making it easy for customers to find your physical store using our Google Maps QR code generator. Perfect for retail locations, restaurants, event venues, and service businesses. The location QR code opens directly in the user's preferred mapping app."
  },
  {
    category: "Tech",
    question: "Do you provide a QR code generator SVG export?",
    answer: "Yes, our SVG QR code generator allows you to download your designs in vector format. The QR code SVG generator is essential for professional printing, as it ensures your code remains sharp at any size on billboards, business cards, or promotional materials. Unlike raster formats, SVG files can be scaled infinitely without quality loss, making them the preferred choice for professional designers and print shops."
  },
  {
    category: "Various",
    question: "What other tools do you offer like SMS or Bitcoin QR code generator?",
    answer: "We offer a wide range of niche tools including a Bitcoin QR code generator for cryptocurrency payments, a QR code generator for SMS marketing campaigns, and a text to QR code generator for simple notes and serial numbers. Our QR code generator phone number tool is also popular for instant dialing applications. Additionally, we support event QR codes for calendar integration, crypto payment QR codes for multiple currencies, and location QR codes for navigation."
  },
  {
    category: "Printing",
    question: "What's the best format for printing QR codes?",
    answer: "For professional printing, we always recommend using our QR code SVG generator. SVG (Scalable Vector Graphics) files maintain perfect quality at any size, from business cards to billboards. If you need raster formats, PNG is preferred over JPEG for better quality. Ensure your QR code has adequate contrast (dark on light), maintain the quiet zone (white border), and test print before mass production. High error correction (Level H) is recommended for materials that may get damaged."
  },
  {
    category: "Reliability",
    question: "Do these QR codes expire or have scan limits?",
    answer: "No. We generate static QR codes where the data is encoded directly into the pattern. This means your QR codes work forever with no scan limits, no expiration dates, and no subscription fees. Unlike dynamic QR codes that rely on redirect servers (which can fail or cost money), our static codes are permanent and reliable. The only limitation is if the destination URL or content changes, you would need to generate a new QR code."
  },
  {
    category: "Security",
    question: "Is my data safe when using your QR code generator?",
    answer: "Absolutely. Our QR code generator operates on a privacy-first architecture. All QR code generation happens locally in your browser using JavaScript. Your URLs, text, contact information, and other data never leave your device or touch our servers. We don't store, track, or transmit any of the information you enter. This makes our platform one of the most secure QR code generators available, perfect for sensitive business information and personal data."
  },
  {
    category: "Compatibility",
    question: "Will these QR codes work on all smartphones and scanners?",
    answer: "Yes. Our QR codes are generated according to the ISO/IEC 18004 international standard, ensuring compatibility with all smartphone cameras (iPhone, Android, etc.), dedicated QR scanner apps, and industrial barcode scanners. We implement proper error correction and encoding techniques to guarantee scannability across different devices and lighting conditions. Whether using native camera apps or third-party scanners, your QR codes will work reliably."
  },
  {
    category: "Advanced",
    question: "Can I use QR codes for cryptocurrency payments?",
    answer: "Yes, our crypto QR code generator supports multiple cryptocurrencies including Bitcoin, Ethereum, and other popular digital currencies. Simply enter the wallet address and optional amount to generate a payment QR code. When scanned, it opens the user's cryptocurrency wallet app pre-filled with the payment details. This is perfect for businesses accepting crypto payments, tipping, or peer-to-peer transactions. The QR code works with all major cryptocurrency wallet applications."
  }
];

export const GENERATOR_DETAILS: Record<QRType, { title: string; desc: string; icon: string; guide: { step: string; detail: string }[] }> = {
  url: {
    title: "Website URL",
    desc: "Transform any website link into a beautiful, scannable portal for your brand.",
    icon: "🔗",
    guide: [
      { step: "Target Link Entry", detail: "Copy and paste the full destination URL from your browser address bar. Ensure it includes https://." },
      { step: "Visual Branding", detail: "Navigate to the Pattern tab and select 'Elegant' or 'Classy' styles to match your brand identity." },
      { step: "Export Vector", detail: "Download your custom URL QR code as an SVG to ensure it stays sharp on any marketing material." }
    ]
  },
  googleform: {
    title: "Google Forms",
    desc: "Collect responses effortlessly with a branded QR code for your surveys.",
    icon: "📝",
    guide: [
      { step: "Get Form Link", detail: "In Google Forms, click 'Send' and copy the Link. We recommend ticking 'Shorten URL' for a cleaner QR pattern." },
      { step: "Customize Color", detail: "Use purple shades (#673ab7) to match the familiar Google Forms aesthetic for your respondents." },
      { step: "Print Ready", detail: "Export as SVG for high-quality printing on survey flyers, feedback cards, or table tents." }
    ]
  },
  vcard: {
    title: "vCard",
    desc: "A digital business card that saves your contact information directly to a smartphone.",
    icon: "👤",
    guide: [
      { step: "Contact Details", detail: "Enter your full name, job title, and company. This information is encoded directly into the code." },
      { step: "Communication Data", detail: "Add your mobile number and professional email for seamless one-tap communication." },
      { step: "Elegant Presentation", detail: "Use rounded corner eyes and high-contrast colors to ensure the vCard scans instantly in meetings." }
    ]
  },
  event: {
    title: "Event",
    desc: "Promote your event and let guests save it directly to their calendars.",
    icon: "📅",
    guide: [
      { step: "Event Info", detail: "Provide the title, location, and a short description of your event." },
      { step: "Timing", detail: "Set the start and end times accurately. This ensures it fits perfectly in their schedule." },
      { step: "Scan to Save", detail: "Scanning will prompt the user to add the event to their Google, Apple, or Outlook calendar." }
    ]
  },
  wifi: {
    title: "Wi-Fi",
    desc: "The fastest way to connect guests to your network without sharing complex passwords.",
    icon: "📶",
    guide: [
      { step: "Input SSID", detail: "Type your WiFi network name exactly as it appears in your network settings." },
      { step: "Security Check", detail: "Select WPA/WPA2 for most home routers. This is the global standard for secure QR connections." },
      { step: "Direct Connection", detail: "Scanning this code will prompt the user's phone to 'Join Network' automatically." }
    ]
  },
  location: {
    title: "Location",
    desc: "Share a specific location on the map with a single scan.",
    icon: "📍",
    guide: [
      { step: "Coordinates", detail: "Enter the Latitude and Longitude of your destination." },
      { step: "Check Mapping", detail: "Scanning this will open the user's default map app (Google Maps or Apple Maps) at the spot." },
      { step: "Physical Marketing", detail: "Ideal for flyers and posters directing people to a new store or venue." }
    ]
  },
  crypto: {
    title: "Cryptocurrency",
    desc: "Send and receive crypto payments easily with a branded payment code.",
    icon: "₿",
    guide: [
      { step: "Select Coin", detail: "Choose your cryptocurrency (Bitcoin, Ethereum, etc.) and paste your wallet address." },
      { step: "Set Amount", detail: "Optionally specify an amount to pre-fill the transaction for the sender." },
      { step: "Verify Address", detail: "Always double-check your wallet address before printing your QR code." }
    ]
  },
  facebook: {
    title: "Facebook",
    desc: "Share your social media channels and grow your followers.",
    icon: "📘",
    guide: [
      { step: "Profile Link", detail: "Paste the URL of your Facebook page or personal profile." },
      { step: "Visual Style", detail: "Use the Facebook blue (#1877F2) to make the code immediately recognizable." },
      { step: "Grow Socials", detail: "Add to business cards or packaging to drive traffic to your social community." }
    ]
  },
  text: {
    title: "Simple Text",
    desc: "Display a body of text or store notes in a simple format.",
    icon: "📝",
    guide: [
      { step: "Enter Content", detail: "Paste any text or alphanumeric string up to 2000 characters into the text area." },
      { step: "Density Management", detail: "Longer text makes the QR denser. Use 'Level H' correction to maintain scan speed." },
      { step: "High Res Download", detail: "Export in high resolution to ensure all the small dots remain clear and readable." }
    ]
  },
  whatsapp: {
    title: "WhatsApp",
    desc: "Get WhatsApp messages and start conversations instantly.",
    icon: "🟢",
    guide: [
      { step: "Phone Number", detail: "Enter your phone number with the country code (e.g., 14155552671)." },
      { step: "Welcome Message", detail: "Optionally pre-fill a message for your customers to send when they scan." },
      { step: "Direct Support", detail: "Perfect for 'Contact Us' buttons on websites or product packaging." }
    ]
  },
  email: {
    title: "Email",
    desc: "Get email messages with pre-filled subjects and bodies.",
    icon: "📧",
    guide: [
      { step: "Email Parameters", detail: "Specify the recipient email address and a clear subject line for better organization." },
      { step: "Custom Pattern", detail: "Use a tech-focused pattern like 'Dots' to match the digital nature of email communication." },
      { step: "Instant Draft", detail: "Scanning opens the default email app with everything pre-filled and ready to go." }
    ]
  },
  sms: {
    title: "SMS",
    desc: "Get text messages with pre-filled content.",
    icon: "💬",
    guide: [
      { step: "Recipient Number", detail: "Enter the number you want to receive the text messages at." },
      { step: "Pre-filled Message", detail: "Draft a message like 'I'd like a free quote' so the user only has to hit send." },
      { step: "Mobile Optimization", detail: "Perfect for social media ads or outdoor signage targeting mobile users." }
    ]
  },
  phone: {
    title: "Phone",
    desc: "Make a phone call with a single scan.",
    icon: "📞",
    guide: [
      { step: "Number Input", detail: "Provide your business phone number with the country code for international compatibility." },
      { step: "Placement Strategy", detail: "Add this QR code to your store windows or direct mail flyers for instant customer engagement." },
      { step: "One-Tap Dialing", detail: "Scanning will automatically open the phone's dialer with your number pre-populated." }
    ]
  }
};
