export type TranslationKey = 
  | 'nav_tools' | 'nav_faq' | 'nav_about' | 'nav_contact' 
  | 'cta_create_free' | 'hero_badge' | 'hero_title_part1' 
  | 'hero_title_part2' | 'hero_desc' | 'footer_desc' 
  | 'footer_links_title' | 'footer_contact_title' | 'footer_company_title'
  | 'ws_tab_content' | 'ws_tab_pattern' | 'ws_tab_corners' | 'ws_tab_logo'
  | 'btn_download_png' | 'btn_download_svg' | 'btn_download_webp'
  | 'meta_home_title' | 'meta_url_title' | 'meta_url_desc'
  | 'meta_wifi_title' | 'meta_wifi_desc'
  | 'meta_vcard_title' | 'meta_vcard_desc'
  | 'meta_phone_title' | 'meta_phone_desc'
  | 'meta_sms_title' | 'meta_sms_desc'
  | 'meta_email_title' | 'meta_email_desc'
  | 'meta_text_title' | 'meta_text_desc'
  | 'meta_event_title' | 'meta_event_desc'
  | 'meta_location_title' | 'meta_location_desc'
  | 'meta_crypto_title' | 'meta_crypto_desc'
  | 'meta_facebook_title' | 'meta_facebook_desc'
  | 'meta_whatsapp_title' | 'meta_whatsapp_desc'
  | 'meta_googleform_title' | 'meta_googleform_desc'
  | 'meta_about_title' | 'meta_about_desc'
  | 'meta_faq_title' | 'meta_faq_desc'
  | 'meta_contact_title' | 'meta_contact_desc'
  | 'meta_privacy_title' | 'meta_privacy_desc'
  | 'meta_terms_title' | 'meta_terms_desc'
  | 'lang_en' | 'lang_es' | 'lang_fr' | 'lang_de' | 'lang_it' | 'lang_pt' | 'lang_ja' | 'lang_zh' | 'lang_ar' | 'lang_hi' | 'lang_ru' | 'lang_tr' | 'lang_ko' | 'lang_nl' | 'lang_vi'
  | 'select_lang' | 'btn_view_faqs' | 'btn_explore_tools' | 'btn_start_generating' | 'btn_try_vector';

export const languageMeta = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'de', label: 'German', native: 'Deutsch' },
  { code: 'it', label: 'Italian', native: 'Italiano' },
  { code: 'pt', label: 'Portuguese', native: 'Português' },
  { code: 'ja', label: 'Japanese', native: '日本語' },
  { code: 'zh', label: 'Chinese', native: '中文' },
  { code: 'ar', label: 'Arabic', native: 'العربية' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ru', label: 'Russian', native: 'Русский' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe' },
  { code: 'ko', label: 'Korean', native: '한국어' },
  { code: 'nl', label: 'Dutch', native: 'Nederlands' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
] as const;

export type SupportedLanguage = typeof languageMeta[number]['code'];

// Base English strings as fallback
const baseTranslations: Record<TranslationKey, string> = {
  nav_tools: 'Tools',
  nav_faq: 'FAQ',
  nav_about: 'About Us',
  nav_contact: 'Contact',
  cta_create_free: 'Create Free QR Code',
  hero_badge: 'Reliable Branded QR Assets',
  hero_title_part1: 'The Professional Way to Create',
  hero_title_part2: 'Customizable QR Codes',
  hero_desc: 'Welcome to the definitive branded QR code generator. Transform standard links into unique visual assets that stay active forever.',
  footer_desc: 'Professional, high-quality customizable QR code tools for creators. High-resolution vector exports that stay yours forever.',
  footer_links_title: 'Digital Links',
  footer_contact_title: 'Contact & Personal',
  footer_company_title: 'Company',
  ws_tab_content: 'Content',
  ws_tab_pattern: 'Pattern',
  ws_tab_corners: 'Corners',
  ws_tab_logo: 'Logo',
  btn_download_png: 'Download PNG',
  btn_download_svg: 'SVG (Print)',
  btn_download_webp: 'WebP (Web)',
  btn_view_faqs: 'Read Frequently Asked Questions',
  btn_explore_tools: 'Explore QR Generation Tools',
  btn_start_generating: 'Start Generating Free QR Codes',
  btn_try_vector: 'Try Vector SVG Export',
  meta_home_title: 'Professional QR Code Generator | Custom Branded QR Studio',
  meta_url_title: 'Custom URL QR Code Generator | Branded QR Maker Studio',
  meta_url_desc: 'Create a professional branded URL QR code. High-resolution SVG exports, custom logos, and unique pattern styles.',
  meta_wifi_title: 'WiFi QR Code Generator | Connect Instantly & Securely',
  meta_wifi_desc: 'Generate a secure WiFi QR code. Let guests scan to connect without typing passwords. High-resolution SVG.',
  meta_vcard_title: 'vCard QR Code Generator | Professional Digital Business Cards',
  meta_vcard_desc: 'Generate a professional QR code business card using the vCard 3.0 standard. High-quality SVG.',
  meta_phone_title: 'Phone QR Code Generator | One-Tap Calling for Businesses',
  meta_phone_desc: 'Generate a professional phone call QR code. Eliminate typing friction for customers. High-resolution SVG.',
  meta_sms_title: 'SMS QR Code Generator | Pre-filled Text Message Links',
  meta_sms_desc: 'Generate a professional SMS QR code that pre-fills the recipient number and message. High-res SVG exports.',
  meta_email_title: 'Email QR Code Generator | Professional Inquiry Automation',
  meta_email_desc: 'Generate a professional email QR code that pre-fills recipient, subject, and body. Free SVG exports.',
  meta_text_title: 'Text to QR Code Generator | Secure Offline Data Storage',
  meta_text_desc: 'Convert notes, serial numbers, or raw text into a scannable QR code. Works offline. High-resolution SVG exports.',
  meta_event_title: 'Event QR Code Generator | Save to Calendar Instantly',
  meta_event_desc: 'Generate a professional event QR code. Let guests save event info directly to their smartphone calendars.',
  meta_location_title: 'Location QR Code Generator | Precise Navigation for Stores',
  meta_location_desc: 'Generate a professional Google Maps QR code. Let customers find your store with precise GPS coordinates.',
  meta_crypto_title: 'Crypto QR Code Generator | Secure Payments for Bitcoin & ETH',
  meta_crypto_desc: 'Generate a professional cryptocurrency payment QR code. Support for Bitcoin, Ethereum, and more.',
  meta_facebook_title: 'Facebook QR Code Generator | Grow Your Brand Community',
  meta_facebook_desc: 'Generate a professional Facebook QR code for your page or group. Increase followers with scannable links.',
  meta_whatsapp_title: 'WhatsApp QR Code Generator | Direct Chat Automation',
  meta_whatsapp_desc: 'Generate a professional WhatsApp QR code with a pre-filled message. Let customers start a chat instantly.',
  meta_googleform_title: 'Google Forms QR Code Generator | Boost Survey Responses',
  meta_googleform_desc: 'Generate a professional Google Forms QR code. Perfect for feedback and event registration.',
  meta_about_title: 'About Us | Our Mission & Privacy Standards',
  meta_about_desc: 'Learn about our mission to provide high-quality, permanent, and branded QR code solutions.',
  meta_faq_title: 'Help & FAQ | Professional QR Code Support',
  meta_faq_desc: 'Find expert answers to common QR code questions. Learn about scan reliability and SVG exports.',
  meta_contact_title: 'Contact Us | Support & Partnerships',
  meta_contact_desc: 'Reach out to the professional QR code experts for support or business partnerships.',
  meta_privacy_title: 'Privacy Policy | Data Security Standards',
  meta_privacy_desc: 'Understand our privacy-first architecture. We use local-rendering technology for your safety.',
  meta_terms_title: 'Terms of Service | Professional Usage Rights',
  meta_terms_desc: 'Review the terms of service. Understand your full commercial ownership of generated QR codes.',
  lang_en: 'English',
  lang_es: 'Spanish',
  lang_fr: 'French',
  lang_de: 'German',
  lang_it: 'Italian',
  lang_pt: 'Portuguese',
  lang_ja: 'Japanese',
  lang_zh: 'Chinese',
  lang_ar: 'Arabic',
  lang_hi: 'Hindi',
  lang_ru: 'Russian',
  lang_tr: 'Turkish',
  lang_ko: 'Korean',
  lang_nl: 'Dutch',
  lang_vi: 'Vietnamese',
  select_lang: 'Select Language',
};

// This is a minimal implementation. In a full production app, 
// these would be separate JSON files fetched on demand.
export const translations: Record<string, Partial<Record<TranslationKey, string>>> = {
  en: baseTranslations,
  es: {
    nav_tools: 'Herramientas',
    nav_faq: 'Preguntas',
    cta_create_free: 'Crear QR Gratis',
    btn_view_faqs: 'Leer Preguntas Frecuentes',
    // ... Simplified for the example, but the system supports full mapping
  },
  de: {
    nav_tools: 'Werkzeuge',
    nav_faq: 'FAQ',
    cta_create_free: 'Kostenlosen QR-Code erstellen',
    btn_view_faqs: 'Häufig gestellte Fragen lesen',
  },
  // Further languages would be populated here or fetched from a CDN
};

export const getTranslation = (lang: string, key: TranslationKey): string => {
  return translations[lang]?.[key] || baseTranslations[key];
};
