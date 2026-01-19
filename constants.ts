
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
  { value: 'square', label: 'Square' },
  { value: 'rounded', label: 'Rounded' },
  { value: 'dots', label: 'Dots' },
  { value: 'extra-rounded', label: 'Soft' },
  { value: 'classy', label: 'Classy' },
  { value: 'classy-rounded', label: 'Elegant' },
];

export const CORNER_SQUARE_STYLES: { value: CornerSquareType; label: string }[] = [
  { value: 'square', label: 'Square' },
  { value: 'extra-rounded', label: 'Rounded' },
  { value: 'dot', label: 'Dot' },
];

export const CORNER_DOT_STYLES: { value: CornerDotType; label: string }[] = [
  { value: 'square', label: 'Square' },
  { value: 'dot', label: 'Dot' },
];

export const FAQ_ITEMS = [
  {
    question: "Is this QR code generator completely free to use?",
    answer: "Yes, our QR code maker free tool is 100% free for both commercial and personal use. You can generate unlimited high-resolution QR codes without ever reaching a limit or paying a cent."
  },
  {
    question: "Do I need to sign up to use this qrcode generator?",
    answer: "No registration is required. We prioritize speed and privacy. You can use our free qrcode maker as a guest and download your files instantly."
  },
  {
    question: "Can I create a custom QR code with my company logo?",
    answer: "Absolutely! Our custom qr code with logo feature allows you to upload any image and place it in the center of your QR code. We use advanced error correction to ensure the code remains 100% scannable."
  },
  {
    question: "What formats can I download my QR code in?",
    answer: "You can download your codes in PNG, WebP, or SVG. The SVG format is a vector, meaning it is perfect for high-quality printing on billboards, business cards, and menus."
  }
];

export const GENERATOR_DETAILS: Record<QRType, { title: string; desc: string; icon: string; guide: { step: string; detail: string }[] }> = {
  url: {
    title: "URL Generator",
    desc: "Create linkable QR codes for websites, portfolios, and social media profiles.",
    icon: "🔗",
    guide: [
      { step: "Paste Link", detail: "Copy the full URL from your browser address bar and paste it into the field." },
      { step: "Brand Design", detail: "Use the pattern tab to match your website's primary colors." },
      { step: "Add Logo", detail: "Upload your brand favicon or logo to increase trust and click-through rates." }
    ]
  },
  wifi: {
    title: "WiFi Access",
    desc: "Generate QR codes that allow guests to connect to your network without typing passwords.",
    icon: "📶",
    guide: [
      { step: "Network Name", detail: "Enter the SSID exactly as it appears on your router settings." },
      { step: "Security Mode", detail: "Most modern routers use WPA/WPA2. Select 'None' only for open networks." },
      { step: "Scan & Connect", detail: "When scanned, mobile devices will prompt to 'Join Network' automatically." }
    ]
  },
  vcard: {
    title: "Digital vCard",
    desc: "Share your professional contact info instantly. Save to phone contacts with one scan.",
    icon: "👤",
    guide: [
      { step: "Contact Details", detail: "Fill in your name, phone, and professional email address." },
      { step: "Company Info", detail: "Add your job title and organization to appear professional in contact lists." },
      { step: "Eye-Catching Style", detail: "Use sleek patterns like 'Classy' or 'Elegant' for a business-ready look." }
    ]
  },
  phone: {
    title: "Direct Call",
    desc: "Encourage customers to call your business directly from signage or business cards.",
    icon: "📞",
    guide: [
      { step: "Phone Number", detail: "Enter the full international number including the country code (e.g., +1...)." },
      { step: "Quick Dial", detail: "Scanning this will automatically open the dialer on the user's smartphone." }
    ]
  },
  sms: {
    title: "SMS Message",
    desc: "Pre-fill text messages with a specific number and content for easier communication.",
    icon: "💬",
    guide: [
      { step: "Recipient", detail: "Enter the number you want the user to send the text to." },
      { step: "Pre-filled Text", detail: "Write the message body (e.g., 'I am interested in your services')." }
    ]
  },
  email: {
    title: "Email Draft",
    desc: "Create QR codes that open an email draft with a recipient, subject, and body already filled.",
    icon: "📧",
    guide: [
      { step: "Email Setup", detail: "Enter the recipient email, subject line, and initial message body." },
      { step: "Customer Support", detail: "Great for feedback or support requests on product packaging." }
    ]
  },
  text: {
    title: "Plain Text",
    desc: "Store notes, secret messages, or alphanumeric data in a simple QR format.",
    icon: "📝",
    guide: [
      { step: "Type Content", detail: "Enter any text string you wish to encode." },
      { step: "Note on Size", detail: "Longer text makes the QR code more dense. Use 'Level H' correction for reliability." }
    ]
  }
};
