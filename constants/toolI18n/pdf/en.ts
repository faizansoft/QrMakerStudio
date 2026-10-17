import type { PdfCopy } from './types';

const en: PdfCopy = {
  hero: {
    badge: 'Document & Menu Suite',
    h1: 'Free PDF to QR Code Generator',
    lead: 'Convert digital menus, brochures, product catalogs, and whitepapers into branded, high-resolution QR codes. Enable instant smartphone viewing with zero app download and editable dynamic updates.'
  },
  form: {
    urlLabel: 'PDF Document / Menu URL',
    urlPlaceholder: 'https://drive.google.com/file/... or https://yoursite.com/menu.pdf',
    urlHint: 'Paste a direct PDF link, Google Drive share link, Dropbox link, or hosted document URL.',
    titleLabel: 'Document / Campaign Title (Optional)',
    titlePlaceholder: 'e.g. Summer Dinner Menu 2026 or Product Catalog',
    qrDots: 'QR Dots',
    background: 'Background',
    cornerEye: 'Corner Eye',
    cornerDot: 'Corner Dot',
    dotPattern: 'Dot Pattern',
    cornerShape: 'Corner Shape',
    uploadLogo: 'Upload Logo',
    changeLogo: 'Change Logo',
    addLogo: 'Add Logo',
    dotStyles: {
      rounded: 'Rounded',
      dots: 'Dots',
      classy: 'Classy',
      'classy-rounded': 'Classy Rounded',
      square: 'Square',
      'extra-rounded': 'Extra Rounded'
    },
    cornerShapes: {
      'extra-rounded': 'Extra Rounded',
      dot: 'Circle Dot',
      square: 'Square'
    }
  },
  dynamicBox: {
    title: 'Make PDF QR Code Dynamic',
    body: 'Update your seasonal menu or PDF document anytime without reprinting your table stands.',
    cta: 'Save as Dynamic QR ⚡'
  },
  preview: {
    empty: 'Enter a PDF URL above to preview',
    downloadPng: 'Download PNG',
    downloadSvg: 'SVG (Vector)'
  },
  modal: {
    createdTitle: 'Dynamic PDF QR Created!',
    saveTitle: 'Save Dynamic PDF QR Code',
    createdBody: 'Your PDF is now linked to a dynamic shortlink. You can change your PDF destination anytime from your dashboard!',
    copy: 'Copy',
    copied: 'Copied',
    myQrCodes: 'My QR Codes',
    viewAnalytics: 'View Analytics',
    campaignTitle: 'Campaign Title',
    campaignPlaceholder: 'e.g. Main Dining Menu',
    targetUrl: 'Target PDF URL',
    creating: 'Creating Link...',
    createButton: 'Create Dynamic PDF QR Code'
  },
  auth: {
    title: 'Create Account for Dynamic PDF QR',
    subtitle: 'Sign in or register to update your PDF document anytime without reprinting.'
  },
  article: {
    s1: {
      badge: 'Document Digitalization',
      h2: 'The Complete Guide to PDF QR Codes for Menus, Catalogs & Documents',
      paragraphs: [
        'In commercial dining, trade conferences, real estate sales, and corporate education, printing physical multi-page paper catalogs or laminated restaurant menus is expensive, environmentally wasteful, and impossible to update once printed. A single price modification or seasonal menu overhaul previously required thousands of dollars in complete reprint runs.',
        'A PDF to QR Code bridges the physical world to rich, high-resolution digital documents. When placed on table tents, product packaging, exhibition booths, or storefront windows, customers simply aim their smartphone cameras to open your full PDF brochure, digital menu, or technical instruction manual in seconds—without downloading any specialized apps or typing complex web addresses.'
      ]
    },
    s2: {
      badge: 'Menu Management',
      h2: 'Static vs. Dynamic PDF QR Codes: Updating Menus Without Reprinting',
      intro: 'When printing QR codes on physical acrylic stands, metal table plates, or permanent vinyl banners, choosing between static and dynamic codes determines whether your printed assets can adapt over time:',
      cards: [
        {
          title: 'Static PDF QR Code',
          body: 'Encodes the permanent link directly into the 2D pixel matrix. If your Google Drive URL changes, or if you rename your server file, the printed code breaks permanently and cannot be fixed without a complete reprinting run.'
        },
        {
          title: 'Dynamic PDF QR Code (Recommended)',
          body: 'Encodes a permanent short redirect link (`qr-generator.online/r/menu`). Whenever you update your weekly specials, adjust beverage pricing, or release a new product catalog edition, you simply update the target URL in your dashboard. The physical table stands remain 100% functional.'
        }
      ]
    },
    s3: {
      h2: 'Industry Applications for PDF QR Codes',
      cards: [
        { title: 'Restaurants & Wine Bars', body: 'Display contactless table QR stands linking to your full food and cocktail PDF menu with allergy warnings and high-resolution food photography.' },
        { title: 'Real Estate Property Flyers', body: 'Add PDF QR codes to yard signs and listing flyers to provide buyers with comprehensive architectural blueprints, HOA documentation, and floor plans.' },
        { title: 'Product Packaging Manuals', body: 'Replace bulky multi-language printed instruction booklets with a single compact QR code linking to an interactive multilingual PDF user guide.' },
        { title: 'Medical & Pharmaceutical Inserts', body: 'Provide patients and healthcare professionals with downloadable clinical dosage guidelines, safety datasheets, and prescribing documentation.' },
        { title: 'Academic & Research Posters', body: 'Include QR codes in the bottom corner of scientific conference presentation posters to let attendees download full peer-reviewed research papers.' },
        { title: 'B2B Trade Show Catalogs', body: 'Eliminate heavy printed wholesale product binders by providing buyers with a scannable badge link to your complete wholesale price list.' }
      ]
    },
    s4: {
      h2: 'Step-by-Step Tutorial: How to Host & Generate a PDF QR Code',
      steps: [
        { title: 'Upload PDF to Cloud Storage or Your Website', body: 'Upload your menu or brochure PDF to Google Drive, Dropbox, Microsoft OneDrive, or your WordPress/Shopify media library.' },
        { title: 'Set Share Permissions to "Public"', body: 'In Google Drive or Dropbox, ensure access is configured to **"Anyone with the link can view"** so customers never encounter login walls.' },
        { title: 'Paste Link & Customize Brand Colors', body: 'Paste the shareable URL into the generator field above, customize your brand palette, upload your restaurant or business logo, and download high-resolution print files.' }
      ]
    },
    s5: {
      h2: 'Digital PDF QR Code vs. Traditional Paper Menus & Brochures',
      headers: ['Feature & Factor', 'PDF to QR Code Menu', 'Physical Printed Paper Menu'],
      rows: [
        ['Cost of Updating Items / Pricing', '$0 (Instant cloud update via Dynamic QR)', '$200–$1,500+ per complete reprint run'],
        ['Cleanliness & Hygiene', '100% Contactless on customer phone', 'Requires sanitizing physical laminates'],
        ['Page Capacity & Imagery', 'Unlimited pages with zoomable photos', 'Constrained by physical booklet size'],
        ['Analytics & Engagement Tracking', 'Live scan counts, times, and devices', 'Zero tracking data']
      ]
    },
    s6: {
      h2: 'PDF QR Code FAQ',
      sub: 'Everything you need to know about creating PDF QR codes and digital menus.'
    }
  },
  faq: [
    {
      q: 'How does a PDF to QR Code work?',
      a: 'A PDF QR code connects physical materials (restaurant menus, brochures, product packaging, catalogs) to a digital PDF document hosted online (such as Google Drive, Dropbox, OneDrive, or your website server). When scanned, the visitor’s smartphone camera opens the PDF document instantly in their mobile browser.'
    },
    {
      q: 'Can I change or update the PDF document after printing the QR code?',
      a: 'Yes, if you use a Dynamic QR Code! With our dynamic platform, you can update the destination PDF URL or upload a new seasonal menu anytime from your dashboard without ever reprinting your physical flyers, table stands, or product packaging.'
    },
    {
      q: 'How do I generate a QR code for a Google Drive or Dropbox PDF?',
      a: 'Upload your PDF to Google Drive or Dropbox, set the sharing permissions to "Anyone with the link can view", copy the shareable link, paste it into our generator above, and click Generate. Our system automatically optimizes the link for mobile scanning.'
    },
    {
      q: 'What is the recommended PDF file size for fast QR code scanning?',
      a: 'We recommend compressing your PDF file size to under 5MB (ideally under 2MB). Large multi-page PDF files can cause slow loading times on cellular mobile connections when customers scan your QR code.'
    },
    {
      q: 'Can I track how many people scan and view my PDF QR code?',
      a: 'Yes. By saving your PDF QR code as a free Dynamic QR code, your dashboard tracks total scan counts, unique visitors, scan dates, device operating systems (iOS vs Android), and geographic locations (country and city).'
    },
    {
      q: 'Can I customize the design and add my restaurant or business logo?',
      a: 'Yes. You can customize the QR foreground and background colors, dot styles (rounded, classy, dots), corner square shapes, and upload your high-resolution business logo to display in the center.'
    }
  ]
};

export default en;
