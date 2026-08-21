import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema, getOrganizationSchema } from './services/seoUtils';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "About QR Generator Online | Free Custom QR Code Generator & Platform";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Discover the story behind QR Generator Online: Our privacy-first mission to provide free, permanent, high-resolution QR codes for websites, WiFi, vCards, social media, and commercial print without subscriptions.');
    }

    injectJSONLD('jsonld-organization', getOrganizationSchema());
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [t]);

  return (
    <div className="animate-in pb-24 bg-white">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-16 pb-20 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
            Our Mission & Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Democratizing Permanent, Custom QR Codes for Everyone
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
            We believe a high-resolution, branded QR code is a permanent digital asset that should belong to you forever — without monthly subscription paywalls or scan limits.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ MAIN CONTENT CONTAINER ═══════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* ──── SECTION 1: THE STORY BEHIND QR GENERATOR ONLINE ──── */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-green-100 text-accent text-xs font-bold uppercase rounded-md">
              The Anti-Subscription Manifesto
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Why We Built a 100% Free, Permanent QR Code Platform
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For years, the QR code generator industry has been dominated by predatory subscription models. Small business owners, event organizers, and creators print QR codes on thousands of flyers, business cards, or product packaging, only to find their codes deactivated months later when a trial ends or a billing credit card changes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At <strong>QR Generator Online</strong>, we specialize in <strong>Static QR Codes</strong>. A static QR code mathematically encodes your payload—whether a <Link to="/url-qr-code-generator" className="text-accent font-bold hover:underline">website URL</Link>, <Link to="/vcard-qr-code-generator" className="text-accent font-bold hover:underline">vCard digital business card</Link>, or <Link to="/wifi-qr-code-generator" className="text-accent font-bold hover:underline">WiFi network password</Link>—directly into the physical barcode matrix.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because the data is self-contained within the visual modules, your QR code will work for as long as your printed media exists—with zero scan caps, zero redirects, and zero hidden recurring fees.
            </p>
          </div>

          <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-[#BEF392]">Why Creators Trust Us</h3>
            <ul className="space-y-4 text-sm md:text-base text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-[#BEF392] font-bold text-lg">✓</span>
                <span><strong>Zero Expiration:</strong> Static QR codes work permanently forever.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#BEF392] font-bold text-lg">✓</span>
                <span><strong>Vector SVG Download:</strong> Export <Link to="/svg-qr-code-generator" className="text-[#BEF392] underline font-bold">Scalable Vector Graphics</Link> for crisp commercial print press production.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#BEF392] font-bold text-lg">✓</span>
                <span><strong>Logo Integration:</strong> Add your brand <Link to="/qr-code-with-logo" className="text-[#BEF392] underline font-bold">logo to QR codes</Link> with Level H error correction.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#BEF392] font-bold text-lg">✓</span>
                <span><strong>Browser-Based Privacy:</strong> 100% client-side JavaScript execution — your data never hits external servers.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ──── SECTION 2: COMPLETE INDEX OF ALL 13 QR CODE TYPES ──── */}
        <section className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-3xl border border-neutral-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Supported Specialized QR Code Types</h2>
            <p className="text-gray-600 text-base">
              Explore our 13 specialized QR Code generators, each engineered for a specific communication channel:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/url-qr-code-generator" className="text-accent hover:underline">URL Website Link QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Convert web links, portfolios, and landing pages into scannable barcodes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/wifi-qr-code-generator" className="text-accent hover:underline">WiFi Network QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Share guest WPA2/WPA3 WiFi credentials without typing long passwords.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/vcard-qr-code-generator" className="text-accent hover:underline">vCard Digital Business Card</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Save phone numbers, emails, titles, and company details directly into phone contacts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/whatsapp-qr-code-generator" className="text-accent hover:underline">WhatsApp Chat QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Start instant WhatsApp conversations with pre-filled customer service messages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/text-qr-code-generator" className="text-accent hover:underline">Plain Text QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Encode raw text, promo codes, and instructions that display completely offline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/email-qr-code-generator" className="text-accent hover:underline">Email Message QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pre-fill recipient email addresses, subject lines, and feedback copy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/sms-qr-code-generator" className="text-accent hover:underline">SMS Text Message QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trigger opt-in SMS keywords and mobile text subscriptions with one tap.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/phone-qr-code-generator" className="text-accent hover:underline">Phone Call QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trigger one-tap mobile telephone dialing for service trucks and hotline posters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/facebook-qr-code-generator" className="text-accent hover:underline">Social Media QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct foot traffic straight to your Facebook, Instagram, or social channels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/location-qr-code-generator" className="text-accent hover:underline">Google Maps Location QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Guide visitors to your store, open house, or wedding venue via GPS navigation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/event-qr-code-generator" className="text-accent hover:underline">iCalendar Event QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Add conference dates, concerts, and parties directly to smartphone calendars.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/crypto-qr-code-generator" className="text-accent hover:underline">Crypto Payment QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Receive Bitcoin, Ethereum, and USDT crypto wallet payments without typing errors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-2 hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-gray-900 text-base">
                <Link to="/googleform-qr-code-generator" className="text-accent hover:underline">Google Forms Survey QR Code</Link>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct customers and students to Google Forms surveys and feedback questionnaires.
              </p>
            </div>
          </div>
        </section>

        {/* ──── SECTION 3: CORE PLATFORM DESIGN FEATURES ──── */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Advanced Design & Export Engine</h2>
            <p className="text-gray-600 text-base">
              QR Generator Online gives designers and marketers full creative control over barcode aesthetics:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">
                🖼️ <Link to="/qr-code-with-logo" className="text-accent hover:underline">Custom Logo Integration</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Upload your PNG/JPEG logo or pick social icons. Automatic Level H error correction ensures your logo sits cleanly in the center without affecting scannability.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">
                🎨 <Link to="/custom-qr-codes" className="text-accent hover:underline">Designer Dot Patterns & Shapes</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Customize pattern dot geometry (rounded, dots, classy, smooth) as well as outer corner square frames and inner eye shapes.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">
                🌈 <Link to="/colored-qr-code-generator" className="text-accent hover:underline">Custom Brand Color Palettes</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Assign corporate HEX colors to patterns, backgrounds, and corner eyes for seamless brand consistency across marketing campaigns.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">
                📐 <Link to="/svg-qr-code-generator" className="text-accent hover:underline">Scalable Vector SVG Exports</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Download pure XML vector files designed for commercial offset printing presses, Adobe Illustrator, Canva, and highway billboards.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">
                🖼️ <Link to="/high-resolution-qr-codes" className="text-accent hover:underline">1000px+ HD Raster Downloads</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Export high-definition 1000×1000px PNG and WebP files exceeding standard 300 DPI print requirements for magazines and posters.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">
                📚 <Link to="/blog" className="text-accent hover:underline">Industry Guides & Insights</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Read our in-depth tutorials on <Link to="/blog/qr-codes-for-restaurants" className="text-accent underline">restaurant menus</Link>, <Link to="/blog/printing-qr-codes-guide" className="text-accent underline">commercial print standards</Link>, and <Link to="/blog/qr-codes-for-real-estate" className="text-accent underline">real estate lead capture</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ──── SECTION 4: PRIVACY & SECURITY FIRST ARCHITECTURE ──── */}
        <section className="bg-gray-900 text-white rounded-3xl p-10 md:p-14 space-y-6 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block px-3 py-1 bg-[#BEF392] text-gray-900 text-xs font-bold uppercase rounded-md">
              Client-Side Security Architecture
            </div>
            <h2 className="text-3xl font-bold text-white">Browser-Based Local Processing</h2>
            <p className="text-white/80 leading-relaxed text-base">
              Unlike web platforms that process data on remote cloud servers, all barcode matrix compilation in QR Generator Online occurs locally inside your web browser via client-side JavaScript.
            </p>
            <p className="text-white/70 leading-relaxed text-sm">
              Your sensitive website URLs, confidential WiFi passphrases, personal vCard phone numbers, and customer data never leave your computer or phone. We do not track, log, or store your payload content in external databases.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                to="/privacy"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-sm transition-colors shadow-md"
              >
                View Privacy Policy
              </Link>
              <Link
                to="/"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-sm transition-colors"
              >
                Start Creating QR Codes
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;