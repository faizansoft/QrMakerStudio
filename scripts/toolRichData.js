/**
 * Body content for the 21 QR generator tool pages.
 *
 * Written to read like a person, not a template: sentence length varies, FAQ
 * answers don't all open "Yes!"/"No.", the facts every page shares (no expiry,
 * Level H logos, client-side privacy, SVG vs PNG) are said differently on each
 * page instead of pasted, and "a, b, and c" triads are used sparingly. Tables,
 * section headings and every technical figure (ISO/IEC 18004, Level H 30%,
 * S = D / 10, RFC/BIP scheme names, contrast and DPI numbers) are unchanged —
 * they are specification and keyword anchors, not voice.
 */

export const TOOL_RICH_DATA = {
  '/url-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & Specification of URL QR Codes',
      paragraphs: [
        'A URL QR code turns a web address into a grid of black and white modules, following the ISO/IEC 18004 standard. Point a phone camera at it and the device decodes the binary, then hands the address to whatever browser is set as default — Safari through AVFoundation on iOS, Chrome through Google ML Kit on Android. The page opens. Nobody types anything.',
        'The codes here are static, and that word carries weight. A redirect-based service routes every visitor through its own server first, which adds latency, a single point of failure, and a subscription that can lapse and take your code down with it. A static URL code skips all of that: your exact HTTP or HTTPS address is baked into the matrix itself. It stays functional the whole time your web property exists, with no scan limit and nothing logged.',
        'These codes also handle deep links. Point one at a custom URI scheme or a Universal Link and, if the app is installed, the scan drops the user straight into it — a specific product inside a shopping app, an album in Spotify or Apple Music — rather than the mobile web version.'
      ]
    },
    comparisonTable: {
      title: 'Static URL QR Codes vs. Dynamic Redirect QR Codes',
      headers: ['Feature / Metric', 'Static URL QR (QR Generator Online)', 'Third-Party Dynamic Redirects'],
      rows: [
        ['Lifetime Expiration', 'Never expires (Permanent lifetime validity)', 'Expires if monthly subscription lapses'],
        ['Scan Limits', 'Unlimited lifetime scans (0 cost)', 'Frequently capped (e.g. 50-100 scans/mo on free tiers)'],
        ['Redirect Latency', '0ms (Direct browser DNS resolution)', '200ms - 800ms intermediate server hop'],
        ['Privacy & Security', '100% Client-side generation (No user tracking)', 'Intermediary server logs IP, device, and geolocation'],
        ['Offline Functionality', 'Encodes raw URL directly into modules', 'Requires active redirect server connection'],
        ['Data Sovereignty', 'You own the link destination completely', 'Dependent on third-party domain uptime & DNS']
      ]
    },
    steps: [
      { number: 1, title: 'Input Destination Web Address & UTM Parameters', description: 'Paste the full URL, https:// and all. For a campaign, tack on your Google Analytics UTM tags — utm_source=flyer&utm_medium=qr&utm_campaign=spring_launch — and GA4 will attribute the traffic to that exact flyer.' },
      { number: 2, title: 'Select Error Correction & Styling Parameters', description: 'Planning a centre logo? Choose Level H, which recovers 30% of the code. Then set the module style, corner eyes, and colours, keeping contrast at 4.5:1 or better.' },
      { number: 3, title: 'Export Vector SVG for Print or High-Res PNG for Digital', description: 'For print, packaging, and banners, take the scalable SVG. For screens and social, take the 2048x2048px PNG at 300 DPI.' }
    ],
    features: [
      { title: 'Zero Subscription Walls & Permanent Lifetime Scans', description: 'A static URL code that never expires, needs no card, and shrugs off millions of scans without throttling.' },
      { title: 'Lossless Vector SVG & EPS Print Exports', description: 'The same file prints crisp on a 2 cm card and a 10-metre billboard. Vector geometry has no resolution ceiling to hit.' },
      { title: 'Level H Error Correction (30% Redundancy)', description: 'Set a logo in the middle and the recovery margin covers it, so the scan holds up whatever the lighting.' },
      { title: '100% Client-Side Cryptographic Privacy', description: 'The generation runs in your browser. Your links, parameters, and tokens are never stored or analysed on a server.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance-to-Size Optical Benchmarks',
      description: 'The standard optical scanning formula is S = D / 10, where S is the minimum QR code width/height and D is the expected scanning distance from the user smartphone camera.',
      headers: ['Placement / Application', 'Expected Scan Distance (D)', 'Minimum Recommended Size (S)', 'Recommended File Format'],
      rows: [
        ['Business Cards & Name Badges', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Vector SVG / EPS'],
        ['Restaurant Menus & Table Tents', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'Vector SVG / 300 DPI PNG'],
        ['Product Packaging & Labels', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Vector SVG / PDF'],
        ['Flyers, Posters & Window Decals', '1.0 m - 2.0 m (3 ft - 6.5 ft)', '100 mm x 100 mm (4.0" x 4.0")', 'Vector SVG'],
        ['Trade Show Banners & Backdrops', '2.0 m - 4.0 m (6.5 ft - 13 ft)', '250 mm x 250 mm (10" x 10")', 'Vector SVG / EPS'],
        ['Highway Billboards & Transit Ads', '10.0 m - 25.0 m (33 ft - 82 ft)', '1000 mm - 2500 mm (3.3 ft - 8.2 ft)', 'Vector SVG / Large Format Vector']
      ]
    },
    useCases: [
      { title: 'Omnichannel Retail & Product Packaging', description: 'Connect the box to a digital layer — an unboxing tutorial, the full ingredient list, an authenticity certificate, or a registration portal — right off the packaging.' },
      { title: 'Hospitality Menus & Tabletop Ordering', description: 'Drop the menu-printing bill, keep the menu current, and let guests order or pay from the table. A PDF menu updates at 6pm without a reprint.' },
      { title: 'Real Estate Yard Signs & Virtual Walkthroughs', description: 'A code on the yard sign opens a 3D Matterport walkthrough, the floor plan, and the photo gallery. Buyers tour the house from the kerb at any hour.' },
      { title: 'Print Advertising & Direct Mail Conversion', description: 'A magazine ad, a billboard, a postcard — each becomes a measurable funnel once the UTM-tagged code tells you which one actually drove the visit.' },
      { title: 'Conferences, Keynotes & Slide Decks', description: 'Close on a slide with a code and the room downloads your deck, your whitepaper, and your links before they stand up.' }
    ],
    troubleshooting: {
      title: '5 Critical Pitfalls That Break URL QR Code Scannability',
      points: [
        'Weak contrast. Light grey on white, or dark green on black, falls short of the 4.5:1 a camera needs. Dark modules, light background — that is the rule.',
        'A clipped quiet zone. The code needs a clear 4-module border on every side. Run text or art up to the edge and the scanner cannot find where the code starts.',
        'Too much URL. Past about 150 characters the matrix packs in tiny dots that blur when printed small. Trim the link or strip stray query parameters first.',
        'An oversized logo. A logo past 30% of the area, or a code built at Level L or M instead of H, overruns the recovery blocks and the scan fails.',
        'Gloss glare. Glossy laminate throws overhead lights back into the lens in a busy space. Matte or satin stock reads cleanly.'
      ]
    },
    faqs: [
      { q: 'Do URL QR Codes created on QR Generator Online ever expire?', a: 'They stay valid for life. The web address is written into the matrix itself, so there is no subscription and no timer — the code works as long as your destination page is live.' },
      { q: 'Can I edit the destination URL after printing a static QR Code?', a: 'Not the code itself — the destination is fixed in the module pattern once printed. The workaround is to point the code at a short link on your own domain (yourdomain.com/promo) and redirect that link whenever the campaign target changes. The printed code never has to change.' },
      { q: 'What is the maximum number of scans allowed on free QR codes?', a: 'There is no ceiling. Generation is static and client-side, so a code can take tens of millions of scans without touching a bandwidth cap or a paywall.' },
      { q: 'Why is SVG format recommended over PNG for commercial printing?', a: 'SVG stores the code as geometry rather than a fixed pixel grid. Blow it up to billboard size and the lines stay sharp, whereas a raster PNG breaks up once you print it larger than its original pixels.' },
      { q: 'How do UTM parameters help track QR code marketing campaigns?', a: 'Add tags like ?utm_source=brochure&utm_medium=qr&utm_campaign=summer_sale and GA4 credits every session and sale to that specific printed asset, instead of dumping it into generic Direct traffic where you learn nothing.' },
      { q: 'Can I use a URL QR Code to link directly to a downloadable PDF file?', a: 'Host the PDF somewhere public — your site, Dropbox, Google Drive — copy its direct link, and paste that in. A scan then opens or downloads the document straight from the phone browser.' },
      { q: 'Are URL QR Codes compatible with older iPhone and Android smartphones?', a: 'Any iPhone on iOS 11 or later (2017 onward) and any Android on 9 or later reads QR codes from the built-in camera, with no separate scanner app to install.' },
      { q: 'How does Error Correction Level H protect my QR Code with a custom logo?', a: 'Level H duplicates about 30% of the payload through Reed-Solomon redundancy. A centre logo covers some modules, and the scanner rebuilds those from the redundant copies — the URL still decodes in full.' }
    ],
    bestPractices: 'Test the code on both an iPhone and an Android, in dim light and bright, before you approve a print run. Keep the 4-module quiet zone clear, and make sure the page it points at is mobile-responsive and loads in under two seconds — a fast scan onto a slow page still loses the visitor.'
  },

  '/wifi-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Specification of WiFi Network QR Codes (WIFI: Protocol)',
      paragraphs: [
        'A WiFi QR code carries your network login in the `WIFI:` URI format that the ZXing project defined and both Apple and Google adopted. The string reads `WIFI:T:WPA;S:NetworkSSID;P:NetworkPassword;H:false;;` — `T` is the security type (WPA/WPA2/WPA3, WEP, or nopass), `S` is the network name, `P` is the passphrase, and `H` marks whether the network is hidden.',
        'When a camera recognises that string, the phone skips the whole manual-connection dance. On iOS the CoreWLAN/NetworkExtension layer pops a "Join ‘[SSID]’ Network?" prompt; tap it and the device runs the WPA handshake with the access point directly. The password never hits the clipboard, and nobody digs through Settings.',
        'All of this is assembled in your browser. Your SSID and router password are written into the barcode locally and never travel across the network or into a database — which is exactly what you want for a credential you are about to print and stick on a wall.'
      ]
    },
    comparisonTable: {
      title: 'WiFi QR Code vs. Manual Password Entry for Hospitality & Business',
      headers: ['Evaluation Metric', 'WiFi QR Code Access', 'Manual Password Entry'],
      rows: [
        ['Connection Time', '1 - 3 seconds (Single camera scan & tap)', '45 - 90 seconds (Typing 16+ complex characters)'],
        ['Typing Error Rate', '0% (Exact byte-for-byte transmission)', '30% - 50% on complex passwords with symbols'],
        ['Staff Support Overhead', 'Virtually zero guest connectivity tickets', 'High volume of guest requests for staff assistance'],
        ['Password Security', 'Prevents guests seeing plaintext passkeys', 'Requires displaying passwords on whiteboards/chalkboards'],
        ['Compatibility', 'Native on iOS 11+ and Android 10+', 'Manual navigation through OS Settings menus']
      ]
    },
    steps: [
      { number: 1, title: 'Specify Network Name (SSID) & Security Protocol', description: 'Type the network name exactly — it is case-sensitive. Pick WPA/WPA2/WPA3 for a modern router, WEP for old hardware, or No Encryption for an open captive-portal network.' },
      { number: 2, title: 'Enter WiFi Passphrase & Configure Hidden Status', description: 'Add the security key. If the router does not broadcast its name, switch on the Hidden Network toggle so scanning devices probe for it actively.' },
      { number: 3, title: 'Download Vector SVG or High-Resolution PNG for Table Displays', description: 'Add a WiFi icon or your venue logo, then export. Print onto durable acrylic stands, nightstand cards, or a welcome brochure.' }
    ],
    features: [
      { title: 'One-Tap Frictionless Guest Connectivity', description: 'No more mistyped 16-character passwords, and no more guests flagging down staff to connect.' },
      { title: 'Support for WPA3, WPA2, WEP & Hidden SSIDs', description: 'Covers the current 802.11ax/ac security standards as well as older dual-band mesh setups.' },
      { title: 'Zero-Knowledge Client-Side Security', description: 'The password stays in your browser. Nothing is logged, stored in a cloud, or tracked.' },
      { title: 'High-Resolution Vector Formats for Tableware', description: 'Crisp SVG that laser-engraves onto wood, etches into a metal plate, or prints onto a laminated acrylic tent.' }
    ],
    sizingMatrix: {
      title: 'WiFi QR Code Display Sizing Benchmarks',
      description: 'WiFi QR codes are typically scanned at close range by seated guests or customers holding their phone 20 cm to 40 cm away.',
      headers: ['Venue / Placement', 'Viewing Distance', 'Recommended Print Size', 'Recommended Material'],
      rows: [
        ['Cafe Table Tents & Coasters', '20 cm - 30 cm (8" - 12")', '40 mm x 40 mm (1.6" x 1.6")', 'Laminated Cardstock / Wood / Acrylic'],
        ['Hotel Room Nightstands & Desks', '25 cm - 40 cm (10" - 16")', '45 mm x 45 mm (1.8" x 1.8")', 'Framed Matte Card / Acrylic Tent'],
        ['Airbnb Welcome Booklets', '20 cm - 35 cm (8" - 14")', '35 mm x 35 mm (1.4" x 1.4")', 'Matte Heavyweight Paper (100 lb+)'],
        ['Office Conference Room Whiteboards', '50 cm - 100 cm (20" - 40")', '80 mm x 80 mm (3.2" x 3.2")', 'Matte Vinyl Wall Decal / Foam Board'],
        ['Event Registration Check-In Desks', '40 cm - 80 cm (16" - 32")', '75 mm x 75 mm (3.0" x 3.0")', 'Countertop Strut Card Display']
      ]
    },
    useCases: [
      { title: 'Hotels, Resorts & Airbnb Vacation Rentals', description: 'A framed card on the nightstand gets arriving guests online in seconds, with no hunt for a sticker on the back of the router.' },
      { title: 'Cafes, Coffee Shops & Casual Dining', description: 'A table tent cuts the "what\'s the WiFi?" interruptions and keeps guests browsing the digital menu longer.' },
      { title: 'Corporate Offices & Co-Working Spaces', description: 'Visiting clients and event guests get onto the guest network in the boardroom without pulling in IT.' },
      { title: 'Conferences, Hackathons & Trade Shows', description: 'Hundreds of attendees connect at once at the registration desk, which clears the bottleneck and eases cellular congestion in the hall.' },
      { title: 'Medical Clinics & Waiting Rooms', description: 'Waiting-room WiFi keeps patients comfortable, and a scannable card means reception never has to spell out the password.' }
    ],
    troubleshooting: {
      title: 'Troubleshooting Common WiFi QR Scanning Failures',
      points: [
        'Case mismatch. Network names are case-sensitive — "MyCafeWiFi" and "mycafewifi" are two different networks. Match the capitalisation exactly.',
        'Wrong security type. Generate a WEP code for a router running WPA2-PSK (AES) and the handshake fails instantly. For any modern router, choose WPA/WPA2/WPA3.',
        'Captive portals. If your guest WiFi shows a terms page, the code still connects the phone to the radio — the phone\'s captive-network assistant then pops the login page. That is expected, not a fault.',
        'Missing hidden flag. If the router hides its SSID, devices will not find the network unless the code carries Hidden: true.',
        'Worn cards. Coffee stains and scratched laminate obscure the finder patterns. An acrylic cover keeps a tabletop card readable.'
      ]
    },
    faqs: [
      { q: 'Is it secure to print a WiFi QR Code in a public space?', a: 'Anyone who scans it gets on that network, since the code holds the name and password in plain text. The sound approach is to generate it for a dedicated guest network with client isolation switched on — never for your private internal business network.' },
      { q: 'Does a WiFi QR Code work on both Apple iPhones and Android devices?', a: 'It does. iPhones on iOS 11+ and Android phones on Android 10+ recognise the WIFI: format from the native camera and offer a one-tap join.' },
      { q: 'What happens if I change my WiFi network password in the future?', a: 'The old code stops working, because the specific password is fixed in the modules. A password change means generating and printing a fresh code.' },
      { q: 'Can I generate a WiFi QR code for an open network with no password?', a: 'Pick the "No Encryption" option, enter the SSID, and generate. A scan connects straight to the open network with no passkey prompt.' },
      { q: 'Does scanning a WiFi QR code expose the password on the user screen?', a: 'On iOS the prompt just reads "Join [Network Name]?" — the password characters never appear on screen, which quietly guards against anyone reading over a shoulder.' },
      { q: 'Can I add my business logo to the center of a WiFi QR code?', a: 'You can. Level H correction holds back roughly 30% of the code for recovery, so a venue logo or a WiFi icon sits in the middle and phones still read it fine.' },
      { q: 'Do WiFi QR codes expire or have monthly scan limits?', a: 'Neither. These are permanent static barcodes — unlimited scans, no expiry, no fee.' },
      { q: 'Why did my phone fail to connect after scanning the WiFi QR code?', a: 'Usually one of four things: the SSID capitalisation is off, WEP was chosen instead of WPA/WPA2/WPA3, the router is out of range, or the network has MAC-address filtering switched on.' }
    ],
    bestPractices: 'Print the code on high-contrast matte cardstock and stand it in a clear acrylic holder. Add a line like "Point your camera here to join Guest WiFi" so guests know what the code does — and scan the printed proof before you order a batch.'
  },

  '/vcard-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture of vCard 3.0 Digital Contact QR Codes',
      paragraphs: [
        'A vCard QR code packs a full contact profile into the international VCF standard (vCard 3.0, defined in RFC 2426 and RFC 6350). The string runs from `BEGIN:VCARD` to `END:VCARD` and holds structured fields — full name (`FN`), organisation (`ORG`), job title (`TITLE`), phone numbers (`TEL;TYPE=CELL,WORK`), email (`EMAIL;TYPE=INTERNET`), address (`ADR`), and website (`URL`).',
        'Scan it and the phone does the filing for you. iOS reads it through the Contacts framework, Android through the People API, and both open a pre-filled contact card with a "Create New Contact" button. One tap saves your whole profile into the address book — no manual typing, no transposed phone digits, no paper card lost in a jacket pocket by Friday.',
        'A vCard carries more text than most codes, so the byte layout matters. The encoding uses clean delimiters to keep the matrix decodable even on a budget phone with a slower autofocus.'
      ]
    },
    comparisonTable: {
      title: 'Digital vCard QR Business Cards vs. Traditional Paper Business Cards',
      headers: ['Feature / Aspect', 'vCard QR Business Card', 'Traditional Paper Business Card'],
      rows: [
        ['Contact Save Time', '1 Tap (< 3 seconds directly into smartphone contacts)', 'Manual typing (1 - 3 minutes, often deferred & lost)'],
        ['Data Capacity', 'Full profile: 3 phones, 2 emails, address, website, title', 'Limited physical card surface area (often omitted)'],
        ['Retention Rate', '88% higher (Saved permanently in cloud address book)', '88% of paper business cards are thrown away within 1 week'],
        ['Environmental Impact', 'Zero paper waste (Reusable digital & durable cards)', 'Thousands of discarded paper cards per professional annually'],
        ['Interactive Features', 'One-tap direct calling, emailing, and navigation', 'Static printed text requiring manual dialing and typing']
      ]
    },
    steps: [
      { number: 1, title: 'Fill In Structured Professional Contact Fields', description: 'Enter your name, title, company, mobile, work email, and website. Keep any notes short — a leaner profile means larger, easier-to-scan modules.' },
      { number: 2, title: 'Customize Visual Branding & Embed Headshot/Logo', description: 'Apply your brand palette, pick a dot style, and set your headshot or company mark in the centre at Level H error correction.' },
      { number: 3, title: 'Export Vector SVG for Business Card Printing', description: 'Hand the print shop the vector SVG, or take a high-res PNG for an email signature, a LinkedIn banner, or a lock-screen wallpaper.' }
    ],
    features: [
      { title: 'Universal iOS & Android Cross-Platform Compatibility', description: 'Built to vCard 3.0, so it drops cleanly into Apple Contacts, Google Contacts, Outlook, and Samsung Contacts alike.' },
      { title: 'One-Tap Address Book Integration', description: 'Your phone, email, website, and office address all save in a single tap — the other person types nothing.' },
      { title: 'Zero Cloud Dependency & Complete Privacy', description: 'The contact data lives in the barcode itself. No third-party server stores or harvests your networking details.' },
      { title: 'High-Precision Vector SVG for Premium Card Stock', description: 'Sharp vector output for foil stamping, spot UV, embossing, or laser-engraving a metal or bamboo card.' }
    ],
    sizingMatrix: {
      title: 'vCard QR Code Sizing & Resolution Specifications',
      description: 'Because vCard payloads contain 150 to 350 characters of structured text, the matrix has higher module density and requires adherence to strict minimum size rules.',
      headers: ['Application Medium', 'Minimum Recommended Size', 'Error Correction Level', 'Optimal Substrate'],
      rows: [
        ['Standard Paper Business Cards (3.5" x 2")', '28 mm x 28 mm (1.1" x 1.1")', 'Level Q (25%) or Level H (30%)', 'Heavy Matte Cardstock (350+ GSM)'],
        ['Metal / Wood NFC Smart Business Cards', '30 mm x 30 mm (1.2" x 1.2")', 'Level H (30%)', 'Laser-Engraved Matte Anodized Aluminum'],
        ['Trade Show Lanyards & Conference Badges', '45 mm x 45 mm (1.8" x 1.8")', 'Level M (15%) or Level Q (25%)', 'Laminated Synthetic PVC / Tyvek'],
        ['Resume Headers & Portfolio Covers', '30 mm x 30 mm (1.2" x 1.2")', 'Level Q (25%)', 'Uncoated Smooth Bright White Paper'],
        ['Smartphone Lock Screen Wallpaper', '250 x 250 px on digital screen', 'Level H (30%)', 'High-Contrast OLED Digital Display']
      ]
    },
    useCases: [
      { title: 'Executive & Sales Representative Business Cards', description: 'A code on the back of the card turns a handshake into a saved contact before the conversation ends.' },
      { title: 'Trade Shows, Expos & Industry Conferences', description: 'On a lanyard, a booth banner, or a name tag, your details land in a prospect\'s phone in about two seconds.' },
      { title: 'Job Seekers Resumes & Cover Letters', description: 'A discreet code in the resume header lets a recruiter save your number and portfolio link without retyping a thing.' },
      { title: 'Real Estate Agents & Mortgage Brokers', description: 'On an open-house flyer, a vCard code makes booking a showing a one-tap job for a prospective buyer.' },
      { title: 'Corporate Email Footers & Digital Signatures', description: 'Add the code to the email template and a desktop reader can scan it off their screen to store your direct line.' }
    ],
    troubleshooting: {
      title: 'Common vCard QR Code Scanning Issues & How to Prevent Them',
      points: [
        'Overstuffed profiles. Twenty fields — a bio, four numbers, three addresses — pack the matrix so tight it struggles to scan. Stick to the essentials: name, title, company, a phone or two, email, and a URL.',
        'Printing too small. A vCard uses a denser Version 6-10 matrix, and below 25mm a budget camera blurs the module edges. Give it room.',
        'Glossy stock. A high-gloss card reflects hall spotlights into the lens. Choose matte, silk, or soft-touch.',
        'Inverted colours. A white code on a dark card looks sharp but fails on some older scanners. Dark modules on a light ground stay the safe choice.',
        'No country code. Leave off the +1 or +44 and an international contact cannot dial you straight from the saved card.'
      ]
    },
    faqs: [
      { q: 'What happens when someone scans a vCard QR Code on their phone?', a: 'On iOS a banner offers "Add [Name] to Contacts" and opens Apple Contacts with every field filled in. On Android it opens Google Contacts with a Save prompt. Either way, your full profile is one tap from their address book.' },
      { q: 'Can I include a photo in a static vCard QR Code?', a: 'Encoding the raw image would balloon the payload into an unscannable mess. The standard trick is to overlay your photo or logo in the centre of the code and put your website or LinkedIn URL in the vCard\'s URL field, where the full-resolution photo actually lives.' },
      { q: 'Do vCard QR codes require an internet connection to scan?', a: 'They work fully offline. Every field is stored in the barcode as plain vCard 3.0 text, so a phone reads and saves the contact with no data or WiFi.' },
      { q: 'Are vCard QR codes compatible with Outlook and Gmail?', a: 'The vCard 3.0 format is the universal contact standard, so Outlook, Apple Mail, Google Contacts, and the major CRMs all take it without fuss.' },
      { q: 'Do static vCard QR codes have an expiration date?', a: 'They do not. The contact data sits in the code itself and stays valid for good — no recurring fee, no scan cap.' },
      { q: 'How should I format international phone numbers in a vCard?', a: 'Use E.164: a plus sign, then country code, area code, and number — for example +14155552671. That format lets someone abroad call or text you without guessing at dialling prefixes.' },
      { q: 'Can I print a vCard QR code on both sides of my business card?', a: 'The usual layout keeps your name and branding on the front and puts the code on the back next to a short line like "Scan to save contact".' },
      { q: 'Which export format is best for sending to a commercial business card printer?', a: 'Give them the vector SVG or EPS. Vector files hold their precision across any offset or digital press.' }
    ],
    bestPractices: 'Write phone numbers in full international form (+1, +44), and keep the card to essential fields so the modules stay large and readable. Scan the printed proof on both an iPhone and an Android before you commit to the full run.'
  },

  '/whatsapp-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Protocol & Architecture of WhatsApp Click-to-Chat QR Codes',
      paragraphs: [
        'A WhatsApp QR code carries a click-to-chat link on WhatsApp\'s official `https://wa.me/` protocol (or the older `whatsapp://send?phone=` scheme). The format is `https://wa.me/<PhoneNumber>?text=<URLEncodedText>` — the number in E.164 form with no symbols, and the text a percent-encoded opening message.',
        'Scan it and the phone hands off to WhatsApp\'s Universal Link handler. If WhatsApp or WhatsApp Business is installed, the app opens straight into a chat with your number and drops the pre-written message into the compose box — the customer never has to save your number to their contacts first.',
        'That shortcut is the whole point. Cut out the "save the number, open the app, work out what to say" steps and the barrier to a first message nearly disappears, which is why a WhatsApp code tends to convert far better than a printed phone number or a web form.'
      ]
    },
    comparisonTable: {
      title: 'WhatsApp QR Code vs. Traditional Contact Channels',
      headers: ['Channel / Feature', 'WhatsApp QR Click-to-Chat', 'Standard Web Contact Form', 'Traditional Phone Number'],
      rows: [
        ['Interaction Friction', '1 Scan + 1 Tap (Instant live conversation)', 'High (Typing Name, Email, Phone, Message)', 'Medium (Dialing, waiting in call queue)'],
        ['Open & Read Rate', '98% average open rate on WhatsApp', '20% - 25% average email open rate', 'High voicemail drop-off rate'],
        ['Pre-Filled Context', 'Automatic inquiry template pre-inserted', 'User must manually specify subject', 'Caller must verbally explain context'],
        ['Address Book Required', 'No (Opens chat without saving number)', 'N/A', 'Often requires saving to avoid losing contact'],
        ['Automation Support', 'Integrates with WhatsApp Business Auto-Replies', 'Delayed auto-responder email', 'Interactive Voice Response (IVR) phone tree']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Phone Number with International Country Code', description: 'Enter the full number with country code and nothing else — no plus sign, hyphens, or brackets. A US number becomes 14155551234; a UK one, 447911123456.' },
      { number: 2, title: 'Compose Pre-Filled Customer Inquiry Message', description: 'Write the opening line for them, something like "Hi! I would like to book a table for tonight" or "Hello, I saw your flyer and want a quote on product X".' },
      { number: 3, title: 'Customize with Official WhatsApp Logo & Download', description: 'Use the emerald-green-and-white brand colours, set the WhatsApp mark in the centre, and export as SVG or high-res PNG.' }
    ],
    features: [
      { title: 'Zero-Contact Saving Friction', description: 'Customers reach your sales or support line the moment they scan — no adding your number to their phone first.' },
      { title: 'Pre-Composed Inquiry Templates', description: 'Seed the conversation with context tied to the specific ad, product, or flyer the code sits on.' },
      { title: 'WhatsApp Business & WhatsApp Personal Support', description: 'Works with a personal account, the WhatsApp Business app, and the WhatsApp Cloud API.' },
      { title: 'Permanent Static Encoding with Zero Fees', description: 'A static code that never expires, costs nothing monthly, and handles unlimited chat starts.' }
    ],
    sizingMatrix: {
      title: 'WhatsApp QR Code Sizing & Placement Guide',
      description: 'Ensure customers can effortlessly scan your WhatsApp chat codes across diverse retail and promotional print environments.',
      headers: ['Placement Medium', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Product Packaging & Delivery Boxes', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', '"Scan to Chat with Support on WhatsApp"'],
        ['Restaurant Table Tents & Counter Signs', '30 cm - 50 cm (12" - 20")', '40 mm x 40 mm (1.6" x 1.6")', '"Scan to Book Table / Order on WhatsApp"'],
        ['Real Estate Yard Signs & Window Decals', '1.0 m - 2.5 m (3 ft - 8 ft)', '120 mm x 120 mm (4.8" x 4.8")', '"Scan to Text the Listing Agent Instantly"'],
        ['Retail Storefront Entrance Posters', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', '"Scan to Inquire About In-Stock Products"'],
        ['Vehicle Decals & Service Fleet Vans', '2.0 m - 5.0 m (6.5 ft - 16 ft)', '250 mm x 250 mm (10" x 10")', '"Scan to Request Rapid Service via WhatsApp"']
      ]
    },
    useCases: [
      { title: 'Customer Support & Warranty Registrations', description: 'A code on the manual or the box gives buyers a live troubleshooting line the instant something goes wrong.' },
      { title: 'Restaurant Takeout & Table Reservations', description: 'Diners scan a table card to order, book, or ask about an allergen straight into your WhatsApp Business inbox.' },
      { title: 'Real Estate Inquiries & Property Tours', description: 'On a flyer, the code lets a buyer text the listing agent for floor plans and showing times on the spot.' },
      { title: 'E-Commerce Delivery Package Inserts', description: 'A card in the shipping box invites the customer to message for an exchange or a VIP discount code.' },
      { title: 'Service Quotes & Emergency Dispatch', description: 'A fridge magnet or a service sticker with a WhatsApp code turns an urgent plumbing or locksmith job into a one-tap booking.' }
    ],
    troubleshooting: {
      title: 'Top Reasons WhatsApp QR Codes Fail to Open Chats',
      points: [
        'Bad number formatting. A leading 0 before the area code (4407911... instead of 447911...) or a stray + breaks the wa.me link. Digits only.',
        'A landline. Encode a number that was never registered on WhatsApp and the scan returns an invalid-user error.',
        'A bloated pre-fill. A 500-character default message makes for a dense, slow code. Keep the opener under about 120 characters.',
        'No badge. People hesitate over a bare code. The official WhatsApp mark tells them which app is about to open.',
        'No context. Print a clear line like "Scan to Chat on WhatsApp" so the scan is not a mystery.'
      ]
    },
    faqs: [
      { q: 'Do customers need to save my business phone number before scanning?', a: 'No — the wa.me link opens a chat with your number straight away, no saving to contacts required.' },
      { q: 'How should I format my phone number for WhatsApp QR codes?', a: 'Full international form, digits only. A US number like (415) 555-1234 becomes 14155551234; a UK mobile 07911 123456 becomes 447911123456, dropping the leading 0.' },
      { q: 'Does scanning automatically send the message on behalf of the user?', a: 'It does not. The scan opens WhatsApp with your number and the pre-filled text sitting in the compose box — the customer still taps Send, so they stay fully in control.' },
      { q: 'What happens if a user scans the code on a desktop computer?', a: 'The browser hands off to WhatsApp Web or offers to open the desktop app, so a desktop scan continues the chat without a hitch.' },
      { q: 'Can I use this with WhatsApp Business automated greeting messages?', a: 'When someone starts a chat through the code, your WhatsApp Business welcome message, quick replies, and away messages all fire as normal.' },
      { q: 'Do WhatsApp QR codes expire or have limits on conversation starts?', a: 'They are permanent static codes — unlimited scans, no expiry.' },
      { q: 'Can I track how many people scan my WhatsApp QR code?', a: 'Give each printed asset its own pre-filled opener — "Inquiry from Spring Flyer" versus "Inquiry from Window Banner" — and the wording tells you which channel produced the lead.' },
      { q: 'Is it free to generate and use WhatsApp QR codes?', a: 'Entirely free, with no subscription and no hidden charge.' }
    ],
    bestPractices: 'Use the standard WhatsApp green (#25D366) with a clear icon in the centre, and keep the pre-filled greeting short and friendly. Scan the code on both mobile data and WiFi before a commercial run — the two can behave differently.'
  },

  '/facebook-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of Social Media & Facebook Profile QR Codes',
      paragraphs: [
        'A Facebook or social media QR code carries a direct profile URL, page handle, group link, or link-tree destination. Scan it and the phone resolves a universal link: if the Facebook, Instagram, TikTok, or LinkedIn app is installed, it deep-links straight to your verified page; if not, it opens the mobile web version with a prompt to follow.',
        'In a shop or at an event, attention is fleeting. Telling someone to "search for Acme Co on Facebook" loses most of them — to a typo, to a rival with near-identical branding, to whatever the feed serves up next. A dedicated code removes the search entirely and turns a passer-by into a follower in under two seconds.',
        'You get high-resolution vector exports and full control of the design, so you can drop in the official platform badge, match the code to your brand colours, and hold enough contrast to scan fast through a shop window or across an event hall.'
      ]
    },
    comparisonTable: {
      title: 'Direct Social QR Code vs. Manual Search Discovery',
      headers: ['Metric / Factor', 'Direct Social Media QR Code', 'Manual Search on App / Web'],
      rows: [
        ['Conversion Rate', 'Up to 65% of scanners follow/like', 'Under 15% due to search drop-off'],
        ['Discovery Speed', '1 - 2 seconds (Direct camera scan)', '30 - 60 seconds (Opening app, searching, filtering)'],
        ['Brand Impersonation Risk', '0% (Directly links to verified profile URL)', 'High (User may follow competing or duplicate pages)'],
        ['Offline Print Integration', 'Seamlessly embeds on tables, receipts, boxes', 'Requires printing clumsy text instructions'],
        ['Cross-Platform Routing', 'Universal deep-link to native app or browser', 'Requires separate manual searches per app']
      ]
    },
    steps: [
      { number: 1, title: 'Paste Your Facebook Page, Group, or Profile URL', description: 'Copy the full public link — facebook.com/yourbrand, instagram.com/yourhandle — and paste it in.' },
      { number: 2, title: 'Embed Brand Icon & Customize Color Palette', description: 'Style it in Facebook blue (#1877F2) or your own palette, and set the platform icon in the centre at Level H error correction.' },
      { number: 3, title: 'Download Vector SVG for Signage or PNG for Print', description: 'Take the SVG for window decals, banner stands, and packaging, or a high-res PNG for flyers, receipts, and table cards.' }
    ],
    features: [
      { title: 'Turn Physical Foot Traffic into Engaged Followers', description: 'Shoppers, diners, and event delegates become followers without hunting for your page.' },
      { title: 'Direct Native App Deep-Linking', description: 'A scan routes mobile users into their installed social app for a one-tap follow.' },
      { title: 'Official Social Icon Embeds', description: 'Choose from Facebook, Instagram, YouTube, TikTok, and LinkedIn icon presets to make the code recognisable and trusted.' },
      { title: 'Unlimited Permanent Scans with Zero Expiration', description: 'A static social code that keeps working indefinitely, with no fee, cap, or renewal.' }
    ],
    sizingMatrix: {
      title: 'Social Media QR Code Print Sizing Benchmarks',
      description: 'Position your social QR codes where customers naturally pause and have their smartphones readily available.',
      headers: ['Application Location', 'Scan Distance', 'Recommended Print Size', 'Recommended Substrate'],
      rows: [
        ['Point of Sale (POS) Checkout Counter', '30 cm - 50 cm (12" - 20")', '40 mm x 40 mm (1.6" x 1.6")', 'Acrylic Countertop Sign / Sticker'],
        ['Dining Tables & Table Tents', '30 cm - 45 cm (12" - 18")', '35 mm x 35 mm (1.4" x 1.4")', 'Laminated Card / Wooden Table Tent'],
        ['Retail Storefront Window Decal', '1.0 m - 2.0 m (3 ft - 6.5 ft)', '120 mm x 120 mm (4.8" x 4.8")', 'Weatherproof Matte Vinyl Decal'],
        ['Product Packaging Unboxing Cards', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', 'Matte Heavyweight Insert Card'],
        ['Event Stage Backdrops & Banners', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'Non-Reflective Fabric Banner']
      ]
    },
    useCases: [
      { title: 'Retail Checkout Displays & Loyalty Building', description: 'A code by the register nudges shoppers to follow the page for weekly flash discounts and new-arrival alerts.' },
      { title: 'Restaurant Table Tents & Check-In Reviews', description: 'Diners check in, leave a review, and tag their food photos, which widens your organic local reach for free.' },
      { title: 'Product Packaging Inserts & Unboxing Contests', description: 'A card in the box invites buyers to post an unboxing and tag you for a shot at a monthly prize.' },
      { title: 'Events, Conferences & Community Gatherings', description: 'A large code on a slide or banner sends attendees straight into your official community group.' },
      { title: 'Service Fleet Decals & Local Advertising', description: 'A code on the van lets local homeowners read your reviews and follow the page at a stoplight.' }
    ],
    troubleshooting: {
      title: 'Preventing Social Media QR Code Scanning Mistakes',
      points: [
        'A private page. Set the page or group to Public so a scanner can see the content without a login wall in the way.',
        'A busy background. Skip the photo behind the code. A solid light ground at 4.5:1 contrast is what a camera locks onto.',
        'No reason to scan. A bare code earns few follows. Give it a hook — "Scan to Join 10,000+ VIP Members on Facebook".',
        'Gloss glare. A glossy window decal bounces sunlight into the lens. Matte vinyl outdoors, always.',
        'One platform only. Want followers across Facebook, Instagram, and TikTok? Point the code at a single link-tree page rather than one network.'
      ]
    },
    faqs: [
      { q: 'Will scanning open the Facebook app or a web browser?', a: 'If the Facebook app is installed, the universal link opens your profile natively inside it. If not, it falls back to the mobile browser — either way the person lands on your page.' },
      { q: 'Can I link to a specific Facebook post, album, or event instead of a page?', a: 'Copy the direct URL of any public post, album, live stream, or event and paste it in. The code points wherever the link does.' },
      { q: 'How can I link to multiple social media platforms with one QR Code?', a: 'Build a free link-aggregation page — Linktree, Beacons, or a page on your own site — and generate the code from that URL. A scanner then picks which platform to follow.' },
      { q: 'Do Facebook QR codes expire or have monthly scan limits?', a: 'They are static and permanent. The code holds your direct URL and keeps working, with unlimited scans and no expiry.' },
      { q: 'Can I customize the QR code with Facebook official blue color?', a: 'Use the official #1877F2 for the modules and keep a clean white background — the contrast stays high and the code stays on brand.' },
      { q: 'Why is it better to use a QR code instead of asking users to search for my page?', a: 'A scan skips the search entirely: no typos, no wandering onto a copycat page with a similar name, and the follow is done in under two seconds.' },
      { q: 'What file format should I download for printing on storefront signage?', a: 'The vector SVG — it scales to any banner or window size without a hint of blur.' },
      { q: 'Is client privacy protected when generating social QR codes?', a: 'Everything is generated locally on your device, so your URLs and profile links never reach a server.' }
    ],
    bestPractices: 'Pair the code with a reason to act — "Scan to Unlock Exclusive Discounts" or "Follow Us for Daily Giveaways" — and place it at eye level in good light. Scan it on a few different phones before launch.'
  },

  '/email-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of Mailto URI Scheme Email QR Codes',
      paragraphs: [
        'An email QR code carries a `mailto:` link, the internet email scheme defined in RFC 6068. The structure is `mailto:<RecipientEmail>?subject=<EncodedSubject>&body=<EncodedBody>&cc=<EncodedCC>&bcc=<EncodedBCC>`, with spaces and special characters percent-encoded per RFC 3986.',
        'A scan brings up whatever email client is set as default — Apple Mail, Gmail, Outlook, Yahoo — with the address, subject, and opening body text already filled in. The user reviews it and taps send. Feedback, a support request, a warranty claim: one review-and-send instead of a blank compose window.',
        'For a support desk, that pre-filled subject line quietly does the sorting. Embed a standard header like `[Warranty Claim - Model X]` and incoming tickets categorise themselves, which cuts the manual triage on the receiving end.'
      ]
    },
    comparisonTable: {
      title: 'Pre-Filled Email QR Codes vs. Manual Email Inquiries',
      headers: ['Operational Factor', 'Pre-Filled Email QR Code', 'Manual Email Typing'],
      rows: [
        ['Address Accuracy', '100% (Zero mistyped addresses or bouncebacks)', '15% - 25% error rate on complex corporate emails'],
        ['Subject Categorization', 'Standardized subject lines for automated triage', 'Unpredictable, vague, or missing subject headers'],
        ['Customer Effort', '1 Scan + Review + Send (< 5 seconds)', 'Manual typing of recipient, subject, and message'],
        ['CRM / Helpdesk Routing', 'Rules route tickets instantly based on subject', 'Requires manual sorting and assignment by staff'],
        ['Offline Availability', 'Encodes mailto data directly in barcode matrix', 'Requires finding business card or searching website']
      ]
    },
    steps: [
      { number: 1, title: 'Specify Recipient Email & Optional CC/BCC', description: 'Enter the inbox that should receive it — support@yourcompany.com — and add comma-separated CC or BCC addresses if you need them.' },
      { number: 2, title: 'Draft Standardized Subject Line & Body Template', description: 'Pre-fill a clear subject such as "Inquiry regarding Order #" plus a short body prompt, so the customer starts from something rather than nothing.' },
      { number: 3, title: 'Customize Design & Export High-Res Print File', description: 'Style the modules, add an envelope icon or your logo, and download vector SVG for print or high-res PNG for a screen.' }
    ],
    features: [
      { title: 'Eliminate Bounced Emails & Address Typos', description: 'The message reaches your exact inbox — no misspelled domain, no bounce-back.' },
      { title: 'Automate Helpdesk & CRM Ticket Triage', description: 'A pre-set subject lets Zendesk, Freshdesk, or HubSpot route the inquiry on its own.' },
      { title: 'Universal Support Across All Mail Clients', description: 'Opens the default mail app on iOS, Android, macOS, and Windows alike.' },
      { title: 'Permanent Lifetime Operation with Zero Fees', description: 'A static mailto code that never expires, needs no subscription, and handles any volume of messages.' }
    ],
    sizingMatrix: {
      title: 'Email QR Code Print Sizing Specifications',
      description: 'Email QR codes contain moderate payload lengths depending on the length of the pre-filled body text.',
      headers: ['Application Placement', 'Scanning Distance', 'Minimum Print Size', 'Recommended File Format'],
      rows: [
        ['Product Packaging & Instruction Manuals', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', 'Vector SVG / 300 DPI PNG'],
        ['Warranty Cards & Invoices', '25 cm - 40 cm (10" - 16")', '35 mm x 35 mm (1.4" x 1.4")', 'Vector SVG / PDF'],
        ['Equipment Service Tags & Industrial Machinery', '30 cm - 60 cm (12" - 24")', '50 mm x 50 mm (2.0" x 2.0")', 'Engraved Aluminum / Vinyl Decal'],
        ['Recruitment Posters & Job Fair Flyers', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', 'Vector SVG'],
        ['Tabletop Feedback Cards in Hospitality', '30 cm - 50 cm (12" - 20")', '40 mm x 40 mm (1.6" x 1.6")', 'Heavyweight Matte Cardstock']
      ]
    },
    useCases: [
      { title: 'Warranty Registration & Technical Support', description: 'A code on the product label opens a claim with the model number already in the subject line.' },
      { title: 'Customer Feedback & General Inquiries', description: 'A table card routes candid feedback straight to the general manager\'s inbox, privately.' },
      { title: 'Job Fair Recruitment & Resume Submissions', description: 'A career-poster code lets applicants email a resume to the hiring manager with the job code pre-set.' },
      { title: 'Trade Show Lead Capture & Invoicing Requests', description: 'Booth visitors scan to request a whitepaper, a catalogue, or enterprise pricing in one tap.' },
      { title: 'Emergency Maintenance & Facility Management', description: 'A code on an HVAC unit lets a tenant report a fault directly to facilities dispatch.' }
    ],
    troubleshooting: {
      title: 'Avoiding Email QR Code Scanning & Delivery Issues',
      points: [
        'An overlong body. 400+ characters of pre-filled text packs the matrix tight. Keep the template under about 150 characters.',
        'A malformed address. A missing @ or a trailing space makes the mail client reject the compose command. Check the recipient carefully.',
        'No default mail app. On a desktop without one configured, a mailto link may ask which app to use. On mobile, the native mail app just handles it.',
        'Low contrast. Pale or pastel modules on white fail the scan. Dark on light, above 4.5:1.',
        'No instruction. Label it — "Scan to Email Support Directly" — so the scan is obvious.'
      ]
    },
    faqs: [
      { q: 'Which email app opens when a user scans an Email QR Code?', a: 'Whichever the device treats as default — Apple Mail on an iPhone, Gmail on Android, or Outlook or Yahoo if the user set one of those.' },
      { q: 'Does scanning automatically send the email?', a: 'No. It opens the compose window with the fields filled in, and the user taps Send. That keeps them in control of what actually goes out.' },
      { q: 'Can I leave the subject and body fields blank?', a: 'You can. Enter only the recipient address and leave the subject and body empty for the user to write themselves.' },
      { q: 'Can I include multiple recipient email addresses?', a: 'Add several comma-separated addresses in the recipient field and the message reaches your whole team at once.' },
      { q: 'Do Email QR codes expire or require paid plans?', a: 'Neither. A static mailto code works forever, however many people scan it, and never asks for money.' },
      { q: 'How many characters can I include in the pre-filled email body?', a: 'The mailto scheme allows long strings, but keeping the body under about 150 characters keeps the matrix clean and quick to scan.' },
      { q: 'Can I track how many emails are generated from my QR code?', a: 'Drop a tag into the subject line — [Source: Summer Flyer] — and filter on it in your inbox or CRM to see which asset drove the message.' },
      { q: 'Is my email address kept private during generation?', a: 'It stays local. The encoding runs in your browser, so no address is logged or stored on a server.' }
    ],
    bestPractices: 'Keep the subject clear and the body short, use dark modules on white, and label the code with where the email is headed so a scanner knows what to expect.'
  },

  '/sms-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of SMSTO Protocol Text Messaging QR Codes',
      paragraphs: [
        'An SMS QR code carries a text-messaging instruction in the `SMSTO:` (or `sms:`) scheme. The format is `SMSTO:<PhoneNumber>:<MessageText>` — the recipient number or shortcode, then the message body to pre-fill.',
        'Scanning it launches the native Messages app — Apple Messages on iOS, Google Messages on Android — with the number addressed and the text already typed. One tap sends it over SMS or RCS.',
        'This is the backbone of a lot of mobile marketing: keyword opt-ins ("text DISCOUNT to a shortcode"), subscriber sign-ups, ticket confirmations, two-factor checks. SMS reads at over 98%, and a code removes the friction of typing a number and a keyword correctly.'
      ]
    },
    comparisonTable: {
      title: 'SMS QR Code Opt-Ins vs. Manual Text Keyword Marketing',
      headers: ['Factor / Metric', 'SMS QR Code Opt-In', 'Manual SMS Keyword Entry'],
      rows: [
        ['Opt-In Conversion Rate', '55% - 70% of scanners complete opt-in', '15% - 25% (High drop-off typing shortcodes)'],
        ['Keyword Accuracy', '100% exact match (Eliminates spelling typos)', 'Frequent typos causing failed opt-in responses'],
        ['Speed to Completion', '1 Scan + Tap Send (< 3 seconds)', '30 - 60 seconds (Opening app, typing number & keyword)'],
        ['Carrier Compatibility', 'Universal across all cellular carriers & networks', 'Universal across all cellular carriers & networks'],
        ['Hardware Requirement', 'Works on all iOS and Android camera phones', 'Requires manual typing on keypad']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Destination Phone Number or Shortcode', description: 'Add your 10-digit number, a toll-free SMS line, or a 5-6 digit marketing shortcode, with the country prefix.' },
      { number: 2, title: 'Define Pre-Filled Keyword or Message Content', description: 'Type the exact keyword your SMS platform expects — JOIN, VIP, DISCOUNT, INFO.' },
      { number: 3, title: 'Download High-Resolution Print Assets', description: 'Take vector SVG for in-store banners, shelf talkers, and table displays, or PNG for a promotional screen.' }
    ],
    features: [
      { title: 'Drive Explosive SMS Marketing List Growth', description: 'Strip the friction out of opt-ins and loyalty sign-ups so more scanners finish the flow.' },
      { title: 'Zero Keyword Spelling Errors', description: 'Your automation receives the exact keyword every time, with no customer typos to drop the opt-in.' },
      { title: 'Universal Carrier & Device Compatibility', description: 'Works across every carrier and on any iPhone or Android with a camera.' },
      { title: 'Permanent Static Barcode with Zero Expiration', description: 'A code that stays active indefinitely, with no subscription or scan throttle.' }
    ],
    sizingMatrix: {
      title: 'SMS QR Code Print Sizing Specifications',
      description: 'Position your SMS QR codes on high-traffic retail signage with clear incentive callouts.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended CTA'],
      rows: [
        ['Retail Checkout Counters & Shelf Talkers', '30 cm - 50 cm (12" - 20")', '40 mm x 40 mm (1.6" x 1.6")', '"Scan to Text VIP for 15% Off"'],
        ['Restaurant Window Decals & Table Tents', '30 cm - 60 cm (12" - 24")', '45 mm x 45 mm (1.8" x 1.8")', '"Scan to Text MENU for Specials"'],
        ['Event Posters & Concert Flyers', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', '"Scan to Text WIN for VIP Tickets"'],
        ['Real Estate Yard Signs & Directionals', '1.0 m - 2.5 m (3 ft - 8 ft)', '120 mm x 120 mm (4.8" x 4.8")', '"Scan to Text HOUSE for Listing Price"'],
        ['Direct Mail Postcards & Catalogs', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', '"Scan to Text SAVE for Promo Code"']
      ]
    },
    useCases: [
      { title: 'Retail VIP Club & SMS List Building', description: 'A checkout code offers an instant discount the moment a shopper scans to text your opt-in keyword.' },
      { title: 'Real Estate Automated Property Inquiries', description: 'A yard-sign code lets a buyer text a property code and get pricing and floor plans back automatically.' },
      { title: 'Event Ticketing & Check-In Confirmations', description: 'Attendees text a confirmation code at the door for quick check-in.' },
      { title: 'Customer Support & Concierge Services', description: 'Hotel guests and clients get a direct SMS line to request service or book an appointment.' },
      { title: 'Contest Entries & Live Event Polls', description: 'A scannable code pulls thousands of instant entries during a match or a concert.' }
    ],
    troubleshooting: {
      title: 'Troubleshooting SMS QR Code Scanning Failures',
      points: [
        'Over 160 characters. Keep the pre-filled text short — a longer message splits into multiple parts and can fragment on older networks.',
        'Shortcode limits. On a 5-digit shortcode, confirm your SMS gateway accepts inbound messages from international roaming devices.',
        'Missing disclaimers. Under TCPA and CTIA rules, print the standard notice — "Msg & data rates may apply. Reply STOP to cancel" — next to a marketing code.',
        'Low contrast. Light modules on a pale surface fail. Dark on light.',
        'Wear and tear. A matte laminate protects a printed card from scuffs and moisture that would break the scan.'
      ]
    },
    faqs: [
      { q: 'Does scanning the QR code automatically send the text message?', a: 'No. It opens the Messages app with the number and text ready, and the user taps Send — which is what keeps it compliant with mobile privacy rules.' },
      { q: 'Are standard carrier SMS rates charged when users send the text?', a: 'Yes. The message the user sends draws on their own plan\'s SMS allowance and any carrier rates that apply.' },
      { q: 'Can I use an SMS QR code with 5-digit or 6-digit shortcodes?', a: 'A standard 10-digit number, a toll-free line, or a 5-6 digit shortcode all go in the same phone-number field.' },
      { q: 'Do SMS QR codes expire or have monthly scan limits?', a: 'They are permanent static codes, with unlimited scans and no expiry.' },
      { q: 'What is the character limit for pre-filled SMS text?', a: 'A single SMS holds 160 characters. Staying under that keeps the message to one segment across every carrier.' },
      { q: 'Can I embed my logo into an SMS QR code?', a: 'That works. At Level H the code tolerates a fair bit of obstruction — enough to drop a message icon or your logo over the centre.' },
      { q: 'Do SMS QR codes require an internet connection to scan?', a: 'Scanning and opening the Messages app work offline. Sending the text itself needs normal cellular reception.' },
      { q: 'Is customer phone data stored on QR Generator Online servers?', a: 'No. It is all done on your device, so no numbers or message text are uploaded or kept.' }
    ],
    bestPractices: 'Spell out the benefit of sending the text, and include the required message-and-data-rate disclaimers on any commercial campaign.'
  },

  '/phone-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Specification of Tel URI Phone Call QR Codes',
      paragraphs: [
        'A phone-call QR code carries a `tel:` link, the dialling scheme defined in RFC 3966. The format is `tel:<PhoneNumber>` — usually a globally unique E.164 number like `tel:+14155552671`, optionally with DTMF pauses for an extension.',
        'Scan it and the phone shows a system dialer prompt with the number and a "Call [Number]" button. One tap places the call — no reading a number off a sign and keying it in, which is exactly where misdials come from on printed material.',
        'This is the code for anything read on the move: service-van decals, an emergency contact notice, a real-estate yard sign, a helpline sticker, a takeout menu.'
      ]
    },
    comparisonTable: {
      title: 'One-Tap Phone QR Code vs. Manual Phone Number Dialing',
      headers: ['Evaluation Metric', 'Phone Call QR Code', 'Manual Keypad Dialing'],
      rows: [
        ['Dialing Speed', '1 Scan + 1 Tap (< 2 seconds)', '15 - 30 seconds (Reading, memorizing, typing 10+ digits)'],
        ['Wrong Number Rate', '0% (Exact digit sequence encoded)', '15% - 20% on vehicle wraps and billboards'],
        ['Drive-By Conversion', 'High (Scannable from moving vehicle at stoplights)', 'Extremely low (Passersby cannot write numbers down)'],
        ['International Dialing', 'Encodes exact + country code automatically', 'Frequent errors with exit codes and area prefixes'],
        ['Device Integration', 'Native trigger on iOS Phone and Android Dialer', 'Requires opening Phone app and manually typing']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Full Phone Number with Country Code', description: 'Use E.164 format — +14155550199 for the US, +442071838750 for the UK — so an international caller connects without a dialling-prefix guess.' },
      { number: 2, title: 'Add Phone Icon & Customize Brand Colors', description: 'Style it in high contrast, set custom corner eyes, and put a handset icon in the middle so the scan reads as a call, not a mystery link.' },
      { number: 3, title: 'Download Vector SVG for Vehicle Wraps & Large Signage', description: 'Take the SVG for vehicle graphics, yard signs, and billboards, or a high-res PNG for flyers, magnets, and cards.' }
    ],
    features: [
      { title: 'Instant One-Tap Direct Dialing', description: 'A scan and a tap turns interest into a live call in seconds.' },
      { title: 'Eliminate Wrong Numbers & Misdials', description: 'The exact number is encoded, so nobody transposes a digit off a moving van.' },
      { title: 'Universal Device & Cellular Support', description: 'Works from the built-in camera on any smartphone with cellular service.' },
      { title: 'Permanent Lifetime Operation with Zero Fees', description: 'A static tel code with permanent validity, unlimited calls, and no monthly charge.' }
    ],
    sizingMatrix: {
      title: 'Phone Call QR Code Print Sizing Specifications',
      description: 'Phone QR codes on vehicles and outdoor signs must be scaled appropriately for long-distance optical scanning.',
      headers: ['Placement / Application', 'Expected Scan Distance', 'Minimum Recommended Size', 'Recommended Material'],
      rows: [
        ['Service Van & Truck Wraps', '3.0 m - 8.0 m (10 ft - 26 ft)', '300 mm x 300 mm (12" x 12")', 'Cast Vinyl Vehicle Wrap with UV Overlaminate'],
        ['Real Estate Yard Signs & Banners', '1.5 m - 3.0 m (5 ft - 10 ft)', '150 mm x 150 mm (6" x 6")', 'Reflective Corrugated Plastic / Aluminum'],
        ['Takeout Menus & Fridge Magnets', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Flexible Magnetic Sheet / Gloss Cardstock'],
        ['Emergency Hotline & Safety Placards', '40 cm - 80 cm (16" - 32")', '60 mm x 60 mm (2.4" x 2.4")', 'Photoluminescent / Rigid PVC Sign'],
        ['Print Magazine Ads & Postcards', '20 cm - 35 cm (8" - 14")', '25 mm x 25 mm (1.0" x 1.0")', 'Matte Heavyweight Paper']
      ]
    },
    useCases: [
      { title: 'Service Fleet Decals (Plumbing, HVAC, Electrical)', description: 'A large code on the van lets a homeowner stuck in traffic — or passing a parked truck — scan and call for service.' },
      { title: 'Real Estate Yard Signs & For-Sale Boards', description: 'A buyer standing in front of the property scans the sign and reaches the listing agent directly.' },
      { title: 'Emergency Hotlines & Security Dispatch', description: 'On a campus, a parking garage, or an industrial site, the code puts an emergency call one tap away.' },
      { title: 'Restaurant Takeout & Delivery Menus', description: 'A code on a takeout menu or a fridge magnet lets a hungry customer place a phone order on the spot.' },
      { title: 'Equipment Rental & Towing Service Stickers', description: 'A durable sticker on rental gear, a parking sign, or a storage unit gets help called fast.' }
    ],
    troubleshooting: {
      title: 'Preventing Phone Call QR Code Dialing Errors',
      points: [
        'No country code. Prefix the number with + and the country code (+1 for the US). Without it, an international roaming device cannot complete the call.',
        'Too small on a vehicle. A 50mm code cannot be read from 5 metres. On vehicle signage, go at least 300mm x 300mm.',
        'Reflective vinyl. Glossy chrome or metallic wrap glares in sunlight. Choose matte or satin.',
        'Bad extension format. For an auto-dialled extension, separate it with a comma — tel:+14155550199,102 — which inserts a two-second DTMF pause.',
        'No phone icon. A handset in the centre reassures people the scan is a call, not an unknown web link.'
      ]
    },
    faqs: [
      { q: 'Will scanning the QR code initiate the phone call immediately?', a: 'No — the phone shows the decoded number with a Call button, and the user taps to dial. That confirmation step is deliberate.' },
      { q: 'Should I include my country code in the phone number?', a: 'Always. Lead with the + and country code (+1 for the US and Canada, +44 for the UK) so every caller connects regardless of carrier or roaming state.' },
      { q: 'What happens if someone scans a Phone QR code on an iPad without a SIM card?', a: 'On a WiFi-only tablet the scan offers to place the call through FaceTime Audio, Skype, or a paired iPhone acting as a cellular relay.' },
      { q: 'Can I encode phone extensions into the QR code?', a: 'Put a comma between the main number and the extension — tel:+14155550199,104 — and the comma adds a two-second pause before the DTMF digits dial.' },
      { q: 'Do Phone QR codes expire or charge per call?', a: 'No. A static tel code carries permanent validity, no scan limit, and no per-call charge.' },
      { q: 'What vector format is best for commercial vehicle wrap printing?', a: 'The SVG — it holds vector precision when scaled to vehicle or billboard size, with no pixelation.' },
      { q: 'Can I track how many phone calls come from my QR code?', a: 'Point the code at a dedicated call-tracking number from CallRail or Twilio, assigned only to that asset, and every call through it is attributable.' },
      { q: 'Is my phone number stored on external servers during generation?', a: 'No. Generation runs entirely in your browser, so the number is never stored, logged, or shared.' }
    ],
    bestPractices: 'Use E.164 format (+1...), size the code for the viewing distance (the 10:1 rule), and add a phone icon so the scan clearly means "call".'
  },

  '/location-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of Geo URI & Google Maps Location QR Codes',
      paragraphs: [
        'A location QR code carries either a `geo:` URI (RFC 5870, `geo:<Latitude>,<Longitude>,<Altitude>`) or a direct Google Maps or Apple Maps link. A scan hands off to the native navigation app — Google Maps on Android, Apple Maps on iOS — with your destination already pinned.',
        'One tap on the prompt and the user has turn-by-turn directions from wherever they are to your door, your store, your car park entrance, or the event gate.',
        'That removes the usual failure points — a mistyped address, a misheard street name, a wrong turn — and for a pop-up shop, an open house, a wedding, or a tourist stop, it noticeably lifts foot traffic and on-time arrivals.'
      ]
    },
    comparisonTable: {
      title: 'Location QR Code Navigation vs. Manual Address Searching',
      headers: ['Factor / Metric', 'Location QR Code', 'Manual Address Search'],
      rows: [
        ['Navigation Accuracy', '100% exact pin (GPS latitude/longitude precision)', 'Frequent errors with duplicate street names & cities'],
        ['Time to Start Navigation', '1 Scan + 1 Tap (< 3 seconds)', '45 - 90 seconds (Opening maps, typing address, selecting)'],
        ['Specific Entrance Pinning', 'Pins exact parking lot or rear gate coordinates', 'Standard addresses often pin front curb or wrong street'],
        ['Cross-Platform Support', 'Opens Google Maps, Apple Maps, or Waze natively', 'Requires manual app navigation'],
        ['Offline Coordinate Storage', 'Geo URI works with offline GPS navigation apps', 'Requires active internet search to resolve address text']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Google Maps URL or Precise GPS Coordinates', description: 'Paste your Google Maps share link, or enter exact latitude and longitude (e.g. 37.7749, -122.4194) to pin a spot with no street address.' },
      { number: 2, title: 'Style with Map Pin Icon & Custom Brand Colors', description: 'Set high-contrast colours, restyle the corner eyes, and put a map pin or your venue logo in the middle.' },
      { number: 3, title: 'Download Vector SVG for Invitations & Signage', description: 'Take the SVG for posters, invitations, and road signs, or a high-res PNG for a digital event guide.' }
    ],
    features: [
      { title: 'Turn-by-Turn GPS Directions in One Tap', description: 'Guests get routed straight to you, with no address to type and no wrong turn to take.' },
      { title: 'Support for Exact Lat/Long Coordinates', description: 'Pin a festival gate, a trailhead car park, or an open-air venue that has no formal street address.' },
      { title: 'Native Integration with Google Maps & Apple Maps', description: 'Opens the default navigation app on any iOS or Android phone.' },
      { title: 'Permanent Lifetime Operation with Zero Fees', description: 'A static location code with permanent validity, unlimited scans, and no recurring fee.' }
    ],
    sizingMatrix: {
      title: 'Location QR Code Print Sizing Specifications',
      description: 'Ensure your location QR codes are easily scannable on invitations and directional signage.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Substrate'],
      rows: [
        ['Wedding & Party Invitations', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', 'Matte Heavyweight Linen Cardstock'],
        ['Directional Street Signs & Yard Signs', '1.0 m - 2.5 m (3 ft - 8 ft)', '120 mm x 120 mm (4.8" x 4.8")', 'Weatherproof Corrugated Plastic / Aluminum'],
        ['Promotional Postcards & Mailers', '25 cm - 40 cm (10" - 16")', '35 mm x 35 mm (1.4" x 1.4")', 'Matte Heavyweight Card (100 lb+)'],
        ['Tourist Guidebooks & Trailhead Placards', '30 cm - 60 cm (12" - 24")', '50 mm x 50 mm (2.0" x 2.0")', 'Anodized Aluminum / Rigid PVC'],
        ['Conference & Expo Program Booklets', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', 'Matte Coated Paper']
      ]
    },
    useCases: [
      { title: 'Wedding & Private Event Invitations', description: 'A code on the invitation routes guests straight to the ceremony and the reception, no address to decipher.' },
      { title: 'Real Estate Open Houses & Directional Signs', description: 'A code on a corner sign guides a buyer right to the open-house driveway.' },
      { title: 'Festivals, Pop-Up Markets & Food Trucks', description: 'Share an exact GPS pin for a food truck, a festival stage, or a pop-up booth that has no fixed address.' },
      { title: 'Tourism Landmarks & Trailhead Navigation', description: 'Give hikers and tourists a scannable pin for a trailhead, a viewpoint, or a historic marker.' },
      { title: 'Commercial Storefront Direct Mail Campaigns', description: 'A Maps code on a flyer walks local residents to your grand opening or your nearest branch.' }
    ],
    troubleshooting: {
      title: 'Preventing Location QR Code Navigation Failures',
      points: [
        'Truncated coordinates. Dropping decimals — 37.77 instead of 37.774929 — shifts the pin by hundreds of metres. Use 5-6 decimal places.',
        'A dead short link. A custom short link can expire; a direct Google Maps URL or a Geo URI never does. If you shorten, keep the domain live.',
        'No printed address. Put the human-readable street address under the code for anyone who prefers to check it by eye.',
        'Low contrast outdoors. Sunlight washes out weak colours. Solid black on bright white for an outdoor sign.',
        'Roadside glare. Reflective sign laminate flares under headlights and sun. Matte outdoor vinyl reads better.'
      ]
    },
    faqs: [
      { q: 'How do I obtain the correct Google Maps link for my QR code?', a: 'Open Google Maps, search your business or drop a pin, tap Share, copy the short link, and paste it in.' },
      { q: 'Can I use latitude and longitude coordinates instead of a street address?', a: 'Exact coordinates like 37.7749,-122.4194 are ideal for parks, festival grounds, and rural spots with no formal address.' },
      { q: 'Will this open Apple Maps for iPhone users and Google Maps for Android users?', a: 'A standard Maps URL or Geo URI opens whichever map app is default — Apple Maps on iOS, Google Maps on Android.' },
      { q: 'Do Location QR codes expire or charge fees?', a: 'No. A static location code keeps working for good — scan it as often as you like, with nothing to pay.' },
      { q: 'Can I embed a map pin icon in the center of the QR code?', a: 'It does. The Level H setting keeps about a third of the code in reserve, so a navigation pin or venue logo in the middle does not throw off the scan.' },
      { q: 'What is the best export format for wedding invitation printing?', a: 'Vector SVG, or a 300 DPI PNG, for stationery and cardstock printing.' },
      { q: 'Can users navigate while offline?', a: 'With Geo URI coordinates (geo:lat,lng), an offline app like maps.me or a pre-downloaded Google Maps area can navigate without cellular data.' },
      { q: 'Is my location data private during generation?', a: 'It is. Your browser does all the work, which means no coordinates or map URLs ever touch a server.' }
    ],
    bestPractices: 'Check the pin on both Apple Maps and Google Maps before printing, add a clear line like "Scan for Turn-by-Turn GPS Directions", and keep the contrast high for an outdoor read.'
  },

  '/event-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of iCalendar VEVENT Calendar QR Codes',
      paragraphs: [
        'An event QR code carries a calendar entry in the iCalendar format (`BEGIN:VEVENT` / `END:VEVENT`) defined in RFC 5545. It holds the title (`SUMMARY`), venue (`LOCATION`), description (`DESCRIPTION`), start (`DTSTART`), end (`DTEND`), and time zone.',
        'Scan it and the phone reads the payload and offers an "Add to Calendar" sheet. One tap drops the event into Apple Calendar, Google Calendar, or Outlook, complete with the start time, the venue, and the automatic reminder.',
        'Automating the calendar entry is what lifts attendance. Missed webinars, forgotten dates, and double-bookings mostly come down to someone not adding the event in the first place — and a scan takes that step off their plate.'
      ]
    },
    comparisonTable: {
      title: 'Event Calendar QR Code vs. Manual Calendar Entry',
      headers: ['Feature / Aspect', 'iCalendar Event QR Code', 'Manual Calendar Entry'],
      rows: [
        ['Calendar Addition Speed', '1 Scan + 1 Tap (< 3 seconds)', '45 - 90 seconds (Typing Title, Date, Time, Location)'],
        ['Date & Time Accuracy', '100% exact (No timezone or AM/PM mistakes)', 'Frequent human errors in date and time entry'],
        ['Automated Reminder Alerts', 'Automatically sets 15/30-min advance alerts', 'User frequently forgets to configure reminders'],
        ['Venue Address Integration', 'Embeds complete venue address and GPS link', 'User often omits venue details in manual entries'],
        ['Cross-Platform Support', 'Native on iOS Calendar, Google Calendar, Outlook', 'Manual entry required per calendar app']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Event Title, Location, and Summary Description', description: 'Add the event name, the venue address or the meeting URL, and a short description.' },
      { number: 2, title: 'Set Start & End Date and Time with Time Zone Accuracy', description: 'Set the exact start and end, in the venue\'s local time zone — that is where hour-offset mistakes creep in.' },
      { number: 3, title: 'Customize Design & Download Print Assets', description: 'Add a calendar icon or event logo, apply your colours, and export SVG for invitations or PNG for a screen.' }
    ],
    features: [
      { title: 'One-Tap Smartphone Calendar Addition', description: 'Invitees drop the event into Apple Calendar, Google Calendar, or Outlook with a single tap.' },
      { title: 'Automated Native Reminder Alerts', description: 'The calendar entry fires the phone\'s default reminder before the event starts, so nobody has to set one.' },
      { title: 'Embed Full Venue Addresses & Virtual Links', description: 'Store the driving address or the Zoom or Teams link right in the entry, so attendees have it when they need it.' },
      { title: 'Permanent Static Barcodes with Zero Expiration', description: 'A static iCalendar code that stays valid indefinitely, with no monthly fee or scan cap.' }
    ],
    sizingMatrix: {
      title: 'Event QR Code Print Sizing Specifications',
      description: 'Event QR codes have moderate data density depending on description length.',
      headers: ['Placement Medium', 'Scanning Distance', 'Minimum Print Size', 'Recommended Format'],
      rows: [
        ['Concert & Theater Tickets', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Vector SVG / 300 DPI PNG'],
        ['Wedding Invitations & Save-the-Dates', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', 'Vector SVG / Heavy Cardstock'],
        ['Conference Programs & Badge Lanyards', '25 cm - 40 cm (10" - 16")', '35 mm x 35 mm (1.4" x 1.4")', 'Vector SVG / Synthetic Badge'],
        ['Event Posters & Promotional Flyers', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', 'Vector SVG'],
        ['Keynote Slides & Webinar Closing Screens', 'Digital Display View', '250 x 250 px on screen', 'High-Res PNG @ 1080p/4K']
      ]
    },
    useCases: [
      { title: 'Concerts, Festivals & Theater Performances', description: 'A code on the ticket saves the showtime and venue to the ticket-holder\'s phone.' },
      { title: 'Weddings, Anniversaries & Private Celebrations', description: 'A Save-the-Date code books the date in a guest\'s calendar months ahead.' },
      { title: 'Corporate Conferences & Keynote Schedules', description: 'Attendees scan the agenda to add specific workshops and keynotes to their own calendars.' },
      { title: 'Webinars, Livestreams & Product Launches', description: 'A code on the promo stream lets viewers save the broadcast date on the spot.' },
      { title: 'Retail Flash Sales & Seasonal Promotions', description: 'Remind loyal customers of a holiday sale or a VIP shopping hour before it slips past.' }
    ],
    troubleshooting: {
      title: 'Preventing Event QR Code Calendar Scheduling Errors',
      points: [
        'Time-zone drift. Enter times in the venue\'s local zone, or attendees end up an hour off.',
        'A long description. Cramming a full agenda into the static field bloats the matrix. Keep it under about 150 characters.',
        'Reversed dates. Make sure the end is later than the start, or the calendar rejects the entry.',
        'Low contrast on a fancy card. Pastel or gold-foil modules on ivory fail the scan. Dark on light.',
        'No prompt. Label it — "Scan to Add Event to Calendar".'
      ]
    },
    faqs: [
      { q: 'What happens when someone scans an Event QR Code?', a: 'On iOS an "Add to Calendar" prompt opens Apple Calendar with the title, dates, venue, and description filled in. On Android it opens Google Calendar with a Save prompt.' },
      { q: 'Can I include a Zoom or Google Meet link in the event details?', a: 'Put the video link in the Location or Description field and virtual attendees will have the meeting URL right there in the calendar entry.' },
      { q: 'Will the calendar entry automatically set a reminder for the attendee?', a: 'Most calendar apps apply their default reminder — usually 15 to 30 minutes ahead — as soon as a new event is added.' },
      { q: 'Can I edit the event date or time after printing the QR Code?', a: 'Not the printed code — the date and time are fixed in the matrix. If details might move, point a URL code at an event page you control instead.' },
      { q: 'Do Event QR codes expire or charge monthly fees?', a: 'No. Once you make a static iCalendar code it is yours permanently, with no scan cap and no fee attached.' },
      { q: 'Which export format is recommended for printing on wedding stationery?', a: 'Vector SVG — it stays sharp on a commercial press, on textured linen, or on metallic cardstock.' },
      { q: 'Can I embed my wedding monogram or company logo in the QR code?', a: 'Absolutely. Level H leaves enough redundancy for a monogram or event glyph in the centre, and readers still decode it cleanly.' },
      { q: 'Is my event information private during generation?', a: 'It is. The whole thing happens on your device, so event titles and dates are never sent anywhere.' }
    ],
    bestPractices: 'Double-check every start time, end time, time zone, and venue before printing, and test the code on both an iPhone and an Android to confirm the entry saves correctly.'
  },

  '/crypto-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of Cryptocurrency Payment URI QR Codes',
      paragraphs: [
        'A crypto QR code carries a public receive address and optional payment details in a standard payment URI — Bitcoin\'s BIP-0021 (`bitcoin:<Address>?amount=<Amount>&label=<Label>`), Ethereum\'s EIP-681 (`ethereum:<Address>`), or the equivalent for USDT, Solana, and Litecoin.',
        'Crypto addresses are long, unforgiving strings of 34 to 64 characters (`bc1q...`, `0x...`). Type one by hand and a single wrong character sends the funds into the void — permanently, with no chargeback on a blockchain.',
        'A QR code removes that risk. Scan it inside MetaMask, Trust Wallet, Coinbase Wallet, Phantom, or Binance and the recipient address and amount populate exactly, which makes a point-of-sale payment, a tip jar, or an invoice settlement quick and error-free.'
      ]
    },
    comparisonTable: {
      title: 'Crypto QR Code Payment vs. Manual Address Copy-Pasting',
      headers: ['Security / Usability Factor', 'Crypto QR Code Payment', 'Manual Address Copy / Typing'],
      rows: [
        ['Address Accuracy', '100% byte-for-byte exact (Zero risk of typos)', 'High risk of transcription errors and fund loss'],
        ['Clipboard Hijacking Defense', 'Bypasses desktop/mobile clipboard malware', 'Vulnerable to malware that swaps copied addresses in clipboard'],
        ['Payment Speed', '1 Scan + Review + Confirm (< 5 seconds)', '30 - 60 seconds (Copying, pasting, verifying characters)'],
        ['Pre-Set Payment Amount', 'Auto-fills exact crypto amount in wallet', 'User must manually calculate and enter amount'],
        ['Point of Sale Integration', 'Instant tabletop or register display', 'Requires displaying 42+ character text string']
      ]
    },
    steps: [
      { number: 1, title: 'Select Cryptocurrency & Input Public Wallet Address', description: 'Choose Bitcoin (BTC), Ethereum (ETH), USDT (TRC-20/ERC-20), Solana (SOL), or Litecoin (LTC) and paste your public receive address.' },
      { number: 2, title: 'Specify Optional Fixed Payment Amount', description: 'Set a fixed amount, or leave it blank so the payer enters their own tip or donation.' },
      { number: 3, title: 'Download Vector SVG for POS Displays or Invoices', description: 'Add the coin logo and export SVG for a register stand or PNG for a PDF invoice.' }
    ],
    features: [
      { title: 'Eliminate Catastrophic Address Typing Errors', description: 'The exact address populates automatically, so a sender cannot lose funds to a mistyped character.' },
      { title: 'Support for Major Cryptocurrencies & Stablecoins', description: 'Standard payment codes for Bitcoin, Ethereum, USDT, Solana, Litecoin, and BNB.' },
      { title: 'BIP-0021 & EIP-681 Standard Compliance', description: 'Reads correctly in MetaMask, Trust Wallet, Coinbase, Phantom, and Binance.' },
      { title: '100% Client-Side Cryptographic Security', description: 'Your public address is encoded locally in your browser. Private keys are never touched or asked for.' }
    ],
    sizingMatrix: {
      title: 'Crypto QR Code Sizing & Placement Specifications',
      description: 'Crypto QR codes should be clearly displayed with visible network labels.',
      headers: ['Placement Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Substrate'],
      rows: [
        ['Point-of-Sale (POS) Cash Registers', '25 cm - 40 cm (10" - 16")', '40 mm x 40 mm (1.6" x 1.6")', 'Acrylic Countertop Stand / Metal Plate'],
        ['Content Creator Livestreams & Tip Jars', 'On-Screen Digital Display', '200 x 200 px on screen', 'High-Contrast Screen Overlay'],
        ['PDF Invoices & Freelance Billboards', '20 cm - 35 cm (8" - 14")', '30 mm x 30 mm (1.2" x 1.2")', 'Digital PDF / Vector SVG'],
        ['Charity & Non-Profit Donation Banners', '50 cm - 100 cm (20" - 40")', '80 mm x 80 mm (3.2" x 3.2")', 'Matte Vinyl Banner'],
        ['Storefront Window Stickers', '40 cm - 80 cm (16" - 32")', '60 mm x 60 mm (2.4" x 2.4")', 'Weatherproof Matte Vinyl Decal']
      ]
    },
    useCases: [
      { title: 'Retail Storefront & Restaurant POS Payments', description: 'A code at the till lets a customer pay in Bitcoin or USDT from their mobile wallet.' },
      { title: 'Content Creator & Streamer Tip Jars', description: 'A Bitcoin or Ethereum donation code sits on a livestream, a Twitch overlay, or a blog.' },
      { title: 'Freelancer & Agency Invoice Settlements', description: 'A code on the PDF invoice settles an international project fast, across borders, with no wire delay.' },
      { title: 'Charity & Humanitarian Disaster Relief', description: 'Donors give crypto directly to a transparent, auditable on-chain address.' },
      { title: 'Pop-Up Shops & Open-Air Markets', description: 'Take touchless payment at a craft fair or a food market with no merchant hardware fee.' }
    ],
    troubleshooting: {
      title: 'Critical Safety Precautions for Crypto QR Codes',
      points: [
        'Name the network. Label the code with the exact chain — "USDT (TRC-20)" versus "USDT (ERC-20)". Send across incompatible networks and the funds are gone.',
        'Public address only. A crypto code should carry your public receive address and nothing else. Never encode a private key, a seed phrase, or a recovery password.',
        'Test small first. Run one small test transaction before you approve a large print run.',
        'Skip subtle styling. Gradients or metallic inks confuse the optical sensor. Dark modules on white.',
        'Guard the display. In a public venue, a tamper-evident acrylic stand stops someone slapping a fraudulent sticker over your code.'
      ]
    },
    faqs: [
      { q: 'Is it safe to display my Crypto QR Code publicly?', a: 'Yes — it only holds your public receive address. People can send funds to your wallet, but nobody can withdraw from it. Your private keys stay entirely in your custody.' },
      { q: 'Which wallet apps can scan these Crypto QR Codes?', a: 'The standard mobile wallets all read standard URI codes — MetaMask, Trust Wallet, Coinbase Wallet, Binance, Phantom, Exodus, Kraken, Electrum.' },
      { q: 'Can I specify a fixed payment amount in the QR code?', a: 'Set an optional amount like 0.005 BTC or 50 USDT and the wallet fills it in automatically on scan.' },
      { q: 'What happens if someone sends a different cryptocurrency to my address?', a: 'Sending an incompatible coin — Bitcoin to an Ethereum address, say — can lose the funds permanently. That is exactly why the code should be labelled with the precise coin and network.' },
      { q: 'Do Crypto QR codes expire or charge transaction fees?', a: 'The code is permanent and free. Standard blockchain gas fees apply only when a payer actually submits a transaction — that is the network\'s charge, not ours.' },
      { q: 'Where do I find my public wallet receive address?', a: 'Open your wallet app, go to Receive, pick the coin, and copy the public address shown.' },
      { q: 'Can I embed the official Bitcoin or Ethereum logo in the QR code?', a: 'Sure. Because Level H can rebuild up to about 30% of a damaged code, the coin logo can sit dead centre without breaking anything.' },
      { q: 'Are my wallet addresses stored on QR Generator Online servers?', a: 'No. Everything happens locally, so your wallet addresses are never uploaded, logged, or tracked.' }
    ],
    bestPractices: 'Verify your public receive address character by character before you generate, and label the code clearly with the exact coin and blockchain network — a wrong-network transfer is unrecoverable.'
  },

  '/text-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of Plain Text & Raw UTF-8 Barcode QR Codes',
      paragraphs: [
        'A plain-text QR code writes raw string data straight into the ISO/IEC 18004 matrix using UTF-8 byte mode. Where a URL code needs the web to be useful, a text code carries its entire payload inside the pattern of black and white modules — nothing to fetch.',
        'Scan it with a phone, a handheld industrial imager, or an inventory scanner and the device decodes the bytes and shows the text on screen, or types it into connected software through keyboard emulation (HID). No browser, no cellular, no WiFi.',
        'It handles letters, numbers, punctuation, multi-language Unicode, and emojis, which makes it the workhorse for asset tracking, warehouse serial numbers, maintenance logs, escape-room clues, and offline passcodes.'
      ]
    },
    comparisonTable: {
      title: 'Plain Text QR Code vs. URL QR Code',
      headers: ['Feature / Metric', 'Plain Text QR Code', 'URL QR Code'],
      rows: [
        ['Internet Requirement', '100% Offline (Requires zero network connection)', 'Requires active internet connection to load webpage'],
        ['Device Action on Scan', 'Displays text in modal or copies to clipboard', 'Opens web browser to destination URL'],
        ['Data Location', 'Stored entirely inside physical barcode modules', 'Stored on destination web server'],
        ['Data Capacity', 'Up to 4,296 alphanumeric characters (7,089 numeric)', 'Typically 30 - 100 characters for web links'],
        ['Security & Privacy', 'Zero network footprint, zero tracking', 'Web server logs visitor IP, user-agent, and time'],
        ['Primary Use Cases', 'Asset tags, serial numbers, offline notes, clues', 'Marketing, web traffic, landing pages, menus']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Text Content, Serial Numbers, or Instructions', description: 'Type or paste your text — a serial code, a voucher number, a set of multi-line notes.' },
      { number: 2, title: 'Select Styling & Error Correction Level', description: 'Use high-contrast modules and pick Level M or Q for an asset tag, or Level H if a logo is going in the centre.' },
      { number: 3, title: 'Download Vector SVG or High-Resolution PNG', description: 'Take SVG for laser etching or thermal-label printing, or a high-res PNG for a worksheet or document.' }
    ],
    features: [
      { title: '100% Offline Operation with Zero Connectivity', description: 'Reads and shows the text instantly in a remote field site, a basement, or a secure offline facility.' },
      { title: 'Universal Support Across All 2D Barcode Scanners', description: 'Reads on Zebra, Honeywell, and Datalogic warehouse scanners as readily as on an iOS or Android camera.' },
      { title: 'Full UTF-8 Multi-Language & Emoji Encoding', description: 'Encode a foreign-language script, a maths formula, a currency symbol, or an emoji without a workaround.' },
      { title: 'Permanent Static Barcodes with Zero Expiration', description: 'A static text code stays readable for good, with no fee, cap, or renewal.' }
    ],
    sizingMatrix: {
      title: 'Plain Text QR Code Sizing & Density Specifications',
      description: 'Text QR matrix density increases with character count. Follow minimum sizing guidelines for reliable scanning.',
      headers: ['Character Payload', 'Matrix Version', 'Minimum Print Size', 'Recommended Application'],
      rows: [
        ['Short (1 - 50 characters)', 'Version 2 - 4 (25x25 - 33x33)', '20 mm x 20 mm (0.8" x 0.8")', 'Asset Labels, Serial Numbers, Part Tags'],
        ['Medium (50 - 150 characters)', 'Version 5 - 7 (37x37 - 45x45)', '30 mm x 30 mm (1.2" x 1.2")', 'Equipment Specs, Vouchers, Access Keys'],
        ['Long (150 - 300 characters)', 'Version 8 - 11 (49x49 - 61x61)', '40 mm x 40 mm (1.6" x 1.6")', 'Maintenance Logs, Instructions, Notes'],
        ['Extended (300 - 600 characters)', 'Version 12 - 16 (65x65 - 81x81)', '55 mm x 55 mm (2.2" x 2.2")', 'Detailed Procedures, Multi-line Documents'],
        ['Maximum (600+ characters)', 'Version 17+ (85x85+)', '75 mm x 75 mm (3.0" x 3.0")', 'Large Format Reference Placards']
      ]
    },
    useCases: [
      { title: 'Industrial Asset Tracking & Warehouse Serial Tags', description: 'Tag machinery, server racks, and inventory bins with scannable serial numbers and service dates.' },
      { title: 'Educational Quizzes & Classroom Treasure Hunts', description: 'Hide answers, worked solutions, and puzzle clues on printed worksheets for students to scan offline.' },
      { title: 'Event Vouchers, Coupons & Single-Use Access Codes', description: 'Print a unique text code on a ticket for staff to verify on a handheld scanner with no WiFi.' },
      { title: 'Escape Room Puzzles & Interactive Exhibits', description: 'Embed a riddle, a decipher key, or a lore clue into a museum display or an escape-room prop.' },
      { title: 'Offline Security Passphrases & Recovery Keys', description: 'Store an encrypted backup key or a config passphrase on a physical metal backup plate.' }
    ],
    troubleshooting: {
      title: 'Troubleshooting Plain Text QR Code Scanning Issues',
      points: [
        'Too much text. 1,000+ characters makes a dense matrix of tiny dots. Keep it under about 300 characters for a fast scan.',
        'A stray URL prefix. If the text starts with http:// or https://, the camera treats it as a web link. Drop the prefix if you want raw text.',
        'A worn printhead. A low-quality direct-thermal printer bleeds the module edges. Use a good thermal-transfer ribbon.',
        'A clipped quiet zone. Keep the full 4-module blank border on every side of an asset label.',
        'Curved surfaces. A dense sticker on a narrow pipe or bottle warps the matrix. Run the code along the flat vertical axis.'
      ]
    },
    faqs: [
      { q: 'How many characters can I encode in a single Plain Text QR Code?', a: 'Technically up to 4,296 alphanumeric characters or 7,089 digits — but for a quick, reliable scan at normal sizes, keep it under about 300.' },
      { q: 'Does scanning a Plain Text QR code require an internet connection?', a: 'No. The whole payload lives in the barcode, so it scans and displays fully offline, with no cellular data or WiFi.' },
      { q: 'What happens on a smartphone when a user scans a Text QR code?', a: 'The camera app shows the decoded text in a system dialog, with options to copy it to the clipboard or run a web search on it.' },
      { q: 'Can I encode special characters, foreign language scripts, and emojis?', a: 'Full UTF-8 byte encoding is supported, so Japanese, Arabic, Cyrillic, maths symbols, and emojis all encode fine.' },
      { q: 'Do Plain Text QR codes expire or charge fees?', a: 'No. A static text code has no expiry date and no scan limit, and it costs nothing to keep using.' },
      { q: 'Are Text QR codes compatible with industrial barcode scanners?', a: 'Every standard 2D imager — Zebra, Honeywell, Datalogic — reads them and sends the decoded characters straight to the connected terminal software.' },
      { q: 'What file format is best for thermal barcode label printers?', a: 'Vector SVG or a high-res PNG. The SVG renders at full precision in commercial thermal-label software.' },
      { q: 'Is the encoded text data kept private during generation?', a: 'It is. Nothing leaves the page, so no text is transmitted or stored on a server.' }
    ],
    bestPractices: 'Keep the text short to hold the module density down, use solid black on white, and leave the mandatory 4-module quiet zone on every asset tag.'
  },

  '/googleform-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Overview of Google Forms Survey & Feedback QR Codes',
      paragraphs: [
        'A Google Forms QR code carries the direct link to a published form — a satisfaction survey, an event RSVP, a classroom quiz. Scan it, and the responsive form loads right in the phone browser — no long, error-prone URL to type off a receipt.',
        'Typing a URL is where feedback response rates collapse, dropping by well over 80%. A code removes that step: the respondent scans, taps through the questions, and submits in seconds.',
        'Everything they submit flows straight into your Google Forms dashboard and the linked Google Sheet in real time, ready for live charts, automated alerts, and any Zapier or webhook you have wired up.'
      ]
    },
    comparisonTable: {
      title: 'Google Forms QR Code vs. Traditional Paper Feedback Forms',
      headers: ['Evaluation Factor', 'Google Forms QR Code', 'Paper Feedback Forms'],
      rows: [
        ['Data Collection Speed', 'Instant real-time entry into Google Sheets', 'Hours/days of manual data entry by staff'],
        ['Customer Completion Rate', 'High (Frictionless mobile form interface)', 'Low (Requires finding pen, handwriting responses)'],
        ['Transcription Errors', '0% (User enters data directly)', 'High (Misreading illegible handwriting)'],
        ['Environmental Waste', 'Zero paper waste (Unlimited digital submissions)', 'Thousands of discarded paper survey sheets'],
        ['Real-Time Alert Automation', 'Triggers instant email alerts on negative reviews', 'Delayed by days until staff manually reviews paper']
      ]
    },
    steps: [
      { number: 1, title: 'Obtain & Paste Your Published Google Form Link', description: 'In Google Forms, click the purple Send button, choose the link icon, tick "Shorten URL", and paste the result in.' },
      { number: 2, title: 'Style with Google Forms Purple & Embed Brand Logo', description: 'Style the modules, apply Google Forms purple (#7248B9) or your own colours, and set an icon in the middle.' },
      { number: 3, title: 'Download Vector SVG for Table Displays & Signage', description: 'Take SVG for table tents, receipts, and classroom posters, or PNG for a presentation slide.' }
    ],
    features: [
      { title: 'Drive Explosive Survey & Review Response Rates', description: 'Capture feedback while the meal or the visit is still fresh — no URL to type kills the drop-off.' },
      { title: 'Real-Time Sync with Google Sheets & Dashboards', description: 'Every submission lands in your linked spreadsheet instantly for live analysis and alerts.' },
      { title: 'Touchless, Hygienic Mobile Data Entry', description: 'No shared clipboards or pens in a clinic, a restaurant, or a classroom — people use their own phone.' },
      { title: 'Permanent Lifetime Validity with Zero Fees', description: 'A static Forms code with no expiry that collects unlimited responses at no cost.' }
    ],
    sizingMatrix: {
      title: 'Google Forms QR Code Sizing & Placement Guide',
      description: 'Place your Google Forms QR codes where customers have downtime to complete short questionnaires.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Restaurant Table Tents & Receipt Footers', '25 cm - 40 cm (10" - 16")', '30 mm x 30 mm (1.2" x 1.2")', '"Scan to Rate Your Meal & Win $50"'],
        ['Retail Checkout Counters & Bag Inserts', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to Leave Quick Feedback"'],
        ['Classroom Presentation Slides & Whiteboards', '1.0 m - 3.0 m (3 ft - 10 ft)', '150 mm x 150 mm (6" x 6")', '"Scan to Submit Daily Quiz Answers"'],
        ['Event Registration Banners & Posters', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', '"Scan to Complete Fast Event Check-In"'],
        ['Medical Clinic Waiting Rooms & Desks', '30 cm - 60 cm (12" - 24")', '45 mm x 45 mm (1.8" x 1.8")', '"Scan to Complete Digital Intake Form"']
      ]
    },
    useCases: [
      { title: 'Restaurant & Hospitality Guest Satisfaction Surveys', description: 'A table-card code asks diners to rate the service and the food in under a minute.' },
      { title: 'Classroom Quizzes, Attendance & Student Polls', description: 'A teacher projects a Forms code so students scan to submit homework, quizzes, or attendance.' },
      { title: 'Trade Show Booth Lead Capture & Inquiries', description: 'Collect a visitor\'s interests and contact details straight into a spreadsheet from their own phone.' },
      { title: 'Event RSVP & Workshop Registrations', description: 'A poster code lets attendees register for breakout sessions and meals on the spot.' },
      { title: 'Healthcare Patient Intake & Health Screenings', description: 'Patients complete a check-in questionnaire touchlessly on their own phone in the waiting room.' }
    ],
    troubleshooting: {
      title: 'Avoiding Google Forms QR Code Scanning & Access Issues',
      points: [
        'A forced login. Unless you truly need it, switch off "Limit to 1 response" in Form settings — it forces a Google sign-in that adds friction.',
        'The wrong link. Copy the public link from the purple Send dialog, not the /edit URL from your browser bar.',
        'An unshortened URL. A raw Forms URL is very long. Tick "Shorten URL" in Forms first for a cleaner, less dense matrix.',
        'Too many questions. Keep a mobile QR survey to five questions or fewer to hold completion up.',
        'A closed form. If you toggle off "Accepting responses", scanners hit a closed-form message. Leave it open through the campaign.'
      ]
    },
    faqs: [
      { q: 'How do I obtain the correct public Google Form link for my QR code?', a: 'Open the form, click the purple Send button, choose the Link icon, tick "Shorten URL", and copy the result to paste in.' },
      { q: 'Do respondents need a Google account to fill out the form?', a: 'Not as long as you have turned off "Limit to 1 response" and any file-upload questions. Then anyone completes it in a mobile browser with no login.' },
      { q: 'Do Google Forms QR codes expire or charge fees?', a: 'No. A static Forms code never lapses; respondents can scan it without limit and you are never billed.' },
      { q: 'Can I link to a Google Form that automatically populates certain fields?', a: 'In Forms, use the three-dot menu > "Get pre-filled link", set your defaults, copy that link, and generate the code from it. Scanners then see those fields already filled.' },
      { q: 'Where do the submitted responses go?', a: 'Into the Responses tab and, in real time, into whatever Google Sheet you have linked.' },
      { q: 'Can I embed my school or company logo in the QR code?', a: 'You can. Level H redundancy comfortably covers a Forms icon, or your own logo, placed in the middle.' },
      { q: 'What file format is best for printing table tents and flyers?', a: 'Vector SVG for crisp print, or a high-res PNG for a presentation slide.' },
      { q: 'Is my survey link data kept private during generation?', a: 'It is. The work is done client-side, so no form URLs or survey data are uploaded or stored.' }
    ],
    bestPractices: 'Keep the survey to three to five questions, use the shortened Forms URL for a simpler matrix, and offer a small incentive — a discount, a raffle entry — to lift completion.'
  },

  '/instagram-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of Instagram QR Codes',
      paragraphs: [
        'An Instagram QR code carries a universal link in the form `https://instagram.com/{username}`. Scan it and the phone resolves the native app scheme (`instagram://user?username={username}`), opening the profile inside the Instagram app rather than a browser.',
        'Because the user is already signed in to their app, that handoff skips the login step entirely — they land on your profile ready to tap Follow or scroll your Reels.',
        'The codes are permanent and static, built at Level H (30% redundancy). Style one in the Instagram gradient (#E1306C, #F77737, #FCAF45) and set the camera glyph or your own logo in the centre.'
      ]
    },
    comparisonTable: {
      title: 'Direct Instagram QR Code vs. Manual Handle Search vs. Linktree',
      headers: ['Feature / Aspect', 'Instagram QR (QR Generator Online)', 'Manual Handle Search', 'Linktree Landing Page'],
      rows: [
        ['Conversion Friction', 'Zero friction (1 scan → Instant profile)', 'High (Typing typos, multiple lookalikes)', 'Medium (Additional click required)'],
        ['App Launch Speed', 'Instant native Instagram app launch', 'Manual app open + search query', 'Opens browser first, then app hop'],
        ['Offline Scannability', '100% scannable from print & displays', 'Requires user to remember username', 'Requires multi-step navigation'],
        ['Branding Customization', 'Full gradient color matching & logo', 'No visual branding', 'Third-party branding template'],
        ['Lifetime Validity', 'Permanent lifetime validity (0 fees)', 'Permanent', 'Subject to service availability']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Instagram Handle or Profile URL', description: 'Type your username without the @ (e.g. yourbrand), or paste the full profile link.' },
      { number: 2, title: 'Apply Instagram Gradient Colors & Logo', description: 'Use the Instagram gradient, pick a dot style, and set the camera logo in the centre.' },
      { number: 3, title: 'Download Vector SVG for Print or High-Res PNG', description: 'Take SVG for tags, stickers, packaging, and signage, or a high-res PNG for digital.' }
    ],
    features: [
      { title: 'Native App Deep-Linking', description: 'A scan drops the user into the installed Instagram app for a one-tap follow.' },
      { title: 'Permanent & Unlimited Scans', description: 'A static Instagram code with no expiry date and no scan limit, free.' },
      { title: 'Vector SVG for Physical Print', description: 'Scales from a 2 cm product tag to a trade-show banner with no blur.' },
      { title: '100% Privacy & Zero Tracking', description: 'Everything runs client-side, with no tracking, no logging, and no login.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Recommended Placement for Instagram QR Codes',
      description: 'Follow the optical scanning rule S = D / 10 to ensure instant scannability across all lighting conditions.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Product Packaging & Box Flaps', '20 cm - 40 cm (8" - 16")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan to Tag Us on Instagram"'],
        ['Apparel Tags & Clothing Labels', '15 cm - 30 cm (6" - 12")', '22 mm x 22 mm (0.9" x 0.9")', '"Scan & Follow for Giveaways"'],
        ['Restaurant Table Cards & Menus', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to View Daily Food Specials"'],
        ['Storefront Windows & Cash Wraps', '50 cm - 100 cm (20" - 40")', '60 mm x 60 mm (2.4" x 2.4")', '"Follow Us for Exclusive In-Store Deals"'],
        ['Event Banners & Stage Backdrops', '2.0 m - 5.0 m (6.5 ft - 16 ft)', '300 mm x 300 mm (12" x 12")', '"Scan to Share Your Event Photos"']
      ]
    },
    useCases: [
      { title: 'E-Commerce Unboxing Experiences', description: 'A code on the packing slip nudges buyers to post a photo and tag your brand.' },
      { title: 'Restaurant & Cafe Table Signage', description: 'Diners jump straight to your photo menu, food reels, and story highlights.' },
      { title: 'Beauty Salons & Fitness Studios', description: 'Show before-and-after transformations and workout reels to clients waiting in reception.' },
      { title: 'Fashion & Apparel Merchandising', description: 'A hangtag code opens styling ideas and real customer lookbooks for a shopper.' },
      { title: 'Artist & Creator Exhibitions', description: 'A code beside the artwork lets a gallery visitor follow the creative journey in real time.' }
    ],
    troubleshooting: {
      title: '5 Common Instagram QR Code Scanning Issues & Fixes',
      points: [
        'An @ in the handle. Enter the username without the "@" (use "brandname", not "@brandname") for a valid URL.',
        'A private account. If the profile is private, scanners have to request a follow rather than seeing the grid straight away.',
        'Low contrast. A light-pink foreground on white leaves the camera nothing to lock onto. Keep the contrast high.',
        'An oversized logo. Keep it under 30% of the code width and error correction can still do its job.',
        'A handle change. Rename your account and every printed code breaks. Lock the handle before a mass print.'
      ]
    },
    faqs: [
      { q: 'How do I create a QR code for my Instagram profile?', a: 'Enter your username without the @ (or paste your profile URL), set your colours and logo, and download it — free.' },
      { q: 'Does scanning open the Instagram app directly?', a: 'On a modern iPhone or Android the universal link opens your profile inside the Instagram app rather than a browser.' },
      { q: 'Can I add an Instagram logo to the QR code?', a: 'Level H gives you room for the camera glyph, or your own icon, over the centre.' },
      { q: 'Do Instagram QR codes expire?', a: 'No — a static code is permanent, with unlimited scans.' },
      { q: 'Can I link to a specific Instagram Reel or Post?', a: 'Copy the URL of the Reel or post and paste the full link in.' },
      { q: 'What is the best format for printing stickers and packaging?', a: 'Vector SVG for a commercial press and sticker die-cutter, or PNG for digital.' },
      { q: 'Is this Instagram QR code maker free for commercial use?', a: 'It is — no watermark, no scan limit, no subscription.' },
      { q: 'What contrast ratio should I use for Instagram QR codes?', a: 'At least 4.5:1 between the modules and the background. Dark magenta or purple on white or light yellow scans very cleanly.' }
    ],
    bestPractices: 'Use the Instagram gradient for instant recognition, add a clear "Scan to Follow Us" line, and test the print under a few different lights before a volume run.'
  },

  '/youtube-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of YouTube QR Codes',
      paragraphs: [
        'A YouTube QR code carries a standard YouTube URL — `https://youtube.com/@channel`, `https://youtu.be/{videoId}`, or a playlist link. Scan it and the phone maps the HTTPS link to the YouTube app intent (`vnd.youtube:{videoId}`), so playback starts inside the app with no browser detour.',
        'That handoff gives the best viewing experience: the user can like, comment, and subscribe on the spot, and stream in HD or 4K under their own logged-in account.',
        'The code stores the exact canonical video or channel address in the matrix, so it stays valid the whole time the content is up.'
      ]
    },
    comparisonTable: {
      title: 'YouTube QR Codes vs. Manual Video Search vs. Video Embeds',
      headers: ['Feature', 'YouTube QR Code', 'Manual Search', 'Web Video Embed'],
      rows: [
        ['User Effort', '1 Camera Scan (Instant playback)', 'High (Typing keywords & finding video)', 'Medium (Must browse website)'],
        ['App Integration', 'Direct native YouTube app launch', 'Manual search navigation', 'Web browser player (Limited engagement)'],
        ['Conversion to Subscriptions', 'High (Native 1-tap subscribe)', 'Low (Competitor distraction in search)', 'Low (Requires opening app separately)'],
        ['Print Compatibility', '100% print-ready (Flyers, posters, cards)', 'N/A', 'N/A (Digital only)'],
        ['Lifetime Cost', '100% Free & Unlimited', 'Free', 'Hosting fees']
      ]
    },
    steps: [
      { number: 1, title: 'Paste YouTube Video, Channel, or Playlist Link', description: 'Copy your public channel, video, or playlist URL and paste it in.' },
      { number: 2, title: 'Customize with YouTube Red & Play Icon', description: 'Use YouTube red (#FF0000), pick a dot pattern, and set the play logo in the centre.' },
      { number: 3, title: 'Download in SVG or PNG Format', description: 'Take SVG for posters, banners, and packaging, or a high-res PNG for a slide.' }
    ],
    features: [
      { title: 'Direct Native App Video Launch', description: 'Opens the video or channel in the YouTube app, where engagement runs highest.' },
      { title: 'Permanent & Unlimited Scans', description: 'A static code that runs forever and handles any number of views, free.' },
      { title: 'Vector SVG for Large Format Print', description: 'Scales to a conference banner, a billboard, or a stage backdrop with no blur.' },
      { title: 'Privacy-First Architecture', description: 'Made on your device, with no tracking or profiling.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Recommendations for YouTube QR Codes',
      description: 'Calculate minimum print size using S = D / 10 for rapid camera recognition.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Product Setup Manuals & Guides', '20 cm - 40 cm (8" - 16")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan for Step-by-Step Video Setup"'],
        ['Conference Presentation Slides', '2.0 m - 5.0 m (6.5 ft - 16 ft)', '250 mm x 250 mm (10" x 10")', '"Scan to Watch Recording & Subscribe"'],
        ['Concert & Music Promotional Posters', '50 cm - 150 cm (20" - 60")', '80 mm x 80 mm (3.2" x 3.2")', '"Scan to Watch Official Music Video"'],
        ['Event Stage Banners & Backdrops', '3.0 m - 8.0 m (10 ft - 26 ft)', '400 mm x 400 mm (16" x 16")', '"Scan to Stream Live Keynote"'],
        ['Direct Mail Postcards & Brochures', '25 cm - 40 cm (10" - 16")', '30 mm x 30 mm (1.2" x 1.2")', '"Scan for Video Demonstration"']
      ]
    },
    useCases: [
      { title: 'Product Assembly & Setup Video Manuals', description: 'A packaging code swaps a confusing paper booklet for a clear step-by-step video.' },
      { title: 'Keynote Presentations & Slide Decks', description: 'A closing-slide code lets the room subscribe or rewatch the demo.' },
      { title: 'Music & Film Entertainment Marketing', description: 'A code on an album cover, a concert flyer, or a movie poster streams the trailer or the music video.' },
      { title: 'Real Estate Video Property Tours', description: 'A yard-sign code opens a cinematic walkthrough for a passing buyer.' },
      { title: 'Culinary Packaging & Recipe Tutorials', description: 'An ingredient-pack code leads to a cooking tutorial.' }
    ],
    troubleshooting: {
      title: '5 Common YouTube QR Code Issues & Solutions',
      points: [
        'A private video. Set it to Public or Unlisted so every scanner can watch.',
        'Age gating. An age-restricted video asks the viewer to log in first, which adds friction.',
        'A temporary playlist link. Use a permanent public playlist URL, not a transient queue link.',
        'Low contrast. Skip light red on pink; keep the red foreground against a white background.',
        'A long share link. Use the shortened youtu.be form for a cleaner, less dense code.'
      ]
    },
    faqs: [
      { q: 'How do I link a QR code to my YouTube channel?', a: 'Copy your channel URL (e.g. https://youtube.com/@channel), paste it in, style it, and download.' },
      { q: 'Can I create a QR code that auto-prompts users to subscribe?', a: 'Add ?sub_confirmation=1 to your channel URL — https://youtube.com/@channel?sub_confirmation=1 — and the scan pops a subscribe prompt.' },
      { q: 'Does scanning open the native YouTube app on mobile?', a: 'On mobile it launches the YouTube app straight to the video or channel.' },
      { q: 'Can I link to a specific timestamp in a YouTube video?', a: 'Add ?t=1m30s to the video URL to start playback at one minute thirty.' },
      { q: 'Do YouTube QR codes expire?', a: 'No — it keeps pointing to the video for as long as the video is up.' },
      { q: 'Can I add a YouTube play icon to the center?', a: 'Set a play button or your channel avatar in the centre, and Level H correction covers it.' },
      { q: 'Are there any scan limits on free YouTube QR codes?', a: 'None. Every code here takes unlimited lifetime scans, free.' },
      { q: 'What file formats are available for download?', a: 'High-resolution PNG, vector SVG, and WebP.' }
    ],
    bestPractices: 'Add a clear line like "Scan to Watch Video Tutorial", use the shortened youtu.be link for a simpler matrix, and test the scan from the distance people will actually stand at.'
  },

  '/linkedin-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture of LinkedIn Profile QR Codes',
      paragraphs: [
        'A LinkedIn QR code carries the public profile URI (`https://www.linkedin.com/in/{profileId}`) or a company page URL (`https://www.linkedin.com/company/{companyId}`). One scan jumps the phone straight into the LinkedIn app at that profile.',
        'That direct launch is what makes it useful at a conference or a client meeting — a one-tap connection request, a message, or a follow, without spelling a name into a search box.',
        'The code is static and permanent, so a printed business card or a portfolio piece still scans however long you carry it around.'
      ]
    },
    comparisonTable: {
      title: 'LinkedIn QR Codes vs. Paper Business Cards vs. NFC Cards',
      headers: ['Feature', 'LinkedIn QR Code', 'Paper Business Card', 'NFC Smart Card'],
      rows: [
        ['Connection Speed', 'Instant (1 Scan → 1 Tap Connect)', 'Slow (Manual typing required later)', 'Fast (Tap phone)'],
        ['Cost per Contact', '$0.00 (Free & Unlimited)', 'High ongoing printing costs', '$20 - $50 hardware cost'],
        ['Information Freshness', 'Always real-time & up-to-date', 'Static (Outdated if info changes)', 'Dependent on app portal'],
        ['Device Compatibility', '100% of all smartphone cameras', 'N/A', 'Requires NFC-enabled devices'],
        ['Networking Retention', 'High (Saved directly in LinkedIn network)', 'Low (88% of paper cards thrown away)', 'Medium']
      ]
    },
    steps: [
      { number: 1, title: 'Copy Your Public LinkedIn Profile URL', description: 'Open your profile, copy the public link (e.g. linkedin.com/in/yourname), and paste it in.' },
      { number: 2, title: 'Style with Professional LinkedIn Blue', description: 'Use LinkedIn blue (#0A66C2), set clean corner shapes, and add the "in" logo.' },
      { number: 3, title: 'Download Print-Ready Vector SVG', description: 'Take SVG for embossed business cards, conference badges, resumes, and portfolios.' }
    ],
    features: [
      { title: 'Direct LinkedIn Mobile App Launch', description: 'A scan opens the LinkedIn app for a one-tap connection request.' },
      { title: 'Permanent & Free Forever', description: 'A static code that stays valid indefinitely, with unlimited connections and no fee.' },
      { title: 'Vector SVG for Luxury Print', description: 'Sharp on matte, foil-stamped, and embossed card stocks.' },
      { title: '100% Private & Secure', description: 'No credentials or personal data collected — the encoding runs in your browser.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for LinkedIn QR Codes',
      description: 'Follow standard optical sizing benchmarks for professional stationery and badges.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Business Cards (Back Side)', '15 cm - 30 cm (6" - 12")', '22 mm x 22 mm (0.9" x 0.9")', '"Scan to Connect on LinkedIn"'],
        ['Conference Badges & Lanyards', '30 cm - 60 cm (12" - 24")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to Connect"'],
        ['Printed Resumes & CVs', '20 cm - 40 cm (8" - 16")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan to View Recommendations"'],
        ['Trade Show Booth Backdrop', '1.5 m - 3.0 m (5 ft - 10 ft)', '200 mm x 200 mm (8" x 8")', '"Scan to Follow Company Page"'],
        ['Executive Email Signatures', 'Digital Screen', '120 px x 120 px', '"Connect on LinkedIn"']
      ]
    },
    useCases: [
      { title: 'Executive & Entrepreneur Business Cards', description: 'A code on the back of the card turns a first meeting into a saved connection.' },
      { title: 'Conference Badges & Networking Mixers', description: 'A badge code lets people connect in seconds during a networking break.' },
      { title: 'Job Applicant Resumes & Portfolios', description: 'A resume code lets a hiring manager pull up your recommendations and portfolio without typing.' },
      { title: 'Trade Show B2B Lead Generation', description: 'A booth code encourages corporate visitors to follow the company page.' },
      { title: 'Speaker Presentation Slide Decks', description: 'A closing-slide code lets the audience connect and stay in touch.' }
    ],
    troubleshooting: {
      title: '5 Best Practices for LinkedIn QR Scannability',
      points: [
        'A clean custom URL. Set a tidy public URL — linkedin.com/in/john-doe — rather than a long random string, and the matrix is simpler.',
        'Public visibility. Turn on public profile visibility so a scanner without a LinkedIn account can still see your details.',
        'Strong contrast. Dark blue or black on white paper reads reliably in a dim conference hall.',
        'A clear quiet zone. Leave a clean border with no text or graphics overlapping it.',
        'A readable CTA. Pair the code with a legible "Scan to Connect on LinkedIn".'
      ]
    },
    faqs: [
      { q: 'How do I find my public LinkedIn profile link?', a: 'View your profile and copy the URL from the browser bar, or from the "Contact info" section.' },
      { q: 'Does scanning open the LinkedIn app on mobile?', a: 'It launches the LinkedIn app straight to your profile page.' },
      { q: 'Can I add a LinkedIn QR code to my printed resume?', a: 'It lets a recruiter open your recommendations, portfolio, and full history in one tap.' },
      { q: 'Do LinkedIn QR codes expire?', a: 'No. It stays valid for as long as your profile URL does.' },
      { q: 'Can I create a QR code for a LinkedIn Company Page?', a: 'Paste the company page URL (e.g. https://www.linkedin.com/company/yourbrand) and generate.' },
      { q: 'Can I embed the LinkedIn logo in the center?', a: 'Set the "in" logo or your headshot in the middle, and Level H correction covers it.' },
      { q: 'What is the recommended size for business cards?', a: 'At least 20 x 20 mm (0.8 x 0.8 inches) with sharp contrast.' },
      { q: 'Is this LinkedIn QR generator free?', a: 'It is — unlimited scans, no watermark, no sign-up.' }
    ],
    bestPractices: 'Set a clean custom LinkedIn URL for a simpler matrix, print at 22x22mm or larger on a card, and use LinkedIn blue (#0A66C2) on white.'
  },

  '/twitter-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture of Twitter / X QR Codes',
      paragraphs: [
        'A Twitter / X QR code carries the profile link (`https://x.com/{handle}` or `https://twitter.com/{handle}`). Scan it and the phone\'s universal link handler opens the X app straight to that profile or post.',
        'From there a user can follow, like a tweet, join a Space, or jump into a hashtag thread with no typing in between.',
        'These codes are static and never expire — full colour control, custom eye shapes, and vector SVG export for print.'
      ]
    },
    comparisonTable: {
      title: 'Twitter QR Code vs. Manual Handle Search vs. Social Links',
      headers: ['Feature', 'Twitter / X QR Code', 'Manual Search', 'Generic Link'],
      rows: [
        ['Conversion Speed', '1 Scan → Instant Profile Launch', 'Slow & error-prone', 'Opens browser first'],
        ['App Launch', 'Direct native X app launch', 'Manual app search', 'Browser redirection'],
        ['Print Ready', '100% Vector SVG & PNG', 'N/A', 'N/A'],
        ['Lifetime Scans', 'Unlimited & Permanent', 'Unlimited', 'May expire'],
        ['Cost', '$0.00 Free', 'Free', 'Varies']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Your Twitter/X Handle or URL', description: 'Type the handle without the @, or paste the full x.com or twitter.com link.' },
      { number: 2, title: 'Style & Add X or Bird Logo', description: 'Set the colours, dot pattern, and corner shapes, and add the X or bird logo in the centre.' },
      { number: 3, title: 'Download in SVG or PNG', description: 'Export the high-res code for flyers, slides, books, or merch.' }
    ],
    features: [
      { title: 'Direct X App Launch', description: 'Opens the X app straight to your profile for a one-tap follow.' },
      { title: 'Permanent & Free Forever', description: 'A static code with no expiry, open to any number of scans, at no charge.' },
      { title: 'Vector SVG for Print', description: 'Scales to a conference banner, a book jacket, or a poster.' },
      { title: '100% Private', description: 'Generated locally, with no data harvesting.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Benchmarks for Twitter / X QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Book Covers & Magazine Ads', '20 cm - 40 cm (8" - 16")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan to Follow on X"'],
        ['Conference Slides & Decks', '2.0 m - 5.0 m (6.5 ft - 16 ft)', '200 mm x 200 mm (8" x 8")', '"Scan to Join the Discussion on X"'],
        ['Product Packaging & Inserts', '20 cm - 35 cm (8" - 14")', '25 mm x 25 mm (1.0" x 1.0")', '"Follow Us for Updates & Giveaways"'],
        ['Event Badges & Lanyards', '30 cm - 50 cm (12" - 20")', '30 mm x 30 mm (1.2" x 1.2")', '"Scan to Connect on X"']
      ]
    },
    useCases: [
      { title: 'Keynote Presentations & Webinars', description: 'A closing-slide code drives live audience engagement.' },
      { title: 'Author Books & Printed Articles', description: 'On a book jacket or an article, a code lets readers follow your real-time commentary.' },
      { title: 'Podcast Cover Art & Merch', description: 'Send listeners into a live X discussion or a community space.' },
      { title: 'Event Signage & Meetup Badges', description: 'Trade profiles instantly at a tech meetup or a conference.' }
    ],
    troubleshooting: {
      title: '5 Common Twitter / X QR Code Pitfalls',
      points: [
        'An @ in the URL. Enter the raw handle ("handle", not "@handle") so the URL forms correctly.',
        'Either domain works. Both x.com and twitter.com are supported and redirect to your profile.',
        'Contrast. Keep dark modules against a white or light background.',
        'Logo size. Anything past about 30% of the width starts to defeat Level H correction.',
        'Test first. Scan on both iOS and Android before a mass print.'
      ]
    },
    faqs: [
      { q: 'How do I create a QR code for Twitter / X?', a: 'Type your handle or paste your profile link, style it, and download.' },
      { q: 'Does it support both x.com and twitter.com?', a: 'Both URLs are supported and resolve to your profile.' },
      { q: 'Does scanning open the X app on mobile?', a: 'On a device with the X app installed, the scan opens your profile in the app.' },
      { q: 'Can I link to a specific Tweet or Thread?', a: 'Copy the tweet URL and paste it in.' },
      { q: 'Do Twitter QR codes expire?', a: 'No — a static code works indefinitely.' },
      { q: 'Can I embed an X or Twitter logo in the center?', a: 'Upload the X icon or the bird logo for the centre.' },
      { q: 'What file formats can I download?', a: 'High-resolution PNG, vector SVG, and WebP.' },
      { q: 'Is there any fee or scan limit?', a: 'None — free, unlimited scans, no watermark.' }
    ],
    bestPractices: 'Use clean high-contrast black-and-white styling with the X logo, add a "Scan to Follow on X" line, and export vector SVG for print.'
  },

  '/tiktok-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & Viral Growth via TikTok QR Codes',
      paragraphs: [
        'A TikTok QR code carries the profile URI (`https://www.tiktok.com/@{username}`) or a video link. A scan drops the phone into the TikTok app on the creator profile.',
        'That skips the login and the search, so a viewer follows, likes, or jumps into a hashtag challenge with one tap.',
        'Static, permanent codes with no scan cap and full vector SVG export.'
      ]
    },
    comparisonTable: {
      title: 'TikTok QR Code vs. Manual Search vs. In-App QR Code',
      headers: ['Feature', 'QR Generator Online TikTok QR', 'Manual Handle Search', 'In-App TikCode'],
      rows: [
        ['Customization Options', 'Full color palettes, dot styles, SVG', 'None', 'Fixed in-app template only'],
        ['Vector SVG Print Export', 'Yes (Infinitely scalable vector SVG)', 'N/A', 'Low-res raster image only'],
        ['Direct Native App Launch', 'Yes (Instant profile handoff)', 'Manual typing required', 'Yes'],
        ['Permanent & Free', '100% Free forever with no limits', 'Free', 'Requires app access'],
        ['Custom Logo Embedding', 'Yes (Embed your brand icon)', 'No', 'TikTok logo only']
      ]
    },
    steps: [
      { number: 1, title: 'Enter TikTok Username or Link', description: 'Type your handle without the @ (e.g. username), or paste the full profile URL.' },
      { number: 2, title: 'Apply TikTok Vibrant Neon Colors', description: 'Use TikTok cyan (#00F2EA) and magenta (#FF0050), pick a dot pattern, and add the TikTok logo.' },
      { number: 3, title: 'Download in SVG or PNG', description: 'Export the high-res code for stickers, flyers, tags, and merch.' }
    ],
    features: [
      { title: 'Direct TikTok App Launch', description: 'A scan opens the TikTok app straight to your profile for a one-tap follow.' },
      { title: 'Permanent & Free Forever', description: 'A static code that never lapses and accepts unlimited scans for free.' },
      { title: 'Vector SVG for Apparel & Print', description: 'Scalable vector output for screen-printing on hoodies, stickers, and posters.' },
      { title: '100% Privacy Protection', description: 'Rendered on your device, nothing tracked.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for TikTok QR Codes',
      description: 'Calculate minimum print size using S = D / 10 for rapid camera recognition.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Merchandise & Apparel Tags', '15 cm - 30 cm (6" - 12")', '22 mm x 22 mm (0.9" x 0.9")', '"Scan to Follow on TikTok"'],
        ['Vinyl Stickers & Decals', '20 cm - 40 cm (8" - 16")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan for Viral TikTok Reels"'],
        ['Restaurant Table Tents & Menus', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to Tag Us on TikTok"'],
        ['Event Stage Banners & Posters', '1.0 m - 3.0 m (3 ft - 10 ft)', '150 mm x 150 mm (6" x 6")', '"Scan to Join the Challenge"']
      ]
    },
    useCases: [
      { title: 'Clothing & Merchandise Tags', description: 'A hangtag code turns a buyer into a follower.' },
      { title: 'Stickers & Street Marketing', description: 'Branded stickers with your code drive organic local discovery.' },
      { title: 'Restaurant & Retail Displays', description: 'A code nudges shoppers to film a review and tag your brand for a discount.' },
      { title: 'Concerts & Festival Signage', description: 'A large code at a live event promotes the hashtag challenge.' }
    ],
    troubleshooting: {
      title: '5 Common TikTok QR Code Pitfalls',
      points: [
        'An @ in the handle. Enter the clean username without the "@" for a valid URL.',
        'Contrast. Keep the foreground dark against the background.',
        'A spelling slip. Double-check the username before a mass print.',
        'Test on mobile. Confirm the code opens the TikTok app on both iOS and Android.',
        'Logo size. Cap a centre logo at roughly a third of the width.'
      ]
    },
    faqs: [
      { q: 'How do I create a QR code for my TikTok account?', a: 'Enter your handle without the @ (or paste your profile URL), style it, and download.' },
      { q: 'Does scanning open the TikTok app directly?', a: 'On a phone with TikTok installed, the scan opens your profile in the app.' },
      { q: 'Can I link to a specific TikTok video or sound?', a: 'Copy the share link of the video or sound and paste it in.' },
      { q: 'Do TikTok QR codes expire?', a: 'No — a static code works indefinitely, with unlimited scans.' },
      { q: 'Can I embed the TikTok logo in the center?', a: 'Upload the TikTok logo or your creator avatar for the centre.' },
      { q: 'What format is best for printing stickers and apparel?', a: 'Vector SVG for screen-printing and vinyl die-cutters, or PNG for digital.' },
      { q: 'Are there any scan limits on free TikTok QR codes?', a: 'None — unlimited lifetime scans, free.' },
      { q: 'Can I use custom TikTok colors?', a: 'Use the iconic cyan (#00F2EA) and magenta (#FF0050).' }
    ],
    bestPractices: 'Use the TikTok neon colours, add an engaging line like "Scan to Watch on TikTok", and export vector SVG for crisp print.'
  },

  '/telegram-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & Protocols of Telegram QR Codes',
      paragraphs: [
        'A Telegram QR code carries the universal link (`https://t.me/{username}` or `https://t.me/joinchat/{inviteHash}`). Scan it and the phone maps it to the Telegram scheme (`tg://resolve?domain={username}`), opening the chat, group, channel, or bot in the app.',
        'That removes the search step and lets a user join a public channel, a private community, or a support chat with one tap.',
        'The codes are static, private, and fully styleable in Telegram blue with vector SVG export.'
      ]
    },
    comparisonTable: {
      title: 'Telegram QR Code vs. Manual Search vs. Telegram In-App QR',
      headers: ['Feature', 'QR Generator Online Telegram QR', 'Manual Handle Search', 'Telegram In-App QR'],
      rows: [
        ['Customization Options', 'Full colors, dot styles, custom logos, SVG', 'None', 'Basic color themes only'],
        ['Vector SVG Print Export', 'Yes (Infinitely scalable vector SVG)', 'N/A', 'Raster only'],
        ['Bot & Group Invite Support', 'Yes (Supports channels, groups, bots)', 'Manual search only', 'Profiles only'],
        ['Permanent & Free', '100% Free forever with no limits', 'Free', 'Free'],
        ['Browser-Based Privacy', '100% Client-side generation', 'N/A', 'Server-side']
      ]
    },
    steps: [
      { number: 1, title: 'Enter Telegram Username, Group, or Channel Link', description: 'Type your username or channel name (e.g. username), or paste a group invite link.' },
      { number: 2, title: 'Style with Telegram Blue & Paper Plane Logo', description: 'Use Telegram blue (#0088CC), set the corner shapes, and add the paper-plane logo.' },
      { number: 3, title: 'Download in SVG or PNG', description: 'Export the high-res code for a website, a flyer, packaging, or an event banner.' }
    ],
    features: [
      { title: 'One-Tap Telegram App Launch', description: 'A scan opens the Telegram app straight to the chat, group, or channel.' },
      { title: 'Permanent & Free Forever', description: 'A static code that keeps working for good, with no scan cap and no cost.' },
      { title: 'Vector SVG Format', description: 'Scalable vector for banners, flyers, and merch.' },
      { title: '100% Privacy Protection', description: 'Runs client-side, with no link logging or storage.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Recommendations for Telegram QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Product Manuals & Customer Support', '20 cm - 40 cm (8" - 16")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan for 24/7 Telegram Support"'],
        ['Crypto & Web3 Community Flyers', '30 cm - 60 cm (12" - 24")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to Join Telegram Community"'],
        ['Conference Badges & Banners', '50 cm - 150 cm (20" - 60")', '75 mm x 75 mm (3.0" x 3.0")', '"Scan to Join Attendee Group"'],
        ['Website Footers & Headers', 'Digital Screen', '120 px x 120 px', '"Join Our Telegram Channel"']
      ]
    },
    useCases: [
      { title: 'Crypto & Web3 Community Growth', description: 'A flyer or conference code pulls investors into your official Telegram group.' },
      { title: 'Customer Support Channels', description: 'A code on packaging or a manual opens a one-to-one support chat.' },
      { title: 'News & Signal Broadcast Channels', description: 'A code in a printed publication sends readers to your real-time Telegram feed.' },
      { title: 'Event & Conference Attendee Groups', description: 'A badge code drops attendees into a temporary networking group.' }
    ],
    troubleshooting: {
      title: '5 Common Telegram QR Code Pitfalls',
      points: [
        'An @ in the username. Enter the clean username without the "@" for a valid t.me link.',
        'Private groups. For a private group, use the full t.me/joinchat or t.me/+ invite format.',
        'Contrast. Keep the blue foreground against a white background.',
        'Logo size. A centre logo should cover no more than 30% of the width.',
        'Test on mobile. Confirm the scan opens the Telegram app on both iOS and Android.'
      ]
    },
    faqs: [
      { q: 'How do I create a QR code for a Telegram channel or group?', a: 'Copy the public channel link (https://t.me/yourchannel) or the group invite link, paste it in, style it, and download.' },
      { q: 'Does scanning open the Telegram app automatically?', a: 'On a phone with Telegram installed, the t.me link opens the chat or channel directly.' },
      { q: 'Can I generate a QR code for a Telegram Bot?', a: 'Paste the bot link (e.g. https://t.me/your_bot) and the scan opens the bot with Start ready.' },
      { q: 'Do Telegram QR codes expire?', a: 'No — as long as the link is live, the code is too.' },
      { q: 'Can I embed the Telegram paper plane logo in the center?', a: 'Upload the Telegram icon or your community logo for the centre.' },
      { q: 'Are there any fees or scan limits?', a: 'None — free, unlimited scans, no watermark, no sign-up.' },
      { q: 'What file formats can I download?', a: 'High-resolution PNG, vector SVG, and WebP.' },
      { q: 'Is my group link kept secure during generation?', a: 'It stays local — the code is assembled on your machine and never uploaded.' }
    ],
    bestPractices: 'Use Telegram blue (#0088CC) with the paper-plane logo, add a "Scan to Join Telegram Community" line, and download vector SVG for print.'
  },

  '/paypal-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & Security of PayPal QR Codes',
      paragraphs: [
        'A PayPal QR code carries the PayPal.me payment URI (`https://paypal.me/{username}/{amount}`) or a direct checkout URL. Scanning it brings up the PayPal app or a mobile checkout, your account set as the recipient and — if you specified one — the amount already filled in.',
        'That lets a shop, a freelancer, a market vendor, or a charity take cashless payment without buying or leasing a card terminal.',
        'The codes stay static and never expire, carry no platform fee, use client-side encryption, and export to vector SVG for counter stands and invoice headers.'
      ]
    },
    comparisonTable: {
      title: 'PayPal QR Codes vs. Traditional POS Terminals vs. Bank Transfers',
      headers: ['Feature', 'PayPal QR Code', 'POS Card Terminal', 'Direct Bank Transfer'],
      rows: [
        ['Hardware Cost', '$0.00 (Print on paper/acrylic)', '$200 - $800 + Monthly rental', '$0.00'],
        ['Setup Time', '30 seconds (Instant generation)', '1 - 2 weeks approval', 'Manual setup'],
        ['Payment Speed', 'Instant mobile checkout', 'Instant card dip/tap', '1 - 3 business days wire'],
        ['Contactless & Hygienic', '100% Touchless mobile payment', 'Requires physical card contact', 'Online banking login'],
        ['Print Scalability', 'Print unlimited counter stands & flyers', 'Requires 1 physical device per till', 'Manual account number entry']
      ]
    },
    steps: [
      { number: 1, title: 'Enter PayPal.me Username or Link', description: 'Enter your PayPal.me username (e.g. yourname), or paste the full payment link.' },
      { number: 2, title: 'Style with PayPal Blue & Logo', description: 'Use PayPal blue (#003087, #0079C1), pick a dot pattern, and add the PayPal logo.' },
      { number: 3, title: 'Download in SVG or PNG', description: 'Export the high-res code for invoices, counter displays, and stickers.' }
    ],
    features: [
      { title: 'Zero Platform Fees', description: 'The generator is free, with no transaction fee or commission added to your payments.' },
      { title: 'Instant Mobile Checkout', description: 'Opens the PayPal app or mobile checkout directly for a fast payment.' },
      { title: 'Vector SVG for Signage', description: 'Crisp vector for durable acrylic counter stands, stickers, and menus.' },
      { title: 'Bank-Grade Security', description: 'No financial credentials touch a server — the encoding runs in your browser.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for PayPal QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Acrylic Counter Stands & Tills', '25 cm - 40 cm (10" - 16")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to Pay with PayPal"'],
        ['Printed Invoices & Receipts', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan to Settle Invoice via PayPal"'],
        ['Tip Jars & Musician Cases', '30 cm - 60 cm (12" - 24")', '40 mm x 40 mm (1.6" x 1.6")', '"Scan to Tip via PayPal"'],
        ['Charity Donation Posters', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', '"Scan to Donate via PayPal"']
      ]
    },
    useCases: [
      { title: 'Farmers Markets & Pop-Up Shops', description: 'Take touchless payment at a stall or a craft fair with no terminal and no card reader.' },
      { title: 'Freelancer & Contractor Invoices', description: 'A code on the PDF invoice lets a client settle immediately by scanning.' },
      { title: 'Musician Tip Jars & Busking', description: 'Collect cashless tips at a live set or a service counter.' },
      { title: 'Non-Profit Charity Donations', description: 'A donation code sits on a gala table, a banner, or a fundraising flyer.' }
    ],
    troubleshooting: {
      title: '5 Best Practices for PayPal QR Code Payments',
      points: [
        'Claim the link first. Make sure your PayPal.me link is active in your account settings before you print.',
        'Pre-fill the amount if you like. Append it to the link — paypal.me/user/25 — for a fixed-price item.',
        'Contrast. Dark PayPal blue or black on white reads fastest.',
        'Logo size. Stay under 30% of the width so Level H correction keeps the data intact.',
        'Test with real money. Make a small live payment to confirm it lands in the right PayPal wallet.'
      ]
    },
    faqs: [
      { q: 'How do I create a PayPal.me QR code?', a: 'Enter your PayPal.me username (e.g. yourbusiness) or paste the full link, style it, and download.' },
      { q: 'Can I set a fixed payment amount in the QR code?', a: 'Append the amount to your link — https://paypal.me/yourbusiness/25 for $25.' },
      { q: 'Does the customer need a PayPal account to pay?', a: 'Someone with PayPal pays in one tap; someone without can still pay by debit or credit card through PayPal guest checkout.' },
      { q: 'Are there any fees from QR Generator Online?', a: 'None from us — 0%. Standard PayPal transaction fees apply per your PayPal agreement.' },
      { q: 'Do PayPal QR codes expire?', a: 'No. The code lasts as long as your PayPal account stays open.' },
      { q: 'Can I embed the PayPal logo in the center?', a: 'Set the PayPal "PP" icon or your own logo in the middle.' },
      { q: 'What format is best for printing counter signs?', a: 'Vector SVG for a large acrylic stand or banner, or PNG for an invoice header.' },
      { q: 'Is my financial information secure during generation?', a: 'It is. Nothing is transmitted; the code is put together right in your browser.' }
    ],
    bestPractices: 'Use the PayPal blue branding on an acrylic counter stand with a clear "Scan to Pay with PayPal" line, and export vector SVG.'
  },

  '/upi-qr-code-generator': {
    technicalOverview: {
      title: 'Technical Architecture & NPCI Specification of UPI QR Codes',
      paragraphs: [
        'A UPI QR code carries the NPCI payment URI (`upi://pay?pa={vpa}&pn={name}&am={amount}&cu=INR`). Scan it in any UPI app in India and it reads the VPA, the payee name, the currency, and any pre-set amount.',
        'Because NPCI standardises UPI across India, one code works in Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED, and every banking app — no proprietary lock-in.',
        'Permanent static codes with no platform commission, custom shop branding, and vector SVG export for counter displays.'
      ]
    },
    comparisonTable: {
      title: 'UPI QR Codes vs. Card Swipe POS Machines vs. Cash Payments',
      headers: ['Feature', 'UPI QR Code', 'Card Swipe POS Machine', 'Cash Payments'],
      rows: [
        ['Hardware Cost', '₹0 (Free printable QR code)', '₹1,500 - ₹5,000 + Monthly rental', '₹0'],
        ['Merchant Transaction Fee', '0% (NPCI zero-MDR on standard UPI)', '1.5% - 2.5% MDR per transaction', 'Cash handling costs & risk'],
        ['Settlement Speed', 'Instant real-time bank credit', 'T+1 or T+2 business days', 'Manual bank deposit'],
        ['App Interoperability', 'Universal (GPay, PhonePe, Paytm, BHIM)', 'Card brand dependent', 'N/A'],
        ['Contactless & Hygienic', '100% Touchless mobile payment', 'Requires physical card/PIN entry', 'Physical currency exchange']
      ]
    },
    steps: [
      { number: 1, title: 'Enter UPI ID (VPA) & Payee Name', description: 'Type your UPI ID (e.g. yourname@oksbi, merchant@paytm), your business name, and an optional fixed amount.' },
      { number: 2, title: 'Customize Colors & Embed UPI Logo', description: 'Set the colours, restyle the corner eyes, and add the UPI or shop logo in the middle.' },
      { number: 3, title: 'Download in SVG or PNG Format', description: 'Export the print-ready code for counters, receipts, acrylic stands, and digital invoices.' }
    ],
    features: [
      { title: 'Universal UPI App Interoperability', description: 'Works in Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED, and every Indian banking app.' },
      { title: 'Zero Platform Commission', description: 'Free, with no transaction fee, setup charge, or subscription.' },
      { title: 'Standard NPCI UPI Protocol', description: 'Generates compliant upi://pay strings that read across all scanners.' },
      { title: 'Vector SVG for Shop Displays', description: 'Prints durable counter stands, stickers, and wall displays with no pixelation.' }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for UPI QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: ['Placement / Application', 'Scanning Distance', 'Minimum Print Size', 'Recommended Call-to-Action'],
      rows: [
        ['Billing Counter & Cash Wrap Stands', '25 cm - 40 cm (10" - 16")', '40 mm x 40 mm (1.6" x 1.6")', '"Scan & Pay with Any UPI App"'],
        ['Storefront Windows & Entrance Doors', '50 cm - 100 cm (20" - 40")', '75 mm x 75 mm (3.0" x 3.0")', '"Accepted Here: GPay, PhonePe, Paytm"'],
        ['Delivery Invoices & Bill Folders', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', '"Scan to Pay Bill via UPI"'],
        ['Tabletop Dining Cards & Cafes', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', '"Scan to Pay Tableside"']
      ]
    },
    useCases: [
      { title: 'Retail Shops & Supermarkets', description: 'A billing-counter code takes fast, touchless payment with no POS rental.' },
      { title: 'Freelancers & Service Providers', description: 'A code on the invoice settles direct to the bank with no wire delay.' },
      { title: 'Restaurants, Cafes & Food Trucks', description: 'A table or bill-folder code lets diners settle the bill from their seat.' },
      { title: 'Donations & Cultural Festivals', description: 'Collect cashless contributions and entry fees at a festival or a trust.' }
    ],
    troubleshooting: {
      title: '5 Best Practices for UPI QR Code Payments',
      points: [
        'Check the VPA. Confirm your UPI ID (e.g. mobile@upi, name@bank) before a mass print.',
        'Include the payee name. Add the pn parameter so customers can verify the recipient before they approve.',
        'Contrast. Black or dark navy on white reads fast under dim shop lighting.',
        'Protect the print. Laminate the code or use an acrylic stand so scratches do not break the scan.',
        'Test across apps. Scan with GPay, PhonePe, and Paytm to confirm the flow.'
      ]
    },
    faqs: [
      { q: 'What is a UPI ID (VPA) and where do I find it?', a: 'It is the identifier tied to your bank account — yourname@oksbi, mobile@paytm — shown in your GPay, PhonePe, or Paytm profile.' },
      { q: 'Which payment apps can scan this UPI QR code?', a: 'Every UPI app in India: Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED, and the banking apps.' },
      { q: 'Can I pre-fill a fixed payment amount in the QR code?', a: 'Enter an amount and the payer\'s app displays exactly that on scan.' },
      { q: 'Are there any platform charges from QR Generator Online?', a: 'None — free, with no transaction fee or recurring charge.' },
      { q: 'Do UPI QR codes expire?', a: 'No — it works right up until the linked UPI ID is deactivated.' },
      { q: 'Can I add my shop or company logo to the UPI QR code?', a: 'Set your shop logo or the UPI icon in the centre.' },
      { q: 'What format should I download for printing counter stands?', a: 'Vector SVG for crisp large-scale printing on acrylic stands, sunboard, and vinyl.' },
      { q: 'Is my banking information secure during generation?', a: 'It is — the details stay on your device and are never sent out.' }
    ],
    bestPractices: 'Stand the code on an acrylic display with the UPI logo, list "Accepted: GPay, PhonePe, Paytm, BHIM", and test-scan with several apps before it goes on the counter.'
  }
};
