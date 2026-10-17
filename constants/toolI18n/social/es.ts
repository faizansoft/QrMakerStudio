import type { SocialCopy } from './types';

const es: SocialCopy = {
  hero: {
    badge: 'Centro social omnicanal',
    h1: 'Generador gratuito de códigos QR para redes sociales',
    lead: 'Crea códigos QR personalizados y con colores a juego para Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Facebook y WhatsApp. Conecta a tu público físico con tus canales sociales digitales con un solo toque.'
  },
  brandLabel: 'Marca / título de creador',
  brandPlaceholder: 'p. ej. Marca Acme o @AlexCreador',
  configureHeading: 'Configura tus canales sociales',
  platforms: {
    labels: {
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      twitter: 'Twitter / X',
      tiktok: 'TikTok',
      facebook: 'Facebook',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      website: 'Sitio web',
      email: 'Correo'
    },
    placeholders: {
      instagram: 'nombre de usuario',
      youtube: 'https://youtube.com/@canal',
      linkedin: 'https://linkedin.com/in/nombre',
      twitter: 'usuario',
      tiktok: 'nombre de usuario',
      facebook: 'https://facebook.com/pagina',
      telegram: 'nombre de usuario',
      whatsapp: 'número de teléfono',
      website: 'https://tusitio.com',
      email: 'tu@correo.com'
    }
  },
  channels: (n) => (n === 1 ? '1 canal configurado' : `${n} canales configurados`),
  generate: 'Generar códigos QR sociales',
  readyHeading: 'Códigos QR sociales de marca listos',
  readyBadge: 'Vector de alta resolución listo',
  article: {
    s1: {
      badge: 'Captación de audiencia',
      h2: 'La guía definitiva de los códigos QR para redes sociales y la conversión de audiencias',
      paragraphs: [
        'En una época en la que la atención de los consumidores se reparte entre decenas de ecosistemas digitales —desde los vídeos cortos de TikTok y las historias de Instagram hasta las redes profesionales de LinkedIn, las clases magistrales de YouTube y los canales VIP de WhatsApp—, obligar al público físico a escribir a mano nombres de usuario y buscar perfiles provoca de inmediato una pérdida de conversiones superior al 70 %.',
        'Un código QR de redes sociales con tu marca elimina por completo la fricción entre los puntos de contacto físicos y los seguidores digitales. Al escanear un código de barras de alto contraste y diseñado a medida en un envase, una tarjeta de mesa o el escaparate de una tienda, las cámaras de los smartphones abren de inmediato enlaces profundos de la aplicación nativa directamente en tu perfil verificado, lo que permite seguir, suscribirse y chatear con clientes al instante.'
      ]
    },
    s2: {
      badge: 'Comparativa de estrategias',
      h2: 'Códigos individuales por canal frente a páginas de enlaces dinámicas',
      intro: 'Según la arquitectura de tu campaña de marketing y el espacio físico disponible, puedes desplegar códigos QR sociales en dos configuraciones distintas:',
      cards: [
        {
          title: 'Códigos sociales individuales de marca',
          body: 'Genera códigos QR específicos, de un solo propósito y con colores a juego con la paleta de cada plataforma (rojo de YouTube, degradado de Instagram, azul de LinkedIn). Son ideales para material concreto, como un atril de mesa con el texto "Síguenos en Instagram" en una cafetería o una tarjeta final con "Suscríbete en YouTube" en merchandising físico.'
        },
        {
          title: 'Códigos dinámicos de centro de enlaces',
          body: 'Codifica un único enlace corto dinámico que lleva a los visitantes a una página móvil limpia que reúne todos tus perfiles sociales a la vez. Gracias a nuestro motor dinámico, puedes añadir perfiles nuevos, actualizar enlaces y consultar análisis de escaneos geográficos en directo en cualquier momento, sin reimprimir.'
        }
      ]
    },
    s3: {
      h2: 'Ubicaciones físicas estratégicas para convertir más seguidores',
      cards: [
        { title: 'Insertos en envíos de comercio electrónico', body: 'Coloca una tarjeta de desembalaje dentro de los paquetes de tus clientes con una llamada a la acción directa: "Escanéanos y etiquétanos en Instagram para obtener un 15 % de descuento en tu próximo pedido".' },
        { title: 'Atriles de mesa para hostelería', body: 'Muestra un elegante soporte de madera enlazado a tus vídeos de comida en Instagram y a tu página de reseñas de Google mientras los clientes esperan su plato.' },
        { title: 'Pancartas para stands en ferias', body: 'Imprime códigos QR vectoriales SVG de gran formato, de 10 x 10 cm, en los fondos del stand para que los asistentes que pasan se conecten al instante en LinkedIn.' },
        { title: 'Pegatinas en cajas de tiendas', body: 'Coloca una pegatina en el mostrador, cerca del terminal de tarjetas, que invite a los clientes a unirse a tu canal VIP de WhatsApp para ofertas flash exclusivas.' },
        { title: 'Diapositivas de presentaciones en eventos', body: 'Incorpora códigos QR de LinkedIn y de X/Twitter en la última diapositiva de tu presentación para conectar al instante con el público durante las preguntas.' },
        { title: 'Merchandising de artistas y músicos', body: 'Imprime códigos QR escaneables en las etiquetas colgantes de las camisetas de conciertos, con enlaces directos a perfiles de Spotify, álbumes de Apple Music y calendarios de gira.' }
      ]
    },
    s4: {
      h2: 'Análisis de escaneos en tiempo real y telemetría de audiencia',
      intro: 'Cuando gestionas códigos QR dinámicos para redes sociales a través de nuestra plataforma, accedes a información completa y en tiempo real sobre el comportamiento de tu audiencia física:',
      items: [
        { title: 'Velocidad de escaneo', body: 'Sigue las interacciones de escaneo totales y únicas en horizontes de 7 días, 30 días y de por vida, con picos de interacción por hora.' },
        { title: 'Desglose geográfico', body: 'Mapa la distribución de escaneos por países de todo el mundo y ciudades metropolitanas, gracias a una telemetría de doble nivel basada en IP y zona horaria.' },
        { title: 'Información de dispositivos y sistemas operativos', body: 'Identifica si tu audiencia escanea sobre todo con iOS de Apple, Android o cámaras de escritorio, para adaptar las páginas de destino a cada móvil.' },
        { title: 'Cero reimpresiones', body: 'Actualiza al instante las páginas de destino al lanzar promociones de temporada, sin reimprimir el merchandising existente.' }
      ]
    },
    s5: {
      h2: 'Códigos QR sociales con varios enlaces frente a los identificadores impresos tradicionales',
      headers: ['Métrica y característica', 'Código QR para redes sociales', 'Identificador de texto impreso (@nombre)'],
      rows: [
        ['Fricción para el usuario', 'Escaneo óptico con la cámara en 1 segundo', 'Abrir la app, escribir y buscar manualmente'],
        ['Tasa de conversión', 'Alta (enlace profundo directo al perfil)', 'Baja (más del 70 % de abandono en la búsqueda manual)'],
        ['Acceso a varias plataformas', 'Todas las plataformas en un único centro escaneable', 'Listas de texto saturadas en el material impreso'],
        ['Edición del destino en tiempo real', 'Actualización instantánea en la nube (QR dinámico)', 'Imposible sin reimprimir todo'],
        ['Telemetría de interacción', 'Recuentos completos de escaneos, dispositivos y ubicaciones', 'Sin ninguna visibilidad de seguimiento']
      ]
    },
    s6: {
      h2: 'Preguntas frecuentes sobre los códigos QR para redes sociales',
      sub: 'Todo lo que necesitas saber sobre los códigos QR para redes sociales y el marketing multicanal.'
    }
  },
  faq: [
    {
      q: '¿Qué es un código QR para redes sociales?',
      a: 'Un código QR para redes sociales conecta directamente al público offline con tus perfiles sociales digitales (Instagram, YouTube, TikTok, LinkedIn, X, Facebook y WhatsApp). En lugar de pedir a los clientes que busquen manualmente el nombre de tu marca en cada app, al escanear el código se abre tu canal verificado al instante.'
    },
    {
      q: '¿Cómo mejoran los códigos QR dinámicos el marketing en redes sociales?',
      a: 'Cuando usas un código QR dinámico para tus campañas sociales, puedes cambiar la promoción a la que enlaza, apuntar a nuevos vídeos de YouTube o actualizar los destinos de los enlaces de tu biografía en tiempo real, sin reimprimir nunca tu envase, tus carteles de eventos o tus tarjetas de visita. Además, obtienes telemetría completa de escaneos (escaneos totales, dispositivos únicos, sistemas operativos y ubicaciones geográficas de los visitantes).'
    },
    {
      q: '¿Puedo generar códigos QR de marca individuales para cada red social?',
      a: 'Sí. Nuestra herramienta te permite introducir varios perfiles a la vez y genera códigos QR de alta resolución con colores a juego para cada plataforma (por ejemplo, rojo para YouTube, degradado para Instagram, azul marino para LinkedIn o verde para WhatsApp), con descargas inmediatas en SVG vectorial y PNG.'
    },
    {
      q: '¿Dónde debo imprimir mis códigos QR de redes sociales para conseguir más seguidores?',
      a: 'Entre las ubicaciones físicas con más conversión están las cajas de envases de productos, las tarjetas de agradecimiento de desembalaje, los menús de mesa de restaurantes, las cajas de las tiendas, las pegatinas de vehículos, las pancartas de stands en ferias, las diapositivas de presentaciones en congresos y las tarjetas de visita.'
    },
    {
      q: '¿Necesitan los visitantes una app para escanear códigos QR de redes sociales?',
      a: 'No. Las aplicaciones de cámara modernas de iOS y Android detectan automáticamente el código QR y abren sin fricción un enlace profundo directo a la app nativa o una vista previa en el navegador móvil.'
    },
    {
      q: '¿Puedo saber qué redes sociales generan más escaneos?',
      a: 'Sí. Si creas una cuenta gratuita y usas códigos QR dinámicos con títulos de campaña distintos para cada canal, tu panel mostrará análisis de escaneos en tiempo real, gráficos diarios de interacción y mapas de calor de ubicaciones geográficas.'
    }
  ]
};

export default es;
