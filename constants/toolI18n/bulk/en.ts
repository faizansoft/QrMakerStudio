import type { BulkCopy } from './types';

const en: BulkCopy = {
  hero: {
    badge: 'High-Volume Production Suite',
    h1: 'Free Bulk QR Code Generator',
    lead: 'Batch generate dozens or hundreds of custom QR codes simultaneously from text lists or CSV uploads. Export all files in high-resolution PNG or vector SVG packaged in a single organized ZIP archive.'
  },
  input: {
    enterHeading: 'Enter URLs or Text Data',
    uploadCsv: 'Upload CSV / TXT',
    placeholder: 'Enter one URL or text string per line:\nhttps://example.com/promo-1\nhttps://example.com/promo-2\nhttps://example.com/menu-table-1\nhttps://example.com/menu-table-2\nSKU-98234-RED-XL',
    items: (n) => (n === 1 ? '1 item detected' : `${n} items detected`),
    onePerLine: 'One entry per line',
    foreground: 'Foreground',
    background: 'Background',
    exportFormat: 'Export Format',
    formatPng: 'PNG (Raster)',
    formatSvg: 'SVG (Vector)',
    generating: (done, total) => `Generating ${done} of ${total}...`,
    generateCount: (n) => `Generate ${n} QR Codes`,
    generateBatch: 'Generate Batch Codes'
  },
  output: {
    rendered: (n) => `${n} QR Codes Rendered`,
    rendHint: 'Click any code to download individually or grab the entire ZIP package.',
    downloadZip: 'Download ZIP',
    cardTitle: (text) => `Click to download: ${text}`,
    cardOverlay: 'Download',
    emptyTitle: 'Batch Previews Will Appear Here',
    emptyBody: 'Type or paste your URLs on the left, or upload a CSV spreadsheet to generate barcodes instantly.'
  },
  article: {
    s1: {
      badge: 'Production Architecture',
      h2: 'The Definitive Guide to High-Volume Bulk QR Code Generation',
      paragraphs: [
        'In modern industrial logistics, event management, retail commerce, and enterprise marketing, generating QR codes one-by-one is both inefficient and error-prone. Whether you are producing 50 unique table ordering codes for a restaurant, 5,000 serialized product authentication labels for manufacturing packaging, or 10,000 personalized badge credentials for an international convention, bulk QR code generation is an indispensable operational capability.',
        'Our free bulk generator operates entirely on a high-performance client-side rendering pipeline. Rather than routing your private data through remote server queues—which introduces latency, rate limiting, and severe data privacy vulnerabilities—our tool compiles mathematical 2D matrix symbologies directly inside your browser engine. This architecture ensures zero server roundtrips, instantaneous processing of hundreds of rows, and complete confidentiality for proprietary URLs and internal enterprise tokens.'
      ]
    },
    s2: {
      badge: 'Campaign Strategy',
      h2: 'Static vs. Dynamic QR Codes in Bulk Production',
      intro: 'When embarking on large-scale QR code printing runs, choosing the right barcode architecture between **Static QR Codes** and **Dynamic QR Codes** is the single most critical decision for your campaign lifecycle:',
      staticCard: {
        title: 'Static Bulk QR Codes',
        body: 'Static codes directly encode the destination text or URL string permanently into the 2D pixel pattern. Once printed onto physical cardboard boxes, aluminum nameplates, or printed flyers, the encoded data cannot be altered.',
        points: [
          { tone: 'plain', text: '**No internet lookup required:** Decodes completely offline.' },
          { tone: 'plain', text: '**Permanent lifetime:** Never expires or depends on servers.' },
          { tone: 'bad', text: '**Zero editability:** Typos require complete reprinting.' },
          { tone: 'bad', text: '**No scan analytics:** Cannot track visitor engagement.' }
        ]
      },
      dynamicCard: {
        title: 'Dynamic Bulk QR Codes',
        body: 'Dynamic codes encode a short redirect URL (`qr-generator.online/r/xyz`) that points to a cloud-managed routing table. When scanned, visitors are instantly forwarded to your target destination.',
        points: [
          { tone: 'good', text: '**Real-time editable destinations:** Change URLs anytime without reprinting.' },
          { tone: 'good', text: '**Deep telemetry analytics:** Track scan counts, devices, OS, countries, and cities.' },
          { tone: 'good', text: '**Cleaner barcode matrix:** Shorter URL lengths result in larger, easier-to-scan modules.' },
          { tone: 'plain', text: '**A/B testing enabled:** Route traffic to alternate promo pages dynamically.' }
        ]
      },
      recommendation: '**Strategic Recommendation:** If you are manufacturing long-lived physical assets (like product packaging, outdoor billboards, or metal serial plates), use **Dynamic QR Codes** through your account dashboard. For one-off disposable event tickets, internal WiFi access cards, or raw plain text serial identifiers, static bulk generation is ideal.'
    },
    s3: {
      h2: 'Step-by-Step Tutorial: Preparing Your CSV for Batch Generation',
      intro: 'To maximize throughput and guarantee zero barcode generation errors, structure your spreadsheet data using clean, standard ASCII or UTF-8 formatting:',
      steps: [
        { title: 'Organize Data in Microsoft Excel or Google Sheets', body: 'Place each individual destination URL or raw text string in Column A. Ensure all website links include the protocol prefix (e.g. `https://`).' },
        { title: 'Export as Comma-Separated Values (.csv) or Plain Text (.txt)', body: 'Select File ➔ Save As ➔ CSV (Comma Delimited). Ensure UTF-8 encoding is selected if your dataset contains international characters or accented names.' },
        { title: 'Upload & Customize Visual Parameters', body: 'Click "Upload CSV" above to import your file. Choose high-contrast foreground and background colors (e.g. dark charcoal on white), pick your preferred format (PNG or vector SVG), and hit "Generate".' },
        { title: 'Download Individual Files or the Complete ZIP Archive', body: 'Review the rendered visual preview grid. Download individual files by clicking any card, or click "Download All (ZIP)" to receive an organized archive with numbered file nomenclature ready for commercial prepress.' }
      ]
    },
    s4: {
      h2: 'Industrial & Enterprise Use Cases for Batch QR Code Production',
      cards: [
        { title: 'Hospitality & Multi-Table Dining', body: 'Generate unique QR codes for each dining table (e.g. `https://bistro.com/order?table=12`) so waitstaff can route contactless digital orders directly to the kitchen POS with precise table geolocation.' },
        { title: 'Event Credentials & Ticketing', body: 'Produce thousands of unique scannable attendee passes encoded with cryptographic ticket validation hashes for lightning-fast turnstile check-ins and fraud prevention.' },
        { title: 'Manufacturing & Serial Asset Tracking', body: 'Encode serial numbers, manufacturing batch IDs, and digital operating manuals onto industrial equipment labels for instant field maintenance lookup.' },
        { title: 'Multi-Location Marketing Campaigns', body: 'Generate hundreds of distinct UTM-tagged URLs for billboard advertisements across multiple metropolitan regions to benchmark regional conversion rates with pinpoint precision.' }
      ]
    },
    s5: {
      h2: 'Bulk Workflow vs. Traditional Single-Code Generator',
      headers: ['Feature & Metric', 'Single-Code Generator', 'Bulk Batch Generator'],
      rows: [
        ['Generation Speed', '1 code every 30–60 seconds manually', '100+ codes in < 5 seconds automatically'],
        ['Data Input Pipeline', 'Manual copy-pasting into input fields', 'CSV, TXT spreadsheet ingestion'],
        ['File Organization', 'Scattered downloads in browser folder', 'Consolidated, structured ZIP archive'],
        ['Styling Uniformity', 'Risk of inconsistent color / margin adjustments', '100% unified colors, dimensions, and error margins'],
        ['Vector SVG Export', 'Individual download per code', 'Batch vector SVG export for prepress printing']
      ]
    },
    s6: {
      h2: 'Print Standards & Error Correction Optimization',
      intro: 'When printing bulk QR codes on physical media (paper stickers, product packaging, or vinyl decals), adhering to ISO/IEC 18004 standards guarantees instant camera scanning under diverse optical conditions:',
      cards: [
        { title: 'Quiet Zone Margin', body: 'Maintain a clear border of at least 4 module widths around the entire barcode to prevent surrounding graphic elements from confusing optical scanner sensors.' },
        { title: '300+ DPI Resolution', body: 'Always export in vector SVG format or use 800x800px PNGs rendered at 300 dots per inch for ultra-sharp edge definition during offset printing.' },
        { title: 'Level H (30%) Redundancy', body: 'Our generator applies Reed-Solomon Level H error correction, allowing barcodes to decode flawlessly even if up to 30% of the surface is scratched or obscured.' }
      ]
    },
    s7: {
      h2: 'Bulk QR Code Generator FAQ',
      sub: 'Everything you need to know about batch QR creation and enterprise deployment.'
    }
  },
  faq: [
    {
      q: 'How many QR codes can I generate in bulk at once?',
      a: 'You can generate hundreds of QR codes simultaneously without any artificial limits. Because all processing is handled client-side in your web browser, generation is lightning-fast and respects your computer memory without queueing delays.'
    },
    {
      q: 'What is the difference between bulk static QR codes and dynamic QR codes?',
      a: 'Bulk static QR codes encode the exact URL or text directly into the barcode pattern permanently. Dynamic QR codes, by contrast, encode short redirect URLs managed in our platform, allowing you to change the destination URLs anytime after printing and track live scan analytics (visitor devices, geographic locations, and timestamps).'
    },
    {
      q: 'What file format should my CSV upload be in?',
      a: 'Your CSV or TXT file should have one URL or text string per line. Headers are optional. The parser automatically detects and cleans raw URLs, text strings, vCard snippets, and product SKU codes.'
    },
    {
      q: 'Can I download all generated QR codes in a single ZIP file?',
      a: 'Yes. Once batch generation finishes, clicking "Download All (ZIP)" bundles every generated high-resolution PNG or vector SVG barcode into a single, organized ZIP file with clean filenames matching your input data.'
    },
    {
      q: 'Are bulk QR codes private and secure?',
      a: 'Yes, 100%. All bulk rendering happens in your local browser sandbox using client-side JavaScript. Your batch data, customer URLs, and product inventory serial numbers are never uploaded to or stored on external servers.'
    },
    {
      q: 'What print resolution and error correction should I use for bulk labels?',
      a: 'We generate high-resolution 800x800px files by default (or vector SVG for infinite scalability). We apply Level H error correction (30% data redundancy) to ensure barcodes remain 100% scannable even on textured packaging or curved bottles.'
    }
  ]
};

export default en;
