import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  // Title and the noindex robots directive come from SEOManager in App.tsx via
  // the 404 fallback in constants/routeMeta.ts. Handling them here as well
  // fought that effect: the cleanup restored "index, follow" on unmount, which
  // could leave a genuinely missing page marked indexable.

  const popularTools = [
    { title: 'WiFi QR Code Generator', path: '/wifi-qr-code-generator', desc: 'Connect to WiFi without typing passwords' },
    { title: 'URL Link QR Code', path: '/url-qr-code-generator', desc: 'Direct visitors to any website or landing page' },
    { title: 'vCard Contact QR Code', path: '/vcard-qr-code-generator', desc: 'Share digital business card contact details' },
    { title: 'WhatsApp QR Code', path: '/whatsapp-qr-code-generator', desc: 'Start chats with pre-filled support text' },
    { title: 'QR Code with Logo', path: '/qr-code-with-logo', desc: 'Embed your custom brand logo in high-res' },
    { title: 'SVG Vector QR Code', path: '/svg-qr-code-generator', desc: 'Scalable vector export for print media' },
  ];

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 py-16 text-center bg-neutral-50/50">
      <div className="max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            Go to Homepage
          </Link>
          <Link
            to="/faqs-qr-code-generator"
            className="px-6 py-3 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold border border-neutral-300 rounded-xl transition-all"
          >
            Help & FAQ
          </Link>
        </div>

        <div className="text-left bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
            Popular QR Code Generators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className="p-3 rounded-lg hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-colors group"
              >
                <div className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-600 transition-colors">
                  {tool.title} &rarr;
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">{tool.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
