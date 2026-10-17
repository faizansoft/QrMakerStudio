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
  },
  '/pricing': {
    "sections": [
      {
        "title": "ميزات مجانية دائمًا مقابل ميزات Pro للمؤسسات",
        "paragraphs": [
          "تتيح خطتنا المجانية الأساسية إنشاء رموز QR ثابتة غير محدودة عبر جميع أنواع الأدوات المتخصصة، دون حدود للمسح ودون علامات مائية، مع تصدير SVG المتجه بتكلفة صفرية.",
          "أما الفرق التسويقية والمؤسسات التي تحتاج إلى روابط ديناميكية قابلة للتعديل وحماية بكلمة مرور وتحليلات مسح تفصيلية، فإن مستوى Pro لدينا يقدم فوترة مرنة وبأسعار معقولة."
        ]
      }
    ],
    "technicalOverview": {
      "title": "بنية شفافة ومجانية 100% — بيان مناهض للاشتراكات",
      "paragraphs": [
        "إليك كيف يعمل \"فخ التجربة المجانية\". تصنع رمز QR تعتقد أنه مجاني، وتطبعه على آلاف الجنيهات من العبوات أو ملصقات المركبات، وبعد أسبوعين يتوقف عن العمل، لأن الخدمة تطلب الآن 35 دولارًا شهريًا للإبقاء على إعادة التوجيه نشطة. يقع أصحاب الأعمال والمصممون ومخططو الفعاليات في هذا الفخ باستمرار. لم يكن الرمز مجانيًا حقًا؛ بل جعلت الطباعة التخلي عنه مكلفًا.",
        "نحن نرى أن هذا خطأ. يقوم إنشاء رموز QR على معيار رياضي مفتوح، هو ISO/IEC 18004، والمعيار المفتوح لا ينبغي أن يُؤجَّر لك. لذلك يعمل كل شيء على جانب العميل: يحسب متصفحك تصحيح الأخطاء Reed-Solomon، ويبني المصفوفة، ويرسم SVG محليًا. لا يوجد خادم تتبع في المنتصف، ما يعني أنه لا يوجد خادم يستطيع أن يفرض عليك رسومًا أو يوقف رمزك.",
        "فيما يلي قائمة الأسعار كاملة. لا رسوم خفية، ولا حدود للمسح، ولا حاجة لبطاقة، ولا تاريخ انتهاء. هذا ليس مستوى ترويجيًا؛ إنه المنتج كاملًا."
      ]
    },
    "comparisonTable": {
      "title": "مصفوفة الميزات ومستويات الأسعار في QR Generator Online",
      "headers": [
        "الميزة / القدرة",
        "QR Generator Online (مجاني دائمًا)",
        "خطط \"Pro\" لدى المنافسين (35 دولارًا/شهر)"
      ],
      "rows": [
        [
          "تكلفة الاشتراك الشهري",
          "0.00 دولار / شهر (مجاني 100% دائمًا)",
          "15.00 - 45.00 دولارًا / شهر (180 - 540 دولارًا / سنة)"
        ],
        [
          "انتهاء صلاحية رمز QR",
          "أبدًا (صلاحية ثابتة دائمة للرموز الثابتة)",
          "يتعطل إذا توقف الدفع الشهري"
        ],
        [
          "قيود المسح",
          "مسح مدى الحياة غير محدود (دون حد للنطاق الترددي)",
          "محدود بـ 50 - 500 مسح شهريًا في المستويات الدنيا"
        ],
        [
          "تصدير SVG المتجه و EPS",
          "مشمول مجانًا (مسارات متجهة بلا فقد)",
          "مقفل خلف مستويات متميزة من 25 دولارًا فأكثر شهريًا"
        ],
        [
          "PNG عالي الدقة 4K بدقة 300 DPI",
          "مشمول مجانًا (2048x2048 بكسل فأكثر)",
          "مقفل خلف خطط الاشتراك المدفوعة"
        ],
        [
          "تضمين شعار مخصص",
          "مشمول مجانًا مع تصحيح الأخطاء من المستوى H",
          "عليه علامة مائية أو مقيّد في الخطط المجانية"
        ],
        [
          "متطلبات الحساب / التسجيل",
          "لا شيء (لا حساب، لا بريد إلكتروني، لا بطاقة ائتمان)",
          "تسجيل إلزامي وإدخال بطاقة ائتمان"
        ],
        [
          "سيادة البيانات والخصوصية",
          "100% على جانب العميل (لا تتبع ولا تخزين)",
          "جميع عمليات المسح تُوجَّه وتُسجَّل على الخادم"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "اختر أي أداة QR متخصصة",
        "description": "كل المولدات مفتوحة: الروابط، وبطاقة vCard، وWiFi، وPDF، وWhatsApp، ووسائل التواصل، والبريد الإلكتروني، والرسائل النصية، والهاتف، والموقع، والفعاليات، والعملات الرقمية، والنصوص، والمدفوعات، ونماذج Google. لا شيء مغلق خلف خطة."
      },
      {
        "number": 2,
        "title": "خصّص الهوية البصرية وأضف شعارك",
        "description": "طبّق ألوانك، وأعد تشكيل نمط النقاط وزوايا العين، وضع شعارك في المنتصف مع تصحيح الأخطاء من المستوى H."
      },
      {
        "number": 3,
        "title": "نزّل ملفات SVG المتجهة الجاهزة للإنتاج",
        "description": "اضغط تنزيل. ينزل ملف SVG أو PNG عالي الدقة فورًا، دون جدار دفع ودون شاشة حساب تعترض الطريق."
      }
    ],
    "features": [
      {
        "title": "صفر رسوم اشتراك شهرية إلى الأبد",
        "description": "أنشئ أي عدد تريده من الرموز بجودة تجارية. لا تكلفة متكررة، ولا بطاقة، ولا شروط مخفية."
      },
      {
        "title": "مسح دائم مدى الحياة دون حدود",
        "description": "الرمز المطبوع يبقى يعمل لسنوات. لا شيء يبطئه أو ينهي صلاحيته."
      },
      {
        "title": "تنزيلات SVG متجهة بلا فقد وبلا حدود",
        "description": "ملف المتجهات الجاهز للطباعة الذي تطلبه المطابع واسعة النطاق متاح هنا مجانًا، دون ترقية متميزة."
      },
      {
        "title": "حقوق استخدام تجاري كاملة مشمولة",
        "description": "ضع الرموز على العبوات والكتب وعروض التجزئة، بل وحتى في إعلان تلفزيوني. لا توجد إتاوات واجبة الدفع."
      }
    ],
    "sizingMatrix": {
      "title": "تفصيل الوصول إلى الميزات المؤسسية المجانية",
      "description": "كل ميزة متقدمة متاحة لـ 100% من المستخدمين دون أي حواجز دفع.",
      "headers": [
        "مجال القدرة",
        "حالة الشمول",
        "المواصفات التقنية",
        "النطاق التجاري"
      ],
      "rows": [
        [
          "جميع مولدات بيانات QR المتخصصة",
          "100% مجانية وغير محدودة",
          "ISO/IEC 18004، RFC 2426، RFC 5545، BIP-0021",
          "استخدام شخصي وتجاري غير محدود"
        ],
        [
          "تصدير SVG المتجه و EPS",
          "100% مجاني وغير محدود",
          "مسارات متجهة رياضية بلا فقد",
          "الطباعة التجارية المسبقة والتغليف وCNC"
        ],
        [
          "مخرجات PNG بدقة 4K فائقة الوضوح",
          "100% مجانية وغير محدودة",
          "2048 x 2048 بكسل بدقة 300+ DPI",
          "التسويق الرقمي وشاشات 4K والويب"
        ],
        [
          "تضمين الشعار بالمستوى H",
          "100% مجاني وغير محدود",
          "تكرار جبري بنسبة 30% من Reed-Solomon",
          "العبوات والبطاقات الفاخرة ذات العلامة التجارية"
        ],
        [
          "لوحات ألوان مخصصة",
          "100% مجانية وغير محدودة",
          "تحكم مستقل بألوان Hex",
          "مطابقة كاملة لدليل الهوية"
        ]
      ]
    },
    "useCases": [
      {
        "title": "أصحاب الأعمال الصغيرة ورواد الأعمال",
        "description": "اطبع اللافتات والعبوات ومواد التسويق دون إضافة بند برمجيات شهري آخر إلى ميزانيتك."
      },
      {
        "title": "وكالات التصميم الجرافيكي والمستقلون",
        "description": "سلّم عملاءك رمزًا متجهًا جاهزًا للإنتاج، ولن تتلقى أبدًا مكالمة عن انتهاء صلاحيته بسبب اشتراك شخص آخر."
      },
      {
        "title": "أقسام الطباعة المسبقة والتغليف في المؤسسات",
        "description": "ضع رموزًا متجهة موثوقة مباشرة في مخططات التغليف، بسلامة بيانات تستمر طوال فترة الطباعة."
      },
      {
        "title": "المنظمات غير الربحية والجمعيات الخيرية",
        "description": "اقبل تبرعات بالعملات الرقمية وزد تسجيلات الفعاليات بميزانية تقنية تساوي صفرًا بالضبط."
      },
      {
        "title": "منظمو الفعاليات ومخططو حفلات الزفاف",
        "description": "أرسل آلاف الدعوات الرقمية ورموز تأكيد الحضور للتقويم. لن يقطعها أي حد للمسح في منتصف الفعالية."
      }
    ],
    "troubleshooting": {
      "title": "كيف تحمي عملك من احتيال اشتراكات رموز QR",
      "points": [
        "تحقق مما يشفّره الرمز فعلًا. امسحه قبل الطباعة. إذا فكّ تشفيره إلى نطاق تابع لطرف ثالث مثل `qr-service.com/x9f2` بدلًا من رابطك الخاص، فهو إعادة توجيه يمكن إيقافها — ابتعد عنه.",
        "احذر من طلب بطاقة لـ \"تجربة مجانية\". عندما يطلب مولد بيانات الدفع مقدمًا، توقع أن يتوقف الرمز عن العمل في اليوم الذي تنتهي فيه التجربة.",
        "تأكد من أن تنزيل SVG مجاني. تحتاج المطابع المحترفة إلى SVG أو EPS متجه. منصة تتقاضى 20 دولارًا فأكثر مقابل هذا التصدير ليست الصفقة التي تبدو عليها.",
        "انتبه إلى سقف خفي للمسح. بعض المستويات المجانية تتوقف بصمت عند المسح الخمسين أو المئة. الرموز الثابتة هنا لا تملك هذا الحد.",
        "فضّل التوليد على جانب العميل. عندما يُبنى الرمز في متصفحك، لا توجد شركة تملك مفتاحًا يمكنه إيقافه لاحقًا."
      ]
    },
    "faqs": [
      {
        "q": "هل QR Generator Online مجاني فعلًا بنسبة 100% دون رسوم خفية؟",
        "a": "تمامًا. لا مستويات، ولا حدود للمسح، ولا بطاقة. كل مولد وكل تنزيل متجه مجاني للاستخدام الشخصي والتجاري على حد سواء."
      },
      {
        "q": "كيف يحافظ QR Generator Online على خدمته دون فرض رسوم اشتراك؟",
        "a": "يحدث العمل الثقيل في متصفحك، لا في بنيتنا التحتية، لذلك تبقى تكاليف التشغيل منخفضة. إبقاء التوليد الأساسي مجانيًا ومفتوحًا هو جوهر هذا المشروع، وليس مرحلة نخطط للخروج منها."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR التي تُنشأ على QR Generator Online؟",
        "a": "لا. البيانات موجودة داخل المصفوفة المرئية نفسها، لذلك يبقى الرمز نشطًا ما دامت وجهته نشطة — لا يوجد خادم في المنتصف يمكن أن ينتهي وقته."
      },
      {
        "q": "هل توجد حدود لعدد مرات مسح رموز QR الخاصة بي؟",
        "a": "لا على الإطلاق. قد يُمسح الرمز بضع مرات أو بضعة ملايين؛ لا يوجد حد للنطاق الترددي وراءه."
      },
      {
        "q": "هل يمكنني استخدام رموز QR هذه على منتجات تجارية أبيعها؟",
        "a": "بع بحرية. تملك الحقوق التجارية الكاملة لكل رمز تنشئه — العبوات والبضائع والكتب والعروض الترويجية، في جميع أنحاء العالم."
      },
      {
        "q": "هل تضعون علامة مائية على رموز QR في الخطة المجانية؟",
        "a": "أبدًا. لا علامة مائية، ولا شارة ترويجية، ولا علامة تجارية لطرف ثالث. التصميم كله لك."
      },
      {
        "q": "هل يشمل التصدير المتجه SVG الخطة المجانية؟",
        "a": "نعم. تصدير SVG المتجه وتصدير PNG بدقة 2048x2048 بكسل مجانيان للجميع، دون حجب أي شيء."
      },
      {
        "q": "هل أحتاج إلى إنشاء حساب أو تقديم عنوان بريد إلكتروني؟",
        "a": "لا على الإطلاق. أنشئ الرموز وصممها ونزّلها بالقدر الذي تريد دون تسجيل أو تقديم أي تفاصيل."
      }
    ],
    "bestPractices": "بالنسبة لأي شيء مطبوع، اختر رمزًا ثابتًا دائمًا، وصدّره كـ SVG متجه، وامسح نسخة ورقية فعلية قبل أن تلتزم بالإنتاج بكميات كبيرة."
  },
  '/faqs-qr-code-generator': {
    "sections": [
      {
        "title": "الأسئلة الشائعة ونصائح تقنية",
        "paragraphs": [
          "هل تنتهي صلاحية رموز QR الثابتة؟ لا. رموز QR الثابتة التي تُنشأ على QR Generator Online تحتوي على البيانات الخام، ولن تنتهي صلاحيتها ما دام رابط الوجهة الخاص بك نشطًا.",
          "ما أفضل صيغة للطباعة؟ SVG المتجه هو الصيغة الموصى بها للطباعة التجارية، لأنه يتوسع إلى أي حجم فعلي دون تفتت البكسلات أو فقدان الجودة."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الأسئلة الشائعة التقنية والعملية النهائية حول الباركود ثنائي الأبعاد البصري",
      "paragraphs": [
        "هذه قاعدة المعرفة الخاصة بـ QR Generator Online — المكان الذي تجد فيه إجابة لأي سؤال تقني أو تصميمي أو متعلق بالطباعة المسبقة أو الأمان حول الباركودات المصفوفية ثنائية الأبعاد المعرّفة في ISO/IEC 18004.",
        "تغطي الإجابات هنا المجال كله: الرياضيات وراء تصحيح الأخطاء Reed-Solomon، وكيف تحول كاميرا الهاتف الصورة إلى بيانات، ونسبة المسافة إلى الحجم التي تطبع بها ($S = D / 10$)، وأين يلامس GDPR وCCPA سير عمل QR. يحتاج المطورون وقادة التسويق وفنيو الطباعة المسبقة وأصحاب الأعمال إلى أجزاء مختلفة منها.",
        "رُتبت الفئات أدناه بحيث تنتقل مباشرة إلى إنشاء الرمز أو تنسيقه أو طباعته أو نشره."
      ]
    },
    "comparisonTable": {
      "title": "ملخص تقني لمعايير رموز QR",
      "headers": [
        "المعامل التقني",
        "المواصفة القياسية",
        "توصية هندسية"
      ],
      "rows": [
        [
          "المعيار المعتمد",
          "ISO/IEC 18004:2015 (تكنولوجيا المعلومات)",
          "الالتزام الصارم لفك التشفير البصري العالمي"
        ],
        [
          "مستويات تصحيح الأخطاء",
          "المستوى L (7%)، المستوى M (15%)، المستوى Q (25%)، المستوى H (30%)",
          "المستوى H لتضمين الشعارات؛ المستوى M للروابط النظيفة"
        ],
        [
          "هامش المنطقة الهادئة",
          "4 عروض وحدات كحد أدنى على الجوانب الأربعة",
          "إلزامي لكشف حواف الماسح الضوئي"
        ],
        [
          "صيغة الحجم البصري",
          "S = D / 10 (العرض = مسافة المسح / 10)",
          "25 مم × 25 مم كحد أدنى لوسائط الطباعة اليدوية"
        ],
        [
          "نسبة تباين WCAG",
          "تباين إضاءة 4.5:1 كحد أدنى (7:1 في الخارج)",
          "وحدات أمامية داكنة على خلفية فاتحة"
        ],
        [
          "أقصى سعة للبيانات",
          "4,296 أبجدي رقمي / 7,089 رقمي / 2,953 بايت",
          "أبقه تحت 150 حرفًا لفك تشفير سريع بالكاميرا"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "اختر مخطط حمولة البيانات",
        "description": "ابدأ مما ستشفّره: رابط، أو vCard 3.0، أو WiFi، أو WhatsApp، أو SMS، أو بريد إلكتروني، أو هاتف، أو موقع، أو فعالية، أو عملة رقمية، أو نص عادي، أو نموذج Google."
      },
      {
        "number": 2,
        "title": "اضبط التصميم وتصحيح الأخطاء",
        "description": "حدد ألوان العلامة التجارية بحيث تبقى فوق تباين 4.5:1، واختر نمط النقاط، وإذا كان سيوضع شعار في المنتصف، فأنشئ الرمز بالمستوى H."
      },
      {
        "number": 3,
        "title": "صدّر SVG المتجه واختبر نسخًا ورقية فعلية",
        "description": "نزّل SVG المتجه أو PNG بدقة 4K، ثم امسحه بعدة هواتف مختلفة وتحت إضاءات مختلفة قبل أن يذهب إلى أي مكان."
      }
    ],
    "features": [
      {
        "title": "تغطية تقنية شاملة",
        "description": "رياضيات تصحيح الأخطاء، وبروتوكولات URI، وكيفية عمل التحويل الثنائي للكاميرا فعليًا — مشروحة دون تجاوز."
      },
      {
        "title": "إرشادات عملية للطباعة المسبقة والطباعة",
        "description": "صيغ حجم حقيقية، وأي وسط يُختار، وكيفية تعويض زيادة نقطة الحبر أثناء الطباعة."
      },
      {
        "title": "استراتيجيات الدفاع الأمني ومكافحة quishing",
        "description": "ماذا تفعل حتى لا يحوّل رمز مُعبث به أو مزوّر حملتك إلى ناقل للتصيد الاحتيالي."
      },
      {
        "title": "قاعدة معرفية مجانية 100% ومفتوحة الوصول",
        "description": "وثائق مفتوحة تبقى متاحة دائمًا: دون تسجيل دخول ودون حاجز دفع، سواء كنت مطورًا أو مسوّقًا."
      }
    ],
    "sizingMatrix": {
      "title": "دليل الدقة وأحجام طباعة رموز QR",
      "description": "مرجع سريع لتحديد الأبعاد المادية للطباعة بناءً على مسافة مشاهدة المستخدم.",
      "headers": [
        "الموضع / التطبيق",
        "مسافة المسح المتوقعة",
        "أدنى عرض (S)",
        "تصحيح الأخطاء الموصى به"
      ],
      "rows": [
        [
          "بطاقات العمل وبطاقات الأسماء",
          "15 سم - 30 سم (6\" - 12\")",
          "25 مم × 25 مم (1.0\" × 1.0\")",
          "المستوى Q (25%) أو المستوى H (30%)"
        ],
        [
          "بطاقات الطاولات والمحارم",
          "30 سم - 50 سم (12\" - 20\")",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "المستوى M (15%) أو المستوى H (30%)"
        ],
        [
          "عبوات المنتجات والملصقات",
          "20 سم - 40 سم (8\" - 16\")",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "المستوى H (30%) مع شعار في المنتصف"
        ],
        [
          "المنشورات والملصقات والمجلات",
          "50 سم - 150 سم (20\" - 60\")",
          "60 مم - 150 مم (2.4\" - 6.0\")",
          "المستوى M (15%)"
        ],
        [
          "رسومات أسطول المركبات",
          "3.0 م - 6.0 م (10 قدم - 20 قدم)",
          "300 مم × 300 مم (12\" × 12\")",
          "المستوى H (30%) على فينيل مصبوب"
        ],
        [
          "لوحات الطرق السريعة",
          "15.0 م - 30.0 م (50 قدم - 100 قدم)",
          "1500 مم - 3000 مم (5 أقدام - 10 أقدام)",
          "المستوى L (7%) أو المستوى M (15%)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "الامتثال لتكنولوجيا المعلومات والأمن المؤسسي",
        "description": "تحقق من أن تطبيق QR المؤسسي يتوافق مع قواعد GDPR وCCPA وسيادة البيانات وفق ISO قبل إطلاقه."
      },
      {
        "title": "تصميم العبوات والطباعة المسبقة بالفلكسو",
        "description": "أكّد أن مخطط الباركود يستوفي حدود التباين والمنطقة الهادئة وفق ISO/IEC 18004 قبل تصنيع الألواح."
      },
      {
        "title": "سلاسل الضيافة والمطاعم",
        "description": "انشر قوائم طعام وبطاقات WiFi للضيوف دون تلامس، لا تحتاج إلى موظفين لشرحها."
      },
      {
        "title": "منظمو الفعاليات ومنسقو المؤتمرات",
        "description": "سرّع تسجيل الوصول، ووزّع تحميلات شرائح المتحدثين، وأضف الجلسات إلى تقويمات الحضور."
      },
      {
        "title": "مكاتب العقارات وفرق التسويق",
        "description": "حوّل لافتة الموقع إلى مصدر عملاء محتملين يعمل على مدار الساعة، يفتح جولة افتراضية ثلاثية الأبعاد."
      }
    ],
    "troubleshooting": {
      "title": "أكثر 5 أعطال شيوعًا في رموز QR وكيفية إصلاحها",
      "points": [
        "تباين ضعيف. الوحدات الباهتة على خلفية باهتة لا تمنح الكاميرا شيئًا تتثبت عليه. حافظ على 4.5:1 أو أعلى.",
        "منطقة هادئة مقطوعة. قص الهامش قريبًا جدًا وقد لا يستطيع الماسح معرفة أين يبدأ الرمز. احتفظ بالإطار الكامل من 4 وحدات.",
        "لقطة شاشة بدقة 72 DPI. الرسومات الويب منخفضة الدقة تبهت على حواف الوحدات عند الطباعة. قدّم SVG متجهًا أو صورة نقطية بدقة 300+ DPI بدلًا منها.",
        "بيانات زائدة. الرابط الطويل يملأ المصفوفة بنقاط صغيرة تتلطخ عند الطباعة بحجم صغير. قصّر الرابط قبل إنشاء الرمز.",
        "تغليف لامع. الطبقة عالية اللمعان تعكس الضوء إلى العدسة. اطلب تشطيبًا مطفأً أو ساتانيًا."
      ]
    },
    "faqs": [
      {
        "q": "ما الفرق بين رمز QR الثابت ورمز QR الديناميكي؟",
        "a": "الرمز الثابت يحمل البيانات الفعلية — الرابط أو بطاقة vCard أو سلسلة WiFi أو أي شيء آخر — داخل المصفوفة. لا شيء يمكن أن ينتهي، ولا يعتمد على خادم. الرمز الديناميكي يحمل إعادة توجيه تشير إلى خادم شخص آخر، ما يتيح تعديل الوجهة لاحقًا لكنه يربطك باشتراك للحفاظ على إعادة التوجيه نشطة."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR التي تُنشأ على QR Generator Online؟",
        "a": "تبقى صالحة مدى الحياة. مسح غير محدود، لا رسوم متكررة، ولا مؤقت يتناقص — الرمز مكتفٍ بذاته."
      },
      {
        "q": "ما أصغر حجم فعلي يمكن طباعة رمز QR به؟",
        "a": "بالنسبة لرابط قصير يُقرأ من مسافة 15 - 20 سم، فإن 20 مم × 20 مم (0.8\" × 0.8\") هو الحد الأدنى. على العبوات وبطاقات العمل، اعتبر 25 مم × 25 مم (1.0\" × 1.0\") الحد الأدنى الآمن في الصناعة."
      },
      {
        "q": "كيف يحمي تصحيح الأخطاء من المستوى H رمز QR يحتوي على شعار؟",
        "a": "يكرر المستوى H نحو 30% من الحمولة عبر تكرار Reed-Solomon. هذه النسخة الاحتياطية هي ما يتيح وضع شعار فوق الوحدات الوسطى — يعيد الماسح بناء البيانات المغطاة من البتات الزائدة في مكان آخر من المصفوفة."
      },
      {
        "q": "هل يمكنني تخصيص ألوان رمز QR لتتطابق مع هوية علامتي التجارية؟",
        "a": "يمكنك تغيير ألوان الوحدات والخلفية وإطارات الزوايا ونقاط الزوايا بشكل مستقل. قاعدة واحدة تحكم كل ذلك: يجب أن يتجاوز التباين بين الداكن والفاتح 4.5:1، وإلا سيبدأ الماسحون بالمعاناة."
      },
      {
        "q": "لماذا يُوصى بصيغة SVG بدلًا من PNG للطباعة التجارية؟",
        "a": "يصف SVG الرمز كهندسة لا كبكسلات. كبّره من بطاقة عمل إلى لوحة إعلانية كبيرة وتبقى الحواف حادة، لأنه لا توجد شبكة بكسلات تنفد."
      },
      {
        "q": "هل رموز QR آمنة من البرمجيات الخبيثة والتصيد الاحتيالي (\"quishing\")؟",
        "a": "الرمز نفسه يحمل نصًا أو رابطًا فقط — لا يمكنه أن يحمل برمجية خبيثة. الخطر هو رمز مزوّر يشير إلى مكان لا ينبغي أن يشير إليه. احمِ نفسك بإظهار شعارك الموثّق في المنتصف وطباعة نطاق الوجهة الحقيقي بنص واضح بجانب الرمز."
      },
      {
        "q": "هل تُخزَّن بياناتي الشخصية أو تُتبَّع على خوادم QR Generator Online؟",
        "a": "لا. كل شيء يعمل على جانب العميل، في ذاكرة المتصفح. روابطك وكلمات مرورك وبطاقات جهات الاتصال والشعارات التي تحمّلها لا تُرسل إلى أي خادم ولا تُحفظ في أي مكان."
      }
    ],
    "bestPractices": "حافظ على التباين فوق 4.5:1، واحمِ المنطقة الهادئة المكونة من 4 وحدات، وصدّر SVG المتجه للطباعة. ثم امسح نسخة ورقية فعلية قبل التشغيل الكبير — تلك هي الفحص الأخير الذي يفرّق بين إطلاق ناجح وإعادة طباعة."
  },
  '/qr-code-with-logo': {
    "sections": [
      {
        "title": "لماذا تحصل رموز QR ذات العلامة التجارية على ما يصل إلى 30% أكثر من عمليات المسح",
        "paragraphs": [
          "قد تبدو رموز QR العامة بلا علامة تجارية مريبة أو غير جذابة. إن تضمين شعار شركتك الرسمي يمنح المستخدمين ثقة في أصالة الرابط الوجهة وأمانه.",
          "يستخدم مولّدنا تصحيح الأخطاء من المستوى H (30% من التكرار) لضمان موثوقية مسح لا تشوبها شائبة مع إظهار علامتك التجارية."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الآلية التقنية لتضمين الشعارات مع تصحيح الأخطاء Reed-Solomon",
      "paragraphs": [
        "يُوضع الشعار في منتصف رمز QR لسبب واحد: تصحيح الأخطاء. يقسم معيار ISO/IEC 18004 كل رمز إلى كلمات رمزية للبيانات وكلمات رمزية لتصحيح الأخطاء، ويحدد أربعة مستويات للتصحيح: المستوى L يستعيد 7% من الرمز التالف، والمستوى M يستعيد 15%، والمستوى Q يستعيد 25%، والمستوى H يستعيد 30%. كلما ارتفع المستوى، زاد الجزء الذي يمكن أن يختفي من الصورة مع استمرار إمكانية فك التشفير.",
        "عندما تضع شعارًا في المنتصف، فأنت تغطي فعليًا بعض الوحدات. إذا أنشأت الرمز بالمستوى H، يمكنك تغطية ما يصل إلى 30% من سطحه قبل أن تصبح البيانات غير قابلة للاسترداد. تعيد أجهزة فك التشفير في الكاميرا على iOS (AVFoundation) وAndroid (ML Kit) بناء البايتات المخفية من التكافؤ المحيط ببساطة: الشعار لا يعيق المسح فعليًا، بل يخفي بكسلات تملك الرياضيات نسخة احتياطية منها.",
        "تفصيلة أخرى تعمل بصمت: يترك QR Generator Online حيّزًا أبيض رقيقًا حول شعارك حتى لا تتداخل حافته مع الوحدات الداكنة المجاورة. وهذا الحيّز هو سبب قراءة رمز الشعار بوضوح حتى تحت إضاءة مطعم خافتة أو واجهة متجر ساطعة."
      ]
    },
    "comparisonTable": {
      "title": "رمز QR بشعار ذي علامة تجارية مقابل رمز QR عام بالأبيض والأسود",
      "headers": [
        "معيار التقييم",
        "رمز QR بعلامة تجارية وشعار",
        "QR عام بالأبيض والأسود"
      ],
      "rows": [
        [
          "معدل تفاعل المسح",
          "حجم مسح أعلى يصل إلى 35% (ثقة بعلامة تجارية موثّقة)",
          "معدل مسح أساسي قياسي (غالبًا ما يُنظر إليه بريبة)"
        ],
        [
          "تذكر العلامة التجارية والثقة",
          "يوصل هوية الناشر فورًا",
          "مظهر مجهول، وقلق أعلى من التصيّد عبر QR (quishing)"
        ],
        [
          "مستوى تصحيح الأخطاء",
          "المستوى H (30% تكرار رياضي)",
          "عادةً المستوى L (7%) أو المستوى M (15%)"
        ],
        [
          "أثر التسويق المؤسسي",
          "يعزز إرشادات العلامة التجارية على المواد المادية",
          "منفصل عن خط العلامة التجارية وهويتها"
        ],
        [
          "تحمّل قابلية المسح",
          "يحافظ على المسح الفوري مع قناع حدّ للشعار",
          "عرضة للخدوش السطحية إذا استُخدم المستوى L"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "أدخل وجهة QR واختر نوع المحتوى",
        "description": "اكتب وجهتك في المولّد أعلاه — رابط موقع، أو ملف vCard، أو شبكة WiFi، أو نص عادي."
      },
      {
        "number": 2,
        "title": "ارفع شعارًا عالي الدقة واضبط القناع",
        "description": "افتح «خيارات QR المخصصة والشعار»، وارفع ملف PNG شفافًا أو SVG أو JPEG، وأعد تلوين الوحدات لتتناسب مع لوحة ألوان علامتك التجارية."
      },
      {
        "number": 3,
        "title": "صدّر SVG المتجه للطباعة أو PNG عالي الدقة",
        "description": "للتغليف والطباعة والإعلانات المتجرية الخارجية، نزّل SVG المتجه القابل للتحجيم. وللشاشات، استخدم PNG عالي الدقة."
      }
    ],
    "features": [
      {
        "title": "تصحيح أخطاء من المستوى H (30% تكرار)",
        "description": "ضع شعارًا أو حرفًا مشفرًا أو أيقونة في المنتصف، وسيغطيه هامش الاسترداد البالغ 30% — ويظل الرمز يُقرأ من المحاولة الأولى."
      },
      {
        "title": "إخراج SVG و EPS متجه بدون فقد للطباعة",
        "description": "كبّر الرمز بعلامتك التجارية إلى حجم لوحة إعلانية، وتظل الخطوط المتجهة حادة. لا توجد شبكة بكسلات تنفد."
      },
      {
        "title": "قناع ذكي لحيّز الوحدات",
        "description": "يُرسم فاصل نظيف بين حافة الشعار والوحدات البيانية المحيطة به، فلا يندمجان بصريًا أبدًا."
      },
      {
        "title": "خصوصية تشفيرية 100% على جانب العميل",
        "description": "تتم معالجة الصورة في متصفحك. لا تُرسل شعاراتك المرفوعة ولا روابطك إلى أي جهة."
      }
    ],
    "sizingMatrix": {
      "title": "مواصفات حجم الطباعة ونسبة الشعار",
      "description": "اتبع نسب مساحة صارمة بين الشعار والمصفوفة للحفاظ على سرعة المسح البصري.",
      "headers": [
        "تطبيق الطباعة",
        "الأبعاد الإجمالية لـ QR",
        "أقصى حجم للشعار",
        "الركيزة الموصى بها"
      ],
      "rows": [
        [
          "بطاقات الأعمال وشارات الهوية",
          "28 مم × 28 مم (1.1\" × 1.1\")",
          "8 مم × 8 مم (0.3\" × 0.3\")",
          "ورق مقوى مطفأ ثقيل (أكثر من 350 غرام/م²)"
        ],
        [
          "عبوات المنتجات والبطاقات المعلّقة",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "10 مم × 10 مم (0.4\" × 0.4\")",
          "كرتون مطفأ مطلي / ورق كرافت"
        ],
        [
          "الأوتاد المكتبية وعروض المنضدات",
          "45 مم × 45 مم (1.8\" × 1.8\")",
          "13 مم × 13 مم (0.5\" × 0.5\")",
          "حامل أكريليك للطاولة / بطاقة مُغلّفة"
        ],
        [
          "ملصقات التجزئة وملصقات النوافذ",
          "100 مم × 100 مم (4.0\" × 4.0\")",
          "28 مم × 28 مم (1.1\" × 1.1\")",
          "فينيل مطفأ مقاوم للطقس"
        ],
        [
          "اللافتات والإعلانات الخارجية",
          "من 500 مم إلى 2000 مم",
          "من 140 مم إلى 560 مم",
          "فينيل ثقيل غير عاكس"
        ]
      ]
    },
    "useCases": [
      {
        "title": "السلع الاستهلاكية المعبأة (CPG) والتجزئة الفاخرة",
        "description": "علامة تجارية رسمية على العبوة تطمئن المتسوق إلى أصالة المنتج، وتمنحه سببًا للتسجيل في برنامج الولاء."
      },
      {
        "title": "الهوية المؤسسية وبطاقات المديرين التنفيذيين",
        "description": "ضع شعار الشركة — أو صورة المدير التنفيذي — في منتصف رمز vCard، ولن تبدو البطاقة عامة بعد الآن."
      },
      {
        "title": "قوائم المطاعم والأواني المائدية ذات العلامة التجارية",
        "description": "شعار المقهى داخل رمز قائمة الطاولة يبدو جزءًا من المكان، لا ملصقًا أُلصق لاحقًا."
      },
      {
        "title": "لافتات الفعاليات ورعاية المؤتمرات",
        "description": "شعار الراعي داخل رمز الفعالية، على الشارات ولافتات المسرح، يُبقي هذا الراعي ظاهرًا ويمنحه نسبة واضحة."
      },
      {
        "title": "الرسائل المباشرة والبطاقات البريدية الترويجية",
        "description": "رمز علامة تجارية جميل يرفع استجابة البريد المباشر، لأن البطاقة التي يتعرف عليها الناس هي البطاقة التي يمسحونها."
      }
    ],
    "troubleshooting": {
      "title": "5 قواعد أساسية لرموز QR ذات الشعارات المضمّنة",
      "points": [
        "أبقِ الشعار دون 30% من المساحة. بعد تغطية تتجاوز 25-30% ستتجاوز قدرة Reed-Solomon على الاسترداد، ويتوقف الرمز عن فك التشفير.",
        "لا تلمس أعين التحديد الثلاث. المربعات المتحدة المركز في الزوايا العليا اليسرى والعليا اليمنى والسفلى اليسرى يجب أن تبقى خالية تمامًا — فالماسح يستخدمها لتوجيه الرمز.",
        "امنح الشعار حدًا. الخلفية الشفافة أو الحافة البيضاء الرقيقة تمنع الشعار من التسرب إلى الوحدات الداكنة المحيطة به.",
        "أنشئ الرمز بالمستوى H. الرمز ذو الشعار على المستوى L أو M يفتقر إلى التكرار اللازم لتحمل التغطية — والمستوى H هو ما يمنحك الهامش.",
        "اختبر نسخة مطبوعة. جرّبها على هاتف Android رخيص وآيفون حديث، في الإضاءة الخافتة والساطعة، قبل المضي في التشغيل."
      ]
    },
    "faqs": [
      {
        "q": "لماذا لا يُفسد إضافة شعار قابلية قراءة رمز QR؟",
        "a": "الأمر يعود إلى تصحيح الأخطاء Reed-Solomon. عند المستوى H، يُكرَّر حوالي 30% من الحمولة عبر الرمز. يغطي الشعار المركزي بعض الوحدات، ويعيد فك التشفير بناءها ببساطة من النسخ الزائدة الموجودة في مكان آخر من المصفوفة."
      },
      {
        "q": "ما صيغ الصور التي يمكنني رفعها للشعار المركزي؟",
        "a": "تعمل PNG وSVG وJPEG. يمنح PNG الشفاف أو SVG المتجه أنظف حافة وأكثر النتائج احترافية — أما JPEG المسطح على مربع أبيض فيبدو ملصوقًا بالمقارنة."
      },
      {
        "q": "ما الحجم المناسب للشعار بالنسبة لرمز QR؟",
        "a": "بين 15% و25% من العرض والارتفاع هو النطاق الأمثل. لا داعي للتقدير بالعين — فالمولّد يُقيّس الشعار إلى النسبة الصحيحة تلقائيًا."
      },
      {
        "q": "هل رموز QR ذات الشعارات المخصصة مدفوعة أو تتطلب اشتراكات؟",
        "a": "إنها مجانية، مثل كل شيء هنا — مسح غير محدود، وصلاحية دائمة، ولا جدار دفع بعد الطباعة."
      },
      {
        "q": "هل يمكنني إضافة أيقونات وسائل التواصل الاجتماعي (Instagram، Facebook، WhatsApp، WiFi) بدلًا من شعار الشركة؟",
        "a": "نعم. توجد مكتبة مدمجة لأيقونات المنصات الشائعة، وإذا لم تجد الأيقونة التي تريدها، فارفع رسمتك الخاصة."
      },
      {
        "q": "هل يُمسح رمز QR بشعار بموثوقية على كاميرات الهواتف القديمة؟",
        "a": "نعم، بشرط تحقق أمرين: تصحيح المستوى H مفعّل، وأن يبقى الشعار دون 30% من السطح. إذا تحقق الأمران، فحتى الكاميرا القديمة تفك تشفيره فورًا."
      },
      {
        "q": "ما أفضل صيغة تصدير للطباعة التجارية مع شعار؟",
        "a": "SVG متجه. يحافظ على حدّة مصفوفة الوحدات والشعار المضمّن عند أي حجم طباعة، وهذا تحديدًا ما تحتاجه مطبعة."
      },
      {
        "q": "هل يُخزَّن الشعار الذي أرفعه على خوادم الويب لديكم؟",
        "a": "لا. يُدمج الشعار ويُعرض الرمز بالكامل داخل متصفحك — لا شيء منه يُرفع أو يُحفظ."
      }
    ],
    "bestPractices": "استخدم PNG شفافًا أو شعارًا متجهًا، وأنشئ الرمز بالمستوى H، وحافظ على تباين قوي بين الوحدات والخلفية. ثم امسح نسخة مطبوعة قبل التشغيل: الشعار الذي يبدو جيدًا على الشاشة قد يكون أكبر قليلًا على الورق."
  },
  '/custom-qr-codes': {
    "sections": [
      {
        "title": "تميّز بتصميم بصري جميل لرموز QR",
        "paragraphs": [
          "اختر بين النقاط المستديرة، والنقاط ذات الحواف، والبكسلات المربعة الهندسية، والأنماط الفنية. خصص المربعات الخارجية للزوايا والنقاط المركزية بشكل مستقل.",
          "أنشئ مواد تسويقية عالية التحويل تبدو عصرية واحترافية وجذابة بصريًا."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الآلية التقنية لتنسيق رموز QR المخصصة وهندسة النمط",
      "paragraphs": [
        "يغيّر التنسيق المخصص شكل رمز QR، لا ما يعنيه. يمكنك استبدال الوحدات المربعة الصارمة بنقاط مستديرة أو معينات أو أشكال عضوية سلسة، وإعادة تشكيل أعين الزوايا — كل ذلك بينما تبقى الشبكة الثنائية الأساسية حيث يحددها معيار ISO/IEC 18004 تمامًا. نمط الداكن والفاتح هو ما يحمل البيانات، وهذا النمط لا يتحرك.",
        "تجد الماسحات الرمز بتحديد أنماط التحديد الثلاثة في زواياه، التي تتبع نسبة صارمة 1:1:3:1:1 لعرض الوحدات. حافظ على هذه النسبة، واجعل كل وحدة متمركزة على إحداثيات شبكتها، وستقرأ محركات iOS وML Kit على Android وZXing الرمز المُنسَّق بنفس سرعة الرمز البسيط. كسّر النسبة، ولن ينقذه أي تنسيق.",
        "هذا هو الخط الذي يسير عليه QR Generator Online بحسابات الإحداثيات المتجهة: كل نقطة مستديرة، وكل عين مخصصة، وكل إطار زاوية يقع في موضعه الدقيق على الشبكة. تحصل على مظهر العلامة التجارية دون أن تدفع ثمنه من موثوقية المسح."
      ]
    },
    "comparisonTable": {
      "title": "رموز QR مصممة بشكل مخصص مقابل الباركود الافتراضي بالأبيض والأسود",
      "headers": [
        "سمة التصميم",
        "رمز QR مصمم بشكل مخصص",
        "باركود افتراضي عام"
      ],
      "rows": [
        [
          "الجاذبية الجمالية",
          "يتناغم مع التغليف الفاخر وهوية العلامة التجارية",
          "صناعي وسريري وبصريًا مُنفّر"
        ],
        [
          "معدل تفاعل المستخدم",
          "معدل مسح أعلى بنسبة 40% بفضل الجاذبية البصرية",
          "معدل مسح أساسي قياسي"
        ],
        [
          "نطاق التخصيص",
          "أنماط النقاط، وأشكال الأعين، والتدرجات، والشعارات المركزية",
          "مربعات صلبة ثابتة، ووحدات سوداء فقط"
        ],
        [
          "التعرف على العلامة التجارية",
          "يعزز ألوان العلامة التجارية والهوية المؤسسية",
          "مظهر عام لا يتميز عن المنافسين"
        ],
        [
          "مرونة الطباعة",
          "قابل للتخصيص للنقش على الخشب والتذهيب الرقائقي والأكريليك",
          "طباعة ثنائية الأبعاد قياسية فقط"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "اختر نوع بيانات QR وأدخل المعلمات",
        "description": "اختر نوع بياناتك — رابط أو vCard أو WiFi أو نص — وأدخل الوجهة."
      },
      {
        "number": 2,
        "title": "خصص أنماط النقاط وأعين الزوايا ولوحات الألوان",
        "description": "جرّب النقاط المستديرة أو الكلاسيكية أو المنقطة أو الوحدات الناعمة، ثم اضبط شكل مربع الزاوية ونقطتها لتتناسب مع نظام تصميمك."
      },
      {
        "number": 3,
        "title": "صدّر SVG المتجه الجاهز للطباعة أو PNG عالي الدقة",
        "description": "نزّل التصميم النهائي كـ SVG متجه بدون فقد للطباعة بالأوفست، أو PNG بدقة 4K للاستخدام الرقمي."
      }
    ],
    "features": [
      {
        "title": "عدة أنماط هندسية للوحدات والنقاط",
        "description": "مستدير، كلاسيكي، معيّن، نقاط، ناعم — كل نمط مضبوط ليبقى ضمن هامش المسح."
      },
      {
        "title": "تخصيص مستقل لأعين الزوايا",
        "description": "للإطارات الخارجية والنقاط الداخلية للعين ألوانها الخاصة وأنصاف أقطار زواياها، منفصلة عن الجسم الرئيسي."
      },
      {
        "title": "تصديرات SVG متجهة للطباعة بدون فقد",
        "description": "التصميم نفسه يُطبع نظيفًا على بطاقة عمل وعلى جدارية مبنى، دون أن يتسلل أي ضبابية بينهما."
      },
      {
        "title": "مجاني 100% مع صلاحية دائمة مدى الحياة",
        "description": "صمّم ما تشاء. لا حد للمسح، ولا علامة مائية، ولا رسوم شهرية مرتبطة."
      }
    ],
    "sizingMatrix": {
      "title": "الحد الأدنى لحجم رموز QR المخصصة وإرشادات المواد",
      "description": "لأن الوحدات المنسّقة تتميز بحواف مستديرة، اتبع معايير الحجم الأدنى الموصى بها.",
      "headers": [
        "وسيط التصميم",
        "الحد الأدنى للحجم الموصى به",
        "نمط النقاط الموصى به",
        "نوع الركيزة"
      ],
      "rows": [
        [
          "بطاقات الأعمال الفاخرة",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "كلاسيكي / مستدير",
          "ورق قطني مطفأ / تذهيب رقائقي"
        ],
        [
          "مستحضرات التجميل وعبوات المنتجات",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "ناعم / مستدير",
          "كرتون مطلي مطفأ"
        ],
        [
          "أوتاد الطاولات وقواعد المطاعم",
          "45 مم × 45 مم (1.8\" × 1.8\")",
          "نقاط / كلاسيكي",
          "نقش على الخشب / حامل أكريليك"
        ],
        [
          "ملصقات الفعاليات ورسومات النوافذ",
          "90 مم × 90 مم (3.6\" × 3.6\")",
          "أي نمط مخصص",
          "فينيل مطفأ مقاوم للطقس"
        ],
        [
          "بطاقات وملصقات الملابس الجاهزة",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "مستدير / ناعم",
          "بطاقة نسيج منسوج / كرتون كرافت ثقيل"
        ]
      ]
    },
    "useCases": [
      {
        "title": "العلامات التجارية الفاخرة وتغليف الأزياء",
        "description": "يجلس رمز منسّق داخل التغليف الراقي بدلًا من أن يصارعه — لا باركود أسود فظ يكسر التصميم."
      },
      {
        "title": "المحافظ الإبداعية وبطاقات العمارة",
        "description": "الرمز الهندسي الدقيق يُقرأ كخيار مدروس، وهو الانطباع الذي يريد المهندس المعماري أو المصمم تركه."
      },
      {
        "title": "لافتات الفنادق البوتيكية والضيافة",
        "description": "انقش رمزًا مخصصًا على الخشب أو النحاس لدليل الضيوف أو قائمة السبا أو بطاقة WiFi تناسب البهو."
      },
      {
        "title": "دعوات الفعاليات وإشعارات حجز المواعيد للمناسبات الفاخرة",
        "description": "الوحدات المستديرة واللوحة المعدنية تحوّل الرمز الوظيفي إلى جزء من قرطاسية الزفاف أو الحفل."
      },
      {
        "title": "ملصقات زجاجات الجعة الحرفية والمشروبات",
        "description": "ادمج الرمز في فن الملصق نفسه، فلا يقطع المسح لمعرفة ملاحظات التذوق أو المنشأ مظهر الزجاجة أبدًا."
      }
    ],
    "troubleshooting": {
      "title": "أخطاء شائعة في تصميم رموز QR المخصصة",
      "points": [
        "تشويه نمط التحديد. أعين الزوايا الثلاث تحافظ على نسبة ثابتة 1:1:3:1:1، والماسح يعتمد عليها لتحديد موقع الرمز. نسّقها، لكن لا تمدها.",
        "تباين منخفض. النقاط الرمادية الداكنة على رمادي فاتح تُربك الكاميرا. حافظ على 4.5:1 على الأقل بين الوحدات وخلفيتها.",
        "تجاهل المنطقة الهادئة. مهما كان الفن المحيط بالرمز، اترك الهامش الفارغ الإلزامي المكوّن من 4 وحدات حول الخارج.",
        "الإفراط في التدوير عند الأحجام الصغيرة. تحت 25 مم، يؤدي التدوير الكثيف للنقاط إلى تلطيخ حواف الوحدات في كاميرا الهاتف الأساسية. خفّف نصف القطر في الرموز الصغيرة.",
        "الاختبار على هاتفك فقط. الهاتف الرائد يقرأ كل شيء تقريبًا. اختبر التصميم أيضًا على هاتف Android متوسط المدى بكاميرا ذات تركيز ثابت."
      ]
    },
    "faqs": [
      {
        "q": "هل تُمسح رموز QR المنسقة بالأسلوب المخصص بسرعة الرموز القياسية بالأبيض والأسود؟",
        "a": "بالسرعة نفسها تقريبًا. يبقى التنسيق ضمن تحملات ISO/IEC 18004؛ وبمجرد احترام قواعد التباين والمنطقة الهادئة، تكون سرعة فك التشفير مطابقة لرمز بسيط."
      },
      {
        "q": "ما عناصر التنسيق التي يمكنني تخصيصها في QR Generator Online؟",
        "a": "خمسة أشياء: نمط نقطة الوحدة (مستدير، كلاسيكي، منقط، ناعم)، والمربعات الخارجية للزوايا، ونقاط أعين الزوايا الداخلية، وألوان المقدمة والخلفية، وشعار مركزي."
      },
      {
        "q": "هل يمكنني تصدير رموز QR المخصصة بصيغة SVG المتجهة؟",
        "a": "يأتي SVG المتجه قياسيًا مع كل تصميم مخصص — وهو ما يحافظ على حدّته للطباعة بالأوفست والنقش بالليزر وقطع الفينيل على حد سواء."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR المخصصة أو تتطلب اشتراكات مدفوعة؟",
        "a": "لا هذا ولا ذاك. كل رمز مخصص هنا مجاني، مع مسح غير محدود وصلاحية لا تنتهي."
      },
      {
        "q": "هل يمكنني استخدام رموز QR المخصصة في تغليف المنتجات التجاري؟",
        "a": "نعم، وكثير من الشركات تفعل ذلك — تغليف التجزئة، وملصقات الأغذية، وبطاقات الملابس، في جميع أنحاء العالم، دون ترخيص."
      },
      {
        "q": "كيف يساعد تصحيح الأخطاء من المستوى H التصاميم المخصصة؟",
        "a": "يمنحك هامش استرداد بنسبة 30%. هذا الهامش هو ما يتيح للتعديلات الفنية على الوحدات والشعار المركزي التعايش دون مخاطرة بفشل المسح."
      },
      {
        "q": "ما الحد الأدنى الموصى به لحجم رموز QR المنسّقة المخصصة؟",
        "a": "استهدف 30 مم × 30 مم (1.2\" × 1.2\") أو أكبر. تحتاج الوحدات المنسّقة إلى مساحة أكبر قليلًا من المربعات البسيطة لتبقى مميزة على كل مستشعر كاميرا."
      },
      {
        "q": "هل بياناتي آمنة عند تصميم رموز QR مخصصة؟",
        "a": "تمامًا. يُعرض كل جزء من التصميم في ذاكرة متصفحك، دون تخزين أو تسجيل شيء على أي خادم."
      }
    ],
    "bestPractices": "حافظ على التباين فوق 4.5:1، واحمِ المنطقة الهادئة المكونة من 4 وحدات، وقبل أي تشغيل إنتاجي امسح النسخة المطبوعة على عدة هواتف. الرموز المنسقة هي المكان الذي يفشل فيه التصميم الذكي أكثر من اللازم دون ضجيج، والاختبار هو المكان الذي تكتشفه فيه."
  },
  '/colored-qr-code-generator': {
    "sections": [
      {
        "title": "ألوان نابضة بالحياة تناسب هويتك البصرية",
        "paragraphs": [
          "ودّعوا الباركود أحادي اللون. اختر أي لون hex لنمط المقدمة وإطارات أعين الزوايا ولوحة الخلفية.",
          "يضمن التحسين المدمج للتباين أن يحافظ رمز QR على تباين عالٍ للتركيز السريع للكاميرا والمسح الفوري."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الآلية التقنية للتباين اللوني ومسح رموز QR الملونة",
      "paragraphs": [
        "لا تقرأ كاميرا الهاتف رمز QR الخاص بك بالألوان. فهي تحوّل الإطار إلى خريطة إضاءة بتدرج الرمادي ثم تحدّد عتبة لها، فتقرر بكسلًا تلو الآخر ما يُعد داكنًا وما يُعد فاتحًا. اللون هنا عرضي تقريبًا؛ الأهم هو الإضاءة.",
        "لذلك فإن القاعدة المهمة هي التباين لا الصبغة. حافظ على نسبة التباين WCAG بين لون المقدمة ولون الخلفية فوق 4.5:1، وارفعها إلى 7:1 لأي شيء سيُعرض في الخارج. تبدو الألوان العميقة منخفضة الإضاءة رائعة على الأبيض أو على أرضية فاتحة — الكحلي #002B49، والأخضر الغابي #1B4D3E، والبنفسجي الملكي #3E1F58، والنبيذي #5C061C — وكلها تتجاوز الحد بسهولة.",
        "يتيح لك QR Generator Online تلوين المقدمة والخلفية وإطارات الزوايا وأعين الزوايا بشكل مستقل. طابق لوحة ألوان علامتك التجارية تمامًا، وما دامت الإضاءة محفوظة، يبقى الرمز قابلًا للمسح بنسبة 100%."
      ]
    },
    "comparisonTable": {
      "title": "رمز QR ملوّن عالي التباين مقابل رمز QR بلوحة باهتة منخفضة التباين",
      "headers": [
        "خاصية التصميم",
        "QR ملون عالي التباين (WCAG > 4.5:1)",
        "لوحة باستيل / فاتحة منخفضة التباين"
      ],
      "rows": [
        [
          "موثوقية المسح البصري",
          "فك تشفير فوري بنسبة 100% في كل الإضاءات",
          "فشل متكرر في تركيز الكاميرا وانتهاء مهلة المسح"
        ],
        [
          "تحويل الكاميرا إلى ثنائي",
          "فصل نظيف بعتبة تدرج الرمادي",
          "قيم إضاءة غامضة تسبب أخطاء فك التشفير"
        ],
        [
          "الأداء في ضوء الشمس الخارجي",
          "يحافظ على الوضوح في الشمس المباشرة والوهج",
          "يختفي تمامًا تحت ضوء الشمس الساطع"
        ],
        [
          "التوافق مع هوية العلامة التجارية",
          "ألوان مؤسسية غنية تطابق هوية العلامة التجارية",
          "مظهر باهت يفتقر إلى التأثير البصري"
        ],
        [
          "التوافق مع الأجهزة",
          "عالمي عبر الهواتف الذكية الاقتصادية والرائدة",
          "يفشل على الكاميرات الاقتصادية ذات النطاق الديناميكي المحدود"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "أدخل المحتوى المستهدف وبيانات الحمولة",
        "description": "الصق رابطك أو تفاصيل vCard أو بيانات WiFi أو النص."
      },
      {
        "number": 2,
        "title": "اختر لوحة ألوان عالية التباين",
        "description": "حدّد مقدمة داكنة وخلفية فاتحة وأي تمييز لأعين الزوايا عبر منتقيات hex."
      },
      {
        "number": 3,
        "title": "صدّر SVG المتجه للطباعة أو PNG عالي الدقة",
        "description": "نزّل SVG المتجه للطباعة بالأوفست، أو PNG بدقة 300 DPI للحملات الرقمية والاجتماعية."
      }
    ],
    "features": [
      {
        "title": "تخصيص مستقل لعدة ألوان",
        "description": "وحدات المقدمة وحيّز الخلفية وإطارات الزوايا ونقاط الزوايا — لكل منها قيمة hex دقيقة خاصة به."
      },
      {
        "title": "امتثال WCAG للتباين العالي",
        "description": "مصمم للحفاظ على تباين الإضاءة الذي تحتاجه الكاميرا لتحديد العتبة بنظافة، مهما كانت الإضاءة."
      },
      {
        "title": "تصدير SVG و EPS متجه بدون فقد",
        "description": "ملفات متجهة دقيقة الألوان تُفتح مباشرة في Illustrator أو InDesign أو Figma وتتحول إلى CMYK بسلاسة."
      },
      {
        "title": "مجاني 100% مع مسح دائم مدى الحياة",
        "description": "لوّن أي عدد من الرموز تريده — لا حد للمسح، ولا علامة مائية، ولا رسوم."
      }
    ],
    "sizingMatrix": {
      "title": "مواصفات الحجم والتباين لرموز QR الملونة",
      "description": "تأكد من أن خيارات الألوان تستوفي حدود المسح البصري الدنيا.",
      "headers": [
        "تركيبة الألوان",
        "نسبة التباين",
        "الحد الأدنى لحجم الطباعة",
        "التطبيق الموصى به"
      ],
      "rows": [
        [
          "كحلي عميق (#001F3F) على أبيض (#FFFFFF)",
          "14.5:1 (مرتفع جدًا)",
          "25 مم × 25 مم (1.0\" × 1.0\")",
          "الهوية المؤسسية، بطاقات الأعمال، القرطاسية"
        ],
        [
          "أخضر غابي (#1B4D3E) على كريمي (#FBF9F5)",
          "10.2:1 (مرتفع)",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "المنتجات العضوية، والتغليف الصديق للبيئة، والقوائم"
        ],
        [
          "بنفسجي ملكي (#4A0E4E) على أبيض (#FFFFFF)",
          "12.8:1 (مرتفع)",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "السلع الفاخرة، وقرطاسية الفعاليات، والأزياء"
        ],
        [
          "نبيذي غني (#5C061C) على أبيض (#FFFFFF)",
          "11.4:1 (مرتفع)",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "ملصقات زجاجات النبيذ، وتغليف الأطعمة الراقية"
        ],
        [
          "فحمي (#222222) على نعناع باستيل (#E8F5E9)",
          "11.8:1 (مرتفع)",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "التغليف الحديث للتجزئة، وأجهزة التقنية"
        ]
      ]
    },
    "useCases": [
      {
        "title": "اتساق العلامة التجارية المؤسسية",
        "description": "وافق بين رموز التسويق الخاصة بك ومواصفات Pantone وhex للعلامة التجارية عبر الكتيبات والتقارير السنوية."
      },
      {
        "title": "تغليف التجزئة وملصقات المنتجات",
        "description": "اضبط الرمز على الألوان الأساسية لتغليف الأطعمة والمشروبات ومستحضرات التجميل والسلع الحياتية، ليبدو جزءًا من العبوة."
      },
      {
        "title": "قوائم المطاعم وبطاقات الطاولات في الضيافة",
        "description": "ألوان الرموز الدافئة والأنيقة التي تنسجم مع أجواء المكان تُقرأ بوضوح أكبر من مربع أسود فظ على طاولة تحت ضوء الشموع."
      },
      {
        "title": "لافتات الفعاليات وبرامج الحفلات الرسمية",
        "description": "حمّل لوحة ألوان الحفل أو المهرجان أو المؤتمر إلى اللافتات والشارات والدعوات."
      },
      {
        "title": "شعارات أساطيل المركبات والمقاولين",
        "description": "طابق الرمز مع هوية أسطول مركبات السباكة والتكييف وتوصيل البضائع على الملصقات، ليبدو صادرًا رسميًا لا مرتجلًا."
      }
    ],
    "troubleshooting": {
      "title": "أخطاء الألوان التي تمنع رموز QR من المسح",
      "points": [
        "عكس اللوحة. الرمز الأبيض على أزرق داكن يربك كثيرًا من محركات المسح. أبقِ المقدمة أغمق من الخلفية، لا العكس.",
        "الألوان الباستيلية. الأصفر الفاتح أو الوردي الناعم أو النعناعي على الأبيض يقع تحت نسبة 2:1 — شبه غير مرئي لعتبة الكاميرا.",
        "الدافئ على الدافئ. الوحدات الحمراء على الأصفر أو البرتقالي تشترك في إضاءة كبيرة. راجع نسخة تدرج الرمادي قبل أن تثق بالنتيجة.",
        "انحراف CMYK. قد تتغير ألوان RGB عند التحويل للطباعة بالأوفست. تأكد من أن النسخة المطبوعة ما زالت تحمل إضاءة داكنة.",
        "وهج اللمعان. التشطيب اللامع يعكس الضوء ويمحو تباينك. الرموز الملونة تُقرأ أفضل على ورق مطفأ."
      ]
    },
    "faqs": [
      {
        "q": "هل يمكن لرمز QR أن يكون بأي لون ويظل يعمل بموثوقية؟",
        "a": "بأي لون تقريبًا، بشرط واحد: يجب أن تكون المقدمة أغمق من الخلفية بوضوح، بنسبة تتجاوز 4.5:1. الكحلي العميق والأخضر الغابي والبنفسجي والعنابي كلها تحقق ذلك بسهولة."
      },
      {
        "q": "لماذا أتجنب رموز QR البيضاء على الخلفيات الداكنة (الألوان المعكوسة)؟",
        "a": "صُممت أجهزة فك التشفير لتتوقع الداكن على الفاتح. قد يتعامل iPhone الحديث مع العكس، لكن كثيرًا من هواتف Android وأجهزة المسح اليدوية تتعثر أو تفشل فيه — ولا يستحق ذلك المخاطرة على مواد مطبوعة."
      },
      {
        "q": "كيف أتحقق مما إذا كانت تركيبة الألوان لدي قابلة للمسح؟",
        "a": "حوّل التصميم إلى تدرج الرمادي في أي عارض صور. إذا بقي النمط بارزًا بوضوح على الخلفية، فتباينك سليم. وإذا تلاشى في الأرضية، فسيتلاشى المسح معه."
      },
      {
        "q": "هل يمكنني استخدام ألوان متعددة (مثلًا ألوان مختلفة لأعين الزوايا)؟",
        "a": "يمكنك ضبط الإطارات الخارجية ونقاط الأعين الداخلية والوحدات الأساسية على ثلاثة ألوان مختلفة، وسيظل الرمز قابلًا للمسح — بشرط أن يحافظ كل جزء على تباينه."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR الملونة أو تكلف مالًا إضافيًا؟",
        "a": "لا في الحالتين. اللون لا يكلف شيئًا هنا، والرموز تأتي مع مسح غير محدود وصلاحية دائمة كأي نوع آخر."
      },
      {
        "q": "ما الصيغة التي يجب أن أنزّلها للطباعة الاحترافية المطابقة للألوان؟",
        "a": "SVG متجه. فهو يحتفظ بقيم hex وRGB الدقيقة، ويتحول إلى عينات CMYK بنظافة داخل InDesign أو Illustrator، وهذا ما تحتاجه مهمة طباعة مُدارة الألوان."
      },
      {
        "q": "هل يمكنني إضافة شعار إلى رمز QR ملوّن؟",
        "a": "نعم — تخصيص الألوان والشعار المركزي يعملان معًا، ويغطي تصحيح المستوى H الشعار كما يفعل على الرمز الأسود."
      },
      {
        "q": "هل تُخزَّن بيانات تصميم الألوان على خوادم خارجية؟",
        "a": "تبقى محلية. يعمل عرض الألوان وإنشاء SVG كلاهما في ذاكرة متصفحك، دون إرسال شيء إلى الخارج."
      }
    ],
    "bestPractices": "حافظ على أن تكون المقدمة أغمق بوضوح من الخلفية، وراجع التصميم بتدرج الرمادي قبل الالتزام. ثم امسح نسخة مطبوعة: لون يبدو جيدًا على الشاشة قد يفقد تباينه بمجرد أن يصل إلى الورق."
  },
  '/svg-qr-code-generator': {
    "sections": [
      {
        "title": "المعيار الذهبي للطباعة التجارية الاحترافية",
        "paragraphs": [
          "على عكس صور PNG أو JPEG النقطية المبنية من البكسلات، لا تتلطخ ملفات SVG المتجهة أبدًا عند تكبيرها إلى تنسيقات طباعة كبيرة.",
          "استورد ملفات SVG بسهولة إلى Adobe Illustrator وPhotoshop وInDesign وFigma أو Canva لسير عمل التصميم الجرافيكي."
        ]
      }
    ],
    "technicalOverview": {
      "title": "نظرة تقنية عامة على هندسة رموز QR بصيغة الرسومات المتجهة القابلة للتحجيم (SVG)",
      "paragraphs": [
        "SVG صيغة متجهة مبنية على XML من W3C، والفرق بينها وبين PNG أو JPEG جوهري. يخزن الملف النقطي الرمز كشبكة ثابتة من البكسلات الملونة. أما SVG فيخزنه كمعادلات رياضية — كل وحدة وكل عين زاوية والمنطقة الهادئة تُكتب كمسارات إحداثية (`<rect>`، `<path>`، `<circle>`).",
        "هذا الفرق هو جوهر الأمر عند التكبير. خذ رمز SVG من بطاقة عمل بعرض 25 مم إلى لوحة إعلانية بطول 20 مترًا، فلن يعيد المُصيِّر سوى حساب المنحنيات — لا استيفاء، ولا تشويش مضاد للتعرج، ولا حواف ناعمة. تحصل مكابس الأوفست وخطوط تغليف الفلكسو ونقاشات الليزر وأجهزة قص الفينيل CNC على هندسة يمكنها اتباعها بدقة.",
        "تتراكم المزايا العملية إلى ما وراء الحدة. رمز SVG خفيف جدًا، غالبًا أقل من 5 كيلوبايت. يُنسّق بـ CSS، ويتحول دون فقد إلى CMYK في Illustrator أو InDesign، ويدخل مباشرة في صفحة ويب أو تطبيق حديث."
      ]
    },
    "comparisonTable": {
      "title": "رمز QR متجه بصيغة SVG مقابل رمز QR نقطي بصيغة PNG / JPEG",
      "headers": [
        "الخاصية التقنية",
        "رمز QR متجه SVG",
        "رمز QR نقطي PNG / JPEG"
      ],
      "rows": [
        [
          "قابلية التحجيم",
          "قابل للتحجيم بلا حدود (لا بكسلة ولا تشويش عند أي حجم)",
          "دقة ثابتة (يتبكسل ويتشوش عند التكبير)"
        ],
        [
          "حجم الملف",
          "مضغوط جدًا (~3 كيلوبايت - 8 كيلوبايت)",
          "من 100 كيلوبايت إلى 2 ميغابايت عند دقات الطباعة العالية"
        ],
        [
          "التوافق مع المكابس الطباعية",
          "معيار صناعي للأوفست التجاري والفلكسو والليزر",
          "يتطلب حسابًا لا يقل عن 300 DPI لكل بُعد طباعة"
        ],
        [
          "قابلية التحرير في أدوات المتجهات",
          "تحرير كامل للمسارات في Illustrator وInDesign وFigma",
          "خريطة بكسلات مسطحة؛ لا يمكن تحرير المسارات بنظافة"
        ],
        [
          "النقش بالليزر وقص الفينيل",
          "دعم مباشر للمسارات المتجهة لآلات CNC وقواطع الليزر",
          "غير متوافق؛ يتطلب تتبعًا يدويًا إلى متجه"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "أدخل محتوى QR واضبط بيانات الحمولة",
        "description": "أدخل وجهتك — رابط، أو تفاصيل vCard، أو بيانات اعتماد WiFi، أو نص."
      },
      {
        "number": 2,
        "title": "خصص المعايير المرئية والشعار",
        "description": "اختر أنماط الوحدات وألوان العلامة التجارية وهندسة أعين الزوايا، وضع شعارًا مركزيًا إن أردت."
      },
      {
        "number": 3,
        "title": "صدّر ملف SVG متجهًا بدون فقد",
        "description": "اضغط «تنزيل SVG» لتحصل على ملف متجه جاهز للطباعة يذهب مباشرة إلى سير عمل ما قبل الطباعة."
      }
    ],
    "features": [
      {
        "title": "تحجيم لانهائي مثالي رياضيًا",
        "description": "كبّر الرمز إلى أي حجم وتبقى حواف الوحدات حادة كالشفرة. لا توجد دقة تنفد."
      },
      {
        "title": "توافق مباشر مع ما قبل الطباعة والطباعة التجارية",
        "description": "يُفتح بنظافة في InDesign وIllustrator وCorelDRAW وQuarkXPress دون خطوة تحويل بينهما."
      },
      {
        "title": "جاهز للنقش بالليزر ومخططات الفينيل",
        "description": "مسارات المتجهات تغذي قاطع الليزر أو فريزة CNC أو مخطط اللافتات مباشرة."
      },
      {
        "title": "حجم ملف خفيف جدًا",
        "description": "أقل من 5 كيلوبايت، فيُحمَّل فورًا على الويب ويُرسل بالبريد دون تفكير."
      }
    ],
    "sizingMatrix": {
      "title": "دليل تطبيقات إنتاج رموز QR بصيغة SVG",
      "description": "يتكيّف SVG المتجه بسلاسة مع جميع عمليات التصنيع الفعلية والصناعية.",
      "headers": [
        "عملية التصنيع",
        "وسط الإخراج",
        "الدقة الموصى بها",
        "مزايا SVG المتجه"
      ],
      "rows": [
        [
          "الطباعة التجارية بالأوفست",
          "الكتيبات والتقارير السنوية والكتب",
          "حادة إلى ما لا نهاية عند إخراج المكبس بدقة 2400+ DPI",
          "تراكب وفصل ألوان متجهان نظيفان"
        ],
        [
          "الطباعة بالفلكسو",
          "منتجات التغليف، والكراتين المموجة",
          "تتحجم إلى الأبعاد الدقيقة لخط القطع بالقالب",
          "صفر تراكم نقاط نقطية على المواد المسامية"
        ],
        [
          "النقش والحفر بالليزر",
          "الخشب والألومنيوم المؤكسد والفولاذ المقاوم للصدأ",
          "يتحول مباشرة إلى مسارات أدوات CNC",
          "قطع دقيق للكنتور بشعاع الليزر"
        ],
        [
          "رسم وقص الفينيل",
          "ملصقات المركبات، ولافتات واجهات المتاجر",
          "توليد مباشر لخطوط القطع المتجهة",
          "يلغي التتبع اليدوي للخريطة النقطية"
        ],
        [
          "واجهة الويب والتطبيقات الرقمية",
          "مواقع الويب المتجاوبة وتطبيقات الويب",
          "عرض حاد على شاشات 4K وRetina",
          "صفر عبء على عرض النطاق (~4 كيلوبايت)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "لوحات الإعلانات التجارية واللافتات كبيرة الحجم",
        "description": "كبّره إلى لافتة بطول 5 أمتار أو ملصق نقل عام، فتظل الوحدات حادة بما يكفي للقراءة من عبر الشارع."
      },
      {
        "title": "تغليف المنتجات وطباعة الكراتين الفلكسوغرافية",
        "description": "ضع الرمز المتجه مباشرة في مخطط القالب، وسيصمد خلال تشغيل سريع على المكبس."
      },
      {
        "title": "سلع معدنية وخشبية منقوشة بالليزر",
        "description": "انقش رمزًا دائمًا على قاعدة طاولة خشبية أو بطاقة مفاتيح معدنية أو علامة أصول صناعية من الملف نفسه."
      },
      {
        "title": "ملصقات فينيل لأساطيل المركبات التجارية",
        "description": "اقطع ملصقات تغليف لسيارات الفان وشاحنات الخدمة مباشرة من مسارات SVG، دون خطوة تتبع للخريطة النقطية."
      },
      {
        "title": "تطبيقات الويب المتجاوبة عالية الكثافة",
        "description": "ضمّن SVG داخل تطبيق ويب وسيظهر حادًا على شاشات Retina و4K بضعة كيلوبايتات فقط."
      }
    ],
    "troubleshooting": {
      "title": "أفضل الممارسات عند العمل مع ملفات SVG لرموز QR",
      "points": [
        "التحجيم في Illustrator. فعّل «Scale Strokes & Effects» لتكبر مخططات الوحدات بنسبة متناسبة بدلًا من أن تبقى بسماكة ثابتة.",
        "الخطوط في الشعار. إذا كان الشعار المضمّن يحمل نوعًا مخصصًا، فحوّل النص إلى مخططات قبل التصدير النهائي للطباعة.",
        "المنطقة الهادئة. لا تقطع الإطار المحيط بـ SVG بإحكام — الهامش الأبيض حول الرمز هو ما تستخدمه الكاميرا لتحديد موقعه.",
        "اللون المخصص. تطبع بأحبار Pantone؟ تحقق من أن تعبئة SVG موجهة إلى قناة الفصل الصحيحة قبل إرساله إلى اللوحة.",
        "نقطي داخل المتجه. تأكد من أن أي شعار داخل SVG هو متجه بدوره، لا JPEG منخفض الدقة سيُشوّش الملف بأكمله."
      ]
    },
    "faqs": [
      {
        "q": "ما هو رمز QR بصيغة SVG ولماذا هو أفضل للطباعة؟",
        "a": "SVG اختصار لـ Scalable Vector Graphics (الرسومات المتجهة القابلة للتحجيم). بينما يُبنى PNG أو JPEG من البكسلات، يصف SVG أشكاله بالمعادلات الرياضية، لذلك يُحجَّم الرمز إلى أي حجم دون تلطخ أو تكسّر. وفي الطباعة، هذا الفرق هو كل شيء."
      },
      {
        "q": "هل يمكنني فتح رموز QR بصيغة SVG وتحريرها في Adobe Illustrator أو Figma؟",
        "a": "مباشرة. SVG صيغة متجهة قياسية، لذا يُفتح للتحرير في Illustrator وInDesign وPhotoshop وFigma وCorelDRAW وInkscape دون تحويل."
      },
      {
        "q": "هل تتوافق صيغة SVG مع النقش بالليزر وآلات CNC؟",
        "a": "هذه هي الصيغة التي يريدونها. تقرأ آلة قطع الليزر أو راسم CNC مسارات المتجهات مباشرة من SVG لتوجيه الشعاع أو الشفرة."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR بصيغة SVG أو لها حدود للمسح؟",
        "a": "لا انتهاء ولا حد. رمز SVG ثابت يحفظ بياناته بنفسه ويستمر في العمل مدى الحياة، دون رسوم متكررة."
      },
      {
        "q": "إلى أي حد يمكنني تكبير رمز QR بصيغة SVG دون فقدان الجودة؟",
        "a": "بالقدر الذي تحتاجه — ختم بحجم 1 سم أو لافتة ملعب بطول 50 مترًا، كلاهما بدقة كاملة. ولا سقف للحجم في الهندسة المتجهة."
      },
      {
        "q": "هل يمكنني تضمين شعار شركتي داخل رمز QR بصيغة SVG؟",
        "a": "يمكنك وضع شعار في منتصف المصفوفة المتجهة، ويغطي تصحيح المستوى H الوحدات التي يقع عليها."
      },
      {
        "q": "هل يمكنني استخدام رموز QR بصيغة SVG على مواقع الويب وتطبيقات الهاتف؟",
        "a": "تعرض المتصفحات SVG بشكل أصلي، لذلك يُحمَّل رمز SVG المضمّن في أقل من 5 كيلوبايت ويظل حادًا على شاشات Retina و4K عالية الكثافة."
      },
      {
        "q": "هل رموز QR بصيغة SVG مجانية للتوليد على QR Generator Online؟",
        "a": "تنزيل SVG المتجه عالي الدقة مجاني، دون حساب أو اشتراك في الطريق."
      }
    ],
    "bestPractices": "سلّم مطبعتك SVG المتجه، واحفظ المنطقة الهادئة المكونة من 4 وحدات سليمة، وتأكد من أن أي شعار مضمّن هو متجه أيضًا. هذا المزيج هو ما يمنح المطبعة ملفًا يمكنها إسقاطه مباشرة على المكبس."
  },
  '/high-resolution-qr-codes': {
    "sections": [
      {
        "title": "وضوح لا تشوبه شائبة للتغليف والقوائم واللافتات",
        "paragraphs": [
          "تمنع الدقة العالية DPI الحواف الضبابية وإخفاقات المسح على أسطح الطباعة اللامعة أو العبوات ذات الملمس أو البيئات قليلة الإضاءة.",
          "صدّر رموز QR واضحة كالبلور بخلفيات شفافة، جاهزة للوضع الفوري على المواد التسويقية."
        ]
      }
    ],
    "technicalOverview": {
      "title": "نظرة تقنية عامة على هندسة رموز QR عالية الدقة (300+ DPI / 4K)",
      "paragraphs": [
        "رمز QR عالي الدقة هو الرمز المبني بكثافة بكسلات تكفي للبقاء في الطباعة — 2048×2048 بكسل على الأقل بدقة 300 إلى 600 DPI، أو ملف متجه مستقل عن الدقة. تمنحك معظم مولدات الويب صورة 200×200 بدقة 72 DPI، تبدو جيدة على الشاشة لكنها تتفكك بمجرد أن تصل إلى الورق: تبكسل، وحواف ناعمة، وحدود وحدات ضبابية.",
        "إليك ما يحدث فعليًا. عندما يُطبع رمز منخفض الدقة، تحاول المكبس ملء بيانات بكسلات لم تكن موجودة أصلًا. هذا الاستيفاء يقضم الزوايا الحادة للوحدات المربعة ويشوّه نسبة التحديد 1:1:3:1:1 التي يعتمد عليها الماسح — فتفك الكاميرا التشفير ببطء أو تستسلم.",
        "يتجنب QR Generator Online هذا النمط من الفشل كليًا. يصدّر نقطيًا فائق الدقة يصل إلى 4K بدقة 300 DPI، إضافة إلى SVG و EPS متجهين. وفي الحالتين تبقى حواف الوحدات حادة بما يكفي ليقبلها مطبعة التغليف أو بيت قرطاسية فاخرة أو ورشة لوحات إعلانية كبيرة دون نظرة ثانية."
      ]
    },
    "comparisonTable": {
      "title": "رمز QR عالي الدقة بـ 300 DPI مقابل التصدير القياسي للويب بـ 72 DPI",
      "headers": [
        "المواصفة / المقياس",
        "تصدير عالي الدقة 300 DPI (QR Generator Online)",
        "مولد ويب منخفض الدقة 72 DPI"
      ],
      "rows": [
        [
          "الأبعاد بالبكسل",
          "من 2048×2048 بكسل إلى 4096×4096 بكسل (4K)",
          "من 200×200 بكسل إلى 350×350 بكسل"
        ],
        [
          "جودة الإخراج المطبوع",
          "حدود وحدات حادة كالموسى عند 300+ DPI",
          "حواف وحدات مبكسلة وضبابية ومسننة"
        ],
        [
          "سرعة فك التشفير بالكاميرا",
          "فك تشفير فوري (أقل من 0.2 ثانية) في كل الإضاءات",
          "فك تشفير متأخر (1 - 3 ثوانٍ) بسبب الضبابية البصرية"
        ],
        [
          "أقصى حجم طباعة",
          "قابل للتحجيم حتى أحجام الملصقات واللوحات الإعلانية",
          "محصور في شاشات الويب أو الشاشات الصغيرة فقط"
        ],
        [
          "معايير ما قبل الطباعة التجارية",
          "يستوفي معايير الطباعة التجارية ISO 12647",
          "مرفوض في فحوصات ما قبل الطباعة التجارية"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "اضبط حمولة البيانات ونوع المحتوى",
        "description": "أدخل وجهتك — رابط، أو ملف vCard، أو بيانات اعتماد WiFi، أو نص."
      },
      {
        "number": 2,
        "title": "خصص معايير التصميم وتصحيح الأخطاء",
        "description": "حدّد ألوانك ونمط النقاط وأعين الزوايا، وأضف شعارًا مركزيًا بالمستوى H إن احتجت إليه."
      },
      {
        "number": 3,
        "title": "نزّل PNG بدقة 4K فائقة الوضوح أو SVG متجهًا بدون فقد",
        "description": "صدّر PNG واضحًا بدقة 2048×2048 بكسل و300 DPI للاستخدام الرقمي، أو SVG متجهًا للطباعة كبيرة الحجم."
      }
    ],
    "features": [
      {
        "title": "دقة 4K فائقة الوضوح وإخراج بـ 300+ DPI",
        "description": "تصديرات نقطية مبنية على الكثافة البكسلية التي تحتاجها المكبس التجارية الفعلية."
      },
      {
        "title": "صفر آثار ضغط أو تشويش على الحواف",
        "description": "التصيير بدون فقد يُبقي حواف الوحدات نظيفة، فلا تتوقف الكاميرا أبدًا عند حد ضبابي."
      },
      {
        "title": "امتثال للمعايير التجارية لما قبل الطباعة",
        "description": "يجتاز عتبة الدقة المطلوبة للأوفست والمكبس الرقمي وأعمال تغليف الفلكسو."
      },
      {
        "title": "مجاني 100% مع مسح دائم مدى الحياة",
        "description": "كل تنزيل PNG عالي الدقة وكل تنزيل متجه مجاني — بلا اشتراك، ولا علامة مائية، ولا سقف للمسح."
      }
    ],
    "sizingMatrix": {
      "title": "مصفوفة الدقة وأبعاد البكسل حسب حجم الطباعة",
      "description": "احسب أبعاد البكسل المطلوبة عند معيار الطباعة التجاري القياسي 300 DPI (البكسلات = البوصات × 300).",
      "headers": [
        "أبعاد الطباعة الفعلية",
        "الدقة المطلوبة عند 300 DPI",
        "صيغة الملف الموصى بها",
        "التطبيق المستهدف"
      ],
      "rows": [
        [
          "1.0\" × 1.0\" (25 مم × 25 مم)",
          "300 × 300 بكسل",
          "PNG بدقة 300 DPI / SVG متجه",
          "بطاقات الأعمال، شارات الأسماء"
        ],
        [
          "2.0\" × 2.0\" (50 مم × 50 مم)",
          "600 × 600 بكسل",
          "PNG بدقة 300 DPI / SVG متجه",
          "الأوتاد المكتبية، والمحارم، وملصقات المنتجات"
        ],
        [
          "4.0\" × 4.0\" (100 مم × 100 مم)",
          "1200 × 1200 بكسل",
          "SVG متجه / PNG بدقة 300 DPI",
          "الكتيبات، والبطاقات البريدية، وإعلانات المجلات"
        ],
        [
          "8.0\" × 8.0\" (200 مم × 200 مم)",
          "2400 × 2400 بكسل (4K)",
          "SVG متجه",
          "الملصقات، ولافتات المتاجر، والبنرات"
        ],
        [
          "20\"+ (الحجم الكبير واللوحات الإعلانية)",
          "تحجيم متجه لا نهائي",
          "SVG متجه / EPS",
          "خلفيات المعارض التجارية، واللوحات الإعلانية"
        ]
      ]
    },
    "useCases": [
      {
        "title": "تغليف تجاري وملصقات منتجات",
        "description": "اطبع رمزًا حادًا على عبوات الأطعمة وزجاجات مستحضرات التجميل وصناديق التجزئة دون أن يلتهم تسرب النقاط الوحدات."
      },
      {
        "title": "قرطاسية الأعمال الفاخرة والرؤوس المطبوعة",
        "description": "قدّم لعمل التذهيب الرقائقي أو البارز أو طلاء UV الموضعي الدقة التي يحتاجها على الورق المقوى المتميز."
      },
      {
        "title": "البنرات كبيرة الحجم واللوحات الإعلانية الخارجية",
        "description": "كبّره إلى لوحة بعدة أمتار تُفك شفرتها بنظافة من الجانب الآخر من موقف السيارات."
      },
      {
        "title": "إعلانات المجلات وكتالوجات البريد المباشر",
        "description": "اجتز حاجز ما قبل الطباعة البالغ 300+ DPI الذي تفرضه عليك مطابع المجلات والكتالوجات الوطنية."
      },
      {
        "title": "شاشات رقمية عالية الوضوح وأكشاك 4K",
        "description": "اعرض رمزًا واضحًا على شاشة لمس أو لوحة قوائم رقمية أو شريحة مؤتمر دون أن يصبح ضبابيًا."
      }
    ],
    "troubleshooting": {
      "title": "تجنب مزالق الدقة وجودة الطباعة",
      "points": [
        "التقاط لقطة شاشة للرمز. لا تأخذ أبدًا لقطة شاشة للطباعة — فهي تثبّت دقة الويب المنخفضة. نزّل PNG الأصلي عالي الدقة أو SVG.",
        "ضغط JPEG. يُحدث JPEG المضغوط بالفقد هالات خافتة حول حواف الوحدات. احفظ بصيغة PNG بدون فقد أو SVG بدلًا منه.",
        "تراكم النقاط على ورق الصحف. الورق الرخيص والمسامي ينشر الحبر ويغلق الفجوات بين الوحدات. كبّر الرمز بنحو 20% لورق الصحف.",
        "تقليل الدقة عند التصدير. عند وضع رمز في InDesign أو Canva، تأكد من أن التصدير لا يُسقطه بصمت إلى أقل من 300 DPI.",
        "التنعيم عند التنقيط. تحوّل متجهًا إلى نقطي؟ استخدم عرض أقرب جار أو عرضًا بحواف حادة، لتبقى زوايا الوحدات قائمة."
      ]
    },
    "faqs": [
      {
        "q": "لماذا تُعد الدقة العالية ضرورية لطباعة رموز QR؟",
        "a": "لأن الكاميرا تقرأ الحواف لا النوايا. تعمل الصورة منخفضة الدقة على تضبيب حدود الوحدات في الطباعة، والحد الضبابي هو بالضبط ما يصعب على الماسح تحديد عتبته. عند 300+ DPI تبقى الحواف حادة ويكون فك التشفير فوريًا."
      },
      {
        "q": "ما الدقة التي يصدّرها QR Generator Online لملفات PNG؟",
        "a": "تصدير PNG هو 2048×2048 بكسل بدقة 300 DPI — يكفي للطباعة بنظافة حتى نحو 7×7 بوصات دون أي فقد في الجودة."
      },
      {
        "q": "متى يجب أن أستخدم SVG المتجه بدلًا من PNG عالي الدقة؟",
        "a": "استخدم SVG كلما كان الرمز كبيرًا أو احترافيًا: الملصقات، واللافتات، واللوحات الإعلانية، وسير عمل Illustrator أو InDesign، أو أي شيء يُنقش بالليزر أو يُقطع بالفينيل."
      },
      {
        "q": "هل رموز QR عالية الدقة مدفوعة أو تتطلب حساب Pro؟",
        "a": "لا حساب ولا تكلفة. كل PNG عالي الدقة وكل SVG متجه هنا مجاني وغير محدود وبلا علامة مائية."
      },
      {
        "q": "كيف أعرف الحجم الذي يجب أن أطبع به رمز QR الخاص بي؟",
        "a": "استخدم قاعدة 10:1: اقسم مسافة المسح على عشرة. ملصق يُقرأ من مسافة متر يحتاج رمزًا عرضه 10 سم (4 بوصات) على الأقل."
      },
      {
        "q": "هل يمكنني إنشاء رموز QR عالية الدقة بألوان وشعارات مخصصة؟",
        "a": "يمكنك تنسيق الألوان ونمط النقاط وأشكال الزوايا، وإضافة شعار مركزي، ولا يزال بإمكانك تصدير النتيجة بصيغة PNG بدقة 4K أو SVG متجه."
      },
      {
        "q": "لماذا ترفض مطابع الطباعة التجارية صور 72 DPI؟",
        "a": "تعمل مكابسها بدقة تتجاوز 2400 DPI. ملف 72 DPI لا يحمل ببساطة بيانات بكسلات كافية، فيُطبع كمربعات مرئية ويفشل في فحص ما قبل الطباعة."
      },
      {
        "q": "هل بياناتي آمنة عند توليد رموز QR عالية الدقة؟",
        "a": "نعم. يجري التصيير عالي الدقة محليًا في متصفحك، دون إرسال أي بيانات أو صور إلى أي خادم."
      }
    ],
    "bestPractices": "صدّر SVG متجهًا للطباعة، أو PNG بحجم 2048 بكسل وبدقة 300 DPI، وابتعد عن JPEG المضغوط بالفقد. وكما هي القاعدة دائمًا، امسح النسخة المطبوعة قبل التشغيل الكامل — مشكلات الدقة لا تظهر إلا على الورق، ولا تظهر أبدًا على الشاشة."
  },
  '/about': {
    "sections": [
      {
        "title": "بناء تقنية الباركود التي تضع الخصوصية أولًا",
        "paragraphs": [
          "أُنشئ QR Generator Online لمعالجة الإحباط من مولدات QR المدفوعة والمستغلة التي تحتجز روابط المستخدمين كرهائن بعد التجارب المجانية.",
          "تتم كل عملية توليد ثابتة بنسبة 100% داخل متصفحك، دون تسجيل معلومات اتصال شخصية أو بيانات اعتماد WiFi حساسة على خوادمنا."
        ]
      }
    ],
    "technicalOverview": {
      "title": "مهمتنا المعمارية — تقنية QR مفتوحة وخاصة ودائمة",
      "paragraphs": [
        "بدأ QR Generator Online من إحباط مشترك. فقد شهد بعض المهندسين وعدد من مصممي الخطوط وبعض المهتمين بالخصوصية الشيء نفسه: توليد الباركود ثنائي الأبعاد — وهو معيار مفتوح نشرته Denso Wave وISO/IEC عام 2000 — تم تسييجه خلف اشتراكات بقيمة 30 دولارًا شهريًا تحتجز الإعلانات المطبوعة كرهائن. لذلك بنوا البديل.",
        "الخيار الهندسي الكامن وراء ذلك بسيط في عرضه وصعب في تزويره: كل شيء يعمل على جانب العميل. تعمل حسابات متعددات حدود Reed-Solomon وتجميع المصفوفة والتصيير المتجه كلها داخل متصفحك عبر JavaScript الحديث وWebAssembly. لا يوجد وكيل تتبع في المسار لأنه لا يوجد خادم في المسار أصلًا.",
        "تصل هذه المنصة اليوم إلى الناس في 190 دولة. يستخدم المولد نفسه مقهى ركنيًا وشركة قرطاسية في قائمة Fortune 500، وكلاهما يحصل على رموز متجهة دائمة وعالية الدقة دون جدار دفع، ودون حد للمسح، ودون تسجيل أي شيء."
      ]
    },
    "comparisonTable": {
      "title": "فلسفتنا المعمارية مقابل منصات SaaS التجارية التقليدية",
      "headers": [
        "القيمة / الركيزة الأساسية",
        "QR Generator Online",
        "SaaS التجاري التقليدي لرموز QR"
      ],
      "rows": [
        [
          "نموذج التسعير",
          "مجاني 100% إلى الأبد (لا جدران دفع، ولا اشتراكات)",
          "اشتراك شهري متكرر (15 - 45 دولارًا/شهر)"
        ],
        [
          "بنية البيانات",
          "100% على جانب العميل (كل المعالجة في ذاكرة المتصفح)",
          "وكيل خادم مركزي يسجل كل حركة المسح"
        ],
        [
          "الخصوصية والامتثال للائحة GDPR",
          "صفر جمع بيانات، وصفر ملفات تعريف ارتباط، وصفر تتبع",
          "يحصد عناوين IP للزوار ومواقعهم وأجهزتهم"
        ],
        [
          "تصدير الملفات المتجهة",
          "SVG و EPS متجهان كاملان مجانًا لجميع المستخدمين",
          "صيغ متجهة مقفلة خلف مستويات Pro باهظة"
        ],
        [
          "عمر الرمز",
          "صلاحية دائمة مدى الحياة (ترميز مباشر ثابت)",
          "تنتهي صلاحية الرموز بعد 14 يومًا ما لم يُدفع الاشتراك"
        ],
        [
          "حقوق الاستخدام التجاري",
          "ترخيص تجاري كامل وغير مقيد مشمول",
          "الاستخدام التجاري مقيد في الخطط المجانية أو المبتدئة"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "وصول مفتوح لجميع المستخدمين في كل مكان",
        "description": "تصل المجموعة نفسها من الأدوات بمستوى المؤسسات إلى الجميع — المصمم المستقل، والمتجر الركني، والعلامة العالمية — دون حجب أي شيء خلف مستوى مدفوع."
      },
      {
        "number": 2,
        "title": "خصوصية بيانات دون تنازلات بالتصميم",
        "description": "لا يُخزَّن أو يُسجَّل أو يُباع أي رابط عميل أو كلمة مرور أو ملف اتصال. ولا توجد أصلًا قاعدة بيانات تحتفظ بأي شيء منها."
      },
      {
        "number": 3,
        "title": "معايير دقيقة لما قبل الطباعة للطباعة المادية",
        "description": "صُمم إخراج SVG المتجه ليصمد أمام مكبس تجاري — دقيق رياضيًا، وجاهز لأعمال التغليف والأحجام الكبيرة."
      }
    ],
    "features": [
      {
        "title": "بنية تعمل بالكامل على جانب العميل عبر المتصفح",
        "description": "يتم الترميز والتصيير محليًا، ولهذا تكون المعاينة فورية وتبقى مدخلاتك خاصة."
      },
      {
        "title": "امتثال كامل لمعيار ISO/IEC 18004",
        "description": "مبني حرفيًا وفق المعيار الدولي، فيُمسح الرمز من المحاولة الأولى على أي كاميرا iOS أو Android."
      },
      {
        "title": "إخراج SVG متجه بدون فقد و PNG بدقة 4K",
        "description": "مسار تصدير واحد يخدم بنفس الكفاءة ملصقًا صغيرًا ولوحة طريق سريع بطول 50 مترًا."
      },
      {
        "title": "ضمان الرمز الدائم مدى الحياة",
        "description": "لا توجد إعادة توجيه وسيطة، ولذلك لا شيء يمكن إيقافه. الرمز الذي تطبعه هنا يستمر في العمل."
      }
    ],
    "sizingMatrix": {
      "title": "مقاييس نطاقنا العالمي وأداؤنا",
      "description": "مقاييس رئيسية تعكس موثوقية منصة QR Generator Online وانتشارها العالمي.",
      "headers": [
        "المقياس / المؤشر",
        "معيار الأداء",
        "البنية التقنية",
        "فائدة المستخدم"
      ],
      "rows": [
        [
          "زمن استجابة التوليد",
          "أقل من 50 ميلي ثانية",
          "تنفيذ محلي لـ WebAssembly / JS في المتصفح",
          "تحديثات معاينة فورية لحظية"
        ],
        [
          "معدل موثوقية المسح",
          "99.99% فك تشفير بصري من المحاولة الأولى",
          "أنماط توقيت متوافقة مع ISO/IEC 18004",
          "صفر احتكاك للعملاء أثناء المسح"
        ],
        [
          "دقة المتجهات",
          "قابلية تحجيم رياضية لا نهائية",
          "هندسة مسارات متجهة نظيفة بمعيار W3C SVG",
          "إخراج مطبعي تجاري بلا عيوب"
        ],
        [
          "تسجيل بيانات الخادم",
          "0.00% (صفر بايت مخزّن)",
          "لا توجد قاعدة بيانات خارجية ولا وكيل تتبع",
          "امتثال كامل للائحتي GDPR وCCPA"
        ],
        [
          "التوافر العالمي",
          "100.0% توافر ثابت",
          "توصيل عبر شبكة CDN عالمية موزعة",
          "توافر عالمي 24/7/365"
        ]
      ]
    },
    "useCases": [
      {
        "title": "الشركات الصغيرة المستقلة والتجزئة المحلية",
        "description": "مواد تسويقية احترافية، ولافتات متاجر، وتغليف، دون أن يلتهم اشتراك البرمجيات هامش الربح."
      },
      {
        "title": "وكالات التصميم والمحترفون المبدعون",
        "description": "ملفات SVG متجهة نظيفة تُستورد مباشرة إلى InDesign أو Illustrator أو Figma دون أي تنظيف."
      },
      {
        "title": "بيوت ما قبل الطباعة وطابعات التغليف التجاري",
        "description": "مخططات باركود عالية التباين تجتاز فحص ما قبل الطباعة الصارم بدلًا من أن تُرد."
      },
      {
        "title": "المنظمات غير الربحية والمدارس والجمعيات المجتمعية",
        "description": "تسجيل حضور الفعاليات دون لمس، واختبارات الفصول الدراسية، وروابط التبرع، كل ذلك دون ميزانية تقنية."
      },
      {
        "title": "مطورو البرمجيات والمكاملون التقنيون",
        "description": "مرجع نظيف لمخططات URI مثل `WIFI:` و`mailto:` و`vCard 3.0` و`BIP-0021` عند ربط تطبيق جوال."
      }
    ],
    "troubleshooting": {
      "title": "معاييرنا الهندسية الأساسية والتزاماتنا",
      "points": [
        "لن نحتجز رمزًا مطبوعًا كرهينة. الرموز الثابتة دائمة — لا إعادة توجيه، ولا فخ انتهاء صلاحية مدفون في الشروط.",
        "لن نبيع بياناتك. إذ نعمل على جانب العميل، فليس لدينا أصلًا قاعدة بيانات مستخدمين لاستغلالها أو تسليمها لمعلن.",
        "لن نضع جدار دفع على التنزيلات المتجهة. تصدير SVG ضرورة عمل للمصمم، لذلك يبقى مجانيًا للجميع.",
        "سنلتزم بامتثال ISO. يُتحقَّق من كل وحدة ونمط توقيت وعين تحديد مقابل ISO/IEC 18004.",
        "سنواصل دعم الويب المفتوح. أدوات متصفح مجانية وسريعة ومفيدة لأي شخص يحتاجها — هذه هي الفكرة كلها."
      ]
    },
    "faqs": [
      {
        "q": "ما مهمة QR Generator Online؟",
        "a": "وضع توليد رموز QR الدائم والخاص وذي الجودة التجارية في أيدي الجميع مجانًا — دون اشتراك يقف بينك وبين رمز طبعته بالفعل."
      },
      {
        "q": "من أسّس QR Generator Online؟",
        "a": "مجموعة صغيرة من مهندسي البرمجيات ومصممي ما قبل الطباعة ومناصري الخصوصية الذين أرادوا ثقلًا موازنًا صادقًا ومفتوحًا في مواجهة خدمات QR القائمة على الاشتراك."
      },
      {
        "q": "كيف تحمي بنيتك على جانب العميل خصوصية المستخدم؟",
        "a": "يعمل التوليد داخل متصفحك عبر JavaScript من البداية إلى النهاية. عناوين الوجهة وتفاصيل الاتصال وكلمات مرور WiFi لا تصلنا أبدًا، لأنه لا توجد أي استدعاءات خادم لإرسالها."
      },
      {
        "q": "هل يمكن للشركات المؤسسية استخدام QR Generator Online للتغليف التجاري؟",
        "a": "إنهم يفعلون ذلك بالفعل. تضع علامات تجارية تجارية وفرق ما قبل الطباعة كثيرة هذه الرموز المتجهة على العبوات وعلى الواجهات البيعية والكتب وحملات الإعلانات في جميع أنحاء العالم."
      },
      {
        "q": "هل توجد تكاليف خفية أو حسابات Pro أو متطلبات بطاقة ائتمان؟",
        "a": "لا شيء مخفي. كل أداة وكل خيار تنسيق وكل تضمين للشعار وكل تنزيل متجه مجاني لجميع المستخدمين."
      },
      {
        "q": "كيف تضمنون أن تُمسح رموز QR المولّدة بموثوقية على جميع الأجهزة؟",
        "a": "يلتزم المحرك بمعيار ISO/IEC 18004، ويحافظ على المنطقة الهادئة الإلزامية المكونة من 4 وحدات، ويطبق تصحيح Reed-Solomon بالمستوى H حيثما يوضع شعار. هذا المزيج هو ما يجعل الرمز يُقرأ من المحاولة الأولى على جميع الأجهزة."
      },
      {
        "q": "هل يمكنني تقديم ملاحظات أو اقتراح ميزات جديدة؟",
        "a": "من فضلك افعل — مدخلات المجتمع تقود معظم ما نبنيه. صفحة الاتصال هي أسرع طريقة لإرسال فكرة أو طلب ميزة."
      },
      {
        "q": "أين تُستضاف خوادمكم؟",
        "a": "تُقدَّم الأصول الثابتة عبر شبكة CDN عالمية، فتُحمَّل الصفحة بسرعة سواء فتحتها من أمريكا الشمالية أو أوروبا أو آسيا أو أي مكان آخر."
      }
    ],
    "bestPractices": "إذا وفّرت لك الأداة وقتًا، فشاركها — مصمم أو صاحب متجر أو فريق تسويق تعرفه ربما يحتاجها أيضًا."
  },
  '/contact': {
    "sections": [
      {
        "title": "تواصل مع فريق الهندسة والدعم لدينا",
        "paragraphs": [
          "هل لديك أسئلة حول تنسيقات رموز QR المخصصة، أو أفضل ممارسات الطباعة، أو التوليد بالجملة؟ راسلنا على support@qr-generator.online.",
          "يرد فريق الدعم الفني على جميع الاستفسارات خلال 24 ساعة عمل."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الدعم الفني المؤسسي والاستفسارات والمساعدة المجتمعية",
      "paragraphs": [
        "هل تعثرت في مواصفة ما قبل الطباعة، أو في مهمة دفعات كبيرة، أو في ملف SVG متجه لا يناسب InDesign بشكل صحيح، أو في تنسيق بيانات مؤسسي؟ لهذا يوجد فريق الدعم.",
        "يعرف المجيبون طريقهم جيدًا في ISO/IEC 18004، وفي ما قبل طباعة التغليف الفلكسوغرافي، وفي فيزياء المسح البصري، وفي أجهزة فك التشفير داخل iOS (AVFoundation) وAndroid (Google ML Kit). يصل المصممون وطابعو التجارة ومسؤولو التسويق والمطورون جميعًا إلى صندوق الوارد نفسه، ويحصلون على إجابة حقيقية.",
        "اختر القناة المناسبة من الأسفل. يحصل كل استفسار تقني أو تجاري على رد خلال 24 ساعة عمل."
      ]
    },
    "comparisonTable": {
      "title": "قنوات الدعم ومعايير أوقات الاستجابة",
      "headers": [
        "فئة الاستفسار",
        "القناة الموصى بها",
        "متوسط وقت الاستجابة",
        "نطاق المساعدة"
      ],
      "rows": [
        [
          "دعم ما قبل الطباعة والطباعة المتجهة",
          "support@qr-generator.online",
          "أقل من 12 ساعة عمل",
          "تنسيق SVG متجه، والتحقق من DPI، وبروفات ما قبل الطباعة"
        ],
        [
          "الاستفسارات المؤسسية والكميات الكبيرة",
          "support@qr-generator.online",
          "أقل من 12 ساعة عمل",
          "مخططات بيانات مخصصة، وتوليد بالجملة، وتكامل العلامة التجارية"
        ],
        [
          "تقارير الأخطاء والملاحظات التقنية",
          "support@qr-generator.online",
          "أقل من 24 ساعة عمل",
          "توافق المتصفحات، وملاحظات التصيير، وطلبات الميزات"
        ],
        [
          "أسئلة المستخدم العام وطريقة الاستخدام",
          "قاعدة المعرفة وصفحة الأسئلة الشائعة",
          "خدمة ذاتية فورية",
          "أدلة شاملة عن الحجم والتنسيق والمسح"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "راجع قاعدة المعرفة الشاملة لدينا",
        "description": "معظم أسئلة الحجم والطباعة وصيغ الملفات لها إجابة مكتوبة في قاعدة المعرفة والأسئلة الشائعة — يستحق الاطلاع عليها قبل أن ترسل بريدًا."
      },
      {
        "number": 2,
        "title": "جهّز التفاصيل التقنية لاستفسارك",
        "description": "دوّن المخطط الذي تشفّره (URL أو vCard أو WiFi)، والحجم المادي الذي تطبع به، والبرنامج الذي تصمم فيه — Illustrator أو InDesign أو Canva."
      },
      {
        "number": 3,
        "title": "أرسل استفسارك إلى الدعم",
        "description": "راسل الفريق على support@qr-generator.online. يرد متخصص خلال 24 ساعة عمل."
      }
    ],
    "features": [
      {
        "title": "خبرة هندسية مباشرة في ما قبل الطباعة",
        "description": "نصائح من أشخاص أداروا فعلًا سير عمل الأوفست والفلكسو والمكبس الرقمي — لا رد آلي مكتوب مسبقًا من الطبقة الأولى."
      },
      {
        "title": "التزام بالرد السريع خلال 24 ساعة",
        "description": "سواء كان سؤالًا من المجتمع أو استفسارًا مؤسسيًا، فسيُقرأ ويُجاب عليه خلال يوم عمل واحد."
      },
      {
        "title": "قاعدة معرفة شاملة للخدمة الذاتية",
        "description": "عشرات الأدلة المعمقة حول صيغ الحجم وتصحيح الأخطاء واختيار الركيزة — متاحة في أي وقت."
      },
      {
        "title": "دعم مجتمعي ومؤسسي مجاني 100%",
        "description": "سواء كنت صاحب عمل صغير أو منظمة غير ربحية أو مصمم مؤسسة، فالمساعدة واحدة وبلا تكلفة."
      }
    ],
    "sizingMatrix": {
      "title": "مواضيع الدعم الأكثر طلبًا والموارد المباشرة",
      "description": "روابط سريعة إلى موارد تقنية متخصصة للمساعدة الفورية.",
      "headers": [
        "مجال الموضوع",
        "دليل المورد الرئيسي",
        "المعادلة / المعيار الأساسي",
        "الجمهور المستهدف"
      ],
      "rows": [
        [
          "الحجم في الطباعة ومعادلة S = D / 10",
          "الدليل الكامل لطباعة رموز QR",
          "$S = D / 10$",
          "مصممو الجرافيك، وفنيو ما قبل الطباعة"
        ],
        [
          "تنسيق بطاقة العمل بصيغة vCard 3.0",
          "دليل رموز vCard لبطاقات الأعمال",
          "RFC 2426 / RFC 6350",
          "التسويق المؤسسي، وقادة التواصل المهني"
        ],
        [
          "عمليات قوائم الضيافة",
          "دليل رموز QR للمطاعم",
          "HTTPS / منفذ عرض متجاوب مع الجوال",
          "أصحاب المطاعم، ومشغلو الأغذية والمشروبات"
        ],
        [
          "تسويق لافتات العقارات",
          "دليل توليد العملاء المحتملين بـ QR للعقارات",
          "Matterport 3D / S = D / 10",
          "وسطاء العقارات، ومديرو الممتلكات"
        ],
        [
          "إعداد الوصول لشبكة WiFi",
          "دليل رموز WiFi لقطاع الضيافة",
          "بروتوكول URI بصيغة WIFI: (WPA3/WPA2)",
          "مديرو الفنادق، وأصحاب المقاهي، وموظفو تقنية المعلومات"
        ]
      ]
    },
    "useCases": [
      {
        "title": "التحقق من ما قبل طباعة التغليف التجاري",
        "description": "اطلب من الفريق التحقق من أن ملف SVG الخاص بالتغليف يجتاز حدود التباين ISO والمنطقة الهادئة قبل قص الألواح."
      },
      {
        "title": "اللوحات الإعلانية الكبيرة واللافتات الخارجية",
        "description": "احصل على الحجم الدقيق للوحة طريق سريع تُقرأ من 20 إلى 50 مترًا، حتى تُمسح من سيارة متحركة."
      },
      {
        "title": "نشر vCard مؤسسي مخصص",
        "description": "اعرف كيف توحّد رموز بطاقات الأعمال vCard عبر قوة عاملة تضم آلاف الأشخاص."
      },
      {
        "title": "طرح قوائم متعددة المواقع في الضيافة",
        "description": "خطط لطرح قائمة PDF سريعة التحميل عبر شبكة امتيازات دون صداع منفصل لكل موقع."
      },
      {
        "title": "دعم الحملات التعليمية وغير الربحية",
        "description": "احصل على مساعدة في مشروع اختبار صفي أو معرض متحف أو حملة جمع تبرعات."
      }
    ],
    "troubleshooting": {
      "title": "المعلومات التي يجب تضمينها للتعامل السريع مع الدعم",
      "points": [
        "اذكر المولد. أخبرنا بالأداة التي تستخدمها — URL أو vCard أو WiFi أو Google Forms.",
        "أعطِ حجم الطباعة. العرض والارتفاع المقصودان يساعدان كثيرًا، مثل 25 مم × 25 مم على بطاقة عمل.",
        "حدّد مسافة المسح. ما المسافة التقريبية التي سيقف عندها الناس؟ 30 سم لقائمة طعام، أم 3 أمتار للافتة عقار؟",
        "اذكر البرنامج. Illustrator أو InDesign أو Photoshop أو CorelDRAW أو Figma — فهذا يغيّر النصيحة.",
        "أرفق الملف. لمشكلة مسح، أرسل SVG أو PNG المصدَّر حتى نتمكن من فحصه مباشرة."
      ]
    },
    "faqs": [
      {
        "q": "ما سرعة استجابة فريق دعم QR Generator Online؟",
        "a": "خلال 24 ساعة عمل، وغالبًا خلال 12 ساعة في يوم عمل."
      },
      {
        "q": "ما عنوان البريد الرئيسي للدعم؟",
        "a": "يصل support@qr-generator.online مباشرة إلى الفريق التقني."
      },
      {
        "q": "هل تقدمون دعمًا هاتفيًا أو محادثة مباشرة؟",
        "a": "يعمل الدعم عبر البريد الإلكتروني وقاعدة المعرفة لا عبر الهاتف أو المحادثة. وهذا جزء من سبب بقاء الخدمة مجانية بالكامل."
      },
      {
        "q": "هل يمكنكم مساعدتي في مراجعة تصميم الطباعة التجارية قبل إرساله إلى المطبعة؟",
        "a": "بكل سرور. أرسل ملف SVG المتجه أو PDF للبروفة إلى support@qr-generator.online، وسيتحقق فريق ما قبل الطباعة من المنطقة الهادئة والتباين وهندسة الوحدات قبل أن تلتزم."
      },
      {
        "q": "هل يمكنني طلب ميزة مخصصة أو نوع جديد من رموز QR؟",
        "a": "اقتراحات الميزات مرحب بها وتُقرأ فعلًا. أرسل الفكرة إلى فريق المنتج على support@qr-generator.online."
      },
      {
        "q": "هل تفرضون رسوم استشارات أو دعم؟",
        "a": "لا. المساعدة التقنية ومراجعات ما قبل الطباعة وإرشادات طريقة الاستخدام كلها مجانية."
      },
      {
        "q": "أين أجد أدلة الخدمة الذاتية والدروس التعليمية؟",
        "a": "تحتوي صفحتا المدونة والأسئلة الشائعة على أدلة مفصلة حول أحجام الطباعة، وقوائم المطاعم، وجهات اتصال vCard، والوصول عبر WiFi."
      },
      {
        "q": "هل تُحفظ معلومات الاتصال بالعملاء بسرية؟",
        "a": "تمامًا. أي بريد أو تفصيل أو عمل فني تشاركه مع الدعم يبقى سريًا ولا يُشارَك أو يُباع أبدًا."
      }
    ],
    "bestPractices": "اطلع أولًا على الأسئلة الشائعة والمدونة للحصول على جواب فوري، وعند إرسال البريد أدرج أبعاد الطباعة وبرنامج التصميم — فهذا يحوّل تبادل بريدين إلى بريد واحد."
  },
  '/privacy': {
    "sections": [
      {
        "title": "معالجة البيانات على جانب العميل والتخزين الصفري",
        "paragraphs": [
          "يعالج QR Generator Online توليد رموز QR الثابتة محليًا في متصفح الويب الخاص بك. لا نخزّن النص أو كلمات المرور أو معلومات الاتصال التي تشفّرها، ولا نجمعها أو نبيعها.",
          "نلتزم التزامًا صارمًا بلوائح حماية البيانات الدولية، بما فيها GDPR وCCPA."
        ]
      }
    ],
    "technicalOverview": {
      "title": "بنيتنا المعمارية للخصوصية التشفيرية وسياسة سيادة البيانات",
      "paragraphs": [
        "الخصوصية ليست ميزة نضيفها لاحقًا — إنها شكل المنظومة كلها. تجمع معظم منصات SaaS التجارية البيانات، وتتتبع عناوين IP، وتبيع بهدوء ما تتصفحه. تقوم هذه الخدمة على الفرضية المعاكسة تمامًا: معرفة صفرية، وتبقى بياناتك ملكك.",
        "عند إنشاء رمز هنا، تحدث كل خطوة داخل متصفحك. يعمل ترميز Reed-Solomon، وتحويل المصفوفة إلى نقاط، والتصيير المتجه — كل ذلك محليًا في الذاكرة عبر JavaScript وWebAssembly. لا تعبر عناوين URL ولا النصوص ولا جهات اتصال vCard ولا كلمات مرور WiFi ولا الشعارات المرفوعة الشبكة أبدًا، ولا تصل إلى قاعدة بيانات، لأنه لا توجد قاعدة بيانات ولا استدعاء شبكة.",
        "تحدد هذه السياسة المعايير التقنية الكامنة وراء ذلك، وتعهدات عدم التتبع، وكيف يتماشى التصميم كله مع GDPR وCCPA وأطر خصوصية ISO/IEC."
      ]
    },
    "comparisonTable": {
      "title": "بنية الخصوصية في QR Generator Online مقابل منصات QR SaaS التقليدية",
      "headers": [
        "مقياس الخصوصية والبيانات",
        "QR Generator Online (معرفة صفرية)",
        "منصات QR التجارية التقليدية"
      ],
      "rows": [
        [
          "موقع معالجة البيانات",
          "100% على جانب العميل (داخل ذاكرة متصفحك)",
          "قواعد بيانات مركزية على خوادم خارجية"
        ],
        [
          "تسجيل عنوان URL الوجهة",
          "صفر تسجيل (لا نرى أبدًا عنوان URL الوجهة لديك)",
          "تسجل وتخزّن عناوين URL الوجهة كاملة في السحابة"
        ],
        [
          "تتبع عنوان IP للزائر",
          "صفر تتبع لعناوين IP (روابط ثابتة مرمّزة مباشرة)",
          "تتبع وتسجيل عناوين IP لكل من يمسح الرمز"
        ],
        [
          "نقل كلمة مرور WiFi",
          "لا تُنقل عبر الشبكة أبدًا (مخاطرة صفرية)",
          "تُخزَّن بنص غير مشفر أو في قواعد بيانات سحابية"
        ],
        [
          "جمع حسابات المستخدمين والبريد الإلكتروني",
          "لا يُطلب حساب أو بريد أو تسجيل",
          "إنشاء حساب إلزامي ورسائل تسويقية بالبريد"
        ],
        [
          "تحقيق الدخل من بيانات الأطراف الثالثة",
          "لا بيع للبيانات ولا مشاركة مع وسطاء إعلانات",
          "غالبًا ما يحقق دخلًا من تحليلات المسح المجمعة"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "المعالجة المحلية على جانب العميل داخل متصفح الويب",
        "description": "أي شيء تكتبه — رابط أو كلمة مرور أو vCard — يُعالج بالكامل داخل ذاكرة متصفحك، دون أي استدعاء API يخرج إلى خادم."
      },
      {
        "number": 2,
        "title": "صفر تخزين سحابي وصفر تسجيل في قاعدة البيانات",
        "description": "لا توجد لدينا قاعدة بيانات تحتفظ برموزك أو شعاراتك المرفوعة أو روابط وجهاتك. لا يُحتفظ بشيء لأنه لا يُرسل شيء."
      },
      {
        "number": 3,
        "title": "ترميز ثابت مباشر من أجل سيادة دائمة",
        "description": "يشير الرمز المطبوع مباشرة إلى وجهتك، دون وجود وكيل طرف ثالث في المنتصف يسجّل المسح أو يعترضه."
      }
    ],
    "features": [
      {
        "title": "تنفيذ تشفيري 100% على جانب العميل",
        "description": "يعمل التوليد في ذاكرة المتصفح، وهذا ما يُبقي مدخلاتك سرية — فليس لها مكان آخر تذهب إليه."
      },
      {
        "title": "امتثال كامل لـ GDPR وCCPA بالتصميم",
        "description": "عدم جمع أي معلومات شخصية هو أبسط طريق ممكن للامتثال، وهو الطريق الذي اخترناه."
      },
      {
        "title": "صفر تتبع للماسحين أو المستخدمين النهائيين",
        "description": "يصل الأشخاص الذين يمسحون رمزك إلى موقعك مباشرة. لا قفزة تتبع، ولا ملف تعريف ارتباط يُوضع عليهم في الطريق."
      },
      {
        "title": "لا إنشاء حساب ولا جمع بريد إلكتروني",
        "description": "أنشئ وحمّل ما تشاء بشكل مجهول — فليس هناك تسجيل دخول من الأساس."
      }
    ],
    "sizingMatrix": {
      "title": "تفصيل تدفق البيانات وأمان النقل",
      "description": "تحقق تقني من كيفية التعامل مع البيانات عبر كل نوع من مولدات QR في QR Generator Online.",
      "headers": [
        "نوع مولد QR",
        "نطاق بيانات الإدخال",
        "طريقة المعالجة",
        "حالة التخزين على الخادم"
      ],
      "rows": [
        [
          "مولد QR للروابط",
          "عنوان الويب المستهدف وUTMs",
          "ترجمة UTF-8 على جانب العميل",
          "0 بايت مخزّن (صفر إرسال إلى الخادم)"
        ],
        [
          "مولد QR لـ WiFi",
          "معرّف SSID وكلمات مرور WPA2/WPA3",
          "ترميز سلسلة WIFI: على جانب العميل",
          "0 بايت مخزّن (لا يغادر المتصفح أبدًا)"
        ],
        [
          "مولد QR لـ vCard",
          "الاسم والهواتف والبريد الإلكتروني والعنوان",
          "تحليل RFC 6350 على جانب العميل",
          "0 بايت مخزّن (صفر حصاد لدفتر العناوين)"
        ],
        [
          "WhatsApp / SMS / الهاتف",
          "أرقام الهواتف ونص الرسالة",
          "توليف سلسلة URI على جانب العميل",
          "0 بايت مخزّن (صفر تسجيل لجهات الاتصال)"
        ],
        [
          "مولد QR للعملات الرقمية",
          "عنوان استقبال المحفظة العام",
          "توليف URI من BIP-0021 على جانب العميل",
          "0 بايت مخزّن (المفاتيح الخاصة لا تُمس أبدًا)"
        ],
        [
          "رفع الشعارات والصور",
          "أعمال العلامة التجارية بصيغ PNG وSVG وJPEG",
          "تصيير HTML5 Canvas على جانب العميل",
          "0 بايت مخزّن (صفر رفع للصور)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "الرعاية الصحية وسرية المرضى (HIPAA)",
        "description": "أنشئ رموز استقبال المرضى وروابط العيادات دون أي خطر أن تنتقل المعلومات الصحية المحمية إلى خادم."
      },
      {
        "title": "السرية القانونية والمؤسسية للشركات",
        "description": "أنشئ روابط داخلية لاجتماعات مجلس الإدارة أو مستندات التقاضي مع الحفاظ على سيادة البيانات المؤسسية الكاملة."
      },
      {
        "title": "المنشآت الحكومية ومتعاقدو الدفاع",
        "description": "وزّع بطاقات WiFi للزوار داخل منشأة آمنة دون أن تغادر أي بيانات اعتماد مصنفة الغرفة."
      },
      {
        "title": "الخدمات المالية وتحويلات العملات الرقمية",
        "description": "أنشئ رمز دفع على البلوكتشين مع العلم بأن عنوان المحفظة والمبلغ يبقيان بصرامة على جهازك."
      },
      {
        "title": "التسويق للعلامات الاستهلاكية وبناء الثقة",
        "description": "أخبر العملاء المهتمين بالخصوصية، بصدق، أن مسح رمز حملتك لن يتتبع أين هم."
      }
    ],
    "troubleshooting": {
      "title": "كيفية التحقق من الخصوصية على جانب العميل في متصفحك",
      "points": [
        "راقب تبويب الشبكة. افتح أدوات المطور (F12) وانظر إلى Network أثناء توليد رمز أو رفع شعار. لا شيء يخرج — لا POST ولا GET يحمل بياناتك.",
        "افصل الكابل. حمّل الصفحة، ثم افصل WiFi والشبكة الخلوية، ثم أنشئ رمزًا. يظهر فورًا وأنت بلا اتصال، وهذا لا يحدث إلا إذا كان كل شيء يعمل في متصفحك.",
        "فك تشفير رمزك. اقرأ رمز URL الذي أنشأته بأي تطبيق ماسح. سيكون النص المفكوك هو عنوان URL الدقيق لديك، دون أي نطاق إعادة توجيه ملفوف حوله.",
        "ابحث عن أدوات التتبع. صفحات المولد لا تحمّل بكسلات تتبع سلوكي ولا نصوص وسطاء بيانات.",
        "أغلق التبويب. لأن البيانات تعيش في ذاكرة متطايرة، فإن إغلاق التبويب يمسح كل ما أدخلته."
      ]
    },
    "faqs": [
      {
        "q": "هل يخزّن QR Generator Online عناوين URL أو كلمات المرور أو تفاصيل الاتصال الخاصة بي؟",
        "a": "لا يُخزَّن أي شيء تدخله. يتم التوليد بالكامل في ذاكرة متصفحك، فلا يُرسل أي جزء منه أبدًا إلى خادم ولا يُحفظ عليه."
      },
      {
        "q": "هل تتتبعون عدد الأشخاص الذين يمسحون رموز QR الخاصة بي؟",
        "a": "لا نستطيع، وهذا مقصود بالتصميم. يرتبط الرمز الثابت مباشرة بوجهتك دون خادم إعادة توجيه في المنتصف، لذلك لا توجد نقطة يمكن عندها عد المسح أو تسجيله."
      },
      {
        "q": "هل يتوافق QR Generator Online مع لوائح GDPR وCCPA؟",
        "a": "بالكامل. لا تُجمع معلومات شخصية أو تُخزّن أو تُعالَج، ولا تُسجَّل عناوين IP للماسحين — لذلك لا يوجد ما تستطيع تلك اللوائح الإشارة إليه."
      },
      {
        "q": "هل تُخزَّن صور الشعارات التي أرفعها على خوادم الويب لديكم؟",
        "a": "لا تُرفع على الإطلاق. يُدمج الشعار محليًا عبر واجهة HTML5 Canvas داخل متصفحك، فلا تصل الصورة أبدًا إلى خادم خارجي."
      },
      {
        "q": "هل من الآمن توليد رموز QR لـ WiFi تحتوي على كلمة مرور جهاز التوجيه الخاص بي؟",
        "a": "نعم. يُجمَّع اسم الشبكة وكلمة المرور محليًا ويُكتبان مباشرة في نمط الباركود. ولا يُرسل أي منهما عبر الإنترنت أبدًا."
      },
      {
        "q": "هل تبيعون بيانات المستخدمين للمعلنين من الأطراف الثالثة أو لوسطاء البيانات؟",
        "a": "لا يوجد ما يُباع. لا توجد قاعدة بيانات مستخدمين، ولا ملفات حسابات، ولا سجلات تتبع يمكن تسليمها لأحد."
      },
      {
        "q": "هل تستخدمون ملفات تعريف الارتباط (الكوكيز) في QR Generator Online؟",
        "a": "فقط النوع التقني الأدنى اللازم لعمل الموقع. لا تُستخدم أي ملفات إعلانية سلوكية من أطراف ثالثة."
      },
      {
        "q": "من يمكنني الاتصال به بشأن استفسارات الخصوصية؟",
        "a": "يجيب فريق حماية البيانات عن أسئلة الخصوصية والامتثال مباشرة على support@qr-generator.online."
      }
    ],
    "bestPractices": "يمكنك التوليد بحرية هنا دون قلق — فالعملية تتم على جانب العميل من البداية إلى النهاية، وتبقى مستقلة عن أي خادم تابع لطرف ثالث."
  },
  '/terms': {
    "sections": [
      {
        "title": "شروط الاستخدام العادل والتوزيع التجاري",
        "paragraphs": [
          "يمكن استخدام رموز QR الثابتة التي تُولَّد عبر QR Generator Online بحرية لأغراض شخصية وتجارية على حد سواء، عبر الوسائط المطبوعة والرقمية.",
          "يتحمل المستخدمون مسؤولية التأكد من أن المحتوى المرمّز يمتثل للمعايير القانونية المعمول بها."
        ]
      }
    ],
    "technicalOverview": {
      "title": "شروط الخدمة والترخيص التجاري وإطار الاستخدام",
      "paragraphs": [
        "استخدام QR Generator Online يعني الموافقة على شروط الخدمة واتفاقية الترخيص التجاري وسياسة الاستخدام المقبول الموضحة أدناه.",
        "تُولّد المنصة باركودات ثنائية الأبعاد وفق معيار ISO/IEC 18004، على جانب العميل ومجانًا. وما تنشئه يأتي معه حقوق كاملة وغير مقيدة وخالية من الإتاوات للاستخدام التجاري والشخصي، تُمنح لك إلى الأبد — دون حاجة إلى شراء ترخيص منفصل لاحقًا.",
        "تغطي الأقسام التالية الملكية الفكرية، والاستخدام المقبول، وتحديد المسؤولية، والتنصل المتعلق بإنتاج الطباعة التجارية. ومن الأفضل قراءتها قبل أي دفعة كبيرة."
      ]
    },
    "comparisonTable": {
      "title": "ملخص شروط الترخيص التجاري",
      "headers": [
        "فئة الترخيص",
        "الشروط والأذونات في QR Generator Online",
        "خدمات الباركود التجارية التقليدية"
      ],
      "rows": [
        [
          "حقوق الاستخدام التجاري",
          "حقوق تجارية 100% غير مقيدة وخالية من الإتاوات",
          "تتطلب مستوى ترخيص تجاريًا مدفوعًا (300 دولار فأكثر سنويًا)"
        ],
        [
          "الإتاوات / رسوم المسح",
          "0.00 دولار (صفر إتاوات أو رسوم لكل مسح)",
          "رسوم تجاوز عندما يتجاوز حجم المسح الحدود الشهرية"
        ],
        [
          "ملكية الملكية الفكرية",
          "أنت تملك 100% من جميع أعمال QR والبيانات المولّدة",
          "تحتفظ المنصة بالحقوق أو تطالب بعمليات إعادة توجيه مملوكة"
        ],
        [
          "نطاق إعادة إنتاج الطباعة",
          "غير مقيد (التغليف، والكتب، واللوحات الإعلانية، والتلفزيون)",
          "مقيّد حسب توزيع الطباعة أو حدود المستوى"
        ],
        [
          "مخاطرة إلغاء الحساب",
          "مخاطرة صفرية (الرموز الثابتة لها صلاحية دائمة)",
          "تُعطَّل الرموز إذا أُلغي الاشتراك"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "أنشئ عمل رمز QR المخصص الخاص بك",
        "description": "ابنِ الرمز بأي مولّد هنا، مع التنسيق والشعار."
      },
      {
        "number": 2,
        "title": "احصل فورًا على ترخيص تجاري عالمي",
        "description": "في اللحظة التي يُولَّد فيها، تحمل ترخيصًا دائمًا وخاليًا من الإتاوات وعالميًا لاستخدامه على أي وسيط، ماديًا كان أو رقميًا."
      },
      {
        "number": 3,
        "title": "انشره عبر المنتجات والحملات التجارية",
        "description": "ضعه على عبوة، أو في إعلان تلفزيوني، أو على عرض تجزئة، أو في حملة إعلانية. لا توجد رسوم ترخيص مرتبطة بأي من ذلك."
      }
    ],
    "features": [
      {
        "title": "ترخيص تجاري دائم وخالٍ من الإتاوات",
        "description": "استخدم الرموز عبر المنتجات والكتب والتغليف والوسائط الرقمية في جميع أنحاء العالم دون أي رسوم مستمرة."
      },
      {
        "title": "ملكية كاملة للأصول المولّدة",
        "description": "تصميم الباركود وأي عمل فني مخصص بداخله ملكك وحدك على سبيل الحصر."
      },
      {
        "title": "صفر قفل للبائع أو اعتماد على الخدمة",
        "description": "الرموز الثابتة المرمّزة مباشرة لا تعتمد علينا. لا يمكن لأي تغيير مستقبلي في السياسة أن يعود إلى الوراء ويكسر شيئًا طبعته بالفعل."
      },
      {
        "title": "إخلاء مسؤولية شفاف عن جودة ما قبل الطباعة",
        "description": "إرشاد واضح حول اختبار البروفات قبل تشغيل الطباعة، دون أن يُخفى شيء في الحروف الصغيرة."
      }
    ],
    "sizingMatrix": {
      "title": "حالات الاستخدام التجاري المسموح بها والتطبيقات",
      "description": "نظرة شاملة على التطبيقات التجارية المسموح بها في QR Generator Online.",
      "headers": [
        "التطبيق التجاري",
        "حالة الترخيص",
        "النطاق المسموح",
        "الإتاوات المطلوبة"
      ],
      "rows": [
        [
          "تغليف المنتجات بالتجزئة وملصقات الأغذية",
          "مسموح به إلى الأبد",
          "توزيع وحدات عالمي غير محدود",
          "0.00 دولار (لا شيء)"
        ],
        [
          "الإعلانات التجارية التلفزيونية والبث المباشر",
          "مسموح به إلى الأبد",
          "بث ووسائط بث عالمية",
          "0.00 دولار (لا شيء)"
        ],
        [
          "الكتب والمجلات والمنشورات المطبوعة",
          "مسموح به إلى الأبد",
          "توزيع مطبوع عالمي غير محدود",
          "0.00 دولار (لا شيء)"
        ],
        [
          "اللوحات الإعلانية الخارجية وإعلانات النقل",
          "مسموح به إلى الأبد",
          "حملات خارجية وطنية ودولية",
          "0.00 دولار (لا شيء)"
        ],
        [
          "القرطاسية المؤسسية وبطاقات الأعمال الذكية",
          "مسموح به إلى الأبد",
          "توزيع غير محدود بين الموظفين",
          "0.00 دولار (لا شيء)"
        ],
        [
          "البرمجيات وتطبيقات الجوال وواجهات الويب",
          "مسموح به إلى الأبد",
          "مدمج في SaaS والويب وتطبيقات الجوال",
          "0.00 دولار (لا شيء)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "مصنّعو السلع الاستهلاكية والتجار بالتجزئة",
        "description": "اطبع رموزًا متجهة دائمة على ملايين الكراتين والزجاجات بيقين قانوني، ودون إتاوات تحتاج إلى تتبع."
      },
      {
        "title": "الناشرون ودور النشر التعليمية",
        "description": "أدرج رموزًا قابلة للمسح في الكتب المدرسية والروايات وأوراق العمل بموجب حقوق طباعة دائمة."
      },
      {
        "title": "وكالات الإعلان الوطنية ووسائل الإعلام",
        "description": "أطلق إعلانات تلفزيونية وصفحات مجلات وحملات لوحات دون أي مخاطر ترخيص تحوم حولها."
      },
      {
        "title": "امتيازات الضيافة وسلاسل المطاعم",
        "description": "وحّد رموز القائمة الرقمية ودفع الطاولة عبر مئات المواقع."
      },
      {
        "title": "المبدعون والفنانون والمؤلفون المستقلون",
        "description": "أضف رمزًا بعلامة تجارية إلى المطبوعات الفنية أو البضائع أو كتاب منشور ذاتيًا دون أي عائق ميزانية."
      }
    ],
    "troubleshooting": {
      "title": "سياسة الاستخدام المقبول وإخلاء مسؤولية الطباعة في ما قبل الطباعة",
      "points": [
        "لا محتوى ضار. لا يجوز للرموز أن تشير إلى مواقع تصيّد أو برمجيات خبيثة أو احتيال أو مواد غير قانونية.",
        "تحقق قبل الطباعة. مسح بروفة مادية قبل التشغيل الكبير مسؤوليتك أنت، وهو أفضل طريقة لتجنب إعادة طباعة مكلفة.",
        "أبقِ الوجهة فعّالة. أنت مسؤول عن ضمان أن يظل عنوان URL الذي يشير إليه الرمز متاحًا ومتصلًا بالإنترنت.",
        "احترم العلامات التجارية. ضع فقط شعارًا تملك حق استخدامه.",
        "الخدمة تُقدَّم \"كما هي\". نلتزم بمعيار ISO/IEC 18004، لكننا لا نستطيع ضمان معايرة طابعة طرف ثالث، لذلك فإن الفحص النهائي للبروفة يقع على عاتقك."
      ]
    },
    "faqs": [
      {
        "q": "هل يمكنني استخدام رموز QR المولّدة في QR Generator Online للمنتجات التجارية؟",
        "a": "بحرية وفي كل مكان في العالم. لديك حقوق كاملة وغير مقيدة وخالية من الإتاوات لوضعها على العبوات والكتب وعروض التجزئة والوسائط الرقمية."
      },
      {
        "q": "هل أدين بأي إتاوات أو رسوم لكل مسح مع نمو عملي؟",
        "a": "ولا فلس واحد. كل رمز مجاني، دون إتاوة، ودون حد للمسح، ودون رسوم تتصاعد مع حجمك."
      },
      {
        "q": "من يملك الملكية الفكرية لرمز QR المولّد؟",
        "a": "أنت — الباركود وأي شعار أو نص مضمّن فيه ملك لك بالكامل."
      },
      {
        "q": "هل يمكنني توليد رموز QR لعملاء التصميم الخاصين بي وأتقاضى منهم رسومًا؟",
        "a": "بالتأكيد. الوكالات والمستقلون والاستشاريون مرحب بهم في توليد الرموز لأعمال العملاء المدفوعة."
      },
      {
        "q": "ماذا يحدث إذا تغيّر QR Generator Online في المستقبل؟",
        "a": "ما نزّلته بالفعل يستمر في العمل. يحتفظ الرمز الثابت ببياناته داخل المصفوفة نفسها، دون أي اعتماد على خوادمنا — لذلك لا يؤثر مستقبلنا على رموزك المطبوعة."
      },
      {
        "q": "هل توجد قيود على المحتوى الذي يمكنني ترميزه؟",
        "a": "فقط القيود الواضحة: لا برمجيات خبيثة، ولا تصيّد، ولا احتيال، ولا مواد غير قانونية، كما تنص سياسة الاستخدام المقبول."
      },
      {
        "q": "ما هو حدّ مسؤوليتكم فيما يتعلق بتشغيلات الطباعة التجارية؟",
        "a": "كما هو معتاد في البرمجيات، تُقدَّم الأدوات \"كما هي\". امسح بروفة مادية قبل الموافقة على طلب تجاري كبير — هذا الفحص هو ضمانتك."
      },
      {
        "q": "كيف أتواصل مع فريقكم القانوني أو فريق التراخيص؟",
        "a": "تُرسل الاستفسارات القانونية والمتعلقة بالتراخيص إلى support@qr-generator.online."
      }
    ],
    "bestPractices": "امسح بروفة مطبوعة قبل أن توافق على تشغيل كبير الحجم، وأبقِ عناوين URL الوجهة فعّالة — فالرمز لا يساوي إلا قيمة الصفحة التي يشير إليها."
  },
  '/blog': {
    "sections": [
      {
        "title": "أدلة عملية لرموز QR من أجل نمو الأعمال",
        "paragraphs": [
          "تصفح مكتبتنا من الدروس التفصيلية التي تغطي تحسين قوائم المطاعم، وصيغ الحد الأدنى لحجم الطباعة، وتوليد العملاء المحتملين عبر لافتات العقارات، وإعدادات WiFi للضيوف في قطاع الضيافة.",
          "تعرّف على كيفية استفادة العلامات الحديثة من تقنية QR لدفع التفاعل من العالم المادي إلى الرقمي."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الموسوعة الشاملة والدليل العملي لتقنية QR الحديثة",
      "paragraphs": [
        "هذا هو مركز المعرفة الخاص بـ QR Generator Online — المكان الذي تحصل فيه على إجابات واضحة حول هندسة الباركود، وتسويق QR عبر الجوال، ومعايير الطباعة التجارية، ومشاركة جهات الاتصال. تعمل رموز QR وفق معيار ISO/IEC 18004، وخلال أكثر من عشرين عامًا انتقلت من تتبع قطع السيارات على خط التجميع إلى أن تكون الجسر بين صفحة مطبوعة وخدمة سحابية أو دفعة أو موقع جوال.",
        "أيًا كنت — مدير علامة تجارية يطلق تغليفًا للتجزئة، أو صاحب مطعم يبسط طلبات الطاولات، أو مصمم ما قبل الطباعة يحارب هامش النزف، أو مهندسًا يربط مخطط URI — تمنحك الأدلة هنا الصيغ الفعلية وتفاصيل البروتوكول وسير العمل، لا البريق التسويقي.",
        "تغطي الأدلة المتعمقة أدناه فيزياء الحجم، ورياضيات تصحيح الأخطاء، وجانب الخصوصية، وتكتيكات التحويل."
      ]
    },
    "comparisonTable": {
      "title": "نظرة عامة على أدلة رموز QR الأساسية وتطبيقات القطاعات",
      "headers": [
        "القطاع / المجال",
        "مجال التركيز الأساسي",
        "المعايير التقنية الرئيسية",
        "الفائدة التجارية الأساسية"
      ],
      "rows": [
        [
          "الضيافة والمطاعم",
          "قوائم PDF رقمية بلا تلامس وطلب الطاولات",
          "HTTPS، والروابط الشاملة، ومنافذ العرض المتجاوبة",
          "صفر تكاليف طباعة، ودوران طاولات أعلى بنسبة 25%"
        ],
        [
          "إنتاج الطباعة التجارية",
          "فيزياء الحجم ومعايير DPI ونسب التباين",
          "ISO/IEC 18004، وتباين WCAG 2.1 (> 4.5:1)، وSVG/EPS",
          "موثوقية مسح من المحاولة الأولى على جميع الركائز بنسبة 100%"
        ],
        [
          "الشركات والتواصل المهني",
          "بطاقات أعمال رقمية لجهات الاتصال بصيغة vCard 3.0",
          "RFC 2426، وRFC 6350، وترميز UTF-8",
          "احتفاظ أعلى بجهات الاتصال بنسبة 88%، وحفظ العنوان بنقرة واحدة"
        ],
        [
          "تسويق العقارات",
          "لافتات الممتلكات، وجولات 3D الافتراضية، واستفسارات القوائم",
          "روابط Matterport 3D، وتتبع UTM، وطباعة عالية الدقة",
          "توليد عملاء محتملين على مدار الساعة من المشترين المارّين بالسيارة"
        ],
        [
          "إدارة WiFi للضيوف",
          "وصول إلى شبكة WPA3/WPA2 دون احتكاك",
          "مخطط URI بصيغة WIFI:، ومعايير IEEE 802.11ax/ac",
          "صفر كلمات مرور مكتوبة بخطأ، وعبء أقل على دعم الموظفين"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "اختر البروتوكول الأمثل لحالة استخدامك",
        "description": "حدّد أولًا ما تحتاجه المهمة — رابط ويب ثابت (HTTPS)، أو بطاقة اتصال (vCard)، أو WiFi فوري (WIFI:)، أو رسالة مباشرة (WhatsApp/SMS). البروتوكول يحدد كل ما بعده."
      },
      {
        "number": 2,
        "title": "طبّق قواعد الحجم والتباين الرياضية",
        "description": "حدد حجم الرمز باستخدام S = D / 10 وفق المسافة التي سيمسح منها الناس، وحافظ على التباين فوق 4.5:1."
      },
      {
        "number": 3,
        "title": "صدّر ملفات متجهة بدون فقد وأجرِ اختبارات مادية",
        "description": "صدّر SVG متجهًا لأي شيء يُطبع، ثم امسح بروفة مادية على عدة آيفونات وأجهزة Android قبل الشحن."
      }
    ],
    "features": [
      {
        "title": "تحليل تقني متعمق للبروتوكولات",
        "description": "تفاصيل RFC وISO الكامنة وراء توليد الباركود ثنائي الأبعاد وكيفية تحليل كاميرا الهاتف لها — مشروحة بتفصيل، لا مُتصفَّحة سريعًا."
      },
      {
        "title": "صيغ عملية لإنتاج الطباعة",
        "description": "معادلات الحجم الفعلية، ومعايير تصحيح الأخطاء، ونصائح الركيزة التي تحتاجها مهمة المكبس فعلًا."
      },
      {
        "title": "تحليل عائد الاستثمار عبر القطاعات",
        "description": "أدلة عملية للضيافة والطباعة التجارية والتواصل المؤسسي والعقارات والرعاية الصحية."
      },
      {
        "title": "معرفة مجانية 100% ومفتوحة الوصول",
        "description": "دروس مجانية وقوالب متجهة وأدلة خبراء — دون جدار دفع ودون تسجيل."
      }
    ],
    "sizingMatrix": {
      "title": "ورقة مرجعية رئيسية للحجم البصري ومسافة المشاهدة",
      "description": "دليل مرجعي سريع لحساب أبعاد الحد الأدنى لرموز QR على جميع الوسائط المادية.",
      "headers": [
        "الوسيط المادي",
        "مسافة المسح المعتادة",
        "الحد الأدنى للعرض (S)",
        "تصحيح الأخطاء الموصى به"
      ],
      "rows": [
        [
          "بطاقات الأعمال والشارات",
          "15 سم - 30 سم (6\" - 12\")",
          "25 مم × 25 مم (1.0\" × 1.0\")",
          "المستوى Q (25%) أو المستوى H (30%)"
        ],
        [
          "الأوتاد المكتبية والمحارم",
          "30 سم - 50 سم (12\" - 20\")",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "المستوى M (15%) أو المستوى H (30%)"
        ],
        [
          "عبوات المنتجات والملصقات",
          "20 سم - 40 سم (8\" - 16\")",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "المستوى H (30%) إذا كان الشعار مضمّنًا"
        ],
        [
          "المنشورات والملصقات والمجلات",
          "50 سم - 150 سم (20\" - 60\")",
          "60 مم - 150 مم (2.4\" - 6.0\")",
          "المستوى M (15%)"
        ],
        [
          "أساطيل المركبات والشاحنات",
          "3.0 م - 6.0 م (10 قدم - 20 قدم)",
          "300 مم × 300 مم (12\" × 12\")",
          "المستوى H (30%) على فينيل مصبوب"
        ],
        [
          "لوحات الطرق السريعة",
          "15.0 م - 30.0 م (50 قدم - 100 قدم)",
          "1500 مم - 3000 مم (5 أقدام - 10 أقدام)",
          "المستوى L (7%) أو المستوى M (15%)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "فرق التسويق متعدد القنوات للمؤسسات",
        "description": "وحّد تصميم QR وتتبع حملات UTM وإخراج ما قبل الطباعة المتجه عبر أقسام التسويق العالمية."
      },
      {
        "title": "مطابع الطباعة التجارية وبيوت ما قبل الطباعة",
        "description": "تحقق من أعمال العملاء الفنية مقابل ISO/IEC 18004 وعتبة 300+ DPI وحدود التباين قبل تشغيل المكبس."
      },
      {
        "title": "مشغلو الضيافة وسلاسل المطاعم",
        "description": "طبّق قوائم بلا تلامس وطلبًا على الطاولة يقلّل أعباء الموظفين ويسرّع دوران الطاولات."
      },
      {
        "title": "شركات العقارات ومديرو الممتلكات",
        "description": "حوّل لافتة الموقع أو المنشور إلى مصدر عملاء محتملين قابل للقياس على مدار الساعة، ومركز لجولات 3D."
      },
      {
        "title": "منظمو الفعاليات ومنسقو المعارض التجارية",
        "description": "سرّع تسجيل الوصول، وأضف الجلسات إلى تقاويم الحضور، وبادل البطاقات الرقمية، وانسب حركة الرعاة إلى مصدرها."
      }
    ],
    "troubleshooting": {
      "title": "أكثر 5 إخفاقات شيوعًا في إنتاج رموز QR",
      "points": [
        "تباين ضعيف. الوحدات الباهتة على ورق فاتح تهزم الكاميرا. حافظ على 4.5:1 أو أعلى.",
        "منطقة هادئة مقصوصة. إذا قصصت الهامش قريبًا جدًا، فلن يجد الماسح حد الرمز.",
        "صورة نقطية بدقة 72 DPI. لقطة ويب منخفضة الدقة تُضبّب حواف الوحدات عند الطباعة. قدّم SVG متجهًا أو صورة نقطية بدقة 300+ DPI.",
        "عنوان URL طويل بشكل مفرط. رابط بطول 250 حرفًا يصنع نقاطًا متناهية الصغر تتلطخ عند الطباعة بحجم صغير. قصّره.",
        "وهج اللمعان. الطلاء اللامع يرمي بقع ضوء في العدسة. اختر مطفأ أو ساتانيًا."
      ]
    },
    "faqs": [
      {
        "q": "ما الغرض من مركز المعرفة في QR Generator Online؟",
        "a": "وُجد ليمنح الشركات والمصممين والمطورين الأدلة التقنية والصيغ ودراسات الحالة اللازمة لإطلاق رموز QR تُمسح فعلًا — العمق الذي كنت ستجمعه بخلاف ذلك من عشرات المصادر."
      },
      {
        "q": "هل الدروس والأدلة في هذه المدونة مجانية تمامًا؟",
        "a": "كل دليل ومعيار وأداة متجهة هنا مجانية ومفتوحة — لا جدار دفع ولا حساب."
      },
      {
        "q": "ما عدد مرات تحديث أدلة تقنية QR لديكم؟",
        "a": "تُراجع المقالات مع تغير مفكِّكات الكاميرا في iOS وAndroid، وتحرك معايير ISO، وتتغير ممارسات التسويق عبر الجوال."
      },
      {
        "q": "هل يمكنني طلب دليل أو درس مخصص حول موضوع QR معين؟",
        "a": "أرسل الموضوع عبر صفحة الاتصال وسينظر فريق التحرير فيه."
      },
      {
        "q": "هل تغطي أدلتكم بنيتي رموز QR الثابتة والديناميكية؟",
        "a": "نعم — بما في ذلك تحليل كامل للمفاضلة بين الرمز الثابت ذي الاعتماد الصفري وإعادة التوجيه الديناميكية."
      },
      {
        "q": "أين أجد إرشادات محددة للحجم لمشروع الطباعة الخاص بي؟",
        "a": "يحتوي \"الدليل الكامل لطباعة رموز QR\" على جداول الحجم ونصائح الركيزة ومعادلات DPI لهذا الغرض تحديدًا."
      },
      {
        "q": "كيف أضمن أن تتوافق رموز QR الخاصة بي مع لوائح الخصوصية على الجوال؟",
        "a": "تعتمد الأدلة على التوليد الثابت على جانب العميل، الذي يعالج كل شيء في ذاكرة المتصفح — لا عناوين IP للزوار مسجلة، ولا تحليلات تُتبَّع، لذلك يوجد القليل مما قد تشير إليه لوائح الخصوصية."
      },
      {
        "q": "هل يمكنني مشاركة هذه المقالات والموارد مع فريقي؟",
        "a": "من فضلك افعل — الزملاء وفرق التسويق والوكالات وأقسام ما قبل الطباعة هم بالضبط من أُعدّت لهم."
      }
    ],
    "bestPractices": "أضف هذا المركز إلى المفضلة للحصول على صيغ الحجم ومعايير التباين وقائمة التحقق لما قبل الطباعة — وهي الأشياء التي تستحق المراجعة قبل خروج أي عمل طباعة تجاري."
  },
  '/blog/qr-codes-for-restaurants': {
    "sections": [
      {
        "title": "التحول إلى القوائم الرقمية بلا تلامس",
        "paragraphs": [
          "في الضيافة الحديثة، السرعة ودقة الخدمة أساسيتان. تتيح قوائم QR الرقمية على بطاقات الطاولات للضيوف الاطلاع على خيارات الطعام والشراب المحدّثة فور جلوسهم.",
          "تقلل المطاعم نفقات إعادة الطباعة كلما تغيرت الأسعار، وتبرز في الوقت نفسه الأطباق الموسمية والأطباق عالية الهامش."
        ]
      },
      {
        "title": "كيفية إعداد قائمة طعام برمز QR لمطعمك",
        "paragraphs": [
          "يستغرق البدء أقل من خمس دقائق. ارفع قائمة PDF الحالية أو اربط صفحة الطلب الإلكتروني، ثم أنشئ رمز QR بعلامة تجارية مع شعار مطعمك في المنتصف. اطبعه على بطاقات طاولة مقاومة من الورق المُغلّف أو ملصقات نوافذ أو في أسفل إيصالات.",
          "تُظهر الدراسات أن المطاعم التي تستخدم قوائم QR رقمية تسجل زيادة متوسطة بنسبة 15% في متوسط قيمة الطلب، لأن الضيوف يتصفحون القائمة كاملة بوتيرتهم الخاصة بدلًا من الاعتماد على عروض شفهية. تحديث العناصر أو الأسعار أو العروض الموسمية فوري — دون إعادة طباعة. قرن كل رمز QR بعبارة قصيرة للحث على الفعل مثل «امسح لعرض القائمة الكاملة لليوم» للحصول على أفضل النتائج."
        ]
      }
    ],
    "technicalOverview": {
      "title": "دليل شامل لقوائم رموز QR وعمليات تناول الطعام بلا تلامس",
      "paragraphs": [
        "بدأت قائمة QR كإجراء مؤقت أثناء الجائحة، وبقيت معيارًا تشغيليًا. تعمل عبر HTTPS عادي: يوجّه الرمز متصفح هاتف الضيف إلى قائمة PDF مستضافة في السحابة أو بوابة طلب أو صفحة دفع، دون تنزيل أي تطبيق أولًا.",
        "الاقتصاد هو ما يُبقيها قائمة. تُلغي القائمة الرقمية التكلفة المتكررة لإعادة الطباعة — عادةً بين 1,500 و4,000 دولار سنويًا لكل موقع — وتتيح لك تغيير سعر أو عرض خلال ثوانٍ، وتقلل أخطاء الطلبات، وترفع متوسط الفاتورة بنسبة تتراوح بين 12% و22% بمجرد أن يرى الضيوف الطعام ويتلقون تنبيه الترقية.",
        "لا يتحقق أي من ذلك دون إتقان الجانب المادي. يحدد الموضع ومتانة بطاقة الطاولة والإضاءة وصفحة متجاوبة مع الجوال ما إذا كان الضيف، مهما كان عمره، سيمسح الرمز بضغطة واحدة أم سيستسلم."
      ]
    },
    "comparisonTable": {
      "title": "قائمة رمز QR الرقمية مقابل القائمة الورقية التقليدية المُغلّفة",
      "headers": [
        "العامل التشغيلي",
        "قائمة رمز QR الرقمية",
        "القائمة الورقية المُغلّفة التقليدية"
      ],
      "rows": [
        [
          "تكلفة إعادة الطباعة السنوية",
          "0 دولار (تُحدَّث فورًا على الإنترنت)",
          "من 1,500 إلى 4,000 دولار أو أكثر لكل موقع سنويًا"
        ],
        [
          "سرعة تحديث القائمة",
          "فوري (يُزال الصنف المنتهي في ثوانٍ)",
          "أيام إلى أسابيع لإعادة التصميم وإعادة الطباعة"
        ],
        [
          "سرعة دوران الطاولات",
          "أسرع بـ 15 - 25 دقيقة لكل جلسة",
          "أبطأ بسبب انتظار القوائم الورقية والفاتورة"
        ],
        [
          "متوسط قيمة الطلب",
          "أعلى بنسبة 12% - 22% (تصوير بصري للطعام)",
          "نص ثابت بقدرة محدودة على البيع الإضافي"
        ],
        [
          "النظافة والصحة",
          "بلا تلامس بنسبة 100% على جهاز الضيف الخاص",
          "يتطلب تعقيمًا بعد كل استخدام من ضيف"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "استضف قائمتك المحسّنة للجوال على الإنترنت",
        "description": "ضع القائمة على الإنترنت كصفحة متجاوبة خفيفة أو ملف PDF مضغوط بحجم أقل من 3 ميغابايت، مستضافة على موقعك."
      },
      {
        "number": 2,
        "title": "أنشئ رمز QR بعلامة تجارية مع تصحيح أخطاء من المستوى H",
        "description": "الصق رابط القائمة في المولّد، وطبّق ألوانك، وضع شعارك في المنتصف بالمستوى H، وصدّر SVG متجهًا."
      },
      {
        "number": 3,
        "title": "اطبع على أكريليك أو خشب أو ورق مقوى مُغلّف متين",
        "description": "اجعل عرض الطاولة على الأقل 40 مم × 40 مم، واحرص على أن يكون التشطيب مطفأً حتى لا تبهره الإضاءة العلوية."
      }
    ],
    "features": [
      {
        "title": "تحديثات فورية للقائمة والأسعار في الوقت الفعلي",
        "description": "غيّر سعرًا، أو أضف عرضًا، أو أزل طبقًا نفد عبر الإنترنت — لا يحتاج الرمز المطبوع إلى أي تغيير أبدًا."
      },
      {
        "title": "تجربة ضيوف نظيفة وبلا تلامس",
        "description": "يقرأ الضيوف القائمة على هواتفهم الخاصة، دون أي شيء مشترك بين الطاولات."
      },
      {
        "title": "دعم القوائم الرقمية متعددة اللغات",
        "description": "وجّه الضيوف الدوليين إلى قائمة تُترجم تلقائيًا وتتبع لغة متصفحهم."
      },
      {
        "title": "روابط ثابتة دائمة دون رسوم",
        "description": "رمز قائمة ثابت يظل صالحًا إلى الأبد، مع مسح غير محدود وبلا أي رسوم."
      }
    ],
    "sizingMatrix": {
      "title": "مواصفات وضع رمز QR على طاولة المطعم وحجمه",
      "description": "تأكد من أن الزبائن يستطيعون مسح رموز القائمة بسهولة وهم جالسون بارتياح إلى طاولاتهم.",
      "headers": [
        "موقع الوضع",
        "مسافة المسح",
        "حجم الطباعة الموصى به",
        "المادة الموصى بها"
      ],
      "rows": [
        [
          "بطاقات الطاولات وكتل الطعام",
          "25 سم - 45 سم (10\" - 18\")",
          "40 مم × 40 مم (1.6\" × 1.6\")",
          "خشب صلب منقوش بالليزر / حامل أكريليك"
        ],
        [
          "المشروبات وحوامل الكؤوس وأعلى البار",
          "20 سم - 35 سم (8\" - 14\")",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "لوح حامل ثقيل ماص للسوائل"
        ],
        [
          "منصة الاستقبال وشاشات المدخل",
          "50 سم - 100 سم (20\" - 40\")",
          "80 مم × 80 مم (3.2\" × 3.2\")",
          "عرض مؤطر على الكاونتر / بطاقة دعم"
        ],
        [
          "ملصقات النوافذ للتصفح بعد ساعات العمل",
          "50 سم - 120 سم (20\" - 48\")",
          "100 مم × 100 مم (4.0\" × 4.0\")",
          "ملصق نافذة من الفينيل المطفأ المقاوم للطقس"
        ],
        [
          "إدخالات أكياس التوصيل والملصقات للطلبات الخارجية",
          "20 سم - 35 سم (8\" - 14\")",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "ملصق لاصق مطفأ"
        ]
      ]
    },
    "useCases": [
      {
        "title": "المطاعم الكاملة الخدمة",
        "description": "حامل مؤطر عند كل مقصورة يتيح للضيوف تصفح المقبلات والكوكتيلات فور جلوسهم."
      },
      {
        "title": "المقاهي سريعة الخدمة ومطاعم الوجبات السريعة",
        "description": "ملصق بكود يتجاوز الطوابير يتيح للناس مراجعة القائمة أثناء انتظار دورهم، فيصبح الطلب عند الكاونتر أسرع."
      },
      {
        "title": "مصانع الجعة الحرفية وقوائم الصنابير في الحانات",
        "description": "رمز على حامل الكأس مرتبط بقائمة الصنابير الحية يبقي قائمة المسودات الموسمية المتغيرة دقيقة حتى الدقيقة."
      },
      {
        "title": "خدمة الغرف في الفنادق وتناول الطعام داخل الغرفة",
        "description": "بطاقة بجوار السرير تستبدل كتيب الغرفة المهترئ بطلب خدمة الغرف على مدار الساعة."
      },
      {
        "title": "النوادي الليلية والصالات وبارات المسابح",
        "description": "علامة أكريليك مقاومة للماء ومنقوشة بالليزر تتولى طلب زجاجات الشراب والكوكتيلات بجانب المسبح."
      }
    ],
    "troubleshooting": {
      "title": "أكبر 5 أخطاء تفسد تجربة قائمة QR في المطعم",
      "points": [
        "ملف PDF ثقيل. ملف بحجم 25 ميغابايت يستغرق نصف دقيقة على الشبكة الخلوية. اضغطه إلى أقل من 2 ميغابايت، أو اربط صفحة HTML سريعة بدلًا منه.",
        "وهج اللمعان. حامل الأكريليك اللامع يعكس أضواء السقف في العدسة. استخدم أكريليكًا مطفأً مضادًا للوهج أو خشبًا طبيعيًا.",
        "منطقة بلا تغطية خلوية. الأقبية والخرسانة تقطع بيانات الجوال. ضع رمز WiFi بجوار رمز القائمة.",
        "تطبيق إلزامي. لا تجبر أبدًا الزبون على تنزيل تطبيق ليقرأ قائمة. استخدم رابط ويب عاديًا يفتح في المتصفح.",
        "تصميم للحاسوب فقط. لا ينبغي لأحد أن يضطر إلى التقريب والتكبير. اجعل خط القائمة 16 بكسل أو أكبر على الجوال."
      ]
    },
    "faqs": [
      {
        "q": "كيف أنشئ رمز QR مجانيًا لقائمة طعام مطعمي؟",
        "a": "ضع القائمة على الإنترنت — ملف PDF أو صفحة ويب — وانسخ الرابط العام، والصقه في مولّد الروابط، وأضف شعارك وألوانك، ونزّل SVG أو PNG عالي الدقة."
      },
      {
        "q": "هل رمز QR طريقة جيدة لتشغيل قائمة رقمية للمطاعم؟",
        "a": "إنها أبسط طريقة. استضف القائمة كصفحة ويب، ووجّه رمز QR إليها، وضع الرمز على الطاولة — فعند المسح تُفتح قائمتك الرقمية على هاتف الزبون نفسه، دون تطبيق ودون أي شيء يُوزَّع. تتيح لك الرموز الديناميكية تحديث القائمة الرقمية دون إعادة طباعة أي شيء."
      },
      {
        "q": "هل يمكنني تغيير عناصر القائمة أو أسعارها دون إعادة طباعة رمز QR؟",
        "a": "طالما بقي عنوان URL نفسه — yourrestaurant.com/menu — فإن تعديل الصفحة الكامنة وراءه يحدّث ما يعرضه كل رمز مطبوع بالفعل. الرمز نفسه لا يتغير أبدًا."
      },
      {
        "q": "ما أفضل مادة لعروض رموز QR على طاولات المطعم؟",
        "a": "حوامل أكريليك مطفأة، أو كتل خشبية منقوشة بالليزر، أو ورق مقوى مُغلّف بوزن 350+ غرام/م² — تتحمل الانسكاب، وتقاوم الوهج، وتدوم."
      },
      {
        "q": "هل يجد الزبائن الأكبر سنًا صعوبة في مسح قوائم رموز QR؟",
        "a": "تقرأ الهواتف الحديثة (iOS 11+ وAndroid 9+) الرمز مباشرة من الكاميرا دون تطبيق. سطر قصير — «وجّه كاميرتك هنا لعرض القائمة» — يسهّل الأمر على الجميع."
      },
      {
        "q": "هل يجب أن أربط بملف PDF أم بصفحة ويب متجاوبة؟",
        "a": "صفحة الويب المتجاوبة هي الرهان الأفضل: تُحمَّل أسرع وتتكيف مع الشاشة. إذا اخترت PDF، فاضغطه إلى أقل من 2 ميغابايت واجعل تنسيقه عموديًا."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR الخاصة بالمطعم التي أنشأتها على QR Generator Online؟",
        "a": "تبقى صالحة مدى الحياة، مع مسح غير محدود وبلا رسوم متكررة."
      },
      {
        "q": "هل يمكنني إدراج شعار مطعمنا في وسط رمز QR الخاص بالقائمة؟",
        "a": "بكل تأكيد. يحتفظ المستوى H بنحو 30% من الرمز لاسترداد الأخطاء، وهذا يكفي تمامًا لشعارك أو شارتك في المنتصف."
      },
      {
        "q": "كيف تزيد قوائم QR متوسط إنفاق الضيوف؟",
        "a": "يمكن للقائمة الرقمية أن تعرض صورًا حقيقية للطعام، وتقترح تزاوجًا مع النبيذ أو الكوكتيل، وتحث على الحلوى — وهذا ما يدفع متوسط الفاتورة إلى الأعلى بنسبة 12% إلى 22%."
      }
    ],
    "bestPractices": "اجعل صفحة القائمة تُحمَّل في أقل من ثانيتين، واستخدم مواد طاولة مطفأة مضادة للوهج، وضع رمز WiFi للضيوف حيث تكون التغطية الخلوية ضعيفة."
  },
  '/blog/printing-qr-codes-guide': {
    "sections": [
      {
        "title": "حساب الحد الأدنى لحجم طباعة رمز QR",
        "paragraphs": [
          "صيغة بسيطة لحجم الطباعة هي نسبة المسافة إلى الحجم 10:1. على سبيل المثال، يتطلب ملصق يُمسح من مسافة متر واحد عرضًا أدنى لرمز QR قدره 10 سم.",
          "احتفظ دائمًا بهامش المنطقة الهادئة المكون من 4 وحدات، وصدّر بصيغة SVG متجهة لإخراج مثالي في الأوفست والمكبس الرقمي."
        ]
      },
      {
        "title": "تباين الألوان وتصحيح الأخطاء وتوصيات الصيغ",
        "paragraphs": [
          "حافظ دائمًا على نسبة تباين لا تقل عن 4:1 بين مقدمة رمز QR وخلفيته. تجنب طباعة أنماط QR فاتحة على خلفيات باهتة — فالتباين المنخفض هو السبب الرئيسي لإخفاق المسح في بيئات الطباعة اللامعة. استخدم تصحيح الأخطاء من المستوى H (30% تكرار للبيانات) عند تضمين الشعارات للحفاظ على مسح موثوق.",
          "في الطباعة التجارية بالأوفست، زوّد مطبعتك دائمًا بملفات بصيغة SVG متجه أو EPS. تتبكسل صور PNG أو JPEG النقطية عند تكبيرها إلى ما بعد دقتها الأصلية، مما يؤدي إلى حواف وحدات ضبابية تربك الماسحات. كحد أدنى، صدّر PNG بحجم 2048×2048 بكسل بدقة 300 DPI عندما لا يُقبل SVG. واطلب دائمًا نسخة مطبوعة تجريبية مادية وأجرِ اختبار مسح قبل اعتماد تشغيلات الطباعة الكبيرة."
        ]
      }
    ],
    "technicalOverview": {
      "title": "دليل الهندسة النهائي لطباعة رموز QR (ما قبل الطباعة والحجم والركائز)",
      "paragraphs": [
        "طباعة رمز QR جيدًا تعني فهم الفيزياء الكامنة وراء المسح: الدقة البصرية، ومعايير ما قبل الطباعة، وانتشار الحبر، وكيف يعكس السطح الضوء، وهندسة عدسة الهاتف. قد يُمسح الرمز فورًا على الشاشة ثم يفشل تمامًا في الطباعة إذا حُددت الدقة أو المنطقة الهادئة أو التباين أو التشطيب بشكل خاطئ.",
        "بموجب ISO/IEC 18004، تفك الكاميرا تشفير الرمز بقراءة العلاقة المكانية بين أنماط التوقيت وأنماط التحديد. وأي شيء يشوّهها — حبر ينزف إلى المنطقة الهادئة المكونة من 4 وحدات، أو وهج من لامينيشن لامع جدًا، أو تبكسل من مصدر منخفض DPI — يكسر فك تشفير Reed-Solomon.",
        "يمنح هذا الدليل فنيي ما قبل الطباعة والمصممين ومهندسي التغليف والمطابع الصيغ والمواصفات المادية وقائمة فحص الجودة للوصول إلى موثوقية مسح من المحاولة الأولى بنسبة 100% في كل تشغيل."
      ]
    },
    "comparisonTable": {
      "title": "صيغ ملفات الطباعة التجارية لإنتاج رموز QR",
      "headers": [
        "صيغة الملف",
        "نوع الدقة",
        "توافق ما قبل الطباعة",
        "تطبيقات الطباعة الموصى بها"
      ],
      "rows": [
        [
          "SVG / EPS متجه",
          "مستقل عن الدقة (مسارات متجهة)",
          "بدون فقد بنسبة 100% عبر جميع محركات RIP التجارية",
          "اللوحات الإعلانية، والتغليف، وملصقات المركبات، والقرطاسية"
        ],
        [
          "PNG عالي الدقة (300+ DPI)",
          "صورة نقطية (بدون فقد 2048×2048+ بكسل)",
          "المعيار للمكابس الرقمية والتشغيلات القصيرة",
          "المنشورات، والقوائم، والبريد المباشر، والمجلات"
        ],
        [
          "PDF / PDF متجه",
          "مسارات متجهة مغلفة",
          "معيار عالمي لما قبل الطباعة والترتيب",
          "الكتب التجارية، والتقارير السنوية، ومخططات التغليف"
        ],
        [
          "JPEG بالفقد (تجنّبه)",
          "نقطي مضغوط (آثار فقد)",
          "غير مناسب للطباعة التجارية (رنين على الحواف)",
          "عرض الويب/الشاشة فقط (لا يُستخدم للطباعة أبدًا)"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "احسب الأبعاد المادية باستخدام صيغة S = D / 10",
        "description": "خذ المسافة التي سيمسح منها الناس (D)، واقسمها على عشرة، وهذا هو العرض والارتفاع الأدنى لك (S)."
      },
      {
        "number": 2,
        "title": "تحقق من نسبة تباين WCAG (> 4.5:1) والمنطقة الهادئة",
        "description": "تأكد من وجود وحدات داكنة على أرضية فاتحة، واحتفظ بالحدود الفارغة الكاملة المكونة من 4 وحدات على كل جانب."
      },
      {
        "number": 3,
        "title": "صدّر SVG متجهًا وأجرِ اختبار البروفة المادية",
        "description": "صدّر SVG متجهًا، وضعه في InDesign أو Illustrator، وامسح بروفة المكبس المطبوعة على بضعة هواتف قبل الموافقة."
      }
    ],
    "features": [
      {
        "title": "نسبة مسافة المسح الرياضية 10:1",
        "description": "احسب الحجم الدقيق لأي وسيط، من طابع بريد حتى لوحة طريق سريع بطول 50 مترًا."
      },
      {
        "title": "امتثال ISO/IEC 18004 لما قبل الطباعة",
        "description": "اضبط ملفاتك بشكل صحيح من حيث توقيت الوحدات وأنماط المحاذاة وتكرار Reed-Solomon."
      },
      {
        "title": "دليل توافق الركائز والطلاءات",
        "description": "افهم كيف تتفاعل الأحبار وامتصاص الورق وزيادة النقطة والمطفأ مقابل اللامع فعليًا على المكبس."
      },
      {
        "title": "تنزيلات SVG وEPS متجهة مباشرة بدون فقد",
        "description": "ملفات متجهة جاهزة للإنتاج مصممة للتجهيز التجاري وصناعة الألواح."
      }
    ],
    "sizingMatrix": {
      "title": "جدول مرجعي رئيسي لحجم الطباعة والمسافة",
      "description": "طبّق المعادلة البصرية القياسية $S = D / 10$ لتحديد أبعاد الطباعة المادية.",
      "headers": [
        "الموضع المادي",
        "مسافة المسح (D)",
        "الحد الأدنى للعرض (S)",
        "صيغة الملف الموصى بها"
      ],
      "rows": [
        [
          "بطاقات الأعمال وشارات الأسماء",
          "15 سم - 30 سم (6\" - 12\")",
          "25 مم × 25 مم (1.0\" × 1.0\")",
          "SVG متجه / EPS"
        ],
        [
          "الأوتاد المكتبية والمشروبات",
          "30 سم - 50 سم (12\" - 20\")",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "SVG متجه / PNG بدقة 300 DPI"
        ],
        [
          "عبوات المنتجات والكراتين",
          "20 سم - 40 سم (8\" - 16\")",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "SVG متجه / PDF"
        ],
        [
          "المنشورات والكتيبات والمجلات",
          "50 سم - 100 سم (20\" - 40\")",
          "60 مم × 60 مم (2.4\" × 2.4\")",
          "SVG متجه / PNG بدقة 300 DPI"
        ],
        [
          "لافتات وملصقات معارض التجارة",
          "1.5 م - 3.0 م (5 أقدام - 10 أقدام)",
          "200 مم × 200 مم (8.0\" × 8.0\")",
          "SVG متجه"
        ],
        [
          "ملصقات المركبات ورسومات الأساطيل",
          "3.0 م - 6.0 م (10 أقدام - 20 قدم)",
          "350 مم × 350 مم (14\" × 14\")",
          "SVG متجه / فينيل مصبوب"
        ],
        [
          "لوحات الطرق السريعة والإعلانات المرورية",
          "15.0 م - 30.0 م (50 قدم - 100 قدم)",
          "1500 مم - 3000 مم (5 أقدام - 10 أقدام)",
          "SVG متجه / EPS بحجم كبير"
        ]
      ]
    },
    "useCases": [
      {
        "title": "التغليف التجاري وصناديق الفلكسو",
        "description": "ضع رمزًا متجهًا حادًا في مخطط تغليف مع احتساب امتصاص الحبر وزيادة النقطة في المكبس."
      },
      {
        "title": "ما قبل طباعة المجلات الوطنية والبريد المباشر",
        "description": "اجتز عتبة 300+ DPI وفصل CMYK التي يطلبها ناشرو المجلات."
      },
      {
        "title": "الإعلان الخارجي ولوحات الطرق السريعة",
        "description": "كبّر رمزًا متجهًا إلى أبعاد اللوحة الإعلانية مع بقاء هندسة الوحدات حادة."
      },
      {
        "title": "بطاقات الأعمال الفاخرة والتذهيب الرقائقي",
        "description": "أنتج مسارات متجهة دقيقة للتذهيب الرقائقي والنقش البارز وطلاء UV الموضعي على ورق يزيد على 400 غرام/م²."
      },
      {
        "title": "علامات أصول الآلات الصناعية والألواح المعدنية",
        "description": "أنشئ فنًا متجهًا دقيقًا للنقش بالليزر على الألومنيوم المؤكسد وألواح الفولاذ المقاوم للصدأ."
      }
    ],
    "troubleshooting": {
      "title": "6 أخطاء قاتلة في ما قبل الطباعة تكسر رموز QR المطبوعة",
      "points": [
        "منطقة هادئة مقصوصة. إذا قصصت حتى حد الوحدات تفقد الكاميرا الحافة. اترك الهامش الكامل المكون من 4 وحدات.",
        "JPEG بالفقد. الضغط يُفزّز زوايا الوحدات. استخدم SVG متجهًا أو PNG غير مضغوط.",
        "تباين ضعيف. الألوان الباستيلية أو الأصفر على الأبيض أو الرمادي الفاتح تفشل في التحويل الثنائي. حافظ على 4.5:1.",
        "وهج اللمعان. الطلاء عالي اللمعان يتوهج تحت كشاف. اختر مطفأ أو حريريًا.",
        "تجاهل زيادة النقطة. ينتشر الحبر على الورق غير المطلي وورق الصحف، فيسد الفجوات بين الوحدات. كبّر الرمز بنسبة 15-20% على الركائز المسامية.",
        "ألوان معكوسة. الأبيض على الأسود يفشل في الماسحات الأقدم. أبقِ الوحدات داكنة."
      ]
    },
    "faqs": [
      {
        "q": "ما أصغر حجم يمكن طباعة رمز QR به ويظل قابلًا للمسح؟",
        "a": "لعنوان URL قصير أو بطاقة اتصال تُقرأ من مسافة 15-20 سم، فإن 20 مم × 20 مم (0.8\" × 0.8\") هو الحد الأدنى. على التغليف وبطاقات الأعمال، اعتبر 25 مم × 25 مم (1.0\" × 1.0\") الحد الأدنى الآمن."
      },
      {
        "q": "لماذا يتفوق SVG المتجه على PNG للطباعة التجارية؟",
        "a": "يصف SVG الرمز كهندسة لا كبكسلات، لذلك يتحجم إلى أي حجم لوحة إعلانية أو تغليف دون فقد في الحدة، ويُستورد بنظافة في InDesign وIllustrator."
      },
      {
        "q": "ما هي المنطقة الهادئة ولماذا هي إلزامية؟",
        "a": "هي الحافة الفارغة — بعرض 4 وحدات على الأقل — حول الجوانب الأربعة للرمز. تحتاج الكاميرا إلى ذلك الهامش الفارغ لتعرف أين ينتهي الباركود وأين يبدأ الفن المحيط به."
      },
      {
        "q": "كيف يؤثر مستوى تصحيح الأخطاء في متانة الطباعة؟",
        "a": "يحتوي المستوى H على تكرار بنسبة 30%، لذلك يظل الرمز قابلًا للمسح حتى لو خُدش السطح أو تمزق أو تلوث، أو غطّاه شعار مركزي بنسبة تصل إلى 30%."
      },
      {
        "q": "هل يمكنني طباعة رمز QR ملوّن على ورق ملون؟",
        "a": "نعم، طالما أن الوحدات الداكنة تتجاوز 4.5:1 مقابل الورق الفاتح. تجنب الداكن على الداكن والفاتح على الفاتح."
      },
      {
        "q": "لماذا تفشل رموز QR المغلفة اللامعة في المسح غالبًا؟",
        "a": "تحت أشعة الشمس المباشرة أو الكشاف، يعمل اللمعان كالمرآة ويُغرق التباين ببقعة بيضاء ساطعة. اللامينيشن المطفأ أو المضاد للوهج يحل المشكلة."
      },
      {
        "q": "ما الدقة المطلوبة إذا طُبعت ملفات PNG النقطية؟",
        "a": "يحتاج الملف النقطي إلى 300 DPI عند الحجم النهائي للطباعة (البكسلات = البوصات × 300). يُطبع تصدير PNG بحجم 2048×2048 بكسل بوضوح حتى نحو 7×7 بوصات."
      },
      {
        "q": "كيف أختبر رمز QR المطبوع قبل الموافقة على تشغيل طباعة من 10,000 وحدة؟",
        "a": "اسحب بروفة مكبس بنسبة 1:1 على الورق والطلاء اللذين ستستخدمهما بالضبط، ثم امسحها على أندرويد قديم وآيفون حديث، في الإضاءة الخافتة والساطعة."
      }
    ],
    "bestPractices": "أعطِ المطبعة ملف SVG متجهًا، واطلب تشطيبًا مطفأً، واحمِ المنطقة الهادئة المكونة من 4 وحدات، وامسح بروفة مادية قبل أن توافق على التشغيل الكامل."
  },
  '/blog/vcard-qr-code-business-cards': {
    "sections": [
      {
        "title": "حوّل بطاقات الأعمال إلى أدوات حفظ جهات اتصال بنقرة واحدة",
        "paragraphs": [
          "يُلغي رمز QR من نوع vCard أخطاء كتابة جهات الاتصال يدويًا في فعاليات التواصل المهني ومعارض التجارة.",
          "يقوم من يمسح ظهر بطاقتك بإضافة اسمك ورقم هاتفك المحمول وبريدك الإلكتروني وملفك الشخصي على LinkedIn إلى دفتر عناوينه فورًا."
        ]
      },
      {
        "title": "نصائح تصميم لبطاقات الأعمال التي تحمل رموز QR",
        "paragraphs": [
          "ضع رمز QR على الوجه الخلفي من بطاقة عملك مع دعوة واضحة للفعل مثل «امسح لحفظ جهة اتصالي». اجعل الرمز بحجم 2.5 سم × 2.5 سم على الأقل (بوصة × بوصة) لمسح موثوق. اترك حدًا أبيض للمنطقة الهادئة بعرض 4 وحدات على الأقل من الجوانب الأربعة. إن تضمين صورتك المهنية أو شعار شركتك في المنتصف يعزز الثقة ومعدلات المسح.",
          "استخدم QR Generator Online لترميز ملف vCard 3.0 الكامل، بما يشمل الاسم الأول والكنية والمسمى الوظيفي والشركة وهاتف العمل والهاتف المحمول والبريد الإلكتروني والموقع الإلكتروني والعنوان البريدي. صدّر بصيغة SVG المتجهة لضمان جودة لا تشوبها شائبة بأي حجم طباعة للبطاقة. ويوفر ورق البطاقات الفاخر بتشطيب مطفأ أعلى موثوقية للمسح مقارنة بالطلاء اللامع، الذي قد يُحدث وهجًا على العدسة تحت الإضاءة الساطعة."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الدليل النهائي لرموز QR من نوع vCard لبطاقات الأعمال الذكية الحديثة",
      "paragraphs": [
        "بطاقة العمل الورقية تحتضر بصمت. أكثر من 88% من البطاقات الموزعة في فعالية تواصل مهني تُرمى خلال أسبوع، ونحو 9% منها تحمل رقمًا أو مسمى قديمًا بعد ستة أشهر. يحوّل رمز QR من نوع vCard تلك الورقة الميتة إلى أصل رقمي يعمل.",
        "يعمل بمعيار VCF (vCard 3.0، المحدد في RFC 2426 وRFC 6350) ويرمّز هويتك المهنية كاملة — الاسم والمسمى والشركة والهاتف المحمول والبريد الإلكتروني للعمل وعنوان المكتب والموقع الإلكتروني — مباشرة داخل الباركود.",
        "امسحه بأي آيفون أو جهاز Android وسيفتح النظام معاينة جهة اتصال مع خيار «إضافة إلى جهات الاتصال». نقرة واحدة تحفظ الملف الشخصي كاملًا في دفتر العناوين — دون كتابة، ودون خطأ إملائي، ودون ضياع عميل محتمل في جيب سترة."
      ]
    },
    "comparisonTable": {
      "title": "بطاقة عمل ذكية برمز vCard QR مقابل بطاقة عمل ورقية تقليدية",
      "headers": [
        "مقياس التواصل المهني",
        "بطاقة عمل ذكية برمز vCard QR",
        "بطاقة عمل ورقية تقليدية"
      ],
      "rows": [
        [
          "سرعة حفظ جهة الاتصال",
          "نقرة واحدة (أقل من 3 ثوانٍ مباشرة في دفتر عناوين الهاتف)",
          "كتابة يدوية (من دقيقة إلى 3 دقائق، وغالبًا ما تُهمل)"
        ],
        [
          "معدل الاحتفاظ بجهة الاتصال",
          "تخزين دائم في دفتر العناوين السحابي",
          "يُتخلص من 88% منها خلال 7 أيام"
        ],
        [
          "ثراء البيانات",
          "ملف شخصي كامل: 3 هواتف، وبريد إلكتروني، وعنوان مكتب، وموقع إلكتروني",
          "محدود بمساحة البطاقة المادية 3.5\" × 2\""
        ],
        [
          "النفايات البيئية",
          "صفر نفايات (بطاقات هجينة متينة وقابلة لإعادة الاستخدام)",
          "آلاف البطاقات الورقية المُتخلص منها لكل محترف سنويًا"
        ],
        [
          "التفاعل بنقرة واحدة",
          "اتصال مباشر، وبريد إلكتروني، وتنقل بالخريطة",
          "نص سلبي يتطلب نسخًا يدويًا"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "املأ حقول الاتصال المهنية المنظمة",
        "description": "أدخل اسمك ومسماك الوظيفي وشركتك وهاتفك المحمول وبريدك الإلكتروني للعمل وموقعك الإلكتروني."
      },
      {
        "number": 2,
        "title": "طبّق العلامة التجارية البصرية وأدرج صورتك الشخصية أو الشعار",
        "description": "نسّق نمط النقاط ليتوافق مع علامتك التجارية، وضع صورتك أو شعارك في المنتصف بتصحيح خطأ من المستوى H."
      },
      {
        "number": 3,
        "title": "صدّر SVG متجهًا لطباعة بطاقات الأعمال",
        "description": "خذ SVG المتجه لمطبعة الطباعة، أو PNG عالي الدقة لتوقيع البريد الإلكتروني أو خلفية شاشة القفل."
      }
    ],
    "features": [
      {
        "title": "تكامل أصلي عالمي مع iOS وAndroid",
        "description": "مبني وفق vCard 3.0، لذلك يُحفظ بنظافة في جهات اتصال Apple وجهات اتصال Google وOutlook."
      },
      {
        "title": "حفظ في دفتر عناوين الهاتف بنقرة واحدة",
        "description": "يُحفظ هاتفك وبريدك وموقعك وعنوانك بنقرة واحدة — لا يكتب الشخص الآخر أي شيء."
      },
      {
        "title": "مسح دون اتصال بنسبة 100% وخصوصية كاملة",
        "description": "تعيش بيانات الاتصال داخل الباركود. لا يخزنها أو يجمعها أي خادم تابع لطرف ثالث."
      },
      {
        "title": "SVG متجه عالي الدقة لورق البطاقات الفاخر",
        "description": "مخرجات متجهة حادة للتذهيب الرقائقي والطلاء الموضعي UV والنقش البارز، أو لبطاقة معدنية أو خشبية منقوشة بالليزر."
      }
    ],
    "sizingMatrix": {
      "title": "مواصفات حجم رموز vCard QR ومواد الطباعة",
      "description": "لأن حمولات vCard تحتوي على 150 إلى 350 حرفًا من النص المنظم، حافظ على معايير الحجم الموصى بها.",
      "headers": [
        "ركيزة / وسيط البطاقة",
        "الحد الأدنى للحجم الموصى به",
        "مستوى تصحيح الأخطاء",
        "التشطيب الأمثل"
      ],
      "rows": [
        [
          "بطاقات الأعمال الورقية القياسية (3.5\" × 2\")",
          "28 مم × 28 مم (1.1\" × 1.1\")",
          "المستوى Q (25%) أو المستوى H (30%)",
          "ورق مقوى مطفأ ثقيل (أكثر من 350 غرام/م²)"
        ],
        [
          "بطاقات NFC الذكية الهجينة من المعدن أو الخشب",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "المستوى H (30%)",
          "ألومنيوم مؤكسد مطفأ منقوش بالليزر"
        ],
        [
          "أحزمة معارض التجارة وشارات المؤتمرات",
          "45 مم × 45 مم (1.8\" × 1.8\")",
          "المستوى M (15%) أو المستوى Q (25%)",
          "PVC صناعي مُغلّف / Tyvek"
        ],
        [
          "رؤوس السير الذاتية وأغلفة الملفات",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "المستوى Q (25%)",
          "ورق أبيض ناعم ساطع غير مطلي"
        ],
        [
          "خلفية شاشة قفل الهاتف الذكي",
          "250 × 250 بكسل على شاشة رقمية",
          "المستوى H (30%)",
          "شاشة OLED رقمية عالية التباين"
        ]
      ]
    },
    "useCases": [
      {
        "title": "كبار التنفيذيين وقادة المبيعات",
        "description": "رمز على ظهر بطاقة فاخرة يحوّل المصافحة إلى جهة اتصال محفوظة."
      },
      {
        "title": "معارض التجارة والمعارض والمؤتمرات الصناعية",
        "description": "على حزام علق أو شارة كشك، تصل بياناتك إلى هاتف عميل محتمل في نحو ثانيتين."
      },
      {
        "title": "الباحثون عن عمل — السير الذاتية وخطابات تقديم الملفات",
        "description": "رمز في رأس السيرة الذاتية يتيح لمسؤول التوظيف حفظ بياناتك دون إعادة كتابتها."
      },
      {
        "title": "وكلاء العقارات ووسطاء الرهن العقاري",
        "description": "رمز على منشور زيارة مفتوحة يجعل حجز المعاينة مهمة بنقرة واحدة."
      },
      {
        "title": "تذييلات البريد الإلكتروني للشركات والتوقيعات الرقمية",
        "description": "رمز في قالب البريد الإلكتروني يتيح لقارئ سطح المكتب مسحه من شاشته."
      }
    ],
    "troubleshooting": {
      "title": "أخطاء تصميم رموز vCard QR الشائعة وكيفية تجنبها",
      "points": [
        "ملف تعريف مكتظ. عشرون حقلًا تجعل المصفوفة كثيفة جدًا لا تُمسح. اكتفِ بالأساسيات.",
        "طباعة صغيرة جدًا. تتبكسل مصفوفة vCard من الإصدار 6-10 تحت 25 مم بكاميرا رخيصة. أعطها مساحة.",
        "ورق لامع. البطاقة عالية اللمعان تعكس أضواء القاعة في العدسة. اختر مطفأ أو حريريًا أو ناعمًا عند اللمس.",
        "ألوان معكوسة. الأبيض على بطاقة داكنة يفشل في بعض الماسحات القديمة. يبقى الداكن على الفاتح هو المعيار.",
        "عدم وجود رمز الدولة. إذا حذفت +966 أو +20 أو +1، فلن يتمكن جهة اتصال دولية من الاتصال بالبطاقة المحفوظة."
      ]
    },
    "faqs": [
      {
        "q": "ما هو رمز vCard QR وكيف يعمل؟",
        "a": "هو باركود ثنائي الأبعاد يحمل بيانات الاتصال الخاصة بك — الاسم والهاتف والبريد الإلكتروني والشركة والمسمى الوظيفي والموقع الإلكتروني — بصيغة vCard 3.0. عند المسح، يعرض الهاتف حفظ جهة الاتصال مباشرة في دفتر العناوين."
      },
      {
        "q": "هل تحتاج رموز vCard QR إلى اتصال إنترنت للمسح؟",
        "a": "تعمل بالكامل دون اتصال. يعيش كل حقل داخل الباركود كنص vCard 3.0، لذلك يقرأ الهاتف جهة الاتصال ويحفظها دون بيانات أو WiFi."
      },
      {
        "q": "هل يمكنني تضمين صورتي في رمز vCard QR ثابت؟",
        "a": "ترميز الصورة الخام يضخم الحمولة إلى حد يجعلها غير قابلة للمسح. الحركة المعتادة هي وضع صورتك أو شعارك فوق مركز الرمز، ووضع عنوان المكان الذي تُستضاف فيه الصورة الكاملة في حقل URL الخاص بـ vCard."
      },
      {
        "q": "هل رموز vCard QR متوافقة مع iPhone وAndroid معًا؟",
        "a": "نعم، فـ vCard 3.0 هو معيار جهات الاتصال الشامل، وهو أصلي في جهات اتصال Apple وجهات اتصال Google وOutlook وجهات اتصال Samsung."
      },
      {
        "q": "هل تنتهي صلاحية رموز vCard QR الثابتة أو تفرض رسومًا شهرية؟",
        "a": "لا. تبقى بيانات جهة الاتصال داخل الرمز وتظل صالحة إلى الأبد، دون رسوم متكررة أو حد للمسح."
      },
      {
        "q": "ما أصغر حجم أستطيع طباعة رمز vCard QR به على بطاقة عمل؟",
        "a": "استهدف 28 مم × 28 مم (1.1\" × 1.1\") أو أكبر، حتى تبقى المصفوفة الأكثر كثافة واضحة لعدسة الهاتف."
      },
      {
        "q": "هل يجب أن أنسّق أرقام الهواتف برمز الدولة؟",
        "a": "دائمًا — استخدم صيغة E.164 (+14155552671) حتى يتمكن جهة اتصال دولية من الاتصال بك دون تخمين البادئة."
      },
      {
        "q": "ما صيغة الملف التي يجب أن أرسلها إلى مطبعة بطاقات العمل؟",
        "a": "SVG المتجه أو EPS. يحافظ المتجه على دقته في أي مكبس أوفست أو رقمي."
      }
    ],
    "bestPractices": "احتفظ بالبطاقة على الحقول الأساسية فقط، واكتب أرقام الهواتف بصيغة دولية (+966...)، واطلب ورقًا مقويًا مطفأً، وامسح نسخة مادية قبل التشغيل الكامل."
  },
  '/blog/qr-codes-for-real-estate': {
    "sections": [
      {
        "title": "تواصل مع المشترين المحتملين مباشرة من لافتات العقار",
        "paragraphs": [
          "وضع رمز QR على لافتات «للبيع» يسمح لمن يمر بالسيارة برؤية مخططات ثلاثية الأبعاد وفيديوهات جولة وأسعار فورًا.",
          "اجذب استفسارات المشترين عالية النية على مدار الساعة دون انتظار جولات المعاينة المفتوحة."
        ]
      },
      {
        "title": "أفضل الممارسات لحملات رموز QR العقارية",
        "paragraphs": [
          "اربط رمز QR مباشرة بصفحة هبوط مخصصة للعقار بدلًا من صفحتك الرئيسية العامة. أدرج العنوان الكامل وسعر الإدراج وعدد غرف النوم والحمامات والمساحة بالأمتار المربعة وفيديو جولة مضمّن. تتيح لك رموز QR الديناميكية تحديث عنوان URL الوجهة إذا تغير سعر الإدراج، أو إذا بيع العقار وأردت التوجيه إلى إدراج مماثل دون إعادة طباعة اللافتات.",
          "لأقصى موثوقية للمسح في الخارج، اطبع رموز QR بحجم أدنى 7 سم × 7 سم (نحو 2.75 بوصة) على لافتات مقاومة للطقس. استخدم تباينًا عاليًا بين الأسود والأبيض أو الأخضر الداكن والأبيض لضمان الرؤية في ضوء الشمس المباشر. إن إضافة شعار علامة تجارية وعبارة قصيرة مثل «امسح لجولة افتراضية» يرفع معدلات المسح من حركة المرور المارّة بشكل ملحوظ. تتبّع تحليلات المسح لمعرفة أي الأحياء وأنواع الإدراج تولّد أكبر اهتمام من المشترين."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الدليل الشامل لوكيل العقارات حول توليد العملاء المحتملين والتسويق برموز QR",
      "paragraphs": [
        "التسويق العقاري قائم على الموقع والصورة، والمشترون يتوقعون اليوم التفاصيل عند الطلب وهم واقفون أمام المنزل. صندوق الفلاير الورقي القديم على اللافتة ينفد من الأوراق، ويتعرض للمطر، ولا يخبرك شيئًا عمّن أبدى اهتمامًا.",
        "يحل رمز QR للعقار المشكلات الثلاث جميعها. يحوّل اللافتة أو موجّه الزيارة المفتوحة أو العرض في النافذة أو البطاقة البريدية إلى بوابة تعمل على مدار الساعة — يفتح المسح جولة Matterport ثلاثية الأبعاد، ومعرض صور عالي الدقة، ومخطط طابق، وتقييمات المدارس، واتصالًا أو رسالة نصية مباشرة بالوكيل.",
        "أضِف تتبع UTM وتدفق جمع العملاء المحتملين، وسيحصل أفضل الوكلاء على عملاء محليين عالي النية في اللحظة المحددة التي يبلغ فيها الاهتمام ذروته — من الرصيف، وفي أي ساعة."
      ]
    },
    "comparisonTable": {
      "title": "لافتة عقار برمز QR مقابل صندوق فلايرات ورقي تقليدي",
      "headers": [
        "قدرة التسويق",
        "لافتة عقار برمز QR",
        "صندوق فلايرات ورقي تقليدي"
      ],
      "rows": [
        [
          "توفر جمع العملاء المحتملين",
          "24/7/365 (لا ينفد مخزونه أبدًا)",
          "صناديق الفلايرات الفارغة تفقد أكثر من 60% من العملاء المحتملين"
        ],
        [
          "ثراء الوسائط",
          "جولات افتراضية ثلاثية الأبعاد، وفيديوهات جولة، وأكثر من 50 صورة عالية الدقة",
          "محدود بصورة أو صورتين مطبوعتين بالأبيض والأسود"
        ],
        [
          "مقاومة الطقس",
          "فينيل/ألومنيوم مقاوم للطقس (يصمد أمام المطر والثلج والشمس)",
          "الفلايرات الورقية تتشرب الماء أو تتجعد أو تطيرها الريح"
        ],
        [
          "نسب العملاء وتحليلاتهم",
          "يتتبع حجم المسح الدقيق ووقت اليوم ونوع الجهاز",
          "لا رؤية إطلاقًا لعدد الفلايرات التي أُخذت"
        ],
        [
          "الاتصال الفوري بالوكيل",
          "اتصال مباشر أو رسالة SMS أو WhatsApp بنقرة واحدة",
          "على المشتري أن يكتب رقم الوكيل يدويًا"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "أنشئ صفحة هبوط لعقار واحد أو رابط جولة ثلاثية الأبعاد",
        "description": "انسخ عنوان URL المباشر لصفحة الإدراج أو جولة Matterport أو فيديو الجولة."
      },
      {
        "number": 2,
        "title": "أنشئ رمز QR عقاريًا عالي التباين مع شعار",
        "description": "الصق عنوان URL للعقار، وطبّق ألوان شركتك العقارية، وضع شعارك في المنتصف، وصدّر SVG متجهًا."
      },
      {
        "number": 3,
        "title": "اطبع على لافتات من البلاستيك المموج المقاوم للطقس أو الألومنيوم",
        "description": "ثبّت لافتة مساعدة بحجم 150 مم × 150 مم على الأقل تحمل عبارة مثل «امسح لجولة افتراضية ثلاثية الأبعاد والسعر»."
      }
    ],
    "features": [
      {
        "title": "تقديم معلومات العقار عند الطلب على مدار الساعة",
        "description": "يحصل المشتري المار بالسيارة على السعر وصور الداخل ومخطط الطابق في أي ساعة."
      },
      {
        "title": "تكامل مباشر مع الجولات ثلاثية الأبعاد وفيديوهات الجولة",
        "description": "أدخل المشتري إلى داخل المنزل عبر Matterport أو Zillow 3D Home أو جولة YouTube."
      },
      {
        "title": "اتصال فوري بالوكيل بنقرة واحدة",
        "description": "يستطيع المشتري الواقف على الرصيف الاتصال بوكيل الإدراج أو مراسلته عبر WhatsApp في الحال."
      },
      {
        "title": "باركودات ثابتة دائمة دون انتهاء صلاحية",
        "description": "رمز عقار ثابت يبقى نشطًا إلى أجل غير مسمى، دون رسوم شهرية أو حد للمسح."
      }
    ],
    "sizingMatrix": {
      "title": "مواصفات حجم الطباعة العقارية ووضعها",
      "description": "تأكد من أن المشترين المحتملين يستطيعون مسح رموز عقاراتك بسهولة من سياراتهم أو من الرصيف.",
      "headers": [
        "موقع اللافتة",
        "مسافة المسح المتوقعة",
        "حجم الطباعة الأدنى",
        "الركيزة الموصى بها"
      ],
      "rows": [
        [
          "لافتة مساعدة تحت لافتة البيع (معلّقة أسفلها)",
          "1.5 م - 3.0 م (5 أقدام - 10 أقدام)",
          "150 مم × 150 مم (6\" × 6\")",
          "بلاستيك مموج عاكس / ألومنيوم"
        ],
        [
          "اتجاهات زيارة مفتوحة للشوارع",
          "1.0 م - 2.5 م (3 أقدام - 8 أقدام)",
          "120 مم × 120 مم (4.8\" × 4.8\")",
          "لافتة وتد من بلاستيك مموج ثقيل"
        ],
        [
          "كتيبات وفلايرات الإدراج العقاري",
          "20 سم - 35 سم (8\" - 14\")",
          "30 مم × 30 مم (1.2\" × 1.2\")",
          "ورق مقوى مطفأ ثقيل (أكثر من 100 رطل)"
        ],
        [
          "عرض نوافذ مكتب العقارات",
          "50 سم - 150 سم (20\" - 60\")",
          "100 مم × 100 مم (4.0\" × 4.0\")",
          "ملصق نافذة من الفينيل المطفأ المقاوم للطقس"
        ],
        [
          "بطاقات بريدية مباشرة \"مُدرجة حديثًا\"",
          "20 سم - 35 سم (8\" - 14\")",
          "28 مم × 28 مم (1.1\" × 1.1\")",
          "ورق بطاقات بريدية مطفأ مطلي"
        ]
      ]
    },
    "useCases": [
      {
        "title": "لوحات مساعدة لوحة البيع للجولات الافتراضية ثلاثية الأبعاد",
        "description": "لوحة أسفل لافتة البيع تتيح للمتسوق المار بالسيارة استكشاف الداخل من هاتفه."
      },
      {
        "title": "لافتات اتجاهات الزيارة المفتوحة",
        "description": "رمز موقع على لافتة زاوية يوجّه المشتري مباشرة إلى ممر الزيارة المفتوحة."
      },
      {
        "title": "بطاقات بريدية مباشرة \"مُدرجة حديثًا\" و\"مُباعة\"",
        "description": "رمز بطاقة الحي البريدية يصل إلى فيديو الجولة وحاسبة قيمة المنزل."
      },
      {
        "title": "عروض النوافذ في مكاتب الوساطة",
        "description": "رمز النافذة يحوّل حركة المارة إلى بحث عن عقارات على مدار الساعة."
      },
      {
        "title": "بطاقات عمل الوكلاء مع جهات اتصال vCard",
        "description": "رمز vCard على بطاقة الوكيل يحفظ بياناته بنقرة واحدة."
      }
    ],
    "troubleshooting": {
      "title": "أخطاء شائعة في التسويق العقاري برموز QR",
      "points": [
        "صغير جدًا للمارين بالسيارة. لا يمكن قراءة رمز بحجم 50 مم من سيارة على بعد 3 أمتار. استخدم 150 مم × 150 مم على الأقل في لافتة البيع.",
        "رابط MLS بطيء. صفحة MLS لسطح المكتب البطيئة ذات الخط الصغير تُحبط الماسح الجوال. اربط بصفحة سريعة لعقار واحد بدلًا من ذلك.",
        "لا دعوة للفعل. الرمز المجرد يحصد مسحات قليلة. أرفِقه بعبارة «امسح للسعر والصور وجولة 3D».",
        "وهج الشمس. طلاء اللافتة اللامع يتوهج تحت الشمس الساطعة. استخدم فينيلًا خارجيًا مطفأً أو بلاستيكًا مموجًا.",
        "حاجز تسجيل دخول عدائي. فرض التسجيل الفوري يسبب 70% من الارتدادات. اعرض الصور الرئيسية أولًا، ثم اطلب الموافقة لاحقًا."
      ]
    },
    "faqs": [
      {
        "q": "كيف يستخدم وكلاء العقارات رموز QR لتوليد العملاء المحتملين؟",
        "a": "يضعون الرموز على لافتات البيع ومنشورات الزيارة المفتوحة والبطاقات البريدية التي تربط بموقع عقار واحد أو جولة ثلاثية الأبعاد أو استفسار نصي فوري — لالتقاط المشتري في أوج اهتمامه."
      },
      {
        "q": "ما الحجم الموصى به لرمز QR على لافتة عقار؟",
        "a": "يجب أن تكون اللافتة المساعدة التي تُقرأ من الممر أو الرصيف (من 1.5 إلى 3 أمتار) بحجم 150 مم × 150 مم (6\" × 6\") على الأقل بتباين عالٍ."
      },
      {
        "q": "هل يمكنني ربط رمز QR مباشرة بجولة Matterport الافتراضية ثلاثية الأبعاد؟",
        "a": "انسخ رابط المشاركة العام من Matterport، والصقه في مولّد الروابط، ونزّل SVG أو PNG الجاهز للطباعة."
      },
      {
        "q": "هل تنتهي صلاحية رموز QR العقارية عند بيع العقار؟",
        "a": "يبقى الرمز الثابت صالحًا. عند بيع العقار، وجّه عنوان URL الوجهة إلى صفحة \"تم البيع\" أو إلى إدراجاتك النشطة — ويظل الرمز المطبوع يعمل."
      },
      {
        "q": "ما عبارة الدعوة للفعل التي يجب أن أطبعها بجانب رمز QR الخاص بالعقار؟",
        "a": "العبارات الناجحة: «امسح للسعر وجولة افتراضية ثلاثية الأبعاد»، و«امسح لرؤية صور الداخل فورًا»، و«امسح لمراسلة وكيل الإدراج»."
      },
      {
        "q": "هل يمكنني إضافة شعار شركتي العقارية إلى رمز QR؟",
        "a": "نعم — يتسع شعار شركتك أو فريقك بشكل مرتب في المنتصف، لأن المستوى H قد يفقد ما يصل إلى ثلث الرمز ويظل قابلًا للمسح."
      },
      {
        "q": "ما أفضل مادة للافتات العقارية الخارجية برمز QR؟",
        "a": "بلاستيك مموج مقاوم للطقس (Coroplast) أو لوح مركب من الألومنيوم بطبقة UV مطفأة — متين وخالٍ من الوهج."
      },
      {
        "q": "هل رموز QR العقارية مجانية للتوليد على QR Generator Online؟",
        "a": "تصديرات SVG وPNG مجانية، مع مسح غير محدود وبلا رسوم متكررة."
      }
    ],
    "bestPractices": "اطبع رموز اللافتات بحجم 150 مم × 150 مم أو أكبر على مادة مطفأة مقاومة للطقس، وأضف دعوة للفعل ذات قيمة، وتأكد من أن صفحة الهبوط تُحمّل بسرعة على الجوال."
  },
  '/blog/wifi-qr-codes-for-hospitality': {
    "sections": [
      {
        "title": "اتصال لاسلكي بلا عوائق للضيوف",
        "paragraphs": [
          "غالبًا ما يعاني ضيوف الفنادق وAirbnb من كتابة كلمات مرور WiFi المعقدة على هواتفهم وحواسيبهم المحمولة.",
          "بطاقة مؤطرة ومخصصة برمز QR لـ WiFi على طاولة الليل أو على كاونتر المقهى تتيح للضيوف المسح والاتصال فورًا."
        ]
      },
      {
        "title": "كيفية نشر رموز QR لـ WiFi في الفنادق وإيجارات العطلات",
        "paragraphs": [
          "أنشئ رمز QR منفصلًا لـ WiFi لكل منطقة شبكة — WiFi غرف الضيوف، وWiFi الردهة، وWiFi منطقة المسبح — واطبعها على بطاقات بعلامة تجارية منفصلة. في الفنادق، قم بتغليف بطاقة رمز QR وضعها على مكتب الغرفة وعلى مرآة الحمام، حيث يبحث الضيوف بطبيعة الحال عن تعليمات الاتصال. ضع اسم الشبكة (SSID) وملاحظة تؤكد ما إذا كانت كلمة المرور معبأة مسبقًا، حتى يطمئن الضيوف إلى ما سيفعله المسح.",
          "بالنسبة لمضيفي Airbnb، فإن تضمين رمز QR لـ WiFi في كتيب ترحيب مخصص إلى جانب قواعد المنزل والتوصيات المحلية يحسّن بشكل كبير درجات رضا تسجيل الوصول. تستفيد المقاهي ومساحات العمل المشتركة أكثر من عروض الطاولات كبيرة الحجم مع رموز مؤطرة على ارتفاع العين. غيّر كلمات مرور WiFi شهريًا للأمان وببساطة أنشئ رمز QR جديدًا — لا حاجة لإعادة الطباعة إذا كنت تستخدم لوحات قوائم رقمية أو بطاقات قابلة للاستبدال."
        ]
      }
    ],
    "technicalOverview": {
      "title": "الدليل الكامل لرموز QR لـ WiFi للفنادق والمقاهي وإيجارات العطلات",
      "paragraphs": [
        "في الضيافة، لم يعد WiFi ميزة إضافية — إنه الوسيلة التي تحرك درجات الرضا والمراجعات عبر الإنترنت. تضعه الدراسات فوق 85%: هذه نسبة ضيوف الفنادق والمقاهي الذين يعتبرون WiFi السريع الخالي من العوائق أمرًا حاسمًا لإقامتهم. ومع ذلك فإن ما يقف في الطريق عادة هو كلمة مرور مكتوبة بخطأ واتصال بالاستقبال.",
        "يحمل رمز WiFi للضيافة بيانات الدخول بصيغة `WIFI:` القياسية (`WIFI:T:WPA;S:Hotel_Guest;P:SecretPass;H:false;;`). يوجّه الضيف الكاميرا، وينقر \"Join Network\"، ويصبح متصلًا في أقل من ثانيتين — لا كلمة مرور على الشاشة، ولا كتابة.",
        "يرشد هذا الدليل الفنادق والمنتجعات والمقاهي ومضيفي Airbnb خلال نشر رموز WiFi بعلامة تجارية عبر الغرف والطاولات ومناطق تسجيل الوصول لتقليل تذاكر الدعم، والحفاظ على أمان الشبكة، ورفع تجربة الضيف."
      ]
    },
    "comparisonTable": {
      "title": "الوصول إلى WiFi برمز QR مقابل بطاقات كلمات المرور اليدوية في الضيافة",
      "headers": [
        "عامل التشغيل",
        "رمز QR لـ WiFi للضيافة",
        "بطاقة كلمة مرور يدوية / سبورة"
      ],
      "rows": [
        [
          "وقت اتصال الضيف",
          "من 1 إلى 2 ثانية (مسح بالكاميرا ونقرة واحدة)",
          "من 45 إلى 90 ثانية (كتابة أكثر من 16 حرفًا معقدًا)"
        ],
        [
          "تذاكر دعم الاستقبال",
          "تقليل الاستفسارات المتعلقة بالـ WiFi بنسبة 80%+",
          "حجم كبير من مكالمات الضيوف طلبًا للمساعدة في كلمة المرور"
        ],
        [
          "معدل خطأ الكتابة",
          "0% (نقل دقيق بايت بايت)",
          "من 30% إلى 50% مع كلمات المرور المعقدة التي تحتوي على رموز"
        ],
        [
          "أمان كلمة المرور",
          "يمنع الضيوف من رؤية مفاتيح المرور بنص واضح",
          "يكشف كلمات المرور على السبورات واللافتات العامة"
        ],
        [
          "تأثير مراجعات الضيوف",
          "يرفع رضا الضيوف ودرجات تسجيل الوصول",
          "الإحباط من الاتصال يؤدي إلى مراجعات سلبية"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "اعزل شبكة ضيوف مخصصة على جهاز التوجيه لديك",
        "description": "شغّل WiFi الضيوف على VLAN معزول مع تفعيل عزل العملاء، حتى لا يتمكن الضيوف من الوصول إلى أنظمتك الداخلية أبدًا."
      },
      {
        "number": 2,
        "title": "أنشئ رمز QR لـ WiFi بعلامة تجارية مع تصحيح أخطاء من المستوى H",
        "description": "أدخل SSID وكلمة مرور الضيوف، وطبّق علامتك التجارية، وضع أيقونة WiFi أو شعارك في المنتصف."
      },
      {
        "number": 3,
        "title": "اطبع على حوامل طاولة أكريليك متميزة أو بطاقات خشبية لطاولة الليل",
        "description": "اعرض الرمز على ارتفاع العين — مكتب الفندق، أو طاولة السرير، أو كاونتر المقهى، أو كتيب ترحيب الإيجار."
      }
    ],
    "features": [
      {
        "title": "اتصال فوري وبلا عوائق للضيوف",
        "description": "مسح بالكاميرا بنقرة واحدة يُنهي إحباط كلمة المرور ومكالمات الاستقبال."
      },
      {
        "title": "يدعم WPA3 وWPA2 وWEP والشبكات المخفية",
        "description": "يعمل مع جهاز توجيه شبكي للمؤسسات أو مع إعداد إيجار بوتيكي على حد سواء."
      },
      {
        "title": "صفر تخزين على الخادم وخصوصية كاملة",
        "description": "تبقى بيانات اعتماد الشبكة في متصفحك. لا يُخزَّن أي شيء خارجيًا."
      },
      {
        "title": "SVG متجه عالي الدقة للوحات الفاخرة",
        "description": "متجه حاد للنقش بالليزر على الخشب أو لوح نحاسي، أو لحامل أكريليك راقٍ."
      }
    ],
    "sizingMatrix": {
      "title": "دليل حجم عرض رموز WiFi وركيزته في الضيافة",
      "description": "ضع رموز WiFi حيث يبحث الضيوف الواصلون بطبيعتهم عن تعليمات الاتصال.",
      "headers": [
        "بيئة الضيافة",
        "مسافة المسح",
        "حجم الطباعة الموصى به",
        "المادة الموصى بها"
      ],
      "rows": [
        [
          "طاولات الليل ومكاتب غرف الفندق",
          "25 سم - 40 سم (10\" - 16\")",
          "45 مم × 45 مم (1.8\" × 1.8\")",
          "بطاقة مطفأة مؤطرة / حامل أكريليك"
        ],
        [
          "قوائم طاولات المقهى وحوامل الكؤوس",
          "20 سم - 30 سم (8\" - 12\")",
          "40 مم × 40 مم (1.6\" × 1.6\")",
          "خشب منقوش بالليزر / بطاقة مُغلّفة"
        ],
        [
          "كتيبات ترحيب Airbnb ومغناطيس الثلاجة",
          "20 سم - 35 سم (8\" - 14\")",
          "35 مم × 35 مم (1.4\" × 1.4\")",
          "بطاقة مطفأة ثقيلة / لوح مغناطيسي"
        ],
        [
          "مكاتب تسجيل الوصول والاستقبال بالفندق",
          "40 سم - 80 سم (16\" - 32\")",
          "75 مم × 75 مم (3.0\" × 3.0\")",
          "عرض بطاقة دعم على الكاونتر"
        ],
        [
          "لافتات مراكز المؤتمرات وقاعات الفعاليات",
          "1.0 م - 2.0 م (3 أقدام - 6.5 أقدام)",
          "150 مم × 150 مم (6.0\" × 6.0\")",
          "لافتة قماشية غير عاكسة"
        ]
      ]
    },
    "useCases": [
      {
        "title": "الفنادق والنزل البوتيكية والمنتجعات",
        "description": "بطاقة مؤطرة على المكتب أو المرآة تصل بالضيف إلى الإنترنت لحظة دخوله."
      },
      {
        "title": "Airbnb وVRBO وإيجارات العطلات",
        "description": "رمز في كتيب الترحيب أو على مغناطيس الثلاجة ينهي سؤال «ما هو WiFi؟» عند تسجيل الوصول."
      },
      {
        "title": "المقاهي والكافيهات ومساحات العمل المشتركة",
        "description": "رمز على عرض طاولة يقلل مقاطعات الموظفين ويجعل الزبائن يبقون لفترة أطول."
      },
      {
        "title": "قاعات الفعاليات والمؤتمرات والولائم",
        "description": "مئات يتصلون في الوقت نفسه عند تسجيل الوصول، مما يخفف الازدحام الخلوي في القاعة."
      },
      {
        "title": "صالات المطارات ومناطق الانتظار التنفيذية",
        "description": "يتصل المسافرون لأغراض العمل بشبكة WiFi آمنة وعالية السرعة للضيوف دون أن يسألوا."
      }
    ],
    "troubleshooting": {
      "title": "منع أعطال رموز QR لـ WiFi في الضيافة الشائعة",
      "points": [
        "عدم تطابق حالة الأحرف. أسماء الشبكات حساسة لحالة الأحرف — فـ «HotelGuest» و«hotelguest» مختلفان. طابقهما تمامًا.",
        "نوع أمان خاطئ. اختيار WEP لجهاز توجيه WPA2 يُفشل المصافحة. اختر WPA/WPA2/WPA3.",
        "بوابة الأسر (Captive Portal). إذا كانت شبكتك تحتوي على صفحة شروط، فإن الرمز يصل الراديو ثم تظهر صفحة ترحيب المتصفح. هذا طبيعي.",
        "نقص علامة الشبكة المخفية. الـ SSID المخفي يحتاج تفعيل مفتاح \"Hidden Network\"، وإلا فلن تتصل الأجهزة.",
        "عرض ملطخ. الانسكابات والطبقات المخدوشة تحجب أنماط التحديد. استخدم أكريليكًا متينًا أو خشبًا منقوشًا بالليزر."
      ]
    },
    "faqs": [
      {
        "q": "كيف يصل رمز WiFi QR بالضيوف دون كتابة كلمة مرور؟",
        "a": "يرمّز معلمات WIFI: القياسية. تقرأ كاميرا الهاتف SSID وكلمة المرور من الصورة وتبدأ الاتصال اللاسلكي تلقائيًا."
      },
      {
        "q": "هل من الآمن عرض رمز WiFi QR في غرف الفنادق والمقاهي؟",
        "a": "نعم، بشرط أن يكون الرمز لشبكة ضيوف مخصصة مع تفعيل عزل العملاء — وهذا يُبقي الضيوف بعيدًا عن أنظمة الإدارة الداخلية لديك."
      },
      {
        "q": "هل يعمل رمز WiFi QR على آيفون وهواتف Android معًا؟",
        "a": "آيفون بنظام iOS 11+ وهواتف Android بنظام Android 10+ تتعرف على صيغة WIFI: من الكاميرا وتعرض الانضمام بنقرة واحدة."
      },
      {
        "q": "ماذا يحدث إذا غيّرت كلمة مرور WiFi الخاصة بالضيوف مستقبلًا؟",
        "a": "يتوقف الرمز القديم عن العمل، لأن كلمة المرور المحددة مثبتة في الوحدات. التغيير يعني طباعة رمز جديد."
      },
      {
        "q": "هل يمكنني إضافة شعار فندقي أو مقهى إلى رمز WiFi QR؟",
        "a": "نعم. مع تصحيح المستوى H، لا يُكلّف شعار المكان أو أيقونة WiFi في المنتصف أي فقد في الموثوقية."
      },
      {
        "q": "ما أفضل مادة لعروض WiFi على طاولة الليل في الفندق؟",
        "a": "أكريليك مطفأ، أو كتلة خشبية منقوشة بالليزر، أو بطاقة مؤطرة بزجاج غير عاكس — جميلة المظهر وخالية من الوهج عند المسح."
      },
      {
        "q": "هل تنتهي صلاحية رموز WiFi QR أو تفرض رسومًا شهرية؟",
        "a": "لا. يدوم رمز WiFi الثابت إلى أجل غير مسمى. يمكن لأي عدد من الضيوف مسحه، ولا يُفرض أي رسوم أبدًا."
      },
      {
        "q": "هل تُخزَّن كلمة مرور WiFi الخاصة بي على خوادم خارجية أثناء التوليد؟",
        "a": "تبقى محلية. يولّد متصفحك الرمز، لذلك لا تُرفع بيانات الاعتماد أو تُسجَّل أو تُشارَك أبدًا."
      }
    ],
    "bestPractices": "اعزل WiFi الضيوف في VLAN خاص به، واعرض الرمز على ارتفاع العين على حامل مطفأ غير عاكس، وأضف عبارة قصيرة مثل «امسح للاتصال بـ WiFi الضيوف»."
  },
  '/bulk-qr-code-generator': {
    "sections": [
      {
        "title": "إنتاج رموز QR بكميات كبيرة للأعمال والتسويق",
        "paragraphs": [
          "ارفع ملف CSV، أو الصق قائمة تحتوي على عنوان URL واحد في كل سطر. يبني المولّد كل رمز داخل متصفحك مباشرة. لا يُرفع أي شيء تلصقه إلى أي مكان.",
          "احفظها واحدًا تلو الآخر، أو خذ الدفعة كاملة في ملف ZIP واحد. إنها الطريقة السريعة لوسم دفعة منتج، أو تزويد فعالية بالشارات، أو تعبئة بريد جماعي."
        ]
      }
    ]
  },
  '/qr-code-scanner': {
    "sections": [
      {
        "title": "امسح رموز QR وفك تشفيرها فورًا",
        "paragraphs": [
          "وجّه كاميرا هاتفك أو حاسوبك المحمول نحو الرمز لقراءته مباشرة. لا توجد كاميرا في متناول يدك؟ أسقط لقطة شاشة أو صورة وسيُفك تشفيرها أيضًا.",
          "كل شيء يعمل داخل المتصفح على جهازك. يبقى بث الكاميرا والصور التي ترفعها هناك."
        ]
      }
    ]
  },
  '/social-media-qr-code': {
    "sections": [
      {
        "title": "لوحة واحدة لكل رموز QR الخاصة بوسائل التواصل الاجتماعي",
        "paragraphs": [
          "ضع جميع أسماء المستخدمين وروابط ملفاتك الشخصية في نموذج واحد. ستحصل على رمز منفصل لكل منها، ملوّن بما يتناسب مع المنصة التي يشير إليها.",
          "يُحمَّل كل رمز بشكل منفصل بصيغة PNG أو SVG. استخدمها على بطاقة عمل، أو في حقيبة إعلامية، أو في أي حملة تديرها."
        ]
      }
    ]
  },
  '/blog/how-to-scan-qr-code': {
    "sections": [
      {
        "title": "الماسح المدمج في كاميرتك",
        "paragraphs": [
          "منذ iOS 11 وAndroid 9، تقرأ الكاميرا العادية رموز QR بمفردها — لا حاجة لتثبيت تطبيق. وجّهها نحو الرمز، وثبّتها ثانية واحدة، وسيظهر شريط رابط. اضغط عليه وستصل إلى الوجهة.",
          "إذا لم يظهر شيء، فغالبًا ما يكون الرمز صغيرًا جدًا في الإطار. اقترب حتى يملأ نحو ثلث الشاشة. على بعض هواتف Samsung يجب أيضًا تفعيل مسح QR داخل إعدادات الكاميرا."
        ]
      },
      {
        "title": "عندما يكون الرمز على شاشتك أنت",
        "paragraphs": [
          "لا تستطيع الكاميرا أن تُوجَّه إلى نفسها، لذلك يحتاج الرمز الذي أرسله لك أحدهم إلى طريقة مختلفة. على آيفون، التقط لقطة شاشة، وافتح الصورة في Photos، واضغط زر Live Text لاستخراج الرابط. على Android، احفظ الصورة وافتحها في Google Photos، ثم اضغط Lens.",
          "Google Lens هو أيضًا الخيار الاحتياطي الموثوق كلما رفضت كاميرا Android قراءة رمز في العالم الحقيقي — افتح Lens ووجّهه، وسيفك تشفير الرمز مع أي نص يحيط به."
        ]
      }
    ]
  },
  '/blog/do-qr-codes-expire': {
    "sections": [
      {
        "title": "الرموز الثابتة تحتفظ بالبيانات بذاتها",
        "paragraphs": [
          "يخزّن رمز QR الثابت معلوماته داخل النمط نفسه — رابط، أو رقم هاتف، أو كلمة مرور WiFi. لا يتحلل شيء في ذلك النمط. على طباعة نظيفة ومحمية، سيُمسح بعد سنوات تمامًا كما يُمسح اليوم.",
          "عندما يبدو الرمز الثابت «منتهي الصلاحية»، فالنمط نادرًا ما يكون هو المسؤول. الصفحة التي كان يشير إليها حُذفت، أو تغيّر الرابط، أو أُعيد تعيين كلمة المرور. ما يزال الرمز يُفك تشفيره إلى العنوان نفسه؛ لكن ذلك العنوان لم يعد يقود إلى أي مكان."
        ]
      },
      {
        "title": "الرموز الديناميكية تعتمد على خدمة",
        "paragraphs": [
          "يشير الرمز الديناميكي إلى رابط تحويل قصير يملكه مزوّد، ويعيد توجيه كل مسح إلى وجهتك الحقيقية. يتيح ذلك تغيير الهدف دون إعادة طباعة — لكن الرمز يعيش ويموت الآن مع ذلك الحساب وتلك الشركة.",
          "احذر من فخ التجربة المجانية: بعض مولدات QR الديناميكية «المجانية» تعطّل التحويل بعد أسبوعين إن لم تدفع، وقد يُبطل ذلك ألف منشور مطبوع في عصر يوم واحد. الرموز المولّدة هنا ثابتة، فلا شيء ينتهي ولا اشتراك يلزم إبقاؤه حيًا."
        ]
      }
    ]
  },
  '/blog/share-wifi-password-qr-code': {
    "sections": [
      {
        "title": "رمز واحد، أي هاتف",
        "paragraphs": [
          "يحمل رمز QR لـ WiFi ثلاثة أشياء — اسم الشبكة وكلمة المرور ونوع الأمان — فيعرض مسح واحد الانضمام دون كتابة أي شيء. على آيفون لا تظهر كلمة المرور على الشاشة أصلًا، وهذه ميزة هادئة في مقهى مزدحم.",
          "إنشاؤه يستغرق أقل من دقيقة: أدخل اسم الشبكة وكلمة المرور، واختر WPA2 أو WPA3، ونزّل الصورة. ضعه على شبكة للضيوف لا على الشبكة التي يستخدمها حاسوبك المحمول للعمل، لأن أي شخص يرى الرمز يستطيع الانضمام."
        ]
      },
      {
        "title": "حالة iPhone إلى Mac",
        "paragraphs": [
          "لدى Android اختصار يستحق المعرفة: في إعدادات WiFi يمكنك النقر على Share فيعرض الهاتف رمز QR للشبكة التي أنت متصل بها بالفعل، دون حاجة إلى أي مولّد. يمسح آيفون الرموز بالطريقة نفسها، لكنه لا يولّد واحدًا مدمجًا.",
          "من iPhone إلى Mac، يكون المسح مُحرجًا، لأن Mac لا يقرأ رمز الحائط كما يفعل الهاتف. المسار السلس يتجاوز QR: قرّب آيفون مفتوح القفل من Mac وهو يحاول الاتصال، وسيظهر تنبيه يعرض إرسال كلمة المرور. احتفظ برمز QR كخيار شامل لضيوف Android وWindows."
        ]
      }
    ]
  },
  '/pdf-qr-code-generator': {
    "sections": [
      {
        "title": "ثورة PDF وQR الحديثة للقوائم والكتيبات",
        "paragraphs": [
          "كتالوج مطبوع أو قائمة مغلفة تكلف مالًا لصنعها، وتتجمد لحظة خروجها من المطبعة. غيّر سعرًا واحدًا أو بدّل طبقًا موسميًا، وبالطريقة القديمة كان عليك إعادة طباعة الدفعة كلها. تقع هذه الفاتورة على المطاعم وفرق معارض التجارة ومكاتب العقارات وأقسام التدريب على حد سواء.",
          "يقطع رمز PDF وQR الرابط بين الطباعة والملف الذي خلفها. ضعه على بطاقة طاولة أو صندوق أو جناح أو نافذة متجر. يوجّه العميل الكاميرا، فيُفتح كتيبك أو قائمتك أو دليلك كاملًا خلال ثوانٍ."
        ]
      },
      {
        "title": "رموز PDF وQR الثابتة مقابل الديناميكية: تحديث القوائم دون إعادة طباعة",
        "paragraphs": [
          "يدمج رمز PDF الثابت الرابط مباشرة داخل مصفوفة البكسلات. انقل ملف Google Drive وسيصبح الرمز المطبوع ميتًا. أما الديناميكي فيشير إلى رابط تحويل قصير — شيء مثل qr-generator.online/r/menu — ولا يتغير ذلك الرابط القصير أبدًا.",
          "لذلك عندما تتغير العروض الأسبوعية، أو يرتفع سعر مشروب بنصف دولار، أو تصدر طبعة جديدة من الكتالوج، فكل ما عليك فعله هو إعادة توجيه التحويل من لوحة التحكم. تستمر طاولات المطعم في العمل. لا شيء يُعاد طباعته."
        ]
      },
      {
        "title": "تطبيقات PDF وQR حسب القطاع",
        "paragraphs": [
          "تضع المطاعم على الطاولة رمزًا يفتح قائمة الطعام والكوكتيلات، مع ملاحظات الحساسية وصور الأطباق. يضع الوكلاء رمزًا على لافتة العقار ليستطيع المشترون استعراض المخططات وإفصاحات جمعية الملاك في الحال.",
          "يتخلى المصنّعون عن الدليل الورقي السميك كليًا، ويطبعون رمزًا صغيرًا على العلبة يقود إلى دليل المستخدم الكامل."
        ]
      }
    ]
  },
  '/app-store-qr-code-generator': {
    "sections": [
      {
        "title": "رموز QR الذكية لمتجر التطبيقات وكسب تطبيقات الجوال",
        "paragraphs": [
          "تخيّل تطبيقك على ملصق في مترو الأنفاق، أو على علبة حبوب إفطار، أو في إعلان تلفزيوني، أو على لافتة معرض تجاري. لتثبيته، على شخص ما أن يفتح قفل هاتفه، ويفتح المتجر الصحيح، ويكتب اسمك بشكل صحيح، ويختارك من قائمة المنافسين. يتوقف معظم الناس في مكان ما على امتداد تلك السلسلة — وفق التقديرات الشائعة، نحو اثنين من كل ثلاثة.",
          "يُلغي رمز App Store الذكي الواحد تلك الخطوات. امسحه، فيتعرف على الجهاز: يصل آيفون إلى Apple App Store، ويصل هاتف Android إلى Google Play. لا يحتاج الشخص إلى البحث عن شيء أبدًا."
        ]
      },
      {
        "title": "لماذا تفشل رموز QR المزدوجة مقابل رمز QR الذكي الموحّد",
        "paragraphs": [
          "اطبع رمزين جنبًا إلى جنب، أحدهما لـ iOS والآخر لـ Android، فأنت تستدعي المتاعب. يبدو التصميم مزدحمًا، ويتردد الناس في اختيار رمزهم، وكثيرًا ما تلتقط الكاميرات الباركود الخطأ عندما يكون الرمزان قريبين.",
          "يتجاوز الرمز الذكي الواحد كل ذلك. يحصل كل هاتف على مسح وتثبيت في ثانية واحدة، ومن يمسح من حاسوب يصل إلى موقعك الترويجي بدلًا من ذلك."
        ]
      },
      {
        "title": "قياس تثبيت التطبيق في الوقت الفعلي والإسناد",
        "paragraphs": [
          "شغّل رموز App Store الخاصة بك هنا كرموز ديناميكية، وسينفتح القمع الكامل. يمكنك رؤية كيف يتوزع الانقسام بين iOS وAndroid فعليًا، والمناطق التي تنشط، والأوقات من اليوم التي تتجمع فيها عمليات المسح."
        ]
      }
    ]
  }
};
