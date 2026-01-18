import { StylePreset, DotType, CornerSquareType, CornerDotType } from './types';

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
  },
  {
    question: "Why should I choose this as the best QR code generator?",
    answer: "Unlike other sites, we don't hide your content behind redirects, we don't add watermarks, and we offer professional-grade customization for free."
  }
];

export const GUIDE_STEPS = [
  {
    title: "Paste your Content",
    description: "Simply enter your website URL, text, email, or vCard details into the text area. Our tool automatically prepares the data for generation."
  },
  {
    title: "Customize the Design",
    description: "Choose from different dot styles, corner shapes, and colors. You can even use our 'AI Magic' button to get a professional design suggestion automatically."
  },
  {
    title: "Add your Brand Logo",
    description: "Upload your brand logo or icon. It will be placed perfectly in the center of the QR code to build brand recognition."
  },
  {
    title: "Download & Print",
    description: "Once you are happy with the preview, click 'Download PNG' or 'SVG' for professional printing. Your free QR code is ready for use immediately!"
  }
];
