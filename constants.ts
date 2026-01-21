
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
    question: "Is this the best free QR code generator available online?",
    answer: "We strive to be the top choice by offering professional customization—including custom logos, high-res vector SVG downloads, and AI-powered styles—completely free with no registration required. Our codes never expire and have no scan limits."
  },
  {
    question: "Can I download a high-resolution QR code for printing?",
    answer: "Yes! QR Generator Online allows you to export your designs as SVG (Scalable Vector Graphics), which is the gold standard for high-quality printing on billboards, menus, and business cards without any pixelation."
  },
  {
    question: "How do I make a custom QR code with my company logo?",
    answer: "Simply use our 'Logo' tab in the workspace to upload your PNG or SVG logo. Our system automatically optimizes the placement and recommends 'High' error correction (Level H) to ensure 100% scannability."
  },
  {
    question: "Do these QR codes have a scan limit or expiration date?",
    answer: "No. Unlike other services, QR Generator Online generates permanent QR codes. They will work forever as long as the destination (URL or network) remains active. We do not track or limit your scans."
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
