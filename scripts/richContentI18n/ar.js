/**
 * Localized deep body content for the `ar` locale.
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
        title: 'اقبل مدفوعات UPI في أي مكان في الهند',
        paragraphs: [
          'اطبع رموز QR لـ UPI لصناديق المتاجر وأكشاك السوق والفواتير والمتاجر الإلكترونية. يدعم المبلغ واسم المستفيد المعبّأين مسبقًا لدفع أسرع.',
          'متوافق مع كل تطبيقات UPI الكبرى بما فيها Google Pay وPhonePe وPaytm وBHIM وAmazon Pay.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & NPCI Specification of UPI QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ UPI معرّف دفع NPCI (`upi://pay?pa={vpa}&pn={name}&am={amount}&cu=INR`). امسحه في أي تطبيق UPI في الهند فيقرأ الـ VPA واسم المستفيد والعملة وأي مبلغ محدد مسبقًا.',
        'لأن NPCI توحّد UPI في كل الهند، يعمل رمز واحد في Google Pay وPhonePe وPaytm وBHIM وAmazon Pay وCRED وكل تطبيق مصرفي — بلا احتكار.',
        'رموز ثابتة دائمة بلا عمولة منصة، بهوية متجرك المخصصة، وبتصدير متجهي SVG لعروض الصناديق.'
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
        title: 'أدخل معرّف UPI (VPA) واسم المستفيد',
        description: 'اكتب معرّف UPI الخاص بك (مثل yourname@oksbi أو merchant@paytm)، واسم عملك، ومبلغًا ثابتًا اختياريًا.'
      },
      {
        number: 2,
        title: 'خصّص الألوان وأدرج شعار UPI',
        description: 'اضبط الألوان، وأعد تصميم عيون الزوايا، وأضف شعار UPI أو المتجر في المنتصف.'
      },
      {
        number: 3,
        title: 'نزّل بصيغة SVG أو PNG',
        description: 'صدّر الرمز الجاهز للطباعة للصناديق والإيصالات وحوامل الأكريليك والفواتير الرقمية.'
      }
    ],
    features: [
      {
        title: 'توافق شامل بين تطبيقات UPI',
        description: 'يعمل في Google Pay وPhonePe وPaytm وBHIM وAmazon Pay وCRED وكل تطبيق مصرفي هندي.'
      },
      {
        title: 'بلا عمولة منصة',
        description: 'مجاني، بلا رسم معاملة أو رسم إعداد أو اشتراك.'
      },
      {
        title: 'بروتوكول UPI القياسي من NPCI',
        description: 'يولّد سلاسل upi://pay متوافقة تُقرأ عبر كل الماسحات.'
      },
      {
        title: 'SVG متجهي لعروض المتاجر',
        description: 'يطبع حوامل صناديق وملصقات وعروض جدارية متينة دون تبكسل.'
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
        title: 'متاجر التجزئة والسوبرماركت',
        description: 'رمز عند صندوق الفوترة يستقبل دفعًا سريعًا بلا لمس دون استئجار جهاز نقاط بيع.'
      },
      {
        title: 'المستقلون ومقدّمو الخدمات',
        description: 'رمز على الفاتورة يسوّي مباشرة إلى البنك بلا تأخير حوالة.'
      },
      {
        title: 'المطاعم والمقاهي وعربات الطعام',
        description: 'رمز على الطاولة أو حافظة الفاتورة يتيح للرواد تسوية الفاتورة من مقاعدهم.'
      },
      {
        title: 'التبرعات والمهرجانات الثقافية',
        description: 'اجمع مساهمات بلا نقد ورسوم دخول في مهرجان أو مؤسسة.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for UPI QR Code Payments',
      points: [
        'تحقّق من الـ VPA. أكّد معرّف UPI (مثل mobile@upi أو name@bank) قبل طباعة كبيرة.',
        'أدرج اسم المستفيد. أضف معامل pn كي يتحقّق العملاء من المستلم قبل الموافقة.',
        'التباين. الأسود أو الكحلي الداكن على أبيض يُقرأ سريعًا تحت إضاءة متجر خافتة.',
        'احمِ المطبوعة. صفّح الرمز أو استخدم حامل أكريليك كي لا تكسر الخدوش المسح.',
        'اختبر عبر التطبيقات. امسح بـ GPay وPhonePe وPaytm لتأكيد المسار.'
      ]
    },
    faqs: [
      {
        q: 'ما معرّف UPI (VPA) وأين أجده؟',
        a: 'هو المعرّف المرتبط بحسابك المصرفي — yourname@oksbi أو mobile@paytm — ويظهر في ملفك على GPay أو PhonePe أو Paytm.'
      },
      {
        q: 'أي تطبيقات دفع تستطيع مسح رمز QR هذا الخاص بـ UPI؟',
        a: 'كل تطبيق UPI في الهند: Google Pay وPhonePe وPaytm وBHIM وAmazon Pay وCRED والتطبيقات المصرفية.'
      },
      {
        q: 'هل يمكنني تعبئة مبلغ دفع ثابت مسبقًا في رمز QR؟',
        a: 'أدخل مبلغًا ويعرض تطبيق الدافع ذلك المبلغ بالضبط عند المسح.'
      },
      {
        q: 'هل هناك أي رسوم منصة من QR Generator Online؟',
        a: 'لا شيء — مجاني، بلا رسم معاملة أو رسم متكرر.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR الخاصة بـ UPI؟',
        a: 'لا — يعمل حتى يُعطَّل معرّف UPI المرتبط.'
      },
      {
        q: 'هل يمكنني إضافة شعار متجري أو شركتي إلى رمز QR لـ UPI؟',
        a: 'ضع شعار متجرك أو أيقونة UPI في المنتصف.'
      },
      {
        q: 'أي صيغة أنزّل لطباعة حوامل الصناديق؟',
        a: 'SVG متجهي لطباعة كبيرة الحجم حادة على حوامل أكريليك وسنبورد وفينيل.'
      },
      {
        q: 'هل معلوماتي المصرفية آمنة أثناء التوليد؟',
        a: 'نعم — تبقى التفاصيل على جهازك ولا تُرسَل خارجًا أبدًا.'
      }
    ],
    bestPractices: 'ضع الرمز على عرض أكريليك مع شعار UPI، واذكر «مقبول: GPay وPhonePe وPaytm وBHIM»، واختبر المسح بعدة تطبيقات قبل وضعه على الصندوق.'
  },
  '/paypal-qr-code-generator': {
    sections: [
      {
        title: 'تحصيل مدفوعات بلا لمس بكل بساطة',
        paragraphs: [
          'اطبع رموز QR لـ PayPal لأكشاك السوق وفواتير المستقلين وأوعية التبرعات وجمع البقشيش. يمسح العملاء ويدفعون فورًا دون كتابة بريدك.',
          'يعمل مع أسماء مستخدمي PayPal.me وروابط دفع PayPal المباشرة.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Security of PayPal QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ PayPal معرّف دفع PayPal.me (`https://paypal.me/{username}/{amount}`) أو رابط دفع مباشرًا. مسحه يفتح تطبيق PayPal أو صفحة دفع على الجوال، مع حسابك مضبوطًا كمستلم — وإن حددت مبلغًا — يكون المبلغ معبّأً سلفًا.',
        'ذلك يتيح لمتجر أو مستقل أو بائع سوق أو جمعية خيرية استقبال دفع بلا نقد دون شراء أو استئجار جهاز بطاقات.',
        'الرموز ثابتة ولا تنتهي صلاحيتها، بلا رسوم منصة، وتستخدم تشفيرًا من جانب المتصفح، وتُصدَّر إلى SVG متجهي لحوامل الصناديق وترويسات الفواتير.'
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
        title: 'أدخل اسم مستخدم PayPal.me أو الرابط',
        description: 'أدخل اسم مستخدم PayPal.me (مثلًا yourname)، أو الصق رابط الدفع كاملًا.'
      },
      {
        number: 2,
        title: 'صمّم بأزرق PayPal والشعار',
        description: 'استخدم أزرق PayPal (#003087، #0079C1)، واختر نمط نقاط، وأضف شعار PayPal.'
      },
      {
        number: 3,
        title: 'نزّل بصيغة SVG أو PNG',
        description: 'صدّر الرمز عالي الدقة للفواتير وعروض الصناديق والملصقات.'
      }
    ],
    features: [
      {
        title: 'بلا رسوم منصة',
        description: 'المولّد مجاني، بلا رسم معاملة أو عمولة تُضاف إلى مدفوعاتك.'
      },
      {
        title: 'دفع فوري على الجوال',
        description: 'يفتح تطبيق PayPal أو صفحة الدفع على الجوال مباشرة لدفع سريع.'
      },
      {
        title: 'SVG متجهي للافتات',
        description: 'متجهي حاد لحوامل صناديق أكريليك متينة وملصقات وقوائم.'
      },
      {
        title: 'أمان بمستوى مصرفي',
        description: 'لا تلمس أي بيانات اعتماد مالية خادمًا — يجري الترميز في متصفحك.'
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
        title: 'أسواق المزارعين والمتاجر المؤقتة',
        description: 'استقبل دفعًا بلا لمس في كشك أو معرض حرف، بلا جهاز وبلا قارئ بطاقات.'
      },
      {
        title: 'فواتير المستقلين والمقاولين',
        description: 'رمز على فاتورة PDF يتيح للعميل الدفع فورًا بالمسح.'
      },
      {
        title: 'أوعية بقشيش الموسيقيين والعزف في الشارع',
        description: 'اجمع بقشيشًا بلا نقد في عرض حيّ أو مكتب خدمة.'
      },
      {
        title: 'تبرعات الجمعيات الخيرية',
        description: 'رمز تبرع يوضع على طاولة حفل أو لافتة أو نشرة جمع تبرعات.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for PayPal QR Code Payments',
      points: [
        'طالِب بالرابط أولًا. تأكد أن رابط PayPal.me نشط في إعدادات حسابك قبل الطباعة.',
        'عبّئ المبلغ مسبقًا إن شئت. أضفه إلى الرابط — paypal.me/user/25 — لسلعة بسعر ثابت.',
        'التباين. أزرق PayPal الداكن أو الأسود على أبيض يُقرأ أسرع.',
        'حجم الشعار. ابقَ تحت 30% من العرض كي يحافظ تصحيح المستوى H على سلامة البيانات.',
        'اختبر بمال حقيقي. أجرِ دفعة حية صغيرة للتأكد من وصولها إلى محفظة PayPal الصحيحة.'
      ]
    },
    faqs: [
      {
        q: 'كيف أنشئ رمز QR لـ PayPal.me؟',
        a: 'أدخل اسم مستخدم PayPal.me (مثلًا yourbusiness) أو الصق الرابط كاملًا، وصمّمه، ونزّله.'
      },
      {
        q: 'هل يمكنني ضبط مبلغ دفع ثابت في رمز QR؟',
        a: 'أضف المبلغ إلى رابطك — https://paypal.me/yourbusiness/25 لمبلغ 25 دولارًا.'
      },
      {
        q: 'هل يحتاج العميل حساب PayPal للدفع؟',
        a: 'من لديه PayPal يدفع بلمسة؛ ومن ليس لديه يمكنه الدفع ببطاقة خصم أو ائتمان عبر الدفع كضيف في PayPal.'
      },
      {
        q: 'هل هناك أي رسوم من QR Generator Online؟',
        a: 'لا شيء منّا — 0%. تُطبَّق رسوم معاملات PayPal القياسية وفق اتفاقيتك مع PayPal.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR الخاصة بـ PayPal؟',
        a: 'لا. يدوم الرمز ما دام حساب PayPal مفتوحًا.'
      },
      {
        q: 'هل يمكنني تضمين شعار PayPal في المنتصف؟',
        a: 'ضع أيقونة «PP» الخاصة بـ PayPal أو شعارك في المنتصف.'
      },
      {
        q: 'ما أفضل صيغة لطباعة لافتات الصناديق؟',
        a: 'SVG متجهي لحامل أكريليك كبير أو لافتة، أو PNG لترويسة فاتورة.'
      },
      {
        q: 'هل معلوماتي المالية آمنة أثناء التوليد؟',
        a: 'نعم. لا يُرسَل شيء؛ يُجمَّع الرمز مباشرة في متصفحك.'
      }
    ],
    bestPractices: 'استخدم هوية PayPal الزرقاء على حامل صندوق أكريليك مع سطر واضح «امسح للدفع بـ PayPal»، وصدّر SVG متجهيًا.'
  },
  '/telegram-qr-code-generator': {
    sections: [
      {
        title: 'نمِّ مجتمعك على Telegram',
        paragraphs: [
          'شارك روابط الانضمام لمجموعات Telegram عبر رموز QR على المواقع والمنتديات ووسائل التواصل والمواد المطبوعة لبناء مجتمع بلا عناء.',
          'يدعم الملفات الشخصية والمجموعات العامة وروابط الدعوة الخاصة والقنوات.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Protocols of Telegram QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ Telegram الرابط الشامل (`https://t.me/{username}` أو `https://t.me/joinchat/{inviteHash}`). امسحه ويربطه الهاتف بمخطط Telegram (`tg://resolve?domain={username}`)، فيفتح الدردشة أو المجموعة أو القناة أو البوت في التطبيق.',
        'ذلك يزيل خطوة البحث ويتيح للمستخدم الانضمام إلى قناة عامة أو مجتمع خاص أو دردشة دعم بلمسة واحدة.',
        'الرموز ثابتة وخاصة وقابلة للتصميم بالكامل بأزرق Telegram مع تصدير متجهي SVG.'
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
        title: 'أدخل اسم مستخدم أو مجموعة أو رابط قناة Telegram',
        description: 'اكتب اسم مستخدمك أو اسم القناة (مثلًا username)، أو الصق رابط دعوة مجموعة.'
      },
      {
        number: 2,
        title: 'صمّم بأزرق Telegram وشعار طائرة الورق',
        description: 'استخدم أزرق Telegram (#0088CC)، واضبط أشكال الزوايا، وأضف شعار طائرة الورق.'
      },
      {
        number: 3,
        title: 'نزّل بصيغة SVG أو PNG',
        description: 'صدّر الرمز عالي الدقة لموقع أو نشرة أو تغليف أو لافتة فعالية.'
      }
    ],
    features: [
      {
        title: 'تشغيل تطبيق Telegram بلمسة واحدة',
        description: 'المسح يفتح تطبيق Telegram مباشرة على الدردشة أو المجموعة أو القناة.'
      },
      {
        title: 'دائم ومجاني للأبد',
        description: 'رمز ثابت يظل يعمل للأبد، بلا حدّ مسح وبلا تكلفة.'
      },
      {
        title: 'صيغة SVG متجهية',
        description: 'متجهي قابل للتحجيم للافتات والنشرات والبضائع.'
      },
      {
        title: 'حماية خصوصية 100%',
        description: 'يعمل من جانب المتصفح، بلا تسجيل للرابط أو تخزين له.'
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
        title: 'نمو مجتمعات الكريبتو و Web3',
        description: 'نشرة أو رمز مؤتمر يجذب المستثمرين إلى مجموعتك الرسمية على Telegram.'
      },
      {
        title: 'قنوات دعم العملاء',
        description: 'رمز على التغليف أو دليل يفتح دردشة دعم فردية.'
      },
      {
        title: 'قنوات بثّ الأخبار والإشارات',
        description: 'رمز في منشور مطبوع يرسل القرّاء إلى موجزك اللحظي على Telegram.'
      },
      {
        title: 'مجموعات حاضري الفعاليات والمؤتمرات',
        description: 'رمز على الشارة يُدخل الحاضرين إلى مجموعة تواصل مؤقتة.'
      }
    ],
    troubleshooting: {
      title: '5 Common Telegram QR Code Pitfalls',
      points: [
        'علامة @ في اسم المستخدم. أدخل اسم المستخدم النظيف دون «@» لرابط t.me صالح.',
        'المجموعات الخاصة. لمجموعة خاصة، استخدم صيغة الدعوة الكاملة t.me/joinchat أو t.me/+.',
        'التباين. أبقِ المقدمة الزرقاء على خلفية بيضاء.',
        'حجم الشعار. ينبغي ألا يغطي شعار المنتصف أكثر من 30% من العرض.',
        'اختبر على الجوال. تأكد أن المسح يفتح تطبيق Telegram على iOS وAndroid معًا.'
      ]
    },
    faqs: [
      {
        q: 'كيف أنشئ رمز QR لقناة أو مجموعة Telegram؟',
        a: 'انسخ رابط القناة العام (https://t.me/yourchannel) أو رابط دعوة المجموعة، والصقه، وصمّمه، ونزّله.'
      },
      {
        q: 'هل يفتح المسح تطبيق Telegram تلقائيًا؟',
        a: 'على هاتف مثبَّت عليه Telegram، يفتح رابط t.me الدردشة أو القناة مباشرة.'
      },
      {
        q: 'هل يمكنني توليد رمز QR لبوت Telegram؟',
        a: 'الصق رابط البوت (مثل https://t.me/your_bot) ويفتح المسح البوت مع زر البدء جاهزًا.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR الخاصة بـ Telegram؟',
        a: 'لا — ما دام الرابط حيًّا، فالرمز كذلك.'
      },
      {
        q: 'هل يمكنني تضمين شعار طائرة ورق Telegram في المنتصف؟',
        a: 'ارفع أيقونة Telegram أو شعار مجتمعك للمنتصف.'
      },
      {
        q: 'هل هناك أي رسوم أو حدود مسح؟',
        a: 'لا — مجاني، مسح غير محدود، بلا علامة مائية، وبلا تسجيل.'
      },
      {
        q: 'أي صيغ ملفات يمكنني تنزيلها؟',
        a: 'PNG عالي الدقة، وSVG متجهي، وWebP.'
      },
      {
        q: 'هل يبقى رابط مجموعتي آمنًا أثناء التوليد؟',
        a: 'يبقى محليًا — يُجمَّع الرمز على جهازك ولا يُرفَع أبدًا.'
      }
    ],
    bestPractices: 'استخدم أزرق Telegram (#0088CC) مع شعار طائرة الورق، وأضف سطر «امسح للانضمام إلى مجتمع Telegram»، ونزّل SVG متجهيًا للطباعة.'
  },
  '/tiktok-qr-code-generator': {
    sections: [
      {
        title: 'ترويج TikTok عبر المنصات',
        paragraphs: [
          'اطبع رموز QR لـ TikTok على البضائع والتغليف والملصقات ومواد الفعاليات لجلب متابعين من العالم الحقيقي إلى ملفك على TikTok.',
          'مثالي للمبدعين والعلامات والأعمال الساعية لتنمية حضورها على TikTok عبر ترويج متعدد المنصات.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Viral Growth via TikTok QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ TikTok معرّف الملف (`https://www.tiktok.com/@{username}`) أو رابط فيديو. مسحة واحدة تُدخل الهاتف إلى تطبيق TikTok عند ملف المبدع.',
        'ذلك يتخطى تسجيل الدخول والبحث، فيتابع المشاهد أو يُعجب أو يدخل تحدي وسم بلمسة واحدة.',
        'رموز ثابتة ودائمة بلا حدّ مسح وبتصدير متجهي SVG كامل.'
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
        title: 'أدخل اسم مستخدم TikTok أو الرابط',
        description: 'اكتب معرّفك دون @ (مثلًا username)، أو الصق رابط الملف كاملًا.'
      },
      {
        number: 2,
        title: 'طبّق ألوان TikTok النيون النابضة',
        description: 'استخدم سماوي TikTok (#00F2EA) والأرجواني (#FF0050)، واختر نمط نقاط، وأضف شعار TikTok.'
      },
      {
        number: 3,
        title: 'نزّل بصيغة SVG أو PNG',
        description: 'صدّر الرمز عالي الدقة للملصقات والنشرات والبطاقات والبضائع.'
      }
    ],
    features: [
      {
        title: 'تشغيل مباشر لتطبيق TikTok',
        description: 'المسح يفتح تطبيق TikTok مباشرة على ملفك للمتابعة بلمسة واحدة.'
      },
      {
        title: 'دائم ومجاني للأبد',
        description: 'رمز ثابت لا ينقضي أبدًا ويقبل مسحًا غير محدود مجانًا.'
      },
      {
        title: 'SVG متجهي للملابس والطباعة',
        description: 'مخرجات متجهية قابلة للتحجيم للطباعة الحريرية على الهوديز والملصقات والملصقات الجدارية.'
      },
      {
        title: 'حماية خصوصية 100%',
        description: 'يُعرَض على جهازك، ولا شيء يُتتبَّع.'
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
        title: 'بطاقات الملابس والبضائع',
        description: 'رمز على بطاقة معلّقة يحوّل المشتري إلى متابع.'
      },
      {
        title: 'الملصقات والتسويق في الشارع',
        description: 'ملصقات بعلامتك تحمل رمزك تدفع اكتشافًا محليًا عضويًا.'
      },
      {
        title: 'عروض المطاعم والتجزئة',
        description: 'رمز يدفع المتسوقين لتصوير مراجعة ووسم علامتك مقابل خصم.'
      },
      {
        title: 'لافتات الحفلات والمهرجانات',
        description: 'رمز كبير في حدث مباشر يروّج لتحدي الوسم.'
      }
    ],
    troubleshooting: {
      title: '5 Common TikTok QR Code Pitfalls',
      points: [
        'علامة @ في المعرّف. أدخل اسم المستخدم النظيف دون «@» لرابط صالح.',
        'التباين. أبقِ المقدمة داكنة على الخلفية.',
        'زلة إملائية. تحقّق من اسم المستخدم مرتين قبل طباعة كبيرة.',
        'اختبر على الجوال. تأكد أن الرمز يفتح تطبيق TikTok على iOS وAndroid معًا.',
        'حجم الشعار. حُدّ شعار المنتصف بنحو ثلث العرض.'
      ]
    },
    faqs: [
      {
        q: 'كيف أنشئ رمز QR لحسابي على TikTok؟',
        a: 'أدخل معرّفك دون @ (أو الصق رابط ملفك)، وصمّمه، ونزّله.'
      },
      {
        q: 'هل يفتح المسح تطبيق TikTok مباشرة؟',
        a: 'على هاتف مثبَّت عليه TikTok، يفتح المسح ملفك في التطبيق.'
      },
      {
        q: 'هل يمكنني الربط بفيديو أو صوت محدد على TikTok؟',
        a: 'انسخ رابط مشاركة الفيديو أو الصوت والصقه.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR الخاصة بـ TikTok؟',
        a: 'لا — الرمز الثابت يعمل إلى أجل غير مسمى، بمسح غير محدود.'
      },
      {
        q: 'هل يمكنني تضمين شعار TikTok في المنتصف؟',
        a: 'ارفع شعار TikTok أو صورة المبدع للمنتصف.'
      },
      {
        q: 'ما أفضل صيغة لطباعة الملصقات والملابس؟',
        a: 'SVG متجهي للطباعة الحريرية وقاطعات الفينيل، أو PNG للرقمي.'
      },
      {
        q: 'هل هناك حدود مسح على رموز QR المجانية لـ TikTok؟',
        a: 'لا — مسح غير محدود مدى الحياة، مجانًا.'
      },
      {
        q: 'هل يمكنني استخدام ألوان TikTok المخصصة؟',
        a: 'استخدم السماوي الأيقوني (#00F2EA) والأرجواني (#FF0050).'
      }
    ],
    bestPractices: 'استخدم ألوان TikTok النيون، وأضف سطرًا جذابًا مثل «امسح للمشاهدة على TikTok»، وصدّر SVG متجهيًا لطباعة حادة.'
  },
  '/twitter-qr-code-generator': {
    sections: [
      {
        title: 'نمِّ جمهورك على X / Twitter برموز QR',
        paragraphs: [
          'اجسر الفجوة بين الحضور الفعلي والرقمي بإضافة رموز QR لـ Twitter إلى المواد المطبوعة وتواقيع البريد ولافتات الفعاليات.',
          'يدعم روابط twitter.com و x.com معًا، إضافة إلى إدخال المعرّف مباشرة لتوليد الرابط تلقائيًا.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of Twitter / X QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ Twitter / X رابط الملف (`https://x.com/{handle}` أو `https://twitter.com/{handle}`). امسحه ويفتح معالج الروابط الشاملة في الهاتف تطبيق X مباشرة عند ذلك الملف أو المنشور.',
        'من هناك يمكن للمستخدم المتابعة أو الإعجاب بتغريدة أو الانضمام إلى Space أو الدخول في سلسلة وسم دون كتابة في الأثناء.',
        'هذه الرموز ثابتة ولا تنتهي صلاحيتها — تحكّم كامل في الألوان، وأشكال عيون مخصصة، وتصدير متجهي SVG للطباعة.'
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
        title: 'أدخل معرّف Twitter/X أو الرابط',
        description: 'اكتب المعرّف دون @، أو الصق رابط x.com أو twitter.com كاملًا.'
      },
      {
        number: 2,
        title: 'صمّم وأضف شعار X أو الطائر',
        description: 'اضبط الألوان ونمط النقاط وأشكال الزوايا، وأضف شعار X أو الطائر في المنتصف.'
      },
      {
        number: 3,
        title: 'نزّل بصيغة SVG أو PNG',
        description: 'صدّر الرمز عالي الدقة للنشرات والشرائح والكتب أو البضائع.'
      }
    ],
    features: [
      {
        title: 'تشغيل مباشر لتطبيق X',
        description: 'يفتح تطبيق X مباشرة على ملفك للمتابعة بلمسة واحدة.'
      },
      {
        title: 'دائم ومجاني للأبد',
        description: 'رمز ثابت بلا انتهاء صلاحية، مفتوح لأي عدد من عمليات المسح، بلا رسم.'
      },
      {
        title: 'SVG متجهي للطباعة',
        description: 'يتحجّم إلى لافتة مؤتمر أو غلاف كتاب أو ملصق.'
      },
      {
        title: 'خاص 100%',
        description: 'يُولَّد محليًا، بلا جمع بيانات.'
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
        title: 'الكلمات الرئيسية والندوات',
        description: 'رمز على الشريحة الختامية يدفع تفاعل الجمهور الحيّ.'
      },
      {
        title: 'كتب المؤلفين والمقالات المطبوعة',
        description: 'على غلاف كتاب أو مقال، رمز يتيح للقرّاء متابعة تعليقاتك اللحظية.'
      },
      {
        title: 'أغلفة البودكاست والبضائع',
        description: 'أرسل المستمعين إلى نقاش حيّ على X أو مساحة مجتمع.'
      },
      {
        title: 'لافتات الفعاليات وشارات اللقاءات',
        description: 'تبادل الملفات فورًا في لقاء تقني أو مؤتمر.'
      }
    ],
    troubleshooting: {
      title: '5 Common Twitter / X QR Code Pitfalls',
      points: [
        'علامة @ في الرابط. أدخل المعرّف الخام («handle» لا «@handle») كي يتكوّن الرابط بشكل صحيح.',
        'أي نطاق يعمل. كلٌّ من x.com و twitter.com مدعوم ويعيد التوجيه إلى ملفك.',
        'التباين. أبقِ الوحدات الداكنة على خلفية بيضاء أو فاتحة.',
        'حجم الشعار. أي شيء يتجاوز نحو 30% من العرض يبدأ بإفشال تصحيح المستوى H.',
        'اختبر أولًا. امسح على iOS وAndroid قبل طباعة كبيرة.'
      ]
    },
    faqs: [
      {
        q: 'كيف أنشئ رمز QR لـ Twitter / X؟',
        a: 'اكتب معرّفك أو الصق رابط ملفك، وصمّمه، ونزّله.'
      },
      {
        q: 'هل يدعم كلًّا من x.com و twitter.com؟',
        a: 'كلا الرابطين مدعوم ويؤدّي إلى ملفك.'
      },
      {
        q: 'هل يفتح المسح تطبيق X على الجوال؟',
        a: 'على جهاز مثبَّت عليه تطبيق X، يفتح المسح ملفك في التطبيق.'
      },
      {
        q: 'هل يمكنني الربط بتغريدة أو سلسلة محددة؟',
        a: 'انسخ رابط التغريدة والصقه.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR الخاصة بـ Twitter؟',
        a: 'لا — الرمز الثابت يعمل إلى أجل غير مسمى.'
      },
      {
        q: 'هل يمكنني تضمين شعار X أو Twitter في المنتصف؟',
        a: 'ارفع أيقونة X أو شعار الطائر للمنتصف.'
      },
      {
        q: 'أي صيغ ملفات يمكنني تنزيلها؟',
        a: 'PNG عالي الدقة، وSVG متجهي، وWebP.'
      },
      {
        q: 'هل هناك أي رسم أو حدّ مسح؟',
        a: 'لا — مجاني، مسح غير محدود، بلا علامة مائية.'
      }
    ],
    bestPractices: 'استخدم تصميمًا نظيفًا عالي التباين بالأبيض والأسود مع شعار X، وأضف سطر «امسح للمتابعة على X»، وصدّر SVG متجهيًا للطباعة.'
  },
  '/linkedin-qr-code-generator': {
    sections: [
      {
        title: 'تواصل مهني بلا عناء',
        paragraphs: [
          'اطبع رموز QR لـ LinkedIn على بطاقات العمل وشارات المؤتمرات وتواقيع البريد لبناء اتصالات مهنية بلا احتكاك.',
          'عند المسح، يفتح ملفك على LinkedIn مباشرة في تطبيق LinkedIn أو المتصفح للاتصال بنقرة واحدة.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of LinkedIn Profile QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ LinkedIn معرّف الملف العام (`https://www.linkedin.com/in/{profileId}`) أو رابط صفحة شركة (`https://www.linkedin.com/company/{companyId}`). مسحة واحدة تقفز بالهاتف مباشرة إلى تطبيق LinkedIn عند ذلك الملف.',
        'ذلك التشغيل المباشر هو ما يجعله مفيدًا في مؤتمر أو اجتماع عميل — طلب اتصال أو رسالة أو متابعة بلمسة، دون تهجئة اسم في مربع بحث.',
        'الرمز ثابت ودائم، فبطاقة عمل مطبوعة أو قطعة أعمال تظل تُمسَح مهما طال حملك لها.'
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
        title: 'انسخ رابط ملفك العام على LinkedIn',
        description: 'افتح ملفك، وانسخ الرابط العام (مثل linkedin.com/in/yourname)، والصقه.'
      },
      {
        number: 2,
        title: 'صمّم بأزرق LinkedIn المهني',
        description: 'استخدم أزرق LinkedIn (#0A66C2)، واضبط أشكال زوايا نظيفة، وأضف شعار «in».'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا جاهزًا للطباعة',
        description: 'خذ SVG لبطاقات العمل البارزة وشارات المؤتمرات والسير الذاتية والأعمال.'
      }
    ],
    features: [
      {
        title: 'تشغيل مباشر لتطبيق LinkedIn',
        description: 'المسح يفتح تطبيق LinkedIn لطلب اتصال بلمسة واحدة.'
      },
      {
        title: 'دائم ومجاني للأبد',
        description: 'رمز ثابت يبقى صالحًا إلى ما لا نهاية، باتصالات غير محدودة وبلا رسوم.'
      },
      {
        title: 'SVG متجهي للطباعة الفاخرة',
        description: 'حاد على البطاقات المطفأة والمطبوعة بالرقائق والبارزة.'
      },
      {
        title: 'خاص وآمن 100%',
        description: 'لا تُجمَع بيانات اعتماد أو بيانات شخصية — يجري الترميز في متصفحك.'
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
        title: 'بطاقات المدراء ورواد الأعمال',
        description: 'رمز خلف البطاقة يحوّل لقاءً أول إلى اتصال محفوظ.'
      },
      {
        title: 'شارات المؤتمرات ولقاءات التواصل',
        description: 'رمز على الشارة يتيح للناس الاتصال في ثوانٍ خلال استراحة تواصل.'
      },
      {
        title: 'السير الذاتية وأعمال المتقدمين للوظائف',
        description: 'رمز على السيرة الذاتية يتيح لمسؤول التوظيف فتح توصياتك وأعمالك دون كتابة.'
      },
      {
        title: 'توليد عملاء B2B في المعارض',
        description: 'رمز جناح يشجّع الزوّار المؤسسيين على متابعة صفحة الشركة.'
      },
      {
        title: 'شرائح عروض المتحدثين',
        description: 'رمز على الشريحة الختامية يتيح للجمهور الاتصال والبقاء على تواصل.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for LinkedIn QR Scannability',
      points: [
        'رابط مخصص نظيف. اضبط رابطًا عامًا مرتبًا — linkedin.com/in/john-doe — بدل سلسلة طويلة عشوائية، وتصبح المصفوفة أبسط.',
        'ظهور عام. فعّل ظهور الملف العام كي يستطيع ماسح بلا حساب LinkedIn رؤية تفاصيلك.',
        'تباين قوي. أزرق داكن أو أسود على ورق أبيض يُقرأ بموثوقية في قاعة مؤتمر خافتة الإضاءة.',
        'منطقة صامتة واضحة. اترك حدًا نظيفًا بلا نص أو رسوم تتداخل معه.',
        'دعوة إجراء مقروءة. اقرن الرمز بعبارة مقروءة «امسح للاتصال على LinkedIn».'
      ]
    },
    faqs: [
      {
        q: 'كيف أجد رابط ملفي العام على LinkedIn؟',
        a: 'اعرض ملفك وانسخ الرابط من شريط المتصفح، أو من قسم «معلومات الاتصال».'
      },
      {
        q: 'هل يفتح المسح تطبيق LinkedIn على الجوال؟',
        a: 'يشغّل تطبيق LinkedIn مباشرة على صفحة ملفك.'
      },
      {
        q: 'هل يمكنني إضافة رمز QR لـ LinkedIn إلى سيرتي الذاتية المطبوعة؟',
        a: 'يتيح لمسؤول التوظيف فتح توصياتك وأعمالك وسجلك الكامل بلمسة واحدة.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR لـ LinkedIn؟',
        a: 'لا. يبقى صالحًا طالما بقي رابط ملفك صالحًا.'
      },
      {
        q: 'هل يمكنني إنشاء رمز QR لصفحة شركة على LinkedIn؟',
        a: 'الصق رابط صفحة الشركة (مثل https://www.linkedin.com/company/yourbrand) وولّد.'
      },
      {
        q: 'هل يمكنني تضمين شعار LinkedIn في المنتصف؟',
        a: 'ضع شعار «in» أو صورتك في المنتصف، ويغطيه تصحيح المستوى H.'
      },
      {
        q: 'ما الحجم الموصى به لبطاقات العمل؟',
        a: '‏20 × 20 مم (0.8 × 0.8 بوصة) على الأقل بتباين حاد.'
      },
      {
        q: 'هل مولّد رموز QR لـ LinkedIn هذا مجاني؟',
        a: 'نعم — مسح غير محدود، بلا علامة مائية، وبلا تسجيل.'
      }
    ],
    bestPractices: 'اضبط رابط LinkedIn مخصصًا نظيفًا لمصفوفة أبسط، واطبع بـ 22×22 مم أو أكبر على بطاقة، واستخدم أزرق LinkedIn (#0A66C2) على أبيض.'
  },
  '/youtube-qr-code-generator': {
    sections: [
      {
        title: 'ادفع مشاهدات ومشتركي YouTube من التسويق خارج الإنترنت',
        paragraphs: [
          'أضف رموز QR لـ YouTube إلى نشرات الفعاليات وعروض المؤتمرات وأدلة المنتجات والإعلانات المطبوعة لتوجيه الزيارات إلى محتوى الفيديو لديك.',
          'يدعم روابط القنوات وروابط الفيديو الفردية وروابط قوائم التشغيل لأقصى مرونة.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of YouTube QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ YouTube رابط YouTube قياسيًا — `https://youtube.com/@channel` أو `https://youtu.be/{videoId}` أو رابط قائمة تشغيل. امسحه ويربط الهاتف رابط HTTPS بنيّة تطبيق YouTube (`vnd.youtube:{videoId}`)، فيبدأ التشغيل داخل التطبيق دون التفاف عبر متصفح.',
        'ذلك التسليم يمنح أفضل تجربة مشاهدة: يمكن للمستخدم الإعجاب والتعليق والاشتراك في الحال، والبثّ بدقة HD أو 4K تحت حسابه المسجّل دخوله.',
        'يخزّن الرمز عنوان الفيديو أو القناة الأساسي الدقيق في المصفوفة، فيظل صالحًا طوال وجود المحتوى.'
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
        title: 'الصق رابط فيديو أو قناة أو قائمة تشغيل YouTube',
        description: 'انسخ رابط قناتك أو فيديوك أو قائمة تشغيلك العام والصقه.'
      },
      {
        number: 2,
        title: 'خصّص بأحمر YouTube وأيقونة التشغيل',
        description: 'استخدم أحمر YouTube (#FF0000)، واختر نمط نقاط، وضع شعار التشغيل في المنتصف.'
      },
      {
        number: 3,
        title: 'نزّل بصيغة SVG أو PNG',
        description: 'خذ SVG للملصقات واللافتات والتغليف، أو PNG عالي الدقة لشريحة.'
      }
    ],
    features: [
      {
        title: 'تشغيل فيديو مباشر في التطبيق الأصلي',
        description: 'يفتح الفيديو أو القناة في تطبيق YouTube، حيث يكون التفاعل أعلى.'
      },
      {
        title: 'مسح دائم وغير محدود',
        description: 'رمز ثابت يعمل للأبد ويتعامل مع أي عدد من المشاهدات، مجانًا.'
      },
      {
        title: 'SVG متجهي للطباعة كبيرة الحجم',
        description: 'يتحجّم إلى لافتة مؤتمر أو لوحة إعلانية أو خلفية مسرح دون تشوّش.'
      },
      {
        title: 'بنية تُقدّم الخصوصية أولًا',
        description: 'يُصنَع على جهازك، بلا تتبّع أو تصنيف.'
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
        title: 'أدلة فيديو للتجميع والإعداد',
        description: 'رمز على التغليف يستبدل كتيّبًا ورقيًا مربكًا بفيديو واضح خطوة بخطوة.'
      },
      {
        title: 'الكلمات الرئيسية والعروض التقديمية',
        description: 'رمز على الشريحة الختامية يتيح للقاعة الاشتراك أو إعادة مشاهدة العرض التوضيحي.'
      },
      {
        title: 'تسويق الموسيقى والأفلام',
        description: 'رمز على غلاف ألبوم أو نشرة حفل أو ملصق فيلم يبثّ المقطع الدعائي أو الفيديو الموسيقي.'
      },
      {
        title: 'جولات فيديو للعقارات',
        description: 'رمز على لافتة الحديقة يفتح جولة سينمائية لمشترٍ مارّ.'
      },
      {
        title: 'تغليف الطهي ودروس الوصفات',
        description: 'رمز على عبوة مكونات يقود إلى درس طبخ.'
      }
    ],
    troubleshooting: {
      title: '5 Common YouTube QR Code Issues & Solutions',
      points: [
        'فيديو خاص. اضبطه على عام أو غير مدرَج كي يستطيع كل ماسح مشاهدته.',
        'تقييد عمري. فيديو مقيّد بالعمر يطلب من المشاهد تسجيل الدخول أولًا، ما يضيف احتكاكًا.',
        'رابط قائمة تشغيل مؤقت. استخدم رابط قائمة تشغيل عامة دائمة، لا رابط قائمة انتظار زائل.',
        'تباين منخفض. تجنّب الأحمر الفاتح على الوردي؛ أبقِ المقدمة الحمراء على خلفية بيضاء.',
        'رابط مشاركة طويل. استخدم صيغة youtu.be المختصرة لرمز أنظف وأقل كثافة.'
      ]
    },
    faqs: [
      {
        q: 'كيف أربط رمز QR بقناتي على YouTube؟',
        a: 'انسخ رابط قناتك (مثل https://youtube.com/@channel)، والصقه، وصمّمه، ونزّله.'
      },
      {
        q: 'هل يمكنني إنشاء رمز QR يطالب المستخدمين بالاشتراك تلقائيًا؟',
        a: 'أضف ‎?sub_confirmation=1 إلى رابط قناتك — https://youtube.com/@channel?sub_confirmation=1 — فيُظهر المسح مطالبة اشتراك.'
      },
      {
        q: 'هل يفتح المسح تطبيق YouTube الأصلي على الجوال؟',
        a: 'على الجوال يشغّل تطبيق YouTube مباشرة على الفيديو أو القناة.'
      },
      {
        q: 'هل يمكنني الربط بطابع زمني محدد في فيديو YouTube؟',
        a: 'أضف ‎?t=1m30s إلى رابط الفيديو لبدء التشغيل عند الدقيقة الواحدة والنصف.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR لـ YouTube؟',
        a: 'لا — يظل يشير إلى الفيديو طوال وجود الفيديو.'
      },
      {
        q: 'هل يمكنني إضافة أيقونة تشغيل YouTube في المنتصف؟',
        a: 'ضع زر تشغيل أو صورة قناتك في المنتصف، ويغطيه تصحيح المستوى H.'
      },
      {
        q: 'هل هناك حدود مسح على رموز QR المجانية لـ YouTube؟',
        a: 'لا. كل رمز هنا يتحمّل مسحًا غير محدود مدى الحياة، مجانًا.'
      },
      {
        q: 'ما صيغ الملفات المتاحة للتنزيل؟',
        a: 'PNG عالي الدقة، وSVG متجهي، وWebP.'
      }
    ],
    bestPractices: 'أضف سطرًا واضحًا مثل «امسح لمشاهدة درس الفيديو»، واستخدم رابط youtu.be المختصر لمصفوفة أبسط، واختبر المسح من المسافة التي سيقف عندها الناس فعلًا.'
  },
  '/instagram-qr-code-generator': {
    sections: [
      {
        title: 'نمِّ متابعيك على Instagram برموز QR للطباعة والرقمي',
        paragraphs: [
          'اطبع رموز QR لـ Instagram على بطاقات العمل والتغليف وقوائم المطاعم ولافتات الفعاليات والبضائع لجذب متابعين عضويين.',
          'عند المسح، يفتح رمز QR تطبيق Instagram مباشرة على صفحة ملفك للمتابعة بلمسة واحدة.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of Instagram QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ Instagram رابطًا شاملًا بالصيغة `https://instagram.com/{username}`. امسحه ويحلّ الهاتف مخطط التطبيق الأصلي (`instagram://user?username={username}`)، فيفتح الملف داخل تطبيق Instagram بدل متصفح.',
        'ولأن المستخدم مسجّل دخوله في تطبيقه أصلًا، يتخطى ذلك التسليم خطوة تسجيل الدخول كليًا — يصل إلى ملفك جاهزًا للنقر على «متابعة» أو تصفّح Reels لديك.',
        'الرموز دائمة وثابتة، مبنية بالمستوى H (احتياط 30%). صمّم واحدًا بتدرّج Instagram (#E1306C، #F77737، #FCAF45) وضع رمز الكاميرا أو شعارك في المنتصف.'
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
        title: 'أدخل معرّف Instagram أو رابط الملف',
        description: 'اكتب اسم المستخدم دون @ (مثلًا yourbrand)، أو الصق رابط الملف كاملًا.'
      },
      {
        number: 2,
        title: 'طبّق ألوان تدرّج Instagram والشعار',
        description: 'استخدم تدرّج Instagram، واختر نمط النقاط، وضع شعار الكاميرا في المنتصف.'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا للطباعة أو PNG عالي الدقة',
        description: 'خذ SVG للبطاقات والملصقات والتغليف واللافتات، أو PNG عالي الدقة للرقمي.'
      }
    ],
    features: [
      {
        title: 'ربط عميق بالتطبيق الأصلي',
        description: 'المسح يُدخل المستخدم إلى تطبيق Instagram المثبّت لمتابعة بلمسة واحدة.'
      },
      {
        title: 'مسح دائم وغير محدود',
        description: 'رمز Instagram ثابت بلا تاريخ انتهاء وبلا حدّ مسح، مجانًا.'
      },
      {
        title: 'SVG متجهي للطباعة الفعلية',
        description: 'يتحجّم من بطاقة منتج 2 سم إلى لافتة معرض دون تشوّش.'
      },
      {
        title: 'خصوصية 100% وبلا تتبّع',
        description: 'كل شيء يعمل من جانب المتصفح، بلا تتبّع وبلا تسجيل وبلا تسجيل دخول.'
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
        title: 'تجارب فتح العلبة في التجارة الإلكترونية',
        description: 'رمز على قسيمة التعبئة يدفع المشترين لنشر صورة ووسم علامتك.'
      },
      {
        title: 'لافتات طاولات المطاعم والمقاهي',
        description: 'يقفز الرواد مباشرة إلى قائمتك المصوّرة و reels الطعام والقصص المميزة.'
      },
      {
        title: 'صالونات التجميل واستوديوهات اللياقة',
        description: 'اعرض تحولات قبل-وبعد و reels التمارين للعملاء المنتظرين في الاستقبال.'
      },
      {
        title: 'تسويق الأزياء والملابس',
        description: 'رمز على بطاقة معلّقة يفتح أفكار تنسيق و lookbooks حقيقية للعملاء أمام المتسوّق.'
      },
      {
        title: 'معارض الفنانين والمبدعين',
        description: 'رمز بجوار العمل الفني يتيح لزائر المعرض متابعة الرحلة الإبداعية لحظيًا.'
      }
    ],
    troubleshooting: {
      title: '5 Common Instagram QR Code Scanning Issues & Fixes',
      points: [
        'علامة @ في المعرّف. أدخل اسم المستخدم دون «@» (استخدم «brandname» لا «@brandname») لرابط صالح.',
        'حساب خاص. إن كان الملف خاصًا، على الماسحين طلب المتابعة بدل رؤية الشبكة فورًا.',
        'تباين منخفض. مقدمة وردية فاتحة على أبيض لا تترك للكاميرا ما تثبّت عليه. أبقِ التباين عاليًا.',
        'شعار كبير جدًا. أبقِه تحت 30% من عرض الرمز ويظل تصحيح الأخطاء قادرًا على أداء عمله.',
        'تغيير المعرّف. أعد تسمية حسابك وينكسر كل رمز مطبوع. ثبّت المعرّف قبل طباعة كبيرة.'
      ]
    },
    faqs: [
      {
        q: 'كيف أنشئ رمز QR لملفي على Instagram؟',
        a: 'أدخل اسم المستخدم دون @ (أو الصق رابط ملفك)، واضبط ألوانك وشعارك، ونزّله — مجانًا.'
      },
      {
        q: 'هل يفتح المسح تطبيق Instagram مباشرة؟',
        a: 'على iPhone أو Android حديث، يفتح الرابط الشامل ملفك داخل تطبيق Instagram بدل متصفح.'
      },
      {
        q: 'هل يمكنني إضافة شعار Instagram إلى رمز QR؟',
        a: 'يمنحك المستوى H مساحة لرمز الكاميرا، أو أيقونتك، فوق المنتصف.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR لـ Instagram؟',
        a: 'لا — الرمز الثابت دائم، بمسح غير محدود.'
      },
      {
        q: 'هل يمكنني الربط بـ Reel أو منشور محدد على Instagram؟',
        a: 'انسخ رابط الـ Reel أو المنشور والصق الرابط كاملًا.'
      },
      {
        q: 'ما أفضل صيغة لطباعة الملصقات والتغليف؟',
        a: 'SVG متجهي لمطبعة تجارية وقاطعة ملصقات، أو PNG للرقمي.'
      },
      {
        q: 'هل مولّد رموز QR لـ Instagram هذا مجاني للاستخدام التجاري؟',
        a: 'نعم — بلا علامة مائية وبلا حدّ مسح وبلا اشتراك.'
      },
      {
        q: 'أي نسبة تباين أستخدم لرموز QR الخاصة بـ Instagram؟',
        a: '‏4.5:1 على الأقل بين الوحدات والخلفية. أرجواني داكن أو بنفسجي على أبيض أو أصفر فاتح يُمسح بنقاء بالغ.'
      }
    ],
    bestPractices: 'استخدم تدرّج Instagram للتعرّف الفوري، وأضف سطرًا واضحًا «امسح لمتابعتنا»، واختبر الطباعة تحت عدة إضاءات مختلفة قبل تشغيل كبير.'
  },
  '/googleform-qr-code-generator': {
    sections: [
      {
        title: 'ارفع معدلات الاستجابة للاستبيانات والملاحظات إلى الحد الأقصى',
        paragraphs: [
          'وضع رمز QR لـ Google Forms على تغليف المنتجات أو الإيصالات أو لافتات الفعاليات أو شرائح العرض يتيح للجمهور إكمال الاستبيانات فورًا على أجهزتهم المحمولة.',
          'تخلّص من أخطاء الإدخال اليدوي للبيانات وارفع معدلات استجابة العملاء بوصول مباشر بلا احتكاك.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Google Forms Survey & Feedback QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ Google Forms الرابط المباشر لنموذج منشور — استبيان رضا، أو تأكيد حضور لفعالية، أو اختبار صفّي. امسحه، ويُحمَّل النموذج المتجاوب مباشرة في متصفح الهاتف — بلا رابط طويل عرضة للأخطاء تكتبه عن إيصال.',
        'كتابة رابط هي حيث تنهار معدلات استجابة الملاحظات، إذ تنخفض بما يفوق 80%. الرمز يزيل تلك الخطوة: يمسح المستجيب، ويتنقّل عبر الأسئلة، ويرسل في ثوانٍ.',
        'كل ما يرسلونه يتدفّق مباشرة إلى لوحة Google Forms و Google Sheet المرتبطة لحظيًا، جاهزًا لمخططات حيّة وتنبيهات آلية وأي Zapier أو webhook وصّلته.'
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
        title: 'احصل على رابط نموذجك المنشور والصقه',
        description: 'في Google Forms، انقر زر الإرسال البنفسجي، واختر أيقونة الرابط، وضع علامة على «اختصار الرابط»، والصق النتيجة.'
      },
      {
        number: 2,
        title: 'صمّم ببنفسجي Forms وأدرج شعار العلامة',
        description: 'صمّم الوحدات، وطبّق بنفسجي Google Forms (#7248B9) أو ألوانك، وضع أيقونة في المنتصف.'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا لعروض الطاولة واللافتات',
        description: 'خذ SVG لبطاقات الطاولة والإيصالات وملصقات الصفوف، أو PNG لشريحة عرض.'
      }
    ],
    features: [
      {
        title: 'ادفع معدلات استجابة ومراجعة انفجارية',
        description: 'التقط الملاحظات بينما الوجبة أو الزيارة لا تزال طازجة — بلا رابط للكتابة يختفي التسرّب.'
      },
      {
        title: 'مزامنة لحظية مع Google Sheets ولوحات المعلومات',
        description: 'كل إرسال يصل فورًا إلى جدولك المرتبط للتحليل الحيّ والتنبيهات.'
      },
      {
        title: 'إدخال بيانات محمول بلا لمس وصحّي',
        description: 'بلا حوامل أوراق أو أقلام مشتركة في عيادة أو مطعم أو صف — يستخدم كلٌّ هاتفه.'
      },
      {
        title: 'صلاحية دائمة مدى الحياة بلا رسوم',
        description: 'رمز Forms ثابت بلا انتهاء صلاحية يجمع استجابات غير محدودة بلا تكلفة.'
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
        title: 'استبيانات رضا الضيوف في المطاعم والضيافة',
        description: 'رمز بطاقة طاولة يطلب من الرواد تقييم الخدمة والطعام في أقل من دقيقة.'
      },
      {
        title: 'الاختبارات الصفّية والحضور واستطلاعات الطلاب',
        description: 'يعرض المعلّم رمز Forms كي يمسح الطلاب لإرسال الواجبات أو الاختبارات أو الحضور.'
      },
      {
        title: 'التقاط العملاء والاستفسارات في أجنحة المعارض',
        description: 'اجمع اهتمامات زائر وتفاصيل تواصله مباشرة في جدول بيانات من هاتفه.'
      },
      {
        title: 'تأكيد حضور الفعاليات وتسجيل ورش العمل',
        description: 'رمز على ملصق يتيح للحاضرين التسجيل في الجلسات والوجبات في الحال.'
      },
      {
        title: 'استقبال المرضى وفحوص الصحة',
        description: 'يُكمل المرضى استبيان تسجيل وصول بلا لمس على هاتفهم في غرفة الانتظار.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Google Forms QR Code Scanning & Access Issues',
      points: [
        'تسجيل دخول إجباري. ما لم تكن تحتاجه حقًا، أوقف «قصر على استجابة واحدة» في إعدادات النموذج — فهو يفرض تسجيل دخول Google ويضيف احتكاكًا.',
        'الرابط الخاطئ. انسخ الرابط العام من مربع الإرسال البنفسجي، لا رابط /edit من شريط المتصفح.',
        'رابط غير مختصر. رابط Forms الخام طويل جدًا. ضع علامة على «اختصار الرابط» في Forms أولًا لمصفوفة أنظف وأقل كثافة.',
        'أسئلة كثيرة جدًا. أبقِ استبيان QR المحمول على خمسة أسئلة أو أقل للحفاظ على الإكمال.',
        'نموذج مغلق. إن أوقفت «قبول الاستجابات»، يصطدم الماسحون برسالة نموذج مغلق. أبقِه مفتوحًا طوال الحملة.'
      ]
    },
    faqs: [
      {
        q: 'كيف أحصل على رابط Google Form العام الصحيح لرمز QR الخاص بي؟',
        a: 'افتح النموذج، وانقر زر الإرسال البنفسجي، واختر أيقونة الرابط، وضع علامة على «اختصار الرابط»، وانسخ النتيجة للصقها.'
      },
      {
        q: 'هل يحتاج المستجيبون حساب Google لملء النموذج؟',
        a: 'لا، ما دمت أوقفت «قصر على استجابة واحدة» وأسئلة رفع الملفات. عندها يكمله أي أحد في متصفح جوال دون تسجيل دخول.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR لـ Google Forms أو تفرض رسومًا؟',
        a: 'لا. رمز Forms ثابت لا ينقضي أبدًا؛ يمكن للمستجيبين مسحه بلا حدّ ولا تُحاسَب أنت أبدًا.'
      },
      {
        q: 'هل يمكنني الربط بنموذج Google يملأ حقولًا معينة تلقائيًا؟',
        a: 'في Forms، استخدم قائمة النقاط الثلاث > «الحصول على رابط معبّأ مسبقًا»، واضبط قيمك الافتراضية، وانسخ ذلك الرابط، وولّد الرمز منه. عندها يرى الماسحون تلك الحقول معبّأة.'
      },
      {
        q: 'أين تذهب الاستجابات المرسَلة؟',
        a: 'إلى علامة تبويب الاستجابات، ولحظيًا إلى أي Google Sheet ربطته.'
      },
      {
        q: 'هل يمكنني تضمين شعار مدرستي أو شركتي في رمز QR؟',
        a: 'يمكنك. يغطي احتياط المستوى H بأريحية أيقونة Forms، أو شعارك، الموضوع في المنتصف.'
      },
      {
        q: 'أي صيغة ملف أفضل لطباعة بطاقات الطاولة والنشرات؟',
        a: 'SVG متجهي لطباعة حادة، أو PNG عالي الدقة لشريحة عرض.'
      },
      {
        q: 'هل يبقى رابط استبياني خاصًا أثناء التوليد؟',
        a: 'نعم. يتم العمل من جانب المتصفح، فلا تُرفَع روابط نماذج أو بيانات استبيان ولا تُخزَّن.'
      }
    ],
    bestPractices: 'أبقِ الاستبيان في ثلاثة إلى خمسة أسئلة، واستخدم رابط Forms المختصر لمصفوفة أبسط، وقدّم حافزًا صغيرًا — خصمًا، دخولًا في سحب — لرفع الإكمال.'
  },
  '/crypto-qr-code-generator': {
    sections: [
      {
        title: 'مدفوعات وتبرعات عملات مشفّرة بلا أخطاء',
        paragraphs: [
          'عناوين محافظ العملات المشفّرة طويلة وعرضة لأخطاء النسخ واللصق اليدوي. رموز QR تضمن دقة عنوان 100% أثناء مدفوعات نقطة البيع أو التبرعات عبر الإنترنت.',
          'يعمل بسلاسة مع MetaMask وTrust Wallet وCoinbase Wallet وكل تطبيقات الكريبتو الرائدة.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Cryptocurrency Payment URI QR Codes',
      paragraphs: [
        'يحمل رمز QR للكريبتو عنوان استلام عامًا وتفاصيل دفع اختيارية في URI دفع قياسي — BIP-0021 الخاص بـ Bitcoin (`bitcoin:<Address>?amount=<Amount>&label=<Label>`)، وEIP-681 الخاص بـ Ethereum (`ethereum:<Address>`)، أو ما يعادلها لـ USDT وSolana وLitecoin.',
        'عناوين الكريبتو سلاسل طويلة لا تسامح من 34 إلى 64 حرفًا (`bc1q...`، `0x...`). اكتب واحدًا يدويًا وحرف واحد خاطئ يرسل الأموال إلى العدم — بشكل دائم، بلا استرداد على البلوكتشين.',
        'رمز QR يزيل ذلك الخطر. امسحه داخل MetaMask أو Trust Wallet أو Coinbase Wallet أو Phantom أو Binance فيمتلئ عنوان المستلم والمبلغ بدقة، ما يجعل دفعة نقطة بيع أو وعاء بقشيش أو تسوية فاتورة سريعة وبلا أخطاء.'
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
        title: 'اختر العملة المشفّرة وأدخل عنوان المحفظة العام',
        description: 'اختر Bitcoin (BTC) أو Ethereum (ETH) أو USDT (TRC-20/ERC-20) أو Solana (SOL) أو Litecoin (LTC) والصق عنوان استلامك العام.'
      },
      {
        number: 2,
        title: 'حدّد مبلغ دفع ثابتًا اختياريًا',
        description: 'اضبط مبلغًا ثابتًا، أو اتركه فارغًا كي يُدخل الدافع بقشيشه أو تبرعه بنفسه.'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا لشاشات نقاط البيع أو الفواتير',
        description: 'أضف شعار العملة وصدّر SVG لحامل صندوق دفع أو PNG لفاتورة PDF.'
      }
    ],
    features: [
      {
        title: 'تخلّص من أخطاء كتابة العنوان الكارثية',
        description: 'يمتلئ العنوان الدقيق تلقائيًا، فلا يستطيع المرسل خسارة أموال بسبب حرف مكتوب خطأً.'
      },
      {
        title: 'دعم العملات المشفّرة والعملات المستقرة الكبرى',
        description: 'رموز دفع قياسية لـ Bitcoin وEthereum وUSDT وSolana وLitecoin وBNB.'
      },
      {
        title: 'الامتثال لمعياري BIP-0021 وEIP-681',
        description: 'يُقرأ بشكل صحيح في MetaMask وTrust Wallet وCoinbase وPhantom وBinance.'
      },
      {
        title: 'أمان تشفيري 100% من جانب المتصفح',
        description: 'يُرمَّز عنوانك العام محليًا في متصفحك. لا تُلمَس المفاتيح الخاصة ولا تُطلَب أبدًا.'
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
        title: 'مدفوعات نقاط بيع المتاجر والمطاعم',
        description: 'رمز عند الصندوق يتيح لعميل الدفع بـ Bitcoin أو USDT من محفظته على الجوال.'
      },
      {
        title: 'أوعية بقشيش صنّاع المحتوى والبثّاثين',
        description: 'رمز تبرع بـ Bitcoin أو Ethereum يوضع على بثّ مباشر أو تراكب Twitch أو مدونة.'
      },
      {
        title: 'تسوية فواتير المستقلين والوكالات',
        description: 'رمز على فاتورة PDF يسوّي مشروعًا دوليًا بسرعة، عبر الحدود، بلا تأخير حوالة.'
      },
      {
        title: 'الأعمال الخيرية وإغاثة الكوارث الإنسانية',
        description: 'يتبرّع المانحون بالكريبتو مباشرة إلى عنوان شفّاف وقابل للتدقيق على السلسلة.'
      },
      {
        title: 'المتاجر المؤقتة والأسواق المفتوحة',
        description: 'استقبل دفعًا بلا لمس في معرض حرف أو سوق طعام، بلا رسوم أجهزة تاجر.'
      }
    ],
    troubleshooting: {
      title: 'Critical Safety Precautions for Crypto QR Codes',
      points: [
        'سمِّ الشبكة. اكتب على الرمز السلسلة بالضبط — «USDT (TRC-20)» مقابل «USDT (ERC-20)». أرسل عبر شبكات غير متوافقة وتضيع الأموال.',
        'عنوان عام فقط. ينبغي أن يحمل رمز الكريبتو عنوان استلامك العام ولا شيء غيره. لا تُرمّز مفتاحًا خاصًا أو عبارة استرداد أو كلمة مرور استعادة أبدًا.',
        'اختبر بمبلغ صغير أولًا. أجرِ معاملة اختبار صغيرة قبل اعتماد دفعة طباعة كبيرة.',
        'تجنّب التصميم الدقيق. التدرجات أو الأحبار المعدنية تربك المستشعر البصري. وحدات داكنة على أبيض.',
        'احمِ العرض. في مكان عام، حامل أكريليك يكشف العبث يمنع أحدهم من لصق ملصق احتيالي فوق رمزك.'
      ]
    },
    faqs: [
      {
        q: 'هل من الآمن عرض رمز QR للكريبتو الخاص بي علنًا؟',
        a: 'نعم — لا يحمل سوى عنوان استلامك العام. يمكن للناس إرسال أموال إلى محفظتك، لكن لا أحد يستطيع السحب منها. تبقى مفاتيحك الخاصة كلها في عهدتك.'
      },
      {
        q: 'أي تطبيقات محافظ يمكنها مسح رموز QR للكريبتو هذه؟',
        a: 'المحافظ الجوّالة القياسية كلها تقرأ رموز URI القياسية — MetaMask وTrust Wallet وCoinbase Wallet وBinance وPhantom وExodus وKraken وElectrum.'
      },
      {
        q: 'هل يمكنني تحديد مبلغ دفع ثابت في رمز QR؟',
        a: 'اضبط مبلغًا اختياريًا مثل 0.005 BTC أو 50 USDT وتملؤه المحفظة تلقائيًا عند المسح.'
      },
      {
        q: 'ماذا يحدث إن أرسل أحدهم عملة مشفّرة مختلفة إلى عنواني؟',
        a: 'إرسال عملة غير متوافقة — Bitcoin إلى عنوان Ethereum مثلًا — قد يفقد الأموال إلى الأبد. لهذا بالضبط ينبغي وسم الرمز بالعملة والشبكة الدقيقتين.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للكريبتو أو تفرض رسوم معاملات؟',
        a: 'الرمز دائم ومجاني. تُطبَّق رسوم غاز البلوكتشين القياسية فقط حين يُرسل دافع معاملة فعليًا — وهذا رسم الشبكة، لا رسمنا.'
      },
      {
        q: 'أين أجد عنوان استلام محفظتي العام؟',
        a: 'افتح تطبيق محفظتك، واذهب إلى استلام، واختر العملة، وانسخ العنوان العام المعروض.'
      },
      {
        q: 'هل يمكنني تضمين شعار Bitcoin أو Ethereum الرسمي في رمز QR؟',
        a: 'بالتأكيد. لأن المستوى H يستطيع إعادة بناء نحو 30% من رمز تالف، يمكن لشعار العملة أن يجلس في المنتصف تمامًا دون أن يكسر شيئًا.'
      },
      {
        q: 'هل تُخزَّن عناوين محفظتي على خوادم QR Generator Online؟',
        a: 'لا. كل شيء يحدث محليًا، فعناوين محفظتك لا تُرفَع ولا تُسجَّل ولا تُتتبَّع أبدًا.'
      }
    ],
    bestPractices: 'تحقّق من عنوان استلامك العام حرفًا حرفًا قبل التوليد، ووسم الرمز بوضوح بالعملة وشبكة البلوكتشين الدقيقتين — فتحويل عبر شبكة خاطئة لا يمكن استرداده.'
  },
  '/event-qr-code-generator': {
    sections: [
      {
        title: 'ارفع حضور فعالياتك بمزامنة تقويم بلمسة واحدة',
        paragraphs: [
          'أضف رموز QR للفعاليات إلى بطاقات «احجز التاريخ» وشارات المؤتمرات وتأكيدات التذاكر أو صفحات هبوط الندوات.',
          'يشمل عنوان الفعالية وطابعي وقت البداية والنهاية وعنوان المكان وملاحظات الوصف.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of iCalendar VEVENT Calendar QR Codes',
      paragraphs: [
        'يحمل رمز QR للفعالية إدخال تقويم بصيغة iCalendar (`BEGIN:VEVENT` / `END:VEVENT`) المعرّفة في RFC 5545. يحتوي على العنوان (`SUMMARY`) والمكان (`LOCATION`) والوصف (`DESCRIPTION`) والبداية (`DTSTART`) والنهاية (`DTEND`) والمنطقة الزمنية.',
        'امسحه ويقرأ الهاتف المحتوى ويعرض ورقة «إضافة إلى التقويم». لمسة واحدة تُدرج الفعالية في Apple Calendar أو Google Calendar أو Outlook، كاملةً بوقت البداية والمكان والتذكير التلقائي.',
        'أتمتة إدخال التقويم هي ما يرفع الحضور. الندوات الفائتة والتواريخ المنسية والحجوزات المزدوجة تعود غالبًا إلى أن أحدهم لم يُضف الفعالية أصلًا — والمسح يزيح تلك الخطوة عن كاهله.'
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
        title: 'أدخل عنوان الفعالية والمكان ووصفًا موجزًا',
        description: 'أضف اسم الفعالية، وعنوان المكان أو رابط الاجتماع، ووصفًا قصيرًا.'
      },
      {
        number: 2,
        title: 'اضبط تاريخ ووقت البداية والنهاية بدقة المنطقة الزمنية',
        description: 'اضبط البداية والنهاية بدقة، بالمنطقة الزمنية المحلية للمكان — فهناك تتسلل أخطاء فرق الساعات.'
      },
      {
        number: 3,
        title: 'خصّص التصميم ونزّل أصول الطباعة',
        description: 'أضف أيقونة تقويم أو شعار الفعالية، وطبّق ألوانك، وصدّر SVG للدعوات أو PNG للشاشة.'
      }
    ],
    features: [
      {
        title: 'إضافة إلى تقويم الهاتف بلمسة واحدة',
        description: 'يُدرج المدعوون الفعالية في Apple Calendar أو Google Calendar أو Outlook بلمسة واحدة.'
      },
      {
        title: 'تنبيهات تذكير أصلية تلقائية',
        description: 'يطلق إدخال التقويم تذكير الهاتف الافتراضي قبل بدء الفعالية، فلا يضطر أحد لضبط واحد.'
      },
      {
        title: 'تضمين عناوين المكان الكاملة وروابط افتراضية',
        description: 'خزّن عنوان القيادة أو رابط Zoom أو Teams في الإدخال نفسه، كي يجده الحاضرون حين يحتاجونه.'
      },
      {
        title: 'رموز ثابتة دائمة بلا انتهاء صلاحية',
        description: 'رمز iCalendar ثابت يبقى صالحًا إلى ما لا نهاية، بلا رسم شهري أو حدّ مسح.'
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
        title: 'الحفلات الموسيقية والمهرجانات والعروض المسرحية',
        description: 'رمز على التذكرة يحفظ وقت العرض والمكان في هاتف حامل التذكرة.'
      },
      {
        title: 'الأعراس والذكرى السنوية والاحتفالات الخاصة',
        description: 'رمز «احجز التاريخ» يحجز اليوم في تقويم الضيف قبل أشهر.'
      },
      {
        title: 'المؤتمرات المؤسسية وجداول الكلمات',
        description: 'يمسح الحاضرون جدول الأعمال لإضافة ورش وكلمات محددة إلى تقاويمهم الخاصة.'
      },
      {
        title: 'الندوات والبث المباشر وإطلاق المنتجات',
        description: 'رمز على البث الترويجي يتيح للمشاهدين حفظ تاريخ البث في الحال.'
      },
      {
        title: 'التخفيضات السريعة للتجزئة والعروض الموسمية',
        description: 'ذكّر العملاء الأوفياء بتخفيض عيد أو ساعة تسوق VIP قبل أن تفوتهم.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Event QR Code Calendar Scheduling Errors',
      points: [
        'انزياح المنطقة الزمنية. أدخل الأوقات بالمنطقة المحلية للمكان، وإلا انتهى الحاضرون بفارق ساعة.',
        'وصف طويل. حشو جدول أعمال كامل في الحقل الثابت ينفخ المصفوفة. أبقه تحت نحو 150 حرفًا.',
        'تواريخ معكوسة. تأكد أن النهاية بعد البداية، وإلا رفض التقويم الإدخال.',
        'تباين منخفض على بطاقة فاخرة. وحدات باستيل أو برقائق ذهبية على عاجي تفشل في المسح. داكن على فاتح.',
        'بلا مطالبة. اكتب عليه — «امسح لإضافة الفعالية إلى التقويم».'
      ]
    },
    faqs: [
      {
        q: 'ماذا يحدث حين يمسح أحدهم رمز QR لفعالية؟',
        a: 'على iOS تفتح مطالبة «إضافة إلى التقويم» تطبيق Apple Calendar بالعنوان والتواريخ والمكان والوصف معبّأة. وعلى Android يفتح Google Calendar مع طلب حفظ.'
      },
      {
        q: 'هل يمكنني تضمين رابط Zoom أو Google Meet في تفاصيل الفعالية؟',
        a: 'ضع رابط الفيديو في حقل المكان أو الوصف وسيجد الحاضرون افتراضيًا رابط الاجتماع هناك مباشرة في إدخال التقويم.'
      },
      {
        q: 'هل يضبط إدخال التقويم تذكيرًا للحاضر تلقائيًا؟',
        a: 'تطبّق معظم تطبيقات التقويم تذكيرها الافتراضي — عادةً قبل 15 إلى 30 دقيقة — بمجرد إضافة فعالية جديدة.'
      },
      {
        q: 'هل يمكنني تعديل تاريخ الفعالية أو وقتها بعد طباعة رمز QR؟',
        a: 'ليس الرمز المطبوع — فالتاريخ والوقت مثبّتان في المصفوفة. إن كان من المحتمل أن تتغير التفاصيل، وجّه رمز URL إلى صفحة فعالية تتحكم بها بدلًا من ذلك.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للفعاليات أو تفرض رسومًا شهرية؟',
        a: 'لا. بمجرد أن تصنع رمز iCalendar ثابتًا يصبح ملكك للأبد، بلا حدّ مسح وبلا رسم مرفق.'
      },
      {
        q: 'أي صيغة تصدير يُنصح بها للطباعة على قرطاسية الأعراس؟',
        a: 'SVG المتجهي — يبقى حادًا على مطبعة تجارية، أو على كتان بملمس، أو على ورق مقوّى معدني.'
      },
      {
        q: 'هل يمكنني تضمين شعار زفافي أو شعار شركتي في رمز QR؟',
        a: 'بالتأكيد. يترك المستوى H احتياطًا كافيًا لشعار أحادي أو رمز فعالية في المنتصف، ويظل القارئون يفكّونه بنقاء.'
      },
      {
        q: 'هل معلومات فعاليتي خاصة أثناء التوليد؟',
        a: 'نعم. كل شيء يحدث على جهازك، فعناوين الفعالية وتواريخها لا تُرسَل إلى أي مكان أبدًا.'
      }
    ],
    bestPractices: 'تحقّق مرتين من كل وقت بداية ووقت نهاية ومنطقة زمنية ومكان قبل الطباعة، واختبر الرمز على iPhone وAndroid للتأكد من حفظ الإدخال بشكل صحيح.'
  },
  '/phone-qr-code-generator': {
    sections: [
      {
        title: 'اتصال بلمسة واحدة للطوارئ ودعم العملاء',
        paragraphs: [
          'مسح رمز QR للهاتف يفتح فورًا لوحة الاتصال الأصلية للجهاز برقمك المحدد جاهزًا للاتصال.',
          'يزيل أخطاء الطلب ويوفّر الوقت لخطوط الطوارئ العاجلة والحجوزات والمساعدة على الطريق.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of Tel URI Phone Call QR Codes',
      paragraphs: [
        'يحمل رمز QR لمكالمة هاتفية رابط `tel:`، وهو مخطط الطلب المعرّف في RFC 3966. الصيغة هي `tel:<PhoneNumber>` — عادةً رقم E.164 فريد عالميًا مثل `tel:+14155552671`، اختياريًا مع فواصل DTMF لتحويلة.',
        'امسحه ويعرض الهاتف نافذة طلب النظام بالرقم وزر «اتصل بـ [الرقم]». لمسة واحدة تُجري المكالمة — دون قراءة رقم عن لافتة وإدخاله، وهو بالضبط مصدر أخطاء الطلب في المواد المطبوعة.',
        'هذا هو الرمز لكل ما يُقرأ أثناء الحركة: ملصقات شاحنات الخدمة، إشعار جهة اتصال طوارئ، لافتة عقار في الحديقة، ملصق خط مساعدة، قائمة طعام خارجية.'
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
        title: 'أدخل رقم الهاتف كاملًا مع رمز الدولة',
        description: 'استخدم صيغة E.164 — ‏+14155550199 لأمريكا، ‏+442071838750 لبريطانيا — كي يتصل متصل دولي دون تخمين بادئة الطلب.'
      },
      {
        number: 2,
        title: 'أضف أيقونة هاتف وخصّص ألوان العلامة',
        description: 'صمّمه بتباين عالٍ، واضبط عيون زوايا مخصصة، وضع أيقونة سماعة في المنتصف كي يُقرأ المسح كمكالمة، لا كرابط غامض.'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا لأغلفة المركبات واللافتات الكبيرة',
        description: 'خذ SVG لرسومات المركبات ولافتات الحدائق واللوحات الإعلانية، أو PNG عالي الدقة للنشرات والمغناطيسات والبطاقات.'
      }
    ],
    features: [
      {
        title: 'طلب مباشر فوري بلمسة واحدة',
        description: 'مسح ولمسة يحوّلان الاهتمام إلى مكالمة حية في ثوانٍ.'
      },
      {
        title: 'تخلّص من الأرقام الخاطئة وأخطاء الطلب',
        description: 'الرقم الدقيق مُرمَّز، فلا يقلب أحد رقمًا قرأه عن شاحنة متحركة.'
      },
      {
        title: 'دعم شامل للجهاز والشبكة الخلوية',
        description: 'يعمل من الكاميرا المدمجة على أي هاتف ذكي بخدمة خلوية.'
      },
      {
        title: 'تشغيل دائم مدى الحياة بلا رسوم',
        description: 'رمز tel ثابت بصلاحية دائمة، ومكالمات غير محدودة، وبلا رسم شهري.'
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
        title: 'ملصقات أسطول الخدمة (سباكة، تكييف، كهرباء)',
        description: 'رمز كبير على الشاحنة يتيح لصاحب منزل عالق في الزحام — أو يمرّ بشاحنة متوقفة — أن يمسح ويتصل لطلب خدمة.'
      },
      {
        title: 'لافتات الحدائق ولوحات البيع العقارية',
        description: 'مشترٍ واقف أمام العقار يمسح اللافتة ويصل إلى وكيل الإعلان مباشرة.'
      },
      {
        title: 'خطوط الطوارئ وإرسال الأمن',
        description: 'في حرم جامعي أو مرآب أو موقع صناعي، يجعل الرمز مكالمة طوارئ على بُعد لمسة.'
      },
      {
        title: 'قوائم المطاعم الخارجية والتوصيل',
        description: 'رمز على قائمة خارجية أو مغناطيس ثلاجة يتيح لعميل جائع تقديم طلب هاتفي في الحال.'
      },
      {
        title: 'ملصقات تأجير المعدات وخدمة السحب',
        description: 'ملصق متين على معدات مؤجَّرة أو لافتة موقف أو وحدة تخزين يجعل طلب المساعدة سريعًا.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Phone Call QR Code Dialing Errors',
      points: [
        'بلا رمز دولة. صدّر الرقم بـ + ورمز الدولة (+1 لأمريكا). دونه، لا يستطيع جهاز في التجوال الدولي إتمام المكالمة.',
        'صغير جدًا على مركبة. رمز 50 مم لا يُقرأ من 5 أمتار. على لافتات المركبات، استخدم 300 مم × 300 مم على الأقل.',
        'فينيل عاكس. الكروم اللامع أو الغلاف المعدني يبهر تحت الشمس. اختر مطفأ أو ساتان.',
        'صيغة تحويلة خاطئة. لتحويلة تُطلب تلقائيًا، افصلها بفاصلة — tel:+14155550199,102 — ما يدرج توقف DTMF لثانيتين.',
        'بلا أيقونة هاتف. سماعة في المنتصف تطمئن الناس أن المسح مكالمة، لا رابط ويب مجهول.'
      ]
    },
    faqs: [
      {
        q: 'هل يبدأ مسح الرمز المكالمة الهاتفية فورًا؟',
        a: 'لا — يعرض الهاتف الرقم المفكوك مع زر اتصال، ويضغط المستخدم للطلب. خطوة التأكيد تلك مقصودة.'
      },
      {
        q: 'هل ينبغي أن أضمّن رمز دولتي في رقم الهاتف؟',
        a: 'دائمًا. ابدأ بـ + ورمز الدولة (+1 لأمريكا وكندا، +44 لبريطانيا) كي يتصل كل متصل بغضّ النظر عن المشغّل أو حالة التجوال.'
      },
      {
        q: 'ماذا يحدث إن مسح أحدهم رمز QR للهاتف على iPad دون شريحة SIM؟',
        a: 'على جهاز لوحي بواي فاي فقط، يعرض المسح إجراء المكالمة عبر FaceTime Audio أو Skype أو iPhone مقترن يعمل كمُرحّل خلوي.'
      },
      {
        q: 'هل يمكنني ترميز تحويلات هاتفية في رمز QR؟',
        a: 'ضع فاصلة بين الرقم الرئيسي والتحويلة — tel:+14155550199,104 — والفاصلة تضيف توقفًا لثانيتين قبل طلب أرقام DTMF.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للهاتف أو تفرض رسمًا لكل مكالمة؟',
        a: 'لا. رمز tel ثابت يحمل صلاحية دائمة، بلا حدّ للمسح، وبلا رسم لكل مكالمة.'
      },
      {
        q: 'أي صيغة متجهية أفضل لطباعة غلاف مركبة تجاري؟',
        a: 'SVG — يحفظ الدقة المتجهية عند التحجيم إلى مقاس مركبة أو لوحة إعلانية، دون تبكسل.'
      },
      {
        q: 'هل يمكنني تتبّع عدد المكالمات الآتية من رمز QR الخاص بي؟',
        a: 'وجّه الرمز إلى رقم تتبّع مكالمات مخصص من CallRail أو Twilio، مُسنَد لذلك الأصل فقط، فتصبح كل مكالمة عبره قابلة للعزو.'
      },
      {
        q: 'هل يُخزَّن رقم هاتفي على خوادم خارجية أثناء التوليد؟',
        a: 'لا. يجري التوليد بالكامل في متصفحك، فلا يُخزَّن الرقم أو يُسجَّل أو يُشارَك أبدًا.'
      }
    ],
    bestPractices: 'استخدم صيغة E.164 (+1...)، وحجّم الرمز حسب مسافة القراءة (قاعدة 10:1)، وأضف أيقونة هاتف كي يعني المسح بوضوح «اتصل».'
  },
  '/sms-qr-code-generator': {
    sections: [
      {
        title: 'توليد عملاء عبر SMS واشتراكات تسويقية',
        paragraphs: [
          'عبّئ مسبقًا أرقام الوجهة والكلمات المفتاحية (مثل «JOIN» أو «DISCOUNT») كي يشترك العملاء في تحديثات الرسائل بنقرة واحدة.',
          'مثالي لعروض التجزئة وتسجيلات نوادي VIP ومسابقات السحب.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of SMSTO Protocol Text Messaging QR Codes',
      paragraphs: [
        'يحمل رمز QR للرسائل تعليمة مراسلة نصية في مخطط `SMSTO:` (أو `sms:`). الصيغة هي `SMSTO:<PhoneNumber>:<MessageText>` — رقم المستلم أو الرمز القصير، ثم نص الرسالة المراد تعبئته مسبقًا.',
        'مسحه يشغّل تطبيق الرسائل الأصلي — Apple Messages على iOS، وGoogle Messages على Android — مع توجيه الرقم والنص مكتوبًا سلفًا. لمسة واحدة ترسله عبر SMS أو RCS.',
        'هذا هو العمود الفقري لكثير من التسويق عبر الجوال: اشتراكات بالكلمات المفتاحية («أرسل DISCOUNT إلى رمز قصير»)، تسجيلات المشتركين، تأكيدات التذاكر، تحققات العاملين المزدوجة. تُقرأ الرسائل بأكثر من 98%، والرمز يزيل احتكاك كتابة رقم وكلمة مفتاحية بشكل صحيح.'
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
        title: 'أدخل رقم الوجهة أو الرمز القصير',
        description: 'أضف رقمك المكوّن من 10 أرقام، أو خط SMS مجاني، أو رمزًا قصيرًا تسويقيًا من 5-6 أرقام، مع رمز الدولة.'
      },
      {
        number: 2,
        title: 'حدّد الكلمة المفتاحية أو محتوى الرسالة المعبّأ مسبقًا',
        description: 'اكتب الكلمة المفتاحية التي تتوقعها منصة SMS لديك بالضبط — JOIN أو VIP أو DISCOUNT أو INFO.'
      },
      {
        number: 3,
        title: 'نزّل أصول طباعة عالية الدقة',
        description: 'خذ SVG متجهيًا للافتات داخل المتجر وبطاقات الأرفف وعروض الطاولة، أو PNG لشاشة ترويجية.'
      }
    ],
    features: [
      {
        title: 'ادفع نموًا انفجاريًا لقائمة تسويق SMS',
        description: 'أزل الاحتكاك من الاشتراكات وتسجيلات الولاء كي يُكمل المزيد من الماسحين المسار.'
      },
      {
        title: 'صفر أخطاء إملائية في الكلمة المفتاحية',
        description: 'تتلقى أتمتتك الكلمة المفتاحية الصحيحة كل مرة، بلا أخطاء من العميل تُسقط الاشتراك.'
      },
      {
        title: 'توافق شامل مع المشغّل والجهاز',
        description: 'يعمل عبر كل مشغّل وعلى أي iPhone أو Android بكاميرا.'
      },
      {
        title: 'رمز ثابت دائم بلا انتهاء صلاحية',
        description: 'رمز يبقى نشطًا إلى ما لا نهاية، بلا اشتراك أو تقييد مسح.'
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
        title: 'نادي VIP للتجزئة وبناء قائمة SMS',
        description: 'رمز عند الصندوق يقدّم خصمًا فوريًا لحظة أن يمسح المتسوق لإرسال كلمة الاشتراك لديك.'
      },
      {
        title: 'استفسارات عقارية آلية',
        description: 'رمز على لافتة الحديقة يتيح لمشترٍ إرسال رمز عقار فيتلقّى السعر والمخططات تلقائيًا.'
      },
      {
        title: 'تذاكر الفعاليات وتأكيدات تسجيل الوصول',
        description: 'يرسل الحاضرون رمز تأكيد عند الباب لتسجيل وصول سريع.'
      },
      {
        title: 'دعم العملاء وخدمات الكونسيرج',
        description: 'يحصل نزلاء الفنادق والعملاء على خط SMS مباشر لطلب خدمة أو حجز موعد.'
      },
      {
        title: 'مشاركات المسابقات واستطلاعات الأحداث المباشرة',
        description: 'رمز قابل للمسح يجذب آلاف المشاركات الفورية أثناء مباراة أو حفل.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting SMS QR Code Scanning Failures',
      points: [
        'أكثر من 160 حرفًا. أبقِ النص المعبّأ مسبقًا قصيرًا — رسالة أطول تنقسم إلى أجزاء متعددة وقد تتفتّت على الشبكات الأقدم.',
        'حدود الرمز القصير. على رمز قصير من 5 أرقام، تأكد أن بوابة SMS لديك تقبل الرسائل الواردة من أجهزة التجوال الدولي.',
        'غياب الإخلاءات القانونية. وفق قواعد TCPA وCTIA، اطبع الإشعار القياسي — «قد تُطبَّق رسوم الرسائل والبيانات. أرسل STOP للإلغاء» — بجوار رمز تسويقي.',
        'تباين منخفض. وحدات فاتحة على سطح باهت تفشل. داكن على فاتح.',
        'البلى والتمزق. تصفيح مطفأ يحمي بطاقة مطبوعة من الخدوش والرطوبة التي تكسر المسح.'
      ]
    },
    faqs: [
      {
        q: 'هل يرسل مسح الرمز الرسالة النصية تلقائيًا؟',
        a: 'لا. يفتح تطبيق الرسائل بالرقم والنص جاهزين، ويضغط المستخدم إرسال — وهذا ما يبقيه متوافقًا مع قواعد خصوصية الجوال.'
      },
      {
        q: 'هل تُحتسب رسوم SMS القياسية للمشغّل حين يرسل المستخدمون النص؟',
        a: 'نعم. الرسالة التي يرسلها المستخدم تُخصم من رصيد SMS في خطته وأي رسوم مشغّل مطبّقة.'
      },
      {
        q: 'هل يمكنني استخدام رمز QR للرسائل مع رموز قصيرة من 5 أو 6 أرقام؟',
        a: 'رقم عادي من 10 أرقام، أو خط مجاني، أو رمز قصير من 5-6 أرقام، جميعها تُدخل في حقل رقم الهاتف نفسه.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للرسائل أو لها حدود مسح شهرية؟',
        a: 'إنها رموز ثابتة دائمة، بمسح غير محدود وبلا انتهاء صلاحية.'
      },
      {
        q: 'ما حدّ الأحرف لنص SMS المعبّأ مسبقًا؟',
        a: 'الرسالة الواحدة تحمل 160 حرفًا. البقاء دون ذلك يُبقي الرسالة في جزء واحد عبر كل مشغّل.'
      },
      {
        q: 'هل يمكنني تضمين شعاري في رمز QR للرسائل؟',
        a: 'هذا يعمل. عند المستوى H يتحمّل الرمز قدرًا لا بأس به من الإعاقة — يكفي لوضع أيقونة رسالة أو شعارك فوق المنتصف.'
      },
      {
        q: 'هل تحتاج رموز QR للرسائل اتصال إنترنت للمسح؟',
        a: 'المسح وفتح تطبيق الرسائل يعملان دون اتصال. إرسال النص نفسه يحتاج استقبالًا خلويًا عاديًا.'
      },
      {
        q: 'هل تُخزَّن بيانات هاتف العميل على خوادم QR Generator Online؟',
        a: 'لا. كل شيء يتم على جهازك، فلا تُرفع أرقام أو نصوص رسائل ولا تُحفظ.'
      }
    ],
    bestPractices: 'وضّح فائدة إرسال النص، وأدرج إخلاءات رسوم الرسائل والبيانات المطلوبة في أي حملة تجارية.'
  },
  '/email-qr-code-generator': {
    sections: [
      {
        title: 'بسّط ملاحظات العملاء واستفسارات التواصل',
        paragraphs: [
          'حين يمسح المستخدمون رمز QR للبريد، يُفتح تطبيق بريدهم الافتراضي بعنوان دعمك وموضوع مخصص وقالب رسالة معبّأ مسبقًا.',
          'مثالي لملاحظات المنتجات وتسجيل ضمانات العملاء وملصقات التوظيف والدعم الفني.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Mailto URI Scheme Email QR Codes',
      paragraphs: [
        'يحمل رمز QR للبريد رابط `mailto:`، وهو مخطط بريد الإنترنت المعرّف في RFC 6068. البنية هي `mailto:<RecipientEmail>?subject=<EncodedSubject>&body=<EncodedBody>&cc=<EncodedCC>&bcc=<EncodedBCC>`، مع ترميز المسافات والأحرف الخاصة بالنسبة المئوية وفق RFC 3986.',
        'المسح يفتح أي عميل بريد مضبوط كافتراضي — Apple Mail أو Gmail أو Outlook أو Yahoo — بالعنوان والموضوع ونص الافتتاح معبّأة سلفًا. يراجعه المستخدم ويضغط إرسال. ملاحظة أو طلب دعم أو مطالبة ضمان: مراجعة وإرسال بدل نافذة كتابة فارغة.',
        'بالنسبة لمكتب دعم، ذلك الموضوع المعبّأ مسبقًا يقوم بالفرز بهدوء. ضمّن ترويسة قياسية مثل `[مطالبة ضمان - الطراز X]` فتصنّف التذاكر الواردة نفسها بنفسها، ما يقلّل الفرز اليدوي في الطرف المستقبِل.'
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
        title: 'حدّد بريد المستلم وCC/BCC اختياريًا',
        description: 'أدخل الصندوق الذي يجب أن يستقبله — support@yourcompany.com — وأضف عناوين CC أو BCC مفصولة بفواصل إن احتجتها.'
      },
      {
        number: 2,
        title: 'صُغ سطر موضوع قياسي وقالب نص',
        description: 'عبّئ مسبقًا موضوعًا واضحًا مثل «استفسار بخصوص الطلب #» مع نص افتتاح قصير، كي يبدأ العميل من شيء بدل لا شيء.'
      },
      {
        number: 3,
        title: 'خصّص التصميم وصدّر ملف طباعة عالي الدقة',
        description: 'صمّم الوحدات، وأضف أيقونة مظروف أو شعارك، ونزّل SVG متجهيًا للطباعة أو PNG عالي الدقة للشاشة.'
      }
    ],
    features: [
      {
        title: 'تخلّص من الرسائل المرتدة وأخطاء العنوان',
        description: 'تصل الرسالة إلى صندوقك بالضبط — بلا نطاق مكتوب خطأً وبلا ارتداد.'
      },
      {
        title: 'أتمتة فرز تذاكر مكتب الدعم وCRM',
        description: 'موضوع مُعدّ مسبقًا يتيح لـ Zendesk أو Freshdesk أو HubSpot توجيه الاستفسار من تلقائه.'
      },
      {
        title: 'دعم شامل عبر كل عملاء البريد',
        description: 'يفتح تطبيق البريد الافتراضي على iOS وAndroid وmacOS وWindows على حدٍّ سواء.'
      },
      {
        title: 'تشغيل دائم مدى الحياة بلا رسوم',
        description: 'رمز mailto ثابت لا تنتهي صلاحيته، ولا يحتاج اشتراكًا، ويتعامل مع أي كمّ من الرسائل.'
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
        title: 'تسجيل الضمانات والدعم الفني',
        description: 'رمز على ملصق المنتج يفتح مطالبة مع رقم الطراز موجودًا سلفًا في سطر الموضوع.'
      },
      {
        title: 'ملاحظات العملاء والاستفسارات العامة',
        description: 'بطاقة طاولة توجّه الملاحظات الصريحة مباشرة وبسرّية إلى صندوق المدير العام.'
      },
      {
        title: 'التوظيف في معارض العمل وإرسال السير الذاتية',
        description: 'رمز على ملصق وظيفي يتيح للمتقدمين إرسال سيرة ذاتية إلى مسؤول التوظيف مع رمز الوظيفة مُعدًّا مسبقًا.'
      },
      {
        title: 'التقاط العملاء في المعارض وطلبات الفوترة',
        description: 'زوّار الجناح يمسحون لطلب ورقة بيضاء أو كتالوج أو أسعار للمؤسسات بلمسة واحدة.'
      },
      {
        title: 'الصيانة الطارئة وإدارة المرافق',
        description: 'رمز على وحدة تكييف يتيح للمستأجر الإبلاغ عن عطل مباشرة إلى قسم إرسال الصيانة.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Email QR Code Scanning & Delivery Issues',
      points: [
        'نص طويل جدًا. أكثر من 400 حرف من النص المعبّأ مسبقًا يضغط المصفوفة. أبقِ القالب تحت نحو 150 حرفًا.',
        'عنوان مشوّه. غياب @ أو مسافة زائدة في النهاية تجعل عميل البريد يرفض أمر الكتابة. تحقّق من المستلم بعناية.',
        'بلا تطبيق بريد افتراضي. على سطح مكتب دون واحد مُهيّأ، قد يسأل رابط mailto أي تطبيق يستخدم. على الجوال، يتولّاه تطبيق البريد الأصلي مباشرة.',
        'تباين منخفض. وحدات باهتة أو باستيل على أبيض تفشل في المسح. داكن على فاتح، فوق 4.5:1.',
        'بلا تعليمات. اكتب عليه — «امسح لمراسلة الدعم مباشرة» — كي يكون المسح واضحًا.'
      ]
    },
    faqs: [
      {
        q: 'أي تطبيق بريد يُفتح حين يمسح المستخدم رمز QR للبريد؟',
        a: 'أيًّا كان ما يعتبره الجهاز افتراضيًا — Apple Mail على iPhone، أو Gmail على Android، أو Outlook أو Yahoo إن ضبط المستخدم أحدها.'
      },
      {
        q: 'هل يرسل المسح البريد تلقائيًا؟',
        a: 'لا. يفتح نافذة الكتابة بالحقول معبّأة، ويضغط المستخدم إرسال. هذا يُبقيه متحكّمًا فيما يخرج فعلًا.'
      },
      {
        q: 'هل يمكنني ترك حقلَي الموضوع والنص فارغين؟',
        a: 'يمكنك. أدخل عنوان المستلم فقط واترك الموضوع والنص فارغين ليكتبهما المستخدم بنفسه.'
      },
      {
        q: 'هل يمكنني تضمين عدة عناوين مستلمين؟',
        a: 'أضف عدة عناوين مفصولة بفواصل في حقل المستلم فتصل الرسالة إلى فريقك كله دفعة واحدة.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للبريد أو تتطلب خططًا مدفوعة؟',
        a: 'لا هذا ولا ذاك. رمز mailto ثابت يعمل للأبد مهما مسحه من الناس، ولا يطلب مالًا أبدًا.'
      },
      {
        q: 'كم حرفًا يمكنني تضمينه في نص البريد المعبّأ مسبقًا؟',
        a: 'يسمح مخطط mailto بسلاسل طويلة، لكن إبقاء النص تحت نحو 150 حرفًا يبقي المصفوفة نظيفة وسريعة المسح.'
      },
      {
        q: 'هل يمكنني تتبّع عدد الرسائل المتولّدة من رمز QR الخاص بي؟',
        a: 'ضع وسمًا في سطر الموضوع — [المصدر: نشرة الصيف] — وصفِّ عليه في صندوقك أو CRM لترى أي أصل دفع الرسالة.'
      },
      {
        q: 'هل يبقى عنوان بريدي خاصًا أثناء التوليد؟',
        a: 'يبقى محليًا. يجري الترميز في متصفحك، فلا يُسجَّل أي عنوان أو يُخزَّن على خادم.'
      }
    ],
    bestPractices: 'أبقِ الموضوع واضحًا والنص قصيرًا، واستخدم وحدات داكنة على أبيض، واكتب على الرمز إلى أين يتجه البريد كي يعرف الماسح ما يتوقعه.'
  },
  '/facebook-qr-code-generator': {
    sections: [
      {
        title: 'نمِّ جمهورك على وسائل التواصل في كل مكان',
        paragraphs: [
          'سهّل على عملاء المتجر وحاضري الفعاليات إيجاد علامتك التجارية ومتابعتها عبر قنوات التواصل دون بحث يدوي عن اسم المستخدم.',
          'أدرج أيقونات المنصات الرسمية في وسط رموز QR لزيادة التعرّف على العلامة ومعدلات تحويل المسح.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Social Media & Facebook Profile QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ Facebook أو للتواصل الاجتماعي رابط ملف شخصي مباشرًا أو معرّف صفحة أو رابط مجموعة أو وجهة link-tree. امسحه ويحلّ الهاتف رابطًا شاملًا: إن كان تطبيق Facebook أو Instagram أو TikTok أو LinkedIn مثبتًا، يربط بعمق مباشرة إلى صفحتك الموثّقة؛ وإلا فتح نسخة الويب للجوال مع دعوة للمتابعة.',
        'في متجر أو فعالية، الانتباه عابر. أن تطلب من أحدهم «البحث عن Acme Co على Facebook» يُضيّع معظمهم — بخطأ إملائي، أو منافس بعلامة شبه مطابقة، أو أيًّا كان ما يعرضه التمرير تاليًا. رمز مخصص يزيل البحث كليًا ويحوّل المارّ إلى متابع في أقل من ثانيتين.',
        'تحصل على تصدير متجهي عالي الدقة وتحكّم كامل في التصميم، فيمكنك إدراج شارة المنصة الرسمية، ومطابقة الرمز لألوان علامتك، والحفاظ على تباين كافٍ للمسح السريع عبر واجهة متجر أو من عبر قاعة فعالية.'
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
        title: 'الصق رابط صفحتك أو مجموعتك أو ملفك على Facebook',
        description: 'انسخ الرابط العام كاملًا — facebook.com/yourbrand، instagram.com/yourhandle — والصقه.'
      },
      {
        number: 2,
        title: 'أدرج أيقونة العلامة وخصّص لوحة الألوان',
        description: 'صمّمه بأزرق Facebook (#1877F2) أو لوحتك الخاصة، وضع أيقونة المنصة في المنتصف بتصحيح أخطاء المستوى H.'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا للافتات أو PNG للطباعة',
        description: 'خذ SVG لملصقات الواجهات وحوامل اللافتات والتغليف، أو PNG عالي الدقة للنشرات والإيصالات وبطاقات الطاولة.'
      }
    ],
    features: [
      {
        title: 'حوّل حركة الأقدام الفعلية إلى متابعين متفاعلين',
        description: 'المتسوقون ورواد المطاعم وحاضرو الفعاليات يصبحون متابعين دون البحث عن صفحتك.'
      },
      {
        title: 'ربط عميق مباشر بالتطبيق الأصلي',
        description: 'المسح يوجّه مستخدمي الجوال إلى تطبيق التواصل المثبَّت لديهم لمتابعة بلمسة واحدة.'
      },
      {
        title: 'إدراج أيقونات تواصل رسمية',
        description: 'اختر من قوالب أيقونات Facebook وInstagram وYouTube وTikTok وLinkedIn لجعل الرمز مميّزًا وموثوقًا.'
      },
      {
        title: 'مسح دائم غير محدود بلا انتهاء صلاحية',
        description: 'رمز اجتماعي ثابت يظل يعمل إلى ما لا نهاية، بلا رسوم ولا حدّ ولا تجديد.'
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
        title: 'عروض نقاط البيع وبناء الولاء',
        description: 'رمز بجوار الصندوق يدفع المتسوقين لمتابعة الصفحة للحصول على خصومات أسبوعية سريعة وتنبيهات المنتجات الجديدة.'
      },
      {
        title: 'بطاقات الطاولة ومراجعات تسجيل الوصول',
        description: 'يسجّل الرواد وصولهم، ويتركون مراجعة، ويوسمون صور طعامهم، ما يوسّع وصولك المحلي العضوي مجانًا.'
      },
      {
        title: 'إدراجات التغليف ومسابقات فتح العلبة',
        description: 'بطاقة في الصندوق تدعو المشترين لنشر فتح العلبة ووسمك لفرصة الفوز بجائزة شهرية.'
      },
      {
        title: 'الفعاليات والمؤتمرات وتجمعات المجتمع',
        description: 'رمز كبير على شريحة أو لافتة يرسل الحاضرين مباشرة إلى مجموعة مجتمعك الرسمية.'
      },
      {
        title: 'ملصقات أسطول الخدمة والإعلان المحلي',
        description: 'رمز على الشاحنة يتيح لسكان الحي قراءة مراجعاتك ومتابعة الصفحة عند إشارة مرور.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Social Media QR Code Scanning Mistakes',
      points: [
        'صفحة خاصة. اضبط الصفحة أو المجموعة على عام كي يرى الماسح المحتوى دون جدار تسجيل دخول في الطريق.',
        'خلفية مزدحمة. تخطَّ الصورة خلف الرمز. أرضية فاتحة صلبة بتباين 4.5:1 هي ما تثبّت عليه الكاميرا.',
        'بلا سبب للمسح. رمز عارٍ يكسب متابعين قلائل. امنحه خطافًا — «امسح للانضمام إلى أكثر من 10٬000 عضو VIP على Facebook».',
        'وهج اللمعان. ملصق واجهة لامع يعكس الشمس إلى العدسة. فينيل مطفأ في الخارج، دائمًا.',
        'منصة واحدة فقط. تريد متابعين عبر Facebook وInstagram وTikTok؟ وجّه الرمز إلى صفحة link-tree واحدة بدل شبكة واحدة.'
      ]
    },
    faqs: [
      {
        q: 'هل يفتح المسح تطبيق Facebook أم متصفح ويب؟',
        a: 'إن كان تطبيق Facebook مثبتًا، يفتح الرابط الشامل ملفك بشكل أصلي داخله. وإن لم يكن، يلجأ إلى متصفح الجوال — وفي الحالتين يصل الشخص إلى صفحتك.'
      },
      {
        q: 'هل يمكنني الربط بمنشور أو ألبوم أو فعالية محددة على Facebook بدل صفحة؟',
        a: 'انسخ الرابط المباشر لأي منشور عام أو ألبوم أو بث مباشر أو فعالية والصقه. يشير الرمز إلى حيث يشير الرابط.'
      },
      {
        q: 'كيف أربط بعدة منصات تواصل برمز QR واحد؟',
        a: 'أنشئ صفحة مجانية لتجميع الروابط — Linktree أو Beacons أو صفحة على موقعك — وولّد الرمز من ذلك الرابط. عندها يختار الماسح أي منصة يتابع.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR لـ Facebook أو لها حدود مسح شهرية؟',
        a: 'إنها ثابتة ودائمة. يحفظ الرمز رابطك المباشر ويظل يعمل، بمسح غير محدود وبلا انتهاء صلاحية.'
      },
      {
        q: 'هل يمكنني تخصيص رمز QR بلون Facebook الأزرق الرسمي؟',
        a: 'استخدم اللون الرسمي #1877F2 للوحدات وأبقِ خلفية بيضاء نظيفة — يبقى التباين عاليًا ويظل الرمز متسقًا مع العلامة.'
      },
      {
        q: 'لماذا استخدام رمز QR أفضل من مطالبة المستخدمين بالبحث عن صفحتي؟',
        a: 'المسح يتخطى البحث كليًا: بلا أخطاء إملائية، وبلا تيهٍ إلى صفحة مقلّدة باسم مشابه، وتتم المتابعة في أقل من ثانيتين.'
      },
      {
        q: 'أي صيغة ملف أنزّل للطباعة على لافتات الواجهات؟',
        a: 'SVG المتجهي — يتحجّم إلى أي مقاس لافتة أو واجهة دون أدنى تشوّش.'
      },
      {
        q: 'هل تُحمى خصوصية العميل عند توليد رموز QR للتواصل؟',
        a: 'كل شيء يُولَّد محليًا على جهازك، فلا تصل روابطك وروابط ملفك إلى أي خادم.'
      }
    ],
    bestPractices: 'اقرن الرمز بسبب للتحرّك — «امسح لفتح خصومات حصرية» أو «تابعنا لهدايا يومية» — وضعه على مستوى النظر في إضاءة جيدة. امسحه على عدة هواتف مختلفة قبل الإطلاق.'
  },
  '/whatsapp-qr-code-generator': {
    sections: [
      {
        title: 'تواصل ودعم مباشر مع العملاء',
        paragraphs: [
          'ابدأ التسويق الحواري ودعم العملاء بلا احتكاك. المسح يفتح WhatsApp مباشرة على محادثة بعنوان رقمك مع نص مكتوب مسبقًا جاهز للإرسال.',
          'مثالي لمكاتب خدمة العملاء وحجوزات المطاعم وملصقات الاستفسار عن المنتجات وتغليف التجارة الإلكترونية.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Protocol & Architecture of WhatsApp Click-to-Chat QR Codes',
      paragraphs: [
        'يحمل رمز QR لـ WhatsApp رابط النقر-للمحادثة على بروتوكول WhatsApp الرسمي `https://wa.me/` (أو المخطط الأقدم `whatsapp://send?phone=`). الصيغة هي `https://wa.me/<PhoneNumber>?text=<URLEncodedText>` — الرقم بصيغة E.164 بلا رموز، والنص رسالة افتتاحية مُرمَّزة بالنسبة المئوية.',
        'امسحه ويسلّم الهاتف الأمر إلى معالج Universal Link في WhatsApp. إن كان WhatsApp أو WhatsApp Business مثبتًا، يفتح التطبيق مباشرة على محادثة مع رقمك ويضع الرسالة المكتوبة مسبقًا في صندوق الكتابة — دون أن يحتاج العميل لحفظ رقمك في جهات اتصاله أولًا.',
        'هذا الاختصار هو جوهر الأمر. احذف خطوات «احفظ الرقم، افتح التطبيق، فكّر بما تقول» ويكاد حاجز أول رسالة يختفي، ولهذا يحوّل رمز WhatsApp عادةً أفضل بكثير من رقم هاتف مطبوع أو نموذج ويب.'
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
        title: 'أدخل رقم الهاتف مع رمز الدولة الدولي',
        description: 'أدخل الرقم كاملًا مع رمز الدولة ولا شيء غير ذلك — بلا علامة زائد أو شرطات أو أقواس. رقم أمريكي يصير 14155551234؛ وبريطاني، 447911123456.'
      },
      {
        number: 2,
        title: 'اكتب رسالة استفسار العميل المعبّأة مسبقًا',
        description: 'اكتب السطر الأول عنهم، شيئًا مثل «مرحبًا! أودّ حجز طاولة لهذه الليلة» أو «مرحبًا، رأيت نشرتكم وأريد عرض سعر للمنتج X».'
      },
      {
        number: 3,
        title: 'خصّص بشعار WhatsApp الرسمي ونزّل',
        description: 'استخدم ألوان العلامة الأخضر الزمردي والأبيض، وضع علامة WhatsApp في المنتصف، وصدّر بصيغة SVG أو PNG عالي الدقة.'
      }
    ],
    features: [
      {
        title: 'بلا احتكاك حفظ جهات الاتصال',
        description: 'يصل العملاء إلى خط مبيعاتك أو دعمك لحظة المسح — دون إضافة رقمك إلى هاتفهم أولًا.'
      },
      {
        title: 'قوالب استفسار مكتوبة مسبقًا',
        description: 'ازرع المحادثة بسياق مرتبط بالإعلان أو المنتج أو النشرة التي يوجد عليها الرمز بعينها.'
      },
      {
        title: 'دعم WhatsApp Business وWhatsApp الشخصي',
        description: 'يعمل مع حساب شخصي وتطبيق WhatsApp Business وواجهة WhatsApp Cloud API.'
      },
      {
        title: 'ترميز ثابت دائم بلا رسوم',
        description: 'رمز ثابت لا تنتهي صلاحيته، ولا يكلّف شيئًا شهريًا، ويتعامل مع بدايات محادثات غير محدودة.'
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
        title: 'دعم العملاء وتسجيل الضمانات',
        description: 'رمز على الدليل أو الصندوق يمنح المشترين خط استكشاف أعطال حيًّا لحظة حدوث خطب ما.'
      },
      {
        title: 'الطلبات الخارجية وحجوزات الطاولات للمطاعم',
        description: 'يمسح الضيوف بطاقة طاولة للطلب أو الحجز أو السؤال عن مسبب حساسية مباشرة إلى صندوق WhatsApp Business لديك.'
      },
      {
        title: 'استفسارات العقارات وجولات المعاينة',
        description: 'على نشرة، يتيح الرمز لمشترٍ مراسلة وكيل الإعلان لطلب المخططات وأوقات المعاينة فورًا.'
      },
      {
        title: 'إدراجات طرود التجارة الإلكترونية',
        description: 'بطاقة في صندوق الشحن تدعو العميل للمراسلة من أجل استبدال أو رمز خصم VIP.'
      },
      {
        title: 'عروض أسعار الخدمة والإرسال الطارئ',
        description: 'مغناطيس ثلاجة أو ملصق خدمة برمز WhatsApp يحوّل مهمة سباكة أو أقفال عاجلة إلى حجز بلمسة واحدة.'
      }
    ],
    troubleshooting: {
      title: 'Top Reasons WhatsApp QR Codes Fail to Open Chats',
      points: [
        'تنسيق رقم خاطئ. صفر في البداية قبل رمز المنطقة (4407911... بدل 447911...) أو علامة + شاردة تكسر رابط wa.me. أرقام فقط.',
        'خط أرضي. رمّز رقمًا لم يُسجَّل قط على WhatsApp وسيعيد المسح خطأ مستخدم غير صالح.',
        'تعبئة مسبقة منتفخة. رسالة افتراضية من 500 حرف تصنع رمزًا كثيفًا وبطيئًا. أبقِ الافتتاحية تحت نحو 120 حرفًا.',
        'بلا شارة. يتردد الناس أمام رمز عارٍ. علامة WhatsApp الرسمية تخبرهم أي تطبيق على وشك الفتح.',
        'بلا سياق. اطبع سطرًا واضحًا مثل «امسح للمحادثة على WhatsApp» كي لا يكون المسح لغزًا.'
      ]
    },
    faqs: [
      {
        q: 'هل يحتاج العملاء لحفظ رقم هاتف عملي قبل المسح؟',
        a: 'لا — رابط wa.me يفتح محادثة مع رقمك فورًا، دون حاجة لحفظه في جهات الاتصال.'
      },
      {
        q: 'كيف أنسّق رقم هاتفي لرموز QR الخاصة بـ WhatsApp؟',
        a: 'بالصيغة الدولية الكاملة، أرقام فقط. رقم أمريكي مثل (415) 555-1234 يصير 14155551234؛ وجوال بريطاني 07911 123456 يصير 447911123456 بإسقاط الصفر الأول.'
      },
      {
        q: 'هل يرسل المسح الرسالة تلقائيًا نيابةً عن المستخدم؟',
        a: 'لا. المسح يفتح WhatsApp برقمك والنص المعبّأ مسبقًا في صندوق الكتابة — لا يزال العميل يضغط إرسال، فيبقى متحكّمًا تمامًا.'
      },
      {
        q: 'ماذا يحدث إن مسح مستخدم الرمز على حاسوب مكتبي؟',
        a: 'يسلّم المتصفح الأمر إلى WhatsApp Web أو يعرض فتح تطبيق سطح المكتب، فيكمل المسح المكتبي المحادثة دون عائق.'
      },
      {
        q: 'هل يمكنني استخدامه مع رسائل الترحيب التلقائية في WhatsApp Business؟',
        a: 'حين يبدأ أحد محادثة عبر الرمز، تنطلق رسالة الترحيب والردود السريعة ورسائل الغياب في WhatsApp Business كالمعتاد.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR لـ WhatsApp أو لها حدود على بدايات المحادثة؟',
        a: 'إنها رموز ثابتة دائمة — مسح غير محدود وبلا انتهاء صلاحية.'
      },
      {
        q: 'هل يمكنني تتبّع عدد من يمسحون رمز QR الخاص بـ WhatsApp؟',
        a: 'امنح كل أصل مطبوع افتتاحيته المعبّأة مسبقًا — «استفسار من نشرة الربيع» مقابل «استفسار من لافتة الواجهة» — وتخبرك الصياغة أي قناة أنتجت العميل.'
      },
      {
        q: 'هل توليد رموز QR لـ WhatsApp واستخدامها مجاني؟',
        a: 'مجاني تمامًا، بلا اشتراك وبلا رسوم خفية.'
      }
    ],
    bestPractices: 'استخدم أخضر WhatsApp القياسي (#25D366) مع أيقونة واضحة في المنتصف، وأبقِ الترحيب المعبّأ مسبقًا قصيرًا ووديًّا. امسح الرمز على بيانات الجوال وعلى الواي فاي قبل تشغيل تجاري — فقد يتصرفان بشكل مختلف.'
  },
  '/vcard-qr-code-generator': {
    sections: [
      {
        title: 'تواصل رقمي حديث للمحترفين',
        paragraphs: [
          'لن تنفد منك بطاقات العمل الورقية بعد اليوم. ينقل رمز QR لبطاقة vCard بطاقة تواصلك المهنية الكاملة فورًا إلى هاتف من يمسحها بلمسة واحدة.',
          'يشمل الاسم الكامل والمؤسسة والمسمى الوظيفي وهاتف العمل والجوال والبريد والموقع والعنوان الفعلي. مثالي لبطاقات العمل والسير الذاتية وتواقيع البريد وشارات المؤتمرات.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of vCard 3.0 Digital Contact QR Codes',
      paragraphs: [
        'يحزم رمز QR لبطاقة vCard ملفًا كاملًا للتواصل في معيار VCF الدولي (vCard 3.0، المعرّف في RFC 2426 وRFC 6350). تمتد السلسلة من `BEGIN:VCARD` إلى `END:VCARD` وتحمل حقولًا منظمة — الاسم الكامل (`FN`)، المؤسسة (`ORG`)، المسمى الوظيفي (`TITLE`)، أرقام الهاتف (`TEL;TYPE=CELL,WORK`)، البريد (`EMAIL;TYPE=INTERNET`)، العنوان (`ADR`)، والموقع (`URL`).',
        'امسحه ويقوم الهاتف بالحفظ عنك. يقرؤه iOS عبر إطار Contacts، وAndroid عبر People API، ويفتح كلاهما بطاقة تواصل معبّأة مسبقًا بزر «إنشاء جهة اتصال جديدة». لمسة واحدة تحفظ ملفك كله في دفتر العناوين — بلا كتابة يدوية، وبلا أرقام مقلوبة، وبلا بطاقة ورقية تضيع في جيب سترة بحلول الجمعة.',
        'تحمل بطاقة vCard نصًا أكثر من معظم الرموز، لذا يهمّ ترتيب البايتات. يستخدم الترميز فواصل نظيفة لإبقاء المصفوفة قابلة لفك التشفير حتى على هاتف اقتصادي بتركيز بؤري أبطأ.'
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
        title: 'املأ حقول التواصل المهني المنظمة',
        description: 'أدخل اسمك ومسماك الوظيفي وشركتك وجوالك وبريد العمل وموقعك. أبقِ أي ملاحظات قصيرة — فالملف الأخف يعني وحدات أكبر وأسهل مسحًا.'
      },
      {
        number: 2,
        title: 'خصّص الهوية البصرية وأدرج الصورة الشخصية/الشعار',
        description: 'طبّق لوحة ألوان علامتك، واختر نمط النقاط، وضع صورتك أو شعار شركتك في المنتصف بتصحيح أخطاء المستوى H.'
      },
      {
        number: 3,
        title: 'صدّر SVG متجهيًا لطباعة بطاقات العمل',
        description: 'سلّم المطبعة ملف SVG المتجهي، أو خذ PNG عالي الدقة لتوقيع بريد أو لافتة LinkedIn أو خلفية شاشة قفل.'
      }
    ],
    features: [
      {
        title: 'توافق شامل عبر iOS وAndroid',
        description: 'مبني وفق vCard 3.0، فيدخل بسلاسة إلى Apple Contacts وGoogle Contacts وOutlook وSamsung Contacts على حدٍّ سواء.'
      },
      {
        title: 'تكامل مع دفتر العناوين بلمسة واحدة',
        description: 'هاتفك وبريدك وموقعك وعنوان مكتبك تُحفظ كلها بلمسة واحدة — الطرف الآخر لا يكتب شيئًا.'
      },
      {
        title: 'بلا اعتماد على السحابة وخصوصية كاملة',
        description: 'تعيش بيانات التواصل داخل الرمز نفسه. لا خادم خارجي يخزّن أو يجمع تفاصيل تواصلك.'
      },
      {
        title: 'SVG متجهي عالي الدقة لبطاقات فاخرة',
        description: 'مخرجات متجهية حادة للطبع بالرقائق أو UV الموضعي أو النقش البارز أو الحفر بالليزر على بطاقة معدنية أو من الخيزران.'
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
        title: 'بطاقات المدراء ومندوبي المبيعات',
        description: 'رمز خلف البطاقة يحوّل المصافحة إلى جهة اتصال محفوظة قبل أن تنتهي المحادثة.'
      },
      {
        title: 'المعارض والإكسبو والمؤتمرات القطاعية',
        description: 'على شريط عنق أو لافتة جناح أو بطاقة اسم، تصل تفاصيلك إلى هاتف العميل المحتمل في نحو ثانيتين.'
      },
      {
        title: 'السير الذاتية وخطابات التقديم',
        description: 'رمز غير ملحوظ في ترويسة السيرة الذاتية يتيح للمسؤول عن التوظيف حفظ رقمك ورابط أعمالك دون إعادة كتابة شيء.'
      },
      {
        title: 'وكلاء العقارات ووسطاء الرهن العقاري',
        description: 'على نشرة يوم مفتوح، يجعل رمز vCard حجز معاينة مهمة بلمسة واحدة للمشتري المحتمل.'
      },
      {
        title: 'تذييلات البريد المؤسسي والتواقيع الرقمية',
        description: 'أضف الرمز إلى قالب البريد، وبإمكان من يقرؤه على سطح المكتب مسحه من الشاشة لحفظ خطك المباشر.'
      }
    ],
    troubleshooting: {
      title: 'Common vCard QR Code Scanning Issues & How to Prevent Them',
      points: [
        'ملفات محشوّة زيادة. عشرون حقلًا — نبذة وأربعة أرقام وثلاثة عناوين — تضغط المصفوفة حتى يصعب مسحها. التزم بالأساسيات: الاسم والمسمى والشركة ورقم أو رقمين والبريد ورابط URL.',
        'طباعة صغيرة جدًا. تستخدم vCard مصفوفة أكثف من الإصدار 6-10، وتحت 25 مم تُشوّش كاميرا اقتصادية حواف الوحدات. أعطِها مساحة.',
        'بطاقة لامعة. بطاقة عالية اللمعان تعكس أضواء القاعة في العدسة. اختر مطفأ أو حريري أو ناعم اللمس.',
        'ألوان معكوسة. رمز أبيض على بطاقة داكنة يبدو حادًا لكنه يفشل على بعض الماسحات القديمة. تبقى الوحدات الداكنة على أرضية فاتحة الخيار الآمن.',
        'بلا رمز دولة. أسقِط الـ+1 أو الـ+44 ولن يستطيع جهة اتصال دولية الاتصال بك مباشرة من البطاقة المحفوظة.'
      ]
    },
    faqs: [
      {
        q: 'ماذا يحدث حين يمسح أحدهم رمز QR لبطاقة vCard على هاتفه؟',
        a: 'على iOS يعرض شريط «إضافة [الاسم] إلى جهات الاتصال» ويفتح Apple Contacts بكل الحقول معبّأة. وعلى Android يفتح Google Contacts مع طلب حفظ. في الحالتين، ملفك الكامل على بُعد لمسة من دفتر عناوينهم.'
      },
      {
        q: 'هل يمكنني تضمين صورة في رمز QR ثابت لبطاقة vCard؟',
        a: 'ترميز الصورة الخام سيضخّم الحمولة إلى فوضى غير قابلة للمسح. الحيلة المعتادة أن تضع صورتك أو شعارك في وسط الرمز وأن تضع موقعك أو رابط LinkedIn في حقل URL ضمن vCard، حيث تعيش الصورة بدقتها الكاملة.'
      },
      {
        q: 'هل تحتاج رموز QR لبطاقات vCard إلى اتصال إنترنت للمسح؟',
        a: 'تعمل دون اتصال تمامًا. كل حقل مخزَّن في الرمز كنص vCard 3.0، فيقرأ الهاتف جهة الاتصال ويحفظها دون بيانات أو واي فاي.'
      },
      {
        q: 'هل رموز QR لبطاقات vCard متوافقة مع Outlook وGmail؟',
        a: 'صيغة vCard 3.0 هي معيار جهات الاتصال العالمي، فتقبلها Outlook وApple Mail وGoogle Contacts وأنظمة CRM الكبرى دون عناء.'
      },
      {
        q: 'هل لرموز QR الثابتة لبطاقات vCard تاريخ انتهاء؟',
        a: 'لا. بيانات التواصل داخل الرمز نفسه وتبقى صالحة للأبد — بلا رسوم متكررة وبلا حدّ للمسح.'
      },
      {
        q: 'كيف أنسّق أرقام الهاتف الدولية في بطاقة vCard؟',
        a: 'استخدم صيغة E.164: علامة زائد، ثم رمز الدولة ورمز المنطقة والرقم — مثل +14155552671. تتيح تلك الصيغة لشخص في الخارج الاتصال بك أو مراسلتك دون تخمين بادئات الطلب.'
      },
      {
        q: 'هل يمكنني طباعة رمز QR لبطاقة vCard على وجهَي بطاقتي؟',
        a: 'التنسيق المعتاد يُبقي اسمك وهويتك على الوجه الأمامي ويضع الرمز على الخلف بجوار سطر قصير مثل «امسح لحفظ جهة الاتصال».'
      },
      {
        q: 'أي صيغة تصدير أفضل للإرسال إلى مطبعة بطاقات عمل تجارية؟',
        a: 'أعطِهم ملف SVG أو EPS المتجهي. تحافظ الملفات المتجهية على دقتها عبر أي مطبعة أوفست أو رقمية.'
      }
    ],
    bestPractices: 'اكتب أرقام الهاتف بالصيغة الدولية الكاملة (+1، +44)، وأبقِ البطاقة على الحقول الأساسية كي تبقى الوحدات كبيرة ومقروءة. امسح النسخة المطبوعة على iPhone وAndroid قبل اعتماد الدفعة الكاملة.'
  },
  '/wifi-qr-code-generator': {
    sections: [
      {
        title: 'وصول سلس إلى الواي فاي للمنازل والمقاهي والمكاتب',
        paragraphs: [
          'أنهِ إحباط مشاركة كلمات المرور. حين يمسح الضيوف رمز QR للواي فاي بكاميرا iPhone أو Android، يعرض جهازهم تلقائيًا الانضمام إلى شبكتك اللاسلكية.',
          'يدعم جميع بروتوكولات أمان الشبكات القياسية، بما في ذلك WPA/WPA2 وWEP والشبكات المفتوحة غير المشفَّرة. نزّل بطاقة طاولة الواي فاي القابلة للطباعة بصيغة SVG متجهية واضحة أو PNG بدقة عالية.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of WiFi Network QR Codes (WIFI: Protocol)',
      paragraphs: [
        'يحمل رمز QR للواي فاي بيانات الدخول إلى شبكتك بصيغة URI ‏`WIFI:` التي عرّفها مشروع ZXing واعتمدتها كل من Apple وGoogle. تُقرأ السلسلة `WIFI:T:WPA;S:NetworkSSID;P:NetworkPassword;H:false;;` — حيث `T` نوع الأمان (WPA/WPA2/WPA3 أو WEP أو nopass)، و`S` اسم الشبكة، و`P` كلمة المرور، و`H` تحدد إن كانت الشبكة مخفية.',
        'حين تتعرّف الكاميرا على تلك السلسلة، يتخطى الهاتف رقصة الاتصال اليدوي كلها. على iOS تعرض طبقة CoreWLAN/NetworkExtension تنبيهًا «الانضمام إلى شبكة ‹[SSID]›؟»؛ المسه ويجري الجهاز مصافحة WPA مع نقطة الوصول مباشرة. لا تمرّ كلمة المرور بالحافظة، ولا يبحث أحد في الإعدادات.',
        'كل هذا يُجمَّع في متصفحك. يُكتب اسم شبكتك وكلمة مرور الراوتر في الرمز محليًا ولا ينتقلان عبر الشبكة ولا إلى أي قاعدة بيانات — وهو بالضبط ما تريده لبيانات اعتماد أنت على وشك طباعتها ولصقها على جدار.'
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
        title: 'حدّد اسم الشبكة (SSID) وبروتوكول الأمان',
        description: 'اكتب اسم الشبكة تمامًا — فهو حساس لحالة الأحرف. اختر WPA/WPA2/WPA3 لراوتر حديث، أو WEP للأجهزة القديمة، أو بلا تشفير لشبكة مفتوحة ذات بوابة أسر.'
      },
      {
        number: 2,
        title: 'أدخل كلمة مرور الواي فاي واضبط حالة الإخفاء',
        description: 'أضف مفتاح الأمان. إن كان الراوتر لا يبث اسمه، فعّل مفتاح الشبكة المخفية كي تبحث عنها الأجهزة الماسحة بنشاط.'
      },
      {
        number: 3,
        title: 'نزّل SVG متجهيًا أو PNG عالي الدقة لعروض الطاولة',
        description: 'أضف أيقونة واي فاي أو شعار مكانك ثم صدّر. اطبع على حوامل أكريليك متينة أو بطاقات للطاولة الجانبية أو كتيّب ترحيب.'
      }
    ],
    features: [
      {
        title: 'اتصال ضيوف بلا احتكاك بلمسة واحدة',
        description: 'لا مزيد من كلمات مرور بـ16 حرفًا تُكتب خطأً، ولا ضيوف يوقفون الموظفين للاتصال.'
      },
      {
        title: 'دعم WPA3 وWPA2 وWEP وأسماء SSID المخفية',
        description: 'يغطي معايير الأمان الحالية 802.11ax/ac إضافة إلى إعدادات mesh ثنائية النطاق الأقدم.'
      },
      {
        title: 'أمان من جانب المتصفح بمعرفة صفرية',
        description: 'تبقى كلمة المرور في متصفحك. لا شيء يُسجَّل أو يُخزَّن في سحابة أو يُتتبَّع.'
      },
      {
        title: 'صيغ متجهية عالية الدقة للأدوات والحوامل',
        description: 'SVG واضح يُنقَش بالليزر على الخشب، أو يُحفَر في لوح معدني، أو يُطبَع على حامل أكريليك مصفّح.'
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
        title: 'الفنادق والمنتجعات وإيجارات Airbnb',
        description: 'بطاقة مؤطَّرة على الطاولة الجانبية تُوصِل الضيوف الواصلين خلال ثوانٍ، دون البحث عن ملصق خلف الراوتر.'
      },
      {
        title: 'المقاهي ومحلات القهوة والمطاعم غير الرسمية',
        description: 'بطاقة طاولة تقلّل مقاطعات «ما هو الواي فاي؟» وتُبقي الضيوف يتصفحون القائمة الرقمية وقتًا أطول.'
      },
      {
        title: 'المكاتب المؤسسية ومساحات العمل المشترك',
        description: 'العملاء الزائرون وضيوف الفعاليات يدخلون شبكة الضيوف في قاعة الاجتماعات دون اللجوء إلى قسم تقنية المعلومات.'
      },
      {
        title: 'المؤتمرات والهاكاثونات والمعارض التجارية',
        description: 'يتصل مئات الحاضرين دفعة واحدة عند مكتب التسجيل، ما يزيل الاختناق ويخفف ازدحام الشبكة الخلوية في القاعة.'
      },
      {
        title: 'العيادات الطبية وغرف الانتظار',
        description: 'واي فاي غرفة الانتظار يُبقي المرضى مرتاحين، وبطاقة قابلة للمسح تعني ألا يضطر الاستقبال لتهجئة كلمة المرور.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting Common WiFi QR Scanning Failures',
      points: [
        'عدم تطابق حالة الأحرف. أسماء الشبكات حساسة لحالة الأحرف — «MyCafeWiFi» و«mycafewifi» شبكتان مختلفتان. طابِق الأحرف الكبيرة والصغيرة تمامًا.',
        'نوع أمان خاطئ. ولّد رمز WEP لراوتر يعمل بـ WPA2-PSK (AES) وستفشل المصافحة فورًا. لأي راوتر حديث، اختر WPA/WPA2/WPA3.',
        'بوابات الأسر. إن أظهر واي فاي الضيوف صفحة شروط، يظل الرمز يوصل الهاتف بالإشارة — ثم يفتح مساعد الشبكة الأسيرة في الهاتف صفحة الدخول. هذا متوقع وليس عطلًا.',
        'غياب علامة الإخفاء. إن أخفى الراوتر اسم SSID، فلن تجد الأجهزة الشبكة ما لم يحمل الرمز Hidden: true.',
        'بطاقات بالية. بقع القهوة والتصفيح المخدوش تحجب أنماط تحديد الموضع. غطاء أكريليك يُبقي بطاقة الطاولة مقروءة.'
      ]
    },
    faqs: [
      {
        q: 'هل من الآمن طباعة رمز QR للواي فاي في مكان عام؟',
        a: 'كل من يمسحه يدخل تلك الشبكة، لأن الرمز يحفظ الاسم وكلمة المرور بنص صريح. النهج السليم أن تولّده لشبكة ضيوف مخصصة مع تفعيل عزل العملاء — لا لشبكة عملك الداخلية الخاصة أبدًا.'
      },
      {
        q: 'هل يعمل رمز QR للواي فاي على هواتف iPhone من Apple وأجهزة Android معًا؟',
        a: 'نعم. هواتف iPhone بنظام iOS 11+ وهواتف Android بنظام Android 10+ تتعرّف على صيغة WIFI: من الكاميرا الأصلية وتعرض الانضمام بلمسة واحدة.'
      },
      {
        q: 'ماذا يحدث إن غيّرت كلمة مرور شبكة الواي فاي مستقبلًا؟',
        a: 'يتوقف الرمز القديم عن العمل، لأن تلك الكلمة بعينها مثبتة في الوحدات. تغيير كلمة المرور يعني توليد رمز جديد وطباعته.'
      },
      {
        q: 'هل يمكنني توليد رمز QR للواي فاي لشبكة مفتوحة بلا كلمة مرور؟',
        a: 'اختر خيار «بلا تشفير»، وأدخل SSID، وولّد. المسح يتصل مباشرة بالشبكة المفتوحة دون طلب مفتاح.'
      },
      {
        q: 'كيف أنشئ رمز QR لكلمة مرور الواي فاي؟',
        a: 'اكتب اسم شبكتك وكلمة المرور، واختر نوع التشفير (WPA/WPA2/WPA3)، وولّد. يحمل الرمز بيانات الاعتماد، فمسحه ينضم إلى الشبكة — دون أن يقرأ أحد كلمة المرور أو يكتبها.'
      },
      {
        q: 'هل يكشف مسح رمز QR للواي فاي كلمة المرور على شاشة المستخدم؟',
        a: 'على iOS يقول التنبيه فقط «الانضمام إلى [اسم الشبكة]؟» — لا تظهر أحرف كلمة المرور على الشاشة أبدًا، ما يحمي بهدوء من أي أحد ينظر من فوق كتفك.'
      },
      {
        q: 'هل يمكنني إضافة شعار عملي في وسط رمز QR للواي فاي؟',
        a: 'نعم. يحجز تصحيح المستوى H نحو 30% من الرمز للاستعادة، فيتّسع الوسط لشعار المكان أو أيقونة واي فاي وتظل الهواتف تقرأه جيدًا.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للواي فاي أو لها حدود مسح شهرية؟',
        a: 'لا هذا ولا ذاك. إنها رموز ثابتة دائمة — مسح غير محدود، بلا انتهاء صلاحية، وبلا رسوم.'
      },
      {
        q: 'لماذا فشل هاتفي في الاتصال بعد مسح رمز QR للواي فاي؟',
        a: 'غالبًا أحد أربعة أسباب: حالة أحرف SSID غير صحيحة، أو اختير WEP بدلًا من WPA/WPA2/WPA3، أو الراوتر خارج النطاق، أو الشبكة مفعّل بها تصفية عناوين MAC.'
      }
    ],
    bestPractices: 'اطبع الرمز على ورق مقوّى مطفأ عالي التباين وضعه في حامل أكريليك شفاف. أضف سطرًا مثل «وجّه كاميرتك هنا للاتصال بواي فاي الضيوف» كي يعرف الضيوف ما يفعله الرمز — وامسح النسخة المطبوعة قبل طلب دفعة كاملة.'
  },
  '/url-qr-code-generator': {
    sections: [
      {
        title: 'اربط جمهورك خارج الإنترنت بأي وجهة على الويب',
        paragraphs: [
          'يسدّ رمز QR للروابط الفجوة بين موادك التسويقية المطبوعة وحضورك الرقمي على الإنترنت. يكفي أن يوجّه المستخدم كاميرا هاتفه نحو الرمز ليفتح روابط الويب أو صفحات العروض أو القوائم الرقمية دون كتابة روابط طويلة.',
          'تدعم رموز QR للروابط لدينا تخصيص التصميم بالكامل، بما في ذلك ألوان علامتك التجارية وأشكال نقاط فريدة وتصدير متجهي SVG عالي الدقة للطباعة التجارية.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Specification of URL QR Codes',
      paragraphs: [
        'يحوّل رمز QR للرابط عنوان ويب إلى شبكة من الوحدات السوداء والبيضاء، وفق معيار ISO/IEC 18004. وجّه كاميرا الهاتف نحوه فيفكّ الجهاز الشيفرة الثنائية ثم يسلّم العنوان إلى المتصفح الافتراضي — Safari عبر AVFoundation على iOS، وChrome عبر Google ML Kit على Android. تُفتح الصفحة. لا أحد يكتب شيئًا.',
        'الرموز هنا ثابتة، ولهذه الكلمة وزنها. الخدمة القائمة على إعادة التوجيه تمرّر كل زائر عبر خادمها أولًا، ما يضيف زمن استجابة ونقطة فشل واحدة واشتراكًا قد ينتهي فيُسقط رمزك معه. أما رمز الرابط الثابت فيتخطى ذلك كله: عنوان HTTP أو HTTPS الدقيق مطبوع داخل المصفوفة نفسها. يظل يعمل ما دامت صفحتك على الويب موجودة، بلا حدّ للمسح وبلا تسجيل لأي شيء.',
        'تدعم هذه الرموز أيضًا الروابط العميقة. وجّه رمزًا إلى مخطط URI مخصص أو Universal Link، وإذا كان التطبيق مثبتًا نقلك المسح مباشرة إلى داخله — منتج بعينه داخل تطبيق تسوق، أو ألبوم في Spotify أو Apple Music — بدلًا من نسخة الويب للجوال.'
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
        title: 'أدخل عنوان الويب المقصود ومعاملات UTM',
        description: 'الصق الرابط كاملًا مع https://. للحملات، أضف وسوم UTM من Google Analytics — utm_source=flyer&utm_medium=qr&utm_campaign=spring_launch — وسيَنسب GA4 الزيارات إلى تلك النشرة بالذات.'
      },
      {
        number: 2,
        title: 'اختر مستوى تصحيح الأخطاء ومعاملات التصميم',
        description: 'تخطط لشعار في المنتصف؟ اختر المستوى H الذي يستعيد 30% من الرمز. ثم اضبط نمط الوحدات وعيون الزوايا والألوان، مع الحفاظ على تباين 4.5:1 أو أفضل.'
      },
      {
        number: 3,
        title: 'صدّر SVG متجهيًا للطباعة أو PNG عالي الدقة للرقمي',
        description: 'للطباعة والتغليف واللافتات، استخدم SVG القابل للتحجيم. للشاشات ووسائل التواصل، استخدم PNG بحجم 2048x2048 بكسل بدقة 300 DPI.'
      }
    ],
    features: [
      {
        title: 'بلا جدران اشتراك ومسح دائم مدى الحياة',
        description: 'رمز رابط ثابت لا تنتهي صلاحيته أبدًا، ولا يطلب بطاقة، ويتحمل ملايين عمليات المسح دون تقييد.'
      },
      {
        title: 'تصدير طباعة متجهي SVG وEPS بلا فقدان للجودة',
        description: 'يُطبع الملف نفسه واضحًا على بطاقة 2 سم وعلى لوحة إعلانية بطول 10 أمتار. الهندسة المتجهية بلا سقف للدقة.'
      },
      {
        title: 'تصحيح أخطاء المستوى H (احتياط 30%)',
        description: 'ضع شعارًا في المنتصف ويغطيه هامش الاستعادة، فيصمد المسح مهما كانت الإضاءة.'
      },
      {
        title: 'خصوصية تشفيرية 100% من جانب المتصفح',
        description: 'يجري التوليد في متصفحك. روابطك ومعاملاتك ورموزك لا تُخزَّن ولا تُحلَّل على أي خادم.'
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
        title: 'البيع بالتجزئة متعدد القنوات وتغليف المنتجات',
        description: 'اربط العبوة بطبقة رقمية — شرح لفتح المنتج، أو قائمة المكونات الكاملة، أو شهادة أصالة، أو بوابة تسجيل — مباشرة من على الغلاف.'
      },
      {
        title: 'قوائم الضيافة والطلب من الطاولة',
        description: 'تخلّص من فاتورة طباعة القوائم، وأبقِ القائمة محدَّثة، ودع الضيوف يطلبون أو يدفعون من الطاولة. قائمة PDF تُحدَّث في السادسة مساءً دون إعادة طباعة.'
      },
      {
        title: 'لافتات العقارات والجولات الافتراضية',
        description: 'رمز على لافتة الحديقة يفتح جولة ثلاثية الأبعاد من Matterport، والمخطط، ومعرض الصور. يتجول المشترون في المنزل من الرصيف في أي وقت.'
      },
      {
        title: 'الإعلان المطبوع وتحويل البريد المباشر',
        description: 'إعلان مجلة، لوحة طرق، بطاقة بريدية — يتحول كل منها إلى قمع قابل للقياس حين يخبرك الرمز الموسوم بـ UTM أيها دفع الزيارة فعلًا.'
      },
      {
        title: 'المؤتمرات والكلمات والعروض التقديمية',
        description: 'اختم بشريحة تحمل رمزًا، فتنزّل القاعة عرضك وورقتك البيضاء وروابطك قبل أن ينهضوا.'
      }
    ],
    troubleshooting: {
      title: '5 Critical Pitfalls That Break URL QR Code Scannability',
      points: [
        'تباين ضعيف. رمادي فاتح على أبيض، أو أخضر داكن على أسود، لا يبلغ نسبة 4.5:1 التي تحتاجها الكاميرا. وحدات داكنة وخلفية فاتحة: تلك هي القاعدة.',
        'منطقة صامتة مقصوصة. يحتاج الرمز إلى حدّ خالٍ بعرض 4 وحدات من كل جانب. إن وصل النص أو الرسم إلى الحافة، لن يجد الماسح أين يبدأ الرمز.',
        'رابط طويل جدًا. بعد نحو 150 حرفًا تحشر المصفوفة نقاطًا دقيقة تتلطخ عند الطباعة الصغيرة. اقتطع الرابط أو احذف معاملات الاستعلام الزائدة أولًا.',
        'شعار كبير جدًا. شعار يتجاوز 30% من المساحة، أو رمز مبني بالمستوى L أو M بدلًا من H، يتجاوز كتل الاستعادة فيفشل المسح.',
        'وهج اللمعان. اللمعان اللامع يعكس أضواء السقف إلى العدسة في مكان مزدحم. الورق المطفأ أو الساتان يُقرأ بوضوح.'
      ]
    },
    faqs: [
      {
        q: 'هل تنتهي صلاحية رموز QR للروابط المُنشأة على QR Generator Online؟',
        a: 'تبقى صالحة مدى الحياة. عنوان الويب مكتوب داخل المصفوفة نفسها، فلا اشتراك ولا مؤقّت — يعمل الرمز ما دامت صفحة الوجهة نشطة.'
      },
      {
        q: 'هل يمكنني تعديل رابط الوجهة بعد طباعة رمز QR ثابت؟',
        a: 'ليس الرمز نفسه — فالوجهة تثبت في نمط الوحدات بمجرد الطباعة. الحل أن توجّه الرمز إلى رابط قصير على نطاقك الخاص (yourdomain.com/promo) وتعيد توجيه ذلك الرابط كلما تغيّر هدف الحملة. ولا يحتاج الرمز المطبوع إلى تغيير أبدًا.'
      },
      {
        q: 'ما الحد الأقصى لعدد عمليات المسح المسموح بها على الرموز المجانية؟',
        a: 'لا سقف. التوليد ثابت ومن جانب المتصفح، فيمكن للرمز أن يتحمل عشرات الملايين من عمليات المسح دون بلوغ حدّ نطاق ترددي أو جدار دفع.'
      },
      {
        q: 'لماذا يُنصح بصيغة SVG بدلًا من PNG للطباعة التجارية؟',
        a: 'يخزّن SVG الرمز كهندسة لا كشبكة بكسلات ثابتة. كبّره إلى حجم لوحة إعلانية وتبقى الخطوط حادة، بينما يتفكك PNG النقطي بمجرد طباعته أكبر من بكسلاته الأصلية.'
      },
      {
        q: 'كيف تساعد معاملات UTM في تتبع حملات التسويق برموز QR؟',
        a: 'أضف وسومًا مثل ?utm_source=brochure&utm_medium=qr&utm_campaign=summer_sale وينسب GA4 كل جلسة وعملية بيع إلى ذلك الأصل المطبوع بعينه، بدلًا من رميها في زيارات ‹مباشرة› عامة لا تتعلم منها شيئًا.'
      },
      {
        q: 'هل يمكنني استخدام رمز QR للرابط للربط مباشرة بملف PDF قابل للتنزيل؟',
        a: 'استضف ملف PDF في مكان عام — موقعك أو Dropbox أو Google Drive — وانسخ رابطه المباشر والصقه. عندها يفتح المسح المستند أو ينزّله مباشرة من متصفح الهاتف.'
      },
      {
        q: 'هل رموز QR للروابط متوافقة مع هواتف iPhone وAndroid الأقدم؟',
        a: 'أي iPhone بنظام iOS 11 أو أحدث (من 2017 فصاعدًا) وأي Android بالإصدار 9 أو أحدث يقرأ رموز QR من الكاميرا المدمجة، دون تطبيق مسح منفصل.'
      },
      {
        q: 'كيف يحمي المستوى H لتصحيح الأخطاء رمز QR مع شعار مخصص؟',
        a: 'يكرّر المستوى H نحو 30% من البيانات عبر احتياط Reed-Solomon. يغطي الشعار المركزي بعض الوحدات، فيعيد الماسح بناءها من النسخ الاحتياطية — ويظل الرابط يُفكّ بالكامل.'
      }
    ],
    bestPractices: 'اختبر الرمز على iPhone وAndroid، في إضاءة خافتة وساطعة، قبل اعتماد تشغيل الطباعة. أبقِ المنطقة الصامتة بعرض 4 وحدات خالية، وتأكد من أن الصفحة التي يشير إليها متجاوبة مع الجوال وتُحمَّل في أقل من ثانيتين — فالمسح السريع نحو صفحة بطيئة يفقد الزائر رغم ذلك.'
  },
  '/location-qr-code-generator': {
    sections: [
      {
        title: 'إرشادات ملاحية خطوة بخطوة للمتاجر والأماكن',
        paragraphs: [
          'اطبع رموز QR للموقع على الدعوات والنشرات ولافتات العقارات وبطاقات العمل لتوفير ملاحة GPS فورية حتى باب منشأتك.',
          'متوافقة مع خرائط جوجل وخرائط آبل وتطبيقات الملاحة القياسية على iOS وAndroid.'
        ]
      }
    ],
    technicalOverview: {
      title: 'نظرة تقنية على رموز QR بصيغة Geo URI وخرائط جوجل',
      paragraphs: [
        'يرمّز رمز QR للموقع بيانات الإحداثيات الجغرافية أو روابط الخرائط باستخدام مخطط URI القياسي `geo:` (المعيار RFC 5870، بالصيغة: `geo:<خط العرض>,<خط الطول>,<الارتفاع>`) أو رابطًا مباشرًا لخرائط جوجل أو خرائط آبل. وعند مسحه بهاتف ذكي، يفتح نظام التشغيل تطبيق الملاحة الأصلي (خرائط جوجل على Android أو خرائط آبل على iOS) مع تثبيت وجهتك.',
        'وبلمسة واحدة على إشعار الملاحة، يحصل المستخدم فورًا على إرشادات خطوة بخطوة للقيادة أو المشي أو النقل العام من موقعه الحالي إلى مكانك أو متجرك أو مدخل موقف السيارات أو بوابة الفعالية.',
        'وبإلغاء كتابة العناوين يدويًا وأسماء الشوارع التي يُساء سماعها وأخطاء الملاحة، تزيد رموز QR للموقع بشكل كبير من حركة الزوار والوصول في الموعد للمتاجر المؤقتة والبيوت المفتوحة وحفلات الزفاف والوجهات السياحية.'
      ]
    },
    comparisonTable: {
      title: 'الملاحة برمز QR للموقع مقابل البحث اليدوي عن العنوان',
      headers: [
        'العامل / المقياس',
        'رمز QR للموقع',
        'البحث اليدوي عن العنوان'
      ],
      rows: [
        [
          'دقة الملاحة',
          'تثبيت دقيق 100٪ (دقة GPS لخطي العرض والطول)',
          'أخطاء متكررة بسبب تكرار أسماء الشوارع والمدن'
        ],
        [
          'الوقت حتى بدء الملاحة',
          'مسحة واحدة + لمسة واحدة (أقل من 3 ثوانٍ)',
          '45 - 90 ثانية (فتح الخرائط وكتابة العنوان والاختيار)'
        ],
        [
          'تثبيت مدخل محدد',
          'يثبّت إحداثيات موقف السيارات أو البوابة الخلفية بدقة',
          'العناوين القياسية غالبًا تثبّت الرصيف أو شارعًا خاطئًا'
        ],
        [
          'الدعم عبر المنصات',
          'يفتح خرائط جوجل أو آبل أو Waze بشكل أصلي',
          'يتطلب التنقل يدويًا داخل التطبيق'
        ],
        [
          'تخزين الإحداثيات دون اتصال',
          'يعمل Geo URI مع تطبيقات ملاحة GPS دون اتصال',
          'يتطلب بحثًا عبر الإنترنت لتحليل نص العنوان'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'أدخل رابط خرائط جوجل أو إحداثيات GPS الدقيقة',
        description: 'الصق رابط المشاركة من خرائط جوجل أو أدخل إحداثيات خطي العرض والطول بدقة (مثال: 37.7749, -122.4194) لتحديد المواقع البعيدة عن الطرق.'
      },
      {
        number: 2,
        title: 'صمّم بأيقونة دبوس خريطة وألوان علامتك التجارية',
        description: 'اختر ألوانًا عالية التباين، وخصص عيون الزوايا، وضمّن دبوس خريطة أو شعار المكان في مركز الرمز.'
      },
      {
        number: 3,
        title: 'حمّل SVG متجهي للدعوات واللافتات',
        description: 'صدّر SVG متجهي لملصقات الفعاليات ودعوات الزفاف واللافتات الإرشادية، أو PNG عالي الدقة لأدلة الفعاليات الرقمية.'
      }
    ],
    features: [
      {
        title: 'إرشادات GPS خطوة بخطوة بلمسة واحدة',
        description: 'يوجّه الزوار مباشرة إلى مكانك دون أي التباس في الملاحة أو إدخال يدوي للعنوان.'
      },
      {
        title: 'دعم الإحداثيات الدقيقة لخطي العرض والطول',
        description: 'حدّد بوابات المهرجانات ومواقف بدايات المسارات ومواقع الفعاليات المفتوحة دون عناوين رسمية.'
      },
      {
        title: 'تكامل أصلي مع خرائط جوجل وآبل',
        description: 'يفتح تطبيقات الملاحة الافتراضية بسلاسة على جميع أجهزة iOS وAndroid.'
      },
      {
        title: 'تشغيل دائم مدى الحياة بلا رسوم',
        description: 'رموز QR الثابتة للموقع لها صلاحية دائمة ومسح غير محدود وبلا رسوم متكررة.'
      }
    ],
    sizingMatrix: {
      title: 'مواصفات طباعة رمز QR للموقع',
      description: 'تأكّد من سهولة مسح رموز QR للموقع على الدعوات واللافتات الإرشادية.',
      headers: [
        'الموضع / الاستخدام',
        'مسافة المسح',
        'الحد الأدنى لحجم الطباعة',
        'الركيزة الموصى بها'
      ],
      rows: [
        [
          'دعوات الزفاف والحفلات',
          '20 - 35 سم (8 - 14 بوصة)',
          '30 × 30 مم (1.2 × 1.2 بوصة)',
          'ورق مقوى كتاني غير لامع وثقيل'
        ],
        [
          'اللافتات الإرشادية ولافتات الحدائق',
          '1.0 - 2.5 م (3 - 8 أقدام)',
          '120 × 120 مم (4.8 × 4.8 بوصة)',
          'بلاستيك مموج مقاوم للطقس / ألمنيوم'
        ],
        [
          'البطاقات البريدية الترويجية',
          '25 - 40 سم (10 - 16 بوصة)',
          '35 × 35 مم (1.4 × 1.4 بوصة)',
          'ورق مقوى غير لامع ثقيل (100 رطل فأكثر)'
        ],
        [
          'الأدلة السياحية ولوحات المسارات',
          '30 - 60 سم (12 - 24 بوصة)',
          '50 × 50 مم (2.0 × 2.0 بوصة)',
          'ألمنيوم مؤكسد / PVC صلب'
        ],
        [
          'كتيبات المؤتمرات والمعارض',
          '20 - 35 سم (8 - 14 بوصة)',
          '30 × 30 مم (1.2 × 1.2 بوصة)',
          'ورق مطلي غير لامع'
        ]
      ]
    },
    useCases: [
      {
        title: 'دعوات الزفاف والفعاليات الخاصة',
        description: 'اطبع رموز QR للموقع على الدعوات ليتمكن الضيوف من المسح والتوجه مباشرة إلى قاعتي المراسم والاستقبال.'
      },
      {
        title: 'البيوت المفتوحة العقارية واللافتات الإرشادية',
        description: 'ضع رموز QR للموقع على لافتات زوايا الشوارع لتوجيه المشترين المهتمين مباشرة إلى مدخل البيت المفتوح.'
      },
      {
        title: 'المهرجانات والأسواق المؤقتة وعربات الطعام',
        description: 'شارك دبابيس GPS دقيقة لعربات الطعام المتنقلة ومسارح المهرجانات الخارجية والأكشاك المؤقتة دون عناوين ثابتة.'
      },
      {
        title: 'المعالم السياحية وملاحة المسارات',
        description: 'وفّر للمتنزهين والسياح دبابيس قابلة للمسح لبدايات المسارات والمطلات والمعالم التاريخية.'
      },
      {
        title: 'حملات البريد المباشر للمتاجر التجارية',
        description: 'أضف رموز QR لخرائط جوجل على النشرات الترويجية ليتمكن سكان المنطقة من الوصول إلى افتتاحك أو فرعك.'
      }
    ],
    troubleshooting: {
      title: 'منع فشل الملاحة في رموز QR للموقع',
      points: [
        'إحداثيات مبتورة: حذف الخانات العشرية (مثل 37.77 بدل 37.774929) يزيح الدبوس مئات الأمتار. استخدم دائمًا 5-6 خانات عشرية.',
        'روابط خرائط مختصرة منتهية: إذا استخدمت روابط قصيرة مخصصة، تأكّد من بقاء النطاق نشطًا. أما روابط خرائط جوجل المباشرة وGeo URI فلا تنتهي أبدًا.',
        'إغفال نص العنوان: اطبع دائمًا العنوان المقروء أسفل رمز QR لمن يفضّلون التحقق يدويًا.',
        'تباين منخفض على اللافتات الخارجية: تُبهت أشعة الشمس المباشرة الألوان منخفضة التباين. استخدم وحدات سوداء صلبة على خلفية بيضاء ساطعة في الخارج.',
        'الوهج على لافتات الطرق: يسبّب تغليف اللافتات شديد الانعكاس وهجًا من المصابيح والشمس. استخدم فينيل خارجي غير لامع.'
      ]
    },
    faqs: [
      {
        q: 'كيف أحصل على رابط خرائط جوجل الصحيح لرمز QR؟',
        a: 'افتح خرائط جوجل، وابحث عن نشاطك أو ضع دبوسًا على موقعك، ثم انقر «مشاركة» وانسخ الرابط القصير والصقه في مولّدنا.'
      },
      {
        q: 'هل يمكنني استخدام إحداثيات خطي العرض والطول بدل العنوان؟',
        a: 'نعم! إدخال إحداثيات دقيقة لخطي العرض والطول (مثل `37.7749,-122.4194`) مثالي للحدائق وساحات المهرجانات والمواقع الريفية بلا عناوين رسمية.'
      },
      {
        q: 'هل سيفتح خرائط آبل لمستخدمي آيفون وخرائط جوجل لمستخدمي أندرويد؟',
        a: 'نعم. تُشغّل روابط خرائط جوجل القياسية وGeo URI تطبيق الخرائط الافتراضي المناسب على هواتف iOS وAndroid.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR للموقع أو تُفرض عليها رسوم؟',
        a: 'لا. رموز QR الثابتة للموقع المُنشأة على QR Generator Online لها صلاحية دائمة مدى الحياة ومسح غير محدود وبلا رسوم متكررة.'
      },
      {
        q: 'هل يمكنني تضمين أيقونة دبوس خريطة في مركز الرمز؟',
        a: 'نعم! يستخدم QR Generator Online تصحيح أخطاء المستوى H، مما يتيح تضمين دبوس ملاحة أو شعار المكان في المركز دون التأثير على قابلية المسح.'
      },
      {
        q: 'ما أفضل صيغة تصدير لطباعة دعوات الزفاف؟',
        a: 'صدّر SVG متجهي أو PNG عالي الدقة بـ 300 نقطة لكل بوصة لقرطاسية الزفاف والطباعة التجارية على الورق المقوى.'
      },
      {
        q: 'هل يمكن للمستخدمين التنقل دون اتصال؟',
        a: 'إذا استخدمت إحداثيات Geo URI (`geo:lat,lng`)، يمكن لتطبيقات الملاحة دون اتصال مثل maps.me أو مناطق خرائط جوجل المحمّلة مسبقًا التنقل دون بيانات خلوية.'
      },
      {
        q: 'هل تبقى بيانات موقعي خاصة أثناء الإنشاء؟',
        a: 'نعم. تُنشأ جميع رموز QR من جانب العميل بنسبة 100٪ داخل متصفحك. ولا تُخزَّن أي إحداثيات أو روابط خرائط على خوادم خارجية.'
      }
    ],
    bestPractices: 'تحقّق من موضع الدبوس على خرائط آبل وجوجل معًا قبل الطباعة. اطبع مع دعوة واضحة للعمل مثل «امسح للحصول على إرشادات GPS خطوة بخطوة» وحافظ على تباين عالٍ.'
  },
  '/text-qr-code-generator': {
    sections: [
      {
        title: 'ترميز نصوص وبيانات قابل للمسح دون اتصال بنسبة 100٪',
        paragraphs: [
          'تخزّن رموز QR النصية البيانات الأبجدية الرقمية مباشرة داخل نمط الباركود. ويعمل المسح فورًا حتى بدون بيانات جوال أو اتصال بالإنترنت.',
          'مثالية لوسم مخزون المستودعات وتعليمات المعدات وتتبع الأرقام التسلسلية والرسائل السرية.'
        ]
      }
    ],
    technicalOverview: {
      title: 'نظرة تقنية على رموز QR للنص العادي وترميز UTF-8 الخام',
      paragraphs: [
        'يرمّز رمز QR النصي بيانات نصية خام غير منسّقة مباشرة في مصفوفة ثنائية الأبعاد وفق معايير ISO/IEC 18004 باستخدام ترميز وضع البايت 8-بت UTF-8. وعلى عكس رموز QR للروابط التي تتطلب اتصالاً بالويب، يحتوي رمز QR النصي على حمولة بياناته الكاملة داخل النمط المرئي للوحدات السوداء والبيضاء.',
        'وعند مسحه بكاميرا هاتف ذكي أو قارئ باركود صناعي ثنائي الأبعاد أو ماسح مخزون، يفكّ الجهاز تشفير مصفوفة البايت ويعرض النص فورًا على الشاشة، أو ينقله عبر محاكاة لوحة المفاتيح (HID) إلى البرنامج المتصل، دون فتح متصفح ويب أو الحاجة إلى اتصال خلوي أو واي فاي.',
        'تدعم رموز QR النصية الأحرف الأبجدية الرقمية وعلامات الترقيم والرموز والنصوص متعددة اللغات بترميز يونيكود والإيموجي، مما يجعلها لا غنى عنها لتتبع الأصول الصناعية وأرقام مخزون المستودعات وسجلات صيانة المعدات وألغاز غرف الهروب ورموز الأمان دون اتصال.'
      ]
    },
    comparisonTable: {
      title: 'رمز QR النصي مقابل رمز QR للرابط',
      headers: [
        'الميزة / المقياس',
        'رمز QR النصي',
        'رمز QR للرابط'
      ],
      rows: [
        [
          'متطلب الإنترنت',
          'يعمل دون اتصال بنسبة 100٪ (لا يحتاج أي شبكة)',
          'يتطلب اتصالاً نشطًا بالإنترنت لتحميل صفحة الويب'
        ],
        [
          'إجراء الجهاز عند المسح',
          'يعرض النص في نافذة أو ينسخه إلى الحافظة',
          'يفتح متصفح الويب على الرابط المقصود'
        ],
        [
          'موقع البيانات',
          'مخزّنة بالكامل داخل وحدات الباركود المادية',
          'مخزّنة على خادم الويب الوجهة'
        ],
        [
          'سعة البيانات',
          'حتى 4,296 حرفًا أبجديًا رقميًا (7,089 رقمًا)',
          'عادة 30 - 100 حرف لروابط الويب'
        ],
        [
          'الأمان والخصوصية',
          'صفر أثر شبكي، وصفر تتبّع',
          'يسجّل الخادم عنوان IP والمتصفح والوقت للزائر'
        ],
        [
          'حالات الاستخدام الرئيسية',
          'بطاقات الأصول والأرقام التسلسلية والملاحظات والألغاز',
          'التسويق وحركة الويب وصفحات الهبوط والقوائم'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'أدخل المحتوى النصي أو الأرقام التسلسلية أو التعليمات',
        description: 'اكتب أو الصق النص الأبجدي الرقمي أو أكواد المعدات التسلسلية أو أرقام القسائم أو الملاحظات متعددة الأسطر في حقل النص.'
      },
      {
        number: 2,
        title: 'اختر النمط ومستوى تصحيح الأخطاء',
        description: 'اختر أنماط وحدات عالية التباين وحدّد مستوى تصحيح الأخطاء M أو Q لبطاقات الأصول، أو المستوى H عند تضمين شعار مركزي.'
      },
      {
        number: 3,
        title: 'حمّل SVG متجهي أو PNG عالي الدقة',
        description: 'صدّر SVG متجهي للحفر بالليزر الصناعي وطباعة الملصقات الحرارية، أو PNG عالي الدقة لأوراق العمل والمستندات الرقمية.'
      }
    ],
    features: [
      {
        title: 'تشغيل دون اتصال بنسبة 100٪',
        description: 'يمسح ويعرض النص فورًا في المواقع الميدانية النائية والأقبية والمنشآت الآمنة غير المتصلة.'
      },
      {
        title: 'دعم شامل لجميع ماسحات الباركود ثنائية الأبعاد',
        description: 'متوافق مع ماسحات المستودعات Zebra وHoneywell وDatalogic إضافة إلى تطبيقات الكاميرا في iOS وAndroid.'
      },
      {
        title: 'ترميز UTF-8 متعدد اللغات مع الإيموجي',
        description: 'رمّز بسهولة النصوص بلغات عالمية والصيغ الرياضية ورموز العملات والإيموجي.'
      },
      {
        title: 'رموز ثابتة دائمة بلا انتهاء صلاحية',
        description: 'تبقى رموز QR النصية الثابتة قابلة للقراءة للأبد دون رسوم اشتراك أو حدود مسح أو تجديدات.'
      }
    ],
    sizingMatrix: {
      title: 'مواصفات حجم وكثافة رمز QR النصي',
      description: 'تزداد كثافة مصفوفة النص مع عدد الأحرف. اتّبع إرشادات الحجم الأدنى لضمان مسح موثوق.',
      headers: [
        'حمولة الأحرف',
        'إصدار المصفوفة',
        'الحد الأدنى لحجم الطباعة',
        'الاستخدام الموصى به'
      ],
      rows: [
        [
          'قصير (1 - 50 حرفًا)',
          'الإصدار 2 - 4 (25x25 - 33x33)',
          '20 × 20 مم (0.8 × 0.8 بوصة)',
          'بطاقات الأصول والأرقام التسلسلية والقطع'
        ],
        [
          'متوسط (50 - 150 حرفًا)',
          'الإصدار 5 - 7 (37x37 - 45x45)',
          '30 × 30 مم (1.2 × 1.2 بوصة)',
          'مواصفات المعدات والقسائم ومفاتيح الوصول'
        ],
        [
          'طويل (150 - 300 حرف)',
          'الإصدار 8 - 11 (49x49 - 61x61)',
          '40 × 40 مم (1.6 × 1.6 بوصة)',
          'سجلات الصيانة والتعليمات والملاحظات'
        ],
        [
          'ممتد (300 - 600 حرف)',
          'الإصدار 12 - 16 (65x65 - 81x81)',
          '55 × 55 مم (2.2 × 2.2 بوصة)',
          'الإجراءات التفصيلية والمستندات متعددة الأسطر'
        ],
        [
          'أقصى (أكثر من 600 حرف)',
          'الإصدار 17+ (85x85+)',
          '75 × 75 مم (3.0 × 3.0 بوصة)',
          'لوحات مرجعية كبيرة الحجم'
        ]
      ]
    },
    useCases: [
      {
        title: 'تتبع الأصول الصناعية وبطاقات المستودعات',
        description: 'وسِم الآلات ورفوف الخوادم وصناديق المخزون بأرقام تسلسلية وتواريخ صيانة قابلة للمسح.'
      },
      {
        title: 'الاختبارات التعليمية ورحلات البحث الصفية',
        description: 'أخفِ إجابات الاختبارات والحلول الرياضية وتلميحات الألغاز في أوراق العمل المدرسية المطبوعة ليمسحها الطلاب دون اتصال.'
      },
      {
        title: 'قسائم الفعاليات والكوبونات وأكواد الوصول لمرة واحدة',
        description: 'اطبع أكواد خصم نصية فريدة على التذاكر ليتحقق منها الموظفون بماسحات محمولة دون واي فاي.'
      },
      {
        title: 'ألغاز غرف الهروب والمعارض التفاعلية',
        description: 'ضمّن الأحاجي السرية ومفاتيح فك الشيفرة وتلميحات القصة في معروضات المتاحف ومستلزمات غرف الهروب.'
      },
      {
        title: 'عبارات المرور ومفاتيح الاسترداد دون اتصال',
        description: 'خزّن مفاتيح النسخ الاحتياطي المشفّرة وعبارات الإعداد على ألواح معدنية مادية.'
      }
    ],
    troubleshooting: {
      title: 'حل مشكلات مسح رموز QR النصية',
      points: [
        'إفراط في البيانات يُنتج وحدات مجهرية: حشر أكثر من 1000 حرف في رمز واحد يُنشئ مصفوفة بالغة الكثافة. أبقِ النص دون 300 حرف لمسح سريع.',
        'تضمين بادئة رابط بالخطأ: إذا بدأ نصك بـ http:// أو https://، ستتعامل معه الكاميرات كرابط ويب لا كنص عادي. احذف بادئات الويب إذا أردت عرض النص الخام.',
        'طباعة ملصقات حرارية منخفضة التباين: قد تسبّب الطابعات الحرارية المباشرة الرديئة ذات الرؤوس المهترئة تداخل حواف الوحدات. استخدم أشرطة نقل حراري عالية الجودة.',
        'انتهاك المنطقة الصامتة بأربع وحدات: تأكّد من ترك 4 وحدات فارغة على الأقل حول الحواف الأربع للرمز في بطاقات الأصول.',
        'تشوّه الأسطح المنحنية: لصق ملصقات كثيفة على أنابيب أو زجاجات أسطوانية ضيقة يشوّه المصفوفة. ضع الرموز على المحور الرأسي المستوي.'
      ]
    },
    faqs: [
      {
        q: 'كم عدد الأحرف التي يمكنني ترميزها في رمز QR نصي واحد؟',
        a: 'يمكن لرمز QR تقنيًا تخزين ما يصل إلى 4,296 حرفًا أبجديًا رقميًا أو 7,089 رقمًا. لكن لضمان مسح بصري سريع بالأحجام القياسية، يُنصح بإبقاء النص دون 300 حرف.'
      },
      {
        q: 'هل يتطلب مسح رمز QR نصي اتصالاً بالإنترنت؟',
        a: 'لا! تخزّن رموز QR النصية حمولة بياناتها كاملة داخل مصفوفة الباركود المرئية. وتُمسح وتُعرض دون اتصال بنسبة 100٪ بلا بيانات خلوية أو واي فاي.'
      },
      {
        q: 'ماذا يحدث في الهاتف عند مسح رمز QR نصي؟',
        a: 'يعرض تطبيق الكاميرا النص المفكوك في مربع حوار للنظام مع خيارات لنسخه إلى الحافظة أو إجراء بحث على الويب.'
      },
      {
        q: 'هل يمكنني ترميز رموز خاصة ولغات أجنبية وإيموجي؟',
        a: 'نعم! يدعم QR Generator Online ترميز بايت UTF-8 الكامل، مما يتيح أبجديات لغات أخرى (اليابانية والعربية والسيريلية) والرموز الرياضية والإيموجي.'
      },
      {
        q: 'هل تنتهي صلاحية رموز QR النصية أو تُفرض عليها رسوم؟',
        a: 'لا. رموز QR النصية الثابتة المُنشأة على QR Generator Online لها صلاحية دائمة مدى الحياة ومسح غير محدود وبلا رسوم متكررة.'
      },
      {
        q: 'هل رموز QR النصية متوافقة مع ماسحات الباركود الصناعية؟',
        a: 'نعم! تمسح جميع قارئات الباركود ثنائية الأبعاد القياسية (Zebra وHoneywell وDatalogic) رموز QR النصية وتُخرج الأحرف المفكوكة مباشرة إلى برنامج الطرفية المتصل.'
      },
      {
        q: 'ما أفضل صيغة ملف لطابعات الملصقات الحرارية؟',
        a: 'صدّر صيغة SVG المتجهية أو PNG عالي الدقة. تُرسم ملفات SVG المتجهية بدقة 100٪ في برامج طباعة الملصقات الحرارية التجارية.'
      },
      {
        q: 'هل تبقى البيانات النصية المرمّزة خاصة أثناء الإنشاء؟',
        a: 'نعم. يتم إنشاء رموز QR بالكامل من جانب العميل داخل ذاكرة متصفحك. ولا تُرسل أي بيانات نصية أو تُخزّن على خوادم خارجية.'
      }
    ],
    bestPractices: 'أبقِ النص موجزًا قدر الإمكان للحفاظ على كثافة وحدات منخفضة. استخدم وحدات سوداء صلبة على خلفيات بيضاء، وحافظ على المنطقة الصامتة الإلزامية بأربع وحدات في جميع بطاقات الأصول.'
  },
  '/': {
    sections: [
      {
        title: 'لماذا تختار QR Generator Online؟',
        paragraphs: [
          'QR Generator Online هو مولّد رموز QR الأكثر مرونة والمركّز على الخصوصية والمجاني بنسبة 100٪ على الويب. سواء كنت بحاجة إلى رابط بسيط لنشرة تسويقية، أو بطاقة عمل رقمية، أو وصول فوري لواي فاي الضيوف، تنشئ منصتنا رموز QR احترافية وقابلة للمسح في ثوانٍ.',
          'على عكس الأدوات الأخرى التي تحجب التنزيلات عالية الدقة خلف حواجز الدفع أو تنهي صلاحية رموزك بعد 14 يومًا، تظل جميع رموز QR الثابتة التي تُنشأ على QR Generator Online دائمة وفعّالة للأبد بمسح غير محدود.'
        ]
      },
      {
        title: 'خيارات تخصيص كاملة',
        paragraphs: [
          'خصص كل تفصيلة في رمز QR الخاص بك لتتطابق مع هوية علامتك التجارية. اختر من بين أنماط تصميم نقاط متعددة، وأشكال مربع الزاوية الخارجية، ولمسات العين الداخلية، وتدرجات الألوان المخصصة، والشعارات المضمّنة في المركز.',
          'صدّر تصاميمك بصيغة SVG متجهية جاهزة للطباعة للإعلانات على اللوحات الكبيرة، أو بصيغة PNG عالية الدقة والنقاء لحملات وسائل التواصل الاجتماعي الرقمية.'
        ]
      }
    ],
    technicalOverview: {
      title: 'المعيار المؤسسي لإنشاء رموز QR المجانية التي تراعي الخصوصية أولاً',
      paragraphs: [
        'QR Generator Online هي منصة الويب الرائدة لإنشاء الباركود ثنائي الأبعاد من جانب العميل، مصممة من الأساس لتقديم تخصيص بصري لا مساومة فيه، وتصحيح أخطاء Reed-Solomon بجودة صناعية، وسيادة تشفيرية كاملة على بياناتك بنسبة 100٪. موحّدة عالميًا بموجب ISO/IEC 18004، تمكّن منصتنا الأفراد ووكالات التصميم والشركات الصغيرة والمؤسسات متعددة الجنسيات من إنشاء رموز QR دائمة وقابلة للمسح لجميع مخططات البيانات المتخصصة دون حواجز اشتراك ودون حدود لانتهاء صلاحية المسح.',
        'على عكس خدمات مولّدات رموز QR الجائرة التي توجّه حركة المرور بصمت عبر خوادم إعادة توجيه خاصة (فقط لاحتجاز مواد التسويق المطبوعة الخاصة بك رهينة خلف حواجز دفع مفاجئة بقيمة 30 دولارًا شهريًا بعد 14 يومًا)، تعمل QR Generator Online بمعمارية ترميز مباشر وثابت. عندما تنشئ رمز QR لرابط أو vCard أو واي فاي أو نص على منصتنا، يتم تجميع البيانات الخام مباشرة في وحدات المصفوفة المرئية داخل ذاكرة متصفح الويب لديك. هذا يضمن بقاء أصولك التسويقية المادية فعّالة بشكل دائم طوال عمر موادك المطبوعة.',
        'مع دعم تصحيح الأخطاء من المستوى H (استرداد جبري بنسبة 30٪)، وباليتات تدرج متعددة الألوان، وأشكال وحدات مخصصة، وتصميم مستقل لعيون الزوايا، وتصدير متجهي بلا فقدان بصيغتي SVG/EPS، توفر QR Generator Online مجموعة الأدوات الكاملة اللازمة للتغليف الفاخر وما قبل الطباعة التجارية وطلبات موائد المطاعم والتواصل الرقمي.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online مقابل منصات QR القائمة على الاشتراك',
      headers: ['ميزة / سياسة المنصة', 'QR Generator Online (مجاني ومفتوح 100٪)', 'خدمات QR التقليدية القائمة على الاشتراك'],
      rows: [
        ['انتهاء الصلاحية مدى الحياة', 'لا تنتهي صلاحيته أبدًا (صلاحية ثابتة دائمة)', 'تنتهي بعد فترة تجريبية 14 يومًا ما لم يتم الدفع'],
        ['حدود المسح', 'مسح غير محدود مدى الحياة (بتكلفة 0 للأبد)', 'محدد بـ 50-100 مسحة/شهر في الخطط المجانية'],
        ['زمن استجابة إعادة التوجيه', '0 مللي ثانية (تحليل DNS مباشر من المتصفح)', 'قفزة خادم وسيط من 200-800 مللي ثانية'],
        ['الخصوصية وتتبع البيانات', 'من جانب العميل بالكامل 100٪ (بدون تسجيل IP أو ملفات تعريف ارتباط)', 'يتتبع خادم وسيط عناوين IP والمواقع الجغرافية للمستخدمين'],
        ['تصدير متجهي عالي الدقة', 'SVG متجهي كامل وEPS وPNG 4K مضمّنة مجانًا', 'الصيغ المتجهية مقيّدة خلف خطط 30$+ شهريًا'],
        ['تضمين الشعار', 'المستوى H (استرداد 30٪) مضمّن مجانًا', 'بعلامة مائية أو مقيّد في الخطط المجانية']
      ]
    },
    steps: [
      { number: 1, title: 'اختر نوع البيانات وأدخل المحتوى', description: 'اختر من بين مولّدات QR المتخصصة لدينا (رابط، واي فاي، vCard، PDF، واتساب، وسائل التواصل الاجتماعي، بريد إلكتروني، SMS، هاتف، موقع، حدث، عملات رقمية، نص، Google Forms، مدفوعات) وأدخل بياناتك.' },
      { number: 2, title: 'خصص الشكل البصري والألوان وشعار العلامة التجارية', description: 'طبّق لوحة ألوان شركتك، اختر أنماط نقاط دائرية أو أنيقة، صمّم عيون الزوايا بشكل مستقل، وارفع شعار علامتك التجارية المركزي.' },
      { number: 3, title: 'صدّر SVG متجهي بلا فقدان أو PNG 4K', description: 'حمّل SVG متجهي جاهز للطباعة للطباعة الأوفست التجارية والتغليف واللافتات، أو PNG بحجم 2048x2048 بكسل بدقة 300 نقطة لكل بوصة للقنوات الرقمية والويب.' }
    ],
    features: [
      { title: 'مجموعة كاملة من أدوات مولّد QR', description: 'دعم كامل لروابط الويب وشبكات الواي فاي وجهات اتصال vCard 3.0 ومستندات PDF ومحادثات واتساب والملاحة عبر GPS والمدفوعات والمزيد.' },
      { title: 'تصحيح أخطاء Reed-Solomon من المستوى H', description: 'ضمّن شعار شركتك أو أيقونة ملفك الشخصي مع 30٪ من التكرار الرياضي لاسترداد البيانات.' },
      { title: 'تنزيلات طباعة متجهية بلا فقدان بصيغتي SVG وEPS', description: 'قم بتحجيم رسومات QR الخاصة بك بلا حدود من بطاقات العمل الصغيرة إلى الجداريات العملاقة بدقة حادة.' },
      { title: 'خصوصية تشفيرية 100٪ من جانب العميل', description: 'تُنفَّذ جميع خوارزميات إنشاء رموز QR محليًا داخل ذاكرة متصفح الويب لديك. لا يتم أبدًا رفع روابطك وبيانات اعتمادك ومعاييرك.' }
    ],
    sizingMatrix: {
      title: 'جدول مرجعي رئيسي لحجم الطباعة والمسافة',
      description: 'احسب الأبعاد المادية الدنيا لأي وسيط مادي باستخدام الصيغة البصرية القياسية $S = D / 10$.',
      headers: ['الموضع المادي', 'مسافة المسح (D)', 'الحد الأدنى للعرض (S)', 'الصيغة الموصى بها'],
      rows: [
        ['بطاقات العمل وشارات الأسماء', '15 - 30 سم (6 - 12 بوصة)', '25 × 25 مم (1.0 × 1.0 بوصة)', 'SVG متجهي / EPS'],
        ['قوائم المطاعم وحوامل الطاولات', '30 - 50 سم (12 - 20 بوصة)', '35 × 35 مم (1.4 × 1.4 بوصة)', 'SVG متجهي / PNG بدقة 300'],
        ['تغليف المنتجات والكرتون', '20 - 40 سم (8 - 16 بوصة)', '30 × 30 مم (1.2 × 1.2 بوصة)', 'SVG متجهي / PDF'],
        ['النشرات والملصقات والمجلات', '50 - 150 سم (20 - 60 بوصة)', '60 - 150 مم (2.4 - 6.0 بوصة)', 'SVG متجهي / PNG بدقة 300'],
        ['أساطيل المركبات والشاحنات', '3.0 - 6.0 م (10 - 20 قدم)', '300 × 300 مم (12 × 12 بوصة)', 'SVG متجهي / فينيل مصبوب'],
        ['لوحات الطرق السريعة واللافتات', '15.0 - 30.0 م (50 - 100 قدم)', '1500 - 3000 مم (5 - 10 أقدام)', 'SVG متجهي / EPS كبير الحجم']
      ]
    },
    useCases: [
      { title: 'البيع بالتجزئة متعدد القنوات والتغليف', description: 'اربط المنتجات المادية بدروس فتح العبوة الرقمية والتحقق من الأصالة وبوابات تسجيل العملاء مباشرة من الصندوق.' },
      { title: 'الضيافة وتناول الطعام دون تلامس', description: 'انشر قوائم PDF رقمية صحية وقابلة للتحديث الفوري وقوائم نبيذ وبطاقات طلب على الطاولة تزيد متوسط قيمة الفاتورة.' },
      { title: 'التواصل التنفيذي والبطاقات الذكية', description: 'حوّل بطاقات العمل المادية إلى إدخالات دائمة في دفتر عناوين الهاتف الذكي برموز vCard 3.0 بلمسة واحدة.' },
      { title: 'التسويق العقاري والجولات ثلاثية الأبعاد', description: 'حوّل لافتات الحدائق وإرشادات البيوت المفتوحة إلى بوابات تفاعلية لتوليد العملاء المحتملين على مدار الساعة مرتبطة بجولات Matterport ثلاثية الأبعاد.' },
      { title: 'وصول واي فاي سلس للضيوف', description: 'تخلّص من إحباط مشاركة كلمات المرور في الفنادق والمقاهي والمكاتب بمسح كاميرا بلمسة واحدة لشبكات WPA3/WPA2.' }
    ],
    troubleshooting: {
      title: 'القواعد الخمس الحاسمة لموثوقية مسح 100٪ من أول محاولة',
      points: [
        'حافظ على نسبة تباين لا تقل عن 4.5:1: تضمن الوحدات الداكنة في المقدمة على خلفية بيضاء أو فاتحة نقية ثنائية بصرية فورية للكاميرا.',
        'حافظ على هامش منطقة صامتة بـ 4 وحدات: لا تسمح أبدًا للرسومات أو النص بالتداخل مع الحد الفارغ الإلزامي المكون من 4 وحدات المحيط بالباركود.',
        'لا تتجاوز أبدًا 30٪ من المساحة للشعارات المركزية: حافظ على الشعارات المضمّنة أقل من 25-30٪ من إجمالي المساحة السطحية وأنشئ دائمًا باستخدام تصحيح أخطاء المستوى H.',
        'استخدم SVG متجهي لعمليات الطباعة التجارية: تجنّب لقطات الشاشة منخفضة الدقة بـ 72 نقطة لكل بوصة. يضمن SVG المتجهي حواف حادة عند أي مقياس طباعة.',
        'حدّد ركائز غير لامعة لمنع الوهج: يعكس اللامينيت اللامع الأضواء العلوية مباشرة إلى مستشعرات الكاميرا. استخدم تشطيبات غير لامعة أو حريرية أو ساتانية.'
      ]
    },
    faqs: [
      { q: 'هل رموز QR التي تُنشأ على QR Generator Online مجانية حقًا بنسبة 100٪ للأبد؟', a: 'نعم! جميع رموز QR الثابتة التي تُنشأ على QR Generator Online مجانية بنسبة 100٪ مع مسح غير محدود وصلاحية دائمة مدى الحياة وبدون حواجز دفع اشتراك.' },
      { q: 'لماذا تنتهي صلاحية رموزي بعد 14 يومًا في مواقع مولّدات QR الأخرى؟', a: 'تستخدم العديد من منصات QR التجارية روابط إعادة توجيه ديناميكية توجّه عمليات المسح الخاصة بك عبر خوادمها. بعد فترة تجريبية، يعطّلون إعادة التوجيه حتى تدفع اشتراكًا شهريًا باهظ الثمن (15-40 دولارًا شهريًا). ينشئ QR Generator Online رموزًا ثابتة دائمة ترمّز البيانات مباشرة في الباركود، مما يعني أنه لا يمكن أبدًا احتجازها رهينة.' },
      { q: 'ما هي صيغ الملفات التي يمكنني تنزيلها من QR Generator Online؟', a: 'يمكنك تنزيل ملفات SVG متجهية جاهزة للطباعة (قابلة للتحجيم بلا حدود لما قبل الطباعة التجارية) وصور PNG نقطية فائقة الدقة بحجم 2048x2048 بكسل بدقة 300 نقطة لكل بوصة.' },
      { q: 'هل يمكنني إضافة شعار شركتي إلى مركز أي رمز QR؟', a: 'نعم! يمكنك رفع شعارات مخصصة بصيغة PNG أو SVG أو JPEG عبر جميع أنواع مولّدات QR المتخصصة. يطبّق محركنا تلقائيًا تصحيح أخطاء المستوى H (30٪) وحاجز قناع صامت حول شعارك.' },
      { q: 'هل بياناتي آمنة وخاصة عند استخدام QR Generator Online؟', a: 'نعم. تُنفَّذ جميع خوارزميات إنشاء رموز QR محليًا داخل ذاكرة متصفح الويب لديك عبر JavaScript من جانب العميل. لا يتم أبدًا رفع أو تخزين روابطك وكلمات مرورك وتفاصيل الاتصال والصور على خوادم خارجية.' },
      { q: 'هل أحتاج إلى تثبيت تطبيق على هاتفي لمسح رموز QR هذه؟', a: 'لا. تمسح جميع أجهزة آيفون الحديثة التي تعمل بنظام iOS 11+ وأجهزة أندرويد التي تعمل بنظام Android 9+ رموز QR بشكل أصلي باستخدام تطبيق الكاميرا المدمج دون أي برنامج من طرف ثالث.' },
      { q: 'ما الحجم الذي يجب أن أطبع به رمز QR الخاص بي للافتة أو ملصق؟', a: 'طبّق القاعدة البصرية 10:1: المسافة إلى المستخدم / 10 = الحد الأدنى لعرض QR. بالنسبة لملصق يُشاهد من مسافة 1.5 متر، اطبع الرمز بحجم لا يقل عن 15 × 15 سم.' },
      { q: 'هل يمكنني إنشاء رموز QR للمنتجات والبضائع التجارية؟', a: 'نعم! لديك الملكية التجارية الكاملة وحقوق الترخيص لاستخدام جميع رموز QR المُنشأة على منصتنا عبر تغليف البيع بالتجزئة والكتب والملابس واللافتات في جميع أنحاء العالم.' }
    ],
    bestPractices: 'صدّر دائمًا بصيغة SVG متجهية للطباعة التجارية، وحافظ على تباين عالٍ (> 4.5:1)، واحفظ منطقة صامتة بـ 4 وحدات، واختبر مسح النسخ المطبوعة المادية قبل طلب تشغيلات كبيرة.'
  }
};
