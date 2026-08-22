import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/**
 * Footer link groups.
 *
 * Declared as data rather than hand-written markup so the columns stay
 * balanced. The previous version listed all 21 QR types in a single <ul>,
 * which rendered as one column roughly three times taller than its
 * neighbours. Groups here mirror FOOTER_GROUPS in scripts/prerender.js so the
 * static HTML and the rendered footer agree.
 *
 * `tKey` pulls a translated label; `label` is used verbatim.
 */
interface FooterLink {
  to: string;
  label?: string;
  tKey?: string;
}

interface FooterGroup {
  heading?: string;
  headingTKey?: string;
  links: FooterLink[];
}

const FOOTER_GROUPS: FooterGroup[] = [
  {
    headingTKey: 'nav_tools',
    links: [
      { to: '/url-qr-code-generator', tKey: 'tool_url' },
      { to: '/wifi-qr-code-generator', tKey: 'tool_wifi' },
      { to: '/vcard-qr-code-generator', tKey: 'tool_vcard' },
      { to: '/text-qr-code-generator', tKey: 'tool_text' },
      { to: '/email-qr-code-generator', tKey: 'tool_email' },
      { to: '/sms-qr-code-generator', tKey: 'tool_sms' },
      { to: '/phone-qr-code-generator', label: 'Phone QR' },
      { to: '/location-qr-code-generator', label: 'Location QR' },
      { to: '/event-qr-code-generator', label: 'Event QR' },
      { to: '/crypto-qr-code-generator', label: 'Crypto QR' },
      { to: '/googleform-qr-code-generator', label: 'Google Forms QR' },
      { to: '/whatsapp-qr-code-generator', label: 'WhatsApp QR' }
    ]
  },
  {
    heading: 'Social & Payment',
    links: [
      { to: '/facebook-qr-code-generator', label: 'Facebook QR' },
      { to: '/instagram-qr-code-generator', label: 'Instagram QR' },
      { to: '/youtube-qr-code-generator', label: 'YouTube QR' },
      { to: '/linkedin-qr-code-generator', label: 'LinkedIn QR' },
      { to: '/twitter-qr-code-generator', label: 'Twitter / X QR' },
      { to: '/tiktok-qr-code-generator', label: 'TikTok QR' },
      { to: '/telegram-qr-code-generator', label: 'Telegram QR' },
      { to: '/social-media-qr-code', label: 'Social Media QR' },
      { to: '/paypal-qr-code-generator', label: 'PayPal Payment QR' },
      { to: '/upi-qr-code-generator', label: 'UPI Payment QR' }
    ]
  },
  {
    heading: 'Tools & Features',
    links: [
      { to: '/pdf-qr-code-generator', label: 'PDF to QR Code' },
      { to: '/app-store-qr-code-generator', label: 'App Store QR' },
      { to: '/bulk-qr-code-generator', label: 'Bulk QR Generator' },
      { to: '/qr-code-scanner', label: 'QR Code Scanner' },
      { to: '/qr-code-with-logo', tKey: 'feature_logo' },
      { to: '/custom-qr-codes', tKey: 'feature_custom' },
      { to: '/colored-qr-code-generator', tKey: 'feature_color' },
      { to: '/svg-qr-code-generator', tKey: 'feature_svg' },
      { to: '/high-resolution-qr-codes', tKey: 'feature_hd' }
    ]
  },
  {
    heading: 'Guides & Blog',
    links: [
      { to: '/blog', label: 'All Articles' },
      { to: '/blog/qr-codes-for-restaurants', label: 'Restaurant QR Menus' },
      { to: '/blog/printing-qr-codes-guide', label: 'Printing QR Codes' },
      { to: '/blog/vcard-qr-code-business-cards', label: 'vCard Business Cards' },
      { to: '/blog/qr-codes-for-real-estate', label: 'Real Estate QR' },
      { to: '/blog/wifi-qr-codes-for-hospitality', label: 'Hospitality WiFi QR' }
    ]
  },
  {
    headingTKey: 'footer_company_title',
    links: [
      { to: '/pricing', tKey: 'nav_pricing' },
      { to: '/faqs-qr-code-generator', tKey: 'nav_faq' },
      { to: '/about', tKey: 'nav_about' },
      { to: '/contact', tKey: 'nav_contact' },
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Use' },
      { to: '/login', label: 'Log In' },
      { to: '/signup', label: 'Sign Up Free' }
    ]
  }
];

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* ── Brand & CTA band ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">QR Generator Online</span>
            </div>
            <h2 className="mb-2 text-xl font-bold text-white">{t('home_cta_primary')}</h2>
            <p className="text-sm leading-relaxed text-neutral-400">{t('footer_desc')}</p>
          </div>

          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                document.getElementById('qr-generator')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-button border-2 border-transparent bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-dark"
          >
            {t('cta_create_free')}
          </Link>
        </div>

        {/* ── Link columns ─────────────────────────────────────────────── */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-9 pt-10 sm:grid-cols-3 lg:grid-cols-5"
        >
          {FOOTER_GROUPS.map((group, gi) => (
            <div key={gi}>
              <h4 className="mb-4 text-sm font-bold tracking-wide text-white">
                {group.headingTKey ? t(group.headingTKey) : group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.tKey ? t(link.tKey) : link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="pt-8">
          <a
            href="mailto:support@qr-generator.online"
            className="text-xs text-emerald-400 hover:underline"
          >
            support@qr-generator.online
          </a>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()}{' '}
              <span className="transition-colors hover:text-white">QR Generator Online</span>
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/qrgenerator.online"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
