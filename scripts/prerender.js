import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOOL_RICH_DATA } from './toolRichData.js';
import { FEATURE_RICH_DATA } from './featureRichData.js';
import { BLOG_RICH_DATA } from './blogRichData.js';
import { COMPANY_RICH_DATA } from './companyRichData.js';
// Route copy is shared with the React app so the prerendered HTML and the
// client-rendered DOM stay in lockstep. See scripts/routeContent.js.
import { ROUTE_CONTENT as ROUTES } from './routeContent.js';
import { getSectionHeadings } from './sectionHeadings.js';
// Copy lifted from the utility page components at build time so the static
// HTML matches what those pages actually render. See extractPageContent.js.
import { GENERATED_PAGE_CONTENT } from './generatedPageContent.js';
import { ROUTED_LOCALES, ROUTE_META_I18N } from './routeMetaI18nData.js';
import { RICH_CONTENT_I18N } from './richContentI18nData.js';
import { TOOL_GRID } from './toolGrid.js';
import { translations } from './uiStringsData.js';

/** Localized UI string, falling back to English. Mirrors getTranslation(). */
const ui = (locale, key) =>
  (locale && translations[locale] && translations[locale][key]) ||
  translations.en[key] ||
  key;


const ALL_RICH_DATA = {
  ...TOOL_RICH_DATA,
  ...FEATURE_RICH_DATA,
  ...BLOG_RICH_DATA,
  ...COMPANY_RICH_DATA
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');



const LINK_LABELS = {
  '/url-qr-code-generator': 'URL QR Code',
  '/wifi-qr-code-generator': 'WiFi QR Code',
  '/vcard-qr-code-generator': 'vCard QR Code',
  '/googleform-qr-code-generator': 'Google Forms QR',
  '/whatsapp-qr-code-generator': 'WhatsApp QR',
  '/text-qr-code-generator': 'Text QR Code',
  '/email-qr-code-generator': 'Email QR Code',
  '/sms-qr-code-generator': 'SMS QR Code',
  '/phone-qr-code-generator': 'Phone QR Code',
  '/location-qr-code-generator': 'Location QR Code',
  '/crypto-qr-code-generator': 'Crypto QR Code',
  '/event-qr-code-generator': 'Event QR Code',
  '/facebook-qr-code-generator': 'Facebook QR Code',
  '/instagram-qr-code-generator': 'Instagram QR Code',
  '/youtube-qr-code-generator': 'YouTube QR Code',
  '/linkedin-qr-code-generator': 'LinkedIn QR Code',
  '/twitter-qr-code-generator': 'Twitter / X QR',
  '/tiktok-qr-code-generator': 'TikTok QR Code',
  '/telegram-qr-code-generator': 'Telegram QR Code',
  '/paypal-qr-code-generator': 'PayPal Payment QR',
  '/upi-qr-code-generator': 'UPI Payment QR',
  '/pdf-qr-code-generator': 'PDF to QR Code',
  '/app-store-qr-code-generator': 'App Store QR',
  '/bulk-qr-code-generator': 'Bulk QR Generator',
  '/qr-code-scanner': 'QR Code Scanner',
  '/social-media-qr-code': 'Social Media QR',
  '/qr-code-with-logo': 'QR Code with Logo',
  '/custom-qr-codes': 'Custom QR Codes',
  '/colored-qr-code-generator': 'Colored QR Code',
  '/svg-qr-code-generator': 'SVG Vector QR',
  '/high-resolution-qr-codes': 'High Resolution QR',
  '/blog': 'Blog',
  '/blog/qr-codes-for-restaurants': 'Restaurant QR Menus',
  '/blog/printing-qr-codes-guide': 'Printing QR Guide',
  '/blog/vcard-qr-code-business-cards': 'vCard Business Cards',
  '/blog/qr-codes-for-real-estate': 'Real Estate QR',
  '/blog/wifi-qr-codes-for-hospitality': 'Hospitality WiFi QR',
  '/blog/how-to-scan-qr-code': 'How to Scan QR Codes',
  '/blog/do-qr-codes-expire': 'Do QR Codes Expire?',
  '/blog/share-wifi-password-qr-code': 'Share WiFi via QR',
  '/pricing': 'Pricing',
  '/faqs-qr-code-generator': 'Help & FAQ',
  '/about': 'About Us',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/login': 'Log In',
  '/signup': 'Sign Up Free'
};

/**
 * Footer groups, declared by path rather than by array slice.
 *
 * The previous version sliced one flat array by index (0-13, 13-18, 21-27),
 * which both mislabelled sections and silently dropped six pages from the
 * footer entirely. Those pages then had no inbound link anywhere in the static
 * HTML — invisible to any crawler that does not execute JavaScript.
 */
const FOOTER_GROUPS = [
  {
    headingKey: 'nav_tools',
    hrefs: [
      '/url-qr-code-generator', '/wifi-qr-code-generator', '/vcard-qr-code-generator',
      '/text-qr-code-generator', '/email-qr-code-generator', '/sms-qr-code-generator',
      '/phone-qr-code-generator', '/location-qr-code-generator', '/event-qr-code-generator',
      '/crypto-qr-code-generator', '/googleform-qr-code-generator', '/whatsapp-qr-code-generator'
    ]
  },
  {
    headingKey: 'footer_group_social',
    hrefs: [
      '/facebook-qr-code-generator', '/instagram-qr-code-generator', '/youtube-qr-code-generator',
      '/linkedin-qr-code-generator', '/twitter-qr-code-generator', '/tiktok-qr-code-generator',
      '/telegram-qr-code-generator', '/social-media-qr-code',
      '/paypal-qr-code-generator', '/upi-qr-code-generator'
    ]
  },
  {
    headingKey: 'footer_group_tools',
    hrefs: [
      '/pdf-qr-code-generator', '/app-store-qr-code-generator', '/bulk-qr-code-generator',
      '/qr-code-scanner', '/qr-code-with-logo', '/custom-qr-codes',
      '/colored-qr-code-generator', '/svg-qr-code-generator', '/high-resolution-qr-codes'
    ]
  },
  {
    headingKey: 'footer_group_blog',
    hrefs: [
      '/blog', '/blog/qr-codes-for-restaurants', '/blog/printing-qr-codes-guide',
      '/blog/vcard-qr-code-business-cards', '/blog/qr-codes-for-real-estate',
      '/blog/wifi-qr-codes-for-hospitality', '/blog/how-to-scan-qr-code',
      '/blog/do-qr-codes-expire', '/blog/share-wifi-password-qr-code'
    ]
  },
  {
    headingKey: 'footer_company_title',
    hrefs: ['/pricing', '/faqs-qr-code-generator', '/about', '/contact', '/privacy', '/terms', '/login', '/signup']
  }
];


/**
 * Locale-correct internal href.
 *
 * Only prefixes when that (locale, path) pair actually has a translation, so
 * navigation never points at a URL the prerenderer did not write. Untranslated
 * or noindex targets (/login, /signup) correctly stay on the English page.
 */
const localeHref = (locale, href) =>
  locale && ROUTE_META_I18N[locale] && ROUTE_META_I18N[locale][href]
    ? `/${locale}${href === '/' ? '' : href}`
    : href;


/**
 * Translation key per footer link, mirroring FOOTER_GROUPS in
 * components/Footer.tsx so the prerendered footer and the React footer read
 * identically in every language. Paths absent here fall back to LINK_LABELS.
 */
const FOOTER_LABEL_KEYS = {
  '/url-qr-code-generator': 'tab_url_label',
  '/wifi-qr-code-generator': 'tab_wifi_label',
  '/vcard-qr-code-generator': 'tab_vcard_label',
  '/text-qr-code-generator': 'tab_text_label',
  '/email-qr-code-generator': 'tab_email_label',
  '/sms-qr-code-generator': 'tab_sms_label',
  '/phone-qr-code-generator': 'tab_phone_label',
  '/location-qr-code-generator': 'tab_location_label',
  '/event-qr-code-generator': 'tab_event_label',
  '/crypto-qr-code-generator': 'tab_crypto_label',
  '/googleform-qr-code-generator': 'tab_googleform_label',
  '/whatsapp-qr-code-generator': 'tab_whatsapp_label',
  '/facebook-qr-code-generator': 'tab_facebook_label',
  '/instagram-qr-code-generator': 'tab_instagram_label',
  '/youtube-qr-code-generator': 'tab_youtube_label',
  '/linkedin-qr-code-generator': 'tab_linkedin_label',
  '/twitter-qr-code-generator': 'tab_twitter_label',
  '/tiktok-qr-code-generator': 'tab_tiktok_label',
  '/telegram-qr-code-generator': 'tab_telegram_label',
  '/paypal-qr-code-generator': 'tab_paypal_label',
  '/upi-qr-code-generator': 'tab_upi_label',
  '/social-media-qr-code': 'footer_social_media_qr',
  '/pdf-qr-code-generator': 'footer_pdf_qr',
  '/app-store-qr-code-generator': 'footer_app_store_qr',
  '/bulk-qr-code-generator': 'footer_bulk_qr',
  '/qr-code-scanner': 'footer_qr_scanner',
  '/qr-code-with-logo': 'feature_logo',
  '/custom-qr-codes': 'feature_custom',
  '/colored-qr-code-generator': 'feature_color',
  '/svg-qr-code-generator': 'feature_svg',
  '/high-resolution-qr-codes': 'feature_hd',
  '/blog': 'footer_blog_all',
  '/blog/qr-codes-for-restaurants': 'footer_blog_restaurants',
  '/blog/printing-qr-codes-guide': 'footer_blog_printing',
  '/blog/vcard-qr-code-business-cards': 'footer_blog_vcard',
  '/blog/qr-codes-for-real-estate': 'footer_blog_realestate',
  '/blog/wifi-qr-codes-for-hospitality': 'footer_blog_hospitality',
  '/pricing': 'nav_pricing',
  '/faqs-qr-code-generator': 'nav_faq',
  '/about': 'nav_about',
  '/contact': 'nav_contact',
  '/privacy': 'footer_privacy',
  '/terms': 'footer_terms',
  '/login': 'footer_login',
  '/signup': 'footer_signup'
};

const FOOTER_LINK_LABEL = (locale, href) =>
  FOOTER_LABEL_KEYS[href] ? ui(locale, FOOTER_LABEL_KEYS[href]) : (LINK_LABELS[href] || href);

/** "Home" in each routed locale, for the prerendered header nav. */
const HOME_NAV_LABEL = { ar: 'الرئيسية', hi: 'होम', tr: 'Ana Sayfa', es: 'Inicio', vi: 'Trang chủ' };

function buildHeaderHtml(locale) {
  // Deep links (tool/company pages) stay English in phase 1 — see the module
  // header comment. Only the home link stays inside the current locale,
  // matching the React header (components/Header.tsx `homeHref`).
  const homeHref = locale ? `/${locale}` : '/';
  return `
    <header class="prerender-header" style="background:#ffffff; border-bottom:1px solid #E2E8F0; padding:16px 24px;">
      <div style="max-width:1280px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <a href="${homeHref}" style="display:flex; align-items:center; gap:8px; font-weight:800; font-size:20px; color:#0F172A; text-decoration:none;">
          <span style="display:inline-block; width:28px; height:28px; background:#2B6F53; border-radius:6px;"></span>
          QR Generator Online
        </a>
        <nav style="display:flex; gap:16px; flex-wrap:wrap; font-size:14px; font-weight:600;">
          <a href="${homeHref}" style="color:#2B6F53; text-decoration:none;">${HOME_NAV_LABEL[locale] || 'Home'}</a>
          <a href="${localeHref(locale, '/wifi-qr-code-generator')}" style="color:#475569; text-decoration:none;">${ui(locale, 'tab_wifi_label')}</a>
          <a href="${localeHref(locale, '/url-qr-code-generator')}" style="color:#475569; text-decoration:none;">${ui(locale, 'tab_url_label')}</a>
          <a href="${localeHref(locale, '/vcard-qr-code-generator')}" style="color:#475569; text-decoration:none;">${ui(locale, 'tab_vcard_label')}</a>
          <a href="${localeHref(locale, '/qr-code-with-logo')}" style="color:#475569; text-decoration:none;">${ui(locale, 'feature_logo')}</a>
          <a href="${localeHref(locale, '/pricing')}" style="color:#475569; text-decoration:none;">${ui(locale, 'nav_pricing')}</a>
          <a href="${localeHref(locale, '/faqs-qr-code-generator')}" style="color:#475569; text-decoration:none;">${ui(locale, 'nav_faq')}</a>
          <a href="${localeHref(locale, '/blog')}" style="color:#475569; text-decoration:none;">${ui(locale, 'nav_blog')}</a>
        </nav>
      </div>
    </header>
  `;
}

function buildFooterHtml(locale) {
  const columns = FOOTER_GROUPS.map(group => {
    const items = group.hrefs.map(href =>
      `<li><a href="${localeHref(locale, href)}" style="color:#94A3B8; text-decoration:none; font-size:13px; display:block; padding:3px 0;">${FOOTER_LINK_LABEL(locale, href)}</a></li>`
    ).join('');
    return `
          <div>
            <h4 style="font-size:14px; font-weight:700; color:#ffffff; margin-bottom:16px; text-transform:uppercase; letter-spacing:0.05em;">${ui(locale, group.headingKey)}</h4>
            <ul style="list-style:none; padding:0; margin:0;">${items}</ul>
          </div>`;
  }).join('');

  return `
    <footer class="prerender-footer" style="background:#0F172A; color:#ffffff; padding:52px 24px 32px;">
      <div style="max-width:1280px; margin:0 auto;">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:36px; margin-bottom:40px;">${columns}
        </div>
        <div style="margin-bottom:24px;"><a href="mailto:support@qr-generator.online" style="color:#A8D5C2; font-size:12px; text-decoration:none;">support@qr-generator.online</a></div>
        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:24px; text-align:center; color:#94A3B8; font-size:13px;">
          <p>© ${new Date().getFullYear()} QR Generator Online. All rights reserved. Free QR Code Generator.</p>
          <p style="margin-top:12px; font-size:11px; line-height:1.7; color:#64748B;">QR Code is a registered trademark of Denso Wave Incorporated. All other product and company names, logos and brands referenced on this site &mdash; including WhatsApp, PayPal, Instagram, Facebook, YouTube, LinkedIn, X, TikTok, Telegram, Google Forms, Google Maps, the App Store, Google Play, Paytm and PhonePe &mdash; are the property of their respective owners. QR Generator Online is an independent tool and is not affiliated with, endorsed by, or sponsored by any of them.</p>
        </div>
      </div>
    </footer>
  `;
}

function buildBodyHtml(route) {
  // Utility pages keep their copy in JSX; extractPageContent.js pulls it out
  // at build time so the prerendered HTML is not thinner than the rendered DOM.
  // Locale variants prefer a translated intro (same shape, carried on the
  // localized rich-content entry) over the English route.sections/generated
  // fallback — never mixed, so the static HTML always agrees with the
  // client-rendered DOM for a given locale.
  const localizedSections = route.locale ? RICH_CONTENT_I18N[route.locale]?.[route.path]?.sections : null;
  const generated = GENERATED_PAGE_CONTENT[route.path] || [];
  const allSections = localizedSections?.length ? localizedSections : [...(route.sections || []), ...generated];

  const sectionsHtml = allSections.map(sec => `
    <div style="margin-bottom:28px;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:12px;">${sec.title}</h2>
      ${sec.paragraphs.map(p => `<p style="color:#475569; font-size:15px; line-height:1.7; margin-bottom:12px;">${p}</p>`).join('')}
    </div>
  `).join('');

  // Look up rich structured data for all routes (tools, features, blog, company).
  // Locale variants prefer a translated override; untranslated pages fall
  // back to the English object whole (never a per-field language mix).
  const localizedRich = route.locale ? RICH_CONTENT_I18N[route.locale]?.[route.path] : null;
  const rich = localizedRich || ALL_RICH_DATA[route.path] || null;
  const chrome = {
    technicalBadge: ui(route.locale, 'rich_technical_badge'),
    faqsSubtitle: ui(route.locale, 'rich_faqs_subtitle')
  };

  // Section headings are page-specific; see scripts/sectionHeadings.js.
  const headings = getSectionHeadings(route.path, route.locale);

  const techOverviewHtml = rich && rich.technicalOverview ? `
    <section style="margin-top:40px; padding:32px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:16px;">
      <div style="display:inline-block; padding:4px 12px; background:rgba(43,111,83,0.1); color:#2B6F53; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; border-radius:9999px; margin-bottom:12px;">
        ${chrome.technicalBadge}
      </div>
      <h2 style="font-size:24px; font-weight:800; color:#0F172A; margin-bottom:16px;">${rich.technicalOverview.title}</h2>
      ${rich.technicalOverview.paragraphs.map(p => `<p style="color:#475569; font-size:15px; line-height:1.75; margin-bottom:14px;">${p}</p>`).join('')}
    </section>
  ` : '';

  const comparisonTableHtml = rich && rich.comparisonTable ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:20px; text-align:center;">${rich.comparisonTable.title}</h2>
      <div style="overflow-x:auto; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; background:#fff; border:1px solid #E2E8F0; border-radius:12px; font-size:14px; text-align:left;">
          <thead>
            <tr style="background:#F1F5F9; border-bottom:2px solid #E2E8F0;">
              ${rich.comparisonTable.headers.map((h, i) => `<th style="padding:14px 16px; font-weight:700; color:${i === 1 ? '#1F5A42' : '#0F172A'};">${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rich.comparisonTable.rows.map((row, idx) => `
              <tr style="border-bottom:1px solid #E2E8F0; background:${idx % 2 === 0 ? '#fff' : '#F8FAFC'};">
                <td style="padding:12px 16px; font-weight:600; color:#1E293B;">${row[0]}</td>
                <td style="padding:12px 16px; color:#1F5A42; font-weight:600;">${row[1]}</td>
                <td style="padding:12px 16px; color:#64748B;">${row[2]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  const stepsHtml = rich && rich.steps ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:20px; text-align:center;">${headings.steps}</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px,1fr)); gap:16px;">
        ${rich.steps.map(s => `
          <div style="background:#fff; border:1px solid #E2E8F0; border-radius:12px; padding:22px;">
            <div style="width:36px; height:36px; background:#2B6F53; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:15px; margin-bottom:12px;">${s.number}</div>
            <h3 style="font-size:16px; font-weight:700; color:#0F172A; margin-bottom:8px;">${s.title}</h3>
            <p style="font-size:13px; color:#64748B; line-height:1.6; margin:0;">${s.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const featuresHtml = rich && rich.features ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:20px; text-align:center;">${headings.features}</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:16px;">
        ${rich.features.map(f => `
          <div style="background:#EEF6F2; border:1px solid #CBE5DA; border-radius:12px; padding:20px;">
            <h3 style="font-size:15px; font-weight:700; color:#1F5A42; margin-bottom:8px;">${f.title}</h3>
            <p style="font-size:13px; color:#475569; line-height:1.6; margin:0;">${f.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const sizingMatrixHtml = rich && rich.sizingMatrix ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:10px; text-align:center;">${rich.sizingMatrix.title}</h2>
      <p style="text-align:center; color:#64748B; font-size:14px; max-width:720px; margin:0 auto 20px;">${rich.sizingMatrix.description}</p>
      <div style="overflow-x:auto; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; background:#fff; border:1px solid #E2E8F0; border-radius:12px; font-size:13px; text-align:left;">
          <thead>
            <tr style="background:#F1F5F9; border-bottom:2px solid #E2E8F0;">
              ${rich.sizingMatrix.headers.map(h => `<th style="padding:12px 14px; font-weight:700; color:#0F172A;">${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rich.sizingMatrix.rows.map((row, idx) => `
              <tr style="border-bottom:1px solid #E2E8F0; background:${idx % 2 === 0 ? '#fff' : '#F8FAFC'};">
                <td style="padding:10px 14px; font-weight:600; color:#1E293B;">${row[0]}</td>
                <td style="padding:10px 14px; color:#475569;">${row[1]}</td>
                <td style="padding:10px 14px; color:#1F5A42; font-weight:600;">${row[2]}</td>
                <td style="padding:10px 14px; color:#64748B;">${row[3]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  const useCasesHtml = rich && rich.useCases ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:20px; text-align:center;">${headings.useCases}</h2>
      <ul style="list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:16px;">
        ${rich.useCases.map((u, i) => `
          <li style="background:#fff; border:1px solid #E2E8F0; border-radius:12px; padding:20px;">
            <div style="width:26px; height:26px; background:#2B6F53; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:12px; margin-bottom:10px;">${i+1}</div>
            <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin-bottom:6px;">${u.title}</h3>
            <p style="font-size:13px; color:#64748B; line-height:1.6; margin:0;">${u.description}</p>
          </li>
        `).join('')}
      </ul>
    </section>
  ` : '';

  const troubleshootingHtml = rich && rich.troubleshooting ? `
    <section style="margin-top:48px; padding:28px 32px; background:#FEF2F2; border:1px solid #FECACA; border-radius:16px;">
      <h2 style="font-size:20px; font-weight:800; color:#991B1B; margin-bottom:16px;">${rich.troubleshooting.title}</h2>
      <ul style="margin:0; padding-left:20px; color:#7F1D1D; font-size:14px; line-height:1.75;">
        ${rich.troubleshooting.points.map(pt => `<li style="margin-bottom:10px;">${pt}</li>`).join('')}
      </ul>
    </section>
  ` : '';

  const faqsHtml = rich && rich.faqs ? `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:24px; font-weight:800; color:#0F172A; margin-bottom:8px; text-align:center;">${headings.faqs}</h2>
      <p style="text-align:center; color:#64748B; font-size:14px; margin-bottom:24px;">${chrome.faqsSubtitle}</p>
      <div style="max-width:820px; margin:0 auto;">
        ${rich.faqs.map(f => `
          <details style="border:1px solid #E2E8F0; border-radius:10px; margin-bottom:12px; background:#fff; overflow:hidden;">
            <summary style="padding:16px 20px; font-size:15px; font-weight:700; color:#0F172A; cursor:pointer; list-style:none;">${f.q}</summary>
            <div style="padding:0 20px 16px; font-size:14px; color:#475569; line-height:1.7; border-top:1px solid #F1F5F9;">${f.a}</div>
          </details>
        `).join('')}
      </div>
    </section>
  ` : '';

  const bestPracticesHtml = rich && rich.bestPractices ? `
    <section style="margin-top:48px; padding:28px 32px; background:#0F172A; border-radius:16px; color:#fff;">
      <h2 style="font-size:18px; font-weight:700; color:#A8D5C2; margin-bottom:10px;">${headings.bestPractices}</h2>
      <p style="font-size:14px; color:#CBD5E1; line-height:1.8; margin:0;">${rich.bestPractices}</p>
    </section>
  ` : '';


  // ── Blocks that used to exist only in the client-rendered DOM ────────────
  // The generator widget, the 22-tool grid, the trust strip and the closing
  // CTA were all React-only. A crawler that does not execute JS — which is
  // most LLM ingest pipelines and every social-preview fetcher — saw none of
  // it: 22 keyword-rich tool names, their descriptions, and 22 internal links.
  // Emitting them here closes that gap; the markup mirrors what Home.tsx
  // renders so the static HTML and the hydrated DOM still describe the same
  // page in the same words.
  const loc = route.locale;
  const localePrefix = loc ? `/${loc}` : '';

  const toolGridHtml = `
    <section style="margin-top:48px; padding-top:36px; border-top:1px solid #E2E8F0;">
      <h2 style="font-size:22px; font-weight:700; color:#0F172A; margin-bottom:8px; text-align:center;">${ui(loc, 'home_qr_types_heading').replace('{count}', String(TOOL_GRID.length))}</h2>
      <p style="text-align:center; color:#64748B; font-size:14px; max-width:720px; margin:0 auto 20px;">${ui(loc, 'home_qr_types_subtitle').replace('{count}', String(TOOL_GRID.length))}</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:12px;">
        ${TOOL_GRID.map(tool => `
          <a href="${localePrefix}${tool.path}" style="display:block; background:#fff; border:1px solid #E2E8F0; border-radius:12px; padding:16px; text-decoration:none;">
            <h3 style="font-size:14px; font-weight:700; color:#0F172A; margin:0 0 4px;">${ui(loc, `tab_${tool.id}_label`)}</h3>
            <p style="font-size:12px; color:#64748B; line-height:1.5; margin:0;">${ui(loc, `tab_${tool.id}_desc`)}</p>
          </a>
        `).join('')}
      </div>
    </section>
  `;

  const trustHtml = `
    <section style="margin-top:48px; padding:28px 32px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:16px;">
      <p style="font-size:15px; line-height:1.7; color:#475569; margin:0 0 14px;">${ui(loc, 'trust_privacy_first')}</p>
      <p style="font-size:13px; color:#64748B; margin:0;">
        <strong>${ui(loc, 'trust_secure')}</strong> · <strong>${ui(loc, 'trust_global')}</strong> · <strong>${ui(loc, 'trust_fast')}</strong>
        &nbsp;—&nbsp; ${ui(loc, 'social_trusted_by')} ${ui(loc, 'social_thousands')}. ${ui(loc, 'social_no_account')}.
      </p>
    </section>
  `;

  const toolName = route.badge || 'QR Code';
  const ctaHtml = `
    <section style="margin-top:48px; padding:32px; background:#0F172A; border-radius:16px; text-align:center;">
      <h2 style="font-size:22px; font-weight:700; color:#ffffff; margin-bottom:10px;">${ui(loc, 'rich_ready_cta_title').replace('{tool}', toolName)}</h2>
      <p style="font-size:14px; color:#CBD5E1; line-height:1.7; max-width:640px; margin:0 auto 18px;">${ui(loc, 'rich_cta_subtitle')}</p>
      <a href="${localePrefix || '/'}" style="display:inline-block; padding:12px 24px; background:#2B6F53; color:#ffffff; font-weight:700; border-radius:10px; text-decoration:none;">${ui(loc, 'rich_cta_button').replace('{tool}', toolName)}</a>
      <p style="font-size:12px; color:#94A3B8; margin:14px 0 0;">${ui(loc, 'rich_cta_footnote')}</p>
    </section>
  `;

  return `
    <div id="app" class="min-h-screen flex flex-col">
      ${buildHeaderHtml(route.locale)}
      <main id="router-view" class="flex-grow" style="padding:48px 24px; max-width:1120px; margin:0 auto; width:100%;">
        <div style="text-align:center; margin-bottom:40px;">
          <span style="display:inline-block; padding:6px 14px; background:rgba(43,111,83,0.1); color:#2B6F53; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; border-radius:9999px; margin-bottom:16px;">
            ${route.badge || 'QR Code Generator'}
          </span>
          <h1 style="font-size:32px; sm:font-size:44px; font-weight:800; color:#0F172A; line-height:1.2; margin-bottom:16px; max-width:900px; margin-left:auto; margin-right:auto;">
            ${route.h1}
          </h1>
          <p style="font-size:17px; color:#475569; line-height:1.6; max-width:760px; margin:0 auto 28px;">
            ${route.lead}
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <a href="/" style="padding:12px 24px; background:#2B6F53; color:#ffffff; font-weight:700; border-radius:10px; text-decoration:none; display:inline-block;">Create QR Code Now</a>
            <a href="/pricing" style="padding:12px 24px; background:#ffffff; color:#334155; font-weight:600; border:1px solid #CBD5E1; border-radius:10px; text-decoration:none; display:inline-block;">View Features</a>
          </div>
        </div>

        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:16px; padding:32px; margin-bottom:36px;">
          ${sectionsHtml}
        </div>

        ${techOverviewHtml}
        ${comparisonTableHtml}
        ${stepsHtml}
        ${featuresHtml}
        ${sizingMatrixHtml}
        ${useCasesHtml}
        ${troubleshootingHtml}
        ${faqsHtml}
        ${bestPracticesHtml}
        ${toolGridHtml}
        ${trustHtml}
        ${ctaHtml}

        <!-- Contextual In-Content Link Equity Mesh -->
        <section style="margin-top:48px; padding:32px; background:#EEF6F2; border:1px solid #CBE5DA; border-radius:16px;">
          <h3 style="font-size:20px; font-weight:800; color:#1F5A42; margin-bottom:12px;">Explore Related Free QR Code Generators &amp; Guides</h3>
          <p style="color:#2B6F53; font-size:14px; line-height:1.6; margin-bottom:18px;">
            Enhance your workflow with complementary tools from QR Generator Online. Create high-resolution vector assets with zero scan caps:
          </p>
          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <a href="/url-qr-code-generator" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">URL QR Generator</a>
            <a href="/wifi-qr-code-generator" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">WiFi QR Generator</a>
            <a href="/vcard-qr-code-generator" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">vCard Business Cards</a>
            <a href="/qr-code-with-logo" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">Logo QR Generator</a>
            <a href="/svg-qr-code-generator" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">Vector SVG Export</a>
            <a href="/colored-qr-code-generator" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">Colored QR Codes</a>
            <a href="/blog/printing-qr-codes-guide" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">Print Sizing Guide</a>
            <a href="/pricing" style="display:inline-block; padding:8px 16px; background:#ffffff; border:1px solid #A8D5C2; color:#1F5A42; font-size:13px; font-weight:600; border-radius:8px; text-decoration:none;">Free Pricing Guarantee</a>
          </div>
        </section>

        <!-- Webmaster Embed & Citation Link Magnet -->
        <section style="margin-top:36px; padding:24px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px;">
          <h4 style="font-size:15px; font-weight:700; color:#1E293B; margin-bottom:8px;">Cite or Link to this Free Resource</h4>
          <p style="font-size:13px; color:#64748B; margin-bottom:12px;">Webmasters, educators, and designers can cite or link to this tool using the HTML snippet below:</p>
          <textarea readonly style="width:100%; height:54px; font-family:monospace; font-size:12px; padding:8px; border:1px solid #CBD5E1; border-radius:6px; background:#ffffff; color:#334155; resize:none;" onclick="this.select()">&lt;a href="${route.canonical}" target="_blank" rel="noopener"&gt;Free ${route.badge || 'QR Code Generator'} by QR Generator Online&lt;/a&gt;</textarea>
        </section>
      </main>
      ${buildFooterHtml(route.locale)}
    </div>
  `;
}

/**
 * Editorial/company routes: not the tool itself, so they must not claim
 * WebApplication schema. Every route NOT listed here (the homepage, every
 * tool/feature/utility page) genuinely is a page of the app and keeps it.
 *
 * This was previously unconditional — every route, including /terms and
 * every blog post, was stamped WebApplication. That is a real type/content
 * mismatch (Semrush's Site Audit flagged it as "structured data contains
 * markup errors" on all 44 pages), not a false positive: Google's own
 * structured-data guidelines require markup to be a true representation of
 * the page, and a Terms of Service page is not a software application.
 */
const CONTENT_PAGE_PATHS = new Set([
  '/about', '/contact', '/privacy', '/terms', '/faqs-qr-code-generator', '/pricing',
  '/blog',
  '/blog/qr-codes-for-restaurants', '/blog/printing-qr-codes-guide',
  '/blog/vcard-qr-code-business-cards', '/blog/qr-codes-for-real-estate',
  '/blog/wifi-qr-codes-for-hospitality'
]);

function buildJsonLd(route, rich) {
  const schemas = [];
  const isContentPage = CONTENT_PAGE_PATHS.has(route.path);

  // 0. Site-identity schemas. These were previously injected client-side only
  // (SEOManager in App.tsx), so any consumer that does not execute JS — most
  // LLM ingest pipelines, and knowledge-graph builders — never learned who
  // publishes this site. They are cheap, identical on every page, and are the
  // schemas that carry entity identity rather than page content.
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://qr-generator.online/#organization",
    "name": "QR Generator Online",
    "url": "https://qr-generator.online",
    "logo": {
      "@type": "ImageObject",
      "url": "https://qr-generator.online/logo.png"
    },
    "description":
      "Free, privacy-first QR code generator. Static QR codes are encoded entirely in the browser, never expire, and carry no scan limits.",
    // sameAs must point at profiles that corroborate this entity elsewhere;
    // it previously listed only this site's own URL, which asserts nothing.
    "sameAs": ["https://www.facebook.com/qrgenerator.online"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@qr-generator.online",
      "url": "https://qr-generator.online/contact",
      "availableLanguage": ["English", "Spanish", "Arabic", "Hindi", "Turkish", "Vietnamese"]
    }
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://qr-generator.online/#website",
    "name": "QR Generator Online",
    "url": "https://qr-generator.online",
    "publisher": { "@id": "https://qr-generator.online/#organization" },
    "inLanguage": ["en", ...ROUTED_LOCALES]
  });

  // 1. Top-level page schema: WebApplication for the tool itself, WebPage for
  // editorial content. applicationCategory/operatingSystem/offers only belong
  // on WebApplication — carrying them over to WebPage is exactly the kind of
  // "property not recognised by this type" issue Semrush also flags.
  schemas.push(
    isContentPage
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": route.title,
          "url": route.canonical,
          "description": route.description,
          "inLanguage": route.locale || "en",
          "isPartOf": { "@id": "https://qr-generator.online/#website" },
          "publisher": {
            "@type": "Organization",
            "name": "QR Generator Online",
            "url": "https://qr-generator.online",
            "logo": "https://qr-generator.online/logo.png"
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": route.title,
          "url": route.canonical,
          "description": route.description,
          "inLanguage": route.locale || "en",
          "isPartOf": { "@id": "https://qr-generator.online/#website" },
          "applicationCategory": "DesignApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "publisher": {
            "@type": "Organization",
            "name": "QR Generator Online",
            "url": "https://qr-generator.online",
            "logo": "https://qr-generator.online/logo.png"
          }
        }
  );

  // 2. BreadcrumbList Schema. On a localized route the "Home" crumb must
  // point at that locale's homepage (/es, not /) — otherwise the breadcrumb
  // rich result sends a Spanish visitor back to the English site.
  const HOME_LABEL = { ar: 'الرئيسية', hi: 'होम', tr: 'Ana Sayfa', es: 'Inicio', vi: 'Trang chủ' };
  const homeUrl = route.locale ? `https://qr-generator.online/${route.locale}` : 'https://qr-generator.online/';
  const pathSegments = route.path.split('/').filter(Boolean);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": route.locale ? (HOME_LABEL[route.locale] || 'Home') : 'Home',
      "item": homeUrl
    }
  ];
  if (pathSegments.length > 0) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": route.badge || route.h1 || "Generator",
      "item": route.canonical
    });
  }
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  });

  // 3. HowTo Schema (if steps exist)
  if (rich && rich.steps && rich.steps.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      // route.h1 is a complete, already-localized sentence; the previous
      // "How to Create a {badge} with QR Generator Online" template mixed
      // languages on localized pages, since only {badge} was translated and
      // the surrounding English words were not.
      "name": route.h1,
      "description": route.lead || route.description,
      "step": rich.steps.map((s, idx) => ({
        "@type": "HowToStep",
        "position": idx + 1,
        "name": s.title,
        "text": s.description
      }))
    });
  }

  // 4. FAQPage Schema (if faqs exist)
  if (rich && rich.faqs && rich.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": rich.faqs.map(f => ({
        "@type": "Question",
        "name": f.q || f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a || f.answer
        }
      }))
    });
  }

  return schemas.map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`).join('\n');
}

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.log('Template dist/index.html not found yet. It will be pre-rendered upon "vite build".');
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  console.log(`Starting static pre-rendering for ${ROUTES.length} routes...`);

  let generatedCount = 0;

  /**
   * Renders one page's HTML from the template. `content` supplies the
   * fields that vary by locale (title/description/h1/badge/lead/canonical);
   * `rich` is always looked up by the English path, since phase-1 body
   * content (long-form sections, FAQs) is not translated — only the hero and
   * <head> metadata are. `htmlLang`/`dir` set the document's language;
   * `hreflangs` is the full cross-referenced alternate-language link set for
   * this page (self included).
   */
  function renderRoute(content, rich, { htmlLang = 'en', dir = 'ltr', hreflangs }) {
    let html = template;

    html = html.replace(/<html lang="[^"]*"/i, `<html lang="${htmlLang}" dir="${dir}"`);

    html = html.replace(/<title>.*?<\/title>/i, `<title>${content.title}</title>`);

    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${content.description}">`
    );

    // Robots directive. Auth, dashboard, per-link analytics and the
    // short-link redirector have no search value; /r/* in particular would
    // otherwise expose one thin indexable URL per dynamic QR code ever issued.
    html = html.replace(
      /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
      content.noindex
        ? `<meta name="robots" content="noindex, ${content.nofollow ? 'nofollow' : 'follow'}">`
        : '<meta name="robots" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1">'
    );

    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${content.canonical}" />`
    );

    // Hreflang: replace the template's two static tags (en + x-default) with
    // the full alternate set for this page — every translated version plus
    // itself, per Google's guidance that hreflang blocks should be symmetric.
    const hreflangHtml = hreflangs
      .map(({ code, href }) => `    <link rel="alternate" hreflang="${code}" href="${href}">`)
      .join('\n');
    html = html.replace(
      /\s*<link\s+rel="alternate"\s+hreflang="en"[\s\S]*?<link\s+rel="alternate"\s+hreflang="x-default"\s+href=".*?"\s*\/?>/i,
      `\n${hreflangHtml}`
    );

    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${content.canonical}">`
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${content.title}">`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${content.description}">`
    );

    html = html.replace(
      /<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:url" content="${content.canonical}">`
    );
    html = html.replace(
      /<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:title" content="${content.title}">`
    );
    html = html.replace(
      /<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:description" content="${content.description}">`
    );

    const jsonLdHtml = buildJsonLd(content, rich);
    html = html.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      jsonLdHtml
    );

    const prerenderedBody = buildBodyHtml(content);
    html = html.replace(
      /<div id="app"[\s\S]*?<\/footer>\s*<\/div>/i,
      prerenderedBody
    );

    // Inline this page's localized body copy so React's first render already
    // has it — no English flash, and the DOM Google indexes matches the HTML
    // above exactly. Only this one page's content travels, and only on
    // localized URLs; see constants/richContentI18n.ts for the reader.
    if (content.locale) {
      const localeContent = RICH_CONTENT_I18N[content.locale]?.[content.path];
      if (localeContent) {
        const payload = JSON.stringify({
          locale: content.locale,
          path: content.path,
          content: localeContent
        })
          // A literal </script> inside JSON would close the tag early; <
          // is the standard escape and stays valid JSON.
          .replace(/</g, '\\u003c');
        html = html.replace(
          '</body>',
          `  <script id="rich-i18n-data" type="application/json">${payload}</script>\n</body>`
        );
      }
    }

    return html;
  }

  function writeRoute(outputPath, html) {
    if (outputPath === '/') {
      fs.writeFileSync(templatePath, html, 'utf8');
    } else {
      const targetDir = path.join(distDir, outputPath.replace(/^\//, ''));
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
    }
    generatedCount++;
  }

  /** Full alternate-language link set for a path: itself, en, x-default, and
   *  any routed locale that actually has translated content for it. */
  function buildHreflangs(basePath) {
    const enUrl = `https://qr-generator.online${basePath === '/' ? '/' : basePath}`;
    const links = [
      { code: 'en', href: enUrl },
      { code: 'x-default', href: enUrl }
    ];
    for (const loc of ROUTED_LOCALES) {
      if (ROUTE_META_I18N[loc]?.[basePath]) {
        links.push({ code: loc, href: `https://qr-generator.online/${loc}${basePath === '/' ? '' : basePath}` });
      }
    }
    return links;
  }

  for (const route of ROUTES) {
    const rich = ALL_RICH_DATA[route.path] || null;
    const hreflangs = buildHreflangs(route.path);

    // English (or noindex/non-locale) route — unchanged output.
    const html = renderRoute(route, rich, { htmlLang: 'en', dir: 'ltr', hreflangs });
    writeRoute(route.path, html);

    // Locale variants: only for routes that are indexable and have an actual
    // translation. Skipping the rest is deliberate — a /es/... URL with
    // untranslated English content would be thin, duplicate-content risk for
    // zero benefit; better to have no URL there at all than a bad one.
    if (route.noindex) continue;
    for (const loc of ROUTED_LOCALES) {
      const localized = ROUTE_META_I18N[loc]?.[route.path];
      if (!localized) continue;

      const outputPath = `/${loc}${route.path === '/' ? '' : route.path}`;
      const localizedRich = RICH_CONTENT_I18N[loc]?.[route.path] || rich;
      const localizedRoute = {
        ...route,
        title: localized.title,
        description: localized.description,
        h1: localized.h1,
        badge: localized.badge,
        lead: localized.lead,
        canonical: `https://qr-generator.online${outputPath}`,
        locale: loc
      };
      const localeHtml = renderRoute(localizedRoute, localizedRich, {
        htmlLang: loc,
        dir: loc === 'ar' ? 'rtl' : 'ltr',
        hreflangs
      });
      writeRoute(outputPath, localeHtml);
    }
  }

  // ── Real 404 ────────────────────────────────────────────────────────────
  // vercel.json no longer rewrites unknown paths to /index.html, so Vercel
  // serves this file with an actual 404 status. Previously every typo'd or
  // scraped URL returned 200 with the homepage body — a soft 404 that Google
  // reports as such and that wastes crawl budget.
  const notFound = template
    .replace(/<title>.*?<\/title>/i, '<title>Page Not Found (404) | QR Generator Online</title>')
    .replace(
      // follow, not nofollow: the 404 page lists popular tools, and those
      // recovery links are the whole point of serving a useful 404.
      /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
      '<meta name="robots" content="noindex, follow">'
    )
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, '');
  fs.writeFileSync(path.join(distDir, '404.html'), notFound, 'utf8');

  console.log(`✅ Pre-rendered ${generatedCount} static HTML pages + 404.html in dist/!`);

  verifyRouteCoverage();
}

/**
 * Guard for the vercel.json change that removed the `/(.*) -> /index.html`
 * catch-all. Static routes are now served straight off disk, so a React route
 * with no prerendered file would 404 in production. Fail the build instead.
 */
function verifyRouteCoverage() {
  const appPath = path.resolve(__dirname, '../App.tsx');
  if (!fs.existsSync(appPath)) return;

  // AppRoutes declares its paths relative (no leading "/") so the same route
  // table can be nested under both the unprefixed tree and each /<locale>/*
  // mount — see App.tsx. Normalise here so this guard still finds them; it
  // silently checked only 1 route instead of 42 for one build after that
  // change, because this regex's filter required a leading slash.
  const declared = [...fs.readFileSync(appPath, 'utf8').matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => (m[1].startsWith('/') ? m[1] : `/${m[1]}`))
    .filter((p) => p !== '/*' && !p.includes(':') && !p.includes('*'));

  const prerendered = new Set(ROUTES.map((r) => r.path));
  const missing = [...new Set(declared)].filter((p) => !prerendered.has(p));

  if (missing.length) {
    console.error(
      '\n❌ These App.tsx routes have no prerendered HTML and would 404 in production:\n' +
        missing.map((p) => `   ${p}`).join('\n') +
        '\n   Add them to scripts/routeContent.js.\n'
    );
    process.exit(1);
  }
  console.log(`✅ Route coverage OK — all ${declared.length} static App.tsx routes are prerendered.`);

  // Every indexable page must be reachable from the footer of every other page.
  // Pages that are only in the sitemap rely on Google choosing to crawl them,
  // and JS-less crawlers never see them at all.
  const footerHrefs = new Set(FOOTER_GROUPS.flatMap((g) => g.hrefs));
  const orphans = ROUTES.filter(
    (r) => !r.noindex && r.path !== '/' && !footerHrefs.has(r.path)
  ).map((r) => r.path);

  if (orphans.length) {
    console.error(
      '\n❌ Indexable routes with no link in the prerendered footer:\n' +
        orphans.map((p) => `   ${p}`).join('\n') +
        '\n   Add them to FOOTER_GROUPS in scripts/prerender.js.\n'
    );
    process.exit(1);
  }
  console.log(`✅ Internal linking OK — all ${footerHrefs.size} footer links resolve, no orphaned pages.`);

  // The tool grid is duplicated data (ids in scripts/toolGrid.js, labels in
  // scripts/uiStringsData.js, pages in routeContent.js). Assert the three
  // agree, or the grid silently starts emitting dead links and raw key names.
  const routePaths = new Set(ROUTES.map((r) => r.path));
  const gridProblems = [];
  for (const tool of TOOL_GRID) {
    if (!routePaths.has(tool.path)) gridProblems.push(`${tool.id}: no route ${tool.path}`);
    for (const suffix of ['label', 'desc']) {
      const key = `tab_${tool.id}_${suffix}`;
      if (!translations.en[key]) gridProblems.push(`${tool.id}: missing string ${key}`);
    }
  }
  if (gridProblems.length) {
    console.error(
      '\n❌ Tool grid is out of sync:\n' +
        gridProblems.map((p) => `   ${p}`).join('\n') +
        '\n   Reconcile scripts/toolGrid.js with routeContent.js and uiStringsData.js.\n'
    );
    process.exit(1);
  }
  console.log(`✅ Tool grid OK — ${TOOL_GRID.length} tools resolve to routes with translated labels.`);

  // The footer check above only ever looked at English routes, so it reported
  // "no orphaned pages" while all 220 localized pages had zero inbound links
  // in the prerendered HTML — every nav link on /es/... pointed back at the
  // English site. They were reachable only from the sitemap, which is why
  // Ahrefs recorded them at crawl depth 0. Verify the localized nav actually
  // keeps a crawler inside its locale.
  const localeLinkProblems = [];
  for (const loc of ROUTED_LOCALES) {
    const sample = ROUTES.find((r) => !r.noindex && ROUTE_META_I18N[loc]?.[r.path]);
    if (!sample) continue;
    const outPath = `/${loc}${sample.path === '/' ? '' : sample.path}`;
    const file = path.join(distDir, outPath.replace(/^\//, ''), 'index.html');
    if (!fs.existsSync(file)) continue;

    const html = fs.readFileSync(file, 'utf8');
    const nav =
      (html.match(/<header[\s\S]*?<\/header>/) || [''])[0] +
      (html.match(/<footer[\s\S]*?<\/footer>/) || [''])[0];
    const hrefs = [...nav.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]);
    const localized = hrefs.filter((h) => new RegExp(`^/${loc}(/|$)`).test(h));

    // Everything except the handful of untranslated targets (/login, /signup)
    // should stay in-locale; allow a small margin rather than demanding 100%.
    if (localized.length < hrefs.length * 0.8) {
      localeLinkProblems.push(
        `${outPath}: only ${localized.length}/${hrefs.length} nav links stay in /${loc}`
      );
    }
  }
  if (localeLinkProblems.length) {
    console.error(
      '\n❌ Localized pages are orphaned — their nav links leave the locale:\n' +
        localeLinkProblems.map((p) => `   ${p}`).join('\n') +
        '\n   buildHeaderHtml/buildFooterHtml must call localeHref().\n'
    );
    process.exit(1);
  }
  console.log(`✅ Locale linking OK — localized nav keeps crawlers inside all ${ROUTED_LOCALES.length} locales.`);
}

prerender();
