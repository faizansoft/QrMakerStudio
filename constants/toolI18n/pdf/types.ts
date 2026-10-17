export interface PdfFaq {
  q: string;
  a: string;
}

export interface PdfCopy {
  hero: { badge: string; h1: string; lead: string };
  form: {
    urlLabel: string;
    urlPlaceholder: string;
    urlHint: string;
    titleLabel: string;
    titlePlaceholder: string;
    qrDots: string;
    background: string;
    cornerEye: string;
    cornerDot: string;
    dotPattern: string;
    cornerShape: string;
    uploadLogo: string;
    changeLogo: string;
    addLogo: string;
    /** keys: rounded, dots, classy, classy-rounded, square, extra-rounded */
    dotStyles: Record<string, string>;
    /** keys: extra-rounded, dot, square */
    cornerShapes: Record<string, string>;
  };
  dynamicBox: { title: string; body: string; cta: string };
  preview: { empty: string; downloadPng: string; downloadSvg: string };
  modal: {
    createdTitle: string;
    saveTitle: string;
    createdBody: string;
    copy: string;
    copied: string;
    myQrCodes: string;
    viewAnalytics: string;
    campaignTitle: string;
    campaignPlaceholder: string;
    targetUrl: string;
    creating: string;
    createButton: string;
  };
  auth: { title: string; subtitle: string };
  article: {
    s1: { badge: string; h2: string; paragraphs: string[] };
    s2: { badge: string; h2: string; intro: string; cards: { title: string; body: string }[] };
    s3: { h2: string; cards: { title: string; body: string }[] };
    s4: { h2: string; steps: { title: string; body: string }[] };
    s5: { h2: string; headers: [string, string, string]; rows: [string, string, string][] };
    s6: { h2: string; sub: string };
  };
  faq: PdfFaq[];
}
