import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';

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

const SocialMediaQRPage: React.FC = () => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [displayName, setDisplayName] = useState('');
  const [generated, setGenerated] = useState(false);
  const qrRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const qrInstances = useRef<Record<string, QRCodeStyling>>({});

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-accent transition-colors mb-6 font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
            Social Hub
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Social Media QR Code Generator
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create branded QR codes for all your social media profiles. Each platform gets its own color-matched QR code.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            {/* Display Name */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name / Brand Title</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Acme Studio or John Doe"
                className="w-full max-w-md px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
              />
            </div>

            {/* Platform Inputs */}
            <h2 className="text-sm font-bold text-slate-900 mb-3">Enter Your Social Media Profiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOCIAL_PLATFORMS.map(platform => (
                <div key={platform.id} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.label.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">{platform.label}</label>
                    <input
                      type="text"
                      value={inputs[platform.id] || ''}
                      onChange={(e) => handleInputChange(platform.id, e.target.value)}
                      placeholder={platform.placeholder}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-accent outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              className="mt-6 w-full py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl text-xs shadow-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate {filledPlatforms.length} QR Code{filledPlatforms.length !== 1 ? 's' : ''}
            </button>
          </div>

          {/* Generated QR Codes */}
          {generated && filledPlatforms.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {displayName ? `${displayName}'s` : 'Your'} Social Media QR Codes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filledPlatforms.map(platform => (
                  <div key={platform.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="p-4 text-center" style={{ borderTop: `4px solid ${platform.color}` }}>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: platform.color }}>
                          {platform.label.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{platform.label}</span>
                      </div>
                      <div
                        ref={(el) => { qrRefs.current[platform.id] = el; }}
                        className="w-48 h-48 mx-auto flex items-center justify-center"
                      />
                      <p className="text-xs text-slate-500 mt-2 truncate">{getFullUrl(platform)}</p>
                    </div>
                    <div className="flex border-t border-slate-200">
                      <button
                        onClick={() => handleDownload(platform.id, 'png')}
                        className="flex-1 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors border-r border-slate-200"
                      >
                        PNG
                      </button>
                      <button
                        onClick={() => handleDownload(platform.id, 'svg')}
                        className="flex-1 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        SVG
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200/80 pt-12">
            <div className="text-center">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Brand-Matched Colors</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Each QR code automatically uses official platform colors for immediate recognition.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">All Platforms in One Place</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Instagram, YouTube, LinkedIn, X, TikTok, Telegram, WhatsApp — generate all at once.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Print Ready Vectors</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Download each code in high-resolution PNG or vector SVG format for crisp print output.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaQRPage;
