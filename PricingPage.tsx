import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getFAQSchema } from './services/seoUtils';

const PRICING_FAQS = [
  {
    q: 'Is QR Generator Online truly 100% free with no hidden paywalls?',
    a: 'Yes. All static QR code generation (URLs, WiFi, vCards, Plain Text, Email, SMS, Phone, WhatsApp, Maps, Crypto, Events, and Google Forms) is 100% free forever with unlimited scans, no expiration dates, and no watermarks. Vector SVG and high-res PNG downloads are completely free.'
  },
  {
    q: 'Do other QR generators really deactivate printed codes after 14 days?',
    a: 'Unfortunately, yes. Many predatory competitor services trick users into generating dynamic codes under "free trial" pretexts, only to deactivate the QR codes after 7 to 14 days unless you subscribe to expensive $25–$45/month recurring plans. At QR Generator Online, our static codes decode permanently offline, and our dynamic platform offers free self-service tracking without extortionate lock-ins.'
  },
  {
    q: 'What is the difference between the Free Community Plan and Dynamic QR Codes?',
    a: 'The Free Community Plan allows you to generate unlimited static QR codes without registering an account. If you need Dynamic QR Codes (which allow you to change the destination URL anytime after printing and view live scan analytics), you can simply create a free account to manage your campaigns.'
  },
  {
    q: 'Are there any limits on how many times my QR codes can be scanned?',
    a: 'No. There are zero scan limits on all generated QR codes. Whether your code is scanned 10 times at a family wedding or 500,000 times on a national consumer product package, it will scan flawlessly without throttling.'
  },
  {
    q: 'Can I export vector SVG files for professional commercial printing?',
    a: 'Yes. Vector SVG export is 100% free on every generator tool. Vector SVG files can be scaled to billboard dimensions without any pixelation or loss of optical sharpness.'
  },
  {
    q: 'How does QR Generator Online offer these tools for free without ads?',
    a: 'Our platform is engineered with modern client-side WebAssembly and browser execution architecture. Because optical barcode rendering happens directly inside your browser rather than consuming expensive cloud compute clusters, our infrastructure costs are exceptionally lean, allowing us to offer industry-grade tools for free.'
  },
  {
    q: 'Can I add my company logo and custom brand colors for free?',
    a: 'Yes. Custom color gradients, corner eye styling, dot patterns, and center logo uploads (with automatic background clearing) are available on all free plans.'
  },
  {
    q: 'Do you offer custom API access and enterprise SLA support?',
    a: 'Yes. For high-volume automated batch generation, custom vanity domain routing (e.g. qr.yourcompany.com), and enterprise security SLAs, contact our enterprise solutions team.'
  }
];

const FEATURE_MATRIX = [
  {
    category: 'Core Barcode Generation',
    features: [
      { name: 'Unlimited Static QR Generation', free: true, pro: true, enterprise: true },
      { name: '14+ Specialized QR Formats (URL, WiFi, vCard, PDF, etc.)', free: true, pro: true, enterprise: true },
      { name: 'High-Resolution 1200×1200px PNG Export', free: true, pro: true, enterprise: true },
      { name: 'Vector SVG Lossless Print Export', free: true, pro: true, enterprise: true },
      { name: 'Permanent Lifetime Validity (Zero Expiration)', free: true, pro: true, enterprise: true },
      { name: 'No Scan Throttling or Monthly Limits', free: true, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Design & Visual Branding',
    features: [
      { name: 'Custom Foreground & Background Hex Palettes', free: true, pro: true, enterprise: true },
      { name: 'Custom Corner Square & Inner Eye Styling', free: true, pro: true, enterprise: true },
      { name: '6 Distinct Dot & Matrix Shapes (Rounded, Dots, Classy)', free: true, pro: true, enterprise: true },
      { name: 'Center Logo & Icon Upload with Margin Protection', free: true, pro: true, enterprise: true },
      { name: '"SCAN ME" Marketing CTA Frames & Badges', free: true, pro: true, enterprise: true },
      { name: 'Real-Time Scannability & Optical Contrast Meter', free: true, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Dynamic Routing & Live Analytics',
    features: [
      { name: 'Editable Destination URLs (Change After Printing)', free: false, pro: true, enterprise: true },
      { name: 'Live Scan Count & Timestamp Velocity Graphs', free: false, pro: true, enterprise: true },
      { name: 'Dual-Tier IP + Timezone Geolocation (Country & City)', free: false, pro: true, enterprise: true },
      { name: 'Device OS Telemetry (Apple iOS vs. Android Share)', free: false, pro: true, enterprise: true },
      { name: 'Custom URL Shortcode Slugs', free: false, pro: true, enterprise: true },
      { name: 'Campaign Tagging & Active/Paused Status Control', free: false, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Enterprise & Production Workflows',
    features: [
      { name: 'Bulk Batch Generation from CSV / Spreadsheets', free: true, pro: true, enterprise: true },
      { name: 'Consolidated ZIP Archive Batch Export', free: true, pro: true, enterprise: true },
      { name: 'In-Browser Optical QR Camera & Image Scanner', free: true, pro: true, enterprise: true },
      { name: 'Custom Vanity Short Domain Routing', free: false, pro: false, enterprise: true },
      { name: 'High-Volume REST API Integration', free: false, pro: false, enterprise: true },
      { name: 'Dedicated Account Manager & Uptime SLA', free: false, false: false, enterprise: true },
    ]
  }
];

const PricingPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads. Setting them here raced that effect and
    // replaced the prerendered values with different text.

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Pricing', url: '/pricing' }
    ]));
    injectJSONLD('jsonld-faq', getFAQSchema(PRICING_FAQS.map(f => ({ question: f.q, answer: f.a }))));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
      removeJSONLD('jsonld-faq');
    };
  }, [t]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ═══════════════════════════ HERO BANNER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-14 pb-14 md:pt-18 md:pb-20 border-b border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Radical Transparency
          </div>
          <h1 className="h1-page mb-4">
            100% Free Forever. No Hidden Paywalls.
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Generate unlimited static and dynamic QR codes with vector SVG downloads, custom brand palettes, and zero expiration limits. No credit card required.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ PRICING CARDS ═══════════════════════════ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">

            {/* 1. Free Community Tier */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-lg mb-4">
                  Individual & Creator
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-1">Free Community</h2>
                <p className="text-xs text-slate-500 mb-6">Standard static generation for personal and physical print use.</p>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-5xl font-black text-slate-900">$0</span>
                  <span className="text-xs text-slate-500 font-semibold">/ lifetime free</span>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Unlimited</strong> Static QR Codes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Vector SVG</strong> & 1200px PNG Export</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Custom Colors</strong>, Dots & Corner Eyes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Center Logo Upload</strong> Integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>All 14+ QR Formats</strong> (WiFi, vCard, PDF)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>No Registration Required</strong></span>
                  </li>
                </ul>
              </div>

              <Link
                to="/"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-center block text-xs transition-colors shadow-xs"
              >
                Start Generating Now
              </Link>
            </div>

            {/* 2. Dynamic Pro (Featured Free Account) */}
            <div className="bg-white rounded-2xl p-8 border-2 border-accent shadow-xl flex flex-col justify-between relative overflow-hidden transform md:-translate-y-2">
              <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-xs">
                Recommended
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider rounded-lg mb-4">
                  Growth & Business
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-1">Dynamic Studio</h2>
                <p className="text-xs text-slate-500 mb-6">For brands needing real-time destination editing & scan analytics.</p>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-5xl font-black text-slate-900">$0</span>
                  <span className="text-xs text-slate-500 font-semibold">/ free account</span>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5 font-semibold text-slate-900">
                    <span className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>Everything in Free Community</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Editable Destination URLs</strong> Anytime</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Live Telemetry Analytics</strong> & Scan Velocity</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Country & City Geo Insights</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Apple iOS vs. Android Share</strong> Tracking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Bulk CSV Batch Generation</strong> + ZIP</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/signup"
                className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl text-center block text-xs transition-colors shadow-xs"
              >
                Create Free Account
              </Link>
            </div>

            {/* 3. Enterprise & High-Volume */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-white/10 text-emerald-400 text-[11px] font-bold uppercase tracking-wider rounded-lg mb-4">
                  Scale & Infrastructure
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 text-white">Enterprise Custom</h2>
                <p className="text-xs text-slate-400 mb-6">For high-throughput ERP systems, packaging lines, and franchises.</p>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                  <span className="text-5xl font-black text-white">Custom</span>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>High-Volume REST API</strong> Key Access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Custom Vanity Domain</strong> (qr.yourbrand.com)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>White-Label Redirect Tables</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>Single Sign-On (SSO / SAML)</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span><strong>99.99% Uptime SLA Agreement</strong></span>
                  </li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-[#A8D5C2] border border-[#A8D5C2]/30 font-bold rounded-2xl text-center block text-xs transition-colors"
              >
                Contact Enterprise Team
              </Link>
            </div>

          </div>

          {/* ═══════════════════════════ DETAILED 1800+ WORDS CONTENT ═══════════════════════════ */}
          <div className="space-y-16 text-slate-700">

            {/* Section 1: The Predatory Subscription Trap vs Transparent Free */}
            <article className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-lg">
                Industry Analysis
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                The Truth About QR Code Generator Pricing: Avoiding the "Free Trial" Trap
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                If you have ever printed a QR code on wedding invitations, storefront menus, or product packaging only to discover two weeks later that your QR code redirects to an extortionate paywall screen saying <em>"This campaign has expired—upgrade to Pro for $35/month,"</em> you have experienced the widespread predatory monetization of legacy QR code generators.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Many high-ranking generator websites deliberately obscure the distinction between static barcodes and dynamic cloud redirects. They route user links through their own domain by default, wait until the user has spent hundreds of dollars on physical printing, and then hold the live URL hostage behind recurring monthly subscriptions.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                <strong>QR Generator Online was founded on a strict anti-lock-in philosophy:</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-2">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1 text-xs">
                  <p className="font-bold text-slate-900 text-sm">1. True Static Independence</p>
                  <p className="text-slate-600">Static barcodes encode your exact URL or text payload directly into the 2D matrix. They decode completely offline and work for 100+ years without contacting our servers.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1 text-xs">
                  <p className="font-bold text-slate-900 text-sm">2. Free Vector Prepress SVG</p>
                  <p className="text-slate-600">We never charge for vector SVG, EPS, or 1200px PNG downloads. Graphic designers and print houses get professional master assets for $0.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1 text-xs">
                  <p className="font-bold text-slate-900 text-sm">3. Transparent Dynamic Tier</p>
                  <p className="text-slate-600">Our dynamic management suite provides real-time destination editing and scan analytics freely without sudden deactivations.</p>
                </div>
              </div>
            </article>

            {/* Section 2: Complete Feature Matrix Table */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Comprehensive Feature Comparison Matrix</h2>
                <p className="text-xs text-slate-500">Compare features across our Free Community, Dynamic Studio, and Enterprise tiers.</p>
              </div>

              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="p-4 w-1/2">Features & Capabilities</th>
                      <th className="p-4 text-center">Free Community</th>
                      <th className="p-4 text-center text-accent font-black">Dynamic Studio</th>
                      <th className="p-4 text-center">Enterprise Custom</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FEATURE_MATRIX.map((group, gIdx) => (
                      <React.Fragment key={gIdx}>
                        <tr className="bg-slate-100/70">
                          <td colSpan={4} className="p-3 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                            {group.category}
                          </td>
                        </tr>
                        {group.features.map((feat, fIdx) => (
                          <tr key={fIdx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-slate-700 font-medium">{feat.name}</td>
                            <td className="p-3.5 text-center">
                              {feat.free ? <span className="text-accent font-bold text-sm" aria-label="Included">✓</span> : <span className="text-slate-500 font-bold" aria-label="Not included">—</span>}
                            </td>
                            <td className="p-3.5 text-center bg-accent/5">
                              {feat.pro ? <span className="text-accent font-bold text-sm" aria-label="Included">✓</span> : <span className="text-slate-500 font-bold" aria-label="Not included">—</span>}
                            </td>
                            <td className="p-3.5 text-center">
                              {feat.enterprise ? <span className="text-accent font-bold text-sm" aria-label="Included">✓</span> : <span className="text-slate-500 font-bold" aria-label="Not included">—</span>}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            {/* Section 3: Return on Investment (ROI) for Businesses */}
            <article className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-lg">
                Financial Impact
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Business ROI: Eliminating Printing & Marketing Waste
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                For hospitality venues, consumer packaged goods (CPG) brands, and real estate agencies, switching from static print collateral to managed dynamic QR codes delivers immediate measurable cost reductions:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-4 text-xs">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Restaurant Menu Savings</h3>
                  <p className="text-slate-600 leading-relaxed">
                    A 30-table bistro updating seasonal menus 4 times per year typically spends $1,200 to $2,400 annually on physical lamination. A single dynamic QR stand eliminates 100% of reprinting costs.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Product Packaging Flexibility</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Manufacturing 10,000 product boxes with a static URL risks total loss if landing pages change. Dynamic shortcodes allow marketing directors to swap promotional destinations instantly.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Real-Time Channel Attribution</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Deploy distinct QR codes across billboards, bus shelters, and magazine inserts to benchmark regional scan velocity and allocate advertising budget to top-performing channels.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4: Architecture of Free */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                How QR Generator Online Provides Free Tools Sustainably
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Unlike legacy platforms built in 2010 that rely on massive server farms rendering raster images on backend clusters, QR Generator Online was built using modern web architecture:
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-xl bg-accent text-white font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Browser-Native WebAssembly Compilation</h3>
                    <p className="text-slate-600 mt-1">2D matrix polynomial calculations happen directly in your device GPU and CPU memory. We pay $0 for server-side image processing, and you experience instant sub-second rendering.</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-xl bg-accent text-white font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Serverless Edge Routing</h3>
                    <p className="text-slate-600 mt-1">Dynamic shortlinks are resolved through ultra-fast globally distributed edge CDN networks with low overhead, ensuring sub-50ms redirect speeds worldwide.</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-xl bg-accent text-white font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Enterprise Partnerships Fund Community Tools</h3>
                    <p className="text-slate-600 mt-1">Large enterprise organizations that require custom dedicated SLA contracts, vanity white-label domains, and high-volume API access fund our free community infrastructure for individual creators and small businesses.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 5: FAQ */}
            <article className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Pricing & Licensing FAQ</h2>
                <p className="text-xs text-slate-500">Transparent answers to all your pricing, commercial usage, and licensing questions.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {PRICING_FAQS.map((faq, idx) => (
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

export default PricingPage;
