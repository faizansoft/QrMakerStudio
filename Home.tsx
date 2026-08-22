import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { DOT_STYLES, CORNER_SQUARE_STYLES, CORNER_DOT_STYLES, FAQ_ITEMS } from './constants';
import { TOOL_SEO_DATA } from './constants/toolSeoData';
import { getRichContent, getRouteContent } from './constants/richContent';
import RichSeoSections from './components/RichSeoSections';
import { getRouteMeta } from './constants/routeMeta';
import { DotType, CornerSquareType, CornerDotType } from './types';
import { useLanguage } from './context/LanguageContext';
import { useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { createDynamicLink, DynamicLink } from './services/dynamicQrService';
import { uploadPdfToSupabase } from './services/pdfStorageService';
import { injectJSONLD, removeJSONLD, getToolSoftwareSchema, getFAQSchema, getBreadcrumbSchema } from './services/seoUtils';

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
    id: 'pdf',
    label: 'PDF Document',
    description: 'Link or upload a PDF menu, brochure, or catalog',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-6 4h4" />
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
  {
    id: 'instagram',
    label: 'Instagram',
    description: 'Share your Instagram profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a6 6 0 016-6h6a6 6 0 016 6v6a6 6 0 01-6 6H9a6 6 0 01-6-6V9z" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 'youtube',
    label: 'YouTube',
    description: 'Link to your YouTube channel or video',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Share your LinkedIn profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    description: 'Share your Twitter/X profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-6.5-8L20 4h-2l-5.5 6.5L8 4H4z" />
      </svg>
    )
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    description: 'Share your TikTok profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
      </svg>
    )
  },
  {
    id: 'telegram',
    label: 'Telegram',
    description: 'Share your Telegram profile or group',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    )
  },
  {
    id: 'paypal',
    label: 'PayPal',
    description: 'Accept PayPal payments via QR',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'upi',
    label: 'UPI',
    description: 'Accept UPI payments (India)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

// Template Presets
const TEMPLATES = [
  { id: 'default', name: 'Default Standard', fgColor: '#000000', bgColor: '#ffffff', cornerSquareColor: '#000000', cornerDotColor: '#000000', dotType: 'square' as DotType, cornerSquareType: 'square' as CornerSquareType, cornerDotType: 'square' as CornerDotType },
  { id: 'emerald', name: 'Emerald Green', fgColor: '#2B6F53', bgColor: '#ffffff', cornerSquareColor: '#1E1E1E', cornerDotColor: '#2B6F53', dotType: 'rounded' as DotType, cornerSquareType: 'extra-rounded' as CornerSquareType, cornerDotType: 'dot' as CornerDotType },
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

// Custom Dynamic QR Modal Preview Component preserving full custom frame, colors, dot styles, and uploaded logo
const DynamicModalQrPreview: React.FC<{ link: DynamicLink }> = ({ link }) => {
  const qrUrl = `https://qr-generator.online/r/${link.short_code}`;
  const style = link.qr_style || {};

  return (
    <div className="w-full max-w-[200px] h-[210px] flex items-center justify-center p-2 rounded-2xl bg-white border border-slate-200 shadow-2xs mb-3">
      <FramedQrView
        frame={style.frame || 'none'}
        text={style.frameText || 'SCAN ME'}
        frameColor={style.frameColor || style.fgColor || '#1E1E1E'}
        frameTextColor={style.frameTextColor || '#ffffff'}
        fgColor={style.fgColor || '#000000'}
        bgColor={style.bgColor || '#ffffff'}
        cornerSquareColor={style.cornerSquareColor || style.fgColor || '#000000'}
        cornerDotColor={style.cornerDotColor || style.fgColor || '#000000'}
        dotStyle={style.dotStyle || 'square'}
        cornerSquareStyle={style.cornerSquareStyle || 'square'}
        cornerDotStyle={style.cornerDotStyle || 'square'}
        logoSrc={style.logoSrc || null}
        link={qrUrl}
      />
    </div>
  );
};

// ── Frame Styles & Customization (Bitly-Grade Premium Frames) ──
// ── Frame Styles Matching Industry Benchmark Reference ──
export type FrameStyle = 
  | 'none'
  | 'frame-bottom-bar'
  | 'frame-top-bar'
  | 'frame-focus-corners-bottom'
  | 'frame-focus-corners-top'
  | 'frame-focus-corners-arrow'
  | 'frame-focus-corners-speech'
  | 'frame-phone-portrait'
  | 'frame-phone-landscape'
  | 'frame-speech-bubble-bottom'
  | 'frame-speech-tab-top'
  | 'frame-speech-bubble-right'
  | 'frame-top-arrow'
  | 'frame-top-roof'
  | 'frame-trapezoid'
  | 'frame-corner-peel'
  | 'frame-vertical-right'
  | 'frame-vertical-dual'
  | 'frame-horizontal-left';

export const FRAME_OPTIONS: { id: FrameStyle; label: string; category: string; defaultText: string }[] = [
  { id: 'none', label: 'No Frame', category: 'Basic', defaultText: '' },
  { id: 'frame-bottom-bar', label: 'Bottom Banner', category: 'Popular', defaultText: 'SCAN ME' },
  { id: 'frame-top-bar', label: 'Top Header Tab', category: 'Popular', defaultText: 'SCAN ME' },
  { id: 'frame-focus-corners-bottom', label: 'Focus Corners Bottom', category: 'Focus', defaultText: 'SCAN ME' },
  { id: 'frame-focus-corners-top', label: 'Focus Corners Top', category: 'Focus', defaultText: 'SCAN ME' },
  { id: 'frame-focus-corners-arrow', label: 'Focus Corners Arrow', category: 'Focus', defaultText: 'SCAN ME' },
  { id: 'frame-focus-corners-speech', label: 'Focus Corners Speech', category: 'Focus', defaultText: 'SCAN ME' },
  { id: 'frame-phone-portrait', label: 'Phone Portrait', category: 'Device', defaultText: 'SCAN ME' },
  { id: 'frame-phone-landscape', label: 'Phone Landscape', category: 'Device', defaultText: 'SCAN ME' },
  { id: 'frame-speech-bubble-bottom', label: 'Speech Bubble Bottom', category: 'Speech', defaultText: 'SCAN ME' },
  { id: 'frame-speech-tab-top', label: 'Speech Tab Top', category: 'Speech', defaultText: 'SCAN ME' },
  { id: 'frame-speech-bubble-right', label: 'Speech Bubble Right', category: 'Speech', defaultText: 'SCAN ME' },
  { id: 'frame-top-arrow', label: 'Top Arrow Badge', category: 'Popular', defaultText: 'SCAN ME' },
  { id: 'frame-top-roof', label: 'Rooftop Banner', category: 'Popular', defaultText: 'SCAN ME' },
  { id: 'frame-trapezoid', label: 'Trapezoid Kiosk', category: 'Modern', defaultText: 'SCAN ME' },
  { id: 'frame-corner-peel', label: 'Corner Fold / Peel', category: 'Modern', defaultText: 'SCAN ME' },
  { id: 'frame-vertical-right', label: 'Vertical Right Sidebar', category: 'Modern', defaultText: 'SCAN ME' },
  { id: 'frame-vertical-dual', label: 'Dual Vertical Sidebars', category: 'Modern', defaultText: 'SCAN ME' },
  { id: 'frame-horizontal-left', label: 'Horizontal Split Card', category: 'Modern', defaultText: 'SCAN ME' },
];

// ── Unified Vector Frame Generator (100% Pixel-Accurate WYSIWYG for Preview & Export) ──
function buildFramedSvg(
  rawSvgText: string,
  frame: FrameStyle,
  text: string,
  fg: string,
  bg: string,
  cornerSq: string,
  frameCol?: string,
  frameTextCol?: string
): string {
  const cleanText = (text || 'SCAN ME').trim().toUpperCase();
  const ctaText = cleanText.length > 0 ? cleanText : 'SCAN ME';
  const fColor = frameCol || fg || '#1E1E1E';
  const tColor = frameTextCol || '#ffffff';
  const bColor = bg || '#ffffff';

  const words = ctaText.split(/\s+/).filter(Boolean);
  const line1 = words.length > 1 ? words.slice(0, Math.ceil(words.length / 2)).join(' ') : (words[0] || 'SCAN');
  const line2 = words.length > 1 ? words.slice(Math.ceil(words.length / 2)).join(' ') : '';

  let cleanSvg = rawSvgText;
  const svgMatch = rawSvgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (svgMatch) {
    cleanSvg = svgMatch[1];
  }

  if (frame === 'none') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <rect width="1000" height="1000" fill="${bColor}" rx="40"/>
  <g transform="translate(100, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-bottom-bar') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <rect width="1000" height="1200" fill="${bColor}" rx="40" stroke="${fColor}" stroke-width="18"/>
  <g transform="translate(100, 60) scale(2.85)">
    ${cleanSvg}
  </g>
  <path d="M 0 1040 L 1000 1040 L 1000 1160 A 40 40 0 0 1 960 1200 L 40 1200 A 40 40 0 0 1 0 1160 Z" fill="${fColor}"/>
  <text x="500" y="1135" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 40 : 52}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-top-bar') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <rect width="1000" height="1200" fill="${bColor}" rx="40" stroke="${fColor}" stroke-width="18"/>
  <path d="M 0 40 A 40 40 0 0 1 40 0 L 960 0 A 40 40 0 0 1 1000 40 L 1000 160 L 0 160 Z" fill="${fColor}"/>
  <text x="500" y="105" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 40 : 52}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
  <g transform="translate(100, 240) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-focus-corners-bottom') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1240" width="1000" height="1240">
  <rect width="1000" height="1240" fill="${bColor}" rx="40"/>
  <path d="M 80 180 L 80 80 L 180 80 M 920 180 L 920 80 L 820 80 M 80 820 L 80 920 L 180 920 M 920 820 L 920 920 L 820 920" stroke="${fColor}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <g transform="translate(100, 100) scale(2.85)">
    ${cleanSvg}
  </g>
  <rect x="160" y="1020" width="680" height="140" rx="32" fill="${fColor}"/>
  <text x="500" y="1108" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 38 : 48}" text-anchor="middle" letter-spacing="1">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-focus-corners-top') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1240" width="1000" height="1240">
  <rect width="1000" height="1240" fill="${bColor}" rx="40"/>
  <rect x="160" y="40" width="680" height="130" rx="28" fill="${fColor}"/>
  <polygon points="470,170 500,205 530,170" fill="${fColor}"/>
  <text x="500" y="122" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 38 : 48}" text-anchor="middle" letter-spacing="1">${ctaText}</text>
  <path d="M 80 340 L 80 240 L 180 240 M 920 340 L 920 240 L 820 240 M 80 980 L 80 1080 L 180 1080 M 920 980 L 920 1080 L 820 1080" stroke="${fColor}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <g transform="translate(100, 260) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-focus-corners-arrow') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000" width="1200" height="1000">
  <rect width="1200" height="1000" fill="${bColor}" rx="40"/>
  <path d="M 60 160 L 60 60 L 160 60 M 840 160 L 840 60 L 740 60 M 60 840 L 60 940 L 160 940 M 840 840 L 840 940 L 740 940" stroke="${fColor}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <g transform="translate(50, 100) scale(2.85)">
    ${cleanSvg}
  </g>
  <rect x="880" y="260" width="280" height="480" rx="36" fill="${fColor}"/>
  <text x="1020" y="${line2 ? 430 : 490}" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line1.length > 8 ? 38 : 46}" text-anchor="middle">${line1}</text>
  <text x="1020" y="${line2 ? 510 : 560}" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">➔</text>
  ${line2 ? `<text x="1020" y="600" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line2.length > 8 ? 38 : 46}" text-anchor="middle">${line2}</text>` : ''}
</svg>`;
  }

  if (frame === 'frame-focus-corners-speech') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000" width="1200" height="1000">
  <rect width="1200" height="1000" fill="${bColor}" rx="40"/>
  <path d="M 60 160 L 60 60 L 160 60 M 840 160 L 840 60 L 740 60 M 60 840 L 60 940 L 160 940 M 840 840 L 840 940 L 740 940" stroke="${fColor}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <g transform="translate(50, 100) scale(2.85)">
    ${cleanSvg}
  </g>
  <polygon points="850,500 890,460 890,540" fill="${fColor}"/>
  <rect x="890" y="280" width="270" height="440" rx="36" fill="${fColor}"/>
  <text x="1025" y="${line2 ? 460 : 510}" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line1.length > 8 ? 38 : 46}" text-anchor="middle">${line1}</text>
  ${line2 ? `<text x="1025" y="550" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line2.length > 8 ? 38 : 46}" text-anchor="middle">${line2}</text>` : ''}
</svg>`;
  }

  if (frame === 'frame-phone-portrait') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1440" width="1000" height="1440">
  <rect width="1000" height="1440" fill="${bColor}" rx="64" stroke="${fColor}" stroke-width="24"/>
  <rect x="360" y="32" width="280" height="24" rx="12" fill="${fColor}"/>
  <line x1="976" y1="280" x2="976" y2="440" stroke="${fColor}" stroke-width="24" stroke-linecap="round"/>
  <g transform="translate(100, 140) scale(2.85)">
    ${cleanSvg}
  </g>
  <polygon points="470,1160 500,1120 530,1160" fill="${fColor}"/>
  <text x="500" y="1270" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 42 : 56}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-phone-landscape') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 1000" width="1340" height="1000">
  <rect width="1340" height="1000" fill="${bColor}" rx="64" stroke="${fColor}" stroke-width="24"/>
  <g transform="translate(60, 100) scale(2.85)">
    ${cleanSvg}
  </g>
  <rect x="920" y="240" width="360" height="520" rx="36" fill="${fColor}"/>
  <text x="1100" y="${line2 ? 450 : 500}" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line1.length > 8 ? 40 : 50}" text-anchor="middle">${line1}</text>
  ${line2 ? `<text x="1100" y="560" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line2.length > 8 ? 40 : 50}" text-anchor="middle">◀ ${line2}</text>` : `<text x="1100" y="570" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">◀</text>`}
</svg>`;
  }

  if (frame === 'frame-speech-bubble-bottom') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <rect width="1000" height="1080" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <polygon points="760,1080 880,1180 880,1080" fill="${bColor}" stroke="${fColor}" stroke-width="18"/>
  <line x1="770" y1="1080" x2="870" y2="1080" stroke="${bColor}" stroke-width="24"/>
  <g transform="translate(100, 60) scale(2.85)">
    ${cleanSvg}
  </g>
  <text x="500" y="1000" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 40 : 52}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-speech-tab-top') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <rect x="0" y="120" width="1000" height="1080" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <path d="M 40 0 L 480 0 A 32 32 0 0 1 512 32 L 512 120 L 0 120 L 0 40 A 40 40 0 0 1 40 0 Z" fill="${fColor}"/>
  <text x="256" y="80" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 36 : 44}" text-anchor="middle" letter-spacing="1">${ctaText}</text>
  <g transform="translate(100, 240) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-speech-bubble-right') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 1000" width="1260" height="1000">
  <rect width="1000" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <polygon points="1000,440 1050,480 1000,520" fill="${fColor}"/>
  <rect x="1050" y="160" width="180" height="680" rx="32" fill="${fColor}"/>
  <text x="1140" y="500" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 10 ? 38 : 46}" text-anchor="middle" transform="rotate(90, 1140, 500)" letter-spacing="3">${ctaText}</text>
  <g transform="translate(100, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-top-arrow') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1240" width="1000" height="1240">
  <rect x="160" y="0" width="680" height="140" rx="32" fill="${fColor}"/>
  <polygon points="460,140 500,185 540,140" fill="${fColor}"/>
  <text x="500" y="90" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 38 : 50}" text-anchor="middle" letter-spacing="1">${ctaText}</text>
  <rect y="180" width="1000" height="1060" rx="48" fill="${bColor}" stroke="${fColor}" stroke-width="16"/>
  <g transform="translate(100, 290) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-top-roof') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <path d="M 0 160 L 0 60 L 500 0 L 1000 60 L 1000 160 Z" fill="${fColor}"/>
  <text x="500" y="115" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 38 : 48}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
  <rect y="160" width="1000" height="1040" rx="0" fill="${bColor}" stroke="${fColor}" stroke-width="16"/>
  <g transform="translate(100, 260) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-trapezoid') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1220" width="1000" height="1220">
  <polygon points="120,40 880,40 1000,1180 0,1180" fill="${bColor}" stroke="${fColor}" stroke-width="18" stroke-linejoin="round"/>
  <rect x="220" y="60" width="560" height="110" rx="24" fill="${fColor}"/>
  <text x="500" y="135" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 36 : 46}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
  <g transform="translate(120, 250) scale(2.7)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-corner-peel') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <path d="M 0 48 A 48 48 0 0 1 48 0 L 952 0 A 48 48 0 0 1 1000 48 L 1000 960 L 760 1200 L 48 1200 A 48 48 0 0 1 0 1152 Z" fill="${bColor}" stroke="${fColor}" stroke-width="18"/>
  <polygon points="760,960 1000,960 760,1200" fill="${fColor}"/>
  <g transform="translate(100, 80) scale(2.85)">
    ${cleanSvg}
  </g>
  <text x="380" y="1080" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 14 ? 40 : 52}" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-vertical-right') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 1000" width="1240" height="1000">
  <rect width="1240" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <path d="M 1000 0 L 1192 0 A 48 48 0 0 1 1240 48 L 1240 952 A 48 48 0 0 1 1192 1000 L 1000 1000 Z" fill="${fColor}"/>
  <text x="1120" y="500" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 10 ? 42 : 52}" text-anchor="middle" transform="rotate(90, 1120, 500)" letter-spacing="4">${ctaText}</text>
  <g transform="translate(80, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-vertical-dual') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1000" width="1280" height="1000">
  <rect width="1280" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <path d="M 0 48 A 48 48 0 0 1 48 0 L 160 0 L 160 1000 L 48 1000 A 48 48 0 0 1 0 952 Z" fill="${fColor}"/>
  <path d="M 1120 0 L 1232 0 A 48 48 0 0 1 1280 48 L 1280 952 A 48 48 0 0 1 1232 1000 L 1120 1000 Z" fill="${fColor}"/>
  <text x="80" y="500" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 10 ? 38 : 46}" text-anchor="middle" transform="rotate(270, 80, 500)" letter-spacing="3">${ctaText}</text>
  <text x="1200" y="500" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${ctaText.length > 10 ? 38 : 46}" text-anchor="middle" transform="rotate(90, 1200, 500)" letter-spacing="3">${ctaText}</text>
  <g transform="translate(240, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-horizontal-left') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 1000" width="1340" height="1000">
  <rect width="1340" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <path d="M 0 48 A 48 48 0 0 1 48 0 L 360 0 L 360 1000 L 48 1000 A 48 48 0 0 1 0 952 Z" fill="${fColor}"/>
  <text x="180" y="${line2 ? 460 : 510}" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line1.length > 8 ? 44 : 56}" text-anchor="middle">${line1}</text>
  ${line2 ? `<text x="180" y="570" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${line2.length > 8 ? 44 : 56}" text-anchor="middle">${line2}</text>` : ''}
  <g transform="translate(440, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  return rawSvgText;
}

// ── Ultra-Accurate Canvas Rasterizer (Converts Vector Framed SVG directly to sharp PNG/WebP Canvas) ──
async function renderFramedCanvas(
  rawPngBlob: Blob,
  frame: FrameStyle,
  text: string,
  fg: string,
  bg: string,
  cornerSq: string,
  frameCol?: string,
  frameTextCol?: string
): Promise<HTMLCanvasElement> {
  const ctaText = (text || 'SCAN ME').toUpperCase();
  const fColor = frameCol || fg || '#1E1E1E';
  const tColor = frameTextCol || '#ffffff';
  const bColor = bg || '#ffffff';

  // Convert rawPngBlob into data URL to embed in SVG
  const pngDataUrl = await new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(rawPngBlob);
  });

  const innerImageTag = `<image href="${pngDataUrl}" width="280" height="280" />`;
  const framedSvgString = buildFramedSvg(innerImageTag, frame, ctaText, fg, bColor, cornerSq, fColor, tColor);

  const svgBlob = new Blob([framedSvgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.src = url;

  await new Promise((res) => {
    img.onload = () => res(true);
    img.onerror = () => res(true);
  });

  const canvas = document.createElement('canvas');
  // Match the SVG coordinate resolution
  const w = img.naturalWidth || 1200;
  const h = img.naturalHeight || 1200;
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, w, h);
  URL.revokeObjectURL(url);

  return canvas;
}

// ── Real-time Interactive Dynamic Framed QR Preview (True WYSIWYG) ──
const FramedQrView: React.FC<{
  frame: FrameStyle;
  text: string;
  frameColor: string;
  frameTextColor: string;
  fgColor?: string;
  bgColor?: string;
  cornerSquareColor?: string;
  cornerDotColor?: string;
  dotStyle?: DotType;
  cornerSquareStyle?: CornerSquareType;
  cornerDotStyle?: CornerDotType;
  logoSrc?: string | null;
  link?: string;
  isThumbnail?: boolean;
  children?: React.ReactNode;
}> = ({
  frame,
  text,
  frameColor,
  frameTextColor,
  fgColor = '#000000',
  bgColor = '#ffffff',
  cornerSquareColor = '#000000',
  cornerDotColor = '#000000',
  dotStyle = 'square',
  cornerSquareStyle = 'square',
  cornerDotStyle = 'square',
  logoSrc = null,
  link = 'https://qr-generator.online',
  isThumbnail = false,
}) => {
  const [svgHtml, setSvgHtml] = useState<string>('');

  useEffect(() => {
    if (isThumbnail) {
      // Lightweight clean sample vector matrix for selector cards
      const sampleMatrix = `
        <rect x="10" y="10" width="70" height="70" rx="16" stroke="${fgColor}" stroke-width="14" fill="none" />
        <rect x="30" y="30" width="30" height="30" rx="8" fill="${fgColor}" />
        <rect x="200" y="10" width="70" height="70" rx="16" stroke="${fgColor}" stroke-width="14" fill="none" />
        <rect x="220" y="30" width="30" height="30" rx="8" fill="${fgColor}" />
        <rect x="10" y="200" width="70" height="70" rx="16" stroke="${fgColor}" stroke-width="14" fill="none" />
        <rect x="30" y="220" width="30" height="30" rx="8" fill="${fgColor}" />
        <circle cx="140" cy="40" r="14" fill="${fgColor}" />
        <circle cx="140" cy="100" r="14" fill="${fgColor}" />
        <circle cx="140" cy="160" r="14" fill="${fgColor}" />
        <circle cx="140" cy="220" r="14" fill="${fgColor}" />
        <circle cx="40" cy="140" r="14" fill="${fgColor}" />
        <circle cx="100" cy="140" r="14" fill="${fgColor}" />
        <circle cx="200" cy="140" r="14" fill="${fgColor}" />
        <circle cx="240" cy="140" r="14" fill="${fgColor}" />
        <circle cx="200" cy="200" r="14" fill="${fgColor}" />
        <circle cx="240" cy="240" r="14" fill="${fgColor}" />
      `;
      const framedSvg = buildFramedSvg(sampleMatrix, frame, text, fgColor, bgColor, cornerSquareColor, frameColor, frameTextColor);
      setSvgHtml(framedSvg);
      return;
    }

    const dataString = link && link.trim().length > 0 ? link : 'https://qr-generator.online';
    const qr = new QRCodeStyling({
      width: 280,
      height: 280,
      type: 'svg',
      data: dataString,
      image: logoSrc || undefined,
      dotsOptions: { color: fgColor, type: dotStyle },
      backgroundOptions: { color: bgColor },
      cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
      cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
      imageOptions: { crossOrigin: 'anonymous', margin: 4, imageSize: 0.35, hideBackgroundDots: true },
      qrOptions: { errorCorrectionLevel: 'H' },
    });

    qr.getRawData('svg').then((blob) => {
      if (!blob) return;
      const reader = new FileReader();
      reader.onload = () => {
        const rawSvg = reader.result as string;
        const framedSvg = buildFramedSvg(rawSvg, frame, text, fgColor, bgColor, cornerSquareColor, frameColor, frameTextColor);
        setSvgHtml(framedSvg);
      };
      reader.readAsText(blob);
    });
  }, [
    frame,
    text,
    frameColor,
    frameTextColor,
    fgColor,
    bgColor,
    cornerSquareColor,
    cornerDotColor,
    dotStyle,
    cornerSquareStyle,
    cornerDotStyle,
    logoSrc,
    link,
    isThumbnail,
  ]);

  return (
    <div
      className={`w-full flex items-center justify-center select-none overflow-hidden transition-all ${
        isThumbnail ? 'h-20 max-h-20' : 'h-[230px] max-h-[240px]'
      } [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto [&>svg]:object-contain`}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};

export interface HomeProps {
  initialTab?: string;
  /**
   * True when <Home> is mounted purely as the generator widget inside another
   * page (FeaturePage does this). In embedded mode Home renders no hero
   * heading, no long-form sections and no JSON-LD, because the host page owns
   * all three — otherwise the page ships two <h1>s, duplicate
   * SoftwareApplication schema and every section twice.
   */
  embedded?: boolean;
}

const Home: React.FC<HomeProps> = ({ initialTab = 'url', embedded = false }) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Custom QR Styling Options State
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [cornerSquareColor, setCornerSquareColor] = useState('#000000');
  const [cornerDotColor, setCornerDotColor] = useState('#000000');
  const [dotStyle, setDotStyle] = useState<DotType>('square');
  const [cornerSquareStyle, setCornerSquareStyle] = useState<CornerSquareType>('square');
  const [cornerDotStyle, setCornerDotStyle] = useState<CornerDotType>('square');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [activeTemplate, setActiveTemplate] = useState('default');

  // Frame & Badge Customization State
  const [selectedFrame, setSelectedFrame] = useState<FrameStyle>('none');
  const [frameText, setFrameText] = useState('SCAN ME');
  const [frameColor, setFrameColor] = useState('#1E1E1E');
  const [frameTextColor, setFrameTextColor] = useState('#ffffff');
  const [frameCategory, setFrameCategory] = useState<string>('All');

  const handleSelectFrame = (style: FrameStyle) => {
    setSelectedFrame(style);
    if (!frameText || !frameText.trim()) {
      setFrameText('SCAN ME');
    }
  };

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Customization step-by-step modal toggle & step index
  const [showCustomize, setShowCustomize] = useState(false);
  const [customStep, setCustomStep] = useState<number>(1);

  // Optical Contrast / Scannability Score Calculation
  const scannabilityInfo = useMemo(() => {
    const getLuminance = (hex: string) => {
      const clean = hex.replace('#', '');
      const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
      const rgb = full.match(/.{2}/g)?.map(x => parseInt(x, 16) / 255) || [0, 0, 0];
      const a = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    };
    try {
      const l1 = getLuminance(fgColor);
      const l2 = getLuminance(bgColor);
      const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      if (ratio >= 7) {
        return { score: 100, label: '100% Optical Score', badge: 'Ultra-Fast Scan', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' };
      } else if (ratio >= 4.5) {
        return { score: 85, label: '85% Optical Score', badge: 'Standard Contrast', color: 'text-blue-400 border-blue-500/30 bg-blue-950/40' };
      } else {
        return { score: 50, label: 'Low Contrast Warning', badge: 'May Fail on Dim Cameras', color: 'text-amber-400 border-amber-500/30 bg-amber-950/40' };
      }
    } catch {
      return { score: 100, label: '100% Optical Score', badge: 'Ultra-Fast Scan', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' };
    }
  }, [fgColor, bgColor]);

  // Form Fields per QR Type
  const [urlInput, setUrlInput] = useState('');
  const [pdfInput, setPdfInput] = useState<{
    mode: 'gdrive' | 'upload' | 'url';
    url: string;
    fileName: string;
    fileSize: number;
    isUploading: boolean;
    fileError: string | null;
  }>({
    mode: 'gdrive',
    url: '',
    fileName: '',
    fileSize: 0,
    isUploading: false,
    fileError: null
  });
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

  const handlePdfFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxBytes = 10 * 1024 * 1024; // 10MB limit
    if (file.size > maxBytes) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      setPdfInput(prev => ({
        ...prev,
        fileName: file.name,
        fileSize: file.size,
        isUploading: false,
        fileError: `File size is ${sizeMB}MB (exceeds 10MB limit). Please compress your PDF or choose Google Drive.`
      }));
      return;
    }

    setPdfInput(prev => ({
      ...prev,
      fileName: file.name,
      fileSize: file.size,
      isUploading: true,
      fileError: null
    }));

    const result = await uploadPdfToSupabase(file);

    if (result.error || !result.url) {
      const fallbackUrl = URL.createObjectURL(file);
      setPdfInput(prev => ({
        ...prev,
        url: fallbackUrl,
        isUploading: false,
        fileError: result.error ? `Upload note: ${result.error}` : null
      }));
    } else {
      setPdfInput(prev => ({
        ...prev,
        url: result.url,
        isUploading: false,
        fileError: null
      }));
    }
  };

  const [instagramInput, setInstagramInput] = useState('');
  const [youtubeInput, setYoutubeInput] = useState('');
  const [linkedinInput, setLinkedinInput] = useState('');
  const [twitterInput, setTwitterInput] = useState('');
  const [tiktokInput, setTiktokInput] = useState('');
  const [telegramInput, setTelegramInput] = useState('');
  const [paypalInput, setPaypalInput] = useState('');
  const [upiInput, setUpiInput] = useState({ vpa: '', name: '', amount: '' });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic QR State
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDynamicSaveModal, setShowDynamicSaveModal] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState('');
  const [dynamicCustomCode, setDynamicCustomCode] = useState('');
  const [savedDynamicLink, setSavedDynamicLink] = useState<DynamicLink | null>(null);
  const [activeDynamicShortCode, setActiveDynamicShortCode] = useState<string | null>(null);
  const [savingDynamic, setSavingDynamic] = useState(false);
  const [dynamicError, setDynamicError] = useState<string | null>(null);
  const [copyShortUrlSuccess, setCopyShortUrlSuccess] = useState(false);

  const qrContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const currentSeo = useMemo(() => {
    return TOOL_SEO_DATA[activeTab] || TOOL_SEO_DATA.url;
  }, [activeTab]);

  // Long-form copy shared with the prerenderer, keyed by the real pathname so
  // the root page gets its own content instead of falling through to /url-*.
  const pathname = location.pathname;
  const richContent = useMemo(() => getRichContent(pathname), [pathname]);
  const routeContent = useMemo(() => getRouteContent(pathname), [pathname]);

  // Headline comes from routeMeta, the same dictionary the prerenderer reads,
  // so the H1 in the static HTML and the H1 after mount are identical.
  const routeMeta = useMemo(() => getRouteMeta(pathname), [pathname]);

  // Prefer the prerendered FAQ set so the visible Q&A matches the FAQPage
  // schema emitted in the static HTML. Google requires those to agree.
  const faqItems = useMemo(() => {
    if (richContent?.faqs?.length) {
      return richContent.faqs.map(f => ({ question: f.q, answer: f.a }));
    }
    return currentSeo.faqs;
  }, [richContent, currentSeo]);

  // Steps / features / use cases exist in both datasets. The prerendered
  // versions are the longer ones, so prefer them and keep the section headings
  // the prerenderer uses — otherwise the static HTML and the rendered DOM
  // describe the same page with different copy.
  const stepsTitle = richContent?.steps?.length
    ? 'How to Generate & Deploy (3-Step Practical Manual)'
    : currentSeo.stepsTitle;
  const stepItems = richContent?.steps?.length ? richContent.steps : currentSeo.steps;

  const featuresTitle = richContent?.features?.length
    ? 'Core Capabilities & Enterprise Advantages'
    : currentSeo.featuresTitle;
  const featureItems = richContent?.features?.length ? richContent.features : currentSeo.features;

  const useCasesTitle = richContent?.useCases?.length
    ? 'Cross-Industry Practical Applications'
    : currentSeo.useCasesTitle;
  const useCaseItems = richContent?.useCases?.length ? richContent.useCases : currentSeo.useCases;

  // Intro prose: routeContent.sections is what the prerenderer emits.
  const introSections = routeContent?.sections?.length
    ? routeContent.sections
    : [{ title: currentSeo.introTitle, paragraphs: currentSeo.introParagraphs }];

  useEffect(() => {
    // Title, description, canonical and social tags are owned exclusively by
    // SEOManager in App.tsx (sourced from constants/routeMeta.ts). Setting them
    // here too used to race it and overwrite the prerendered values.

    // As an embedded widget the host page owns the page-level schema; emitting
    // ours as well produced two SoftwareApplication entities on feature pages.
    if (embedded) return;

    // WebApplication, BreadcrumbList and FAQPage are already present in the
    // prerendered HTML; injectJSONLD skips any @type already in the document,
    // so these calls only fire on client-side navigations.
    const isRoot = pathname === '/';
    const toolPath = isRoot ? '/' : currentSeo.slug;

    injectJSONLD('jsonld-tool', getToolSoftwareSchema(currentSeo.title, toolPath, currentSeo.metaDescription));
    injectJSONLD('jsonld-faq', getFAQSchema(faqItems));

    const breadcrumbs = [
      { name: 'Home', url: '/' }
    ];
    if (!isRoot) {
      breadcrumbs.push({ name: currentSeo.title, url: currentSeo.slug });
    }
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema(breadcrumbs));

    return () => {
      removeJSONLD('jsonld-tool');
      removeJSONLD('jsonld-faq');
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [pathname, currentSeo, faqItems, language, embedded]);

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
      case 'pdf':
        return pdfInput.url.trim();
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
      case 'instagram':
        if (!instagramInput.trim()) return '';
        const igUser = instagramInput.trim().replace(/^@/, '');
        return `https://instagram.com/${igUser}`;
      case 'youtube':
        return youtubeInput.trim();
      case 'linkedin':
        return linkedinInput.trim();
      case 'twitter':
        if (!twitterInput.trim()) return '';
        const twHandle = twitterInput.trim().replace(/^@/, '');
        return twHandle.startsWith('http') ? twHandle : `https://x.com/${twHandle}`;
      case 'tiktok':
        if (!tiktokInput.trim()) return '';
        const ttUser = tiktokInput.trim().replace(/^@/, '');
        return `https://tiktok.com/@${ttUser}`;
      case 'telegram':
        if (!telegramInput.trim()) return '';
        const tgUser = telegramInput.trim().replace(/^@/, '');
        return `https://t.me/${tgUser}`;
      case 'paypal':
        if (!paypalInput.trim()) return '';
        return paypalInput.trim().startsWith('http') ? paypalInput.trim() : `https://paypal.me/${paypalInput.trim()}`;
      case 'upi':
        if (!upiInput.vpa) return '';
        return `upi://pay?pa=${encodeURIComponent(upiInput.vpa)}&pn=${encodeURIComponent(upiInput.name)}${upiInput.amount ? `&am=${upiInput.amount}` : ''}`;
      default:
        return urlInput.trim();
    }
  }, [activeTab, urlInput, pdfInput, textInput, vCardInput, wifiInput, emailInput, smsInput, phoneInput, whatsappInput, locationInput, eventInput, cryptoInput, instagramInput, youtubeInput, linkedinInput, twitterInput, tiktokInput, telegramInput, paypalInput, upiInput]);

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

  // Compute effective data string for QR generator (supports dynamic shortlink mode)
  const effectiveQrData = useMemo(() => {
    if (activeDynamicShortCode) {
      return `https://qr-generator.online/r/${activeDynamicShortCode}`;
    }
    return generated ? qrData : ' ';
  }, [activeDynamicShortCode, generated, qrData]);

  // Update QR Code whenever data or custom options change
  useEffect(() => {
    qrCode.update({
      data: effectiveQrData,
      dotsOptions: { color: fgColor, type: dotStyle },
      backgroundOptions: { color: bgColor },
      cornersSquareOptions: { color: cornerSquareColor, type: cornerSquareStyle },
      cornersDotOptions: { color: cornerDotColor, type: cornerDotStyle },
      image: logoSrc || undefined,
    });
  }, [effectiveQrData, fgColor, bgColor, cornerSquareColor, cornerDotColor, dotStyle, cornerSquareStyle, cornerDotStyle, logoSrc, qrCode]);

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

  // Download Handler (supports crisp framed PNG, WebP, and vector SVG composition export)
  const handleDownload = async (format: 'png' | 'svg' | 'webp') => {
    if (!generated) return;
    const namePrefix = activeDynamicShortCode ? `dynamic-qr-${activeDynamicShortCode}` : `qr-generator-${activeTab}`;

    if (selectedFrame === 'none') {
      qrCode.download({ name: namePrefix, extension: format });
      showToast(`✓ Downloaded ${format.toUpperCase()} successfully!`);
      return;
    }

    try {
      if (format === 'svg') {
        const rawSvgBlob = (await qrCode.getRawData('svg')) as Blob | null;
        if (!rawSvgBlob) {
          qrCode.download({ name: namePrefix, extension: 'svg' });
          return;
        }
        const rawSvgText = await rawSvgBlob.text();
        const framedSvg = buildFramedSvg(rawSvgText, selectedFrame, frameText, fgColor, bgColor, cornerSquareColor, frameColor, frameTextColor);
        const svgBlob = new Blob([framedSvg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${namePrefix}-framed.svg`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('✓ Downloaded framed SVG vector!');
        return;
      }

      // PNG or WEBP export
      const rawBlob = (await qrCode.getRawData('png')) as Blob | null;
      if (!rawBlob) {
        qrCode.download({ name: namePrefix, extension: format });
        return;
      }

      const canvas = await renderFramedCanvas(rawBlob, selectedFrame, frameText, fgColor, bgColor, cornerSquareColor, frameColor, frameTextColor);
      const mimeType = format === 'webp' ? 'image/webp' : 'image/png';
      
      canvas.toBlob((blob) => {
        if (!blob) {
          qrCode.download({ name: namePrefix, extension: format });
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${namePrefix}-framed.${format}`;
        a.click();
        URL.revokeObjectURL(url);
        showToast(`✓ Downloaded framed ${format.toUpperCase()}!`);
      }, mimeType, 0.95);
    } catch (err) {
      console.error('Framed export fallback:', err);
      qrCode.download({ name: namePrefix, extension: format });
    }
  };

  // Copy Handler (copies framed PNG or raw PNG image with fallback to text)
  const handleCopy = async () => {
    if (!generated) return;
    try {
      let blob: Blob | null = null;
      if (selectedFrame === 'none') {
        blob = (await qrCode.getRawData('png')) as Blob | null;
      } else {
        const rawBlob = (await qrCode.getRawData('png')) as Blob | null;
        if (rawBlob) {
          const canvas = await renderFramedCanvas(rawBlob, selectedFrame, frameText, fgColor, bgColor, cornerSquareColor, frameColor, frameTextColor);
          blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
        }
      }

      if (blob && navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        setCopiedToast(true);
        showToast('✓ QR Code image copied to clipboard!');
        setTimeout(() => setCopiedToast(false), 2200);
      } else {
        await navigator.clipboard.writeText(effectiveQrData);
        setCopiedToast(true);
        showToast('✓ QR Code data copied to clipboard!');
        setTimeout(() => setCopiedToast(false), 2200);
      }
    } catch (err) {
      console.warn('Image clipboard write failed, falling back to text:', err);
      try {
        await navigator.clipboard.writeText(effectiveQrData);
        setCopiedToast(true);
        showToast('✓ QR Code data copied to clipboard!');
        setTimeout(() => setCopiedToast(false), 2200);
      } catch (copyErr) {
        showToast('⚠️ Could not access clipboard');
      }
    }
  };

  // Dynamic QR Save Handler
  const handleOpenDynamicModal = () => {
    if (!qrData) return;
    if (!user) {
      setShowAuthModal(true);
    } else {
      setDynamicTitle(`${currentSeo.title} Campaign`);
      setShowDynamicSaveModal(true);
    }
  };

  const handleSaveDynamic = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!qrData) return;

    setSavingDynamic(true);
    setDynamicError(null);

    const { data, error } = await createDynamicLink({
      targetUrl: qrData,
      title: dynamicTitle.trim() || `${currentSeo.title} Campaign`,
      qrType: activeTab,
      qrStyle: {
        frame: selectedFrame,
        frameText,
        frameColor,
        frameTextColor,
        fgColor,
        bgColor,
        cornerSquareColor,
        cornerDotColor,
        dotStyle,
        cornerSquareStyle,
        cornerDotStyle,
        logoSrc,
      },
      customCode: dynamicCustomCode.trim() || undefined,
    });

    if (error) {
      setDynamicError(error.message);
    } else if (data) {
      setActiveDynamicShortCode(data.short_code);
      setSavedDynamicLink(data);
    }
    setSavingDynamic(false);
  };

  const handleCopyShortUrl = (shortCode: string) => {
    const url = `https://qr-generator.online/r/${shortCode}`;
    navigator.clipboard.writeText(url);
    setCopyShortUrlSuccess(true);
    setTimeout(() => setCopyShortUrlSuccess(false), 2000);
  };

  const handleDownloadSavedDynamic = async (format: 'png' | 'svg') => {
    if (!savedDynamicLink) return;
    const qrUrl = `https://qr-generator.online/r/${savedDynamicLink.short_code}`;
    const style = savedDynamicLink.qr_style || {};
    const namePrefix = `dynamic_qr_${savedDynamicLink.short_code}`;

    const qr = new QRCodeStyling({
      width: 1200,
      height: 1200,
      data: qrUrl,
      margin: 12,
      dotsOptions: {
        color: style.fgColor || '#1E1E1E',
        type: (style.dotStyle as any) || 'rounded',
      },
      backgroundOptions: {
        color: style.bgColor || '#ffffff',
      },
      cornersSquareOptions: {
        color: style.cornerSquareColor || style.fgColor || '#1E1E1E',
        type: (style.cornerSquareStyle as any) || 'extra-rounded',
      },
      cornersDotOptions: {
        color: style.cornerDotColor || style.fgColor || '#2B6F53',
        type: (style.cornerDotStyle as any) || 'dot',
      },
      image: style.logoSrc || undefined,
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 6,
        imageSize: 0.35,
        hideBackgroundDots: true,
      },
      qrOptions: {
        errorCorrectionLevel: 'H',
      },
      type: format === 'svg' ? 'svg' : 'canvas',
    });

    const frame = (style.frame || 'none') as FrameStyle;
    if (frame === 'none') {
      qr.download({ name: namePrefix, extension: format });
      return;
    }

    try {
      if (format === 'svg') {
        const rawSvgBlob = (await qr.getRawData('svg')) as Blob | null;
        if (!rawSvgBlob) {
          qr.download({ name: namePrefix, extension: 'svg' });
          return;
        }
        const rawSvgText = await rawSvgBlob.text();
        const framedSvg = buildFramedSvg(
          rawSvgText,
          frame,
          style.frameText || 'SCAN ME',
          style.fgColor || '#2B6F53',
          style.bgColor || '#ffffff',
          style.cornerSquareColor || style.fgColor || '#1E1E1E',
          style.frameColor || style.fgColor || '#1E1E1E',
          style.frameTextColor || '#ffffff'
        );
        const svgBlob = new Blob([framedSvg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${namePrefix}-framed.svg`;
        a.click();
        URL.revokeObjectURL(url);
        return;
      }

      const rawBlob = (await qr.getRawData('png')) as Blob | null;
      if (!rawBlob) {
        qr.download({ name: namePrefix, extension: format });
        return;
      }

      const canvas = await renderFramedCanvas(
        rawBlob,
        frame,
        style.frameText || 'SCAN ME',
        style.fgColor || '#2B6F53',
        style.bgColor || '#ffffff',
        style.cornerSquareColor || style.fgColor || '#1E1E1E',
        style.frameColor || style.fgColor || '#1E1E1E',
        style.frameTextColor || '#ffffff'
      );
      
      canvas.toBlob((blob) => {
        if (!blob) {
          qr.download({ name: namePrefix, extension: format });
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${namePrefix}-framed.${format}`;
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/png', 0.95);
    } catch {
      qr.download({ name: namePrefix, extension: format });
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

            {/* Title & Subtitle. Not rendered at all when embedded: the host
                page has already emitted the page's single <h1>, and a second
                one (with identical text, since both read routeMeta) is a real
                on-page SEO defect, not just redundant markup. */}
            {!embedded && (
              <div className="order-2 lg:order-1 text-center max-w-4xl mx-auto px-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-3 mt-6 lg:mt-0">
                  {routeContent?.badge || currentSeo.badge}
                </div>
                <h1 className="mb-4 text-[26px] font-bold text-gray-900 leading-tight md:text-4xl lg:text-5xl">
                  {routeMeta.h1}
                </h1>
                <p className="mb-8 text-base text-gray-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
                  {routeContent?.lead || currentSeo.subheadline}
                </p>
              </div>
            )}

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

                        {/* PDF DOCUMENT / MENU / GOOGLE DRIVE */}
                        {activeTab === 'pdf' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            {/* Mode Selector */}
                            <div className="flex bg-black/30 p-1 rounded-xl border border-white/10 text-xs">
                              <button
                                type="button"
                                onClick={() => setPdfInput(prev => ({ ...prev, mode: 'gdrive' }))}
                                className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all ${
                                  pdfInput.mode === 'gdrive' ? 'bg-accent text-white shadow-xs' : 'text-white/70 hover:text-white'
                                }`}
                              >
                                Google Drive (Cloud)
                              </button>
                              <button
                                type="button"
                                onClick={() => setPdfInput(prev => ({ ...prev, mode: 'upload' }))}
                                className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all ${
                                  pdfInput.mode === 'upload' ? 'bg-accent text-white shadow-xs' : 'text-white/70 hover:text-white'
                                }`}
                              >
                                Upload PDF File
                              </button>
                              <button
                                type="button"
                                onClick={() => setPdfInput(prev => ({ ...prev, mode: 'url' }))}
                                className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all ${
                                  pdfInput.mode === 'url' ? 'bg-accent text-white shadow-xs' : 'text-white/70 hover:text-white'
                                }`}
                              >
                                Direct PDF URL
                              </button>
                            </div>

                            {/* Google Drive Option */}
                            {pdfInput.mode === 'gdrive' && (
                              <div className="space-y-2">
                                <div className="text-[11px] text-white/80 leading-relaxed bg-black/20 p-2.5 rounded-xl border border-white/5">
                                  <strong>How to use Google Drive for your PDF:</strong><br />
                                  1. Upload your PDF to Google Drive.<br />
                                  2. Right-click ➔ Share ➔ Set to <strong>"Anyone with the link can view"</strong>.<br />
                                  3. Paste the share link below:
                                </div>
                                <input
                                  type="url"
                                  placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                                  value={pdfInput.url}
                                  onChange={(e) => setPdfInput(prev => ({ ...prev, url: e.target.value }))}
                                  className="w-full rounded-xl bg-white text-black px-4 py-2.5 text-xs font-mono outline-none focus:ring-2 focus:ring-accent"
                                />
                              </div>
                            )}

                            {/* Upload PDF Option */}
                            {pdfInput.mode === 'upload' && (
                              <div className="space-y-2">
                                <label className="block w-full cursor-pointer bg-white/10 hover:bg-white/15 border border-white/20 border-dashed rounded-xl p-4 text-center transition-colors">
                                  {pdfInput.isUploading ? (
                                    <div className="flex flex-col items-center justify-center py-1 gap-2">
                                      <div className="w-7 h-7 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                                      <span className="text-xs font-bold text-accent">Uploading PDF to Cloud Storage...</span>
                                    </div>
                                  ) : (
                                    <>
                                      <svg className="w-8 h-8 text-[#BEF392] mx-auto mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                      </svg>
                                      <span className="text-xs font-bold text-white block">
                                        {pdfInput.fileName ? pdfInput.fileName : 'Choose a PDF file from your device'}
                                      </span>
                                      <span className="text-[10px] text-white/60 block mt-0.5">
                                        Auto-hosted on Cloud • Maximum limit: <strong>10 MB</strong>
                                      </span>
                                    </>
                                  )}
                                  <input
                                    type="file"
                                    accept=".pdf,application/pdf"
                                    onChange={handlePdfFileUpload}
                                    disabled={pdfInput.isUploading}
                                    className="hidden"
                                  />
                                </label>

                                {pdfInput.fileSize > 0 && !pdfInput.fileError && !pdfInput.isUploading && (
                                  <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/30 px-3 py-2 rounded-xl text-xs text-emerald-300">
                                    <div className="flex items-center gap-2 truncate">
                                      <span className="font-bold">✓ Cloud Hosted:</span>
                                      <span className="truncate">{pdfInput.fileName}</span>
                                    </div>
                                    <span className="font-mono text-[10px] shrink-0 font-bold bg-emerald-900/60 px-1.5 py-0.5 rounded">
                                      {(pdfInput.fileSize / (1024 * 1024)).toFixed(2)} MB
                                    </span>
                                  </div>
                                )}

                                {pdfInput.fileError && (
                                  <div className="p-2.5 bg-red-950/50 border border-red-500/50 rounded-xl text-red-300 text-xs font-medium">
                                    ⚠️ {pdfInput.fileError}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Direct URL Option */}
                            {pdfInput.mode === 'url' && (
                              <div className="space-y-1.5">
                                <input
                                  type="url"
                                  placeholder="https://yoursite.com/menu.pdf or Dropbox PDF link"
                                  value={pdfInput.url}
                                  onChange={(e) => setPdfInput(prev => ({ ...prev, url: e.target.value }))}
                                  className="w-full rounded-xl bg-white text-black px-4 py-2.5 text-xs font-mono outline-none focus:ring-2 focus:ring-accent"
                                />
                                <span className="text-[11px] text-white/60 block">Enter any direct PDF link or public document endpoint.</span>
                              </div>
                            )}
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

                        {/* INSTAGRAM */}
                        {activeTab === 'instagram' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="text"
                              placeholder="Instagram username (without @)"
                              value={instagramInput}
                              onChange={(e) => setInstagramInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">We'll generate instagram.com/username link automatically</span>
                          </div>
                        )}

                        {/* YOUTUBE */}
                        {activeTab === 'youtube' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="url"
                              placeholder="https://youtube.com/@yourchannel or video URL"
                              value={youtubeInput}
                              onChange={(e) => setYoutubeInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Paste your YouTube channel or video URL</span>
                          </div>
                        )}

                        {/* LINKEDIN */}
                        {activeTab === 'linkedin' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="url"
                              placeholder="https://linkedin.com/in/yourprofile"
                              value={linkedinInput}
                              onChange={(e) => setLinkedinInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Paste your LinkedIn profile URL</span>
                          </div>
                        )}

                        {/* TWITTER / X */}
                        {activeTab === 'twitter' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="text"
                              placeholder="Twitter/X handle (without @) or full URL"
                              value={twitterInput}
                              onChange={(e) => setTwitterInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Enter handle or paste x.com/twitter.com URL</span>
                          </div>
                        )}

                        {/* TIKTOK */}
                        {activeTab === 'tiktok' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="text"
                              placeholder="TikTok username (without @)"
                              value={tiktokInput}
                              onChange={(e) => setTiktokInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">We'll generate tiktok.com/@username link automatically</span>
                          </div>
                        )}

                        {/* TELEGRAM */}
                        {activeTab === 'telegram' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="text"
                              placeholder="Telegram username, group, or channel name"
                              value={telegramInput}
                              onChange={(e) => setTelegramInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">We'll generate t.me/username link automatically</span>
                          </div>
                        )}

                        {/* PAYPAL */}
                        {activeTab === 'paypal' && (
                          <div className="flex flex-col gap-2">
                            <input
                              type="text"
                              placeholder="PayPal.me username or full PayPal.me URL"
                              value={paypalInput}
                              onChange={(e) => setPaypalInput(e.target.value)}
                              className="w-full rounded-full bg-white text-black pl-5 pr-5 py-3 text-base outline-none focus:ring-2 focus:ring-accent"
                            />
                            <span className="text-xs text-white/70">Enter your PayPal.me username or full URL</span>
                          </div>
                        )}

                        {/* UPI */}
                        {activeTab === 'upi' && (
                          <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <input
                              type="text"
                              placeholder="UPI ID (e.g., yourname@upi) *"
                              value={upiInput.vpa}
                              onChange={(e) => setUpiInput({ ...upiInput, vpa: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Payee Name"
                              value={upiInput.name}
                              onChange={(e) => setUpiInput({ ...upiInput, name: e.target.value })}
                              className="rounded-xl bg-white text-black px-4 py-2.5 text-sm outline-none"
                            />
                            <input
                              type="number"
                              placeholder="Amount (optional)"
                              value={upiInput.amount}
                              onChange={(e) => setUpiInput({ ...upiInput, amount: e.target.value })}
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
                    
                    {/* Live Scannability & Contrast Quality Score Badge */}
                    <div className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border text-[11px] font-medium mb-3 transition-all">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white/90 font-semibold">{scannabilityInfo.label}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${scannabilityInfo.color}`}>
                        {scannabilityInfo.badge}
                      </span>
                    </div>

                    {/* QR Canvas + Template Mini-QR Carousel */}
                    <div className="flex items-center justify-between w-full gap-3">
                      {/* Canvas Container with Live Reactive Framed QR View */}
                      <div className="w-[74%] max-w-[235px] h-[240px] flex items-center justify-center p-1">
                        <FramedQrView
                          frame={selectedFrame}
                          text={frameText}
                          frameColor={frameColor}
                          frameTextColor={frameTextColor}
                          fgColor={fgColor}
                          bgColor={bgColor}
                          cornerSquareColor={cornerSquareColor}
                          cornerDotColor={cornerDotColor}
                          dotStyle={dotStyle}
                          cornerSquareStyle={cornerSquareStyle}
                          cornerDotStyle={cornerDotStyle}
                          logoSrc={logoSrc}
                          link={effectiveQrData}
                        />
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
                              <rect x="2" y="2" width="6" height="6" rx={tpl.cornerSquareType === 'extra-rounded' ? '2' : tpl.cornerSquareType === 'dot' ? '3' : '0'} stroke={tpl.cornerSquareColor} strokeWidth="1.5" fill="none" />
                              {tpl.cornerDotType === 'dot' ? (
                                <circle cx="5" cy="5" r="1.5" fill={tpl.cornerDotColor} />
                              ) : (
                                <rect x="3.5" y="3.5" width="3" height="3" fill={tpl.cornerDotColor} />
                              )}
                              
                              {/* Top Right Eye */}
                              <rect x="16" y="2" width="6" height="6" rx={tpl.cornerSquareType === 'extra-rounded' ? '2' : tpl.cornerSquareType === 'dot' ? '3' : '0'} stroke={tpl.cornerSquareColor} strokeWidth="1.5" fill="none" />
                              {tpl.cornerDotType === 'dot' ? (
                                <circle cx="19" cy="5" r="1.5" fill={tpl.cornerDotColor} />
                              ) : (
                                <rect x="17.5" y="3.5" width="3" height="3" fill={tpl.cornerDotColor} />
                              )}
                              
                              {/* Bottom Left Eye */}
                              <rect x="2" y="16" width="6" height="6" rx={tpl.cornerSquareType === 'extra-rounded' ? '2' : tpl.cornerSquareType === 'dot' ? '3' : '0'} stroke={tpl.cornerSquareColor} strokeWidth="1.5" fill="none" />
                              {tpl.cornerDotType === 'dot' ? (
                                <circle cx="5" cy="19" r="1.5" fill={tpl.cornerDotColor} />
                              ) : (
                                <rect x="3.5" y="17.5" width="3" height="3" fill={tpl.cornerDotColor} />
                              )}

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
                          title="Download SVG Vector"
                          className={`h-10 px-3 rounded-lg text-xs font-bold text-white transition-colors ${generated ? 'bg-accent/80 hover:bg-accent' : 'bg-[#C7C7C7] cursor-not-allowed'}`}
                        >
                          SVG
                        </button>
                        <button
                          onClick={handleCopy}
                          disabled={!generated}
                          title="Copy QR to clipboard"
                          className={`h-10 px-3 rounded-lg transition-all text-white flex items-center justify-center gap-1 text-xs font-bold ${
                            copiedToast
                              ? 'bg-emerald-600 ring-2 ring-emerald-400 scale-105'
                              : generated
                              ? 'bg-white/10 hover:bg-white/20'
                              : 'bg-[#C7C7C7] cursor-not-allowed'
                          }`}
                        >
                          {copiedToast ? (
                            <>
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="hidden sm:inline">Copied!</span>
                            </>
                          ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Dynamic QR Action Button */}
                      <button
                        onClick={handleOpenDynamicModal}
                        disabled={!generated}
                        className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                          generated
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/20'
                            : 'bg-white/5 text-white/30 cursor-not-allowed'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Save as Dynamic QR (Track &amp; Edit)</span>
                      </button>

                      {/* Customize Options Button (Opens Step-by-Step Modal) */}
                      <button
                        onClick={() => setShowCustomize(true)}
                        className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-[#BEF392] font-semibold rounded-lg text-xs flex items-center justify-center gap-2 border border-white/15 transition-all shadow-xs"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <span>Customize Design &amp; Frames (Step-by-Step)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ════════ STEP-BY-STEP QR CUSTOMIZATION MODAL ════════ */}
                {showCustomize && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in">
                    <div className="bg-[#141414] border border-white/15 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
                      
                      {/* Modal Header */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1a1a1a]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white leading-tight">Customize QR Design</h3>
                            <p className="text-xs text-white/50">
                              Step {customStep} of 4: {customStep === 1 ? 'Frame & CTA Banner' : customStep === 2 ? 'Colors & Theme' : customStep === 3 ? 'Shapes & Patterns' : 'Logo & Branding'}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowCustomize(false)}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center text-sm font-bold transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Step Indicator Tabs */}
                      <div className="grid grid-cols-4 border-b border-white/10 bg-black/30 text-xs font-semibold">
                        {[
                          { step: 1, label: '1. Frame & CTA', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
                          { step: 2, label: '2. Colors', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
                          { step: 3, label: '3. Shapes', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
                          { step: 4, label: '4. Logo', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
                        ].map((s) => (
                          <button
                            key={s.step}
                            onClick={() => setCustomStep(s.step)}
                            className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                              customStep === s.step
                                ? 'border-[#BEF392] text-[#BEF392] bg-white/5 font-bold'
                                : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <svg className="w-3.5 h-3.5 hidden sm:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon} />
                            </svg>
                            <span className="truncate">{s.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Modal Body: Two Columns */}
                      <div className="flex-1 overflow-y-auto p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                        
                        {/* Left Controls Area (8 cols) */}
                        <div className="md:col-span-8 space-y-5">
                          
                          {/* ──────── STEP 1: FRAMES & CTA ──────── */}
                          {customStep === 1 && (
                            <div className="space-y-4 animate-in">
                              
                              {/* 1. Frame Call-to-Action Text (Moved to TOP of Step 1) */}
                              <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-between">
                                  <label className="text-xs font-bold text-white flex items-center gap-1.5">
                                    <span>Frame Call-to-Action Text</span>
                                    <span className="text-[10px] font-normal text-white/50">(Updates all frames below)</span>
                                  </label>
                                  <span className="text-[10px] text-white/40 font-mono">{frameText.length}/28 chars</span>
                                </div>
                                <input
                                  type="text"
                                  value={frameText}
                                  onChange={(e) => setFrameText(e.target.value)}
                                  placeholder="e.g. SCAN ME"
                                  maxLength={28}
                                  className="w-full bg-white/10 text-white rounded-xl px-3.5 py-2.5 text-xs outline-none border border-white/20 font-bold uppercase tracking-wider focus:border-[#BEF392]"
                                />
                                
                                {/* Quick CTA Presets */}
                                <div className="space-y-1.5 pt-1">
                                  <span className="text-[10px] text-white/40 font-semibold block">Quick CTA Presets:</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {[
                                      'SCAN ME',
                                      'SCAN FOR MENU',
                                      'CONNECT TO WI-FI',
                                      'FOLLOW US',
                                      'LEAVE A REVIEW',
                                      'GET 20% OFF',
                                      'DOWNLOAD OUR APP',
                                      'VISIT WEBSITE'
                                    ].map((preset) => (
                                      <button
                                        key={preset}
                                        onClick={() => setFrameText(preset)}
                                        className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${
                                          frameText === preset
                                            ? 'bg-[#BEF392] text-slate-950 border-[#BEF392] shadow-xs font-bold'
                                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                                        }`}
                                      >
                                        {preset}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* 2. Frame Style Selector Grid */}
                              <div className="space-y-3 pt-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-sm font-bold text-white">Select a Frame Style</h4>
                                    <p className="text-xs text-white/50">Choose how your QR code and CTA badge are presented</p>
                                  </div>
                                  {selectedFrame !== 'none' && (
                                    <button
                                      onClick={() => setSelectedFrame('none')}
                                      className="text-xs text-white/50 hover:text-white font-medium underline"
                                    >
                                      Clear Frame
                                    </button>
                                  )}
                                </div>

                                {/* Category Filter Pills */}
                                <div className="flex flex-wrap items-center gap-1.5 pb-1">
                                  {['All', 'Popular', 'Focus', 'Device', 'Speech', 'Modern'].map((cat) => (
                                    <button
                                      key={cat}
                                      onClick={() => setFrameCategory(cat)}
                                      className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${
                                        frameCategory === cat
                                          ? 'bg-[#BEF392] text-slate-950 shadow-xs'
                                          : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                      }`}
                                    >
                                      {cat}
                                    </button>
                                  ))}
                                </div>

                                {/* Frame Cards Grid with Live Miniature Visual Previews */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-1 pb-1">
                                  {FRAME_OPTIONS
                                    .filter(f => frameCategory === 'All' || f.category === frameCategory)
                                    .map((f) => (
                                      <button
                                        key={f.id}
                                        onClick={() => handleSelectFrame(f.id)}
                                        className={`p-2.5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 relative group ${
                                          selectedFrame === f.id
                                            ? 'border-[#BEF392] bg-[#BEF392]/10 ring-2 ring-[#BEF392]/40 shadow-lg'
                                            : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                                        }`}
                                      >
                                        {/* Live Miniature Framed QR Preview Card */}
                                        <div className="w-full h-24 rounded-xl overflow-hidden shadow-inner bg-slate-900/60 p-1 flex items-center justify-center">
                                          <div className="w-full h-full flex items-center justify-center">
                                            <FramedQrView
                                              frame={f.id}
                                              text={frameText}
                                              frameColor={frameColor}
                                              frameTextColor={frameTextColor}
                                              isThumbnail={true}
                                            />
                                          </div>
                                        </div>

                                        <div className="flex items-center justify-between w-full px-0.5">
                                          <div className="truncate">
                                            <span className={`text-xs font-bold block leading-tight truncate ${selectedFrame === f.id ? 'text-[#BEF392]' : 'text-white'}`}>
                                              {f.label}
                                            </span>
                                            <span className="text-[10px] text-white/40 uppercase tracking-wider block font-medium mt-0.5">
                                              {f.category}
                                            </span>
                                          </div>
                                          {selectedFrame === f.id && (
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#BEF392] shrink-0 ml-1 shadow-sm shadow-[#BEF392]/50" />
                                          )}
                                        </div>
                                      </button>
                                    ))}
                                </div>
                              </div>

                            </div>
                          )}

                          {/* ──────── STEP 2: COLORS & PALETTE ──────── */}
                          {customStep === 2 && (
                            <div className="space-y-5 animate-in">
                              <div>
                                <h4 className="text-sm font-bold text-white">Color Palette &amp; Contrast</h4>
                                <p className="text-xs text-white/50">Customize your QR code patterns, backgrounds, and frame colors</p>
                              </div>

                              {/* Curated 1-Click Themes */}
                              <div className="space-y-2">
                                <label className="text-xs font-bold text-white/80 block">Curated High-Contrast Palettes</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                  {[
                                    { name: 'Emerald', fg: '#2B6F53', bg: '#ffffff', sq: '#1E1E1E', dot: '#2B6F53' },
                                    { name: 'Obsidian', fg: '#0f172a', bg: '#ffffff', sq: '#0f172a', dot: '#0f172a' },
                                    { name: 'Indigo', fg: '#4338ca', bg: '#ffffff', sq: '#312e81', dot: '#4338ca' },
                                    { name: 'Crimson', fg: '#be123c', bg: '#ffffff', sq: '#881337', dot: '#be123c' },
                                    { name: 'Amber', fg: '#b45309', bg: '#ffffff', sq: '#78350f', dot: '#b45309' },
                                    { name: 'Royal Gold', fg: '#854d0e', bg: '#ffffff', sq: '#713f12', dot: '#ca8a04' },
                                    { name: 'Ocean Blue', fg: '#0369a1', bg: '#ffffff', sq: '#0c4a6e', dot: '#0284c7' },
                                    { name: 'Purple Night', fg: '#6b21a8', bg: '#ffffff', sq: '#581c87', dot: '#9333ea' },
                                  ].map((pal) => (
                                    <button
                                      key={pal.name}
                                      onClick={() => {
                                        setFgColor(pal.fg);
                                        setBgColor(pal.bg);
                                        setCornerSquareColor(pal.sq);
                                        setCornerDotColor(pal.dot);
                                      }}
                                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                                        fgColor === pal.fg
                                          ? 'border-accent bg-accent/20 ring-1 ring-accent'
                                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                                      }`}
                                    >
                                      <span className="text-xs font-semibold text-white truncate">{pal.name}</span>
                                      <div className="flex items-center gap-1 shrink-0">
                                        <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: pal.fg }} />
                                        <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: pal.dot }} />
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Custom Precision QR Color Pickers */}
                              <div className="space-y-3 pt-2 border-t border-white/10">
                                <label className="text-xs font-bold text-white/80 block">Custom Precision Colors</label>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div>
                                      <span className="text-xs font-semibold text-white block">Pattern Color</span>
                                      <span className="text-[10px] text-white/40">{fgColor}</span>
                                    </div>
                                    <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                  </div>

                                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div>
                                      <span className="text-xs font-semibold text-white block">Background</span>
                                      <span className="text-[10px] text-white/40">{bgColor}</span>
                                    </div>
                                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                  </div>

                                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div>
                                      <span className="text-xs font-semibold text-white block">Corner Frame</span>
                                      <span className="text-[10px] text-white/40">{cornerSquareColor}</span>
                                    </div>
                                    <input type="color" value={cornerSquareColor} onChange={(e) => setCornerSquareColor(e.target.value)} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                  </div>

                                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div>
                                      <span className="text-xs font-semibold text-white block">Corner Dot Eye</span>
                                      <span className="text-[10px] text-white/40">{cornerDotColor}</span>
                                    </div>
                                    <input type="color" value={cornerDotColor} onChange={(e) => setCornerDotColor(e.target.value)} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                  </div>
                                </div>
                              </div>

                              {/* Frame & CTA Banner Colors (Moved to Step 2) */}
                              <div className="space-y-3 pt-2 border-t border-white/10">
                                <div>
                                  <label className="text-xs font-bold text-white block">Frame &amp; CTA Banner Colors</label>
                                  <span className="text-[10px] text-white/40">Applies to the active frame outline and CTA badge</span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {/* Frame Body / Border Color */}
                                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <span className="text-xs font-bold text-white block">Frame Color</span>
                                        <span className="text-[10px] text-white/40 font-mono">{frameColor}</span>
                                      </div>
                                      <input
                                        type="color"
                                        value={frameColor}
                                        onChange={(e) => setFrameColor(e.target.value)}
                                        className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent"
                                      />
                                    </div>
                                    
                                    {/* Quick Frame Color Swatches */}
                                    <div className="flex items-center gap-1.5 pt-1">
                                      {[
                                        '#1E1E1E',
                                        '#2B6F53',
                                        '#4338CA',
                                        '#BE123C',
                                        '#B45309',
                                        '#0369A1',
                                        '#6B21A8',
                                        '#CA8A04'
                                      ].map((c) => (
                                        <button
                                          key={c}
                                          onClick={() => setFrameColor(c)}
                                          className={`w-5 h-5 rounded-full border transition-transform ${
                                            frameColor.toLowerCase() === c.toLowerCase()
                                              ? 'scale-125 ring-2 ring-white border-transparent'
                                              : 'border-white/20 hover:scale-110'
                                          }`}
                                          style={{ backgroundColor: c }}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  {/* Frame Text Color */}
                                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <span className="text-xs font-bold text-white block">Frame Text Color</span>
                                        <span className="text-[10px] text-white/40 font-mono">{frameTextColor}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <div 
                                          className="w-6 h-6 rounded-full border border-white/20 shadow-xs" 
                                          style={{ backgroundColor: frameTextColor }}
                                        />
                                        <input
                                          type="color"
                                          value={frameTextColor && frameTextColor.startsWith('#') && frameTextColor.length === 7 ? frameTextColor : '#ffffff'}
                                          onChange={(e) => setFrameTextColor(e.target.value)}
                                          className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent"
                                        />
                                      </div>
                                    </div>
                                    
                                    {/* Palette Swatches */}
                                    <div className="flex items-center gap-1.5 pt-0.5">
                                      {['#ffffff', '#000000', '#BEF392', '#fbbf24', '#f87171', '#60a5fa', '#34d399', '#e879f9'].map((c) => (
                                        <button
                                          key={c}
                                          onClick={() => setFrameTextColor(c)}
                                          className={`w-6 h-6 rounded-full border transition-all ${
                                            frameTextColor.toLowerCase() === c.toLowerCase()
                                              ? 'scale-125 ring-2 ring-white border-transparent'
                                              : 'border-white/20 hover:scale-110'
                                          }`}
                                          style={{ backgroundColor: c }}
                                        />
                                      ))}
                                    </div>

                                    {/* Quick White / Black / Accent toggles */}
                                    <div className="flex items-center gap-1.5 pt-0.5">
                                      <button
                                        onClick={() => setFrameTextColor('#ffffff')}
                                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                                          frameTextColor.toLowerCase() === '#ffffff'
                                            ? 'bg-white text-slate-950 border-white'
                                            : 'bg-white/5 text-white/70 border-white/15 hover:bg-white/10'
                                        }`}
                                      >
                                        White Text
                                      </button>
                                      <button
                                        onClick={() => setFrameTextColor('#000000')}
                                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                                          frameTextColor.toLowerCase() === '#000000'
                                            ? 'bg-black text-white border-white/40'
                                            : 'bg-white/5 text-white/70 border-white/15 hover:bg-white/10'
                                        }`}
                                      >
                                        Black Text
                                      </button>
                                      <button
                                        onClick={() => setFrameTextColor('#BEF392')}
                                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                                          frameTextColor.toLowerCase() === '#bef392'
                                            ? 'bg-[#BEF392] text-slate-950 border-[#BEF392]'
                                            : 'bg-white/5 text-white/70 border-white/15 hover:bg-white/10'
                                        }`}
                                      >
                                        Lime Accent
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          )}

                          {/* ──────── STEP 3: SHAPES & PATTERNS ──────── */}
                          {customStep === 3 && (
                            <div className="space-y-5 animate-in">
                              <div>
                                <h4 className="text-sm font-bold text-white">QR Shapes &amp; Dot Patterns</h4>
                                <p className="text-xs text-white/50">Customize the pattern geometry and corner detection eye shapes</p>
                              </div>

                              {/* Dot Patterns */}
                              <div className="space-y-2">
                                <label className="text-xs font-bold text-white/80 block">Pattern Matrix Style</label>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                  {DOT_STYLES.map((s) => (
                                    <button
                                      key={s.value}
                                      onClick={() => setDotStyle(s.value as DotType)}
                                      className={`p-3 rounded-xl border text-center transition-all ${
                                        dotStyle === s.value
                                          ? 'border-accent bg-accent/20 text-[#BEF392] font-bold shadow-md'
                                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                                      }`}
                                    >
                                      <span className="text-xs block capitalize">{s.label}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Corner Square Styles */}
                              <div className="space-y-2 pt-2 border-t border-white/10">
                                <label className="text-xs font-bold text-white/80 block">Corner Square Frame Style</label>
                                <div className="grid grid-cols-3 gap-2">
                                  {CORNER_SQUARE_STYLES.map((s) => (
                                    <button
                                      key={s.value}
                                      onClick={() => setCornerSquareStyle(s.value as CornerSquareType)}
                                      className={`p-3 rounded-xl border text-center transition-all ${
                                        cornerSquareStyle === s.value
                                          ? 'border-accent bg-accent/20 text-[#BEF392] font-bold shadow-md'
                                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                                      }`}
                                    >
                                      <span className="text-xs block">{s.label}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Corner Dot Styles */}
                              <div className="space-y-2 pt-2 border-t border-white/10">
                                <label className="text-xs font-bold text-white/80 block">Corner Dot Eye Style</label>
                                <div className="grid grid-cols-2 gap-2">
                                  {CORNER_DOT_STYLES.map((s) => (
                                    <button
                                      key={s.value}
                                      onClick={() => setCornerDotStyle(s.value as CornerDotType)}
                                      className={`p-3 rounded-xl border text-center transition-all ${
                                        cornerDotStyle === s.value
                                          ? 'border-accent bg-accent/20 text-[#BEF392] font-bold shadow-md'
                                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                                      }`}
                                    >
                                      <span className="text-xs block">{s.label}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ──────── STEP 4: LOGO & BRANDING ──────── */}
                          {customStep === 4 && (
                            <div className="space-y-5 animate-in">
                              <div>
                                <h4 className="text-sm font-bold text-white">Center Logo &amp; Branding</h4>
                                <p className="text-xs text-white/50">Add a custom company logo or popular social platform icon</p>
                              </div>

                              {/* Custom Upload */}
                              <div className="space-y-2">
                                <label className="text-xs font-bold text-white/80 block">Upload Your Logo</label>
                                <label className="block w-full cursor-pointer bg-white/5 hover:bg-white/10 border-2 border-white/20 border-dashed rounded-2xl p-5 text-center transition-colors">
                                  <svg className="w-8 h-8 mx-auto text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>
                                  <span className="text-xs text-[#BEF392] block font-bold">Click to Upload Logo Image</span>
                                  <span className="text-[10px] text-white/40 block mt-0.5">Supports PNG, JPG, SVG, WebP (Square ratio recommended)</span>
                                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                </label>

                                {logoSrc && (
                                  <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl text-xs">
                                    <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                                      <span>✓</span>
                                      <span>Custom Logo Active</span>
                                    </div>
                                    <button
                                      onClick={() => setLogoSrc(null)}
                                      className="text-xs text-red-400 hover:text-red-300 font-bold underline"
                                    >
                                      Remove Logo
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                        </div>

                        {/* Right Sticky Preview Card (4 cols) */}
                        <div className="md:col-span-4 flex flex-col items-center justify-start bg-black/40 border border-white/10 rounded-2xl p-4 sticky top-0">
                          <div className="w-full flex items-center justify-between mb-3 text-xs">
                            <span className="text-white/60 font-semibold">Live Simulation</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${scannabilityInfo.color}`}>
                              {scannabilityInfo.score}% Scan Score
                            </span>
                          </div>

                          {/* Dynamic Framed QR Live Simulation Container */}
                          <div className="w-full max-w-[220px] h-[240px] flex items-center justify-center p-1.5 bg-slate-900/50 rounded-2xl border border-white/5 shadow-inner">
                            <FramedQrView
                              frame={selectedFrame}
                              text={frameText}
                              frameColor={frameColor}
                              frameTextColor={frameTextColor}
                              fgColor={fgColor}
                              bgColor={bgColor}
                              cornerSquareColor={cornerSquareColor}
                              cornerDotColor={cornerDotColor}
                              dotStyle={dotStyle}
                              cornerSquareStyle={cornerSquareStyle}
                              cornerDotStyle={cornerDotStyle}
                              logoSrc={logoSrc}
                              link={effectiveQrData}
                            />
                          </div>
                        </div>

                      </div>

                      {/* Modal Footer: Navigation */}
                      <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#1a1a1a]">
                        <div>
                          <button
                            onClick={() => {
                              setSelectedFrame('none');
                              setFgColor('#000000');
                              setBgColor('#ffffff');
                              setCornerSquareColor('#000000');
                              setCornerDotColor('#000000');
                              setDotStyle('square');
                              setCornerSquareStyle('square');
                              setCornerDotStyle('square');
                              setLogoSrc(null);
                              setFrameText('SCAN ME');
                              setFrameColor('#1E1E1E');
                              setFrameTextColor('#ffffff');
                              setActiveTemplate('default');
                            }}
                            className="text-xs text-white/50 hover:text-white font-medium transition-colors"
                          >
                            Reset All
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          {customStep > 1 && (
                            <button
                              onClick={() => setCustomStep(customStep - 1)}
                              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                              ← Back
                            </button>
                          )}

                          {customStep < 4 ? (
                            <button
                              onClick={() => setCustomStep(customStep + 1)}
                              className="px-5 py-2 rounded-xl text-xs font-bold bg-[#BEF392] text-slate-950 hover:bg-[#a8e775] transition-all shadow-md flex items-center gap-1"
                            >
                              <span>Next Step</span>
                              <span>→</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => setShowCustomize(false)}
                              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-white hover:bg-emerald-400 transition-all shadow-md flex items-center gap-1"
                            >
                              <span>✓ Done &amp; Apply</span>
                            </button>
                          )}
                        </div>
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
            <p className="text-base md:text-lg font-medium leading-relaxed text-gray-600 text-center sm:text-left">
              Privacy-First Platform: Static QR codes render 100% locally in your browser. Dynamic campaigns are securely managed with encrypted routing.
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

      {/* The long-form SEO block belongs to the page, not to the generator
          widget. FeaturePage embeds <Home> purely for the widget and renders
          its own copy of these sections from the same shared data, so leaving
          them on would print every section twice. */}
      {!embedded && (
        <>
        {/* ═══════════════════════════ EXPLANATORY GUIDE ARTICLE ═══════════════════════════ */}
        <section className="bg-white py-16 md:py-24 border-t border-neutral-100">
          <div className="mx-auto max-w-4xl px-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Comprehensive Guide
            </div>
            {introSections.map((section, si) => (
              <div key={si} className={si > 0 ? 'mt-12' : undefined}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-base md:text-lg leading-relaxed text-gray-600">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════ HOW TO: 3 STEPS ═══════════════════════════ */}
        <section id="how-to-create" className="bg-gray-50 py-16 md:py-24 scroll-mt-24 border-t border-neutral-100">
          <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-normal text-gray-900 text-balance">
                {stepsTitle}
              </h2>
            </div>

            <div className="relative mx-auto max-w-4xl">
              {/* Vertical timeline line */}
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-200 md:block" />

              <div className="flex flex-col gap-12 md:gap-16">
                {stepItems.map((step, idx) => (
                  <div key={step.number} className="relative grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                    {/* Step Number Circle */}
                    <div className="row-start-1 col-start-1 self-start md:col-start-2 md:self-center relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-accent text-base md:text-lg font-bold text-white shadow-md">
                      {step.number}
                    </div>

                    {/* Text Content */}
                    <div className={`row-start-1 col-start-2 ${idx % 2 === 0 ? 'md:col-start-3 md:pl-4' : 'md:col-start-1 md:pr-4 md:text-right'}`}>
                      <h3 className="mb-1 md:mb-2 text-xl md:text-2xl font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-base leading-relaxed text-gray-500">{step.description}</p>
                    </div>

                    {/* Icon Visual Card */}
                    <div className={`row-start-2 col-span-full ${idx % 2 === 0 ? 'md:row-start-1 md:col-span-1 md:col-start-1 md:flex md:justify-end' : 'md:row-start-1 md:col-span-1 md:col-start-3 md:flex md:justify-start'}`}>
                      <div className="w-full max-w-[340px] rounded-card bg-white border border-neutral-200 shadow-sm p-6 flex items-center justify-center text-accent">
                        {step.number === 1 && (
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        )}
                        {step.number === 2 && (
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        )}
                        {step.number === 3 && (
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* ═══════════════════════════ FEATURES & BENEFITS ═══════════════════════════ */}
        <section className="bg-white py-16 md:py-24 border-t border-neutral-100">
          <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{featuresTitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureItems.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl border border-neutral-100 p-6 hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ USE CASES SECTION ═══════════════════════════ */}
        <section className="bg-gray-50 py-16 md:py-24 border-t border-neutral-100">
          <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{useCasesTitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCaseItems.map((useCase, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 hover:bg-accent/5 hover:shadow-md transition-all duration-300 border border-neutral-200 hover:border-accent/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 font-bold text-base">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ LONG-FORM SEO SECTIONS (shared with scripts/prerender.js) ═══════ */}
        <RichSeoSections rich={richContent} />

        {/* ═══════════════════════════ TOOL-SPECIFIC FAQ SECTION ═══════════════════════════ */}
        <section className="bg-white py-16 md:py-24 border-t border-neutral-100">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Knowledge Base & FAQs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions about {currentSeo.title}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-base">
                Everything you need to know about creating, customizing, and printing {currentSeo.title}s.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    openFaqIndex === idx ? 'border-accent bg-accent/5' : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left outline-none"
                  >
                    <h3 className={`text-lg font-bold transition-colors ${openFaqIndex === idx ? 'text-accent' : 'text-gray-900'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${openFaqIndex === idx ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {/* Answers stay mounted and are toggled with CSS. Rendering
                      them conditionally kept 7 of 8 answers out of the DOM
                      entirely, so the FAQPage schema promised Google text that
                      was nowhere on the page. */}
                  <div
                    className={`px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm border-t border-neutral-100/50 pt-3 ${openFaqIndex === idx ? '' : 'hidden'}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ QR CODE TYPES INTERLINKING MATRIX ═══════════════════════════ */}
        <section className="bg-gray-50 py-16 md:py-24 border-t border-neutral-200">
          <div className="mx-auto max-w-[90rem] px-4 xl:px-28">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">All {TABS.length} QR Code Generators</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Explore all {TABS.length} specialized QR Code generators to convert websites, WiFi, vCards, documents, social media, payment links, and locations into scannable barcodes.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {TABS.map((tab) => {
                const tabSeo = TOOL_SEO_DATA[tab.id] || TOOL_SEO_DATA.url;
                return (
                  <Link
                    key={tab.id}
                    to={tabSeo.slug}
                    onClick={() => { setActiveTab(tab.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`group relative bg-white rounded-2xl border p-5 text-left transition-all duration-200 ${
                      activeTab === tab.id 
                        ? 'border-accent ring-2 ring-accent/20 bg-accent/5' 
                        : 'border-neutral-200 hover:border-accent hover:shadow-lg'
                    }`}
                  >
                    <div className="text-accent mb-3 p-2 bg-accent/10 rounded-xl inline-block group-hover:bg-accent group-hover:text-white transition-colors">
                      {tab.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">{tab.label}</h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{tab.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ CTA SECTION ═══════════════════════════ */}
        <section className="bg-[#1E1E1E] py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Create Your {currentSeo.title}?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              Start generating professional, customizable QR Codes in seconds. No account needed, no fees — ever.
            </p>
            <a
              href="#qr-generator"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-button transition-all duration-200 border-2 border-transparent bg-accent text-white hover:bg-accent-dark px-8 py-3.5 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Create {currentSeo.title} — It's Free
            </a>
            <p className="text-sm text-white/40 mt-4">No sign-up required • Unlimited QR Codes • Download in PNG, SVG, WebP</p>
          </div>
        </section>
        </>
      )}

      {/* ═══════════════════════════ DYNAMIC QR SAVE MODAL ═══════════════════════════ */}
      {showDynamicSaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-7 max-w-md w-full shadow-xl border border-slate-200 relative">
            <button
              onClick={() => { setShowDynamicSaveModal(false); setSavedDynamicLink(null); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {savedDynamicLink ? (
              <div className="text-center py-1">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2.5 border border-emerald-200/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-0.5">Dynamic QR Code Created</h3>
                <p className="text-xs text-slate-500 mb-4">
                  Destination can be changed anytime with zero reprinting.
                </p>

                {/* QR Preview Card with custom design & logo */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-4 flex flex-col items-center justify-center">
                  <DynamicModalQrPreview link={savedDynamicLink} />
                  <div className="flex gap-2 w-full max-w-xs">
                    <button
                      type="button"
                      onClick={() => handleDownloadSavedDynamic('png')}
                      className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PNG
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadSavedDynamic('svg')}
                      className="flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      SVG
                    </button>
                  </div>
                </div>

                {/* Short link row */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4 text-left">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block mb-1">
                    Short Redirect Link
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-accent truncate">
                      https://qr-generator.online/r/{savedDynamicLink.short_code}
                    </span>
                    <button
                      onClick={() => handleCopyShortUrl(savedDynamicLink.short_code)}
                      className="px-2.5 py-1 bg-accent text-white text-[11px] font-semibold rounded-lg shadow-xs hover:bg-accent-dark transition-colors shrink-0"
                    >
                      {copyShortUrlSuccess ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Target: <span className="font-medium text-slate-800 truncate">{savedDynamicLink.target_url}</span></span>
                    <a
                      href={`https://qr-generator.online/r/${savedDynamicLink.short_code}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold hover:underline shrink-0 ml-2"
                    >
                      Test Redirect ↗
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to="/dashboard"
                    onClick={() => { setShowDynamicSaveModal(false); setSavedDynamicLink(null); }}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
                  >
                    Go to Dashboard
                  </Link>
                  <Link
                    to={`/analytics/${savedDynamicLink.id}`}
                    className="flex-1 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>View Analytics</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Save Dynamic QR Code</h3>
                    <p className="text-xs text-slate-400">Edit destination anytime & track live scans</p>
                  </div>
                </div>

                {dynamicError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200/80 rounded-xl text-red-700 text-xs font-medium">
                    {dynamicError}
                  </div>
                )}

                <form onSubmit={handleSaveDynamic} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Campaign Title</label>
                    <input
                      type="text"
                      required
                      value={dynamicTitle}
                      onChange={(e) => setDynamicTitle(e.target.value)}
                      placeholder="e.g. Restaurant Promo Menu"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Current Target Link</label>
                    <input
                      type="text"
                      disabled
                      value={qrData}
                      className="w-full px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono truncate"
                    />
                    <span className="text-[10px] text-slate-400 block mt-1">
                      You can change this target link at any time from your dashboard without reprinting.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Custom Slug (Optional)</label>
                    <div className="flex items-center">
                      <span className="px-3 py-2.5 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs font-mono text-slate-500">
                        qr-generator.online/r/
                      </span>
                      <input
                        type="text"
                        value={dynamicCustomCode}
                        onChange={(e) => setDynamicCustomCode(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ''))}
                        placeholder="custom-slug"
                        className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-r-xl text-xs font-mono focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={savingDynamic}
                      className="w-full py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl text-xs shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {savingDynamic ? 'Creating Link...' : 'Create Dynamic QR Code'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════ AUTH MODAL ═══════════════════════════ */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setShowAuthModal(false);
          setShowDynamicSaveModal(true);
        }}
        title="Create Account for Dynamic QR"
        subtitle="Sign in or register to change your destination link anytime and track live scan analytics."
      />

      {/* ═══════════════════════════ FLOATING TOAST NOTIFICATION ═══════════════════════════ */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/60 backdrop-blur-md animate-slideUp">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-slate-100">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white text-xs p-1"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;