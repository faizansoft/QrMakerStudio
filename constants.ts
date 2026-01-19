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
    answer: "Yes! Our studio allows you to export your designs as SVG (Scalable Vector Graphics), which is the gold standard for high-quality printing on billboards, menus, and business cards without any pixelation."
  },
  {
    question: "How do I make a custom QR code with my company logo?",
    answer: "Simply use our 'Logo' tab in the workspace to upload your PNG or SVG logo. Our system automatically optimizes the placement and recommends 'High' error correction (Level H) to ensure 100% scannability."
  },
  {
    question: "Do these QR codes have a scan limit or expiration date?",
    answer: "No. Unlike other services, QR Studio Pro generates permanent QR codes. They will work forever as long as the destination (URL or network) remains active. We do not track or limit your scans."
  }
];

export const GENERATOR_DETAILS: Record<QRType, { title: string; desc: string; icon: string; guide: { step: string; detail: string }[] }> = {
  url: {
    title: "LINK/URL",
    desc: "Transform any website link into a beautiful, scannable portal for your brand.",
    icon: "🔗",
    guide: [
      { step: "Target Link Entry", detail: "Copy and paste the full destination URL from your browser address bar. Ensure it includes https://." },
      { step: "Visual Branding", detail: "Navigate to the Pattern tab and select 'Elegant' or 'Classy' styles to match your brand identity." },
      { step: "Export Vector", detail: "Download your custom URL QR code as an SVG to ensure it stays sharp on any marketing material." }
    ]
  },
  wifi: {
    title: "Instant WiFi Access",
    desc: "The fastest way to connect guests to your network without sharing complex passwords.",
    icon: "📶",
    guide: [
      { step: "Input SSID", detail: "Type your WiFi network name exactly as it appears in your network settings." },
      { step: "Security Check", detail: "Select WPA/WPA2 for most home routers. This is the global standard for secure QR connections." },
      { step: "Direct Connection", detail: "Scanning this code will prompt the user's phone to 'Join Network' automatically." }
    ]
  },
  vcard: {
    title: "Professional vCard",
    desc: "A digital business card that saves your contact information directly to a smartphone.",
    icon: "👤",
    guide: [
      { step: "Contact Details", detail: "Enter your full name, job title, and company. This information is encoded directly into the code." },
      { step: "Communication Data", detail: "Add your mobile number and professional email for seamless one-tap communication." },
      { step: "Elegant Presentation", detail: "Use rounded corner eyes and high-contrast colors to ensure the vCard scans instantly in meetings." }
    ]
  },
  phone: {
    title: "Direct Call Studio",
    desc: "Generate more leads by allowing customers to call you with a single scan.",
    icon: "📞",
    guide: [
      { step: "Number Input", detail: "Provide your business phone number with the country code for international compatibility." },
      { step: "Placement Strategy", detail: "Add this QR code to your store windows or direct mail flyers for instant customer engagement." },
      { step: "One-Tap Dialing", detail: "Scanning will automatically open the phone's dialer with your number pre-populated." }
    ]
  },
  sms: {
    title: "Lead Generation SMS",
    desc: "Pre-fill text messages to your business for easier customer inquiries.",
    icon: "💬",
    guide: [
      { step: "Recipient Number", detail: "Enter the number you want to receive the text messages at." },
      { step: "Pre-filled Message", detail: "Draft a message like 'I'd like a free quote' so the user only has to hit send." },
      { step: "Mobile Optimization", detail: "Perfect for social media ads or outdoor signage targeting mobile users." }
    ]
  },
  email: {
    title: "Email Template QR",
    desc: "Create scannable email drafts for support, sales, or customer feedback.",
    icon: "📧",
    guide: [
      { step: "Email Parameters", detail: "Specify the recipient email address and a clear subject line for better organization." },
      { step: "Custom Pattern", detail: "Use a tech-focused pattern like 'Dots' to match the digital nature of email communication." },
      { step: "Instant Draft", detail: "Scanning opens the default email app with everything pre-filled and ready to go." }
    ]
  },
  text: {
    title: "Plain Text Data",
    desc: "Store notes, verification codes, or alphanumeric messages in a simple format.",
    icon: "📝",
    guide: [
      { step: "Enter Content", detail: "Paste any text or alphanumeric string up to 2000 characters into the text area." },
      { step: "Density Management", detail: "Longer text makes the QR denser. Use 'Level H' correction to maintain scan speed." },
      { step: "High Res Download", detail: "Export in high resolution to ensure all the small dots remain clear and readable." }
    ]
  }
};