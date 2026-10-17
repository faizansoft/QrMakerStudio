export interface ScannerFaq {
  q: string;
  a: string;
}

export interface ScannerCopy {
  hero: { badge: string; h1: string; lead: string };
  viewport: { title: string; hint: string };
  controls: { startCamera: string; stopScanning: string; uploadImage: string };
  errors: { camera: string; noCode: string };
  result: { decoded: string; copy: string; copied: string; openLink: string };
  article: {
    s1: { badge: string; h2: string; paragraphs: string[] };
    s2: { badge: string; h2: string; intro: string; cards: { title: string; body: string }[] };
    s3: { h2: string; intro: string; cards: { title: string; body: string }[] };
    s4: { h2: string; intro: string; items: { title: string; body: string }[] };
    s5: { h2: string; headers: [string, string, string]; rows: [string, string, string][] };
    s6: { h2: string; sub: string };
  };
  faq: ScannerFaq[];
}
