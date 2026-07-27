import React, { useState, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

interface QRGeneratorProps {
  type: string;
}

const QRGenerator: React.FC<QRGeneratorProps> = ({ type }) => {
  const [qrData, setQrData] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [dotsStyle, setDotsStyle] = useState<'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'extra-rounded'>('rounded');
  const [cornersSquareStyle, setCornersSquareStyle] = useState<'extra-rounded' | 'dot' | 'square'>('extra-rounded');
  const [cornersDotStyle, setCornersDotStyle] = useState<'dot' | 'square'>('dot');
  const qrRef = useRef<QRCodeStyling | null>(null);
  const qrContainerRef = useRef<HTMLDivElement>(null);

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: 'svg',
    data: qrData,
    image: logo ? URL.createObjectURL(logo) : '',
    dotsOptions: {
      color: foregroundColor,
      type: dotsStyle,
    },
    backgroundOptions: {
      color: backgroundColor,
    },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 10,
    },
    cornersSquareOptions: {
      color: foregroundColor,
      type: cornersSquareStyle,
    },
    cornersDotOptions: {
      color: foregroundColor,
      type: cornersDotStyle,
    },
    errorCorrectionLevel: errorCorrectionLevel,
  });

  const generateQR = () => {
    if (!qrData) return;
    
    qrCode.update({
      data: qrData,
      image: logo ? URL.createObjectURL(logo) : '',
      dotsOptions: {
        color: foregroundColor,
        type: dotsStyle,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
      cornersSquareOptions: {
        color: foregroundColor,
        type: cornersSquareStyle,
      },
      cornersDotOptions: {
        color: foregroundColor,
        type: cornersDotStyle,
      },
      errorCorrectionLevel: errorCorrectionLevel,
    });

    if (qrContainerRef.current) {
      qrContainerRef.current.innerHTML = '';
      qrCode.append(qrContainerRef.current);
    }
  };

  const downloadQR = (format: 'png' | 'svg' | 'jpeg') => {
    qrCode.download({ name: 'qrcode', extension: format });
  };

  const renderInputFields = () => {
    switch (type) {
      case 'url':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Website URL</label>
            <input
              type="url"
              placeholder="https://example.com"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        );
      case 'wifi':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Network Name (SSID)</label>
              <input
                type="text"
                placeholder="WiFi Network Name"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="WiFi Password"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        );
      case 'vcard':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        );
      case 'text':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Text Content</label>
            <textarea
              placeholder="Enter your text here"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
            />
          </div>
        );
      case 'email':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="recipient@example.com"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Email Subject"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        );
      case 'sms':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              />
            </div>
          </div>
        );
      case 'phone':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        );
      case 'whatsapp':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">WhatsApp Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message (optional)</label>
              <textarea
                placeholder="Pre-filled message"
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              />
            </div>
          </div>
        );
      case 'facebook':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Facebook Profile URL</label>
            <input
              type="url"
              placeholder="https://facebook.com/username"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        );
      case 'location':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Latitude</label>
              <input
                type="text"
                placeholder="40.7128"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Longitude</label>
              <input
                type="text"
                placeholder="-74.0060"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        );
      case 'event':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Event Title</label>
              <input
                type="text"
                placeholder="Event Name"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date & Time</label>
              <input
                type="datetime-local"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        );
      case 'crypto':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Cryptocurrency Address</label>
            <input
              type="text"
              placeholder="Bitcoin, Ethereum, etc. address"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        );
      case 'googleform':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Google Form URL</label>
            <input
              type="url"
              placeholder="https://forms.google.com/..."
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        );
      default:
        return (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Enter Data</label>
            <input
              type="text"
              placeholder="Enter your data"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Enter {type.charAt(0).toUpperCase() + type.slice(1)} Details</h3>
        {renderInputFields()}
      </div>

      {/* Customization Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Customize QR Code</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Foreground Color</label>
            <input
              type="color"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Background Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Error Correction</label>
            <select
              value={errorCorrectionLevel}
              onChange={(e) => setErrorCorrectionLevel(e.target.value as any)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="L">Low (7%)</option>
              <option value="M">Medium (15%)</option>
              <option value="Q">Quartile (25%)</option>
              <option value="H">High (30%)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Dots Style</label>
            <select
              value={dotsStyle}
              onChange={(e) => setDotsStyle(e.target.value as any)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="rounded">Rounded</option>
              <option value="dots">Dots</option>
              <option value="classy">Classy</option>
              <option value="classy-rounded">Classy Rounded</option>
              <option value="extra-rounded">Extra Rounded</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Add Logo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files?.[0] || null)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateQR}
        className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg"
      >
        Generate QR Code
      </button>

      {/* QR Preview */}
      {qrData && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">QR Code Preview</h3>
          <div ref={qrContainerRef} className="flex justify-center" />
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => downloadQR('png')}
              className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
            >
              Download PNG
            </button>
            <button
              onClick={() => downloadQR('svg')}
              className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
            >
              Download SVG
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;