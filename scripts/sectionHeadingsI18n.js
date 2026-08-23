/**
 * Localized versions of scripts/sectionHeadings.js's five templated H2s.
 *
 * Mirrors that file's structure exactly (ENTITY / PLURAL / EXPLICIT / template
 * sentences) so translating ~31 entity labels + 14 explicit-page heading sets
 * covers all 44 pages' section headings, instead of hand-translating every
 * heading on every page individually.
 */

const ENTITY_I18N = {
  es: {
    '/url-qr-code-generator': 'Código QR de URL',
    '/wifi-qr-code-generator': 'Código QR de WiFi',
    '/vcard-qr-code-generator': 'Código QR vCard',
    '/whatsapp-qr-code-generator': 'Código QR de WhatsApp',
    '/facebook-qr-code-generator': 'Código QR de Facebook',
    '/email-qr-code-generator': 'Código QR de Correo',
    '/sms-qr-code-generator': 'Código QR de SMS',
    '/phone-qr-code-generator': 'Código QR de Teléfono',
    '/location-qr-code-generator': 'Código QR de Ubicación',
    '/event-qr-code-generator': 'Código QR de Evento',
    '/crypto-qr-code-generator': 'Código QR Cripto',
    '/text-qr-code-generator': 'Código QR de Texto',
    '/googleform-qr-code-generator': 'Código QR de Google Forms',
    '/instagram-qr-code-generator': 'Código QR de Instagram',
    '/youtube-qr-code-generator': 'Código QR de YouTube',
    '/linkedin-qr-code-generator': 'Código QR de LinkedIn',
    '/twitter-qr-code-generator': 'Código QR de X (Twitter)',
    '/tiktok-qr-code-generator': 'Código QR de TikTok',
    '/telegram-qr-code-generator': 'Código QR de Telegram',
    '/paypal-qr-code-generator': 'Código QR de PayPal',
    '/upi-qr-code-generator': 'Código QR de UPI',
    '/qr-code-with-logo': 'Código QR con Logo',
    '/custom-qr-codes': 'Código QR Personalizado',
    '/colored-qr-code-generator': 'Código QR en Color',
    '/svg-qr-code-generator': 'Código QR SVG',
    '/high-resolution-qr-codes': 'Código QR de Alta Resolución',
    '/qr-code-scanner': 'Escáner de Código QR',
    '/social-media-qr-code': 'Código QR de Redes Sociales',
    '/bulk-qr-code-generator': 'Código QR Masivo',
    '/app-store-qr-code-generator': 'Código QR de App Store',
    '/pdf-qr-code-generator': 'Código QR de PDF'
  },
  ar: {
    '/url-qr-code-generator': 'رمز QR للرابط',
    '/wifi-qr-code-generator': 'رمز QR للواي فاي',
    '/vcard-qr-code-generator': 'رمز QR لبطاقة vCard',
    '/whatsapp-qr-code-generator': 'رمز QR لواتساب',
    '/facebook-qr-code-generator': 'رمز QR لفيسبوك',
    '/email-qr-code-generator': 'رمز QR للبريد الإلكتروني',
    '/sms-qr-code-generator': 'رمز QR للرسائل النصية',
    '/phone-qr-code-generator': 'رمز QR للهاتف',
    '/location-qr-code-generator': 'رمز QR للموقع',
    '/event-qr-code-generator': 'رمز QR للحدث',
    '/crypto-qr-code-generator': 'رمز QR للعملات الرقمية',
    '/text-qr-code-generator': 'رمز QR للنص',
    '/googleform-qr-code-generator': 'رمز QR لنماذج جوجل',
    '/instagram-qr-code-generator': 'رمز QR لإنستغرام',
    '/youtube-qr-code-generator': 'رمز QR ليوتيوب',
    '/linkedin-qr-code-generator': 'رمز QR للينكدإن',
    '/twitter-qr-code-generator': 'رمز QR لـ X (تويتر)',
    '/tiktok-qr-code-generator': 'رمز QR لتيك توك',
    '/telegram-qr-code-generator': 'رمز QR لتيليجرام',
    '/paypal-qr-code-generator': 'رمز QR لباي بال',
    '/upi-qr-code-generator': 'رمز QR لـ UPI',
    '/qr-code-with-logo': 'رمز QR بشعار',
    '/custom-qr-codes': 'رمز QR مخصص',
    '/colored-qr-code-generator': 'رمز QR ملون',
    '/svg-qr-code-generator': 'رمز QR بصيغة SVG',
    '/high-resolution-qr-codes': 'رمز QR عالي الدقة',
    '/qr-code-scanner': 'ماسح رمز QR',
    '/social-media-qr-code': 'رمز QR للتواصل الاجتماعي',
    '/bulk-qr-code-generator': 'رمز QR الجماعي',
    '/app-store-qr-code-generator': 'رمز QR لمتجر التطبيقات',
    '/pdf-qr-code-generator': 'رمز QR لملف PDF'
  },
  hi: {
    '/url-qr-code-generator': 'URL क्यूआर कोड',
    '/wifi-qr-code-generator': 'वाईफाई क्यूआर कोड',
    '/vcard-qr-code-generator': 'vCard क्यूआर कोड',
    '/whatsapp-qr-code-generator': 'व्हाट्सएप क्यूआर कोड',
    '/facebook-qr-code-generator': 'फेसबुक क्यूआर कोड',
    '/email-qr-code-generator': 'ईमेल क्यूआर कोड',
    '/sms-qr-code-generator': 'SMS क्यूआर कोड',
    '/phone-qr-code-generator': 'फोन क्यूआर कोड',
    '/location-qr-code-generator': 'लोकेशन क्यूआर कोड',
    '/event-qr-code-generator': 'इवेंट क्यूआर कोड',
    '/crypto-qr-code-generator': 'क्रिप्टो क्यूआर कोड',
    '/text-qr-code-generator': 'टेक्स्ट क्यूआर कोड',
    '/googleform-qr-code-generator': 'गूगल फॉर्म्स क्यूआर कोड',
    '/instagram-qr-code-generator': 'इंस्टाग्राम क्यूआर कोड',
    '/youtube-qr-code-generator': 'यूट्यूब क्यूआर कोड',
    '/linkedin-qr-code-generator': 'लिंक्डइन क्यूआर कोड',
    '/twitter-qr-code-generator': 'X (ट्विटर) क्यूआर कोड',
    '/tiktok-qr-code-generator': 'टिकटॉक क्यूआर कोड',
    '/telegram-qr-code-generator': 'टेलीग्राम क्यूआर कोड',
    '/paypal-qr-code-generator': 'पेपाल क्यूआर कोड',
    '/upi-qr-code-generator': 'UPI क्यूआर कोड',
    '/qr-code-with-logo': 'लोगो वाला क्यूआर कोड',
    '/custom-qr-codes': 'कस्टम क्यूआर कोड',
    '/colored-qr-code-generator': 'रंगीन क्यूआर कोड',
    '/svg-qr-code-generator': 'SVG क्यूआर कोड',
    '/high-resolution-qr-codes': 'हाई-रेज़ोल्यूशन क्यूआर कोड',
    '/qr-code-scanner': 'क्यूआर कोड स्कैनर',
    '/social-media-qr-code': 'सोशल मीडिया क्यूआर कोड',
    '/bulk-qr-code-generator': 'बल्क क्यूआर कोड',
    '/app-store-qr-code-generator': 'ऐप स्टोर क्यूआर कोड',
    '/pdf-qr-code-generator': 'PDF क्यूआर कोड'
  },
  tr: {
    '/url-qr-code-generator': 'URL QR Kodu',
    '/wifi-qr-code-generator': 'WiFi QR Kodu',
    '/vcard-qr-code-generator': 'vCard QR Kodu',
    '/whatsapp-qr-code-generator': 'WhatsApp QR Kodu',
    '/facebook-qr-code-generator': 'Facebook QR Kodu',
    '/email-qr-code-generator': 'E-posta QR Kodu',
    '/sms-qr-code-generator': 'SMS QR Kodu',
    '/phone-qr-code-generator': 'Telefon QR Kodu',
    '/location-qr-code-generator': 'Konum QR Kodu',
    '/event-qr-code-generator': 'Etkinlik QR Kodu',
    '/crypto-qr-code-generator': 'Kripto QR Kodu',
    '/text-qr-code-generator': 'Metin QR Kodu',
    '/googleform-qr-code-generator': 'Google Formlar QR Kodu',
    '/instagram-qr-code-generator': 'Instagram QR Kodu',
    '/youtube-qr-code-generator': 'YouTube QR Kodu',
    '/linkedin-qr-code-generator': 'LinkedIn QR Kodu',
    '/twitter-qr-code-generator': 'X (Twitter) QR Kodu',
    '/tiktok-qr-code-generator': 'TikTok QR Kodu',
    '/telegram-qr-code-generator': 'Telegram QR Kodu',
    '/paypal-qr-code-generator': 'PayPal QR Kodu',
    '/upi-qr-code-generator': 'UPI QR Kodu',
    '/qr-code-with-logo': 'Logolu QR Kodu',
    '/custom-qr-codes': 'Özel QR Kodu',
    '/colored-qr-code-generator': 'Renkli QR Kodu',
    '/svg-qr-code-generator': 'SVG QR Kodu',
    '/high-resolution-qr-codes': 'Yüksek Çözünürlüklü QR Kodu',
    '/qr-code-scanner': 'QR Kod Tarayıcı',
    '/social-media-qr-code': 'Sosyal Medya QR Kodu',
    '/bulk-qr-code-generator': 'Toplu QR Kodu',
    '/app-store-qr-code-generator': 'App Store QR Kodu',
    '/pdf-qr-code-generator': 'PDF QR Kodu'
  },
  vi: {
    '/url-qr-code-generator': 'Mã QR URL',
    '/wifi-qr-code-generator': 'Mã QR WiFi',
    '/vcard-qr-code-generator': 'Mã QR vCard',
    '/whatsapp-qr-code-generator': 'Mã QR WhatsApp',
    '/facebook-qr-code-generator': 'Mã QR Facebook',
    '/email-qr-code-generator': 'Mã QR Email',
    '/sms-qr-code-generator': 'Mã QR SMS',
    '/phone-qr-code-generator': 'Mã QR Điện Thoại',
    '/location-qr-code-generator': 'Mã QR Vị Trí',
    '/event-qr-code-generator': 'Mã QR Sự Kiện',
    '/crypto-qr-code-generator': 'Mã QR Crypto',
    '/text-qr-code-generator': 'Mã QR Văn Bản',
    '/googleform-qr-code-generator': 'Mã QR Google Form',
    '/instagram-qr-code-generator': 'Mã QR Instagram',
    '/youtube-qr-code-generator': 'Mã QR YouTube',
    '/linkedin-qr-code-generator': 'Mã QR LinkedIn',
    '/twitter-qr-code-generator': 'Mã QR X (Twitter)',
    '/tiktok-qr-code-generator': 'Mã QR TikTok',
    '/telegram-qr-code-generator': 'Mã QR Telegram',
    '/paypal-qr-code-generator': 'Mã QR PayPal',
    '/upi-qr-code-generator': 'Mã QR UPI',
    '/qr-code-with-logo': 'Mã QR Có Logo',
    '/custom-qr-codes': 'Mã QR Tùy Chỉnh',
    '/colored-qr-code-generator': 'Mã QR Màu',
    '/svg-qr-code-generator': 'Mã QR SVG',
    '/high-resolution-qr-codes': 'Mã QR Độ Phân Giải Cao',
    '/qr-code-scanner': 'Máy Quét Mã QR',
    '/social-media-qr-code': 'Mã QR Mạng Xã Hội',
    '/bulk-qr-code-generator': 'Mã QR Hàng Loạt',
    '/app-store-qr-code-generator': 'Mã QR App Store',
    '/pdf-qr-code-generator': 'Mã QR PDF'
  }
};

/** Plural form for the "where to use" heading, where a template suffix reads wrong. */
const PLURAL_I18N = {
  es: {
    '/qr-code-with-logo': 'Códigos QR con Logo',
    '/custom-qr-codes': 'Códigos QR Personalizados',
    '/high-resolution-qr-codes': 'Códigos QR de Alta Resolución',
    '/twitter-qr-code-generator': 'Códigos QR de X (Twitter)',
    '/qr-code-scanner': 'el Escáner de Código QR',
    '/bulk-qr-code-generator': 'Códigos QR Masivos'
  },
  ar: {
    '/qr-code-with-logo': 'رموز QR بشعار',
    '/custom-qr-codes': 'رموز QR مخصصة',
    '/high-resolution-qr-codes': 'رموز QR عالية الدقة',
    '/twitter-qr-code-generator': 'رموز QR لـ X (تويتر)',
    '/qr-code-scanner': 'ماسح رمز QR',
    '/bulk-qr-code-generator': 'رموز QR الجماعية'
  },
  hi: {
    '/qr-code-with-logo': 'लोगो वाले क्यूआर कोड',
    '/custom-qr-codes': 'कस्टम क्यूआर कोड',
    '/high-resolution-qr-codes': 'हाई-रेज़ोल्यूशन क्यूआर कोड',
    '/twitter-qr-code-generator': 'X (ट्विटर) क्यूआर कोड',
    '/qr-code-scanner': 'क्यूआर कोड स्कैनर',
    '/bulk-qr-code-generator': 'बल्क क्यूआर कोड'
  },
  tr: {
    '/qr-code-with-logo': 'Logolu QR Kodları',
    '/custom-qr-codes': 'Özel QR Kodları',
    '/high-resolution-qr-codes': 'Yüksek Çözünürlüklü QR Kodları',
    '/twitter-qr-code-generator': 'X (Twitter) QR Kodları',
    '/qr-code-scanner': 'QR Kod Tarayıcıyı',
    '/bulk-qr-code-generator': 'Toplu QR Kodları'
  },
  vi: {
    '/qr-code-with-logo': 'Mã QR Có Logo',
    '/custom-qr-codes': 'Mã QR Tùy Chỉnh',
    '/high-resolution-qr-codes': 'Mã QR Độ Phân Giải Cao',
    '/twitter-qr-code-generator': 'Mã QR X (Twitter)',
    '/qr-code-scanner': 'Máy Quét Mã QR',
    '/bulk-qr-code-generator': 'Mã QR Hàng Loạt'
  }
};

/** Sentence templates each locale plugs {entity}/{plural} into. */
const TEMPLATES_I18N = {
  es: {
    steps: (e) => `Cómo Crear un ${e} en 3 Pasos`,
    features: (e) => `Características y Capacidades de ${e}`,
    useCases: (p) => `Dónde Usar ${p}`,
    useCasesSingular: (e) => `Dónde Usar un ${e}`,
    faqs: (e) => `Preguntas Frecuentes sobre ${e}`,
    bestPractices: (e) => `Lista de Verificación de Impresión y Escaneo de ${e}`,
    fallback: {
      steps: 'Cómo Generar e Implementar (Manual Práctico en 3 Pasos)',
      features: 'Capacidades Principales y Ventajas Profesionales',
      useCases: 'Aplicaciones Prácticas Multisectoriales',
      faqs: 'Preguntas Técnicas y Prácticas Frecuentes',
      bestPractices: 'Lista de Verificación de Producción y Calidad de Escaneo'
    }
  },
  ar: {
    steps: (e) => `كيفية إنشاء ${e} في 3 خطوات`,
    features: (e) => `ميزات وقدرات ${e}`,
    useCases: (p) => `أين تُستخدم ${p}`,
    useCasesSingular: (e) => `أين يُستخدم ${e}`,
    faqs: (e) => `الأسئلة الشائعة حول ${e}`,
    bestPractices: (e) => `قائمة تحقق الطباعة والمسح لـ ${e}`,
    fallback: {
      steps: 'كيفية الإنشاء والنشر (دليل عملي من 3 خطوات)',
      features: 'القدرات الأساسية والمزايا الاحترافية',
      useCases: 'تطبيقات عملية عبر مختلف الصناعات',
      faqs: 'الأسئلة الشائعة التقنية والعملية',
      bestPractices: 'قائمة تحقق الإنتاج وجودة المسح'
    }
  },
  hi: {
    steps: (e) => `3 चरणों में ${e} कैसे बनाएं`,
    features: (e) => `${e} विशेषताएं और क्षमताएं`,
    useCases: (p) => `${p} का उपयोग कहां करें`,
    useCasesSingular: (e) => `${e} का उपयोग कहां करें`,
    faqs: (e) => `${e} सामान्य प्रश्न`,
    bestPractices: (e) => `${e} प्रिंट और स्कैन चेकलिस्ट`,
    fallback: {
      steps: 'कैसे जनरेट और डिप्लॉय करें (3-चरण व्यावहारिक गाइड)',
      features: 'मुख्य क्षमताएं और एंटरप्राइज़ लाभ',
      useCases: 'क्रॉस-इंडस्ट्री व्यावहारिक अनुप्रयोग',
      faqs: 'व्यापक तकनीकी और व्यावहारिक सामान्य प्रश्न',
      bestPractices: 'प्रोडक्शन चेकलिस्ट और स्कैनिंग गुणवत्ता आश्वासन'
    }
  },
  tr: {
    steps: (e) => `3 Adımda ${e} Nasıl Oluşturulur`,
    features: (e) => `${e} Özellikleri ve Yetenekleri`,
    useCases: (p) => `${p} Nerede Kullanılır`,
    useCasesSingular: (e) => `${e} Nerede Kullanılır`,
    faqs: (e) => `${e} SSS`,
    bestPractices: (e) => `${e} Baskı ve Tarama Kontrol Listesi`,
    fallback: {
      steps: 'Nasıl Oluşturulur ve Yayınlanır (3 Adımlı Pratik Kılavuz)',
      features: 'Temel Yetenekler ve Kurumsal Avantajlar',
      useCases: 'Sektörler Arası Pratik Uygulamalar',
      faqs: 'Kapsamlı Teknik ve Pratik SSS',
      bestPractices: 'Üretim Kontrol Listesi ve Tarama Kalite Güvencesi'
    }
  },
  vi: {
    steps: (e) => `Cách Tạo ${e} Trong 3 Bước`,
    features: (e) => `Tính Năng & Khả Năng Của ${e}`,
    useCases: (p) => `Nơi Sử Dụng ${p}`,
    useCasesSingular: (e) => `Nơi Sử Dụng ${e}`,
    faqs: (e) => `Câu Hỏi Thường Gặp Về ${e}`,
    bestPractices: (e) => `Danh Sách Kiểm Tra In & Quét ${e}`,
    fallback: {
      steps: 'Cách Tạo & Triển Khai (Hướng Dẫn Thực Hành 3 Bước)',
      features: 'Khả Năng Cốt Lõi & Lợi Thế Doanh Nghiệp',
      useCases: 'Ứng Dụng Thực Tế Đa Ngành',
      faqs: 'Câu Hỏi Thường Gặp Kỹ Thuật & Thực Hành',
      bestPractices: 'Danh Sách Kiểm Tra Sản Xuất & Đảm Bảo Chất Lượng Quét'
    }
  }
};

/** Blog and company pages, where templated phrasing does not apply. */
const EXPLICIT_I18N = {
  es: {
    '/': {
      steps: 'Cómo Crear un Código QR en 3 Pasos',
      features: 'Qué Puedes Personalizar en Cada Código QR',
      useCases: 'Para Qué Usa la Gente Nuestros Códigos QR',
      faqs: 'Preguntas Frecuentes del Generador de Códigos QR',
      bestPractices: 'Lista de Verificación Antes de Imprimir un Código QR'
    },
    '/pricing': {
      steps: 'Cómo Empezar con el Plan Gratuito',
      features: 'Qué Incluye el Plan Gratuito',
      useCases: 'A Quién le Conviene Cada Plan',
      faqs: 'Preguntas Frecuentes sobre Precios y Facturación',
      bestPractices: 'Qué Verificar Antes de Pagar por una Herramienta QR'
    },
    '/faqs-qr-code-generator': {
      steps: 'Cómo Obtener una Respuesta Rápido',
      features: 'Temas que Cubre este Centro de Ayuda',
      useCases: 'Situaciones Comunes que Nos Consultan',
      faqs: 'Preguntas Frecuentes',
      bestPractices: 'Lista de Verificación de Solución de Problemas'
    },
    '/about': {
      steps: 'Cómo Funciona QR Generator Online',
      features: 'Qué Hace Diferente a esta Herramienta',
      useCases: 'Quién Usa QR Generator Online',
      faqs: 'Sobre QR Generator Online — Preguntas Frecuentes',
      bestPractices: 'Nuestros Compromisos Contigo'
    },
    '/contact': {
      steps: 'Cómo Contactar Soporte en 3 Pasos',
      features: 'En Qué Puede Ayudarte Nuestro Equipo de Soporte',
      useCases: 'Motivos Comunes de Contacto',
      faqs: 'Preguntas Frecuentes de Soporte y Contacto',
      bestPractices: 'Qué Incluir en Tu Mensaje'
    },
    '/privacy': {
      steps: 'Cómo se Gestionan Tus Datos, Paso a Paso',
      features: 'Nuestras Garantías de Privacidad',
      useCases: 'Qué Significa Esto en la Práctica',
      faqs: 'Preguntas Frecuentes de Privacidad y Datos',
      bestPractices: 'Cómo Mantener Privados Tus Datos QR'
    },
    '/terms': {
      steps: 'Tu Acuerdo en 3 Puntos',
      features: 'Qué Tienes Permitido Hacer',
      useCases: 'Uso Comercial Explicado',
      faqs: 'Preguntas Frecuentes de Términos de Servicio',
      bestPractices: 'Lista de Verificación de Uso Responsable'
    },
    '/blog': {
      steps: 'Cómo Usar Estas Guías',
      features: 'Qué Cubren Nuestras Guías',
      useCases: 'Industrias Sobre las que Escribimos',
      faqs: 'Preguntas Frecuentes de las Guías QR',
      bestPractices: 'Por Dónde Empezar si Eres Nuevo en Códigos QR'
    },
    '/blog/qr-codes-for-restaurants': {
      steps: 'Cómo Configurar un Menú QR en 3 Pasos',
      features: 'Qué Necesita un Buen Menú QR',
      useCases: 'Dónde Funcionan Mejor los Menús QR en un Local',
      faqs: 'Preguntas Frecuentes sobre Menús QR de Restaurantes',
      bestPractices: 'Lista de Verificación Antes de Imprimir Menús de Mesa'
    },
    '/blog/printing-qr-codes-guide': {
      steps: 'Cómo Preparar un Código QR para Impresión',
      features: 'Qué Afecta la Escaneabilidad en Impresión',
      useCases: 'Códigos QR en Distintos Formatos de Impresión',
      faqs: 'Preguntas Frecuentes sobre Impresión de Códigos QR',
      bestPractices: 'Lista de Verificación de Preimpresión para Códigos QR'
    },
    '/blog/vcard-qr-code-business-cards': {
      steps: 'Cómo Poner una vCard en Tu Tarjeta de Presentación',
      features: 'Qué Incluir en una Tarjeta Digital',
      useCases: 'Dónde Rinden las Tarjetas de Presentación Digitales',
      faqs: 'Preguntas Frecuentes sobre Tarjetas vCard',
      bestPractices: 'Lista de Verificación Antes de Pedir Tarjetas de Presentación'
    },
    '/blog/qr-codes-for-real-estate': {
      steps: 'Cómo Añadir Códigos QR a un Anuncio',
      features: 'A Qué Deben Enlazar los Códigos QR de Anuncios',
      useCases: 'Dónde Colocan los Agentes los Códigos QR',
      faqs: 'Preguntas Frecuentes sobre Códigos QR Inmobiliarios',
      bestPractices: 'Lista de Verificación para Carteles y Folletos'
    },
    '/blog/wifi-qr-codes-for-hospitality': {
      steps: 'Cómo Configurar Códigos QR de WiFi para Huéspedes',
      features: 'Qué Deben Hacer los Códigos WiFi para Huéspedes',
      useCases: 'Dónde Colocar Códigos WiFi en una Propiedad',
      faqs: 'Preguntas Frecuentes sobre Códigos QR de WiFi para Huéspedes',
      bestPractices: 'Lista de Verificación para Anfitriones y Gerentes de Hotel'
    }
  },
  ar: {
    '/': {
      steps: 'كيفية إنشاء رمز QR في 3 خطوات',
      features: 'ما يمكنك تخصيصه في كل رمز QR',
      useCases: 'فيما يستخدم الناس رموز QR الخاصة بنا',
      faqs: 'الأسئلة الشائعة حول مولّد رموز QR',
      bestPractices: 'قائمة تحقق قبل طباعة رمز QR'
    },
    '/pricing': {
      steps: 'كيفية البدء بالخطة المجانية',
      features: 'ما تتضمنه الخطة المجانية',
      useCases: 'لمن تناسب كل خطة',
      faqs: 'الأسئلة الشائعة حول الأسعار والفوترة',
      bestPractices: 'ما يجب التحقق منه قبل الدفع لأداة QR'
    },
    '/faqs-qr-code-generator': {
      steps: 'كيفية الحصول على إجابة بسرعة',
      features: 'المواضيع التي يغطيها مركز المساعدة هذا',
      useCases: 'المواقف الشائعة التي نتلقى أسئلة عنها',
      faqs: 'الأسئلة الشائعة',
      bestPractices: 'قائمة تحقق استكشاف الأخطاء وإصلاحها'
    },
    '/about': {
      steps: 'كيف يعمل QR Generator Online',
      features: 'ما الذي يميز هذه الأداة',
      useCases: 'من يستخدم QR Generator Online',
      faqs: 'حول QR Generator Online — الأسئلة الشائعة',
      bestPractices: 'التزاماتنا تجاهك'
    },
    '/contact': {
      steps: 'كيفية التواصل مع الدعم في 3 خطوات',
      features: 'فيما يمكن لفريق الدعم مساعدتك',
      useCases: 'أسباب شائعة للتواصل',
      faqs: 'الأسئلة الشائعة حول الدعم والتواصل',
      bestPractices: 'ما يجب تضمينه في رسالتك'
    },
    '/privacy': {
      steps: 'كيفية التعامل مع بياناتك خطوة بخطوة',
      features: 'ضماناتنا للخصوصية',
      useCases: 'ماذا يعني هذا عمليًا',
      faqs: 'الأسئلة الشائعة حول الخصوصية والبيانات',
      bestPractices: 'كيفية الحفاظ على خصوصية بيانات رمز QR الخاص بك'
    },
    '/terms': {
      steps: 'اتفاقيتك في 3 نقاط',
      features: 'ما يُسمح لك بفعله',
      useCases: 'شرح الاستخدام التجاري',
      faqs: 'الأسئلة الشائعة حول شروط الخدمة',
      bestPractices: 'قائمة تحقق الاستخدام المسؤول'
    },
    '/blog': {
      steps: 'كيفية استخدام هذه الأدلة',
      features: 'ما تغطيه أدلتنا',
      useCases: 'الصناعات التي نكتب عنها',
      faqs: 'الأسئلة الشائعة حول أدلة رموز QR',
      bestPractices: 'من أين تبدأ إذا كنت جديدًا على رموز QR'
    },
    '/blog/qr-codes-for-restaurants': {
      steps: 'كيفية إعداد قائمة QR في 3 خطوات',
      features: 'ما تحتاجه قائمة QR الجيدة',
      useCases: 'أين تعمل قوائم QR بشكل أفضل في المكان',
      faqs: 'الأسئلة الشائعة حول قوائم QR للمطاعم',
      bestPractices: 'قائمة تحقق قبل طباعة قوائم الطاولات'
    },
    '/blog/printing-qr-codes-guide': {
      steps: 'كيفية تجهيز رمز QR للطباعة',
      features: 'ما يؤثر على قابلية المسح عند الطباعة',
      useCases: 'رموز QR عبر تنسيقات الطباعة المختلفة',
      faqs: 'الأسئلة الشائعة حول طباعة رموز QR',
      bestPractices: 'قائمة تحقق ما قبل الطباعة لرموز QR'
    },
    '/blog/vcard-qr-code-business-cards': {
      steps: 'كيفية وضع vCard على بطاقة عملك',
      features: 'ما يجب تضمينه في بطاقة رقمية',
      useCases: 'أين تفيد بطاقات العمل الرقمية',
      faqs: 'الأسئلة الشائعة حول بطاقات vCard',
      bestPractices: 'قائمة تحقق قبل طلب بطاقات العمل'
    },
    '/blog/qr-codes-for-real-estate': {
      steps: 'كيفية إضافة رموز QR إلى إعلان عقاري',
      features: 'ما يجب أن ترتبط به رموز QR للإعلانات',
      useCases: 'أين يضع الوكلاء رموز QR',
      faqs: 'الأسئلة الشائعة حول رموز QR العقارية',
      bestPractices: 'قائمة تحقق للافتات والنشرات'
    },
    '/blog/wifi-qr-codes-for-hospitality': {
      steps: 'كيفية إعداد رموز QR للواي فاي للضيوف',
      features: 'ما يجب أن تفعله رموز واي فاي الضيوف',
      useCases: 'أين توضع رموز الواي فاي في العقار',
      faqs: 'الأسئلة الشائعة حول رموز QR لواي فاي الضيوف',
      bestPractices: 'قائمة تحقق للمضيفين ومديري الفنادق'
    }
  },
  hi: {
    '/': {
      steps: '3 चरणों में क्यूआर कोड कैसे बनाएं',
      features: 'हर क्यूआर कोड पर आप क्या कस्टमाइज़ कर सकते हैं',
      useCases: 'लोग हमारे क्यूआर कोड का उपयोग किसलिए करते हैं',
      faqs: 'क्यूआर कोड जनरेटर सामान्य प्रश्न',
      bestPractices: 'क्यूआर कोड प्रिंट करने से पहले चेकलिस्ट'
    },
    '/pricing': {
      steps: 'मुफ़्त प्लान का उपयोग कैसे शुरू करें',
      features: 'मुफ़्त प्लान में क्या शामिल है',
      useCases: 'कौन सा प्लान किसके लिए उपयुक्त है',
      faqs: 'मूल्य निर्धारण और बिलिंग सामान्य प्रश्न',
      bestPractices: 'QR टूल के लिए भुगतान करने से पहले क्या जांचें'
    },
    '/faqs-qr-code-generator': {
      steps: 'जल्दी जवाब कैसे पाएं',
      features: 'यह सहायता केंद्र किन विषयों को कवर करता है',
      useCases: 'सामान्य स्थितियां जिनके बारे में हमसे पूछा जाता है',
      faqs: 'अक्सर पूछे जाने वाले प्रश्न',
      bestPractices: 'समस्या निवारण चेकलिस्ट'
    },
    '/about': {
      steps: 'QR Generator Online कैसे काम करता है',
      features: 'इस टूल को अलग क्या बनाता है',
      useCases: 'QR Generator Online का उपयोग कौन करता है',
      faqs: 'QR Generator Online के बारे में — सामान्य प्रश्न',
      bestPractices: 'आपके प्रति हमारी प्रतिबद्धताएं'
    },
    '/contact': {
      steps: '3 चरणों में सहायता तक कैसे पहुंचें',
      features: 'हमारी सहायता टीम किसमें मदद कर सकती है',
      useCases: 'संपर्क करने के सामान्य कारण',
      faqs: 'सहायता और संपर्क सामान्य प्रश्न',
      bestPractices: 'अपने संदेश में क्या शामिल करें'
    },
    '/privacy': {
      steps: 'आपके डेटा को कैसे संभाला जाता है, चरण दर चरण',
      features: 'हमारी गोपनीयता गारंटी',
      useCases: 'व्यवहार में इसका क्या मतलब है',
      faqs: 'गोपनीयता और डेटा सामान्य प्रश्न',
      bestPractices: 'अपने QR डेटा को निजी कैसे रखें'
    },
    '/terms': {
      steps: '3 बिंदुओं में आपका समझौता',
      features: 'आपको क्या करने की अनुमति है',
      useCases: 'व्यावसायिक उपयोग समझाया गया',
      faqs: 'सेवा की शर्तें सामान्य प्रश्न',
      bestPractices: 'जिम्मेदार उपयोग चेकलिस्ट'
    },
    '/blog': {
      steps: 'इन गाइड्स का उपयोग कैसे करें',
      features: 'हमारी गाइड्स क्या कवर करती हैं',
      useCases: 'जिन उद्योगों के बारे में हम लिखते हैं',
      faqs: 'QR कोड गाइड सामान्य प्रश्न',
      bestPractices: 'अगर आप QR कोड में नए हैं तो कहां से शुरू करें'
    },
    '/blog/qr-codes-for-restaurants': {
      steps: '3 चरणों में QR मेन्यू कैसे सेटअप करें',
      features: 'एक अच्छे QR मेन्यू को क्या चाहिए',
      useCases: 'किसी वेन्यू में QR मेन्यू सबसे अच्छा कहां काम करते हैं',
      faqs: 'रेस्तरां QR मेन्यू सामान्य प्रश्न',
      bestPractices: 'टेबल मेन्यू प्रिंट करने से पहले चेकलिस्ट'
    },
    '/blog/printing-qr-codes-guide': {
      steps: 'प्रिंट के लिए QR कोड कैसे तैयार करें',
      features: 'प्रिंट स्कैनेबिलिटी को क्या प्रभावित करता है',
      useCases: 'विभिन्न प्रिंट फ़ॉर्मेट में QR कोड',
      faqs: 'QR कोड प्रिंटिंग सामान्य प्रश्न',
      bestPractices: 'QR कोड के लिए प्री-प्रेस चेकलिस्ट'
    },
    '/blog/vcard-qr-code-business-cards': {
      steps: 'अपने बिज़नेस कार्ड पर vCard कैसे लगाएं',
      features: 'डिजिटल कार्ड में क्या शामिल करें',
      useCases: 'डिजिटल बिज़नेस कार्ड कहां फायदेमंद हैं',
      faqs: 'vCard बिज़नेस कार्ड सामान्य प्रश्न',
      bestPractices: 'बिज़नेस कार्ड ऑर्डर करने से पहले चेकलिस्ट'
    },
    '/blog/qr-codes-for-real-estate': {
      steps: 'लिस्टिंग में QR कोड कैसे जोड़ें',
      features: 'लिस्टिंग QR कोड को किससे लिंक होना चाहिए',
      useCases: 'एजेंट QR कोड कहां लगाते हैं',
      faqs: 'रियल एस्टेट QR कोड सामान्य प्रश्न',
      bestPractices: 'यार्ड साइन और ब्रोशर के लिए चेकलिस्ट'
    },
    '/blog/wifi-qr-codes-for-hospitality': {
      steps: 'गेस्ट वाईफाई QR कोड कैसे सेटअप करें',
      features: 'गेस्ट वाईफाई कोड को क्या करना चाहिए',
      useCases: 'प्रॉपर्टी में वाईफाई कोड कहां लगाएं',
      faqs: 'गेस्ट वाईफाई QR कोड सामान्य प्रश्न',
      bestPractices: 'होस्ट और होटल मैनेजर के लिए चेकलिस्ट'
    }
  },
  tr: {
    '/': {
      steps: '3 Adımda QR Kod Nasıl Yapılır',
      features: 'Her QR Kodda Neleri Özelleştirebilirsiniz',
      useCases: 'İnsanlar QR Kodlarımızı Ne İçin Kullanıyor',
      faqs: 'QR Kod Oluşturucu SSS',
      bestPractices: 'QR Kod Yazdırmadan Önce Kontrol Listesi'
    },
    '/pricing': {
      steps: 'Ücretsiz Plana Nasıl Başlanır',
      features: 'Ücretsiz Plan Neler İçerir',
      useCases: 'Her Plan Kime Uygun',
      faqs: 'Fiyatlandırma ve Faturalandırma SSS',
      bestPractices: 'Bir QR Aracı İçin Ödeme Yapmadan Önce Kontrol Edilecekler'
    },
    '/faqs-qr-code-generator': {
      steps: 'Hızlıca Nasıl Cevap Alınır',
      features: 'Bu Yardım Merkezinin Kapsadığı Konular',
      useCases: 'Sıkça Sorulan Yaygın Durumlar',
      faqs: 'Sıkça Sorulan Sorular',
      bestPractices: 'Sorun Giderme Kontrol Listesi'
    },
    '/about': {
      steps: 'QR Generator Online Nasıl Çalışır',
      features: 'Bu Aracı Farklı Kılan Nedir',
      useCases: 'QR Generator Online\'ı Kimler Kullanır',
      faqs: 'QR Generator Online Hakkında — SSS',
      bestPractices: 'Size Olan Taahhütlerimiz'
    },
    '/contact': {
      steps: '3 Adımda Destek Ekibine Nasıl Ulaşılır',
      features: 'Destek Ekibimiz Nelerde Yardımcı Olabilir',
      useCases: 'İletişime Geçmenin Yaygın Nedenleri',
      faqs: 'Destek ve İletişim SSS',
      bestPractices: 'Mesajınıza Neler Eklemelisiniz'
    },
    '/privacy': {
      steps: 'Verileriniz Adım Adım Nasıl İşlenir',
      features: 'Gizlilik Garantilerimiz',
      useCases: 'Bu Pratikte Ne Anlama Gelir',
      faqs: 'Gizlilik ve Veri SSS',
      bestPractices: 'QR Verilerinizi Nasıl Gizli Tutarsınız'
    },
    '/terms': {
      steps: '3 Maddede Sözleşmeniz',
      features: 'Yapmanıza İzin Verilenler',
      useCases: 'Ticari Kullanım Açıklaması',
      faqs: 'Hizmet Şartları SSS',
      bestPractices: 'Sorumlu Kullanım Kontrol Listesi'
    },
    '/blog': {
      steps: 'Bu Rehberler Nasıl Kullanılır',
      features: 'Rehberlerimiz Neleri Kapsıyor',
      useCases: 'Hakkında Yazdığımız Sektörler',
      faqs: 'QR Kod Rehberleri SSS',
      bestPractices: 'QR Kodlarında Yeniyseniz Nereden Başlamalısınız'
    },
    '/blog/qr-codes-for-restaurants': {
      steps: '3 Adımda QR Menü Nasıl Kurulur',
      features: 'İyi Bir QR Menü Nelere İhtiyaç Duyar',
      useCases: 'QR Menüler Bir Mekanda En İyi Nerede Çalışır',
      faqs: 'Restoran QR Menü SSS',
      bestPractices: 'Masa Menüleri Yazdırmadan Önce Kontrol Listesi'
    },
    '/blog/printing-qr-codes-guide': {
      steps: 'Baskı İçin QR Kod Nasıl Hazırlanır',
      features: 'Baskıda Taranabilirliği Ne Etkiler',
      useCases: 'Baskı Formatlarında QR Kodlar',
      faqs: 'QR Kod Baskı SSS',
      bestPractices: 'QR Kodlar İçin Baskı Öncesi Kontrol Listesi'
    },
    '/blog/vcard-qr-code-business-cards': {
      steps: 'Kartvizitinize vCard Nasıl Eklenir',
      features: 'Dijital Karta Neler Eklenmeli',
      useCases: 'Dijital Kartvizitler Nerede Fayda Sağlar',
      faqs: 'vCard Kartvizit SSS',
      bestPractices: 'Kartvizit Sipariş Etmeden Önce Kontrol Listesi'
    },
    '/blog/qr-codes-for-real-estate': {
      steps: 'Bir İlana QR Kod Nasıl Eklenir',
      features: 'İlan QR Kodları Nereye Bağlanmalı',
      useCases: 'Emlakçılar QR Kodları Nereye Yerleştirir',
      faqs: 'Emlak QR Kod SSS',
      bestPractices: 'Tabelalar ve Broşürler İçin Kontrol Listesi'
    },
    '/blog/wifi-qr-codes-for-hospitality': {
      steps: 'Misafir WiFi QR Kodları Nasıl Kurulur',
      features: 'Misafir WiFi Kodları Ne Yapmalı',
      useCases: 'Bir Mülkte WiFi Kodları Nereye Yerleştirilir',
      faqs: 'Misafir WiFi QR Kod SSS',
      bestPractices: 'Ev Sahipleri ve Otel Yöneticileri İçin Kontrol Listesi'
    }
  },
  vi: {
    '/': {
      steps: 'Cách Tạo Mã QR Trong 3 Bước',
      features: 'Những Gì Bạn Có Thể Tùy Chỉnh Trên Mỗi Mã QR',
      useCases: 'Mọi Người Sử Dụng Mã QR Của Chúng Tôi Để Làm Gì',
      faqs: 'Câu Hỏi Thường Gặp Về Trình Tạo Mã QR',
      bestPractices: 'Danh Sách Kiểm Tra Trước Khi In Mã QR'
    },
    '/pricing': {
      steps: 'Cách Bắt Đầu Với Gói Miễn Phí',
      features: 'Gói Miễn Phí Bao Gồm Những Gì',
      useCases: 'Mỗi Gói Phù Hợp Với Ai',
      faqs: 'Câu Hỏi Thường Gặp Về Giá & Thanh Toán',
      bestPractices: 'Cần Kiểm Tra Gì Trước Khi Trả Phí Cho Công Cụ QR'
    },
    '/faqs-qr-code-generator': {
      steps: 'Cách Nhận Câu Trả Lời Nhanh',
      features: 'Các Chủ Đề Trung Tâm Trợ Giúp Này Bao Gồm',
      useCases: 'Các Tình Huống Thường Được Hỏi',
      faqs: 'Câu Hỏi Thường Gặp',
      bestPractices: 'Danh Sách Kiểm Tra Khắc Phục Sự Cố'
    },
    '/about': {
      steps: 'QR Generator Online Hoạt Động Như Thế Nào',
      features: 'Điều Gì Làm Công Cụ Này Khác Biệt',
      useCases: 'Ai Sử Dụng QR Generator Online',
      faqs: 'Về QR Generator Online — Câu Hỏi Thường Gặp',
      bestPractices: 'Cam Kết Của Chúng Tôi Với Bạn'
    },
    '/contact': {
      steps: 'Cách Liên Hệ Hỗ Trợ Trong 3 Bước',
      features: 'Đội Ngũ Hỗ Trợ Của Chúng Tôi Có Thể Giúp Gì',
      useCases: 'Lý Do Phổ Biến Khi Liên Hệ',
      faqs: 'Câu Hỏi Thường Gặp Về Hỗ Trợ & Liên Hệ',
      bestPractices: 'Nên Đưa Gì Vào Tin Nhắn Của Bạn'
    },
    '/privacy': {
      steps: 'Dữ Liệu Của Bạn Được Xử Lý Như Thế Nào, Từng Bước',
      features: 'Cam Kết Bảo Mật Của Chúng Tôi',
      useCases: 'Điều Này Có Ý Nghĩa Gì Trong Thực Tế',
      faqs: 'Câu Hỏi Thường Gặp Về Quyền Riêng Tư & Dữ Liệu',
      bestPractices: 'Cách Giữ Riêng Tư Dữ Liệu QR Của Bạn'
    },
    '/terms': {
      steps: 'Thỏa Thuận Của Bạn Trong 3 Điểm',
      features: 'Những Gì Bạn Được Phép Làm',
      useCases: 'Giải Thích Về Sử Dụng Thương Mại',
      faqs: 'Câu Hỏi Thường Gặp Về Điều Khoản Dịch Vụ',
      bestPractices: 'Danh Sách Kiểm Tra Sử Dụng Có Trách Nhiệm'
    },
    '/blog': {
      steps: 'Cách Sử Dụng Các Hướng Dẫn Này',
      features: 'Hướng Dẫn Của Chúng Tôi Bao Gồm Những Gì',
      useCases: 'Các Ngành Chúng Tôi Viết Về',
      faqs: 'Câu Hỏi Thường Gặp Về Hướng Dẫn Mã QR',
      bestPractices: 'Bắt Đầu Từ Đâu Nếu Bạn Mới Với Mã QR'
    },
    '/blog/qr-codes-for-restaurants': {
      steps: 'Cách Thiết Lập Thực Đơn QR Trong 3 Bước',
      features: 'Một Thực Đơn QR Tốt Cần Những Gì',
      useCases: 'Thực Đơn QR Hoạt Động Tốt Nhất Ở Đâu Trong Một Địa Điểm',
      faqs: 'Câu Hỏi Thường Gặp Về Thực Đơn QR Nhà Hàng',
      bestPractices: 'Danh Sách Kiểm Tra Trước Khi In Thực Đơn Bàn'
    },
    '/blog/printing-qr-codes-guide': {
      steps: 'Cách Chuẩn Bị Mã QR Để In',
      features: 'Điều Gì Ảnh Hưởng Đến Khả Năng Quét Khi In',
      useCases: 'Mã QR Trên Các Định Dạng In Khác Nhau',
      faqs: 'Câu Hỏi Thường Gặp Về In Mã QR',
      bestPractices: 'Danh Sách Kiểm Tra Trước Khi In Cho Mã QR'
    },
    '/blog/vcard-qr-code-business-cards': {
      steps: 'Cách Đặt vCard Lên Danh Thiếp Của Bạn',
      features: 'Nên Đưa Gì Vào Danh Thiếp Kỹ Thuật Số',
      useCases: 'Danh Thiếp Kỹ Thuật Số Mang Lại Hiệu Quả Ở Đâu',
      faqs: 'Câu Hỏi Thường Gặp Về Danh Thiếp vCard',
      bestPractices: 'Danh Sách Kiểm Tra Trước Khi Đặt In Danh Thiếp'
    },
    '/blog/qr-codes-for-real-estate': {
      steps: 'Cách Thêm Mã QR Vào Tin Đăng',
      features: 'Mã QR Tin Đăng Nên Liên Kết Đến Đâu',
      useCases: 'Nơi Các Nhà Môi Giới Đặt Mã QR',
      faqs: 'Câu Hỏi Thường Gặp Về Mã QR Bất Động Sản',
      bestPractices: 'Danh Sách Kiểm Tra Cho Biển Báo Sân Vườn & Tờ Rơi'
    },
    '/blog/wifi-qr-codes-for-hospitality': {
      steps: 'Cách Thiết Lập Mã QR WiFi Cho Khách',
      features: 'Mã WiFi Cho Khách Nên Làm Được Gì',
      useCases: 'Nơi Đặt Mã WiFi Trong Một Cơ Sở',
      faqs: 'Câu Hỏi Thường Gặp Về Mã QR WiFi Cho Khách',
      bestPractices: 'Danh Sách Kiểm Tra Cho Chủ Nhà & Quản Lý Khách Sạn'
    }
  }
};

/**
 * Returns the five localized section headings for a path, or null if this
 * locale has no translation for it (caller falls back to English).
 */
export function getSectionHeadingsI18n(pathname, locale) {
  const explicit = EXPLICIT_I18N[locale]?.[pathname];
  if (explicit) return explicit;

  const entity = ENTITY_I18N[locale]?.[pathname];
  const templates = TEMPLATES_I18N[locale];
  if (!entity || !templates) return null;

  const plural = PLURAL_I18N[locale]?.[pathname];
  return {
    steps: templates.steps(entity),
    features: templates.features(entity),
    useCases: plural ? templates.useCases(plural) : templates.useCasesSingular(entity),
    faqs: templates.faqs(entity),
    bestPractices: templates.bestPractices(entity)
  };
}
