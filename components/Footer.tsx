import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-[52px]">
        <div className="grid gap-10 lg:grid-cols-[40%_1fr]">

          {/* Left: CTA Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">QR Maker Studio</span>
            </div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Start creating professional QR Codes today!
            </h2>
            <p className="mb-6 text-base leading-relaxed text-neutral-400">
              Create unlimited, fully customizable QR Codes with our free tool. All processing happens in your browser — your data stays <em className="font-bold text-neutral-300">private</em> and <em className="font-bold text-neutral-300">secure</em>.
            </p>
            <Link
              to="/"
              onClick={(e) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  document.getElementById('qr-generator')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-button transition-colors duration-150 border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-6 py-2.5 text-sm"
            >
              Create QR Code Free
            </Link>
          </div>

          {/* Right: Link Columns */}
          <div className="md:grid md:grid-cols-4 md:gap-x-10 md:gap-y-8">

            {/* QR Code Types */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide">QR Code Types</h4>
              <ul className="space-y-3">
                <li><Link to="/url-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">URL / Website Link</Link></li>
                <li><Link to="/wifi-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">WiFi Network</Link></li>
                <li><Link to="/vcard-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">vCard Digital Card</Link></li>
                <li><Link to="/text-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Plain Text</Link></li>
                <li><Link to="/email-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Email Message</Link></li>
                <li><Link to="/sms-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">SMS Text</Link></li>
              </ul>
            </div>

            {/* More Types */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide">More Types</h4>
              <ul className="space-y-3">
                <li><Link to="/whatsapp-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">WhatsApp Chat</Link></li>
                <li><Link to="/facebook-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Social Media</Link></li>
                <li><Link to="/location-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Google Maps</Link></li>
                <li><Link to="/event-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Event Calendar</Link></li>
                <li><Link to="/crypto-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Crypto Address</Link></li>
                <li><Link to="/googleform-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Google Forms</Link></li>
                <li><Link to="/phone-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Phone Call</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog & Guides</Link></li>
                <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            {/* Support & Pricing */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide">Support</h4>
              <ul className="space-y-3">
                <li><Link to="/pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/faqs-qr-code-generator" className="text-sm text-neutral-400 hover:text-white transition-colors">Help & FAQ</Link></li>
                <li>
                  <a href="mailto:support@qr-generator.online" className="text-sm text-neutral-400 hover:text-white transition-colors underline">
                    support@qr-generator.online
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()}{' '}
              <span className="hover:text-white transition-colors">QR Maker Studio</span>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/qrgenerator.online"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <p className="text-sm text-neutral-500">Made with ❤️ for creators worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};