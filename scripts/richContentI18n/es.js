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
