import type { ScannerCopy } from './types';

const es: ScannerCopy = {
  hero: {
    badge: 'Decodificador óptico en el navegador',
    h1: 'Escáner y lector de códigos QR online gratis',
    lead: 'Escanea y decodifica cualquier código QR directamente en tu navegador con la webcam, la cámara del móvil o la subida de una imagen. 100 % privado, inspección instantánea de URL y sin necesidad de descargar ninguna aplicación.'
  },
  viewport: {
    title: 'Visor de cámara óptica listo',
    hint: 'Haz clic en "Iniciar cámara" para escanear con vídeo en directo, o sube un archivo de imagen desde tu dispositivo.'
  },
  controls: {
    startCamera: 'Iniciar cámara',
    stopScanning: 'Detener escaneo',
    uploadImage: 'Subir imagen'
  },
  errors: {
    camera: 'Acceso a la cámara denegado o no disponible. Asegúrate de que los permisos de cámara estén activados en la configuración de tu navegador.',
    noCode: 'No se detectó ningún código QR legible en la imagen subida. Asegúrate de que el código esté bien enfocado y tenga buen contraste.'
  },
  result: {
    decoded: 'Código QR decodificado correctamente',
    copy: 'Copiar texto',
    copied: 'Copiado',
    openLink: 'Abrir enlace verificado ↗'
  },
  article: {
    s1: {
      badge: 'Mecánica del decodificador',
      h2: 'Guía completa del escaneo óptico de códigos QR en el navegador',
      paragraphs: [
        'Durante años, escanear un código QR exigía descargar aplicaciones móviles de terceros llenas de anuncios invasivos, muros de suscripción y rastreadores que vulneraban la privacidad. Hoy, los avances en WebAssembly (WASM) y en las API estándar del navegador permiten reconocer códigos de barras ópticos directamente en los navegadores web, con una precisión propia de escritorio y sin instalar ninguna app.',
        'Nuestro escáner QR online gratuito funciona con un decodificador binario de matrices de alta velocidad basado en JavaScript y WebAssembly. Cuando concedes acceso a la cámara, la aplicación muestrea la señal de vídeo en directo a 12–15 fotogramas por segundo, ejecuta algoritmos de detección de bordes para localizar los tres patrones de localizador de esquina universales (patrones de detección de posición), corrige las distorsiones ópticas de perspectiva y analiza los módulos de datos Reed-Solomon en milisegundos.'
      ]
    },
    s2: {
      badge: 'Ciberseguridad y seguridad',
      h2: 'Decodificar QR dinámicos frente a estáticos: verificación de enlaces',
      intro: 'Uno de los mayores riesgos del escaneo de códigos de barras a ciegas es el "phishing con QR" (o quishing), en el que los delincuentes pegan pegatinas fraudulentas sobre cartas de restaurantes auténticas o terminales de pago. Nuestro escáner actúa como un cortafuegos inteligente y te muestra una vista previa clara y en texto plano del enlace codificado antes de que tu navegador abra la web:',
      cards: [
        {
          title: 'Inspección del contenido de un QR estático',
          body: 'Los códigos estáticos muestran de inmediato su URL final completa o su cadena de texto en bruto. Puedes verificar el nombre de dominio, detectar dominios mal escritos (por ejemplo, `paypa1.com` en lugar de `paypal.com`) y copiar el enlace al portapapeles de forma segura, sin ejecutar scripts maliciosos.'
        },
        {
          title: 'Análisis de enlaces cortos de QR dinámicos',
          body: 'Los códigos QR dinámicos redirigen a través de enlaces cortos limpios (por ejemplo, `qr-generator.online/r/h9K7WX`). Nuestro motor verifica en tiempo real el destino de la redirección y asegura que accedes a una campaña legítima creada dentro de la tabla de rutas segura de la plataforma.'
        }
      ]
    },
    s3: {
      h2: 'Estándares de contenido compatibles y análisis automático de formatos',
      intro: 'Los códigos QR pueden contener mucho más que URL de sitios web. Nuestro lector online reconoce y analiza automáticamente los protocolos de contenido estructurado:',
      cards: [
        { title: 'Cadenas de acceso WiFi', body: 'Decodifica formatos `WIFI:S:MiRed;P:clave;T:WPA;;` para que puedas copiar las contraseñas sin transcribirlas a mano.' },
        { title: 'Archivos de contacto vCard', body: 'Extrae nombres completos, números de teléfono, correos electrónicos y cargos de empresa de los códigos de barras de tarjetas de visita `BEGIN:VCARD`.' },
        { title: 'Direcciones de monederos cripto', body: 'Lee con precisión las cadenas alfanuméricas de monederos de Bitcoin (`bitcoin:1A...`), Ethereum (`ethereum:0x...`) y Solana.' },
        { title: 'Coordenadas de ubicación', body: 'Analiza coordenadas `geo:lat,lng` para navegar al instante con un solo clic en Google Maps o Apple Maps.' },
        { title: 'Enlaces de WhatsApp y SMS', body: 'Decodifica los enlaces de chat móvil y de mensajes SMS con palabras clave predefinidas y los convierte en un formato legible.' },
        { title: 'Calendarios de eventos iCal', body: 'Analiza resúmenes de eventos de calendario, marcas de tiempo y lugares codificados en estructuras `BEGIN:VEVENT`.' }
      ]
    },
    s4: {
      h2: 'Guía de solución de problemas: por qué algunos códigos QR no se escanean',
      intro: 'Si encuentras un código de barras que no se detecta ópticamente, el problema casi siempre se debe a una de estas cuatro anomalías físicas o digitales habituales:',
      items: [
        { title: '1. Zona de silencio ausente o incumplida', body: 'Si la ilustración, el texto o el borde de un folleto tocan los cuadrados negros exteriores sin un margen blanco vacío de 4 módulos, los sensores ópticos no pueden calcular los límites del código de barras.' },
        { title: '2. Densidad de datos excesiva en códigos de barras estáticos', body: 'Codificar una URL de 250 caracteres en un código QR estático genera miles de módulos microscópicos que se difuminan fácilmente con cámaras de baja resolución. Usar **códigos QR dinámicos** elimina este problema, ya que mantiene matrices limpias y de baja densidad.' },
        { title: '3. Bajo contraste y polaridad de color invertida', body: 'Los lectores de códigos de barras estándar esperan puntos de datos oscuros sobre un fondo más claro. Los puntos blancos sobre fondo oscuro o las combinaciones de bajo contraste (como amarillo sobre blanco) suelen fallar en la decodificación óptica.' }
      ]
    },
    s5: {
      h2: 'Escáner web online frente a aplicaciones móviles nativas',
      headers: ['Característica', 'Escáner web de QR Generator Online', 'Escáneres de apps de terceros'],
      rows: [
        ['Instalación necesaria', 'Ninguna (funciona al instante en el navegador)', 'Requiere descargar más de 50 MB e iniciar sesión en la tienda'],
        ['Privacidad de datos y rastreo', '100 % privado (solo memoria local)', 'A menudo rastrea el historial de navegación y los ID publicitarios'],
        ['Subida de imagen o captura', 'Compatible (arrastra y suelta cualquier archivo)', 'A menudo bloqueado tras planes premium de pago'],
        ['Compatibilidad multiplataforma', 'Universal (iOS, Android, Mac, Windows, Linux)', 'Específico de cada plataforma']
      ]
    },
    s6: {
      h2: 'Preguntas frecuentes sobre el escáner de códigos QR',
      sub: 'Respuestas a las dudas técnicas más habituales sobre el escaneo y la seguridad de los códigos de barras.'
    }
  },
  faq: [
    {
      q: '¿Cómo funciona este escáner de códigos QR online sin necesidad de app?',
      a: 'Nuestro escáner de códigos QR basado en el navegador utiliza WebAssembly moderno y la API MediaDevices de HTML5 para conectarse directamente con la webcam de tu dispositivo o con la cámara de tu smartphone. Los fotogramas del flujo de vídeo se procesan en tiempo real en la memoria del navegador, sin enviar ningún dato de vídeo a servidores en la nube.'
    },
    {
      q: '¿Puedo escanear y decodificar códigos QR a partir de imágenes guardadas o capturas de pantalla?',
      a: 'Sí. Haz clic en "Subir imagen" para seleccionar cualquier captura en PNG, JPG, WEBP o SVG de tu ordenador o de la galería de fotos de tu smartphone. El motor analiza los píxeles de la imagen y decodifica al instante la cadena del código de barras incrustada.'
    },
    {
      q: '¿Cómo gestiona el escáner los códigos QR dinámicos?',
      a: 'Cuando escaneas un código QR dinámico (como los enlaces cortos que empiezan por qr-generator.online/r/), nuestro escáner detecta la URL de redirección y muestra una vista previa segura. Puedes inspeccionar el enlace de destino antes de decidir abrirlo, lo que garantiza la máxima seguridad y protección contra el phishing.'
    },
    {
      q: '¿Es seguro y privado escanear códigos QR online?',
      a: 'Sí, al 100 %. Los permisos de cámara y el procesamiento de archivos de imagen se realizan estrictamente dentro del entorno aislado de tu navegador. Ninguna imagen, fotograma de vídeo ni historial de contenido decodificado se sube, registra ni transmite a servidores de terceros.'
    },
    {
      q: '¿Qué tipos de códigos QR puede decodificar este escáner?',
      a: 'Nuestro motor decodifica todas las simbologías matriciales 2D estándar, incluidas las URL de sitios web, los enlaces cortos dinámicos, las credenciales WiFi (WIFI:), las tarjetas de visita digitales vCard 3.0 (BEGIN:VCARD), los chats de WhatsApp, los mensajes de texto SMS, las coordenadas geográficas de Google Maps, las direcciones de monederos de criptomonedas (Bitcoin, Ethereum) y los eventos de calendario.'
    },
    {
      q: '¿Por qué mi cámara no escanea un código QR concreto?',
      a: 'Los fallos de escaneo suelen deberse a una iluminación ambiental insuficiente, reflejos de la lente en superficies brillantes, colores de código invertidos (puntos claros sobre fondo oscuro sin contraste adecuado) o patrones localizadores dañados. En códigos dañados, hacer una foto de cerca y subir el archivo de imagen suele permitir decodificarlo correctamente.'
    }
  ]
};

export default es;
