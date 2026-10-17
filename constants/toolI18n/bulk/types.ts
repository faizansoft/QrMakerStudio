export interface BulletPoint {
  /** plain = neutral check, good = positive (emerald), bad = limitation (red) */
  tone: 'plain' | 'good' | 'bad';
  text: string;
}

export interface BulkFaq {
  q: string;
  a: string;
}

export interface BulkCopy {
  hero: { badge: string; h1: string; lead: string };
  input: {
    enterHeading: string;
    uploadCsv: string;
    placeholder: string;
    items: (n: number) => string;
    onePerLine: string;
    foreground: string;
    background: string;
    exportFormat: string;
    formatPng: string;
    formatSvg: string;
    generating: (done: number, total: number) => string;
    generateCount: (n: number) => string;
    generateBatch: string;
  };
  output: {
    rendered: (n: number) => string;
    rendHint: string;
    downloadZip: string;
    cardTitle: (text: string) => string;
    cardOverlay: string;
    emptyTitle: string;
    emptyBody: string;
  };
  article: {
    s1: { badge: string; h2: string; paragraphs: string[] };
    s2: {
      badge: string;
      h2: string;
      intro: string;
      staticCard: { title: string; body: string; points: BulletPoint[] };
      dynamicCard: { title: string; body: string; points: BulletPoint[] };
      recommendation: string;
    };
    s3: { h2: string; intro: string; steps: { title: string; body: string }[] };
    s4: { h2: string; cards: { title: string; body: string }[] };
    s5: { h2: string; headers: [string, string, string]; rows: [string, string, string][] };
    s6: { h2: string; intro: string; cards: { title: string; body: string }[] };
    s7: { h2: string; sub: string };
  };
  faq: BulkFaq[];
}
