import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';

const SOCIAL_PLATFORMS = [
  { id: 'instagram', label: 'Instagram', prefix: 'https://instagram.com/', placeholder: 'username', color: '#E1306C', icon: '📸' },
  { id: 'youtube', label: 'YouTube', prefix: '', placeholder: 'https://youtube.com/@channel', color: '#FF0000', icon: '🎬' },
  { id: 'linkedin', label: 'LinkedIn', prefix: '', placeholder: 'https://linkedin.com/in/name', color: '#0A66C2', icon: '💼' },
  { id: 'twitter', label: 'Twitter / X', prefix: 'https://x.com/', placeholder: 'handle', color: '#1DA1F2', icon: '🐦' },
  { id: 'tiktok', label: 'TikTok', prefix: 'https://tiktok.com/@', placeholder: 'username', color: '#00F2EA', icon: '🎵' },
  { id: 'facebook', label: 'Facebook', prefix: '', placeholder: 'https://facebook.com/page', color: '#1877F2', icon: '📘' },
  { id: 'telegram', label: 'Telegram', prefix: 'https://t.me/', placeholder: 'username', color: '#0088CC', icon: '✈️' },
  { id: 'whatsapp', label: 'WhatsApp', prefix: 'https://wa.me/', placeholder: 'phone number', color: '#25D366', icon: '💬' },
  { id: 'website', label: 'Website', prefix: '', placeholder: 'https://yoursite.com', color: '#6366F1', icon: '🌐' },
  { id: 'email', label: 'Email', prefix: 'mailto:', placeholder: 'you@email.com', color: '#EA4335', icon: '📧' },
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
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Social Media QR
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Social Media QR Code Generator — All Platforms
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create branded QR codes for all your social media profiles. Each platform gets its own color-matched QR code. Share them on business cards, flyers, and packaging.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
            {/* Display Name */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 mb-2">Your Name / Brand</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Name or Business Name"
                className="w-full max-w-md px-4 py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Platform Inputs */}
            <h2 className="text-lg font-bold text-gray-900 mb-4">Enter Your Social Media Profiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOCIAL_PLATFORMS.map(platform => (
                <div key={platform.id} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <span className="text-xl w-8 text-center shrink-0">{platform.icon}</span>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-bold text-slate-600 mb-1">{platform.label}</label>
                    <input
                      type="text"
                      value={inputs[platform.id] || ''}
                      onChange={(e) => handleInputChange(platform.id, e.target.value)}
                      placeholder={platform.placeholder}
                      className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-indigo-400 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={filledPlatforms.length === 0}
              className="mt-6 w-full max-w-md py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                        <span className="text-xl">{platform.icon}</span>
                        <span className="font-bold text-gray-900">{platform.label}</span>
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
                        className="flex-1 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors border-r border-slate-200"
                      >
                        PNG
                      </button>
                      <button
                        onClick={() => handleDownload(platform.id, 'svg')}
                        className="flex-1 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Brand-Matched Colors</h3>
              <p className="text-sm text-gray-600">Each QR code automatically uses the official platform colors for instant recognition by your audience.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">All Platforms in One Place</h3>
              <p className="text-sm text-gray-600">Instagram, YouTube, LinkedIn, Twitter/X, TikTok, Telegram, WhatsApp, Facebook — generate all at once.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🖨️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Print Ready</h3>
              <p className="text-sm text-gray-600">Download each QR code in high-resolution PNG or vector SVG format. Perfect for business cards and marketing materials.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaQRPage;
