/**
 * Body content for Home, Pricing, FAQ, About, Contact, Privacy, and Terms.
 *
 * Prose here is written to read like a person wrote it, not a template:
 * sentences vary in length, FAQ answers don't all open "Yes!"/"No.", the
 * shared facts (no expiry, Level H logos, client-side privacy) are phrased
 * differently on each page rather than pasted, and "a, b, and c" triads are
 * used sparingly. Tables, headings and every technical figure (ISO/IEC 18004,
 * Level H 30%, S = D / 10, 4-module quiet zone, 4.5:1 contrast, 300 DPI) are
 * unchanged — those are facts and keyword anchors, not voice.
 */

export const COMPANY_RICH_DATA = {
  '/': {
    technicalOverview: {
      title: 'The Enterprise Standard for Free, Privacy-First QR Code Generation',
      paragraphs: [
        'Every QR code here is built inside your browser, never on a server. That one decision shapes the rest: your data stays with you, the preview updates instantly, and a code you print stays good for as long as the paper it sits on survives. The symbology itself is the international ISO/IEC 18004 standard, so whatever you generate scans in any phone camera on the planet. Freelancers rely on it. So do packaging teams at companies you would recognise.',
        'Plenty of QR services work differently, and it costs their users. They route each scan through a redirect server they own, then switch it off two weeks later unless a $30/month invoice gets paid — after the code is already printed on the packaging. We took the opposite route. Generate a URL, vCard, WiFi, or text code and the raw data is compiled straight into the black-and-white modules in your browser memory. There is no middleman to bill you, and nothing anyone can turn off.',
        'The toolkit is complete rather than minimal. Level H error correction recovers 30% of a damaged code, so a centre logo does not break it. You get multi-colour palettes, custom module shapes, independent corner-eye styling, and lossless SVG or EPS for the print shop. Luxury packaging, restaurant menus, commercial prepress, a business card — the same generator handles all of it.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online vs. Subscription-Gated QR Platforms',
      headers: ['Platform Feature / Policy', 'QR Generator Online (100% Free & Open)', 'Traditional Subscription QR Services'],
      rows: [
        ['Lifetime Expiration', 'Never expires (Permanent static validity)', 'Expires after 14-day trial unless paid'],
        ['Scan Limitations', 'Unlimited lifetime scans (0 cost forever)', 'Capped at 50 - 100 scans/month on free tiers'],
        ['Redirect Latency', '0ms (Direct browser DNS resolution)', '200ms - 800ms intermediate server hop'],
        ['Privacy & Data Tracking', '100% Client-Side (Zero IP logging or cookies)', 'Intermediary server tracks user IPs and geolocations'],
        ['High-Res Vector Exports', 'Full Vector SVG, EPS & 4K PNG included free', 'Vector formats locked behind expensive $30+/mo tiers'],
        ['Logo Embedding', 'Level H (30% recovery) included free', 'Watermarked or restricted on free plans']
      ]
    },
    steps: [
      { number: 1, title: 'Select Data Type & Input Content', description: 'Pick the generator that matches what you are encoding — URL, WiFi, vCard, PDF, WhatsApp, a social profile, email, SMS, phone, location, an event, crypto, plain text, a Google Form, or a payment — then type in your data.' },
      { number: 2, title: 'Customize Visual Geometry, Colors & Brand Logo', description: 'Drop in your brand colours. Choose rounded dots or sharp squares, restyle the corner eyes on their own, and set your logo in the middle.' },
      { number: 3, title: 'Export Lossless Vector SVG or 4K PNG', description: 'For offset printing, packaging, or banners, download the vector SVG. For screens and the web, take the 2048x2048px PNG at 300 DPI instead.' }
    ],
    features: [
      { title: 'Complete Suite of QR Generator Tools', description: 'One place for web URLs, WiFi networks, vCard 3.0 contacts, PDF documents, WhatsApp chats, GPS navigation, payments, and more.' },
      { title: 'Level H Reed-Solomon Error Correction', description: 'Set your company logo over the centre. The 30% recovery margin rebuilds whatever the logo covers, so the code still scans.' },
      { title: 'Lossless Vector SVG & EPS Print Downloads', description: 'The same file prints razor-sharp on a business card and on a building-side mural. Vector geometry has no fixed resolution to outgrow.' },
      { title: '100% Client-Side Cryptographic Privacy', description: 'The generation runs in your browser. Your links, passwords, and parameters are never uploaded — there is nowhere for them to go.' }
    ],
    sizingMatrix: {
      title: 'Master Print Sizing & Distance Reference Table',
      description: 'Calculate minimum physical dimensions for any physical medium using the standard optical formula $S = D / 10$.',
      headers: ['Physical Placement', 'Scanning Distance (D)', 'Minimum Width (S)', 'Recommended Format'],
      rows: [
        ['Business Cards & Name Badges', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Vector SVG / EPS'],
        ['Restaurant Menus & Table Tents', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'Vector SVG / 300 DPI PNG'],
        ['Product Packaging & Cartons', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Vector SVG / PDF'],
        ['Flyers, Posters & Magazines', '50 cm - 150 cm (20" - 60")', '60 mm - 150 mm (2.4" - 6.0")', 'Vector SVG / 300 DPI PNG'],
        ['Vehicle Fleets & Vans', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'Vector SVG / Cast Vinyl'],
        ['Highway Billboards & Banners', '15.0 m - 30.0 m (50 ft - 100 ft)', '1500 mm - 3000 mm (5 ft - 10 ft)', 'Vector SVG / Large Format EPS']
      ]
    },
    useCases: [
      { title: 'Omnichannel Retail & Packaging', description: 'Print a code on the box that opens an unboxing video, verifies the product is genuine, or registers the warranty — no app to download first.' },
      { title: 'Hospitality & Touchless Dining', description: 'A PDF menu you can update at 6pm without reprinting anything. Wine lists and tableside ordering follow the same idea, and checks tend to run higher when guests browse the full menu.' },
      { title: 'Executive Networking & Smart Cards', description: 'One tap on a vCard 3.0 code saves your full details into a phone contact list. The paper card becomes a permanent entry instead of desk clutter.' },
      { title: 'Real Estate Marketing & 3D Tours', description: 'A yard sign turns into a 24/7 lead source when the code opens a 3D Matterport walkthrough. Buyers tour the house from the kerb at midnight.' },
      { title: 'Frictionless Guest WiFi Access', description: 'Nobody reads a 20-character password off a wall any more. Point the camera, join the WPA3 or WPA2 network, done — in a hotel, a cafe, or the office.' }
    ],
    troubleshooting: {
      title: 'The 5 Critical Rules for 100% First-Pass Scan Reliability',
      points: [
        'Keep contrast at 4.5:1 or better. Dark modules on a crisp white or pale background let the camera separate light from dark instantly.',
        'Leave the 4-module quiet zone alone. That blank border around the code is where the scanner finds the edges — never let artwork or text bleed into it.',
        'Hold centre logos under 30% of the area. Keep an embedded logo to 25-30% at most, and always generate at Level H so the recovery margin covers it.',
        'Print from vector SVG, not a screenshot. A 72 DPI web grab blurs the moment it is enlarged. SVG stays sharp at any scale.',
        'Skip glossy laminate. A shiny finish bounces ceiling lights straight into the camera lens. Matte, silk, or satin reads cleanly.'
      ]
    },
    faqs: [
      { q: 'Are QR codes generated on QR Generator Online really 100% free forever?', a: 'They are, and there is no asterisk. Every static code carries unlimited scans, permanent validity, and no subscription behind it. You will never hit a paywall for something you already made.' },
      { q: 'Why do other QR generator websites expire my codes after 14 days?', a: 'Those platforms hand you a dynamic redirect link that runs each scan through their server. When the trial ends, they switch the redirect off until you start paying $15 to $40 a month. Our codes encode your data directly into the barcode, so there is no redirect to hold hostage in the first place.' },
      { q: 'What file formats can I download from QR Generator Online?', a: 'Two, and each has a job. Vector SVG scales without limit for the print shop. The 2048x2048px PNG at 300 DPI covers screens and anywhere a raster file is expected.' },
      { q: 'Can I add my company logo to the center of any QR code?', a: 'On any generator here, upload a PNG, SVG, or JPEG and it drops into the middle. The engine switches on Level H (30%) correction and clears a small buffer around the logo automatically, so scanning is unaffected.' },
      { q: 'Is my data secure and private when using QR Generator Online?', a: 'It never leaves your machine. The whole process runs in browser memory through client-side JavaScript — your URLs, passwords, contacts, and images are not uploaded or stored anywhere.' },
      { q: 'Do I need to install an app on my phone to scan these QR codes?', a: 'No app needed. Any iPhone on iOS 11 or later and any Android on 9 or later reads QR codes straight from the built-in camera.' },
      { q: 'How large should I print my QR code for a banner or poster?', a: 'Use the 10:1 rule: divide the viewing distance by ten. A poster people read from 1.5 metres wants a code of at least 15 cm across.' },
      { q: 'Can I generate QR codes for commercial products and merchandise?', a: 'Absolutely. Everything you generate is yours to use commercially — retail packaging, books, apparel, signage, anywhere in the world, with no licence to buy.' }
    ],
    bestPractices: 'Export to vector SVG for anything going to a printer, keep contrast above 4.5:1, and leave the 4-module quiet zone clear. Above all, scan a physical proof before you approve a large run — a proof catches problems a screen never shows.'
  },

  '/pricing': {
    technicalOverview: {
      title: 'Transparent, 100% Free Architecture — The Anti-Subscription Manifesto',
      paragraphs: [
        'Here is how the "free trial trap" works. You make a QR code you think is free, print it across a few thousand dollars of packaging or vehicle wraps, and two weeks later it goes dark — because the service now wants $35 a month to keep the redirect alive. Business owners, designers, and event planners fall into this constantly. The code was never really free; the printing just made it expensive to walk away.',
        'We think that is backwards. QR generation sits on an open mathematical standard, ISO/IEC 18004, and an open standard should not be rented back to you. So the whole thing runs client-side: your browser computes the Reed-Solomon error correction, assembles the matrix, and renders the SVG locally. No tracking server sits in the middle, which means there is no server that can bill you or switch your code off.',
        'What follows is the entire price list. No hidden fees, no scan caps, no card required, no expiry date. That is not a promotional tier — it is the whole product.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online Feature & Pricing Tier Matrix',
      headers: ['Feature / Capability', 'QR Generator Online (Forever Free)', 'Competitor "Pro" Plans ($35/mo)'],
      rows: [
        ['Monthly Subscription Cost', '$0.00 / month (100% Free Forever)', '$15.00 - $45.00 / month ($180 - $540/yr)'],
        ['QR Code Expiration', 'Never (Permanent static lifetime validity)', 'Deactivated if monthly payment lapses'],
        ['Scan Limitations', 'Unlimited lifetime scans (0 bandwidth cap)', 'Capped at 50 - 500 scans/mo on lower tiers'],
        ['Vector SVG & EPS Export', 'Included Free (Lossless vector paths)', 'Locked behind $25+/mo premium tiers'],
        ['High-Res 300 DPI 4K PNG', 'Included Free (2048x2048+ px)', 'Locked behind paid subscription plans'],
        ['Custom Logo Embedding', 'Included Free with Level H Error Correction', 'Watermarked or restricted on free plans'],
        ['Account / Sign-Up Requirement', 'None (No account, no email, no credit card)', 'Mandatory registration and credit card entry'],
        ['Data Sovereignty & Privacy', '100% Client-Side (Zero tracking/storage)', 'All user scans routed and logged on server']
      ]
    },
    steps: [
      { number: 1, title: 'Choose Any Specialized QR Tool', description: 'Every generator is open — URL, vCard, WiFi, PDF, WhatsApp, social, email, SMS, phone, location, event, crypto, text, payments, Google Forms. Nothing is gated behind a plan.' },
      { number: 2, title: 'Customize Visual Branding & Embed Your Logo', description: 'Apply your colours, restyle the dot pattern and corner eyes, and set your logo in the centre at Level H correction.' },
      { number: 3, title: 'Download Production-Ready Vector SVG Files', description: 'Hit Download. The high-resolution SVG or PNG lands immediately — no payment wall, no account screen in the way.' }
    ],
    features: [
      { title: 'Zero Monthly Subscription Fees Forever', description: 'Make as many commercial-grade codes as you want. No recurring cost, no card, no fine print.' },
      { title: 'Permanent Lifetime Scans with Zero Caps', description: 'A printed code keeps working for years. Nothing throttles it and nothing expires it.' },
      { title: 'Unrestricted Lossless Vector SVG Downloads', description: 'The prepress-ready vector file large-format printers ask for is here, free, with no premium upgrade attached.' },
      { title: 'Full Commercial Usage Rights Included', description: 'Put the codes on packaging, books, retail displays, even a TV spot. There are no royalties to pay.' }
    ],
    sizingMatrix: {
      title: 'Free Enterprise Feature Access Breakdown',
      description: 'Every advanced feature is available to 100% of users with zero paywalls.',
      headers: ['Capability Area', 'Inclusion Status', 'Technical Specifications', 'Commercial Scope'],
      rows: [
        ['All Specialized QR Data Generators', '100% Free & Uncapped', 'ISO/IEC 18004, RFC 2426, RFC 5545, BIP-0021', 'Unlimited Personal & Commercial'],
        ['Vector SVG & EPS Export', '100% Free & Uncapped', 'Lossless mathematical vector paths', 'Commercial Prepress, Packaging, CNC'],
        ['Ultra-HD 4K PNG Output', '100% Free & Uncapped', '2048 x 2048 px at 300+ DPI', 'Digital Marketing, 4K Displays, Web'],
        ['Level H Logo Embedding', '100% Free & Uncapped', '30% Reed-Solomon algebraic redundancy', 'Branded Packaging & Luxury Cards'],
        ['Custom Color Palettes', '100% Free & Uncapped', 'Independent Hex color control', 'Full Brand Guideline Matching']
      ]
    },
    useCases: [
      { title: 'Small Business Owners & Entrepreneurs', description: 'Print signage, packaging, and marketing collateral without another monthly software line on the books.' },
      { title: 'Graphic Design Agencies & Freelancers', description: 'Hand clients a production-ready vector code and never field the call about it expiring on someone else\'s subscription.' },
      { title: 'Enterprise Prepress & Packaging Departments', description: 'Drop reliable vector codes straight into packaging die-lines, with data integrity that holds for the life of the print run.' },
      { title: 'Non-Profit Organizations & Charities', description: 'Take crypto donations and drive event sign-ups on a technology budget of exactly zero.' },
      { title: 'Event Organizers & Wedding Planners', description: 'Send thousands of digital invitations and calendar RSVP codes. No scan cap will ever cut them off mid-event.' }
    ],
    troubleshooting: {
      title: 'How to Protect Your Business from QR Code Subscription Scams',
      points: [
        'Check what the code actually encodes. Scan it before you print. If it decodes to a third-party domain like `qr-service.com/x9f2` rather than your own URL, it is a redirect that can be switched off — walk away.',
        'Be wary of a card requested for a "free trial." When a generator wants payment details up front, expect the code to stop working the day the trial ends.',
        'Confirm the SVG download is free. Professional printers need vector SVG or EPS. A platform charging $20+ for that export is not the bargain it looks like.',
        'Watch for a hidden scan ceiling. Some free tiers quietly die at the 50th or 100th scan. The static codes here have no such limit.',
        'Favour client-side generation. When the code is built in your own browser, no company holds a switch that can turn it off later.'
      ]
    },
    faqs: [
      { q: 'Is QR Generator Online really 100% free with no hidden charges?', a: 'Completely. No tiers, no scan limits, no card. Every generator and every vector download is free for personal and commercial work alike.' },
      { q: 'How does QR Generator Online sustain its service without charging subscription fees?', a: 'The heavy lifting happens in your browser, not on our infrastructure, so running costs stay low. Keeping core generation free and open is the point of the project, not a phase we plan to grow out of.' },
      { q: 'Do QR codes created on QR Generator Online ever expire?', a: 'They do not. The data lives in the visual matrix itself, so the code stays live as long as its destination does — no server in the loop to time out.' },
      { q: 'Are there any limits on how many times my QR codes can be scanned?', a: 'None whatsoever. A code can take a handful of scans or a few million; there is no bandwidth cap waiting behind it.' },
      { q: 'Can I use these QR codes on commercial products that I sell?', a: 'Sell away. You hold full commercial rights to every code you generate — packaging, merchandise, books, promotions, worldwide.' },
      { q: 'Do you watermark my QR codes on the free plan?', a: 'Never. No watermark, no promotional badge, no third-party branding. The design is entirely yours.' },
      { q: 'Is vector SVG export included in the free plan?', a: 'It is. Both the vector SVG and the 2048x2048px PNG export are free for everyone, with nothing held back.' },
      { q: 'Do I need to create an account or provide an email address?', a: 'Not at all. Generate, style, and download as much as you like without signing up or handing over a single detail.' }
    ],
    bestPractices: 'For anything printed, choose a permanent static code, export it as vector SVG, and scan a physical proof before you commit to volume manufacturing.'
  },

  '/faqs-qr-code-generator': {
    technicalOverview: {
      title: 'The Master Technical & Practical FAQ for Optical 2D Barcodes',
      paragraphs: [
        'This is the QR Generator Online knowledge base — the place to settle a technical, design, prepress, or security question about the 2D matrix barcodes defined by ISO/IEC 18004.',
        'The answers here cover the whole span: the maths behind Reed-Solomon error correction, how a phone camera turns a photo into data, the distance-to-size ratio you print by ($S = D / 10$), and where GDPR and CCPA touch a QR workflow. Developers, marketing leads, prepress technicians, and business owners all end up needing different pieces of it.',
        'The categories below are sorted so you can jump straight to creating, styling, printing, or deploying a code.'
      ]
    },
    comparisonTable: {
      title: 'Technical Summary of QR Code Symbology Standards',
      headers: ['Technical Parameter', 'Standard Specification', 'Engineering Recommendation'],
      rows: [
        ['Governing Standard', 'ISO/IEC 18004:2015 (Information Technology)', 'Strict adherence for universal optical decoding'],
        ['Error Correction Levels', 'Level L (7%), Level M (15%), Level Q (25%), Level H (30%)', 'Level H for logo embeds; Level M for clean URLs'],
        ['Quiet Zone Margin', 'Minimum 4 module widths on all 4 sides', 'Mandatory for scanner boundary edge-detection'],
        ['Optical Sizing Formula', 'S = D / 10 (Width = Scan Distance / 10)', 'Minimum 25 mm x 25 mm for handheld print media'],
        ['WCAG Contrast Ratio', 'Minimum 4.5:1 luminance contrast (7:1 for outdoors)', 'Dark foreground modules on light background canvas'],
        ['Maximum Data Capacity', '4,296 alphanumeric / 7,089 numeric / 2,953 bytes', 'Keep under 150 characters for rapid camera decoding']
      ]
    },
    steps: [
      { number: 1, title: 'Select Data Payload Schema', description: 'Start from what you are encoding — URL, vCard 3.0, WiFi, WhatsApp, SMS, email, phone, location, event, crypto, plain text, or a Google Form.' },
      { number: 2, title: 'Configure Styling & Error Correction', description: 'Set brand colours that stay above 4.5:1 contrast, choose a dot style, and if a logo is going in the middle, generate at Level H.' },
      { number: 3, title: 'Export Vector SVG & Test Physical Proofs', description: 'Download the vector SVG or 4K PNG, then scan it on a few different phones under different lighting before it goes anywhere.' }
    ],
    features: [
      { title: 'Comprehensive Technical Coverage', description: 'The error-correction maths, the URI protocols, and how camera binarization actually works — explained rather than glossed over.' },
      { title: 'Practical Prepress & Printing Guidance', description: 'Real sizing formulas, which substrate to pick, and how to compensate for ink dot gain on press.' },
      { title: 'Security & Quishing Defense Strategies', description: 'What to do so a tampered or spoofed code cannot turn your campaign into a phishing vector.' },
      { title: '100% Free & Open-Access Knowledge Base', description: 'Open documentation that stays put — no login, no paywall, whether you are a developer or a marketer.' }
    ],
    sizingMatrix: {
      title: 'QR Code Resolution & Print Sizing Guide',
      description: 'Quick reference guide for determining physical print dimensions based on user viewing distance.',
      headers: ['Placement / Application', 'Expected Scan Distance', 'Minimum Width (S)', 'Recommended Error Correction'],
      rows: [
        ['Business Cards & Name Tags', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Level Q (25%) or Level H (30%)'],
        ['Table Tents & Coasters', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'Level M (15%) or Level H (30%)'],
        ['Product Packaging & Labels', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Level H (30%) with center logo'],
        ['Flyers, Posters & Magazines', '50 cm - 150 cm (20" - 60")', '60 mm - 150 mm (2.4" - 6.0")', 'Level M (15%)'],
        ['Vehicle Fleet Graphics', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'Level H (30%) on cast vinyl'],
        ['Highway Billboards', '15.0 m - 30.0 m (50 ft - 100 ft)', '1500 mm - 3000 mm (5 ft - 10 ft)', 'Level L (7%) or Level M (15%)']
      ]
    },
    useCases: [
      { title: 'Enterprise IT & Security Compliance', description: 'Check that a corporate QR rollout lines up with GDPR, CCPA, and ISO data-sovereignty rules before it ships.' },
      { title: 'Packaging Design & Flexographic Prepress', description: 'Confirm a barcode die-line clears ISO/IEC 18004 contrast and quiet-zone limits before the plates get made.' },
      { title: 'Hospitality & Restaurant Chains', description: 'Roll out contactless menus and guest WiFi cards that need no staff to explain them.' },
      { title: 'Event Organizers & Conference Coordinators', description: 'Speed up check-in, hand out speaker slide downloads, and drop sessions into attendees\' calendars.' },
      { title: 'Real Estate Brokerages & Marketing Teams', description: 'Turn a yard sign into a round-the-clock lead source that opens a 3D virtual tour.' }
    ],
    troubleshooting: {
      title: 'Top 5 Most Common QR Code Failures & How to Fix Them',
      points: [
        'Weak contrast. Pale modules on a pale background give the camera nothing to lock onto. Stay at 4.5:1 or higher.',
        'A clipped quiet zone. Trim the margin too close and the scanner can no longer find where the code begins. Keep the full 4-module border.',
        'A 72 DPI screenshot. Low-res web graphics blur at the module edges in print. Supply vector SVG or a 300+ DPI raster instead.',
        'Too much data. A long URL packs the matrix with tiny dots that smear when printed small. Shorten the link before you generate.',
        'Glossy lamination. A high-gloss coat throws spotlights back into the lens. Ask for matte or satin.'
      ]
    },
    faqs: [
      { q: 'What is the difference between a static and a dynamic QR Code?', a: 'A static code carries the actual data — the URL, vCard, WiFi string, whatever it is — inside the matrix. Nothing to expire, no server to depend on. A dynamic code carries a redirect that points at someone else\'s server, which lets you edit the destination later but ties you to a subscription to keep the redirect alive.' },
      { q: 'Do QR codes created on QR Generator Online ever expire?', a: 'They stay valid for life. Unlimited scans, no recurring fee, no timer counting down — the code is self-contained.' },
      { q: 'What is the minimum physical size a QR code can be printed?', a: 'For a short URL read from 15-20 cm away, 20 mm x 20 mm (0.8" x 0.8") is the floor. On packaging and business cards, treat 25 mm x 25 mm (1.0" x 1.0") as the safe industry minimum.' },
      { q: 'How does Error Correction Level H protect my QR code with a logo?', a: 'Level H duplicates roughly 30% of the payload through Reed-Solomon redundancy. That spare copy is what lets a logo sit over the centre modules — the scanner reconstructs the covered data from the redundant bits.' },
      { q: 'Can I customize QR code colors to match my brand identity?', a: 'You can recolour the modules, the background, the corner frames, and the corner dots independently. One rule governs all of it: dark against light needs to clear 4.5:1 contrast, or scanners start to struggle.' },
      { q: 'Why is SVG format recommended over PNG for commercial printing?', a: 'SVG describes the code as geometry, not pixels. Enlarge it from a business card to a billboard and the edges stay razor-sharp, because there is no pixel grid to run out of.' },
      { q: 'Are QR codes safe from malware and phishing ("quishing")?', a: 'The code itself only holds text or a URL — it cannot carry malware. The risk is a spoofed code pointing somewhere it should not. Guard against it by showing your verified logo in the centre and printing the real destination domain in plain text beside the code.' },
      { q: 'Is my personal data stored or tracked on QR Generator Online servers?', a: 'It is not. Everything runs client-side in browser memory. Your links, passwords, contact cards, and uploaded logos are never sent to a server or kept anywhere.' }
    ],
    bestPractices: 'Hold contrast above 4.5:1, protect the 4-module quiet zone, and export vector SVG for print. Then scan a physical proof before the volume run — that final check is what separates a clean launch from a reprint.'
  },

  '/about': {
    technicalOverview: {
      title: 'Our Architectural Mission — Open, Private & Permanent QR Technology',
      paragraphs: [
        'QR Generator Online started with a shared irritation. A few engineers, a couple of type designers, and some privacy people had all watched the same thing happen: 2D barcode generation — an open standard Denso Wave and ISO/IEC published back in 2000 — got fenced off behind $30/month subscriptions that held printed marketing hostage. So they built the alternative.',
        'The engineering choice underneath it is simple to state and hard to fake: everything runs client-side. Reed-Solomon polynomial maths, matrix assembly, vector rendering — all of it executes in your browser through modern JavaScript and WebAssembly. There is no tracking proxy in the path because there is no server in the path at all.',
        'That platform now reaches people in 190 countries. A corner coffee shop and a Fortune 500 prepress house use the same generator, and both get permanent, high-resolution vector codes with no paywall, no scan cap, and nothing logged.'
      ]
    },
    comparisonTable: {
      title: 'Our Architectural Philosophy vs. Traditional Commercial SaaS',
      headers: ['Core Value / Pillar', 'QR Generator Online', 'Traditional Commercial QR SaaS'],
      rows: [
        ['Pricing Model', '100% Free Forever (Zero paywalls, zero subscriptions)', 'Recurring monthly subscription ($15 - $45/mo)'],
        ['Data Architecture', '100% Client-Side (All processing in browser memory)', 'Centralized server proxy logging all scan traffic'],
        ['Privacy & GDPR Compliance', 'Zero data collection, zero cookies, zero tracking', 'Harvests visitor IP addresses, geolocations & devices'],
        ['Vector File Exports', 'Full Vector SVG & EPS included free for all users', 'Vector formats locked behind expensive Pro tiers'],
        ['Code Longevity', 'Permanent lifetime validity (Direct-encode static)', 'Codes expire after 14 days unless subscription is paid'],
        ['Commercial Usage Rights', 'Full unrestricted commercial licensing included', 'Commercial use restricted on free/starter plans']
      ]
    },
    steps: [
      { number: 1, title: 'Open Access for All Users Globally', description: 'The same enterprise-grade toolset goes to everyone — a solo designer, a corner shop, a global brand — with nothing held back for a paid tier.' },
      { number: 2, title: 'Uncompromising Data Privacy by Design', description: 'No customer URL, password, or contact profile is stored, logged, or sold. There is no database holding any of it to begin with.' },
      { number: 3, title: 'Precision Prepress Standards for Physical Print', description: 'The vector SVG output is built to survive a commercial press — mathematically exact, ready for packaging and large-format work.' }
    ],
    features: [
      { title: '100% Browser-Based Client-Side Architecture', description: 'Encoding and rendering happen locally, which is why the preview is instant and your inputs stay private.' },
      { title: 'Full ISO/IEC 18004 Compliance', description: 'Built to the letter of the international standard, so a code scans first try on any iOS or Android camera.' },
      { title: 'Lossless Vector SVG & 4K PNG Output', description: 'One export path serves a micro-sticker and a 50-metre highway billboard equally well.' },
      { title: 'Permanent Lifetime Code Guarantee', description: 'No middleman redirect means nothing to switch off. A code you print here keeps working.' }
    ],
    sizingMatrix: {
      title: 'Our Global Scale & Performance Benchmarks',
      description: 'Key metrics reflecting the reliability and global reach of the QR Generator Online platform.',
      headers: ['Benchmark / Metric', 'Performance Standard', 'Technical Architecture', 'User Benefit'],
      rows: [
        ['Generation Latency', '< 50 milliseconds', 'Local WebAssembly / JS execution in browser', 'Instant real-time preview updates'],
        ['Scan Reliability Rate', '99.99% first-pass optical decode', 'ISO/IEC 18004 compliant timing patterns', 'Zero customer scanning friction'],
        ['Vector Precision', 'Infinite mathematical scalability', 'Clean W3C SVG vector path geometry', 'Flawless commercial print press output'],
        ['Server Data Logging', '0.00% (Zero bytes stored)', 'No external database or tracking proxy', 'Complete GDPR / CCPA privacy compliance'],
        ['Global Availability', '100.0% static uptime', 'Distributed global edge CDN delivery', '24/7/365 worldwide availability']
      ]
    },
    useCases: [
      { title: 'Independent Small Businesses & Local Retail', description: 'Professional marketing collateral, store signage, and packaging — without a software subscription eating into the margin.' },
      { title: 'Design Agencies & Creative Professionals', description: 'Clean vector SVG files that import straight into InDesign, Illustrator, or Figma with no cleanup.' },
      { title: 'Prepress Houses & Commercial Packaging Printers', description: 'High-contrast barcode die-lines that pass a strict prepress inspection instead of bouncing back.' },
      { title: 'Non-Profits, Schools & Community Organizations', description: 'Touchless event check-ins, classroom quizzes, and donation links, all on no technology budget.' },
      { title: 'Software Developers & Technical Integrators', description: 'A clean reference for URI schemas like `WIFI:`, `mailto:`, `vCard 3.0`, and `BIP-0021` when wiring up a mobile app.' }
    ],
    troubleshooting: {
      title: 'Our Core Engineering Standards & Commitments',
      points: [
        'We will not hold a printed code hostage. Static codes are permanent — no redirect, no expiry trap buried in the terms.',
        'We will not sell your data. Running client-side, we have no user database to mine or hand to an advertiser in the first place.',
        'We will not paywall vector downloads. SVG export is a working necessity for a designer, so it stays free for everyone.',
        'We will hold to ISO compliance. Every module, timing pattern, and finder eye is validated against ISO/IEC 18004.',
        'We will keep backing the open web. Free, fast, useful browser tools for anyone who needs one — that is the whole idea.'
      ]
    },
    faqs: [
      { q: 'What is the mission of QR Generator Online?', a: 'To put permanent, privacy-first, commercial-grade QR generation in everyone\'s hands for free — no subscription standing between you and a code you already printed.' },
      { q: 'Who founded QR Generator Online?', a: 'A small group of software engineers, prepress designers, and privacy advocates who wanted an honest, open counterweight to the subscription-QR services.' },
      { q: 'How does your client-side architecture protect user privacy?', a: 'The generation runs in your browser through JavaScript, start to finish. Your destination URLs, contact details, and WiFi passwords are never sent to us because there is no server call to send them on.' },
      { q: 'Can enterprise businesses use QR Generator Online for commercial packaging?', a: 'They already do. Plenty of commercial brands and prepress teams put these vector codes on packaging, retail displays, books, and ad campaigns worldwide.' },
      { q: 'Are there any hidden costs, pro accounts, or credit card requirements?', a: 'There is nothing hidden. Every tool, every styling option, logo embedding, and vector download is free for all users.' },
      { q: 'How do you ensure generated QR codes scan reliably on all devices?', a: 'The engine holds to ISO/IEC 18004, keeps the mandatory 4-module quiet zone, and applies Level H Reed-Solomon correction wherever a logo goes in. That combination is what makes a code read first try across devices.' },
      { q: 'Can I contribute feedback or suggest new features?', a: 'Please do — community input drives most of what we build. The Contact page is the fastest way to send an idea or a feature request.' },
      { q: 'Where are your servers hosted?', a: 'The static assets ride a global edge CDN, so the page loads quickly whether you open it from North America, Europe, Asia, or anywhere else.' }
    ],
    bestPractices: 'If the tool saved you time, pass it on — a designer, a shop owner, or a marketing team you know can probably use it too.'
  },

  '/contact': {
    technicalOverview: {
      title: 'Enterprise Technical Support, Inquiries & Community Assistance',
      paragraphs: [
        'Stuck on a prepress spec, a high-volume batch job, a vector SVG that will not sit right in InDesign, or an enterprise data format? That is what the support team is here for.',
        'The people answering know their way around ISO/IEC 18004, flexographic packaging prepress, the physics of optical scanning, and the camera decoders inside iOS (AVFoundation) and Android (Google ML Kit). Designers, commercial printers, marketing leads, and developers all land in the same inbox and get a real answer.',
        'Pick the channel below that fits. Every technical and commercial inquiry gets a reply within 24 business hours.'
      ]
    },
    comparisonTable: {
      title: 'Support Channels & Response Time Benchmarks',
      headers: ['Inquiry Category', 'Recommended Channel', 'Average Response Time', 'Scope of Assistance'],
      rows: [
        ['Prepress & Vector Printing Support', 'support@qr-generator.online', '< 12 Business Hours', 'Vector SVG formatting, DPI verification, prepress proofing'],
        ['Enterprise & High-Volume Inquiries', 'support@qr-generator.online', '< 12 Business Hours', 'Custom data schemas, bulk generation, brand integration'],
        ['Bug Reports & Technical Feedback', 'support@qr-generator.online', '< 24 Business Hours', 'Browser compatibility, rendering feedback, feature requests'],
        ['General User & How-To Questions', 'Knowledge Base & FAQ Page', 'Instant Self-Service', 'Comprehensive guides on sizing, styling, and scanning']
      ]
    },
    steps: [
      { number: 1, title: 'Check Our Comprehensive Knowledge Base', description: 'Most sizing, printing, and file-format questions already have a written answer in the Knowledge Base and FAQ — worth a look before you email.' },
      { number: 2, title: 'Prepare Technical Details of Your Inquiry', description: 'Note which schema you are encoding (URL, vCard, WiFi), the physical size you are printing at, and the software you are laying out in — Illustrator, InDesign, or Canva.' },
      { number: 3, title: 'Submit Your Inquiry to Support', description: 'Email the team at support@qr-generator.online. A specialist replies within 24 business hours.' }
    ],
    features: [
      { title: 'Direct Prepress Engineering Expertise', description: 'Advice from people who have actually run offset, flexo, and digital press workflows — not a scripted first-tier reply.' },
      { title: 'Rapid 24-Hour Response Commitment', description: 'Community question or enterprise inquiry, it gets read and answered inside one business day.' },
      { title: 'Comprehensive Self-Service Knowledge Base', description: 'Dozens of in-depth guides on sizing formulas, error correction, and substrate choice — open any time.' },
      { title: '100% Free Community & Enterprise Support', description: 'Small business, non-profit, or enterprise designer, the help is the same and it costs nothing.' }
    ],
    sizingMatrix: {
      title: 'Frequently Requested Support Topics & Direct Resources',
      description: 'Quick links to specialized technical resources for immediate assistance.',
      headers: ['Topic Area', 'Primary Resource Guide', 'Key Equation / Standard', 'Target Audience'],
      rows: [
        ['Print Sizing & S = D / 10 Formula', 'Complete Guide to Printing QR Codes', '$S = D / 10$', 'Graphic Designers, Prepress Technicians'],
        ['vCard 3.0 Business Card Formatting', 'vCard QR Code Business Card Guide', 'RFC 2426 / RFC 6350', 'Corporate Marketing, Networking Leaders'],
        ['Hospitality Menu Operations', 'QR Codes for Restaurants Guide', 'HTTPS / Mobile Responsive Viewport', 'Restaurateurs, Food & Beverage Operators'],
        ['Real Estate Yard Sign Marketing', 'Real Estate QR Lead Generation Guide', 'Matterport 3D / S = D / 10', 'Real Estate Brokers, Property Managers'],
        ['WiFi Network Access Setup', 'WiFi QR Codes for Hospitality Guide', 'WIFI: URI Protocol (WPA3/WPA2)', 'Hotel Managers, Cafe Owners, IT Staff']
      ]
    },
    useCases: [
      { title: 'Commercial Packaging Prepress Verification', description: 'Have the team check that your packaging SVG clears ISO contrast and quiet-zone limits before the plates are cut.' },
      { title: 'Large-Format Billboard & Outdoor Signage', description: 'Get the exact size for a highway board read from 20 to 50 metres out, so it scans from a moving car.' },
      { title: 'Custom vCard Corporate Deployment', description: 'Work out how to standardise vCard business-card codes across a workforce in the thousands.' },
      { title: 'Hospitality Multi-Location Menu Rollouts', description: 'Plan a fast-loading PDF menu rollout across a franchise network without a per-site headache.' },
      { title: 'Educational & Non-Profit Campaign Assistance', description: 'Get a hand with a classroom quiz project, a museum exhibit, or a fundraising drive.' }
    ],
    troubleshooting: {
      title: 'Information to Include for Rapid Support Triage',
      points: [
        'Name the generator. Tell us which tool you are on — URL, vCard, WiFi, Google Forms.',
        'Give the print size. The intended width and height helps a lot, e.g. 25mm x 25mm on a business card.',
        'State the scan distance. Roughly how far will people be — 30 cm for a menu, 3 metres for a yard sign?',
        'Mention the software. Illustrator, InDesign, Photoshop, CorelDRAW, or Figma — it changes the advice.',
        'Attach the file. For a scanning problem, send the exported SVG or PNG so we can look at it directly.'
      ]
    },
    faqs: [
      { q: 'How quickly does the QR Generator Online support team respond?', a: 'Within 24 business hours, and usually inside 12 on a working day.' },
      { q: 'What is the primary support email address?', a: 'support@qr-generator.online reaches the technical team directly.' },
      { q: 'Do you offer phone or live chat support?', a: 'Support runs on email and the Knowledge Base rather than phone or chat. That is part of how the service stays completely free.' },
      { q: 'Can you help review my commercial print artwork before going to press?', a: 'Gladly. Send your vector SVG or PDF proof to support@qr-generator.online and the prepress team will check the quiet zone, contrast, and module geometry before you commit.' },
      { q: 'Can I request a custom feature or new QR code type?', a: 'Feature suggestions are welcome and genuinely read. Email the idea to the product team at support@qr-generator.online.' },
      { q: 'Do you charge consulting or support fees?', a: 'No. Technical help, prepress reviews, and how-to guidance are all free.' },
      { q: 'Where can I find self-service guides and tutorials?', a: 'The Blog and FAQ pages carry detailed guides on print sizing, restaurant menus, vCard contacts, and WiFi access.' },
      { q: 'Is customer contact information kept confidential?', a: 'Entirely. Any email, detail, or artwork you share with support stays confidential and is never shared or sold.' }
    ],
    bestPractices: 'Skim the FAQ and Blog first for an instant answer, and when you do email, include your print dimensions and layout software — it turns a two-email exchange into one.'
  },

  '/privacy': {
    technicalOverview: {
      title: 'Our Cryptographic Privacy Architecture & Data Sovereignty Policy',
      paragraphs: [
        'Privacy is not a feature we bolt on — it is the shape of the whole thing. Most commercial SaaS platforms harvest data, track IP addresses, and quietly sell what you browse. This service is built on the opposite premise: zero knowledge, and your data stays yours.',
        'Make a code here and every step happens inside your browser. The Reed-Solomon encoding, the matrix rasterization, the vector rendering — all of it runs locally in memory through JavaScript and WebAssembly. Your URLs, text, vCard contacts, WiFi passwords, and uploaded logos never cross the network and never land in a database, because there is no database and no network call.',
        'This policy sets out the technical standards behind that, the zero-tracking commitments, and how the whole design lines up with GDPR, CCPA, and the ISO/IEC privacy frameworks.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online Privacy Architecture vs. Traditional QR SaaS Platforms',
      headers: ['Privacy & Data Metric', 'QR Generator Online (Zero Knowledge)', 'Traditional Commercial QR Platforms'],
      rows: [
        ['Data Processing Location', '100% Client-Side (Inside your browser memory)', 'Centralized external server databases'],
        ['Destination URL Logging', 'Zero logging (We never see your destination URL)', 'Logs and stores full destination URLs in cloud'],
        ['Visitor IP Address Tracking', 'Zero IP tracking (Direct-encode static links)', 'Tracks and logs IP addresses of everyone who scans'],
        ['WiFi Password Transmission', 'Never transmitted across network (Zero risk)', 'Stored in plaintext or cloud databases'],
        ['User Account & Email Harvesting', 'No account, email, or registration required', 'Mandatory account creation and marketing emails'],
        ['Third-Party Data Monetization', 'Zero data sales or advertising broker sharing', 'Often monetizes aggregated scan analytics']
      ]
    },
    steps: [
      { number: 1, title: 'Local Client-Side Processing in Web Browser', description: 'Whatever you type — a URL, a password, a vCard — is handled entirely in your browser\'s memory, with no API call going out to a server.' },
      { number: 2, title: 'Zero Cloud Storage & Zero Database Logging', description: 'There is no database on our side storing your codes, your uploaded logos, or your destination links. Nothing is kept because nothing is sent.' },
      { number: 3, title: 'Direct Static Encoding for Permanent Sovereignty', description: 'A printed code points straight at your destination, with no third-party proxy sitting in between to log or intercept the scan.' }
    ],
    features: [
      { title: '100% Client-Side Cryptographic Execution', description: 'The generation runs in browser memory, which is what keeps your inputs confidential — they have nowhere else to be.' },
      { title: 'Full GDPR & CCPA Compliance by Design', description: 'Collecting zero personal information is the simplest possible route to compliance, and it is the route we took.' },
      { title: 'Zero Tracking of Scanners or End Users', description: 'The people who scan your code reach your site directly. No tracking hop, no cookie dropped on them along the way.' },
      { title: 'No Account Creation or Email Harvesting', description: 'Generate and download as much as you want anonymously — there is no sign-up to begin with.' }
    ],
    sizingMatrix: {
      title: 'Data Flow & Transmission Security Breakdown',
      description: 'Technical verification of how data is handled across every QR generator type on QR Generator Online.',
      headers: ['QR Generator Type', 'Input Data Scope', 'Processing Method', 'Server Storage Status'],
      rows: [
        ['URL QR Generator', 'Target Web Address & UTMs', 'Client-side UTF-8 compilation', '0 bytes stored (Zero server transmission)'],
        ['WiFi QR Generator', 'SSID & WPA2/WPA3 Passwords', 'Client-side WIFI: string encoding', '0 bytes stored (Never leaves browser)'],
        ['vCard QR Generator', 'Name, Phones, Emails, Address', 'Client-side RFC 6350 parsing', '0 bytes stored (Zero address book harvest)'],
        ['WhatsApp / SMS / Phone', 'Phone Numbers & Message Copy', 'Client-side URI string synthesis', '0 bytes stored (Zero contact logging)'],
        ['Crypto QR Generator', 'Public Wallet Receiving Address', 'Client-side BIP-0021 URI synthesis', '0 bytes stored (Private keys never touched)'],
        ['Logo Uploads & Images', 'PNG, SVG, JPEG Brand Artwork', 'Client-side HTML5 Canvas rendering', '0 bytes stored (Zero image upload)']
      ]
    },
    useCases: [
      { title: 'Healthcare & Patient Confidentiality (HIPAA)', description: 'Generate patient-intake and clinic-link codes with no risk of protected health information travelling to a server.' },
      { title: 'Legal & Corporate Enterprise Confidentiality', description: 'Create internal board-meeting or litigation-document links while keeping full corporate data sovereignty.' },
      { title: 'Government & Defense Contractor Facilities', description: 'Hand out visitor WiFi cards inside a secure facility without a classified credential ever leaving the room.' },
      { title: 'Financial Services & Cryptocurrency Transfers', description: 'Build a blockchain payment code knowing the wallet address and amount stay strictly on your device.' },
      { title: 'Consumer Brand Marketing & Trust Building', description: 'Tell privacy-minded customers, truthfully, that scanning your campaign code will not track where they are.' }
    ],
    troubleshooting: {
      title: 'How to Verify Client-Side Privacy in Your Browser',
      points: [
        'Watch the network tab. Open Developer Tools (F12) and look at Network while you generate a code or upload a logo. Nothing goes out — no POST, no GET carrying your data.',
        'Pull the plug. Load the page, disconnect from WiFi and cellular, then generate a code. It appears instantly, offline, which only works if the whole thing runs in your browser.',
        'Decode your own code. Read a generated URL code with any scanner app. The decoded text is your exact URL, with no redirect domain wrapped around it.',
        'Look for trackers. The generator pages do not load behavioural tracking pixels or data-broker scripts.',
        'Close the tab. Because the data lives in volatile memory, shutting the tab wipes everything you entered.'
      ]
    },
    faqs: [
      { q: 'Does QR Generator Online store my URLs, passwords, or contact details?', a: 'Nothing you enter is stored. Generation happens entirely in your browser\'s memory, so none of it is ever transmitted to or held on a server.' },
      { q: 'Do you track how many people scan my QR codes?', a: 'We cannot, and by design. A static code links straight to your destination with no redirect server in the middle, so there is no point at which a scan could be counted or logged.' },
      { q: 'Is QR Generator Online compliant with GDPR and CCPA regulations?', a: 'Fully. With no personal information collected, stored, or processed — and no scanner IP addresses recorded — there is nothing for those regulations to flag.' },
      { q: 'Are my uploaded logo images stored on your web servers?', a: 'They are not uploaded at all. A logo is composited locally through the HTML5 Canvas API in your browser, so the image never reaches an external server.' },
      { q: 'Is it safe to generate WiFi QR codes containing my router password?', a: 'It is. The network name and password are assembled locally and written straight into the barcode pattern. Neither is ever sent across the internet.' },
      { q: 'Do you sell user data to third-party advertisers or data brokers?', a: 'There is nothing to sell. No user database, no account profiles, no tracking records exist to hand to anyone.' },
      { q: 'Do you use cookies on QR Generator Online?', a: 'Only the minimal technical kind needed for the site to function. No third-party behavioural advertising cookies are used.' },
      { q: 'Who can I contact regarding privacy inquiries?', a: 'The data protection team answers privacy and compliance questions directly at support@qr-generator.online.' }
    ],
    bestPractices: 'You can generate freely here with nothing to worry about — the process is client-side start to finish, and it stays independent of any third-party server.'
  },

  '/terms': {
    technicalOverview: {
      title: 'Terms of Service, Commercial Licensing & Usage Framework',
      paragraphs: [
        'Using QR Generator Online means agreeing to the Terms of Service, the commercial licensing agreement, and the acceptable-use policy set out below.',
        'The platform generates 2D barcodes to the ISO/IEC 18004 standard, client-side and free. Whatever you create comes with full, unrestricted, royalty-free rights for both commercial and personal use, granted to you in perpetuity — no separate licence to purchase later.',
        'The sections that follow cover intellectual property, acceptable use, the limitation of liability, and the disclaimer around commercial print production. Worth reading before a large run.'
      ]
    },
    comparisonTable: {
      title: 'Commercial Licensing Terms Summary',
      headers: ['Licensing Category', 'Terms & Permissions on QR Generator Online', 'Traditional Commercial Barcode Services'],
      rows: [
        ['Commercial Usage Rights', '100% Unrestricted, royalty-free commercial rights', 'Requires paid commercial licensing tier ($300+/yr)'],
        ['Royalty / Scan Fees', '$0.00 (Zero royalties or per-scan charges)', 'Overage fees when scan volume exceeds monthly caps'],
        ['Intellectual Property Ownership', 'You own 100% of all generated QR artwork & data', 'Platform retains rights or claims proprietary redirects'],
        ['Print Reproduction Scope', 'Unrestricted (Packaging, books, billboards, TV)', 'Restricted based on print circulation or tier limits'],
        ['Account Cancellation Risk', 'Zero risk (Static codes have permanent validity)', 'Codes deactivated if subscription is cancelled']
      ]
    },
    steps: [
      { number: 1, title: 'Generate Your Custom QR Code Artwork', description: 'Build the code with any generator here, styling and logo included.' },
      { number: 2, title: 'Obtain Instant Worldwide Commercial License', description: 'The moment it generates, you hold a perpetual, royalty-free, worldwide licence to use it on any medium, physical or digital.' },
      { number: 3, title: 'Deploy Across Commercial Products & Campaigns', description: 'Put it on packaging, a TV spot, a retail display, or an ad campaign. There is no licensing fee attached to any of it.' }
    ],
    features: [
      { title: 'Perpetual Royalty-Free Commercial License', description: 'Use the codes across products, books, packaging, and digital media worldwide with no ongoing fee.' },
      { title: 'Full Ownership of Generated Assets', description: 'The barcode design and any custom artwork inside it are yours, exclusively.' },
      { title: 'Zero Vendor Lock-In or Service Dependency', description: 'Static direct-encode codes do not depend on us. A future policy change cannot reach back and break something you already printed.' },
      { title: 'Transparent Prepress Quality Disclaimer', description: 'Plain guidance on proof-testing before a print run, with nothing buried in the fine print.' }
    ],
    sizingMatrix: {
      title: 'Permitted Commercial Use Cases & Applications',
      description: 'Comprehensive overview of permitted commercial applications on QR Generator Online.',
      headers: ['Commercial Application', 'Licensing Status', 'Permitted Scope', 'Royalties Required'],
      rows: [
        ['Retail Product Packaging & Food Labels', 'Permitted in Perpetuity', 'Unlimited global unit distribution', '$0.00 (None)'],
        ['Commercial Television & Streaming Ads', 'Permitted in Perpetuity', 'Worldwide broadcast and streaming media', '$0.00 (None)'],
        ['Books, Magazines & Print Publications', 'Permitted in Perpetuity', 'Unlimited global print circulation', '$0.00 (None)'],
        ['Outdoor Billboards & Transit Advertising', 'Permitted in Perpetuity', 'National and international outdoor campaigns', '$0.00 (None)'],
        ['Corporate Stationery & Smart Business Cards', 'Permitted in Perpetuity', 'Unlimited employee distribution', '$0.00 (None)'],
        ['Software, Mobile Apps & Web UIs', 'Permitted in Perpetuity', 'Embedded in SaaS, web, and mobile apps', '$0.00 (None)']
      ]
    },
    useCases: [
      { title: 'Consumer Goods Manufacturers & Retailers', description: 'Print permanent vector codes on millions of cartons and bottles with legal certainty and no royalty to track.' },
      { title: 'Publishers & Educational Book Houses', description: 'Set scannable codes into textbooks, novels, and worksheets under perpetual print rights.' },
      { title: 'National Advertising & Media Agencies', description: 'Run TV spots, magazine spreads, and billboard campaigns without a licensing risk hanging over them.' },
      { title: 'Hospitality Franchises & Restaurant Chains', description: 'Standardise digital menu and tableside-payment codes across hundreds of locations.' },
      { title: 'Independent Creators, Artists & Authors', description: 'Add a branded code to art prints, merch, or a self-published book with no budget hurdle in the way.' }
    ],
    troubleshooting: {
      title: 'Acceptable Use Policy & Prepress Print Disclaimer',
      points: [
        'No malicious content. Codes may not link to phishing sites, malware, scams, or illegal material.',
        'Proof before you print. Test-scanning a physical proof ahead of a volume run is on you, and it is the single best way to avoid a costly reprint.',
        'Keep the destination live. You are responsible for making sure the URL a code points at stays online and reachable.',
        'Respect trademarks. Only embed a logo you actually hold the rights to use.',
        'The service is "as-is." We hold to ISO/IEC 18004, but we cannot warrant a third party\'s printer calibration, so the final proof is yours to check.'
      ]
    },
    faqs: [
      { q: 'Can I use QR codes generated on QR Generator Online for commercial products?', a: 'Freely and worldwide. You hold full, unrestricted, royalty-free rights to put them on packaging, books, retail displays, and digital media.' },
      { q: 'Do I owe any royalties or per-scan fees as my business grows?', a: 'Not a cent. Every code is free, with no royalty, no scan cap, and no fee that scales with your volume.' },
      { q: 'Who owns the intellectual property of the generated QR code?', a: 'You do — the barcode and any logo or text embedded in it are entirely yours.' },
      { q: 'Can I generate QR codes for my design clients and charge them?', a: 'Certainly. Agencies, freelancers, and consultants are welcome to generate codes for paid client work.' },
      { q: 'What happens if QR Generator Online ever changes in the future?', a: 'Anything you have already downloaded keeps working. A static code holds its data in the matrix itself, with no dependency on our servers — so our future has no bearing on your printed codes.' },
      { q: 'Are there any restrictions on what content I can encode?', a: 'Only the obvious ones: no malware, phishing, fraud, or illegal material, as the acceptable-use policy spells out.' },
      { q: 'What is your limitation of liability regarding commercial print runs?', a: 'As is standard for software, the tools are provided "as-is." Scan a physical proof before approving a large commercial order — that check is your safeguard.' },
      { q: 'How do I contact your legal or licensing team?', a: 'Legal and licensing questions go to support@qr-generator.online.' }
    ],
    bestPractices: 'Scan a printed proof before you approve a high-volume run, and keep your destination URLs live — a code is only as good as the page it points at.'
  }
};
