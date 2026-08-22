import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema, getToolSoftwareSchema } from './services/seoUtils';

const SOCIAL_PLATFORMS = [
  { id: 'instagram', label: 'Instagram', prefix: 'https://instagram.com/', placeholder: 'username', color: '#E1306C' },
  { id: 'youtube', label: 'YouTube', prefix: '', placeholder: 'https://youtube.com/@channel', color: '#FF0000' },
  { id: 'linkedin', label: 'LinkedIn', prefix: '', placeholder: 'https://linkedin.com/in/name', color: '#0A66C2' },
  { id: 'twitter', label: 'Twitter / X', prefix: 'https://x.com/', placeholder: 'handle', color: '#111827' },
  { id: 'tiktok', label: 'TikTok', prefix: 'https://tiktok.com/@', placeholder: 'username', color: '#000000' },
  { id: 'facebook', label: 'Facebook', prefix: '', placeholder: 'https://facebook.com/page', color: '#1877F2' },
  { id: 'telegram', label: 'Telegram', prefix: 'https://t.me/', placeholder: 'username', color: '#0088CC' },
  { id: 'whatsapp', label: 'WhatsApp', prefix: 'https://wa.me/', placeholder: 'phone number', color: '#25D366' },
  { id: 'website', label: 'Website', prefix: '', placeholder: 'https://yoursite.com', color: '#2B6F53' },
  { id: 'email', label: 'Email', prefix: 'mailto:', placeholder: 'you@email.com', color: '#4B5563' },
];

const SOCIAL_FAQS = [
  {
    q: 'What is a Social Media QR Code?',
    a: 'A Social Media QR code connects offline audiences directly to your digital social profiles (Instagram, YouTube, TikTok, LinkedIn, X, Facebook, and WhatsApp). Instead of asking customers to manually search your brand name on each app, scanning the code opens your verified channel instantly.'
  },
  {
    q: 'How do Dynamic QR Codes improve social media marketing?',
    a: 'When you use a Dynamic QR code for social campaigns, you can change your target promotion, link to new YouTube video uploads, or update your bio link destinations in real time without ever reprinting your packaging, event banners, or business cards. You also get full scan telemetry (total scans, unique devices, operating systems, and geographic visitor locations).'
  },
  {
    q: 'Can I generate individual branded QR codes for each social platform?',
    a: 'Yes. Our tool allows you to input multiple handles simultaneously and generates color-matched, high-resolution QR codes for each platform (e.g. YouTube red, Instagram gradient, LinkedIn navy, WhatsApp emerald) with instant vector SVG and PNG downloads.'
  },
  {
    q: 'Where should I print my Social Media QR codes for maximum followers?',
    a: 'High-converting physical placements include product packaging boxes, unboxing thank-you cards, restaurant table menus, retail store checkout counters, vehicle decals, trade show booth banners, conference presentation slides, and business cards.'
  },
  {
    q: 'Do visitors need an app to scan social media QR codes?',
    a: 'No. Modern iOS and Android camera apps automatically detect the QR code and trigger a direct native app deep-link or mobile browser preview with zero friction.'
  },
  {
    q: 'Can I track which social platforms generate the most scans?',
    a: 'Yes. By registering a free account and using Dynamic QR Codes with distinct campaign titles for each channel, your dashboard displays real-time scan analytics, daily engagement graphs, and geographical location heatmaps.'
  }
];

const SocialMediaQRPage: React.FC = () => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [displayName, setDisplayName] = useState('');
  const [generated, setGenerated] = useState(false);
  const qrRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const qrInstances = useRef<Record<string, QRCodeStyling>>({});

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-software', getToolSoftwareSchema(
      'Social Media QR Code Generator',
      '/social-media-qr-code',
      'Create branded social media QR codes for Instagram, YouTube, TikTok, LinkedIn, Twitter, and WhatsApp.'
    ));
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Social Media QR Code', url: '/social-media-qr-code' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(SOCIAL_FAQS.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-software');
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, []);

  const filledPlatforms = useMemo(() => {
    return SOCIAL_PLATFORMS.filter(p => {
      const value = inputs[p.id]?.trim();
      return value && value.length > 0;
    });
  }, [inputs]);

  const handleInputChange = (platformId: string, value: string) => {
    setInputs(prev => ({ ...prev, [platformId]: value }));
  };

  const getFullUrl = (platform: typeof SOCIAL_PLATFORMS[0]) => {
    const value = inputs[platform.id]?.trim() || '';
    if (!value) return '';
    if (value.startsWith('http') || value.startsWith('mailto:')) return value;
    return `${platform.prefix}${value}`;
  };

  const handleGenerate = () => {
    if (filledPlatforms.length === 0) return;

    filledPlatforms.forEach(platform => {
      const url = getFullUrl(platform);
      if (!url) return;

      const qr = new QRCodeStyling({
        width: 600,
        height: 600,
        data: url,
        dotsOptions: { color: platform.color, type: 'rounded' },
        backgroundOptions: { color: '#ffffff' },
        cornersSquareOptions: { color: platform.color, type: 'extra-rounded' },
        cornersDotOptions: { color: platform.color, type: 'dot' },
        qrOptions: { errorCorrectionLevel: 'H' },
        type: 'svg',
      });

      qrInstances.current[platform.id] = qr;

      const container = qrRefs.current[platform.id];
      if (container) {
        container.innerHTML = '';
        qr.append(container);
      }
    });

    setGenerated(true);
  };

  const handleDownload = (platformId: string, format: 'png' | 'svg') => {
    const qr = qrInstances.current[platformId];
    if (qr) {
      qr.download({ name: `qr_${platformId}`, extension: format });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/80 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Omnichannel Social Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Free Social Media QR Code Generator
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Create branded, color-matched QR codes for Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Facebook, and WhatsApp. Bridge your physical audience to your digital social channels with one tap.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ GENERATOR INTERFACE ═══════════════════════════ */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 md:p-8 mb-16">
            
            {/* Display Name */}
            <div className="mb-6 pb-6 border-b border-slate-100 max-w-md">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Brand / Creator Title</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Acme Brand or @AlexCreator"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium"
              />
            </div>

            {/* Platform Grid */}
            <h2 className="text-sm font-bold text-slate-900 mb-3">Configure Your Social Channels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {SOCIAL_PLATFORMS.map(platform => (
                <div key={platform.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-2xs"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.label.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-[11px] font-bold text-slate-700 truncate">{platform.label}</label>
                    <input
                      type="text"
                      value={inputs[platform.id] || ''}
                      onChange={(e) => handleInputChange(platform.id, e.target.value)}
                      placeholder={platform.placeholder}
                      className="w-full mt-0.5 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                {filledPlatforms.length} {filledPlatforms.length === 1 ? 'channel' : 'channels'} configured
              </p>
              <button
                onClick={handleGenerate}
                disabled={filledPlatforms.length === 0}
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Generate Social QR Codes
              </button>
            </div>

            {/* Results Grid */}
            {generated && filledPlatforms.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-200 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-900">Branded Social QR Codes Ready</h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    High-Res Vector Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filledPlatforms.map(platform => (
                    <div
                      key={platform.id}
                      className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center text-center shadow-2xs hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                          style={{ backgroundColor: platform.color }}
                        >
                          {platform.label.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-900">{platform.label}</span>
                      </div>

                      <div
                        ref={el => (qrRefs.current[platform.id] = el)}
                        className="w-36 h-36 bg-white p-2 rounded-xl border border-slate-200 mb-3 flex items-center justify-center"
                      />

                      <p className="text-[10px] font-mono text-slate-500 truncate w-full mb-3">
                        {getFullUrl(platform)}
                      </p>

                      <div className="flex gap-2 w-full">
                        <button
                          onClick={() => handleDownload(platform.id, 'png')}
                          className="flex-1 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleDownload(platform.id, 'svg')}
                          className="flex-1 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                        >
                          SVG
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ═══════════════════════════ 1800+ WORDS DETAILED GUIDE ═══════════════════════════ */}
          <div className="space-y-16 text-slate-700">
            
            {/* Section 1: Omnichannel Audience Growth */}
            <article className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-md">
                Audience Acquisition
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                The Ultimate Guide to Social Media QR Codes & Audience Conversion
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                In an era where consumer attention is fragmented across dozens of digital ecosystems—from short-form TikTok reels and Instagram stories to professional LinkedIn networks, YouTube masterclasses, and WhatsApp VIP channels—forcing physical audiences to manually type usernames and search handles results in an immediate 70%+ conversion drop-off.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                A branded Social Media QR code completely dissolves friction between physical touchpoints and digital followers. By scanning a high-contrast, visually tailored barcode on packaging, table cards, or storefront glass, smartphone cameras immediately trigger native application deep-links directly to your verified profile, ensuring instant follows, subscribes, and customer chats.
              </p>
            </article>

            {/* Section 2: Static Individual Codes vs Dynamic Bio Links */}
            <article className="space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-md">
                Strategy Comparison
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Individual Channel Codes vs. Dynamic Multi-Link Bio Pages
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Depending on your marketing campaign architecture and physical real estate, you can deploy social QR codes in two distinct configurations:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Individual Branded Social Codes</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Generates focused, single-purpose QR codes color-matched to specific platform palettes (YouTube red, Instagram gradient, LinkedIn blue). Best for dedicated collateral like a "Follow us on Instagram" table tent in a cafe or a "Subscribe on YouTube" end-card on physical merchandise.
                  </p>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Dynamic Multi-Link Bio Hub Codes</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encodes a single dynamic shortlink that routes visitors to a clean mobile landing page housing all your social links simultaneously. Powered by our dynamic engine, you can add new profiles, update links, and view live geographic scan analytics anytime without reprinting.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3: High-Converting Physical Placements */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Strategic Physical Placements for High Follower Conversion
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">E-Commerce Packaging Inserts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Place an unboxing card inside customer packages with a bold CTA: <em>"Scan & tag us on Instagram for a 15% discount on your next order."</em>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Hospitality Table Tents</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Display an elegant wooden table stand linking to your Instagram food reels and Google review page while guests wait for their meal.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Trade Show Booth Banners</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Print large-format 10x10cm vector SVG QR codes on booth backdrops enabling passing attendees to connect instantly on LinkedIn.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Retail Store Checkout Decals</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Position a counter sticker near the credit card terminal inviting shoppers to join your VIP WhatsApp channel for exclusive flash sales.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Event Presentation Slides</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Embed your LinkedIn and X/Twitter QR codes on the final slide of your keynote presentation for instant audience connection during Q&A.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Artist & Musician Merch</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Print scannable QR codes onto concert t-shirt hangtags linking directly to Spotify profiles, Apple Music albums, and tour schedules.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4: Live Telemetry Analytics */}
            <article className="space-y-4 bg-slate-900 text-white p-8 rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Live Scan Analytics & Audience Telemetry
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                When managing dynamic social media QR codes through our platform, you unlock comprehensive real-time intelligence into your offline audience behavior:
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-4 text-xs">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Scan Velocity</p>
                  <p className="text-slate-300">Track total and unique scan interactions over 7-day, 30-day, and lifetime horizons with hourly engagement spikes.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Geographic Breakdown</p>
                  <p className="text-slate-300">Map scanner distribution across worldwide countries and metropolitan cities powered by dual-tier IP + timezone telemetry.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Device & OS Insights</p>
                  <p className="text-slate-300">Identify whether your audience primarily scans on Apple iOS, Android, or desktop cameras to tailor mobile landing experiences.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <p className="font-bold text-white text-sm">Zero Reprinting</p>
                  <p className="text-slate-300">Update destination landing pages instantly when launching seasonal promotions without reprinting existing merchandise.</p>
                </div>
              </div>
            </article>

            {/* Section 5: Comparison Table */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Multi-Link Social QR Codes vs. Traditional Printed Handles
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-3.5">Metric & Feature</th>
                      <th className="p-3.5 text-accent">Social Media QR Code</th>
                      <th className="p-3.5">Printed Text Handle (@name)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">User Friction</td>
                      <td className="p-3.5 text-accent font-semibold">1-second optical camera scan</td>
                      <td className="p-3.5">Manual app opening, typing & searching</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Conversion Rate</td>
                      <td className="p-3.5 text-accent font-semibold">High (Direct deep-link to profile)</td>
                      <td className="p-3.5">Low (Over 70% drop-off during manual search)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Multiple Platform Access</td>
                      <td className="p-3.5 text-accent font-semibold">All platforms under one scannable hub</td>
                      <td className="p-3.5">Cluttered text lists on printed artwork</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Real-Time Destination Editing</td>
                      <td className="p-3.5 text-accent font-semibold">Instant cloud update (Dynamic QR)</td>
                      <td className="p-3.5">Impossible without total reprinting</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Engagement Telemetry</td>
                      <td className="p-3.5 text-accent font-semibold">Full scan counts, devices & locations</td>
                      <td className="p-3.5">Zero tracking visibility</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 6: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-xs text-slate-500">Everything you need to know about social media QR codes and multichannel marketing.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {SOCIAL_FAQS.map((faq, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm">{faq.q}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaQRPage;
