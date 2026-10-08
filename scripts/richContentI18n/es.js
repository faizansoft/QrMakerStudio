/**
 * Localized deep body content for the `es` locale.
 *
 * One module per locale so Vite emits one chunk per locale: a visitor only
 * ever downloads the language they are actually reading. Bundling all of them
 * into the initial graph would have taken the `seo-content` chunk from ~357 KB
 * to ~2 MB for every visitor, including the English majority who need none of
 * it.
 *
 * Shape is identical to scripts/toolRichData.js et al (constants/richContent.ts
 * `RichContent`), plus an optional `sections` intro array mirroring
 * routeContent.js. A path absent here falls back to the English object whole —
 * never a per-field mix of two languages.
 */

export const RICH_CONTENT = {
  '/upi-qr-code-generator': {
    sections: [
      {
        title: 'Acepta Pagos UPI en Cualquier Parte de la India',
        paragraphs: [
          'Imprime códigos QR de UPI para mostradores de tienda, puestos de mercado, facturas y tiendas online. Admite cantidad y nombre del beneficiario prerrellenados para un cobro más rápido.',
          'Compatible con todas las apps UPI principales, incluidas Google Pay, PhonePe, Paytm, BHIM y Amazon Pay.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & NPCI Specification of UPI QR Codes',
      paragraphs: [
        'Un código QR de UPI lleva la URI de pago de NPCI (`upi://pay?pa={vpa}&pn={nombre}&am={cantidad}&cu=INR`). Escanéalo en cualquier app UPI de la India y lee la VPA, el nombre del beneficiario, la moneda y cualquier cantidad prefijada.',
        'Como NPCI estandariza UPI en toda la India, un mismo código funciona en Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED y toda app bancaria — sin bloqueo propietario.',
        'Códigos estáticos permanentes sin comisión de plataforma, con la marca personalizada de tu tienda, y exportación vectorial SVG para expositores de mostrador.'
      ]
    },
    comparisonTable: {
      title: 'UPI QR Codes vs. Card Swipe POS Machines vs. Cash Payments',
      headers: [
        'Feature',
        'UPI QR Code',
        'Card Swipe POS Machine',
        'Cash Payments'
      ],
      rows: [
        [
          'Hardware Cost',
          '₹0 (Free printable QR code)',
          '₹1,500 - ₹5,000 + Monthly rental',
          '₹0'
        ],
        [
          'Merchant Transaction Fee',
          '0% (NPCI zero-MDR on standard UPI)',
          '1.5% - 2.5% MDR per transaction',
          'Cash handling costs & risk'
        ],
        [
          'Settlement Speed',
          'Instant real-time bank credit',
          'T+1 or T+2 business days',
          'Manual bank deposit'
        ],
        [
          'App Interoperability',
          'Universal (GPay, PhonePe, Paytm, BHIM)',
          'Card brand dependent',
          'N/A'
        ],
        [
          'Contactless & Hygienic',
          '100% Touchless mobile payment',
          'Requires physical card/PIN entry',
          'Physical currency exchange'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce el UPI ID (VPA) y el Nombre del Beneficiario',
        description: 'Escribe tu UPI ID (p. ej. yourname@oksbi, merchant@paytm), el nombre de tu negocio y una cantidad fija opcional.'
      },
      {
        number: 2,
        title: 'Personaliza los Colores e Inserta el Logo de UPI',
        description: 'Define los colores, reestiliza los ojos de esquina y añade el logo de UPI o de la tienda en el centro.'
      },
      {
        number: 3,
        title: 'Descarga en Formato SVG o PNG',
        description: 'Exporta el código listo para imprimir para mostradores, tickets, soportes de acrílico y facturas digitales.'
      }
    ],
    features: [
      {
        title: 'Interoperabilidad Universal de Apps UPI',
        description: 'Funciona en Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED y toda app bancaria india.'
      },
      {
        title: 'Cero Comisión de Plataforma',
        description: 'Gratis, sin comisión de transacción, coste de instalación ni suscripción.'
      },
      {
        title: 'Protocolo Estándar UPI de NPCI',
        description: 'Genera cadenas upi://pay conformes que se leen en todos los escáneres.'
      },
      {
        title: 'SVG Vectorial para Expositores de Tienda',
        description: 'Imprime soportes de mostrador, pegatinas y expositores de pared resistentes sin pixelación.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for UPI QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Billing Counter & Cash Wrap Stands',
          '25 cm - 40 cm (10" - 16")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan & Pay with Any UPI App"'
        ],
        [
          'Storefront Windows & Entrance Doors',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Accepted Here: GPay, PhonePe, Paytm"'
        ],
        [
          'Delivery Invoices & Bill Folders',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Pay Bill via UPI"'
        ],
        [
          'Tabletop Dining Cards & Cafes',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Pay Tableside"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Tiendas Minoristas y Supermercados',
        description: 'Un código en el mostrador de cobro acepta pagos rápidos y sin contacto sin alquilar un datáfono.'
      },
      {
        title: 'Autónomos y Proveedores de Servicios',
        description: 'Un código en la factura liquida directo al banco sin la demora de una transferencia.'
      },
      {
        title: 'Restaurantes, Cafés y Food Trucks',
        description: 'Un código en la mesa o en la carpeta de la cuenta deja que los comensales paguen desde su sitio.'
      },
      {
        title: 'Donaciones y Festivales Culturales',
        description: 'Recoge contribuciones sin efectivo y entradas en un festival o una fundación.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for UPI QR Code Payments',
      points: [
        'Comprueba la VPA. Confirma tu UPI ID (p. ej. mobile@upi, name@bank) antes de una impresión masiva.',
        'Incluye el nombre del beneficiario. Añade el parámetro pn para que los clientes puedan verificar el destinatario antes de aprobar.',
        'Contraste. Negro o azul marino oscuro sobre blanco se lee rápido con la iluminación tenue de una tienda.',
        'Protege la impresión. Lamina el código o usa un soporte de acrílico para que los arañazos no rompan el escaneo.',
        'Prueba en varias apps. Escanea con GPay, PhonePe y Paytm para confirmar el flujo.'
      ]
    },
    faqs: [
      {
        q: '¿Qué es un UPI ID (VPA) y dónde lo encuentro?',
        a: 'Es el identificador ligado a tu cuenta bancaria — yourname@oksbi, mobile@paytm — que aparece en tu perfil de GPay, PhonePe o Paytm.'
      },
      {
        q: '¿Qué apps de pago pueden escanear este código QR de UPI?',
        a: 'Todas las apps UPI de la India: Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED y las apps bancarias.'
      },
      {
        q: '¿Puedo prerrellenar una cantidad de pago fija en el código QR?',
        a: 'Introduce una cantidad y la app del pagador muestra exactamente esa al escanear.'
      },
      {
        q: '¿Hay cargos de plataforma de QR Generator Online?',
        a: 'Ninguno — gratis, sin comisión de transacción ni cargo recurrente.'
      },
      {
        q: '¿Los códigos QR de UPI caducan?',
        a: 'No — funciona justo hasta que el UPI ID vinculado se desactiva.'
      },
      {
        q: '¿Puedo añadir el logo de mi tienda o empresa al código QR de UPI?',
        a: 'Coloca el logo de tu tienda o el icono de UPI en el centro.'
      },
      {
        q: '¿Qué formato debo descargar para imprimir soportes de mostrador?',
        a: 'SVG vectorial para una impresión nítida a gran escala en soportes de acrílico, sunboard y vinilo.'
      },
      {
        q: '¿Es segura mi información bancaria durante la generación?',
        a: 'Lo es — los datos se quedan en tu dispositivo y nunca se envían fuera.'
      }
    ],
    bestPractices: 'Coloca el código en un expositor de acrílico con el logo de UPI, lista «Aceptado: GPay, PhonePe, Paytm, BHIM», y haz una prueba de escaneo con varias apps antes de ponerlo en el mostrador.'
  },
  '/paypal-qr-code-generator': {
    sections: [
      {
        title: 'Cobrar Pagos sin Contacto, Hecho Sencillo',
        paragraphs: [
          'Imprime códigos QR de PayPal para puestos de mercado, facturas de autónomos, botes de donaciones y propinas. Los clientes escanean y pagan al instante sin teclear tu correo.',
          'Funciona con usuarios de PayPal.me y URLs de pago directas de PayPal.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Security of PayPal QR Codes',
      paragraphs: [
        'Un código QR de PayPal lleva la URI de pago de PayPal.me (`https://paypal.me/{usuario}/{cantidad}`) o una URL de pago directa. Escanearlo abre la app de PayPal o un pago móvil, con tu cuenta puesta como destinatario y —si indicaste una— la cantidad ya rellenada.',
        'Eso deja que una tienda, un autónomo, un vendedor de mercado o una organización benéfica cobre sin efectivo sin comprar ni alquilar un datáfono.',
        'Los códigos son estáticos y nunca caducan, no llevan comisión de plataforma, usan cifrado del lado del cliente y se exportan a SVG vectorial para soportes de mostrador y cabeceras de factura.'
      ]
    },
    comparisonTable: {
      title: 'PayPal QR Codes vs. Traditional POS Terminals vs. Bank Transfers',
      headers: [
        'Feature',
        'PayPal QR Code',
        'POS Card Terminal',
        'Direct Bank Transfer'
      ],
      rows: [
        [
          'Hardware Cost',
          '$0.00 (Print on paper/acrylic)',
          '$200 - $800 + Monthly rental',
          '$0.00'
        ],
        [
          'Setup Time',
          '30 seconds (Instant generation)',
          '1 - 2 weeks approval',
          'Manual setup'
        ],
        [
          'Payment Speed',
          'Instant mobile checkout',
          'Instant card dip/tap',
          '1 - 3 business days wire'
        ],
        [
          'Contactless & Hygienic',
          '100% Touchless mobile payment',
          'Requires physical card contact',
          'Online banking login'
        ],
        [
          'Print Scalability',
          'Print unlimited counter stands & flyers',
          'Requires 1 physical device per till',
          'Manual account number entry'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce tu Usuario o Enlace de PayPal.me',
        description: 'Introduce tu usuario de PayPal.me (p. ej. tunombre), o pega el enlace de pago completo.'
      },
      {
        number: 2,
        title: 'Dale Estilo con el Azul de PayPal y el Logo',
        description: 'Usa el azul de PayPal (#003087, #0079C1), elige un patrón de puntos y añade el logo de PayPal.'
      },
      {
        number: 3,
        title: 'Descarga en SVG o PNG',
        description: 'Exporta el código de alta resolución para facturas, expositores de mostrador y pegatinas.'
      }
    ],
    features: [
      {
        title: 'Cero Comisiones de Plataforma',
        description: 'El generador es gratis, sin comisión de transacción ni recargo añadido a tus pagos.'
      },
      {
        title: 'Pago Móvil Instantáneo',
        description: 'Abre la app de PayPal o el pago móvil directo para un cobro rápido.'
      },
      {
        title: 'SVG Vectorial para Cartelería',
        description: 'Vectorial nítido para soportes de mostrador de acrílico resistentes, pegatinas y menús.'
      },
      {
        title: 'Seguridad de Nivel Bancario',
        description: 'Ninguna credencial financiera toca un servidor — la codificación se ejecuta en tu navegador.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for PayPal QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Acrylic Counter Stands & Tills',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Pay with PayPal"'
        ],
        [
          'Printed Invoices & Receipts',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Settle Invoice via PayPal"'
        ],
        [
          'Tip Jars & Musician Cases',
          '30 cm - 60 cm (12" - 24")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan to Tip via PayPal"'
        ],
        [
          'Charity Donation Posters',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Donate via PayPal"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Mercados de Agricultores y Tiendas Pop-Up',
        description: 'Cobra sin contacto en un puesto o una feria de artesanía, sin datáfono ni lector de tarjetas.'
      },
      {
        title: 'Facturas de Autónomos y Contratistas',
        description: 'Un código en la factura PDF deja que un cliente pague de inmediato escaneando.'
      },
      {
        title: 'Botes de Propinas de Músicos',
        description: 'Recoge propinas sin efectivo en una actuación en directo o un mostrador de servicio.'
      },
      {
        title: 'Donaciones a Organizaciones Benéficas',
        description: 'Un código de donación va en una mesa de gala, un banner o un folleto de recaudación.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for PayPal QR Code Payments',
      points: [
        'Reclama el enlace primero. Asegúrate de que tu enlace de PayPal.me esté activo en los ajustes de tu cuenta antes de imprimir.',
        'Prerrellena la cantidad si quieres. Añádela al enlace — paypal.me/usuario/25 — para un artículo de precio fijo.',
        'Contraste. Azul oscuro de PayPal o negro sobre blanco se lee más rápido.',
        'Tamaño del logo. Mantente por debajo del 30% del ancho para que la corrección Nivel H conserve los datos intactos.',
        'Prueba con dinero real. Haz un pequeño pago en vivo para confirmar que llega al monedero de PayPal correcto.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo creo un código QR de PayPal.me?',
        a: 'Introduce tu usuario de PayPal.me (p. ej. tunegocio) o pega el enlace completo, dale estilo y descárgalo.'
      },
      {
        q: '¿Puedo fijar una cantidad de pago en el código QR?',
        a: 'Añade la cantidad a tu enlace — https://paypal.me/tunegocio/25 para 25 $.'
      },
      {
        q: '¿Necesita el cliente una cuenta de PayPal para pagar?',
        a: 'Quien tenga PayPal paga con un toque; quien no la tenga puede pagar igualmente con tarjeta de débito o crédito mediante el pago como invitado de PayPal.'
      },
      {
        q: '¿Hay alguna comisión de QR Generator Online?',
        a: 'Ninguna por nuestra parte — 0%. Se aplican las comisiones de transacción estándar de PayPal según tu acuerdo con PayPal.'
      },
      {
        q: '¿Los códigos QR de PayPal caducan?',
        a: 'No. El código dura mientras tu cuenta de PayPal siga abierta.'
      },
      {
        q: '¿Puedo insertar el logo de PayPal en el centro?',
        a: 'Coloca el icono «PP» de PayPal o tu propio logo en el centro.'
      },
      {
        q: '¿Qué formato es mejor para imprimir carteles de mostrador?',
        a: 'SVG vectorial para un gran soporte de acrílico o banner, o PNG para una cabecera de factura.'
      },
      {
        q: '¿Es segura mi información financiera durante la generación?',
        a: 'Lo es. No se transmite nada; el código se arma directamente en tu navegador.'
      }
    ],
    bestPractices: 'Usa la marca azul de PayPal en un soporte de mostrador de acrílico con una línea clara «Escanea para Pagar con PayPal», y exporta SVG vectorial.'
  },
  '/telegram-qr-code-generator': {
    sections: [
      {
        title: 'Haz Crecer tu Comunidad de Telegram',
        paragraphs: [
          'Comparte enlaces de unión a grupos de Telegram mediante códigos QR en webs, foros, redes sociales y material impreso para construir comunidad sin esfuerzo.',
          'Admite perfiles personales, grupos públicos, enlaces de invitación privados y canales.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Protocols of Telegram QR Codes',
      paragraphs: [
        'Un código QR de Telegram lleva el enlace universal (`https://t.me/{usuario}` o `https://t.me/joinchat/{hashInvitación}`). Escanéalo y el teléfono lo asigna al esquema de Telegram (`tg://resolve?domain={usuario}`), abriendo el chat, el grupo, el canal o el bot en la app.',
        'Eso elimina el paso de la búsqueda y deja que un usuario se una a un canal público, una comunidad privada o un chat de soporte con un toque.',
        'Los códigos son estáticos, privados y totalmente personalizables en azul de Telegram con exportación vectorial SVG.'
      ]
    },
    comparisonTable: {
      title: 'Telegram QR Code vs. Manual Search vs. Telegram In-App QR',
      headers: [
        'Feature',
        'QR Generator Online Telegram QR',
        'Manual Handle Search',
        'Telegram In-App QR'
      ],
      rows: [
        [
          'Customization Options',
          'Full colors, dot styles, custom logos, SVG',
          'None',
          'Basic color themes only'
        ],
        [
          'Vector SVG Print Export',
          'Yes (Infinitely scalable vector SVG)',
          'N/A',
          'Raster only'
        ],
        [
          'Bot & Group Invite Support',
          'Yes (Supports channels, groups, bots)',
          'Manual search only',
          'Profiles only'
        ],
        [
          'Permanent & Free',
          '100% Free forever with no limits',
          'Free',
          'Free'
        ],
        [
          'Browser-Based Privacy',
          '100% Client-side generation',
          'N/A',
          'Server-side'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce tu Usuario, Grupo o Enlace de Canal de Telegram',
        description: 'Escribe tu usuario o el nombre del canal (p. ej. usuario), o pega un enlace de invitación a un grupo.'
      },
      {
        number: 2,
        title: 'Dale Estilo con el Azul de Telegram y el Avión de Papel',
        description: 'Usa el azul de Telegram (#0088CC), define las formas de esquina y añade el logo del avión de papel.'
      },
      {
        number: 3,
        title: 'Descarga en SVG o PNG',
        description: 'Exporta el código de alta resolución para una web, un folleto, embalaje o un banner de evento.'
      }
    ],
    features: [
      {
        title: 'Lanzamiento de la App de Telegram de un Toque',
        description: 'Un escaneo abre la app de Telegram directo al chat, el grupo o el canal.'
      },
      {
        title: 'Permanente y Gratis para Siempre',
        description: 'Un código estático que sigue funcionando para siempre, sin límite de escaneos y sin coste.'
      },
      {
        title: 'Formato Vectorial SVG',
        description: 'Vectorial escalable para banners, folletos y merchandising.'
      },
      {
        title: 'Protección de Privacidad 100%',
        description: 'Se ejecuta del lado del cliente, sin registrar ni almacenar el enlace.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Recommendations for Telegram QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Manuals & Customer Support',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan for 24/7 Telegram Support"'
        ],
        [
          'Crypto & Web3 Community Flyers',
          '30 cm - 60 cm (12" - 24")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Join Telegram Community"'
        ],
        [
          'Conference Badges & Banners',
          '50 cm - 150 cm (20" - 60")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Join Attendee Group"'
        ],
        [
          'Website Footers & Headers',
          'Digital Screen',
          '120 px x 120 px',
          '"Join Our Telegram Channel"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Crecimiento de Comunidades Cripto y Web3',
        description: 'Un folleto o un código de congreso mete a los inversores en tu grupo oficial de Telegram.'
      },
      {
        title: 'Canales de Atención al Cliente',
        description: 'Un código en el embalaje o un manual abre un chat de soporte uno a uno.'
      },
      {
        title: 'Canales de Noticias y Señales',
        description: 'Un código en una publicación impresa envía a los lectores a tu feed de Telegram en tiempo real.'
      },
      {
        title: 'Grupos de Asistentes a Eventos y Congresos',
        description: 'Un código en la acreditación mete a los asistentes en un grupo temporal de networking.'
      }
    ],
    troubleshooting: {
      title: '5 Common Telegram QR Code Pitfalls',
      points: [
        'Una @ en el usuario. Introduce el usuario limpio sin la «@» para un enlace t.me válido.',
        'Grupos privados. Para un grupo privado, usa el formato completo de invitación t.me/joinchat o t.me/+.',
        'Contraste. Mantén el primer plano azul contra un fondo blanco.',
        'Tamaño del logo. Un logo central no debería cubrir más del 30% del ancho.',
        'Prueba en el móvil. Confirma que el escaneo abre la app de Telegram tanto en iOS como en Android.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo creo un código QR para un canal o grupo de Telegram?',
        a: 'Copia el enlace del canal público (https://t.me/tucanal) o el enlace de invitación al grupo, pégalo, dale estilo y descárgalo.'
      },
      {
        q: '¿Al escanear se abre la app de Telegram automáticamente?',
        a: 'En un teléfono con Telegram instalado, el enlace t.me abre el chat o el canal directamente.'
      },
      {
        q: '¿Puedo generar un código QR para un Bot de Telegram?',
        a: 'Pega el enlace del bot (p. ej. https://t.me/tu_bot) y el escaneo abre el bot con Iniciar listo.'
      },
      {
        q: '¿Los códigos QR de Telegram caducan?',
        a: 'No — mientras el enlace esté activo, el código también.'
      },
      {
        q: '¿Puedo insertar el logo del avión de papel de Telegram en el centro?',
        a: 'Sube el icono de Telegram o el logo de tu comunidad para el centro.'
      },
      {
        q: '¿Hay alguna cuota o límite de escaneos?',
        a: 'Ninguno — gratis, escaneos ilimitados, sin marca de agua, sin registro.'
      },
      {
        q: '¿Qué formatos de archivo puedo descargar?',
        a: 'PNG de alta resolución, SVG vectorial y WebP.'
      },
      {
        q: '¿Se mantiene seguro el enlace de mi grupo durante la generación?',
        a: 'Se queda en local — el código se ensambla en tu equipo y nunca se sube.'
      }
    ],
    bestPractices: 'Usa el azul de Telegram (#0088CC) con el logo del avión de papel, añade una línea «Escanea para Unirte a la Comunidad de Telegram», y descarga SVG vectorial para impresión.'
  },
  '/tiktok-qr-code-generator': {
    sections: [
      {
        title: 'Promoción de TikTok Multiplataforma',
        paragraphs: [
          'Imprime códigos QR de TikTok en merchandising, embalaje, pegatinas y material de eventos para llevar seguidores del mundo real a tu perfil de TikTok.',
          'Perfecto para creadores, marcas y negocios que buscan hacer crecer su presencia en TikTok con promoción multiplataforma.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Viral Growth via TikTok QR Codes',
      paragraphs: [
        'Un código QR de TikTok lleva la URI del perfil (`https://www.tiktok.com/@{usuario}`) o un enlace de vídeo. Un escaneo lleva el teléfono a la app de TikTok en el perfil del creador.',
        'Eso se salta el inicio de sesión y la búsqueda, así que un espectador te sigue, da me gusta o entra en un reto de hashtag con un toque.',
        'Códigos estáticos y permanentes sin límite de escaneos y con exportación vectorial SVG completa.'
      ]
    },
    comparisonTable: {
      title: 'TikTok QR Code vs. Manual Search vs. In-App QR Code',
      headers: [
        'Feature',
        'QR Generator Online TikTok QR',
        'Manual Handle Search',
        'In-App TikCode'
      ],
      rows: [
        [
          'Customization Options',
          'Full color palettes, dot styles, SVG',
          'None',
          'Fixed in-app template only'
        ],
        [
          'Vector SVG Print Export',
          'Yes (Infinitely scalable vector SVG)',
          'N/A',
          'Low-res raster image only'
        ],
        [
          'Direct Native App Launch',
          'Yes (Instant profile handoff)',
          'Manual typing required',
          'Yes'
        ],
        [
          'Permanent & Free',
          '100% Free forever with no limits',
          'Free',
          'Requires app access'
        ],
        [
          'Custom Logo Embedding',
          'Yes (Embed your brand icon)',
          'No',
          'TikTok logo only'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce tu Usuario o Enlace de TikTok',
        description: 'Escribe tu usuario sin la @ (p. ej. usuario), o pega la URL completa del perfil.'
      },
      {
        number: 2,
        title: 'Aplica los Colores Neón Vibrantes de TikTok',
        description: 'Usa el cian de TikTok (#00F2EA) y el magenta (#FF0050), elige un patrón de puntos y añade el logo de TikTok.'
      },
      {
        number: 3,
        title: 'Descarga en SVG o PNG',
        description: 'Exporta el código de alta resolución para pegatinas, folletos, etiquetas y merchandising.'
      }
    ],
    features: [
      {
        title: 'Lanzamiento Directo de la App de TikTok',
        description: 'Un escaneo abre la app de TikTok directo a tu perfil para seguirte con un toque.'
      },
      {
        title: 'Permanente y Gratis para Siempre',
        description: 'Un código estático que nunca caduca y acepta escaneos ilimitados gratis.'
      },
      {
        title: 'SVG Vectorial para Ropa e Impresión',
        description: 'Salida vectorial escalable para serigrafía en sudaderas, pegatinas y pósteres.'
      },
      {
        title: 'Protección de Privacidad 100%',
        description: 'Renderizado en tu dispositivo, sin rastrear nada.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for TikTok QR Codes',
      description: 'Calculate minimum print size using S = D / 10 for rapid camera recognition.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Merchandise & Apparel Tags',
          '15 cm - 30 cm (6" - 12")',
          '22 mm x 22 mm (0.9" x 0.9")',
          '"Scan to Follow on TikTok"'
        ],
        [
          'Vinyl Stickers & Decals',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan for Viral TikTok Reels"'
        ],
        [
          'Restaurant Table Tents & Menus',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Tag Us on TikTok"'
        ],
        [
          'Event Stage Banners & Posters',
          '1.0 m - 3.0 m (3 ft - 10 ft)',
          '150 mm x 150 mm (6" x 6")',
          '"Scan to Join the Challenge"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Etiquetas de Ropa y Merchandising',
        description: 'Un código en la etiqueta colgante convierte a un comprador en seguidor.'
      },
      {
        title: 'Pegatinas y Marketing de Calle',
        description: 'Pegatinas de marca con tu código impulsan el descubrimiento local orgánico.'
      },
      {
        title: 'Expositores de Restaurantes y Tiendas',
        description: 'Un código anima a los compradores a grabar una reseña y etiquetar tu marca por un descuento.'
      },
      {
        title: 'Cartelería de Conciertos y Festivales',
        description: 'Un código grande en un evento en directo promociona el reto de hashtag.'
      }
    ],
    troubleshooting: {
      title: '5 Common TikTok QR Code Pitfalls',
      points: [
        'Una @ en el usuario. Introduce el usuario limpio sin la «@» para una URL válida.',
        'Contraste. Mantén el primer plano oscuro frente al fondo.',
        'Un desliz de ortografía. Verifica dos veces el usuario antes de una impresión masiva.',
        'Prueba en el móvil. Confirma que el código abre la app de TikTok tanto en iOS como en Android.',
        'Tamaño del logo. Limita un logo central a aproximadamente un tercio del ancho.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo creo un código QR para mi cuenta de TikTok?',
        a: 'Introduce tu usuario sin la @ (o pega la URL de tu perfil), dale estilo y descárgalo.'
      },
      {
        q: '¿Al escanear se abre la app de TikTok directamente?',
        a: 'En un teléfono con TikTok instalado, el escaneo abre tu perfil en la app.'
      },
      {
        q: '¿Puedo enlazar a un vídeo o sonido concreto de TikTok?',
        a: 'Copia el enlace de compartir del vídeo o el sonido y pégalo.'
      },
      {
        q: '¿Los códigos QR de TikTok caducan?',
        a: 'No — un código estático funciona indefinidamente, con escaneos ilimitados.'
      },
      {
        q: '¿Puedo insertar el logo de TikTok en el centro?',
        a: 'Sube el logo de TikTok o tu avatar de creador para el centro.'
      },
      {
        q: '¿Qué formato es mejor para imprimir pegatinas y ropa?',
        a: 'SVG vectorial para serigrafía y troqueladoras de vinilo, o PNG para digital.'
      },
      {
        q: '¿Hay algún límite de escaneos en los códigos QR gratuitos de TikTok?',
        a: 'Ninguno — escaneos ilimitados de por vida, gratis.'
      },
      {
        q: '¿Puedo usar los colores personalizados de TikTok?',
        a: 'Usa el icónico cian (#00F2EA) y magenta (#FF0050).'
      }
    ],
    bestPractices: 'Usa los colores neón de TikTok, añade una línea atractiva como «Escanea para Ver en TikTok», y exporta SVG vectorial para una impresión nítida.'
  },
  '/twitter-qr-code-generator': {
    sections: [
      {
        title: 'Haz Crecer tu Audiencia en X / Twitter con Códigos QR',
        paragraphs: [
          'Cierra la distancia entre lo físico y lo digital añadiendo códigos QR de Twitter a material impreso, firmas de correo y banners de eventos.',
          'Admite URLs tanto de twitter.com como de x.com, además de la entrada directa del usuario para generar el enlace automáticamente.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of Twitter / X QR Codes',
      paragraphs: [
        'Un código QR de Twitter / X lleva el enlace del perfil (`https://x.com/{usuario}` o `https://twitter.com/{usuario}`). Escanéalo y el gestor de enlaces universales del teléfono abre la app de X directo a ese perfil o publicación.',
        'Desde ahí el usuario puede seguirte, dar me gusta a un tweet, unirse a un Space o entrar en un hilo de hashtag sin teclear nada por el camino.',
        'Estos códigos son estáticos y nunca caducan — control total del color, formas de ojos personalizadas y exportación vectorial SVG para impresión.'
      ]
    },
    comparisonTable: {
      title: 'Twitter QR Code vs. Manual Handle Search vs. Social Links',
      headers: [
        'Feature',
        'Twitter / X QR Code',
        'Manual Search',
        'Generic Link'
      ],
      rows: [
        [
          'Conversion Speed',
          '1 Scan → Instant Profile Launch',
          'Slow & error-prone',
          'Opens browser first'
        ],
        [
          'App Launch',
          'Direct native X app launch',
          'Manual app search',
          'Browser redirection'
        ],
        [
          'Print Ready',
          '100% Vector SVG & PNG',
          'N/A',
          'N/A'
        ],
        [
          'Lifetime Scans',
          'Unlimited & Permanent',
          'Unlimited',
          'May expire'
        ],
        [
          'Cost',
          '$0.00 Free',
          'Free',
          'Varies'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce tu Usuario o URL de Twitter/X',
        description: 'Escribe el usuario sin la @, o pega el enlace completo de x.com o twitter.com.'
      },
      {
        number: 2,
        title: 'Dale Estilo y Añade el Logo de X o el Pájaro',
        description: 'Define los colores, el patrón de puntos y las formas de esquina, y añade el logo de X o el pájaro en el centro.'
      },
      {
        number: 3,
        title: 'Descarga en SVG o PNG',
        description: 'Exporta el código de alta resolución para folletos, diapositivas, libros o merchandising.'
      }
    ],
    features: [
      {
        title: 'Lanzamiento Directo de la App de X',
        description: 'Abre la app de X directo a tu perfil para seguirte con un toque.'
      },
      {
        title: 'Permanente y Gratis para Siempre',
        description: 'Un código estático sin caducidad, abierto a cualquier número de escaneos, sin coste.'
      },
      {
        title: 'SVG Vectorial para Impresión',
        description: 'Escala a un banner de congreso, la sobrecubierta de un libro o un póster.'
      },
      {
        title: '100% Privado',
        description: 'Generado en local, sin recolección de datos.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Benchmarks for Twitter / X QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Book Covers & Magazine Ads',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Follow on X"'
        ],
        [
          'Conference Slides & Decks',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '200 mm x 200 mm (8" x 8")',
          '"Scan to Join the Discussion on X"'
        ],
        [
          'Product Packaging & Inserts',
          '20 cm - 35 cm (8" - 14")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Follow Us for Updates & Giveaways"'
        ],
        [
          'Event Badges & Lanyards',
          '30 cm - 50 cm (12" - 20")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Connect on X"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Ponencias y Webinars',
        description: 'Un código en la diapositiva final impulsa la interacción del público en directo.'
      },
      {
        title: 'Libros de Autor y Artículos Impresos',
        description: 'En la sobrecubierta de un libro o un artículo, un código deja que los lectores sigan tus comentarios en tiempo real.'
      },
      {
        title: 'Portadas de Pódcast y Merchandising',
        description: 'Lleva a los oyentes a una discusión en directo en X o a un espacio de comunidad.'
      },
      {
        title: 'Cartelería de Eventos y Acreditaciones de Meetups',
        description: 'Intercambia perfiles al instante en un meetup tecnológico o un congreso.'
      }
    ],
    troubleshooting: {
      title: '5 Common Twitter / X QR Code Pitfalls',
      points: [
        'Una @ en la URL. Introduce el usuario en bruto («usuario», no «@usuario») para que la URL se forme correctamente.',
        'Cualquier dominio sirve. Tanto x.com como twitter.com están admitidos y redirigen a tu perfil.',
        'Contraste. Mantén módulos oscuros contra un fondo blanco o claro.',
        'Tamaño del logo. Cualquier cosa por encima de un 30% del ancho empieza a vencer la corrección Nivel H.',
        'Prueba primero. Escanea en iOS y Android antes de una impresión masiva.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo creo un código QR para Twitter / X?',
        a: 'Escribe tu usuario o pega el enlace de tu perfil, dale estilo y descárgalo.'
      },
      {
        q: '¿Admite tanto x.com como twitter.com?',
        a: 'Ambas URLs están admitidas y llevan a tu perfil.'
      },
      {
        q: '¿Al escanear se abre la app de X en el móvil?',
        a: 'En un dispositivo con la app de X instalada, el escaneo abre tu perfil en la app.'
      },
      {
        q: '¿Puedo enlazar a un Tweet o Hilo concreto?',
        a: 'Copia la URL del tweet y pégala.'
      },
      {
        q: '¿Los códigos QR de Twitter caducan?',
        a: 'No — un código estático funciona indefinidamente.'
      },
      {
        q: '¿Puedo insertar un logo de X o Twitter en el centro?',
        a: 'Sube el icono de X o el logo del pájaro para el centro.'
      },
      {
        q: '¿Qué formatos de archivo puedo descargar?',
        a: 'PNG de alta resolución, SVG vectorial y WebP.'
      },
      {
        q: '¿Hay alguna cuota o límite de escaneos?',
        a: 'Ninguno — gratis, escaneos ilimitados, sin marca de agua.'
      }
    ],
    bestPractices: 'Usa un estilo limpio de alto contraste en blanco y negro con el logo de X, añade una línea «Escanea para Seguir en X», y exporta SVG vectorial para impresión.'
  },
  '/linkedin-qr-code-generator': {
    sections: [
      {
        title: 'Networking Profesional Sin Esfuerzo',
        paragraphs: [
          'Imprime códigos QR de LinkedIn en tarjetas de visita, acreditaciones de congreso y firmas de correo para crear conexiones profesionales sin fricción.',
          'Al escanearlo, abre tu perfil de LinkedIn directamente en la app de LinkedIn o el navegador para conectar con un clic.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of LinkedIn Profile QR Codes',
      paragraphs: [
        'Un código QR de LinkedIn lleva la URI del perfil público (`https://www.linkedin.com/in/{perfilId}`) o la URL de una página de empresa (`https://www.linkedin.com/company/{empresaId}`). Un escaneo salta el teléfono directo a la app de LinkedIn en ese perfil.',
        'Ese lanzamiento directo es lo que lo hace útil en un congreso o una reunión con un cliente — una solicitud de conexión, un mensaje o un seguimiento con un toque, sin deletrear un nombre en un cuadro de búsqueda.',
        'El código es estático y permanente, así que una tarjeta de visita impresa o una pieza de portafolio siguen escaneando por mucho tiempo que las lleves encima.'
      ]
    },
    comparisonTable: {
      title: 'LinkedIn QR Codes vs. Paper Business Cards vs. NFC Cards',
      headers: [
        'Feature',
        'LinkedIn QR Code',
        'Paper Business Card',
        'NFC Smart Card'
      ],
      rows: [
        [
          'Connection Speed',
          'Instant (1 Scan → 1 Tap Connect)',
          'Slow (Manual typing required later)',
          'Fast (Tap phone)'
        ],
        [
          'Cost per Contact',
          '$0.00 (Free & Unlimited)',
          'High ongoing printing costs',
          '$20 - $50 hardware cost'
        ],
        [
          'Information Freshness',
          'Always real-time & up-to-date',
          'Static (Outdated if info changes)',
          'Dependent on app portal'
        ],
        [
          'Device Compatibility',
          '100% of all smartphone cameras',
          'N/A',
          'Requires NFC-enabled devices'
        ],
        [
          'Networking Retention',
          'High (Saved directly in LinkedIn network)',
          'Low (88% of paper cards thrown away)',
          'Medium'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Copia la URL de tu Perfil Público de LinkedIn',
        description: 'Abre tu perfil, copia el enlace público (p. ej. linkedin.com/in/tunombre) y pégalo.'
      },
      {
        number: 2,
        title: 'Dale Estilo con el Azul Profesional de LinkedIn',
        description: 'Usa el azul de LinkedIn (#0A66C2), define formas de esquina limpias y añade el logo «in».'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial Listo para Imprimir',
        description: 'Toma SVG para tarjetas de visita en relieve, acreditaciones de congreso, currículums y portafolios.'
      }
    ],
    features: [
      {
        title: 'Lanzamiento Directo de la App de LinkedIn',
        description: 'Un escaneo abre la app de LinkedIn para una solicitud de conexión con un toque.'
      },
      {
        title: 'Permanente y Gratis para Siempre',
        description: 'Un código estático que sigue válido indefinidamente, con conexiones ilimitadas y sin cuota.'
      },
      {
        title: 'SVG Vectorial para Impresión de Lujo',
        description: 'Nítido sobre cartulinas mate, estampadas con lámina y en relieve.'
      },
      {
        title: '100% Privado y Seguro',
        description: 'No se recopilan credenciales ni datos personales — la codificación se ejecuta en tu navegador.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for LinkedIn QR Codes',
      description: 'Follow standard optical sizing benchmarks for professional stationery and badges.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Business Cards (Back Side)',
          '15 cm - 30 cm (6" - 12")',
          '22 mm x 22 mm (0.9" x 0.9")',
          '"Scan to Connect on LinkedIn"'
        ],
        [
          'Conference Badges & Lanyards',
          '30 cm - 60 cm (12" - 24")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Connect"'
        ],
        [
          'Printed Resumes & CVs',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to View Recommendations"'
        ],
        [
          'Trade Show Booth Backdrop',
          '1.5 m - 3.0 m (5 ft - 10 ft)',
          '200 mm x 200 mm (8" x 8")',
          '"Scan to Follow Company Page"'
        ],
        [
          'Executive Email Signatures',
          'Digital Screen',
          '120 px x 120 px',
          '"Connect on LinkedIn"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Tarjetas de Directivos y Emprendedores',
        description: 'Un código al dorso de la tarjeta convierte un primer encuentro en una conexión guardada.'
      },
      {
        title: 'Acreditaciones de Congreso y Mixers de Networking',
        description: 'Un código en la acreditación deja que la gente conecte en segundos durante una pausa de networking.'
      },
      {
        title: 'Currículums y Portafolios de Candidatos',
        description: 'Un código en el currículum deja que un responsable de contratación abra tus recomendaciones y portafolio sin teclear.'
      },
      {
        title: 'Generación de Leads B2B en Ferias',
        description: 'Un código de estand anima a los visitantes corporativos a seguir la página de empresa.'
      },
      {
        title: 'Diapositivas de Presentaciones de Ponentes',
        description: 'Un código en la diapositiva final deja que el público conecte y siga en contacto.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for LinkedIn QR Scannability',
      points: [
        'Una URL personalizada limpia. Configura una URL pública ordenada — linkedin.com/in/juan-perez — en vez de una cadena larga y aleatoria, y la matriz es más simple.',
        'Visibilidad pública. Activa la visibilidad del perfil público para que quien escanee sin cuenta de LinkedIn aún pueda ver tus datos.',
        'Contraste fuerte. Azul oscuro o negro sobre papel blanco se lee con fiabilidad en una sala de congresos con poca luz.',
        'Una zona de silencio clara. Deja un borde limpio sin texto ni gráficos que lo solapen.',
        'Un CTA legible. Acompaña el código con un legible «Escanea para Conectar en LinkedIn».'
      ]
    },
    faqs: [
      {
        q: '¿Cómo encuentro el enlace de mi perfil público de LinkedIn?',
        a: 'Mira tu perfil y copia la URL de la barra del navegador, o de la sección «Información de contacto».'
      },
      {
        q: '¿Al escanear se abre la app de LinkedIn en el móvil?',
        a: 'Lanza la app de LinkedIn directo a tu página de perfil.'
      },
      {
        q: '¿Puedo añadir un código QR de LinkedIn a mi currículum impreso?',
        a: 'Deja que un reclutador abra tus recomendaciones, tu portafolio y tu historial completo con un toque.'
      },
      {
        q: '¿Los códigos QR de LinkedIn caducan?',
        a: 'No. Sigue válido todo el tiempo que lo esté la URL de tu perfil.'
      },
      {
        q: '¿Puedo crear un código QR para una Página de Empresa de LinkedIn?',
        a: 'Pega la URL de la página de empresa (p. ej. https://www.linkedin.com/company/tumarca) y genera.'
      },
      {
        q: '¿Puedo insertar el logo de LinkedIn en el centro?',
        a: 'Coloca el logo «in» o tu foto en el centro, y la corrección Nivel H lo cubre.'
      },
      {
        q: '¿Cuál es el tamaño recomendado para tarjetas de visita?',
        a: 'Al menos 20 x 20 mm (0,8 x 0,8 pulgadas) con contraste nítido.'
      },
      {
        q: '¿Es gratis este generador de códigos QR de LinkedIn?',
        a: 'Lo es — escaneos ilimitados, sin marca de agua, sin registro.'
      }
    ],
    bestPractices: 'Configura una URL personalizada de LinkedIn limpia para una matriz más simple, imprime a 22x22 mm o más en una tarjeta, y usa el azul de LinkedIn (#0A66C2) sobre blanco.'
  },
  '/youtube-qr-code-generator': {
    sections: [
      {
        title: 'Genera Vistas y Suscriptores de YouTube desde el Marketing Offline',
        paragraphs: [
          'Añade códigos QR de YouTube a folletos de eventos, presentaciones de congresos, manuales de producto y anuncios impresos para dirigir tráfico a tu contenido de vídeo.',
          'Admite URLs de canal, enlaces de vídeo individuales y enlaces de lista de reproducción para máxima flexibilidad.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of YouTube QR Codes',
      paragraphs: [
        'Un código QR de YouTube lleva una URL estándar de YouTube — `https://youtube.com/@canal`, `https://youtu.be/{videoId}`, o un enlace de lista de reproducción. Escanéalo y el teléfono asigna el enlace HTTPS al intent de la app de YouTube (`vnd.youtube:{videoId}`), así que la reproducción empieza dentro de la app sin rodeo por el navegador.',
        'Ese traspaso da la mejor experiencia de visualización: el usuario puede dar me gusta, comentar y suscribirse al momento, y ver en HD o 4K bajo su propia cuenta con sesión iniciada.',
        'El código guarda la dirección canónica exacta del vídeo o del canal en la matriz, así que sigue válido todo el tiempo que el contenido esté disponible.'
      ]
    },
    comparisonTable: {
      title: 'YouTube QR Codes vs. Manual Video Search vs. Video Embeds',
      headers: [
        'Feature',
        'YouTube QR Code',
        'Manual Search',
        'Web Video Embed'
      ],
      rows: [
        [
          'User Effort',
          '1 Camera Scan (Instant playback)',
          'High (Typing keywords & finding video)',
          'Medium (Must browse website)'
        ],
        [
          'App Integration',
          'Direct native YouTube app launch',
          'Manual search navigation',
          'Web browser player (Limited engagement)'
        ],
        [
          'Conversion to Subscriptions',
          'High (Native 1-tap subscribe)',
          'Low (Competitor distraction in search)',
          'Low (Requires opening app separately)'
        ],
        [
          'Print Compatibility',
          '100% print-ready (Flyers, posters, cards)',
          'N/A',
          'N/A (Digital only)'
        ],
        [
          'Lifetime Cost',
          '100% Free & Unlimited',
          'Free',
          'Hosting fees'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Pega el Enlace del Vídeo, Canal o Lista de YouTube',
        description: 'Copia la URL pública de tu canal, vídeo o lista de reproducción y pégala.'
      },
      {
        number: 2,
        title: 'Personaliza con el Rojo de YouTube y el Icono de Play',
        description: 'Usa el rojo de YouTube (#FF0000), elige un patrón de puntos y coloca el logo de play en el centro.'
      },
      {
        number: 3,
        title: 'Descarga en Formato SVG o PNG',
        description: 'Toma SVG para pósteres, banners y embalaje, o un PNG de alta resolución para una diapositiva.'
      }
    ],
    features: [
      {
        title: 'Lanzamiento de Vídeo Directo en la App Nativa',
        description: 'Abre el vídeo o el canal en la app de YouTube, donde la interacción es más alta.'
      },
      {
        title: 'Escaneos Permanentes e Ilimitados',
        description: 'Un código estático que funciona para siempre y admite cualquier número de vistas, gratis.'
      },
      {
        title: 'SVG Vectorial para Impresión de Gran Formato',
        description: 'Escala a un banner de congreso, una valla o un fondo de escenario sin desenfoque.'
      },
      {
        title: 'Arquitectura con la Privacidad Primero',
        description: 'Hecho en tu dispositivo, sin rastreo ni perfilado.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Recommendations for YouTube QR Codes',
      description: 'Calculate minimum print size using S = D / 10 for rapid camera recognition.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Setup Manuals & Guides',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan for Step-by-Step Video Setup"'
        ],
        [
          'Conference Presentation Slides',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '250 mm x 250 mm (10" x 10")',
          '"Scan to Watch Recording & Subscribe"'
        ],
        [
          'Concert & Music Promotional Posters',
          '50 cm - 150 cm (20" - 60")',
          '80 mm x 80 mm (3.2" x 3.2")',
          '"Scan to Watch Official Music Video"'
        ],
        [
          'Event Stage Banners & Backdrops',
          '3.0 m - 8.0 m (10 ft - 26 ft)',
          '400 mm x 400 mm (16" x 16")',
          '"Scan to Stream Live Keynote"'
        ],
        [
          'Direct Mail Postcards & Brochures',
          '25 cm - 40 cm (10" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan for Video Demonstration"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Manuales de Montaje y Configuración en Vídeo',
        description: 'Un código en el embalaje cambia un folleto de papel confuso por un vídeo claro paso a paso.'
      },
      {
        title: 'Ponencias y Presentaciones',
        description: 'Un código en la diapositiva final deja que la sala se suscriba o vuelva a ver la demo.'
      },
      {
        title: 'Marketing de Música y Cine',
        description: 'Un código en la portada de un álbum, un folleto de concierto o un póster de película reproduce el tráiler o el videoclip.'
      },
      {
        title: 'Recorridos de Propiedades en Vídeo',
        description: 'Un código en el cartel del jardín abre un recorrido cinematográfico para un comprador que pasa.'
      },
      {
        title: 'Envases Culinarios y Tutoriales de Recetas',
        description: 'Un código en un pack de ingredientes lleva a un tutorial de cocina.'
      }
    ],
    troubleshooting: {
      title: '5 Common YouTube QR Code Issues & Solutions',
      points: [
        'Un vídeo privado. Configúralo como Público u Oculto para que todo el que escanee pueda verlo.',
        'Restricción por edad. Un vídeo con restricción de edad pide al espectador iniciar sesión primero, lo que añade fricción.',
        'Un enlace de lista temporal. Usa una URL de lista pública permanente, no un enlace de cola pasajera.',
        'Bajo contraste. Evita el rojo claro sobre rosa; mantén el primer plano rojo contra un fondo blanco.',
        'Un enlace de compartir largo. Usa la forma corta youtu.be para un código más limpio y menos denso.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo enlazo un código QR a mi canal de YouTube?',
        a: 'Copia la URL de tu canal (p. ej. https://youtube.com/@canal), pégala, dale estilo y descárgalo.'
      },
      {
        q: '¿Puedo crear un código QR que pida automáticamente suscribirse?',
        a: 'Añade ?sub_confirmation=1 a la URL de tu canal — https://youtube.com/@canal?sub_confirmation=1 — y el escaneo muestra un aviso de suscripción.'
      },
      {
        q: '¿Al escanear se abre la app nativa de YouTube en el móvil?',
        a: 'En el móvil lanza la app de YouTube directo al vídeo o al canal.'
      },
      {
        q: '¿Puedo enlazar a un momento concreto de un vídeo de YouTube?',
        a: 'Añade ?t=1m30s a la URL del vídeo para empezar la reproducción en el minuto uno y medio.'
      },
      {
        q: '¿Los códigos QR de YouTube caducan?',
        a: 'No — sigue apuntando al vídeo todo el tiempo que el vídeo esté disponible.'
      },
      {
        q: '¿Puedo añadir un icono de play de YouTube en el centro?',
        a: 'Pon un botón de play o el avatar de tu canal en el centro, y la corrección Nivel H lo cubre.'
      },
      {
        q: '¿Hay algún límite de escaneos en los códigos QR gratuitos de YouTube?',
        a: 'Ninguno. Cada código de aquí admite escaneos ilimitados de por vida, gratis.'
      },
      {
        q: '¿Qué formatos de archivo están disponibles para descargar?',
        a: 'PNG de alta resolución, SVG vectorial y WebP.'
      }
    ],
    bestPractices: 'Añade una línea clara como «Escanea para Ver el Tutorial en Vídeo», usa el enlace corto youtu.be para una matriz más simple, y prueba el escaneo desde la distancia a la que la gente realmente se pondrá.'
  },
  '/instagram-qr-code-generator': {
    sections: [
      {
        title: 'Haz Crecer tu Instagram con Códigos QR de Impresión y Digitales',
        paragraphs: [
          'Imprime códigos QR de Instagram en tarjetas de visita, embalaje, cartas de restaurante, banners de eventos y merchandising para atraer seguidores orgánicos.',
          'Al escanearlo, el código QR abre la app de Instagram directamente en tu página de perfil para seguirte con un toque.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of Instagram QR Codes',
      paragraphs: [
        'Un código QR de Instagram lleva un enlace universal con la forma `https://instagram.com/{usuario}`. Escanéalo y el teléfono resuelve el esquema de la app nativa (`instagram://user?username={usuario}`), abriendo el perfil dentro de la app de Instagram en vez de un navegador.',
        'Como el usuario ya tiene la sesión iniciada en su app, ese traspaso se salta por completo el paso de inicio de sesión — aterrizan en tu perfil listos para tocar Seguir o deslizar tus Reels.',
        'Los códigos son permanentes y estáticos, construidos en Nivel H (30% de redundancia). Dale estilo con el degradado de Instagram (#E1306C, #F77737, #FCAF45) y coloca el glifo de la cámara o tu propio logo en el centro.'
      ]
    },
    comparisonTable: {
      title: 'Direct Instagram QR Code vs. Manual Handle Search vs. Linktree',
      headers: [
        'Feature / Aspect',
        'Instagram QR (QR Generator Online)',
        'Manual Handle Search',
        'Linktree Landing Page'
      ],
      rows: [
        [
          'Conversion Friction',
          'Zero friction (1 scan → Instant profile)',
          'High (Typing typos, multiple lookalikes)',
          'Medium (Additional click required)'
        ],
        [
          'App Launch Speed',
          'Instant native Instagram app launch',
          'Manual app open + search query',
          'Opens browser first, then app hop'
        ],
        [
          'Offline Scannability',
          '100% scannable from print & displays',
          'Requires user to remember username',
          'Requires multi-step navigation'
        ],
        [
          'Branding Customization',
          'Full gradient color matching & logo',
          'No visual branding',
          'Third-party branding template'
        ],
        [
          'Lifetime Validity',
          'Permanent lifetime validity (0 fees)',
          'Permanent',
          'Subject to service availability'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce tu Usuario o la URL del Perfil de Instagram',
        description: 'Escribe tu usuario sin la @ (p. ej. tumarca), o pega el enlace completo del perfil.'
      },
      {
        number: 2,
        title: 'Aplica los Colores del Degradado de Instagram y el Logo',
        description: 'Usa el degradado de Instagram, elige un estilo de punto y coloca el logo de la cámara en el centro.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial para Impresión o PNG de Alta Resolución',
        description: 'Toma SVG para etiquetas, pegatinas, embalaje y cartelería, o un PNG de alta resolución para digital.'
      }
    ],
    features: [
      {
        title: 'Deep-Linking a la App Nativa',
        description: 'Un escaneo lleva al usuario a la app de Instagram instalada para seguirte con un toque.'
      },
      {
        title: 'Escaneos Permanentes e Ilimitados',
        description: 'Un código de Instagram estático sin fecha de caducidad y sin límite de escaneos, gratis.'
      },
      {
        title: 'SVG Vectorial para Impresión Física',
        description: 'Escala de una etiqueta de producto de 2 cm a un banner de feria sin desenfoque.'
      },
      {
        title: 'Privacidad 100% y Cero Rastreo',
        description: 'Todo se ejecuta del lado del cliente, sin rastreo, sin registros y sin inicio de sesión.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Recommended Placement for Instagram QR Codes',
      description: 'Follow the optical scanning rule S = D / 10 to ensure instant scannability across all lighting conditions.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Packaging & Box Flaps',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Tag Us on Instagram"'
        ],
        [
          'Apparel Tags & Clothing Labels',
          '15 cm - 30 cm (6" - 12")',
          '22 mm x 22 mm (0.9" x 0.9")',
          '"Scan & Follow for Giveaways"'
        ],
        [
          'Restaurant Table Cards & Menus',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to View Daily Food Specials"'
        ],
        [
          'Storefront Windows & Cash Wraps',
          '50 cm - 100 cm (20" - 40")',
          '60 mm x 60 mm (2.4" x 2.4")',
          '"Follow Us for Exclusive In-Store Deals"'
        ],
        [
          'Event Banners & Stage Backdrops',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '300 mm x 300 mm (12" x 12")',
          '"Scan to Share Your Event Photos"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Experiencias de Unboxing en E-Commerce',
        description: 'Un código en el albarán anima a los compradores a publicar una foto y etiquetar tu marca.'
      },
      {
        title: 'Cartelería de Mesa de Restaurantes y Cafés',
        description: 'Los comensales saltan directos a tu menú fotográfico, tus reels de comida y tus destacados.'
      },
      {
        title: 'Salones de Belleza y Estudios de Fitness',
        description: 'Muestra transformaciones de antes y después y reels de entrenamiento a los clientes que esperan en recepción.'
      },
      {
        title: 'Merchandising de Moda y Ropa',
        description: 'Un código en la etiqueta colgante abre ideas de estilismo y lookbooks reales de clientes para el comprador.'
      },
      {
        title: 'Exposiciones de Artistas y Creadores',
        description: 'Un código junto a la obra deja que un visitante de la galería siga el proceso creativo en tiempo real.'
      }
    ],
    troubleshooting: {
      title: '5 Common Instagram QR Code Scanning Issues & Fixes',
      points: [
        'Una @ en el usuario. Introduce el usuario sin la «@» (usa «nombremarca», no «@nombremarca») para una URL válida.',
        'Una cuenta privada. Si el perfil es privado, quien escanee tiene que solicitar seguir en vez de ver la cuadrícula al momento.',
        'Bajo contraste. Un primer plano rosa claro sobre blanco no deja a la cámara nada que fijar. Mantén el contraste alto.',
        'Un logo demasiado grande. Mantenlo por debajo del 30% del ancho del código y la corrección de errores aún puede hacer su trabajo.',
        'Un cambio de usuario. Renombra tu cuenta y todos los códigos impresos se rompen. Fija el usuario antes de una impresión masiva.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo creo un código QR para mi perfil de Instagram?',
        a: 'Introduce tu usuario sin la @ (o pega la URL de tu perfil), define tus colores y logo, y descárgalo — gratis.'
      },
      {
        q: '¿Al escanear se abre la app de Instagram directamente?',
        a: 'En un iPhone o Android moderno el enlace universal abre tu perfil dentro de la app de Instagram en vez de un navegador.'
      },
      {
        q: '¿Puedo añadir un logo de Instagram al código QR?',
        a: 'El Nivel H te da espacio para el glifo de la cámara, o tu propio icono, sobre el centro.'
      },
      {
        q: '¿Los códigos QR de Instagram caducan?',
        a: 'No — un código estático es permanente, con escaneos ilimitados.'
      },
      {
        q: '¿Puedo enlazar a un Reel o una publicación concreta de Instagram?',
        a: 'Copia la URL del Reel o de la publicación y pega el enlace completo.'
      },
      {
        q: '¿Cuál es el mejor formato para imprimir pegatinas y embalaje?',
        a: 'SVG vectorial para una prensa comercial y una troqueladora de pegatinas, o PNG para digital.'
      },
      {
        q: '¿Es gratis este generador de códigos QR de Instagram para uso comercial?',
        a: 'Lo es — sin marca de agua, sin límite de escaneos, sin suscripción.'
      },
      {
        q: '¿Qué ratio de contraste debo usar para los códigos QR de Instagram?',
        a: 'Al menos 4.5:1 entre los módulos y el fondo. Magenta oscuro o morado sobre blanco o amarillo claro escanea muy limpio.'
      }
    ],
    bestPractices: 'Usa el degradado de Instagram para un reconocimiento instantáneo, añade una línea clara «Escanea para Seguirnos», y prueba la impresión bajo varias luces distintas antes de una tirada grande.'
  },
  '/googleform-qr-code-generator': {
    sections: [
      {
        title: 'Maximiza las Tasas de Respuesta de Encuestas y Feedback',
        paragraphs: [
          'Colocar un código QR de Google Forms en el embalaje, los tickets, la cartelería de un evento o las diapositivas de una presentación permite al público completar cuestionarios al instante desde el móvil.',
          'Elimina errores de entrada manual de datos y aumenta las tasas de respuesta con un acceso directo y sin fricción.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Google Forms Survey & Feedback QR Codes',
      paragraphs: [
        'Un código QR de Google Forms lleva el enlace directo a un formulario publicado — una encuesta de satisfacción, un RSVP de evento, un test de clase. Escanéalo y el formulario responsive se carga directo en el navegador del móvil — sin una URL larga y propensa a errores que teclear de un ticket.',
        'Teclear una URL es donde se hunden las tasas de respuesta, cayendo bastante más de un 80%. Un código elimina ese paso: quien responde escanea, avanza por las preguntas y envía en segundos.',
        'Todo lo que envían fluye directo a tu panel de Google Forms y a la Hoja de Cálculo de Google vinculada en tiempo real, listo para gráficos en vivo, alertas automáticas y cualquier Zapier o webhook que tengas conectado.'
      ]
    },
    comparisonTable: {
      title: 'Google Forms QR Code vs. Traditional Paper Feedback Forms',
      headers: [
        'Evaluation Factor',
        'Google Forms QR Code',
        'Paper Feedback Forms'
      ],
      rows: [
        [
          'Data Collection Speed',
          'Instant real-time entry into Google Sheets',
          'Hours/days of manual data entry by staff'
        ],
        [
          'Customer Completion Rate',
          'High (Frictionless mobile form interface)',
          'Low (Requires finding pen, handwriting responses)'
        ],
        [
          'Transcription Errors',
          '0% (User enters data directly)',
          'High (Misreading illegible handwriting)'
        ],
        [
          'Environmental Waste',
          'Zero paper waste (Unlimited digital submissions)',
          'Thousands of discarded paper survey sheets'
        ],
        [
          'Real-Time Alert Automation',
          'Triggers instant email alerts on negative reviews',
          'Delayed by days until staff manually reviews paper'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Obtén y Pega el Enlace de tu Formulario Publicado',
        description: 'En Google Forms, pulsa el botón morado Enviar, elige el icono de enlace, marca «Acortar URL» y pega el resultado.'
      },
      {
        number: 2,
        title: 'Dale Estilo con el Morado de Forms e Inserta tu Logo',
        description: 'Da estilo a los módulos, aplica el morado de Google Forms (#7248B9) o tus propios colores, y coloca un icono en el centro.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial para Expositores y Cartelería',
        description: 'Toma el SVG para carteles de mesa, tickets y pósteres de aula, o PNG para una diapositiva de presentación.'
      }
    ],
    features: [
      {
        title: 'Impulsa Tasas Explosivas de Respuesta y Reseña',
        description: 'Capta el feedback mientras la comida o la visita aún están frescas — sin URL que teclear se acaba el abandono.'
      },
      {
        title: 'Sincronización en Tiempo Real con Hojas de Cálculo y Paneles',
        description: 'Cada envío aterriza al instante en tu hoja vinculada para análisis y alertas en vivo.'
      },
      {
        title: 'Entrada de Datos Móvil, Táctil e Higiénica',
        description: 'Sin portapapeles ni bolígrafos compartidos en una clínica, un restaurante o un aula — cada uno usa su propio teléfono.'
      },
      {
        title: 'Validez Permanente de por Vida sin Coste',
        description: 'Un código de Forms estático sin caducidad que recoge respuestas ilimitadas sin coste.'
      }
    ],
    sizingMatrix: {
      title: 'Google Forms QR Code Sizing & Placement Guide',
      description: 'Place your Google Forms QR codes where customers have downtime to complete short questionnaires.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Restaurant Table Tents & Receipt Footers',
          '25 cm - 40 cm (10" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Rate Your Meal & Win $50"'
        ],
        [
          'Retail Checkout Counters & Bag Inserts',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Leave Quick Feedback"'
        ],
        [
          'Classroom Presentation Slides & Whiteboards',
          '1.0 m - 3.0 m (3 ft - 10 ft)',
          '150 mm x 150 mm (6" x 6")',
          '"Scan to Submit Daily Quiz Answers"'
        ],
        [
          'Event Registration Banners & Posters',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Complete Fast Event Check-In"'
        ],
        [
          'Medical Clinic Waiting Rooms & Desks',
          '30 cm - 60 cm (12" - 24")',
          '45 mm x 45 mm (1.8" x 1.8")',
          '"Scan to Complete Digital Intake Form"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Encuestas de Satisfacción en Restauración y Hostelería',
        description: 'Un código de tarjeta de mesa pide a los comensales valorar el servicio y la comida en menos de un minuto.'
      },
      {
        title: 'Test de Clase, Asistencia y Encuestas de Estudiantes',
        description: 'Un profesor proyecta un código de Forms para que los alumnos escaneen y envíen deberes, test o asistencia.'
      },
      {
        title: 'Captación de Leads en Estands de Ferias',
        description: 'Recoge los intereses y datos de contacto de un visitante directo a una hoja de cálculo desde su propio teléfono.'
      },
      {
        title: 'RSVP de Eventos y Registro de Talleres',
        description: 'Un código en un póster deja que los asistentes se inscriban en sesiones y comidas al momento.'
      },
      {
        title: 'Admisión de Pacientes y Cribados de Salud',
        description: 'Los pacientes completan un cuestionario de admisión sin contacto en su propio teléfono en la sala de espera.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Google Forms QR Code Scanning & Access Issues',
      points: [
        'Un inicio de sesión forzado. A menos que lo necesites de verdad, desactiva «Limitar a 1 respuesta» en los ajustes del formulario — obliga a iniciar sesión en Google y añade fricción.',
        'El enlace equivocado. Copia el enlace público del diálogo morado Enviar, no la URL /edit de la barra del navegador.',
        'Una URL sin acortar. Una URL de Forms en bruto es muy larga. Marca antes «Acortar URL» en Forms para una matriz más limpia y menos densa.',
        'Demasiadas preguntas. Mantén una encuesta QR móvil en cinco preguntas o menos para sostener la finalización.',
        'Un formulario cerrado. Si desactivas «Aceptar respuestas», quien escanee ve un mensaje de formulario cerrado. Déjalo abierto durante toda la campaña.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo obtengo el enlace público correcto de Google Form para mi código QR?',
        a: 'Abre el formulario, pulsa el botón morado Enviar, elige el icono de Enlace, marca «Acortar URL» y copia el resultado para pegarlo.'
      },
      {
        q: '¿Necesitan los encuestados una cuenta de Google para rellenar el formulario?',
        a: 'No, siempre que hayas desactivado «Limitar a 1 respuesta» y las preguntas de subida de archivos. Entonces cualquiera lo completa en un navegador móvil sin iniciar sesión.'
      },
      {
        q: '¿Los códigos QR de Google Forms caducan o cobran comisiones?',
        a: 'No. Un código de Forms estático nunca caduca; los encuestados pueden escanearlo sin límite y a ti nunca te facturan.'
      },
      {
        q: '¿Puedo enlazar a un Google Form que rellene ciertos campos automáticamente?',
        a: 'En Forms, usa el menú de tres puntos > «Obtener enlace prerrellenado», fija tus valores por defecto, copia ese enlace y genera el código desde él. Quien escanee verá esos campos ya rellenos.'
      },
      {
        q: '¿Adónde van las respuestas enviadas?',
        a: 'A la pestaña Respuestas y, en tiempo real, a la Hoja de Cálculo de Google que hayas vinculado.'
      },
      {
        q: '¿Puedo insertar el logo de mi escuela o empresa en el código QR?',
        a: 'Puedes. La redundancia del Nivel H cubre con holgura un icono de Forms, o tu propio logo, puesto en el centro.'
      },
      {
        q: '¿Qué formato es mejor para imprimir carteles de mesa y folletos?',
        a: 'SVG vectorial para una impresión nítida, o un PNG de alta resolución para una diapositiva de presentación.'
      },
      {
        q: '¿Se mantiene privado el enlace de mi encuesta durante la generación?',
        a: 'Sí. El trabajo se hace del lado del cliente, así que ninguna URL de formulario ni dato de la encuesta se sube ni se guarda.'
      }
    ],
    bestPractices: 'Mantén la encuesta en tres a cinco preguntas, usa la URL acortada de Forms para una matriz más simple, y ofrece un pequeño incentivo — un descuento, una entrada de sorteo — para elevar la finalización.'
  },
  '/crypto-qr-code-generator': {
    sections: [
      {
        title: 'Pagos y Donaciones en Criptomoneda sin Errores',
        paragraphs: [
          'Las direcciones de monedero de criptomoneda son largas y propensas a errores al copiar y pegar a mano. Los códigos QR garantizan una precisión del 100% en la dirección durante los pagos en punto de venta o las donaciones online.',
          'Funciona sin problemas con MetaMask, Trust Wallet, Coinbase Wallet y todas las apps cripto principales.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Cryptocurrency Payment URI QR Codes',
      paragraphs: [
        'Un código QR cripto lleva una dirección pública de recepción y detalles de pago opcionales en una URI de pago estándar — la BIP-0021 de Bitcoin (`bitcoin:<Dirección>?amount=<Cantidad>&label=<Etiqueta>`), la EIP-681 de Ethereum (`ethereum:<Dirección>`), o la equivalente para USDT, Solana y Litecoin.',
        'Las direcciones cripto son cadenas largas e implacables de 34 a 64 caracteres (`bc1q...`, `0x...`). Escribe una a mano y un solo carácter equivocado envía los fondos al vacío — de forma permanente, sin devolución posible en una blockchain.',
        'Un código QR elimina ese riesgo. Escanéalo dentro de MetaMask, Trust Wallet, Coinbase Wallet, Phantom o Binance y la dirección del destinatario y la cantidad se rellenan exactas, lo que hace que un pago en punto de venta, un bote de propinas o la liquidación de una factura sean rápidos y sin errores.'
      ]
    },
    comparisonTable: {
      title: 'Crypto QR Code Payment vs. Manual Address Copy-Pasting',
      headers: [
        'Security / Usability Factor',
        'Crypto QR Code Payment',
        'Manual Address Copy / Typing'
      ],
      rows: [
        [
          'Address Accuracy',
          '100% byte-for-byte exact (Zero risk of typos)',
          'High risk of transcription errors and fund loss'
        ],
        [
          'Clipboard Hijacking Defense',
          'Bypasses desktop/mobile clipboard malware',
          'Vulnerable to malware that swaps copied addresses in clipboard'
        ],
        [
          'Payment Speed',
          '1 Scan + Review + Confirm (< 5 seconds)',
          '30 - 60 seconds (Copying, pasting, verifying characters)'
        ],
        [
          'Pre-Set Payment Amount',
          'Auto-fills exact crypto amount in wallet',
          'User must manually calculate and enter amount'
        ],
        [
          'Point of Sale Integration',
          'Instant tabletop or register display',
          'Requires displaying 42+ character text string'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Elige la Criptomoneda e Introduce la Dirección Pública del Monedero',
        description: 'Elige Bitcoin (BTC), Ethereum (ETH), USDT (TRC-20/ERC-20), Solana (SOL) o Litecoin (LTC) y pega tu dirección pública de recepción.'
      },
      {
        number: 2,
        title: 'Especifica una Cantidad Fija Opcional',
        description: 'Fija una cantidad, o déjala en blanco para que quien paga introduzca su propia propina o donación.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial para Pantallas de Caja o Facturas',
        description: 'Añade el logo de la moneda y exporta SVG para un soporte de caja o PNG para una factura en PDF.'
      }
    ],
    features: [
      {
        title: 'Elimina Errores Catastróficos al Escribir la Dirección',
        description: 'La dirección exacta se rellena automáticamente, así que un remitente no puede perder fondos por un carácter mal escrito.'
      },
      {
        title: 'Soporte para Criptomonedas y Stablecoins Principales',
        description: 'Códigos de pago estándar para Bitcoin, Ethereum, USDT, Solana, Litecoin y BNB.'
      },
      {
        title: 'Cumplimiento de los Estándares BIP-0021 y EIP-681',
        description: 'Se lee correctamente en MetaMask, Trust Wallet, Coinbase, Phantom y Binance.'
      },
      {
        title: 'Seguridad Criptográfica 100% del Lado del Cliente',
        description: 'Tu dirección pública se codifica localmente en tu navegador. Las claves privadas nunca se tocan ni se piden.'
      }
    ],
    sizingMatrix: {
      title: 'Crypto QR Code Sizing & Placement Specifications',
      description: 'Crypto QR codes should be clearly displayed with visible network labels.',
      headers: [
        'Placement Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Substrate'
      ],
      rows: [
        [
          'Point-of-Sale (POS) Cash Registers',
          '25 cm - 40 cm (10" - 16")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Acrylic Countertop Stand / Metal Plate'
        ],
        [
          'Content Creator Livestreams & Tip Jars',
          'On-Screen Digital Display',
          '200 x 200 px on screen',
          'High-Contrast Screen Overlay'
        ],
        [
          'PDF Invoices & Freelance Billboards',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Digital PDF / Vector SVG'
        ],
        [
          'Charity & Non-Profit Donation Banners',
          '50 cm - 100 cm (20" - 40")',
          '80 mm x 80 mm (3.2" x 3.2")',
          'Matte Vinyl Banner'
        ],
        [
          'Storefront Window Stickers',
          '40 cm - 80 cm (16" - 32")',
          '60 mm x 60 mm (2.4" x 2.4")',
          'Weatherproof Matte Vinyl Decal'
        ]
      ]
    },
    useCases: [
      {
        title: 'Pagos en Punto de Venta de Tiendas y Restaurantes',
        description: 'Un código en la caja deja que un cliente pague en Bitcoin o USDT desde su monedero móvil.'
      },
      {
        title: 'Botes de Propinas de Creadores y Streamers',
        description: 'Un código de donación en Bitcoin o Ethereum va en un directo, un overlay de Twitch o un blog.'
      },
      {
        title: 'Liquidación de Facturas de Freelancers y Agencias',
        description: 'Un código en la factura PDF liquida un proyecto internacional rápido, a través de fronteras, sin la demora de una transferencia bancaria.'
      },
      {
        title: 'Ayuda Humanitaria y Beneficencia',
        description: 'Los donantes dan cripto directamente a una dirección on-chain transparente y auditable.'
      },
      {
        title: 'Tiendas Pop-Up y Mercados al Aire Libre',
        description: 'Cobra sin contacto en una feria de artesanía o un mercado de comida, sin comisión de hardware de comercio.'
      }
    ],
    troubleshooting: {
      title: 'Critical Safety Precautions for Crypto QR Codes',
      points: [
        'Nombra la red. Etiqueta el código con la cadena exacta — «USDT (TRC-20)» frente a «USDT (ERC-20)». Envía por redes incompatibles y los fondos se pierden.',
        'Solo dirección pública. Un código cripto debe llevar tu dirección pública de recepción y nada más. Nunca codifiques una clave privada, una frase semilla ni una contraseña de recuperación.',
        'Prueba primero con poco. Haz una pequeña transacción de prueba antes de aprobar una tirada grande.',
        'Evita el estilo sutil. Los degradados o las tintas metálicas confunden al sensor óptico. Módulos oscuros sobre blanco.',
        'Protege la pantalla. En un local público, un soporte de acrílico a prueba de manipulación impide que alguien pegue una pegatina fraudulenta sobre tu código.'
      ]
    },
    faqs: [
      {
        q: '¿Es seguro mostrar mi código QR cripto en público?',
        a: 'Sí — solo guarda tu dirección pública de recepción. La gente puede enviar fondos a tu monedero, pero nadie puede retirar de él. Tus claves privadas quedan por completo bajo tu custodia.'
      },
      {
        q: '¿Qué apps de monedero pueden escanear estos códigos QR cripto?',
        a: 'Los monederos móviles habituales leen todos los códigos URI estándar — MetaMask, Trust Wallet, Coinbase Wallet, Binance, Phantom, Exodus, Kraken, Electrum.'
      },
      {
        q: '¿Puedo especificar una cantidad de pago fija en el código QR?',
        a: 'Fija una cantidad opcional como 0.005 BTC o 50 USDT y el monedero la rellena automáticamente al escanear.'
      },
      {
        q: '¿Qué pasa si alguien envía una criptomoneda distinta a mi dirección?',
        a: 'Enviar una moneda incompatible — Bitcoin a una dirección de Ethereum, por ejemplo — puede perder los fondos para siempre. Por eso el código debe etiquetarse con la moneda y la red precisas.'
      },
      {
        q: '¿Los códigos QR cripto caducan o cobran comisiones de transacción?',
        a: 'El código es permanente y gratuito. Las comisiones de gas de la blockchain solo se aplican cuando un pagador envía realmente una transacción — ese es el cargo de la red, no nuestro.'
      },
      {
        q: '¿Dónde encuentro la dirección pública de recepción de mi monedero?',
        a: 'Abre la app del monedero, ve a Recibir, elige la moneda y copia la dirección pública que se muestra.'
      },
      {
        q: '¿Puedo insertar el logo oficial de Bitcoin o Ethereum en el código QR?',
        a: 'Claro. Como el Nivel H puede reconstruir hasta cerca del 30% de un código dañado, el logo de la moneda puede ir justo en el centro sin romper nada.'
      },
      {
        q: '¿Se guardan las direcciones de mi monedero en los servidores de QR Generator Online?',
        a: 'No. Todo ocurre en local, así que las direcciones de tu monedero nunca se suben, registran ni rastrean.'
      }
    ],
    bestPractices: 'Verifica tu dirección pública de recepción carácter por carácter antes de generar, y etiqueta el código con claridad indicando la moneda y la red exactas — una transferencia por la red equivocada es irrecuperable.'
  },
  '/event-qr-code-generator': {
    sections: [
      {
        title: 'Aumenta la Asistencia con Sincronización de Calendario de un Toque',
        paragraphs: [
          'Añade códigos QR de evento a tarjetas de «reserva la fecha», acreditaciones de congreso, confirmaciones de entrada o páginas de aterrizaje de webinars.',
          'Incluye título del evento, marcas de tiempo de inicio y fin, dirección del lugar y notas de descripción.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of iCalendar VEVENT Calendar QR Codes',
      paragraphs: [
        'Un código QR de evento lleva una entrada de calendario en el formato iCalendar (`BEGIN:VEVENT` / `END:VEVENT`) definido en RFC 5545. Contiene el título (`SUMMARY`), el lugar (`LOCATION`), la descripción (`DESCRIPTION`), el inicio (`DTSTART`), el fin (`DTEND`) y la zona horaria.',
        'Escanéalo y el teléfono lee el contenido y ofrece una hoja «Añadir al Calendario». Un toque coloca el evento en Apple Calendar, Google Calendar u Outlook, con la hora de inicio, el lugar y el recordatorio automático.',
        'Automatizar la entrada del calendario es lo que sube la asistencia. Los webinars perdidos, las fechas olvidadas y los solapamientos casi siempre se reducen a que alguien no añadió el evento de entrada — y un escaneo le quita ese paso de encima.'
      ]
    },
    comparisonTable: {
      title: 'Event Calendar QR Code vs. Manual Calendar Entry',
      headers: [
        'Feature / Aspect',
        'iCalendar Event QR Code',
        'Manual Calendar Entry'
      ],
      rows: [
        [
          'Calendar Addition Speed',
          '1 Scan + 1 Tap (< 3 seconds)',
          '45 - 90 seconds (Typing Title, Date, Time, Location)'
        ],
        [
          'Date & Time Accuracy',
          '100% exact (No timezone or AM/PM mistakes)',
          'Frequent human errors in date and time entry'
        ],
        [
          'Automated Reminder Alerts',
          'Automatically sets 15/30-min advance alerts',
          'User frequently forgets to configure reminders'
        ],
        [
          'Venue Address Integration',
          'Embeds complete venue address and GPS link',
          'User often omits venue details in manual entries'
        ],
        [
          'Cross-Platform Support',
          'Native on iOS Calendar, Google Calendar, Outlook',
          'Manual entry required per calendar app'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce Título, Lugar y Descripción del Evento',
        description: 'Añade el nombre del evento, la dirección del lugar o la URL de la reunión, y una breve descripción.'
      },
      {
        number: 2,
        title: 'Define Fecha y Hora de Inicio y Fin con Zona Horaria Correcta',
        description: 'Fija el inicio y el fin exactos, en la zona horaria local del lugar — ahí es donde se cuelan los errores de desfase horario.'
      },
      {
        number: 3,
        title: 'Personaliza el Diseño y Descarga Recursos de Impresión',
        description: 'Añade un icono de calendario o el logo del evento, aplica tus colores y exporta SVG para invitaciones o PNG para pantalla.'
      }
    ],
    features: [
      {
        title: 'Añadir al Calendario del Móvil de un Toque',
        description: 'Los invitados colocan el evento en Apple Calendar, Google Calendar u Outlook con un solo toque.'
      },
      {
        title: 'Recordatorios Nativos Automáticos',
        description: 'La entrada del calendario dispara el recordatorio por defecto del teléfono antes de que empiece el evento, así nadie tiene que configurar uno.'
      },
      {
        title: 'Inserta Direcciones Completas y Enlaces Virtuales',
        description: 'Guarda la dirección para llegar o el enlace de Zoom o Teams en la propia entrada, para que los asistentes lo tengan cuando lo necesiten.'
      },
      {
        title: 'Códigos Estáticos Permanentes sin Caducidad',
        description: 'Un código iCalendar estático que sigue válido indefinidamente, sin cuota mensual ni límite de escaneos.'
      }
    ],
    sizingMatrix: {
      title: 'Event QR Code Print Sizing Specifications',
      description: 'Event QR codes have moderate data density depending on description length.',
      headers: [
        'Placement Medium',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Format'
      ],
      rows: [
        [
          'Concert & Theater Tickets',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          'Vector SVG / 300 DPI PNG'
        ],
        [
          'Wedding Invitations & Save-the-Dates',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Vector SVG / Heavy Cardstock'
        ],
        [
          'Conference Programs & Badge Lanyards',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Vector SVG / Synthetic Badge'
        ],
        [
          'Event Posters & Promotional Flyers',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          'Vector SVG'
        ],
        [
          'Keynote Slides & Webinar Closing Screens',
          'Digital Display View',
          '250 x 250 px on screen',
          'High-Res PNG @ 1080p/4K'
        ]
      ]
    },
    useCases: [
      {
        title: 'Conciertos, Festivales y Obras de Teatro',
        description: 'Un código en la entrada guarda la hora de la función y el lugar en el teléfono del asistente.'
      },
      {
        title: 'Bodas, Aniversarios y Celebraciones Privadas',
        description: 'Un código de «reserva la fecha» agenda el día en el calendario de un invitado con meses de antelación.'
      },
      {
        title: 'Congresos Corporativos y Agendas de Ponencias',
        description: 'Los asistentes escanean el programa para añadir talleres y ponencias concretas a sus propios calendarios.'
      },
      {
        title: 'Webinars, Directos y Lanzamientos de Producto',
        description: 'Un código en el vídeo promocional deja que los espectadores guarden la fecha de la emisión al instante.'
      },
      {
        title: 'Ventas Flash de Tienda y Promociones de Temporada',
        description: 'Recuerda a los clientes fieles una rebaja festiva o una hora de compra VIP antes de que se les pase.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Event QR Code Calendar Scheduling Errors',
      points: [
        'Desfase de zona horaria. Introduce las horas en la zona local del lugar, o los asistentes acaban con una hora de diferencia.',
        'Una descripción larga. Meter una agenda completa en el campo estático infla la matriz. Mantenla por debajo de unos 150 caracteres.',
        'Fechas invertidas. Asegúrate de que el fin sea posterior al inicio, o el calendario rechaza la entrada.',
        'Bajo contraste en una tarjeta elegante. Módulos pastel o de lámina dorada sobre marfil fallan el escaneo. Oscuro sobre claro.',
        'Sin indicación. Etiquétalo — «Escanea para Añadir el Evento al Calendario».'
      ]
    },
    faqs: [
      {
        q: '¿Qué ocurre cuando alguien escanea un código QR de evento?',
        a: 'En iOS un aviso «Añadir al Calendario» abre Apple Calendar con el título, las fechas, el lugar y la descripción rellenados. En Android abre Google Calendar con un aviso de Guardar.'
      },
      {
        q: '¿Puedo incluir un enlace de Zoom o Google Meet en los detalles del evento?',
        a: 'Pon el enlace de vídeo en el campo Lugar o Descripción y los asistentes virtuales tendrán la URL de la reunión ahí mismo, en la entrada del calendario.'
      },
      {
        q: '¿La entrada del calendario configura automáticamente un recordatorio para el asistente?',
        a: 'La mayoría de las apps de calendario aplican su recordatorio por defecto — normalmente de 15 a 30 minutos antes — en cuanto se añade un evento nuevo.'
      },
      {
        q: '¿Puedo editar la fecha o la hora del evento después de imprimir el código QR?',
        a: 'El código impreso no — la fecha y la hora quedan fijadas en la matriz. Si los detalles pueden cambiar, apunta un código de URL a una página de evento que controles.'
      },
      {
        q: '¿Los códigos QR de evento caducan o cobran cuotas mensuales?',
        a: 'No. Una vez creas un código iCalendar estático es tuyo para siempre, sin límite de escaneos y sin cuota.'
      },
      {
        q: '¿Qué formato de exportación se recomienda para imprimir en papelería de boda?',
        a: 'SVG vectorial — se mantiene nítido en una prensa comercial, sobre lino texturizado o sobre cartulina metalizada.'
      },
      {
        q: '¿Puedo insertar mi monograma de boda o el logo de mi empresa en el código QR?',
        a: 'Por supuesto. El Nivel H deja redundancia suficiente para un monograma o un glifo de evento en el centro, y los lectores lo siguen decodificando limpio.'
      },
      {
        q: '¿Es privada mi información del evento durante la generación?',
        a: 'Lo es. Todo ocurre en tu dispositivo, así que los títulos y las fechas del evento nunca se envían a ningún sitio.'
      }
    ],
    bestPractices: 'Revisa dos veces cada hora de inicio, hora de fin, zona horaria y lugar antes de imprimir, y prueba el código en un iPhone y un Android para confirmar que la entrada se guarda correctamente.'
  },
  '/phone-qr-code-generator': {
    sections: [
      {
        title: 'Llamada de un Toque para Urgencias y Atención al Cliente',
        paragraphs: [
          'Escanear un código QR de teléfono abre de inmediato el marcador nativo del móvil con tu número exacto listo para llamar.',
          'Elimina errores de marcación y ahorra tiempo en líneas de urgencia, reservas y asistencia en carretera.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of Tel URI Phone Call QR Codes',
      paragraphs: [
        'Un código QR de llamada lleva un enlace `tel:`, el esquema de marcación definido en RFC 3966. El formato es `tel:<NúmeroDeTeléfono>` — normalmente un número E.164 único a nivel mundial como `tel:+14155552671`, opcionalmente con pausas DTMF para una extensión.',
        'Escanéalo y el teléfono muestra un aviso del marcador del sistema con el número y un botón «Llamar a [Número]». Un toque hace la llamada — sin leer un número de un cartel y teclearlo, que es justo de donde salen los errores de marcación en el material impreso.',
        'Este es el código para todo lo que se lee en movimiento: vinilos de furgonetas de servicio, un aviso de contacto de emergencia, un cartel inmobiliario de jardín, una pegatina de línea de ayuda, un menú para llevar.'
      ]
    },
    comparisonTable: {
      title: 'One-Tap Phone QR Code vs. Manual Phone Number Dialing',
      headers: [
        'Evaluation Metric',
        'Phone Call QR Code',
        'Manual Keypad Dialing'
      ],
      rows: [
        [
          'Dialing Speed',
          '1 Scan + 1 Tap (< 2 seconds)',
          '15 - 30 seconds (Reading, memorizing, typing 10+ digits)'
        ],
        [
          'Wrong Number Rate',
          '0% (Exact digit sequence encoded)',
          '15% - 20% on vehicle wraps and billboards'
        ],
        [
          'Drive-By Conversion',
          'High (Scannable from moving vehicle at stoplights)',
          'Extremely low (Passersby cannot write numbers down)'
        ],
        [
          'International Dialing',
          'Encodes exact + country code automatically',
          'Frequent errors with exit codes and area prefixes'
        ],
        [
          'Device Integration',
          'Native trigger on iOS Phone and Android Dialer',
          'Requires opening Phone app and manually typing'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce el Número Completo con Prefijo de País',
        description: 'Usa el formato E.164 — +14155550199 para EE. UU., +442071838750 para el Reino Unido — para que alguien internacional conecte sin adivinar el prefijo de marcación.'
      },
      {
        number: 2,
        title: 'Añade un Icono de Teléfono y Personaliza los Colores',
        description: 'Dale un estilo de alto contraste, define ojos de esquina personalizados y pon un icono de auricular en el centro para que el escaneo se lea como una llamada, no como un enlace misterioso.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial para Vinilos de Vehículo y Gran Cartelería',
        description: 'Toma el SVG para gráficos de vehículo, carteles de jardín y vallas, o un PNG de alta resolución para folletos, imanes y tarjetas.'
      }
    ],
    features: [
      {
        title: 'Marcación Directa Instantánea de un Toque',
        description: 'Un escaneo y un toque convierten el interés en una llamada en vivo en segundos.'
      },
      {
        title: 'Elimina Números Equivocados y Errores de Marcación',
        description: 'El número exacto queda codificado, así que nadie transpone un dígito leído de una furgoneta en marcha.'
      },
      {
        title: 'Soporte Universal de Dispositivo y Red Móvil',
        description: 'Funciona desde la cámara integrada de cualquier smartphone con servicio móvil.'
      },
      {
        title: 'Funcionamiento Permanente de por Vida sin Coste',
        description: 'Un código tel estático con validez permanente, llamadas ilimitadas y sin cargo mensual.'
      }
    ],
    sizingMatrix: {
      title: 'Phone Call QR Code Print Sizing Specifications',
      description: 'Phone QR codes on vehicles and outdoor signs must be scaled appropriately for long-distance optical scanning.',
      headers: [
        'Placement / Application',
        'Expected Scan Distance',
        'Minimum Recommended Size',
        'Recommended Material'
      ],
      rows: [
        [
          'Service Van & Truck Wraps',
          '3.0 m - 8.0 m (10 ft - 26 ft)',
          '300 mm x 300 mm (12" x 12")',
          'Cast Vinyl Vehicle Wrap with UV Overlaminate'
        ],
        [
          'Real Estate Yard Signs & Banners',
          '1.5 m - 3.0 m (5 ft - 10 ft)',
          '150 mm x 150 mm (6" x 6")',
          'Reflective Corrugated Plastic / Aluminum'
        ],
        [
          'Takeout Menus & Fridge Magnets',
          '20 cm - 40 cm (8" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Flexible Magnetic Sheet / Gloss Cardstock'
        ],
        [
          'Emergency Hotline & Safety Placards',
          '40 cm - 80 cm (16" - 32")',
          '60 mm x 60 mm (2.4" x 2.4")',
          'Photoluminescent / Rigid PVC Sign'
        ],
        [
          'Print Magazine Ads & Postcards',
          '20 cm - 35 cm (8" - 14")',
          '25 mm x 25 mm (1.0" x 1.0")',
          'Matte Heavyweight Paper'
        ]
      ]
    },
    useCases: [
      {
        title: 'Vinilos de Flota de Servicio (Fontanería, Climatización, Electricidad)',
        description: 'Un código grande en la furgoneta deja que un vecino atascado en el tráfico —o que pasa junto a un camión aparcado— escanee y llame para pedir servicio.'
      },
      {
        title: 'Carteles de Jardín y Tableros de Venta Inmobiliaria',
        description: 'Un comprador parado frente a la propiedad escanea el cartel y contacta directamente con el agente.'
      },
      {
        title: 'Líneas de Emergencia y Despacho de Seguridad',
        description: 'En un campus, un aparcamiento o una planta industrial, el código pone una llamada de emergencia a un toque.'
      },
      {
        title: 'Menús de Comida para Llevar y a Domicilio',
        description: 'Un código en un menú para llevar o un imán de nevera deja que un cliente hambriento haga un pedido por teléfono al momento.'
      },
      {
        title: 'Pegatinas de Alquiler de Equipos y Servicio de Grúa',
        description: 'Una pegatina resistente en un equipo de alquiler, una señal de aparcamiento o un trastero permite pedir ayuda rápido.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Phone Call QR Code Dialing Errors',
      points: [
        'Sin prefijo de país. Antepón al número el + y el prefijo de país (+1 para EE. UU.). Sin él, un dispositivo en roaming internacional no puede completar la llamada.',
        'Demasiado pequeño en un vehículo. Un código de 50 mm no se lee desde 5 metros. En rotulación de vehículos, ve como mínimo a 300 mm x 300 mm.',
        'Vinilo reflectante. Un cromado brillante o un vinilo metálico deslumbra al sol. Elige mate o satinado.',
        'Formato de extensión incorrecto. Para una extensión marcada automáticamente, sepárala con una coma — tel:+14155550199,102 — que inserta una pausa DTMF de dos segundos.',
        'Sin icono de teléfono. Un auricular en el centro tranquiliza a la gente: el escaneo es una llamada, no un enlace web desconocido.'
      ]
    },
    faqs: [
      {
        q: '¿Al escanear el código se inicia la llamada de inmediato?',
        a: 'No — el teléfono muestra el número decodificado con un botón de Llamar, y el usuario toca para marcar. Ese paso de confirmación es deliberado.'
      },
      {
        q: '¿Debo incluir mi prefijo de país en el número de teléfono?',
        a: 'Siempre. Empieza con el + y el prefijo de país (+1 para EE. UU. y Canadá, +44 para el Reino Unido) para que todo el que llame conecte sin importar operadora ni estado de roaming.'
      },
      {
        q: '¿Qué pasa si alguien escanea un código QR de teléfono en un iPad sin tarjeta SIM?',
        a: 'En una tableta solo con WiFi, el escaneo ofrece hacer la llamada por FaceTime Audio, Skype o un iPhone emparejado que actúa de puente móvil.'
      },
      {
        q: '¿Puedo codificar extensiones telefónicas en el código QR?',
        a: 'Pon una coma entre el número principal y la extensión — tel:+14155550199,104 — y la coma añade una pausa de dos segundos antes de marcar los dígitos DTMF.'
      },
      {
        q: '¿Los códigos QR de teléfono caducan o cobran por llamada?',
        a: 'No. Un código tel estático tiene validez permanente, sin límite de escaneos y sin cargo por llamada.'
      },
      {
        q: '¿Qué formato vectorial es mejor para imprimir un vinilo de vehículo comercial?',
        a: 'El SVG — mantiene la precisión vectorial al escalarse a tamaño de vehículo o valla, sin pixelación.'
      },
      {
        q: '¿Puedo medir cuántas llamadas llegan desde mi código QR?',
        a: 'Apunta el código a un número de seguimiento de llamadas dedicado de CallRail o Twilio, asignado solo a ese material, y toda llamada que pase por él es atribuible.'
      },
      {
        q: '¿Se guarda mi número de teléfono en servidores externos durante la generación?',
        a: 'No. La generación se ejecuta por completo en tu navegador, así que el número nunca se almacena, registra ni comparte.'
      }
    ],
    bestPractices: 'Usa el formato E.164 (+1...), dimensiona el código según la distancia de lectura (la regla 10:1) y añade un icono de teléfono para que el escaneo signifique claramente «llamar».'
  },
  '/sms-qr-code-generator': {
    sections: [
      {
        title: 'Generación de Leads por SMS y Suscripciones de Marketing',
        paragraphs: [
          'Prerrellena números de destino y palabras clave (como «UNIRME» o «DESCUENTO») para que los clientes se suscriban a novedades por mensaje con un solo clic.',
          'Ideal para promociones de tienda, altas en clubes VIP y sorteos.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of SMSTO Protocol Text Messaging QR Codes',
      paragraphs: [
        'Un código QR de SMS lleva una instrucción de mensajería de texto en el esquema `SMSTO:` (o `sms:`). El formato es `SMSTO:<NúmeroDeTeléfono>:<TextoDelMensaje>` — el número o shortcode del destinatario, y luego el cuerpo del mensaje a prerrellenar.',
        'Escanearlo abre la app de Mensajes nativa — Apple Messages en iOS, Google Messages en Android — con el número puesto y el texto ya escrito. Un toque lo envía por SMS o RCS.',
        'Esta es la columna vertebral de mucho marketing móvil: suscripciones por palabra clave («envía DESCUENTO a un shortcode»), altas de suscriptores, confirmaciones de entrada, verificaciones de doble factor. El SMS se lee por encima del 98%, y un código elimina la fricción de escribir un número y una palabra clave correctamente.'
      ]
    },
    comparisonTable: {
      title: 'SMS QR Code Opt-Ins vs. Manual Text Keyword Marketing',
      headers: [
        'Factor / Metric',
        'SMS QR Code Opt-In',
        'Manual SMS Keyword Entry'
      ],
      rows: [
        [
          'Opt-In Conversion Rate',
          '55% - 70% of scanners complete opt-in',
          '15% - 25% (High drop-off typing shortcodes)'
        ],
        [
          'Keyword Accuracy',
          '100% exact match (Eliminates spelling typos)',
          'Frequent typos causing failed opt-in responses'
        ],
        [
          'Speed to Completion',
          '1 Scan + Tap Send (< 3 seconds)',
          '30 - 60 seconds (Opening app, typing number & keyword)'
        ],
        [
          'Carrier Compatibility',
          'Universal across all cellular carriers & networks',
          'Universal across all cellular carriers & networks'
        ],
        [
          'Hardware Requirement',
          'Works on all iOS and Android camera phones',
          'Requires manual typing on keypad'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce el Número de Destino o el Shortcode',
        description: 'Añade tu número de 10 dígitos, una línea SMS gratuita o un shortcode de marketing de 5-6 dígitos, con el prefijo de país.'
      },
      {
        number: 2,
        title: 'Define la Palabra Clave o el Mensaje Predefinido',
        description: 'Escribe la palabra clave exacta que espera tu plataforma de SMS — UNIRME, VIP, DESCUENTO, INFO.'
      },
      {
        number: 3,
        title: 'Descarga Recursos de Impresión de Alta Resolución',
        description: 'Toma el SVG vectorial para banners en tienda, carteles de estante y expositores de mesa, o el PNG para una pantalla promocional.'
      }
    ],
    features: [
      {
        title: 'Impulsa un Crecimiento Explosivo de tu Lista de SMS',
        description: 'Quita la fricción de las suscripciones y altas de fidelización para que más gente termine el flujo.'
      },
      {
        title: 'Cero Errores de Ortografía en la Palabra Clave',
        description: 'Tu automatización recibe la palabra clave exacta cada vez, sin erratas del cliente que tumben la suscripción.'
      },
      {
        title: 'Compatibilidad Universal de Operadora y Dispositivo',
        description: 'Funciona con cualquier operadora y en cualquier iPhone o Android con cámara.'
      },
      {
        title: 'Código Estático Permanente sin Caducidad',
        description: 'Un código que sigue activo indefinidamente, sin suscripción ni límite de escaneos.'
      }
    ],
    sizingMatrix: {
      title: 'SMS QR Code Print Sizing Specifications',
      description: 'Position your SMS QR codes on high-traffic retail signage with clear incentive callouts.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended CTA'
      ],
      rows: [
        [
          'Retail Checkout Counters & Shelf Talkers',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan to Text VIP for 15% Off"'
        ],
        [
          'Restaurant Window Decals & Table Tents',
          '30 cm - 60 cm (12" - 24")',
          '45 mm x 45 mm (1.8" x 1.8")',
          '"Scan to Text MENU for Specials"'
        ],
        [
          'Event Posters & Concert Flyers',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Text WIN for VIP Tickets"'
        ],
        [
          'Real Estate Yard Signs & Directionals',
          '1.0 m - 2.5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4.8" x 4.8")',
          '"Scan to Text HOUSE for Listing Price"'
        ],
        [
          'Direct Mail Postcards & Catalogs',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Text SAVE for Promo Code"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Club VIP de Tienda y Construcción de Lista SMS',
        description: 'Un código en caja ofrece un descuento instantáneo en cuanto un comprador escanea para enviar tu palabra clave de alta.'
      },
      {
        title: 'Consultas Automáticas de Propiedades Inmobiliarias',
        description: 'Un código en el cartel del jardín deja que un comprador envíe un código de propiedad y reciba precio y planos de vuelta automáticamente.'
      },
      {
        title: 'Entradas de Eventos y Confirmaciones de Check-In',
        description: 'Los asistentes envían un código de confirmación en la puerta para un check-in rápido.'
      },
      {
        title: 'Soporte al Cliente y Servicios de Conserjería',
        description: 'Los huéspedes de hotel y los clientes obtienen una línea SMS directa para pedir servicio o reservar una cita.'
      },
      {
        title: 'Participaciones en Concursos y Encuestas en Directo',
        description: 'Un código escaneable atrae miles de participaciones instantáneas durante un partido o un concierto.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting SMS QR Code Scanning Failures',
      points: [
        'Más de 160 caracteres. Mantén el texto predefinido corto — un mensaje más largo se divide en varias partes y puede fragmentarse en redes antiguas.',
        'Límites de shortcode. En un shortcode de 5 dígitos, confirma que tu pasarela SMS acepta mensajes entrantes de dispositivos en roaming internacional.',
        'Sin avisos legales. Según las normas de la TCPA y la CTIA, imprime el aviso estándar — «Pueden aplicarse tarifas de mensajes y datos. Responde STOP para cancelar» — junto a un código de marketing.',
        'Bajo contraste. Módulos claros sobre una superficie pálida fallan. Oscuro sobre claro.',
        'Desgaste. Un laminado mate protege una tarjeta impresa de roces y humedad que romperían el escaneo.'
      ]
    },
    faqs: [
      {
        q: '¿Al escanear el código se envía el mensaje automáticamente?',
        a: 'No. Abre la app de Mensajes con el número y el texto listos, y el usuario toca Enviar — eso es lo que lo mantiene conforme con las normas de privacidad móvil.'
      },
      {
        q: '¿Se cobran las tarifas SMS estándar de la operadora cuando los usuarios envían el texto?',
        a: 'Sí. El mensaje que envía el usuario descuenta de su propio plan de SMS y de cualquier tarifa de operadora que aplique.'
      },
      {
        q: '¿Puedo usar un código QR de SMS con shortcodes de 5 o 6 dígitos?',
        a: 'Un número normal de 10 dígitos, una línea gratuita o un shortcode de 5-6 dígitos van todos en el mismo campo de número de teléfono.'
      },
      {
        q: '¿Los códigos QR de SMS caducan o tienen límites mensuales de escaneo?',
        a: 'Son códigos estáticos permanentes, con escaneos ilimitados y sin caducidad.'
      },
      {
        q: '¿Cuál es el límite de caracteres del texto SMS predefinido?',
        a: 'Un solo SMS admite 160 caracteres. Quedarse por debajo mantiene el mensaje en un solo segmento en todas las operadoras.'
      },
      {
        q: '¿Puedo insertar mi logo en un código QR de SMS?',
        a: 'Eso funciona. En Nivel H el código tolera bastante obstrucción — suficiente para poner un icono de mensaje o tu logo sobre el centro.'
      },
      {
        q: '¿Los códigos QR de SMS necesitan conexión a internet para escanearse?',
        a: 'Escanear y abrir la app de Mensajes funciona sin conexión. Enviar el texto en sí necesita cobertura móvil normal.'
      },
      {
        q: '¿Se guardan los datos de teléfono del cliente en los servidores de QR Generator Online?',
        a: 'No. Todo se hace en tu dispositivo, así que ningún número ni texto de mensaje se sube ni se conserva.'
      }
    ],
    bestPractices: 'Deja claro el beneficio de enviar el texto, e incluye los avisos obligatorios de tarifas de mensajes y datos en cualquier campaña comercial.'
  },
  '/email-qr-code-generator': {
    sections: [
      {
        title: 'Agiliza los Comentarios de Clientes y las Consultas',
        paragraphs: [
          'Cuando los usuarios escanean un código QR de correo, su app de correo predeterminada se abre con tu dirección de soporte, un asunto personalizado y una plantilla de mensaje ya rellenados.',
          'Perfecto para comentarios de producto, registro de garantías, carteles de ofertas de empleo y soporte técnico.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Mailto URI Scheme Email QR Codes',
      paragraphs: [
        'Un código QR de correo lleva un enlace `mailto:`, el esquema de correo de internet definido en RFC 6068. La estructura es `mailto:<CorreoDestinatario>?subject=<AsuntoCodificado>&body=<CuerpoCodificado>&cc=<CCCodificado>&bcc=<CCOcultaCodificada>`, con espacios y caracteres especiales codificados por porcentaje según RFC 3986.',
        'Un escaneo abre el cliente de correo que esté como predeterminado — Apple Mail, Gmail, Outlook, Yahoo — con la dirección, el asunto y el texto inicial ya rellenados. El usuario lo revisa y toca enviar. Un comentario, una petición de soporte, una reclamación de garantía: revisar-y-enviar en vez de una ventana de redacción en blanco.',
        'Para un servicio de soporte, ese asunto predefinido hace la clasificación en silencio. Inserta un encabezado estándar como `[Reclamación de Garantía - Modelo X]` y los tickets entrantes se categorizan solos, lo que reduce la clasificación manual en el lado receptor.'
      ]
    },
    comparisonTable: {
      title: 'Pre-Filled Email QR Codes vs. Manual Email Inquiries',
      headers: [
        'Operational Factor',
        'Pre-Filled Email QR Code',
        'Manual Email Typing'
      ],
      rows: [
        [
          'Address Accuracy',
          '100% (Zero mistyped addresses or bouncebacks)',
          '15% - 25% error rate on complex corporate emails'
        ],
        [
          'Subject Categorization',
          'Standardized subject lines for automated triage',
          'Unpredictable, vague, or missing subject headers'
        ],
        [
          'Customer Effort',
          '1 Scan + Review + Send (< 5 seconds)',
          'Manual typing of recipient, subject, and message'
        ],
        [
          'CRM / Helpdesk Routing',
          'Rules route tickets instantly based on subject',
          'Requires manual sorting and assignment by staff'
        ],
        [
          'Offline Availability',
          'Encodes mailto data directly in barcode matrix',
          'Requires finding business card or searching website'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Indica el Correo del Destinatario y CC/CCO Opcionales',
        description: 'Introduce la bandeja que debe recibirlo — soporte@tuempresa.com — y añade direcciones CC o CCO separadas por comas si las necesitas.'
      },
      {
        number: 2,
        title: 'Redacta un Asunto Estandarizado y una Plantilla de Cuerpo',
        description: 'Prerrellena un asunto claro como «Consulta sobre el Pedido #» más un breve texto de cuerpo, para que el cliente parta de algo en vez de nada.'
      },
      {
        number: 3,
        title: 'Personaliza el Diseño y Exporta un Archivo de Alta Resolución',
        description: 'Da estilo a los módulos, añade un icono de sobre o tu logo, y descarga SVG vectorial para impresión o PNG de alta resolución para pantalla.'
      }
    ],
    features: [
      {
        title: 'Elimina Correos Rebotados y Erratas en la Dirección',
        description: 'El mensaje llega a tu bandeja exacta — sin dominio mal escrito, sin rebote.'
      },
      {
        title: 'Automatiza la Clasificación de Tickets del Helpdesk y el CRM',
        description: 'Un asunto predefinido deja que Zendesk, Freshdesk o HubSpot enruten la consulta por su cuenta.'
      },
      {
        title: 'Soporte Universal en Todos los Clientes de Correo',
        description: 'Abre la app de correo predeterminada en iOS, Android, macOS y Windows por igual.'
      },
      {
        title: 'Funcionamiento Permanente de por Vida sin Coste',
        description: 'Un código mailto estático que nunca caduca, no necesita suscripción y admite cualquier volumen de mensajes.'
      }
    ],
    sizingMatrix: {
      title: 'Email QR Code Print Sizing Specifications',
      description: 'Email QR codes contain moderate payload lengths depending on the length of the pre-filled body text.',
      headers: [
        'Application Placement',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended File Format'
      ],
      rows: [
        [
          'Product Packaging & Instruction Manuals',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Vector SVG / 300 DPI PNG'
        ],
        [
          'Warranty Cards & Invoices',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Vector SVG / PDF'
        ],
        [
          'Equipment Service Tags & Industrial Machinery',
          '30 cm - 60 cm (12" - 24")',
          '50 mm x 50 mm (2.0" x 2.0")',
          'Engraved Aluminum / Vinyl Decal'
        ],
        [
          'Recruitment Posters & Job Fair Flyers',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          'Vector SVG'
        ],
        [
          'Tabletop Feedback Cards in Hospitality',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Heavyweight Matte Cardstock'
        ]
      ]
    },
    useCases: [
      {
        title: 'Registro de Garantías y Soporte Técnico',
        description: 'Un código en la etiqueta del producto abre una reclamación con el número de modelo ya en el asunto.'
      },
      {
        title: 'Comentarios de Clientes y Consultas Generales',
        description: 'Una tarjeta de mesa lleva los comentarios sinceros directamente y en privado a la bandeja del gerente.'
      },
      {
        title: 'Reclutamiento en Ferias de Empleo y Envío de CV',
        description: 'Un código en un cartel de empleo deja a los candidatos enviar su CV al responsable de contratación con el código del puesto ya puesto.'
      },
      {
        title: 'Captación de Leads en Ferias y Peticiones de Factura',
        description: 'Los visitantes del estand escanean para pedir un whitepaper, un catálogo o precios de empresa en un toque.'
      },
      {
        title: 'Mantenimiento Urgente y Gestión de Instalaciones',
        description: 'Un código en un equipo de climatización deja que un inquilino reporte una avería directamente al despacho de mantenimiento.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Email QR Code Scanning & Delivery Issues',
      points: [
        'Un cuerpo demasiado largo. Más de 400 caracteres de texto predefinido aprietan la matriz. Mantén la plantilla por debajo de unos 150 caracteres.',
        'Una dirección mal formada. Un @ que falta o un espacio final hace que el cliente de correo rechace la orden de redacción. Revisa bien el destinatario.',
        'Sin app de correo predeterminada. En un escritorio sin una configurada, un enlace mailto puede preguntar qué app usar. En móvil, la app de correo nativa simplemente lo gestiona.',
        'Bajo contraste. Módulos pálidos o pastel sobre blanco fallan el escaneo. Oscuro sobre claro, por encima de 4.5:1.',
        'Sin instrucción. Etiquétalo — «Escanea para Escribir a Soporte» — para que el escaneo sea obvio.'
      ]
    },
    faqs: [
      {
        q: '¿Qué app de correo se abre cuando un usuario escanea un código QR de correo?',
        a: 'La que el dispositivo trate como predeterminada — Apple Mail en un iPhone, Gmail en Android, o Outlook o Yahoo si el usuario configuró una de ellas.'
      },
      {
        q: '¿Al escanear se envía el correo automáticamente?',
        a: 'No. Abre la ventana de redacción con los campos rellenos, y el usuario toca Enviar. Así mantiene el control de lo que realmente sale.'
      },
      {
        q: '¿Puedo dejar en blanco los campos de asunto y cuerpo?',
        a: 'Puedes. Introduce solo la dirección del destinatario y deja el asunto y el cuerpo vacíos para que el usuario los escriba.'
      },
      {
        q: '¿Puedo incluir varias direcciones de destinatario?',
        a: 'Añade varias direcciones separadas por comas en el campo de destinatario y el mensaje llega a todo tu equipo a la vez.'
      },
      {
        q: '¿Los códigos QR de correo caducan o requieren planes de pago?',
        a: 'Ninguna de las dos cosas. Un código mailto estático funciona para siempre, lo escanee quien lo escanee, y nunca pide dinero.'
      },
      {
        q: '¿Cuántos caracteres puedo incluir en el cuerpo predefinido del correo?',
        a: 'El esquema mailto admite cadenas largas, pero mantener el cuerpo por debajo de unos 150 caracteres mantiene la matriz limpia y rápida de escanear.'
      },
      {
        q: '¿Puedo medir cuántos correos genera mi código QR?',
        a: 'Pon una etiqueta en el asunto — [Origen: Folleto de Verano] — y fíltrala en tu bandeja o CRM para ver qué material impulsó el mensaje.'
      },
      {
        q: '¿Se mantiene privada mi dirección de correo durante la generación?',
        a: 'Se queda en local. La codificación se ejecuta en tu navegador, así que ninguna dirección se registra ni se guarda en un servidor.'
      }
    ],
    bestPractices: 'Mantén el asunto claro y el cuerpo corto, usa módulos oscuros sobre blanco y etiqueta el código con adónde va el correo para que quien escanee sepa qué esperar.'
  },
  '/facebook-qr-code-generator': {
    sections: [
      {
        title: 'Haz Crecer tu Audiencia en Redes Sociales en Todas Partes',
        paragraphs: [
          'Facilita que los clientes en tienda y los asistentes a eventos encuentren y sigan tu marca en las redes sociales sin buscar el nombre de usuario a mano.',
          'Inserta los iconos oficiales de cada plataforma en el centro de tus códigos QR para aumentar el reconocimiento de marca y la tasa de conversión de escaneos.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Social Media & Facebook Profile QR Codes',
      paragraphs: [
        'Un código QR de Facebook o de redes sociales lleva una URL directa de perfil, un identificador de página, un enlace de grupo o un destino de link-tree. Escanéalo y el teléfono resuelve un enlace universal: si la app de Facebook, Instagram, TikTok o LinkedIn está instalada, hace deep-link directo a tu página verificada; si no, abre la versión web móvil con un aviso para seguir.',
        'En una tienda o en un evento, la atención es fugaz. Decirle a alguien que «busque Acme Co en Facebook» pierde a la mayoría — por una errata, por un rival con marca casi idéntica, por lo que sea que el feed muestre a continuación. Un código dedicado elimina la búsqueda por completo y convierte a un transeúnte en seguidor en menos de dos segundos.',
        'Obtienes exportaciones vectoriales de alta resolución y control total del diseño, así que puedes poner la insignia oficial de la plataforma, ajustar el código a tus colores de marca y mantener contraste suficiente para escanear rápido a través de un escaparate o desde el otro lado de una sala de eventos.'
      ]
    },
    comparisonTable: {
      title: 'Direct Social QR Code vs. Manual Search Discovery',
      headers: [
        'Metric / Factor',
        'Direct Social Media QR Code',
        'Manual Search on App / Web'
      ],
      rows: [
        [
          'Conversion Rate',
          'Up to 65% of scanners follow/like',
          'Under 15% due to search drop-off'
        ],
        [
          'Discovery Speed',
          '1 - 2 seconds (Direct camera scan)',
          '30 - 60 seconds (Opening app, searching, filtering)'
        ],
        [
          'Brand Impersonation Risk',
          '0% (Directly links to verified profile URL)',
          'High (User may follow competing or duplicate pages)'
        ],
        [
          'Offline Print Integration',
          'Seamlessly embeds on tables, receipts, boxes',
          'Requires printing clumsy text instructions'
        ],
        [
          'Cross-Platform Routing',
          'Universal deep-link to native app or browser',
          'Requires separate manual searches per app'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Pega la URL de tu Página, Grupo o Perfil de Facebook',
        description: 'Copia el enlace público completo — facebook.com/tumarca, instagram.com/tuusuario — y pégalo.'
      },
      {
        number: 2,
        title: 'Inserta el Icono de Marca y Personaliza la Paleta',
        description: 'Dale estilo en el azul de Facebook (#1877F2) o tu propia paleta, y coloca el icono de la plataforma en el centro con corrección de errores Nivel H.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial para Cartelería o PNG para Impresión',
        description: 'Toma el SVG para vinilos de escaparate, expositores y embalaje, o un PNG de alta resolución para folletos, tickets y tarjetas de mesa.'
      }
    ],
    features: [
      {
        title: 'Convierte el Tráfico Físico en Seguidores Activos',
        description: 'Compradores, comensales y asistentes a eventos se hacen seguidores sin buscar tu página.'
      },
      {
        title: 'Deep-Linking Directo a la App Nativa',
        description: 'Un escaneo lleva a los usuarios móviles a su app social instalada para seguir con un toque.'
      },
      {
        title: 'Inserción de Iconos Sociales Oficiales',
        description: 'Elige entre los iconos preestablecidos de Facebook, Instagram, YouTube, TikTok y LinkedIn para que el código sea reconocible y fiable.'
      },
      {
        title: 'Escaneos Permanentes Ilimitados sin Caducidad',
        description: 'Un código social estático que sigue funcionando indefinidamente, sin cuota, sin límite y sin renovación.'
      }
    ],
    sizingMatrix: {
      title: 'Social Media QR Code Print Sizing Benchmarks',
      description: 'Position your social QR codes where customers naturally pause and have their smartphones readily available.',
      headers: [
        'Application Location',
        'Scan Distance',
        'Recommended Print Size',
        'Recommended Substrate'
      ],
      rows: [
        [
          'Point of Sale (POS) Checkout Counter',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Acrylic Countertop Sign / Sticker'
        ],
        [
          'Dining Tables & Table Tents',
          '30 cm - 45 cm (12" - 18")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Laminated Card / Wooden Table Tent'
        ],
        [
          'Retail Storefront Window Decal',
          '1.0 m - 2.0 m (3 ft - 6.5 ft)',
          '120 mm x 120 mm (4.8" x 4.8")',
          'Weatherproof Matte Vinyl Decal'
        ],
        [
          'Product Packaging Unboxing Cards',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Matte Heavyweight Insert Card'
        ],
        [
          'Event Stage Backdrops & Banners',
          '3.0 m - 6.0 m (10 ft - 20 ft)',
          '300 mm x 300 mm (12" x 12")',
          'Non-Reflective Fabric Banner'
        ]
      ]
    },
    useCases: [
      {
        title: 'Expositores de Caja y Fidelización',
        description: 'Un código junto a la caja anima a los compradores a seguir la página para descuentos flash semanales y avisos de nuevos productos.'
      },
      {
        title: 'Carteles de Mesa y Reseñas con Check-In',
        description: 'Los comensales hacen check-in, dejan una reseña y etiquetan sus fotos de comida, lo que amplía gratis tu alcance orgánico local.'
      },
      {
        title: 'Insertos en Packaging y Concursos de Unboxing',
        description: 'Una tarjeta en la caja invita a los compradores a publicar un unboxing y etiquetarte para optar a un premio mensual.'
      },
      {
        title: 'Eventos, Congresos y Encuentros de Comunidad',
        description: 'Un código grande en una diapositiva o banner envía a los asistentes directamente a tu grupo de comunidad oficial.'
      },
      {
        title: 'Vinilos de Flota de Servicio y Publicidad Local',
        description: 'Un código en la furgoneta deja que los vecinos lean tus reseñas y sigan la página en un semáforo.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Social Media QR Code Scanning Mistakes',
      points: [
        'Una página privada. Configura la página o el grupo como Público para que quien escanee vea el contenido sin un muro de inicio de sesión de por medio.',
        'Un fondo cargado. Evita la foto detrás del código. Un fondo claro y liso a 4.5:1 de contraste es lo que la cámara fija.',
        'Sin motivo para escanear. Un código pelado logra pocos seguidores. Dale un gancho — «Escanea para unirte a más de 10.000 miembros VIP en Facebook».',
        'Reflejo del brillo. Un vinilo de escaparate brillante rebota el sol hacia el objetivo. Vinilo mate en exteriores, siempre.',
        'Una sola plataforma. ¿Quieres seguidores en Facebook, Instagram y TikTok? Apunta el código a una única página link-tree en vez de a una sola red.'
      ]
    },
    faqs: [
      {
        q: '¿Al escanear se abre la app de Facebook o un navegador web?',
        a: 'Si la app de Facebook está instalada, el enlace universal abre tu perfil de forma nativa dentro de ella. Si no, recurre al navegador móvil — en ambos casos la persona llega a tu página.'
      },
      {
        q: '¿Puedo enlazar a una publicación, álbum o evento concreto de Facebook en vez de a una página?',
        a: 'Copia la URL directa de cualquier publicación pública, álbum, directo o evento y pégala. El código apunta a donde apunte el enlace.'
      },
      {
        q: '¿Cómo enlazo a varias plataformas sociales con un solo código QR?',
        a: 'Crea una página gratuita de agregación de enlaces — Linktree, Beacons o una página en tu propio sitio — y genera el código desde esa URL. Quien escanee elige entonces qué plataforma seguir.'
      },
      {
        q: '¿Los códigos QR de Facebook caducan o tienen límites mensuales de escaneo?',
        a: 'Son estáticos y permanentes. El código guarda tu URL directa y sigue funcionando, con escaneos ilimitados y sin caducidad.'
      },
      {
        q: '¿Puedo personalizar el código QR con el azul oficial de Facebook?',
        a: 'Usa el #1877F2 oficial para los módulos y mantén un fondo blanco limpio — el contraste se mantiene alto y el código queda acorde a la marca.'
      },
      {
        q: '¿Por qué es mejor usar un código QR que pedir a los usuarios que busquen mi página?',
        a: 'Un escaneo se salta la búsqueda por completo: sin erratas, sin acabar en una página imitadora de nombre parecido, y el seguimiento se hace en menos de dos segundos.'
      },
      {
        q: '¿Qué formato debo descargar para imprimir en cartelería de escaparate?',
        a: 'El SVG vectorial — escala a cualquier tamaño de banner o escaparate sin el menor rastro de desenfoque.'
      },
      {
        q: '¿Se protege la privacidad del cliente al generar códigos QR sociales?',
        a: 'Todo se genera localmente en tu dispositivo, así que tus URLs y enlaces de perfil nunca llegan a un servidor.'
      }
    ],
    bestPractices: 'Acompaña el código con un motivo para actuar — «Escanea para desbloquear descuentos exclusivos» o «Síguenos para sorteos diarios» — y colócalo a la altura de los ojos y con buena luz. Escanéalo en varios teléfonos distintos antes del lanzamiento.'
  },
  '/whatsapp-qr-code-generator': {
    sections: [
      {
        title: 'Comunicación y Soporte Directo con el Cliente',
        paragraphs: [
          'Arranca el marketing conversacional y el soporte al cliente sin fricción. Escanear abre WhatsApp directamente en un chat con tu número y un texto ya escrito listo para enviar.',
          'Ideal para mostradores de atención, reservas de restaurante, carteles de consulta de productos y embalaje de comercio electrónico.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Protocol & Architecture of WhatsApp Click-to-Chat QR Codes',
      paragraphs: [
        'Un código QR de WhatsApp lleva un enlace de clic-para-chatear sobre el protocolo oficial `https://wa.me/` de WhatsApp (o el antiguo esquema `whatsapp://send?phone=`). El formato es `https://wa.me/<NúmeroDeTeléfono>?text=<TextoConCodificaciónURL>` — el número en forma E.164 sin símbolos, y el texto un mensaje inicial con codificación por porcentaje.',
        'Escanéalo y el teléfono cede el paso al gestor de Universal Links de WhatsApp. Si WhatsApp o WhatsApp Business está instalado, la app abre directamente un chat con tu número y coloca el mensaje ya escrito en el cuadro de redacción — el cliente nunca tiene que guardar antes tu número en sus contactos.',
        'Ese atajo es el punto clave. Elimina los pasos de «guardar el número, abrir la app, pensar qué decir» y la barrera para un primer mensaje casi desaparece, y por eso un código de WhatsApp suele convertir mucho mejor que un número de teléfono impreso o un formulario web.'
      ]
    },
    comparisonTable: {
      title: 'WhatsApp QR Code vs. Traditional Contact Channels',
      headers: [
        'Channel / Feature',
        'WhatsApp QR Click-to-Chat',
        'Standard Web Contact Form',
        'Traditional Phone Number'
      ],
      rows: [
        [
          'Interaction Friction',
          '1 Scan + 1 Tap (Instant live conversation)',
          'High (Typing Name, Email, Phone, Message)',
          'Medium (Dialing, waiting in call queue)'
        ],
        [
          'Open & Read Rate',
          '98% average open rate on WhatsApp',
          '20% - 25% average email open rate',
          'High voicemail drop-off rate'
        ],
        [
          'Pre-Filled Context',
          'Automatic inquiry template pre-inserted',
          'User must manually specify subject',
          'Caller must verbally explain context'
        ],
        [
          'Address Book Required',
          'No (Opens chat without saving number)',
          'N/A',
          'Often requires saving to avoid losing contact'
        ],
        [
          'Automation Support',
          'Integrates with WhatsApp Business Auto-Replies',
          'Delayed auto-responder email',
          'Interactive Voice Response (IVR) phone tree'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce el Número con Prefijo Internacional',
        description: 'Introduce el número completo con prefijo de país y nada más — sin signo más, guiones ni paréntesis. Un número de EE. UU. queda como 14155551234; uno del Reino Unido, 447911123456.'
      },
      {
        number: 2,
        title: 'Redacta el Mensaje de Consulta Predefinido',
        description: 'Escribe la primera línea por ellos, algo como «¡Hola! Quiero reservar una mesa para esta noche» o «Hola, vi tu folleto y quiero un presupuesto del producto X».'
      },
      {
        number: 3,
        title: 'Personaliza con el Logo Oficial de WhatsApp y Descarga',
        description: 'Usa los colores de marca verde esmeralda y blanco, coloca la marca de WhatsApp en el centro y exporta como SVG o PNG de alta resolución.'
      }
    ],
    features: [
      {
        title: 'Cero Fricción por Guardar Contactos',
        description: 'Los clientes llegan a tu línea de ventas o soporte en el momento en que escanean — sin añadir antes tu número a su teléfono.'
      },
      {
        title: 'Plantillas de Consulta Predefinidas',
        description: 'Siembra la conversación con contexto atado al anuncio, producto o folleto concreto donde está el código.'
      },
      {
        title: 'Compatible con WhatsApp Business y Personal',
        description: 'Funciona con una cuenta personal, la app WhatsApp Business y la WhatsApp Cloud API.'
      },
      {
        title: 'Codificación Estática Permanente sin Coste',
        description: 'Un código estático que nunca caduca, no cuesta nada al mes y admite inicios de chat ilimitados.'
      }
    ],
    sizingMatrix: {
      title: 'WhatsApp QR Code Sizing & Placement Guide',
      description: 'Ensure customers can effortlessly scan your WhatsApp chat codes across diverse retail and promotional print environments.',
      headers: [
        'Placement Medium',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Packaging & Delivery Boxes',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Chat with Support on WhatsApp"'
        ],
        [
          'Restaurant Table Tents & Counter Signs',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan to Book Table / Order on WhatsApp"'
        ],
        [
          'Real Estate Yard Signs & Window Decals',
          '1.0 m - 2.5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4.8" x 4.8")',
          '"Scan to Text the Listing Agent Instantly"'
        ],
        [
          'Retail Storefront Entrance Posters',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Inquire About In-Stock Products"'
        ],
        [
          'Vehicle Decals & Service Fleet Vans',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '250 mm x 250 mm (10" x 10")',
          '"Scan to Request Rapid Service via WhatsApp"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Soporte al Cliente y Registro de Garantías',
        description: 'Un código en el manual o la caja da a los compradores una línea de solución en vivo en cuanto algo falla.'
      },
      {
        title: 'Comida para Llevar y Reservas de Mesa',
        description: 'Los comensales escanean una tarjeta de mesa para pedir, reservar o preguntar por un alérgeno directamente en tu bandeja de WhatsApp Business.'
      },
      {
        title: 'Consultas Inmobiliarias y Visitas a Propiedades',
        description: 'En un folleto, el código deja que un comprador escriba al agente por planos y horarios de visita al instante.'
      },
      {
        title: 'Insertos en Paquetes de E-Commerce',
        description: 'Una tarjeta en la caja de envío invita al cliente a escribir para un cambio o un código de descuento VIP.'
      },
      {
        title: 'Presupuestos de Servicio y Urgencias',
        description: 'Un imán de nevera o una pegatina de servicio con un código de WhatsApp convierte un trabajo urgente de fontanería o cerrajería en una reserva de un toque.'
      }
    ],
    troubleshooting: {
      title: 'Top Reasons WhatsApp QR Codes Fail to Open Chats',
      points: [
        'Formato de número incorrecto. Un 0 inicial antes del prefijo de zona (4407911... en vez de 447911...) o un + suelto rompen el enlace wa.me. Solo dígitos.',
        'Un fijo. Codifica un número que nunca se registró en WhatsApp y el escaneo devuelve un error de usuario no válido.',
        'Un predefinido inflado. Un mensaje por defecto de 500 caracteres da un código denso y lento. Mantén el saludo por debajo de unos 120 caracteres.',
        'Sin insignia. La gente duda ante un código pelado. La marca oficial de WhatsApp les dice qué app está a punto de abrirse.',
        'Sin contexto. Imprime una línea clara como «Escanea para chatear por WhatsApp» para que el escaneo no sea un misterio.'
      ]
    },
    faqs: [
      {
        q: '¿Los clientes deben guardar mi número de empresa antes de escanear?',
        a: 'No — el enlace wa.me abre un chat con tu número de inmediato, sin necesidad de guardarlo en los contactos.'
      },
      {
        q: '¿Cómo debo formatear mi número para los códigos QR de WhatsApp?',
        a: 'Forma internacional completa, solo dígitos. Un número de EE. UU. como (415) 555-1234 queda 14155551234; un móvil del Reino Unido 07911 123456 queda 447911123456, quitando el 0 inicial.'
      },
      {
        q: '¿Al escanear se envía el mensaje automáticamente por el usuario?',
        a: 'No. El escaneo abre WhatsApp con tu número y el texto predefinido en el cuadro de redacción — el cliente aún toca Enviar, así que mantiene el control total.'
      },
      {
        q: '¿Qué pasa si un usuario escanea el código en un ordenador de escritorio?',
        a: 'El navegador cede el paso a WhatsApp Web u ofrece abrir la app de escritorio, así que un escaneo en escritorio continúa el chat sin problema.'
      },
      {
        q: '¿Puedo usarlo con los mensajes de saludo automáticos de WhatsApp Business?',
        a: 'Cuando alguien inicia un chat mediante el código, tu mensaje de bienvenida de WhatsApp Business, las respuestas rápidas y los mensajes de ausencia se activan con normalidad.'
      },
      {
        q: '¿Los códigos QR de WhatsApp caducan o limitan los inicios de conversación?',
        a: 'Son códigos estáticos permanentes — escaneos ilimitados, sin caducidad.'
      },
      {
        q: '¿Puedo medir cuántas personas escanean mi código QR de WhatsApp?',
        a: 'Da a cada material impreso su propio saludo predefinido — «Consulta del folleto de primavera» frente a «Consulta del banner del escaparate» — y el texto te dice qué canal generó el contacto.'
      },
      {
        q: '¿Es gratis generar y usar códigos QR de WhatsApp?',
        a: 'Totalmente gratis, sin suscripción y sin cargo oculto.'
      }
    ],
    bestPractices: 'Usa el verde estándar de WhatsApp (#25D366) con un icono claro en el centro, y mantén el saludo predefinido corto y amable. Escanea el código con datos móviles y con WiFi antes de una tirada comercial — ambos pueden comportarse de forma distinta.'
  },
  '/vcard-qr-code-generator': {
    sections: [
      {
        title: 'Networking Digital Moderno para Profesionales',
        paragraphs: [
          'No vuelvas a quedarte sin tarjetas de papel. Un código QR de vCard transfiere al instante tu tarjeta de contacto profesional completa al móvil de quien la escanea con un solo toque.',
          'Incluye nombre completo, empresa, cargo, teléfono de trabajo, móvil, correo, sitio web y dirección física. Perfecto para tarjetas de visita, currículums, firmas de correo y credenciales de congreso.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of vCard 3.0 Digital Contact QR Codes',
      paragraphs: [
        'Un código QR de vCard empaqueta un perfil de contacto completo en el estándar internacional VCF (vCard 3.0, definido en RFC 2426 y RFC 6350). La cadena va de `BEGIN:VCARD` a `END:VCARD` y contiene campos estructurados: nombre completo (`FN`), organización (`ORG`), cargo (`TITLE`), teléfonos (`TEL;TYPE=CELL,WORK`), correo (`EMAIL;TYPE=INTERNET`), dirección (`ADR`) y sitio web (`URL`).',
        'Escanéalo y el teléfono hace el archivado por ti. iOS lo lee a través del framework Contacts, Android a través de la People API, y ambos abren una ficha de contacto ya rellena con un botón «Crear nuevo contacto». Un toque guarda todo tu perfil en la agenda: sin teclear a mano, sin dígitos transpuestos, sin una tarjeta de papel perdida en un bolsillo el viernes.',
        'Una vCard lleva más texto que la mayoría de los códigos, así que la disposición de bytes importa. La codificación usa delimitadores limpios para que la matriz siga siendo legible incluso en un teléfono económico con un autoenfoque más lento.'
      ]
    },
    comparisonTable: {
      title: 'Digital vCard QR Business Cards vs. Traditional Paper Business Cards',
      headers: [
        'Feature / Aspect',
        'vCard QR Business Card',
        'Traditional Paper Business Card'
      ],
      rows: [
        [
          'Contact Save Time',
          '1 Tap (< 3 seconds directly into smartphone contacts)',
          'Manual typing (1 - 3 minutes, often deferred & lost)'
        ],
        [
          'Data Capacity',
          'Full profile: 3 phones, 2 emails, address, website, title',
          'Limited physical card surface area (often omitted)'
        ],
        [
          'Retention Rate',
          '88% higher (Saved permanently in cloud address book)',
          '88% of paper business cards are thrown away within 1 week'
        ],
        [
          'Environmental Impact',
          'Zero paper waste (Reusable digital & durable cards)',
          'Thousands of discarded paper cards per professional annually'
        ],
        [
          'Interactive Features',
          'One-tap direct calling, emailing, and navigation',
          'Static printed text requiring manual dialing and typing'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Rellena los Campos Estructurados de Contacto Profesional',
        description: 'Introduce tu nombre, cargo, empresa, móvil, correo de trabajo y sitio web. Deja las notas cortas: un perfil más ligero significa módulos más grandes y fáciles de escanear.'
      },
      {
        number: 2,
        title: 'Personaliza la Marca Visual e Inserta Foto/Logo',
        description: 'Aplica tu paleta de marca, elige un estilo de punto y coloca tu foto o el logo de la empresa en el centro con corrección de errores Nivel H.'
      },
      {
        number: 3,
        title: 'Exporta SVG Vectorial para Impresión de Tarjetas',
        description: 'Entrega a la imprenta el SVG vectorial, o toma un PNG de alta resolución para una firma de correo, un banner de LinkedIn o un fondo de pantalla de bloqueo.'
      }
    ],
    features: [
      {
        title: 'Compatibilidad Universal iOS y Android',
        description: 'Construido en vCard 3.0, así que entra limpiamente en Apple Contacts, Google Contacts, Outlook y Samsung Contacts por igual.'
      },
      {
        title: 'Integración con la Agenda en un Toque',
        description: 'Tu teléfono, correo, web y dirección de oficina se guardan de un solo toque: la otra persona no teclea nada.'
      },
      {
        title: 'Sin Dependencia de la Nube y Privacidad Total',
        description: 'Los datos de contacto viven en el propio código. Ningún servidor externo almacena ni recopila tus datos de networking.'
      },
      {
        title: 'SVG Vectorial de Alta Precisión para Cartulinas Premium',
        description: 'Salida vectorial nítida para estampado con lámina, UV selectivo, relieve o grabado láser en una tarjeta de metal o bambú.'
      }
    ],
    sizingMatrix: {
      title: 'vCard QR Code Sizing & Resolution Specifications',
      description: 'Because vCard payloads contain 150 to 350 characters of structured text, the matrix has higher module density and requires adherence to strict minimum size rules.',
      headers: [
        'Application Medium',
        'Minimum Recommended Size',
        'Error Correction Level',
        'Optimal Substrate'
      ],
      rows: [
        [
          'Standard Paper Business Cards (3.5" x 2")',
          '28 mm x 28 mm (1.1" x 1.1")',
          'Level Q (25%) or Level H (30%)',
          'Heavy Matte Cardstock (350+ GSM)'
        ],
        [
          'Metal / Wood NFC Smart Business Cards',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Level H (30%)',
          'Laser-Engraved Matte Anodized Aluminum'
        ],
        [
          'Trade Show Lanyards & Conference Badges',
          '45 mm x 45 mm (1.8" x 1.8")',
          'Level M (15%) or Level Q (25%)',
          'Laminated Synthetic PVC / Tyvek'
        ],
        [
          'Resume Headers & Portfolio Covers',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Level Q (25%)',
          'Uncoated Smooth Bright White Paper'
        ],
        [
          'Smartphone Lock Screen Wallpaper',
          '250 x 250 px on digital screen',
          'Level H (30%)',
          'High-Contrast OLED Digital Display'
        ]
      ]
    },
    useCases: [
      {
        title: 'Tarjetas de Directivos y Comerciales',
        description: 'Un código al dorso de la tarjeta convierte un apretón de manos en un contacto guardado antes de que acabe la conversación.'
      },
      {
        title: 'Ferias, Expos y Congresos del Sector',
        description: 'En un cordón, un banner de estand o una acreditación, tus datos llegan al móvil de un prospecto en unos dos segundos.'
      },
      {
        title: 'Currículums y Cartas de Presentación',
        description: 'Un código discreto en el encabezado del currículum permite a un reclutador guardar tu número y el enlace a tu portafolio sin reteclear nada.'
      },
      {
        title: 'Agentes Inmobiliarios y Corredores Hipotecarios',
        description: 'En un folleto de jornada de puertas abiertas, un código vCard hace que reservar una visita sea cosa de un toque para el comprador.'
      },
      {
        title: 'Pies de Correo Corporativos y Firmas Digitales',
        description: 'Añade el código a la plantilla de correo y quien lo lea en el escritorio puede escanearlo desde la pantalla para guardar tu línea directa.'
      }
    ],
    troubleshooting: {
      title: 'Common vCard QR Code Scanning Issues & How to Prevent Them',
      points: [
        'Perfiles sobrecargados. Veinte campos —una biografía, cuatro números, tres direcciones— aprietan la matriz tanto que cuesta escanearla. Cíñete a lo esencial: nombre, cargo, empresa, uno o dos teléfonos, correo y una URL.',
        'Imprimir demasiado pequeño. Una vCard usa una matriz más densa (Versión 6-10), y por debajo de 25 mm una cámara económica difumina los bordes de los módulos. Dale espacio.',
        'Cartulina brillante. Una tarjeta muy satinada refleja los focos de la sala en el objetivo. Elige mate, seda o soft-touch.',
        'Colores invertidos. Un código blanco sobre tarjeta oscura se ve nítido pero falla en algunos escáneres antiguos. Módulos oscuros sobre fondo claro siguen siendo la opción segura.',
        'Sin prefijo de país. Omite el +1 o el +34 y un contacto internacional no podrá llamarte directamente desde la tarjeta guardada.'
      ]
    },
    faqs: [
      {
        q: '¿Qué ocurre cuando alguien escanea un código QR de vCard en su teléfono?',
        a: 'En iOS un aviso ofrece «Añadir [Nombre] a Contactos» y abre Apple Contacts con todos los campos rellenos. En Android abre Google Contacts con un aviso de Guardar. En ambos casos, tu perfil completo está a un toque de su agenda.'
      },
      {
        q: '¿Puedo incluir una foto en un código QR de vCard estático?',
        a: 'Codificar la imagen en bruto inflaría el contenido hasta volverlo inescaneable. El truco habitual es superponer tu foto o logo en el centro del código y poner tu web o URL de LinkedIn en el campo URL de la vCard, donde vive la foto a plena resolución.'
      },
      {
        q: '¿Los códigos QR de vCard necesitan conexión a internet para escanearse?',
        a: 'Funcionan totalmente sin conexión. Cada campo se guarda en el código como texto vCard 3.0, así que un teléfono lee y guarda el contacto sin datos ni WiFi.'
      },
      {
        q: '¿Son compatibles los códigos QR de vCard con Outlook y Gmail?',
        a: 'El formato vCard 3.0 es el estándar universal de contactos, así que Outlook, Apple Mail, Google Contacts y los principales CRM lo aceptan sin problema.'
      },
      {
        q: '¿Tienen fecha de caducidad los códigos QR de vCard estáticos?',
        a: 'No. Los datos de contacto están en el propio código y siguen válidos para siempre: sin cuota recurrente y sin límite de escaneos.'
      },
      {
        q: '¿Cómo debo formatear los números de teléfono internacionales en una vCard?',
        a: 'Usa E.164: un signo más, luego prefijo de país, prefijo de zona y número — por ejemplo +14155552671. Ese formato deja que alguien en el extranjero te llame o escriba sin adivinar prefijos.'
      },
      {
        q: '¿Puedo imprimir un código QR de vCard en ambas caras de mi tarjeta?',
        a: 'La disposición habitual deja tu nombre y tu marca en el anverso y pone el código en el reverso junto a una línea corta como «Escanea para guardar el contacto».'
      },
      {
        q: '¿Qué formato de exportación es mejor para enviar a una imprenta comercial de tarjetas?',
        a: 'Dales el SVG o EPS vectorial. Los archivos vectoriales mantienen su precisión en cualquier prensa offset o digital.'
      }
    ],
    bestPractices: 'Escribe los teléfonos en forma internacional completa (+1, +34) y limita la tarjeta a los campos esenciales para que los módulos queden grandes y legibles. Escanea la prueba impresa en un iPhone y un Android antes de comprometerte con la tirada completa.'
  },
  '/wifi-qr-code-generator': {
    sections: [
      {
        title: 'Acceso WiFi sin Fricción para Casas, Cafeterías y Oficinas',
        paragraphs: [
          'Acaba con la frustración de compartir contraseñas. Cuando los invitados escanean tu código QR de WiFi con la cámara de su iPhone o Android, el dispositivo les propone unirse a tu red inalámbrica de forma automática.',
          'Admite todos los protocolos de seguridad de red habituales, incluidos WPA/WPA2, WEP y redes abiertas sin cifrar. Descarga tu tarjeta de mesa WiFi imprimible en SVG vectorial nítido o PNG en HD.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of WiFi Network QR Codes (WIFI: Protocol)',
      paragraphs: [
        'Un código QR de WiFi lleva el acceso a tu red en el formato URI `WIFI:` que definió el proyecto ZXing y que adoptaron tanto Apple como Google. La cadena se lee `WIFI:T:WPA;S:NombreSSID;P:ContraseñaRed;H:false;;` — `T` es el tipo de seguridad (WPA/WPA2/WPA3, WEP o nopass), `S` es el nombre de la red, `P` es la contraseña y `H` marca si la red está oculta.',
        'Cuando una cámara reconoce esa cadena, el teléfono se salta todo el baile de conexión manual. En iOS, la capa CoreWLAN/NetworkExtension muestra un aviso «¿Conectarse a la red "[SSID]"?»; tócalo y el dispositivo ejecuta el protocolo de enlace WPA con el punto de acceso directamente. La contraseña nunca pasa por el portapapeles y nadie hurga en los Ajustes.',
        'Todo esto se ensambla en tu navegador. Tu SSID y la contraseña del router se escriben en el código localmente y nunca viajan por la red ni a una base de datos, que es justo lo que quieres para una credencial que vas a imprimir y pegar en una pared.'
      ]
    },
    comparisonTable: {
      title: 'WiFi QR Code vs. Manual Password Entry for Hospitality & Business',
      headers: [
        'Evaluation Metric',
        'WiFi QR Code Access',
        'Manual Password Entry'
      ],
      rows: [
        [
          'Connection Time',
          '1 - 3 seconds (Single camera scan & tap)',
          '45 - 90 seconds (Typing 16+ complex characters)'
        ],
        [
          'Typing Error Rate',
          '0% (Exact byte-for-byte transmission)',
          '30% - 50% on complex passwords with symbols'
        ],
        [
          'Staff Support Overhead',
          'Virtually zero guest connectivity tickets',
          'High volume of guest requests for staff assistance'
        ],
        [
          'Password Security',
          'Prevents guests seeing plaintext passkeys',
          'Requires displaying passwords on whiteboards/chalkboards'
        ],
        [
          'Compatibility',
          'Native on iOS 11+ and Android 10+',
          'Manual navigation through OS Settings menus'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Indica el Nombre de Red (SSID) y el Protocolo de Seguridad',
        description: 'Escribe el nombre de la red tal cual: distingue mayúsculas y minúsculas. Elige WPA/WPA2/WPA3 para un router moderno, WEP para hardware antiguo o Sin Cifrado para una red abierta con portal cautivo.'
      },
      {
        number: 2,
        title: 'Introduce la Contraseña WiFi y Configura el Estado Oculto',
        description: 'Añade la clave de seguridad. Si el router no difunde su nombre, activa el interruptor de Red Oculta para que los dispositivos que escaneen la busquen de forma activa.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial o PNG de Alta Resolución para Carteles de Mesa',
        description: 'Añade un icono de WiFi o el logo de tu local y luego exporta. Imprime sobre soportes de acrílico resistentes, tarjetas de mesita o un folleto de bienvenida.'
      }
    ],
    features: [
      {
        title: 'Conexión de Invitados sin Fricción con un Toque',
        description: 'Se acabaron las contraseñas de 16 caracteres mal escritas, y los invitados que paran al personal para conectarse.'
      },
      {
        title: 'Compatible con WPA3, WPA2, WEP y SSID Ocultos',
        description: 'Cubre los estándares de seguridad 802.11ax/ac actuales, además de configuraciones mesh de doble banda más antiguas.'
      },
      {
        title: 'Seguridad del Lado del Cliente de Conocimiento Cero',
        description: 'La contraseña se queda en tu navegador. No se registra, ni se guarda en la nube, ni se rastrea.'
      },
      {
        title: 'Formatos Vectoriales de Alta Resolución para Vajilla y Soportes',
        description: 'SVG nítido que se graba con láser en madera, se marca en una placa metálica o se imprime en un soporte de acrílico laminado.'
      }
    ],
    sizingMatrix: {
      title: 'WiFi QR Code Display Sizing Benchmarks',
      description: 'WiFi QR codes are typically scanned at close range by seated guests or customers holding their phone 20 cm to 40 cm away.',
      headers: [
        'Venue / Placement',
        'Viewing Distance',
        'Recommended Print Size',
        'Recommended Material'
      ],
      rows: [
        [
          'Cafe Table Tents & Coasters',
          '20 cm - 30 cm (8" - 12")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Laminated Cardstock / Wood / Acrylic'
        ],
        [
          'Hotel Room Nightstands & Desks',
          '25 cm - 40 cm (10" - 16")',
          '45 mm x 45 mm (1.8" x 1.8")',
          'Framed Matte Card / Acrylic Tent'
        ],
        [
          'Airbnb Welcome Booklets',
          '20 cm - 35 cm (8" - 14")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Matte Heavyweight Paper (100 lb+)'
        ],
        [
          'Office Conference Room Whiteboards',
          '50 cm - 100 cm (20" - 40")',
          '80 mm x 80 mm (3.2" x 3.2")',
          'Matte Vinyl Wall Decal / Foam Board'
        ],
        [
          'Event Registration Check-In Desks',
          '40 cm - 80 cm (16" - 32")',
          '75 mm x 75 mm (3.0" x 3.0")',
          'Countertop Strut Card Display'
        ]
      ]
    },
    useCases: [
      {
        title: 'Hoteles, Resorts y Alquileres Vacacionales de Airbnb',
        description: 'Una tarjeta enmarcada en la mesita conecta a los recién llegados en segundos, sin buscar una pegatina detrás del router.'
      },
      {
        title: 'Cafeterías, Coffee Shops y Restauración Informal',
        description: 'Un cartel de mesa reduce las interrupciones de «¿cuál es el WiFi?» y mantiene a los clientes navegando el menú digital más tiempo.'
      },
      {
        title: 'Oficinas Corporativas y Espacios de Coworking',
        description: 'Los clientes de visita y los invitados a eventos entran en la red de invitados de la sala de reuniones sin recurrir a informática.'
      },
      {
        title: 'Congresos, Hackatones y Ferias',
        description: 'Cientos de asistentes se conectan a la vez en el mostrador de registro, lo que despeja el cuello de botella y alivia la congestión móvil de la sala.'
      },
      {
        title: 'Clínicas Médicas y Salas de Espera',
        description: 'El WiFi de la sala de espera mantiene cómodos a los pacientes, y una tarjeta escaneable evita que recepción tenga que deletrear la contraseña.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting Common WiFi QR Scanning Failures',
      points: [
        'Mayúsculas que no coinciden. Los nombres de red distinguen mayúsculas: «MiCafeWiFi» y «micafewifi» son dos redes distintas. Respeta la capitalización exacta.',
        'Tipo de seguridad equivocado. Genera un código WEP para un router con WPA2-PSK (AES) y el enlace falla al instante. Para cualquier router moderno, elige WPA/WPA2/WPA3.',
        'Portales cautivos. Si tu WiFi de invitados muestra una página de términos, el código igual conecta el teléfono a la señal — el asistente de red cautiva del teléfono abre luego la página de acceso. Eso es lo esperado, no un fallo.',
        'Falta el indicador de oculta. Si el router oculta su SSID, los dispositivos no encontrarán la red a menos que el código lleve Hidden: true.',
        'Tarjetas desgastadas. Las manchas de café y el laminado rayado ocultan los patrones de localización. Una funda de acrílico mantiene legible una tarjeta de mesa.'
      ]
    },
    faqs: [
      {
        q: '¿Es seguro imprimir un código QR de WiFi en un espacio público?',
        a: 'Cualquiera que lo escanee entra en esa red, ya que el código guarda el nombre y la contraseña en texto plano. Lo sensato es generarlo para una red de invitados dedicada con el aislamiento de clientes activado, nunca para tu red interna privada de la empresa.'
      },
      {
        q: '¿Funciona un código QR de WiFi tanto en iPhone de Apple como en dispositivos Android?',
        a: 'Sí. Los iPhone con iOS 11+ y los Android con Android 10+ reconocen el formato WIFI: desde la cámara nativa y ofrecen unirse con un toque.'
      },
      {
        q: '¿Qué pasa si cambio la contraseña de mi red WiFi en el futuro?',
        a: 'El código antiguo deja de funcionar, porque esa contraseña concreta queda fijada en los módulos. Cambiar la contraseña implica generar e imprimir un código nuevo.'
      },
      {
        q: '¿Puedo generar un código QR de WiFi para una red abierta sin contraseña?',
        a: 'Elige la opción «Sin Cifrado», introduce el SSID y genera. Un escaneo conecta directamente a la red abierta sin pedir clave.'
      },
      {
        q: '¿Cómo hago un código QR para mi contraseña de WiFi?',
        a: 'Escribe el nombre de tu red y la contraseña, elige el tipo de cifrado (WPA/WPA2/WPA3) y genera. El código lleva las credenciales, así que escanearlo une a la red — nadie tiene que leer ni escribir la contraseña.'
      },
      {
        q: '¿Escanear un código QR de WiFi muestra la contraseña en la pantalla del usuario?',
        a: 'En iOS el aviso solo dice «¿Conectarse a [Nombre de Red]?» — los caracteres de la contraseña nunca aparecen en pantalla, lo que protege discretamente contra quien mire por encima del hombro.'
      },
      {
        q: '¿Puedo añadir el logo de mi negocio en el centro de un código QR de WiFi?',
        a: 'Puedes. La corrección Nivel H reserva alrededor del 30% del código para la recuperación, así que el logo del local o un icono de WiFi cabe en el centro y los teléfonos lo siguen leyendo bien.'
      },
      {
        q: '¿Los códigos QR de WiFi caducan o tienen límites mensuales de escaneo?',
        a: 'Ninguna de las dos cosas. Son códigos estáticos permanentes: escaneos ilimitados, sin caducidad y sin coste.'
      },
      {
        q: '¿Por qué mi teléfono no se conectó tras escanear el código QR de WiFi?',
        a: 'Suele ser una de cuatro cosas: la capitalización del SSID está mal, se eligió WEP en vez de WPA/WPA2/WPA3, el router está fuera de alcance, o la red tiene el filtrado por dirección MAC activado.'
      }
    ],
    bestPractices: 'Imprime el código en cartulina mate de alto contraste y colócalo en un soporte de acrílico transparente. Añade una línea como «Apunta tu cámara aquí para conectarte al WiFi de invitados» para que los invitados sepan qué hace el código, y escanea la prueba impresa antes de pedir una tirada.'
  },
  '/url-qr-code-generator': {
    sections: [
      {
        title: 'Conecta a tu Público Offline con Cualquier Destino Online',
        paragraphs: [
          'Un código QR de URL cierra la distancia entre tu material de marketing físico y tu presencia digital online. Los usuarios solo apuntan la cámara del móvil a tu código para abrir enlaces web, páginas promocionales o menús digitales sin escribir URLs largas.',
          'Nuestros códigos QR de URL admiten personalización de diseño completa, con colores de marca propios, formas de puntos únicas y exportaciones vectoriales SVG de alta resolución para impresión comercial.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Specification of URL QR Codes',
      paragraphs: [
        'Un código QR de URL convierte una dirección web en una cuadrícula de módulos blancos y negros, siguiendo el estándar ISO/IEC 18004. Apunta la cámara del teléfono y el dispositivo decodifica el binario y entrega la dirección al navegador predeterminado: Safari mediante AVFoundation en iOS, Chrome mediante Google ML Kit en Android. La página se abre. Nadie escribe nada.',
        'Los códigos aquí son estáticos, y esa palabra pesa. Un servicio basado en redirección envía a cada visitante primero a su propio servidor, lo que añade latencia, un único punto de fallo y una suscripción que puede caducar y tumbar tu código con ella. Un código de URL estático se salta todo eso: tu dirección HTTP o HTTPS exacta queda grabada en la propia matriz. Funciona mientras tu propiedad web exista, sin límite de escaneos y sin registrar nada.',
        'Estos códigos también admiten enlaces profundos. Apunta uno a un esquema de URI personalizado o a un Universal Link y, si la app está instalada, el escaneo lleva al usuario directamente dentro de ella —un producto concreto en una app de compras, un álbum en Spotify o Apple Music— en lugar de la versión web móvil.'
      ]
    },
    comparisonTable: {
      title: 'Static URL QR Codes vs. Dynamic Redirect QR Codes',
      headers: [
        'Feature / Metric',
        'Static URL QR (QR Generator Online)',
        'Third-Party Dynamic Redirects'
      ],
      rows: [
        [
          'Lifetime Expiration',
          'Never expires (Permanent lifetime validity)',
          'Expires if monthly subscription lapses'
        ],
        [
          'Scan Limits',
          'Unlimited lifetime scans (0 cost)',
          'Frequently capped (e.g. 50-100 scans/mo on free tiers)'
        ],
        [
          'Redirect Latency',
          '0ms (Direct browser DNS resolution)',
          '200ms - 800ms intermediate server hop'
        ],
        [
          'Privacy & Security',
          '100% Client-side generation (No user tracking)',
          'Intermediary server logs IP, device, and geolocation'
        ],
        [
          'Offline Functionality',
          'Encodes raw URL directly into modules',
          'Requires active redirect server connection'
        ],
        [
          'Data Sovereignty',
          'You own the link destination completely',
          'Dependent on third-party domain uptime & DNS'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce la Dirección Web de Destino y los Parámetros UTM',
        description: 'Pega la URL completa, con https:// incluido. Para una campaña, añade tus etiquetas UTM de Google Analytics —utm_source=flyer&utm_medium=qr&utm_campaign=spring_launch— y GA4 atribuirá el tráfico a ese folleto exacto.'
      },
      {
        number: 2,
        title: 'Elige la Corrección de Errores y los Parámetros de Estilo',
        description: '¿Planeas un logo central? Elige el Nivel H, que recupera el 30% del código. Luego ajusta el estilo de los módulos, los ojos de las esquinas y los colores, manteniendo un contraste de 4.5:1 o mejor.'
      },
      {
        number: 3,
        title: 'Exporta SVG Vectorial para Impresión o PNG de Alta Resolución para Digital',
        description: 'Para impresión, embalaje y pancartas, usa el SVG escalable. Para pantallas y redes sociales, usa el PNG de 2048x2048px a 300 DPI.'
      }
    ],
    features: [
      {
        title: 'Sin Muros de Suscripción y Escaneos Permanentes de por Vida',
        description: 'Un código de URL estático que nunca caduca, no pide tarjeta y aguanta millones de escaneos sin limitación.'
      },
      {
        title: 'Exportaciones de Impresión SVG y EPS Vectoriales sin Pérdida',
        description: 'El mismo archivo se imprime nítido en una tarjeta de 2 cm y en una valla de 10 metros. La geometría vectorial no tiene techo de resolución.'
      },
      {
        title: 'Corrección de Errores Nivel H (30% de Redundancia)',
        description: 'Coloca un logo en el centro y el margen de recuperación lo cubre, de modo que el escaneo aguanta sea cual sea la iluminación.'
      },
      {
        title: 'Privacidad Criptográfica 100% del Lado del Cliente',
        description: 'La generación se ejecuta en tu navegador. Tus enlaces, parámetros y tokens nunca se almacenan ni se analizan en un servidor.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance-to-Size Optical Benchmarks',
      description: 'The standard optical scanning formula is S = D / 10, where S is the minimum QR code width/height and D is the expected scanning distance from the user smartphone camera.',
      headers: [
        'Placement / Application',
        'Expected Scan Distance (D)',
        'Minimum Recommended Size (S)',
        'Recommended File Format'
      ],
      rows: [
        [
          'Business Cards & Name Badges',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          'Vector SVG / EPS'
        ],
        [
          'Restaurant Menus & Table Tents',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Vector SVG / 300 DPI PNG'
        ],
        [
          'Product Packaging & Labels',
          '20 cm - 40 cm (8" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Vector SVG / PDF'
        ],
        [
          'Flyers, Posters & Window Decals',
          '1.0 m - 2.0 m (3 ft - 6.5 ft)',
          '100 mm x 100 mm (4.0" x 4.0")',
          'Vector SVG'
        ],
        [
          'Trade Show Banners & Backdrops',
          '2.0 m - 4.0 m (6.5 ft - 13 ft)',
          '250 mm x 250 mm (10" x 10")',
          'Vector SVG / EPS'
        ],
        [
          'Highway Billboards & Transit Ads',
          '10.0 m - 25.0 m (33 ft - 82 ft)',
          '1000 mm - 2500 mm (3.3 ft - 8.2 ft)',
          'Vector SVG / Large Format Vector'
        ]
      ]
    },
    useCases: [
      {
        title: 'Retail Omnicanal y Embalaje de Producto',
        description: 'Conecta la caja con una capa digital —un tutorial de unboxing, la lista completa de ingredientes, un certificado de autenticidad o un portal de registro— directamente desde el embalaje.'
      },
      {
        title: 'Menús de Hostelería y Pedidos en Mesa',
        description: 'Elimina la factura de impresión de menús, mantén la carta al día y deja que los clientes pidan o paguen desde la mesa. Un menú en PDF se actualiza a las 18:00 sin reimprimir.'
      },
      {
        title: 'Carteles Inmobiliarios y Recorridos Virtuales',
        description: 'Un código en el cartel del jardín abre un recorrido 3D de Matterport, el plano y la galería de fotos. Los compradores visitan la casa desde la acera a cualquier hora.'
      },
      {
        title: 'Publicidad Impresa y Conversión de Correo Directo',
        description: 'Un anuncio de revista, una valla, una postal: cada uno se convierte en un embudo medible cuando el código con etiquetas UTM te dice cuál impulsó realmente la visita.'
      },
      {
        title: 'Congresos, Conferencias y Presentaciones',
        description: 'Cierra con una diapositiva que lleve un código y la sala descarga tu presentación, tu whitepaper y tus enlaces antes de levantarse.'
      }
    ],
    troubleshooting: {
      title: '5 Critical Pitfalls That Break URL QR Code Scannability',
      points: [
        'Contraste débil. Gris claro sobre blanco, o verde oscuro sobre negro, no llega al 4.5:1 que necesita una cámara. Módulos oscuros, fondo claro: esa es la regla.',
        'Zona de silencio recortada. El código necesita un borde libre de 4 módulos en cada lado. Si el texto o el arte llegan hasta el borde, el escáner no encuentra dónde empieza el código.',
        'Demasiada URL. Pasados unos 150 caracteres, la matriz mete puntos diminutos que se emborronan al imprimir en pequeño. Recorta el enlace o quita los parámetros de consulta sobrantes primero.',
        'Un logo demasiado grande. Un logo que supera el 30% del área, o un código creado en Nivel L o M en lugar de H, desborda los bloques de recuperación y el escaneo falla.',
        'Reflejo del brillo. El laminado brillante devuelve las luces del techo al objetivo en un espacio concurrido. El papel mate o satinado se lee limpio.'
      ]
    },
    faqs: [
      {
        q: '¿Los códigos QR de URL creados en QR Generator Online caducan alguna vez?',
        a: 'Siguen siendo válidos de por vida. La dirección web se escribe en la propia matriz, así que no hay suscripción ni temporizador: el código funciona mientras tu página de destino esté activa.'
      },
      {
        q: '¿Puedo editar la URL de destino después de imprimir un código QR estático?',
        a: 'El código en sí no —el destino queda fijado en el patrón de módulos una vez impreso—. La solución es apuntar el código a un enlace corto en tu propio dominio (tudominio.com/promo) y redirigir ese enlace cuando cambie el objetivo de la campaña. El código impreso nunca tiene que cambiar.'
      },
      {
        q: '¿Cuál es el número máximo de escaneos permitidos en los códigos QR gratuitos?',
        a: 'No hay tope. La generación es estática y del lado del cliente, así que un código puede recibir decenas de millones de escaneos sin tocar un límite de ancho de banda ni un muro de pago.'
      },
      {
        q: '¿Por qué se recomienda el formato SVG sobre el PNG para impresión comercial?',
        a: 'El SVG guarda el código como geometría en lugar de una cuadrícula fija de píxeles. Amplíalo a tamaño de valla y las líneas siguen nítidas, mientras que un PNG rasterizado se descompone en cuanto lo imprimes más grande que sus píxeles originales.'
      },
      {
        q: '¿Cómo ayudan los parámetros UTM a rastrear las campañas de marketing con códigos QR?',
        a: 'Añade etiquetas como ?utm_source=brochure&utm_medium=qr&utm_campaign=summer_sale y GA4 atribuye cada sesión y venta a ese material impreso concreto, en lugar de mandarlo al tráfico Directo genérico donde no aprendes nada.'
      },
      {
        q: '¿Puedo usar un código QR de URL para enlazar directamente a un archivo PDF descargable?',
        a: 'Aloja el PDF en un sitio público —tu web, Dropbox, Google Drive—, copia su enlace directo y pégalo. Un escaneo abre o descarga entonces el documento directamente desde el navegador del teléfono.'
      },
      {
        q: '¿Son compatibles los códigos QR de URL con iPhones y Android más antiguos?',
        a: 'Cualquier iPhone con iOS 11 o posterior (de 2017 en adelante) y cualquier Android con la versión 9 o posterior lee códigos QR desde la cámara integrada, sin una app de escaneo aparte.'
      },
      {
        q: '¿Cómo protege el Nivel H de corrección de errores mi código QR con un logo personalizado?',
        a: 'El Nivel H duplica alrededor del 30% de los datos mediante redundancia Reed-Solomon. Un logo central cubre algunos módulos, y el escáner los reconstruye a partir de las copias redundantes: la URL sigue decodificándose por completo.'
      }
    ],
    bestPractices: 'Prueba el código en un iPhone y en un Android, con poca y con mucha luz, antes de aprobar una tirada de impresión. Mantén libre la zona de silencio de 4 módulos y asegúrate de que la página a la que apunta sea adaptable al móvil y cargue en menos de dos segundos: un escaneo rápido hacia una página lenta pierde igualmente al visitante.'
  },
  '/location-qr-code-generator': {
    sections: [
      {
        title: 'Indicaciones Paso a Paso para Tiendas y Locales',
        paragraphs: [
          'Imprime códigos QR de ubicación en invitaciones, folletos, carteles inmobiliarios o tarjetas de presentación para ofrecer navegación GPS instantánea hasta tu puerta.',
          'Compatible con Google Maps, Apple Maps y las apps de navegación estándar en iOS y Android.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Descripción Técnica de los Códigos QR Geo URI y de Google Maps',
      paragraphs: [
        'Un código QR de ubicación codifica datos de coordenadas geográficas o enlaces de mapas mediante el esquema URI estandarizado `geo:` (RFC 5870, formato: `geo:<Latitud>,<Longitud>,<Altitud>`) o una URL canónica directa de Google Maps / Apple Maps. Al escanearlo con un smartphone, el sistema operativo abre la aplicación de navegación nativa (Google Maps en Android o Apple Maps en iOS) con tu destino ya marcado.',
        'Con un solo toque en el aviso de navegación, el usuario recibe indicaciones paso a paso al instante —en coche, a pie o en transporte público— desde su ubicación GPS actual hasta tu local, tienda, entrada del aparcamiento o puerta del evento.',
        'Al eliminar la escritura manual de direcciones, los nombres de calles mal entendidos y los errores de navegación, los códigos QR de ubicación aumentan enormemente el tráfico peatonal y la puntualidad en tiendas efímeras, jornadas de puertas abiertas, bodas y destinos turísticos.'
      ]
    },
    comparisonTable: {
      title: 'Navegación con Código QR de Ubicación vs. Búsqueda Manual',
      headers: [
        'Factor / Métrica',
        'Código QR de Ubicación',
        'Búsqueda Manual de Dirección'
      ],
      rows: [
        [
          'Precisión de Navegación',
          'Marcador 100% exacto (precisión GPS de latitud/longitud)',
          'Errores frecuentes con calles y ciudades duplicadas'
        ],
        [
          'Tiempo hasta Iniciar la Navegación',
          '1 escaneo + 1 toque (menos de 3 segundos)',
          '45 - 90 segundos (abrir mapas, escribir, seleccionar)'
        ],
        [
          'Marcado de Entrada Específica',
          'Marca las coordenadas exactas del parking o puerta trasera',
          'Las direcciones estándar suelen marcar la acera o la calle equivocada'
        ],
        [
          'Compatibilidad Multiplataforma',
          'Abre Google Maps, Apple Maps o Waze de forma nativa',
          'Requiere navegar manualmente por la app'
        ],
        [
          'Coordenadas sin Conexión',
          'El Geo URI funciona con apps de navegación GPS sin conexión',
          'Requiere búsqueda con internet para resolver la dirección'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce la URL de Google Maps o las Coordenadas GPS',
        description: 'Pega tu enlace para compartir de Google Maps o introduce las coordenadas exactas de latitud y longitud (p. ej. 37.7749, -122.4194) para localizar lugares fuera de carretera.'
      },
      {
        number: 2,
        title: 'Personaliza con un Icono de Mapa y Colores de Marca',
        description: 'Selecciona colores de alto contraste, personaliza los ojos de esquina e incrusta un marcador de mapa o el logo del local en el centro del código.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial para Invitaciones y Señalización',
        description: 'Exporta SVG vectorial para carteles de eventos, invitaciones de boda y señales direccionales, o PNG de alta resolución para guías digitales.'
      }
    ],
    features: [
      {
        title: 'Indicaciones GPS Paso a Paso con Un Toque',
        description: 'Guía a los visitantes directamente a tu local sin confusión ni introducción manual de direcciones.'
      },
      {
        title: 'Compatible con Coordenadas Exactas',
        description: 'Localiza puertas de festivales, aparcamientos de senderos y eventos al aire libre sin dirección postal formal.'
      },
      {
        title: 'Integración Nativa con Google Maps y Apple Maps',
        description: 'Abre sin problemas las apps de navegación predeterminadas en todos los dispositivos iOS y Android.'
      },
      {
        title: 'Funcionamiento Permanente sin Cuotas',
        description: 'Los códigos QR de ubicación estáticos tienen validez permanente, escaneos ilimitados y cero cuotas recurrentes.'
      }
    ],
    sizingMatrix: {
      title: 'Especificaciones de Impresión del Código QR de Ubicación',
      description: 'Asegúrate de que tus códigos QR de ubicación se escaneen con facilidad en invitaciones y señalización direccional.',
      headers: [
        'Ubicación / Aplicación',
        'Distancia de Escaneo',
        'Tamaño Mínimo de Impresión',
        'Sustrato Recomendado'
      ],
      rows: [
        [
          'Invitaciones de Boda y Fiestas',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Cartulina de lino mate de alto gramaje'
        ],
        [
          'Señales Direccionales y de Jardín',
          '1,0 m - 2,5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4,8" x 4,8")',
          'Plástico corrugado resistente / aluminio'
        ],
        [
          'Postales Promocionales y Mailings',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1,4" x 1,4")',
          'Cartulina mate de alto gramaje (100 lb+)'
        ],
        [
          'Guías Turísticas y Placas de Senderos',
          '30 cm - 60 cm (12" - 24")',
          '50 mm x 50 mm (2,0" x 2,0")',
          'Aluminio anodizado / PVC rígido'
        ],
        [
          'Programas de Congresos y Ferias',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Papel estucado mate'
        ]
      ]
    },
    useCases: [
      {
        title: 'Invitaciones de Boda y Eventos Privados',
        description: 'Imprime códigos QR de ubicación en las invitaciones para que los invitados naveguen directamente a la ceremonia y al banquete.'
      },
      {
        title: 'Jornadas de Puertas Abiertas y Señales Inmobiliarias',
        description: 'Coloca códigos QR de ubicación en señales de esquina para guiar a los compradores interesados hasta la entrada de la vivienda.'
      },
      {
        title: 'Festivales, Mercadillos y Food Trucks',
        description: 'Comparte marcadores GPS exactos para food trucks, escenarios de festivales al aire libre y puestos efímeros sin dirección fija.'
      },
      {
        title: 'Monumentos Turísticos y Navegación de Senderos',
        description: 'Ofrece a senderistas y turistas marcadores escaneables de inicio de ruta, miradores y coordenadas de monumentos históricos.'
      },
      {
        title: 'Campañas de Buzoneo para Comercios',
        description: 'Añade códigos QR de Google Maps a folletos promocionales para que los residentes lleguen a tu inauguración o sucursal.'
      }
    ],
    troubleshooting: {
      title: 'Cómo Evitar Fallos de Navegación en Códigos QR de Ubicación',
      points: [
        'Coordenadas truncadas: quitar decimales (p. ej. 37.77 en lugar de 37.774929) desplaza el marcador cientos de metros. Usa siempre 5-6 decimales.',
        'Enlaces cortos de mapas caducados: si usas enlaces cortos personalizados, asegúrate de que el dominio siga activo. Las URLs directas de Google Maps y los Geo URI nunca caducan.',
        'Omitir la dirección en texto: imprime siempre la dirección legible debajo del código QR para quienes prefieran verificarla manualmente.',
        'Bajo contraste en señales exteriores: la luz solar directa apaga los colores de bajo contraste. Usa módulos negros sólidos sobre fondo blanco brillante en exteriores.',
        'Reflejos en señales de carretera: el laminado muy reflectante provoca destellos con los faros y el sol. Usa vinilo mate para exteriores.'
      ]
    },
    faqs: [
      {
        q: '¿Cómo obtengo el enlace correcto de Google Maps para mi código QR?',
        a: 'Abre Google Maps, busca tu negocio o coloca un marcador en tu ubicación, haz clic en «Compartir», copia el enlace corto y pégalo en nuestro generador.'
      },
      {
        q: '¿Puedo usar coordenadas de latitud y longitud en lugar de una dirección?',
        a: '¡Sí! Introducir coordenadas exactas de latitud y longitud (p. ej. `37.7749,-122.4194`) es ideal para parques, recintos de festivales y lugares rurales sin dirección formal.'
      },
      {
        q: '¿Abrirá Apple Maps en iPhone y Google Maps en Android?',
        a: 'Sí. Las URLs estándar de Google Maps y los Geo URI activan la aplicación de mapas predeterminada correspondiente en smartphones iOS y Android.'
      },
      {
        q: '¿Los códigos QR de ubicación caducan o tienen coste?',
        a: 'No. Los códigos QR de ubicación estáticos generados en QR Generator Online tienen validez permanente de por vida, escaneos ilimitados y cero cuotas recurrentes.'
      },
      {
        q: '¿Puedo incrustar un icono de marcador en el centro del código QR?',
        a: '¡Sí! QR Generator Online usa corrección de errores de nivel H, lo que te permite incrustar un marcador de navegación o el logo del local en el centro sin afectar la escaneabilidad.'
      },
      {
        q: '¿Cuál es el mejor formato para imprimir invitaciones de boda?',
        a: 'Exporta SVG vectorial o PNG de alta resolución a 300 DPI para papelería de boda e impresión comercial en cartulina.'
      },
      {
        q: '¿Pueden los usuarios navegar sin conexión?',
        a: 'Si usas coordenadas Geo URI (`geo:lat,lng`), apps de navegación sin conexión como maps.me o zonas de Google Maps descargadas previamente pueden guiar sin datos móviles.'
      },
      {
        q: '¿Son privados mis datos de ubicación durante la generación?',
        a: 'Sí. Todos los códigos QR se generan 100% del lado del cliente en tu navegador. Ninguna coordenada ni URL de mapa se almacena en servidores externos.'
      }
    ],
    bestPractices: 'Verifica la ubicación del marcador tanto en Apple Maps como en Google Maps antes de imprimir. Imprime con una llamada a la acción clara como «Escanea para obtener indicaciones GPS» y mantén un alto contraste.'
  },
  '/text-qr-code-generator': {
    sections: [
      {
        title: 'Codificación de Texto y Datos 100% Escaneable sin Conexión',
        paragraphs: [
          'Los códigos QR de texto plano almacenan datos alfanuméricos directamente dentro del patrón del código de barras. El escaneo funciona al instante incluso sin datos móviles ni conexión a internet.',
          'Ideal para etiquetado de inventario de almacén, instrucciones de equipos, seguimiento de números de serie y mensajes secretos.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Descripción Técnica de los Códigos QR de Texto Plano y UTF-8 en Bruto',
      paragraphs: [
        'Un código QR de texto plano codifica datos de cadena en bruto, sin formato, directamente en una simbología de matriz 2D siguiendo las normas ISO/IEC 18004 mediante codificación en modo byte de 8 bits UTF-8. A diferencia de los códigos QR de URL que requieren conectividad web, un código QR de texto plano contiene su carga de datos completa directamente dentro del patrón visual de módulos blancos y negros.',
        'Cuando lo escanea la cámara de un smartphone, un lector industrial de códigos de barras 2D o un escáner de inventario, el dispositivo decodifica la matriz de bytes y muestra inmediatamente el texto plano en pantalla, o lo transmite mediante emulación de teclado (HID) al software conectado, sin abrir un navegador web ni requerir conectividad móvil o WiFi.',
        'Los códigos QR de texto plano admiten caracteres alfanuméricos, puntuación, símbolos, escrituras Unicode multilingües y emojis, lo que los hace indispensables para el seguimiento de activos industriales, números de serie de inventario de almacén, registros de mantenimiento de equipos, pistas de salas de escape y códigos de acceso de seguridad sin conexión.'
      ]
    },
    comparisonTable: {
      title: 'Código QR de Texto Plano vs. Código QR de URL',
      headers: [
        'Característica / Métrica',
        'Código QR de Texto Plano',
        'Código QR de URL'
      ],
      rows: [
        [
          'Requisito de Internet',
          '100% sin conexión (no requiere red alguna)',
          'Requiere conexión a internet activa para cargar la web'
        ],
        [
          'Acción del Dispositivo al Escanear',
          'Muestra el texto en un cuadro o lo copia al portapapeles',
          'Abre el navegador web en la URL de destino'
        ],
        [
          'Ubicación de los Datos',
          'Almacenados por completo dentro de los módulos físicos',
          'Almacenados en el servidor web de destino'
        ],
        [
          'Capacidad de Datos',
          'Hasta 4.296 caracteres alfanuméricos (7.089 numéricos)',
          'Normalmente 30 - 100 caracteres para enlaces web'
        ],
        [
          'Seguridad y Privacidad',
          'Cero huella de red, cero rastreo',
          'El servidor registra IP, user-agent y hora del visitante'
        ],
        [
          'Casos de Uso Principales',
          'Etiquetas de activos, números de serie, notas sin conexión',
          'Marketing, tráfico web, páginas de destino, menús'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Introduce el Texto, Números de Serie o Instrucciones',
        description: 'Escribe o pega tu texto alfanumérico, códigos de serie de equipos, números de vale o notas de varias líneas en el área de texto.'
      },
      {
        number: 2,
        title: 'Selecciona el Estilo y el Nivel de Corrección de Errores',
        description: 'Elige patrones de módulos de alto contraste y selecciona el nivel de corrección de errores M o Q para etiquetas de activos, o el nivel H si incrustas un logo central.'
      },
      {
        number: 3,
        title: 'Descarga SVG Vectorial o PNG de Alta Resolución',
        description: 'Exporta SVG vectorial para grabado láser industrial e impresión de etiquetas térmicas, o PNG de alta resolución para hojas de trabajo y documentos digitales.'
      }
    ],
    features: [
      {
        title: 'Funcionamiento 100% sin Conexión',
        description: 'Escanea y muestra el texto de inmediato en ubicaciones remotas, sótanos e instalaciones seguras sin conexión.'
      },
      {
        title: 'Compatibilidad Universal con Escáneres 2D',
        description: 'Compatible con escáneres de almacén Zebra, Honeywell y Datalogic, así como con las apps de cámara de iOS y Android.'
      },
      {
        title: 'Codificación UTF-8 Multilingüe y con Emojis',
        description: 'Codifica sin esfuerzo alfabetos internacionales, fórmulas matemáticas, símbolos de moneda y emojis.'
      },
      {
        title: 'Códigos Estáticos Permanentes sin Caducidad',
        description: 'Los códigos QR de texto estáticos siguen siendo legibles para siempre, sin cuotas de suscripción, límites de escaneo ni renovaciones.'
      }
    ],
    sizingMatrix: {
      title: 'Especificaciones de Tamaño y Densidad del Código QR de Texto',
      description: 'La densidad de la matriz aumenta con el número de caracteres. Sigue las pautas de tamaño mínimo para un escaneo fiable.',
      headers: [
        'Carga de Caracteres',
        'Versión de Matriz',
        'Tamaño Mínimo de Impresión',
        'Aplicación Recomendada'
      ],
      rows: [
        [
          'Corto (1 - 50 caracteres)',
          'Versión 2 - 4 (25x25 - 33x33)',
          '20 mm x 20 mm (0,8" x 0,8")',
          'Etiquetas de activos, números de serie, piezas'
        ],
        [
          'Medio (50 - 150 caracteres)',
          'Versión 5 - 7 (37x37 - 45x45)',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Especificaciones de equipos, vales, claves de acceso'
        ],
        [
          'Largo (150 - 300 caracteres)',
          'Versión 8 - 11 (49x49 - 61x61)',
          '40 mm x 40 mm (1,6" x 1,6")',
          'Registros de mantenimiento, instrucciones, notas'
        ],
        [
          'Extendido (300 - 600 caracteres)',
          'Versión 12 - 16 (65x65 - 81x81)',
          '55 mm x 55 mm (2,2" x 2,2")',
          'Procedimientos detallados, documentos multilínea'
        ],
        [
          'Máximo (600+ caracteres)',
          'Versión 17+ (85x85+)',
          '75 mm x 75 mm (3,0" x 3,0")',
          'Placas de referencia de gran formato'
        ]
      ]
    },
    useCases: [
      {
        title: 'Seguimiento de Activos Industriales y Etiquetas de Almacén',
        description: 'Etiqueta maquinaria, racks de servidores y contenedores de inventario con números de serie y fechas de mantenimiento escaneables.'
      },
      {
        title: 'Cuestionarios Educativos y Búsquedas del Tesoro en Clase',
        description: 'Oculta respuestas de cuestionarios, soluciones matemáticas y pistas de acertijos en fichas escolares impresas para que los alumnos las escaneen sin conexión.'
      },
      {
        title: 'Vales de Eventos, Cupones y Códigos de Acceso de Un Solo Uso',
        description: 'Imprime códigos de descuento únicos en las entradas para que el personal los verifique con lectores portátiles sin WiFi.'
      },
      {
        title: 'Salas de Escape y Exposiciones Interactivas',
        description: 'Incrusta acertijos secretos, claves de descifrado y pistas narrativas en vitrinas de museos y atrezo de salas de escape.'
      },
      {
        title: 'Frases de Seguridad y Claves de Recuperación sin Conexión',
        description: 'Guarda claves de respaldo cifradas y frases de configuración en placas metálicas físicas de respaldo.'
      }
    ],
    troubleshooting: {
      title: 'Resolución de Problemas de Escaneo en Códigos QR de Texto',
      points: [
        'Sobrecarga de datos que crea módulos microscópicos: meter más de 1.000 caracteres en un solo código genera una matriz extremadamente densa. Mantén el texto por debajo de 300 caracteres para un escaneo rápido.',
        'Inclusión accidental de un prefijo de URL: si tu texto empieza por http:// o https://, las cámaras lo tratarán como un enlace web en lugar de texto plano. Elimina los prefijos web si quieres que se muestre texto en bruto.',
        'Impresión térmica de bajo contraste: las impresoras térmicas directas de baja calidad con cabezales desgastados pueden provocar que se difuminen los bordes de los módulos. Usa cintas de transferencia térmica de calidad.',
        'Incumplir la zona silenciosa de 4 módulos: asegura al menos 4 módulos en blanco alrededor de los cuatro bordes del código en las etiquetas de activos.',
        'Distorsión en superficies curvas: pegar códigos densos en tuberías o botellas cilíndricas estrechas distorsiona la matriz. Colócalos en el eje vertical plano.'
      ]
    },
    faqs: [
      {
        q: '¿Cuántos caracteres puedo codificar en un solo código QR de texto plano?',
        a: 'Un código QR puede almacenar técnicamente hasta 4.296 caracteres alfanuméricos o 7.089 dígitos numéricos. Sin embargo, para garantizar un escaneo óptico rápido a tamaños estándar, se recomienda mantener el texto por debajo de 300 caracteres.'
      },
      {
        q: '¿Escanear un código QR de texto plano requiere conexión a internet?',
        a: '¡No! Los códigos QR de texto plano almacenan toda su carga de datos directamente dentro de la matriz visual del código de barras. Se escanean y muestran 100% sin conexión, sin datos móviles ni WiFi.'
      },
      {
        q: '¿Qué ocurre en un smartphone cuando alguien escanea un código QR de texto?',
        a: 'La app de la cámara muestra el texto decodificado en un cuadro de diálogo del sistema con opciones para copiarlo al portapapeles o realizar una búsqueda web.'
      },
      {
        q: '¿Puedo codificar caracteres especiales, alfabetos extranjeros y emojis?',
        a: '¡Sí! QR Generator Online admite codificación completa de bytes UTF-8, lo que permite alfabetos de otros idiomas (japonés, árabe, cirílico), símbolos matemáticos y emojis.'
      },
      {
        q: '¿Los códigos QR de texto plano caducan o tienen coste?',
        a: 'No. Los códigos QR de texto estáticos generados en QR Generator Online tienen validez permanente de por vida, escaneos ilimitados y cero cuotas recurrentes.'
      },
      {
        q: '¿Son compatibles los códigos QR de texto con escáneres industriales?',
        a: '¡Sí! Todos los lectores 2D estándar (Zebra, Honeywell, Datalogic) escanean códigos QR de texto y envían los caracteres decodificados directamente al software del terminal conectado.'
      },
      {
        q: '¿Qué formato de archivo es mejor para impresoras térmicas de etiquetas?',
        a: 'Exporta el formato SVG vectorial o PNG de alta resolución. Los archivos SVG vectoriales se renderizan con un 100% de precisión en el software comercial de impresión de etiquetas térmicas.'
      },
      {
        q: '¿Se mantiene privado el texto codificado durante la generación?',
        a: 'Sí. Toda la generación de códigos QR se realiza 100% del lado del cliente, en la memoria de tu navegador. Ningún dato de texto se transmite ni se almacena en servidores externos.'
      }
    ],
    bestPractices: 'Mantén el texto lo más conciso posible para conservar una densidad de módulos baja. Usa módulos negros sólidos sobre fondos blancos y respeta la zona silenciosa obligatoria de 4 módulos en todas las etiquetas de activos.'
  },
  '/': {
    sections: [
      {
        title: '¿Por Qué Elegir QR Generator Online?',
        paragraphs: [
          'QR Generator Online es el generador de códigos QR más flexible, centrado en la privacidad y 100% gratuito de la web. Ya sea que necesites un enlace simple para un folleto de marketing, una tarjeta de presentación digital o acceso instantáneo a WiFi para invitados, nuestra plataforma crea códigos QR profesionales y escaneables en segundos.',
          'A diferencia de otras herramientas que bloquean las descargas de alta resolución tras un muro de pago o hacen caducar tus códigos después de 14 días, todos los códigos QR estáticos creados en QR Generator Online permanecen permanentes y funcionales para siempre con escaneos ilimitados.'
        ]
      },
      {
        title: 'Opciones de Personalización Completas',
        paragraphs: [
          'Personaliza cada detalle de tu código QR para que coincida con la identidad de tu marca corporativa. Elige entre múltiples patrones de estilo de puntos, formas de esquina exterior, acentos de ojo interior, degradados de color personalizados y logos incrustados al centro.',
          'Exporta tus diseños en formato vectorial SVG listo para imprimir para publicidad en vallas grandes, o en PNG nítido de alta resolución para campañas digitales en redes sociales.'
        ]
      }
    ],
    technicalOverview: {
      title: 'El Estándar Empresarial para la Generación de Códigos QR Gratis y con Privacidad Primero',
      paragraphs: [
        'QR Generator Online es la plataforma líder de generación de códigos de barras 2D del lado del cliente, diseñada desde cero para ofrecer una personalización visual sin concesiones, corrección de errores Reed-Solomon de grado industrial y soberanía criptográfica total de tus datos. Estandarizada globalmente bajo ISO/IEC 18004, nuestra plataforma permite a particulares, agencias de diseño, pequeñas empresas y multinacionales generar códigos QR permanentes y escaneables para todos los esquemas de datos especializados, sin muros de suscripción ni límites de caducidad de escaneo.',
        'A diferencia de los servicios de generación de códigos QR depredadores que enrutan silenciosamente tu tráfico a través de servidores de redirección propietarios (solo para secuestrar tus materiales de marketing impresos detrás de repentinos muros de pago de $30/mes tras 14 días), QR Generator Online funciona con una arquitectura de codificación directa y estática. Cuando generas un código QR de URL, vCard, WiFi o texto en nuestra plataforma, los datos en bruto se compilan directamente en los módulos de la matriz visual en la memoria de tu navegador web. Esto garantiza que tus activos de marketing físicos permanezcan funcionales de forma permanente durante toda la vida útil de tus materiales impresos.',
        'Con soporte para corrección de errores de Nivel H (recuperación algebraica del 30%), paletas de degradado multicolor, geometrías de módulo personalizadas, estilo independiente de ojos de esquina y exportaciones vectoriales sin pérdida en SVG/EPS, QR Generator Online ofrece el conjunto de herramientas completo necesario para empaques de lujo, preimpresión comercial, pedidos en mesa de restaurantes y networking de contacto digital.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online vs. Plataformas QR con Suscripción',
      headers: ['Característica / Política de la Plataforma', 'QR Generator Online (100% Gratis y Abierto)', 'Servicios QR de Suscripción Tradicionales'],
      rows: [
        ['Caducidad de por Vida', 'Nunca caduca (validez estática permanente)', 'Caduca tras la prueba de 14 días salvo pago'],
        ['Límites de Escaneo', 'Escaneos ilimitados de por vida (0 costo para siempre)', 'Limitado a 50-100 escaneos/mes en planes gratuitos'],
        ['Latencia de Redirección', '0ms (resolución DNS directa del navegador)', 'Salto de servidor intermedio de 200ms - 800ms'],
        ['Privacidad y Seguimiento de Datos', '100% del lado del cliente (sin registro de IP ni cookies)', 'Un servidor intermediario rastrea IPs y geolocalizaciones'],
        ['Exportaciones Vectoriales de Alta Resolución', 'SVG vectorial completo, EPS y PNG 4K incluidos gratis', 'Formatos vectoriales bloqueados tras planes de $30+/mes'],
        ['Incrustación de Logo', 'Nivel H (recuperación del 30%) incluido gratis', 'Con marca de agua o restringido en planes gratuitos']
      ]
    },
    steps: [
      { number: 1, title: 'Selecciona el Tipo de Dato e Ingresa el Contenido', description: 'Elige entre nuestros generadores QR especializados (URL, WiFi, vCard, PDF, WhatsApp, redes sociales, correo, SMS, teléfono, ubicación, evento, cripto, texto, Google Forms, pagos) e ingresa los datos.' },
      { number: 2, title: 'Personaliza Geometría Visual, Colores y Logo de Marca', description: 'Aplica tu paleta corporativa, elige patrones de puntos redondeados o elegantes, personaliza los ojos de esquina de forma independiente y sube tu logo de marca central.' },
      { number: 3, title: 'Exporta SVG Vectorial sin Pérdida o PNG 4K', description: 'Descarga SVG vectorial listo para imprimir para offset comercial, empaques y pancartas, o PNG de 2048x2048px a 300 DPI para canales web y digitales.' }
    ],
    features: [
      { title: 'Suite Completa de Herramientas Generadoras de QR', description: 'Soporte completo para URLs web, redes WiFi, contactos vCard 3.0, documentos PDF, chats de WhatsApp, navegación GPS, pagos y más.' },
      { title: 'Corrección de Errores Reed-Solomon de Nivel H', description: 'Incrusta el logo de tu empresa o icono de perfil con un 30% de redundancia matemática de recuperación de datos.' },
      { title: 'Descargas Vectoriales SVG y EPS sin Pérdida para Impresión', description: 'Escala tus gráficos QR infinitamente desde pequeñas tarjetas de presentación hasta murales de edificios gigantes con precisión nítida.' },
      { title: 'Privacidad Criptográfica 100% del Lado del Cliente', description: 'Todos los algoritmos de generación QR se ejecutan localmente en la memoria de tu navegador web. Tus enlaces, credenciales y parámetros nunca se suben.' }
    ],
    sizingMatrix: {
      title: 'Tabla Maestra de Tamaño de Impresión y Distancia de Referencia',
      description: 'Calcula las dimensiones físicas mínimas para cualquier medio físico usando la fórmula óptica estándar $S = D / 10$.',
      headers: ['Ubicación Física', 'Distancia de Escaneo (D)', 'Ancho Mínimo (S)', 'Formato Recomendado'],
      rows: [
        ['Tarjetas de Presentación y Gafetes', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'SVG Vectorial / EPS'],
        ['Menús de Restaurante y Carpas de Mesa', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'SVG Vectorial / PNG 300 DPI'],
        ['Empaques y Cajas de Producto', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'SVG Vectorial / PDF'],
        ['Folletos, Carteles y Revistas', '50 cm - 150 cm (20" - 60")', '60 mm - 150 mm (2.4" - 6.0")', 'SVG Vectorial / PNG 300 DPI'],
        ['Flotas de Vehículos y Furgonetas', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'SVG Vectorial / Vinilo Fundido'],
        ['Vallas y Pancartas de Autopista', '15.0 m - 30.0 m (50 ft - 100 ft)', '1500 mm - 3000 mm (5 ft - 10 ft)', 'SVG Vectorial / EPS de Gran Formato']
      ]
    },
    useCases: [
      { title: 'Comercio Minorista Omnicanal y Empaques', description: 'Conecta productos físicos con tutoriales digitales de desempaque, verificación de autenticidad y portales de registro de clientes directamente desde la caja.' },
      { title: 'Hostelería y Comedor sin Contacto', description: 'Implementa menús PDF digitales higiénicos y actualizables en tiempo real, cartas de vinos y tarjetas de pedido en mesa que aumentan el ticket promedio.' },
      { title: 'Networking Ejecutivo y Tarjetas Inteligentes', description: 'Convierte tarjetas de presentación físicas en entradas permanentes de la libreta de contactos del smartphone con códigos vCard 3.0 de un toque.' },
      { title: 'Marketing Inmobiliario y Tours 3D', description: 'Transforma carteles de jardín e indicaciones de casa abierta en portales interactivos de generación de leads 24/7 vinculados a tours 3D de Matterport.' },
      { title: 'Acceso WiFi para Huéspedes sin Fricción', description: 'Elimina la frustración de compartir contraseñas en hoteles, cafés y oficinas con un escaneo de cámara de un toque para redes WPA3/WPA2.' }
    ],
    troubleshooting: {
      title: 'Las 5 Reglas Críticas para una Fiabilidad de Escaneo del 100% al Primer Intento',
      points: [
        'Mantén una Relación de Contraste Mínima de 4.5:1: los módulos oscuros en primer plano sobre un fondo blanco o claro nítido aseguran una binarización óptica instantánea de la cámara.',
        'Preserva el Margen de Zona Silenciosa de 4 Módulos: nunca dejes que el arte o el texto invadan el borde en blanco obligatorio de 4 módulos que rodea el código de barras.',
        'Nunca Excedas el 30% del Área para Logos Centrales: mantén los logos incrustados por debajo del 25-30% del área total y genera siempre con corrección de errores de Nivel H.',
        'Usa SVG Vectorial para Tiradas de Impresión Comercial: evita capturas de pantalla de baja resolución de 72 DPI. El SVG vectorial garantiza bordes nítidos en cualquier escala de impresión.',
        'Especifica Sustratos Mate para Evitar Reflejos: el laminado brillante refleja las luces del techo directamente hacia los sensores de la cámara. Usa acabados mate, satinados o sedosos.'
      ]
    },
    faqs: [
      { q: '¿Los códigos QR generados en QR Generator Online son realmente 100% gratis para siempre?', a: '¡Sí! Todos los códigos QR estáticos generados en QR Generator Online son 100% gratis con escaneos ilimitados, validez permanente de por vida y sin muros de pago por suscripción.' },
      { q: '¿Por qué otros sitios generadores de QR hacen caducar mis códigos tras 14 días?', a: 'Muchas plataformas QR comerciales usan enlaces de redirección dinámicos que enrutan tus escaneos a través de sus servidores. Tras un periodo de prueba, desactivan la redirección hasta que pagas una costosa suscripción mensual ($15 - $40/mes). QR Generator Online crea códigos estáticos permanentes que codifican los datos directamente en el código de barras, por lo que nunca pueden ser secuestrados.' },
      { q: '¿Qué formatos de archivo puedo descargar de QR Generator Online?', a: 'Puedes descargar archivos vectoriales SVG listos para imprimir (escalables infinitamente para preimpresión comercial) e imágenes rasterizadas PNG de ultra alta resolución de 2048x2048px a 300 DPI.' },
      { q: '¿Puedo añadir el logo de mi empresa al centro de cualquier código QR?', a: '¡Sí! Puedes subir logos personalizados en PNG, SVG o JPEG en todos los tipos de generador QR especializados. Nuestro motor aplica automáticamente corrección de errores de Nivel H (30%) y un búfer de máscara silenciosa alrededor de tu logo.' },
      { q: '¿Mis datos están seguros y son privados al usar QR Generator Online?', a: 'Sí. Todos los algoritmos de generación QR se ejecutan localmente dentro de la memoria de tu navegador web mediante JavaScript del lado del cliente. Tus URLs, contraseñas, datos de contacto e imágenes nunca se suben ni se almacenan en servidores externos.' },
      { q: '¿Necesito instalar una app en mi teléfono para escanear estos códigos QR?', a: 'No. Todos los iPhone modernos con iOS 11+ y dispositivos Android con Android 9+ escanean códigos QR de forma nativa usando la app de cámara integrada sin ningún software de terceros.' },
      { q: '¿Qué tan grande debo imprimir mi código QR para una pancarta o cartel?', a: 'Aplica la regla óptica 10:1: distancia al usuario / 10 = ancho mínimo del QR. Para un cartel visto desde 1.5 metros de distancia, imprime el código de al menos 15 cm x 15 cm.' },
      { q: '¿Puedo generar códigos QR para productos y mercancía comercial?', a: '¡Sí! Tienes plena propiedad comercial y derechos de licencia para usar todos los códigos QR generados en nuestra plataforma en empaques minoristas, libros, ropa y señalización en todo el mundo.' }
    ],
    bestPractices: 'Siempre exporta en SVG vectorial para impresión comercial, mantén un contraste alto (> 4.5:1), preserva la zona silenciosa de 4 módulos y prueba escaneando pruebas impresas físicas antes de encargar tiradas grandes.'
  }
};
