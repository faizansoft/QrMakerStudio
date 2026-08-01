import React, { useState, useRef, useEffect, useMemo } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, FAQ_ITEMS } from './constants';
import { DotType, CornerSquareType, CornerDotType } from './types';

// ── Tab definitions with SVG Icon functions ──
const TABS = [
  {
    id: 'url',
    label: 'URL',
    description: 'Redirect to an existing web URL',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    id: 'text',
    label: 'Plain Text',
    description: 'Encode plain text into a QR Code',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 'vcard',
    label: 'Contact',
    description: 'Share contact information instantly',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 'wifi',
    label: 'WiFi',
    description: 'Share WiFi credentials via QR Code',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  {
    id: 'email',
    label: 'Email',
    description: 'Create a pre-filled email QR Code',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'sms',
    label: 'SMS',
    description: 'Create a pre-filled SMS QR Code',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    id: 'phone',
    label: 'Phone',
    description: 'Make a phone call with one scan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Start a WhatsApp conversation',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    id: 'facebook',
    label: 'Social',
    description: 'Link to your social media profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 'location',
    label: 'Location',
    description: 'Share a map location',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'event',
    label: 'Event',
    description: 'Create a calendar event QR Code',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'crypto',
    label: 'Crypto',
    description: 'Share cryptocurrency payment address',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'googleform',
    label: 'Google Form',
    description: 'Link to a Google Form survey',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
];

// Template Presets
const TEMPLATES = [
  { id: 'emerald', name: 'Emerald', fgColor: '#2B6F53', bgColor: '#ffffff', cornerSquareColor: '#1E1E1E', cornerDotColor: '#2B6F53', dotType: 'rounded' as DotType, cornerSquareType: 'extra-rounded' as CornerSquareType, cornerDotType: 'dot' as CornerDotType },
  { id: 'classic', name: 'Classic Black', fgColor: '#000000', bgColor: '#ffffff', cornerSquareColor: '#000000', cornerDotColor: '#000000', dotType: 'square' as DotType, cornerSquareType: 'square' as CornerSquareType, cornerDotType: 'square' as CornerDotType },
  { id: 'ocean', name: 'Deep Ocean', fgColor: '#0284c7', bgColor: '#f0f9ff', cornerSquareColor: '#0369a1', cornerDotColor: '#0284c7', dotType: 'classy-rounded' as DotType, cornerSquareType: 'extra-rounded' as CornerSquareType, cornerDotType: 'dot' as CornerDotType },
  { id: 'midnight', name: 'Dark Luxe', fgColor: '#f8fafc', bgColor: '#0f172a', cornerSquareColor: '#38bdf8', cornerDotColor: '#38bdf8', dotType: 'dots' as DotType, cornerSquareType: 'extra-rounded' as CornerSquareType, cornerDotType: 'dot' as CornerDotType },
  { id: 'sunset', name: 'Sunset Amber', fgColor: '#d97706', bgColor: '#fffbeb', cornerSquareColor: '#b45309', cornerDotColor: '#d97706', dotType: 'extra-rounded' as DotType, cornerSquareType: 'extra-rounded' as CornerSquareType, cornerDotType: 'dot' as CornerDotType },
  { id: 'purple', name: 'Royal Violet', fgColor: '#7c3aed', bgColor: '#f5f3ff', cornerSquareColor: '#5b21b6', cornerDotColor: '#7c3aed', dotType: 'classy' as DotType, cornerSquareType: 'extra-rounded' as CornerSquareType, cornerDotType: 'dot' as CornerDotType },
];

// ── Step data ──
const STEPS = [
  {
    number: 1,
    title: 'Choose your QR Code type',
    description: 'Choose your QR Code type based on what you want it to do: open a URL, share WiFi, display contact info, send an email, and more.',
  },
  {
    number: 2,
    title: 'Fill in the details & customize',
    description: 'Enter the content for your QR Code. Add custom colors, dot styles, eye shapes, and upload your brand logo.',
  },
  {
    number: 3,
    title: 'Download your QR Code',
    description: 'Your QR Code is generated instantly. Download it in high resolution PNG, SVG, or WebP formats for print and digital use.',
  },
];

// ── Features data ──
const FEATURES = [
  {
    title: 'Fully Customizable',
    description: 'Customize colors, patterns, corner styles, and add your logo for branded QR Codes that match your identity.',
  },
  {
    title: 'High Resolution Exports',
    description: 'Download in 1000×1000px SVG, PNG, or WebP formats for perfect quality in print and digital media.',
  },
  {
    title: 'Privacy First Architecture',
    description: 'All QR Code generation happens in your browser. No data is sent to external servers.',
  },
  {
    title: 'Instant Real-time Generation',
    description: 'Create QR Codes in seconds with live preview updates as you type.',
  },
  {
    title: '100% Free & Permanent',
    description: 'No subscriptions or scan limits. Your static QR codes work forever.',
  },
  {
    title: 'Multi-Language Support',
    description: 'Available in English, Spanish, German, French, and many more global languages.',
  },
];

// ── Industry data ──
const INDUSTRIES = [
  { title: 'Restaurants & Hospitality', description: 'Replace physical menus, collect guest feedback, or promote daily specials with contactless table QR codes.' },
  { title: 'Real Estate Listings', description: 'Add QR Codes to property flyers, yard signs, and business cards to share virtual tours and agent contact info.' },
  { title: 'Education & Classrooms', description: 'Share course materials, assignment links, and digital resources instantly with students.' },
  { title: 'Events & Conferences', description: 'Streamline event check-ins, share schedules, and connect attendees to registration forms.' },
];


interface HomeProps {
  initialTab?: string;
}

const Home: React.FC<HomeProps> = ({ initialTab = 'url' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Custom QR Styling Options State
  const [fgColor, setFgColor] = useState('#2B6F53');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [cornerSquareColor, setCornerSquareColor] = useState('#1E1E1E');
  const [cornerDotColor, setCornerDotColor] = useState('#2B6F53');
  const [dotStyle, setDotStyle] = useState<DotType>('rounded');
  const [cornerSquareStyle, setCornerSquareStyle] = useState<CornerSquareType>('extra-rounded');
  const [cornerDotStyle, setCornerDotStyle] = useState<CornerDotType>('dot');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [activeTemplate, setActiveTemplate] = useState('emerald');

  // Customization drawer/modal toggle
  const [showCustomize, setShowCustomize] = useState(false);

  // Form Fields per QR Type
  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [vCardInput, setVCardInput] = useState({ firstName: '', lastName: '', phone: '', email: '', company: '', title: '', website: '' });
  const [wifiInput, setWifiInput] = useState({ ssid: '', password: '', encryption: 'WPA', hidden: false });
  const [emailInput, setEmailInput] = useState({ to: '', subject: '', body: '' });
  const [smsInput, setSmsInput] = useState({ phone: '', message: '' });
  const [phoneInput, setPhoneInput] = useState('');
  const [whatsappInput, setWhatsappInput] = useState({ phone: '', message: '' });
  const [locationInput, setLocationInput] = useState({ lat: '', lng: '', query: '' });
  const [eventInput, setEventInput] = useState({ title: '', location: '', start: '', end: '', description: '' });
  const [cryptoInput, setCryptoInput] = useState({ coin: 'Bitcoin', address: '', amount: '' });

  const qrContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const activeTabData = TABS.find(t => t.id === activeTab) || TABS[0];

  // Tab Bar Scroll Controls
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Compute final QR data string based on active tab and fields
  const qrData = useMemo(() => {
    switch (activeTab) {
      case 'url':
      case 'googleform':
      case 'facebook':
        return urlInput.trim();
      case 'text':
        return textInput.trim();
      case 'vcard':
        if (!vCardInput.firstName && !vCardInput.lastName && !vCardInput.phone && !vCardInput.email) return '';
        return `BEGIN:VCARD\nVERSION:3.0\nN:${vCardInput.lastName};${vCardInput.firstName};;;\nFN:${vCardInput.firstName} ${vCardInput.lastName}\nORG:${vCardInput.company}\nTITLE:${vCardInput.title}\nTEL;TYPE=CELL:${vCardInput.phone}\nEMAIL:${vCardInput.email}\nURL:${vCardInput.website}\nEND:VCARD`;
      case 'wifi':
        if (!wifiInput.ssid) return '';
        return `WIFI:T:${wifiInput.encryption};S:${wifiInput.ssid};P:${wifiInput.password};H:${wifiInput.hidden ? 'true' : 'false'};;`;
      case 'email':
        if (!emailInput.to) return '';
        return `mailto:${emailInput.to}?subject=${encodeURIComponent(emailInput.subject)}&body=${encodeURIComponent(emailInput.body)}`;
      case 'sms':
        if (!smsInput.phone) return '';
        return `smsto:${smsInput.phone}:${smsInput.message}`;
      case 'phone':
        if (!phoneInput) return '';
        return `tel:${phoneInput}`;
      case 'whatsapp':
        if (!whatsappInput.phone) return '';
        const cleanPhone = whatsappInput.phone.replace(/[^0-9]/g, '');
        return `https://wa.me/${cleanPhone}${whatsappInput.message ? `?text=${encodeURIComponent(whatsappInput.message)}` : ''}`;
      case 'location':
        if (locationInput.lat && locationInput.lng) {
          return `geo:${locationInput.lat},${locationInput.lng}`;
        }
        return locationInput.query.trim();
      case 'event':
        if (!eventInput.title) return '';
        return `BEGIN:VEVENT\nSUMMARY:${eventInput.title}\nLOCATION:${eventInput.location}\nDESCRIPTION:${eventInput.description}\nDTSTART:${eventInput.start ? eventInput.start.replace(/[-:]/g, '') : ''}\nDTEND:${eventInput.end ? eventInput.end.replace(/[-:]/g, '') : ''}\nEND:VEVENT`;
      case 'crypto':
        if (!cryptoInput.address) return '';
        const coinScheme = cryptoInput.coin.toLowerCase();
        return `${coinScheme}:${cryptoInput.address}${cryptoInput.amount ? `?amount=${cryptoInput.amount}` : ''}`;
      default:
        return urlInput.trim();
    }
  }, [activeTab, urlInput, textInput, vCardInput, wifiInput, emailInput, smsInput, phoneInput, whatsappInput, locationInput, eventInput, cryptoInput]);

  const generated = qrData.length > 0;

  // Initialize QRCodeStyling instance
  const qrCode = useMemo(() => new QRCodeStyling({
    width: 280,
    height: 280,
    type: 'svg',
    data: ' ',
    dotsOptions: { color: fgColor, type: dotStyle },
    backgroundOptions: { color: bgColor },
    cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
    cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
    image: logoSrc || undefined,
    imageOptions: { crossOrigin: 'anonymous', margin: 10, imageSize: 0.35, hideBackgroundDots: true },
    qrOptions: { errorCorrectionLevel: 'H' },
  }), []);

  // Append QR Canvas on mount
  useEffect(() => {
    if (qrContainerRef.current) {
      qrContainerRef.current.innerHTML = '';
      qrCode.append(qrContainerRef.current);
    }
  }, [qrCode]);

  // Update QR Code whenever data or custom options change
  useEffect(() => {
    qrCode.update({
      data: generated ? qrData : ' ',
      dotsOptions: { color: fgColor, type: dotStyle },
      backgroundOptions: { color: bgColor },
      cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
      cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
      image: logoSrc || undefined,
    });
  }, [qrData, generated, fgColor, bgColor, cornerSquareColor, cornerDotColor, dotStyle, cornerSquareStyle, cornerDotStyle, logoSrc, qrCode]);

  // Apply template preset
  const applyTemplate = (tpl: typeof TEMPLATES[0]) => {
    setActiveTemplate(tpl.id);
    setFgColor(tpl.fgColor);
    setBgColor(tpl.bgColor);
    setCornerSquareColor(tpl.cornerSquareColor);
    setCornerDotColor(tpl.cornerDotColor);
    setDotStyle(tpl.dotType);
    setCornerSquareStyle(tpl.cornerSquareType);
    setCornerDotStyle(tpl.cornerDotType);
  };

  // Download Handler
  const handleDownload = (format: 'png' | 'svg' | 'webp') => {
    if (!generated) return;
    qrCode.download({ name: `qrmaker-${activeTab}`, extension: format });
  };

  // Copy Handler
  const handleCopy = async () => {
    if (!generated) return;
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

  // Logo File Upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoSrc(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* ═══════════════════════════ HERO SECTION ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-6 pb-10 md:pt-9 md:pb-16">
        <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
          <div className="flex flex-col items-center gap-3">

            {/* Title & Subtitle */}
            <div className="order-2 lg:order-1 text-center">
              <h1 className="mt-8 lg:mt-0 mb-4 text-[26px] font-medium text-gray-900 text-balance md:mb-2 md:text-4xl">
                QR Maker Studio
              </h1>
              <p className="mb-8 text-lg text-gray-700 md:text-xl">
                All-in-one tool to create free QR Codes, customize designs, and download in high resolution.
              </p>
            </div>

            {/* ──── DARK QR GENERATOR WIDGET ──── */}
            <div className="order-1 lg:order-2 w-full max-w-[1205px]" id="qr-generator">
              <div className="bg-[#1E1E1E] rounded-[20px] overflow-hidden w-full max-w-[1205px] mx-auto shadow-2xl">
                <div className="flex flex-col min-[700px]:flex-row min-h-[440px] pt-4 px-0 pb-0 min-[700px]:p-6">

                  {/* LEFT PANEL: Scrollable Tabs + Input Form */}
                  <div className="w-full min-[700px]:w-[63.3%] relative flex flex-col">
                    
                    {/* TAB BAR WITH ARROW BUTTONS */}
                    <div className="relative flex items-center px-2 min-[700px]:px-4">
                      {/* Left Scroll Arrow Button */}
                      <button
                        onClick={() => scrollTabs('left')}
                        className="z-10 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all focus:outline-none shrink-0"
                        title="Scroll Left"
                        aria-label="Scroll tabs left"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Scrollable Tabs */}
                      <div
                        ref={tabsRef}
                        className="flex overflow-x-auto px-2 pt-[10px] pb-[10px] gap-[8px] min-[700px]:pt-3 min-[700px]:pb-2 scrollbar-hide scroll-smooth flex-1"
                      >
                        {TABS.map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`shrink-0 flex flex-col items-center gap-[4px] px-[12px] py-[8px] rounded-[8px] text-[12px] font-medium whitespace-nowrap transition-all ${
                              activeTab === tab.id
                                ? 'bg-white/15 text-[#e7ffd3] shadow-md border border-white/20'
                                : 'text-[#BEF392] hover:bg-white/5 opacity-80 hover:opacity-100'
                            }`}
                          >
                            <span className="shrink-0">{tab.icon}</span>
                            <span>{tab.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Right Scroll Arrow Button */}
                      <button
                        onClick={() => scrollTabs('right')}
                        className="z-10 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all focus:outline-none shrink-0"
                        title="Scroll Right"
                        aria-label="Scroll tabs right"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* INPUT FORM PER QR TYPE */}
                    <div className="flex-1 px-6 pt-4 pb-6 flex flex-col gap-3 min-[700px]:pt-[20px] min-[700px]:pb-[50px]">
                      <p className="text-sm font-semibold text-white min-[700px]:text-[20px]">
                        {activeTabData.description}
                      </p>

                      <div className="flex-1 mt-2">
                        {/* URL / GOOGLE FORMS / SOCIAL */}
                        {['url', 'googleform', 'facebook'].includes(activeTab) && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="url"
                              placeholder={activeTab === 'googleform' ? 'https://forms.google.com/...' : activeTab === 'facebook' ? 'https://facebook.com/yourpage' : 'https://example.com'}
                              value={urlInput}
                              onChange={(e) => setUrlInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Enter your full web address including https://</span>
                          </div>
                        )}

                        {/* PLAIN TEXT */}
                        {activeTab === 'text' && (
                          <div className="flex flex-col gap-2">
                            <textarea
                              placeholder="Enter message or notes to encode..."
                              value={textInput}
                              onChange={(e) => setTextInput(e.target.value)}
                              rows={4}
                              className="w-full rounded-2xl bg-white text-black p-4 text-base outline-none resize-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Plain text QR codes work offline on all device scanners.</span>
                          </div>
                        )}

                        {/* VCARD CONTACT */}
                        {activeTab === 'vcard' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="text"
                              placeholder="First Name *"
                              value={vCardInput.firstName}
                              onChange={(e) => setVCardInput({ ...vCardInput, firstName: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Last Name"
                              value={vCardInput.lastName}
                              onChange={(e) => setVCardInput({ ...vCardInput, lastName: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <input
                              type="tel"
                              placeholder="Phone Number *"
                              value={vCardInput.phone}
                              onChange={(e) => setVCardInput({ ...vCardInput, phone: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <input
                              type="email"
                              placeholder="Email Address"
                              value={vCardInput.email}
                              onChange={(e) => setVCardInput({ ...vCardInput, email: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Company Name"
                              value={vCardInput.company}
                              onChange={(e) => setVCardInput({ ...vCardInput, company: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Job Title"
                              value={vCardInput.title}
                              onChange={(e) => setVCardInput({ ...vCardInput, title: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                          </div>
                        )}

                        {/* WIFI */}
                        {activeTab === 'wifi' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="text"
                              placeholder="WiFi SSID (Network Name) *"
                              value={wifiInput.ssid}
                              onChange={(e) => setWifiInput({ ...wifiInput, ssid: e.target.value })}
                              className="sm:col-span-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <input
                              type="password"
                              placeholder="WiFi Password"
                              value={wifiInput.password}
                              onChange={(e) => setWifiInput({ ...wifiInput, password: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <select
                              value={wifiInput.encryption}
                              onChange={(e) => setWifiInput({ ...wifiInput, encryption: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            >
                              <option value="WPA">WPA / WPA2 / WPA3</option>
                              <option value="WEP">WEP</option>
                              <option value="nopass">No Password (Open)</option>
                            </select>
                            <label className="sm:col-span-2 flex items-center gap-2 text-white/80 text-xs cursor-pointer pt-1">
                              <input
                                type="checkbox"
                                checked={wifiInput.hidden}
                                onChange={(e) => setWifiInput({ ...wifiInput, hidden: e.target.checked })}
                                className="rounded text-accent focus:ring-accent"
                              />
                              Hidden Network
                            </label>
                          </div>
                        )}

                        {/* EMAIL */}
                        {activeTab === 'email' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="email"
                              placeholder="Recipient Email Address *"
                              value={emailInput.to}
                              onChange={(e) => setEmailInput({ ...emailInput, to: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Email Subject"
                              value={emailInput.subject}
                              onChange={(e) => setEmailInput({ ...emailInput, subject: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <textarea
                              placeholder="Email Body Content..."
                              value={emailInput.body}
                              onChange={(e) => setEmailInput({ ...emailInput, body: e.target.value })}
                              rows={2}
                              className="rounded-xl bg-white text-black p-3 text-sm outline-none resize-none"
                            />
                          </div>
                        )}

                        {/* SMS */}
                        {activeTab === 'sms' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="tel"
                              placeholder="Phone Number (+1 234 567 890) *"
                              value={smsInput.phone}
                              onChange={(e) => setSmsInput({ ...smsInput, phone: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <textarea
                              placeholder="Pre-filled SMS Message..."
                              value={smsInput.message}
                              onChange={(e) => setSmsInput({ ...smsInput, message: e.target.value })}
                              rows={2}
                              className="rounded-xl bg-white text-black p-3 text-sm outline-none resize-none"
                            />
                          </div>
                        )}

                        {/* PHONE */}
                        {activeTab === 'phone' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="tel"
                              placeholder="Enter Phone Number with country code (+1 234 567 890)"
                              value={phoneInput}
                              onChange={(e) => setPhoneInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Scanning will open dialer automatically</span>
                          </div>
                        )}

                        {/* WHATSAPP */}
                        {activeTab === 'whatsapp' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="tel"
                              placeholder="WhatsApp Number with country code (e.g. 14155552671) *"
                              value={whatsappInput.phone}
                              onChange={(e) => setWhatsappInput({ ...whatsappInput, phone: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <textarea
                              placeholder="Pre-filled WhatsApp Message..."
                              value={whatsappInput.message}
                              onChange={(e) => setWhatsappInput({ ...whatsappInput, message: e.target.value })}
                              rows={2}
                              className="rounded-xl bg-white text-black p-3 text-sm outline-none resize-none"
                            />
                          </div>
                        )}

                        {/* LOCATION */}
                        {activeTab === 'location' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="text"
                              placeholder="Google Maps URL or Address"
                              value={locationInput.query}
                              onChange={(e) => setLocationInput({ ...locationInput, query: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                placeholder="Latitude (e.g. 40.7128)"
                                value={locationInput.lat}
                                onChange={(e) => setLocationInput({ ...locationInput, lat: e.target.value })}
                                className="rounded-xl bg-white text-black px-3 py-2 text-xs outline-none"
                              />
                              <input
                                type="text"
                                placeholder="Longitude (e.g. -74.0060)"
                                value={locationInput.lng}
                                onChange={(e) => setLocationInput({ ...locationInput, lng: e.target.value })}
                                className="rounded-xl bg-white text-black px-3 py-2 text-xs outline-none"
                              />
                            </div>
                          </div>
                        )}

                        {/* EVENT */}
                        {activeTab === 'event' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="text"
                              placeholder="Event Title *"
                              value={eventInput.title}
                              onChange={(e) => setEventInput({ ...eventInput, title: e.target.value })}
                              className="sm:col-span-2 rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Location / Venue"
                              value={eventInput.location}
                              onChange={(e) => setEventInput({ ...eventInput, location: e.target.value })}
                              className="sm:col-span-2 rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                            />
                            <div>
                              <span className="text-[10px] text-white/70 block mb-1">Start Date & Time</span>
                              <input
                                type="datetime-local"
                                value={eventInput.start}
                                onChange={(e) => setEventInput({ ...eventInput, start: e.target.value })}
                                className="w-full rounded-xl bg-white text-black px-3 py-1.5 text-xs outline-none"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-white/70 block mb-1">End Date & Time</span>
                              <input
                                type="datetime-local"
                                value={eventInput.end}
                                onChange={(e) => setEventInput({ ...eventInput, end: e.target.value })}
                                className="w-full rounded-xl bg-white text-black px-3 py-1.5 text-xs outline-none"
                              />
                            </div>
                          </div>
                        )}

                        {/* CRYPTO */}
                        {activeTab === 'crypto' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <div className="flex gap-2">
                              <select
                                value={cryptoInput.coin}
                                onChange={(e) => setCryptoInput({ ...cryptoInput, coin: e.target.value })}
                                className="rounded-xl bg-white text-black px-3 py-2 text-sm outline-none"
                              >
                                <option value="Bitcoin">Bitcoin (BTC)</option>
                                <option value="Ethereum">Ethereum (ETH)</option>
                                <option value="Litecoin">Litecoin (LTC)</option>
                                <option value="USDT">Tether (USDT)</option>
                              </select>
                              <input
                                type="text"
                                placeholder="Amount (optional)"
                                value={cryptoInput.amount}
                                onChange={(e) => setCryptoInput({ ...cryptoInput, amount: e.target.value })}
                                className="flex-1 rounded-xl bg-white text-black px-4 py-2 text-sm outline-none"
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="Crypto Wallet Address *"
                              value={cryptoInput.address}
                              onChange={(e) => setCryptoInput({ ...cryptoInput, address: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Toggles */}
                    <div className="hidden min-[700px]:flex absolute bottom-0 left-0 px-6 pb-3 items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <span className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-accent">
                          <span className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform translate-x-4" />
                        </span>
                        <span className="text-xs text-white/90 flex items-center gap-1">
                          Privacy Mode
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <span className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-accent">
                          <span className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform translate-x-4" />
                        </span>
                        <span className="text-xs text-white/90 flex items-center gap-1">
                          High Resolution (1000px)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* RIGHT PANEL: QR Preview + Templates Carousel + Custom Options */}
                  <div className="w-full min-[700px]:w-[36.7%] px-6 min-[700px]:px-6 pt-[14px] pb-6 flex flex-col items-center justify-between border-t min-[700px]:border-t-0 min-[700px]:border-l border-white/10">
                    <p className="text-xs text-white/70 font-medium mb-2 text-center">
                      QR Code Preview & Templates
                    </p>

                    {/* QR Canvas + Template Mini-QR Carousel */}
                    <div className="flex items-center justify-between w-full gap-3">
                      {/* Canvas Container */}
                      <div className="relative bg-white border-2 border-black/10 rounded-xl p-3 aspect-square flex items-center justify-center shadow-lg" style={{ width: '72%', maxWidth: '230px' }}>
                        <div ref={qrContainerRef} className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full" />
                      </div>

                      {/* Template Selector Vertical Carousel with Mini-QR Vector Previews */}
                      <div className="flex flex-col items-center gap-2 flex-1 max-h-[220px] overflow-y-auto scrollbar-hide py-1">
                        {TEMPLATES.map((tpl) => (
                          <button
                            key={tpl.id}
                            onClick={() => applyTemplate(tpl)}
                            title={tpl.name}
                            className={`relative group w-12 h-12 rounded-xl border-2 transition-all p-1 flex items-center justify-center shrink-0 ${
                              activeTemplate === tpl.id ? 'border-accent ring-2 ring-accent/50 scale-105 shadow-md' : 'border-white/20 opacity-70 hover:opacity-100'
                            }`}
                            style={{ backgroundColor: tpl.bgColor }}
                          >
                            {/* Mini QR Code Vector Preview */}
                            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                              {/* Top Left Eye */}
                              <rect x="2" y="2" width="6" height="6" rx={tpl.cornerSquareType === 'extra-rounded' ? '2' : tpl.cornerSquareType === 'dot' ? '3' : '0.5'} stroke={tpl.cornerSquareColor} strokeWidth="1.5" fill="none" />
                              <circle cx="5" cy="5" r={tpl.cornerDotType === 'dot' ? '1.5' : '1'} fill={tpl.cornerDotColor} />
                              
                              {/* Top Right Eye */}
                              <rect x="16" y="2" width="6" height="6" rx={tpl.cornerSquareType === 'extra-rounded' ? '2' : tpl.cornerSquareType === 'dot' ? '3' : '0.5'} stroke={tpl.cornerSquareColor} strokeWidth="1.5" fill="none" />
                              <circle cx="19" cy="5" r={tpl.cornerDotType === 'dot' ? '1.5' : '1'} fill={tpl.cornerDotColor} />
                              
                              {/* Bottom Left Eye */}
                              <rect x="2" y="16" width="6" height="6" rx={tpl.cornerSquareType === 'extra-rounded' ? '2' : tpl.cornerSquareType === 'dot' ? '3' : '0.5'} stroke={tpl.cornerSquareColor} strokeWidth="1.5" fill="none" />
                              <circle cx="5" cy="19" r={tpl.cornerDotType === 'dot' ? '1.5' : '1'} fill={tpl.cornerDotColor} />

                              {/* Matrix Dots */}
                              <rect x="10" y="3" width="2" height="2" rx={tpl.dotType === 'dots' || tpl.dotType === 'rounded' ? '1' : '0'} fill={tpl.fgColor} />
                              <rect x="13" y="5" width="2" height="2" rx={tpl.dotType === 'dots' || tpl.dotType === 'rounded' ? '1' : '0'} fill={tpl.fgColor} />
                              <rect x="10" y="10" width="4" height="4" rx={tpl.dotType === 'dots' || tpl.dotType === 'rounded' ? '2' : '0'} fill={tpl.fgColor} />
                              <rect x="16" y="12" width="2" height="2" rx={tpl.dotType === 'dots' || tpl.dotType === 'rounded' ? '1' : '0'} fill={tpl.fgColor} />
                              <rect x="11" y="17" width="3" height="3" rx={tpl.dotType === 'dots' || tpl.dotType === 'rounded' ? '1.5' : '0'} fill={tpl.fgColor} />
                              <rect x="17" y="17" width="3" height="3" rx={tpl.dotType === 'dots' || tpl.dotType === 'rounded' ? '1.5' : '0'} fill={tpl.fgColor} />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex flex-col gap-2 mt-4 w-full">
                      <div className="flex items-center gap-2 w-full">
                        <button
                          onClick={() => handleDownload('png')}
                          disabled={!generated}
                          className={`h-10 rounded-lg text-xs font-bold text-white transition-colors flex-1 ${generated ? 'bg-accent hover:bg-accent-dark' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                        >
                          Download PNG
                        </button>
                        <button
                          onClick={() => handleDownload('svg')}
                          disabled={!generated}
                          title="Download SVG"
                          className={`h-10 px-3 rounded-lg text-xs font-bold text-white transition-colors ${generated ? 'bg-accent/80 hover:bg-accent' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                        >
                          SVG
                        </button>
                        <button
                          onClick={handleCopy}
                          disabled={!generated}
                          title="Copy to clipboard"
                          className={`h-10 px-3 rounded-lg transition-colors text-white ${generated ? 'bg-white/10 hover:bg-white/20' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" />
                          </svg>
                        </button>
                      </div>

                      {/* Customize Options Button */}
                      <button
                        onClick={() => setShowCustomize(!showCustomize)}
                        className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-[#BEF392] font-semibold rounded-lg text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <span>{showCustomize ? 'Hide Custom Options' : 'Custom QR Options & Logo'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ──── CUSTOM QR OPTIONS EXPANDABLE PANEL ──── */}
                {showCustomize && (
                  <div className="bg-[#141414] border-t border-white/10 p-6 text-white animate-in">
                    <h3 className="text-sm font-bold text-[#BEF392] uppercase tracking-wider mb-4 flex items-center gap-2">
                      🎨 Custom Design Options
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                      {/* Colors */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-white/80 block">Color Palette</label>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-white/60">
                            <span>Pattern Color</span>
                            <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer border-none bg-transparent" />
                          </div>
                          <div className="flex items-center justify-between text-xs text-white/60">
                            <span>Background</span>
                            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer border-none bg-transparent" />
                          </div>
                          <div className="flex items-center justify-between text-xs text-white/60">
                            <span>Corner Frame</span>
                            <input type="color" value={cornerSquareColor} onChange={(e) => setCornerSquareColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer border-none bg-transparent" />
                          </div>
                          <div className="flex items-center justify-between text-xs text-white/60">
                            <span>Corner Eye</span>
                            <input type="color" value={cornerDotColor} onChange={(e) => setCornerDotColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer border-none bg-transparent" />
                          </div>
                        </div>
                      </div>

                      {/* Dot Styles */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-white/80 block">Dot Pattern</label>
                        <select
                          value={dotStyle}
                          onChange={(e) => setDotStyle(e.target.value as DotType)}
                          className="w-full bg-white/10 text-white rounded-lg p-2 text-xs outline-none border border-white/10"
                        >
                          {DOT_STYLES.map(s => (
                            <option key={s.value} value={s.value} className="bg-gray-900 text-white">{s.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Corner Shapes */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-white/80 block">Corner Frame & Eye</label>
                        <select
                          value={cornerSquareStyle}
                          onChange={(e) => setCornerSquareStyle(e.target.value as CornerSquareType)}
                          className="w-full bg-white/10 text-white rounded-lg p-2 text-xs outline-none border border-white/10 mb-2"
                        >
                          {CORNER_SQUARE_STYLES.map(s => (
                            <option key={s.value} value={s.value} className="bg-gray-900 text-white">{s.label}</option>
                          ))}
                        </select>
                        <select
                          value={cornerDotStyle}
                          onChange={(e) => setCornerDotStyle(e.target.value as CornerDotType)}
                          className="w-full bg-white/10 text-white rounded-lg p-2 text-xs outline-none border border-white/10"
                        >
                          {CORNER_DOT_STYLES.map(s => (
                            <option key={s.value} value={s.value} className="bg-gray-900 text-white">{s.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Logo Upload */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-white/80 block">Add Center Logo</label>
                        <label className="block w-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 border-dashed rounded-lg p-3 text-center transition-colors">
                          <span className="text-xs text-[#BEF392] block font-medium">Upload Logo (PNG/JPEG)</span>
                          <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                        </label>
                        {logoSrc && (
                          <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg text-xs">
                            <span className="text-white/80">Logo Loaded</span>
                            <button onClick={() => setLogoSrc(null)} className="text-red-400 hover:text-red-300 font-bold">Remove</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
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
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Global</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                  {/* Icon Visual Card */}
                  <div className={`row-start-2 col-span-full ${idx % 2 === 0 ? 'md:row-start-1 md:col-span-1 md:col-start-1 md:flex md:justify-end' : 'md:row-start-1 md:col-span-1 md:col-start-3 md:flex md:justify-start'}`}>
                    <div className="w-full max-w-[340px] rounded-card bg-white border border-neutral-200 shadow-sm p-8 flex items-center justify-center text-accent">
                      {step.number === 1 && (
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      )}
                      {step.number === 2 && (
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      )}
                      {step.number === 3 && (
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
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
              >
                <div className="text-accent mb-3 p-2 bg-accent/10 rounded-xl inline-block group-hover:bg-accent group-hover:text-white transition-colors">
                  {tab.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">{tab.label}</h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{tab.description}</p>
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
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  {idx === 0 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {idx === 4 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {idx === 5 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
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
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  {idx === 0 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
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