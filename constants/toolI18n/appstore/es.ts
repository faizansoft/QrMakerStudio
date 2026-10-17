import type { AppStoreCopy } from './types';

const es: AppStoreCopy = {
  hero: {
    badge: 'Enrutamiento inteligente de apps',
    h1: 'Generador gratuito de códigos QR para la App Store',
    lead: 'Crea un único código QR inteligente para iOS y Android. Dirige automáticamente a los usuarios de iPhone a la App Store de Apple y a los de Android a Google Play, con telemetría de instalaciones en tiempo real.'
  },
  form: {
    appTitleLabel: 'Título de la app / nombre de la marca',
    appTitlePlaceholder: 'p. ej. App móvil de Acme',
    iosLabel: 'URL de la App Store de Apple (iOS)',
    androidLabel: 'URL de Google Play Store (Android)',
    webLabel: 'URL web de respaldo (escritorio / otros)',
    webPlaceholder: 'https://tuapp.com',
    qrDots: 'Puntos del QR',
    background: 'Fondo',
    cornerEye: 'Ojo de esquina',
    cornerDot: 'Punto de esquina',
    dotPattern: 'Patrón de puntos',
    cornerShape: 'Forma de esquina',
    appIcon: 'Icono / logotipo de la app',
    changeIcon: 'Cambiar icono',
    addIcon: 'Añadir icono de la app',
    dotStyles: {
      rounded: 'Redondeado',
      dots: 'Puntos',
      classy: 'Elegante',
      'classy-rounded': 'Elegante redondeado',
      square: 'Cuadrado',
      'extra-rounded': 'Muy redondeado'
    },
    cornerShapes: {
      'extra-rounded': 'Muy redondeado',
      dot: 'Punto circular',
      square: 'Cuadrado'
    }
  },
  dynamicBox: {
    title: 'Mide las instalaciones de la app con QR dinámico',
    body: 'Controla en tiempo real las conversiones de escaneo por dispositivo (iOS frente a Android), países y ciudades.',
    cta: 'Guardar como QR dinámico ⚡'
  },
  preview: {
    downloadPng: 'Descargar PNG',
    downloadSvg: 'SVG (vectorial)'
  },
  modal: {
    createdTitle: '¡QR dinámico de app creado!',
    saveTitle: 'Guardar QR dinámico de la App Store',
    createdBody: 'Tu código QR inteligente de la App Store ya está activo. ¡Mide las instalaciones y actualiza los enlaces en cualquier momento desde tu panel!',
    copy: 'Copiar',
    copied: 'Copiado',
    myQrCodes: 'Mis códigos QR',
    viewAnalytics: 'Ver analíticas',
    campaignTitle: 'Título de la campaña',
    campaignPlaceholder: 'p. ej. Lanzamiento de la app para iOS y Android',
    primaryTarget: 'Enlace de destino principal',
    creating: 'Creando enlace inteligente...',
    createButton: 'Crear QR dinámico de la App Store'
  },
  auth: {
    title: 'Crea una cuenta para el QR inteligente de app',
    subtitle: 'Inicia sesión o regístrate para medir las analíticas de instalación de la app y actualizar los enlaces de la tienda en cualquier momento.'
  },
  article: {
    s1: {
      badge: 'Arquitectura de crecimiento de apps',
      h2: 'La guía definitiva de los códigos QR inteligentes para la App Store y la captación móvil',
      paragraphs: [
        'En el marketing físico de aplicaciones —ya sea en vallas del metro, material de desembalaje de productos, anuncios de televisión, stands de ferias o folletos de correo directo—, pedir a los posibles usuarios que abran el móvil, lancen una tienda de apps, escriban el título exacto de tu app y revisen los resultados de búsqueda de la competencia crea una fricción enorme. Los estudios demuestran que más del 65 % de los posibles usuarios abandonan durante la búsqueda manual en la tienda de apps.',
        'Un único código QR inteligente de la App Store elimina por completo esa fricción. Gracias al enrutamiento inteligente por dispositivo, un solo código de barras escaneable lleva automáticamente a los usuarios de iOS a la App Store de Apple y a los de Android a Google Play Store, sin que tengan que tomar ninguna decisión.'
      ]
    },
    s2: {
      badge: 'Optimización de la conversión',
      h2: 'Por qué imprimir dos códigos QR separados perjudica la tasa de conversión',
      intro: 'Muchos equipos de marketing cometen el error de imprimir códigos de barras uno al lado del otro con las etiquetas "Escanea para iOS" y "Escanea para Android". Estas son las razones por las que el enrutamiento inteligente unificado supera a los códigos dobles:',
      dualTitle: 'Los defectos de los códigos QR dobles',
      dualItems: [
        '**Saturación visual:** dos códigos de barras densos consumen un espacio valioso en el envase.',
        '**Carga cognitiva:** obliga al consumidor a detenerse y averiguar qué sistema operativo tiene.',
        '**Escaneo cruzado con la cámara:** las cámaras de los smartphones suelen enfocar el código contiguo equivocado, lo que provoca mensajes de error en los dispositivos Android que intentan abrir enlaces de la App Store de Apple.'
      ],
      unifiedTitle: 'La potencia de un código QR inteligente unificado',
      unifiedItems: [
        '**Un único código de barras limpio:** maximiza la presencia del logotipo y la estética de la impresión.',
        '**Escaneo sin fricción en 1 segundo:** no requiere ninguna reflexión del usuario; escanea e instala al momento.',
        '**Alternativa inteligente:** dirige a los usuarios de escritorio de forma fluida a tu sitio web promocional.'
      ]
    },
    s3: {
      h2: 'Ubicaciones offline estratégicas para maximizar las descargas de la app',
      cards: [
        { title: 'Envases de productos y cajas de hardware', body: 'Coloca un código QR de la App Store en la tapa interior de electrodomésticos inteligentes o de electrónica de consumo, con la etiqueta: "Escanea para descargar la app complementaria y empezar la configuración."' },
        { title: 'Tickets de caja y mesas de restaurante', body: 'Imprime códigos QR en los tickets del restaurante invitando a los comensales a descargar la app de fidelidad para obtener un descuento instantáneo de 5 $ en su próxima comida.' },
        { title: 'Transporte y vallas exteriores', body: 'Muestra códigos QR vectoriales SVG de gran formato en los carteles del metro, donde los viajeros tienen tiempo de espera y una conexión móvil rápida.' },
        { title: 'Correo directo y postales', body: 'Envía correos directos segmentados a códigos postales con un código QR de alto contraste que ofrezca códigos promocionales exclusivos dentro de la app.' },
        { title: 'Acreditaciones y pancartas de congresos', body: 'Imprime el código QR de la app oficial de la guía del evento en los cordones de los asistentes para acceder al instante al programa y recibir notificaciones push.' },
        { title: 'Calcomanías para flotas de vehículos', body: 'Aplica códigos QR de vinilo de alto contraste en furgonetas de servicio y vehículos de reparto para reservar servicios desde la app mientras se circula.' }
      ]
    },
    s4: {
      h2: 'Telemetría de escaneos de la app en directo y atribución por canal',
      intro: 'Al gestionar códigos QR dinámicos de la App Store a través de nuestra plataforma, obtienes una visibilidad completa de los embudos de conversión reales:',
      items: [
        { title: 'Reparto iOS frente a Android', body: 'Mide los porcentajes exactos de dispositivos que escanean tu material físico para optimizar los recursos de desarrollo móvil futuros.' },
        { title: 'Focos geográficos', body: 'Controla qué áreas metropolitanas y países generan la mayor velocidad de instalación para orientar los presupuestos publicitarios regionales.' },
        { title: 'Enrutamiento de URL en tiempo real', body: 'Actualiza al instante los nombres de paquete en la tienda o los parámetros de enlace profundo desde tu panel, sin reimprimir el material existente.' }
      ]
    },
    s5: {
      h2: 'QR unificado de la App Store frente a la búsqueda manual en la tienda',
      headers: ['Métrica', 'Código QR unificado de la App Store', 'Búsqueda manual "Encuéntranos en la App Store"'],
      rows: [
        ['Tiempo hasta la pantalla de instalación', 'Menos de 2 segundos (enlace profundo directo a la tienda)', '30–60+ segundos (abrir la app, escribir, buscar)'],
        ['Riesgo de que la competencia capte usuarios', '0 % (abre el ID exacto de tu producto)', 'Alto (los competidores compran anuncios en la búsqueda de la App Store)'],
        ['Detección del dispositivo', 'Enrutamiento automatizado al 100 % para iOS/Android', 'El usuario debe elegir la tienda manualmente'],
        ['Seguimiento de analíticas', 'Recuentos de escaneos, dispositivos y ubicaciones en directo', 'Ningún dato de seguimiento']
      ]
    },
    s6: {
      h2: 'Preguntas frecuentes sobre los códigos QR de la App Store',
      sub: 'Todo lo que necesitas saber sobre los códigos QR de la App Store para varias plataformas.'
    }
  },
  faq: [
    {
      q: '¿Cómo funciona un código QR de enlace múltiple para la App Store?',
      a: 'Un código QR de enlace múltiple para la App Store es un único código de barras unificado que detecta automáticamente el sistema operativo del dispositivo que escanea. Si se escanea con un iPhone o un iPad, redirige directamente a tu página de la App Store de Apple; si se escanea con un dispositivo Android, reenvía de inmediato a Google Play.'
    },
    {
      q: '¿Puedo añadir una URL web de respaldo para los escáneres de escritorio?',
      a: 'Sí. Puedes especificar una URL web de respaldo. Si un usuario escanea o hace clic en el enlace desde un ordenador de escritorio o un portátil, se le dirigirá a tu página de marketing o a tu aplicación web.'
    },
    {
      q: '¿Por qué usar un solo código QR en lugar de dos códigos separados para iOS y Android?',
      a: 'Imprimir dos códigos QR separados (uno para iOS y otro para Android) genera saturación visual, confunde a los clientes y reduce a la mitad el espacio de impresión disponible. Un único código QR inteligente de la App Store ofrece una experiencia de escaneo e instalación sin fricción, en 1 segundo, para el 100 % de los usuarios de smartphones.'
    },
    {
      q: '¿Puedo saber qué sistema operativo (iOS o Android) genera más instalaciones de la app?',
      a: '¡Sí! Cuando guardas tu código inteligente de la App Store como código QR dinámico, tu panel ofrece telemetría en tiempo real que desglosa los escaneos totales por sistema operativo (iOS frente a Android), modelos de dispositivo y ubicaciones geográficas (país y ciudad).'
    },
    {
      q: '¿Dónde debo imprimir mis códigos QR de la App Store para conseguir más descargas?',
      a: 'Entre las ubicaciones físicas con más conversión están los envases de productos, los tickets físicos, los anuncios en vallas de transporte público, los fondos de los stands de ferias, los folletos de correo directo y las acreditaciones de congresos.'
    },
    {
      q: '¿Puedo actualizar mis enlaces de la App Store o de Google Play después de imprimir?',
      a: 'Sí. Con los códigos QR dinámicos, puedes cambiar las URL de tu tienda de apps o apuntar a una nueva versión de la app en cualquier momento desde tu panel, sin reimprimir nunca tus envases ni tus vallas publicitarias.'
    }
  ]
};

export default es;
