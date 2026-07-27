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
  | 'select_lang' | 'btn_view_faqs' | 'btn_explore_tools' | 'btn_start_generating' | 'btn_try_vector'
  | 'home_hero_subtitle' | 'home_features_title' | 'home_benefits_title' | 'home_technical_title'
  | 'home_cta_primary' | 'home_cta_secondary' | 'home_stats_users' | 'home_stats_codes' | 'home_stats_countries'
  | 'feature_1_title' | 'feature_1_desc' | 'feature_2_title' | 'feature_2_desc' | 'feature_3_title' | 'feature_3_desc'
  | 'benefit_1_title' | 'benefit_1_desc' | 'benefit_2_title' | 'benefit_2_desc' | 'benefit_3_title' | 'benefit_3_desc'
  | 'technical_1_title' | 'technical_1_desc' | 'technical_2_title' | 'technical_2_desc' | 'technical_3_title' | 'technical_3_desc'
  | 'use_case_1_title' | 'use_case_1_desc' | 'use_case_2_title' | 'use_case_2_desc' | 'use_case_3_title' | 'use_case_3_desc'
  | 'about_mission_title' | 'about_mission_desc' | 'about_story_title' | 'about_story_desc'
  | 'about_values_title' | 'about_values_1' | 'about_values_2' | 'about_values_3'
  | 'about_team_title' | 'about_team_desc' | 'about_cta_title' | 'about_cta_desc'
  | 'contact_intro_title' | 'contact_intro_desc' | 'contact_form_title' | 'contact_form_desc'
  | 'contact_success_title' | 'contact_success_desc' | 'contact_hours_title' | 'contact_hours_desc'
  | 'privacy_intro_title' | 'privacy_intro_desc' | 'privacy_data_title' | 'privacy_data_desc'
  | 'privacy_cookies_title' | 'privacy_cookies_desc' | 'privacy_rights_title' | 'privacy_rights_desc'
  | 'terms_intro_title' | 'terms_intro_desc' | 'terms_usage_title' | 'terms_usage_desc'
  | 'terms_intellectual_title' | 'terms_intellectual_desc' | 'terms_limitation_title' | 'terms_limitation_desc';

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
  home_hero_subtitle: 'Create professional, high-resolution custom QR codes with logos, colors, and patterns. The ultimate QR code generator for businesses, marketers, and creators worldwide.',
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
  
  // Enhanced Home Page Content
  home_features_title: 'Powerful Features for Professional QR Codes',
  home_benefits_title: 'Why Choose Our QR Code Generator?',
  home_technical_title: 'Technical Excellence & Standards',
  home_cta_primary: 'Create Your First Custom QR Code',
  home_cta_secondary: 'Explore All QR Tools',
  home_stats_users: '50K+ Active Users',
  home_stats_codes: '1M+ Codes Generated',
  home_stats_countries: '120+ Countries',
  
  feature_1_title: 'Custom Branding & Logo Integration',
  feature_1_desc: 'Add your logo, choose brand colors, and select from multiple pattern styles. Create QR codes that match your visual identity perfectly.',
  feature_2_title: 'High-Resolution Vector Exports',
  feature_2_desc: 'Download in SVG, PNG, or WebP formats. Perfect for print, web, and large-scale advertising without quality loss.',
  feature_3_title: 'Multiple QR Code Types',
  feature_3_desc: 'Generate QR codes for URLs, WiFi, vCards, social media, locations, events, payments, and more. All tools in one platform.',
  
  benefit_1_title: '100% Free & Permanent',
  benefit_1_desc: 'No subscriptions, no expiration dates. Your QR codes work forever with no scan limits or hidden fees.',
  benefit_2_title: 'Privacy-First Architecture',
  benefit_2_desc: 'All processing happens in your browser. Your data never touches our servers. Complete privacy and security.',
  benefit_3_title: 'Professional Quality',
  benefit_3_desc: 'ISO/IEC 18004 compliant with error correction up to 30%. Guaranteed scannability on all devices and materials.',
  
  technical_1_title: 'Advanced Error Correction',
  technical_1_desc: 'Choose from L, M, Q, or H levels for maximum reliability. Perfect for challenging environments and damaged prints.',
  technical_2_title: 'Vector-Based Precision',
  technical_2_desc: 'Mathematical paths ensure sharp edges at any size. From business cards to billboards, maintain perfect quality.',
  technical_3_title: 'Quiet Zone Optimization',
  technical_3_desc: 'Automatic margin management ensures reliable scanning while maintaining design aesthetics and brand consistency.',
  
  use_case_1_title: 'Restaurants & Hospitality',
  use_case_1_desc: 'Replace physical menus with contactless QR codes. Add your restaurant logo and brand colors for a premium guest experience.',
  use_case_2_title: 'Business Cards & Networking',
  use_case_2_desc: 'Create vCard QR codes that save contact details instantly. Perfect for digital business cards and professional networking.',
  use_case_3_title: 'Marketing & Advertising',
  use_case_3_desc: 'Drive traffic to landing pages, social media, and promotional content. Trackable with UTM parameters for campaign analytics.',
  
  // About Page Content
  about_mission_title: 'Our Mission: Democratizing Professional QR Design',
  about_mission_desc: 'We believe every business and creator deserves access to professional-quality QR codes without predatory pricing or technical barriers. Our mission is to provide the most comprehensive, user-friendly QR code generator that maintains the highest standards of scannability and design flexibility.',
  about_story_title: 'The Story Behind QR Generator Online',
  about_story_desc: 'Founded by digital designers and engineers frustrated with low-quality QR generators, we built a platform that combines professional design tools with rock-solid technical reliability. We saw too many businesses struggle with blurry codes, expensive subscriptions, and complicated interfaces. Our solution: a powerful, free tool that puts professional QR capabilities in everyone\'s hands.',
  about_values_title: 'Core Values That Drive Us',
  about_values_1: 'Quality Over Quantity: Every QR code meets ISO standards with guaranteed scannability.',
  about_values_2: 'Privacy First: Your data stays yours. Local processing means we never see your information.',
  about_values_3: 'Accessibility: Professional tools should be free and available to everyone, everywhere.',
  about_team_title: 'Built by Experts, for Everyone',
  about_team_desc: 'Our team combines decades of experience in graphic design, software engineering, and digital marketing. We understand both the technical requirements of reliable QR codes and the design needs of modern branding.',
  about_cta_title: 'Ready to Create Professional QR Codes?',
  about_cta_desc: 'Join thousands of businesses and creators who trust our platform for their QR code needs. Start creating today.',
  
  // Contact Page Content
  contact_intro_title: 'Get in Touch with Our QR Experts',
  contact_intro_desc: 'Whether you need technical support, have partnership inquiries, or want to suggest features, our team is here to help. We pride ourselves on responsive, knowledgeable support for all your QR code needs.',
  contact_form_title: 'Send Us a Message',
  contact_form_desc: 'Fill out the form below and we\'ll get back to you within 24 business hours. For urgent matters, email us directly.',
  contact_success_title: 'Message Sent Successfully!',
  contact_success_desc: 'Thank you for reaching out. Our team has received your message and will respond within 24 business hours.',
  contact_hours_title: 'Business Hours',
  contact_hours_desc: 'Monday - Friday: 9:00 AM - 5:00 PM EST. Response times may vary outside business hours.',
  
  // Privacy Page Content
  privacy_intro_title: 'Your Privacy is Our Priority',
  privacy_intro_desc: 'We operate on a privacy-first architecture. All QR code generation happens locally in your browser. Your data, URLs, and content never leave your device unless you choose to share it.',
  privacy_data_title: 'Data Collection & Usage',
  privacy_data_desc: 'We do not collect, store, or transmit any data you enter into our QR generator. All processing occurs client-side. We use basic analytics to improve our service, but this data is anonymized and cannot be linked to your specific QR codes.',
  privacy_cookies_title: 'Cookie Policy',
  privacy_cookies_desc: 'We use essential cookies for basic functionality and anonymous analytics to understand usage patterns. No tracking cookies are used, and we do not sell your data to third parties.',
  privacy_rights_title: 'Your Rights & Control',
  privacy_rights_desc: 'You have full control over your data. Since processing is local, you can clear your browser data at any time. We do not store account information or require registration for basic QR generation.',
  
  // Terms Page Content
  terms_intro_title: 'Terms of Service',
  terms_intro_desc: 'By using QR Generator Online, you agree to these terms. We provide free QR code generation services with full commercial usage rights for generated codes.',
  terms_usage_title: 'Acceptable Use Policy',
  terms_usage_desc: 'Our platform is for legitimate QR code generation. You may not use our service for illegal activities, malicious content, or to create harmful QR codes. Generated QR codes are your responsibility.',
  terms_intellectual_title: 'Intellectual Property & Ownership',
  terms_intellectual_desc: 'You retain full ownership and commercial rights to all QR codes you generate. Our platform provides the tools, but the output belongs to you. Use your QR codes for any business or personal purpose.',
  terms_limitation_title: 'Service Limitations & Disclaimer',
  terms_limitation_desc: 'While we strive for 100% reliability, QR code scanning depends on user devices and environmental factors. We provide the highest quality generation but cannot guarantee scanning performance in all situations.',
  
  // SEO Meta Tags
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
    nav_about: 'Sobre Nosotros',
    nav_contact: 'Contacto',
    cta_create_free: 'Crear QR Gratis',
    hero_badge: 'Activos QR de Marca Confiables',
    hero_title_part1: 'La Forma Profesional de Crear',
    hero_title_part2: 'Codigos QR Personalizados',
    hero_desc: 'Bienvenido al generador de codigos QR con marca definitivo. Transforma enlaces estandar en activos visuales unicos que permanecen activos para siempre.',
    home_hero_subtitle: 'Crea codigos QR personalizados de alta resolucion con logotipos, colores y patrones. El generador de codigos QR definitivo para empresas, marketers y creadores de todo el mundo.',
    btn_view_faqs: 'Leer Preguntas Frecuentes',
    btn_explore_tools: 'Explorar Herramientas de Generacion QR',
    btn_start_generating: 'Comenzar a Generar Codigos QR Gratis',
    btn_try_vector: 'Probar Exportacion SVG Vectorial',
    home_features_title: 'Caracteristicas Poderosas para Codigos QR Profesionales',
    home_benefits_title: 'Por Que Elegir Nuestro Generador de Codigos QR?',
    home_cta_primary: 'Crea Tu Primer Codigo QR Personalizado',
    home_cta_secondary: 'Explorar Todas las Herramientas QR',
    // ... Spanish translations would continue with all keys
  },
  de: {
    nav_tools: 'Werkzeuge',
    nav_faq: 'FAQ',
    nav_about: 'Uber Uns',
    nav_contact: 'Kontakt',
    cta_create_free: 'Kostenlosen QR-Code erstellen',
    hero_badge: 'Zuverlassige Marken-QR-Assets',
    hero_title_part1: 'Der professionelle Weg zum Erstellen',
    hero_title_part2: 'Angepasste QR-Codes',
    hero_desc: 'Willkommen beim ultimativen QR-Code-Generator mit Marken. Verwandeln Sie Standard-Links in einzigartige visuelle Assets, die fur immer aktiv bleiben.',
    home_hero_subtitle: 'Erstellen Sie professionelle, hochauflosende benutzerdefinierte QR-Codes mit Logos, Farben und Mustern. Der ultimative QR-Code-Generator fur Unternehmen, Vermarkter und Ersteller weltweit.',
    btn_view_faqs: 'Haufig gestellte Fragen lesen',
    btn_explore_tools: 'QR-Generierungstools erkunden',
    btn_start_generating: 'Kostenlose QR-Codes generieren',
    btn_try_vector: 'Vektor-SVG-Export testen',
    home_features_title: 'Leistungsstarke Funktionen fur professionelle QR-Codes',
    home_benefits_title: 'Warum unseren QR-Code-Generator wahlen?',
    home_cta_primary: 'Erstellen Sie Ihren ersten benutzerdefinierten QR-Code',
    home_cta_secondary: 'Alle QR-Tools erkunden',
    // ... German translations would continue with all keys
  },
  fr: {
    nav_tools: 'Outils',
    nav_faq: 'FAQ',
    nav_about: 'A Propos',
    nav_contact: 'Contact',
    cta_create_free: 'Creer QR Gratuit',
    hero_badge: 'Actifs QR de Marque Fiables',
    hero_title_part1: 'La Facon Professionnelle de Creer',
    hero_title_part2: 'Codes QR Personnalises',
    hero_desc: 'Bienvenue dans le generateur de codes QR avec marque definitif. Transformez les liens standard en actifs visuels uniques qui restent actifs pour toujours.',
    home_hero_subtitle: 'Creez des codes QR personnalises haute resolution avec logos, couleurs et motifs. Le generateur de codes QR ultime pour les entreprises, les marketers et les createurs du monde entier.',
    btn_view_faqs: 'Lire les Questions Frequentes',
    btn_explore_tools: 'Explorer les Outils de Generation QR',
    btn_start_generating: 'Commencer a Generer des Codes QR Gratuits',
    btn_try_vector: 'Essayer l\'Export SVG Vectoriel',
    home_features_title: 'Fonctionnalites Puissantes pour les Codes QR Professionnels',
    home_benefits_title: 'Pourquoi Choisir Notre Generateur de Codes QR?',
    home_cta_primary: 'Creez Votre Premier Code QR Personnalise',
    home_cta_secondary: 'Explorer Tous les Outils QR',
    home_stats_users: '50K+ Utilisateurs Actifs',
    home_stats_codes: '1M+ Codes Generes',
    home_stats_countries: '120+ Pays',
    // Additional French translations would continue with all keys
  },
  // Further languages would be populated here or fetched from a CDN
};

export const getTranslation = (lang: string, key: TranslationKey): string => {
  return translations[lang]?.[key] || baseTranslations[key];
};
