import React, { useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { DotType, CornerSquareType, CornerDotType } from '../types';

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
  { id: 'frame-focus-corners-arrow', label: 'Focus Corners Arrow', category: 'Focus', defaultText: 'SCAN ➔ ME' },
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
export function buildFramedSvg(
  rawSvgText: string,
  frame: FrameStyle,
  text: string,
  fg: string,
  bg: string,
  cornerSq: string,
  frameCol?: string,
  frameTextCol?: string
): string {
  const ctaText = (text || 'SCAN ME').toUpperCase();
  const fColor = frameCol || fg || '#1E1E1E';
  const tColor = frameTextCol || '#ffffff';
  const bColor = bg || '#ffffff';

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
  <text x="500" y="1135" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-top-bar') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <rect width="1000" height="1200" fill="${bColor}" rx="40" stroke="${fColor}" stroke-width="18"/>
  <path d="M 0 40 A 40 40 0 0 1 40 0 L 960 0 A 40 40 0 0 1 1000 40 L 1000 160 L 0 160 Z" fill="${fColor}"/>
  <text x="500" y="105" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle" letter-spacing="2">${ctaText}</text>
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
  <text x="500" y="1108" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle" letter-spacing="1">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-focus-corners-top') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1240" width="1000" height="1240">
  <rect width="1000" height="1240" fill="${bColor}" rx="40"/>
  <rect x="160" y="40" width="680" height="130" rx="28" fill="${fColor}"/>
  <polygon points="470,170 500,205 530,170" fill="${fColor}"/>
  <text x="500" y="122" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle" letter-spacing="1">${ctaText}</text>
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
  <rect x="880" y="320" width="280" height="360" rx="36" fill="${fColor}"/>
  <text x="1020" y="440" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">SCAN</text>
  <text x="1020" y="530" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" text-anchor="middle">➔</text>
  <text x="1020" y="620" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">ME</text>
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
  <text x="1025" y="460" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">SCAN</text>
  <text x="1025" y="560" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">ME</text>
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
  <text x="500" y="1270" fill="${fColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="56" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-phone-landscape') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 1000" width="1340" height="1000">
  <rect width="1340" height="1000" fill="${bColor}" rx="64" stroke="${fColor}" stroke-width="24"/>
  <g transform="translate(60, 100) scale(2.85)">
    ${cleanSvg}
  </g>
  <rect x="920" y="240" width="360" height="520" rx="36" fill="${fColor}"/>
  <text x="1100" y="460" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="54" text-anchor="middle">SCAN</text>
  <text x="1100" y="580" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="54" text-anchor="middle">◀ ME</text>
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
  <text x="500" y="1000" fill="${fColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-speech-tab-top') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <rect x="0" y="120" width="1000" height="1080" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <path d="M 40 0 L 480 0 A 32 32 0 0 1 512 32 L 512 120 L 0 120 L 0 40 A 40 40 0 0 1 40 0 Z" fill="${fColor}"/>
  <text x="256" y="80" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" text-anchor="middle" letter-spacing="1">${ctaText}</text>
  <g transform="translate(100, 240) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-speech-bubble-right') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 1000" width="1260" height="1000">
  <rect width="1000" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <polygon points="1000,440 1050,480 1000,520" fill="${fColor}"/>
  <rect x="1050" y="260" width="180" height="480" rx="32" fill="${fColor}"/>
  <text x="1140" y="460" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle">S</text>
  <text x="1140" y="540" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle">C</text>
  <text x="1140" y="620" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle">A</text>
  <text x="1140" y="700" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle">N</text>
  <g transform="translate(100, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-top-arrow') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1240" width="1000" height="1240">
  <rect x="160" y="0" width="680" height="140" rx="32" fill="${fColor}"/>
  <polygon points="460,140 500,185 540,140" fill="${fColor}"/>
  <text x="500" y="90" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="50" text-anchor="middle" letter-spacing="1">${ctaText}</text>
  <rect y="180" width="1000" height="1060" rx="48" fill="${bColor}" stroke="${fColor}" stroke-width="16"/>
  <g transform="translate(100, 290) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-top-roof') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <path d="M 0 160 L 0 60 L 500 0 L 1000 60 L 1000 160 Z" fill="${fColor}"/>
  <text x="500" y="115" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="48" text-anchor="middle" letter-spacing="2">${ctaText}</text>
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
  <text x="500" y="135" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="46" text-anchor="middle" letter-spacing="2">${ctaText}</text>
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
  <text x="380" y="1080" fill="${fColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle" letter-spacing="2">${ctaText}</text>
</svg>`;
  }

  if (frame === 'frame-vertical-right') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 1000" width="1240" height="1000">
  <rect width="1240" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <rect x="1000" y="0" width="240" height="1000" rx="0" fill="${fColor}"/>
  <text x="1120" y="240" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">S</text>
  <text x="1120" y="360" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">C</text>
  <text x="1120" y="480" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">A</text>
  <text x="1120" y="600" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">N</text>
  <text x="1120" y="780" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">M</text>
  <text x="1120" y="900" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">E</text>
  <g transform="translate(80, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-vertical-dual') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1000" width="1280" height="1000">
  <rect width="1280" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <rect x="0" y="0" width="160" height="1000" fill="${fColor}"/>
  <rect x="1120" y="0" width="160" height="1000" fill="${fColor}"/>
  <text x="80" y="320" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">S</text>
  <text x="80" y="440" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">C</text>
  <text x="80" y="560" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">A</text>
  <text x="80" y="680" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">N</text>
  <text x="1200" y="440" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">M</text>
  <text x="1200" y="560" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" text-anchor="middle">E</text>
  <g transform="translate(240, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  if (frame === 'frame-horizontal-left') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 1000" width="1340" height="1000">
  <rect width="1340" height="1000" fill="${bColor}" rx="48" stroke="${fColor}" stroke-width="18"/>
  <path d="M 0 48 A 48 48 0 0 1 48 0 L 360 0 L 360 1000 L 48 1000 A 48 48 0 0 1 0 952 Z" fill="${fColor}"/>
  <text x="180" y="460" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" text-anchor="middle">SCAN</text>
  <text x="180" y="580" fill="${tColor}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" text-anchor="middle">ME</text>
  <g transform="translate(440, 100) scale(2.85)">
    ${cleanSvg}
  </g>
</svg>`;
  }

  return rawSvgText;
}

// ── Ultra-Accurate Canvas Rasterizer (Converts Vector Framed SVG directly to sharp PNG/WebP Canvas) ──
export async function renderFramedCanvas(
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
export const FramedQrView: React.FC<{
  frame?: FrameStyle;
  text?: string;
  frameColor?: string;
  frameTextColor?: string;
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
  className?: string;
  children?: React.ReactNode;
}> = ({
  frame = 'none',
  text = 'SCAN ME',
  frameColor = '#1E1E1E',
  frameTextColor = '#ffffff',
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
  className = '',
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
      } [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto [&>svg]:object-contain [&>svg]:drop-shadow-sm ${className}`}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};
