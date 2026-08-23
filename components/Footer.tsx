import React from 'react';
import Link from './LocaleLink';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../translations';

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
  tKey?: TranslationKey;
}

interface FooterGroup {
  heading?: string;
  headingTKey?: TranslationKey;
  links: FooterLink[];
}

const FOOTER_GROUPS: FooterGroup[] = [
  {
    headingTKey: 'nav_tools',
    links: [
      { to: '/url-qr-code-generator', tKey: 'tab_url_label' },
      { to: '/wifi-qr-code-generator', tKey: 'tab_wifi_label' },
      { to: '/vcard-qr-code-generator', tKey: 'tab_vcard_label' },
      { to: '/text-qr-code-generator', tKey: 'tab_text_label' },
      { to: '/email-qr-code-generator', tKey: 'tab_email_label' },
      { to: '/sms-qr-code-generator', tKey: 'tab_sms_label' },
      { to: '/phone-qr-code-generator', tKey: 'tab_phone_label' },
      { to: '/location-qr-code-generator', tKey: 'tab_location_label' },
      { to: '/event-qr-code-generator', tKey: 'tab_event_label' },
      { to: '/crypto-qr-code-generator', tKey: 'tab_crypto_label' },
      { to: '/googleform-qr-code-generator', tKey: 'tab_googleform_label' },
      { to: '/whatsapp-qr-code-generator', tKey: 'tab_whatsapp_label' }
    ]
  },
  {
    headingTKey: 'footer_group_social',
    links: [
      { to: '/facebook-qr-code-generator', tKey: 'tab_facebook_label' },
      { to: '/instagram-qr-code-generator', tKey: 'tab_instagram_label' },
      { to: '/youtube-qr-code-generator', tKey: 'tab_youtube_label' },
      { to: '/linkedin-qr-code-generator', tKey: 'tab_linkedin_label' },
      { to: '/twitter-qr-code-generator', tKey: 'tab_twitter_label' },
      { to: '/tiktok-qr-code-generator', tKey: 'tab_tiktok_label' },
      { to: '/telegram-qr-code-generator', tKey: 'tab_telegram_label' },
      { to: '/social-media-qr-code', tKey: 'footer_social_media_qr' },
      { to: '/paypal-qr-code-generator', tKey: 'tab_paypal_label' },
      { to: '/upi-qr-code-generator', tKey: 'tab_upi_label' }
    ]
  },
  {
    headingTKey: 'footer_group_tools',
    links: [
      { to: '/pdf-qr-code-generator', tKey: 'footer_pdf_qr' },
      { to: '/app-store-qr-code-generator', tKey: 'footer_app_store_qr' },
      { to: '/bulk-qr-code-generator', tKey: 'footer_bulk_qr' },
      { to: '/qr-code-scanner', tKey: 'footer_qr_scanner' },
      { to: '/qr-code-with-logo', tKey: 'feature_logo' },
      { to: '/custom-qr-codes', tKey: 'feature_custom' },
      { to: '/colored-qr-code-generator', tKey: 'feature_color' },
      { to: '/svg-qr-code-generator', tKey: 'feature_svg' },
      { to: '/high-resolution-qr-codes', tKey: 'feature_hd' }
    ]
  },
  {
    headingTKey: 'footer_group_blog',
    links: [
      { to: '/blog', tKey: 'footer_blog_all' },
      { to: '/blog/qr-codes-for-restaurants', tKey: 'footer_blog_restaurants' },
      { to: '/blog/printing-qr-codes-guide', tKey: 'footer_blog_printing' },
      { to: '/blog/vcard-qr-code-business-cards', tKey: 'footer_blog_vcard' },
      { to: '/blog/qr-codes-for-real-estate', tKey: 'footer_blog_realestate' },
      { to: '/blog/wifi-qr-codes-for-hospitality', tKey: 'footer_blog_hospitality' }
    ]
  },
  {
    headingTKey: 'footer_company_title',
    links: [
      { to: '/pricing', tKey: 'nav_pricing' },
      { to: '/faqs-qr-code-generator', tKey: 'nav_faq' },
      { to: '/about', tKey: 'nav_about' },
      { to: '/contact', tKey: 'nav_contact' },
      { to: '/privacy', tKey: 'footer_privacy' },
      { to: '/terms', tKey: 'footer_terms' },
      { to: '/login', tKey: 'footer_login' },
      { to: '/signup', tKey: 'footer_signup' }
    ]
  }
];

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
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
            <p className="text-sm leading-relaxed text-slate-400">{t('footer_desc')}</p>
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
                      className="text-sm text-slate-400 transition-colors hover:text-white"
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
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()}{' '}
              <span className="transition-colors hover:text-white">QR Generator Online</span>
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/qrgenerator.online"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>



            </div>

            <p className="text-sm text-slate-400">Made with ❤️ for creators worldwide</p>
          </div>

          {/* The site publishes pages named after third-party services
              (WhatsApp, PayPal, Instagram, Google Forms, UPI apps and others).
              Naming a service to describe what a tool does is ordinary
              nominative use, but stating the lack of affiliation explicitly is
              what keeps that clear to both users and the brand owners. */}
          <p className="mt-4 border-t border-white/5 pt-4 text-center text-xs leading-relaxed text-slate-400">
            QR Code is a registered trademark of Denso Wave Incorporated. All other product and
            company names, logos and brands referenced on this site — including WhatsApp, PayPal,
            Instagram, Facebook, YouTube, LinkedIn, X, TikTok, Telegram, Google Forms, Google Maps,
            the App Store, Google Play, Paytm and PhonePe — are the property of their respective
            owners. QR Generator Online is an independent tool and is not affiliated with,
            endorsed by, or sponsored by any of them.
          </p>
        </div>
      </div>
    </footer>
  );
};
