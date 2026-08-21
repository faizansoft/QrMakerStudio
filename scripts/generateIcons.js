import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function generate() {
  if (!fs.existsSync(svgPath)) {
    console.error('SVG not found at', svgPath);
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(svgPath);

  const targets = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'logo.png', size: 512 },
    { name: 'favicon.png', size: 32 },
  ];

  for (const target of targets) {
    const outPath = path.join(publicDir, target.name);
    await sharp(svgBuffer)
      .resize(target.size, target.size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${target.name} (${target.size}x${target.size})`);
  }

  // Also write 32x32 to favicon.ico (valid ICO file with PNG container)
  const ico32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const ico48Buffer = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  
  // Create a multi-image ICO binary
  // ICO header: 2 bytes reserved (0), 2 bytes type (1 for ICO), 2 bytes image count (2)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(2, 4);

  const dirEntry1 = Buffer.alloc(16);
  dirEntry1.writeUInt8(32, 0); // width
  dirEntry1.writeUInt8(32, 1); // height
  dirEntry1.writeUInt8(0, 2);  // color palette
  dirEntry1.writeUInt8(0, 3);  // reserved
  dirEntry1.writeUInt16LE(1, 4); // color planes
  dirEntry1.writeUInt16LE(32, 6); // bpp
  dirEntry1.writeUInt32LE(ico32Buffer.length, 8); // size
  dirEntry1.writeUInt32LE(6 + 16 * 2, 12); // offset

  const dirEntry2 = Buffer.alloc(16);
  dirEntry2.writeUInt8(48, 0); // width
  dirEntry2.writeUInt8(48, 1); // height
  dirEntry2.writeUInt8(0, 2);
  dirEntry2.writeUInt8(0, 3);
  dirEntry2.writeUInt16LE(1, 4);
  dirEntry2.writeUInt16LE(32, 6);
  dirEntry2.writeUInt32LE(ico48Buffer.length, 8);
  dirEntry2.writeUInt32LE(6 + 16 * 2 + ico32Buffer.length, 12);

  const icoFile = Buffer.concat([header, dirEntry1, dirEntry2, ico32Buffer, ico48Buffer]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoFile);
  console.log('Generated favicon.ico (32x32, 48x48)');

  // Also create a rich 1200x630 og-image.png if not present
  const ogImagePath = path.join(publicDir, 'og-image.png');
  const ogSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#111827" />
        <stop offset="100%" stop-color="#1f2937" />
      </linearGradient>
      <linearGradient id="qrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#348464"/>
        <stop offset="100%" stop-color="#215741"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <g transform="translate(140, 165)">
      <rect width="300" height="300" rx="64" fill="url(#qrGrad)"/>
      <g transform="translate(37.5, 37.5) scale(9.375)" fill="none" stroke="#ffffff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
      </g>
    </g>
    <text x="500" y="270" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="52">QR Generator Online</text>
    <text x="500" y="340" fill="#34d399" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="28">Free High-Resolution &amp; Vector QR Codes</text>
    <text x="500" y="410" fill="#9ca3af" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="22">Custom Logos, Colors, Patterns • Never Expiring • 100% Free</text>
  </svg>
  `;
  await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile(ogImagePath);
  console.log('Generated og-image.png (1200x630)');

  // Also create a site.webmanifest for PWA / Android Google Chrome support
  const manifest = {
    name: "QR Generator Online",
    short_name: "QR Generator",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#2B6F53",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Generated site.webmanifest');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
