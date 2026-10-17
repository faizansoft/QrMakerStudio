import type { PdfCopy } from './types';

const es: PdfCopy = {
  hero: {
    badge: 'Suite de documentos y menús',
    h1: 'Generador gratuito de códigos QR a partir de PDF',
    lead: 'Convierte menús digitales, folletos, catálogos de productos y libros blancos en códigos QR de alta resolución y con tu marca. Visualización instantánea en el smartphone sin descargar ninguna app y actualizaciones dinámicas editables.'
  },
  form: {
    urlLabel: 'URL del documento PDF / menú',
    urlPlaceholder: 'https://drive.google.com/file/... o https://tusitio.com/menu.pdf',
    urlHint: 'Pega un enlace directo al PDF, un enlace para compartir de Google Drive, un enlace de Dropbox o la URL de un documento alojado.',
    titleLabel: 'Título del documento / campaña (opcional)',
    titlePlaceholder: 'p. ej. Menú de cena de verano 2026 o catálogo de productos',
    qrDots: 'Puntos del QR',
    background: 'Fondo',
    cornerEye: 'Ojo de esquina',
    cornerDot: 'Punto de esquina',
    dotPattern: 'Patrón de puntos',
    cornerShape: 'Forma de esquina',
    uploadLogo: 'Subir logotipo',
    changeLogo: 'Cambiar logotipo',
    addLogo: 'Añadir logotipo',
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
    title: 'Convierte el QR del PDF en dinámico',
    body: 'Actualiza tu menú de temporada o tu documento PDF en cualquier momento sin reimprimir tus expositores de mesa.',
    cta: 'Guardar como QR dinámico ⚡'
  },
  preview: {
    empty: 'Introduce una URL de PDF arriba para ver la vista previa',
    downloadPng: 'Descargar PNG',
    downloadSvg: 'SVG (vectorial)'
  },
  modal: {
    createdTitle: '¡QR dinámico de PDF creado!',
    saveTitle: 'Guardar código QR dinámico de PDF',
    createdBody: 'Tu PDF ya está vinculado a un enlace corto dinámico. ¡Puedes cambiar el destino del PDF en cualquier momento desde tu panel!',
    copy: 'Copiar',
    copied: 'Copiado',
    myQrCodes: 'Mis códigos QR',
    viewAnalytics: 'Ver analíticas',
    campaignTitle: 'Título de la campaña',
    campaignPlaceholder: 'p. ej. Menú principal del comedor',
    targetUrl: 'URL del PDF de destino',
    creating: 'Creando enlace...',
    createButton: 'Crear código QR dinámico de PDF'
  },
  auth: {
    title: 'Crea una cuenta para el QR dinámico de PDF',
    subtitle: 'Inicia sesión o regístrate para actualizar tu documento PDF en cualquier momento sin reimprimir.'
  },
  article: {
    s1: {
      badge: 'Digitalización de documentos',
      h2: 'La guía completa de los códigos QR en PDF para menús, catálogos y documentos',
      paragraphs: [
        'En la restauración comercial, las ferias profesionales, la venta inmobiliaria y la formación corporativa, imprimir catálogos de papel de varias páginas o menús plastificados de restaurante es caro, perjudica el medio ambiente y resulta imposible de actualizar una vez impreso. Antes, un simple cambio de precio o la renovación de un menú de temporada exigía tiradas completas de reimpresión que costaban miles de dólares.',
        'Un código QR a partir de PDF tiende un puente entre el mundo físico y los documentos digitales ricos y de alta resolución. Cuando se colocan en expositores de mesa, envases de productos, stands de exposiciones o escaparates, los clientes solo tienen que apuntar con la cámara de su smartphone para abrir en segundos tu folleto PDF completo, tu carta digital o tu manual técnico, sin descargar aplicaciones especiales ni escribir direcciones web complicadas.'
      ]
    },
    s2: {
      badge: 'Gestión de menús',
      h2: 'QR de PDF estáticos frente a dinámicos: actualizar menús sin reimprimir',
      intro: 'Al imprimir códigos QR sobre soportes acrílicos, placas metálicas de mesa o pancartas de vinilo permanentes, elegir entre códigos estáticos y dinámicos determina si tus materiales impresos podrán adaptarse con el tiempo:',
      cards: [
        {
          title: 'QR estático de PDF',
          body: 'Codifica el enlace permanente directamente en la matriz de píxeles 2D. Si cambia la URL de tu Google Drive o renombras el archivo del servidor, el código impreso se rompe de forma definitiva y no puede arreglarse sin una tirada completa de reimpresión.'
        },
        {
          title: 'QR dinámico de PDF (recomendado)',
          body: 'Codifica un enlace corto de redirección permanente (`qr-generator.online/r/menu`). Cada vez que actualices tus platos semanales, ajustes los precios de las bebidas o publiques una nueva edición del catálogo, basta con cambiar la URL de destino en tu panel. Los expositores de mesa siguen funcionando al 100 %.'
        }
      ]
    },
    s3: {
      h2: 'Aplicaciones por sector de los códigos QR en PDF',
      cards: [
        { title: 'Restaurantes y bares de vinos', body: 'Muestra expositores QR de mesa sin contacto que enlacen con tu carta PDF completa de comidas y cócteles, con advertencias de alérgenos y fotografía de platos en alta resolución.' },
        { title: 'Folletos de inmuebles', body: 'Añade códigos QR en PDF a los carteles de jardín y a los folletos de anuncios para ofrecer a los compradores planos arquitectónicos completos, documentación de la comunidad de propietarios y planos de planta.' },
        { title: 'Manuales en el envase de productos', body: 'Sustituye los voluminosos folletos de instrucciones impresos en varios idiomas por un único código QR compacto que enlaza a una guía de usuario PDF multilingüe e interactiva.' },
        { title: 'Prospectos médicos y farmacéuticos', body: 'Ofrece a pacientes y profesionales sanitarios guías clínicas de dosificación, fichas de seguridad y documentación de prescripción descargables.' },
        { title: 'Pósteres académicos y de investigación', body: 'Incluye códigos QR en la esquina inferior de los pósteres de congresos científicos para que los asistentes descarguen los artículos de investigación completos revisados por pares.' },
        { title: 'Catálogos para ferias B2B', body: 'Elimina los pesados archivadores de productos mayoristas impresos ofreciendo a los compradores un enlace escaneable en su acreditación con tu lista de precios mayorista completa.' }
      ]
    },
    s4: {
      h2: 'Tutorial paso a paso: cómo alojar y generar un código QR de PDF',
      steps: [
        { title: 'Sube el PDF a la nube o a tu web', body: 'Sube tu PDF de menú o folleto a Google Drive, Dropbox, Microsoft OneDrive o a la biblioteca de medios de tu WordPress o Shopify.' },
        { title: 'Configura los permisos de uso compartido como "Público"', body: 'En Google Drive o Dropbox, asegúrate de que el acceso esté configurado como **"Cualquier persona con el enlace puede ver"** para que los clientes nunca se encuentren con muros de inicio de sesión.' },
        { title: 'Pega el enlace y personaliza los colores de la marca', body: 'Pega la URL para compartir en el campo del generador de arriba, personaliza la paleta de tu marca, sube el logotipo de tu restaurante o empresa y descarga los archivos de impresión en alta resolución.' }
      ]
    },
    s5: {
      h2: 'QR de PDF digital frente a menús y folletos de papel tradicionales',
      headers: ['Característica y factor', 'Menú con QR de PDF', 'Menú de papel impreso'],
      rows: [
        ['Coste de actualizar productos o precios', '0 $ (actualización instantánea en la nube con QR dinámico)', '200–1.500 $ o más por cada tirada completa de reimpresión'],
        ['Limpieza e higiene', '100 % sin contacto en el móvil del cliente', 'Obliga a desinfectar los plastificados físicos'],
        ['Capacidad de páginas e imágenes', 'Páginas ilimitadas con fotos ampliables', 'Limitado por el tamaño físico del folleto'],
        ['Analíticas y seguimiento de interacción', 'Recuentos de escaneos, horas y dispositivos en directo', 'Ningún dato de seguimiento']
      ]
    },
    s6: {
      h2: 'Preguntas frecuentes sobre los códigos QR de PDF',
      sub: 'Todo lo que necesitas saber sobre la creación de códigos QR de PDF y de cartas digitales.'
    }
  },
  faq: [
    {
      q: '¿Cómo funciona un código QR a partir de PDF?',
      a: 'Un código QR de PDF conecta materiales físicos (cartas de restaurante, folletos, envases de productos, catálogos) con un documento PDF digital alojado en línea (como Google Drive, Dropbox, OneDrive o el servidor de tu web). Al escanearlo, la cámara del smartphone del visitante abre el documento PDF al instante en su navegador móvil.'
    },
    {
      q: '¿Puedo cambiar o actualizar el documento PDF después de imprimir el código QR?',
      a: '¡Sí, si usas un código QR dinámico! Con nuestra plataforma dinámica puedes actualizar la URL del PDF de destino o subir un nuevo menú de temporada en cualquier momento desde tu panel, sin reimprimir nunca tus folletos, expositores de mesa ni envases de productos.'
    },
    {
      q: '¿Cómo genero un código QR para un PDF de Google Drive o Dropbox?',
      a: 'Sube tu PDF a Google Drive o Dropbox, configura los permisos de uso compartido como "Cualquier persona con el enlace puede ver", copia el enlace para compartir, pégalo en nuestro generador de arriba y haz clic en Generar. Nuestro sistema optimiza automáticamente el enlace para el escaneo móvil.'
    },
    {
      q: '¿Cuál es el tamaño de archivo PDF recomendado para un escaneo rápido del código QR?',
      a: 'Recomendamos comprimir el archivo PDF a menos de 5 MB (idealmente, menos de 2 MB). Los PDF grandes de varias páginas pueden hacer que la carga sea lenta en las conexiones móviles cuando los clientes escanean tu código QR.'
    },
    {
      q: '¿Puedo saber cuántas personas escanean y ven mi código QR de PDF?',
      a: 'Sí. Si guardas tu código QR de PDF como código QR dinámico gratuito, tu panel registra el número total de escaneos, los visitantes únicos, las fechas de escaneo, los sistemas operativos de los dispositivos (iOS frente a Android) y las ubicaciones geográficas (país y ciudad).'
    },
    {
      q: '¿Puedo personalizar el diseño y añadir el logotipo de mi restaurante o empresa?',
      a: 'Sí. Puedes personalizar los colores de primer plano y de fondo del QR, los estilos de los puntos (redondeado, elegante, puntos), las formas de las esquinas y subir el logotipo de tu empresa en alta resolución para mostrarlo en el centro.'
    }
  ]
};

export default es;
