import type { BulkCopy } from './types';

const es: BulkCopy = {
  hero: {
    badge: 'Suite de Producción de Alto Volumen',
    h1: 'Generador Gratis de Códigos QR en Lote',
    lead: 'Genera por lotes decenas o cientos de códigos QR personalizados a la vez, a partir de listas de texto o archivos CSV. Exporta todos los archivos en PNG de alta resolución o SVG vectorial, empaquetados en un único archivo ZIP organizado.'
  },
  input: {
    enterHeading: 'Introduce URLs o datos de texto',
    uploadCsv: 'Subir CSV / TXT',
    placeholder: 'Escribe una URL o texto por línea:\nhttps://example.com/promo-1\nhttps://example.com/promo-2\nhttps://example.com/menu-mesa-1\nhttps://example.com/menu-mesa-2\nSKU-98234-ROJO-XL',
    items: (n) => (n === 1 ? '1 elemento detectado' : `${n} elementos detectados`),
    onePerLine: 'Una entrada por línea',
    foreground: 'Primer plano',
    background: 'Fondo',
    exportFormat: 'Formato de exportación',
    formatPng: 'PNG (ráster)',
    formatSvg: 'SVG (vectorial)',
    generating: (done, total) => `Generando ${done} de ${total}...`,
    generateCount: (n) => `Generar ${n} códigos QR`,
    generateBatch: 'Generar códigos en lote'
  },
  output: {
    rendered: (n) => `${n} códigos QR generados`,
    rendHint: 'Haz clic en cualquier código para descargarlo individualmente o obtén el paquete ZIP completo.',
    downloadZip: 'Descargar ZIP',
    cardTitle: (text) => `Haz clic para descargar: ${text}`,
    cardOverlay: 'Descargar',
    emptyTitle: 'Las vistas previas aparecerán aquí',
    emptyBody: 'Escribe o pega tus URL a la izquierda, o sube una hoja de cálculo CSV para generar códigos de barras al instante.'
  },
  article: {
    s1: {
      badge: 'Arquitectura de Producción',
      h2: 'La Guía Definitiva para la Generación de Códigos QR en Lote de Alto Volumen',
      paragraphs: [
        'En la logística industrial moderna, la gestión de eventos, el comercio minorista y el marketing empresarial, generar códigos QR uno por uno es ineficiente y propenso a errores. Ya sea que produzcas 50 códigos únicos para pedidos en las mesas de un restaurante, 5.000 etiquetas serializadas de autenticación de productos para envases industriales o 10.000 credenciales personalizadas para un congreso internacional, la generación de códigos QR en lote es una capacidad operativa imprescindible.',
        'Nuestro generador masivo gratuito funciona por completo en un flujo de renderizado de alto rendimiento en el lado del cliente. En lugar de enviar tus datos privados por colas de servidores remotos, lo que introduce latencia, límites de velocidad y graves riesgos para la privacidad, nuestra herramienta compila las matrices 2D directamente dentro del motor de tu navegador. Esta arquitectura garantiza cero viajes de ida y vuelta al servidor, procesamiento instantáneo de cientos de filas y total confidencialidad para URL propietarias y tokens internos de la empresa.'
      ]
    },
    s2: {
      badge: 'Estrategia de Campaña',
      h2: 'Códigos QR Estáticos vs. Dinámicos en la Producción en Lote',
      intro: 'Al emprender tiradas de impresión de códigos QR a gran escala, elegir la arquitectura de código de barras adecuada entre **Códigos QR Estáticos** y **Códigos QR Dinámicos** es la decisión más importante para el ciclo de vida de tu campaña:',
      staticCard: {
        title: 'Códigos en Lote Estáticos',
        body: 'Los códigos estáticos codifican de forma permanente el texto o la URL de destino dentro del patrón de píxeles 2D. Una vez impresos en cajas de cartón, placas de aluminio o folletos, los datos codificados no se pueden modificar.',
        points: [
          { tone: 'plain', text: '**No requiere consulta en internet:** Se decodifica completamente sin conexión.' },
          { tone: 'plain', text: '**Vida útil permanente:** Nunca caduca ni depende de servidores.' },
          { tone: 'bad', text: '**Cero editabilidad:** Cualquier error tipográfico obliga a reimprimir todo.' },
          { tone: 'bad', text: '**Sin analíticas de escaneo:** No permite medir la interacción de los visitantes.' }
        ]
      },
      dynamicCard: {
        title: 'Códigos en Lote Dinámicos',
        body: 'Los códigos dinámicos codifican una URL de redirección corta (`qr-generator.online/r/xyz`) que apunta a una tabla de enrutamiento gestionada en la nube. Al escanearlos, los visitantes son reenviados al instante a tu destino.',
        points: [
          { tone: 'good', text: '**Destinos editables en tiempo real:** Cambia las URL en cualquier momento sin reimprimir.' },
          { tone: 'good', text: '**Telemetría detallada:** Consulta escaneos, dispositivos, sistemas operativos, países y ciudades.' },
          { tone: 'good', text: '**Matriz de código más limpia:** Las URL más cortas generan módulos más grandes y fáciles de escanear.' },
          { tone: 'plain', text: '**Pruebas A/B activadas:** Dirige el tráfico a páginas promocionales alternativas de forma dinámica.' }
        ]
      },
      recommendation: '**Recomendación estratégica:** Si fabricas activos físicos de larga duración (como envases de productos, vallas publicitarias al aire libre o placas metálicas con número de serie), usa **Códigos QR Dinámicos** desde tu panel de cuenta. Para entradas de eventos desechables, tarjetas de acceso WiFi internas o identificadores de texto plano, la generación estática en lote es ideal.'
    },
    s3: {
      h2: 'Tutorial paso a paso: preparar tu CSV para la generación en lote',
      intro: 'Para maximizar el rendimiento y garantizar cero errores en la generación de códigos de barras, estructura tus datos de hoja de cálculo con un formato limpio y estándar ASCII o UTF-8:',
      steps: [
        { title: 'Organiza los datos en Microsoft Excel o Hojas de cálculo de Google', body: 'Coloca cada URL de destino o cadena de texto en la columna A. Asegúrate de que todos los enlaces incluyan el prefijo del protocolo (por ejemplo, `https://`).' },
        { title: 'Exporta como valores separados por comas (.csv) o texto plano (.txt)', body: 'Selecciona Archivo ➔ Guardar como ➔ CSV (delimitado por comas). Asegúrate de elegir la codificación UTF-8 si tu conjunto de datos contiene caracteres internacionales o nombres con acentos.' },
        { title: 'Sube y personaliza los parámetros visuales', body: 'Haz clic en "Subir CSV" arriba para importar tu archivo. Elige colores de primer plano y de fondo con alto contraste (por ejemplo, carbón oscuro sobre blanco), selecciona el formato que prefieras (PNG o SVG vectorial) y pulsa "Generar".' },
        { title: 'Descarga los archivos individuales o el archivo ZIP completo', body: 'Revisa la cuadrícula de vistas previas generada. Descarga los archivos individuales haciendo clic en cualquier tarjeta, o pulsa "Descargar todo (ZIP)" para recibir un archivo organizado con nombres numerados, listo para la preimpresión comercial.' }
      ]
    },
    s4: {
      h2: 'Casos de uso industriales y empresariales para la producción de códigos QR en lote',
      cards: [
        { title: 'Hostelería y comedores con varias mesas', body: 'Genera un código QR único para cada mesa (por ejemplo, `https://bistro.com/order?table=12`) para que el personal de sala envíe pedidos digitales sin contacto directamente al TPV de la cocina, con la ubicación exacta de cada mesa.' },
        { title: 'Acreditaciones y venta de entradas para eventos', body: 'Produce miles de pases de asistente escaneables y únicos, codificados con hashes criptográficos de validación de entradas, para registros ultrarrápidos en los torniquetes y prevención del fraude.' },
        { title: 'Fabricación y seguimiento de activos por número de serie', body: 'Codifica números de serie, identificadores de lote de fabricación y manuales de funcionamiento digitales en las etiquetas de los equipos industriales para consultar el mantenimiento en campo al instante.' },
        { title: 'Campañas de marketing en múltiples ubicaciones', body: 'Genera cientos de URL distintas con etiquetas UTM para anuncios en vallas publicitarias de varias zonas metropolitanas, con el fin de comparar con precisión las tasas de conversión regionales.' }
      ]
    },
    s5: {
      h2: 'Flujo de trabajo en lote frente al generador tradicional de un solo código',
      headers: ['Característica y métrica', 'Generador de un solo código', 'Generador de lotes'],
      rows: [
        ['Velocidad de generación', '1 código cada 30–60 segundos de forma manual', 'Más de 100 códigos en menos de 5 segundos automáticamente'],
        ['Flujo de entrada de datos', 'Copiar y pegar manualmente en los campos', 'Importación de hojas de cálculo CSV y TXT'],
        ['Organización de archivos', 'Descargas dispersas en la carpeta del navegador', 'Archivo ZIP consolidado y estructurado'],
        ['Uniformidad de estilo', 'Riesgo de ajustes inconsistentes de color o margen', 'Colores, dimensiones y márgenes de error 100 % unificados'],
        ['Exportación SVG vectorial', 'Descarga individual por cada código', 'Exportación SVG vectorial por lotes para impresión profesional']
      ]
    },
    s6: {
      h2: 'Normas de impresión y optimización de la corrección de errores',
      intro: 'Al imprimir códigos QR en lote sobre soportes físicos (pegatinas de papel, envases de productos o adhesivos de vinilo), seguir las normas ISO/IEC 18004 garantiza un escaneo instantáneo con cámara en distintas condiciones ópticas:',
      cards: [
        { title: 'Margen de zona silenciosa', body: 'Mantén un borde libre de al menos 4 anchos de módulo alrededor de todo el código de barras para que los elementos gráficos cercanos no confundan los sensores ópticos del escáner.' },
        { title: 'Resolución de 300 PPP o más', body: 'Exporta siempre en formato SVG vectorial o usa PNG de 800 x 800 px renderizados a 300 puntos por pulgada para una definición de bordes muy nítida durante la impresión offset.' },
        { title: 'Redundancia Nivel H (30 %)', body: 'Nuestro generador aplica la corrección de errores Reed-Solomon de Nivel H, lo que permite que los códigos de barras se decodifiquen sin fallos aunque hasta el 30 % de la superficie esté rayada u oculta.' }
      ]
    },
    s7: {
      h2: 'Preguntas frecuentes sobre el generador de códigos QR en lote',
      sub: 'Todo lo que necesitas saber sobre la creación de códigos QR por lotes y su implementación empresarial.'
    }
  },
  faq: [
    {
      q: '¿Cuántos códigos QR puedo generar en lote a la vez?',
      a: 'Puedes generar cientos de códigos QR simultáneamente sin límites artificiales. Como todo el procesamiento se realiza en el lado del cliente, en tu navegador web, la generación es muy rápida y respeta la memoria de tu equipo sin retrasos en cola.'
    },
    {
      q: '¿Cuál es la diferencia entre los códigos QR estáticos y los dinámicos en lote?',
      a: 'Los códigos QR estáticos en lote codifican de forma permanente la URL o el texto exacto dentro del patrón del código de barras. Los códigos QR dinámicos, en cambio, codifican URL de redirección cortas gestionadas en nuestra plataforma, lo que te permite cambiar las URL de destino en cualquier momento después de imprimir y consultar analíticas de escaneo en tiempo real (dispositivos de los visitantes, ubicaciones geográficas y marcas de tiempo).'
    },
    {
      q: '¿En qué formato debe estar mi archivo CSV?',
      a: 'Tu archivo CSV o TXT debe tener una URL o cadena de texto por línea. Los encabezados son opcionales. El analizador detecta y limpia automáticamente las URL sin formato, las cadenas de texto, los fragmentos vCard y los códigos SKU de productos.'
    },
    {
      q: '¿Puedo descargar todos los códigos QR generados en un único archivo ZIP?',
      a: 'Sí. Cuando termina la generación en lote, al hacer clic en "Descargar todo (ZIP)" se empaquetan todos los códigos de barras generados, en PNG de alta resolución o SVG vectorial, en un único archivo ZIP organizado, con nombres de archivo limpios que coinciden con tus datos de entrada.'
    },
    {
      q: '¿Son privados y seguros los códigos QR en lote?',
      a: 'Sí, al 100 %. Todo el renderizado en lote se realiza en el entorno aislado de tu navegador local con JavaScript del lado del cliente. Tus datos de lote, las URL de tus clientes y los números de serie de tu inventario nunca se suben ni se almacenan en servidores externos.'
    },
    {
      q: '¿Qué resolución de impresión y corrección de errores debo usar para las etiquetas en lote?',
      a: 'Generamos archivos de alta resolución de 800 x 800 px por defecto (o SVG vectorial para una escalabilidad infinita). Aplicamos la corrección de errores de Nivel H (30 % de redundancia de datos) para que los códigos de barras sigan siendo 100 % escaneables incluso en envases con textura o botellas curvas.'
    }
  ]
};

export default es;
