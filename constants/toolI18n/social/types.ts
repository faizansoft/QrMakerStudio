export interface SocialFaq {
  q: string;
  a: string;
}

export interface SocialCopy {
  hero: { badge: string; h1: string; lead: string };
  brandLabel: string;
  brandPlaceholder: string;
  configureHeading: string;
  /** Keyed by platform id (instagram, youtube, ...). Brand names stay as-is. */
  platforms: { labels: Record<string, string>; placeholders: Record<string, string> };
  channels: (n: number) => string;
  generate: string;
  readyHeading: string;
  readyBadge: string;
  article: {
    s1: { badge: string; h2: string; paragraphs: string[] };
    s2: { badge: string; h2: string; intro: string; cards: { title: string; body: string }[] };
    s3: { h2: string; cards: { title: string; body: string }[] };
    s4: { h2: string; intro: string; items: { title: string; body: string }[] };
    s5: { h2: string; headers: [string, string, string]; rows: [string, string, string][] };
    s6: { h2: string; sub: string };
  };
  faq: SocialFaq[];
}
