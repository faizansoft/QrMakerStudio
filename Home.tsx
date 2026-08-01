import React, { useState, useRef, useEffect, useMemo } from 'react';
import QRCodeStyling from 'qr-code-styling';

// ── Tab definitions matching TQRCG ──
const TABS = [
  { id: 'url', label: 'URL', icon: '🔗', description: 'Redirect to an existing web URL', placeholder: 'Enter URL', inputType: 'url', hint: 'Try something like https://example.com/' },
  { id: 'text', label: 'Plain Text', icon: '📝', description: 'Encode plain text into a QR Code', placeholder: 'Enter your text', inputType: 'textarea', hint: 'Type any message or text content' },
  { id: 'vcard', label: 'Contact', icon: '👤', description: 'Share contact information instantly', placeholder: 'Full Name', inputType: 'text', hint: 'Create a digital business card' },
  { id: 'wifi', label: 'WiFi', icon: '📶', description: 'Share WiFi credentials via QR Code', placeholder: 'Network Name (SSID)', inputType: 'text', hint: 'Let others join your WiFi instantly' },
  { id: 'email', label: 'Email', icon: '📧', description: 'Create a pre-filled email QR Code', placeholder: 'recipient@example.com', inputType: 'email', hint: 'Recipients can email you with one scan' },
  { id: 'sms', label: 'SMS', icon: '💬', description: 'Create a pre-filled SMS QR Code', placeholder: '+1 234 567 890', inputType: 'tel', hint: 'Recipients can text you with one scan' },
  { id: 'phone', label: 'Phone', icon: '📞', description: 'Make a phone call with one scan', placeholder: '+1 234 567 890', inputType: 'tel', hint: 'One scan to dial your number' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💚', description: 'Start a WhatsApp conversation', placeholder: '+1 234 567 890', inputType: 'tel', hint: 'Open a WhatsApp chat instantly' },
  { id: 'facebook', label: 'Social', icon: '🌐', description: 'Link to your social media profile', placeholder: 'https://facebook.com/username', inputType: 'url', hint: 'Share your social media presence' },
  { id: 'location', label: 'Location', icon: '📍', description: 'Share a map location', placeholder: 'Enter Google Maps URL', inputType: 'url', hint: 'Share any location on the map' },
  { id: 'event', label: 'Event', icon: '📅', description: 'Create a calendar event QR Code', placeholder: 'Event Name', inputType: 'text', hint: 'Add events to calendars with one scan' },
  { id: 'crypto', label: 'Crypto', icon: '₿', description: 'Share cryptocurrency payment address', placeholder: 'Wallet Address', inputType: 'text', hint: 'Receive crypto payments easily' },
  { id: 'googleform', label: 'Google Form', icon: '📋', description: 'Link to a Google Form survey', placeholder: 'https://forms.google.com/...', inputType: 'url', hint: 'Collect responses with a simple scan' },
];

// ── Step data ──
const STEPS = [
  {
    number: 1,
    title: 'Choose your QR Code type',
    description: 'Choose your QR Code type based on what you want it to do: open a URL, share WiFi, display contact info, send an email, and more.',
    emoji: '🎯',
  },
  {
    number: 2,
    title: 'Fill in the details',
    description: 'Enter the content for your QR Code. Add a URL, text, contact details, or any other information you want to encode.',
    emoji: '✏️',
  },
  {
    number: 3,
    title: 'Download your QR Code',
    description: 'Your QR Code is generated instantly. Download it in high resolution PNG, SVG, or WebP formats for print and digital use.',
    emoji: '⬇️',
  },
];

// ── Features data ──
const FEATURES = [
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description: 'Customize colors, patterns, corner styles, and add your logo for branded QR Codes that match your identity.',
  },
  {
    icon: '📐',
    title: 'High Resolution',
    description: 'Export in 1000×1000px resolution. Download as PNG, SVG, or WebP for perfect quality in print and digital.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'All QR Code generation happens in your browser. No data is sent to any server. Your information stays private.',
  },
  {
    icon: '⚡',
    title: 'Instant Generation',
    description: 'Create QR Codes in seconds with real-time preview. No waiting, no loading — see changes as you make them.',
  },
  {
    icon: '🆓',
    title: '100% Free Forever',
    description: 'No fees, no subscriptions, no hidden limits. Create unlimited QR Codes with full customization at no cost.',
  },
  {
    icon: '🌍',
    title: 'Multi-Language Support',
    description: 'Available in multiple languages. Create QR Codes in English, Spanish, German, French, and many more.',
  },
];

// ── Industry data ──
const INDUSTRIES = [
  { icon: '🍽️', title: 'Restaurants', description: 'Replace physical menus, collect feedback, or promote special offers. Guests enjoy a touch-free, modern experience.' },
  { icon: '🏠', title: 'Real Estate', description: 'Add QR Codes to property listings, open house signs, and business cards to share virtual tours and contact details.' },
  { icon: '🎓', title: 'Education', description: 'Share course materials, assignment links, and classroom resources. Students access content instantly with a scan.' },
  { icon: '🎪', title: 'Events', description: 'Streamline check-ins, share event schedules, and connect attendees to registration forms and social channels.' },
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('url');
  const [qrData, setQrData] = useState('');
  const [generated, setGenerated] = useState(false);
  const qrContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeTabData = TABS.find(t => t.id === activeTab) || TABS[0];

  const qrCode = useMemo(() => new QRCodeStyling({
    width: 280,
    height: 280,
    type: 'svg',
    data: ' ',
    dotsOptions: { color: '#2B6F53', type: 'rounded' },
    backgroundOptions: { color: '#ffffff' },
    cornersSquareOptions: { color: '#1E1E1E', type: 'extra-rounded' },
    cornersDotOptions: { color: '#2B6F53', type: 'dot' },
    imageOptions: { crossOrigin: 'anonymous', margin: 10 },
    qrOptions: { errorCorrectionLevel: 'H' },
  }), []);

  useEffect(() => {
    if (qrContainerRef.current && qrContainerRef.current.childNodes.length === 0) {
      qrCode.append(qrContainerRef.current);
    }
  }, [qrCode]);

  useEffect(() => {
    if (qrData.trim()) {
      qrCode.update({ data: qrData });
      setGenerated(true);
    } else {
      qrCode.update({ data: ' ' });
      setGenerated(false);
    }
  }, [qrData, qrCode]);

  // Reset input when tab changes
  useEffect(() => {
    setQrData('');
    setGenerated(false);
  }, [activeTab]);

  const handleDownload = (format: 'png' | 'svg' | 'webp') => {
    if (!qrData.trim()) return;
    qrCode.download({ name: `qr-${activeTab}`, extension: format });
  };

  const handleCopy = async () => {
    if (!qrData.trim()) return;
    try {
      const blob = await qrCode.getRawData('png');
      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
      }
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div>
      {/* ═══════════════════════════ HERO SECTION ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-6 pb-10 md:pt-9 md:pb-16">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="flex flex-col items-center gap-3">

            {/* Title & Subtitle (order-2 on lg to appear below widget) */}
            <div className="order-2 lg:order-1 text-center">
              <h1 className="mt-8 lg:mt-0 mb-4 text-[26px] font-medium text-gray-900 text-balance md:mb-2 md:text-4xl">
                QR Maker Studio
              </h1>
              <p className="mb-8 text-lg text-gray-700 md:text-xl">
                All-in-one tool to create free QR Codes, customize them, and download in high resolution.
              </p>
            </div>

            {/* ──── DARK QR GENERATOR WIDGET ──── */}
            <div className="order-1 lg:order-2 w-full max-w-[1205px]" id="qr-generator">
              <div className="bg-[#1E1E1E] rounded-[20px] overflow-hidden w-full max-w-[1205px] mx-auto">
                <div className="flex flex-col min-[700px]:flex-row min-h-[420px] pt-4 px-0 pb-0 min-[700px]:p-6">

                  {/* LEFT PANEL: Tabs + Input */}
                  <div className="w-full min-[700px]:w-[63.3%] relative flex flex-col">
                    {/* Tab Bar */}
                    <div className="relative">
                      <div
                        ref={tabsRef}
                        className="flex overflow-x-auto px-5 pt-[10px] pb-[10px] gap-[12px] min-[700px]:px-6 min-[700px]:pt-5 min-[700px]:pb-0 min-[700px]:gap-0 min-[700px]:justify-between scrollbar-hide"
                      >
                        {TABS.map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`shrink-0 flex flex-col items-center gap-[5px] px-[10px] py-[10px] rounded-[6px] text-[12px] font-medium whitespace-nowrap transition-colors ${
                              activeTab === tab.id
                                ? 'bg-white/10 text-[#e7ffd3]'
                                : 'text-[#BEF392] hover:bg-white/5'
                            }`}
                          >
                            <span className="text-lg" role="img" aria-hidden="true">{tab.icon}</span>
                            <span>{tab.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="flex-1 px-6 pt-5 pb-6 flex flex-col gap-[9px] min-[700px]:pt-[25px] min-[700px]:pb-[60px]">
                      <p className="text-sm leading-5 font-semibold text-white min-[700px]:text-[22px] min-[700px]:leading-normal">
                        {activeTabData.description}
                      </p>
                      <div className="flex-1">
                        <div className="flex flex-col gap-3">
                          <div className="relative mt-5">
                            {activeTabData.inputType === 'textarea' ? (
                              <textarea
                                placeholder={activeTabData.placeholder}
                                value={qrData}
                                onChange={(e) => setQrData(e.target.value)}
                                rows={3}
                                className="w-full rounded-2xl bg-white text-black pl-4 pr-4 py-3 text-base outline-none resize-none"
                              />
                            ) : (
                              <input
                                type={activeTabData.inputType}
                                placeholder={activeTabData.placeholder}
                                value={qrData}
                                onChange={(e) => setQrData(e.target.value)}
                                className="w-full rounded-full bg-white text-black pl-4 pr-[6%] py-2.5 text-base outline-none"
                              />
                            )}
                          </div>
                          <sub className="text-sm font-normal text-white/70">{activeTabData.hint}</sub>
                        </div>
                      </div>
                    </div>

                    {/* Toggle Switches (Desktop) */}
                    <div className="hidden min-[700px]:flex absolute bottom-0 left-0 px-6 pb-4 items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <span className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-accent">
                          <span className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform translate-x-4" />
                        </span>
                        <span className="text-sm text-white flex items-center gap-1">
                          Privacy Mode
                          <svg className="w-3 h-3 text-[#BEF392]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                          </svg>
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <span className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-accent">
                          <span className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform translate-x-4" />
                        </span>
                        <span className="text-sm text-white flex items-center gap-1">
                          High Quality
                          <svg className="w-3 h-3 text-[#BEF392]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* RIGHT PANEL: QR Preview + Actions */}
                  <div className="w-full min-[700px]:w-[36.7%] px-6 min-[700px]:px-8 pt-[17px] pb-6 flex flex-col items-center">
                    <p className="hidden min-[700px]:block text-sm text-white/70 font-medium mb-3 text-center">
                      QR Code Preview
                    </p>

                    {/* QR Preview */}
                    <div className="flex items-center justify-center w-full">
                      <div className="relative bg-white border-2 border-black/10 rounded-lg p-3 aspect-square flex items-center justify-center" style={{ width: '80%', maxWidth: '260px' }}>
                        <div ref={qrContainerRef} className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full" />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mt-6 w-full">
                      <div className="flex gap-2 flex-1">
                        <button
                          onClick={() => handleDownload('png')}
                          disabled={!generated}
                          className={`h-11 rounded-lg text-sm font-bold text-white transition-colors flex-1 ${generated ? 'bg-accent hover:bg-accent-dark' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                        >
                          Download
                        </button>
                        <button
                          onClick={() => handleDownload('svg')}
                          disabled={!generated}
                          title="Download SVG"
                          className={`h-11 px-3 rounded-lg transition-colors flex items-center justify-center ${generated ? 'bg-accent/80 hover:bg-accent text-white' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                        >
                          <span className="text-xs font-bold">SVG</span>
                        </button>
                      </div>
                      <button
                        onClick={handleCopy}
                        disabled={!generated}
                        title="Copy to clipboard"
                        className={`h-11 px-3 rounded-lg transition-colors flex items-center justify-center ${generated ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Toggle Switches */}
                <div className="min-[700px]:hidden flex items-center gap-6 px-6 pb-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-accent">
                      <span className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform translate-x-4" />
                    </span>
                    <span className="text-sm text-white flex items-center gap-1">Privacy Mode</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-accent">
                      <span className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform translate-x-4" />
                    </span>
                    <span className="text-sm text-white flex items-center gap-1">High Quality</span>
                  </label>
                </div>
              </div>
            </div>

            {/* ──── SOCIAL PROOF BANNER ──── */}
            <div className="order-3 w-full max-w-[1205px]">
              <div className="flex flex-col items-center gap-6 rounded-banner bg-white px-6 py-6 text-center shadow-sm lg:flex-row lg:justify-between lg:gap-6 lg:px-10 lg:text-left border border-neutral-100">
                <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
                  <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gray-900 border-b-2 border-gray-900">4.8</span>
                      <span className="flex text-lg text-amber-400" aria-hidden="true">★★★★★</span>
                    </div>
                    <p className="text-base text-gray-500">Trusted by <strong className="text-gray-900">thousands of users</strong></p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-row lg:gap-6">
                  <a
                    href="#qr-generator"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-button transition-colors duration-150 border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-5 py-2.5 text-sm w-full lg:w-auto"
                  >
                    Start Creating — It's Free
                  </a>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>No account needed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TRUST BADGES ═══════════════════════════ */}
      <section className="bg-white py-10 md:py-16 border-y border-neutral-100">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 sm:flex-row sm:justify-center sm:gap-12">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-accent">
              <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 14-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9z" />
            </svg>
            <p className="text-lg font-medium leading-7 text-gray-500 text-center sm:text-left">
              QR Maker Studio protects your data — all processing happens locally in your browser
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Global</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Fast</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ HOW TO: 3 STEPS ═══════════════════════════ */}
      <section id="how-to-create" className="bg-gray-50 py-16 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-normal text-gray-900 text-balance">
              How to create a free QR Code in 3 simple steps
            </h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-200 md:block" />

            <div className="flex flex-col gap-16 md:gap-20">
              {STEPS.map((step, idx) => (
                <div key={step.number} className="relative grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                  {/* Step Number Circle */}
                  <div className="row-start-1 col-start-1 self-start md:col-start-2 md:self-center relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-accent text-base md:text-lg font-bold text-white shadow-md">
                    {step.number}
                  </div>

                  {/* Text Content */}
                  <div className={`row-start-1 col-start-2 ${idx % 2 === 0 ? 'md:col-start-3 md:pl-4' : 'md:col-start-1 md:pr-4 md:text-right'}`}>
                    <h3 className="mb-1 md:mb-2 text-xl md:text-2xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-500">{step.description}</p>
                  </div>

                  {/* Emoji/Visual */}
                  <div className={`row-start-2 col-span-full ${idx % 2 === 0 ? 'md:row-start-1 md:col-span-1 md:col-start-1 md:flex md:justify-end' : 'md:row-start-1 md:col-span-1 md:col-start-3 md:flex md:justify-start'}`}>
                    <div className="w-full max-w-[380px] rounded-card bg-white border border-neutral-100 shadow-sm p-8 flex items-center justify-center">
                      <span className="text-6xl">{step.emoji}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ QR CODE TYPES GRID ═══════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">All QR Code Types</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Choose from 13 specialized QR Code generators, each designed for a specific purpose.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); document.getElementById('qr-generator')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative bg-white rounded-2xl border border-neutral-200 p-5 text-left hover:border-accent hover:shadow-lg transition-all duration-200"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="text-3xl mb-3 block">{tab.icon}</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">{tab.label}</h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{tab.description}</p>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FEATURES SECTION ═══════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Why Choose QR Maker Studio?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Everything you need to create professional QR Codes, all in one place.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-100 p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ INDUSTRY USE CASES ═══════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">QR Codes for Every Industry</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">See how businesses across industries use QR Codes to connect with their audience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-accent/5 hover:shadow-md transition-all duration-300 border border-transparent hover:border-accent/10"
              >
                <span className="text-4xl mb-4 block">{industry.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA SECTION ═══════════════════════════ */}
      <section className="bg-[#1E1E1E] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Create Your QR Code?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Start generating professional, customizable QR Codes in seconds. No account needed, no fees — ever.
          </p>
          <a
            href="#qr-generator"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-button transition-all duration-200 border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-8 py-3.5 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Create QR Code — It's Free
          </a>
          <p className="text-sm text-white/40 mt-4">No sign-up required • Unlimited QR Codes • Download in PNG, SVG, WebP</p>
        </div>
      </section>
    </div>
  );
};

export default Home;