/**
 * Localized deep body content for the `tr` locale.
 *
 * One module per locale so Vite emits one chunk per locale: a visitor only
 * ever downloads the language they are actually reading. Bundling all of them
 * into the initial graph would have taken the `seo-content` chunk from ~357 KB
 * to ~2 MB for every visitor, including the English majority who need none of
 * it.
 *
 * Shape is identical to scripts/toolRichData.js et al (constants/richContent.ts
 * `RichContent`), plus an optional `sections` intro array mirroring
 * routeContent.js. A path absent here falls back to the English object whole —
 * never a per-field mix of two languages.
 */

export const RICH_CONTENT = {
  '/upi-qr-code-generator': {
    sections: [
      {
        title: 'Hindistan\'ın Her Yerinde UPI Ödemeleri Kabul Edin',
        paragraphs: [
          'Dükkân tezgâhları, pazar tezgâhları, faturalar ve çevrimiçi mağazalar için UPI QR kodları basın. Daha hızlı ödeme için önceden doldurulmuş tutarı ve alıcı adını destekler.',
          'Google Pay, PhonePe, Paytm, BHIM ve Amazon Pay dahil tüm büyük UPI uygulamalarıyla uyumlu.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & NPCI Specification of UPI QR Codes',
      paragraphs: [
        'Bir UPI QR kodu NPCI ödeme URI\'sini (`upi://pay?pa={vpa}&pn={name}&am={amount}&cu=INR`) taşır. Hindistan\'daki herhangi bir UPI uygulamasında tarayın; VPA\'yı, alıcı adını, para birimini ve önceden ayarlı herhangi bir tutarı okur.',
        'NPCI, UPI\'yi tüm Hindistan\'da standartlaştırdığı için tek bir kod Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED ve her bankacılık uygulamasında çalışır — tescilli bir kilitlenme olmadan.',
        'Platform komisyonu olmayan, özel mağaza markası taşıyan ve tezgâh gösterimleri için vektör SVG dışa aktarımlı kalıcı statik kodlar.'
      ]
    },
    comparisonTable: {
      title: 'UPI QR Codes vs. Card Swipe POS Machines vs. Cash Payments',
      headers: [
        'Feature',
        'UPI QR Code',
        'Card Swipe POS Machine',
        'Cash Payments'
      ],
      rows: [
        [
          'Hardware Cost',
          '₹0 (Free printable QR code)',
          '₹1,500 - ₹5,000 + Monthly rental',
          '₹0'
        ],
        [
          'Merchant Transaction Fee',
          '0% (NPCI zero-MDR on standard UPI)',
          '1.5% - 2.5% MDR per transaction',
          'Cash handling costs & risk'
        ],
        [
          'Settlement Speed',
          'Instant real-time bank credit',
          'T+1 or T+2 business days',
          'Manual bank deposit'
        ],
        [
          'App Interoperability',
          'Universal (GPay, PhonePe, Paytm, BHIM)',
          'Card brand dependent',
          'N/A'
        ],
        [
          'Contactless & Hygienic',
          '100% Touchless mobile payment',
          'Requires physical card/PIN entry',
          'Physical currency exchange'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'UPI ID\'sini (VPA) ve Alıcı Adını Girin',
        description: 'UPI ID\'nizi (örn. yourname@oksbi, merchant@paytm), işletme adınızı ve isteğe bağlı sabit bir tutarı yazın.'
      },
      {
        number: 2,
        title: 'Renkleri Özelleştirin ve UPI Logosunu Gömün',
        description: 'Renkleri ayarlayın, köşe gözlerini yeniden biçimlendirin ve ortaya UPI veya mağaza logosunu ekleyin.'
      },
      {
        number: 3,
        title: 'SVG veya PNG Biçiminde İndirin',
        description: 'Tezgâhlar, fişler, akrilik standlar ve dijital faturalar için baskıya hazır kodu dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Evrensel UPI Uygulama Birlikte Çalışabilirliği',
        description: 'Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED ve her Hint bankacılık uygulamasında çalışır.'
      },
      {
        title: 'Sıfır Platform Komisyonu',
        description: 'Ücretsiz; işlem ücreti, kurulum bedeli veya abonelik yok.'
      },
      {
        title: 'Standart NPCI UPI Protokolü',
        description: 'Tüm tarayıcılarda okunan uyumlu upi://pay dizeleri üretir.'
      },
      {
        title: 'Mağaza Gösterimleri için Vektör SVG',
        description: 'Dayanıklı tezgâh standları, çıkartmalar ve duvar gösterimlerini piksellenme olmadan basar.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for UPI QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Billing Counter & Cash Wrap Stands',
          '25 cm - 40 cm (10" - 16")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan & Pay with Any UPI App"'
        ],
        [
          'Storefront Windows & Entrance Doors',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Accepted Here: GPay, PhonePe, Paytm"'
        ],
        [
          'Delivery Invoices & Bill Folders',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Pay Bill via UPI"'
        ],
        [
          'Tabletop Dining Cards & Cafes',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Pay Tableside"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Perakende Dükkânları ve Süpermarketler',
        description: 'Bir fatura tezgâhı kodu, POS kirası olmadan hızlı, temassız ödeme alır.'
      },
      {
        title: 'Serbest Çalışanlar ve Hizmet Sağlayıcılar',
        description: 'Faturadaki bir kod, havale gecikmesi olmadan doğrudan bankaya öder.'
      },
      {
        title: 'Restoranlar, Kafeler ve Yemek Kamyonları',
        description: 'Bir masa veya fatura klasörü kodu, müşterilerin faturayı yerlerinden ödemesini sağlar.'
      },
      {
        title: 'Bağışlar ve Kültürel Festivaller',
        description: 'Bir festivalde veya bir vakıfta nakitsiz katkılar ve giriş ücretleri toplayın.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for UPI QR Code Payments',
      points: [
        'VPA\'yı kontrol edin. Toplu bir baskıdan önce UPI ID\'nizi (örn. mobile@upi, name@bank) doğrulayın.',
        'Alıcı adını ekleyin. Müşterilerin onaylamadan önce alıcıyı doğrulayabilmesi için pn parametresini ekleyin.',
        'Kontrast. Beyaz üzerine siyah veya koyu lacivert, loş dükkân aydınlatmasında hızlı okunur.',
        'Baskıyı koruyun. Çiziklerin taramayı bozmaması için kodu lamine edin veya bir akrilik stand kullanın.',
        'Uygulamalar arası test edin. Akışı doğrulamak için GPay, PhonePe ve Paytm ile tarayın.'
      ]
    },
    faqs: [
      {
        q: 'UPI ID (VPA) nedir ve onu nerede bulurum?',
        a: 'Banka hesabınıza bağlı tanımlayıcıdır — yourname@oksbi, mobile@paytm — GPay, PhonePe veya Paytm profilinizde gösterilir.'
      },
      {
        q: 'Bu UPI QR kodunu hangi ödeme uygulamaları tarayabilir?',
        a: 'Hindistan\'daki her UPI uygulaması: Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED ve bankacılık uygulamaları.'
      },
      {
        q: 'QR kodunda sabit bir ödeme tutarını önceden doldurabilir miyim?',
        a: 'Bir tutar girin; ödeyenin uygulaması taramada tam olarak onu gösterir.'
      },
      {
        q: 'QR Generator Online\'dan herhangi bir platform ücreti var mı?',
        a: 'Yok — ücretsiz, işlem ücreti veya yinelenen ücret olmadan.'
      },
      {
        q: 'UPI QR kodlarının süresi dolar mı?',
        a: 'Hayır — bağlı UPI ID devre dışı bırakılana dek çalışır.'
      },
      {
        q: 'UPI QR koduna mağaza veya şirket logomu ekleyebilir miyim?',
        a: 'Ortaya mağaza logonuzu veya UPI simgesini yerleştirin.'
      },
      {
        q: 'Tezgâh standları basmak için hangi biçimi indirmeliyim?',
        a: 'Akrilik standlar, sunboard ve vinil üzerinde keskin, büyük ölçekli baskı için vektör SVG.'
      },
      {
        q: 'Bankacılık bilgilerim üretim sırasında güvende mi?',
        a: 'Güvende — ayrıntılar cihazınızda kalır ve asla dışarı gönderilmez.'
      }
    ],
    bestPractices: 'Kodu UPI logosuyla bir akrilik gösterime yerleştirin, «Kabul edilir: GPay, PhonePe, Paytm, BHIM» yazın ve tezgâha koymadan önce birkaç uygulamayla test taraması yapın.'
  },
  '/paypal-qr-code-generator': {
    sections: [
      {
        title: 'Temassız Ödeme Toplama Basitleştirildi',
        paragraphs: [
          'Pazar tezgâhları, serbest çalışan faturaları, bağış kavanozları ve bahşiş toplama için PayPal QR kodları basın. Müşteriler tarar ve e-postanızı yazmadan anında öder.',
          'PayPal.me kullanıcı adları ve doğrudan PayPal ödeme URL\'leriyle çalışır.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Security of PayPal QR Codes',
      paragraphs: [
        'Bir PayPal QR kodu, PayPal.me ödeme URI\'sini (`https://paypal.me/{username}/{amount}`) veya doğrudan bir ödeme URL\'sini taşır. Onu taramak PayPal uygulamasını veya bir mobil ödemeyi açar; hesabınız alıcı olarak ayarlanmış ve — bir tutar belirttiyseniz — tutar zaten doldurulmuş halde.',
        'Bu, bir dükkânın, bir serbest çalışanın, bir pazar satıcısının veya bir hayır kurumunun bir kart terminali satın almadan veya kiralamadan nakitsiz ödeme almasını sağlar.',
        'Kodlar statik kalır ve asla süresi dolmaz, platform ücreti taşımaz, istemci tarafı şifreleme kullanır ve tezgâh standları ile fatura başlıkları için vektör SVG\'ye dışa aktarılır.'
      ]
    },
    comparisonTable: {
      title: 'PayPal QR Codes vs. Traditional POS Terminals vs. Bank Transfers',
      headers: [
        'Feature',
        'PayPal QR Code',
        'POS Card Terminal',
        'Direct Bank Transfer'
      ],
      rows: [
        [
          'Hardware Cost',
          '$0.00 (Print on paper/acrylic)',
          '$200 - $800 + Monthly rental',
          '$0.00'
        ],
        [
          'Setup Time',
          '30 seconds (Instant generation)',
          '1 - 2 weeks approval',
          'Manual setup'
        ],
        [
          'Payment Speed',
          'Instant mobile checkout',
          'Instant card dip/tap',
          '1 - 3 business days wire'
        ],
        [
          'Contactless & Hygienic',
          '100% Touchless mobile payment',
          'Requires physical card contact',
          'Online banking login'
        ],
        [
          'Print Scalability',
          'Print unlimited counter stands & flyers',
          'Requires 1 physical device per till',
          'Manual account number entry'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'PayPal.me Kullanıcı Adını veya Bağlantısını Girin',
        description: 'PayPal.me kullanıcı adınızı girin (örn. adiniz) veya tam ödeme bağlantısını yapıştırın.'
      },
      {
        number: 2,
        title: 'PayPal Mavisi ve Logosuyla Biçimlendirin',
        description: 'PayPal mavisini (#003087, #0079C1) kullanın, bir nokta deseni seçin ve PayPal logosunu ekleyin.'
      },
      {
        number: 3,
        title: 'SVG veya PNG Biçiminde İndirin',
        description: 'Faturalar, tezgâh gösterimleri ve çıkartmalar için yüksek çözünürlüklü kodu dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Sıfır Platform Ücreti',
        description: 'Oluşturucu ücretsizdir, ödemelerinize eklenen işlem ücreti veya komisyon yoktur.'
      },
      {
        title: 'Anında Mobil Ödeme',
        description: 'Hızlı bir ödeme için PayPal uygulamasını veya mobil ödemeyi doğrudan açar.'
      },
      {
        title: 'Tabelalar için Vektör SVG',
        description: 'Dayanıklı akrilik tezgâh standları, çıkartmalar ve menüler için keskin vektör.'
      },
      {
        title: 'Banka Düzeyinde Güvenlik',
        description: 'Hiçbir finansal kimlik bilgisi bir sunucuya dokunmaz — kodlama tarayıcınızda çalışır.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for PayPal QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Acrylic Counter Stands & Tills',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Pay with PayPal"'
        ],
        [
          'Printed Invoices & Receipts',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Settle Invoice via PayPal"'
        ],
        [
          'Tip Jars & Musician Cases',
          '30 cm - 60 cm (12" - 24")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan to Tip via PayPal"'
        ],
        [
          'Charity Donation Posters',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Donate via PayPal"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Çiftçi Pazarları ve Pop-Up Mağazalar',
        description: 'Bir tezgâhta veya bir el sanatları fuarında terminal ve kart okuyucu olmadan temassız ödeme alın.'
      },
      {
        title: 'Serbest Çalışan ve Müteahhit Faturaları',
        description: 'PDF faturadaki bir kod, bir müşterinin tarayarak hemen ödeme yapmasını sağlar.'
      },
      {
        title: 'Müzisyen Bahşiş Kavanozları ve Sokak Müziği',
        description: 'Bir canlı performansta veya bir hizmet tezgâhında nakitsiz bahşiş toplayın.'
      },
      {
        title: 'Kâr Amacı Gütmeyen Hayır Bağışları',
        description: 'Bir bağış kodu bir gala masasında, bir afişte veya bir bağış broşüründe yer alır.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for PayPal QR Code Payments',
      points: [
        'Önce bağlantıyı sahiplenin. Basmadan önce PayPal.me bağlantınızın hesap ayarlarınızda etkin olduğundan emin olun.',
        'İsterseniz tutarı önceden doldurun. Sabit fiyatlı bir ürün için onu bağlantıya ekleyin — paypal.me/user/25.',
        'Kontrast. Beyaz üzerine koyu PayPal mavisi veya siyah en hızlı okunur.',
        'Logo boyutu. Seviye H düzeltmesinin veriyi bozulmadan koruması için genişliğin %30\'unun altında kalın.',
        'Gerçek parayla test edin. Doğru PayPal cüzdanına düştüğünü doğrulamak için küçük bir canlı ödeme yapın.'
      ]
    },
    faqs: [
      {
        q: 'Bir PayPal.me QR kodunu nasıl oluştururum?',
        a: 'PayPal.me kullanıcı adınızı girin (örn. isletmeniz) veya tam bağlantıyı yapıştırın, biçimlendirin ve indirin.'
      },
      {
        q: 'QR kodunda sabit bir ödeme tutarı ayarlayabilir miyim?',
        a: 'Tutarı bağlantınıza ekleyin — 25 $ için https://paypal.me/isletmeniz/25.'
      },
      {
        q: 'Müşterinin ödeme yapmak için bir PayPal hesabı gerekir mi?',
        a: 'PayPal\'ı olan biri tek dokunuşla öder; olmayan biri de PayPal misafir ödemesiyle banka veya kredi kartıyla ödeyebilir.'
      },
      {
        q: 'QR Generator Online\'dan herhangi bir ücret var mı?',
        a: 'Bizden yok — %0. Standart PayPal işlem ücretleri PayPal sözleşmenize göre uygulanır.'
      },
      {
        q: 'PayPal QR kodlarının süresi dolar mı?',
        a: 'Hayır. Kod, PayPal hesabınız açık kaldığı sürece geçerlidir.'
      },
      {
        q: 'PayPal logosunu ortaya gömebilir miyim?',
        a: 'Ortaya PayPal «PP» simgesini veya kendi logonuzu yerleştirin.'
      },
      {
        q: 'Tezgâh tabelaları basmak için hangi biçim en iyisi?',
        a: 'Büyük bir akrilik stand veya afiş için vektör SVG ya da bir fatura başlığı için PNG.'
      },
      {
        q: 'Finansal bilgilerim üretim sırasında güvende mi?',
        a: 'Güvende. Hiçbir şey iletilmez; kod doğrudan tarayıcınızda bir araya getirilir.'
      }
    ],
    bestPractices: 'Net bir «PayPal ile Ödemek için Tara» satırıyla bir akrilik tezgâh standında PayPal mavisi markasını kullanın ve vektör SVG dışa aktarın.'
  },
  '/telegram-qr-code-generator': {
    sections: [
      {
        title: 'Telegram Topluluğunuzu Büyütün',
        paragraphs: [
          'Zahmetsiz topluluk oluşturmak için Telegram grup katılım bağlantılarını web sitelerinde, forumlarda, sosyal medyada ve basılı materyallerde QR kodlarıyla paylaşın.',
          'Kişisel profilleri, herkese açık grupları, özel davet bağlantılarını ve kanalları destekler.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Protocols of Telegram QR Codes',
      paragraphs: [
        'Bir Telegram QR kodu evrensel bağlantıyı (`https://t.me/{username}` veya `https://t.me/joinchat/{inviteHash}`) taşır. Tarayın, telefon onu Telegram şemasına (`tg://resolve?domain={username}`) eşler ve sohbeti, grubu, kanalı veya botu uygulamada açar.',
        'Bu, arama adımını kaldırır ve bir kullanıcının tek dokunuşla herkese açık bir kanala, özel bir topluluğa veya bir destek sohbetine katılmasını sağlar.',
        'Kodlar statik, özel ve Telegram mavisinde tam biçimlendirilebilir, vektör SVG dışa aktarımıyla.'
      ]
    },
    comparisonTable: {
      title: 'Telegram QR Code vs. Manual Search vs. Telegram In-App QR',
      headers: [
        'Feature',
        'QR Generator Online Telegram QR',
        'Manual Handle Search',
        'Telegram In-App QR'
      ],
      rows: [
        [
          'Customization Options',
          'Full colors, dot styles, custom logos, SVG',
          'None',
          'Basic color themes only'
        ],
        [
          'Vector SVG Print Export',
          'Yes (Infinitely scalable vector SVG)',
          'N/A',
          'Raster only'
        ],
        [
          'Bot & Group Invite Support',
          'Yes (Supports channels, groups, bots)',
          'Manual search only',
          'Profiles only'
        ],
        [
          'Permanent & Free',
          '100% Free forever with no limits',
          'Free',
          'Free'
        ],
        [
          'Browser-Based Privacy',
          '100% Client-side generation',
          'N/A',
          'Server-side'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Telegram Kullanıcı Adını, Grubunu veya Kanal Bağlantısını Girin',
        description: 'Kullanıcı adınızı veya kanal adınızı yazın (örn. username) ya da bir grup davet bağlantısını yapıştırın.'
      },
      {
        number: 2,
        title: 'Telegram Mavisi ve Kağıt Uçak Logosuyla Biçimlendirin',
        description: 'Telegram mavisini (#0088CC) kullanın, köşe şekillerini ayarlayın ve kağıt uçak logosunu ekleyin.'
      },
      {
        number: 3,
        title: 'SVG veya PNG Biçiminde İndirin',
        description: 'Bir web sitesi, bir broşür, ambalaj veya bir etkinlik afişi için yüksek çözünürlüklü kodu dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Tek Dokunuşla Telegram Uygulama Başlatma',
        description: 'Bir tarama, Telegram uygulamasını doğrudan sohbete, gruba veya kanala açar.'
      },
      {
        title: 'Kalıcı ve Sonsuza Dek Ücretsiz',
        description: 'Tarama sınırı ve maliyeti olmadan sonsuza dek çalışmayı sürdüren statik bir kod.'
      },
      {
        title: 'Vektör SVG Biçimi',
        description: 'Afişler, broşürler ve ürünler için ölçeklenebilir vektör.'
      },
      {
        title: '%100 Gizlilik Koruması',
        description: 'İstemci tarafında çalışır, bağlantı günlüğü veya depolama olmadan.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Recommendations for Telegram QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Manuals & Customer Support',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan for 24/7 Telegram Support"'
        ],
        [
          'Crypto & Web3 Community Flyers',
          '30 cm - 60 cm (12" - 24")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Join Telegram Community"'
        ],
        [
          'Conference Badges & Banners',
          '50 cm - 150 cm (20" - 60")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Join Attendee Group"'
        ],
        [
          'Website Footers & Headers',
          'Digital Screen',
          '120 px x 120 px',
          '"Join Our Telegram Channel"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Kripto ve Web3 Topluluk Büyümesi',
        description: 'Bir broşür veya konferans kodu, yatırımcıları resmi Telegram grubunuza çeker.'
      },
      {
        title: 'Müşteri Destek Kanalları',
        description: 'Ambalajdaki veya bir kılavuzdaki bir kod, birebir bir destek sohbeti açar.'
      },
      {
        title: 'Haber ve Sinyal Yayın Kanalları',
        description: 'Basılı bir yayındaki bir kod, okuyucuları gerçek zamanlı Telegram akışınıza gönderir.'
      },
      {
        title: 'Etkinlik ve Konferans Katılımcı Grupları',
        description: 'Bir yakalık kodu, katılımcıları geçici bir ağ kurma grubuna bırakır.'
      }
    ],
    troubleshooting: {
      title: '5 Common Telegram QR Code Pitfalls',
      points: [
        'Kullanıcı adında bir @. Geçerli bir t.me bağlantısı için temiz kullanıcı adını «@» olmadan girin.',
        'Özel gruplar. Özel bir grup için tam davet biçimini t.me/joinchat veya t.me/+ kullanın.',
        'Kontrast. Mavi ön planı beyaz bir arka plana karşı tutun.',
        'Logo boyutu. Merkezdeki bir logo genişliğin %30\'undan fazlasını kaplamamalı.',
        'Mobilde test edin. Taramanın hem iOS hem Android\'de Telegram uygulamasını açtığını doğrulayın.'
      ]
    },
    faqs: [
      {
        q: 'Bir Telegram kanalı veya grubu için nasıl bir QR kodu oluştururum?',
        a: 'Herkese açık kanal bağlantısını (https://t.me/yourchannel) veya grup davet bağlantısını kopyalayın, yapıştırın, biçimlendirin ve indirin.'
      },
      {
        q: 'Tarama Telegram uygulamasını otomatik olarak açar mı?',
        a: 'Telegram kurulu bir telefonda, t.me bağlantısı sohbeti veya kanalı doğrudan açar.'
      },
      {
        q: 'Bir Telegram Botu için QR kodu üretebilir miyim?',
        a: 'Bot bağlantısını (örn. https://t.me/your_bot) yapıştırın; tarama botu Başlat hazır halde açar.'
      },
      {
        q: 'Telegram QR kodlarının süresi dolar mı?',
        a: 'Hayır — bağlantı canlı olduğu sürece kod da öyle.'
      },
      {
        q: 'Telegram kağıt uçak logosunu ortaya gömebilir miyim?',
        a: 'Merkez için Telegram simgesini veya topluluk logonuzu yükleyin.'
      },
      {
        q: 'Herhangi bir ücret veya tarama sınırı var mı?',
        a: 'Yok — ücretsiz, sınırsız tarama, filigran yok, kayıt yok.'
      },
      {
        q: 'Hangi dosya biçimlerini indirebilirim?',
        a: 'Yüksek çözünürlüklü PNG, vektör SVG ve WebP.'
      },
      {
        q: 'Grup bağlantım üretim sırasında güvende tutuluyor mu?',
        a: 'Yerel kalır — kod makinenizde bir araya getirilir ve asla yüklenmez.'
      }
    ],
    bestPractices: 'Kağıt uçak logosuyla Telegram mavisini (#0088CC) kullanın, bir «Telegram Topluluğuna Katılmak için Tara» satırı ekleyin ve baskı için vektör SVG indirin.'
  },
  '/tiktok-qr-code-generator': {
    sections: [
      {
        title: 'Platformlar Arası TikTok Tanıtımı',
        paragraphs: [
          'Gerçek dünyadan TikTok profilinize takipçi çekmek için TikTok QR kodlarını ürünlere, ambalajlara, çıkartmalara ve etkinlik materyallerine basın.',
          'Platformlar arası tanıtımla TikTok varlığını büyütmek isteyen üreticiler, markalar ve işletmeler için ideal.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Viral Growth via TikTok QR Codes',
      paragraphs: [
        'Bir TikTok QR kodu profil URI\'sini (`https://www.tiktok.com/@{username}`) veya bir video bağlantısını taşır. Bir tarama, telefonu üreticinin profilinde TikTok uygulamasına bırakır.',
        'Bu, oturum açmayı ve aramayı atlar; böylece bir izleyici tek dokunuşla takip eder, beğenir ya da bir hashtag yarışmasına atlar.',
        'Tarama sınırı olmayan ve tam vektör SVG dışa aktarımlı statik, kalıcı kodlar.'
      ]
    },
    comparisonTable: {
      title: 'TikTok QR Code vs. Manual Search vs. In-App QR Code',
      headers: [
        'Feature',
        'QR Generator Online TikTok QR',
        'Manual Handle Search',
        'In-App TikCode'
      ],
      rows: [
        [
          'Customization Options',
          'Full color palettes, dot styles, SVG',
          'None',
          'Fixed in-app template only'
        ],
        [
          'Vector SVG Print Export',
          'Yes (Infinitely scalable vector SVG)',
          'N/A',
          'Low-res raster image only'
        ],
        [
          'Direct Native App Launch',
          'Yes (Instant profile handoff)',
          'Manual typing required',
          'Yes'
        ],
        [
          'Permanent & Free',
          '100% Free forever with no limits',
          'Free',
          'Requires app access'
        ],
        [
          'Custom Logo Embedding',
          'Yes (Embed your brand icon)',
          'No',
          'TikTok logo only'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'TikTok Kullanıcı Adını veya Bağlantısını Girin',
        description: 'Kullanıcı adınızı @ olmadan yazın (örn. username) veya tam profil URL\'sini yapıştırın.'
      },
      {
        number: 2,
        title: 'TikTok\'un Canlı Neon Renklerini Uygulayın',
        description: 'TikTok camgöbeğini (#00F2EA) ve macentayı (#FF0050) kullanın, bir nokta deseni seçin ve TikTok logosunu ekleyin.'
      },
      {
        number: 3,
        title: 'SVG veya PNG Biçiminde İndirin',
        description: 'Çıkartmalar, broşürler, etiketler ve ürünler için yüksek çözünürlüklü kodu dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Doğrudan TikTok Uygulama Başlatma',
        description: 'Bir tarama, tek dokunuşluk takip için TikTok uygulamasını doğrudan profilinizde açar.'
      },
      {
        title: 'Kalıcı ve Sonsuza Dek Ücretsiz',
        description: 'Asla geçerliliğini yitirmeyen ve sınırsız taramayı ücretsiz kabul eden statik bir kod.'
      },
      {
        title: 'Giyim ve Baskı için Vektör SVG',
        description: 'Kapüşonlulara, çıkartmalara ve posterlere serigrafi için ölçeklenebilir vektör çıktısı.'
      },
      {
        title: '%100 Gizlilik Koruması',
        description: 'Cihazınızda işlenir, hiçbir şey izlenmez.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for TikTok QR Codes',
      description: 'Calculate minimum print size using S = D / 10 for rapid camera recognition.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Merchandise & Apparel Tags',
          '15 cm - 30 cm (6" - 12")',
          '22 mm x 22 mm (0.9" x 0.9")',
          '"Scan to Follow on TikTok"'
        ],
        [
          'Vinyl Stickers & Decals',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan for Viral TikTok Reels"'
        ],
        [
          'Restaurant Table Tents & Menus',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Tag Us on TikTok"'
        ],
        [
          'Event Stage Banners & Posters',
          '1.0 m - 3.0 m (3 ft - 10 ft)',
          '150 mm x 150 mm (6" x 6")',
          '"Scan to Join the Challenge"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Giyim ve Ürün Etiketleri',
        description: 'Bir askı etiketi kodu, bir alıcıyı takipçiye dönüştürür.'
      },
      {
        title: 'Çıkartmalar ve Sokak Pazarlaması',
        description: 'Kodunuzu taşıyan markalı çıkartmalar, organik yerel keşfi artırır.'
      },
      {
        title: 'Restoran ve Perakende Gösterimleri',
        description: 'Bir kod, alışverişçileri bir inceleme çekmeye ve bir indirim için markanızı etiketlemeye teşvik eder.'
      },
      {
        title: 'Konser ve Festival Tabelaları',
        description: 'Canlı bir etkinlikteki büyük bir kod, hashtag yarışmasını tanıtır.'
      }
    ],
    troubleshooting: {
      title: '5 Common TikTok QR Code Pitfalls',
      points: [
        'Kullanıcı adında bir @. Geçerli bir URL için temiz kullanıcı adını «@» olmadan girin.',
        'Kontrast. Ön planı arka plana karşı koyu tutun.',
        'Bir yazım kayması. Toplu bir baskıdan önce kullanıcı adını iki kez kontrol edin.',
        'Mobilde test edin. Kodun hem iOS hem Android\'de TikTok uygulamasını açtığını doğrulayın.',
        'Logo boyutu. Merkezdeki bir logoyu genişliğin yaklaşık üçte biriyle sınırlayın.'
      ]
    },
    faqs: [
      {
        q: 'TikTok hesabım için nasıl bir QR kodu oluştururum?',
        a: 'Kullanıcı adınızı @ olmadan girin (veya profil URL\'nizi yapıştırın), biçimlendirin ve indirin.'
      },
      {
        q: 'Tarama TikTok uygulamasını doğrudan açar mı?',
        a: 'TikTok kurulu bir telefonda, tarama profilinizi uygulamada açar.'
      },
      {
        q: 'Belirli bir TikTok videosuna veya sesine bağlantı verebilir miyim?',
        a: 'Videonun veya sesin paylaşım bağlantısını kopyalayıp yapıştırın.'
      },
      {
        q: 'TikTok QR kodlarının süresi dolar mı?',
        a: 'Hayır — statik bir kod süresiz çalışır, sınırsız taramayla.'
      },
      {
        q: 'TikTok logosunu ortaya gömebilir miyim?',
        a: 'Merkez için TikTok logosunu veya üretici avatarınızı yükleyin.'
      },
      {
        q: 'Çıkartma ve giyim basmak için en iyi biçim hangisi?',
        a: 'Serigrafi ve vinil kesiciler için vektör SVG ya da dijital için PNG.'
      },
      {
        q: 'Ücretsiz TikTok QR kodlarında tarama sınırı var mı?',
        a: 'Yok — ömür boyu sınırsız tarama, ücretsiz.'
      },
      {
        q: 'Özel TikTok renklerini kullanabilir miyim?',
        a: 'İkonik camgöbeğini (#00F2EA) ve macentayı (#FF0050) kullanın.'
      }
    ],
    bestPractices: 'TikTok neon renklerini kullanın, «TikTok\'ta İzlemek için Tara» gibi ilgi çekici bir satır ekleyin ve net baskı için vektör SVG dışa aktarın.'
  },
  '/twitter-qr-code-generator': {
    sections: [
      {
        title: 'QR Kodlarıyla X / Twitter Kitlenizi Büyütün',
        paragraphs: [
          'Basılı materyallere, e-posta imzalarına ve etkinlik afişlerine Twitter QR kodları ekleyerek fiziksel ve dijital varlık arasındaki boşluğu kapatın.',
          'Hem twitter.com hem x.com URL\'lerini, ayrıca otomatik bağlantı üretimi için doğrudan kullanıcı adı girişini destekler.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of Twitter / X QR Codes',
      paragraphs: [
        'Bir Twitter / X QR kodu profil bağlantısını (`https://x.com/{handle}` veya `https://twitter.com/{handle}`) taşır. Tarayın, telefonun evrensel bağlantı işleyicisi X uygulamasını doğrudan o profile veya gönderiye açar.',
        'Oradan bir kullanıcı, arada hiçbir şey yazmadan takip edebilir, bir tweet\'i beğenebilir, bir Space\'e katılabilir veya bir hashtag başlığına atlayabilir.',
        'Bu kodlar statiktir ve asla süresi dolmaz — tam renk denetimi, özel göz şekilleri ve baskı için vektör SVG dışa aktarımı.'
      ]
    },
    comparisonTable: {
      title: 'Twitter QR Code vs. Manual Handle Search vs. Social Links',
      headers: [
        'Feature',
        'Twitter / X QR Code',
        'Manual Search',
        'Generic Link'
      ],
      rows: [
        [
          'Conversion Speed',
          '1 Scan → Instant Profile Launch',
          'Slow & error-prone',
          'Opens browser first'
        ],
        [
          'App Launch',
          'Direct native X app launch',
          'Manual app search',
          'Browser redirection'
        ],
        [
          'Print Ready',
          '100% Vector SVG & PNG',
          'N/A',
          'N/A'
        ],
        [
          'Lifetime Scans',
          'Unlimited & Permanent',
          'Unlimited',
          'May expire'
        ],
        [
          'Cost',
          '$0.00 Free',
          'Free',
          'Varies'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Twitter/X Kullanıcı Adınızı veya URL\'nizi Girin',
        description: 'Kullanıcı adını @ olmadan yazın veya tam x.com ya da twitter.com bağlantısını yapıştırın.'
      },
      {
        number: 2,
        title: 'Biçimlendirin ve X veya Kuş Logosunu Ekleyin',
        description: 'Renkleri, nokta desenini ve köşe şekillerini ayarlayın ve ortaya X veya kuş logosunu ekleyin.'
      },
      {
        number: 3,
        title: 'SVG veya PNG Biçiminde İndirin',
        description: 'Broşürler, slaytlar, kitaplar veya ürünler için yüksek çözünürlüklü kodu dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Doğrudan X Uygulama Başlatma',
        description: 'Tek dokunuşluk takip için X uygulamasını doğrudan profilinizde açar.'
      },
      {
        title: 'Kalıcı ve Sonsuza Dek Ücretsiz',
        description: 'Süresi dolmayan, her sayıda taramaya açık, ücretsiz statik bir kod.'
      },
      {
        title: 'Baskı için Vektör SVG',
        description: 'Bir konferans afişine, bir kitap kapağına veya bir postere ölçeklenir.'
      },
      {
        title: '%100 Özel',
        description: 'Yerel olarak üretilir, veri toplama olmadan.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Benchmarks for Twitter / X QR Codes',
      description: 'Follow S = D / 10 optical formula for reliable scanning across all smartphones.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Book Covers & Magazine Ads',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Follow on X"'
        ],
        [
          'Conference Slides & Decks',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '200 mm x 200 mm (8" x 8")',
          '"Scan to Join the Discussion on X"'
        ],
        [
          'Product Packaging & Inserts',
          '20 cm - 35 cm (8" - 14")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Follow Us for Updates & Giveaways"'
        ],
        [
          'Event Badges & Lanyards',
          '30 cm - 50 cm (12" - 20")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Connect on X"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Ana Konuşmalar ve Web Seminerleri',
        description: 'Bir kapanış slaytı kodu, canlı izleyici etkileşimini yönlendirir.'
      },
      {
        title: 'Yazar Kitapları ve Basılı Makaleler',
        description: 'Bir kitap kapağında veya bir makalede, bir kod okuyucuların gerçek zamanlı yorumlarınızı takip etmesini sağlar.'
      },
      {
        title: 'Podcast Kapak Görselleri ve Ürünler',
        description: 'Dinleyicileri X\'te canlı bir tartışmaya veya bir topluluk alanına gönderin.'
      },
      {
        title: 'Etkinlik Tabelaları ve Buluşma Yakalıkları',
        description: 'Bir teknoloji buluşmasında veya bir konferansta profilleri anında takas edin.'
      }
    ],
    troubleshooting: {
      title: '5 Common Twitter / X QR Code Pitfalls',
      points: [
        'URL\'de bir @. URL\'nin doğru oluşması için ham kullanıcı adını girin («handle», «@handle» değil).',
        'Her iki alan adı da çalışır. Hem x.com hem twitter.com desteklenir ve profilinize yönlendirir.',
        'Kontrast. Koyu modülleri beyaz veya açık bir arka plana karşı tutun.',
        'Logo boyutu. Genişliğin yaklaşık %30\'unu aşan her şey Seviye H düzeltmesini yenmeye başlar.',
        'Önce test edin. Toplu bir baskıdan önce hem iOS hem Android\'de tarayın.'
      ]
    },
    faqs: [
      {
        q: 'Twitter / X için nasıl bir QR kodu oluştururum?',
        a: 'Kullanıcı adınızı yazın veya profil bağlantınızı yapıştırın, biçimlendirin ve indirin.'
      },
      {
        q: 'Hem x.com hem twitter.com\'u destekliyor mu?',
        a: 'Her iki URL de desteklenir ve profilinize çözümlenir.'
      },
      {
        q: 'Tarama, mobilde X uygulamasını açar mı?',
        a: 'X uygulaması kurulu bir cihazda, tarama profilinizi uygulamada açar.'
      },
      {
        q: 'Belirli bir Tweet\'e veya Başlığa bağlantı verebilir miyim?',
        a: 'Tweet URL\'sini kopyalayıp yapıştırın.'
      },
      {
        q: 'Twitter QR kodlarının süresi dolar mı?',
        a: 'Hayır — statik bir kod süresiz çalışır.'
      },
      {
        q: 'Ortaya bir X veya Twitter logosu gömebilir miyim?',
        a: 'Merkez için X simgesini veya kuş logosunu yükleyin.'
      },
      {
        q: 'Hangi dosya biçimlerini indirebilirim?',
        a: 'Yüksek çözünürlüklü PNG, vektör SVG ve WebP.'
      },
      {
        q: 'Herhangi bir ücret veya tarama sınırı var mı?',
        a: 'Yok — ücretsiz, sınırsız tarama, filigran yok.'
      }
    ],
    bestPractices: 'X logosuyla temiz, yüksek kontrastlı siyah-beyaz bir stil kullanın, bir «X\'te Takip için Tara» satırı ekleyin ve baskı için vektör SVG dışa aktarın.'
  },
  '/linkedin-qr-code-generator': {
    sections: [
      {
        title: 'Zahmetsiz Profesyonel Ağ Kurma',
        paragraphs: [
          'Sürtünmesiz profesyonel bağlantılar kurmak için LinkedIn QR kodlarını kartvizitlere, konferans yakalıklarına ve e-posta imzalarına basın.',
          'Tarandığında, tek tıkla bağlanmak için LinkedIn profilinizi doğrudan LinkedIn uygulamasında veya tarayıcıda açar.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of LinkedIn Profile QR Codes',
      paragraphs: [
        'Bir LinkedIn QR kodu, genel profil URI\'sini (`https://www.linkedin.com/in/{profileId}`) veya bir şirket sayfası URL\'sini (`https://www.linkedin.com/company/{companyId}`) taşır. Bir tarama, telefonu doğrudan o profildeki LinkedIn uygulamasına atlatır.',
        'Bu doğrudan başlatma, onu bir konferansta veya bir müşteri toplantısında yararlı kılan şeydir — bir arama kutusuna ad yazmadan tek dokunuşla bir bağlantı isteği, bir mesaj veya bir takip.',
        'Kod statik ve kalıcıdır, bu yüzden basılı bir kartvizit veya bir portföy parçası, onu ne kadar süre yanınızda taşırsanız taşıyın hâlâ taranır.'
      ]
    },
    comparisonTable: {
      title: 'LinkedIn QR Codes vs. Paper Business Cards vs. NFC Cards',
      headers: [
        'Feature',
        'LinkedIn QR Code',
        'Paper Business Card',
        'NFC Smart Card'
      ],
      rows: [
        [
          'Connection Speed',
          'Instant (1 Scan → 1 Tap Connect)',
          'Slow (Manual typing required later)',
          'Fast (Tap phone)'
        ],
        [
          'Cost per Contact',
          '$0.00 (Free & Unlimited)',
          'High ongoing printing costs',
          '$20 - $50 hardware cost'
        ],
        [
          'Information Freshness',
          'Always real-time & up-to-date',
          'Static (Outdated if info changes)',
          'Dependent on app portal'
        ],
        [
          'Device Compatibility',
          '100% of all smartphone cameras',
          'N/A',
          'Requires NFC-enabled devices'
        ],
        [
          'Networking Retention',
          'High (Saved directly in LinkedIn network)',
          'Low (88% of paper cards thrown away)',
          'Medium'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Genel LinkedIn Profil URL\'nizi Kopyalayın',
        description: 'Profilinizi açın, genel bağlantıyı kopyalayın (örn. linkedin.com/in/adiniz) ve yapıştırın.'
      },
      {
        number: 2,
        title: 'Profesyonel LinkedIn Mavisiyle Biçimlendirin',
        description: 'LinkedIn mavisini (#0A66C2) kullanın, temiz köşe şekilleri ayarlayın ve «in» logosunu ekleyin.'
      },
      {
        number: 3,
        title: 'Baskıya Hazır Vektör SVG İndirin',
        description: 'Kabartmalı kartvizitler, konferans yakalıkları, özgeçmişler ve portföyler için SVG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Doğrudan LinkedIn Mobil Uygulama Başlatma',
        description: 'Bir tarama, tek dokunuşluk bir bağlantı isteği için LinkedIn uygulamasını açar.'
      },
      {
        title: 'Kalıcı ve Sonsuza Dek Ücretsiz',
        description: 'Sınırsız bağlantı ve ücret olmadan süresiz geçerli kalan statik bir kod.'
      },
      {
        title: 'Lüks Baskı için Vektör SVG',
        description: 'Mat, yaldız baskılı ve kabartmalı kartonlarda keskin.'
      },
      {
        title: '%100 Özel ve Güvenli',
        description: 'Hiçbir kimlik bilgisi veya kişisel veri toplanmaz — kodlama tarayıcınızda çalışır.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Placement Guide for LinkedIn QR Codes',
      description: 'Follow standard optical sizing benchmarks for professional stationery and badges.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Business Cards (Back Side)',
          '15 cm - 30 cm (6" - 12")',
          '22 mm x 22 mm (0.9" x 0.9")',
          '"Scan to Connect on LinkedIn"'
        ],
        [
          'Conference Badges & Lanyards',
          '30 cm - 60 cm (12" - 24")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Connect"'
        ],
        [
          'Printed Resumes & CVs',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to View Recommendations"'
        ],
        [
          'Trade Show Booth Backdrop',
          '1.5 m - 3.0 m (5 ft - 10 ft)',
          '200 mm x 200 mm (8" x 8")',
          '"Scan to Follow Company Page"'
        ],
        [
          'Executive Email Signatures',
          'Digital Screen',
          '120 px x 120 px',
          '"Connect on LinkedIn"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Yönetici ve Girişimci Kartvizitleri',
        description: 'Kartın arkasındaki bir kod, bir ilk görüşmeyi kaydedilmiş bir bağlantıya dönüştürür.'
      },
      {
        title: 'Konferans Yakalıkları ve Ağ Kurma Buluşmaları',
        description: 'Bir yakalık kodu, bir ağ kurma molasında insanların saniyeler içinde bağlanmasını sağlar.'
      },
      {
        title: 'İş Başvuru Özgeçmişleri ve Portföyleri',
        description: 'Bir özgeçmiş kodu, bir işe alım yöneticisinin tavsiyelerinizi ve portföyünüzü yazmadan açmasını sağlar.'
      },
      {
        title: 'Fuar B2B Müşteri Yaratımı',
        description: 'Bir stant kodu, kurumsal ziyaretçileri şirket sayfasını takip etmeye teşvik eder.'
      },
      {
        title: 'Konuşmacı Sunum Slayt Desteleri',
        description: 'Bir kapanış slaytı kodu, dinleyicilerin bağlanmasını ve iletişimde kalmasını sağlar.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for LinkedIn QR Scannability',
      points: [
        'Temiz bir özel URL. Uzun rastgele bir dize yerine düzenli bir genel URL ayarlayın — linkedin.com/in/john-doe — ve matris daha basit olur.',
        'Genel görünürlük. LinkedIn hesabı olmayan bir tarayanın da bilgilerinizi görebilmesi için genel profil görünürlüğünü açın.',
        'Güçlü kontrast. Beyaz kâğıt üzerinde koyu mavi veya siyah, loş bir konferans salonunda güvenilir şekilde okunur.',
        'Net bir sessiz bölge. Üzerine metin veya grafik binmeyen temiz bir kenarlık bırakın.',
        'Okunabilir bir CTA. Kodu okunabilir bir «LinkedIn\'de Bağlanmak için Tara» ile eşleştirin.'
      ]
    },
    faqs: [
      {
        q: 'Genel LinkedIn profil bağlantımı nasıl bulurum?',
        a: 'Profilinizi görüntüleyin ve URL\'yi tarayıcı çubuğundan ya da «İletişim bilgileri» bölümünden kopyalayın.'
      },
      {
        q: 'Tarama, mobilde LinkedIn uygulamasını açar mı?',
        a: 'LinkedIn uygulamasını doğrudan profil sayfanıza başlatır.'
      },
      {
        q: 'Basılı özgeçmişime bir LinkedIn QR kodu ekleyebilir miyim?',
        a: 'Bir işe alım uzmanının tavsiyelerinizi, portföyünüzü ve tüm geçmişinizi tek dokunuşla açmasını sağlar.'
      },
      {
        q: 'LinkedIn QR kodlarının süresi dolar mı?',
        a: 'Hayır. Profil URL\'niz geçerli olduğu sürece geçerli kalır.'
      },
      {
        q: 'Bir LinkedIn Şirket Sayfası için QR kodu oluşturabilir miyim?',
        a: 'Şirket sayfası URL\'sini (örn. https://www.linkedin.com/company/markaniz) yapıştırın ve üretin.'
      },
      {
        q: 'LinkedIn logosunu ortaya gömebilir miyim?',
        a: '«in» logosunu veya vesikalık fotoğrafınızı ortaya yerleştirin; Seviye H düzeltmesi onu kapsar.'
      },
      {
        q: 'Kartvizitler için önerilen boyut nedir?',
        a: 'Keskin kontrastla en az 20 x 20 mm (0,8 x 0,8 inç).'
      },
      {
        q: 'Bu LinkedIn QR oluşturucu ücretsiz mi?',
        a: 'Ücretsiz — sınırsız tarama, filigran yok, kayıt yok.'
      }
    ],
    bestPractices: 'Daha basit bir matris için temiz bir özel LinkedIn URL\'si ayarlayın, bir kart üzerinde 22x22 mm veya daha büyük basın ve beyaz üzerine LinkedIn mavisini (#0A66C2) kullanın.'
  },
  '/youtube-qr-code-generator': {
    sections: [
      {
        title: 'Çevrimdışı Pazarlamadan YouTube İzlenmesi ve Abonesi Kazanın',
        paragraphs: [
          'Video içeriğinize trafik çekmek için YouTube QR kodlarını etkinlik broşürlerine, konferans sunumlarına, ürün kılavuzlarına ve basılı reklamlara ekleyin.',
          'Azami esneklik için kanal URL\'lerini, tek tek video bağlantılarını ve oynatma listesi bağlantılarını destekler.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of YouTube QR Codes',
      paragraphs: [
        'Bir YouTube QR kodu standart bir YouTube URL\'si taşır — `https://youtube.com/@kanal`, `https://youtu.be/{videoId}` veya bir oynatma listesi bağlantısı. Tarayın, telefon HTTPS bağlantısını YouTube uygulama amacına (`vnd.youtube:{videoId}`) eşler; böylece oynatma, tarayıcı sapması olmadan uygulamanın içinde başlar.',
        'Bu devir en iyi izleme deneyimini verir: kullanıcı oracıkta beğenebilir, yorum yapabilir ve abone olabilir, ve kendi oturum açmış hesabıyla HD veya 4K\'da yayın izleyebilir.',
        'Kod, kesin standart video veya kanal adresini matriste saklar, bu yüzden içerik yayında olduğu sürece geçerli kalır.'
      ]
    },
    comparisonTable: {
      title: 'YouTube QR Codes vs. Manual Video Search vs. Video Embeds',
      headers: [
        'Feature',
        'YouTube QR Code',
        'Manual Search',
        'Web Video Embed'
      ],
      rows: [
        [
          'User Effort',
          '1 Camera Scan (Instant playback)',
          'High (Typing keywords & finding video)',
          'Medium (Must browse website)'
        ],
        [
          'App Integration',
          'Direct native YouTube app launch',
          'Manual search navigation',
          'Web browser player (Limited engagement)'
        ],
        [
          'Conversion to Subscriptions',
          'High (Native 1-tap subscribe)',
          'Low (Competitor distraction in search)',
          'Low (Requires opening app separately)'
        ],
        [
          'Print Compatibility',
          '100% print-ready (Flyers, posters, cards)',
          'N/A',
          'N/A (Digital only)'
        ],
        [
          'Lifetime Cost',
          '100% Free & Unlimited',
          'Free',
          'Hosting fees'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'YouTube Video, Kanal veya Oynatma Listesi Bağlantısını Yapıştırın',
        description: 'Genel kanal, video veya oynatma listesi URL\'nizi kopyalayıp yapıştırın.'
      },
      {
        number: 2,
        title: 'YouTube Kırmızısı ve Oynat Simgesiyle Özelleştirin',
        description: 'YouTube kırmızısını (#FF0000) kullanın, bir nokta deseni seçin ve oynat logosunu ortaya yerleştirin.'
      },
      {
        number: 3,
        title: 'SVG veya PNG Biçiminde İndirin',
        description: 'Posterler, afişler ve ambalaj için SVG\'yi ya da bir slayt için yüksek çözünürlüklü PNG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Doğrudan Yerel Uygulama Video Başlatma',
        description: 'Videoyu veya kanalı, etkileşimin en yüksek olduğu YouTube uygulamasında açar.'
      },
      {
        title: 'Kalıcı ve Sınırsız Taramalar',
        description: 'Sonsuza dek çalışan ve her sayıda izlenmeyi kaldıran statik bir kod, ücretsiz.'
      },
      {
        title: 'Büyük Format Baskı için Vektör SVG',
        description: 'Bir konferans afişine, bir bilborda veya bir sahne fonuna bulanıklık olmadan ölçeklenir.'
      },
      {
        title: 'Önce Gizlilik Mimarisi',
        description: 'Cihazınızda yapılır, izleme veya profilleme olmadan.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance Recommendations for YouTube QR Codes',
      description: 'Calculate minimum print size using S = D / 10 for rapid camera recognition.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Setup Manuals & Guides',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan for Step-by-Step Video Setup"'
        ],
        [
          'Conference Presentation Slides',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '250 mm x 250 mm (10" x 10")',
          '"Scan to Watch Recording & Subscribe"'
        ],
        [
          'Concert & Music Promotional Posters',
          '50 cm - 150 cm (20" - 60")',
          '80 mm x 80 mm (3.2" x 3.2")',
          '"Scan to Watch Official Music Video"'
        ],
        [
          'Event Stage Banners & Backdrops',
          '3.0 m - 8.0 m (10 ft - 26 ft)',
          '400 mm x 400 mm (16" x 16")',
          '"Scan to Stream Live Keynote"'
        ],
        [
          'Direct Mail Postcards & Brochures',
          '25 cm - 40 cm (10" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan for Video Demonstration"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Ürün Montaj ve Kurulum Video Kılavuzları',
        description: 'Bir ambalaj kodu, kafa karıştırıcı bir kâğıt kitapçığı net bir adım adım videoyla değiştirir.'
      },
      {
        title: 'Ana Konuşmalar ve Slayt Desteleri',
        description: 'Bir kapanış slaytı kodu, salonun abone olmasını veya demoyu yeniden izlemesini sağlar.'
      },
      {
        title: 'Müzik ve Film Eğlence Pazarlaması',
        description: 'Bir albüm kapağındaki, bir konser broşüründeki veya bir film afişindeki bir kod, fragmanı veya müzik videosunu yayınlar.'
      },
      {
        title: 'Emlak Video Mülk Gezileri',
        description: 'Bir bahçe tabelası kodu, geçen bir alıcı için sinematik bir gezinti açar.'
      },
      {
        title: 'Mutfak Ambalajı ve Tarif Eğitimleri',
        description: 'Bir malzeme paketi kodu, bir yemek eğitimine götürür.'
      }
    ],
    troubleshooting: {
      title: '5 Common YouTube QR Code Issues & Solutions',
      points: [
        'Gizli bir video. Her tarayanın izleyebilmesi için Herkese Açık veya Liste Dışı yapın.',
        'Yaş sınırı. Yaş kısıtlamalı bir video, izleyiciden önce oturum açmasını ister; bu sürtünme ekler.',
        'Geçici bir oynatma listesi bağlantısı. Geçici bir kuyruk bağlantısını değil, kalıcı bir genel oynatma listesi URL\'sini kullanın.',
        'Düşük kontrast. Pembe üzerine açık kırmızıyı atlayın; kırmızı ön planı beyaz bir arka plana karşı tutun.',
        'Uzun bir paylaşım bağlantısı. Daha temiz, daha az yoğun bir kod için kısaltılmış youtu.be biçimini kullanın.'
      ]
    },
    faqs: [
      {
        q: 'Bir QR kodunu YouTube kanalıma nasıl bağlarım?',
        a: 'Kanal URL\'nizi kopyalayın (örn. https://youtube.com/@kanal), yapıştırın, biçimlendirin ve indirin.'
      },
      {
        q: 'Kullanıcılara otomatik olarak abone olmalarını isteyen bir QR kodu oluşturabilir miyim?',
        a: 'Kanal URL\'nize ?sub_confirmation=1 ekleyin — https://youtube.com/@kanal?sub_confirmation=1 — ve tarama bir abone olma istemi açar.'
      },
      {
        q: 'Tarama, mobilde yerel YouTube uygulamasını açar mı?',
        a: 'Mobilde YouTube uygulamasını doğrudan videoya veya kanala başlatır.'
      },
      {
        q: 'Bir YouTube videosunda belirli bir zaman damgasına bağlantı verebilir miyim?',
        a: 'Oynatmayı bir dakika otuzda başlatmak için video URL\'sine ?t=1m30s ekleyin.'
      },
      {
        q: 'YouTube QR kodlarının süresi dolar mı?',
        a: 'Hayır — video yayında olduğu sürece videoya işaret etmeyi sürdürür.'
      },
      {
        q: 'Ortaya bir YouTube oynat simgesi ekleyebilir miyim?',
        a: 'Ortaya bir oynat düğmesi veya kanal avatarınızı yerleştirin; Seviye H düzeltmesi onu kapsar.'
      },
      {
        q: 'Ücretsiz YouTube QR kodlarında tarama sınırı var mı?',
        a: 'Yok. Buradaki her kod ömür boyu sınırsız tarama alır, ücretsiz.'
      },
      {
        q: 'İndirmek için hangi dosya biçimleri mevcut?',
        a: 'Yüksek çözünürlüklü PNG, vektör SVG ve WebP.'
      }
    ],
    bestPractices: '«Video Eğitimini İzlemek için Tara» gibi net bir satır ekleyin, daha basit bir matris için kısaltılmış youtu.be bağlantısını kullanın ve taramayı insanların gerçekte duracağı mesafeden test edin.'
  },
  '/instagram-qr-code-generator': {
    sections: [
      {
        title: 'Baskı ve Dijital QR Kodlarıyla Instagram Takipçilerinizi Büyütün',
        paragraphs: [
          'Organik takipçi çekmek için Instagram QR kodlarını kartvizitlere, ürün ambalajına, restoran menülerine, etkinlik afişlerine ve ürünlere basın.',
          'Tarandığında, QR kodu tek dokunuşla takip için Instagram uygulamasını doğrudan profil sayfanızda açar.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of Instagram QR Codes',
      paragraphs: [
        'Bir Instagram QR kodu, `https://instagram.com/{username}` biçiminde evrensel bir bağlantı taşır. Tarayın, telefon yerel uygulama şemasını (`instagram://user?username={username}`) çözer ve profili bir tarayıcı yerine Instagram uygulamasının içinde açar.',
        'Kullanıcı uygulamasında zaten oturum açmış olduğundan, bu devir oturum açma adımını tamamen atlar — profilinize Takip Et\'e dokunmaya ya da Reels\'lerinizi kaydırmaya hazır iner.',
        'Kodlar kalıcı ve statiktir, Seviye H\'de (%30 yedeklilik) inşa edilir. Birini Instagram degrade renkleriyle (#E1306C, #F77737, #FCAF45) biçimlendirin ve kamera simgesini ya da kendi logonuzu ortaya yerleştirin.'
      ]
    },
    comparisonTable: {
      title: 'Direct Instagram QR Code vs. Manual Handle Search vs. Linktree',
      headers: [
        'Feature / Aspect',
        'Instagram QR (QR Generator Online)',
        'Manual Handle Search',
        'Linktree Landing Page'
      ],
      rows: [
        [
          'Conversion Friction',
          'Zero friction (1 scan → Instant profile)',
          'High (Typing typos, multiple lookalikes)',
          'Medium (Additional click required)'
        ],
        [
          'App Launch Speed',
          'Instant native Instagram app launch',
          'Manual app open + search query',
          'Opens browser first, then app hop'
        ],
        [
          'Offline Scannability',
          '100% scannable from print & displays',
          'Requires user to remember username',
          'Requires multi-step navigation'
        ],
        [
          'Branding Customization',
          'Full gradient color matching & logo',
          'No visual branding',
          'Third-party branding template'
        ],
        [
          'Lifetime Validity',
          'Permanent lifetime validity (0 fees)',
          'Permanent',
          'Subject to service availability'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Instagram Kullanıcı Adını veya Profil URL\'sini Girin',
        description: 'Kullanıcı adınızı @ olmadan yazın (örn. markaniz) veya tam profil bağlantısını yapıştırın.'
      },
      {
        number: 2,
        title: 'Instagram Degrade Renklerini ve Logoyu Uygulayın',
        description: 'Instagram degradesini kullanın, bir nokta stili seçin ve kamera logosunu ortaya yerleştirin.'
      },
      {
        number: 3,
        title: 'Baskı için Vektör SVG veya Yüksek Çözünürlüklü PNG İndirin',
        description: 'Etiketler, çıkartmalar, ambalaj ve tabelalar için SVG\'yi ya da dijital için yüksek çözünürlüklü PNG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Yerel Uygulama Derin Bağlantısı',
        description: 'Bir tarama, kullanıcıyı tek dokunuşluk takip için kurulu Instagram uygulamasına bırakır.'
      },
      {
        title: 'Kalıcı ve Sınırsız Taramalar',
        description: 'Son kullanma tarihi ve tarama sınırı olmayan statik bir Instagram kodu, ücretsiz.'
      },
      {
        title: 'Fiziksel Baskı için Vektör SVG',
        description: '2 cm\'lik bir ürün etiketinden bir fuar afişine kadar bulanıklık olmadan ölçeklenir.'
      },
      {
        title: '%100 Gizlilik ve Sıfır İzleme',
        description: 'Her şey istemci tarafında çalışır; izleme yok, günlük yok ve oturum açma yok.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Recommended Placement for Instagram QR Codes',
      description: 'Follow the optical scanning rule S = D / 10 to ensure instant scannability across all lighting conditions.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Packaging & Box Flaps',
          '20 cm - 40 cm (8" - 16")',
          '25 mm x 25 mm (1.0" x 1.0")',
          '"Scan to Tag Us on Instagram"'
        ],
        [
          'Apparel Tags & Clothing Labels',
          '15 cm - 30 cm (6" - 12")',
          '22 mm x 22 mm (0.9" x 0.9")',
          '"Scan & Follow for Giveaways"'
        ],
        [
          'Restaurant Table Cards & Menus',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to View Daily Food Specials"'
        ],
        [
          'Storefront Windows & Cash Wraps',
          '50 cm - 100 cm (20" - 40")',
          '60 mm x 60 mm (2.4" x 2.4")',
          '"Follow Us for Exclusive In-Store Deals"'
        ],
        [
          'Event Banners & Stage Backdrops',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '300 mm x 300 mm (12" x 12")',
          '"Scan to Share Your Event Photos"'
        ]
      ]
    },
    useCases: [
      {
        title: 'E-Ticaret Kutu Açma Deneyimleri',
        description: 'İrsaliyedeki bir kod, alıcıları bir fotoğraf paylaşmaya ve markanızı etiketlemeye teşvik eder.'
      },
      {
        title: 'Restoran ve Kafe Masa Tabelaları',
        description: 'Müşteriler doğrudan fotoğraflı menünüze, yemek reels\'lerinize ve öne çıkan hikâyelerinize atlar.'
      },
      {
        title: 'Güzellik Salonları ve Fitness Stüdyoları',
        description: 'Resepsiyonda bekleyen müşterilere öncesi-sonrası dönüşümleri ve antrenman reels\'lerini gösterin.'
      },
      {
        title: 'Moda ve Giyim Ürün Yönetimi',
        description: 'Bir askı etiketi kodu, bir alışverişçi için stil fikirlerini ve gerçek müşteri lookbook\'larını açar.'
      },
      {
        title: 'Sanatçı ve Üretici Sergileri',
        description: 'Sanat eserinin yanındaki bir kod, bir galeri ziyaretçisinin yaratıcı yolculuğu gerçek zamanlı takip etmesini sağlar.'
      }
    ],
    troubleshooting: {
      title: '5 Common Instagram QR Code Scanning Issues & Fixes',
      points: [
        'Kullanıcı adında bir @. Geçerli bir URL için kullanıcı adını «@» olmadan girin («markaadi» kullanın, «@markaadi» değil).',
        'Gizli bir hesap. Profil gizliyse, tarayanlar ızgarayı hemen görmek yerine bir takip isteği göndermek zorunda kalır.',
        'Düşük kontrast. Beyaz üzerine açık pembe bir ön plan, kameraya kilitlenecek bir şey bırakmaz. Kontrastı yüksek tutun.',
        'Aşırı büyük bir logo. Onu kod genişliğinin %30\'unun altında tutun; hata düzeltme yine de işini yapabilir.',
        'Bir kullanıcı adı değişikliği. Hesabınızı yeniden adlandırın, basılı her kod bozulur. Toplu baskıdan önce kullanıcı adını sabitleyin.'
      ]
    },
    faqs: [
      {
        q: 'Instagram profilim için nasıl bir QR kodu oluştururum?',
        a: 'Kullanıcı adınızı @ olmadan girin (veya profil URL\'nizi yapıştırın), renklerinizi ve logonuzu ayarlayın ve indirin — ücretsiz.'
      },
      {
        q: 'Tarama Instagram uygulamasını doğrudan açar mı?',
        a: 'Modern bir iPhone veya Android\'de evrensel bağlantı, profilinizi bir tarayıcı yerine Instagram uygulamasının içinde açar.'
      },
      {
        q: 'QR koduna bir Instagram logosu ekleyebilir miyim?',
        a: 'Seviye H, kamera simgesi ya da kendi simgeniz için merkezin üzerinde size yer verir.'
      },
      {
        q: 'Instagram QR kodlarının süresi dolar mı?',
        a: 'Hayır — statik bir kod kalıcıdır, sınırsız taramayla.'
      },
      {
        q: 'Belirli bir Instagram Reel\'ine veya gönderisine bağlantı verebilir miyim?',
        a: 'Reel\'in veya gönderinin URL\'sini kopyalayın ve tam bağlantıyı yapıştırın.'
      },
      {
        q: 'Çıkartma ve ambalaj basmak için en iyi biçim hangisi?',
        a: 'Ticari bir baskı ve çıkartma kesici için vektör SVG ya da dijital için PNG.'
      },
      {
        q: 'Bu Instagram QR kod oluşturucu ticari kullanım için ücretsiz mi?',
        a: 'Ücretsiz — filigran yok, tarama sınırı yok, abonelik yok.'
      },
      {
        q: 'Instagram QR kodları için hangi kontrast oranını kullanmalıyım?',
        a: 'Modüller ile arka plan arasında en az 4.5:1. Beyaz veya açık sarı üzerine koyu magenta ya da mor çok temiz taranır.'
      }
    ],
    bestPractices: 'Anında tanınırlık için Instagram degradesini kullanın, net bir «Takip için Tara» satırı ekleyin ve büyük bir baskıdan önce baskıyı birkaç farklı ışıkta test edin.'
  },
  '/googleform-qr-code-generator': {
    sections: [
      {
        title: 'Anket ve Geri Bildirim Yanıt Oranlarını En Üst Düzeye Çıkarın',
        paragraphs: [
          'Ürün ambalajına, fişlere, etkinlik tabelalarına veya sunum slaytlarına bir Google Forms QR kodu yerleştirmek, kitlelerin anketleri mobil cihazlarında anında tamamlamasını sağlar.',
          'Elle veri girişi hatalarını ortadan kaldırın ve doğrudan, sürtünmesiz erişimle müşteri yanıt oranlarını artırın.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Google Forms Survey & Feedback QR Codes',
      paragraphs: [
        'Bir Google Forms QR kodu, yayınlanmış bir formun doğrudan bağlantısını taşır — bir memnuniyet anketi, bir etkinlik LCV\'si, bir sınıf testi. Tarayın ve duyarlı form doğrudan telefon tarayıcısında yüklenir — bir fişten yazılacak uzun, hataya açık bir URL olmadan.',
        'Bir URL yazmak, geri bildirim yanıt oranlarının çöktüğü yerdir; %80\'in çok üzerinde düşer. Bir kod bu adımı kaldırır: yanıtlayan tarar, sorular arasında ilerler ve saniyeler içinde gönderir.',
        'Gönderdikleri her şey, doğrudan Google Forms panonuza ve bağlı Google Sheet\'e gerçek zamanlı akar; canlı grafikler, otomatik uyarılar ve bağladığınız herhangi bir Zapier veya webhook için hazır.'
      ]
    },
    comparisonTable: {
      title: 'Google Forms QR Code vs. Traditional Paper Feedback Forms',
      headers: [
        'Evaluation Factor',
        'Google Forms QR Code',
        'Paper Feedback Forms'
      ],
      rows: [
        [
          'Data Collection Speed',
          'Instant real-time entry into Google Sheets',
          'Hours/days of manual data entry by staff'
        ],
        [
          'Customer Completion Rate',
          'High (Frictionless mobile form interface)',
          'Low (Requires finding pen, handwriting responses)'
        ],
        [
          'Transcription Errors',
          '0% (User enters data directly)',
          'High (Misreading illegible handwriting)'
        ],
        [
          'Environmental Waste',
          'Zero paper waste (Unlimited digital submissions)',
          'Thousands of discarded paper survey sheets'
        ],
        [
          'Real-Time Alert Automation',
          'Triggers instant email alerts on negative reviews',
          'Delayed by days until staff manually reviews paper'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Yayınlanmış Google Form Bağlantınızı Alın ve Yapıştırın',
        description: 'Google Forms\'ta mor Gönder düğmesine tıklayın, bağlantı simgesini seçin, «URL\'yi Kısalt»ı işaretleyin ve sonucu yapıştırın.'
      },
      {
        number: 2,
        title: 'Forms Moruyla Biçimlendirin ve Marka Logosunu Gömün',
        description: 'Modülleri biçimlendirin, Google Forms morunu (#7248B9) veya kendi renklerinizi uygulayın ve ortaya bir simge yerleştirin.'
      },
      {
        number: 3,
        title: 'Masa Gösterimleri ve Tabelalar için Vektör SVG İndirin',
        description: 'Masa kartları, fişler ve sınıf posterleri için SVG\'yi ya da bir sunum slaytı için PNG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Patlayıcı Anket ve İnceleme Yanıt Oranları Sağlayın',
        description: 'Yemek veya ziyaret hâlâ tazeyken geri bildirimi yakalayın — yazılacak URL olmaması terk oranını yok eder.'
      },
      {
        title: 'Google Sheets ve Panolarla Gerçek Zamanlı Senkron',
        description: 'Her gönderim, canlı analiz ve uyarılar için anında bağlı e-tablonuza düşer.'
      },
      {
        title: 'Temassız, Hijyenik Mobil Veri Girişi',
        description: 'Bir klinikte, restoranda veya sınıfta paylaşılan pano ya da kalem yok — herkes kendi telefonunu kullanır.'
      },
      {
        title: 'Ücretsiz Ömür Boyu Kalıcı Geçerlilik',
        description: 'Süre dolmadan sınırsız yanıtı ücretsiz toplayan statik bir Forms kodu.'
      }
    ],
    sizingMatrix: {
      title: 'Google Forms QR Code Sizing & Placement Guide',
      description: 'Place your Google Forms QR codes where customers have downtime to complete short questionnaires.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Restaurant Table Tents & Receipt Footers',
          '25 cm - 40 cm (10" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Rate Your Meal & Win $50"'
        ],
        [
          'Retail Checkout Counters & Bag Inserts',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          '"Scan to Leave Quick Feedback"'
        ],
        [
          'Classroom Presentation Slides & Whiteboards',
          '1.0 m - 3.0 m (3 ft - 10 ft)',
          '150 mm x 150 mm (6" x 6")',
          '"Scan to Submit Daily Quiz Answers"'
        ],
        [
          'Event Registration Banners & Posters',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Complete Fast Event Check-In"'
        ],
        [
          'Medical Clinic Waiting Rooms & Desks',
          '30 cm - 60 cm (12" - 24")',
          '45 mm x 45 mm (1.8" x 1.8")',
          '"Scan to Complete Digital Intake Form"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Restoran ve Konaklama Misafir Memnuniyeti Anketleri',
        description: 'Bir masa kartı kodu, müşterilerden hizmeti ve yemeği bir dakikadan kısa sürede puanlamasını ister.'
      },
      {
        title: 'Sınıf Testleri, Yoklama ve Öğrenci Anketleri',
        description: 'Bir öğretmen bir Forms kodu yansıtır; öğrenciler ödev, test veya yoklama göndermek için tarar.'
      },
      {
        title: 'Fuar Standı Müşteri Yakalama ve Sorgular',
        description: 'Bir ziyaretçinin ilgi alanlarını ve iletişim bilgilerini kendi telefonundan doğrudan bir e-tabloya toplayın.'
      },
      {
        title: 'Etkinlik LCV ve Atölye Kayıtları',
        description: 'Bir poster kodu, katılımcıların oturumlara ve yemeklere oracıkta kaydolmasını sağlar.'
      },
      {
        title: 'Sağlık Hasta Kabulü ve Sağlık Taramaları',
        description: 'Hastalar bekleme odasında kendi telefonlarında temassız bir kabul anketi doldurur.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Google Forms QR Code Scanning & Access Issues',
      points: [
        'Zorunlu bir oturum açma. Gerçekten gerekmedikçe, Form ayarlarında «1 yanıtla sınırla»yı kapatın — bir Google oturumu açmayı zorunlu kılar ve sürtünme ekler.',
        'Yanlış bağlantı. Genel bağlantıyı mor Gönder iletişiminden kopyalayın, tarayıcı çubuğundaki /edit URL\'sinden değil.',
        'Kısaltılmamış bir URL. Ham bir Forms URL\'si çok uzundur. Daha temiz, daha az yoğun bir matris için önce Forms\'ta «URL\'yi Kısalt»ı işaretleyin.',
        'Çok fazla soru. Tamamlamayı yüksek tutmak için bir mobil QR anketini beş soru veya daha azda tutun.',
        'Kapalı bir form. «Yanıtları kabul et»i kapatırsanız, tarayanlar kapalı form mesajıyla karşılaşır. Kampanya boyunca açık bırakın.'
      ]
    },
    faqs: [
      {
        q: 'QR kodum için doğru genel Google Form bağlantısını nasıl alırım?',
        a: 'Formu açın, mor Gönder düğmesine tıklayın, Bağlantı simgesini seçin, «URL\'yi Kısalt»ı işaretleyin ve sonucu yapıştırmak için kopyalayın.'
      },
      {
        q: 'Yanıtlayanların formu doldurmak için bir Google hesabı gerekir mi?',
        a: '«1 yanıtla sınırla»yı ve dosya yükleme sorularını kapattığınız sürece hayır. O zaman herkes oturum açmadan bir mobil tarayıcıda tamamlar.'
      },
      {
        q: 'Google Forms QR kodlarının süresi dolar mı veya ücret alır mı?',
        a: 'Hayır. Statik bir Forms kodu asla geçerliliğini yitirmez; yanıtlayanlar onu sınırsız tarayabilir ve size asla fatura kesilmez.'
      },
      {
        q: 'Belirli alanları otomatik dolduran bir Google Form\'a bağlantı verebilir miyim?',
        a: 'Forms\'ta üç nokta menüsü > «Önceden doldurulmuş bağlantı al»ı kullanın, varsayılanlarınızı ayarlayın, o bağlantıyı kopyalayın ve kodu ondan üretin. Tarayanlar o alanları dolu görür.'
      },
      {
        q: 'Gönderilen yanıtlar nereye gider?',
        a: 'Yanıtlar sekmesine ve gerçek zamanlı olarak, bağladığınız hangi Google Sheet ise ona.'
      },
      {
        q: 'QR koduna okulumun veya şirketimin logosunu gömebilir miyim?',
        a: 'Gömebilirsiniz. Seviye H yedekliliği, ortaya yerleştirilen bir Forms simgesini veya kendi logonuzu rahatça kapsar.'
      },
      {
        q: 'Masa kartları ve broşürler basmak için hangi dosya biçimi en iyisi?',
        a: 'Net baskı için vektör SVG ya da bir sunum slaytı için yüksek çözünürlüklü PNG.'
      },
      {
        q: 'Anket bağlantı verim üretim sırasında gizli tutuluyor mu?',
        a: 'Tutuluyor. İş istemci tarafında yapılır, bu yüzden hiçbir form URL\'si veya anket verisi yüklenmez ya da saklanmaz.'
      }
    ],
    bestPractices: 'Anketi üç ila beş soruda tutun, daha basit bir matris için kısaltılmış Forms URL\'sini kullanın ve tamamlamayı artırmak için küçük bir teşvik — bir indirim, bir çekiliş katılımı — sunun.'
  },
  '/crypto-qr-code-generator': {
    sections: [
      {
        title: 'Hatasız Kripto Para Ödemeleri ve Bağışları',
        paragraphs: [
          'Kripto para cüzdan adresleri uzundur ve elle kopyala-yapıştır hatalarına açıktır. QR kodları, satış noktası işlemleri veya çevrimiçi bağışlar sırasında %100 adres doğruluğu sağlar.',
          'MetaMask, Trust Wallet, Coinbase Wallet ve tüm önde gelen kripto uygulamalarıyla sorunsuz çalışır.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Cryptocurrency Payment URI QR Codes',
      paragraphs: [
        'Bir kripto QR kodu, bir genel alım adresini ve isteğe bağlı ödeme ayrıntılarını standart bir ödeme URI\'sinde taşır — Bitcoin\'in BIP-0021\'i (`bitcoin:<Address>?amount=<Amount>&label=<Label>`), Ethereum\'un EIP-681\'i (`ethereum:<Address>`) veya USDT, Solana ve Litecoin için eşdeğeri.',
        'Kripto adresleri, 34 ila 64 karakterlik uzun, affetmeyen dizelerdir (`bc1q...`, `0x...`). Birini elle yazın, tek bir yanlış karakter fonları boşluğa gönderir — kalıcı olarak, bir blok zincirinde geri ödeme olmadan.',
        'Bir QR kodu bu riski kaldırır. Onu MetaMask, Trust Wallet, Coinbase Wallet, Phantom veya Binance içinde tarayın; alıcı adresi ve tutar tam olarak dolar; bu da bir satış noktası ödemesini, bir bahşiş kavanozunu veya bir fatura ödemesini hızlı ve hatasız kılar.'
      ]
    },
    comparisonTable: {
      title: 'Crypto QR Code Payment vs. Manual Address Copy-Pasting',
      headers: [
        'Security / Usability Factor',
        'Crypto QR Code Payment',
        'Manual Address Copy / Typing'
      ],
      rows: [
        [
          'Address Accuracy',
          '100% byte-for-byte exact (Zero risk of typos)',
          'High risk of transcription errors and fund loss'
        ],
        [
          'Clipboard Hijacking Defense',
          'Bypasses desktop/mobile clipboard malware',
          'Vulnerable to malware that swaps copied addresses in clipboard'
        ],
        [
          'Payment Speed',
          '1 Scan + Review + Confirm (< 5 seconds)',
          '30 - 60 seconds (Copying, pasting, verifying characters)'
        ],
        [
          'Pre-Set Payment Amount',
          'Auto-fills exact crypto amount in wallet',
          'User must manually calculate and enter amount'
        ],
        [
          'Point of Sale Integration',
          'Instant tabletop or register display',
          'Requires displaying 42+ character text string'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Kripto Parayı Seçin ve Genel Cüzdan Adresini Girin',
        description: 'Bitcoin (BTC), Ethereum (ETH), USDT (TRC-20/ERC-20), Solana (SOL) veya Litecoin (LTC) seçin ve genel alım adresinizi yapıştırın.'
      },
      {
        number: 2,
        title: 'İsteğe Bağlı Sabit Bir Ödeme Tutarı Belirtin',
        description: 'Sabit bir tutar ayarlayın veya ödeyenin kendi bahşişini ya da bağışını girmesi için boş bırakın.'
      },
      {
        number: 3,
        title: 'POS Ekranları veya Faturalar için Vektör SVG İndirin',
        description: 'Coin logosunu ekleyin ve bir kasa standı için SVG ya da bir PDF faturası için PNG dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Yıkıcı Adres Yazma Hatalarını Ortadan Kaldırın',
        description: 'Tam adres otomatik dolar, bu yüzden bir gönderen yanlış yazılmış bir karakter yüzünden fon kaybedemez.'
      },
      {
        title: 'Büyük Kripto Paralar ve Stablecoin\'ler için Destek',
        description: 'Bitcoin, Ethereum, USDT, Solana, Litecoin ve BNB için standart ödeme kodları.'
      },
      {
        title: 'BIP-0021 ve EIP-681 Standart Uyumluluğu',
        description: 'MetaMask, Trust Wallet, Coinbase, Phantom ve Binance\'te doğru okunur.'
      },
      {
        title: '%100 İstemci Tarafı Kriptografik Güvenlik',
        description: 'Genel adresiniz tarayıcınızda yerel olarak kodlanır. Özel anahtarlara asla dokunulmaz veya sorulmaz.'
      }
    ],
    sizingMatrix: {
      title: 'Crypto QR Code Sizing & Placement Specifications',
      description: 'Crypto QR codes should be clearly displayed with visible network labels.',
      headers: [
        'Placement Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Substrate'
      ],
      rows: [
        [
          'Point-of-Sale (POS) Cash Registers',
          '25 cm - 40 cm (10" - 16")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Acrylic Countertop Stand / Metal Plate'
        ],
        [
          'Content Creator Livestreams & Tip Jars',
          'On-Screen Digital Display',
          '200 x 200 px on screen',
          'High-Contrast Screen Overlay'
        ],
        [
          'PDF Invoices & Freelance Billboards',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Digital PDF / Vector SVG'
        ],
        [
          'Charity & Non-Profit Donation Banners',
          '50 cm - 100 cm (20" - 40")',
          '80 mm x 80 mm (3.2" x 3.2")',
          'Matte Vinyl Banner'
        ],
        [
          'Storefront Window Stickers',
          '40 cm - 80 cm (16" - 32")',
          '60 mm x 60 mm (2.4" x 2.4")',
          'Weatherproof Matte Vinyl Decal'
        ]
      ]
    },
    useCases: [
      {
        title: 'Perakende Mağaza ve Restoran POS Ödemeleri',
        description: 'Kasadaki bir kod, bir müşterinin mobil cüzdanından Bitcoin veya USDT ile ödeme yapmasını sağlar.'
      },
      {
        title: 'İçerik Üreticisi ve Yayıncı Bahşiş Kavanozları',
        description: 'Bir Bitcoin veya Ethereum bağış kodu bir canlı yayında, bir Twitch bindirmesinde veya bir blogda yer alır.'
      },
      {
        title: 'Serbest Çalışan ve Ajans Fatura Ödemeleri',
        description: 'PDF faturadaki bir kod, uluslararası bir projeyi sınırlar ötesinde, havale gecikmesi olmadan hızlıca öder.'
      },
      {
        title: 'Hayır İşleri ve İnsani Afet Yardımı',
        description: 'Bağışçılar kriptoyu doğrudan şeffaf, denetlenebilir bir zincir üstü adrese verir.'
      },
      {
        title: 'Pop-Up Mağazalar ve Açık Hava Pazarları',
        description: 'Bir el sanatları fuarında veya bir yemek pazarında, satıcı donanım ücreti olmadan temassız ödeme alın.'
      }
    ],
    troubleshooting: {
      title: 'Critical Safety Precautions for Crypto QR Codes',
      points: [
        'Ağı adlandırın. Kodu tam zincirle etiketleyin — «USDT (TRC-20)» ile «USDT (ERC-20)». Uyumsuz ağlar üzerinden gönderin, fonlar gider.',
        'Yalnızca genel adres. Bir kripto kodu genel alım adresinizi taşımalı, başka hiçbir şeyi değil. Asla bir özel anahtarı, bir tohum ifadesini veya bir kurtarma parolasını kodlamayın.',
        'Önce küçük test edin. Büyük bir baskıyı onaylamadan önce küçük bir test işlemi yapın.',
        'İnce stilden kaçının. Degradeler veya metalik mürekkepler optik sensörü şaşırtır. Beyaz üzerine koyu modüller.',
        'Ekranı koruyun. Halka açık bir mekânda, kurcalamayı belli eden bir akrilik stand, birinin kodunuzun üzerine sahte bir çıkartma yapıştırmasını engeller.'
      ]
    },
    faqs: [
      {
        q: 'Kripto QR kodumu herkese açık göstermek güvenli mi?',
        a: 'Evet — yalnızca genel alım adresinizi tutar. İnsanlar cüzdanınıza fon gönderebilir, ama kimse ondan çekemez. Özel anahtarlarınız tamamen sizin kontrolünüzde kalır.'
      },
      {
        q: 'Bu kripto QR kodlarını hangi cüzdan uygulamaları tarayabilir?',
        a: 'Standart mobil cüzdanların hepsi standart URI kodlarını okur — MetaMask, Trust Wallet, Coinbase Wallet, Binance, Phantom, Exodus, Kraken, Electrum.'
      },
      {
        q: 'QR kodunda sabit bir ödeme tutarı belirtebilir miyim?',
        a: '0.005 BTC veya 50 USDT gibi isteğe bağlı bir tutar ayarlayın; cüzdan taramada onu otomatik doldurur.'
      },
      {
        q: 'Biri adresime farklı bir kripto para gönderirse ne olur?',
        a: 'Uyumsuz bir coin göndermek — örneğin bir Ethereum adresine Bitcoin — fonları kalıcı olarak kaybettirebilir. Tam da bu yüzden kod, kesin coin ve ağ ile etiketlenmelidir.'
      },
      {
        q: 'Kripto QR kodlarının süresi dolar mı veya işlem ücreti alır mı?',
        a: 'Kod kalıcı ve ücretsizdir. Standart blok zinciri gaz ücretleri yalnızca bir ödeyen gerçekten bir işlem gönderdiğinde uygulanır — bu, ağın ücretidir, bizim değil.'
      },
      {
        q: 'Genel cüzdan alım adresimi nerede bulurum?',
        a: 'Cüzdan uygulamanızı açın, Al bölümüne gidin, coini seçin ve gösterilen genel adresi kopyalayın.'
      },
      {
        q: 'QR koduna resmi Bitcoin veya Ethereum logosunu gömebilir miyim?',
        a: 'Elbette. Seviye H, hasarlı bir kodun yaklaşık %30\'una kadarını yeniden inşa edebildiğinden, coin logosu hiçbir şeyi bozmadan tam ortaya oturabilir.'
      },
      {
        q: 'Cüzdan adreslerim QR Generator Online sunucularında saklanıyor mu?',
        a: 'Hayır. Her şey yerel olarak olur, bu yüzden cüzdan adresleriniz asla yüklenmez, kaydedilmez veya izlenmez.'
      }
    ],
    bestPractices: 'Üretmeden önce genel alım adresinizi karakter karakter doğrulayın ve kodu kesin coin ve blok zinciri ağıyla açıkça etiketleyin — yanlış ağ üzerinden bir transfer geri alınamaz.'
  },
  '/event-qr-code-generator': {
    sections: [
      {
        title: 'Tek Dokunuşla Takvim Senkronuyla Etkinlik Katılımını Artırın',
        paragraphs: [
          'Etkinlik QR kodlarını tarih-ayırtma kartlarına, konferans yakalıklarına, bilet onaylarına veya web semineri açılış sayfalarına ekleyin.',
          'Etkinlik başlığını, başlangıç ve bitiş zaman damgalarını, mekân adresini ve açıklama notlarını içerir.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of iCalendar VEVENT Calendar QR Codes',
      paragraphs: [
        'Bir etkinlik QR kodu, RFC 5545\'te tanımlanan iCalendar biçiminde (`BEGIN:VEVENT` / `END:VEVENT`) bir takvim girişi taşır. Başlığı (`SUMMARY`), mekânı (`LOCATION`), açıklamayı (`DESCRIPTION`), başlangıcı (`DTSTART`), bitişi (`DTEND`) ve saat dilimini tutar.',
        'Tarayın, telefon veriyi okur ve bir «Takvime Ekle» sayfası sunar. Tek dokunuş, etkinliği başlangıç saati, mekân ve otomatik hatırlatıcıyla birlikte Apple Calendar, Google Calendar veya Outlook\'a bırakır.',
        'Takvim girişini otomatikleştirmek, katılımı yükselten şeydir. Kaçan web seminerleri, unutulan tarihler ve çakışan randevular çoğunlukla birinin etkinliği en baştan eklememesine dayanır — ve bir tarama bu adımı onun üzerinden alır.'
      ]
    },
    comparisonTable: {
      title: 'Event Calendar QR Code vs. Manual Calendar Entry',
      headers: [
        'Feature / Aspect',
        'iCalendar Event QR Code',
        'Manual Calendar Entry'
      ],
      rows: [
        [
          'Calendar Addition Speed',
          '1 Scan + 1 Tap (< 3 seconds)',
          '45 - 90 seconds (Typing Title, Date, Time, Location)'
        ],
        [
          'Date & Time Accuracy',
          '100% exact (No timezone or AM/PM mistakes)',
          'Frequent human errors in date and time entry'
        ],
        [
          'Automated Reminder Alerts',
          'Automatically sets 15/30-min advance alerts',
          'User frequently forgets to configure reminders'
        ],
        [
          'Venue Address Integration',
          'Embeds complete venue address and GPS link',
          'User often omits venue details in manual entries'
        ],
        [
          'Cross-Platform Support',
          'Native on iOS Calendar, Google Calendar, Outlook',
          'Manual entry required per calendar app'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Etkinlik Başlığını, Konumunu ve Özet Açıklamasını Girin',
        description: 'Etkinlik adını, mekân adresini veya toplantı URL\'sini ve kısa bir açıklama ekleyin.'
      },
      {
        number: 2,
        title: 'Saat Dilimi Doğruluğuyla Başlangıç ve Bitiş Tarih-Saatini Ayarlayın',
        description: 'Kesin başlangıç ve bitişi, mekânın yerel saat diliminde ayarlayın — saat farkı hataları tam da oradan sızar.'
      },
      {
        number: 3,
        title: 'Tasarımı Özelleştirin ve Baskı Öğelerini İndirin',
        description: 'Bir takvim simgesi veya etkinlik logosu ekleyin, renklerinizi uygulayın ve davetiyeler için SVG ya da ekran için PNG dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Tek Dokunuşla Akıllı Telefon Takvimine Ekleme',
        description: 'Davetliler etkinliği tek dokunuşla Apple Calendar, Google Calendar veya Outlook\'a bırakır.'
      },
      {
        title: 'Otomatik Yerel Hatırlatıcı Uyarıları',
        description: 'Takvim girişi, etkinlik başlamadan telefonun varsayılan hatırlatıcısını tetikler, böylece kimsenin bir tane ayarlaması gerekmez.'
      },
      {
        title: 'Tam Mekân Adresleri ve Sanal Bağlantılar Gömün',
        description: 'Sürüş adresini ya da Zoom veya Teams bağlantısını girişin içinde saklayın, böylece katılımcılar ihtiyaç duyduklarında elinin altında olur.'
      },
      {
        title: 'Süre Dolmadan Kalıcı Statik Barkodlar',
        description: 'Aylık ücreti veya tarama sınırı olmadan süresiz geçerli kalan statik bir iCalendar kodu.'
      }
    ],
    sizingMatrix: {
      title: 'Event QR Code Print Sizing Specifications',
      description: 'Event QR codes have moderate data density depending on description length.',
      headers: [
        'Placement Medium',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Format'
      ],
      rows: [
        [
          'Concert & Theater Tickets',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          'Vector SVG / 300 DPI PNG'
        ],
        [
          'Wedding Invitations & Save-the-Dates',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Vector SVG / Heavy Cardstock'
        ],
        [
          'Conference Programs & Badge Lanyards',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Vector SVG / Synthetic Badge'
        ],
        [
          'Event Posters & Promotional Flyers',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          'Vector SVG'
        ],
        [
          'Keynote Slides & Webinar Closing Screens',
          'Digital Display View',
          '250 x 250 px on screen',
          'High-Res PNG @ 1080p/4K'
        ]
      ]
    },
    useCases: [
      {
        title: 'Konserler, Festivaller ve Tiyatro Gösterileri',
        description: 'Biletteki bir kod, gösteri saatini ve mekânı bilet sahibinin telefonuna kaydeder.'
      },
      {
        title: 'Düğünler, Yıldönümleri ve Özel Kutlamalar',
        description: 'Bir tarih-ayırtma kodu, günü bir misafirin takvimine aylar öncesinden yazar.'
      },
      {
        title: 'Kurumsal Konferanslar ve Ana Konuşma Programları',
        description: 'Katılımcılar, belirli atölyeleri ve ana konuşmaları kendi takvimlerine eklemek için programı tarar.'
      },
      {
        title: 'Web Seminerleri, Canlı Yayınlar ve Ürün Lansmanları',
        description: 'Tanıtım yayınındaki bir kod, izleyicilerin yayın tarihini oracıkta kaydetmesini sağlar.'
      },
      {
        title: 'Perakende Flaş İndirimleri ve Mevsimsel Promosyonlar',
        description: 'Sadık müşterilere bir bayram indirimini veya bir VIP alışveriş saatini kaçmadan önce hatırlatın.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Event QR Code Calendar Scheduling Errors',
      points: [
        'Saat dilimi kayması. Saatleri mekânın yerel diliminde girin, yoksa katılımcılar bir saat şaşar.',
        'Uzun bir açıklama. Statik alana tam bir programı sıkıştırmak matrisi şişirir. Yaklaşık 150 karakterin altında tutun.',
        'Ters tarihler. Bitişin başlangıçtan sonra olduğundan emin olun, yoksa takvim girişi reddeder.',
        'Şık bir kartta düşük kontrast. Fildişi üzerinde pastel veya altın varaklı modüller taramada başarısız olur. Açık üzerine koyu.',
        'İstem yok. Etiketleyin — «Etkinliği Takvime Eklemek için Tara».'
      ]
    },
    faqs: [
      {
        q: 'Biri bir etkinlik QR kodunu taradığında ne olur?',
        a: 'iOS\'ta bir «Takvime Ekle» istemi, Apple Calendar\'ı başlık, tarihler, mekân ve açıklama dolu halde açar. Android\'de bir Kaydet istemiyle Google Calendar açılır.'
      },
      {
        q: 'Etkinlik ayrıntılarına bir Zoom veya Google Meet bağlantısı ekleyebilir miyim?',
        a: 'Video bağlantısını Konum veya Açıklama alanına koyun; sanal katılımcılar toplantı URL\'sini tam orada, takvim girişinde bulur.'
      },
      {
        q: 'Takvim girişi katılımcı için otomatik olarak bir hatırlatıcı ayarlar mı?',
        a: 'Çoğu takvim uygulaması, yeni bir etkinlik eklenir eklenmez varsayılan hatırlatıcısını — genellikle 15 ila 30 dakika önce — uygular.'
      },
      {
        q: 'QR kodunu bastıktan sonra etkinlik tarihini veya saatini düzenleyebilir miyim?',
        a: 'Basılı kodu değil — tarih ve saat matrise sabitlenir. Ayrıntılar değişebilecekse, bunun yerine bir URL kodunu kontrol ettiğiniz bir etkinlik sayfasına yönlendirin.'
      },
      {
        q: 'Etkinlik QR kodlarının süresi dolar mı veya aylık ücret alır mı?',
        a: 'Hayır. Bir kez statik bir iCalendar kodu yaptığınızda, tarama sınırı olmadan ve ekli bir ücret olmadan sonsuza dek sizindir.'
      },
      {
        q: 'Düğün kırtasiyesine baskı için hangi dışa aktarma biçimi önerilir?',
        a: 'Vektör SVG — ticari bir baskıda, dokulu keten üzerinde veya metalik kartonda keskin kalır.'
      },
      {
        q: 'QR koduna düğün monogramımı veya şirket logomu gömebilir miyim?',
        a: 'Kesinlikle. Seviye H, ortaya bir monogram veya etkinlik simgesi için yeterli yedeklilik bırakır ve okuyucular yine de temiz çözer.'
      },
      {
        q: 'Etkinlik bilgilerim üretim sırasında gizli mi?',
        a: 'Gizli. Her şey cihazınızda olur, bu yüzden etkinlik başlıkları ve tarihler hiçbir yere gönderilmez.'
      }
    ],
    bestPractices: 'Baskıdan önce her başlangıç saatini, bitiş saatini, saat dilimini ve mekânı iki kez kontrol edin ve girişin doğru kaydedildiğini doğrulamak için kodu hem bir iPhone hem bir Android\'de test edin.'
  },
  '/phone-qr-code-generator': {
    sections: [
      {
        title: 'Acil Durum ve Müşteri Desteği için Tek Dokunuşla Arama',
        paragraphs: [
          'Bir telefon QR kodunu taramak, cihazın yerel arayıcısını tam telefon numaranız aramaya hazır halde anında açar.',
          'Arama hatalarını ortadan kaldırır ve acil yardım hatları, rezervasyonlar ve yol yardımı için zaman kazandırır.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of Tel URI Phone Call QR Codes',
      paragraphs: [
        'Bir telefon araması QR kodu, RFC 3966\'da tanımlanan arama şeması olan bir `tel:` bağlantısı taşır. Biçim `tel:<PhoneNumber>` şeklindedir — genellikle `tel:+14155552671` gibi küresel olarak benzersiz bir E.164 numarası, isteğe bağlı olarak bir dahili numara için DTMF duraklamalarıyla.',
        'Tarayın, telefon numarayı ve bir «[Numara] Ara» düğmesini içeren bir sistem arayıcı istemi gösterir. Tek dokunuş aramayı başlatır — bir tabeladan numara okuyup tuşlamadan; ki basılı materyalde yanlış aramalar tam da buradan doğar.',
        'Bu, hareket halinde okunan her şeyin kodudur: servis aracı çıkartmaları, bir acil durum iletişim bildirimi, bir emlak bahçe tabelası, bir yardım hattı çıkartması, bir paket servis menüsü.'
      ]
    },
    comparisonTable: {
      title: 'One-Tap Phone QR Code vs. Manual Phone Number Dialing',
      headers: [
        'Evaluation Metric',
        'Phone Call QR Code',
        'Manual Keypad Dialing'
      ],
      rows: [
        [
          'Dialing Speed',
          '1 Scan + 1 Tap (< 2 seconds)',
          '15 - 30 seconds (Reading, memorizing, typing 10+ digits)'
        ],
        [
          'Wrong Number Rate',
          '0% (Exact digit sequence encoded)',
          '15% - 20% on vehicle wraps and billboards'
        ],
        [
          'Drive-By Conversion',
          'High (Scannable from moving vehicle at stoplights)',
          'Extremely low (Passersby cannot write numbers down)'
        ],
        [
          'International Dialing',
          'Encodes exact + country code automatically',
          'Frequent errors with exit codes and area prefixes'
        ],
        [
          'Device Integration',
          'Native trigger on iOS Phone and Android Dialer',
          'Requires opening Phone app and manually typing'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Ülke Koduyla Tam Telefon Numarasını Girin',
        description: 'E.164 biçimini kullanın — ABD için +14155550199, İngiltere için +442071838750 — böylece uluslararası bir arayan, arama önekini tahmin etmeden bağlanır.'
      },
      {
        number: 2,
        title: 'Telefon Simgesi Ekleyin ve Marka Renklerini Özelleştirin',
        description: 'Yüksek kontrastta biçimlendirin, özel köşe gözleri ayarlayın ve ortaya bir ahize simgesi koyun; böylece tarama gizemli bir bağlantı değil, bir arama olarak okunur.'
      },
      {
        number: 3,
        title: 'Araç Kaplamaları ve Büyük Tabelalar için Vektör SVG İndirin',
        description: 'Araç grafikleri, bahçe tabelaları ve bilbordlar için SVG\'yi ya da broşürler, mıknatıslar ve kartlar için yüksek çözünürlüklü PNG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Anında Tek Dokunuşla Doğrudan Arama',
        description: 'Bir tarama ve bir dokunuş, ilgiyi saniyeler içinde canlı bir aramaya dönüştürür.'
      },
      {
        title: 'Yanlış Numaraları ve Yanlış Aramaları Ortadan Kaldırın',
        description: 'Tam numara kodlanmıştır, bu yüzden kimse hareket eden bir araçtan okuyup bir rakamı yer değiştirmez.'
      },
      {
        title: 'Evrensel Cihaz ve Hücresel Destek',
        description: 'Hücresel hizmeti olan herhangi bir akıllı telefonun yerleşik kamerasından çalışır.'
      },
      {
        title: 'Ücretsiz Ömür Boyu Kalıcı Çalışma',
        description: 'Kalıcı geçerliliği, sınırsız araması ve aylık ücreti olmayan statik bir tel kodu.'
      }
    ],
    sizingMatrix: {
      title: 'Phone Call QR Code Print Sizing Specifications',
      description: 'Phone QR codes on vehicles and outdoor signs must be scaled appropriately for long-distance optical scanning.',
      headers: [
        'Placement / Application',
        'Expected Scan Distance',
        'Minimum Recommended Size',
        'Recommended Material'
      ],
      rows: [
        [
          'Service Van & Truck Wraps',
          '3.0 m - 8.0 m (10 ft - 26 ft)',
          '300 mm x 300 mm (12" x 12")',
          'Cast Vinyl Vehicle Wrap with UV Overlaminate'
        ],
        [
          'Real Estate Yard Signs & Banners',
          '1.5 m - 3.0 m (5 ft - 10 ft)',
          '150 mm x 150 mm (6" x 6")',
          'Reflective Corrugated Plastic / Aluminum'
        ],
        [
          'Takeout Menus & Fridge Magnets',
          '20 cm - 40 cm (8" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Flexible Magnetic Sheet / Gloss Cardstock'
        ],
        [
          'Emergency Hotline & Safety Placards',
          '40 cm - 80 cm (16" - 32")',
          '60 mm x 60 mm (2.4" x 2.4")',
          'Photoluminescent / Rigid PVC Sign'
        ],
        [
          'Print Magazine Ads & Postcards',
          '20 cm - 35 cm (8" - 14")',
          '25 mm x 25 mm (1.0" x 1.0")',
          'Matte Heavyweight Paper'
        ]
      ]
    },
    useCases: [
      {
        title: 'Servis Filosu Çıkartmaları (Tesisat, İklimlendirme, Elektrik)',
        description: 'Araçtaki büyük bir kod, trafikte sıkışmış — ya da park etmiş bir kamyonun yanından geçen — bir ev sahibinin tarayıp servis için aramasını sağlar.'
      },
      {
        title: 'Emlak Bahçe Tabelaları ve Satılık Panoları',
        description: 'Mülkün önünde duran bir alıcı tabelayı tarar ve doğrudan ilan sahibi danışmana ulaşır.'
      },
      {
        title: 'Acil Yardım Hatları ve Güvenlik Sevkiyatı',
        description: 'Bir kampüste, bir otoparkta veya bir endüstri sahasında kod, bir acil aramayı tek dokunuş uzağa getirir.'
      },
      {
        title: 'Restoran Paket Servisi ve Teslimat Menüleri',
        description: 'Bir paket servis menüsündeki veya buzdolabı mıknatısındaki bir kod, aç bir müşterinin oracıkta telefonla sipariş vermesini sağlar.'
      },
      {
        title: 'Ekipman Kiralama ve Çekici Servisi Çıkartmaları',
        description: 'Kiralık ekipmandaki, bir park levhasındaki veya bir depo biriminde dayanıklı bir çıkartma, yardımı hızlıca çağırtır.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Phone Call QR Code Dialing Errors',
      points: [
        'Ülke kodu yok. Numaranın önüne + ve ülke kodunu ekleyin (ABD için +1). Onsuz, uluslararası dolaşımdaki bir cihaz aramayı tamamlayamaz.',
        'Bir araçta çok küçük. 50 mm\'lik bir kod 5 metreden okunamaz. Araç tabelasında en az 300 mm x 300 mm kullanın.',
        'Yansıtıcı vinil. Parlak krom veya metalik kaplama güneşte parlar. Mat veya saten seçin.',
        'Hatalı dahili biçimi. Otomatik aranan bir dahili için, onu virgülle ayırın — tel:+14155550199,102 — bu, iki saniyelik bir DTMF duraklaması ekler.',
        'Telefon simgesi yok. Ortadaki bir ahize, taramanın bilinmeyen bir web bağlantısı değil, bir arama olduğuna dair insanlara güven verir.'
      ]
    },
    faqs: [
      {
        q: 'QR kodunu taramak telefon aramasını hemen başlatır mı?',
        a: 'Hayır — telefon, çözülmüş numarayı bir Ara düğmesiyle gösterir ve kullanıcı aramak için dokunur. Bu onay adımı bilinçlidir.'
      },
      {
        q: 'Telefon numarasına ülke kodumu dahil etmeli miyim?',
        a: 'Her zaman. + ve ülke koduyla başlayın (ABD ve Kanada için +1, İngiltere için +44); böylece her arayan, operatör veya dolaşım durumuna bakılmaksızın bağlanır.'
      },
      {
        q: 'Biri SIM kartı olmayan bir iPad\'de telefon QR kodunu tararsa ne olur?',
        a: 'Yalnızca WiFi\'li bir tablette tarama, aramayı FaceTime Audio, Skype veya hücresel geçiş görevi gören eşleştirilmiş bir iPhone üzerinden yapmayı önerir.'
      },
      {
        q: 'QR koduna telefon dahililerini kodlayabilir miyim?',
        a: 'Ana numara ile dahili arasına bir virgül koyun — tel:+14155550199,104 — ve virgül, DTMF rakamları aranmadan önce iki saniyelik bir duraklama ekler.'
      },
      {
        q: 'Telefon QR kodlarının süresi dolar mı veya arama başına ücret alınır mı?',
        a: 'Hayır. Statik bir tel kodu kalıcı geçerlilik, tarama sınırı yok ve arama başına ücret olmadan çalışır.'
      },
      {
        q: 'Ticari araç kaplama baskısı için en iyi vektör biçimi hangisi?',
        a: 'SVG — araç veya bilbord boyutuna ölçeklendiğinde piksellenme olmadan vektör hassasiyetini korur.'
      },
      {
        q: 'QR kodumdan kaç telefon araması geldiğini izleyebilir miyim?',
        a: 'Kodu, yalnızca o materyale atanmış, CallRail veya Twilio\'dan özel bir arama izleme numarasına yönlendirin; onun üzerinden gelen her arama ilişkilendirilebilir olur.'
      },
      {
        q: 'Telefon numaram üretim sırasında harici sunucularda saklanıyor mu?',
        a: 'Hayır. Üretim tamamen tarayıcınızda çalışır, bu yüzden numara asla saklanmaz, kaydedilmez veya paylaşılmaz.'
      }
    ],
    bestPractices: 'E.164 biçimini (+1...) kullanın, kodu görüş mesafesine göre boyutlandırın (10:1 kuralı) ve taramanın açıkça «ara» anlamına gelmesi için bir telefon simgesi ekleyin.'
  },
  '/sms-qr-code-generator': {
    sections: [
      {
        title: 'Doğrudan SMS Müşteri Adayı ve Pazarlama Katılımları',
        paragraphs: [
          'Hedef telefon numaralarını ve anahtar kelime tetikleyicilerini («JOIN» veya «DISCOUNT» gibi) önceden doldurun; böylece müşteriler metin güncellemelerine tek tıkla abone olsun.',
          'Perakende promosyonları, VIP kulüp kayıtları ve çekiliş yarışmaları için ideal.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of SMSTO Protocol Text Messaging QR Codes',
      paragraphs: [
        'Bir SMS QR kodu, `SMSTO:` (veya `sms:`) şemasında bir metin mesajı talimatı taşır. Biçim `SMSTO:<PhoneNumber>:<MessageText>` şeklindedir — alıcı numarası veya kısa kodu, ardından önceden doldurulacak mesaj gövdesi.',
        'Taramak yerel Mesajlar uygulamasını başlatır — iOS\'ta Apple Messages, Android\'de Google Messages — numara adreslenmiş ve metin zaten yazılmış halde. Tek dokunuş onu SMS veya RCS üzerinden gönderir.',
        'Bu, mobil pazarlamanın çoğunun bel kemiğidir: anahtar kelime katılımları («bir kısa koda DISCOUNT gönder»), abone kayıtları, bilet onayları, iki faktörlü doğrulamalar. SMS %98\'in üzerinde okunur ve bir kod, bir numarayı ve anahtar kelimeyi doğru yazma sürtünmesini kaldırır.'
      ]
    },
    comparisonTable: {
      title: 'SMS QR Code Opt-Ins vs. Manual Text Keyword Marketing',
      headers: [
        'Factor / Metric',
        'SMS QR Code Opt-In',
        'Manual SMS Keyword Entry'
      ],
      rows: [
        [
          'Opt-In Conversion Rate',
          '55% - 70% of scanners complete opt-in',
          '15% - 25% (High drop-off typing shortcodes)'
        ],
        [
          'Keyword Accuracy',
          '100% exact match (Eliminates spelling typos)',
          'Frequent typos causing failed opt-in responses'
        ],
        [
          'Speed to Completion',
          '1 Scan + Tap Send (< 3 seconds)',
          '30 - 60 seconds (Opening app, typing number & keyword)'
        ],
        [
          'Carrier Compatibility',
          'Universal across all cellular carriers & networks',
          'Universal across all cellular carriers & networks'
        ],
        [
          'Hardware Requirement',
          'Works on all iOS and Android camera phones',
          'Requires manual typing on keypad'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Hedef Telefon Numarasını veya Kısa Kodu Girin',
        description: '10 haneli numaranızı, ücretsiz bir SMS hattını veya 5-6 haneli bir pazarlama kısa kodunu, ülke önekiyle ekleyin.'
      },
      {
        number: 2,
        title: 'Önceden Doldurulmuş Anahtar Kelimeyi veya Mesaj İçeriğini Tanımlayın',
        description: 'SMS platformunuzun beklediği tam anahtar kelimeyi yazın — JOIN, VIP, DISCOUNT, INFO.'
      },
      {
        number: 3,
        title: 'Yüksek Çözünürlüklü Baskı Öğelerini İndirin',
        description: 'Mağaza içi afişler, raf konuşmacıları ve masa gösterimleri için vektör SVG\'yi veya bir promosyon ekranı için PNG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Patlayıcı SMS Pazarlama Listesi Büyümesi Sağlayın',
        description: 'Katılımlardan ve sadakat kayıtlarından sürtünmeyi kaldırın; böylece daha fazla tarayan akışı bitirir.'
      },
      {
        title: 'Sıfır Anahtar Kelime Yazım Hatası',
        description: 'Otomasyonunuz her seferinde tam anahtar kelimeyi alır, katılımı düşürecek müşteri yazım hatası olmaz.'
      },
      {
        title: 'Evrensel Operatör ve Cihaz Uyumluluğu',
        description: 'Her operatörde ve kamerası olan herhangi bir iPhone veya Android\'de çalışır.'
      },
      {
        title: 'Süre Dolmadan Kalıcı Statik Barkod',
        description: 'Abonelik veya tarama kısıtı olmadan süresiz aktif kalan bir kod.'
      }
    ],
    sizingMatrix: {
      title: 'SMS QR Code Print Sizing Specifications',
      description: 'Position your SMS QR codes on high-traffic retail signage with clear incentive callouts.',
      headers: [
        'Placement / Application',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended CTA'
      ],
      rows: [
        [
          'Retail Checkout Counters & Shelf Talkers',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan to Text VIP for 15% Off"'
        ],
        [
          'Restaurant Window Decals & Table Tents',
          '30 cm - 60 cm (12" - 24")',
          '45 mm x 45 mm (1.8" x 1.8")',
          '"Scan to Text MENU for Specials"'
        ],
        [
          'Event Posters & Concert Flyers',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Text WIN for VIP Tickets"'
        ],
        [
          'Real Estate Yard Signs & Directionals',
          '1.0 m - 2.5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4.8" x 4.8")',
          '"Scan to Text HOUSE for Listing Price"'
        ],
        [
          'Direct Mail Postcards & Catalogs',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Text SAVE for Promo Code"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Perakende VIP Kulübü ve SMS Liste İnşası',
        description: 'Bir kasa kodu, bir alışverişçi katılım anahtar kelimenizi göndermek için tarar taramaz anında bir indirim sunar.'
      },
      {
        title: 'Otomatik Emlak Sorguları',
        description: 'Bir bahçe tabelası kodu, bir alıcının bir mülk kodu göndermesini ve fiyat ile kat planlarını otomatik geri almasını sağlar.'
      },
      {
        title: 'Etkinlik Biletleme ve Check-In Onayları',
        description: 'Katılımcılar hızlı check-in için kapıda bir onay kodu gönderir.'
      },
      {
        title: 'Müşteri Desteği ve Konsiyerj Hizmetleri',
        description: 'Otel misafirleri ve müşteriler hizmet istemek veya randevu almak için doğrudan bir SMS hattı alır.'
      },
      {
        title: 'Yarışma Katılımları ve Canlı Etkinlik Anketleri',
        description: 'Taranabilir bir kod, bir maç veya konser sırasında binlerce anlık katılım çeker.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting SMS QR Code Scanning Failures',
      points: [
        '160 karakterin üzerinde. Önceden doldurulmuş metni kısa tutun — daha uzun bir mesaj birden çok parçaya bölünür ve eski ağlarda parçalanabilir.',
        'Kısa kod sınırları. 5 haneli bir kısa kodda, SMS ağ geçidinizin uluslararası dolaşımdaki cihazlardan gelen mesajları kabul ettiğini doğrulayın.',
        'Eksik yasal uyarılar. TCPA ve CTIA kuralları uyarınca, standart bildirimi — «Msg & data rates may apply. Reply STOP to cancel» — bir pazarlama kodunun yanına basın.',
        'Düşük kontrast. Soluk bir yüzeyde açık modüller başarısız olur. Açık üzerine koyu.',
        'Aşınma ve yıpranma. Mat bir laminasyon, basılı bir kartı taramayı bozacak çiziklerden ve nemden korur.'
      ]
    },
    faqs: [
      {
        q: 'QR kodunu taramak metin mesajını otomatik olarak gönderir mi?',
        a: 'Hayır. Numara ve metin hazır halde Mesajlar uygulamasını açar ve kullanıcı Gönder\'e dokunur — bu, onu mobil gizlilik kurallarına uyumlu tutan şeydir.'
      },
      {
        q: 'Kullanıcılar metni gönderdiğinde standart operatör SMS ücretleri alınır mı?',
        a: 'Evet. Kullanıcının gönderdiği mesaj, kendi planının SMS kotasından ve geçerli operatör ücretlerinden düşer.'
      },
      {
        q: '5 haneli veya 6 haneli kısa kodlarla bir SMS QR kodu kullanabilir miyim?',
        a: 'Standart 10 haneli bir numara, ücretsiz bir hat veya 5-6 haneli bir kısa kod, hepsi aynı telefon numarası alanına girer.'
      },
      {
        q: 'SMS QR kodlarının süresi dolar mı veya aylık tarama sınırları var mı?',
        a: 'Bunlar kalıcı statik kodlardır, sınırsız tarama ve süre dolması yok.'
      },
      {
        q: 'Önceden doldurulmuş SMS metni için karakter sınırı nedir?',
        a: 'Tek bir SMS 160 karakter tutar. Bunun altında kalmak, mesajı her operatörde tek bir bölümde tutar.'
      },
      {
        q: 'Bir SMS QR koduna logomu gömebilir miyim?',
        a: 'Bu işe yarar. Seviye H\'de kod hatırı sayılır bir engellemeyi tolere eder — merkezin üzerine bir mesaj simgesi veya logonuzu koymaya yetecek kadar.'
      },
      {
        q: 'SMS QR kodlarını taramak için internet bağlantısı gerekir mi?',
        a: 'Tarama ve Mesajlar uygulamasını açma çevrimdışı çalışır. Metnin kendisini göndermek normal hücresel çekim gerektirir.'
      },
      {
        q: 'Müşteri telefon verileri QR Generator Online sunucularında saklanıyor mu?',
        a: 'Hayır. Her şey cihazınızda yapılır, bu yüzden hiçbir numara veya mesaj metni yüklenmez ya da saklanmaz.'
      }
    ],
    bestPractices: 'Metni göndermenin faydasını açıkça belirtin ve herhangi bir ticari kampanyada gerekli mesaj ve veri ücreti uyarılarını ekleyin.'
  },
  '/email-qr-code-generator': {
    sections: [
      {
        title: 'Müşteri Geri Bildirimini ve İletişim Sorgularını Kolaylaştırın',
        paragraphs: [
          'Kullanıcılar bir e-posta QR kodunu taradığında, varsayılan e-posta uygulamaları destek adresiniz, özel bir konu ve önceden doldurulmuş bir gövde mesajı şablonuyla açılır.',
          'Ürün geri bildirimi, müşteri garanti kayıtları, iş başvurusu afişleri ve teknik destek için ideal.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Mailto URI Scheme Email QR Codes',
      paragraphs: [
        'Bir e-posta QR kodu, RFC 6068\'de tanımlanan internet e-posta şeması olan bir `mailto:` bağlantısı taşır. Yapı `mailto:<RecipientEmail>?subject=<EncodedSubject>&body=<EncodedBody>&cc=<EncodedCC>&bcc=<EncodedBCC>` şeklindedir; boşluklar ve özel karakterler RFC 3986\'ya göre yüzde kodlamalıdır.',
        'Bir tarama, varsayılan olarak ayarlı hangi e-posta istemcisiyse onu açar — Apple Mail, Gmail, Outlook, Yahoo — adres, konu ve açılış gövde metni önceden doldurulmuş halde. Kullanıcı gözden geçirir ve gönder\'e dokunur. Bir geri bildirim, bir destek talebi, bir garanti talebi: boş bir yazma penceresi yerine gözden geçir-ve-gönder.',
        'Bir destek masası için o önceden doldurulmuş konu, sıralamayı sessizce yapar. `[Garanti Talebi - Model X]` gibi standart bir başlık gömün, gelen talepler kendi kendini sınıflandırır; bu da alıcı taraftaki manuel ayıklamayı azaltır.'
      ]
    },
    comparisonTable: {
      title: 'Pre-Filled Email QR Codes vs. Manual Email Inquiries',
      headers: [
        'Operational Factor',
        'Pre-Filled Email QR Code',
        'Manual Email Typing'
      ],
      rows: [
        [
          'Address Accuracy',
          '100% (Zero mistyped addresses or bouncebacks)',
          '15% - 25% error rate on complex corporate emails'
        ],
        [
          'Subject Categorization',
          'Standardized subject lines for automated triage',
          'Unpredictable, vague, or missing subject headers'
        ],
        [
          'Customer Effort',
          '1 Scan + Review + Send (< 5 seconds)',
          'Manual typing of recipient, subject, and message'
        ],
        [
          'CRM / Helpdesk Routing',
          'Rules route tickets instantly based on subject',
          'Requires manual sorting and assignment by staff'
        ],
        [
          'Offline Availability',
          'Encodes mailto data directly in barcode matrix',
          'Requires finding business card or searching website'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Alıcı E-postasını ve İsteğe Bağlı CC/BCC\'yi Belirtin',
        description: 'Onu alması gereken kutuyu girin — support@yourcompany.com — ve gerekirse virgülle ayrılmış CC veya BCC adresleri ekleyin.'
      },
      {
        number: 2,
        title: 'Standart Konu Satırı ve Gövde Şablonu Yazın',
        description: '«Sipariş # ile ilgili sorgu» gibi net bir konuyu ve kısa bir gövde istemini önceden doldurun; böylece müşteri sıfırdan değil bir şeyden başlar.'
      },
      {
        number: 3,
        title: 'Tasarımı Özelleştirin ve Yüksek Çözünürlüklü Baskı Dosyası Dışa Aktarın',
        description: 'Modülleri biçimlendirin, bir zarf simgesi veya logonuzu ekleyin ve baskı için vektör SVG ya da ekran için yüksek çözünürlüklü PNG indirin.'
      }
    ],
    features: [
      {
        title: 'Geri Dönen E-postaları ve Adres Yazım Hatalarını Ortadan Kaldırın',
        description: 'Mesaj tam olarak sizin kutunuza ulaşır — yanlış yazılmış alan adı yok, geri dönüş yok.'
      },
      {
        title: 'Yardım Masası ve CRM Talep Ayıklamasını Otomatikleştirin',
        description: 'Önceden ayarlı bir konu, Zendesk, Freshdesk veya HubSpot\'un sorguyu kendi başına yönlendirmesini sağlar.'
      },
      {
        title: 'Tüm Posta İstemcilerinde Evrensel Destek',
        description: 'iOS, Android, macOS ve Windows\'ta varsayılan posta uygulamasını aynı şekilde açar.'
      },
      {
        title: 'Ücretsiz Ömür Boyu Kalıcı Çalışma',
        description: 'Asla süresi dolmayan, abonelik gerektirmeyen ve her hacimde mesajı kaldıran statik bir mailto kodu.'
      }
    ],
    sizingMatrix: {
      title: 'Email QR Code Print Sizing Specifications',
      description: 'Email QR codes contain moderate payload lengths depending on the length of the pre-filled body text.',
      headers: [
        'Application Placement',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended File Format'
      ],
      rows: [
        [
          'Product Packaging & Instruction Manuals',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Vector SVG / 300 DPI PNG'
        ],
        [
          'Warranty Cards & Invoices',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Vector SVG / PDF'
        ],
        [
          'Equipment Service Tags & Industrial Machinery',
          '30 cm - 60 cm (12" - 24")',
          '50 mm x 50 mm (2.0" x 2.0")',
          'Engraved Aluminum / Vinyl Decal'
        ],
        [
          'Recruitment Posters & Job Fair Flyers',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          'Vector SVG'
        ],
        [
          'Tabletop Feedback Cards in Hospitality',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Heavyweight Matte Cardstock'
        ]
      ]
    },
    useCases: [
      {
        title: 'Garanti Kaydı ve Teknik Destek',
        description: 'Ürün etiketindeki bir kod, model numarası zaten konu satırında olan bir talep açar.'
      },
      {
        title: 'Müşteri Geri Bildirimi ve Genel Sorgular',
        description: 'Bir masa kartı, samimi geri bildirimi doğrudan ve özel olarak genel müdürün kutusuna yönlendirir.'
      },
      {
        title: 'İş Fuarı İşe Alımı ve Özgeçmiş Gönderimi',
        description: 'Bir kariyer afişi kodu, adayların iş kodu önceden ayarlı olarak işe alım yöneticisine özgeçmiş e-postalamasını sağlar.'
      },
      {
        title: 'Fuar Müşteri Yakalama ve Fatura Talepleri',
        description: 'Stant ziyaretçileri, tek dokunuşla bir teknik rapor, bir katalog veya kurumsal fiyatlandırma istemek için tarar.'
      },
      {
        title: 'Acil Bakım ve Tesis Yönetimi',
        description: 'Bir iklimlendirme ünitesindeki bir kod, bir kiracının doğrudan tesis sevkiyatına bir arıza bildirmesini sağlar.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Email QR Code Scanning & Delivery Issues',
      points: [
        'Aşırı uzun bir gövde. 400+ karakterlik önceden doldurulmuş metin matrisi sıkıştırır. Şablonu yaklaşık 150 karakterin altında tutun.',
        'Hatalı biçimlenmiş bir adres. Eksik bir @ veya sondaki bir boşluk, posta istemcisinin yazma komutunu reddetmesine yol açar. Alıcıyı dikkatlice kontrol edin.',
        'Varsayılan posta uygulaması yok. Yapılandırılmamış bir masaüstünde, bir mailto bağlantısı hangi uygulamanın kullanılacağını sorabilir. Mobilde, yerel posta uygulaması işi kendisi halleder.',
        'Düşük kontrast. Beyaz üzerine soluk veya pastel modüller taramada başarısız olur. Açık üzerine koyu, 4.5:1\'in üzerinde.',
        'Talimat yok. Etiketleyin — «Desteğe Doğrudan E-posta için Tara» — ki tarama belli olsun.'
      ]
    },
    faqs: [
      {
        q: 'Bir kullanıcı e-posta QR kodunu taradığında hangi e-posta uygulaması açılır?',
        a: 'Cihazın varsayılan olarak kabul ettiği hangisiyse — iPhone\'da Apple Mail, Android\'de Gmail veya kullanıcı birini ayarladıysa Outlook ya da Yahoo.'
      },
      {
        q: 'Tarama e-postayı otomatik olarak gönderir mi?',
        a: 'Hayır. Alanları dolu yazma penceresini açar ve kullanıcı Gönder\'e dokunur. Bu, gerçekte neyin gönderileceği konusunda onu kontrolde tutar.'
      },
      {
        q: 'Konu ve gövde alanlarını boş bırakabilir miyim?',
        a: 'Bırakabilirsiniz. Yalnızca alıcı adresini girin ve konu ile gövdeyi kullanıcının kendisinin yazması için boş bırakın.'
      },
      {
        q: 'Birden fazla alıcı e-posta adresi ekleyebilir miyim?',
        a: 'Alıcı alanına virgülle ayrılmış birkaç adres ekleyin, mesaj tüm ekibinize aynı anda ulaşır.'
      },
      {
        q: 'E-posta QR kodlarının süresi dolar mı veya ücretli plan gerektirir mi?',
        a: 'İkisi de değil. Statik bir mailto kodu, onu kaç kişi tararsa tarasın sonsuza dek çalışır ve asla para istemez.'
      },
      {
        q: 'Önceden doldurulmuş e-posta gövdesine kaç karakter ekleyebilirim?',
        a: 'mailto şeması uzun dizelere izin verir, ama gövdeyi yaklaşık 150 karakterin altında tutmak matrisi temiz ve hızlı taranır kılar.'
      },
      {
        q: 'QR kodumdan kaç e-posta üretildiğini izleyebilir miyim?',
        a: 'Konu satırına bir etiket bırakın — [Kaynak: Yaz Broşürü] — ve hangi materyalin mesajı getirdiğini görmek için kutunuzda veya CRM\'de ona göre filtreleyin.'
      },
      {
        q: 'E-posta adresim üretim sırasında gizli tutuluyor mu?',
        a: 'Yerel kalır. Kodlama tarayıcınızda çalışır, bu yüzden hiçbir adres bir sunucuda kaydedilmez veya saklanmaz.'
      }
    ],
    bestPractices: 'Konuyu net ve gövdeyi kısa tutun, beyaz üzerine koyu modüller kullanın ve tarayan kişinin ne bekleyeceğini bilmesi için kodu e-postanın nereye gittiğiyle etiketleyin.'
  },
  '/facebook-qr-code-generator': {
    sections: [
      {
        title: 'Sosyal Medya Kitlenizi Her Yerde Büyütün',
        paragraphs: [
          'Mağaza içi müşterilerin ve etkinlik katılımcılarının, elle kullanıcı adı aramadan markanızı bulup takip etmesini kolaylaştırın.',
          'Marka tanınırlığını ve tarama dönüşüm oranlarını artırmak için resmi platform simgelerini QR kodlarınızın ortasına yerleştirin.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Social Media & Facebook Profile QR Codes',
      paragraphs: [
        'Bir Facebook veya sosyal medya QR kodu; doğrudan bir profil URL\'si, sayfa tanıtıcısı, grup bağlantısı ya da bir link-tree hedefi taşır. Tarayın, telefon bir evrensel bağlantı çözer: Facebook, Instagram, TikTok veya LinkedIn uygulaması kuruluysa doğrudan doğrulanmış sayfanıza derin bağlantı verir; değilse takip istemiyle mobil web sürümünü açar.',
        'Bir mağazada veya etkinlikte dikkat kısa ömürlüdür. Birine «Facebook\'ta Acme Co\'yu ara» demek çoğunu kaybettirir — bir yazım hatasına, neredeyse aynı markaya sahip bir rakibe, akışın sonra ne sunacağına. Özel bir kod, aramayı tamamen ortadan kaldırır ve bir yoldan geçeni iki saniyeden kısa sürede takipçiye dönüştürür.',
        'Yüksek çözünürlüklü vektör dışa aktarımları ve tasarım üzerinde tam denetim elde edersiniz; böylece resmi platform rozetini yerleştirebilir, kodu marka renklerinize uydurabilir ve bir vitrinden veya bir etkinlik salonunun öbür ucundan hızlı tarama için yeterli kontrastı koruyabilirsiniz.'
      ]
    },
    comparisonTable: {
      title: 'Direct Social QR Code vs. Manual Search Discovery',
      headers: [
        'Metric / Factor',
        'Direct Social Media QR Code',
        'Manual Search on App / Web'
      ],
      rows: [
        [
          'Conversion Rate',
          'Up to 65% of scanners follow/like',
          'Under 15% due to search drop-off'
        ],
        [
          'Discovery Speed',
          '1 - 2 seconds (Direct camera scan)',
          '30 - 60 seconds (Opening app, searching, filtering)'
        ],
        [
          'Brand Impersonation Risk',
          '0% (Directly links to verified profile URL)',
          'High (User may follow competing or duplicate pages)'
        ],
        [
          'Offline Print Integration',
          'Seamlessly embeds on tables, receipts, boxes',
          'Requires printing clumsy text instructions'
        ],
        [
          'Cross-Platform Routing',
          'Universal deep-link to native app or browser',
          'Requires separate manual searches per app'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Facebook Sayfanızın, Grubunuzun veya Profilinizin URL\'sini Yapıştırın',
        description: 'Tam genel bağlantıyı kopyalayın — facebook.com/yourbrand, instagram.com/yourhandle — ve yapıştırın.'
      },
      {
        number: 2,
        title: 'Marka Simgesini Yerleştirin ve Renk Paletini Özelleştirin',
        description: 'Facebook mavisi (#1877F2) veya kendi paletinizle biçimlendirin ve platform simgesini Seviye H hata düzeltmeyle ortaya yerleştirin.'
      },
      {
        number: 3,
        title: 'Tabelalar için Vektör SVG veya Baskı için PNG İndirin',
        description: 'Vitrin çıkartmaları, afiş standları ve ambalaj için SVG\'yi alın veya broşürler, fişler ve masa kartları için yüksek çözünürlüklü PNG alın.'
      }
    ],
    features: [
      {
        title: 'Fiziksel Ayak Trafiğini Etkileşimli Takipçiye Çevirin',
        description: 'Alışveriş yapanlar, müşteriler ve etkinlik katılımcıları sayfanızı aramadan takipçi olur.'
      },
      {
        title: 'Doğrudan Yerel Uygulama Derin Bağlantısı',
        description: 'Bir tarama, mobil kullanıcıları tek dokunuşluk takip için kurulu sosyal uygulamalarına yönlendirir.'
      },
      {
        title: 'Resmi Sosyal Simge Gömme',
        description: 'Kodu tanınır ve güvenilir kılmak için Facebook, Instagram, YouTube, TikTok ve LinkedIn simge hazır ayarları arasından seçin.'
      },
      {
        title: 'Süre Dolmadan Sınırsız Kalıcı Taramalar',
        description: 'Süresiz çalışmayı sürdüren; ücret, sınır veya yenileme olmayan statik bir sosyal kod.'
      }
    ],
    sizingMatrix: {
      title: 'Social Media QR Code Print Sizing Benchmarks',
      description: 'Position your social QR codes where customers naturally pause and have their smartphones readily available.',
      headers: [
        'Application Location',
        'Scan Distance',
        'Recommended Print Size',
        'Recommended Substrate'
      ],
      rows: [
        [
          'Point of Sale (POS) Checkout Counter',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Acrylic Countertop Sign / Sticker'
        ],
        [
          'Dining Tables & Table Tents',
          '30 cm - 45 cm (12" - 18")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Laminated Card / Wooden Table Tent'
        ],
        [
          'Retail Storefront Window Decal',
          '1.0 m - 2.0 m (3 ft - 6.5 ft)',
          '120 mm x 120 mm (4.8" x 4.8")',
          'Weatherproof Matte Vinyl Decal'
        ],
        [
          'Product Packaging Unboxing Cards',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Matte Heavyweight Insert Card'
        ],
        [
          'Event Stage Backdrops & Banners',
          '3.0 m - 6.0 m (10 ft - 20 ft)',
          '300 mm x 300 mm (12" x 12")',
          'Non-Reflective Fabric Banner'
        ]
      ]
    },
    useCases: [
      {
        title: 'Perakende Kasa Gösterimleri ve Sadakat İnşası',
        description: 'Kasanın yanındaki bir kod, alışveriş yapanları haftalık flaş indirimler ve yeni ürün uyarıları için sayfayı takip etmeye teşvik eder.'
      },
      {
        title: 'Restoran Masa Kartları ve Check-In İncelemeleri',
        description: 'Müşteriler check-in yapar, bir inceleme bırakır ve yemek fotoğraflarını etiketler; bu, yerel organik erişiminizi ücretsiz genişletir.'
      },
      {
        title: 'Ambalaj Ekleri ve Kutu Açma Yarışmaları',
        description: 'Kutudaki bir kart, alıcıları bir kutu açma paylaşmaya ve aylık ödül şansı için sizi etiketlemeye davet eder.'
      },
      {
        title: 'Etkinlikler, Konferanslar ve Topluluk Buluşmaları',
        description: 'Bir slayt veya afişteki büyük bir kod, katılımcıları doğrudan resmi topluluk grubunuza gönderir.'
      },
      {
        title: 'Servis Filosu Çıkartmaları ve Yerel Reklam',
        description: 'Aracın üzerindeki bir kod, mahalledeki ev sahiplerinin bir trafik ışığında incelemelerinizi okumasını ve sayfayı takip etmesini sağlar.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Social Media QR Code Scanning Mistakes',
      points: [
        'Özel bir sayfa. Tarayan kişinin içeriği araya giren bir giriş duvarı olmadan görebilmesi için sayfayı veya grubu Herkese Açık yapın.',
        'Yoğun bir arka plan. Kodun arkasındaki fotoğrafı atlayın. Kameranın kilitlendiği şey, 4.5:1 kontrastta düz açık bir zemindir.',
        'Taramak için sebep yok. Çıplak bir kod az takip kazanır. Ona bir kanca verin — «Facebook\'ta 10.000+ VIP Üyeye Katılmak için Tara».',
        'Parlaklık yansıması. Parlak bir vitrin çıkartması güneşi merceğe yansıtır. Dışarıda daima mat vinil.',
        'Yalnızca tek platform. Facebook, Instagram ve TikTok\'ta takipçi mi istiyorsunuz? Kodu tek bir ağ yerine tek bir link-tree sayfasına yönlendirin.'
      ]
    },
    faqs: [
      {
        q: 'Tarama Facebook uygulamasını mı yoksa bir web tarayıcısını mı açar?',
        a: 'Facebook uygulaması kuruluysa, evrensel bağlantı profilinizi onun içinde yerel olarak açar. Değilse mobil tarayıcıya geri döner — her iki durumda da kişi sayfanıza ulaşır.'
      },
      {
        q: 'Bir sayfa yerine belirli bir Facebook gönderisine, albümüne veya etkinliğine bağlantı verebilir miyim?',
        a: 'Herhangi bir herkese açık gönderi, albüm, canlı yayın veya etkinliğin doğrudan URL\'sini kopyalayıp yapıştırın. Kod, bağlantı nereye giderse oraya işaret eder.'
      },
      {
        q: 'Tek bir QR kodla birden fazla sosyal medya platformuna nasıl bağlantı veririm?',
        a: 'Ücretsiz bir bağlantı toplama sayfası oluşturun — Linktree, Beacons veya kendi sitenizde bir sayfa — ve kodu o URL\'den üretin. Ardından tarayan kişi hangi platformu takip edeceğini seçer.'
      },
      {
        q: 'Facebook QR kodlarının süresi dolar mı veya aylık tarama sınırları var mı?',
        a: 'Statik ve kalıcıdır. Kod doğrudan URL\'nizi tutar ve çalışmayı sürdürür; sınırsız tarama ve süre dolması yok.'
      },
      {
        q: 'QR kodunu Facebook\'un resmi mavisiyle özelleştirebilir miyim?',
        a: 'Modüller için resmi #1877F2\'yi kullanın ve temiz beyaz bir arka plan koruyun — kontrast yüksek kalır ve kod markaya uygun kalır.'
      },
      {
        q: 'Kullanıcılardan sayfamı aramalarını istemek yerine neden QR kod kullanmak daha iyi?',
        a: 'Bir tarama aramayı tamamen atlar: yazım hatası yok, benzer adlı taklit bir sayfaya sapma yok ve takip iki saniyeden kısa sürede biter.'
      },
      {
        q: 'Vitrin tabelasına baskı için hangi dosya biçimini indirmeliyim?',
        a: 'Vektör SVG — en ufak bir bulanıklık olmadan herhangi bir afiş veya vitrin boyutuna ölçeklenir.'
      },
      {
        q: 'Sosyal QR kodları üretirken müşteri gizliliği korunuyor mu?',
        a: 'Her şey cihazınızda yerel olarak üretilir, bu yüzden URL\'leriniz ve profil bağlantılarınız hiçbir sunucuya ulaşmaz.'
      }
    ],
    bestPractices: 'Kodu harekete geçmek için bir nedenle eşleştirin — «Özel İndirimleri Açmak için Tara» veya «Günlük Çekilişler için Bizi Takip Et» — ve iyi ışıkta göz hizasına yerleştirin. Lansmandan önce birkaç farklı telefonda tarayın.'
  },
  '/whatsapp-qr-code-generator': {
    sections: [
      {
        title: 'Doğrudan Müşteri İletişimi ve Desteği',
        paragraphs: [
          'Sohbet temelli pazarlamayı ve müşteri desteğini sıfır sürtünmeyle başlatın. Tarama, WhatsApp\'ı doğrudan numaranıza adreslenmiş, gönderilmeye hazır önceden yazılmış metinli bir sohbette açar.',
          'Müşteri hizmetleri masaları, restoran rezervasyonları, ürün sorgu afişleri ve e-ticaret ambalajı için ideal.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Protocol & Architecture of WhatsApp Click-to-Chat QR Codes',
      paragraphs: [
        'Bir WhatsApp QR kodu, WhatsApp\'ın resmi `https://wa.me/` protokolünde (veya eski `whatsapp://send?phone=` şemasında) bir tıkla-sohbet bağlantısı taşır. Biçim `https://wa.me/<PhoneNumber>?text=<URLEncodedText>` şeklindedir — numara sembolsüz E.164 biçiminde, metin ise yüzde kodlamalı bir açılış mesajıdır.',
        'Tarayın, telefon işi WhatsApp\'ın Universal Link işleyicisine devreder. WhatsApp veya WhatsApp Business kuruluysa uygulama doğrudan numaranızla bir sohbet açar ve önceden yazılmış mesajı yazma kutusuna bırakır — müşterinin önce numaranızı kişilerine kaydetmesi gerekmez.',
        'İşin özü bu kısayoldur. «Numarayı kaydet, uygulamayı aç, ne diyeceğini düşün» adımlarını atın, ilk mesaj engeli neredeyse yok olur; bir WhatsApp kodunun basılı bir telefon numarasından veya bir web formundan çok daha iyi dönüşmesinin nedeni budur.'
      ]
    },
    comparisonTable: {
      title: 'WhatsApp QR Code vs. Traditional Contact Channels',
      headers: [
        'Channel / Feature',
        'WhatsApp QR Click-to-Chat',
        'Standard Web Contact Form',
        'Traditional Phone Number'
      ],
      rows: [
        [
          'Interaction Friction',
          '1 Scan + 1 Tap (Instant live conversation)',
          'High (Typing Name, Email, Phone, Message)',
          'Medium (Dialing, waiting in call queue)'
        ],
        [
          'Open & Read Rate',
          '98% average open rate on WhatsApp',
          '20% - 25% average email open rate',
          'High voicemail drop-off rate'
        ],
        [
          'Pre-Filled Context',
          'Automatic inquiry template pre-inserted',
          'User must manually specify subject',
          'Caller must verbally explain context'
        ],
        [
          'Address Book Required',
          'No (Opens chat without saving number)',
          'N/A',
          'Often requires saving to avoid losing contact'
        ],
        [
          'Automation Support',
          'Integrates with WhatsApp Business Auto-Replies',
          'Delayed auto-responder email',
          'Interactive Voice Response (IVR) phone tree'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Telefon Numarasını Uluslararası Ülke Koduyla Girin',
        description: 'Numaranın tamamını ülke koduyla ve başka hiçbir şey olmadan girin — artı işareti, tire veya parantez yok. ABD numarası 14155551234; İngiltere numarası 447911123456 olur.'
      },
      {
        number: 2,
        title: 'Önceden Doldurulmuş Müşteri Sorgu Mesajını Yazın',
        description: 'Açılış satırını onlar için yazın; «Merhaba! Bu akşam için bir masa ayırtmak istiyorum» ya da «Merhaba, broşürünüzü gördüm ve X ürünü için fiyat teklifi istiyorum» gibi.'
      },
      {
        number: 3,
        title: 'Resmi WhatsApp Logosuyla Özelleştirin ve İndirin',
        description: 'Zümrüt yeşili ve beyaz marka renklerini kullanın, WhatsApp işaretini ortaya yerleştirin ve SVG veya yüksek çözünürlüklü PNG olarak dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Sıfır Kişi Kaydetme Sürtünmesi',
        description: 'Müşteriler taradıkları anda satış veya destek hattınıza ulaşır — önce numaranızı telefonlarına eklemeden.'
      },
      {
        title: 'Önceden Yazılmış Sorgu Şablonları',
        description: 'Sohbeti, kodun üzerinde bulunduğu belirli reklama, ürüne veya broşüre bağlı bir bağlamla tohumlayın.'
      },
      {
        title: 'WhatsApp Business ve WhatsApp Personal Desteği',
        description: 'Kişisel bir hesap, WhatsApp Business uygulaması ve WhatsApp Cloud API ile çalışır.'
      },
      {
        title: 'Ücretsiz Kalıcı Statik Kodlama',
        description: 'Asla süresi dolmayan, aylık hiçbir maliyeti olmayan ve sınırsız sohbet başlangıcını kaldıran statik bir kod.'
      }
    ],
    sizingMatrix: {
      title: 'WhatsApp QR Code Sizing & Placement Guide',
      description: 'Ensure customers can effortlessly scan your WhatsApp chat codes across diverse retail and promotional print environments.',
      headers: [
        'Placement Medium',
        'Scanning Distance',
        'Minimum Print Size',
        'Recommended Call-to-Action'
      ],
      rows: [
        [
          'Product Packaging & Delivery Boxes',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1.2" x 1.2")',
          '"Scan to Chat with Support on WhatsApp"'
        ],
        [
          'Restaurant Table Tents & Counter Signs',
          '30 cm - 50 cm (12" - 20")',
          '40 mm x 40 mm (1.6" x 1.6")',
          '"Scan to Book Table / Order on WhatsApp"'
        ],
        [
          'Real Estate Yard Signs & Window Decals',
          '1.0 m - 2.5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4.8" x 4.8")',
          '"Scan to Text the Listing Agent Instantly"'
        ],
        [
          'Retail Storefront Entrance Posters',
          '50 cm - 100 cm (20" - 40")',
          '75 mm x 75 mm (3.0" x 3.0")',
          '"Scan to Inquire About In-Stock Products"'
        ],
        [
          'Vehicle Decals & Service Fleet Vans',
          '2.0 m - 5.0 m (6.5 ft - 16 ft)',
          '250 mm x 250 mm (10" x 10")',
          '"Scan to Request Rapid Service via WhatsApp"'
        ]
      ]
    },
    useCases: [
      {
        title: 'Müşteri Desteği ve Garanti Kayıtları',
        description: 'Kılavuzdaki veya kutudaki bir kod, bir şey ters gittiği anda alıcılara canlı bir sorun giderme hattı verir.'
      },
      {
        title: 'Restoran Paket Servisi ve Masa Rezervasyonları',
        description: 'Müşteriler bir masa kartını tarayarak sipariş verir, rezervasyon yapar veya doğrudan WhatsApp Business gelen kutunuza bir alerjeni sorar.'
      },
      {
        title: 'Emlak Sorguları ve Mülk Gezileri',
        description: 'Bir broşürde kod, bir alıcının kat planları ve gösterim saatleri için ilan sahibi danışmana anında mesaj atmasını sağlar.'
      },
      {
        title: 'E-Ticaret Teslimat Paketi Ekleri',
        description: 'Kargo kutusundaki bir kart, müşteriyi bir değişim veya VIP indirim kodu için mesaj atmaya davet eder.'
      },
      {
        title: 'Servis Teklifleri ve Acil Sevkiyat',
        description: 'WhatsApp kodlu bir buzdolabı mıknatısı veya servis çıkartması, acil bir tesisat veya çilingir işini tek dokunuşluk bir rezervasyona dönüştürür.'
      }
    ],
    troubleshooting: {
      title: 'Top Reasons WhatsApp QR Codes Fail to Open Chats',
      points: [
        'Hatalı numara biçimi. Alan kodundan önce baştaki bir 0 (447911... yerine 4407911...) veya başıboş bir +, wa.me bağlantısını bozar. Yalnızca rakamlar.',
        'Bir sabit hat. WhatsApp\'a hiç kaydedilmemiş bir numarayı kodlayın, tarama geçersiz kullanıcı hatası döndürür.',
        'Şişmiş bir ön dolgu. 500 karakterlik varsayılan bir mesaj yoğun, yavaş bir kod yapar. Açılışı yaklaşık 120 karakterin altında tutun.',
        'Rozet yok. İnsanlar çıplak bir kod karşısında tereddüt eder. Resmi WhatsApp işareti hangi uygulamanın açılacağını söyler.',
        'Bağlam yok. «WhatsApp\'ta Sohbet için Tara» gibi net bir satır basın ki tarama bir gizem olmasın.'
      ]
    },
    faqs: [
      {
        q: 'Müşterilerin taramadan önce işletme telefon numaramı kaydetmesi gerekir mi?',
        a: 'Hayır — wa.me bağlantısı numaranızla hemen bir sohbet açar, kişilere kaydetmek gerekmez.'
      },
      {
        q: 'WhatsApp QR kodları için telefon numaramı nasıl biçimlendirmeliyim?',
        a: 'Tam uluslararası biçim, yalnızca rakamlar. (415) 555-1234 gibi bir ABD numarası 14155551234 olur; 07911 123456 İngiltere cebi, baştaki 0 atılarak 447911123456 olur.'
      },
      {
        q: 'Tarama, mesajı kullanıcı adına otomatik olarak gönderir mi?',
        a: 'Göndermez. Tarama, WhatsApp\'ı numaranız ve yazma kutusundaki ön dolgulu metinle açar — müşteri yine de Gönder\'e dokunur, böylece tamamen kontrolde kalır.'
      },
      {
        q: 'Bir kullanıcı kodu bir masaüstü bilgisayarda tararsa ne olur?',
        a: 'Tarayıcı işi WhatsApp Web\'e devreder veya masaüstü uygulamasını açmayı önerir; böylece masaüstü tarama sohbeti sorunsuz sürdürür.'
      },
      {
        q: 'Bunu WhatsApp Business otomatik karşılama mesajlarıyla kullanabilir miyim?',
        a: 'Biri kod aracılığıyla bir sohbet başlattığında, WhatsApp Business karşılama mesajınız, hızlı yanıtlarınız ve uzakta mesajlarınız normal şekilde tetiklenir.'
      },
      {
        q: 'WhatsApp QR kodlarının süresi dolar mı veya sohbet başlangıçlarında sınır var mı?',
        a: 'Bunlar kalıcı statik kodlardır — sınırsız tarama, süre dolması yok.'
      },
      {
        q: 'WhatsApp QR kodumu kaç kişinin taradığını izleyebilir miyim?',
        a: 'Her basılı materyale kendi ön dolgulu açılışını verin — «İlkbahar Broşürü Sorgusu» ile «Vitrin Afişi Sorgusu» — ve ifade, hangi kanalın müşteri adayını ürettiğini söyler.'
      },
      {
        q: 'WhatsApp QR kodları oluşturmak ve kullanmak ücretsiz mi?',
        a: 'Tamamen ücretsiz, aboneliksiz ve gizli ücret yok.'
      }
    ],
    bestPractices: 'Ortada net bir simgeyle standart WhatsApp yeşilini (#25D366) kullanın ve ön dolgulu karşılamayı kısa ve samimi tutun. Ticari bir baskıdan önce kodu hem mobil veride hem WiFi\'de tarayın — ikisi farklı davranabilir.'
  },
  '/vcard-qr-code-generator': {
    sections: [
      {
        title: 'Profesyoneller için Modern Dijital Ağ Kurma',
        paragraphs: [
          'Bir daha asla kâğıt kartvizitiniz bitmesin. Bir vCard QR kodu, eksiksiz profesyonel kişi kartınızı tek dokunuşla tarayan kişinin telefonuna anında aktarır.',
          'Tam ad, kurum, unvan, iş telefonu, cep, e-posta, web sitesi ve fiziksel adres ekleyin. Kartvizitler, özgeçmişler, e-posta imzaları ve konferans yakalıkları için ideal.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of vCard 3.0 Digital Contact QR Codes',
      paragraphs: [
        'Bir vCard QR kodu, eksiksiz bir kişi profilini uluslararası VCF standardında (RFC 2426 ve RFC 6350\'de tanımlı vCard 3.0) paketler. Dize `BEGIN:VCARD`\'dan `END:VCARD`\'a uzanır ve yapılandırılmış alanlar taşır — tam ad (`FN`), kurum (`ORG`), unvan (`TITLE`), telefonlar (`TEL;TYPE=CELL,WORK`), e-posta (`EMAIL;TYPE=INTERNET`), adres (`ADR`) ve web sitesi (`URL`).',
        'Tarayın, dosyalamayı telefon sizin yerinize yapar. iOS bunu Contacts çerçevesiyle, Android People API\'siyle okur ve her ikisi de «Yeni Kişi Oluştur» düğmesiyle önceden doldurulmuş bir kişi kartı açar. Tek dokunuş tüm profilinizi rehbere kaydeder — elle yazma yok, yer değiştirmiş rakamlar yok, cuma gününe kadar ceket cebinde kaybolan kâğıt kart yok.',
        'Bir vCard çoğu koddan daha fazla metin taşır, bu yüzden bayt düzeni önemlidir. Kodlama, yavaş otomatik odaklı ekonomik bir telefonda bile matrisin çözülebilir kalması için temiz ayraçlar kullanır.'
      ]
    },
    comparisonTable: {
      title: 'Digital vCard QR Business Cards vs. Traditional Paper Business Cards',
      headers: [
        'Feature / Aspect',
        'vCard QR Business Card',
        'Traditional Paper Business Card'
      ],
      rows: [
        [
          'Contact Save Time',
          '1 Tap (< 3 seconds directly into smartphone contacts)',
          'Manual typing (1 - 3 minutes, often deferred & lost)'
        ],
        [
          'Data Capacity',
          'Full profile: 3 phones, 2 emails, address, website, title',
          'Limited physical card surface area (often omitted)'
        ],
        [
          'Retention Rate',
          '88% higher (Saved permanently in cloud address book)',
          '88% of paper business cards are thrown away within 1 week'
        ],
        [
          'Environmental Impact',
          'Zero paper waste (Reusable digital & durable cards)',
          'Thousands of discarded paper cards per professional annually'
        ],
        [
          'Interactive Features',
          'One-tap direct calling, emailing, and navigation',
          'Static printed text requiring manual dialing and typing'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Yapılandırılmış Profesyonel Kişi Alanlarını Doldurun',
        description: 'Adınızı, unvanınızı, şirketinizi, cebinizi, iş e-postanızı ve web sitenizi girin. Notları kısa tutun — daha yalın bir profil, daha büyük ve taranması kolay modüller demektir.'
      },
      {
        number: 2,
        title: 'Görsel Markayı Özelleştirin ve Fotoğraf/Logo Yerleştirin',
        description: 'Marka paletinizi uygulayın, bir nokta stili seçin ve fotoğrafınızı ya da şirket işaretinizi Seviye H hata düzeltmeyle ortaya yerleştirin.'
      },
      {
        number: 3,
        title: 'Kartvizit Baskısı için Vektör SVG Dışa Aktarın',
        description: 'Matbaaya vektör SVG\'yi verin veya bir e-posta imzası, LinkedIn afişi ya da kilit ekranı duvar kâğıdı için yüksek çözünürlüklü PNG alın.'
      }
    ],
    features: [
      {
        title: 'Evrensel iOS ve Android Platformlar Arası Uyumluluk',
        description: 'vCard 3.0 ile inşa edildiğinden Apple Contacts, Google Contacts, Outlook ve Samsung Contacts\'a temiz biçimde girer.'
      },
      {
        title: 'Tek Dokunuşla Rehber Entegrasyonu',
        description: 'Telefonunuz, e-postanız, web siteniz ve ofis adresiniz tek dokunuşla kaydedilir — karşı taraf hiçbir şey yazmaz.'
      },
      {
        title: 'Sıfır Bulut Bağımlılığı ve Tam Gizlilik',
        description: 'Kişi verisi kodun kendisinde yaşar. Hiçbir üçüncü taraf sunucu ağ kurma bilgilerinizi saklamaz veya toplamaz.'
      },
      {
        title: 'Premium Karton için Yüksek Hassasiyetli Vektör SVG',
        description: 'Yaldız baskı, spot UV, kabartma veya metal ya da bambu kartı lazerle kazımak için keskin vektör çıktısı.'
      }
    ],
    sizingMatrix: {
      title: 'vCard QR Code Sizing & Resolution Specifications',
      description: 'Because vCard payloads contain 150 to 350 characters of structured text, the matrix has higher module density and requires adherence to strict minimum size rules.',
      headers: [
        'Application Medium',
        'Minimum Recommended Size',
        'Error Correction Level',
        'Optimal Substrate'
      ],
      rows: [
        [
          'Standard Paper Business Cards (3.5" x 2")',
          '28 mm x 28 mm (1.1" x 1.1")',
          'Level Q (25%) or Level H (30%)',
          'Heavy Matte Cardstock (350+ GSM)'
        ],
        [
          'Metal / Wood NFC Smart Business Cards',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Level H (30%)',
          'Laser-Engraved Matte Anodized Aluminum'
        ],
        [
          'Trade Show Lanyards & Conference Badges',
          '45 mm x 45 mm (1.8" x 1.8")',
          'Level M (15%) or Level Q (25%)',
          'Laminated Synthetic PVC / Tyvek'
        ],
        [
          'Resume Headers & Portfolio Covers',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Level Q (25%)',
          'Uncoated Smooth Bright White Paper'
        ],
        [
          'Smartphone Lock Screen Wallpaper',
          '250 x 250 px on digital screen',
          'Level H (30%)',
          'High-Contrast OLED Digital Display'
        ]
      ]
    },
    useCases: [
      {
        title: 'Yönetici ve Satış Temsilcisi Kartvizitleri',
        description: 'Kartın arkasındaki bir kod, konuşma bitmeden bir el sıkışmayı kaydedilmiş bir kişiye dönüştürür.'
      },
      {
        title: 'Fuarlar, Sergiler ve Sektör Konferansları',
        description: 'Bir yakalıkta, stant afişinde veya isimlikte, bilgileriniz yaklaşık iki saniyede bir potansiyel müşterinin telefonuna düşer.'
      },
      {
        title: 'İş Arayan Özgeçmişleri ve Ön Yazılar',
        description: 'Özgeçmiş başlığındaki gizli bir kod, bir işe alım uzmanının numaranızı ve portföy bağlantınızı hiçbir şey yeniden yazmadan kaydetmesini sağlar.'
      },
      {
        title: 'Emlakçılar ve Mortgage Aracıları',
        description: 'Bir açık ev broşüründe, bir vCard kodu, olası bir alıcı için gösterim ayarlamayı tek dokunuşluk bir işe çevirir.'
      },
      {
        title: 'Kurumsal E-posta Altbilgileri ve Dijital İmzalar',
        description: 'Kodu e-posta şablonuna ekleyin; masaüstünde okuyan biri, doğrudan hattınızı kaydetmek için onu ekrandan tarayabilir.'
      }
    ],
    troubleshooting: {
      title: 'Common vCard QR Code Scanning Issues & How to Prevent Them',
      points: [
        'Aşırı dolu profiller. Yirmi alan — bir biyografi, dört numara, üç adres — matrisi o kadar sıkıştırır ki taranması zorlaşır. Temel bilgilerle sınırlı kalın: ad, unvan, şirket, bir iki telefon, e-posta ve bir URL.',
        'Çok küçük baskı. Bir vCard, daha yoğun bir Sürüm 6-10 matrisi kullanır ve 25 mm\'nin altında ekonomik bir kamera modül kenarlarını bulanıklaştırır. Ona yer verin.',
        'Parlak karton. Yüksek parlak bir kart, salon spot ışıklarını merceğe yansıtır. Mat, ipeksi veya yumuşak dokunuş seçin.',
        'Ters renkler. Koyu kart üzerinde beyaz bir kod keskin görünür ama bazı eski tarayıcılarda başarısız olur. Açık zemin üzerinde koyu modüller güvenli seçim olmayı sürdürür.',
        'Ülke kodu yok. +1 veya +90\'ı atlarsanız, uluslararası bir kişi kaydedilmiş karttan sizi doğrudan arayamaz.'
      ]
    },
    faqs: [
      {
        q: 'Biri telefonunda bir vCard QR kodunu taradığında ne olur?',
        a: 'iOS\'ta bir başlık «[Ad] kişilere eklensin mi» sunar ve tüm alanları dolu Apple Contacts\'ı açar. Android\'de bir Kaydet istemiyle Google Contacts açılır. Her durumda, tüm profiliniz rehberlerine tek dokunuş uzaklıktadır.'
      },
      {
        q: 'Statik bir vCard QR koduna fotoğraf ekleyebilir miyim?',
        a: 'Ham görüntüyü kodlamak, veriyi taranamaz bir karmaşaya şişirir. Alışılmış yöntem, fotoğrafınızı veya logonuzu kodun ortasına bindirmek ve web sitenizi ya da LinkedIn URL\'nizi, tam çözünürlüklü fotoğrafın gerçekten bulunduğu vCard\'ın URL alanına koymaktır.'
      },
      {
        q: 'vCard QR kodlarını taramak için internet bağlantısı gerekir mi?',
        a: 'Tamamen çevrimdışı çalışır. Her alan kodda düz vCard 3.0 metni olarak saklanır, bu yüzden bir telefon kişiyi veri veya WiFi olmadan okur ve kaydeder.'
      },
      {
        q: 'vCard QR kodları Outlook ve Gmail ile uyumlu mu?',
        a: 'vCard 3.0 biçimi evrensel kişi standardıdır, bu yüzden Outlook, Apple Mail, Google Contacts ve büyük CRM\'ler bunu sorunsuz kabul eder.'
      },
      {
        q: 'Statik vCard QR kodlarının son kullanma tarihi var mı?',
        a: 'Yok. Kişi verisi kodun kendisinde durur ve sonsuza dek geçerli kalır — yinelenen ücret yok, tarama sınırı yok.'
      },
      {
        q: 'Bir vCard\'da uluslararası telefon numaralarını nasıl biçimlendirmeliyim?',
        a: 'E.164 kullanın: bir artı işareti, ardından ülke kodu, alan kodu ve numara — örneğin +14155552671. Bu biçim, yurt dışındaki birinin arama önekini tahmin etmeden sizi aramasını veya mesaj atmasını sağlar.'
      },
      {
        q: 'vCard QR kodunu kartvizitimin iki yüzüne de basabilir miyim?',
        a: 'Alışılmış düzen adınızı ve markanızı ön yüzde tutar ve kodu arka yüze «Kişiyi kaydetmek için tarayın» gibi kısa bir satırın yanına koyar.'
      },
      {
        q: 'Ticari bir kartvizit matbaasına göndermek için en iyi dışa aktarma biçimi hangisi?',
        a: 'Onlara vektör SVG veya EPS verin. Vektör dosyaları herhangi bir ofset veya dijital baskıda hassasiyetini korur.'
      }
    ],
    bestPractices: 'Telefon numaralarını tam uluslararası biçimde yazın (+1, +90) ve modüllerin büyük ve okunur kalması için kartı temel alanlarla sınırlayın. Tüm baskıyı onaylamadan önce basılı provayı hem bir iPhone hem bir Android\'de tarayın.'
  },
  '/wifi-qr-code-generator': {
    sections: [
      {
        title: 'Evler, Kafeler ve Ofisler için Sorunsuz WiFi Erişimi',
        paragraphs: [
          'Parola paylaşma sıkıntısına son verin. Misafirler WiFi QR kodunuzu iPhone veya Android kamerasıyla taradığında, cihazları otomatik olarak kablosuz ağınıza katılmalarını ister.',
          'WPA/WPA2, WEP ve açık şifresiz ağlar dahil tüm standart kablosuz güvenlik protokollerini destekler. Yazdırılabilir WiFi masa kartınızı net vektör SVG veya HD PNG olarak indirin.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of WiFi Network QR Codes (WIFI: Protocol)',
      paragraphs: [
        'Bir WiFi QR kodu, ağ giriş bilgilerinizi ZXing projesinin tanımladığı ve hem Apple hem Google\'ın benimsediği `WIFI:` URI biçiminde taşır. Dize şöyle okunur: `WIFI:T:WPA;S:NetworkSSID;P:NetworkPassword;H:false;;` — `T` güvenlik türü (WPA/WPA2/WPA3, WEP veya nopass), `S` ağ adı, `P` parola ve `H` ağın gizli olup olmadığını belirtir.',
        'Kamera bu dizeyi tanıdığında telefon, tüm manuel bağlanma dansını atlar. iOS\'ta CoreWLAN/NetworkExtension katmanı «‹[SSID]› ağına katıl?» uyarısı çıkarır; dokunun ve cihaz erişim noktasıyla doğrudan WPA el sıkışmasını yürütür. Parola panoya hiç düşmez ve kimse Ayarlar\'ı karıştırmaz.',
        'Tüm bunlar tarayıcınızda bir araya getirilir. SSID\'niz ve yönlendirici parolanız koda yerel olarak yazılır ve asla ağ üzerinden veya bir veritabanına gitmez — duvara yapıştırmak üzere basacağınız bir kimlik bilgisi için tam da istediğiniz şey budur.'
      ]
    },
    comparisonTable: {
      title: 'WiFi QR Code vs. Manual Password Entry for Hospitality & Business',
      headers: [
        'Evaluation Metric',
        'WiFi QR Code Access',
        'Manual Password Entry'
      ],
      rows: [
        [
          'Connection Time',
          '1 - 3 seconds (Single camera scan & tap)',
          '45 - 90 seconds (Typing 16+ complex characters)'
        ],
        [
          'Typing Error Rate',
          '0% (Exact byte-for-byte transmission)',
          '30% - 50% on complex passwords with symbols'
        ],
        [
          'Staff Support Overhead',
          'Virtually zero guest connectivity tickets',
          'High volume of guest requests for staff assistance'
        ],
        [
          'Password Security',
          'Prevents guests seeing plaintext passkeys',
          'Requires displaying passwords on whiteboards/chalkboards'
        ],
        [
          'Compatibility',
          'Native on iOS 11+ and Android 10+',
          'Manual navigation through OS Settings menus'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Ağ Adını (SSID) ve Güvenlik Protokolünü Belirtin',
        description: 'Ağ adını tam olarak yazın — büyük/küçük harfe duyarlıdır. Modern bir yönlendirici için WPA/WPA2/WPA3, eski donanım için WEP veya açık bir yakalama portalı ağı için Şifreleme Yok seçin.'
      },
      {
        number: 2,
        title: 'WiFi Parolasını Girin ve Gizli Durumu Yapılandırın',
        description: 'Güvenlik anahtarını ekleyin. Yönlendirici adını yayınlamıyorsa, tarayan cihazların onu etkin biçimde araması için Gizli Ağ düğmesini açın.'
      },
      {
        number: 3,
        title: 'Masa Gösterimleri için Vektör SVG veya Yüksek Çözünürlüklü PNG İndirin',
        description: 'Bir WiFi simgesi veya mekân logonuzu ekleyin, sonra dışa aktarın. Dayanıklı akrilik standlara, komodin kartlarına veya bir karşılama broşürüne bastırın.'
      }
    ],
    features: [
      {
        title: 'Tek Dokunuşla Sürtünmesiz Misafir Bağlantısı',
        description: 'Artık yanlış yazılan 16 karakterli parolalar yok ve bağlanmak için personeli durduran misafirler yok.'
      },
      {
        title: 'WPA3, WPA2, WEP ve Gizli SSID Desteği',
        description: 'Güncel 802.11ax/ac güvenlik standartlarını ve daha eski çift bantlı mesh kurulumlarını kapsar.'
      },
      {
        title: 'Sıfır Bilgi İstemci Tarafı Güvenlik',
        description: 'Parola tarayıcınızda kalır. Hiçbir şey kaydedilmez, bir buluta depolanmaz veya izlenmez.'
      },
      {
        title: 'Sofra Gereçleri için Yüksek Çözünürlüklü Vektör Biçimleri',
        description: 'Ahşaba lazerle kazınan, metal plakaya işlenen veya lamine akrilik kartona basılan net SVG.'
      }
    ],
    sizingMatrix: {
      title: 'WiFi QR Code Display Sizing Benchmarks',
      description: 'WiFi QR codes are typically scanned at close range by seated guests or customers holding their phone 20 cm to 40 cm away.',
      headers: [
        'Venue / Placement',
        'Viewing Distance',
        'Recommended Print Size',
        'Recommended Material'
      ],
      rows: [
        [
          'Cafe Table Tents & Coasters',
          '20 cm - 30 cm (8" - 12")',
          '40 mm x 40 mm (1.6" x 1.6")',
          'Laminated Cardstock / Wood / Acrylic'
        ],
        [
          'Hotel Room Nightstands & Desks',
          '25 cm - 40 cm (10" - 16")',
          '45 mm x 45 mm (1.8" x 1.8")',
          'Framed Matte Card / Acrylic Tent'
        ],
        [
          'Airbnb Welcome Booklets',
          '20 cm - 35 cm (8" - 14")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Matte Heavyweight Paper (100 lb+)'
        ],
        [
          'Office Conference Room Whiteboards',
          '50 cm - 100 cm (20" - 40")',
          '80 mm x 80 mm (3.2" x 3.2")',
          'Matte Vinyl Wall Decal / Foam Board'
        ],
        [
          'Event Registration Check-In Desks',
          '40 cm - 80 cm (16" - 32")',
          '75 mm x 75 mm (3.0" x 3.0")',
          'Countertop Strut Card Display'
        ]
      ]
    },
    useCases: [
      {
        title: 'Oteller, Tatil Köyleri ve Airbnb Kiralıkları',
        description: 'Komodindeki çerçeveli bir kart, gelen misafirleri saniyeler içinde çevrimiçi yapar; yönlendiricinin arkasında etiket aramak yok.'
      },
      {
        title: 'Kafeler, Kahve Dükkânları ve Günlük Yemek',
        description: 'Bir masa kartı «WiFi ne?» kesintilerini azaltır ve misafirleri dijital menüde daha uzun tutar.'
      },
      {
        title: 'Kurumsal Ofisler ve Ortak Çalışma Alanları',
        description: 'Ziyaretçi müşteriler ve etkinlik misafirleri, BT\'yi çağırmadan toplantı odasındaki misafir ağına girer.'
      },
      {
        title: 'Konferanslar, Hackathonlar ve Fuarlar',
        description: 'Yüzlerce katılımcı kayıt masasında aynı anda bağlanır; bu, darboğazı açar ve salondaki hücresel yoğunluğu hafifletir.'
      },
      {
        title: 'Sağlık Klinikleri ve Bekleme Odaları',
        description: 'Bekleme odası WiFi\'si hastaları rahat tutar ve taranabilir bir kart, resepsiyonun parolayı asla hecelememesi anlamına gelir.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting Common WiFi QR Scanning Failures',
      points: [
        'Büyük/küçük harf uyuşmazlığı. Ağ adları büyük/küçük harfe duyarlıdır — «MyCafeWiFi» ve «mycafewifi» iki farklı ağdır. Büyük harfleri tam olarak eşleştirin.',
        'Yanlış güvenlik türü. WPA2-PSK (AES) çalıştıran bir yönlendirici için WEP kodu üretin, el sıkışma anında başarısız olur. Herhangi bir modern yönlendirici için WPA/WPA2/WPA3 seçin.',
        'Yakalama portalları. Misafir WiFi\'niz bir şartlar sayfası gösteriyorsa, kod telefonu yine de sinyale bağlar — ardından telefonun yakalama ağı yardımcısı giriş sayfasını açar. Bu beklenen bir durumdur, arıza değil.',
        'Eksik gizli işareti. Yönlendirici SSID\'sini gizliyorsa, kod Hidden: true taşımadıkça cihazlar ağı bulamaz.',
        'Yıpranmış kartlar. Kahve lekeleri ve çizik laminasyon konum bulucu desenleri örter. Bir akrilik kapak, masa kartını okunur tutar.'
      ]
    },
    faqs: [
      {
        q: 'Bir WiFi QR kodunu halka açık bir alanda basmak güvenli mi?',
        a: 'Kod adı ve parolayı düz metin olarak tuttuğu için tarayan herkes o ağa girer. Sağlıklı yaklaşım, onu istemci yalıtımı açık, özel bir misafir ağı için üretmektir — asla özel iç iş ağınız için değil.'
      },
      {
        q: 'Bir WiFi QR kodu hem Apple iPhone hem Android cihazlarda çalışır mı?',
        a: 'Çalışır. iOS 11+ iPhone\'lar ve Android 10+ Android telefonlar WIFI: biçimini yerleşik kameradan tanır ve tek dokunuşla katılım sunar.'
      },
      {
        q: 'Gelecekte WiFi ağ parolamı değiştirirsem ne olur?',
        a: 'Eski kod çalışmayı durdurur, çünkü o belirli parola modüllere sabitlenmiştir. Parola değişikliği, yeni bir kod üretip basmak demektir.'
      },
      {
        q: 'Parolasız açık bir ağ için WiFi QR kodu üretebilir miyim?',
        a: '«Şifreleme Yok» seçeneğini seçin, SSID\'yi girin ve üretin. Bir tarama, hiçbir anahtar istemeden doğrudan açık ağa bağlanır.'
      },
      {
        q: 'WiFi parolam için nasıl bir QR kodu yaparım?',
        a: 'Ağ adınızı ve parolanızı yazın, şifreleme türünü (WPA/WPA2/WPA3) seçin ve üretin. Kod kimlik bilgilerini taşır, bu yüzden taramak ağa katılır — kimsenin parolayı okuması veya yazması gerekmez.'
      },
      {
        q: 'Bir WiFi QR kodunu taramak parolayı kullanıcının ekranında gösterir mi?',
        a: 'iOS\'ta uyarı yalnızca «[Ağ Adı] ağına katıl?» der — parola karakterleri ekranda hiç görünmez, bu da omzunuzun üzerinden okuyan birine karşı sessizce koruma sağlar.'
      },
      {
        q: 'Bir WiFi QR kodunun ortasına işletme logomu ekleyebilir miyim?',
        a: 'Ekleyebilirsiniz. Seviye H düzeltmesi, kodun yaklaşık %30\'unu kurtarma için ayırır; böylece mekân logosu veya bir WiFi simgesi ortaya oturur ve telefonlar yine de düzgün okur.'
      },
      {
        q: 'WiFi QR kodlarının süresi dolar mı veya aylık tarama sınırları var mı?',
        a: 'İkisi de değil. Bunlar kalıcı statik kodlardır — sınırsız tarama, süre dolması yok, ücret yok.'
      },
      {
        q: 'WiFi QR kodunu taradıktan sonra telefonum neden bağlanmadı?',
        a: 'Genelde dört şeyden biri: SSID büyük/küçük harfi yanlış, WPA/WPA2/WPA3 yerine WEP seçilmiş, yönlendirici menzil dışında ya da ağda MAC adresi filtreleme açık.'
      }
    ],
    bestPractices: 'Kodu yüksek kontrastlı mat kartona basın ve şeffaf bir akrilik tutucuya yerleştirin. Misafirlerin kodun ne yaptığını bilmesi için «Misafir WiFi\'sine katılmak için kameranızı buraya doğrultun» gibi bir satır ekleyin — ve bir parti sipariş etmeden önce basılı provayı tarayın.'
  },
  '/url-qr-code-generator': {
    sections: [
      {
        title: 'Çevrimdışı Kitlenizi Herhangi Bir Çevrimiçi Hedefe Bağlayın',
        paragraphs: [
          'Bir URL QR kodu, basılı pazarlama malzemeleriniz ile dijital çevrimiçi varlığınız arasındaki boşluğu kapatır. Kullanıcılar uzun URL\'ler yazmadan web bağlantılarını, kampanya sayfalarını veya dijital menüleri açmak için telefon kamerasını koda doğrultur.',
          'URL QR kodlarımız tam tasarım özelleştirmesini destekler: özel marka renkleri, benzersiz nokta şekilleri ve ticari baskı için yüksek çözünürlüklü vektör SVG dışa aktarımları dahil.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Specification of URL QR Codes',
      paragraphs: [
        'Bir URL QR kodu, ISO/IEC 18004 standardına göre bir web adresini siyah beyaz modüllerden oluşan bir ızgaraya dönüştürür. Telefon kamerasını doğrultun; cihaz ikili veriyi çözer ve adresi varsayılan tarayıcıya teslim eder — iOS\'ta AVFoundation üzerinden Safari, Android\'de Google ML Kit üzerinden Chrome. Sayfa açılır. Kimse bir şey yazmaz.',
        'Buradaki kodlar statiktir ve bu kelimenin ağırlığı vardır. Yönlendirme tabanlı bir hizmet her ziyaretçiyi önce kendi sunucusundan geçirir; bu da gecikme, tek bir arıza noktası ve süresi dolarak kodunuzu da beraberinde düşürebilecek bir abonelik ekler. Statik bir URL kodu tüm bunları atlar: tam HTTP veya HTTPS adresiniz matrisin içine işlenir. Web varlığınız var olduğu sürece, tarama sınırı olmadan ve hiçbir şey kaydedilmeden çalışır.',
        'Bu kodlar derin bağlantıları da destekler. Birini özel bir URI şemasına veya bir Universal Link\'e yöneltin; uygulama kuruluysa tarama, kullanıcıyı mobil web sürümü yerine doğrudan içine bırakır — bir alışveriş uygulamasındaki belirli bir ürün, Spotify veya Apple Music\'teki bir albüm.'
      ]
    },
    comparisonTable: {
      title: 'Static URL QR Codes vs. Dynamic Redirect QR Codes',
      headers: [
        'Feature / Metric',
        'Static URL QR (QR Generator Online)',
        'Third-Party Dynamic Redirects'
      ],
      rows: [
        [
          'Lifetime Expiration',
          'Never expires (Permanent lifetime validity)',
          'Expires if monthly subscription lapses'
        ],
        [
          'Scan Limits',
          'Unlimited lifetime scans (0 cost)',
          'Frequently capped (e.g. 50-100 scans/mo on free tiers)'
        ],
        [
          'Redirect Latency',
          '0ms (Direct browser DNS resolution)',
          '200ms - 800ms intermediate server hop'
        ],
        [
          'Privacy & Security',
          '100% Client-side generation (No user tracking)',
          'Intermediary server logs IP, device, and geolocation'
        ],
        [
          'Offline Functionality',
          'Encodes raw URL directly into modules',
          'Requires active redirect server connection'
        ],
        [
          'Data Sovereignty',
          'You own the link destination completely',
          'Dependent on third-party domain uptime & DNS'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Hedef Web Adresini ve UTM Parametrelerini Girin',
        description: 'https:// dahil URL\'nin tamamını yapıştırın. Bir kampanya için Google Analytics UTM etiketlerinizi ekleyin — utm_source=flyer&utm_medium=qr&utm_campaign=spring_launch — ve GA4 trafiği tam olarak o broşüre atfeder.'
      },
      {
        number: 2,
        title: 'Hata Düzeltme ve Stil Parametrelerini Seçin',
        description: 'Ortaya logo mu koyacaksınız? Kodun %30\'unu kurtaran Seviye H\'yi seçin. Ardından modül stilini, köşe gözlerini ve renkleri ayarlayın; kontrastı 4.5:1 veya daha iyi tutun.'
      },
      {
        number: 3,
        title: 'Baskı için Vektör SVG veya Dijital için Yüksek Çözünürlüklü PNG Dışa Aktarın',
        description: 'Baskı, ambalaj ve afişler için ölçeklenebilir SVG\'yi alın. Ekranlar ve sosyal medya için 300 DPI\'da 2048x2048px PNG\'yi alın.'
      }
    ],
    features: [
      {
        title: 'Abonelik Duvarı Yok ve Ömür Boyu Kalıcı Taramalar',
        description: 'Asla süresi dolmayan, kart istemeyen ve kısıtlama olmadan milyonlarca taramayı kaldıran statik bir URL kodu.'
      },
      {
        title: 'Kayıpsız Vektör SVG ve EPS Baskı Dışa Aktarımları',
        description: 'Aynı dosya hem 2 cm\'lik bir kartta hem de 10 metrelik bir bilbordda net basılır. Vektör geometrisinin ulaşacağı bir çözünürlük tavanı yoktur.'
      },
      {
        title: 'Seviye H Hata Düzeltme (%30 Yedeklilik)',
        description: 'Ortaya bir logo koyun; kurtarma payı onu örter, böylece ışık nasıl olursa olsun tarama tutar.'
      },
      {
        title: '%100 İstemci Tarafı Kriptografik Gizlilik',
        description: 'Üretim tarayıcınızda çalışır. Bağlantılarınız, parametreleriniz ve token\'larınız hiçbir sunucuda saklanmaz veya analiz edilmez.'
      }
    ],
    sizingMatrix: {
      title: 'Print Sizing & Distance-to-Size Optical Benchmarks',
      description: 'The standard optical scanning formula is S = D / 10, where S is the minimum QR code width/height and D is the expected scanning distance from the user smartphone camera.',
      headers: [
        'Placement / Application',
        'Expected Scan Distance (D)',
        'Minimum Recommended Size (S)',
        'Recommended File Format'
      ],
      rows: [
        [
          'Business Cards & Name Badges',
          '15 cm - 30 cm (6" - 12")',
          '25 mm x 25 mm (1.0" x 1.0")',
          'Vector SVG / EPS'
        ],
        [
          'Restaurant Menus & Table Tents',
          '30 cm - 50 cm (12" - 20")',
          '35 mm x 35 mm (1.4" x 1.4")',
          'Vector SVG / 300 DPI PNG'
        ],
        [
          'Product Packaging & Labels',
          '20 cm - 40 cm (8" - 16")',
          '30 mm x 30 mm (1.2" x 1.2")',
          'Vector SVG / PDF'
        ],
        [
          'Flyers, Posters & Window Decals',
          '1.0 m - 2.0 m (3 ft - 6.5 ft)',
          '100 mm x 100 mm (4.0" x 4.0")',
          'Vector SVG'
        ],
        [
          'Trade Show Banners & Backdrops',
          '2.0 m - 4.0 m (6.5 ft - 13 ft)',
          '250 mm x 250 mm (10" x 10")',
          'Vector SVG / EPS'
        ],
        [
          'Highway Billboards & Transit Ads',
          '10.0 m - 25.0 m (33 ft - 82 ft)',
          '1000 mm - 2500 mm (3.3 ft - 8.2 ft)',
          'Vector SVG / Large Format Vector'
        ]
      ]
    },
    useCases: [
      {
        title: 'Çok Kanallı Perakende ve Ürün Ambalajı',
        description: 'Kutuyu dijital bir katmana bağlayın — bir kutu açma videosu, tam içerik listesi, bir orijinallik sertifikası veya bir kayıt portalı — doğrudan ambalajın üzerinden.'
      },
      {
        title: 'Konaklama Menüleri ve Masadan Sipariş',
        description: 'Menü baskı faturasını atın, menüyü güncel tutun ve misafirlerin masadan sipariş vermesine veya ödeme yapmasına izin verin. Bir PDF menü, yeniden basılmadan akşam 6\'da güncellenir.'
      },
      {
        title: 'Emlak Bahçe Tabelaları ve Sanal Gezintiler',
        description: 'Bahçe tabelasındaki bir kod 3D Matterport gezintisini, kat planını ve fotoğraf galerisini açar. Alıcılar evi kaldırımdan istedikleri saatte gezer.'
      },
      {
        title: 'Basılı Reklam ve Doğrudan Posta Dönüşümü',
        description: 'Bir dergi reklamı, bir bilbord, bir kartpostal — UTM etiketli kod hangisinin ziyareti gerçekten getirdiğini söylediğinde her biri ölçülebilir bir huniye dönüşür.'
      },
      {
        title: 'Konferanslar, Sunumlar ve Slayt Desteleri',
        description: 'Bir slaytı kodla kapatın; salon, ayağa kalkmadan sununuzu, teknik raporunuzu ve bağlantılarınızı indirir.'
      }
    ],
    troubleshooting: {
      title: '5 Critical Pitfalls That Break URL QR Code Scannability',
      points: [
        'Zayıf kontrast. Beyaz üzerine açık gri veya siyah üzerine koyu yeşil, kameranın ihtiyaç duyduğu 4.5:1\'in altında kalır. Koyu modüller, açık arka plan — kural budur.',
        'Kırpılmış sessiz bölge. Kodun her kenarında 4 modüllük net bir kenarlık gerekir. Metni veya görseli kenara kadar götürürseniz tarayıcı kodun nerede başladığını bulamaz.',
        'Çok uzun URL. Yaklaşık 150 karakterden sonra matris, küçük basıldığında bulanıklaşan minik noktalar sıkıştırır. Önce bağlantıyı kısaltın veya gereksiz sorgu parametrelerini atın.',
        'Aşırı büyük logo. Alanın %30\'unu aşan bir logo ya da H yerine Seviye L veya M\'de oluşturulmuş bir kod, kurtarma bloklarını taşırır ve tarama başarısız olur.',
        'Parlaklık yansıması. Parlak laminasyon, kalabalık bir mekânda tavan ışıklarını merceğe geri yansıtır. Mat veya saten kağıt net okunur.'
      ]
    },
    faqs: [
      {
        q: 'QR Generator Online\'da oluşturulan URL QR kodlarının süresi hiç dolar mı?',
        a: 'Ömür boyu geçerli kalır. Web adresi matrisin içine yazılır, bu yüzden abonelik veya zamanlayıcı yoktur — hedef sayfanız yayında olduğu sürece kod çalışır.'
      },
      {
        q: 'Statik bir QR kodu bastıktan sonra hedef URL\'yi düzenleyebilir miyim?',
        a: 'Kodun kendisini değil — hedef, basıldıktan sonra modül desenine sabitlenir. Çözüm, kodu kendi alan adınızdaki kısa bir bağlantıya (yourdomain.com/promo) yöneltmek ve kampanya hedefi değiştikçe o bağlantıyı yönlendirmektir. Basılı kodun asla değişmesi gerekmez.'
      },
      {
        q: 'Ücretsiz QR kodlarında izin verilen maksimum tarama sayısı nedir?',
        a: 'Bir tavan yok. Üretim statik ve istemci tarafında olduğundan, bir kod bir bant genişliği sınırına veya ödeme duvarına takılmadan on milyonlarca taramayı kaldırabilir.'
      },
      {
        q: 'Ticari baskı için neden PNG yerine SVG önerilir?',
        a: 'SVG, kodu sabit bir piksel ızgarası yerine geometri olarak saklar. Bilbord boyutuna büyütün, çizgiler keskin kalır; oysa raster bir PNG, orijinal piksellerinden daha büyük basıldığında dağılır.'
      },
      {
        q: 'UTM parametreleri QR kod pazarlama kampanyalarını izlemede nasıl yardımcı olur?',
        a: '?utm_source=brochure&utm_medium=qr&utm_campaign=summer_sale gibi etiketler ekleyin; GA4 her oturumu ve satışı, hiçbir şey öğrenemeyeceğiniz genel \'Doğrudan\' trafiğe atmak yerine, o belirli basılı materyale atfeder.'
      },
      {
        q: 'Bir URL QR kodunu doğrudan indirilebilir bir PDF dosyasına bağlamak için kullanabilir miyim?',
        a: 'PDF\'i herkese açık bir yerde barındırın — sitenizde, Dropbox\'ta, Google Drive\'da — doğrudan bağlantısını kopyalayıp yapıştırın. Tarama, belgeyi doğrudan telefon tarayıcısından açar veya indirir.'
      },
      {
        q: 'URL QR kodları eski iPhone ve Android telefonlarla uyumlu mu?',
        a: 'iOS 11 veya sonrası (2017\'den itibaren) herhangi bir iPhone ve sürüm 9 veya sonrası herhangi bir Android, ayrı bir tarayıcı uygulaması olmadan yerleşik kameradan QR kodlarını okur.'
      },
      {
        q: 'Hata Düzeltme Seviyesi H, özel logolu QR kodumu nasıl korur?',
        a: 'Seviye H, Reed-Solomon yedekliliğiyle verinin yaklaşık %30\'unu çoğaltır. Ortadaki bir logo bazı modülleri örter ve tarayıcı bunları yedek kopyalardan yeniden oluşturur — URL tam olarak çözülmeye devam eder.'
      }
    ],
    bestPractices: 'Bir baskı işini onaylamadan önce kodu hem bir iPhone hem de bir Android\'de, loş ve parlak ışıkta test edin. 4 modüllük sessiz bölgeyi boş tutun ve işaret ettiği sayfanın mobil uyumlu olduğundan ve iki saniyeden kısa sürede yüklendiğinden emin olun — hızlı bir tarama, yavaş bir sayfaya düşünce ziyaretçiyi yine de kaybeder.'
  },
  '/location-qr-code-generator': {
    sections: [
      {
        title: 'Mağazalar ve Mekânlar İçin Adım Adım Yol Tarifi',
        paragraphs: [
          'Davetiyelere, broşürlere, emlak tabelalarına veya kartvizitlere konum QR kodları basarak kapınıza kadar anında GPS navigasyonu sunun.',
          'Google Haritalar, Apple Haritalar ve iOS ile Android\'deki standart navigasyon uygulamalarıyla uyumlu.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Geo URI ve Google Haritalar Konum QR Kodlarına Teknik Bakış',
      paragraphs: [
        'Bir Konum QR Kodu, coğrafi koordinat verilerini veya harita bağlantılarını standartlaştırılmış `geo:` URI şeması (RFC 5870, biçim: `geo:<Enlem>,<Boylam>,<Yükseklik>`) ya da doğrudan bir Google Haritalar / Apple Haritalar kanonik URL\'si kullanarak kodlar. Bir akıllı telefonla tarandığında işletim sistemi, hedefiniz iğnelenmiş şekilde yerel navigasyon uygulamasını (Android\'de Google Haritalar, iOS\'ta Apple Haritalar) açar.',
        'Navigasyon bildirimine tek bir dokunuşla kullanıcı, mevcut GPS konumundan mekânınıza, perakende mağazanıza, otopark girişinize veya etkinlik kapınıza kadar anında adım adım araç, yürüyüş veya toplu taşıma tarifi alır.',
        'Elle adres yazmayı, yanlış duyulan sokak adlarını ve navigasyon hatalarını ortadan kaldıran konum QR kodları; pop-up mağazalar, açık ev günleri, düğünler ve turistik noktalar için fiziksel ziyaretçi trafiğini ve zamanında varışı çarpıcı biçimde artırır.'
      ]
    },
    comparisonTable: {
      title: 'Konum QR Kodu Navigasyonu ile Elle Adres Arama Karşılaştırması',
      headers: [
        'Faktör / Ölçüt',
        'Konum QR Kodu',
        'Elle Adres Arama'
      ],
      rows: [
        [
          'Navigasyon Doğruluğu',
          '%100 tam iğne (GPS enlem/boylam hassasiyeti)',
          'Aynı adlı sokak ve şehirlerde sık hata'
        ],
        [
          'Navigasyonun Başlama Süresi',
          '1 tarama + 1 dokunuş (3 saniyeden az)',
          '45 - 90 saniye (harita açma, adres yazma, seçme)'
        ],
        [
          'Belirli Giriş İğneleme',
          'Tam otopark veya arka kapı koordinatlarını iğneler',
          'Standart adresler genelde ön kaldırımı veya yanlış sokağı iğneler'
        ],
        [
          'Platformlar Arası Destek',
          'Google Haritalar, Apple Haritalar veya Waze\'i yerel olarak açar',
          'Uygulama içinde elle gezinme gerektirir'
        ],
        [
          'Çevrimdışı Koordinat Saklama',
          'Geo URI, çevrimdışı GPS navigasyon uygulamalarıyla çalışır',
          'Adres metnini çözmek için etkin internet araması gerekir'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Google Haritalar URL\'si veya Kesin GPS Koordinatları Girin',
        description: 'Google Haritalar paylaşım bağlantınızı yapıştırın veya yol dışı mekânları tam olarak belirlemek için kesin enlem ve boylam koordinatlarını (ör. 37.7749, -122.4194) girin.'
      },
      {
        number: 2,
        title: 'Harita İğnesi Simgesi ve Marka Renkleriyle Biçimlendirin',
        description: 'Yüksek kontrastlı renkler seçin, köşe gözlerini özelleştirin ve kodun merkezine bir navigasyon iğnesi veya mekân logosu gömün.'
      },
      {
        number: 3,
        title: 'Davetiyeler ve Tabelalar İçin Vektör SVG İndirin',
        description: 'Etkinlik afişleri, düğün davetiyeleri ve yön tabelaları için vektör SVG, dijital etkinlik rehberleri için yüksek çözünürlüklü PNG dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Tek Dokunuşla Adım Adım GPS Tarifi',
        description: 'Ziyaretçileri hiçbir navigasyon karışıklığı veya elle adres girişi olmadan doğrudan mekânınıza yönlendirir.'
      },
      {
        title: 'Kesin Enlem/Boylam Koordinat Desteği',
        description: 'Resmî sokak adresi olmayan festival kapılarını, patika otoparklarını ve açık hava etkinlik alanlarını tam olarak belirleyin.'
      },
      {
        title: 'Google Haritalar ve Apple Haritalar ile Yerel Entegrasyon',
        description: 'Tüm iOS ve Android cihazlarda varsayılan navigasyon uygulamalarını sorunsuzca açar.'
      },
      {
        title: 'Sıfır Ücretle Kalıcı Ömür Boyu Çalışma',
        description: 'Statik konum QR kodları kalıcı geçerliliğe, sınırsız taramaya ve sıfır tekrar eden ücrete sahiptir.'
      }
    ],
    sizingMatrix: {
      title: 'Konum QR Kodu Baskı Boyut Özellikleri',
      description: 'Konum QR kodlarınızın davetiyelerde ve yön tabelalarında kolayca taranabildiğinden emin olun.',
      headers: [
        'Yerleşim / Uygulama',
        'Tarama Mesafesi',
        'Minimum Baskı Boyutu',
        'Önerilen Yüzey'
      ],
      rows: [
        [
          'Düğün ve Parti Davetiyeleri',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Mat ağır keten dokulu karton'
        ],
        [
          'Yön Tabelaları ve Bahçe Tabelaları',
          '1,0 m - 2,5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4,8" x 4,8")',
          'Hava koşullarına dayanıklı oluklu plastik / alüminyum'
        ],
        [
          'Tanıtım Kartpostalları ve Postalar',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1,4" x 1,4")',
          'Mat ağır karton (100 lb+)'
        ],
        [
          'Turist Rehberleri ve Patika Levhaları',
          '30 cm - 60 cm (12" - 24")',
          '50 mm x 50 mm (2,0" x 2,0")',
          'Eloksallı alüminyum / sert PVC'
        ],
        [
          'Konferans ve Fuar Program Kitapçıkları',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Mat kuşe kağıt'
        ]
      ]
    },
    useCases: [
      {
        title: 'Düğün ve Özel Etkinlik Davetiyeleri',
        description: 'Davetiyelere konum QR kodları basın; misafirler tarayarak doğrudan nikâh ve düğün mekânına yönlensin.'
      },
      {
        title: 'Emlak Açık Ev Günleri ve Yön Tabelaları',
        description: 'Köşe sokak tabelalarına konum QR kodları yerleştirerek ilgilenen alıcıları doğrudan açık evin girişine yönlendirin.'
      },
      {
        title: 'Festivaller, Pop-up Pazarlar ve Yemek Kamyonları',
        description: 'Sabit adresi olmayan gezici yemek kamyonları, açık hava festival sahneleri ve pop-up standlar için kesin GPS iğneleri paylaşın.'
      },
      {
        title: 'Turistik Simgeler ve Patika Navigasyonu',
        description: 'Yürüyüşçülere ve turistlere taranabilir patika başlangıcı iğneleri, manzara noktaları ve tarihî yapı koordinatları sunun.'
      },
      {
        title: 'Ticari Mağaza Doğrudan Posta Kampanyaları',
        description: 'Tanıtım broşürlerine Google Haritalar QR kodları ekleyin; yerel sakinler açılışınıza veya şubenize kolayca ulaşsın.'
      }
    ],
    troubleshooting: {
      title: 'Konum QR Kodu Navigasyon Hatalarını Önleme',
      points: [
        'Kırpılmış koordinatlar: ondalık basamakları atmak (ör. 37.774929 yerine 37.77) harita iğnenizi yüzlerce metre kaydırır. Daima 5-6 ondalık basamak kullanın.',
        'Süresi dolmuş kısa harita bağlantıları: özel kısa bağlantılar kullanıyorsanız alan adının etkin kaldığından emin olun. Doğrudan Google Haritalar URL\'leri ve Geo URI\'ler asla sona ermez.',
        'Fiziksel adres metnini atlamak: elle doğrulamayı tercih eden kullanıcılar için QR kodunun altına daima okunabilir açık adresi basın.',
        'Dış mekân tabelalarında düşük kontrast: doğrudan güneş ışığı düşük kontrastlı renkleri soldurur. Dış mekân tabelalarında parlak beyaz zemin üzerinde tam siyah modüller kullanın.',
        'Yol kenarı tabelalarında parlama: yüksek yansıtıcı tabela laminasyonu farlardan ve güneşten lens parlaması yaratır. Mat dış mekân vinili kullanın.'
      ]
    },
    faqs: [
      {
        q: 'QR kodum için doğru Google Haritalar bağlantısını nasıl alırım?',
        a: 'Google Haritalar\'ı açın, işletmenizi arayın veya konumunuza bir iğne bırakın, «Paylaş»a tıklayın, paylaşılabilir kısa bağlantıyı kopyalayın ve oluşturucumuza yapıştırın.'
      },
      {
        q: 'Açık adres yerine enlem ve boylam koordinatları kullanabilir miyim?',
        a: 'Evet! Kesin enlem ve boylam koordinatlarını (ör. `37.7749,-122.4194`) girmek; parklar, festival alanları ve resmî adresi olmayan kırsal mekânlar için idealdir.'
      },
      {
        q: 'iPhone kullanıcılarında Apple Haritalar, Android\'de Google Haritalar açılır mı?',
        a: 'Evet. Standart Google Haritalar URL\'leri ve Geo URI\'ler iOS ve Android telefonlarda ilgili varsayılan harita uygulamasını tetikler.'
      },
      {
        q: 'Konum QR kodları sona erer mi veya ücret alır mı?',
        a: 'Hayır. QR Generator Online\'da oluşturulan statik konum QR kodları kalıcı ömür boyu geçerliliğe, sınırsız taramaya ve sıfır tekrar eden ücrete sahiptir.'
      },
      {
        q: 'QR kodunun merkezine harita iğnesi simgesi gömebilir miyim?',
        a: 'Evet! QR Generator Online Seviye H hata düzeltmesi kullanır; bu sayede taranabilirliği etkilemeden merkeze bir navigasyon iğnesi veya mekân logosu gömebilirsiniz.'
      },
      {
        q: 'Düğün davetiyesi baskısı için en iyi dışa aktarma biçimi hangisi?',
        a: 'Düğün kırtasiyesi ve ticari karton baskısı için vektör SVG veya 300 DPI yüksek çözünürlüklü PNG dışa aktarın.'
      },
      {
        q: 'Kullanıcılar çevrimdışıyken yol tarifi alabilir mi?',
        a: 'Geo URI koordinatları (`geo:lat,lng`) kullanıyorsanız, maps.me gibi çevrimdışı navigasyon uygulamaları veya önceden indirilmiş Google Haritalar bölgeleri hücresel veri olmadan yol tarifi verebilir.'
      },
      {
        q: 'Konum verilerim oluşturma sırasında gizli kalıyor mu?',
        a: 'Evet. Tüm QR kodları web tarayıcınızda %100 istemci tarafında oluşturulur. Hiçbir konum koordinatı veya harita URL\'si harici sunucularda saklanmaz.'
      }
    ],
    bestPractices: 'Baskıdan önce iğne konumunuzu hem Apple Haritalar hem Google Haritalar üzerinde doğrulayın. «Adım adım GPS tarifi için tarayın» gibi net bir harekete geçirici mesajla basın ve yüksek kontrastı koruyun.'
  },
  '/text-qr-code-generator': {
    sections: [
      {
        title: '%100 Çevrimdışı Taranabilir Metin ve Veri Kodlama',
        paragraphs: [
          'Düz metin QR kodları alfanümerik verileri doğrudan barkod deseninin içinde saklar. Tarama, mobil veri veya internet bağlantısı olmadan bile anında çalışır.',
          'Depo envanter etiketleme, ekipman talimatları, seri takibi ve gizli mesajlar için mükemmel.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Düz Metin ve Ham UTF-8 Barkod QR Kodlarına Teknik Bakış',
      paragraphs: [
        'Düz Metin QR Kodu, ham ve biçimlendirilmemiş dize verisini ISO/IEC 18004 standartlarına uygun olarak UTF-8 8-bit bayt modu kodlamasıyla doğrudan 2D matris sembolojisine kodlar. Web bağlantısı gerektiren URL QR kodlarının aksine, bir Düz Metin QR kodu tüm veri yükünü doğrudan siyah beyaz modüllerin görsel deseni içinde taşır.',
        'Bir akıllı telefon kamerası, elde taşınan endüstriyel 2D barkod okuyucu veya envanter tarayıcısıyla tarandığında cihaz bayt dizisini çözer ve düz metni anında ekranda gösterir ya da klavye emülasyonu (HID) ile bağlı yazılıma aktarır — web tarayıcı açmadan ve hücresel veya WiFi bağlantısı gerektirmeden.',
        'Düz metin QR kodları alfanümerik karakterleri, noktalama işaretlerini, sembolleri, çok dilli Unicode yazı sistemlerini ve emojileri destekler; bu da onları endüstriyel varlık takibi, depo envanter seri numaraları, ekipman bakım kayıtları, kaçış odası ipuçları ve çevrimdışı güvenlik şifreleri için vazgeçilmez kılar.'
      ]
    },
    comparisonTable: {
      title: 'Düz Metin QR Kodu ile URL QR Kodu Karşılaştırması',
      headers: [
        'Özellik / Ölçüt',
        'Düz Metin QR Kodu',
        'URL QR Kodu'
      ],
      rows: [
        [
          'İnternet Gereksinimi',
          '%100 çevrimdışı (hiçbir ağ bağlantısı gerekmez)',
          'Web sayfasını yüklemek için etkin internet gerekir'
        ],
        [
          'Taramada Cihaz Davranışı',
          'Metni pencerede gösterir veya panoya kopyalar',
          'Hedef URL\'de web tarayıcısını açar'
        ],
        [
          'Veri Konumu',
          'Tamamen fiziksel barkod modüllerinin içinde saklanır',
          'Hedef web sunucusunda saklanır'
        ],
        [
          'Veri Kapasitesi',
          '4.296 alfanümerik karaktere kadar (7.089 sayısal)',
          'Web bağlantıları için genellikle 30 - 100 karakter'
        ],
        [
          'Güvenlik ve Gizlilik',
          'Sıfır ağ izi, sıfır takip',
          'Web sunucusu ziyaretçi IP\'sini, tarayıcısını ve saati kaydeder'
        ],
        [
          'Başlıca Kullanım Alanları',
          'Varlık etiketleri, seri numaraları, çevrimdışı notlar, ipuçları',
          'Pazarlama, web trafiği, açılış sayfaları, menüler'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Metin İçeriğini, Seri Numaralarını veya Talimatları Girin',
        description: 'Alfanümerik metninizi, ekipman seri kodlarınızı, kupon numaralarınızı veya çok satırlı notlarınızı metin alanına yazın ya da yapıştırın.'
      },
      {
        number: 2,
        title: 'Stil ve Hata Düzeltme Seviyesini Seçin',
        description: 'Yüksek kontrastlı modül desenleri seçin ve varlık etiketleri için M veya Q hata düzeltme seviyesini, merkeze logo gömüyorsanız H seviyesini kullanın.'
      },
      {
        number: 3,
        title: 'Vektör SVG veya Yüksek Çözünürlüklü PNG İndirin',
        description: 'Endüstriyel lazer kazıma ve termal etiket baskısı için vektör SVG, dijital çalışma sayfaları ve belgeler için yüksek çözünürlüklü PNG dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Sıfır Bağlantıyla %100 Çevrimdışı Çalışma',
        description: 'Uzak saha konumlarında, bodrumlarda ve güvenli çevrimdışı tesislerde metni anında tarar ve gösterir.'
      },
      {
        title: 'Tüm 2D Barkod Tarayıcılarında Evrensel Destek',
        description: 'Zebra, Honeywell ve Datalogic depo tarayıcılarının yanı sıra iOS ve Android kamera uygulamalarıyla uyumlu.'
      },
      {
        title: 'Tam UTF-8 Çok Dilli ve Emoji Kodlama',
        description: 'Uluslararası dil yazılarını, matematiksel formülleri, para birimi sembollerini ve emojileri zahmetsizce kodlayın.'
      },
      {
        title: 'Sıfır Sona Ermeyle Kalıcı Statik Barkodlar',
        description: 'Statik metin QR kodları abonelik ücreti, tarama sınırı veya yenileme olmadan sonsuza kadar okunabilir kalır.'
      }
    ],
    sizingMatrix: {
      title: 'Düz Metin QR Kodu Boyut ve Yoğunluk Özellikleri',
      description: 'Metin QR matris yoğunluğu karakter sayısıyla artar. Güvenilir tarama için minimum boyut yönergelerini izleyin.',
      headers: [
        'Karakter Yükü',
        'Matris Sürümü',
        'Minimum Baskı Boyutu',
        'Önerilen Uygulama'
      ],
      rows: [
        [
          'Kısa (1 - 50 karakter)',
          'Sürüm 2 - 4 (25x25 - 33x33)',
          '20 mm x 20 mm (0,8" x 0,8")',
          'Varlık etiketleri, seri numaraları, parça etiketleri'
        ],
        [
          'Orta (50 - 150 karakter)',
          'Sürüm 5 - 7 (37x37 - 45x45)',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Ekipman özellikleri, kuponlar, erişim anahtarları'
        ],
        [
          'Uzun (150 - 300 karakter)',
          'Sürüm 8 - 11 (49x49 - 61x61)',
          '40 mm x 40 mm (1,6" x 1,6")',
          'Bakım kayıtları, talimatlar, notlar'
        ],
        [
          'Genişletilmiş (300 - 600 karakter)',
          'Sürüm 12 - 16 (65x65 - 81x81)',
          '55 mm x 55 mm (2,2" x 2,2")',
          'Ayrıntılı prosedürler, çok satırlı belgeler'
        ],
        [
          'Maksimum (600+ karakter)',
          'Sürüm 17+ (85x85+)',
          '75 mm x 75 mm (3,0" x 3,0")',
          'Büyük format referans levhaları'
        ]
      ]
    },
    useCases: [
      {
        title: 'Endüstriyel Varlık Takibi ve Depo Seri Etiketleri',
        description: 'Makineleri, sunucu raflarını ve depo envanter kutularını taranabilir seri numaraları ve bakım tarihleriyle etiketleyin.'
      },
      {
        title: 'Eğitim Sınavları ve Sınıf İçi Hazine Avları',
        description: 'Basılı okul çalışma kağıtlarına sınav cevaplarını, matematik çözümlerini ve bulmaca ipuçlarını gizleyin; öğrenciler çevrimdışı tarasın.'
      },
      {
        title: 'Etkinlik Kuponları ve Tek Kullanımlık Erişim Kodları',
        description: 'Biletlere benzersiz metin indirim kodları basın; personel WiFi olmadan elde taşınan tarayıcılarla doğrulasın.'
      },
      {
        title: 'Kaçış Odası Bulmacaları ve Etkileşimli Sergiler',
        description: 'Müze vitrinlerine ve kaçış odası aksesuarlarına gizli bilmeceler, şifre çözme anahtarları ve hikâye ipuçları gömün.'
      },
      {
        title: 'Çevrimdışı Güvenlik Parolaları ve Kurtarma Anahtarları',
        description: 'Şifrelenmiş yedek anahtarları ve yapılandırma parolalarını fiziksel metal yedekleme plakalarında saklayın.'
      }
    ],
    troubleshooting: {
      title: 'Düz Metin QR Kodu Tarama Sorunlarını Giderme',
      points: [
        'Mikroskobik modüller yaratan veri aşırı yükü: tek bir koda 1.000+ karakter sıkıştırmak aşırı yoğun bir matris oluşturur. Hızlı tarama için metni 300 karakterin altında tutun.',
        'Yanlışlıkla URL öneki eklemek: metniniz http:// veya https:// ile başlarsa telefon kameraları bunu düz metin yerine web bağlantısı sayar. Ham metin görüntüsü istiyorsanız web öneklerini kaldırın.',
        'Düşük kontrastlı termal etiket baskısı: yıpranmış baskı kafalı düşük kaliteli doğrudan termal yazıcılar modül kenarlarının taşmasına yol açabilir. Kaliteli termal transfer şeritleri kullanın.',
        '4 modüllük sessiz bölgeyi ihlal etmek: varlık etiketlerinde barkodun dört kenarının çevresinde en az 4 boş modül genişliği bırakın.',
        'Kavisli yüzey bozulması: yoğun QR etiketlerini dar silindirik borulara veya şişelere yapıştırmak matrisi bozar. Kodları dikey düz eksene yerleştirin.'
      ]
    },
    faqs: [
      {
        q: 'Tek bir Düz Metin QR Koduna kaç karakter kodlayabilirim?',
        a: 'Bir QR kodu teknik olarak 4.296 alfanümerik karakter veya 7.089 sayısal basamak saklayabilir. Ancak standart boyutlarda hızlı optik tarama için metni 300 karakterin altında tutmanız önerilir.'
      },
      {
        q: 'Düz Metin QR kodu taramak internet bağlantısı gerektirir mi?',
        a: 'Hayır! Düz metin QR kodları tüm veri yüklerini doğrudan görsel barkod matrisinin içinde saklar. Hücresel veri veya WiFi olmadan %100 çevrimdışı taranır ve görüntülenir.'
      },
      {
        q: 'Bir Metin QR kodu tarandığında akıllı telefonda ne olur?',
        a: 'Kamera uygulaması çözülen metni bir sistem iletişim kutusunda gösterir; metni panoya kopyalama veya web araması yapma seçenekleri sunar.'
      },
      {
        q: 'Özel karakterler, yabancı dil yazıları ve emoji kodlayabilir miyim?',
        a: 'Evet! QR Generator Online tam UTF-8 bayt kodlamasını destekler; yabancı dil alfabeleri (Japonca, Arapça, Kiril), matematiksel semboller ve emojiler kullanılabilir.'
      },
      {
        q: 'Düz Metin QR kodları sona erer mi veya ücret alır mı?',
        a: 'Hayır. QR Generator Online\'da oluşturulan statik metin QR kodları kalıcı ömür boyu geçerliliğe, sınırsız taramaya ve sıfır tekrar eden ücrete sahiptir.'
      },
      {
        q: 'Metin QR kodları endüstriyel barkod tarayıcılarla uyumlu mu?',
        a: 'Evet! Tüm standart 2D barkod okuyucular (Zebra, Honeywell, Datalogic) metin QR kodlarını tarar ve çözülen karakterleri doğrudan bağlı terminal yazılımına aktarır.'
      },
      {
        q: 'Termal barkod etiket yazıcıları için en iyi dosya biçimi hangisi?',
        a: 'Vektör SVG veya yüksek çözünürlüklü PNG biçimini dışa aktarın. Vektör SVG dosyaları ticari termal etiket baskı yazılımında %100 hassasiyetle işlenir.'
      },
      {
        q: 'Kodlanan metin verisi oluşturma sırasında gizli kalıyor mu?',
        a: 'Evet. Tüm QR kod oluşturma işlemi %100 istemci tarafında, web tarayıcınızın belleğinde yapılır. Hiçbir metin verisi harici sunuculara aktarılmaz veya orada saklanmaz.'
      }
    ],
    bestPractices: 'Düşük modül yoğunluğunu korumak için metni mümkün olduğunca kısa tutun. Beyaz arka plan üzerinde tam siyah modüller kullanın ve tüm varlık etiketlerinde zorunlu 4 modüllük sessiz bölgeyi koruyun.'
  },
  '/': {
    sections: [
      {
        title: 'Neden QR Generator Online\'ı Seçmelisiniz?',
        paragraphs: [
          'QR Generator Online, web\'in en esnek, gizlilik odaklı ve %100 ücretsiz QR kod oluşturucusudur. İster bir pazarlama broşürü için basit bir bağlantıya, ister dijital bir kartvizite veya anında misafir WiFi erişimine ihtiyacınız olsun, platformumuz saniyeler içinde profesyonel, taranabilir QR kodları oluşturur.',
          'Yüksek çözünürlüklü indirmeleri ödeme duvarlarının arkasında kilitleyen veya kodlarınızı 14 gün sonra sona erdiren diğer araçların aksine, QR Generator Online\'da oluşturulan tüm statik QR kodları sınırsız taramayla sonsuza kadar kalıcı ve işlevsel kalır.'
        ]
      },
      {
        title: 'Eksiksiz Özelleştirme Seçenekleri',
        paragraphs: [
          'Kurumsal marka kimliğinize uyacak şekilde QR kodunuzun her ayrıntısını özelleştirin. Birden fazla nokta stili deseni, dış köşe kare şekli, iç göz vurgusu, özel renk gradyanları ve merkeze gömülü logolar arasından seçim yapın.',
          'Büyük reklam panosu için baskıya hazır vektör SVG formatında veya dijital sosyal medya kampanyaları için net yüksek çözünürlüklü PNG formatında tasarımlarınızı dışa aktarın.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Ücretsiz, Gizlilik Öncelikli QR Kod Oluşturma İçin Kurumsal Standart',
      paragraphs: [
        'QR Generator Online, ödünsüz görsel özelleştirme, endüstriyel düzeyde Reed-Solomon hata düzeltmesi ve %100 kriptografik veri egemenliği sunmak için sıfırdan tasarlanmış web\'in önde gelen istemci taraflı 2D barkod oluşturma platformudur. ISO/IEC 18004 kapsamında küresel olarak standartlaştırılan platformumuz, bireylerin, tasarım ajanslarının, küçük işletmelerin ve çok uluslu şirketlerin sıfır abonelik duvarı ve sıfır tarama sona erme sınırıyla tüm özel veri şemaları için kalıcı, taranabilir QR kodları oluşturmasını sağlar.',
        'Trafiğinizi sessizce özel yönlendirme sunucuları üzerinden yönlendiren yırtıcı QR oluşturucu hizmetlerinin aksine (yalnızca 14 gün sonra ani 30$/ay abonelik ödeme duvarlarının arkasında basılı pazarlama materyallerinizi rehin almak için), QR Generator Online doğrudan kodlama, statik bir mimari üzerinde çalışır. Platformumuzda bir URL, vCard, WiFi veya metin QR kodu oluşturduğunuzda, ham veriler doğrudan web tarayıcınızın belleğindeki görsel matris modüllerine derlenir. Bu, fiziksel pazarlama varlıklarınızın basılı materyallerinizin tüm ömrü boyunca kalıcı olarak işlevsel kalmasını garanti eder.',
        'Seviye H hata düzeltmesi (%30 cebirsel kurtarma), çok renkli gradyan paletleri, özel modül geometrileri, bağımsız köşe göz stilizasyonu ve kayıpsız vektör SVG/EPS dışa aktarma desteğiyle QR Generator Online, lüks ambalaj, ticari baskı öncesi, restoran masa üstü sipariş ve dijital iletişim ağı için gereken eksiksiz araç setini sunar.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online ile Abonelik Tabanlı QR Platformları Karşılaştırması',
      headers: ['Platform Özelliği / Politikası', 'QR Generator Online (%100 Ücretsiz ve Açık)', 'Geleneksel Abonelik Tabanlı QR Hizmetleri'],
      rows: [
        ['Ömür Boyu Sona Erme', 'Asla sona ermez (kalıcı statik geçerlilik)', 'Ödenmedikçe 14 günlük denemeden sonra sona erer'],
        ['Tarama Sınırlamaları', 'Sınırsız ömür boyu tarama (sonsuza kadar 0 maliyet)', 'Ücretsiz katmanlarda 50-100 tarama/ay ile sınırlı'],
        ['Yönlendirme Gecikmesi', '0ms (doğrudan tarayıcı DNS çözümlemesi)', '200ms - 800ms ara sunucu atlaması'],
        ['Gizlilik ve Veri Takibi', '%100 İstemci Tarafında (IP kaydı veya çerez yok)', 'Ara sunucu kullanıcı IP\'lerini ve konumlarını takip eder'],
        ['Yüksek Çözünürlüklü Vektör Dışa Aktarma', 'Tam Vektör SVG, EPS ve 4K PNG ücretsiz dahil', 'Vektör formatları 30$+/ay katmanların arkasında kilitli'],
        ['Logo Ekleme', 'Seviye H (%30 kurtarma) ücretsiz dahil', 'Ücretsiz planlarda filigranlı veya kısıtlı']
      ]
    },
    steps: [
      { number: 1, title: 'Veri Türünü Seçin ve İçeriği Girin', description: 'Özel QR oluşturucularımızdan (URL, WiFi, vCard, PDF, WhatsApp, Sosyal Medya, E-posta, SMS, Telefon, Konum, Etkinlik, Kripto, Metin, Google Formlar, Ödemeler) seçim yapın ve verilerinizi girin.' },
      { number: 2, title: 'Görsel Geometriyi, Renkleri ve Marka Logosunu Özelleştirin', description: 'Kurumsal paletinizi uygulayın, yuvarlak veya şık nokta desenleri seçin, köşe gözlerini bağımsız olarak stilize edin ve merkezi marka logonuzu yükleyin.' },
      { number: 3, title: 'Kayıpsız Vektör SVG veya 4K PNG Dışa Aktarın', description: 'Ticari ofset baskı, ambalaj ve afişler için baskıya hazır vektör SVG indirin veya web ve dijital kanallar için 300 DPI\'de 2048x2048px PNG indirin.' }
    ],
    features: [
      { title: 'Eksiksiz QR Oluşturucu Araç Seti', description: 'Web URL\'leri, WiFi ağları, vCard 3.0 kişileri, PDF belgeleri, WhatsApp sohbetleri, GPS navigasyonu, ödemeler ve daha fazlası için tam destek.' },
      { title: 'Seviye H Reed-Solomon Hata Düzeltmesi', description: '%30 matematiksel veri kurtarma fazlalığıyla şirket logonuzu veya profil simgenizi gömün.' },
      { title: 'Kayıpsız Vektör SVG ve EPS Baskı İndirmeleri', description: 'QR grafiklerinizi küçük kartvizitlerden dev bina duvar resimlerine kadar keskin hassasiyetle sonsuz ölçeklendirin.' },
      { title: '%100 İstemci Tarafında Kriptografik Gizlilik', description: 'Tüm QR oluşturma algoritmaları web tarayıcınızın belleğinde yerel olarak çalışır. Bağlantılarınız, kimlik bilgileriniz ve parametreleriniz asla yüklenmez.' }
    ],
    sizingMatrix: {
      title: 'Ana Baskı Boyutlandırma ve Mesafe Referans Tablosu',
      description: 'Standart optik formül $S = D / 10$ kullanarak herhangi bir fiziksel ortam için minimum fiziksel boyutları hesaplayın.',
      headers: ['Fiziksel Yerleşim', 'Tarama Mesafesi (D)', 'Minimum Genişlik (S)', 'Önerilen Format'],
      rows: [
        ['Kartvizitler ve İsim Rozetleri', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Vektör SVG / EPS'],
        ['Restoran Menüleri ve Masa Standları', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'Vektör SVG / 300 DPI PNG'],
        ['Ürün Ambalajı ve Kartonlar', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Vektör SVG / PDF'],
        ['Broşürler, Afişler ve Dergiler', '50 cm - 150 cm (20" - 60")', '60 mm - 150 mm (2.4" - 6.0")', 'Vektör SVG / 300 DPI PNG'],
        ['Araç Filoları ve Vanlar', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'Vektör SVG / Döküm Vinil'],
        ['Otoyol Reklam Panoları ve Afişler', '15.0 m - 30.0 m (50 ft - 100 ft)', '1500 mm - 3000 mm (5 ft - 10 ft)', 'Vektör SVG / Büyük Format EPS']
      ]
    },
    useCases: [
      { title: 'Çok Kanallı Perakende ve Ambalaj', description: 'Kutudan doğrudan dijital kutu açma eğitimleri, özgünlük doğrulaması ve müşteri kayıt portallarıyla fiziksel ürünleri köprüleyin.' },
      { title: 'Ağırlama ve Temassız Yemek', description: 'Ortalama hesap tutarlarını artıran hijyenik, gerçek zamanlı güncellenebilir dijital PDF menüler, şarap listeleri ve masa başı sipariş kartları dağıtın.' },
      { title: 'Yönetici Ağ Oluşturma ve Akıllı Kartlar', description: 'Tek dokunuşla vCard 3.0 iletişim kodlarıyla fiziksel kartvizitleri kalıcı akıllı telefon adres defteri girişlerine dönüştürün.' },
      { title: 'Emlak Pazarlaması ve 3D Turlar', description: 'Bahçe tabelalarını ve açık ev yönlendirmelerini 3D Matterport turlarına bağlanan 7/24 etkileşimli potansiyel müşteri portallarına dönüştürün.' },
      { title: 'Sürtünmesiz Misafir WiFi Erişimi', description: 'Otellerde, kafelerde ve ofislerde WPA3/WPA2 ağları için tek dokunuşla kamera taramasıyla şifre paylaşımı hayal kırıklığını ortadan kaldırın.' }
    ],
    troubleshooting: {
      title: '%100 İlk Denemede Tarama Güvenilirliği İçin 5 Kritik Kural',
      points: [
        'Minimum 4.5:1 Kontrast Oranını Koruyun: parlak beyaz veya soluk bir arka plan üzerindeki koyu ön plan modülleri anında optik kamera ikilileştirmesini sağlar.',
        '4 Modüllük Sessiz Bölge Kenar Boşluğunu Koruyun: barkodu çevreleyen zorunlu 4 modüllük boş kenarlığa asla görsel veya metin taşmasına izin vermeyin.',
        'Merkezi Logolar İçin Asla %30 Alanı Aşmayın: gömülü logoları toplam yüzey alanının %25-30\'unun altında tutun ve her zaman Seviye H hata düzeltmesiyle oluşturun.',
        'Ticari Baskı Baskıları İçin Vektör SVG Kullanın: düşük çözünürlüklü 72 DPI ekran görüntülerinden kaçının. Vektör SVG herhangi bir baskı ölçeğinde keskin kenarlar garanti eder.',
        'Parlamayı Önlemek İçin Mat Yüzeyler Belirleyin: parlak laminasyon üstteki ışıkları doğrudan kamera sensörlerine yansıtır. Mat, ipek veya saten kaplamalar kullanın.'
      ]
    },
    faqs: [
      { q: 'QR Generator Online\'da oluşturulan QR kodları gerçekten sonsuza kadar %100 ücretsiz mi?', a: 'Evet! QR Generator Online\'da oluşturulan tüm statik QR kodları, sınırsız tarama, kalıcı ömür boyu geçerlilik ve sıfır abonelik ödeme duvarıyla %100 ücretsizdir.' },
      { q: 'Diğer QR oluşturucu web siteleri kodlarımı neden 14 gün sonra sona erdiriyor?', a: 'Birçok ticari QR platformu, taramalarınızı sunucuları üzerinden yönlendiren dinamik yönlendirme bağlantıları kullanır. Bir deneme süresinden sonra, pahalı bir aylık abonelik ($15 - $40/ay) ödeyene kadar yönlendirmeyi devre dışı bırakırlar. QR Generator Online, verileri doğrudan barkoda kodlayan kalıcı statik kodlar oluşturur, yani asla rehin tutulamazlar.' },
      { q: 'QR Generator Online\'dan hangi dosya formatlarını indirebilirim?', a: 'Baskıya hazır vektör SVG dosyalarını (ticari baskı öncesi için sonsuz ölçeklenebilir) ve 300 DPI\'de ultra yüksek çözünürlüklü 2048x2048px PNG raster görüntülerini indirebilirsiniz.' },
      { q: 'Herhangi bir QR kodunun merkezine şirket logomu ekleyebilir miyim?', a: 'Evet! Tüm özel QR oluşturucu türlerinde özel PNG, SVG veya JPEG logoları yükleyebilirsiniz. Motorumuz otomatik olarak Seviye H (%30) hata düzeltmesi ve logonuzun etrafına sessiz bir maske tamponu uygular.' },
      { q: 'QR Generator Online kullanırken verilerim güvenli ve gizli mi?', a: 'Evet. Tüm QR oluşturma algoritmaları, istemci taraflı JavaScript aracılığıyla web tarayıcınızın belleğinde yerel olarak çalışır. URL\'leriniz, şifreleriniz, iletişim bilgileriniz ve görselleriniz asla harici sunuculara yüklenmez veya depolanmaz.' },
      { q: 'Bu QR kodlarını taramak için telefonuma bir uygulama yüklemem gerekir mi?', a: 'Hayır. iOS 11+ çalıştıran tüm modern iPhone\'lar ve Android 9+ çalıştıran Android cihazlar, herhangi bir üçüncü taraf yazılımı olmadan yerleşik kamera uygulamasını kullanarak QR kodlarını yerel olarak tarar.' },
      { q: 'Bir afiş veya poster için QR kodumu ne kadar büyük yazdırmalıyım?', a: '10:1 optik kuralını uygulayın: Kullanıcıya mesafe / 10 = Minimum QR genişliği. 1,5 metre uzaktan görüntülenen bir poster için, kodu en az 15 cm x 15 cm yazdırın.' },
      { q: 'Ticari ürünler ve mallar için QR kodları oluşturabilir miyim?', a: 'Evet! Platformumuzda oluşturulan tüm QR kodlarını dünya çapında perakende ambalajı, kitaplar, giyim ve tabelalarda kullanma konusunda tam ticari mülkiyet ve lisanslama haklarına sahipsiniz.' }
    ],
    bestPractices: 'Ticari baskı için her zaman vektör SVG olarak dışa aktarın, yüksek kontrastı koruyun (> 4.5:1), 4 modüllük sessiz bölgeyi koruyun ve büyük baskılar sipariş etmeden önce fiziksel basılı prova taraması yaparak test edin.'
  },
  '/pricing': {
    "sections": [
      {
        "title": "Her Zaman Ücretsiz Özellikler ve Kurumsal Pro Özellikleri",
        "paragraphs": [
          "Ücretsiz temel planımız, tüm özel araç türlerinde sınırsız statik QR kod oluşturma imkânı sunar; tarama sınırı yok, filigran yok ve vektör SVG dışa aktarımı sıfır maliyetle.",
          "Düzenlenebilir dinamik URL'lere, parola korumasına ve ayrıntılı tarama analizlerine ihtiyaç duyan pazarlama ekipleri ve kurumlar için Pro katmanımız esnek ve uygun fiyatlı bir faturalandırma sunar."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Şeffaf, %100 Ücretsiz Mimari — Abonelik Karşıtı Manifesto",
      "paragraphs": [
        "\"Ücretsiz deneme tuzağı\" şöyle işler: Ücretsiz sandığınız bir QR kodu oluşturur, birkaç bin liralık ambalaj ya da araç kaplamasına basarsınız ve iki hafta sonra karanlığa gömülür; çünkü hizmet artık yönlendirmeyi canlı tutmak için ayda 35 $ istemektedir. İşletme sahipleri, tasarımcılar ve etkinlik planlayıcıları bu tuzağa sürekli düşer. Kod hiçbir zaman gerçekten ücretsiz değildi; baskı, vazgeçmeyi pahalı hale getirdi.",
        "Bunun ters olduğunu düşünüyoruz. QR üretimi açık bir matematiksel standart olan ISO/IEC 18004 üzerine kuruludur ve açık bir standart size geri kiralanmamalıdır. Bu yüzden her şey istemci tarafında çalışır: tarayıcınız Reed-Solomon hata düzeltmesini hesaplar, matrisi oluşturur ve SVG'yi yerel olarak çizer. Ortada hiçbir izleme sunucusu yoktur; dolayısıyla sizden ücret alabilecek ya da kodunuzu kapatabilecek bir sunucu da yoktur.",
        "Aşağıda tüm fiyat listesi yer alıyor. Gizli ücret yok, tarama sınırı yok, kart gerekmiyor ve son kullanma tarihi yok. Bu bir promosyon katmanı değil; ürünün tamamı bu."
      ]
    },
    "comparisonTable": {
      "title": "QR Generator Online Özellik ve Fiyat Katmanı Matrisi",
      "headers": [
        "Özellik / Yetenek",
        "QR Generator Online (Sonsuza Dek Ücretsiz)",
        "Rakip \"Pro\" Planları (35 $/ay)"
      ],
      "rows": [
        [
          "Aylık abonelik ücreti",
          "0,00 $ / ay (%100 sonsuza dek ücretsiz)",
          "15,00 - 45,00 $ / ay (yılda 180 - 540 $)"
        ],
        [
          "QR kod sona erme",
          "Asla (statik kodlar kalıcı olarak geçerli)",
          "Aylık ödeme aksarsa devre dışı kalır"
        ],
        [
          "Tarama sınırlamaları",
          "Sınırsız ömür boyu tarama (bant genişliği sınırı yok)",
          "Düşük katmanlarda ayda 50 - 500 taramayla sınırlı"
        ],
        [
          "Vektör SVG ve EPS dışa aktarımı",
          "Ücretsiz dahil (kayıpsız vektör yolları)",
          "Ayda 25 $ ve üzeri premium katmanların arkasında kilitli"
        ],
        [
          "Yüksek çözünürlüklü 300 DPI 4K PNG",
          "Ücretsiz dahil (2048x2048+ px)",
          "Ücretli abonelik planlarının arkasında kilitli"
        ],
        [
          "Özel logo ekleme",
          "Seviye H hata düzeltmesiyle ücretsiz dahil",
          "Ücretsiz planlarda filigranlı veya kısıtlı"
        ],
        [
          "Hesap / kayıt gereksinimi",
          "Yok (hesap yok, e-posta yok, kredi kartı yok)",
          "Zorunlu kayıt ve kredi kartı girişi"
        ],
        [
          "Veri egemenliği ve gizlilik",
          "%100 istemci tarafında (izleme ve depolama yok)",
          "Tüm taramalar sunucuda yönlendirilir ve kaydedilir"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Özel bir QR aracı seçin",
        "description": "Tüm oluşturucular açık: URL, vCard, WiFi, PDF, WhatsApp, sosyal medya, e-posta, SMS, telefon, konum, etkinlik, kripto, metin, ödemeler, Google Formları. Hiçbiri bir planın arkasında kilitli değil."
      },
      {
        "number": 2,
        "title": "Görsel markanızı özelleştirin ve logonuzu ekleyin",
        "description": "Renklerinizi uygulayın, nokta desenini ve köşe gözlerini yeniden biçimlendirin ve logonuzu Seviye H düzeltmeyle merkeze yerleştirin."
      },
      {
        "number": 3,
        "title": "Üretime hazır vektör SVG dosyalarını indirin",
        "description": "İndir'e basın. Yüksek çözünürlüklü SVG veya PNG anında iner; ödeme duvarı ya da araya giren hesap ekranı yoktur."
      }
    ],
    "features": [
      {
        "title": "Sonsuza dek sıfır aylık abonelik ücreti",
        "description": "İstediğiniz kadar ticari kalitede kod oluşturun. Yinelenen maliyet yok, kart yok, küçük harf yok."
      },
      {
        "title": "Sınırsız kalıcı ömür boyu taramalar",
        "description": "Basılı bir kod yıllarca çalışmaya devam eder. Hiçbir şey onu yavaşlatmaz ya da sona erdirmez."
      },
      {
        "title": "Sınırsız kayıpsız vektör SVG indirmeleri",
        "description": "Geniş formatlı matbaacıların istediği baskı öncesi vektör dosyası burada, ücretsiz ve premium yükseltme olmadan."
      },
      {
        "title": "Tam ticari kullanım hakları dahil",
        "description": "Kodları ambalajlara, kitaplara, perakende standlarına ve hatta bir televizyon reklamına koyun. Ödenecek telif yok."
      }
    ],
    "sizingMatrix": {
      "title": "Ücretsiz Kurumsal Özellik Erişimi Dökümü",
      "description": "Her gelişmiş özellik, tüm kullanıcılar için ödeme duvarı olmadan kullanılabilir.",
      "headers": [
        "Yetenek Alanı",
        "Dahil Olma Durumu",
        "Teknik Özellikler",
        "Ticari Kapsam"
      ],
      "rows": [
        [
          "Tüm özel QR veri oluşturucular",
          "%100 ücretsiz ve sınırsız",
          "ISO/IEC 18004, RFC 2426, RFC 5545, BIP-0021",
          "Sınırsız kişisel ve ticari kullanım"
        ],
        [
          "Vektör SVG ve EPS dışa aktarımı",
          "%100 ücretsiz ve sınırsız",
          "Kayıpsız matematiksel vektör yolları",
          "Ticari baskı öncesi, ambalaj, CNC"
        ],
        [
          "Ultra HD 4K PNG çıktısı",
          "%100 ücretsiz ve sınırsız",
          "2048 x 2048 px, 300+ DPI",
          "Dijital pazarlama, 4K ekranlar, web"
        ],
        [
          "Seviye H logo ekleme",
          "%100 ücretsiz ve sınırsız",
          "%30 Reed-Solomon cebirsel fazlalığı",
          "Markalı ambalaj ve lüks kartlar"
        ],
        [
          "Özel renk paletleri",
          "%100 ücretsiz ve sınırsız",
          "Bağımsız onaltılık renk kontrolü",
          "Tam marka kılavuzu eşleşmesi"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Küçük işletme sahipleri ve girişimciler",
        "description": "Bütçede bir aylık yazılım kalemi olmadan tabela, ambalaj ve pazarlama materyali basın."
      },
      {
        "title": "Grafik tasarım ajansları ve serbest çalışanlar",
        "description": "Müşterilerinize üretime hazır bir vektör kod verin; başka birinin aboneliğinin sona erdiğine dair telefonu hiç açmak zorunda kalmayın."
      },
      {
        "title": "Baskı öncesi ve ambalaj departmanları",
        "description": "Güvenilir vektör kodlarını doğrudan ambalaj kalıplarına yerleştirin; veri bütünlüğü baskı sürecinin tamamında korunur."
      },
      {
        "title": "Kar amacı gütmeyen kuruluşlar ve hayır kurumları",
        "description": "Kripto bağışları alın ve tam olarak sıfır teknoloji bütçesiyle etkinlik kayıtlarını artırın."
      },
      {
        "title": "Etkinlik organizatörleri ve düğün planlayıcıları",
        "description": "Binlerce dijital davetiye ve takvim RSVP kodu gönderin. Hiçbir tarama sınırı etkinliğin ortasında onları kesmeyecek."
      }
    ],
    "troubleshooting": {
      "title": "QR Kod Abonelik Dolandırıcılıklarından İşletmenizi Nasıl Korursunuz",
      "points": [
        "Kodun gerçekte neyi kodladığını kontrol edin. Basmadan önce tarayın. Kendi URL'niz yerine `qr-service.com/x9f2` gibi üçüncü taraf bir alan adına çözülüyorsa, kapatılabilecek bir yönlendirmedir; uzak durun.",
        "\"Ücretsiz deneme\" için kart istenmesine karşı dikkatli olun. Bir oluşturucu peşin ödeme bilgisi istediğinde, deneme bittiği gün kodun çalışmayı bırakacağını bekleyin.",
        "SVG indirmesinin ücretsiz olduğunu doğrulayın. Profesyonel matbaacılar vektör SVG veya EPS ister. Bu dışa aktarım için 20 $ ve üzeri ücret alan bir platform göründüğü kadar avantajlı değildir.",
        "Gizli bir tarama tavanına dikkat edin. Bazı ücretsiz katmanlar 50. ya da 100. taramada sessizce ölür. Buradaki statik kodların böyle bir sınırı yoktur.",
        "İstemci tarafı üretimi tercih edin. Kod kendi tarayıcınızda oluşturulduğunda, daha sonra onu kapatabilecek bir anahtarı tutan bir şirket yoktur."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online gerçekten %100 ücretsiz mi, gizli ücret yok mu?",
        "a": "Tamamen. Katman yok, tarama sınırı yok, kart yok. Her oluşturucu ve her vektör indirmesi kişisel ve ticari işler için ücretsizdir."
      },
      {
        "q": "QR Generator Online abonelik ücreti almadan hizmetini nasıl sürdürüyor?",
        "a": "Ağır iş altyapımızda değil tarayıcınızda yapılır; bu yüzden işletme maliyetleri düşük kalır. Temel üretimi ücretsiz ve açık tutmak projenin amacıdır; büyütmek için planladığımız bir aşama değildir."
      },
      {
        "q": "QR Generator Online'da oluşturulan QR kodlar hiç sona erer mi?",
        "a": "Ermez. Veri görsel matrisin kendisinde saklanır; kod, hedefi aktif olduğu sürece canlı kalır. Zaman aşımına uğratacak bir sunucu yoktur."
      },
      {
        "q": "QR kodlarımın kaç kez taranabilmesine dair bir sınır var mı?",
        "a": "Hiç yok. Bir kod birkaç taramadan birkaç milyona kadar alabilir; arkasında bekleyen bir bant genişliği sınırı yoktur."
      },
      {
        "q": "Sattığım ürünlerde bu QR kodları kullanabilir miyim?",
        "a": "Rahatça satın. Oluşturduğunuz her kod üzerinde tam ticari haklara sahipsiniz: ambalaj, promosyon ürünleri, kitaplar, reklamlar; dünya genelinde."
      },
      {
        "q": "Ücretsiz planda QR kodlarıma filigran koyuyor musunuz?",
        "a": "Asla. Filigran yok, promosyon rozeti yok, üçüncü taraf markası yok. Tasarım tamamen size ait."
      },
      {
        "q": "Vektör SVG dışa aktarımı ücretsiz planda dahil mi?",
        "a": "Evet. Hem vektör SVG hem de 2048x2048 px PNG dışa aktarımı herkes için ücretsiz; hiçbir şey saklı tutulmuyor."
      },
      {
        "q": "Hesap oluşturmam ya da e-posta adresi vermem gerekiyor mu?",
        "a": "Hiç gerekmiyor. Hiçbir bilgi vermeden, kayıt olmadan istediğiniz kadar kod oluşturun, düzenleyin ve indirin."
      }
    ],
    "bestPractices": "Basılacak her şey için kalıcı bir statik kod seçin, vektör SVG olarak dışa aktarın ve seri üretime geçmeden önce fiziksel bir prova tarayın."
  },
  '/faqs-qr-code-generator': {
    "sections": [
      {
        "title": "Sık Sorulan Sorular ve Teknik Tavsiyeler",
        "paragraphs": [
          "Statik QR kodlar sona erer mi? Hayır. QR Generator Online'da oluşturulan statik QR kodlar ham veriyi içerir ve hedef bağlantınız aktif kaldığı sürece asla sona ermez.",
          "Baskı için en iyi format hangisi? Vektör SVG, ticari baskı için önerilen formattır; çünkü pikselleşme veya kalite kaybı olmadan herhangi bir fiziksel boyuta ölçeklenir."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Optik 2B Barkodlar İçin Nihai Teknik ve Pratik SSS",
      "paragraphs": [
        "Burası QR Generator Online bilgi tabanıdır: ISO/IEC 18004 tarafından tanımlanan 2B matris barkodlarla ilgili teknik, tasarım, baskı öncesi veya güvenlik sorularınızın yanıtlarını bulacağınız yer.",
        "Buradaki yanıtlar tüm yelpazeyi kapsar: Reed-Solomon hata düzeltmesinin matematiği, bir telefon kamerasının bir fotoğrafı nasıl veriye dönüştürdüğü, baskı yaparken kullandığınız mesafe-boyut oranı ($S = D / 10$) ve GDPR ile CCPA'nın bir QR iş akışına nerede değdiği. Geliştiriciler, pazarlama liderleri, baskı öncesi teknisyenleri ve işletme sahipleri bunların farklı parçalarına ihtiyaç duyar.",
        "Aşağıdaki kategoriler, doğrudan bir kod oluşturmaya, biçimlendirmeye, basmaya veya yayınlamaya gitmeniz için sıralanmıştır."
      ]
    },
    "comparisonTable": {
      "title": "QR Kod Sembolojisi Standartlarının Teknik Özeti",
      "headers": [
        "Teknik Parametre",
        "Standart Spesifikasyon",
        "Mühendislik Önerisi"
      ],
      "rows": [
        [
          "Yönetici standart",
          "ISO/IEC 18004:2015 (Bilgi Teknolojisi)",
          "Evrensel optik kod çözme için sıkı uyum"
        ],
        [
          "Hata düzeltme seviyeleri",
          "Seviye L (%7), Seviye M (%15), Seviye Q (%25), Seviye H (%30)",
          "Logo yerleştirmeleri için Seviye H; temiz URL'ler için Seviye M"
        ],
        [
          "Sessiz bölge kenar payı",
          "Dört kenarın her birinde en az 4 modül genişliği",
          "Tarayıcının sınır kenar algılaması için zorunlu"
        ],
        [
          "Optik boyutlandırma formülü",
          "S = D / 10 (genişlik = tarama mesafesi / 10)",
          "El tipi baskı ortamları için en az 25 mm x 25 mm"
        ],
        [
          "WCAG kontrast oranı",
          "En az 4,5:1 parlaklık kontrastı (dış mekânda 7:1)",
          "Açık renkli zemin üzerinde koyu ön plan modülleri"
        ],
        [
          "Maksimum veri kapasitesi",
          "4.296 alfanümerik / 7.089 sayısal / 2.953 bayt",
          "Hızlı kamera çözümü için 150 karakterin altında tutun"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Veri yükü şemasını seçin",
        "description": "Kodlayacağınız şeyden başlayın: URL, vCard 3.0, WiFi, WhatsApp, SMS, e-posta, telefon, konum, etkinlik, kripto, düz metin veya bir Google Formu."
      },
      {
        "number": 2,
        "title": "Stil ve hata düzeltmeyi yapılandırın",
        "description": "4,5:1 kontrastın üzerinde kalan marka renkleri belirleyin, bir nokta stili seçin ve ortaya bir logo konacaksa Seviye H ile üretin."
      },
      {
        "number": 3,
        "title": "Vektör SVG'yi dışa aktarın ve fiziksel provaları test edin",
        "description": "Vektör SVG veya 4K PNG'yi indirin, ardından herhangi bir yere göndermeden önce farklı aydınlatmalarda birkaç farklı telefonla tarayın."
      }
    ],
    "features": [
      {
        "title": "Kapsamlı teknik kapsam",
        "description": "Hata düzeltme matematiği, URI protokolleri ve kamera ikilileştirmesinin gerçekte nasıl çalıştığı; geçiştirilmeden açıklanır."
      },
      {
        "title": "Pratik baskı öncesi ve baskı rehberliği",
        "description": "Gerçek boyutlandırma formülleri, hangi yüzeyin seçileceği ve baskıda mürekkep nokta kazancının nasıl telafi edileceği."
      },
      {
        "title": "Güvenlik ve quishing savunma stratejileri",
        "description": "Değiştirilmiş veya sahtelenmiş bir kodun kampanyanızı bir oltalama vektörüne dönüştürmemesi için ne yapmanız gerektiği."
      },
      {
        "title": "%100 ücretsiz ve açık erişimli bilgi tabanı",
        "description": "Geliştirici olun ya da pazarlamacı, giriş yok, ödeme duvarı yok; her zaman yerinde duran açık dokümantasyon."
      }
    ],
    "sizingMatrix": {
      "title": "QR Kod Çözünürlüğü ve Baskı Boyutlandırma Rehberi",
      "description": "Kullanıcının görüntüleme mesafesine göre fiziksel baskı boyutlarını belirlemek için hızlı başvuru rehberi.",
      "headers": [
        "Yerleşim / Uygulama",
        "Beklenen Tarama Mesafesi",
        "Minimum Genişlik (S)",
        "Önerilen Hata Düzeltme"
      ],
      "rows": [
        [
          "İş kartları ve isim etiketleri",
          "15 cm - 30 cm (6\" - 12\")",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Seviye Q (%25) veya Seviye H (%30)"
        ],
        [
          "Masa standları ve bardak altlıkları",
          "30 cm - 50 cm (12\" - 20\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Seviye M (%15) veya Seviye H (%30)"
        ],
        [
          "Ürün ambalajları ve etiketler",
          "20 cm - 40 cm (8\" - 16\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Merkez logolu Seviye H (%30)"
        ],
        [
          "Broşürler, afişler ve dergiler",
          "50 cm - 150 cm (20\" - 60\")",
          "60 mm - 150 mm (2,4\" - 6,0\")",
          "Seviye M (%15)"
        ],
        [
          "Araç filosu grafikleri",
          "3,0 m - 6,0 m (10 ft - 20 ft)",
          "300 mm x 300 mm (12\" x 12\")",
          "Döküm vinil üzerinde Seviye H (%30)"
        ],
        [
          "Otoyol billboardları",
          "15,0 m - 30,0 m (50 ft - 100 ft)",
          "1500 mm - 3000 mm (5 ft - 10 ft)",
          "Seviye L (%7) veya Seviye M (%15)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Kurumsal BT ve güvenlik uyumluluğu",
        "description": "Kurumsal bir QR dağıtımının yayına girmeden önce GDPR, CCPA ve ISO veri egemenliği kurallarına uyduğunu doğrulayın."
      },
      {
        "title": "Ambalaj tasarımı ve fleksografik baskı öncesi",
        "description": "Plakalar hazırlanmadan önce bir barkod kalıbının ISO/IEC 18004 kontrast ve sessiz bölge sınırlarını karşıladığını teyit edin."
      },
      {
        "title": "Konaklama ve restoran zincirleri",
        "description": "Açıklaması için personel gerektirmeyen temassız menüler ve misafir WiFi kartları devreye alın."
      },
      {
        "title": "Etkinlik organizatörleri ve konferans koordinatörleri",
        "description": "Girişleri hızlandırın, konuşmacı sunum indirmelerini dağıtın ve oturumları katılımcıların takvimlerine ekleyin."
      },
      {
        "title": "Emlak acentaları ve pazarlama ekipleri",
        "description": "Bir tabela tabelasını, 3B sanal tur açan 7/24 bir potansiyel müşteri kaynağına dönüştürün."
      }
    ],
    "troubleshooting": {
      "title": "En Yaygın 5 QR Kod Hatası ve Bunları Nasıl Düzeltirsiniz",
      "points": [
        "Zayıf kontrast. Açık gri bir zemin üzerindeki soluk modüller kameraya tutunacak bir şey bırakmaz. 4,5:1 veya üzerinde kalın.",
        "Kırpılmış sessiz bölge. Kenar payını çok fazla kırparsanız tarayıcı kodun nerede başladığını bulamaz. Tam 4 modüllük kenarlığı koruyun.",
        "72 DPI ekran görüntüsü. Düşük çözünürlüklü web grafikleri baskıda modül kenarlarında bulanıklaşır. Bunun yerine vektör SVG veya 300+ DPI raster sağlayın.",
        "Çok fazla veri. Uzun bir URL, küçük basıldığında lekelenen minik noktalarla matrisi doldurur. Oluşturmadan önce bağlantıyı kısaltın.",
        "Parlak laminasyon. Yüksek parlaklıktaki bir kaplama, ışıkları merceğe geri yansıtır. Mat veya satenimsi bir yüzey isteyin."
      ]
    },
    "faqs": [
      {
        "q": "Statik ve dinamik bir QR kod arasındaki fark nedir?",
        "a": "Statik kod, gerçek veriyi (URL, vCard, WiFi dizgisi ya da her ne ise) matrisin içinde taşır. Sona erecek bir şey yoktur, bağlı olunacak bir sunucu yoktur. Dinamik kod ise başka birinin sunucusuna işaret eden bir yönlendirme taşır; bu, hedefi daha sonra düzenlemenize izin verir ama yönlendirmeyi canlı tutmak için bir aboneliğe bağlar."
      },
      {
        "q": "QR Generator Online'da oluşturulan QR kodlar süresi dolar mı?",
        "a": "Ömür boyu geçerli kalırlar. Sınırsız tarama, yinelenen ücret yok, geri sayan bir zamanlayıcı yok; kod kendi kendine yeterlidir."
      },
      {
        "q": "Bir QR kod en az hangi fiziksel boyutta basılabilir?",
        "a": "15-20 cm uzaktan okunan kısa bir URL için 20 mm x 20 mm (0,8\" x 0,8\") alt sınırdır. Ambalaj ve iş kartlarında 25 mm x 25 mm (1,0\" x 1,0\") güvenli sektör minimumu olarak kabul edilmelidir."
      },
      {
        "q": "Seviye H hata düzeltmesi logolu bir QR kodu nasıl korur?",
        "a": "Seviye H, Reed-Solomon fazlalığı yoluyla yükün yaklaşık %30'unu çoğaltır. Bu yedek kopya, merkez modüllerin üzerine bir logo koyabilmenizi sağlar: tarayıcı, kapanan verileri matrisin başka yerlerindeki fazla bitlerden yeniden oluşturur."
      },
      {
        "q": "QR kodların renklerini markama uyacak şekilde özelleştirebilir miyim?",
        "a": "Modüllerin, arka planın, köşe çerçevelerinin ve köşe noktalarının renklerini bağımsız olarak değiştirebilirsiniz. Tüm bunları yöneten tek bir kural vardır: koyu ile açık arasındaki kontrast 4,5:1'i geçmelidir; aksi halde tarayıcılar zorlanmaya başlar."
      },
      {
        "q": "Ticari baskı için neden PNG yerine SVG formatı önerilir?",
        "a": "SVG, kodu piksel değil geometri olarak tanımlar. Bir iş kartından bir billboarda büyütün; kenarlar keskin kalır, çünkü tükenecek bir piksel ızgarası yoktur."
      },
      {
        "q": "QR kodlar kötü amaçlı yazılım ve oltalamadan (\"quishing\") güvende mi?",
        "a": "Kodun kendisi yalnızca metin ya da URL taşır; bu yüzden kötü amaçlı yazılım taşıyamaz. Asıl risk, olmaması gereken bir yere işaret eden sahte bir koddur. Buna karşı, ortaya doğrulanmış logonuzu koyarak ve kodun yanına gerçek hedef alan adını düz metin olarak yazdırarak önlem alın."
      },
      {
        "q": "Kişisel verilerim QR Generator Online sunucularında saklanıyor veya izleniyor mu?",
        "a": "Hayır. Her şey tarayıcı belleğinde, istemci tarafında çalışır. Bağlantılarınız, parolalarınız, kişi kartlarınız ve yüklediğiniz logolar hiçbir sunucuya gönderilmez ve hiçbir yerde tutulmaz."
      }
    ],
    "bestPractices": "Kontrastı 4,5:1'in üzerinde tutun, 4 modüllük sessiz bölgeyi koruyun ve baskı için vektör SVG dışa aktarın. Ardından seri üretimden önce fiziksel bir prova tarayın; temiz bir lansmanla yeniden baskı arasındaki farkı yaratan son kontrol budur."
  },
  '/qr-code-with-logo': {
    "sections": [
      {
        "title": "Markalı QR kodlar neden %30'a kadar daha fazla tarama alır",
        "paragraphs": [
          "Markasız genel QR kodlar şüpheli ya da davetkâr olmayabilir. Resmi şirket logonuzu eklemek, kullanıcılara hedef bağlantının özgünlüğü ve güvenliği konusunda güven verir.",
          "Oluşturucumuz, markanızı öne çıkarırken kusursuz tarama güvenilirliği sağlamak için H seviyesi hata düzeltme (%30 fazlalık) kullanır."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Reed-Solomon hata düzeltmesiyle logo yerleştirmenin teknik mekaniği",
      "paragraphs": [
        "Bir logo QR kodun tam ortasına tek bir nedenle yerleştirilir: hata düzeltme. ISO/IEC 18004 standardı her kodu veri kod sözcüklerine ve hata düzeltme kod sözcüklerine böler ve dört düzeltme seviyesi tanımlar — L seviyesi hasarlı kodun %7'sini, M %15'ini, Q %25'ini ve H %30'unu geri kazanabilir. Seviye ne kadar yüksekse görüntünün o kadar çok kısmı kaybolabilir ve yine de çözümlenebilir.",
        "Ortaya bir logo koyduğunuzda bazı modülleri fiziksel olarak kapatırsınız. Kodu H seviyesinde oluşturduysanız, veriler kurtarılamaz hale gelmeden önce yüzeyin %30'una kadar örtebilirsiniz. iOS (AVFoundation) ve Android (ML Kit) kamera çözümleyicileri, gizlenen baytları çevredeki eşlik bitlerinden yeniden oluşturur — logo taramayı gerçekten engellemez, yalnızca matematiğin zaten yedeğini tuttuğu pikselleri gizler.",
        "Sessizce çalışan bir ayrıntı daha var. QR Generator Online logonuzun etrafında ince bir beyaz tampon bırakır, böylece kenarı komşu koyu modüllerle karışmaz. Bu tampon, logolu kodun loş bir restoran ışığı ya da parlak bir vitrin altında bile temiz okunmasının nedenidir."
      ]
    },
    "comparisonTable": {
      "title": "Markalı logolu QR kod ile genel siyah-beyaz QR kodun karşılaştırması",
      "headers": [
        "Değerlendirme ölçütü",
        "Logolu markalı QR kod",
        "Genel siyah-beyaz QR"
      ],
      "rows": [
        [
          "Tarama etkileşim oranı",
          "%35'e kadar daha fazla tarama hacmi (doğrulanmış marka güveni)",
          "Standart temel tarama oranı (sıklıkla şüpheli algılanır)"
        ],
        [
          "Marka hatırlama ve güven",
          "Yayıncı kimliğini anında iletir",
          "Anonim görünüm, daha yüksek quishing kaygısı"
        ],
        [
          "Hata düzeltme seviyesi",
          "H seviyesi (%30 matematiksel fazlalık)",
          "Genellikle L (%7) veya M (%15) seviyesi"
        ],
        [
          "Kurumsal pazarlama etkisi",
          "Basılı materyallerde marka yönergelerini pekiştirir",
          "Marka tipografisi ve kimliğiyle bağlantısız"
        ],
        [
          "Taranabilirlik toleransı",
          "Logo tampon maskesiyle anında taramayı sürdürür",
          "L seviyesi kullanılırsa yüzey çizikleriyle zarar görür"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "QR hedefini girin ve içerik türünü seçin",
        "description": "Yukarıdaki oluşturucuya hedefinizi yazın — web sitesi URL'si, vCard profili, WiFi ağı veya düz metin."
      },
      {
        "number": 2,
        "title": "Yüksek çözünürlüklü bir logo yükleyin ve maskeyi ayarlayın",
        "description": "\"Özel QR Seçenekleri ve Logo\" bölümünü açın, şeffaf PNG, SVG veya JPEG yükleyin ve modül renklerini marka paletinize uyacak şekilde düzenleyin."
      },
      {
        "number": 3,
        "title": "Baskı için vektör SVG veya yüksek çözünürlüklü PNG dışa aktarın",
        "description": "Ambalaj, baskı ve mağaza tabelaları için ölçeklenebilir vektör SVG'yi indirin. Ekranlar için yüksek çözünürlüklü PNG'yi tercih edin."
      }
    ],
    "features": [
      {
        "title": "H seviyesi hata düzeltme (%30 fazlalık)",
        "description": "Ortaya bir logo, monogram veya simge koyun; %30'luk kurtarma payı onu karşılar — kod ilk denemede çözümlenmeye devam eder."
      },
      {
        "title": "Kayıpsız vektör SVG ve EPS baskı çıktısı",
        "description": "Markalı kodu bir billboard ölçeğine büyütün; vektör çizgileri keskin kalır. Tükenecek bir piksel ızgarası yoktur."
      },
      {
        "title": "Akıllı modül maskeleme tamponu",
        "description": "Logo kenarı ile çevredeki veri modülleri arasına temiz bir boşluk çizilir, böylece ikisi görsel olarak asla birleşmez."
      },
      {
        "title": "%100 istemci tarafı kriptografik gizlilik",
        "description": "Görüntü işlemleri tarayıcınızda gerçekleşir. Yüklediğiniz logolar ve bağlantılar hiçbir yere gönderilmez."
      }
    ],
    "sizingMatrix": {
      "title": "Baskı boyutu ve logo oranı spesifikasyonları",
      "description": "Optik tarama hızını korumak için katı logo-matris alan oranlarına uyun.",
      "headers": [
        "Baskı uygulaması",
        "QR'ın genel boyutları",
        "Maksimum logo boyutu",
        "Önerilen alt tabaka"
      ],
      "rows": [
        [
          "İş kartları ve kimlik rozetleri",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "8 mm x 8 mm (0,3\" x 0,3\")",
          "Ağır mat karton (350+ GSM)"
        ],
        [
          "Ürün ambalajları ve asma etiketler",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "10 mm x 10 mm (0,4\" x 0,4\")",
          "Kaplamalı mat karton / kraft kağıt"
        ],
        [
          "Masa standları ve tezgâh ekranları",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "13 mm x 13 mm (0,5\" x 0,5\")",
          "Akrilik masa standı / laminasyonlu kart"
        ],
        [
          "Perakende posterleri ve vitrin çıkartmaları",
          "100 mm x 100 mm (4,0\" x 4,0\")",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "Mat hava koşullarına dayanıklı vinil"
        ],
        [
          "Afişler ve açık hava billboardları",
          "500 mm - 2000 mm",
          "140 mm - 560 mm",
          "Parlamayan ağır vinil"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Tüketici paketli ürünler (CPG) ve lüks perakende",
        "description": "Pakette resmi bir marka işareti, alıcıya ürünün özgünlüğü konusunda güvence verir ve sadakat programına kaydolmak için bir neden sunar."
      },
      {
        "title": "Kurumsal kimlik ve yönetici kartvizitleri",
        "description": "Şirket logosunu ya da yöneticinin kendi fotoğrafını vCard kodunun ortasına koyun ve kartvizit sıradan görünmekten çıkar."
      },
      {
        "title": "Restoran menüleri ve markalı sofra eşyaları",
        "description": "Masa menü kodunun içindeki kafe amblemi, sonradan yapıştırılmış bir çıkartma değil, mekânın bir parçası gibi görünür."
      },
      {
        "title": "Etkinlik tabelaları ve konferans sponsorlukları",
        "description": "Etkinlik kodunun içinde, rozetlerde ve sahne afişlerinde yer alan bir sponsor logosu, o sponsoru görünür tutar ve ona net bir atıf sağlar."
      },
      {
        "title": "Doğrudan posta ve promosyon kartpostalları",
        "description": "İyi tasarlanmış markalı bir kod doğrudan posta yanıt oranını yükseltir, çünkü insanların tanıdığı bir kartpostal, insanların tarayacağı bir kartpostaldır."
      }
    ],
    "troubleshooting": {
      "title": "Logo gömülü QR kodlar için 5 temel kural",
      "points": [
        "Logoyu alanın %30'unun altında tutun. %25-30 kapsamın üzerinde Reed-Solomon'un yeniden oluşturabileceğini aşarsınız ve kod çözülmeyi bırakır.",
        "Üç bulucu gözü rahat bırakın. Sol üst, sağ üst ve sol alt köşelerdeki eşmerkezli kareler tamamen temiz kalmalıdır — tarayıcı kodu yönlendirmek için bunları kullanır.",
        "Logoya bir kenarlık verin. Şeffaf bir arka plan ya da ince beyaz bir kenar, logonun çevresindeki koyu modüllere sızmasını engeller.",
        "H seviyesiyle oluşturun. Logolu bir kodun L ya da M seviyesinde olması, kapsamı kaldıracak fazlalığa sahip değildir — marjı sağlayan H seviyesidir.",
        "Basılı bir kanıtı tarayın. Büyük baskıya geçmeden önce ucuz bir Android ve güncel bir iPhone'da, loş ve parlak ışıkta test edin."
      ]
    },
    "faqs": [
      {
        "q": "Ortaya logo eklemek QR kodun taranabilirliğini neden bozmaz?",
        "a": "Bu, Reed-Solomon hata düzeltmesinden kaynaklanır. H seviyesinde yükün yaklaşık %30'u kod boyunca çoğaltılır. Ortadaki logo bazı modülleri örter ve çözümleyici bunları matrisin başka yerlerindeki yedek kopyalardan yeniden oluşturur."
      },
      {
        "q": "Merkezi logo için hangi görüntü biçimlerini yükleyebilirim?",
        "a": "PNG, SVG ve JPEG çalışır. Şeffaf bir PNG ya da vektör SVG en temiz kenarı ve en profesyonel sonucu verir — beyaz bir kare üzerindeki düz bir JPEG ise yanına kıyasla yapıştırılmış görünür."
      },
      {
        "q": "Logo QR koda göre ne kadar büyük olmalı?",
        "a": "Genişlik ve yüksekliğin %15 ile %25'i arasında olması en iyi aralıktır. Gözle tahmin etmenize gerek yok — oluşturucu logoyu doğru orana otomatik olarak ölçekler."
      },
      {
        "q": "Özel logolu QR kodlar para mı tutar ya da abonelik mi gerektirir?",
        "a": "Buradaki her şey gibi ücretsizdirler — sınırsız tarama, kalıcı geçerlilik ve yazdırdıktan sonra bekleyen bir ödeme duvarı yok."
      },
      {
        "q": "Şirket logosu yerine sosyal medya simgeleri (Instagram, Facebook, WhatsApp, WiFi) ekleyebilir miyim?",
        "a": "Evet. Yaygın platform simgelerinin yerleşik bir kitaplığı var; istediğinizi bulamazsanız kendi görselinizi yükleyin."
      },
      {
        "q": "Logolu bir QR kod eski akıllı telefon kameralarında güvenilir şekilde taranır mı?",
        "a": "Evet, iki şart sağlandığı sürece: H seviyesi düzeltme açıktır ve logo yüzeyin %30'unun altında kalır. Bu ikisi doğruysa eski bir kamera bile kodu anında çözer."
      },
      {
        "q": "Logolu ticari baskı için en iyi dışa aktarma biçimi hangisidir?",
        "a": "Vektör SVG. Hem modül matrisini hem de gömülü logoyu herhangi bir baskı ölçeğinde keskin tutar — bir baskı merkezinin tam olarak istediği şey budur."
      },
      {
        "q": "Yüklediğim logo görüntüsü web sunucularınızda saklanıyor mu?",
        "a": "Hayır. Logo birleştirilir ve kod tamamen tarayıcınızda oluşturulur — bunların hiçbiri yüklenmez ya da saklanmaz."
      }
    ],
    "bestPractices": "Şeffaf bir PNG ya da vektör logo kullanın, H seviyesinde oluşturun ve modüller ile arka plan arasında güçlü bir kontrast tutun. Ardından çalıştırmadan önce basılı bir kanıtı tarayın — ekranda iyi görünen bir logo, baskıda bir tık fazla büyük olabilir."
  },
  '/custom-qr-codes': {
    "sections": [
      {
        "title": "Güzel görsel QR kod tasarımıyla öne çıkın",
        "paragraphs": [
          "Yuvarlatılmış noktalar, dış hatlı noktalar, geometrik kare pikseller ve sanatsal stiller arasından seçim yapın. Dış köşe karelerini ve merkez noktalarını bağımsız olarak özelleştirin.",
          "Modern, profesyonel ve görsel olarak çekici görünen yüksek dönüşümlü pazarlama materyalleri oluşturun."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Özel QR kod stilizasyonunun ve desen geometrisinin teknik mekaniği",
      "paragraphs": [
        "Özel stilizasyon, bir QR kodun ne anlama geldiğini değil, nasıl göründüğünü değiştirir. Katı kare modülleri yuvarlatılmış noktalar, elmaslar veya akıcı organik şekillerle değiştirebilir ve köşe gözlerini yeniden biçimlendirebilirsiniz — altta yatan ikili ızgara ISO/IEC 18004'ün söylediği yerde kalırken. Verileri taşıyan koyu ve açık desendir ve bu desen değişmez.",
        "Tarayıcılar, 1:1:3:1:1 modül genişliği oranını katı biçimde izleyen üç köşe bulucu deseni bularak bir kodu tespit eder. Bu oranı koruyun, her modülü ızgara koordinatında ortalanmış tutun; iOS, Android ML Kit ve ZXing motorları stilize bir kodu düz bir kod kadar hızlı okur. Oranı bozarsanız hiçbir stilizasyon kurtaramaz.",
        "QR Generator Online'ın vektör koordinat matematiğiyle izlediği çizgi de budur: her yuvarlatılmış nokta, her özel göz ve her köşe çerçevesi tam ızgara konumuna oturur. Tarama güvenilirliğinden ödün vermeden marka görünümünü elde edersiniz."
      ]
    },
    "comparisonTable": {
      "title": "Özel tasarlanmış QR kodlar ile varsayılan siyah-beyaz barkodların karşılaştırması",
      "headers": [
        "Tasarım özelliği",
        "Özel tasarlanmış QR kod",
        "Varsayılan genel barkod"
      ],
      "rows": [
        [
          "Estetik çekicilik",
          "Lüks ambalaj ve marka kimliğiyle uyumludur",
          "Endüstriyel, klinik ve görsel olarak rahatsız edici"
        ],
        [
          "Kullanıcı etkileşim oranı",
          "Görsel çekiciliği nedeniyle %40 daha yüksek tarama oranı",
          "Standart temel tarama oranı"
        ],
        [
          "Özelleştirme aralığı",
          "Nokta desenleri, göz stilleri, gradyanlar, merkez logolar",
          "Sabit katı kareler, yalnızca siyah modüller"
        ],
        [
          "Marka tanınırlığı",
          "Marka renklerini ve kurumsal kimliği pekiştirir",
          "Rakiplerinden ayırt edilemeyen genel görünüm"
        ],
        [
          "Baskı çok yönlülüğü",
          "Ahşap oyma, folyo basım ve akrilik için özelleştirilebilir",
          "Yalnızca standart 2B baskı"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "QR veri türünü seçin ve giriş parametrelerini girin",
        "description": "Veri türünüzü seçin — URL, vCard, WiFi veya metin — ve hedefi girin."
      },
      {
        "number": 2,
        "title": "Nokta desenlerini, köşe gözlerini ve paletleri özelleştirin",
        "description": "Yuvarlatılmış, klasik, noktalı veya pürüzsüz modülleri deneyin; ardından köşe karesini ve köşe noktasını tasarım sisteminize uyacak şekilde ayarlayın."
      },
      {
        "number": 3,
        "title": "Baskıya hazır vektör SVG veya yüksek çözünürlüklü PNG dışa aktarın",
        "description": "Bitmiş tasarımı ofset baskı için kayıpsız vektör SVG olarak ya da dijital kullanım için 4K PNG olarak indirin."
      }
    ],
    "features": [
      {
        "title": "Birden çok modül ve nokta geometrisi önayarı",
        "description": "Yuvarlatılmış, klasik, elmas, noktalı, pürüzsüz — her desen tarama toleransı içinde kalacak şekilde ayarlanmıştır."
      },
      {
        "title": "Bağımsız köşe gözü özelleştirmesi",
        "description": "Dış çerçeveler ve iç göz noktaları, gövdeden ayrı kendi renklerini ve köşe yarıçaplarını alır."
      },
      {
        "title": "Kayıpsız vektör SVG baskı çıktıları",
        "description": "Aynı tasarım bir kartvizitte de bir bina duvar resminde de temiz basılır; aralarında bulanıklık sızmaz."
      },
      {
        "title": "Kalıcı ömür boyu geçerlilikle %100 ücretsiz",
        "description": "İstediğiniz kadar tasarlayın. Tarama sınırı yok, filigran yok, aylık ücret yok."
      }
    ],
    "sizingMatrix": {
      "title": "Özel QR kod minimum boyut ve malzeme kılavuzu",
      "description": "Stilize modüllerin yuvarlatılmış kenarları olduğundan, önerilen minimum boyut ölçütlerini izleyin.",
      "headers": [
        "Tasarım ortamı",
        "Önerilen minimum boyut",
        "Önerilen nokta deseni",
        "Alt tabaka türü"
      ],
      "rows": [
        [
          "Lüks kartvizitler",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Klasik / yuvarlatılmış",
          "Mat pamuklu karton / folyo basım"
        ],
        [
          "Kozmetik ve ürün ambalajı",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Pürüzsüz / yuvarlatılmış",
          "Mat kaplamalı karton"
        ],
        [
          "Restoran masa standları ve bardak altlıkları",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "Noktalı / klasik",
          "Ahşap oyma / akrilik stand"
        ],
        [
          "Etkinlik afişleri ve vitrin grafikleri",
          "90 mm x 90 mm (3,6\" x 3,6\")",
          "Herhangi bir özel stil",
          "Mat hava koşullarına dayanıklı vinil"
        ],
        [
          "Moda giysi etiketleri ve bantlar",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Yuvarlatılmış / pürüzsüz",
          "Dokuma kumaş etiket / kalın kraft karton"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Lüks markalar ve moda ambalajı",
        "description": "Stilize bir kod, tasarımla çatışmak yerine yüksek kaliteli ambalajın içine oturur — tasarımı bozan kaba bir siyah barkod yoktur."
      },
      {
        "title": "Yaratıcı portfolyolar ve mimari kartlar",
        "description": "Hassas, geometrik bir kod düşünülmüş bir tercih gibi okunur; bir mimar ya da tasarımcının bırakmak istediği izlenim budur."
      },
      {
        "title": "Butik otel ve konukseverlik tabelaları",
        "description": "Bir misafir rehberi, spa menüsü ya da lobiye uygun bir WiFi kartı için ahşap ya da pirinç üzerine özel bir kodu lazerle oyun."
      },
      {
        "title": "Etkinlik davetiyeleri ve gala kaydet-tarih kartları",
        "description": "Yuvarlatılmış modüller ve metalik bir palet, işlevsel bir kodu düğün ya da gala kırtasiyesinin parçası yapar."
      },
      {
        "title": "Zanaat birası ve içecek şişesi etiketleri",
        "description": "Kodu etiket sanatının içine yerleştirin; böylece tadım notları ya da menşei için yapılan bir tarama şişenin görünümünü asla bozmaz."
      }
    ],
    "troubleshooting": {
      "title": "Özel QR kod tasarımında yaygın hatalar",
      "points": [
        "Bulucu desenini bozmak. Üç köşe gözü sabit bir 1:1:3:1:1 oranını korur ve tarayıcı kodu bulmak için buna güvenir. Stilize edin, ama germeyin.",
        "Düşük kontrast. Açık gri üzerinde koyu gri noktalar kamerayı yanıltır. Modüller ile arka planları arasında en az 4,5:1 tutun.",
        "Sessiz bölgeyi atlamak. Kodun etrafındaki sanat ne olursa olsun, dış çevrede zorunlu 4 modüllük boş kenar payını bırakın.",
        "Küçük boyutlarda aşırı yuvarlatma. 25 mm'nin altında, ağır nokta yuvarlatması temel bir telefon kamerasında modül kenarlarını bulandırır. Küçük kodlarda yarıçapı azaltın.",
        "Yalnızca kendi telefonunuzda test etmek. Amiral gemisi bir telefon neredeyse her şeyi okur. Tasarımı sabit odaklı kameraya sahip orta segment bir Android'de de kontrol edin."
      ]
    },
    "faqs": [
      {
        "q": "Özel stilli QR kodlar standart siyah-beyaz kodlar kadar hızlı taranır mı?",
        "a": "Aynı hızda. Stilizasyon ISO/IEC 18004 toleransları içinde kalır; kontrast ve sessiz bölge kurallarına uyulduğunda çözümleme hızı düz bir kodla aynıdır."
      },
      {
        "q": "QR Generator Online'da hangi stilizasyon öğelerini özelleştirebilirim?",
        "a": "Beş şey: modül nokta stili (yuvarlatılmış, klasik, noktalı, pürüzsüz), dış köşe kareleri, iç köşe göz noktaları, ön plan ve arka plan renkleri ve bir merkez logo."
      },
      {
        "q": "Özel QR kodlarımı vektör SVG biçiminde dışa aktarabilir miyim?",
        "a": "Vektör SVG her özel tasarımda standarttır — ofset baskı, lazer oyma ve vinil kesim için keskinliği koruyan da budur."
      },
      {
        "q": "Özel QR kodlar sona erer mi ya da ücretli abonelik gerektirir mi?",
        "a": "İkisi de hayır. Buradaki her özel kod ücretsizdir; sınırsız tarama ve asla dolmayan geçerlilik sunar."
      },
      {
        "q": "Özel QR kodlarımı ürün ambalajı için kullanabilir miyim?",
        "a": "Evet ve birçok işletme bunu yapar — perakende ambalajları, gıda etiketleri, giysi etiketleri; dünya genelinde, lisans gerekmeden."
      },
      {
        "q": "H seviyesi hata düzeltme özel tasarımlara nasıl yardımcı olur?",
        "a": "%30'luk bir kurtarma payı sağlar. Bu pay, sanatsal modül değişikliklerinin ve merkez logonun tarama başarısızlığı riski olmadan bir arada var olmasına olanak tanır."
      },
      {
        "q": "Özel stilli bir QR kod için önerilen minimum boyut nedir?",
        "a": "30 mm x 30 mm (1,2\" x 1,2\") ya da daha büyük hedefleyin. Stilize modüllerin her kamera sensöründe ayırt edilebilir kalması için düz karelerden biraz daha fazla alana ihtiyacı vardır."
      },
      {
        "q": "Özel QR kodlar tasarlarken verilerim güvende mi?",
        "a": "Tamamen. Tasarımın her parçası tarayıcınızın belleğinde oluşturulur; bir sunucuda hiçbir şey saklanmaz ya da kaydedilmez."
      }
    ],
    "bestPractices": "Kontrastı 4,5:1'in üzerinde tutun, 4 modüllük sessiz bölgeyi koruyun ve herhangi bir üretim serisinden önce basılı kanıtı birkaç telefonda tarayın. Stilize kodlar, aşırı akıllı bir tasarımın sessizce başarısız olduğu yerdir; kanıt ise bunu yakaladığınız yerdir."
  },
  '/colored-qr-code-generator': {
    "sections": [
      {
        "title": "Marka kimliğinize uyan canlı renkler",
        "paragraphs": [
          "Tek renkli barkodlara veda edin. Ön plan desenine, köşe göz çerçevelerine ve arka plan tuvaline herhangi bir hex renk seçin.",
          "Yerleşik kontrast optimizasyonu, QR kodunuzun hızlı kamera odağı ve anlık tarama için yüksek kontrast korumasını sağlar."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Renk kontrastı ve renkli QR kod taramanın teknik mekaniği",
      "paragraphs": [
        "Bir telefon kamerası QR kodunuzu renkle okumaz. Kareyi gri tonlamalı bir parlaklık haritasına dönüştürür ve eşikleme yapar; piksel piksel neyin koyu, neyin açık sayılacağına karar verir. Renk neredeyse tesadüfidir; önemli olan parlaklıktır.",
        "Bu yüzden önemli kural renk tonu değil, kontrasttır. Ön plan ve arka plan renginiz arasındaki WCAG kontrast oranını 4,5:1'in üzerinde tutun ve dışarıda kullanılacak her şey için 7:1'e çıkarın. Beyaz ya da açık bir zemin üzerinde derin, düşük parlaklıklı renkler çok güzel okunur — lacivert #002B49, orman yeşili #1B4D3E, kraliyet moru #3E1F58 ve bordo #5C061C hepsi bu eşiği rahatça geçer.",
        "QR Generator Online ön planı, arka planı, köşe çerçevelerini ve köşe gözlerini bağımsız olarak renklendirmenize izin verir. Bir marka paletini tam olarak eşleştirin; parlaklık korunduğu sürece kod %100 taranabilir kalır."
      ]
    },
    "comparisonTable": {
      "title": "Yüksek kontrastlı renkli QR kod ile düşük kontrastlı pastel palet QR kodun karşılaştırması",
      "headers": [
        "Tasarım özelliği",
        "Yüksek kontrastlı renkli QR (WCAG > 4,5:1)",
        "Düşük kontrastlı pastel / soluk palet"
      ],
      "rows": [
        [
          "Optik tarama güvenilirliği",
          "Her ışıkta %100 anlık çözümleme",
          "Sık görülen kamera odak hataları ve tarama zaman aşımları"
        ],
        [
          "Kamera ikili dönüşümü",
          "Temiz gri tonlama eşikleme ayrımı",
          "Kod çözme hatalarına yol açan belirsiz parlaklık değerleri"
        ],
        [
          "Açık hava güneş performansı",
          "Doğrudan güneşte ve parlamada okunabilirliği korur",
          "Parlak güneş altında tamamen solar"
        ],
        [
          "Marka uyumu",
          "Kurumsal kimlikle eşleşen zengin kurumsal renkler",
          "Soluk görünüm, görsel etkiden yoksun"
        ],
        [
          "Cihaz uyumluluğu",
          "Bütçe ve amiral gemisi akıllı telefonlarda evrensel",
          "Düşük dinamik aralıklı ucuz kameralarda başarısız"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Hedef içeriğinizi ve veri yükünüzü girin",
        "description": "URL'nizi, vCard ayrıntılarınızı, WiFi kimlik bilgilerinizi ya da metninizi yapıştırın."
      },
      {
        "number": 2,
        "title": "Yüksek kontrastlı bir renk paleti seçin",
        "description": "Hex seçicilerle koyu bir ön plan, açık bir arka plan ve köşe gözleri için istediğiniz vurgu renklerini belirleyin."
      },
      {
        "number": 3,
        "title": "Baskı için vektör SVG ya da dijital kullanım için yüksek çözünürlüklü PNG dışa aktarın",
        "description": "Ofset baskı için vektör SVG'yi, sosyal ve dijital kampanyalar için 300 DPI PNG'yi indirin."
      }
    ],
    "features": [
      {
        "title": "Bağımsız çoklu renk özelleştirmesi",
        "description": "Ön plan modülleri, arka plan tuvali, köşe çerçeveleri, köşe noktaları — her biri kendi tam hex değerini alır."
      },
      {
        "title": "WCAG yüksek kontrast uyumu",
        "description": "Kameranın temiz bir şekilde eşikleme yapması için gereken parlaklık kontrastını, aydınlatma ne olursa olsun korumak üzere tasarlanmıştır."
      },
      {
        "title": "Kayıpsız vektör SVG ve EPS dışa aktarımı",
        "description": "Illustrator, InDesign ya da Figma'da doğrudan açılan ve CMYK'ya temiz biçimde dönüşen renk-doğru vektör dosyaları."
      },
      {
        "title": "Kalıcı ömür boyu taramalarla %100 ücretsiz",
        "description": "İstediğiniz kadar renkli kod oluşturun — tarama sınırı yok, filigran yok, ücret yok."
      }
    ],
    "sizingMatrix": {
      "title": "Renkli QR kod boyut ve kontrast spesifikasyonları",
      "description": "Renk seçimlerinizin minimum optik tarama eşiklerini karşıladığından emin olun.",
      "headers": [
        "Renk kombinasyonu",
        "Kontrast oranı",
        "Minimum baskı boyutu",
        "Önerilen kullanım"
      ],
      "rows": [
        [
          "Koyu lacivert (#001F3F) üzerine beyaz (#FFFFFF)",
          "14,5:1 (çok yüksek)",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Kurumsal kimlik, kartvizit, kırtasiye"
        ],
        [
          "Orman yeşili (#1B4D3E) üzerine krem (#FBF9F5)",
          "10,2:1 (yüksek)",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Organik ürünler, çevre dostu ambalaj, menüler"
        ],
        [
          "Kraliyet moru (#4A0E4E) üzerine beyaz (#FFFFFF)",
          "12,8:1 (yüksek)",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Lüks ürünler, etkinlik kırtasiyesi, moda"
        ],
        [
          "Zengin bordo (#5C061C) üzerine beyaz (#FFFFFF)",
          "11,4:1 (yüksek)",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Şarap şişesi etiketleri, gurme gıda ambalajı"
        ],
        [
          "Antrasit (#222222) üzerine pastel nane (#E8F5E9)",
          "11,8:1 (yüksek)",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Modern perakende ambalajı, teknoloji donanımı"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Kurumsal marka tutarlılığı",
        "description": "Pazarlama kodlarınızı broşürler ve yıllık raporlar genelinde marka Pantone ve hex spesifikasyonuna uyumlu tutun."
      },
      {
        "title": "Perakende ambalajı ve ürün etiketleri",
        "description": "Kodu gıda, içecek, kozmetik ve yaşam tarzı ürünlerinin birincil ambalaj renklerine göre ayarlayın, böylece pakete ait görünsün."
      },
      {
        "title": "Restoran menüleri ve konukseverlik masa kartları",
        "description": "Mekânı yansıtan sıcak, zarif kod renkleri, mum ışığı altındaki bir masada sert siyah bir kareden çok daha iyi okunur."
      },
      {
        "title": "Etkinlik tabelaları ve gala programları",
        "description": "Düğünün, festivalin ya da konferansın paletini afişlere, kartlıklara ve davetiyelere taşıyın."
      },
      {
        "title": "Araç filosu ve yüklenici tabelaları",
        "description": "Kodu tesisat, iklimlendirme ve teslimat araç çıkartmalarındaki filo renklerine uydurun; böylece plansız değil, resmi görünür."
      }
    ],
    "troubleshooting": {
      "title": "QR kodların taranmasını engelleyen renk hataları",
      "points": [
        "Paleti ters çevirmek. Koyu mavi üzerinde beyaz bir kod birçok tarama motorunu yanıltır. Ön planı arka plandan koyu tutun, tersini değil.",
        "Pastel renkler. Beyaz üzerinde soluk sarı, yumuşak pembe ya da nane 2:1'in altındadır — kameranın eşiklemesi için neredeyse görünmezdir.",
        "Sıcak üzerine sıcak. Sarı ya da turuncu üzerindeki kırmızı modüller çok fazla parlaklık paylaşır. Güvenmeden önce gri tonlamalı versiyonu kontrol edin.",
        "CMYK sapması. RGB renkler ofset baskı için dönüştürülürken kayabilir. Basılı kanıtın hâlâ koyu bir parlaklık taşıdığını doğrulayın.",
        "Parlama yansıması. Parlak bir kaplama ışığı yansıtır ve kontrastınızı yok eder. Renkli kodlar en iyi mat kağıt üzerinde okunur."
      ]
    },
    "faqs": [
      {
        "q": "Bir QR kod herhangi bir renkte olabilir ve yine de güvenilir çalışabilir mi?",
        "a": "Neredeyse herhangi bir renkte, tek bir koşulla: ön plan arka plandan açıkça daha koyu olmalı, 4,5:1 oranını aşmalı. Koyu lacivert, orman yeşili, mor ve bordo bunu kolayca başarır."
      },
      {
        "q": "Neden koyu arka planlarda beyaz QR kodlardan (ters renkler) kaçınmalıyım?",
        "a": "Çözümleyiciler koyu üzerine açık bekleyecek şekilde tasarlanmıştır. Güncel bir iPhone ters çevrilmiş olanı genellikle işler, ancak birçok Android telefon ve el tipi tarayıcı takılır ya da başarısız olur — basılı materyalde bu riski almaya değmez."
      },
      {
        "q": "Renk kombinasyonumun taranabilir olup olmadığını nasıl kontrol ederim?",
        "a": "Tasarımı herhangi bir görüntü görüntüleyicide gri tonlamaya çevirin. Desen hâlâ arka plandan net biçimde ayrışıyorsa kontrastınız yeterlidir. Zemine karışıyorsa, tarama da karışır."
      },
      {
        "q": "Birden fazla renk kullanabilir miyim (ör. köşe gözleri için farklı renkler)?",
        "a": "Dış çerçeveleri, iç göz noktalarını ve gövde modüllerini üç farklı renge ayarlayabilirsiniz; her parça kontrastını koruduğu sürece kod yine taranır."
      },
      {
        "q": "Renkli QR kodlar sona erer mi ya da ek ücret gerektirir mi?",
        "a": "İkisi de hayır. Burada renk ücretsizdir ve kodlar, diğer tüm türler gibi sınırsız tarama ve kalıcı geçerlilikle gelir."
      },
      {
        "q": "Profesyonel renk eşleştirmeli baskı için hangi biçimi indirmeliyim?",
        "a": "Vektör SVG. Tam hex ve RGB değerlerini korur ve InDesign ya da Illustrator içinde CMYK örneklerine temiz biçimde dönüşür; renk yönetimli bir baskı işinin ihtiyacı olan budur."
      },
      {
        "q": "Renkli bir QR koda logo ekleyebilir miyim?",
        "a": "Evet — renk özelleştirmesi ve merkez logo birlikte çalışır; H seviyesi hata düzeltme, logoyu siyah kodda olduğu gibi kapsar."
      },
      {
        "q": "Renk tasarım verilerim harici sunucularda saklanıyor mu?",
        "a": "Yerel kalır. Renk işleme ve SVG oluşturma, ikisi de tarayıcınızın belleğinde çalışır; dışarıya hiçbir şey gönderilmez."
      }
    ],
    "bestPractices": "Ön planı arka plandan belirgin biçimde koyu tutun ve taahhüt etmeden önce tasarımı gri tonlamada kontrol edin. Ardından basılı bir kanıtı tarayın — monitörde doğru görünen bir renk, kağıda geçtiği anda kontrast kaybedebilir."
  },
  '/svg-qr-code-generator': {
    "sections": [
      {
        "title": "Profesyonel ticari baskının altın standardı",
        "paragraphs": [
          "Piksellerden oluşan PNG ya da JPEG görsellerinin aksine, vektör SVG dosyaları büyük baskı boyutlarına ölçeklendiğinde asla bulanıklaşmaz.",
          "Grafik tasarım iş akışları için SVG dosyalarını Adobe Illustrator, Photoshop, InDesign, Figma ya da Canva'ya kolayca aktarın."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Ölçeklenebilir vektör grafik (SVG) QR kod mimarisine teknik genel bakış",
      "paragraphs": [
        "SVG, W3C'nin XML tabanlı bir vektör biçimidir ve PNG ya da JPEG'den farkı temeldir. Bir raster dosya kodu sabit bir renkli piksel ızgarası olarak saklar. Bir SVG ise onu matematik olarak saklar — her modül, köşe gözü ve sessiz bölge koordinat yolları (`<rect>`, `<path>`, `<circle>`) olarak yazılır.",
        "Büyütürken asıl önemli olan budur. 25 mm'lik bir kartvizitteki SVG kodu 20 metrelik bir billboarda taşıyın; işleyici yalnızca eğrileri yeniden hesaplar — enterpolasyon yok, anti-aliasing bulanıklığı yok, yumuşak kenarlar yok. Ofset presler, flekso ambalaj hatları, lazer gravürcüler ve CNC vinil plotterlar, tam olarak takip edebilecekleri bir geometri alır.",
        "Pratik kazançlar keskinliğin ötesine uzanır. Bir SVG kod çok küçüktür, genellikle 5 KB'nin altında. CSS ile stillendirilir, Illustrator ya da InDesign'da CMYK'ya kayıpsız dönüşür ve doğrudan modern bir web sayfasına ya da uygulamaya yerleşir."
      ]
    },
    "comparisonTable": {
      "title": "Vektör SVG QR kod ile raster PNG / JPEG QR kodun karşılaştırması",
      "headers": [
        "Teknik özellik",
        "Vektör SVG QR kod",
        "Raster PNG / JPEG QR kod"
      ],
      "rows": [
        [
          "Ölçeklenebilirlik",
          "Sonsuz ölçeklenebilir (her boyutta pikselleşme ya da bulanıklık yok)",
          "Sabit çözünürlük (büyütüldüğünde pikselleşir ve bulanıklaşır)"
        ],
        [
          "Dosya boyutu",
          "Çok kompakt (~3 KB - 8 KB)",
          "Yüksek baskı çözünürlüklerinde 100 KB - 2 MB"
        ],
        [
          "Baskı presi uyumluluğu",
          "Ticari ofset, flekso ve lazer için endüstri standardı",
          "Her baskı boyutu için en az 300 DPI hesabı gerekir"
        ],
        [
          "Vektör araçlarında düzenlenebilirlik",
          "Illustrator, InDesign ve Figma'da tam yol düzenlenebilirliği",
          "Düz piksel bitmap; yollar temiz biçimde düzenlenemez"
        ],
        [
          "Lazer gravür ve vinil kesim",
          "CNC ve lazer kesiciler için doğrudan vektör yolu desteği",
          "Uyumsuz; manuel vektör izleme gerekir"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "QR içeriğinizi girin ve veri yükünü yapılandırın",
        "description": "Hedefinizi girin — bir URL, vCard ayrıntıları, WiFi kimlik bilgileri ya da metin."
      },
      {
        "number": 2,
        "title": "Görsel parametreleri ve logoyu özelleştirin",
        "description": "Modül stillerini, marka renklerini ve köşe gözü geometrisini seçin; istiyorsanız merkeze bir logo yerleştirin."
      },
      {
        "number": 3,
        "title": "Kayıpsız vektör SVG dosyasını dışa aktarın",
        "description": "Baskı öncesi iş akışına doğrudan giden, baskıya hazır vektör dosyası için \"SVG'yi İndir\"e tıklayın."
      }
    ],
    "features": [
      {
        "title": "Matematiksel olarak mükemmel sonsuz ölçekleme",
        "description": "Kodu istediğiniz boyuta büyütün; modül kenarları bıçak gibi keskin kalır. Tükenecek bir çözünürlük yoktur."
      },
      {
        "title": "Doğrudan baskı öncesi ve ticari baskı uyumluluğu",
        "description": "Aralarında dönüştürme adımı olmadan InDesign, Illustrator, CorelDRAW ve QuarkXPress'te temiz biçimde açılır."
      },
      {
        "title": "Lazer gravür ve vinil plotter için hazır",
        "description": "Vektör yolları doğrudan bir lazer kesiciyi, CNC frezeyi ya da tabela plotterını besler."
      },
      {
        "title": "Ultra hafif dosya boyutu",
        "description": "5 KB'nin altında; web'de anında yüklenir ve e-postayla gönderilirken hiç düşünmenize gerek kalmaz."
      }
    ],
    "sizingMatrix": {
      "title": "SVG QR kod üretim uygulamaları kılavuzu",
      "description": "Vektör SVG tüm fiziksel ve endüstriyel üretim süreçlerine sorunsuz uyum sağlar.",
      "headers": [
        "Üretim süreci",
        "Çıktı ortamı",
        "Önerilen çözünürlük",
        "Vektör SVG'nin avantajları"
      ],
      "rows": [
        [
          "Ticari ofset baskı",
          "Broşürler, yıllık raporlar, kitaplar",
          "2400+ DPI pres çıktısında sonsuz keskinlik",
          "Temiz vektör trapping ve ayırma"
        ],
        [
          "Flekso baskı",
          "Ürün ambalajları, oluklu kutular",
          "Kalıp kesim hattının tam boyutlarına ölçeklenir",
          "Gözenekli kağıtta sıfır raster nokta kazancı"
        ],
        [
          "Lazer gravür ve aşındırma",
          "Ahşap, anodize alüminyum, paslanmaz çelik",
          "Doğrudan CNC takım yollarına dönüşür",
          "Hassas lazer ışını kontur kesimi"
        ],
        [
          "Vinil plotlama ve kesim",
          "Araç çıkartmaları, mağaza vitrin tabelaları",
          "Doğrudan vektör kesim çizgisi üretimi",
          "Manuel bitmap izlemeyi ortadan kaldırır"
        ],
        [
          "Dijital web ve uygulama arayüzü",
          "Duyarlı web siteleri ve web uygulamaları",
          "4K ve Retina ekranlarda keskin görüntü",
          "Sıfır bant genişliği yükü (~4 KB)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Ticari billboard ve büyük format tabela",
        "description": "5 metrelik bir afişe ya da toplu taşıma posterine ölçeklendirin; modüller karşı taraftan okunacak kadar keskin kalır."
      },
      {
        "title": "Ürün ambalajı ve flekso karton baskısı",
        "description": "Vektör kodu doğrudan bir ambalaj kalıp hattına yerleştirin; yüksek hızlı bir pres çalışmasında bile dayanır."
      },
      {
        "title": "Lazerle gravürlenmiş metal ve ahşap ürünler",
        "description": "Aynı dosyadan bir ahşap masa standına, metal bir anahtarlığa ya da endüstriyel bir varlık etiketine kalıcı kod kazıyın."
      },
      {
        "title": "Ticari araç filoları için vinil çıkartmalar",
        "description": "Bitmap izleme adımı olmadan, van ve servis kamyonları için sargı çıkartmalarını doğrudan SVG yollarından kesin."
      },
      {
        "title": "Yüksek yoğunluklu duyarlı web uygulamaları",
        "description": "SVG'yi bir web uygulamasına gömün; birkaç kilobayt karşılığında Retina ve 4K ekranlarda keskin görünür."
      }
    ],
    "troubleshooting": {
      "title": "SVG QR kod dosyalarıyla çalışırken en iyi uygulamalar",
      "points": [
        "Illustrator'da ölçekleme. \"Scale Strokes & Effects\" seçeneğini açın; böylece modül çizgileri sabit bir kalınlıkta kalmak yerine orantılı büyür.",
        "Logodaki yazı tipleri. Gömülü logonuzda özel yazı tipi varsa, son baskı dışa aktarımından önce metni anahatlara çevirin.",
        "Sessiz bölge. SVG'nin sınırlayıcı kutusunu sıkıca kesmeyin — kodun etrafındaki beyaz kenar payı, kameranın kodu bulmak için kullandığı alandır.",
        "Spot renk. Pantone mürekkeplerle mi basıyorsunuz? Plakaya göndermeden önce SVG dolgusunun doğru ayırma kanalına eşlendiğini kontrol edin.",
        "Vektörün içinde raster. SVG'nin içindeki her logonun da vektör olduğundan emin olun; dosyanın tamamını bulandıracak düşük çözünürlüklü bir JPEG olmamalı."
      ]
    },
    "faqs": [
      {
        "q": "SVG QR kod nedir ve neden baskı için daha iyidir?",
        "a": "SVG, Scalable Vector Graphics (ölçeklenebilir vektör grafik) anlamına gelir. PNG ya da JPEG piksellerden oluşurken SVG şekillerini matematikle tanımlar; böylece kod bulanıklaşmadan ya da bozulmadan herhangi bir boyuta ölçeklenir. Baskı için bu fark her şeydir."
      },
      {
        "q": "SVG QR kodlarını Adobe Illustrator ya da Figma'da açıp düzenleyebilir miyim?",
        "a": "Doğrudan. SVG standart bir vektör biçimidir; dönüştürme gerekmeden Illustrator, InDesign, Photoshop, Figma, CorelDRAW ve Inkscape'te düzenlemek için açılır."
      },
      {
        "q": "SVG lazer gravür ve CNC makineleriyle uyumlu mu?",
        "a": "Onların istediği biçim budur. Bir lazer kesici ya da CNC plotter, ışını ya da bıçağı yönlendirmek için vektör yolu konturlarını doğrudan SVG'den okur."
      },
      {
        "q": "SVG QR kodları sona erer mi ya da tarama sınırları var mı?",
        "a": "Sona ermez, sınır yoktur. Statik bir SVG kod verilerini kendi içinde tutar ve tekrarlayan ücret olmadan ömür boyu çalışmaya devam eder."
      },
      {
        "q": "Bir SVG QR kodu kalite kaybı olmadan ne kadar büyütebilirim?",
        "a": "İhtiyacınız kadar — 1 cm'lik bir pul da olsa 50 metrelik bir stadyum afişi de olsa, ikisi de tam hassasiyetle. Vektör geometrisinin bir boyut tavanı yoktur."
      },
      {
        "q": "Şirket logomu bir SVG QR kodun içine gömebilir miyim?",
        "a": "Vektör matrisin ortasına bir logo koyabilirsiniz; üzerine oturduğu modülleri H seviyesi hata düzeltme kapsar."
      },
      {
        "q": "SVG QR kodlarını web sitelerinde ve mobil uygulamalarda kullanabilir miyim?",
        "a": "Tarayıcılar SVG'yi doğal olarak işler; bu yüzden satır içi bir SVG kod 5 KB'nin altında yüklenir ve yüksek yoğunluklu Retina ve 4K ekranlarda keskin kalır."
      },
      {
        "q": "QR Generator Online'da SVG QR kod oluşturmak ücretsiz mi?",
        "a": "Yüksek çözünürlüklü vektör SVG'yi indirmek ücretsizdir; araya giren bir hesap ya da abonelik yoktur."
      }
    ],
    "bestPractices": "Matbaanıza vektör SVG verin, 4 modüllük sessiz bölgeyi bozulmadan tutun ve gömülü logonun da vektör olduğundan emin olun. Bu kombinasyon, bir baskı merkezine doğrudan preste kullanabileceği bir dosya verir."
  },
  '/high-resolution-qr-codes': {
    "sections": [
      {
        "title": "Ambalaj, menü ve tabela için kusursuz netlik",
        "paragraphs": [
          "Yüksek DPI çözünürlük, parlak baskı yüzeylerinde, dokulu ambalajlarda ya da düşük ışıklı ortamlarda bulanık kenarları ve tarama hatalarını önler.",
          "Pazarlama materyallerine hemen yerleştirilmeye hazır, şeffaf arka planlı kristal netliğinde QR kodlar dışa aktarın."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Yüksek çözünürlüklü (300+ DPI / 4K) QR kod mühendisliğine teknik genel bakış",
      "paragraphs": [
        "Yüksek çözünürlüklü bir QR kod, baskıda ayakta kalacak kadar piksel yoğunluğuyla oluşturulmuş bir koddur — en az 300 ila 600 DPI'da 2048x2048 piksel ya da çözünürlükten bağımsız bir vektör dosyası. Çoğu web oluşturucu size 72 DPI'da 200x200 bir görüntü verir; bu ekranda iyi görünür ama kâğıda değer değmez dağılır: pikselleşme, yumuşak kenarlar, bulanık modül sınırları.",
        "Gerçekte ne bozulur? Düşük çözünürlüklü bir kod basıldığında pres, hiç var olmamış piksel verisini doldurmaya çalışır. Bu enterpolasyon, kare modüllerin keskin köşelerini yuvarlar ve tarayıcının bağlı olduğu 1:1:3:1:1 bulucu oranını çarpıtır — kamera ya yavaş çözer ya da pes eder.",
        "QR Generator Online bu başarısızlık modunu tamamen atlar. 300 DPI'da 4K'ya kadar ultra yüksek çözünürlüklü raster yanı sıra vektör SVG ve EPS dışa aktarır. Her iki yolda da modül kenarları, bir ambalaj matbaacısının, lüks kırtasiye evinin ya da büyük format billboard atölyesinin ikinci bir bakışa gerek kalmadan kabul edeceği kadar keskin kalır."
      ]
    },
    "comparisonTable": {
      "title": "300 DPI yüksek çözünürlüklü QR kod ile standart 72 DPI web çıktısının karşılaştırması",
      "headers": [
        "Spesifikasyon / ölçüt",
        "300 DPI yüksek çözünürlüklü çıktı (QR Generator Online)",
        "72 DPI düşük çözünürlüklü web oluşturucu"
      ],
      "rows": [
        [
          "Piksel boyutları",
          "2048 x 2048 px ile 4096 x 4096 px (4K)",
          "200 x 200 px ile 350 x 350 px"
        ],
        [
          "Basılı çıktı kalitesi",
          "300+ DPI'da keskin modül sınırları",
          "Pikselleşmiş, bulanık ve dişli modül kenarları"
        ],
        [
          "Kamera çözme hızı",
          "Her ışıkta anında çözme (< 0,2 sn)",
          "Optik bulanıklık nedeniyle gecikmeli çözme (1 - 3 sn)"
        ],
        [
          "Maksimum baskı boyutu",
          "Poster ve billboard boyutlarına kadar ölçeklenebilir",
          "Yalnızca küçük web/ekran görüntülerine sınırlı"
        ],
        [
          "Ticari baskı öncesi standartlar",
          "ISO 12647 ticari baskı standartlarını karşılar",
          "Ticari baskı öncesi kontrollerde reddedilir"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Veri yükünü ve içerik türünü yapılandırın",
        "description": "Hedefinizi girin — bir URL, vCard profili, WiFi kimlik bilgileri ya da metin."
      },
      {
        "number": 2,
        "title": "Tasarım parametrelerini ve hata düzeltmeyi özelleştirin",
        "description": "Renklerinizi, nokta desenini ve köşe gözlerini ayarlayın; ihtiyacınız varsa H seviyesinde merkeze bir logo ekleyin."
      },
      {
        "number": 3,
        "title": "4K Ultra HD PNG ya da kayıpsız vektör SVG indirin",
        "description": "Dijital kullanım için 300 DPI'da keskin bir 2048x2048 piksel PNG ya da büyük format baskı için vektör SVG dışa aktarın."
      }
    ],
    "features": [
      {
        "title": "4K Ultra HD çözünürlük ve 300+ DPI çıktı",
        "description": "Fiziksel bir ticari presin gerçekten ihtiyaç duyduğu piksel yoğunluğu için tasarlanmış raster dışa aktarımlar."
      },
      {
        "title": "Sıkıştırma artefaktı veya kenar bulanıklığı yok",
        "description": "Kayıpsız işleme modül kenarlarını temiz tutar; böylece kamera asla bulanık bir sınırda takılmaz."
      },
      {
        "title": "Ticari baskı öncesi uyumluluk",
        "description": "Ofset, dijital pres ve flekso ambalaj işleri için çözünürlük çıtasını geçer."
      },
      {
        "title": "Kalıcı ömür boyu taramalarla %100 ücretsiz",
        "description": "Her yüksek çözünürlüklü PNG ve vektör indirmesi ücretsizdir — abonelik yok, filigran yok, tarama tavanı yok."
      }
    ],
    "sizingMatrix": {
      "title": "Baskı boyutuna göre çözünürlük ve piksel boyutu matrisi",
      "description": "Standart ticari baskı ölçütü olan 300 DPI'da gereken piksel boyutlarını hesaplayın ($Piksel = İnç \\times 300$).",
      "headers": [
        "Fiziksel baskı boyutları",
        "300 DPI'da gereken çözünürlük",
        "Önerilen dosya biçimi",
        "Hedef uygulama"
      ],
      "rows": [
        [
          "1,0\" x 1,0\" (25 mm x 25 mm)",
          "300 x 300 piksel",
          "300 DPI PNG / vektör SVG",
          "Kartvizitler, isim rozetleri"
        ],
        [
          "2,0\" x 2,0\" (50 mm x 50 mm)",
          "600 x 600 piksel",
          "300 DPI PNG / vektör SVG",
          "Masa standları, bardak altlıkları, ürün etiketleri"
        ],
        [
          "4,0\" x 4,0\" (100 mm x 100 mm)",
          "1200 x 1200 piksel",
          "Vektör SVG / 300 DPI PNG",
          "Broşürler, kartpostallar, dergi reklamları"
        ],
        [
          "8,0\" x 8,0\" (200 mm x 200 mm)",
          "2400 x 2400 piksel (4K)",
          "Vektör SVG",
          "Posterler, mağaza içi tabelalar, afişler"
        ],
        [
          "20\"+ (büyük format ve billboardlar)",
          "Sonsuz vektör ölçekleme",
          "Vektör SVG / EPS",
          "Fuar arka planları, billboardlar"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Ticari ambalaj ve ürün etiketleri",
        "description": "Gıda ambalajlarında, kozmetik şişelerde ve perakende kutularında, nokta kazancı modüllerin üzerine yayılmadan keskin bir kod basın."
      },
      {
        "title": "Lüks iş kırtasiyesi ve antetli kâğıtlar",
        "description": "Folyo baskı, kabartma ya da seçici UV işine, premium kartonda ihtiyaç duyduğu hassasiyeti verin."
      },
      {
        "title": "Büyük format afişler ve açık hava billboardları",
        "description": "Bir otoparkın öbür ucundan bile temiz çözülen çok metrelik bir panoya ölçeklendirin."
      },
      {
        "title": "Dergi reklamları ve doğrudan posta katalogları",
        "description": "Ulusal dergi ve katalog matbaacılarının sizden beklediği 300+ DPI baskı öncesi çıtasını geçin."
      },
      {
        "title": "Yüksek tanımlı dijital ekranlar ve 4K kiosklar",
        "description": "Dokunmatik ekranda, dijital menü panosunda ya da konferans slaytında kodun bulanıklaşmadan keskin görünmesini sağlayın."
      }
    ],
    "troubleshooting": {
      "title": "Çözünürlük ve baskı kalitesi tuzaklarından kaçınma",
      "points": [
        "Kodun ekran görüntüsünü almak. Asla baskı için ekran görüntüsü almayın — düşük web çözünürlüğünü kilitler. Orijinal yüksek çözünürlüklü PNG'yi ya da SVG'yi indirin.",
        "JPEG sıkıştırması. Kayıplı JPEG, modül kenarları etrafında soluk halkalar oluşturur. Bunun yerine kayıpsız PNG ya da SVG olarak kaydedin.",
        "Gazete kâğıdında nokta kazancı. Gözenekli, ucuz kâğıt mürekkebi yayar ve modüller arasındaki boşlukları kapatır. Gazete kâğıdı için kodu yaklaşık %20 büyütün.",
        "Dışa aktarırken örnekleme düşürme. Bir kodu InDesign ya da Canva'ya yerleştirdiğinizde, dışa aktarmanın onu sessizce 300 DPI'nın altına indirmediğini kontrol edin.",
        "Yumuşak rasterleştirme. Bir vektörü rasterleştiriyor musunuz? Modül köşelerinin dik açılı kalması için en yakın komşu ya da keskin kenarlı işleme kullanın."
      ]
    },
    "faqs": [
      {
        "q": "QR kodları basarken yüksek çözünürlük neden önemlidir?",
        "a": "Çünkü kamera niyetleri değil kenarları okur. Düşük çözünürlüklü bir görüntü baskıda modül sınırlarını bulandırır ve bulanık bir sınır, bir tarayıcının eşiklemesini zorlaştıran tam da şeydir. 300+ DPI'da kenarlar keskin kalır ve çözme anında gerçekleşir."
      },
      {
        "q": "QR Generator Online PNG dosyaları için hangi çözünürlüğü dışa aktarır?",
        "a": "PNG dışa aktarımı 300 DPI'da 2048x2048 pikseldir — kalite kaybı olmadan yaklaşık 7x7 inçe kadar temiz basmaya yeterlidir."
      },
      {
        "q": "Yüksek çözünürlüklü PNG yerine ne zaman vektör SVG kullanmalıyım?",
        "a": "Kod büyüdüğünde ya da profesyonel bir işte kullanıldığında SVG'ye yönelin: posterler, afişler, billboardlar, bir Illustrator ya da InDesign iş akışı ya da lazerle gravürlenen ya da vinil kesilen her şey."
      },
      {
        "q": "Yüksek çözünürlüklü QR kodlar para mı tutar ya da Pro hesap mı gerektirir?",
        "a": "Hesap yok, maliyet yok. Buradaki her yüksek çözünürlüklü PNG ve vektör SVG ücretsiz, sınırsız ve filigransızdır."
      },
      {
        "q": "QR kodumu hangi boyutta basmam gerektiğini nasıl bilirim?",
        "a": "10:1 kuralını kullanın: tarama mesafesini ona bölün. Bir metre uzaktan okunacak bir poster, en az 10 cm (4 inç) genişliğinde bir koda ihtiyaç duyar."
      },
      {
        "q": "Özel renkler ve logolarla yüksek çözünürlüklü QR kod oluşturabilir miyim?",
        "a": "Renkleri, nokta desenini ve köşe şekillerini stillendirebilir, ortaya bir logo ekleyebilir ve sonucu yine de 4K PNG ya da vektör SVG olarak dışa aktarabilirsiniz."
      },
      {
        "q": "Ticari matbaalar neden 72 DPI görüntüleri reddeder?",
        "a": "Presleri 2400+ DPI'da çalışır. 72 DPI'lık bir dosya yeterli piksel verisi taşımaz; bu yüzden görünür bloklar olarak basılır ve baskı öncesi kontrolü geçemez."
      },
      {
        "q": "Yüksek çözünürlüklü QR kodlar oluştururken verilerim güvende mi?",
        "a": "Evet. Yüksek çözünürlüklü işleme tarayıcınızda yerel olarak gerçekleşir; bir sunucuya veri ya da görsel gönderilmez."
      }
    ],
    "bestPractices": "Baskı için vektör SVG ya da 300 DPI'da 2048 px PNG dışa aktarın ve kayıplı JPEG'den uzak durun. Her zaman olduğu gibi, tam seriden önce basılı kanıtı tarayın — çözünürlük sorunları yalnızca kâğıtta ortaya çıkar, ekranda asla."
  },
  '/about': {
    "sections": [
      {
        "title": "Gizlilik öncelikli barkod teknolojisi inşa etmek",
        "paragraphs": [
          "QR Generator Online, deneme sürelerinden sonra kullanıcıların bağlantılarını rehin tutan ücretli ve yırtıcı QR oluşturucuların yarattığı hayal kırıklığını gidermek için yapıldı.",
          "Tüm statik oluşturma, kişisel iletişim bilgilerini ya da hassas WiFi kimlik bilgilerini sunucularımızda kaydetmeden tarayıcınızda %100 işlenir."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Mimari misyonumuz — Açık, özel ve kalıcı QR teknolojisi",
      "paragraphs": [
        "QR Generator Online ortak bir sıkıntıyla başladı. Birkaç mühendis, birkaç yazı tipi tasarımcısı ve bazı gizlilik savunucuları aynı şeyin olduğunu görmüştü: 2B barkod üretimi — Denso Wave ve ISO/IEC'nin 2000 yılında yayımladığı açık bir standart — basılı pazarlamayı rehin tutan aylık 30 dolarlık aboneliklerin arkasına kapatılmıştı. Bu yüzden alternatifi inşa ettiler.",
        "Bunun altındaki mühendislik tercihi söylemesi kolay, taklit etmesi zor bir şeydir: her şey istemci tarafında çalışır. Reed-Solomon polinom matematiği, matris birleştirme, vektör işleme — hepsi modern JavaScript ve WebAssembly aracılığıyla tarayıcınızda yürütülür. Yolda hiçbir izleme vekili yoktur, çünkü yolda hiçbir sunucu yoktur.",
        "Bu platform bugün 190 ülkedeki insanlara ulaşıyor. Köşedeki bir kahve dükkânı ile bir Fortune 500 baskı öncesi şirketi aynı oluşturucuyu kullanıyor; ikisi de ücretsiz duvarı, tarama sınırı ve kayıt olmadan kalıcı, yüksek çözünürlüklü vektör kodlar alıyor."
      ]
    },
    "comparisonTable": {
      "title": "Mimari felsefemiz ile geleneksel ticari QR SaaS karşılaştırması",
      "headers": [
        "Temel değer / ilke",
        "QR Generator Online",
        "Geleneksel ticari QR SaaS"
      ],
      "rows": [
        [
          "Fiyatlandırma modeli",
          "Sonsuza kadar %100 ücretsiz (ödeme duvarı ve abonelik yok)",
          "Tekrarlayan aylık abonelik (15 - 45 $/ay)"
        ],
        [
          "Veri mimarisi",
          "%100 istemci tarafı (tüm işlemler tarayıcı belleğinde)",
          "Tüm tarama trafiğini kaydeden merkezi sunucu vekili"
        ],
        [
          "Gizlilik ve GDPR uyumu",
          "Sıfır veri toplama, sıfır çerez, sıfır izleme",
          "Ziyaretçilerin IP adreslerini, konumlarını ve cihazlarını toplar"
        ],
        [
          "Vektör dosya dışa aktarımları",
          "Tüm kullanıcılar için ücretsiz tam vektör SVG ve EPS",
          "Vektör biçimleri pahalı Pro katmanların arkasında kilitli"
        ],
        [
          "Kod uzun ömürlülüğü",
          "Kalıcı ömür boyu geçerlilik (doğrudan kodlanmış statik)",
          "Abonelik ödenmezse kodlar 14 gün sonra sona erer"
        ],
        [
          "Ticari kullanım hakları",
          "Tam ve kısıtsız ticari lisans dahil",
          "Ücretsiz/başlangıç planlarında ticari kullanım kısıtlı"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Dünya genelindeki tüm kullanıcılar için açık erişim",
        "description": "Aynı kurumsal düzeydeki araç seti herkese sunulur — tek başına çalışan bir tasarımcıya, köşedeki bir dükkâna ya da küresel bir markaya — ücretli bir katman için hiçbir şey saklanmaz."
      },
      {
        "number": 2,
        "title": "Tasarımdan başlayan ödünsüz veri gizliliği",
        "description": "Hiçbir müşteri URL'si, parolası ya da iletişim profili saklanmaz, kaydedilmez ya da satılmaz. Bunların herhangi birini tutan bir veritabanı zaten yoktur."
      },
      {
        "number": 3,
        "title": "Fiziksel baskı için hassas baskı öncesi standartlar",
        "description": "Vektör SVG çıktısı ticari bir presten sağ çıkacak şekilde tasarlanmıştır — matematiksel olarak kesin, ambalaj ve büyük format işler için hazır."
      }
    ],
    "features": [
      {
        "title": "%100 tarayıcı tabanlı istemci tarafı mimari",
        "description": "Kodlama ve işleme yerel olarak gerçekleşir; bu yüzden önizleme anlıktır ve girdileriniz özel kalır."
      },
      {
        "title": "Tam ISO/IEC 18004 uyumu",
        "description": "Uluslararası standardın harfi harfine göre inşa edilmiştir; bu yüzden bir kod herhangi bir iOS ya da Android kamerada ilk denemede taranır."
      },
      {
        "title": "Kayıpsız vektör SVG ve 4K PNG çıktısı",
        "description": "Tek bir dışa aktarma yolu, bir mikro etiketi de 50 metrelik bir otoyol billboardını da aynı ölçüde iyi karşılar."
      },
      {
        "title": "Kalıcı ömür boyu kod garantisi",
        "description": "Ara bir yönlendirme olmadığı için kapatılacak bir şey yoktur. Burada bastığınız kod çalışmaya devam eder."
      }
    ],
    "sizingMatrix": {
      "title": "Küresel ölçeğimiz ve performans ölçütlerimiz",
      "description": "QR Generator Online platformunun güvenilirliğini ve küresel erişimini yansıtan temel ölçütler.",
      "headers": [
        "Ölçüt / metrik",
        "Performans standardı",
        "Teknik mimari",
        "Kullanıcı faydası"
      ],
      "rows": [
        [
          "Oluşturma gecikmesi",
          "< 50 milisaniye",
          "Tarayıcıda yerel WebAssembly / JS yürütme",
          "Anında gerçek zamanlı önizleme güncellemeleri"
        ],
        [
          "Tarama güvenilirlik oranı",
          "%99,99 ilk geçişte optik çözme",
          "ISO/IEC 18004 uyumlu zamanlama desenleri",
          "Müşteriler için sıfır tarama sürtünmesi"
        ],
        [
          "Vektör hassasiyeti",
          "Sonsuz matematiksel ölçeklenebilirlik",
          "Temiz W3C SVG vektör yolu geometrisi",
          "Kusursuz ticari baskı presi çıktısı"
        ],
        [
          "Sunucu veri kaydı",
          "%0,00 (sıfır bayt depolanan)",
          "Harici veritabanı veya izleme vekili yok",
          "Tam GDPR / CCPA gizlilik uyumu"
        ],
        [
          "Küresel erişilebilirlik",
          "%100,0 statik çalışma süresi",
          "Dağıtık küresel edge CDN teslimatı",
          "Dünya genelinde 7/24/365 erişilebilirlik"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Bağımsız küçük işletmeler ve yerel perakende",
        "description": "Profesyonel pazarlama materyalleri, mağaza tabelaları ve ambalaj — kâra bir yazılım aboneliği yük olmadan."
      },
      {
        "title": "Tasarım ajansları ve yaratıcı profesyoneller",
        "description": "Hiçbir düzenleme gerektirmeden doğrudan InDesign, Illustrator ya da Figma'ya aktarılan temiz vektör SVG dosyaları."
      },
      {
        "title": "Baskı öncesi evleri ve ticari ambalaj matbaaları",
        "description": "Reddedilmek yerine sıkı bir baskı öncesi denetimi geçen yüksek kontrastlı barkod kalıp çizimleri."
      },
      {
        "title": "Kâr amacı gütmeyen kuruluşlar, okullar ve topluluk örgütleri",
        "description": "Temassız etkinlik girişleri, sınıf sınavları ve bağış bağlantıları — hepsi hiçbir teknoloji bütçesi olmadan."
      },
      {
        "title": "Yazılım geliştiricileri ve teknik entegratörler",
        "description": "Bir mobil uygulamayı bağlarken `WIFI:`, `mailto:`, `vCard 3.0` ve `BIP-0021` gibi URI şemaları için temiz bir referans."
      }
    ],
    "troubleshooting": {
      "title": "Temel mühendislik standartlarımız ve taahhütlerimiz",
      "points": [
        "Basılı bir kodu rehin tutmayacağız. Statik kodlar kalıcıdır — yönlendirme yok, koşullara gömülü bir son kullanma tuzağı yok.",
        "Verilerinizi satmayacağız. İstemci tarafında çalıştığımız için, madencilik yapabileceğimiz ya da bir reklamverene verebileceğimiz bir kullanıcı veritabanı zaten yok.",
        "Vektör indirmelerini ödeme duvarının arkasına koymayacağız. SVG dışa aktarımı bir tasarımcının iş gereksinimidir; bu yüzden herkes için ücretsiz kalır.",
        "ISO uyumuna bağlı kalacağız. Her modül, zamanlama deseni ve bulucu göz ISO/IEC 18004'e karşı doğrulanır.",
        "Açık web'i desteklemeye devam edeceğiz. İhtiyacı olan herkes için ücretsiz, hızlı ve faydalı tarayıcı araçları — bütün fikir budur."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online'ın misyonu nedir?",
        "a": "Kalıcı, gizlilik öncelikli ve ticari kalitede QR üretimini herkesin eline ücretsiz vermek — zaten bastığınız bir kodla aranızda duran bir abonelik olmadan."
      },
      {
        "q": "QR Generator Online'ı kim kurdu?",
        "a": "Abonelik tabanlı QR hizmetlerine dürüst ve açık bir karşı ağırlık isteyen küçük bir yazılım mühendisi, baskı öncesi tasarımcı ve gizlilik savunucusu grubu."
      },
      {
        "q": "İstemci tarafı mimariniz kullanıcı gizliliğini nasıl korur?",
        "a": "Oluşturma baştan sona JavaScript aracılığıyla tarayıcınızda çalışır. Hedef URL'leriniz, iletişim bilgileriniz ve WiFi parolalarınız bize asla ulaşmaz, çünkü onları gönderecek bir sunucu çağrısı yoktur."
      },
      {
        "q": "Kurumsal işletmeler QR Generator Online'ı ticari ambalaj için kullanabilir mi?",
        "a": "Zaten kullanıyorlar. Birçok ticari marka ve baskı öncesi ekip, bu vektör kodları dünya genelinde ambalajlara, perakende standlarına, kitaplara ve reklam kampanyalarına yerleştiriyor."
      },
      {
        "q": "Gizli maliyetler, Pro hesaplar ya da kredi kartı gereksinimleri var mı?",
        "a": "Gizli hiçbir şey yok. Her araç, her stil seçeneği, logo gömme ve her vektör indirme tüm kullanıcılar için ücretsizdir."
      },
      {
        "q": "Oluşturulan QR kodların tüm cihazlarda güvenilir şekilde taranmasını nasıl sağlıyorsunuz?",
        "a": "Motor ISO/IEC 18004'e uyar, zorunlu 4 modüllük sessiz bölgeyi korur ve logonun konduğu her yerde H seviyesi Reed-Solomon düzeltmesi uygular. Bu kombinasyon, bir kodun cihazlar arasında ilk denemede okunmasını sağlar."
      },
      {
        "q": "Geri bildirim verebilir ya da yeni özellik önerebilir miyim?",
        "a": "Lütfen yapın — topluluk girdileri inşa ettiğimiz şeylerin çoğunu yönlendirir. Bir fikir ya da özellik isteği göndermenin en hızlı yolu İletişim sayfasıdır."
      },
      {
        "q": "Sunucularınız nerede barındırılıyor?",
        "a": "Statik varlıklar küresel bir edge CDN üzerinden sunulur; bu yüzden sayfa Kuzey Amerika'dan, Avrupa'dan, Asya'dan ya da başka herhangi bir yerden hızlı yüklenir."
      }
    ],
    "bestPractices": "Araç size zaman kazandırdıysa, paylaşın — tanıdığınız bir tasarımcı, dükkân sahibi ya da pazarlama ekibi muhtemelen onu da kullanabilir."
  },
  '/contact': {
    "sections": [
      {
        "title": "Mühendislik ve destek ekibimize ulaşın",
        "paragraphs": [
          "Özel QR kod formatları, baskı en iyi uygulamaları ya da toplu oluşturma hakkında sorularınız mı var? Bize support@qr-generator.online adresinden e-posta gönderin.",
          "Teknik destek ekibimiz tüm talepleri 24 iş saati içinde yanıtlar."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Kurumsal teknik destek, talepler ve topluluk yardımı",
      "paragraphs": [
        "Bir baskı öncesi spesifikasyonda, yüksek hacimli bir toplu işte, InDesign'da düzgün oturmayan bir SVG vektörde ya da kurumsal bir veri formatında takıldınız mı? Destek ekibi tam da bunun için burada.",
        "Yanıt verenler ISO/IEC 18004'ü, flekso ambalaj baskı öncesini, optik taramanın fiziğini ve iOS (AVFoundation) ile Android (Google ML Kit) içindeki kamera çözümleyicilerini iyi bilir. Tasarımcılar, ticari matbaacılar, pazarlama liderleri ve geliştiriciler hepsi aynı gelen kutusuna ulaşır ve gerçek bir yanıt alır.",
        "Aşağıdan size uygun kanalı seçin. Her teknik ve ticari talep 24 iş saati içinde yanıtlanır."
      ]
    },
    "comparisonTable": {
      "title": "Destek kanalları ve yanıt süresi ölçütleri",
      "headers": [
        "Talep kategorisi",
        "Önerilen kanal",
        "Ortalama yanıt süresi",
        "Yardım kapsamı"
      ],
      "rows": [
        [
          "Baskı öncesi ve vektör baskı desteği",
          "support@qr-generator.online",
          "< 12 iş saati",
          "Vektör SVG biçimlendirme, DPI doğrulama, baskı öncesi provalama"
        ],
        [
          "Kurumsal ve yüksek hacimli talepler",
          "support@qr-generator.online",
          "< 12 iş saati",
          "Özel veri şemaları, toplu oluşturma, marka entegrasyonu"
        ],
        [
          "Hata raporları ve teknik geri bildirim",
          "support@qr-generator.online",
          "< 24 iş saati",
          "Tarayıcı uyumluluğu, işleme geri bildirimi, özellik istekleri"
        ],
        [
          "Genel kullanıcı ve nasıl yapılır soruları",
          "Bilgi bankası ve SSS sayfası",
          "Anında self-servis",
          "Boyut, stilizasyon ve tarama hakkında kapsamlı rehberler"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Kapsamlı bilgi bankamıza bakın",
        "description": "Boyut, baskı ve dosya biçimi sorularının çoğunun yanıtı zaten bilgi bankası ve SSS'de yazılıdır — e-posta göndermeden önce bir göz atmaya değer."
      },
      {
        "number": 2,
        "title": "Talebinizin teknik ayrıntılarını hazırlayın",
        "description": "Hangi şemayı kodladığınızı (URL, vCard, WiFi), hangi fiziksel boyutta bastığınızı ve hangi yazılımda düzenlediğinizi not edin — Illustrator, InDesign ya da Canva."
      },
      {
        "number": 3,
        "title": "Talebinizi desteğe gönderin",
        "description": "Ekibe support@qr-generator.online adresinden e-posta gönderin. Bir uzman 24 iş saati içinde yanıt verir."
      }
    ],
    "features": [
      {
        "title": "Doğrudan baskı öncesi mühendislik uzmanlığı",
        "description": "Gerçekten ofset, flekso ve dijital pres iş akışlarını yönetmiş kişilerden tavsiye — senaryolu bir birinci kademe cevap değil."
      },
      {
        "title": "24 saat içinde hızlı yanıt taahhüdü",
        "description": "İster bir topluluk sorusu ister kurumsal bir talep olsun, bir iş günü içinde okunur ve yanıtlanır."
      },
      {
        "title": "Kapsamlı self-servis bilgi bankası",
        "description": "Boyut formülleri, hata düzeltme ve alt tabaka seçimi üzerine düzinelerce derinlemesine rehber — istediğiniz zaman açın."
      },
      {
        "title": "%100 ücretsiz topluluk ve kurumsal destek",
        "description": "Küçük işletme, kâr amacı gütmeyen kuruluş ya da kurumsal bir tasarımcı olun, yardım aynıdır ve bir maliyeti yoktur."
      }
    ],
    "sizingMatrix": {
      "title": "Sık istenen destek konuları ve doğrudan kaynaklar",
      "description": "Anında yardım için özel teknik kaynaklara hızlı bağlantılar.",
      "headers": [
        "Konu alanı",
        "Birincil kaynak rehberi",
        "Temel formül / standart",
        "Hedef kitle"
      ],
      "rows": [
        [
          "Baskı boyutu ve S = D / 10 formülü",
          "QR kod basımına eksiksiz rehber",
          "$S = D / 10$",
          "Grafik tasarımcılar, baskı öncesi teknisyenler"
        ],
        [
          "vCard 3.0 kartvizit biçimlendirme",
          "vCard QR kodlu kartvizit rehberi",
          "RFC 2426 / RFC 6350",
          "Kurumsal pazarlama, ağ oluşturma liderleri"
        ],
        [
          "Konaklama menü operasyonları",
          "Restoranlar için QR kod rehberi",
          "HTTPS / mobil uyumlu görünüm alanı",
          "Restoran sahipleri, yiyecek ve içecek operatörleri"
        ],
        [
          "Emlak tabelası pazarlaması",
          "Emlak QR potansiyel müşteri oluşturma rehberi",
          "Matterport 3D / S = D / 10",
          "Emlak komisyoncuları, mülk yöneticileri"
        ],
        [
          "WiFi ağı erişim kurulumu",
          "Konaklama için WiFi QR kodları rehberi",
          "WIFI: URI protokolü (WPA3/WPA2)",
          "Otel yöneticileri, kafe sahipleri, BT personeli"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Ticari ambalaj baskı öncesi doğrulama",
        "description": "Plakalar kesilmeden önce ambalaj SVG'nizin ISO kontrast ve sessiz bölge sınırlarını geçtiğini ekibe kontrol ettirin."
      },
      {
        "title": "Büyük format billboard ve açık hava tabelası",
        "description": "Arabadan geçerken taranabilmesi için 20 ila 50 metre uzaktan okunacak bir otoyol panosunun tam boyutunu alın."
      },
      {
        "title": "Özel vCard kurumsal dağıtımı",
        "description": "Binlerce kişilik bir iş gücünde vCard kartvizit kodlarını nasıl standardize edeceğinizi belirleyin."
      },
      {
        "title": "Konaklamada çok lokasyonlu menü dağıtımları",
        "description": "Her şube için ayrı bir baş ağrısı olmadan bir franchise ağı genelinde hızlı yüklenen bir PDF menü dağıtımını planlayın."
      },
      {
        "title": "Eğitim ve kâr amacı gütmeyen kampanya desteği",
        "description": "Bir sınıf sınavı projesi, bir müze sergisi ya da bir bağış kampanyası için yardım alın."
      }
    ],
    "troubleshooting": {
      "title": "Hızlı destek değerlendirmesi için eklenmesi gereken bilgiler",
      "points": [
        "Oluşturucuyu belirtin. Hangi araçta olduğunuzu söyleyin — URL, vCard, WiFi, Google Forms.",
        "Baskı boyutunu verin. Hedeflenen genişlik ve yükseklik çok yardımcı olur, örneğin bir kartvizitte 25 mm x 25 mm.",
        "Tarama mesafesini belirtin. İnsanlar yaklaşık ne kadar uzakta olacak — bir menü için 30 cm mi, bir arsa tabelası için 3 metre mi?",
        "Yazılımı belirtin. Illustrator, InDesign, Photoshop, CorelDRAW ya da Figma — tavsiyeyi değiştirir.",
        "Dosyayı ekleyin. Bir tarama sorunu için dışa aktarılmış SVG ya da PNG'yi gönderin ki doğrudan bakabilelim."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online destek ekibi ne kadar hızlı yanıt veriyor?",
        "a": "24 iş saati içinde ve çoğunlukla bir iş gününde 12 saat içinde."
      },
      {
        "q": "Birincil destek e-posta adresi nedir?",
        "a": "support@qr-generator.online doğrudan teknik ekibe ulaşır."
      },
      {
        "q": "Telefon ya da canlı sohbet desteği sunuyor musunuz?",
        "a": "Destek e-posta ve bilgi bankası üzerinden çalışır, telefon ya da sohbet üzerinden değil. Hizmetin tamamen ücretsiz kalmasının bir parçası budur."
      },
      {
        "q": "Baskıya göndermeden önce ticari baskı tasarımımı inceleyebilir misiniz?",
        "a": "Memnuniyetle. Vektör SVG ya da PDF provanızı support@qr-generator.online adresine gönderin; baskı öncesi ekibi taahhüt etmeden önce sessiz bölgeyi, kontrastı ve modül geometrisini kontrol edecektir."
      },
      {
        "q": "Özel bir özellik ya da yeni bir QR kod türü talep edebilir miyim?",
        "a": "Özellik önerileri memnuniyetle karşılanır ve gerçekten okunur. Fikrinizi support@qr-generator.online adresinden ürün ekibine e-posta ile iletin."
      },
      {
        "q": "Danışmanlık ya da destek ücreti alıyor musunuz?",
        "a": "Hayır. Teknik yardım, baskı öncesi incelemeler ve nasıl yapılır rehberliği hepsi ücretsizdir."
      },
      {
        "q": "Self-servis rehberlere ve eğitimlere nerede ulaşabilirim?",
        "a": "Blog ve SSS sayfaları; baskı boyutları, restoran menüleri, vCard kişileri ve WiFi erişimi üzerine ayrıntılı rehberler içerir."
      },
      {
        "q": "Müşteri iletişim bilgileri gizli tutulur mu?",
        "a": "Tamamen. Destekle paylaştığınız her e-posta, ayrıntı ya da tasarım gizli kalır ve asla paylaşılmaz ya da satılmaz."
      }
    ],
    "bestPractices": "Anında bir yanıt için önce SSS ve bloga göz atın; e-posta gönderdiğinizde baskı ölçülerinizi ve tasarım yazılımınızı ekleyin — bu, iki e-postalık bir yazışmayı tek e-postaya indirir."
  },
  '/privacy': {
    "sections": [
      {
        "title": "İstemci tarafı veri işleme ve sıfır depolama",
        "paragraphs": [
          "QR Generator Online, statik QR kod oluşturmayı web tarayıcınızda yerel olarak işler. Kodladığınız metni, parolaları ya da iletişim bilgilerini saklamaz, toplamaz veya satmayız.",
          "GDPR ve CCPA dahil olmak üzere uluslararası veri gizliliği düzenlemelerine kesinlikle uyuyoruz."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Kriptografik gizlilik mimarimiz ve veri egemenliği politikamız",
      "paragraphs": [
        "Gizlilik sonradan eklediğimiz bir özellik değil — bütün yapının biçimidir. Çoğu ticari SaaS platformu veri toplar, IP adreslerini izler ve sessizce neye göz attığınızı satar. Bu hizmet tam tersi bir önerme üzerine kuruludur: sıfır bilgi ve verileriniz size ait kalır.",
        "Burada bir kod oluşturduğunuzda her adım tarayıcınızın içinde gerçekleşir. Reed-Solomon kodlaması, matris rasterleştirme, vektör işleme — hepsi JavaScript ve WebAssembly aracılığıyla bellekte yerel olarak çalışır. URL'leriniz, metinleriniz, vCard kişileriniz, WiFi parolalarınız ve yüklediğiniz logolar hiçbir zaman ağa çıkmaz ve bir veritabanına düşmez, çünkü veritabanı yoktur ve ağ çağrısı da yoktur.",
        "Bu politika, bunun arkasındaki teknik standartları, sıfır izleme taahhütlerini ve tüm tasarımın GDPR, CCPA ve ISO/IEC gizlilik çerçeveleriyle nasıl hizalandığını ortaya koyar."
      ]
    },
    "comparisonTable": {
      "title": "QR Generator Online gizlilik mimarisi ile geleneksel QR SaaS platformlarının karşılaştırması",
      "headers": [
        "Gizlilik ve veri ölçütü",
        "QR Generator Online (sıfır bilgi)",
        "Geleneksel ticari QR platformları"
      ],
      "rows": [
        [
          "Veri işleme konumu",
          "%100 istemci tarafı (tarayıcı belleğinizin içinde)",
          "Merkezi harici sunucu veritabanları"
        ],
        [
          "Hedef URL kaydı",
          "Sıfır kayıt (hedef URL'nizi asla görmeyiz)",
          "Tam hedef URL'leri buluta kaydeder ve saklar"
        ],
        [
          "Ziyaretçi IP adresi izleme",
          "Sıfır IP izleme (doğrudan kodlanmış statik bağlantılar)",
          "Tarayan herkesin IP adreslerini izler ve kaydeder"
        ],
        [
          "WiFi parolası aktarımı",
          "Asla ağ üzerinden aktarılmaz (sıfır risk)",
          "Düz metin olarak ya da bulut veritabanlarında saklanır"
        ],
        [
          "Kullanıcı hesabı ve e-posta toplama",
          "Hesap, e-posta ya da kayıt gerekmez",
          "Zorunlu hesap oluşturma ve pazarlama e-postaları"
        ],
        [
          "Üçüncü taraf veri paraya çevirme",
          "Sıfır veri satışı ya da reklam aracısıyla paylaşım",
          "Sıklıkla toplu tarama analizlerini paraya çevirir"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Web tarayıcısında yerel istemci tarafı işleme",
        "description": "Yazdığınız her şey — bir URL, bir parola, bir vCard — tamamen tarayıcınızın belleğinde işlenir; sunucuya giden bir API çağrısı yoktur."
      },
      {
        "number": 2,
        "title": "Sıfır bulut depolama ve sıfır veritabanı kaydı",
        "description": "Kodlarınızı, yüklediğiniz logoları ya da hedef bağlantılarınızı saklayan bir veritabanımız yoktur. Bir şey gönderilmediği için hiçbir şey tutulmaz."
      },
      {
        "number": 3,
        "title": "Kalıcı egemenlik için doğrudan statik kodlama",
        "description": "Basılı bir kod doğrudan hedefinize işaret eder; taramayı kaydedecek ya da engelleyecek bir üçüncü taraf vekil ortada yoktur."
      }
    ],
    "features": [
      {
        "title": "%100 istemci tarafı kriptografik yürütme",
        "description": "Oluşturma tarayıcı belleğinde çalışır ve girdilerinizi gizli tutan da budur — başka bir yere gidecekleri yoktur."
      },
      {
        "title": "Tasarımdan gelen tam GDPR ve CCPA uyumu",
        "description": "Kişisel bilgi toplamamak uyum için en basit yoldur ve bizim seçtiğimiz yol budur."
      },
      {
        "title": "Tarayıcılar ya da son kullanıcılar için sıfır izleme",
        "description": "Kodunuzu tarayan kişiler doğrudan sitenize ulaşır. Yolda izleme adımı yok, onlara bırakılmış bir çerez yok."
      },
      {
        "title": "Hesap oluşturma ya da e-posta toplama yok",
        "description": "Anonim olarak istediğiniz kadar oluşturun ve indirin — zaten bir kayıt yoktur."
      }
    ],
    "sizingMatrix": {
      "title": "Veri akışı ve iletim güvenliği ayrıntısı",
      "description": "QR Generator Online'daki her QR oluşturucu türünde verilerin nasıl işlendiğinin teknik doğrulaması.",
      "headers": [
        "QR oluşturucu türü",
        "Girdi veri kapsamı",
        "İşleme yöntemi",
        "Sunucu depolama durumu"
      ],
      "rows": [
        [
          "URL QR oluşturucu",
          "Hedef web adresi ve UTM'ler",
          "İstemci tarafı UTF-8 derleme",
          "0 bayt depolanır (sıfır sunucu iletimi)"
        ],
        [
          "WiFi QR oluşturucu",
          "SSID ve WPA2/WPA3 parolaları",
          "İstemci tarafı WIFI: dizgi kodlaması",
          "0 bayt depolanır (tarayıcıdan asla çıkmaz)"
        ],
        [
          "vCard QR oluşturucu",
          "Ad, telefonlar, e-postalar, adres",
          "İstemci tarafı RFC 6350 ayrıştırma",
          "0 bayt depolanır (sıfır adres defteri toplama)"
        ],
        [
          "WhatsApp / SMS / telefon",
          "Telefon numaraları ve mesaj metni",
          "İstemci tarafı URI dizgisi sentezi",
          "0 bayt depolanır (sıfır kişi kaydı)"
        ],
        [
          "Kripto QR oluşturucu",
          "Genel cüzdan alma adresi",
          "İstemci tarafı BIP-0021 URI sentezi",
          "0 bayt depolanır (özel anahtarlara asla dokunulmaz)"
        ],
        [
          "Logo yüklemeleri ve görseller",
          "PNG, SVG, JPEG marka görselleri",
          "İstemci tarafı HTML5 Canvas işleme",
          "0 bayt depolanır (sıfır görsel yükleme)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Sağlık hizmetleri ve hasta mahremiyeti (HIPAA)",
        "description": "Korunan sağlık bilgisinin bir sunucuya gitme riski olmadan hasta kabul ve klinik bağlantısı kodları oluşturun."
      },
      {
        "title": "Hukuki ve kurumsal işletme gizliliği",
        "description": "Tam kurumsal veri egemenliğini korurken iç yönetim kurulu toplantısı ya da dava belgesi bağlantıları oluşturun."
      },
      {
        "title": "Devlet tesisleri ve savunma yükleniciler",
        "description": "Gizli bir kimlik bilgisi odadan asla çıkmadan güvenli bir tesisin içinde ziyaretçilere WiFi kartları dağıtın."
      },
      {
        "title": "Finansal hizmetler ve kripto para transferleri",
        "description": "Cüzdan adresinin ve tutarın kesinlikle cihazınızda kaldığını bilerek bir blok zinciri ödeme kodu oluşturun."
      },
      {
        "title": "Tüketici markası pazarlaması ve güven inşası",
        "description": "Gizliliğe duyarlı müşterilere, kampanya kodunuzu taramanın nerede olduklarını izlemeyeceğini dürüstçe söyleyin."
      }
    ],
    "troubleshooting": {
      "title": "Tarayıcınızda istemci tarafı gizliliği nasıl doğrularsınız",
      "points": [
        "Ağ sekmesini izleyin. Geliştirici Araçlarını (F12) açın ve bir kod oluştururken ya da logo yüklerken Network'e bakın. Hiçbir şey çıkmaz — verilerinizi taşıyan POST ya da GET yok.",
        "Fişi çekin. Sayfayı yükleyin, WiFi ve mobil veriyi kapatın, sonra bir kod oluşturun. Anında, çevrimdışı görünür — bu yalnızca her şey tarayıcınızda çalışıyorsa mümkündür.",
        "Kendi kodunuzu çözün. Oluşturulan bir URL kodunu herhangi bir tarayıcı uygulamasıyla okuyun. Çözülen metin tam URL'nizdir; etrafında bir yönlendirme alanı adı sarılı değildir.",
        "İzleyicileri arayın. Oluşturucu sayfaları davranışsal izleme pikselleri ya da veri aracısı betikleri yüklemez.",
        "Sekmeyi kapatın. Veriler uçucu bellekte yaşadığı için sekmeyi kapatmak girdiğiniz her şeyi siler."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online URL'lerimi, parolalarımı ya da iletişim ayrıntılarımı saklıyor mu?",
        "a": "Girdiğiniz hiçbir şey saklanmaz. Oluşturma tamamen tarayıcınızın belleğinde gerçekleşir; bu yüzden hiçbir kısmı asla bir sunucuya iletilmez ya da orada tutulmaz."
      },
      {
        "q": "QR kodlarımı kaç kişinin taradığını izliyor musunuz?",
        "a": "Yapamayız ve tasarım gereği yapamayız. Statik bir kod, ortada bir yönlendirme sunucusu olmadan doğrudan hedefinize bağlanır; bu yüzden bir taramanın sayılabileceği ya da kaydedilebileceği bir nokta yoktur."
      },
      {
        "q": "QR Generator Online GDPR ve CCPA düzenlemelerine uygun mu?",
        "a": "Tamamen. Hiçbir kişisel bilgi toplanmaz, saklanmaz ya da işlenmez; tarayıcıların IP adresleri de kaydedilmez — bu yüzden bu düzenlemelerin işaretleyeceği bir şey yoktur."
      },
      {
        "q": "Yüklediğim logo görselleri web sunucularınızda saklanıyor mu?",
        "a": "Hiç yüklenmezler. Logo HTML5 Canvas API'si aracılığıyla tarayıcınızda yerel olarak birleştirilir; bu yüzden görsel asla harici bir sunucuya ulaşmaz."
      },
      {
        "q": "Yönlendirici parolamı içeren WiFi QR kodları oluşturmak güvenli mi?",
        "a": "Evet. Ağ adı ve parola yerel olarak birleştirilir ve doğrudan barkod desenine yazılır. Bunların hiçbiri internet üzerinden gönderilmez."
      },
      {
        "q": "Kullanıcı verilerini üçüncü taraf reklamverenlere ya da veri aracılarına satıyor musunuz?",
        "a": "Satılacak bir şey yok. Kimseye verilecek bir kullanıcı veritabanı, hesap profili ya da izleme kaydı yoktur."
      },
      {
        "q": "QR Generator Online'da çerez kullanıyor musunuz?",
        "a": "Yalnızca sitenin çalışması için gereken en düşük teknik türde. Üçüncü taraf davranışsal reklam çerezleri kullanılmaz."
      },
      {
        "q": "Gizlilik soruları için kiminle iletişime geçebilirim?",
        "a": "Veri koruma ekibi gizlilik ve uyum sorularını doğrudan support@qr-generator.online adresinden yanıtlar."
      }
    ],
    "bestPractices": "Burada hiçbir kaygı duymadan özgürce oluşturabilirsiniz — süreç baştan sona istemci tarafındadır ve herhangi bir üçüncü taraf sunucudan bağımsız kalır."
  },
  '/terms': {
    "sections": [
      {
        "title": "Adil kullanım ve ticari dağıtım koşulları",
        "paragraphs": [
          "QR Generator Online üzerinden oluşturulan statik QR kodlar, basılı ve dijital ortamlarda hem kişisel hem ticari amaçlarla serbestçe kullanılabilir.",
          "Kullanıcılar, kodlanan içeriğin geçerli yasal standartlara uymasını sağlamaktan sorumludur."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hizmet koşulları, ticari lisanslama ve kullanım çerçevesi",
      "paragraphs": [
        "QR Generator Online'ı kullanmak, aşağıda belirtilen Hizmet Koşulları, ticari lisans sözleşmesi ve kabul edilebilir kullanım politikasını kabul etmek anlamına gelir.",
        "Platform, ISO/IEC 18004 standardına uygun 2B barkodları istemci tarafında ve ücretsiz olarak üretir. Oluşturduğunuz her şey, ticari ve kişisel kullanım için tam, kısıtsız, telifsiz haklarla gelir; bu haklar size süresiz olarak verilir — daha sonra satın alınacak ayrı bir lisans gerekmez.",
        "Aşağıdaki bölümler fikri mülkiyeti, kabul edilebilir kullanımı, sorumluluğun sınırlandırılmasını ve ticari baskı üretimine ilişkin feragatnameyi kapsar. Büyük bir baskı işinden önce okumaya değer."
      ]
    },
    "comparisonTable": {
      "title": "Ticari lisans koşullarının özeti",
      "headers": [
        "Lisans kategorisi",
        "QR Generator Online'daki koşullar ve izinler",
        "Geleneksel ticari barkod hizmetleri"
      ],
      "rows": [
        [
          "Ticari kullanım hakları",
          "%100 kısıtsız, telifsiz ticari haklar",
          "Ücretli ticari lisans katmanı gerektirir (yılda 300 $ ve üzeri)"
        ],
        [
          "Telif / tarama ücretleri",
          "0,00 $ (sıfır telif veya tarama başına ücret)",
          "Tarama hacmi aylık sınırları aştığında fazla kullanım ücretleri"
        ],
        [
          "Fikri mülkiyet sahipliği",
          "Oluşturulan tüm QR eseri ve verilerin %100'üne sahipsiniz",
          "Platform hakları elinde tutar ya da mülkiyet yönlendirmeleri iddia eder"
        ],
        [
          "Baskı çoğaltma kapsamı",
          "Kısıtsız (ambalaj, kitaplar, billboardlar, televizyon)",
          "Baskı tirajı ya da katman sınırlarına göre kısıtlı"
        ],
        [
          "Hesap iptali riski",
          "Sıfır risk (statik kodlar kalıcı geçerliliğe sahiptir)",
          "Abonelik iptal edilirse kodlar devre dışı kalır"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Özel QR kod eserinizi oluşturun",
        "description": "Burada herhangi bir oluşturucuyla kodu oluşturun; stil ve logo dahil."
      },
      {
        "number": 2,
        "title": "Anında dünya çapında bir ticari lisans edinin",
        "description": "Oluşturulduğu anda, fiziksel ya da dijital herhangi bir ortamda kullanmak için kalıcı, telifsiz ve dünya çapında bir lisansa sahip olursunuz."
      },
      {
        "number": 3,
        "title": "Ticari ürünlerinize ve kampanyalarınıza yerleştirin",
        "description": "Ambalaja, bir televizyon reklamına, bir perakende standına ya da bir reklam kampanyasına koyun. Bunların hiçbiriyle ilgili bir lisans ücreti yoktur."
      }
    ],
    "features": [
      {
        "title": "Kalıcı telifsiz ticari lisans",
        "description": "Kodları ürünlerde, kitaplarda, ambalajlarda ve dijital medyada dünya çapında sürekli bir ücret olmadan kullanın."
      },
      {
        "title": "Oluşturulan varlıkların tam mülkiyeti",
        "description": "Barkod tasarımı ve içindeki özel eser yalnızca sizindir."
      },
      {
        "title": "Sıfır satıcı kilidi veya hizmete bağımlılık",
        "description": "Statik doğrudan kodlanmış kodlar bize bağlı değildir. Gelecekteki bir politika değişikliği, zaten bastığınız bir şeyi geriye dönük bozamaz."
      },
      {
        "title": "Şeffaf baskı öncesi kalite feragatnamesi",
        "description": "Baskı tirajından önce provaları test etmeye dair açık rehberlik; küçük yazının altında hiçbir şey gizli değil."
      }
    ],
    "sizingMatrix": {
      "title": "İzin verilen ticari kullanım durumları ve uygulamalar",
      "description": "QR Generator Online'da izin verilen ticari uygulamaların kapsamlı bir genel bakışı.",
      "headers": [
        "Ticari uygulama",
        "Lisans durumu",
        "İzin verilen kapsam",
        "Gerekli telif"
      ],
      "rows": [
        [
          "Perakende ürün ambalajı ve gıda etiketleri",
          "Süresiz izinli",
          "Sınırsız küresel birim dağıtımı",
          "0,00 $ (yok)"
        ],
        [
          "Ticari televizyon ve yayın reklamları",
          "Süresiz izinli",
          "Dünya çapında yayın ve yayın medyası",
          "0,00 $ (yok)"
        ],
        [
          "Kitaplar, dergiler ve basılı yayınlar",
          "Süresiz izinli",
          "Sınırsız küresel basılı dolaşım",
          "0,00 $ (yok)"
        ],
        [
          "Açık hava billboardları ve toplu taşıma reklamları",
          "Süresiz izinli",
          "Ulusal ve uluslararası açık hava kampanyaları",
          "0,00 $ (yok)"
        ],
        [
          "Kurumsal kırtasiye ve akıllı iş kartları",
          "Süresiz izinli",
          "Sınırsız çalışan dağıtımı",
          "0,00 $ (yok)"
        ],
        [
          "Yazılım, mobil uygulamalar ve web arayüzleri",
          "Süresiz izinli",
          "SaaS, web ve mobil uygulamalara gömülü",
          "0,00 $ (yok)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Tüketici malı üreticileri ve perakendeciler",
        "description": "Milyonlarca koliye ve şişeye yasal güvenceyle ve takip edilmesi gereken telif olmadan kalıcı vektör kodlar basın."
      },
      {
        "title": "Yayıncılar ve eğitim kitabı evleri",
        "description": "Kalıcı baskı hakları altında ders kitaplarına, romanlara ve çalışma kâğıtlarına taranabilir kodlar yerleştirin."
      },
      {
        "title": "Ulusal reklam ve medya ajansları",
        "description": "Üzerlerinde bir lisans riski olmadan TV reklamlarını, dergi sayfalarını ve billboard kampanyalarını yürütün."
      },
      {
        "title": "Konaklama franchise'ları ve restoran zincirleri",
        "description": "Yüzlerce lokasyonda dijital menü ve masa başı ödeme kodlarını standartlaştırın."
      },
      {
        "title": "Bağımsız yaratıcılar, sanatçılar ve yazarlar",
        "description": "Bütçe engeli olmadan sanat baskılarına, ürünlere ya da kendi yayınladığınız bir kitaba markalı bir kod ekleyin."
      }
    ],
    "troubleshooting": {
      "title": "Kabul edilebilir kullanım politikası ve baskı öncesi baskı feragatnamesi",
      "points": [
        "Zararlı içerik yok. Kodlar oltalama siteleri, kötü amaçlı yazılım, dolandırıcılık ya da yasa dışı materyallere bağlanamaz.",
        "Basmadan önce kanıtlayın. Büyük bir seri öncesinde basılı bir provayı test taramak sizin sorumluluğunuzdadır ve pahalı bir yeniden baskıdan kaçınmanın en iyi yoludur.",
        "Hedefi canlı tutun. Bir kodun işaret ettiği URL'nin çevrimiçi ve erişilebilir kalmasını sağlamaktan siz sorumlusunuz.",
        "Markalara saygı gösterin. Yalnızca kullanma hakkına sahip olduğunuz bir logoyu gömün.",
        "Hizmet \"olduğu gibi\" sunulur. ISO/IEC 18004'e bağlıyız, ancak üçüncü bir tarafın yazıcı kalibrasyonunu garanti edemeyiz; bu yüzden son provayı kontrol etmek size düşer."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online'da oluşturulan QR kodları ticari ürünlerde kullanabilir miyim?",
        "a": "Serbestçe ve dünya genelinde. Bunları ambalajlara, kitaplara, perakende standlarına ve dijital medyaya yerleştirmek için tam, kısıtsız ve telifsiz haklara sahipsiniz."
      },
      {
        "q": "İşim büyüdükçe telif ya da tarama başına ücret ödemem gerekir mi?",
        "a": "Bir kuruş bile değil. Her kod ücretsizdir; telif, tarama sınırı ya da hacminize göre artan bir ücret yoktur."
      },
      {
        "q": "Oluşturulan QR kodun fikri mülkiyetinin sahibi kimdir?",
        "a": "Siz — barkod ve içine gömülü herhangi bir logo ya da metin tamamen sizindir."
      },
      {
        "q": "Tasarım müşterilerim için QR kodlar oluşturup onlardan ücret alabilir miyim?",
        "a": "Elbette. Ajanslar, serbest çalışanlar ve danışmanlar ücretli müşteri işleri için kod oluşturmaya davetlidir."
      },
      {
        "q": "QR Generator Online gelecekte değişirse ne olur?",
        "a": "Daha önce indirdiğiniz her şey çalışmaya devam eder. Statik bir kod verilerini matrisin içinde tutar ve sunucularımıza bağımlı değildir — bu yüzden geleceğimiz basılı kodlarınızı etkilemez."
      },
      {
        "q": "Hangi içeriği kodlayabileceğime dair herhangi bir kısıtlama var mı?",
        "a": "Yalnızca bariz olanlar: kabul edilebilir kullanım politikasında belirtildiği gibi kötü amaçlı yazılım, oltalama, dolandırıcılık ya da yasa dışı materyal yok."
      },
      {
        "q": "Ticari baskı tirajları konusunda sorumluluk sınırlamanız nedir?",
        "a": "Yazılımlarda olduğu gibi, araçlar \"olduğu gibi\" sunulur. Büyük bir ticari siparişi onaylamadan önce basılı bir provayı tarayın — bu kontrol sizin güvenceniz."
      },
      {
        "q": "Yasal veya lisanslama ekibinize nasıl ulaşabilirim?",
        "a": "Yasal ve lisanslama soruları support@qr-generator.online adresine iletilir."
      }
    ],
    "bestPractices": "Büyük hacimli bir seriyi onaylamadan önce basılı bir provayı tarayın ve hedef URL'lerinizi canlı tutun — bir kod, işaret ettiği sayfa kadar değerlidir."
  },
  '/blog': {
    "sections": [
      {
        "title": "İşletme büyümesi için pratik QR kod rehberleri",
        "paragraphs": [
          "Restoran menüsü optimizasyonu, minimum baskı boyutu formülleri, emlak arsa tabelasından potansiyel müşteri üretimi ve konaklamada misafir WiFi kurulumlarını kapsayan ayrıntılı eğitimler kütüphanemize göz atın.",
          "Modern markaların, çevrimdışı etkileşimi çevrimiçine taşımak için QR teknolojisinden nasıl yararlandığını öğrenin."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Modern QR teknolojisinin kapsamlı ansiklopedisi ve pratik el kitabı",
      "paragraphs": [
        "Burası QR Generator Online bilgi merkezi — barkod mühendisliği, mobil QR pazarlaması, ticari baskı standartları ve kişi paylaşımı hakkında net yanıtlar alabileceğiniz yer. QR kodlar ISO/IEC 18004 standardı üzerinde çalışır ve yirmi küsur yılda montaj hattında otomobil parçalarını izlemekten, basılı bir sayfa ile bulut hizmeti, ödeme ya da mobil site arasındaki köprüye dönüşmüştür.",
        "Perakende ambalajını başlatan bir marka yöneticisi, masa siparişini düzenleyen bir restoran sahibi, kenar payı boşluğuyla uğraşan bir baskı öncesi tasarımcı ya da bir URI şemasını bağlayan bir mühendis olun — buradaki rehberler size pazarlama parıltısı değil, gerçek formülleri, protokol ayrıntılarını ve iş akışını verir.",
        "Aşağıdaki derinlemesine rehberler boyut fiziğini, hata düzeltme matematiğini, gizlilik yönünü ve dönüşüm taktiklerini kapsar."
      ]
    },
    "comparisonTable": {
      "title": "Temel QR kod rehberleri ve sektör uygulamalarına genel bakış",
      "headers": [
        "Sektör / alan",
        "Temel odak alanı",
        "Temel teknik standartlar",
        "Birincil ticari fayda"
      ],
      "rows": [
        [
          "Konaklama ve yemek",
          "Temassız dijital PDF menüler ve masa siparişi",
          "HTTPS, evrensel bağlantılar, duyarlı görünüm alanları",
          "Sıfır baskı maliyeti, %25 daha yüksek masa devri"
        ],
        [
          "Ticari baskı üretimi",
          "Boyut fiziği, DPI ölçütleri ve kontrast oranları",
          "ISO/IEC 18004, WCAG 2.1 kontrast (> 4,5:1), SVG/EPS",
          "Tüm alt tabakalarda %100 ilk geçiş tarama güvenilirliği"
        ],
        [
          "Kurumsal ve networking",
          "vCard 3.0 dijital iletişim kartvizitleri",
          "RFC 2426, RFC 6350, UTF-8 kodlama",
          "%88 daha yüksek iletişim saklama, tek dokunuşla adres kaydı"
        ],
        [
          "Emlak pazarlaması",
          "Arsa tabelaları, sanal 3B turlar ve ilan sorguları",
          "Matterport 3B bağlantıları, UTM izleme, yüksek çözünürlüklü baskı",
          "Arabayla geçen alıcılardan 7/24 potansiyel müşteri üretimi"
        ],
        [
          "Misafir WiFi yönetimi",
          "Sürtünmesiz WPA3/WPA2 ağ erişimi",
          "WIFI: URI şeması, IEEE 802.11ax/ac standartları",
          "Sıfır yanlış yazılan parola, personel destek yükü azalır"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Kullanım durumunuz için en uygun protokolü seçin",
        "description": "Önce işin neye ihtiyaç duyduğunu belirleyin — statik bir web bağlantısı (HTTPS), bir iletişim kartı (vCard), anlık WiFi (WIFI:) ya da doğrudan bir mesaj (WhatsApp/SMS). Protokol, ondan sonraki her şeyi belirler."
      },
      {
        "number": 2,
        "title": "Matematiksel boyut ve kontrast kurallarını uygulayın",
        "description": "İnsanların hangi mesafeden tarayacağına göre kodun boyutunu S = D / 10 ile belirleyin ve kontrastı 4,5:1'in üzerinde tutun."
      },
      {
        "number": 3,
        "title": "Kayıpsız vektör dosyaları dışa aktarın ve fiziksel provaları test edin",
        "description": "Basılacak her şey için vektör SVG dışa aktarın, ardından sevk etmeden önce birkaç iPhone ve Android'de fiziksel bir prova tarayın."
      }
    ],
    "features": [
      {
        "title": "Derinlemesine teknik protokol analizi",
        "description": "2B barkod üretiminin arkasındaki RFC ve ISO ayrıntıları ve bir telefon kamerasının bunları nasıl ayrıştırdığı — üstünkörü değil, açıklanmış olarak."
      },
      {
        "title": "Uygulanabilir baskı üretim formülleri",
        "description": "Bir baskı işinin gerçekten ihtiyaç duyduğu gerçek boyut denklemleri, hata düzeltme ölçütleri ve alt tabaka tavsiyeleri."
      },
      {
        "title": "Sektörler arası ROI vaka çalışmaları",
        "description": "Konaklama, ticari baskı, kurumsal networking, emlak ve sağlık hizmetleri için pratik el kitapları."
      },
      {
        "title": "%100 ücretsiz ve açık erişimli bilgi",
        "description": "Ücretsiz eğitimler, vektör şablonları ve uzman rehberleri — ödeme duvarı yok, kayıt yok."
      }
    ],
    "sizingMatrix": {
      "title": "Ana optik boyut ve görüntüleme mesafesi kopya kağıdı",
      "description": "Tüm fiziksel ortamlarda minimum QR kod boyutlarını hesaplamak için hızlı başvuru rehberi.",
      "headers": [
        "Fiziksel ortam",
        "Tipik tarama mesafesi",
        "Minimum genişlik (S)",
        "Önerilen hata düzeltme"
      ],
      "rows": [
        [
          "Kartvizitler ve boyunluklar",
          "15 cm - 30 cm (6\" - 12\")",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Seviye Q (%25) veya Seviye H (%30)"
        ],
        [
          "Masa standları ve bardak altlıkları",
          "30 cm - 50 cm (12\" - 20\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Seviye M (%15) veya Seviye H (%30)"
        ],
        [
          "Ürün ambalajı ve etiketler",
          "20 cm - 40 cm (8\" - 16\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Logo gömülüyse Seviye H (%30)"
        ],
        [
          "Broşürler, afişler ve dergiler",
          "50 cm - 150 cm (20\" - 60\")",
          "60 mm - 150 mm (2,4\" - 6,0\")",
          "Seviye M (%15)"
        ],
        [
          "Araç filoları ve kamyonetler",
          "3,0 m - 6,0 m (10 ft - 20 ft)",
          "300 mm x 300 mm (12\" x 12\")",
          "Döküm vinil üzerinde Seviye H (%30)"
        ],
        [
          "Otoyol billboardları",
          "15,0 m - 30,0 m (50 ft - 100 ft)",
          "1500 mm - 3000 mm (5 ft - 10 ft)",
          "Seviye L (%7) veya Seviye M (%15)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Kurumsal omnikanal pazarlama ekipleri",
        "description": "Küresel pazarlama bölümlerinde QR tasarımını, kampanya UTM izlemesini ve baskı öncesi vektör çıktısını standartlaştırın."
      },
      {
        "title": "Ticari matbaacılar ve baskı öncesi evleri",
        "description": "Bir pres çalışmasından önce müşteri görsellerini ISO/IEC 18004, 300+ DPI eşiği ve kontrast sınırlarına karşı kontrol edin."
      },
      {
        "title": "Konaklama işletmecileri ve restoran zincirleri",
        "description": "Personel yükünü azaltan ve masa devrini hızlandıran temassız menü ve masa başı sipariş uygulayın."
      },
      {
        "title": "Emlak komisyoncuları ve mülk yöneticileri",
        "description": "Bir arsa tabelasını ya da broşürü, ölçülebilir bir 7/24 potansiyel müşteri kaynağına ve 3B tur merkezine dönüştürün."
      },
      {
        "title": "Etkinlik organizatörleri ve fuar koordinatörleri",
        "description": "Girişleri hızlandırın, oturumları katılımcı takvimlerine ekleyin, dijital kartları değiştirin ve sponsor trafiğini atfedin."
      }
    ],
    "troubleshooting": {
      "title": "QR kod üretiminde en yaygın 5 hata",
      "points": [
        "Zayıf kontrast. Açık kâğıt üzerindeki soluk modüller kameraya kaybettirir. 4,5:1 veya daha iyisini tutun.",
        "Kırpılmış sessiz bölge. Kenar boşluğunu çok yakından kırparsanız tarayıcı kodun sınırını bulamaz.",
        "72 DPI bitmap. Düşük çözünürlüklü bir web yakalaması baskıda modül kenarlarını bulanıklaştırır. Vektör SVG ya da 300+ DPI raster sağlayın.",
        "Gereksiz uzun bir URL. 250 karakterlik bir bağlantı, küçük basıldığında lekelenen mikroskobik noktalar oluşturur. Kısaltın.",
        "Parlama. Parlak bir kaplama, ışık huzmelerini lensin içine atar. Mat ya da satene tercih edin."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online bilgi merkezinin amacı nedir?",
        "a": "İşletmelere, tasarımcılara ve geliştiricilere gerçekten taranan QR kodları yayınlamak için gereken teknik rehberleri, formülleri ve vaka çalışmalarını sunmak için var — aksi takdirde bir düzine kaynaktan bir araya getirmeniz gereken derinliği."
      },
      {
        "q": "Bu blogdaki eğitimler ve rehberler tamamen ücretsiz mi?",
        "a": "Buradaki her rehber, ölçüt ve vektör aracı ücretsiz ve açıktır — ödeme duvarı yok, hesap yok."
      },
      {
        "q": "QR teknolojisi rehberlerinizi ne sıklıkla güncelliyorsunuz?",
        "a": "iOS ve Android kamera çözümleyicileri değiştikçe, ISO standartları ilerledikçe ve mobil pazarlama uygulamaları değiştikçe makaleler revize edilir."
      },
      {
        "q": "Belirli bir QR konusu hakkında özel bir rehber ya da eğitim isteyebilir miyim?",
        "a": "Konuyu İletişim sayfası üzerinden gönderin; editör ekibi bakacaktır."
      },
      {
        "q": "Rehberleriniz hem statik hem de dinamik QR kod mimarilerini kapsıyor mu?",
        "a": "Evet — sıfır bağımlılıklı statik bir kod ile dinamik bir yönlendirme arasındaki ödünleşimlerin tam bir dökümü dahil."
      },
      {
        "q": "Baskı projem için belirli boyut rehberlerini nerede bulabilirim?",
        "a": "\"QR Kodları Yazdırma Tam Rehberi\", tam olarak bunun için boyut tablolarını, alt tabaka tavsiyelerini ve DPI formüllerini içerir."
      },
      {
        "q": "QR kodlarımın mobil gizlilik düzenlemelerine uymasını nasıl sağlarım?",
        "a": "Rehberler, her şeyi tarayıcı belleğinde işleyen istemci tarafı statik üretime dayanır — ziyaretçi IP'leri kaydedilmez, analitik izlenmez; bu yüzden bir gizlilik düzenlemesinin işaretleyecek çok az şeyi vardır."
      },
      {
        "q": "Bu makaleleri ve kaynakları ekibimle paylaşabilir miyim?",
        "a": "Lütfen paylaşın — meslektaşlar, pazarlama ekipleri, ajanslar ve baskı öncesi bölümleri tam olarak bunların kime yönelik olduğu kişilerdir."
      }
    ],
    "bestPractices": "Boyut formülleri, kontrast standartları ve baskı öncesi kontrol listesi için bu merkezi yer imlerinize ekleyin — ticari bir baskı işi çıkmadan önce kontrol etmeye değer olan şeyler bunlardır."
  },
  '/blog/qr-codes-for-restaurants': {
    "sections": [
      {
        "title": "Temassız dijital menülere geçiş",
        "paragraphs": [
          "Modern konukseverlikte hız ve servis doğruluğu vazgeçilmezdir. Masa kartlarındaki dijital QR menüler, misafirlerin oturdukları anda güncel yiyecek ve içecek seçeneklerini görmelerini sağlar.",
          "Fiyatlar değiştiğinde restoranlar yeniden basım giderlerinden tasarruf eder; mevsimsel özel yemekleri ve yüksek kâr marjlı yemekleri öne çıkarır."
        ]
      },
      {
        "title": "Restoranınız için QR kodlu bir menü nasıl kurulur",
        "paragraphs": [
          "Başlamak beş dakikadan az sürer. Mevcut PDF menünüzü yükleyin ya da çevrimiçi sipariş sayfanızı bağlayın, ardından ortasında restoran logonuzun bulunduğu markalı bir QR kod oluşturun. Dayanıklı laminasyonlu masa kartlarına, cam çıkartmalarına ya da fiş altlarına basın.",
          "Araştırmalar, dijital QR menü kullanan restoranların ortalama sipariş değerinde yaklaşık %15 artış gördüğünü gösteriyor; çünkü misafirler sözlü özel yemeklere bağımlı kalmak yerine tüm menüyü kendi hızlarında inceliyor. Ürünleri, fiyatları ya da mevsimsel teklifleri güncellemek anında yapılır — yeniden basım gerekmez. En iyi sonuçlar için her QR kodu \"Bugünkü tüm menü için tarayın\" gibi kısa bir harekete geçirici mesajla eşleştirin."
        ]
      }
    ],
    "technicalOverview": {
      "title": "QR kod menüleri ve temassız yemek operasyonlarına kapsamlı rehber",
      "paragraphs": [
        "QR menü bir salgın dönemi geçici önlemi olarak başladı ve bir operasyon standardı olarak kaldı. Düz HTTPS üzerinden çalışır: kod, misafirin telefon tarayıcısını, bulutta barındırılan bir PDF menüye, bir sipariş portalına ya da bir ödeme sayfasına yönlendirir; önce bir uygulama indirmeye gerek yoktur.",
        "Onu yerinde tutan şey ekonomidir. Dijital bir menü, yeniden basımın yinelenen maliyetini ortadan kaldırır — genellikle mekân başına yılda 1.500 ila 4.000 dolar — bir fiyatı ya da özel teklifi saniyeler içinde değiştirmenizi sağlar, sipariş hatalarını azaltır ve misafirler yemeği görüp bir ek satış istemi aldıklarında ortalama hesabı %12 ila %22 yükseltir.",
        "Bunların hiçbiri fiziksel tarafı doğru yapılmadan gerçekleşmez. Yerleşim, masa kartının dayanıklılığı, aydınlatma ve mobil uyumlu bir sayfa, her yaştan bir misafirin tek seferde mi tarayacağını yoksa vazgeçeceğini belirler."
      ]
    },
    "comparisonTable": {
      "title": "Dijital QR kod menü ile geleneksel laminasyonlu kâğıt menünün karşılaştırması",
      "headers": [
        "Operasyonel etken",
        "Dijital QR kod menü",
        "Geleneksel laminasyonlu kâğıt menü"
      ],
      "rows": [
        [
          "Yıllık yeniden basım maliyeti",
          "0 $ (çevrimiçi anında güncellenir)",
          "Mekân başına yıllık 1.500 - 4.000 $ veya daha fazla"
        ],
        [
          "Menü güncelleme hızı",
          "Gerçek zamanlı (tükenen ürünleri saniyeler içinde kaldırın)",
          "Yeniden tasarım ve yeniden basım için günler ya da haftalar"
        ],
        [
          "Masa devir hızı",
          "Oturma başına 15 - 25 dakika daha hızlı",
          "Fiziksel menüleri ve hesabı beklemek nedeniyle daha yavaş"
        ],
        [
          "Ortalama sipariş değeri",
          "%12 - %22 daha yüksek (görsel yemek fotoğrafçılığı)",
          "Sınırlı ek satış kapasitesiyle statik metin"
        ],
        [
          "Hijyen ve temizlik",
          "Misafirin kendi cihazında %100 temassız",
          "Her misafir kullanımından sonra dezenfekte gerektirir"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Mobil uyumlu menünüzü çevrimiçi barındırın",
        "description": "Menüyü hafif bir duyarlı sayfa ya da 3 MB'ın altında sıkıştırılmış bir PDF olarak sitenizde yayınlayın."
      },
      {
        "number": 2,
        "title": "H seviyesi hata düzeltmeyle markalı QR kod oluşturun",
        "description": "Menü URL'sini oluşturucuya yapıştırın, renklerinizi uygulayın, amblemi H seviyesinde ortaya koyun ve vektör SVG dışa aktarın."
      },
      {
        "number": 3,
        "title": "Dayanıklı akrilik, ahşap ya da laminasyonlu kartona basın",
        "description": "Masa üstü ekranı en az 40 mm x 40 mm yapın ve tavan ışıklarının kamaştırmaması için yüzeyi mat tutun."
      }
    ],
    "features": [
      {
        "title": "Anlık gerçek zamanlı menü ve fiyat güncellemeleri",
        "description": "Bir fiyatı değiştirin, bir teklif ekleyin ya da tükenmiş bir yemeği çevrimiçi kaldırın — basılı kodun asla değişmesi gerekmez."
      },
      {
        "title": "Hijyenik ve temassız misafir deneyimi",
        "description": "Misafirler menüyü kendi telefonlarında okur; masalar arasında paylaşılan bir şey yoktur."
      },
      {
        "title": "Çok dilli dijital menü desteği",
        "description": "Uluslararası misafirleri, tarayıcı diline göre otomatik çeviri yapan bir menüye yönlendirin."
      },
      {
        "title": "Sıfır ücretle kalıcı statik bağlantılar",
        "description": "Sonsuza kadar geçerli kalan, sınırsız tarama ve ücretsiz bir statik menü kodu."
      }
    ],
    "sizingMatrix": {
      "title": "Restoran masası QR yerleşimi ve boyut spesifikasyonları",
      "description": "Yemek yiyenlerin masalarında rahatça otururken menü kodlarınızı kolayca taramasını sağlayın.",
      "headers": [
        "Yerleşim konumu",
        "Tarama mesafesi",
        "Önerilen baskı boyutu",
        "Önerilen malzeme"
      ],
      "rows": [
        [
          "Yemek masası kartları ve blokları",
          "25 cm - 45 cm (10\" - 18\")",
          "40 mm x 40 mm (1,6\" x 1,6\")",
          "Lazerle oyulmuş sert ahşap / akrilik stand"
        ],
        [
          "İçecek altlıkları ve bar üstleri",
          "20 cm - 35 cm (8\" - 14\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Emici ağır altlık tahtası"
        ],
        [
          "Karşılama standı ve giriş ekranları",
          "50 cm - 100 cm (20\" - 40\")",
          "80 mm x 80 mm (3,2\" x 3,2\")",
          "Çerçeveli tezgâh üstü ekran / destek kartı"
        ],
        [
          "Kapalıyken göz atma için vitrin çıkartmaları",
          "50 cm - 120 cm (20\" - 48\")",
          "100 mm x 100 mm (4,0\" x 4,0\")",
          "Hava koşullarına dayanıklı mat vinil vitrin çıkartması"
        ],
        [
          "Paket teslimat çantası kâğıtları ve çıkartmalar",
          "20 cm - 35 cm (8\" - 14\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Mat yapışkanlı etiket çıkartması"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Tam hizmetli restoranlar",
        "description": "Her masada çerçeveli bir stand, misafirlerin oturduklarında başlangıçları ve kokteyller üzerine göz atmasını sağlar."
      },
      {
        "title": "Hızlı yemek kafeleri ve fast-food restoranları",
        "description": "Kuyruğu kısaltan bir afiş kodu, insanların sırada beklerken menüyü incelemesine olanak tanır; böylece kasada sipariş daha hızlı olur."
      },
      {
        "title": "Zanaat birahaneleri ve bira barları menüleri",
        "description": "Canlı fıçı listesine bağlı bir bardak altlığı kodu, dönüşümlü mevsimlik taslak menüyü dakikasına kadar doğru tutar."
      },
      {
        "title": "Otel odası servisi ve oda içinde yemek",
        "description": "Yatak başı bir kart, yıpranmış oda içi klasörünün yerini 7/24 oda servisi siparişine bırakır."
      },
      {
        "title": "Gece kulüpleri, lounge'lar ve havuz barları",
        "description": "Suya dayanıklı, lazerle oyulmuş bir akrilik işaretçi, havuz kenarında şişe servisi ve kokteyl siparişlerini yönetir."
      }
    ],
    "troubleshooting": {
      "title": "Restoran QR menü deneyimini bozan en büyük 5 hata",
      "points": [
        "Ağır bir PDF. 25 MB'lık bir dosya mobil veride yarım dakika sürer. 2 MB'ın altına sıkıştırın ya da bunun yerine hızlı bir HTML sayfası bağlayın.",
        "Parlama. Parlak akrilik bir stand, tavan ışıklarını lense yansıtır. Yansıma önleyici mat akrilik ya da doğal ahşap kullanın.",
        "Hücresel ölü bölge. Bodrumlar ve beton mobil veriyi keser. Menü kodunun yanına bir WiFi kodu koyun.",
        "Zorunlu uygulama. Bir yemek yiyenin menüyü okumak için uygulama indirmesini asla zorunlu kılmayın. Tarayıcıda açılan standart bir web bağlantısı kullanın.",
        "Yalnızca masaüstü düzeni. Kimsenin parmaklarıyla yakınlaştırıp uzaklaştırması gerekmemeli. Mobilde menü yazı tipini 16 px ya da daha büyük yapın."
      ]
    },
    "faqs": [
      {
        "q": "Restoran menüm için nasıl ücretsiz bir QR kod oluştururum?",
        "a": "Menüyü çevrimiçi yayınlayın — bir PDF ya da bir web sayfası — herkese açık URL'yi kopyalayın, URL oluşturucuya yapıştırın, logonuzu ve renklerinizi ekleyin ve SVG ya da yüksek çözünürlüklü PNG'yi indirin."
      },
      {
        "q": "Bir QR kod, restoranlar için dijital bir menüyü yürütmenin iyi bir yolu mu?",
        "a": "En basit yol. Menüyü bir web sayfası olarak barındırın, bir QR kodu ona yönlendirin ve kodu masaya koyun — tarandığında dijital menünüz yemek yiyenin kendi telefonunda açılır; uygulama yok, dağıtılacak bir şey yok. Dinamik kodlar, hiçbir şeyi yeniden basmadan dijital menüyü güncellemenize olanak tanır."
      },
      {
        "q": "QR kodu yeniden basmadan menü öğelerimi ya da fiyatlarımı değiştirebilir miyim?",
        "a": "URL aynı kaldığı sürece — yourrestaurant.com/menu — arkasındaki sayfayı düzenlemek, zaten basılmış her kodun gösterdiği şeyi günceller. Kod asla değişmez."
      },
      {
        "q": "Restoran masası QR kod standları için en iyi malzeme hangisi?",
        "a": "Mat akrilik standlar, lazerle oyulmuş ahşap bloklar ya da 350+ GSM laminasyonlu karton — döküntülere dayanırlar, parlamaya direnirler ve uzun ömürlüdürler."
      },
      {
        "q": "Yaşlı yemek yiyenler QR kod menüleri taramakta zorlanır mı?",
        "a": "Modern telefonlar (iOS 11+, Android 9+) kodu uygulama olmadan doğrudan kameradan okur. \"Menüyü görmek için kameranızı buraya tutun\" gibi kısa bir satır herkes için işleri kolaylaştırır."
      },
      {
        "q": "Bir PDF dosyasına mı yoksa duyarlı bir web sayfasına mı bağlanmalıyım?",
        "a": "Duyarlı bir web sayfası daha iyi bir tercihtir: daha hızlı yüklenir ve ekrana uyum sağlar. PDF seçerseniz, 2 MB'ın altına sıkıştırın ve dikey olarak biçimlendirin."
      },
      {
        "q": "QR Generator Online'da oluşturulan restoran QR kodları sona erer mi?",
        "a": "Sınırsız tarama ve tekrarlayan bir ücret olmadan ömür boyu geçerli kalırlar."
      },
      {
        "q": "Restoranımızın logosunu menü QR kodunun ortasına koyabilir miyim?",
        "a": "Elbette. H seviyesi, hata kurtarma için kodun yaklaşık %30'unu saklar; bu, ortadaki logonuz ya da amblemiz için fazlasıyla yeterlidir."
      },
      {
        "q": "QR menüler misafir başına ortalama harcamayı nasıl artırır?",
        "a": "Dijital bir menü gerçek yemek fotoğraflarını gösterebilir, bir şarap ya da kokteyl eşleşmesi önerebilir ve tatlıyı teşvik edebilir — ortalama hesabı %12 ila %22 yukarı iten de budur."
      }
    ],
    "bestPractices": "Menü sayfasının iki saniyenin altında yüklenmesini sağlayın, mat ve yansıma önleyici masa üstü malzemeleri kullanın ve mobil sinyalin zayıf olduğu her yere bir misafir WiFi kodu koyun."
  },
  '/blog/printing-qr-codes-guide': {
    "sections": [
      {
        "title": "QR kod baskı boyutunun hesaplanması",
        "paragraphs": [
          "Baskı boyutu için basit bir formül, 10:1 mesafe-boyut oranıdır. Örneğin, 1 metre uzaktan taranacak bir poster, en az 10 cm genişliğinde bir QR kod gerektirir.",
          "Her zaman 4 modüllük sessiz bölge kenar boşluğunu koruyun ve kusursuz ofset ve dijital pres çıktısı için vektör SVG olarak dışa aktarın."
        ]
      },
      {
        "title": "Renk kontrastı, hata düzeltme ve biçim önerileri",
        "paragraphs": [
          "QR kodun ön planı ile arka planı arasında her zaman en az 4:1 kontrast oranı tutun. Açık QR desenlerini soluk zeminlere basmaktan kaçının — düşük kontrast, parlak baskı ortamlarında tarama hatasının başlıca nedenidir. Logo gömerken güvenilir tarama için H seviyesi hata düzeltme (%30 veri fazlalığı) kullanın.",
          "Ticari ofset baskı için matbaanıza her zaman vektör SVG ya da EPS biçiminde dosyalar sağlayın. Raster PNG ya da JPEG görseller, özgün çözünürlüklerinin ötesine büyütüldüğünde pikselleşir ve tarayıcıları yanıltan bulanık modül kenarlarına yol açar. SVG kabul edilmiyorsa en azından 300 DPI'da 2048×2048 piksel bir PNG dışa aktarın. Büyük baskı işlerini onaylamadan önce her zaman fiziksel bir test baskısı isteyin ve tarama testi yapın."
        ]
      }
    ],
    "technicalOverview": {
      "title": "QR kod basımına ilişkin nihai mühendislik rehberi (baskı öncesi, boyut ve alt tabakalar)",
      "paragraphs": [
        "Bir QR kodu iyi basmak, taramanın arkasındaki fiziği anlamak demektir: optik çözünürlük, baskı öncesi standartlar, mürekkep nokta kazancı, bir yüzeyin ışığı nasıl yansıttığı ve bir telefon merceğinin geometrisi. Çözünürlük, sessiz bölge, kontrast ya da yüzey işlemi yanlış belirtilirse, ekranda anında taranan bir kod baskıda tamamen başarısız olabilir.",
        "ISO/IEC 18004 uyarınca kamera, bir kodu zamanlama ve bulucu desenleri arasındaki uzamsal ilişkiyi okuyarak çözer. Bunu bozan her şey — 4 modüllük sessiz bölgeye taşan mürekkep, yüksek parlaklıklı bir laminasyondan gelen parlama, düşük DPI kaynaktan gelen pikselleşme — Reed-Solomon çözümünü bozar.",
        "Bu rehber baskı öncesi teknisyenlere, tasarımcılara, ambalaj mühendislerine ve matbaacılara, her seride %100 ilk geçiş tarama güvenilirliğine ulaşmak için formülleri, malzeme özelliklerini ve kalite kontrol kontrol listesini verir."
      ]
    },
    "comparisonTable": {
      "title": "QR kod üretimi için ticari baskı dosya biçimleri",
      "headers": [
        "Dosya biçimi",
        "Çözünürlük türü",
        "Baskı öncesi uyumluluğu",
        "Önerilen baskı uygulamaları"
      ],
      "rows": [
        [
          "Vektör SVG / EPS",
          "Çözünürlükten bağımsız (vektör yolları)",
          "Tüm ticari RIP motorlarında %100 kayıpsız",
          "Billboardlar, ambalaj, araç çıkartmaları, kırtasiye"
        ],
        [
          "Yüksek çözünürlüklü PNG (300+ DPI)",
          "Raster bitmap (kayıpsız 2048x2048+ px)",
          "Dijital presler ve kısa seriler için standart",
          "Broşürler, menüler, doğrudan posta, dergiler"
        ],
        [
          "PDF / vektör PDF",
          "Kapsüllenmiş vektör yolları",
          "Evrensel baskı öncesi ve montaj standardı",
          "Ticari kitaplar, yıllık raporlar, ambalaj kalıpları"
        ],
        [
          "Kayıplı JPEG (kaçının)",
          "Sıkıştırılmış raster (kayıplı artefaktlar)",
          "Ticari baskı için uygun değil (kenar halkalanması)",
          "Yalnızca web/ekran görüntüleme (asla baskı için değil)"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "S = D / 10 formülünü kullanarak fiziksel boyutları hesaplayın",
        "description": "İnsanların tarama yaptığı mesafeyi (D) alın, ona bölün; bu sizin minimum genişliğiniz ve yüksekliğiniz (S) olur."
      },
      {
        "number": 2,
        "title": "WCAG kontrast oranını (> 4,5:1) ve sessiz bölgeyi doğrulayın",
        "description": "Açık bir zemin üzerinde koyu modüller olduğunu doğrulayın ve her kenarda tam 4 modüllük boş kenarlığı koruyun."
      },
      {
        "number": 3,
        "title": "Vektör SVG dışa aktarın ve fiziksel prova testi yapın",
        "description": "Vektör SVG'yi dışa aktarın, InDesign ya da Illustrator'a yerleştirin ve onaydan önce birkaç telefonda basılı pres provasını tarayın."
      }
    ],
    "features": [
      {
        "title": "Matematiksel 10:1 tarama mesafesi oranı",
        "description": "Bir posta pulundan 50 metrelik bir otoyol panosuna kadar her ortam için tam boyutu hesaplayın."
      },
      {
        "title": "ISO/IEC 18004 baskı öncesi uyumu",
        "description": "Modül zamanlaması, hizalama desenleri ve Reed-Solomon fazlalığı konusunda dosyalarınızı doğru hazırlayın."
      },
      {
        "title": "Alt tabaka ve kaplama uyumluluk rehberi",
        "description": "Presde mürekkep, kâğıt emilimi, nokta kazancı ve mat ile parlak yüzeyin gerçekte nasıl etkileştiğini anlayın."
      },
      {
        "title": "Kayıpsız vektör SVG ve EPS doğrudan indirmeler",
        "description": "Ticari baskı öncesi ve plaka yapımı için üretime hazır vektör dosyaları."
      }
    ],
    "sizingMatrix": {
      "title": "Ana baskı boyutu ve mesafe referans tablosu",
      "description": "Fiziksel baskı boyutlarını belirlemek için standart optik formül $S = D / 10$'u uygulayın.",
      "headers": [
        "Fiziksel yerleşim",
        "Tarama mesafesi (D)",
        "Minimum genişlik (S)",
        "Önerilen dosya biçimi"
      ],
      "rows": [
        [
          "Kartvizitler ve isim etiketleri",
          "15 cm - 30 cm (6\" - 12\")",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Vektör SVG / EPS"
        ],
        [
          "Masa standları ve bardak altlıkları",
          "30 cm - 50 cm (12\" - 20\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Vektör SVG / 300 DPI PNG"
        ],
        [
          "Ürün ambalajı ve kutular",
          "20 cm - 40 cm (8\" - 16\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Vektör SVG / PDF"
        ],
        [
          "Broşürler, katlanır broşürler ve dergiler",
          "50 cm - 100 cm (20\" - 40\")",
          "60 mm x 60 mm (2,4\" x 2,4\")",
          "Vektör SVG / 300 DPI PNG"
        ],
        [
          "Fuar afişleri ve posterleri",
          "1,5 m - 3,0 m (5 ft - 10 ft)",
          "200 mm x 200 mm (8,0\" x 8,0\")",
          "Vektör SVG"
        ],
        [
          "Araç çıkartmaları ve filo grafikleri",
          "3,0 m - 6,0 m (10 ft - 20 ft)",
          "350 mm x 350 mm (14\" x 14\")",
          "Vektör SVG / döküm vinil"
        ],
        [
          "Otoyol billboardları ve toplu taşıma reklamları",
          "15,0 m - 30,0 m (50 ft - 100 ft)",
          "1500 mm - 3000 mm (5 ft - 10 ft)",
          "Vektör SVG / büyük format EPS"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Ticari ambalaj ve oluklu kutular",
        "description": "Mürekkep emilimi ve pres nokta kazancı hesaba katılarak bir ambalaj kalıp çizimine keskin bir vektör kod yerleştirin."
      },
      {
        "title": "Ulusal dergi ve doğrudan posta baskı öncesi",
        "description": "Dergi yayıncılarının sizden beklediği 300+ DPI ve CMYK ayrım çıtasını geçin."
      },
      {
        "title": "Açık hava reklamcılığı ve otoyol billboardları",
        "description": "Modül geometrisini keskin tutarak bir vektör kodu billboard oranlarına ölçekleyin."
      },
      {
        "title": "Lüks kartvizitler ve folyo baskı",
        "description": "400+ GSM kâğıt üzerinde folyo baskı, kabartma ve seçici UV için ince vektör yolları üretin."
      },
      {
        "title": "Endüstriyel makine varlık etiketleri ve metal plakalar",
        "description": "Anodize alüminyum ve paslanmaz çelik plakalara lazerle gravür için hassas vektör sanatı üretin."
      }
    ],
    "troubleshooting": {
      "title": "Basılı QR kodları bozan 6 ölümcül baskı öncesi hatası",
      "points": [
        "Kırpılmış sessiz bölge. Modül kenarına kadar kırparsanız kamera kenarı kaybeder. Tam 4 modüllük kenar boşluğunu bırakın.",
        "Kayıplı bir JPEG. Sıkıştırma modül köşelerini bulanıklaştırır. Vektör SVG ya da sıkıştırılmamış bir PNG kullanın.",
        "Zayıf kontrast. Pastel renkler, beyaz üzerine sarı ya da açık gri ikili dönüşümde başarısız olur. 4,5:1 tutun.",
        "Parlama. Yüksek parlaklıklı bir kaplama bir spot ışığı altında parlar. Mat ya da ipeksi olsun.",
        "Yok sayılan nokta kazancı. Mürekkep, kaplanmamış kâğıt ve gazete kâğıdında yayılır ve modüller arasındaki boşlukları kapatır. Gözenekli malzemelerde kodu %15-20 büyütün.",
        "Ters renkler. Siyah üzerine beyaz, eski tarayıcılarda başarısız olur. Modülleri koyu tutun."
      ]
    },
    "faqs": [
      {
        "q": "Bir QR kod, hâlâ taranabilirken minimum ne kadar küçük basılabilir?",
        "a": "15-20 cm'den okunan kısa bir URL ya da iletişim kartı için 20 mm x 20 mm (0,8\" x 0,8\") alt sınırdır. Ambalaj ve kartvizitlerde 25 mm x 25 mm (1,0\" x 1,0\") güvenli minimum olarak düşünün."
      },
      {
        "q": "Ticari baskı için vektör SVG neden PNG'den üstündür?",
        "a": "SVG kodu piksellerle değil geometriyle tanımlar; bu yüzden keskinlik kaybetmeden herhangi bir billboard ya da ambalaj boyutuna ölçeklenir ve InDesign ile Illustrator'a temiz biçimde aktarılır."
      },
      {
        "q": "Sessiz bölge nedir ve neden zorunludur?",
        "a": "Kodun dört kenarının tamamında — en az 4 modül genişliğinde — boş kenarlıktır. Kameranın barkodun nerede bittiğini ve çevredeki sanatın nerede başladığını ayırt edebilmesi için bu boş kenar payına ihtiyacı vardır."
      },
      {
        "q": "Hata düzeltme seviyesi baskı dayanıklılığını nasıl etkiler?",
        "a": "H seviyesi %30 fazlalık içerir; bu yüzden yüzeyin %30'una kadarı çizilse, yırtılsa, kirlense ya da ortadaki bir logo ile kapatılsa bile kod taranmaya devam eder."
      },
      {
        "q": "Renkli bir QR kodu renkli kâğıda basabilir miyim?",
        "a": "Evet, koyu modüller açık kâğıda karşı 4,5:1'i geçtiği sürece. Koyu üzerine koyu ya da açık üzerine açık kullanmaktan kaçının."
      },
      {
        "q": "Parlak laminasyonlu QR kodları neden sık sık taranmaz?",
        "a": "Doğrudan güneş ya da bir spot ışığı altında parlaklık bir ayna gibi davranır ve beyaz bir sıcak nokta ile kontrastı yok eder. Mat ya da yansıma önleyici laminasyon bunu çözer."
      },
      {
        "q": "Raster PNG dosyaları basılıyorsa hangi çözünürlük gerekir?",
        "a": "Raster bir dosya, son baskı boyutunda 300 DPI'ya ihtiyaç duyar (piksel = inç × 300). 2048x2048 piksellik PNG dışa aktarımı yaklaşık 7x7 inç'e kadar keskin basılır."
      },
      {
        "q": "10.000 adetlik bir baskı işini onaylamadan önce basılı QR kodumu nasıl test ederim?",
        "a": "Kullanacağınız tam kâğıt ve kaplama üzerinde 1:1 bir pres provası alın, ardından hem eski bir Android'de hem de güncel bir iPhone'da, loş ve parlak ışıkta tarayın."
      }
    ],
    "bestPractices": "Matbaaya vektör SVG verin, mat bir yüzey isteyin, 4 modüllük sessiz bölgeyi koruyun ve tam seriyi onaylamadan önce fiziksel bir prova tarayın."
  },
  '/blog/vcard-qr-code-business-cards': {
    "sections": [
      {
        "title": "Kartvizitleri tek dokunuşla kişi kaydeden araçlara dönüştürün",
        "paragraphs": [
          "Bir vCard QR kodu, networking etkinliklerinde ve fuarlarda elle kişi bilgisi yazma hatalarını ortadan kaldırır.",
          "Kartvizitinizin arkasını tarayan kişi, adınızı, cep numaranızı, e-postanızı ve LinkedIn profilinizi anında kendi rehberine ekler."
        ]
      },
      {
        "title": "QR kodlu kartvizitler için tasarım ipuçları",
        "paragraphs": [
          "QR kodu kartvizitinizin arka yüzüne, \"İletişim bilgimi kaydetmek için tarayın\" gibi net bir harekete geçirici mesajla birlikte yerleştirin. Güvenilir tarama için kodu en az 2,5 cm × 2,5 cm (1 inç × 1 inç) tutun. Dört kenarın tamamında en az 4 modüllük beyaz bir sessiz bölge kenarlığı bırakın. Ortaya profesyonel fotoğrafınızı ya da şirket logonuzu gömmek güveni ve tarama oranlarını artırır.",
          "QR Generator Online ile tam vCard 3.0 profilinizi kodlayın; ad, soyad, unvan, şirket, iş telefonu, cep telefonu, e-posta, web sitesi ve posta adresi dahil. Kartvizit boyutu ne olursa olsun kusursuz kalite için vektör SVG olarak dışa aktarın. Mat bitişli premium kartvizit kartonu, parlak laminasyona kıyasla en yüksek tarama güvenilirliğini sağlar; parlak laminasyon güçlü ışık altında mercekte parlama oluşturabilir."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Modern akıllı kartvizitler için vCard QR kodlarına nihai rehber",
      "paragraphs": [
        "Kağıt kartvizit sessizce ölmekte. Bir networking etkinliğinde dağıtılan kartların %88'den fazlası bir hafta içinde çöpe gidiyor; yaklaşık %9'u ise altı ay içinde eski bir numara ya da unvan taşıyor. Bir vCard QR kodu, o ölü kâğıdı çalışan bir dijital varlığa dönüştürür.",
        "VCF standardında (vCard 3.0, RFC 2426 ve RFC 6350'de tanımlı) çalışır ve tüm profesyonel kimliğinizi — adınızı, unvanınızı, şirketinizi, cep numaranızı, iş e-postanızı, ofis adresinizi, web sitenizi — doğrudan barkoda kodlar.",
        "Herhangi bir iPhone ya da Android ile tarayın ve işletim sistemi \"Kişilere Ekle\" istemiyle bir kişi önizlemesi açar. Tek dokunuş tüm profili adres defterine kaydeder — yazma yok, yazım hatası yok, bir ceket cebinde kaybolmuş bir potansiyel müşteri yok."
      ]
    },
    "comparisonTable": {
      "title": "vCard QR akıllı kartvizit ile geleneksel kağıt kartvizitin karşılaştırması",
      "headers": [
        "Networking ölçütü",
        "vCard QR akıllı kartvizit",
        "Geleneksel kağıt kartvizit"
      ],
      "rows": [
        [
          "Kişi kaydetme hızı",
          "1 dokunuş (telefon adres defterine doğrudan 3 saniyeden kısa sürede)",
          "Elle yazma (1 - 3 dakika, sıklıkla atlanır)"
        ],
        [
          "Kişi saklama oranı",
          "Bulut adres defterinde kalıcı depolama",
          "7 gün içinde %88'i atılır"
        ],
        [
          "Veri zenginliği",
          "Tam profil: 3 telefon, e-postalar, ofis adresi, web sitesi",
          "3,5\" x 2\" fiziksel kart yüzeyiyle sınırlı"
        ],
        [
          "Çevresel atık",
          "Sıfır atık (dayanıklı, yeniden kullanılabilir ve hibrit kartlar)",
          "Profesyonel başına yılda binlerce atılan kağıt kart"
        ],
        [
          "Tek dokunuşlu etkileşim",
          "Doğrudan arama, e-posta ve harita navigasyonu",
          "Elle yeniden yazmayı gerektiren pasif metin"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Yapılandırılmış profesyonel iletişim alanlarını doldurun",
        "description": "Adınızı, unvanınızı, şirketinizi, cep numaranızı, iş e-postanızı ve web sitenizi girin."
      },
      {
        "number": 2,
        "title": "Görsel markayı uygulayın ve portre ya da logoyu gömün",
        "description": "Nokta desenini markanıza göre biçimlendirin ve portrenizi ya da logonuzu H seviyesi hata düzeltmeyle ortaya yerleştirin."
      },
      {
        "number": 3,
        "title": "Kartvizit baskısı için vektör SVG dışa aktarın",
        "description": "Matbaaya vektör SVG'yi, bir e-posta imzası ya da kilit ekranı duvar kâğıdı için yüksek çözünürlüklü PNG'yi alın."
      }
    ],
    "features": [
      {
        "title": "Evrensel yerel iOS ve Android entegrasyonu",
        "description": "vCard 3.0'a göre oluşturulmuştur; bu yüzden Apple Contacts, Google Contacts ve Outlook'a temiz biçimde kaydedilir."
      },
      {
        "title": "Tek dokunuşla akıllı telefon adres defterine kayıt",
        "description": "Telefonunuz, e-postanız, web siteniz ve adresiniz tek dokunuşla kaydedilir — diğer kişinin hiçbir şey yazması gerekmez."
      },
      {
        "title": "%100 çevrimdışı tarama ve tam gizlilik",
        "description": "Kişi verisi barkodun içinde yaşar. Hiçbir üçüncü taraf sunucu bunu saklamaz ya da toplamaz."
      },
      {
        "title": "Premium kartonlar için yüksek hassasiyetli vektör SVG",
        "description": "Folyo basım, seçici UV, kabartma ya da lazerle oyulmuş metal veya ahşap bir kart için keskin vektör çıktısı."
      }
    ],
    "sizingMatrix": {
      "title": "vCard QR kod boyutu ve malzeme spesifikasyonları",
      "description": "vCard yükleri 150 ila 350 karakterlik yapılandırılmış metin içerdiğinden, önerilen boyut ölçütlerini koruyun.",
      "headers": [
        "Kart alt tabakası / ortamı",
        "Önerilen minimum boyut",
        "Hata düzeltme seviyesi",
        "Optimal bitiş"
      ],
      "rows": [
        [
          "Standart kâğıt kartvizitler (3,5\" x 2\")",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "Seviye Q (%25) veya Seviye H (%30)",
          "Ağır mat karton (350+ GSM)"
        ],
        [
          "Metal / ahşap akıllı NFC hibrit kartlar",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Seviye H (%30)",
          "Lazerle oyulmuş mat anodize alüminyum"
        ],
        [
          "Fuar yaka kartları ve konferans rozetleri",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "Seviye M (%15) veya Seviye Q (%25)",
          "Laminasyonlu sentetik PVC / Tyvek"
        ],
        [
          "Özgeçmiş başlıkları ve portfolyo kapakları",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Seviye Q (%25)",
          "Kaplanmamış pürüzsüz parlak beyaz kâğıt"
        ],
        [
          "Akıllı telefon kilit ekranı duvar kâğıdı",
          "Dijital ekranda 250 x 250 px",
          "Seviye H (%30)",
          "Yüksek kontrastlı OLED dijital ekran"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Kurumsal yöneticiler ve satış liderleri",
        "description": "Lüks bir kartın arkasındaki bir kod, el sıkışmayı kaydedilmiş bir kişiye dönüştürür."
      },
      {
        "title": "Ticaret fuarları, sergiler ve sektör konferansları",
        "description": "Bir yaka kartında ya da stand rozetinde, bilgileriniz yaklaşık iki saniyede bir potansiyel müşterinin telefonuna ulaşır."
      },
      {
        "title": "İş arayanlar — özgeçmişler ve portfolyo kapak mektupları",
        "description": "Özgeçmiş başlığındaki bir kod, bir işe alım uzmanının bilgilerinizi tekrar yazmadan kaydetmesini sağlar."
      },
      {
        "title": "Emlak danışmanları ve kredi aracıları",
        "description": "Açık ev broşüründeki bir kod, bir gösterim randevusunu tek dokunuşla ayarlanabilir hale getirir."
      },
      {
        "title": "Kurumsal e-posta imzaları ve dijital imzalar",
        "description": "E-posta şablonundaki bir kod, masaüstü okuyucuların ekranlarından taramasına olanak tanır."
      }
    ],
    "troubleshooting": {
      "title": "Yaygın vCard QR kod tasarım hataları ve bunların önlenmesi",
      "points": [
        "Aşırı dolu bir profil. Yirmi alan, matrisi taranamayacak kadar yoğunlaştırır. Yalnızca temel bilgileri tutun.",
        "Çok küçük basmak. Sürüm 6-10 bir vCard matrisi, ucuz bir kamerada 25 mm'nin altında bulanıklaşır. Ona yer verin.",
        "Parlak kâğıt. Yüksek parlaklıklı bir kart, salon ışıklarını mercekte yansıtır. Mat, ipeksi ya da yumuşak dokunuşlu tercih edin.",
        "Ters renkler. Koyu bir kart üzerine beyaz bazı eski tarayıcılarda başarısız olur. Koyu üzerine açık standart olarak kalır.",
        "Ülke kodu yok. +90 ya da +1 gibi kodu atlarsanız, uluslararası bir kişi kaydedilen kartı arayamaz."
      ]
    },
    "faqs": [
      {
        "q": "Bir vCard QR kodu nedir ve nasıl çalışır?",
        "a": "İletişim bilgilerinizi — ad, telefon, e-posta, şirket, unvan, web sitesi — vCard 3.0 biçiminde taşıyan bir 2B barkoddur. Tarandığında telefon, kişiyi doğrudan adres defterine kaydetmeyi önerir."
      },
      {
        "q": "vCard QR kodların taranması için internet bağlantısı gerekir mi?",
        "a": "Tamamen çevrimdışı çalışırlar. Her alan, barkodun içinde vCard 3.0 metni olarak yaşar; bu yüzden telefon veri ya da WiFi olmadan kişiyi okur ve kaydeder."
      },
      {
        "q": "Statik bir vCard QR koduna fotoğrafımı ekleyebilir miyim?",
        "a": "Ham görüntüyü kodlamak yükü taranamayacak kadar şişirir. Standart yöntem, kodun merkezine fotoğrafınızı ya da logonuzu bindirmek ve tam fotoğrafın barındırıldığı adresi vCard'ın URL alanına koymaktır."
      },
      {
        "q": "vCard QR kodları hem iPhone hem de Android ile uyumlu mu?",
        "a": "vCard 3.0 evrensel kişi standardıdır; Apple Contacts, Google Contacts, Outlook ve Samsung Contacts'ta yerleşiktir."
      },
      {
        "q": "Statik vCard QR kodları sona erer mi ya da aylık ücret alır mı?",
        "a": "Hayır. Kişi verisi kodun içinde durur ve tekrarlayan bir ücret ya da tarama sınırı olmadan sonsuza dek geçerli kalır."
      },
      {
        "q": "Bir kartvizitte vCard QR kodunu ne kadar küçük basabilirim?",
        "a": "Daha yoğun matrisin telefon merceği için keskin kalması amacıyla 28 mm x 28 mm (1,1\" x 1,1\") ya da daha büyük hedefleyin."
      },
      {
        "q": "Telefon numaralarını ülke koduyla biçimlendirmeli miyim?",
        "a": "Her zaman — uluslararası bir kişinin önek tahmin etmeden sizi arayabilmesi için E.164 (+905551234567) kullanın."
      },
      {
        "q": "Kartvizit matbaasına hangi dosya biçimini göndermeliyim?",
        "a": "Vektör SVG ya da EPS. Vektör, herhangi bir ofset ya da dijital pres üzerinde hassasiyetini korur."
      }
    ],
    "bestPractices": "Kartı temel alanlarla sınırlı tutun, telefon numaralarını uluslararası biçimde yazın (+90...), mat kartonu talep edin ve tam seriden önce fiziksel bir prova tarayın."
  },
  '/blog/qr-codes-for-real-estate': {
    "sections": [
      {
        "title": "Potansiyel alıcılara arsa tabelalarından doğrudan ulaşın",
        "paragraphs": [
          "\"Satılık\" tabelalara bir QR kod koymak, yoldan geçenlerin arabalarından 3B kat planlarını, video turlarını ve fiyatları anında incelemesine olanak tanır.",
          "Açık ev günlerini beklemeden 7/24 yüksek niyetli alıcı talepleri toplayın."
        ]
      },
      {
        "title": "Emlak QR kod kampanyaları için en iyi uygulamalar",
        "paragraphs": [
          "QR kodunuzu genel ana sayfanız yerine doğrudan özel bir mülk açılış sayfasına bağlayın. Tam adresi, ilan fiyatını, yatak odası ve banyo sayısını, metrekareyi ve gömülü bir video turu ekleyin. Dinamik QR kodlar, ilan fiyatı değişirse ya da mülk satılır ve tabelaları yeniden basmadan benzer bir ilana yönlendirmek isterseniz, hedef URL'yi güncellemenize olanak tanır.",
          "Dış mekânda en yüksek tarama güvenilirliği için QR kodları hava koşullarına dayanıklı tabelalarda en az 7 cm × 7 cm (yaklaşık 2,75 inç) boyutunda basın. Doğrudan güneş ışığında görünürlüğü sağlamak için yüksek kontrastlı siyah üzerine beyaz ya da koyu yeşil üzerine beyaz kullanın. Markalı bir logo ve \"Sanal tur için tarayın\" gibi kısa bir slogan eklemek, geçen trafikten tarama oranlarını önemli ölçüde artırır. Hangi mahalle ve ilan türlerinin en fazla alıcı ilgisi çektiğini anlamak için tarama analitiğini takip edin."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Emlak acentesi için QR kod potansiyel müşteri üretimi ve pazarlamasına ilişkin eksiksiz rehber",
      "paragraphs": [
        "Emlak pazarlaması konuma dayalı ve görseldir; alıcılar artık bir evin önünde dururken ayrıntıları anında görmek ister. Tabeladaki eski kâğıt broşür kutusu sayfaları biter, yağmurda ıslanır ve kimin ilgilendiğine dair size hiçbir şey söylemez.",
        "Bir mülk QR kodu bu üç sorunun hepsini çözer. Bir tabelayı, açık ev yön levhasını, vitrin sergisini ya da kartpostalı 7/24 bir portala dönüştürür — bir tarama, 3B Matterport turunu, HD fotoğraf galerisini, kat planını, okul puanlarını ve acenteye doğrudan bir arama ya da mesajı açar.",
        "UTM izlemesi ve bir potansiyel müşteri yakalama akışı ekleyin; en iyi acenteler, ilgi zirve yaptığı tam anda — kaldırımdan, her saatte — yüksek niyetli yerel potansiyel müşteriler yakalar."
      ]
    },
    "comparisonTable": {
      "title": "QR kodlu emlak tabelası ile geleneksel kâğıt broşür kutusunun karşılaştırması",
      "headers": [
        "Pazarlama yeteneği",
        "QR kodlu emlak tabelası",
        "Geleneksel kâğıt broşür kutusu"
      ],
      "rows": [
        [
          "Potansiyel müşteri yakalama erişilebilirliği",
          "24/7/365 (stoğu asla bitmez)",
          "Boş broşür kutuları, potansiyel müşterilerin %60'ından fazlasını kaybeder"
        ],
        [
          "Medya zenginliği",
          "3B sanal turlar, video turları, 50'den fazla HD fotoğraf",
          "1-2 basılı siyah-beyaz fotoğrafla sınırlı"
        ],
        [
          "Hava koşullarına dayanıklılık",
          "Hava koşullarına dayanıklı vinil / alüminyum (yağmur, kar ve güneşe dayanıklı)",
          "Kâğıt broşürler ıslanır, buruşur ya da rüzgârda uçar"
        ],
        [
          "Potansiyel müşteri atfı ve analitiği",
          "Tam tarama hacmini, günün saatini ve cihaz türünü izler",
          "Kaç broşürün alındığına dair hiçbir görünürlük yok"
        ],
        [
          "Anında acente iletişimi",
          "Tek dokunuşla doğrudan arama, SMS ya da WhatsApp mesajı",
          "Alıcının acente telefon numarasını elle yazması gerekir"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Tek mülklü bir açılış sayfası ya da 3B tur bağlantısı oluşturun",
        "description": "İlan sayfasının, Matterport turunun ya da video turunun doğrudan URL'sini kopyalayın."
      },
      {
        "number": 2,
        "title": "Logolu yüksek kontrastlı bir emlak QR kodu oluşturun",
        "description": "Mülk URL'sini yapıştırın, aracılık firmanızın renklerini uygulayın, logonuzu ortaya yerleştirin ve vektör SVG dışa aktarın."
      },
      {
        "number": 3,
        "title": "Hava koşullarına dayanıklı oluklu plastik ya da alüminyum tabelalara basın",
        "description": "\"Sanal 3B tur ve fiyat için tarayın\" gibi bir ifade içeren en az 150 mm x 150 mm bir tabela eki monte edin."
      }
    ],
    "features": [
      {
        "title": "7/24 talep üzerine mülk bilgisi teslimi",
        "description": "Geçen bir alıcı, fiyatı, iç mekân fotoğraflarını ve kat planını istediği saatte alabilir."
      },
      {
        "title": "3B turlar ve video turlarıyla doğrudan entegrasyon",
        "description": "Matterport, Zillow 3D Home ya da bir YouTube turu aracılığıyla alıcıyı eve sokun."
      },
      {
        "title": "Anında tek dokunuşla acente bağlantısı",
        "description": "Kaldırımda duran bir alıcı, ilan acentesini hemen arayabilir, mesaj atabilir ya da WhatsApp'tan yazabilir."
      },
      {
        "title": "Sona erme olmadan kalıcı statik barkodlar",
        "description": "Aylık ücret ya da tarama sınırı olmadan süresiz aktif kalan statik bir mülk kodu."
      }
    ],
    "sizingMatrix": {
      "title": "Emlak baskı boyutu ve yerleşim spesifikasyonları",
      "description": "Potansiyel alıcıların mülk kodlarınızı arabalarından ya da kaldırımdan kolayca taramasını sağlayın.",
      "headers": [
        "Tabela yerleşimi",
        "Beklenen tarama mesafesi",
        "Minimum baskı boyutu",
        "Önerilen alt tabaka"
      ],
      "rows": [
        [
          "Tabela ek levhası (tabelanın altına asılan)",
          "1,5 m - 3,0 m (5 ft - 10 ft)",
          "150 mm x 150 mm (6\" x 6\")",
          "Yansıtıcı oluklu plastik / alüminyum"
        ],
        [
          "Açık ev yön sokak tabelaları",
          "1,0 m - 2,5 m (3 ft - 8 ft)",
          "120 mm x 120 mm (4,8\" x 4,8\")",
          "Ağır oluklu plastik kazıklı tabela"
        ],
        [
          "Mülk ilan broşürleri ve broşürleri",
          "20 cm - 35 cm (8\" - 14\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Ağır mat karton (100 lb+)"
        ],
        [
          "Emlak ofisi vitrin sergileri",
          "50 cm - 150 cm (20\" - 60\")",
          "100 mm x 100 mm (4,0\" x 4,0\")",
          "Hava koşullarına dayanıklı mat vinil vitrin çıkartması"
        ],
        [
          "Doğrudan posta \"Yeni İlan\" kartpostalları",
          "20 cm - 35 cm (8\" - 14\")",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "Kaplamalı mat kartpostal kartonu"
        ]
      ]
    },
    "useCases": [
      {
        "title": "3B sanal turlar için tabela ekleri",
        "description": "Satılık tabelasının altındaki bir ek, yoldan geçen alıcının telefonundan iç mekânı gezmesini sağlar."
      },
      {
        "title": "Açık ev yön tabelaları",
        "description": "Bir köşe tabelasındaki bir konum kodu, alıcıyı doğrudan açık ev girişine yönlendirir."
      },
      {
        "title": "Doğrudan posta \"Yeni İlan\" ve \"Satıldı\" kartpostalları",
        "description": "Bir mahalle kartpostalındaki kod, video turuna ve bir ev değeri hesaplayıcısına bağlanır."
      },
      {
        "title": "Aracılık ofislerinin vitrin sergileri",
        "description": "Bir vitrin kodu, yaya trafiğini 7/24 emlak aramasına dönüştürür."
      },
      {
        "title": "vCard kişileriyle acente kartvizitleri",
        "description": "Acentenin kartındaki bir vCard kodu, bilgilerini tek dokunuşla kaydeder."
      }
    ],
    "troubleshooting": {
      "title": "Emlak QR pazarlamasında yaygın hatalar",
      "points": [
        "Yoldan geçenler için çok küçük. 50 mm'lik bir kod, 3 metre uzaktaki bir arabadan okunamaz. Bir satılık tabelasında en az 150 mm x 150 mm kullanın.",
        "Beceriksiz bir MLS bağlantısı. Küçük yazılı yavaş bir masaüstü MLS sayfası mobil tarayıcıyı hayal kırıklığına uğratır. Bunun yerine hızlı bir tek mülk sayfası bağlayın.",
        "Harekete geçirici mesaj yok. Çıplak bir kod az tarama alır. \"Fiyat, fotoğraflar ve 3B tur için tarayın\" ile eşleştirin.",
        "Güneş parlaması. Parlak bir tabela kaplaması güneşte parlar. Mat dış mekân vinili ya da oluklu plastik kullanın.",
        "Saldırgan bir giriş duvarı. Anında kayıt zorlamak %70 çıkışa neden olur. Önce temel fotoğrafları gösterin, sonra onay isteyin."
      ]
    },
    "faqs": [
      {
        "q": "Emlak acenteleri potansiyel müşteri üretmek için QR kodları nasıl kullanır?",
        "a": "Tek bir mülk sitesine, 3B bir tura ya da anında bir metin sorgusuna bağlanan kodları satılık tabelalarına, açık ev broşürlerine ve kartpostallarına koyarlar — alıcıyı ilginin en yüksek olduğu anda yakalarlar."
      },
      {
        "q": "Emlak tabelası QR kodu için önerilen boyut nedir?",
        "a": "Bir araç yolundan ya da kaldırımdan okunacak bir ek (1,5 ila 3 metre) yüksek kontrastla en az 150 mm x 150 mm olmalıdır."
      },
      {
        "q": "QR kodunu doğrudan bir Matterport 3B sanal turuna bağlayabilir miyim?",
        "a": "Matterport'un herkese açık paylaşım bağlantısını kopyalayın, QR URL oluşturucuya yapıştırın ve baskıya hazır SVG ya da PNG'yi indirin."
      },
      {
        "q": "Mülk satıldığında emlak QR kodları sona erer mi?",
        "a": "Statik bir kod geçerli kalır. Mülk satıldığında hedef URL'sini bir \"Satıldı\" sayfasına ya da aktif ilanlarınıza yönlendirin — basılı kod çalışmaya devam eder."
      },
      {
        "q": "Mülk QR kodunun yanına hangi harekete geçirici mesajı basmalıyım?",
        "a": "İşe yarayan ifadeler şunlardır: \"Fiyat ve 3B sanal tur için tarayın\", \"İç mekân fotoğraflarını hemen görmek için tarayın\", \"İlan acentesine mesaj atmak için tarayın\"."
      },
      {
        "q": "Emlak acentemin logosunu QR koda ekleyebilir miyim?",
        "a": "Evet — acentenizin ya da ekibinizin logosu ortaya temiz biçimde oturur, çünkü H seviyesi kodun üçte birine kadar kaybedebilir ve yine de taranabilir."
      },
      {
        "q": "Dış mekân emlak QR tabelaları için en iyi malzeme nedir?",
        "a": "Hava koşullarına dayanıklı oluklu plastik (Coroplast) ya da mat UV kaplamalı bir alüminyum kompozit panel — dayanıklı ve parlamasız."
      },
      {
        "q": "Emlak QR kodları QR Generator Online'da oluşturmak için ücretsiz mi?",
        "a": "SVG ve PNG dışa aktarımları ücretsizdir; sınırsız tarama ve tekrarlayan bir ücret yoktur."
      }
    ],
    "bestPractices": "Tabela kodlarını mat hava koşullarına dayanıklı malzemede 150 mm x 150 mm ya da daha büyük basın, değer odaklı bir harekete geçirici mesaj ekleyin ve açılış sayfasının mobilde hızlı yüklenmesini sağlayın."
  },
  '/blog/wifi-qr-codes-for-hospitality': {
    "sections": [
      {
        "title": "Misafirler için kesintisiz kablosuz bağlantı",
        "paragraphs": [
          "Otel ve Airbnb misafirleri sık sık telefonlarına ve dizüstü bilgisayarlarına karmaşık WiFi parolaları yazmakta zorlanır.",
          "Komodinde ya da kafe tezgâhında çerçeveli, özel bir WiFi QR kodu kartı, misafirlerin taramasını ve anında bağlanmasını sağlar."
        ]
      },
      {
        "title": "Otellerde ve tatil kiralarında WiFi QR kodları nasıl kullanılır",
        "paragraphs": [
          "Her ağ bölgesi için ayrı bir WiFi QR kodu oluşturun — misafir odası WiFi'si, lobi WiFi'si ve havuz alanı WiFi'si — ve bunları ayrı ayrı markalanmış kartlara basın. Oteller için QR kod kartını laminasyonlayın ve misafirlerin bağlantı talimatlarını doğal olarak aradığı oda masasına ve banyo aynasına yerleştirin. Misafirler taramanın ne yapacağından emin olsun diye ağ adını (SSID) ve parolanın önceden doldurulup doldurulmadığını gösteren bir not ekleyin.",
          "Airbnb ev sahipleri için bir WiFi QR kodunu, ev kuralları ve yerel önerilerle birlikte özel bir karşılama kitapçığına gömmek, check-in memnuniyet puanlarını çarpıcı biçimde artırır. Kafeler ve ortak çalışma alanları, göz hizasında çerçeveli QR kodlu büyük format masa ekranlarından en çok faydayı sağlar. Güvenlik için WiFi parolalarını ayda bir değiştirin ve basitçe yeni bir QR kod oluşturun — dijital menü panoları ya da değiştirilebilir kart ekleri kullanıyorsanız yeniden basım gerekmez."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Oteller, kafeler ve tatil kiralamaları için WiFi QR kodlarına eksiksiz rehber",
      "paragraphs": [
        "Konaklamada WiFi artık bir ayrıcalık değil — memnuniyet puanlarını ve çevrimiçi yorumları hareket ettiren amenity. Araştırmalar bunu %85'in üzerinde tutuyor: otel ve kafe misafirlerinin, konaklamaları için hızlı ve sürtünmesiz WiFi'yi kritik bulan oranı bu. Yine de önündeki engel genellikle yanlış yazılmış bir parola ve resepsiyonu arama.",
        "Konaklama WiFi kodu, oturum bilgisini standart `WIFI:` biçiminde taşır (`WIFI:T:WPA;S:Hotel_Guest;P:SecretPass;H:false;;`). Misafir kamerayı tutar, \"Join Network\"e dokunur ve iki saniyeden kısa sürede çevrimiçi olur — ekranda parola yok, yazma yok.",
        "Bu rehber, otelleri, tatil köylerini, kafeleri ve Airbnb ev sahiplerini, destek biletlerini azaltmak, ağı güvende tutmak ve misafir deneyimini yükseltmek için odalarda, masalarda ve check-in alanlarında markalı WiFi kodları dağıtma konusunda yönlendirir."
      ]
    },
    "comparisonTable": {
      "title": "Konaklamada WiFi QR kod erişimi ile manuel parola kartlarının karşılaştırması",
      "headers": [
        "Operasyonel etken",
        "Konaklama WiFi QR kodu",
        "Manuel parola kartı / yazı tahtası"
      ],
      "rows": [
        [
          "Misafir bağlanma süresi",
          "1 - 2 saniye (tek kamera taraması ve dokunuş)",
          "45 - 90 saniye (16+ karmaşık karakter yazma)"
        ],
        [
          "Resepsiyon destek biletleri",
          "WiFi ile ilgili soruları %80'den fazla azaltır",
          "Parola yardımı için çok sayıda misafir araması"
        ],
        [
          "Yazım hatası oranı",
          "%0 (tam bayt bayt iletim)",
          "Sembollü karmaşık parolalarda %30 - %50"
        ],
        [
          "Parola güvenliği",
          "Misafirlerin düz metin anahtarları görmesini engeller",
          "Parolaları genel yazı tahtalarında ve tabelalarda açığa çıkarır"
        ],
        [
          "Misafir yorumlarına etkisi",
          "Misafir memnuniyetini ve check-in puanlarını yükseltir",
          "Bağlantı hayal kırıklığı olumsuz yorumlara yol açar"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Yönlendiricinizde ayrı bir misafir ağını yalıtın",
        "description": "Misafir WiFi'sini istemci yalıtımı açık bir VLAN'da çalıştırın; böylece misafirler asla iç sistemlerinize erişemez."
      },
      {
        "number": 2,
        "title": "H seviyesi hata düzeltmeyle markalı bir WiFi QR kodu oluşturun",
        "description": "Misafir SSID'sini ve parolasını girin, markanızı uygulayın ve ortaya bir WiFi simgesi ya da logonuzu koyun."
      },
      {
        "number": 3,
        "title": "Premium akrilik masa standlarına ya da ahşap komodin kartlarına basın",
        "description": "Kodu göz hizasında gösterin — otel masasında, komodinde, kafe tezgâhında ya da kiralama karşılama kitapçığında."
      }
    ],
    "features": [
      {
        "title": "Anında sürtünmesiz misafir bağlantısı",
        "description": "Tek dokunuşlu kamera taraması, parola hayal kırıklığını ve resepsiyon aramalarını sona erdirir."
      },
      {
        "title": "WPA3, WPA2, WEP ve gizli ağları destekler",
        "description": "Kurumsal bir mesh yönlendirici ile butik bir kiralama kurulumu arasında aynı şekilde çalışır."
      },
      {
        "title": "Sıfır sunucu depolama ve tam gizlilik",
        "description": "Ağ kimlik bilgileri tarayıcınızda kalır. Hiçbir şey dışarıda depolanmaz."
      },
      {
        "title": "Premium tabelalar için yüksek hassasiyetli vektör SVG",
        "description": "Ahşap ya da pirinç bir plaka üzerine lazerle oyma ya da üst düzey bir akrilik stand için keskin vektör."
      }
    ],
    "sizingMatrix": {
      "title": "Konaklama WiFi QR ekranı boyutu ve alt tabaka kılavuzu",
      "description": "WiFi QR kodlarınızı gelen misafirlerin bağlantı talimatlarını doğal olarak aradığı yere yerleştirin.",
      "headers": [
        "Konaklama ortamı",
        "Tarama mesafesi",
        "Önerilen baskı boyutu",
        "Önerilen malzeme"
      ],
      "rows": [
        [
          "Otel odası komodinleri ve masaları",
          "25 cm - 40 cm (10\" - 16\")",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "Çerçeveli mat kart / akrilik çadır"
        ],
        [
          "Kafe masa standları ve bardak altlıkları",
          "20 cm - 30 cm (8\" - 12\")",
          "40 mm x 40 mm (1,6\" x 1,6\")",
          "Lazerle oyulmuş ahşap / laminasyonlu kart"
        ],
        [
          "Airbnb karşılama kitapçıkları ve buzdolabı mıknatısları",
          "20 cm - 35 cm (8\" - 14\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Ağır mat kart / mıknatıslı levha"
        ],
        [
          "Otel lobisi check-in ve resepsiyon masaları",
          "40 cm - 80 cm (16\" - 32\")",
          "75 mm x 75 mm (3,0\" x 3,0\")",
          "Tezgâh üstü destek kartı ekranı"
        ],
        [
          "Konferans merkezi ve etkinlik salonu afişleri",
          "1,0 m - 2,0 m (3 ft - 6,5 ft)",
          "150 mm x 150 mm (6,0\" x 6,0\")",
          "Yansıtmayan kumaş afiş"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Oteller, butik hanlar ve tatil köyleri",
        "description": "Masadaki ya da aynadaki çerçeveli bir kart, misafiri içeri girer girmez çevrimiçi yapar."
      },
      {
        "title": "Airbnb, VRBO ve tatil kiralamaları",
        "description": "Karşılama kitapçığındaki ya da buzdolabı mıknatısındaki bir kod, check-in sırasındaki \"WiFi nedir?\" sorusunu ortadan kaldırır."
      },
      {
        "title": "Kahve dükkânları, kafeler ve ortak çalışma merkezleri",
        "description": "Bir masa standındaki kod, personelin kesintilerini azaltır ve misafirlerin daha uzun kalmasını sağlar."
      },
      {
        "title": "Etkinlik mekânları, konferanslar ve ziyafetler",
        "description": "Check-in'de yüzlerce kişi aynı anda bağlanır; bu da salondaki mobil veri sıkışıklığını hafifletir."
      },
      {
        "title": "Havalimanı salonları ve yönetici bekleme alanları",
        "description": "İş seyahati yapanlar, sormadan güvenli ve yüksek hızlı misafir WiFi'sine bağlanır."
      }
    ],
    "troubleshooting": {
      "title": "Yaygın konaklama WiFi QR kodu hatalarını önlemek",
      "points": [
        "Büyük-küçük harf uyuşmazlığı. Ağ adları büyük-küçük harfe duyarlıdır — \"HotelGuest\" ile \"hotelguest\" farklıdır. Tam olarak eşleştirin.",
        "Yanlış güvenlik türü. Bir WPA2 yönlendirici için WEP seçerseniz el sıkışma başarısız olur. WPA/WPA2/WPA3 seçin.",
        "Esir portal. Ağınızda bir şartlar sayfası varsa, kod radyoyu bağlar ve ardından tarayıcının karşılama ekranı gelir. Bu normaldir.",
        "Gizli bayrağının eksikliği. Gizli bir SSID'nin Hidden Network anahtarının açık olması gerekir; aksi halde cihazlar bağlanmaz.",
        "Lekeli bir ekran. Dökülmeler ve çizilmiş laminasyon bulucu desenleri gizler. Dayanıklı akrilik ya da lazerle oyulmuş ahşap kullanın."
      ]
    },
    "faqs": [
      {
        "q": "Bir WiFi QR kodu, misafirleri parola yazmadan nasıl bağlar?",
        "a": "Standart WIFI: parametrelerini kodlar. Telefonun kamerası görüntüden SSID'yi ve parolayı okur ve kablosuz bağlantıyı kendiliğinden başlatır."
      },
      {
        "q": "Otel odalarında ve kafelerde bir WiFi QR kodu göstermek güvenli mi?",
        "a": "Evet, kod özel bir misafir ağına ait olduğu ve istemci yalıtımı açık olduğu sürece — bu da misafirleri iç yönetim sistemlerinizden uzak tutar."
      },
      {
        "q": "Bir WiFi QR kodu hem iPhone hem de Android telefonlarda çalışır mı?",
        "a": "iOS 11+ çalıştıran iPhone'lar ve Android 10+ çalıştıran Android telefonlar WIFI: biçimini kameradan tanır ve tek dokunuşla katılma seçeneği sunar."
      },
      {
        "q": "Gelecekte misafir WiFi parolamı değiştirirsem ne olur?",
        "a": "Eski kod çalışmayı durdurur, çünkü belirli parola modüllere sabitlenmiştir. Bir değişiklik, yeni bir kodun basılması anlamına gelir."
      },
      {
        "q": "Otel ya da kafemin logosunu WiFi QR koduna ekleyebilir miyim?",
        "a": "Evet. H seviyesi düzeltmeyle, ortadaki bir mekân logosu ya da WiFi simgesi güvenilirlikten hiçbir şey kaybettirmez."
      },
      {
        "q": "Otel komodinindeki WiFi ekranları için en iyi malzeme nedir?",
        "a": "Mat akrilik, lazerle oyulmuş bir ahşap blok ya da yansıtmayan camlı çerçeveli bir kart — tarandığında hem lüks görünür hem de parlamasız."
      },
      {
        "q": "WiFi QR kodları sona erer mi ya da aylık ücret alır mı?",
        "a": "Hayır. Statik bir WiFi kodu süresiz geçerlidir. İstenilen sayıda misafir tarayabilir ve hiçbir zaman fatura kesilmez."
      },
      {
        "q": "Oluşturma sırasında WiFi parolam harici sunucularda saklanır mı?",
        "a": "Yerel kalır. Kodu tarayıcınız oluşturur; bu yüzden kimlik bilgileri asla yüklenmez, kaydedilmez ya da paylaşılmaz."
      }
    ],
    "bestPractices": "Misafir WiFi'sini kendi VLAN'ında yalıtın, kodu göz hizasında mat yansıtmayan bir standda gösterin ve \"Misafir WiFi'sine bağlanmak için tarayın\" gibi kısa bir satır ekleyin."
  },
  '/bulk-qr-code-generator': {
    "sections": [
      {
        "title": "İşletme ve pazarlama için toplu QR kod üretimi",
        "paragraphs": [
          "Bir CSV yükleyin ya da satır başına bir URL içeren bir liste yapıştırın. Oluşturucu her kodu doğrudan tarayıcınızda üretir. Yapıştırdığınız hiçbir şey bir yere yüklenmez.",
          "Bunları tek tek kaydedin ya da tüm seriyi tek bir ZIP olarak alın. Bir ürün partisini etiketlemek, bir etkinliğe rozet basmak ya da bir postayı doldurmak için hızlı yoldur."
        ]
      }
    ]
  },
  '/qr-code-scanner': {
    "sections": [
      {
        "title": "QR kodları anında tarayın ve çözün",
        "paragraphs": [
          "Kodu canlı olarak okumak için telefonunuzun ya da dizüstü bilgisayarınızın kamerasını koda tutun. Elinizde kamera yok mu? Bir ekran görüntüsü ya da fotoğraf bırakın, o da çözülür.",
          "Her şey kendi cihazınızın tarayıcısında çalışır. Kamera görüntüsü ve yüklediğiniz görseller orada kalır."
        ]
      }
    ]
  },
  '/social-media-qr-code': {
    "sections": [
      {
        "title": "Tüm sosyal QR kodlarınız için tek bir panel",
        "paragraphs": [
          "Tüm kullanıcı adlarınızı ve profil bağlantılarınızı tek bir formda girin. Her biri için, işaret ettiği platformla eşleşen renklendirilmiş ayrı bir kod alırsınız.",
          "Her biri PNG ya da SVG olarak ayrı ayrı indirilir. Bir kartvizitte, bir medya kitinde ya da yürüttüğünüz herhangi bir kampanyada kullanın."
        ]
      }
    ]
  },
  '/blog/how-to-scan-qr-code': {
    "sections": [
      {
        "title": "Kameranızın içindeki tarayıcı",
        "paragraphs": [
          "iOS 11 ve Android 9'dan beri normal kamera QR kodları kendi başına okur — yüklenecek bir uygulama gerekmez. Kamerayı koda doğrultun, bir saniye sabit tutun ve bir bağlantı afişi belirir. Üzerine dokunun ve oradasınız.",
          "Hiçbir şey görünmüyorsa, kod genellikle çerçevede çok küçüktür. Ekranın yaklaşık üçte birini kaplayana kadar yaklaşın. Bazı Samsung telefonlarda kamera ayarlarının içinde QR taramayı ayrıca açmanız gerekir."
        ]
      },
      {
        "title": "Kod kendi ekranınızdaysa",
        "paragraphs": [
          "Bir kamera kendine doğrultulamaz; bu yüzden birinin size mesajla gönderdiği bir kodun farklı bir yöntemi gerekir. iPhone'da ekran görüntüsü alın, görüntüyü Photos'ta açın ve bağlantıyı çıkarmak için Live Text düğmesine dokunun. Android'de görüntüyü kaydedin, Google Photos'ta açın, ardından Lens'e dokunun.",
          "Google Lens, bir Android kamerası gerçek dünyada bir kodu okumayı reddettiğinde de güvenilir yedektir — Lens'i açın, doğrultun ve kodu, etrafındaki her türlü metinle birlikte çözecektir."
        ]
      }
    ]
  },
  '/blog/do-qr-codes-expire': {
    "sections": [
      {
        "title": "Statik kodlar veriyi kendileri taşır",
        "paragraphs": [
          "Statik bir QR kod, bilgisini doğrudan desenin içinde saklar — bir bağlantı, bir telefon numarası, bir WiFi parolası. O desenin hiçbir şeyi çürümez. Temiz, korumalı bir baskıda yıllar sonra bile bugün taranacağı gibi taranacaktır.",
          "Statik bir kod \"süresi dolmuş\" gibi göründüğünde, desen neredeyse hiçbir zaman suçlu değildir. İşaret ettiği sayfa silinmiştir, bağlantı değişmiştir ya da bir parola sıfırlanmıştır. Kod hâlâ aynı adrese çözülür; ama o adres artık hiçbir yere götürmez."
        ]
      },
      {
        "title": "Dinamik kodlar bir hizmete bağlıdır",
        "paragraphs": [
          "Dinamik bir kod, bir sağlayıcının sahip olduğu kısa bir yönlendirmeye işaret eder; bu yönlendirme her taramayı gerçek hedefinize iletir. Bu, yeniden basmadan hedefi değiştirmenize olanak tanır — ama artık kod, o hesap ve o şirketle birlikte yaşar ve ölür.",
          "Ücretsiz deneme tuzağına dikkat edin: bazı \"ücretsiz\" dinamik oluşturucular, ödeme yapılmazsa birkaç hafta sonra yönlendirmeyi devre dışı bırakır; bu, aynı öğleden sonra binlerce basılı broşürü işe yaramaz hale getirebilir. Burada oluşturulan kodlar statiktir; yani süresi dolacak bir şey ve canlı tutulması gereken bir abonelik yoktur."
        ]
      }
    ]
  },
  '/blog/share-wifi-password-qr-code': {
    "sections": [
      {
        "title": "Tek bir kod, herhangi bir telefon",
        "paragraphs": [
          "Bir WiFi QR kodu üç şey taşır — ağ adı, parola ve güvenlik türü — böylece tek bir tarama, hiçbir şey yazmadan katılma seçeneği sunar. iPhone'da parola ekranda bile görünmez; bu, kalabalık bir kafede sessiz bir kazançtır.",
          "Oluşturmak bir dakikadan kısa sürer: ağ adını ve parolayı girin, WPA2 ya da WPA3 seçin ve görüntüyü indirin. Dizüstü bilgisayarınızın işte kullandığı ağ yerine bir misafir ağına koyun, çünkü kodu gören herkes katılabilir."
        ]
      },
      {
        "title": "iPhone'dan Mac'e durumu",
        "paragraphs": [
          "Android'in bilmeye değer bir kısayolu var: WiFi ayarlarında Paylaş'a dokunursanız, telefon zaten bağlı olduğunuz ağın bir QR kodunu gösterir; hiçbir oluşturucuya gerek kalmaz. iPhone'lar kodu aynı şekilde tarar, ama yerleşik bir oluşturucusu yoktur.",
          "iPhone'dan Mac'e geçişte tarama garip olur, çünkü bir Mac duvardaki bir kodu telefon gibi okumaz. Pürüzsüz yol QR'ı atlar: Mac bağlanmaya çalışırken kilidi açık bir iPhone'u yanına getirin ve parolayı göndermeyi teklif eden bir istem belirir. QR kodu, Android ve Windows misafirleri için evrensel yedek olarak tutun."
        ]
      }
    ]
  },
  '/pdf-qr-code-generator': {
    "sections": [
      {
        "title": "Menüler ve broşürler için modern PDF QR devrimi",
        "paragraphs": [
          "Basılı bir katalog ya da laminasyonlu bir menü yapmak para tutar ve yazıcıdan çıktığı anda donar. Tek bir fiyatı değiştirmek ya da mevsimlik bir yemeği değiştirmek, eski yöntemde tüm seriyi yeniden basmak demekti. Bu fatura restoranlara, fuar ekiplerine, emlak ofislerine ve eğitim bölümlerine eşit biçimde yansır.",
          "Bir PDF QR kodu, baskı ile arkasındaki dosya arasındaki bağı koparır. Bir masa kartına, bir kutuya, bir standa ya da bir mağaza vitrinine yapıştırın. Müşteri kamerasını tutar ve tüm broşürünüz, menünüz ya da kılavuzunuz saniyeler içinde açılır."
        ]
      },
      {
        "title": "Statik ve dinamik PDF QR kodları: yeniden basmadan menü güncellemek",
        "paragraphs": [
          "Statik bir PDF QR kodu, bağlantıyı doğrudan piksel matrisine gömer. Google Drive dosyasını taşıyın ve basılı kod ölür. Dinamik bir kod bunun yerine kısa bir yönlendirmeye — qr-generator.online/r/menu gibi bir şeye — işaret eder ve o kısa bağlantı hiç değişmez.",
          "Yani haftalık özeller değiştiğinde, bir içecek yarım lira zamlandığında ya da yeni bir katalog baskısı çıktığında, panelinizdeki yönlendirmeyi yeni kaynağa çevirmeniz yeterlidir. Masadaki standlar çalışmaya devam eder. Hiçbir şey yeniden basılmaz."
        ]
      },
      {
        "title": "PDF QR kodlarının sektöre göre uygulamaları",
        "paragraphs": [
          "Restoranlar masaya, yemek ve kokteyl menüsünü, alerjen notları ve yemek fotoğraflarıyla birlikte açan bir kod koyar. Emlakçılar bir arsa tabelasına bir kod yerleştirir; böylece alıcılar kat planlarını ve site yönetimi açıklamalarını yerinde görebilir.",
          "Üreticiler kalın kâğıt kılavuzu tamamen bırakır ve tam kullanım kılavuzuna götüren küçük bir kodu kutuya basar."
        ]
      }
    ]
  },
  '/app-store-qr-code-generator': {
    "sections": [
      {
        "title": "Akıllı App Store QR kodları ve mobil uygulama edinimi",
        "paragraphs": [
          "Uygulamanızı bir metro afişinde, bir gevrek kutusunda, bir televizyon reklamında ya da bir fuar afişinde hayal edin. Yüklemek için birinin telefonunun kilidini açması, doğru mağazayı açması, adınızı doğru yazması ve bir rakip listesinden sizi seçmesi gerekir. Çoğu insan bu zincirin bir yerinde vazgeçer — yaygın tahminlere göre yaklaşık üç kişiden ikisi.",
          "Tek bir akıllı App Store QR kodu bu adımların hepsini ortadan kaldırır. Tarayın, cihazı okur: bir iPhone Apple App Store'a, bir Android telefon Google Play'e ulaşır. Kişinin hiçbir şey aramasına gerek kalmaz."
        ]
      },
      {
        "title": "Neden ikili QR kodlar birleşik akıllı QR'a karşı başarısız olur",
        "paragraphs": [
          "Yan yana iki kod basın — biri iOS, biri Android için — ve sorun çağırmış olursunuz. Yerleşim kalabalık görünür, insanlar hangisinin kendilerine ait olduğunda tereddüt eder ve iki kod yakın olduğunda kameralar sıklıkla yanlış barkodu yakalar.",
          "Tek bir akıllı kod tüm bunları atlatır. Her telefon bir saniyelik tara-ve-yükle işlemi alır ve masaüstünden tarayan herkes bunun yerine tanıtım sitenize ulaşır."
        ]
      },
      {
        "title": "Gerçek zamanlı uygulama yükleme telemetrisi ve atıf",
        "paragraphs": [
          "App Store kodlarınızı burada dinamik kodlar olarak çalıştırın ve tüm huni açılır. iOS'a karşı Android bölünmesinin gerçekte nasıl dağıldığını, hangi bölgelerin etkinleştiğini ve taramaların gün içinde hangi saatlerde yoğunlaştığını görebilirsiniz."
        ]
      }
    ]
  }
};
