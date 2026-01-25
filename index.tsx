import { GoogleGenAI, Type } from "@google/genai";
import QRCodeStyling from "qr-code-styling";

/**
 * --- DATA CONSTANTS (Ported from Constants.ts) ---
 */
const GENERATORS: any = {
  url: { title: "Website URL", icon: "🔗", placeholder: "https://yourwebsite.com", desc: "Transform any website link into a beautiful scannable portal.", metaTitle: "Custom URL QR Code Generator | Branded QR Maker Studio", metaDesc: "Create a professional branded URL QR code. High-resolution SVG exports and custom logos." },
  wifi: { title: "Wi-Fi", icon: "📶", desc: "The fastest way to connect guests without sharing complex passwords.", metaTitle: "WiFi QR Code Generator | Connect Instantly & Securely", metaDesc: "Generate a secure WiFi QR code. Let guests scan to connect without typing passwords." },
  vcard: { title: "vCard", icon: "👤", desc: "A digital business card that saves your info directly to a smartphone.", metaTitle: "vCard QR Code Generator | Professional Digital Business Cards", metaDesc: "Generate a professional QR code business card using the vCard 3.0 standard." },
  googleform: { title: "Google Forms", icon: "📝", placeholder: "https://forms.gle/...", desc: "Collect responses effortlessly with a branded QR code for your surveys.", metaTitle: "Google Forms QR Code Generator | Boost Survey Responses", metaDesc: "Generate a professional Google Forms QR code for feedback and registration." },
  facebook: { title: "Facebook", icon: "📘", placeholder: "https://facebook.com/...", desc: "Share your social media channels and grow your followers.", metaTitle: "Facebook QR Code Generator | Grow Your Brand Community", metaDesc: "Generate a professional Facebook QR code for your page or group." },
  whatsapp: { title: "WhatsApp", icon: "🟢", placeholder: "Phone Number", desc: "Get WhatsApp messages and start conversations instantly.", metaTitle: "WhatsApp QR Code Generator | Direct Chat Automation", metaDesc: "Generate a professional WhatsApp QR code with a pre-filled message." },
  location: { title: "Location", icon: "📍", desc: "Share a specific location on the map with a single scan.", metaTitle: "Location QR Code Generator | Precise Navigation for Stores", metaDesc: "Generate a professional Google Maps QR code. Let customers find your store." },
  crypto: { title: "Crypto", icon: "₿", desc: "Send and receive crypto payments easily with a branded payment code.", metaTitle: "Crypto QR Code Generator | Secure Payments for Bitcoin & ETH", metaDesc: "Generate a professional cryptocurrency payment QR code." },
  sms: { title: "SMS", icon: "💬", placeholder: "Phone Number", desc: "Get text messages with pre-filled content instantly.", metaTitle: "SMS QR Code Generator | Pre-filled Text Message Links", metaDesc: "Generate a professional SMS QR code that pre-fills number and message." },
  email: { title: "Email", icon: "📧", placeholder: "Email Address", desc: "Get email messages with pre-filled subjects and bodies.", metaTitle: "Email QR Code Generator | Professional Inquiry Automation", metaDesc: "Generate a professional email QR code with pre-filled fields." },
  phone: { title: "Phone", icon: "📞", placeholder: "Phone Number", desc: "Make a phone call with a single scan.", metaTitle: "Phone QR Code Generator | One-Tap Calling for Businesses", metaDesc: "Generate a professional phone call QR code for your customers." },
  text: { title: "Text", icon: "📝", placeholder: "Enter your notes here...", desc: "Display a body of text or store notes in a simple offline format.", metaTitle: "Text to QR Code Generator | Secure Offline Data Storage", metaDesc: "Convert notes or raw text into a scannable QR code. Works offline." },
  event: { title: "Event", icon: "📅", desc: "Promote your event and let guests save it to their calendars.", metaTitle: "Event QR Code Generator | Save to Calendar Instantly", metaDesc: "Generate a professional event QR code for guests to save details." }
};

const FAQ_ITEMS = [
  { q: "How do I make a QR code with logo in middle?", a: "Using our advanced workspace, you can create a QR code with logo in the middle by navigating to the 'Logo' tab. Simply upload your PNG or SVG file." },
  { q: "Can I create a custom QR code for my brand?", a: "Yes! Our custom QR code maker allows you to change patterns, eye shapes, and colors to match your brand identity perfectly." },
  { q: "Do these QR codes expire?", a: "No. We generate 'Static' QR codes. The data is encoded directly into the pattern, so it works forever with no scan limits." }
];

/**
 * --- APP STATE ---
 */
const state: any = {
  activeTab: 'content',
  currentPath: window.location.pathname,
  isAiLoading: false,
  logoSrc: null,
  // Universal data store for all tool inputs
  inputs: {
    url: 'https://qr-generator.online',
    wifi: { ssid: '', pass: '', enc: 'WPA' },
    vcard: { first: '', last: '', tel: '', email: '', org: '' },
    googleform: '',
    facebook: 'https://facebook.com/',
    whatsapp: { num: '', msg: '' },
    location: { lat: '37.78193', lng: '-122.40476' },
    crypto: { coin: 'bitcoin', address: '', amount: '' },
    sms: { num: '', msg: '' },
    email: { to: '', sub: '', body: '' },
    phone: '',
    text: '',
    event: { summary: '', location: '', start: '', end: '', desc: '' }
  },
  styling: {
    fgColor: '#1e293b',
    bgColor: '#ffffff',
    dotType: 'square',
    cornerSquareType: 'square',
    cornerDotType: 'square',
    cornerSquareColor: '#1e293b',
    cornerDotColor: '#1e293b',
    level: 'H',
    includeMargin: true
  }
};

/**
 * --- QR ENGINE ---
 */
const qrCode = new QRCodeStyling();

const updateQR = () => {
  const container = document.getElementById('qr-preview-container');
  if (!container) return;

  // Resolve final value based on tool type
  let finalValue = '';
  const type = state.currentPath.split('-qr-code-generator')[0].replace('/', '');
  const data = state.inputs[type] || '';

  switch(type) {
    case 'wifi': finalValue = `WIFI:S:${data.ssid};T:${data.enc};P:${data.pass};;`; break;
    case 'vcard': finalValue = `BEGIN:VCARD\nVERSION:3.0\nN:${data.last};${data.first}\nORG:${data.org}\nTEL:${data.tel}\nEMAIL:${data.email}\nEND:VCARD`; break;
    case 'whatsapp': finalValue = `https://wa.me/${data.num}?text=${encodeURIComponent(data.msg)}`; break;
    case 'sms': finalValue = `smsto:${data.num}:${data.msg}`; break;
    case 'email': finalValue = `mailto:${data.to}?subject=${encodeURIComponent(data.sub)}&body=${encodeURIComponent(data.body)}`; break;
    case 'phone': finalValue = `tel:${data}`; break;
    case 'location': finalValue = `geo:${data.lat},${data.lng}`; break;
    case 'crypto': finalValue = `${data.coin}:${data.address}${data.amount ? `?amount=${data.amount}` : ''}`; break;
    case 'event': finalValue = `BEGIN:VEVENT\nSUMMARY:${data.summary}\nLOCATION:${data.location}\nDTSTART:${data.start.replace(/[-:]/g, '')}\nEND:VEVENT`; break;
    default: finalValue = data;
  }

  qrCode.update({
    width: 1000,
    height: 1000,
    data: finalValue || ' ',
    margin: state.styling.includeMargin ? 20 : 0,
    qrOptions: { errorCorrectionLevel: state.styling.level },
    image: state.logoSrc || undefined,
    dotsOptions: { color: state.styling.fgColor, type: state.styling.dotType },
    backgroundOptions: { color: state.styling.bgColor },
    imageOptions: { crossOrigin: 'anonymous', margin: 10, imageSize: 0.4, hideBackgroundDots: true },
    cornersSquareOptions: { type: state.styling.cornerSquareType, color: state.styling.cornerSquareColor },
    cornersDotOptions: { type: state.styling.cornerDotType, color: state.styling.cornerDotColor }
  });

  if (container.childNodes.length === 0) qrCode.append(container);
  const canvas = container.querySelector('canvas');
  if (canvas) { canvas.style.width = '100%'; canvas.style.height = '100%'; canvas.style.borderRadius = '24px'; }
};

/**
 * --- TEMPLATES ---
 */
const Header = () => `
  <header class="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" class="nav-link flex items-center gap-3 group">
        <div class="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
        </div>
        <span class="text-xl font-display font-black text-slate-900 tracking-tight">QR Generator <span class="text-indigo-600">Online</span></span>
      </a>
      <nav class="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
        <a href="/#tools" class="nav-link hover:text-indigo-600">Tools</a>
        <a href="/faqs-qr-code-generator" class="nav-link hover:text-indigo-600">FAQ</a>
        <a href="/about" class="nav-link hover:text-indigo-600">About</a>
      </nav>
      <a href="/url-qr-code-generator" class="nav-link bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-indigo-100">Create Free QR</a>
    </div>
  </header>
`;

const Footer = () => `
  <footer class="bg-slate-950 text-white pt-24 pb-12 mt-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div class="col-span-2 space-y-6">
          <div class="flex items-center gap-3">
             <div class="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg></div>
             <span class="text-xl font-display font-black">QR Generator <span class="text-indigo-400">Online</span></span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm">Professional customizable QR code tools. Perfect for print and digital assets.</p>
          <div class="pt-4 flex gap-4">
             <a href="https://www.facebook.com/qrgenerator.online" target="_blank" class="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
          </div>
        </div>
        <div class="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
           <div><h4 class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Tools</h4>
             <ul class="space-y-3 text-slate-400">
               <li><a href="/url-qr-code-generator" class="nav-link hover:text-white">URL QR</a></li>
               <li><a href="/wifi-qr-code-generator" class="nav-link hover:text-white">WiFi QR</a></li>
               <li><a href="/vcard-qr-code-generator" class="nav-link hover:text-white">vCard QR</a></li>
             </ul>
           </div>
           <div><h4 class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Company</h4>
             <ul class="space-y-3 text-slate-400">
               <li><a href="/about" class="nav-link hover:text-white">About Us</a></li>
               <li><a href="/privacy" class="nav-link hover:text-white">Privacy</a></li>
               <li><a href="/terms" class="nav-link hover:text-white">Terms</a></li>
             </ul>
           </div>
        </div>
      </div>
      <div class="pt-12 border-t border-slate-900 text-center text-[10px] font-black uppercase tracking-widest text-slate-600">© 2026 QR Generator Online Studio</div>
    </div>
  </footer>
`;

const HomePage = () => `
  <section class="relative overflow-hidden bg-white pt-16 pb-24 text-center animate-in">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-indigo-100 mb-6">Reliable Branded QR Assets</div>
      <h1 class="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight mb-6">The Professional Way to Create <br/><span class="text-indigo-600">Customizable QR Codes</span></h1>
      <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">Transform standard links into unique visual assets that stay active forever. No subscriptions, no limits.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/url-qr-code-generator" class="nav-link bg-indigo-600 text-white px-8 py-4 rounded-full shadow-xl shadow-indigo-100 uppercase tracking-widest text-xs font-black">Get Started Now</a>
        <a href="/about" class="nav-link border-2 border-slate-200 px-8 py-4 rounded-full uppercase tracking-widest text-xs font-black">Learn More</a>
      </div>
    </div>
  </section>
  <section id="tools" class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    ${Object.keys(GENERATORS).map(key => `
      <a href="/${key}-qr-code-generator" class="nav-link group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-4">
          <div class="bg-indigo-50 w-10 h-10 rounded-xl flex items-center justify-center text-xl">${GENERATORS[key].icon}</div>
          <h3 class="font-bold text-slate-900 group-hover:text-indigo-600">${GENERATORS[key].title}</h3>
        </div>
        <p class="text-slate-400 text-xs">${GENERATORS[key].desc}</p>
      </a>
    `).join('')}
  </section>
`;

const ToolInput = (type: string) => {
  const data = state.inputs[type];
  switch(type) {
    case 'wifi': return `
      <div class="space-y-4">
        <input type="text" data-key="ssid" value="${data.ssid}" placeholder="Network Name (SSID)" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="text" data-key="pass" value="${data.pass}" placeholder="WiFi Password" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <select data-key="enc" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold outline-none">
          <option value="WPA" ${data.enc === 'WPA' ? 'selected' : ''}>WPA/WPA2</option>
          <option value="WEP" ${data.enc === 'WEP' ? 'selected' : ''}>WEP</option>
          <option value="nopass" ${data.enc === 'nopass' ? 'selected' : ''}>None (Open)</option>
        </select>
      </div>`;
    case 'vcard': return `
      <div class="grid grid-cols-2 gap-4">
        <input type="text" data-key="first" value="${data.first}" placeholder="First Name" class="p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="text" data-key="last" value="${data.last}" placeholder="Last Name" class="p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="text" data-key="tel" value="${data.tel}" placeholder="Phone Number" class="col-span-2 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="text" data-key="email" value="${data.email}" placeholder="Email Address" class="col-span-2 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
      </div>`;
    case 'email': return `
      <div class="space-y-4">
        <input type="email" data-key="to" value="${data.to}" placeholder="To Email" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="text" data-key="sub" value="${data.sub}" placeholder="Subject" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <textarea data-key="body" placeholder="Email Body" class="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">${data.body}</textarea>
      </div>`;
    case 'crypto': return `
      <div class="space-y-4">
        <select data-key="coin" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold outline-none">
          <option value="bitcoin">Bitcoin</option><option value="ethereum">Ethereum</option><option value="solana">Solana</option>
        </select>
        <input type="text" data-key="address" value="${data.address}" placeholder="Wallet Address" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
      </div>`;
    case 'location': return `
      <div class="grid grid-cols-2 gap-4">
        <input type="text" data-key="lat" value="${data.lat}" placeholder="Latitude" class="p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="text" data-key="lng" value="${data.lng}" placeholder="Longitude" class="p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
      </div>`;
    case 'event': return `
      <div class="space-y-4">
        <input type="text" data-key="summary" value="${data.summary}" placeholder="Event Title" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <input type="datetime-local" data-key="start" value="${data.start}" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold outline-none">
      </div>`;
    case 'whatsapp': case 'sms': return `
      <div class="space-y-4">
        <input type="tel" data-key="num" value="${data.num}" placeholder="Phone Number" class="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">
        <textarea data-key="msg" placeholder="Your Message" class="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">${data.msg}</textarea>
      </div>`;
    case 'text': return `
      <textarea id="text-input" placeholder="${GENERATORS[type].placeholder}" class="w-full h-48 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold">${data}</textarea>`;
    default: return `
      <input id="single-input" type="text" value="${data}" placeholder="${GENERATORS[type].placeholder}" class="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold text-xl shadow-inner">`;
  }
};

const WorkspacePage = (type: string) => `
  <div class="max-w-7xl mx-auto px-6 py-12 animate-in">
    <div class="flex items-center gap-4 mb-12">
      <a href="/" class="nav-link text-slate-400 hover:text-indigo-600 transition-colors font-black text-[10px] uppercase tracking-widest flex items-center gap-2">← Back Home</a>
      <div class="h-6 w-px bg-slate-200"></div>
      <span class="text-sm font-bold text-slate-900">${GENERATORS[type].title} Studio</span>
    </div>

    <div class="grid lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-7 bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
        <div class="flex bg-slate-50/50 border-b border-slate-100 p-2">
          <button data-tab="content" class="tab-btn flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${state.activeTab === 'content' ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400'}">Content</button>
          <button data-tab="pattern" class="tab-btn flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${state.activeTab === 'pattern' ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400'}">Pattern</button>
          <button data-tab="logo" class="tab-btn flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${state.activeTab === 'logo' ? 'text-indigo-600 bg-white shadow-sm ring-1 ring-slate-200' : 'text-slate-400'}">Logo</button>
        </div>
        
        <div class="p-8 md:p-12 min-h-[420px]">
          ${state.activeTab === 'content' ? `
            <div class="space-y-6">
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Generator Data</label>
              ${ToolInput(type)}
              <button id="ai-style-btn" class="w-full py-5 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest font-black transition-transform active:scale-95">
                ${state.isAiLoading ? 'Designing Theme...' : 'Get AI Style Suggestion'}
              </button>
            </div>
          ` : ''}

          ${state.activeTab === 'pattern' ? `
            <div class="space-y-8 animate-in">
              <div class="grid md:grid-cols-2 gap-4">
                <div><span class="text-[9px] font-black text-slate-400 uppercase mb-2 block">Pattern Color</span><input id="color-fg" type="color" value="${state.styling.fgColor}" class="w-full h-12 rounded-xl cursor-pointer bg-slate-50 p-1 border"></div>
                <div><span class="text-[9px] font-black text-slate-400 uppercase mb-2 block">Background</span><input id="color-bg" type="color" value="${state.styling.bgColor}" class="w-full h-12 rounded-xl cursor-pointer bg-slate-50 p-1 border"></div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                ${['square', 'rounded', 'dots', 'extra-rounded', 'classy', 'classy-rounded'].map(s => `<button data-dot="${s}" class="p-4 rounded-2xl border-2 text-[9px] font-black uppercase tracking-widest ${state.styling.dotType === s ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-50 hover:bg-slate-50 text-slate-400'}">${s.replace('-', ' ')}</button>`).join('')}
              </div>
            </div>
          ` : ''}

          ${state.activeTab === 'logo' ? `
            <div class="space-y-8 animate-in">
              <div class="flex items-center gap-4">
                <input id="logo-uploader" type="file" class="hidden">
                <button onclick="document.getElementById('logo-uploader').click()" class="bg-indigo-50 text-indigo-700 px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest border border-indigo-100 hover:bg-indigo-100 transition-all">Upload Logo</button>
                ${state.logoSrc ? `<button id="clear-logo" class="text-red-500 font-black uppercase text-[10px] tracking-widest">Clear</button>` : ''}
              </div>
              <p class="text-slate-400 text-xs font-medium">PNG or SVG with transparency works best. The logo is rendered locally on your device.</p>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="lg:col-span-5 lg:sticky lg:top-24">
        <div class="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border border-slate-200 text-center">
          <div id="qr-preview-container" class="relative p-4 bg-slate-50 rounded-[2.5rem] mb-8 flex justify-center items-center min-h-[320px] shadow-inner overflow-hidden"></div>
          <div class="space-y-3">
            <button id="dl-png" class="w-full py-4 rounded-2xl bg-indigo-600 text-white shadow-lg text-[10px] font-black uppercase tracking-widest">Download PNG</button>
            <div class="grid grid-cols-2 gap-3">
              <button id="dl-svg" class="border-2 border-slate-200 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-50">SVG (Print)</button>
              <button id="dl-webp" class="border-2 border-slate-200 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-50">WebP (Web)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

/**
 * --- APP RENDERER & ROUTER ---
 */
function render() {
  const path = window.location.pathname;
  const view = document.getElementById('router-view');
  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');
  
  if (!view || !header || !footer) return;

  header.innerHTML = Header();
  footer.innerHTML = Footer();

  if (path === '/') {
    document.title = "QR Generator Online | Branded QR Code Studio";
    view.innerHTML = HomePage();
  } else if (path === '/faqs-qr-code-generator') {
    document.title = "FAQ | QR Generator Online";
    view.innerHTML = `<div class="max-w-4xl mx-auto py-20 px-6 animate-in"><h1 class="text-5xl font-black mb-12">FAQ</h1><div class="space-y-8">${FAQ_ITEMS.map(f => `<div class="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm"><h3 class="font-bold text-xl mb-4">${f.q}</h3><p class="text-slate-500">${f.a}</p></div>`).join('')}</div></div>`;
  } else if (path === '/about') {
    document.title = "About Us | QR Generator Online";
    view.innerHTML = `<div class="max-w-3xl mx-auto py-24 px-6 text-center animate-in"><h1 class="text-5xl font-black mb-8">Our Mission</h1><p class="text-xl text-slate-500 leading-relaxed">We believe in making professional design tools accessible to everyone. Our static QR codes are permanent, free, and secure.</p></div>`;
  } else {
    const type = path.split('-qr-code-generator')[0].replace('/', '');
    const config = GENERATORS[type];
    if (config) {
      document.title = config.metaTitle;
      view.innerHTML = WorkspacePage(type);
      updateQR();
      attachWorkspaceEvents(type);
    } else {
      view.innerHTML = `<div class="py-24 text-center"><h1 class="text-5xl font-black mb-4">404</h1><p>Tool not found.</p><a href="/" class="nav-link text-indigo-600 font-bold mt-4 block">Return Home</a></div>`;
    }
  }

  // Bind nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        state.currentPath = href;
        render();
        window.scrollTo(0, 0);
      }
    });
  });
}

function attachWorkspaceEvents(type: string) {
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.activeTab = (e.currentTarget as HTMLButtonElement).dataset.tab;
      render();
    });
  });

  // Inputs
  const container = document.getElementById('router-view');
  container?.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', (e) => {
      const el = e.target as HTMLInputElement;
      const key = el.dataset.key;
      if (key) {
        state.inputs[type][key] = el.value;
      } else {
        state.inputs[type] = el.value;
      }
      updateQR();
    });
  });

  // Color & Pattern
  document.getElementById('color-fg')?.addEventListener('input', (e) => { state.styling.fgColor = (e.target as HTMLInputElement).value; updateQR(); });
  document.getElementById('color-bg')?.addEventListener('input', (e) => { state.styling.bgColor = (e.target as HTMLInputElement).value; updateQR(); });
  document.querySelectorAll('[data-dot]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.styling.dotType = (e.currentTarget as HTMLButtonElement).dataset.dot;
      render();
    });
  });

  // Logo
  document.getElementById('logo-uploader')?.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => { state.logoSrc = ev.target?.result; render(); };
      reader.readAsDataURL(file);
    }
  });
  document.getElementById('clear-logo')?.addEventListener('click', () => { state.logoSrc = null; render(); });

  // AI
  document.getElementById('ai-style-btn')?.addEventListener('click', async () => {
    state.isAiLoading = true;
    render();
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const resp = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Design a QR style for: ${state.currentPath}. Return JSON {primary, background, dots}.`,
        config: { responseMimeType: 'application/json' }
      });
      const data = JSON.parse(resp.text || '{}');
      state.styling.fgColor = data.primary || '#000000';
      state.styling.bgColor = data.background || '#ffffff';
      state.styling.dotType = data.dots || 'square';
    } catch(e) {}
    state.isAiLoading = false;
    render();
  });

  // Downloads
  document.getElementById('dl-png')?.addEventListener('click', () => qrCode.download({ extension: 'png' }));
  document.getElementById('dl-svg')?.addEventListener('click', () => qrCode.download({ extension: 'svg' }));
  document.getElementById('dl-webp')?.addEventListener('click', () => qrCode.download({ extension: 'webp' }));
}

/**
 * --- INIT ---
 */
window.onpopstate = () => { state.currentPath = window.location.pathname; render(); };
render();