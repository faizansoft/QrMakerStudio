/**
 * Localized deep body content for the `vi` locale.
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
        title: 'Nhận Thanh Toán UPI Ở Bất Kỳ Đâu Tại Ấn Độ',
        paragraphs: [
          'In mã QR UPI cho quầy cửa hàng, quầy chợ, hóa đơn và cửa hàng trực tuyến. Hỗ trợ số tiền và tên người nhận điền sẵn để thanh toán nhanh hơn.',
          'Tương thích với mọi ứng dụng UPI lớn gồm Google Pay, PhonePe, Paytm, BHIM và Amazon Pay.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & NPCI Specification of UPI QR Codes',
      paragraphs: [
        'Một mã QR UPI mang URI thanh toán NPCI (`upi://pay?pa={vpa}&pn={name}&am={amount}&cu=INR`). Quét nó trong bất kỳ ứng dụng UPI nào ở Ấn Độ và nó đọc VPA, tên người nhận, đơn vị tiền và bất kỳ số tiền đặt trước nào.',
        'Vì NPCI chuẩn hóa UPI trên toàn Ấn Độ, một mã hoạt động trong Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED và mọi ứng dụng ngân hàng — không khóa độc quyền.',
        'Các mã tĩnh vĩnh viễn không hoa hồng nền tảng, mang thương hiệu cửa hàng tùy chỉnh, và xuất vector SVG cho bảng để quầy.'
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
        title: 'Nhập UPI ID (VPA) và Tên Người Nhận',
        description: 'Gõ UPI ID của bạn (ví dụ yourname@oksbi, merchant@paytm), tên doanh nghiệp của bạn, và một số tiền cố định tùy chọn.'
      },
      {
        number: 2,
        title: 'Tùy Chỉnh Màu và Nhúng Logo UPI',
        description: 'Đặt màu, tạo lại kiểu mắt góc, và thêm logo UPI hoặc cửa hàng vào giữa.'
      },
      {
        number: 3,
        title: 'Tải ở Định Dạng SVG hoặc PNG',
        description: 'Xuất mã sẵn sàng để in cho quầy, hóa đơn, giá acrylic và hóa đơn số.'
      }
    ],
    features: [
      {
        title: 'Khả Năng Tương Tác Ứng Dụng UPI Phổ Quát',
        description: 'Hoạt động trong Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED và mọi ứng dụng ngân hàng Ấn Độ.'
      },
      {
        title: 'Không Hoa Hồng Nền Tảng',
        description: 'Miễn phí, không phí giao dịch, phí cài đặt hay đăng ký.'
      },
      {
        title: 'Giao Thức UPI NPCI Chuẩn',
        description: 'Tạo các chuỗi upi://pay tuân thủ, đọc được trên mọi máy quét.'
      },
      {
        title: 'SVG Vector cho Trưng Bày Cửa Hàng',
        description: 'In giá để quầy, nhãn dán và bảng treo tường bền mà không vỡ hạt.'
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
        title: 'Cửa Hàng Bán Lẻ và Siêu Thị',
        description: 'Một mã tại quầy tính tiền nhận thanh toán nhanh, không chạm mà không phải thuê máy POS.'
      },
      {
        title: 'Freelancer và Nhà Cung Cấp Dịch Vụ',
        description: 'Một mã trên hóa đơn tất toán thẳng vào ngân hàng mà không chậm trễ chuyển khoản.'
      },
      {
        title: 'Nhà Hàng, Quán Cà Phê và Xe Bán Đồ Ăn',
        description: 'Một mã trên bàn hoặc kẹp hóa đơn cho thực khách thanh toán ngay tại chỗ ngồi.'
      },
      {
        title: 'Quyên Góp và Lễ Hội Văn Hóa',
        description: 'Thu đóng góp không tiền mặt và phí vào cổng tại một lễ hội hay một quỹ.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for UPI QR Code Payments',
      points: [
        'Kiểm tra VPA. Xác nhận UPI ID của bạn (ví dụ mobile@upi, name@bank) trước một đợt in hàng loạt.',
        'Kèm tên người nhận. Thêm tham số pn để khách xác minh người nhận trước khi duyệt.',
        'Tương phản. Đen hoặc xanh navy đậm trên nền trắng đọc nhanh dưới ánh sáng cửa hàng mờ.',
        'Bảo vệ bản in. Cán màng mã hoặc dùng một giá acrylic để trầy xước không làm hỏng lượt quét.',
        'Thử trên nhiều ứng dụng. Quét bằng GPay, PhonePe và Paytm để xác nhận luồng.'
      ]
    },
    faqs: [
      {
        q: 'UPI ID (VPA) là gì và tôi tìm nó ở đâu?',
        a: 'Đó là định danh gắn với tài khoản ngân hàng của bạn — yourname@oksbi, mobile@paytm — hiển thị trong hồ sơ GPay, PhonePe hoặc Paytm của bạn.'
      },
      {
        q: 'Những ứng dụng thanh toán nào có thể quét mã QR UPI này?',
        a: 'Mọi ứng dụng UPI ở Ấn Độ: Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, CRED và các ứng dụng ngân hàng.'
      },
      {
        q: 'Tôi có thể điền sẵn một số tiền thanh toán cố định trong mã QR không?',
        a: 'Nhập một số tiền và ứng dụng của người trả hiển thị đúng số đó khi quét.'
      },
      {
        q: 'Có phí nền tảng nào từ QR Generator Online không?',
        a: 'Không — miễn phí, không phí giao dịch hay phí định kỳ.'
      },
      {
        q: 'Mã QR UPI có hết hạn không?',
        a: 'Không — nó hoạt động cho tới khi UPI ID liên kết bị vô hiệu hóa.'
      },
      {
        q: 'Tôi có thể thêm logo cửa hàng hay công ty vào mã QR UPI không?',
        a: 'Đặt logo cửa hàng của bạn hoặc biểu tượng UPI vào giữa.'
      },
      {
        q: 'Tôi nên tải định dạng nào để in giá để quầy?',
        a: 'SVG vector cho bản in khổ lớn sắc nét trên giá acrylic, sunboard và vinyl.'
      },
      {
        q: 'Thông tin ngân hàng của tôi có an toàn khi tạo không?',
        a: 'Có — các chi tiết ở lại trên thiết bị của bạn và không bao giờ được gửi ra ngoài.'
      }
    ],
    bestPractices: 'Đặt mã trên một bảng acrylic với logo UPI, liệt kê «Chấp nhận: GPay, PhonePe, Paytm, BHIM», và quét thử bằng vài ứng dụng trước khi đặt lên quầy.'
  },
  '/paypal-qr-code-generator': {
    sections: [
      {
        title: 'Thu Thanh Toán Không Chạm Trở Nên Đơn Giản',
        paragraphs: [
          'In mã QR PayPal cho quầy chợ, hóa đơn freelance, hũ quyên góp và thu tiền tip. Khách quét và thanh toán ngay mà không cần gõ email của bạn.',
          'Hoạt động với tên người dùng PayPal.me và URL thanh toán PayPal trực tiếp.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Security of PayPal QR Codes',
      paragraphs: [
        'Một mã QR PayPal mang URI thanh toán PayPal.me (`https://paypal.me/{username}/{amount}`) hoặc một URL thanh toán trực tiếp. Quét nó mở ứng dụng PayPal hoặc một trang thanh toán di động, với tài khoản của bạn đặt làm người nhận và — nếu bạn nêu một số tiền — số tiền đã được điền sẵn.',
        'Điều đó cho một cửa hàng, một freelancer, một người bán chợ hay một tổ chức từ thiện nhận thanh toán không tiền mặt mà không phải mua hay thuê một máy quẹt thẻ.',
        'Các mã giữ tĩnh và không bao giờ hết hạn, không mang phí nền tảng, dùng mã hóa phía trình duyệt, và xuất ra SVG vector cho giá quầy và tiêu đề hóa đơn.'
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
        title: 'Nhập Tên Người Dùng hoặc Liên Kết PayPal.me',
        description: 'Nhập tên người dùng PayPal.me của bạn (ví dụ tenban), hoặc dán liên kết thanh toán đầy đủ.'
      },
      {
        number: 2,
        title: 'Tạo Kiểu bằng Màu Xanh PayPal và Logo',
        description: 'Dùng màu xanh PayPal (#003087, #0079C1), chọn một mẫu chấm, và thêm logo PayPal.'
      },
      {
        number: 3,
        title: 'Tải ở Định Dạng SVG hoặc PNG',
        description: 'Xuất mã độ phân giải cao cho hóa đơn, bảng để quầy và nhãn dán.'
      }
    ],
    features: [
      {
        title: 'Không Phí Nền Tảng',
        description: 'Trình tạo miễn phí, không phí giao dịch hay hoa hồng cộng vào các khoản thanh toán của bạn.'
      },
      {
        title: 'Thanh Toán Di Động Tức Thì',
        description: 'Mở ứng dụng PayPal hoặc trang thanh toán di động trực tiếp cho một khoản trả nhanh.'
      },
      {
        title: 'SVG Vector cho Biển Hiệu',
        description: 'Vector sắc nét cho giá quầy acrylic bền, nhãn dán và thực đơn.'
      },
      {
        title: 'Bảo Mật Cấp Ngân Hàng',
        description: 'Không thông tin tài chính nào chạm tới máy chủ — việc mã hóa chạy trong trình duyệt của bạn.'
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
        title: 'Chợ Nông Sản và Cửa Hàng Pop-Up',
        description: 'Nhận thanh toán không chạm tại một quầy hay một hội chợ thủ công, không máy quẹt và không đầu đọc thẻ.'
      },
      {
        title: 'Hóa Đơn của Freelancer và Nhà Thầu',
        description: 'Một mã trên hóa đơn PDF cho một khách thanh toán ngay bằng cách quét.'
      },
      {
        title: 'Hũ Tiền Tip của Nhạc Sĩ và Biểu Diễn Đường Phố',
        description: 'Thu tiền tip không tiền mặt tại một buổi diễn trực tiếp hoặc một quầy dịch vụ.'
      },
      {
        title: 'Quyên Góp Từ Thiện Phi Lợi Nhuận',
        description: 'Một mã quyên góp nằm trên một bàn tiệc gala, một banner hay một tờ rơi gây quỹ.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for PayPal QR Code Payments',
      points: [
        'Nhận liên kết trước. Bảo đảm liên kết PayPal.me của bạn đang hoạt động trong cài đặt tài khoản trước khi in.',
        'Điền sẵn số tiền nếu muốn. Thêm nó vào liên kết — paypal.me/user/25 — cho một món hàng giá cố định.',
        'Tương phản. Xanh PayPal đậm hay đen trên nền trắng đọc nhanh nhất.',
        'Kích thước logo. Giữ dưới 30% chiều rộng để sửa lỗi Mức H giữ dữ liệu nguyên vẹn.',
        'Thử bằng tiền thật. Thực hiện một khoản trả trực tiếp nhỏ để xác nhận nó rơi vào đúng ví PayPal.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi tạo một mã QR PayPal.me?',
        a: 'Nhập tên người dùng PayPal.me của bạn (ví dụ doanhnghiepcuaban) hoặc dán liên kết đầy đủ, tạo kiểu, và tải về.'
      },
      {
        q: 'Tôi có thể đặt một số tiền thanh toán cố định trong mã QR không?',
        a: 'Thêm số tiền vào liên kết của bạn — https://paypal.me/doanhnghiepcuaban/25 cho 25 $.'
      },
      {
        q: 'Khách có cần một tài khoản PayPal để trả không?',
        a: 'Người có PayPal trả chỉ một chạm; người không có vẫn có thể trả bằng thẻ ghi nợ hoặc tín dụng qua thanh toán khách của PayPal.'
      },
      {
        q: 'Có phí nào từ QR Generator Online không?',
        a: 'Không từ chúng tôi — 0%. Phí giao dịch PayPal tiêu chuẩn áp dụng theo thỏa thuận PayPal của bạn.'
      },
      {
        q: 'Mã QR PayPal có hết hạn không?',
        a: 'Không. Mã tồn tại chừng nào tài khoản PayPal của bạn còn mở.'
      },
      {
        q: 'Tôi có thể nhúng logo PayPal vào giữa không?',
        a: 'Đặt biểu tượng «PP» của PayPal hoặc logo của riêng bạn vào giữa.'
      },
      {
        q: 'Định dạng nào tốt nhất để in biển quầy?',
        a: 'SVG vector cho một giá acrylic lớn hoặc banner, hoặc PNG cho một tiêu đề hóa đơn.'
      },
      {
        q: 'Thông tin tài chính của tôi có an toàn khi tạo không?',
        a: 'Có. Không gì được truyền đi; mã được ghép lại ngay trong trình duyệt của bạn.'
      }
    ],
    bestPractices: 'Dùng nhận diện màu xanh PayPal trên một giá quầy acrylic với một dòng rõ ràng «Quét để Thanh toán bằng PayPal», và xuất SVG vector.'
  },
  '/telegram-qr-code-generator': {
    sections: [
      {
        title: 'Phát Triển Cộng Đồng Telegram của Bạn',
        paragraphs: [
          'Chia sẻ liên kết tham gia nhóm Telegram qua mã QR trên website, diễn đàn, mạng xã hội và tài liệu in để xây dựng cộng đồng dễ dàng.',
          'Hỗ trợ hồ sơ cá nhân, nhóm công khai, liên kết mời riêng tư và kênh.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Protocols of Telegram QR Codes',
      paragraphs: [
        'Một mã QR Telegram mang liên kết phổ quát (`https://t.me/{username}` hoặc `https://t.me/joinchat/{inviteHash}`). Quét nó và điện thoại ánh xạ nó tới lược đồ Telegram (`tg://resolve?domain={username}`), mở cuộc trò chuyện, nhóm, kênh hoặc bot trong ứng dụng.',
        'Điều đó loại bỏ bước tìm kiếm và cho một người dùng tham gia một kênh công khai, một cộng đồng riêng tư hay một cuộc trò chuyện hỗ trợ chỉ một chạm.',
        'Các mã là tĩnh, riêng tư và tùy chỉnh hoàn toàn bằng màu xanh Telegram với xuất vector SVG.'
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
        title: 'Nhập Tên Người Dùng, Nhóm hoặc Liên Kết Kênh Telegram',
        description: 'Gõ tên người dùng hoặc tên kênh của bạn (ví dụ username), hoặc dán một liên kết mời nhóm.'
      },
      {
        number: 2,
        title: 'Tạo Kiểu bằng Màu Xanh Telegram và Logo Máy Bay Giấy',
        description: 'Dùng màu xanh Telegram (#0088CC), đặt hình góc, và thêm logo máy bay giấy.'
      },
      {
        number: 3,
        title: 'Tải ở Định Dạng SVG hoặc PNG',
        description: 'Xuất mã độ phân giải cao cho một website, một tờ rơi, bao bì hoặc một banner sự kiện.'
      }
    ],
    features: [
      {
        title: 'Khởi Chạy Ứng Dụng Telegram Một Chạm',
        description: 'Một lượt quét mở ứng dụng Telegram thẳng tới cuộc trò chuyện, nhóm hoặc kênh.'
      },
      {
        title: 'Vĩnh Viễn và Miễn Phí Mãi Mãi',
        description: 'Một mã tĩnh tiếp tục hoạt động mãi, không giới hạn quét và không tốn phí.'
      },
      {
        title: 'Định Dạng Vector SVG',
        description: 'Vector co giãn cho banner, tờ rơi và hàng lưu niệm.'
      },
      {
        title: 'Bảo Vệ Quyền Riêng Tư 100%',
        description: 'Chạy phía trình duyệt, không ghi log hay lưu liên kết.'
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
        title: 'Phát Triển Cộng Đồng Crypto và Web3',
        description: 'Một tờ rơi hay một mã hội nghị kéo nhà đầu tư vào nhóm Telegram chính thức của bạn.'
      },
      {
        title: 'Kênh Hỗ Trợ Khách Hàng',
        description: 'Một mã trên bao bì hoặc một sách hướng dẫn mở một cuộc trò chuyện hỗ trợ một-đối-một.'
      },
      {
        title: 'Kênh Phát Tin Tức và Tín Hiệu',
        description: 'Một mã trong một ấn phẩm in đưa người đọc tới luồng Telegram thời gian thực của bạn.'
      },
      {
        title: 'Nhóm Người Dự Sự Kiện và Hội Nghị',
        description: 'Một mã trên thẻ đưa người dự vào một nhóm kết nối tạm thời.'
      }
    ],
    troubleshooting: {
      title: '5 Common Telegram QR Code Pitfalls',
      points: [
        'Một dấu @ trong tên người dùng. Nhập tên người dùng sạch không có «@» để có một liên kết t.me hợp lệ.',
        'Nhóm riêng tư. Với một nhóm riêng tư, dùng định dạng mời đầy đủ t.me/joinchat hoặc t.me/+.',
        'Tương phản. Giữ nền trước màu xanh trên nền trắng.',
        'Kích thước logo. Một logo ở giữa không nên che quá 30% chiều rộng.',
        'Thử trên di động. Xác nhận lượt quét mở ứng dụng Telegram trên cả iOS lẫn Android.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi tạo một mã QR cho một kênh hay nhóm Telegram?',
        a: 'Sao chép liên kết kênh công khai (https://t.me/yourchannel) hoặc liên kết mời nhóm, dán vào, tạo kiểu, và tải về.'
      },
      {
        q: 'Quét có mở ứng dụng Telegram tự động không?',
        a: 'Trên một điện thoại đã cài Telegram, liên kết t.me mở cuộc trò chuyện hoặc kênh trực tiếp.'
      },
      {
        q: 'Tôi có thể tạo một mã QR cho một Bot Telegram không?',
        a: 'Dán liên kết bot (ví dụ https://t.me/your_bot) và lượt quét mở bot với nút Bắt đầu sẵn sàng.'
      },
      {
        q: 'Mã QR Telegram có hết hạn không?',
        a: 'Không — chừng nào liên kết còn sống, mã cũng vậy.'
      },
      {
        q: 'Tôi có thể nhúng logo máy bay giấy Telegram vào giữa không?',
        a: 'Tải lên biểu tượng Telegram hoặc logo cộng đồng của bạn cho phần giữa.'
      },
      {
        q: 'Có phí hay giới hạn quét nào không?',
        a: 'Không — miễn phí, quét không giới hạn, không hình mờ, không đăng ký.'
      },
      {
        q: 'Tôi có thể tải những định dạng tệp nào?',
        a: 'PNG độ phân giải cao, SVG vector, và WebP.'
      },
      {
        q: 'Liên kết nhóm của tôi có được giữ an toàn khi tạo không?',
        a: 'Nó ở lại cục bộ — mã được lắp ghép trên máy của bạn và không bao giờ được tải lên.'
      }
    ],
    bestPractices: 'Dùng màu xanh Telegram (#0088CC) với logo máy bay giấy, thêm một dòng «Quét để Tham gia Cộng đồng Telegram», và tải SVG vector để in.'
  },
  '/tiktok-qr-code-generator': {
    sections: [
      {
        title: 'Quảng Bá TikTok Đa Nền Tảng',
        paragraphs: [
          'In mã QR TikTok lên hàng lưu niệm, bao bì sản phẩm, nhãn dán và tài liệu sự kiện để kéo người theo dõi từ thế giới thực tới hồ sơ TikTok của bạn.',
          'Hoàn hảo cho nhà sáng tạo, thương hiệu và doanh nghiệp muốn phát triển hiện diện TikTok qua quảng bá đa nền tảng.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Viral Growth via TikTok QR Codes',
      paragraphs: [
        'Một mã QR TikTok mang URI hồ sơ (`https://www.tiktok.com/@{username}`) hoặc một liên kết video. Một lượt quét đưa điện thoại vào ứng dụng TikTok tại hồ sơ nhà sáng tạo.',
        'Điều đó bỏ qua đăng nhập và tìm kiếm, nên một người xem theo dõi, thích, hay nhảy vào một thử thách hashtag chỉ một chạm.',
        'Các mã tĩnh, vĩnh viễn không giới hạn quét và xuất vector SVG đầy đủ.'
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
        title: 'Nhập Tên Người Dùng hoặc Liên Kết TikTok',
        description: 'Gõ tên của bạn không có @ (ví dụ username), hoặc dán URL hồ sơ đầy đủ.'
      },
      {
        number: 2,
        title: 'Áp Màu Neon Rực Rỡ của TikTok',
        description: 'Dùng màu lục lam TikTok (#00F2EA) và hồng cánh sen (#FF0050), chọn một mẫu chấm, và thêm logo TikTok.'
      },
      {
        number: 3,
        title: 'Tải ở Định Dạng SVG hoặc PNG',
        description: 'Xuất mã độ phân giải cao cho nhãn dán, tờ rơi, thẻ và hàng lưu niệm.'
      }
    ],
    features: [
      {
        title: 'Khởi Chạy Ứng Dụng TikTok Trực Tiếp',
        description: 'Một lượt quét mở ứng dụng TikTok thẳng tới hồ sơ của bạn để theo dõi chỉ một chạm.'
      },
      {
        title: 'Vĩnh Viễn và Miễn Phí Mãi Mãi',
        description: 'Một mã tĩnh không bao giờ hết hiệu lực và chấp nhận quét không giới hạn miễn phí.'
      },
      {
        title: 'SVG Vector cho Trang Phục và In Ấn',
        description: 'Đầu ra vector co giãn để in lụa lên áo hoodie, nhãn dán và poster.'
      },
      {
        title: 'Bảo Vệ Quyền Riêng Tư 100%',
        description: 'Kết xuất trên thiết bị của bạn, không theo dõi gì.'
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
        title: 'Nhãn Quần Áo và Hàng Lưu Niệm',
        description: 'Một mã trên thẻ treo biến một người mua thành người theo dõi.'
      },
      {
        title: 'Nhãn Dán và Tiếp Thị Đường Phố',
        description: 'Nhãn dán thương hiệu mang mã của bạn thúc đẩy khám phá địa phương tự nhiên.'
      },
      {
        title: 'Trưng Bày Nhà Hàng và Bán Lẻ',
        description: 'Một mã thúc người mua quay một bài đánh giá và gắn thẻ thương hiệu của bạn để nhận giảm giá.'
      },
      {
        title: 'Biển Hiệu Hòa Nhạc và Lễ Hội',
        description: 'Một mã lớn tại một sự kiện trực tiếp quảng bá thử thách hashtag.'
      }
    ],
    troubleshooting: {
      title: '5 Common TikTok QR Code Pitfalls',
      points: [
        'Một dấu @ trong tên. Nhập tên người dùng sạch không có «@» để có một URL hợp lệ.',
        'Tương phản. Giữ nền trước tối trên nền.',
        'Một lỗi chính tả. Kiểm tra kỹ tên người dùng trước một đợt in hàng loạt.',
        'Thử trên di động. Xác nhận mã mở ứng dụng TikTok trên cả iOS lẫn Android.',
        'Kích thước logo. Giới hạn logo ở giữa khoảng một phần ba chiều rộng.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi tạo một mã QR cho tài khoản TikTok của mình?',
        a: 'Nhập tên của bạn không có @ (hoặc dán URL hồ sơ), tạo kiểu, và tải về.'
      },
      {
        q: 'Quét có mở ứng dụng TikTok trực tiếp không?',
        a: 'Trên một điện thoại đã cài TikTok, lượt quét mở hồ sơ của bạn trong ứng dụng.'
      },
      {
        q: 'Tôi có thể liên kết tới một video hay âm thanh TikTok cụ thể không?',
        a: 'Sao chép liên kết chia sẻ của video hoặc âm thanh và dán vào.'
      },
      {
        q: 'Mã QR TikTok có hết hạn không?',
        a: 'Không — một mã tĩnh hoạt động vô thời hạn, với quét không giới hạn.'
      },
      {
        q: 'Tôi có thể nhúng logo TikTok vào giữa không?',
        a: 'Tải lên logo TikTok hoặc ảnh đại diện nhà sáng tạo của bạn cho phần giữa.'
      },
      {
        q: 'Định dạng nào tốt nhất để in nhãn dán và trang phục?',
        a: 'SVG vector cho in lụa và máy cắt vinyl, hoặc PNG cho kỹ thuật số.'
      },
      {
        q: 'Có giới hạn quét nào trên mã QR TikTok miễn phí không?',
        a: 'Không có — quét không giới hạn trọn đời, miễn phí.'
      },
      {
        q: 'Tôi có thể dùng màu TikTok tùy chỉnh không?',
        a: 'Dùng màu lục lam biểu tượng (#00F2EA) và hồng cánh sen (#FF0050).'
      }
    ],
    bestPractices: 'Dùng màu neon TikTok, thêm một dòng hấp dẫn như «Quét để Xem trên TikTok», và xuất SVG vector để in sắc nét.'
  },
  '/twitter-qr-code-generator': {
    sections: [
      {
        title: 'Phát Triển Khán Giả X / Twitter của Bạn bằng Mã QR',
        paragraphs: [
          'Thu hẹp khoảng cách giữa hiện diện vật lý và số bằng cách thêm mã QR Twitter vào tài liệu in, chữ ký email và banner sự kiện.',
          'Hỗ trợ cả URL twitter.com lẫn x.com, cùng với nhập trực tiếp tên người dùng để tạo liên kết tự động.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of Twitter / X QR Codes',
      paragraphs: [
        'Một mã QR Twitter / X mang liên kết hồ sơ (`https://x.com/{handle}` hoặc `https://twitter.com/{handle}`). Quét nó và trình xử lý liên kết phổ quát của điện thoại mở ứng dụng X thẳng tới hồ sơ hoặc bài đăng đó.',
        'Từ đó người dùng có thể theo dõi, thích một tweet, tham gia một Space, hoặc nhảy vào một chuỗi hashtag mà không phải gõ gì ở giữa.',
        'Các mã này là tĩnh và không bao giờ hết hạn — toàn quyền kiểm soát màu, hình mắt tùy chỉnh và xuất vector SVG để in.'
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
        title: 'Nhập Tên Twitter/X hoặc URL của Bạn',
        description: 'Gõ tên người dùng không có @, hoặc dán liên kết x.com hay twitter.com đầy đủ.'
      },
      {
        number: 2,
        title: 'Tạo Kiểu và Thêm Logo X hoặc Chim',
        description: 'Đặt màu, mẫu chấm và hình góc, và thêm logo X hoặc chim vào giữa.'
      },
      {
        number: 3,
        title: 'Tải ở Định Dạng SVG hoặc PNG',
        description: 'Xuất mã độ phân giải cao cho tờ rơi, slide, sách hoặc hàng lưu niệm.'
      }
    ],
    features: [
      {
        title: 'Khởi Chạy Ứng Dụng X Trực Tiếp',
        description: 'Mở ứng dụng X thẳng tới hồ sơ của bạn để theo dõi chỉ một chạm.'
      },
      {
        title: 'Vĩnh Viễn và Miễn Phí Mãi Mãi',
        description: 'Một mã tĩnh không hết hạn, mở cho bất kỳ số lượt quét nào, không tính phí.'
      },
      {
        title: 'SVG Vector để In',
        description: 'Co giãn tới một banner hội nghị, một bìa sách hay một tấm poster.'
      },
      {
        title: 'Riêng Tư 100%',
        description: 'Tạo cục bộ, không thu thập dữ liệu.'
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
        title: 'Bài Nói Chính và Hội Thảo Trực Tuyến',
        description: 'Một mã trên slide kết thúc thúc đẩy tương tác khán giả trực tiếp.'
      },
      {
        title: 'Sách Tác Giả và Bài Báo In',
        description: 'Trên bìa sách hay một bài báo, một mã cho người đọc theo dõi bình luận thời gian thực của bạn.'
      },
      {
        title: 'Ảnh Bìa Podcast và Hàng Lưu Niệm',
        description: 'Đưa người nghe vào một cuộc thảo luận trực tiếp trên X hoặc một không gian cộng đồng.'
      },
      {
        title: 'Biển Hiệu Sự Kiện và Thẻ Gặp Gỡ',
        description: 'Trao đổi hồ sơ tức thì tại một buổi gặp công nghệ hay một hội nghị.'
      }
    ],
    troubleshooting: {
      title: '5 Common Twitter / X QR Code Pitfalls',
      points: [
        'Một dấu @ trong URL. Nhập tên người dùng thô («handle», không phải «@handle») để URL hình thành đúng.',
        'Tên miền nào cũng được. Cả x.com lẫn twitter.com đều được hỗ trợ và chuyển hướng tới hồ sơ của bạn.',
        'Tương phản. Giữ mô-đun tối trên nền trắng hoặc sáng.',
        'Kích thước logo. Bất cứ thứ gì vượt khoảng 30% chiều rộng bắt đầu đánh bại sửa lỗi Mức H.',
        'Thử trước. Quét trên cả iOS lẫn Android trước một đợt in hàng loạt.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi tạo một mã QR cho Twitter / X?',
        a: 'Gõ tên người dùng hoặc dán liên kết hồ sơ của bạn, tạo kiểu, và tải về.'
      },
      {
        q: 'Nó có hỗ trợ cả x.com lẫn twitter.com không?',
        a: 'Cả hai URL đều được hỗ trợ và dẫn tới hồ sơ của bạn.'
      },
      {
        q: 'Quét có mở ứng dụng X trên di động không?',
        a: 'Trên một thiết bị đã cài ứng dụng X, lượt quét mở hồ sơ của bạn trong ứng dụng.'
      },
      {
        q: 'Tôi có thể liên kết tới một Tweet hay Chuỗi cụ thể không?',
        a: 'Sao chép URL tweet và dán vào.'
      },
      {
        q: 'Mã QR Twitter có hết hạn không?',
        a: 'Không — một mã tĩnh hoạt động vô thời hạn.'
      },
      {
        q: 'Tôi có thể nhúng một logo X hay Twitter vào giữa không?',
        a: 'Tải lên biểu tượng X hoặc logo chim cho phần giữa.'
      },
      {
        q: 'Tôi có thể tải những định dạng tệp nào?',
        a: 'PNG độ phân giải cao, SVG vector, và WebP.'
      },
      {
        q: 'Có phí hay giới hạn quét nào không?',
        a: 'Không — miễn phí, quét không giới hạn, không hình mờ.'
      }
    ],
    bestPractices: 'Dùng một kiểu đen-trắng tương phản cao gọn gàng với logo X, thêm một dòng «Quét để Theo dõi trên X», và xuất SVG vector để in.'
  },
  '/linkedin-qr-code-generator': {
    sections: [
      {
        title: 'Kết Nối Chuyên Nghiệp Dễ Dàng',
        paragraphs: [
          'In mã QR LinkedIn lên danh thiếp, thẻ hội nghị và chữ ký email để xây dựng kết nối chuyên nghiệp không ma sát.',
          'Khi được quét, nó mở hồ sơ LinkedIn của bạn thẳng trong ứng dụng LinkedIn hoặc trình duyệt để kết nối chỉ một cú nhấp.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of LinkedIn Profile QR Codes',
      paragraphs: [
        'Một mã QR LinkedIn mang URI hồ sơ công khai (`https://www.linkedin.com/in/{profileId}`) hoặc URL trang công ty (`https://www.linkedin.com/company/{companyId}`). Một lượt quét đưa điện thoại thẳng vào ứng dụng LinkedIn tại hồ sơ đó.',
        'Việc khởi chạy trực tiếp đó chính là điều làm nó hữu ích tại một hội nghị hay một cuộc gặp khách hàng — một yêu cầu kết nối, một tin nhắn hay một lượt theo dõi chỉ một chạm, không phải gõ một cái tên vào ô tìm kiếm.',
        'Mã là tĩnh và vĩnh viễn, nên một danh thiếp in hay một tấm portfolio vẫn quét được dù bạn mang theo bao lâu.'
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
        title: 'Sao Chép URL Hồ Sơ LinkedIn Công Khai của Bạn',
        description: 'Mở hồ sơ của bạn, sao chép liên kết công khai (ví dụ linkedin.com/in/tenban), và dán vào.'
      },
      {
        number: 2,
        title: 'Tạo Kiểu bằng Màu Xanh LinkedIn Chuyên Nghiệp',
        description: 'Dùng màu xanh LinkedIn (#0A66C2), đặt hình góc gọn gàng, và thêm logo «in».'
      },
      {
        number: 3,
        title: 'Tải SVG Vector Sẵn Sàng Để In',
        description: 'Lấy SVG cho danh thiếp dập nổi, thẻ hội nghị, sơ yếu lý lịch và portfolio.'
      }
    ],
    features: [
      {
        title: 'Khởi Chạy Ứng Dụng LinkedIn Di Động Trực Tiếp',
        description: 'Một lượt quét mở ứng dụng LinkedIn cho một yêu cầu kết nối chỉ một chạm.'
      },
      {
        title: 'Vĩnh Viễn và Miễn Phí Mãi Mãi',
        description: 'Một mã tĩnh duy trì hiệu lực vô thời hạn, với kết nối không giới hạn và không phí.'
      },
      {
        title: 'SVG Vector cho In Cao Cấp',
        description: 'Sắc nét trên giấy mờ, ép nhũ và dập nổi.'
      },
      {
        title: 'Riêng Tư và An Toàn 100%',
        description: 'Không thu thập thông tin đăng nhập hay dữ liệu cá nhân — việc mã hóa chạy trong trình duyệt của bạn.'
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
        title: 'Danh Thiếp của Lãnh Đạo và Doanh Nhân',
        description: 'Một mã ở mặt sau tấm thiếp biến một cuộc gặp đầu tiên thành một kết nối đã lưu.'
      },
      {
        title: 'Thẻ Hội Nghị và Buổi Giao Lưu Kết Nối',
        description: 'Một mã trên thẻ cho mọi người kết nối trong vài giây trong một giờ giải lao giao lưu.'
      },
      {
        title: 'Sơ Yếu Lý Lịch và Portfolio của Ứng Viên',
        description: 'Một mã trên sơ yếu cho nhà tuyển dụng mở các đề xuất và portfolio của bạn mà không phải gõ.'
      },
      {
        title: 'Tạo Khách Hàng B2B tại Hội Chợ',
        description: 'Một mã gian hàng khuyến khích khách doanh nghiệp theo dõi trang công ty.'
      },
      {
        title: 'Bộ Slide Thuyết Trình của Diễn Giả',
        description: 'Một mã trên slide kết thúc cho khán giả kết nối và giữ liên lạc.'
      }
    ],
    troubleshooting: {
      title: '5 Best Practices for LinkedIn QR Scannability',
      points: [
        'Một URL tùy chỉnh gọn. Đặt một URL công khai gọn gàng — linkedin.com/in/john-doe — thay vì một chuỗi ngẫu nhiên dài, và ma trận đơn giản hơn.',
        'Hiển thị công khai. Bật hiển thị hồ sơ công khai để một người quét không có tài khoản LinkedIn vẫn thấy được thông tin của bạn.',
        'Tương phản mạnh. Xanh đậm hay đen trên giấy trắng đọc đáng tin trong một hội trường thiếu sáng.',
        'Một vùng im lặng rõ. Chừa một viền sạch không có chữ hay hình đè lên.',
        'Một CTA dễ đọc. Ghép mã với một dòng dễ đọc «Quét để Kết nối trên LinkedIn».'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi tìm liên kết hồ sơ LinkedIn công khai của mình?',
        a: 'Xem hồ sơ của bạn và sao chép URL từ thanh trình duyệt, hoặc từ mục «Thông tin liên hệ».'
      },
      {
        q: 'Quét có mở ứng dụng LinkedIn trên di động không?',
        a: 'Nó khởi chạy ứng dụng LinkedIn thẳng tới trang hồ sơ của bạn.'
      },
      {
        q: 'Tôi có thể thêm một mã QR LinkedIn vào sơ yếu lý lịch in của mình không?',
        a: 'Nó cho một nhà tuyển dụng mở các đề xuất, portfolio và toàn bộ lịch sử của bạn chỉ một chạm.'
      },
      {
        q: 'Mã QR LinkedIn có hết hạn không?',
        a: 'Không. Nó vẫn hợp lệ chừng nào URL hồ sơ của bạn còn hợp lệ.'
      },
      {
        q: 'Tôi có thể tạo một mã QR cho một Trang Công ty LinkedIn không?',
        a: 'Dán URL trang công ty (ví dụ https://www.linkedin.com/company/tenthuonghieu) và tạo.'
      },
      {
        q: 'Tôi có thể nhúng logo LinkedIn vào giữa không?',
        a: 'Đặt logo «in» hoặc ảnh chân dung của bạn vào giữa, và sửa lỗi Mức H che nó.'
      },
      {
        q: 'Kích thước khuyến nghị cho danh thiếp là bao nhiêu?',
        a: 'Ít nhất 20 x 20 mm (0,8 x 0,8 inch) với tương phản sắc nét.'
      },
      {
        q: 'Trình tạo mã QR LinkedIn này có miễn phí không?',
        a: 'Có — quét không giới hạn, không hình mờ, không đăng ký.'
      }
    ],
    bestPractices: 'Đặt một URL LinkedIn tùy chỉnh gọn để có ma trận đơn giản hơn, in ở 22x22 mm hoặc lớn hơn trên một tấm thiếp, và dùng màu xanh LinkedIn (#0A66C2) trên nền trắng.'
  },
  '/youtube-qr-code-generator': {
    sections: [
      {
        title: 'Tăng Lượt Xem và Người Đăng Ký YouTube từ Tiếp Thị Ngoại Tuyến',
        paragraphs: [
          'Thêm mã QR YouTube vào tờ rơi sự kiện, bài thuyết trình hội nghị, sách hướng dẫn sản phẩm và quảng cáo in để kéo lưu lượng tới nội dung video của bạn.',
          'Hỗ trợ URL kênh, liên kết video riêng lẻ và liên kết danh sách phát để linh hoạt tối đa.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of YouTube QR Codes',
      paragraphs: [
        'Một mã QR YouTube mang một URL YouTube chuẩn — `https://youtube.com/@channel`, `https://youtu.be/{videoId}`, hoặc một liên kết danh sách phát. Quét nó và điện thoại ánh xạ liên kết HTTPS tới intent ứng dụng YouTube (`vnd.youtube:{videoId}`), nên việc phát bắt đầu bên trong ứng dụng mà không vòng qua trình duyệt.',
        'Việc chuyển giao đó cho trải nghiệm xem tốt nhất: người dùng có thể thích, bình luận và đăng ký ngay tại chỗ, và phát ở HD hoặc 4K dưới tài khoản đã đăng nhập của họ.',
        'Mã lưu đúng địa chỉ chuẩn của video hoặc kênh trong ma trận, nên nó vẫn hợp lệ suốt thời gian nội dung còn hiển thị.'
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
        title: 'Dán Liên Kết Video, Kênh hoặc Danh Sách Phát YouTube',
        description: 'Sao chép URL kênh, video hoặc danh sách phát công khai của bạn và dán vào.'
      },
      {
        number: 2,
        title: 'Tùy Chỉnh bằng Màu Đỏ YouTube và Biểu Tượng Play',
        description: 'Dùng màu đỏ YouTube (#FF0000), chọn một mẫu chấm, và đặt logo play vào giữa.'
      },
      {
        number: 3,
        title: 'Tải ở Định Dạng SVG hoặc PNG',
        description: 'Lấy SVG cho poster, banner và bao bì, hoặc PNG độ phân giải cao cho một slide.'
      }
    ],
    features: [
      {
        title: 'Khởi Chạy Video Trực Tiếp trong Ứng Dụng Gốc',
        description: 'Mở video hoặc kênh trong ứng dụng YouTube, nơi tương tác cao nhất.'
      },
      {
        title: 'Quét Vĩnh Viễn và Không Giới Hạn',
        description: 'Một mã tĩnh chạy mãi mãi và xử lý bất kỳ số lượt xem nào, miễn phí.'
      },
      {
        title: 'SVG Vector cho In Khổ Lớn',
        description: 'Co giãn tới một banner hội nghị, một biển quảng cáo hay một phông sân khấu mà không nhòe.'
      },
      {
        title: 'Kiến Trúc Đặt Quyền Riêng Tư Lên Đầu',
        description: 'Làm trên thiết bị của bạn, không theo dõi hay lập hồ sơ.'
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
        title: 'Sách Hướng Dẫn Video Lắp Ráp và Cài Đặt Sản Phẩm',
        description: 'Một mã trên bao bì thay một cuốn sách giấy rối rắm bằng một video từng bước rõ ràng.'
      },
      {
        title: 'Bài Nói Chính và Bộ Slide',
        description: 'Một mã trên slide kết thúc cho cả phòng đăng ký hoặc xem lại bản demo.'
      },
      {
        title: 'Tiếp Thị Giải Trí Âm Nhạc và Điện Ảnh',
        description: 'Một mã trên bìa album, tờ rơi hòa nhạc hay poster phim phát đoạn giới thiệu hoặc video ca nhạc.'
      },
      {
        title: 'Tham Quan Bất Động Sản bằng Video',
        description: 'Một mã trên biển sân trước mở một chuyến tham quan điện ảnh cho một người mua đi ngang.'
      },
      {
        title: 'Bao Bì Ẩm Thực và Hướng Dẫn Công Thức',
        description: 'Một mã trên gói nguyên liệu dẫn tới một video hướng dẫn nấu ăn.'
      }
    ],
    troubleshooting: {
      title: '5 Common YouTube QR Code Issues & Solutions',
      points: [
        'Một video riêng tư. Đặt nó ở chế độ Công khai hoặc Không công khai để mọi người quét đều xem được.',
        'Chặn theo độ tuổi. Một video hạn chế độ tuổi yêu cầu người xem đăng nhập trước, điều này thêm ma sát.',
        'Một liên kết danh sách phát tạm thời. Dùng một URL danh sách phát công khai vĩnh viễn, không phải một liên kết hàng chờ thoáng qua.',
        'Tương phản thấp. Bỏ đỏ nhạt trên hồng; giữ nền trước màu đỏ trên nền trắng.',
        'Một liên kết chia sẻ dài. Dùng dạng youtu.be rút gọn cho một mã sạch hơn, ít dày hơn.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi liên kết một mã QR tới kênh YouTube của mình?',
        a: 'Sao chép URL kênh của bạn (ví dụ https://youtube.com/@channel), dán vào, tạo kiểu, và tải về.'
      },
      {
        q: 'Tôi có thể tạo một mã QR tự động nhắc người dùng đăng ký không?',
        a: 'Thêm ?sub_confirmation=1 vào URL kênh của bạn — https://youtube.com/@channel?sub_confirmation=1 — và lượt quét bật một lời nhắc đăng ký.'
      },
      {
        q: 'Quét có mở ứng dụng YouTube gốc trên di động không?',
        a: 'Trên di động, nó khởi chạy ứng dụng YouTube thẳng tới video hoặc kênh.'
      },
      {
        q: 'Tôi có thể liên kết tới một mốc thời gian cụ thể trong một video YouTube không?',
        a: 'Thêm ?t=1m30s vào URL video để bắt đầu phát ở một phút ba mươi.'
      },
      {
        q: 'Mã QR YouTube có hết hạn không?',
        a: 'Không — nó tiếp tục trỏ tới video suốt thời gian video còn hiển thị.'
      },
      {
        q: 'Tôi có thể thêm một biểu tượng play YouTube vào giữa không?',
        a: 'Đặt một nút play hoặc ảnh đại diện kênh của bạn vào giữa, và sửa lỗi Mức H che nó.'
      },
      {
        q: 'Có giới hạn quét nào trên mã QR YouTube miễn phí không?',
        a: 'Không có. Mọi mã ở đây nhận quét không giới hạn trọn đời, miễn phí.'
      },
      {
        q: 'Có những định dạng tệp nào để tải xuống?',
        a: 'PNG độ phân giải cao, SVG vector, và WebP.'
      }
    ],
    bestPractices: 'Thêm một dòng rõ ràng như «Quét để Xem Video Hướng dẫn», dùng liên kết youtu.be rút gọn cho một ma trận đơn giản hơn, và thử quét từ khoảng cách mà người ta thực sự sẽ đứng.'
  },
  '/instagram-qr-code-generator': {
    sections: [
      {
        title: 'Tăng Người Theo Dõi Instagram bằng Mã QR In và Số',
        paragraphs: [
          'In mã QR Instagram lên danh thiếp, bao bì sản phẩm, thực đơn nhà hàng, banner sự kiện và hàng hóa để thu người theo dõi tự nhiên.',
          'Khi được quét, mã QR mở ứng dụng Instagram thẳng vào trang hồ sơ của bạn để theo dõi chỉ một chạm.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Deep-Linking of Instagram QR Codes',
      paragraphs: [
        'Một mã QR Instagram mang một liên kết phổ quát dạng `https://instagram.com/{username}`. Quét nó và điện thoại phân giải lược đồ ứng dụng gốc (`instagram://user?username={username}`), mở hồ sơ bên trong ứng dụng Instagram thay vì một trình duyệt.',
        'Vì người dùng đã đăng nhập sẵn trong ứng dụng của họ, việc chuyển giao đó bỏ qua hoàn toàn bước đăng nhập — họ vào hồ sơ của bạn sẵn sàng chạm Theo dõi hoặc lướt Reels của bạn.',
        'Các mã là vĩnh viễn và tĩnh, dựng ở Mức H (dư thừa 30%). Tạo kiểu một cái bằng dải màu Instagram (#E1306C, #F77737, #FCAF45) và đặt biểu tượng camera hoặc logo của bạn vào giữa.'
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
        title: 'Nhập Tên Instagram hoặc URL Hồ Sơ',
        description: 'Gõ tên người dùng của bạn không có @ (ví dụ yourbrand), hoặc dán liên kết hồ sơ đầy đủ.'
      },
      {
        number: 2,
        title: 'Áp Màu Dải Instagram và Logo',
        description: 'Dùng dải màu Instagram, chọn kiểu chấm, và đặt logo camera vào giữa.'
      },
      {
        number: 3,
        title: 'Tải SVG Vector để In hoặc PNG Độ Phân Giải Cao',
        description: 'Lấy SVG cho thẻ, nhãn dán, bao bì và biển hiệu, hoặc PNG độ phân giải cao cho kỹ thuật số.'
      }
    ],
    features: [
      {
        title: 'Liên Kết Sâu vào Ứng Dụng Gốc',
        description: 'Một lượt quét đưa người dùng vào ứng dụng Instagram đã cài để theo dõi chỉ một chạm.'
      },
      {
        title: 'Quét Vĩnh Viễn và Không Giới Hạn',
        description: 'Một mã Instagram tĩnh không có ngày hết hạn và không giới hạn quét, miễn phí.'
      },
      {
        title: 'SVG Vector cho In Ấn Vật Lý',
        description: 'Co giãn từ một thẻ sản phẩm 2 cm tới một banner hội chợ mà không nhòe.'
      },
      {
        title: 'Riêng Tư 100% và Không Theo Dõi',
        description: 'Mọi thứ chạy phía trình duyệt, không theo dõi, không ghi log và không đăng nhập.'
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
        title: 'Trải Nghiệm Mở Hộp Thương Mại Điện Tử',
        description: 'Một mã trên phiếu đóng gói thúc người mua đăng một tấm ảnh và gắn thẻ thương hiệu của bạn.'
      },
      {
        title: 'Biển Để Bàn Nhà Hàng và Quán Cà Phê',
        description: 'Thực khách nhảy thẳng tới thực đơn ảnh, reels món ăn và tin nổi bật của bạn.'
      },
      {
        title: 'Salon Làm Đẹp và Phòng Tập Thể Hình',
        description: 'Cho khách đang chờ ở quầy lễ tân xem các thay đổi trước-và-sau và reels tập luyện.'
      },
      {
        title: 'Bán Hàng Thời Trang và Quần Áo',
        description: 'Một mã trên thẻ treo mở các ý tưởng phối đồ và lookbook khách thật cho người mua.'
      },
      {
        title: 'Triển Lãm của Nghệ Sĩ và Nhà Sáng Tạo',
        description: 'Một mã cạnh tác phẩm cho khách tham quan phòng tranh theo dõi hành trình sáng tạo theo thời gian thực.'
      }
    ],
    troubleshooting: {
      title: '5 Common Instagram QR Code Scanning Issues & Fixes',
      points: [
        'Một dấu @ trong tên. Nhập tên người dùng không có «@» (dùng «tenthuonghieu», không phải «@tenthuonghieu») để có một URL hợp lệ.',
        'Một tài khoản riêng tư. Nếu hồ sơ để riêng tư, người quét phải gửi yêu cầu theo dõi thay vì thấy lưới ngay.',
        'Tương phản thấp. Một nền trước hồng nhạt trên trắng khiến camera không có gì để bắt. Hãy giữ tương phản cao.',
        'Một logo quá lớn. Giữ nó dưới 30% chiều rộng mã và việc sửa lỗi vẫn có thể làm việc của nó.',
        'Đổi tên. Đổi tên tài khoản thì mọi mã đã in đều hỏng. Hãy khóa tên trước một đợt in hàng loạt.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao tôi tạo một mã QR cho hồ sơ Instagram của mình?',
        a: 'Nhập tên người dùng không có @ (hoặc dán URL hồ sơ), đặt màu và logo, và tải về — miễn phí.'
      },
      {
        q: 'Quét có mở ứng dụng Instagram trực tiếp không?',
        a: 'Trên một iPhone hay Android hiện đại, liên kết phổ quát mở hồ sơ của bạn bên trong ứng dụng Instagram thay vì một trình duyệt.'
      },
      {
        q: 'Tôi có thể thêm một logo Instagram vào mã QR không?',
        a: 'Mức H cho bạn chỗ đặt biểu tượng camera, hoặc biểu tượng của riêng bạn, ở phần giữa.'
      },
      {
        q: 'Mã QR Instagram có hết hạn không?',
        a: 'Không — một mã tĩnh là vĩnh viễn, với quét không giới hạn.'
      },
      {
        q: 'Tôi có thể liên kết tới một Reel hay bài đăng Instagram cụ thể không?',
        a: 'Sao chép URL của Reel hoặc bài đăng và dán liên kết đầy đủ vào.'
      },
      {
        q: 'Định dạng nào tốt nhất để in nhãn dán và bao bì?',
        a: 'SVG vector cho máy in thương mại và máy cắt nhãn dán, hoặc PNG cho kỹ thuật số.'
      },
      {
        q: 'Trình tạo mã QR Instagram này có miễn phí cho mục đích thương mại không?',
        a: 'Có — không hình mờ, không giới hạn quét, không đăng ký.'
      },
      {
        q: 'Tôi nên dùng tỷ lệ tương phản nào cho mã QR Instagram?',
        a: 'Ít nhất 4.5:1 giữa các mô-đun và nền. Đỏ tươi đậm hay tím trên nền trắng hoặc vàng nhạt quét rất sạch.'
      }
    ],
    bestPractices: 'Dùng dải màu Instagram để nhận diện tức thì, thêm một dòng rõ ràng «Quét để Theo dõi», và thử bản in dưới vài loại ánh sáng khác nhau trước một đợt in số lượng lớn.'
  },
  '/googleform-qr-code-generator': {
    sections: [
      {
        title: 'Tối Đa Hóa Tỷ Lệ Phản Hồi Khảo Sát và Góp Ý',
        paragraphs: [
          'Đặt một mã QR Google Forms lên bao bì sản phẩm, hóa đơn, biển hiệu sự kiện hay slide thuyết trình cho phép khán giả hoàn thành bảng hỏi ngay trên thiết bị di động của họ.',
          'Loại bỏ lỗi nhập liệu thủ công và tăng tỷ lệ phản hồi của khách bằng truy cập trực tiếp, không ma sát.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Google Forms Survey & Feedback QR Codes',
      paragraphs: [
        'Một mã QR Google Forms mang liên kết trực tiếp tới một biểu mẫu đã xuất bản — một khảo sát hài lòng, một xác nhận dự sự kiện, một bài kiểm tra lớp học. Quét nó, và biểu mẫu tương thích tải ngay trong trình duyệt điện thoại — không một URL dài, dễ lỗi phải gõ từ một hóa đơn.',
        'Gõ một URL là nơi tỷ lệ phản hồi góp ý sụp đổ, giảm hơn 80%. Một mã loại bỏ bước đó: người trả lời quét, lướt qua các câu hỏi, và gửi trong vài giây.',
        'Mọi thứ họ gửi chảy thẳng vào bảng điều khiển Google Forms và Google Sheet liên kết theo thời gian thực, sẵn sàng cho biểu đồ trực tiếp, cảnh báo tự động, và bất kỳ Zapier hay webhook nào bạn đã nối.'
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
        title: 'Lấy và Dán Liên Kết Google Form Đã Xuất Bản của Bạn',
        description: 'Trong Google Forms, nhấp nút Gửi màu tím, chọn biểu tượng liên kết, tích «Rút gọn URL», và dán kết quả vào.'
      },
      {
        number: 2,
        title: 'Tạo Kiểu bằng Màu Tím Forms và Nhúng Logo Thương Hiệu',
        description: 'Tạo kiểu các mô-đun, áp màu tím Google Forms (#7248B9) hoặc màu của bạn, và đặt một biểu tượng vào giữa.'
      },
      {
        number: 3,
        title: 'Tải SVG Vector cho Bảng Để Bàn và Biển Hiệu',
        description: 'Lấy SVG cho thẻ để bàn, hóa đơn và poster lớp học, hoặc PNG cho một slide thuyết trình.'
      }
    ],
    features: [
      {
        title: 'Thúc Đẩy Tỷ Lệ Phản Hồi Khảo Sát và Đánh Giá Bùng Nổ',
        description: 'Thu góp ý khi bữa ăn hay chuyến ghé còn tươi mới — không URL để gõ thì việc bỏ dở biến mất.'
      },
      {
        title: 'Đồng Bộ Thời Gian Thực với Google Sheets và Bảng Điều Khiển',
        description: 'Mỗi lượt gửi rơi ngay vào bảng tính liên kết của bạn để phân tích và cảnh báo trực tiếp.'
      },
      {
        title: 'Nhập Liệu Di Động Không Chạm, Vệ Sinh',
        description: 'Không bảng kẹp hay bút dùng chung ở phòng khám, nhà hàng hay lớp học — ai cũng dùng điện thoại của mình.'
      },
      {
        title: 'Hiệu Lực Trọn Đời Vĩnh Viễn Không Phí',
        description: 'Một mã Forms tĩnh không hết hạn, thu thập phản hồi không giới hạn mà không tốn phí.'
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
        title: 'Khảo Sát Hài Lòng Khách của Nhà Hàng và Khách Sạn',
        description: 'Một mã thẻ để bàn mời thực khách chấm điểm dịch vụ và món ăn trong chưa tới một phút.'
      },
      {
        title: 'Kiểm Tra Lớp Học, Điểm Danh và Thăm Dò Học Sinh',
        description: 'Giáo viên chiếu một mã Forms để học sinh quét gửi bài tập, bài kiểm tra hay điểm danh.'
      },
      {
        title: 'Thu Khách và Câu Hỏi Tại Gian Hàng Hội Chợ',
        description: 'Thu quan tâm và thông tin liên hệ của khách thẳng vào một bảng tính từ điện thoại của họ.'
      },
      {
        title: 'Xác Nhận Dự Sự Kiện và Đăng Ký Hội Thảo',
        description: 'Một mã trên poster cho người dự đăng ký các phiên và bữa ăn ngay tại chỗ.'
      },
      {
        title: 'Tiếp Nhận Bệnh Nhân và Sàng Lọc Sức Khỏe',
        description: 'Bệnh nhân hoàn thành một bảng hỏi tiếp nhận không chạm trên điện thoại của họ ở phòng chờ.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Google Forms QR Code Scanning & Access Issues',
      points: [
        'Một lần bắt buộc đăng nhập. Trừ khi bạn thực sự cần, hãy tắt «Giới hạn 1 phản hồi» trong cài đặt Biểu mẫu — nó buộc đăng nhập Google, thêm ma sát.',
        'Sai liên kết. Sao chép liên kết công khai từ hộp thoại Gửi màu tím, không phải URL /edit từ thanh trình duyệt.',
        'Một URL chưa rút gọn. Một URL Forms thô rất dài. Hãy tích «Rút gọn URL» trong Forms trước để có một ma trận sạch hơn, ít dày hơn.',
        'Quá nhiều câu hỏi. Giữ một khảo sát QR di động ở năm câu hỏi hoặc ít hơn để duy trì tỷ lệ hoàn thành.',
        'Một biểu mẫu đã đóng. Nếu bạn tắt «Chấp nhận phản hồi», người quét gặp thông báo biểu mẫu đã đóng. Hãy để mở suốt chiến dịch.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao lấy đúng liên kết Google Form công khai cho mã QR của tôi?',
        a: 'Mở biểu mẫu, nhấp nút Gửi màu tím, chọn biểu tượng Liên kết, tích «Rút gọn URL», và sao chép kết quả để dán vào.'
      },
      {
        q: 'Người trả lời có cần tài khoản Google để điền biểu mẫu không?',
        a: 'Không, miễn là bạn đã tắt «Giới hạn 1 phản hồi» và các câu hỏi tải tệp. Khi đó ai cũng hoàn thành trong trình duyệt di động mà không cần đăng nhập.'
      },
      {
        q: 'Mã QR Google Forms có hết hạn hay tính phí không?',
        a: 'Không. Một mã Forms tĩnh không bao giờ hết hiệu lực; người trả lời quét không giới hạn và bạn không bao giờ bị tính phí.'
      },
      {
        q: 'Tôi có thể liên kết tới một Google Form tự động điền một số trường không?',
        a: 'Trong Forms, dùng menu ba chấm > «Lấy liên kết điền sẵn», đặt các giá trị mặc định, sao chép liên kết đó, và tạo mã từ nó. Người quét sẽ thấy các trường đó đã điền.'
      },
      {
        q: 'Các phản hồi đã gửi đi đâu?',
        a: 'Vào tab Phản hồi và, theo thời gian thực, vào bất kỳ Google Sheet nào bạn đã liên kết.'
      },
      {
        q: 'Tôi có thể nhúng logo trường học hay công ty vào mã QR không?',
        a: 'Được. Dư thừa Mức H thoải mái che một biểu tượng Forms, hoặc logo của riêng bạn, đặt ở giữa.'
      },
      {
        q: 'Định dạng tệp nào tốt nhất để in thẻ để bàn và tờ rơi?',
        a: 'SVG vector cho bản in sắc nét, hoặc PNG độ phân giải cao cho một slide thuyết trình.'
      },
      {
        q: 'Dữ liệu liên kết khảo sát của tôi có được giữ riêng tư khi tạo không?',
        a: 'Có. Việc xử lý diễn ra phía trình duyệt, nên không URL biểu mẫu hay dữ liệu khảo sát nào được tải lên hay lưu.'
      }
    ],
    bestPractices: 'Giữ khảo sát ở ba đến năm câu hỏi, dùng URL Forms đã rút gọn cho một ma trận đơn giản hơn, và tặng một khích lệ nhỏ — một khoản giảm giá, một vé rút thăm — để nâng tỷ lệ hoàn thành.'
  },
  '/crypto-qr-code-generator': {
    sections: [
      {
        title: 'Thanh Toán và Quyên Góp Tiền Mã Hóa Không Lỗi',
        paragraphs: [
          'Địa chỉ ví tiền mã hóa dài và dễ sai khi sao chép-dán thủ công. Mã QR bảo đảm độ chính xác địa chỉ 100% trong các giao dịch tại điểm bán hay quyên góp trực tuyến.',
          'Hoạt động liền mạch với MetaMask, Trust Wallet, Coinbase Wallet và mọi ứng dụng crypto hàng đầu.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Cryptocurrency Payment URI QR Codes',
      paragraphs: [
        'Một mã QR crypto mang một địa chỉ nhận công khai và chi tiết thanh toán tùy chọn trong một URI thanh toán chuẩn — BIP-0021 của Bitcoin (`bitcoin:<Address>?amount=<Amount>&label=<Label>`), EIP-681 của Ethereum (`ethereum:<Address>`), hoặc tương đương cho USDT, Solana và Litecoin.',
        'Địa chỉ crypto là những chuỗi dài, không khoan nhượng từ 34 đến 64 ký tự (`bc1q...`, `0x...`). Gõ một cái bằng tay và một ký tự sai duy nhất gửi tiền vào hư vô — vĩnh viễn, không hoàn tiền trên một blockchain.',
        'Một mã QR loại bỏ rủi ro đó. Quét nó trong MetaMask, Trust Wallet, Coinbase Wallet, Phantom hoặc Binance và địa chỉ người nhận cùng số tiền điền chính xác, khiến một khoản thanh toán tại điểm bán, một hũ tiền tip, hay một lần tất toán hóa đơn trở nên nhanh và không lỗi.'
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
        title: 'Chọn Tiền Mã Hóa và Nhập Địa Chỉ Ví Công Khai',
        description: 'Chọn Bitcoin (BTC), Ethereum (ETH), USDT (TRC-20/ERC-20), Solana (SOL) hoặc Litecoin (LTC) và dán địa chỉ nhận công khai của bạn.'
      },
      {
        number: 2,
        title: 'Nêu Số Tiền Thanh Toán Cố Định Tùy Chọn',
        description: 'Đặt một số tiền cố định, hoặc để trống để người trả tự nhập tiền tip hay quyên góp của họ.'
      },
      {
        number: 3,
        title: 'Tải SVG Vector cho Màn Hình POS hoặc Hóa Đơn',
        description: 'Thêm logo đồng coin và xuất SVG cho một giá tại quầy tính tiền hoặc PNG cho một hóa đơn PDF.'
      }
    ],
    features: [
      {
        title: 'Loại Bỏ Lỗi Gõ Địa Chỉ Thảm Khốc',
        description: 'Địa chỉ chính xác điền tự động, nên người gửi không thể mất tiền vì một ký tự gõ sai.'
      },
      {
        title: 'Hỗ Trợ Các Tiền Mã Hóa và Stablecoin Lớn',
        description: 'Mã thanh toán chuẩn cho Bitcoin, Ethereum, USDT, Solana, Litecoin và BNB.'
      },
      {
        title: 'Tuân Thủ Chuẩn BIP-0021 và EIP-681',
        description: 'Đọc đúng trong MetaMask, Trust Wallet, Coinbase, Phantom và Binance.'
      },
      {
        title: 'Bảo Mật Mật Mã 100% Phía Trình Duyệt',
        description: 'Địa chỉ công khai của bạn được mã hóa cục bộ trong trình duyệt. Khóa riêng không bao giờ bị chạm tới hay bị hỏi.'
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
        title: 'Thanh Toán POS Cửa Hàng Bán Lẻ và Nhà Hàng',
        description: 'Một mã tại quầy thu ngân cho khách thanh toán bằng Bitcoin hoặc USDT từ ví di động của họ.'
      },
      {
        title: 'Hũ Tiền Tip của Nhà Sáng Tạo và Streamer',
        description: 'Một mã quyên góp Bitcoin hoặc Ethereum nằm trên một buổi phát trực tiếp, một lớp phủ Twitch hoặc một blog.'
      },
      {
        title: 'Tất Toán Hóa Đơn của Freelancer và Agency',
        description: 'Một mã trên hóa đơn PDF tất toán một dự án quốc tế nhanh, xuyên biên giới, không chậm trễ chuyển khoản.'
      },
      {
        title: 'Từ Thiện và Cứu Trợ Thảm Họa Nhân Đạo',
        description: 'Người quyên góp gửi crypto thẳng tới một địa chỉ trên chuỗi minh bạch, kiểm toán được.'
      },
      {
        title: 'Cửa Hàng Pop-Up và Chợ Ngoài Trời',
        description: 'Nhận thanh toán không chạm tại một hội chợ thủ công hay một chợ ẩm thực, không phí phần cứng của người bán.'
      }
    ],
    troubleshooting: {
      title: 'Critical Safety Precautions for Crypto QR Codes',
      points: [
        'Ghi tên mạng. Dán nhãn mã bằng đúng chuỗi — «USDT (TRC-20)» so với «USDT (ERC-20)». Gửi qua các mạng không tương thích thì tiền mất.',
        'Chỉ địa chỉ công khai. Một mã crypto nên mang địa chỉ nhận công khai của bạn và không gì khác. Đừng bao giờ mã hóa một khóa riêng, một cụm từ hạt giống hay một mật khẩu khôi phục.',
        'Thử nhỏ trước. Chạy một giao dịch thử nhỏ trước khi duyệt một đợt in lớn.',
        'Bỏ tạo kiểu tinh vi. Chuyển sắc hay mực kim loại làm rối cảm biến quang. Mô-đun tối trên nền trắng.',
        'Bảo vệ phần hiển thị. Ở một nơi công cộng, một giá acrylic chống can thiệp ngăn ai đó dán một nhãn gian lận đè lên mã của bạn.'
      ]
    },
    faqs: [
      {
        q: 'Hiển thị mã QR crypto của tôi ở nơi công cộng có an toàn không?',
        a: 'Có — nó chỉ giữ địa chỉ nhận công khai của bạn. Người ta có thể gửi tiền vào ví bạn, nhưng không ai rút ra được. Khóa riêng của bạn hoàn toàn nằm trong quyền giữ của bạn.'
      },
      {
        q: 'Những ứng dụng ví nào có thể quét các mã QR crypto này?',
        a: 'Các ví di động tiêu chuẩn đều đọc mã URI chuẩn — MetaMask, Trust Wallet, Coinbase Wallet, Binance, Phantom, Exodus, Kraken, Electrum.'
      },
      {
        q: 'Tôi có thể nêu một số tiền thanh toán cố định trong mã QR không?',
        a: 'Đặt một số tiền tùy chọn như 0.005 BTC hoặc 50 USDT và ví điền nó tự động khi quét.'
      },
      {
        q: 'Điều gì xảy ra nếu ai đó gửi một tiền mã hóa khác tới địa chỉ của tôi?',
        a: 'Gửi một đồng coin không tương thích — chẳng hạn Bitcoin tới một địa chỉ Ethereum — có thể mất tiền vĩnh viễn. Đó chính là lý do mã nên được dán nhãn với đúng đồng coin và mạng.'
      },
      {
        q: 'Mã QR crypto có hết hạn hay tính phí giao dịch không?',
        a: 'Mã là vĩnh viễn và miễn phí. Phí gas blockchain tiêu chuẩn chỉ áp dụng khi một người trả thực sự gửi một giao dịch — đó là phí của mạng, không phải của chúng tôi.'
      },
      {
        q: 'Tôi tìm địa chỉ nhận ví công khai của mình ở đâu?',
        a: 'Mở ứng dụng ví, vào Nhận, chọn đồng coin, và sao chép địa chỉ công khai hiển thị.'
      },
      {
        q: 'Tôi có thể nhúng logo Bitcoin hay Ethereum chính thức vào mã QR không?',
        a: 'Chắc chắn. Vì Mức H có thể dựng lại tới khoảng 30% một mã hư hỏng, logo đồng coin có thể nằm ngay chính giữa mà không làm hỏng gì.'
      },
      {
        q: 'Địa chỉ ví của tôi có được lưu trên máy chủ QR Generator Online không?',
        a: 'Không. Mọi thứ diễn ra cục bộ, nên địa chỉ ví của bạn không bao giờ được tải lên, ghi log hay theo dõi.'
      }
    ],
    bestPractices: 'Xác minh địa chỉ nhận công khai của bạn từng ký tự trước khi tạo, và dán nhãn mã rõ ràng với đúng đồng coin và mạng blockchain — một lần chuyển sai mạng là không thể lấy lại.'
  },
  '/event-qr-code-generator': {
    sections: [
      {
        title: 'Tăng Số Người Dự Sự Kiện với Đồng Bộ Lịch Một Chạm',
        paragraphs: [
          'Thêm mã QR sự kiện vào thẻ giữ-ngày, thẻ hội nghị, xác nhận vé hoặc trang đích hội thảo trực tuyến.',
          'Bao gồm tiêu đề sự kiện, dấu thời gian bắt đầu và kết thúc, địa chỉ địa điểm và ghi chú mô tả.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of iCalendar VEVENT Calendar QR Codes',
      paragraphs: [
        'Một mã QR sự kiện mang một mục lịch ở định dạng iCalendar (`BEGIN:VEVENT` / `END:VEVENT`) định nghĩa trong RFC 5545. Nó giữ tiêu đề (`SUMMARY`), địa điểm (`LOCATION`), mô tả (`DESCRIPTION`), bắt đầu (`DTSTART`), kết thúc (`DTEND`) và múi giờ.',
        'Quét nó và điện thoại đọc dữ liệu rồi mời một bảng «Thêm vào Lịch». Một chạm đưa sự kiện vào Apple Calendar, Google Calendar hoặc Outlook, đầy đủ giờ bắt đầu, địa điểm và lời nhắc tự động.',
        'Tự động hóa mục lịch chính là thứ nâng số người dự. Hội thảo bị bỏ lỡ, ngày bị quên và trùng lịch phần lớn quy về việc ai đó đã không thêm sự kiện ngay từ đầu — và một lượt quét cất gánh nặng đó khỏi họ.'
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
        title: 'Nhập Tiêu Đề, Địa Điểm và Mô Tả Tóm Tắt Sự Kiện',
        description: 'Thêm tên sự kiện, địa chỉ địa điểm hoặc URL cuộc họp, và một mô tả ngắn.'
      },
      {
        number: 2,
        title: 'Đặt Ngày-Giờ Bắt Đầu và Kết Thúc Chính Xác Theo Múi Giờ',
        description: 'Đặt bắt đầu và kết thúc chính xác, theo múi giờ địa phương của địa điểm — đó là nơi lỗi lệch giờ len vào.'
      },
      {
        number: 3,
        title: 'Tùy Chỉnh Thiết Kế và Tải Tài Nguyên In',
        description: 'Thêm một biểu tượng lịch hoặc logo sự kiện, áp màu của bạn, và xuất SVG cho thiệp mời hoặc PNG cho màn hình.'
      }
    ],
    features: [
      {
        title: 'Thêm vào Lịch Điện Thoại Một Chạm',
        description: 'Khách mời đưa sự kiện vào Apple Calendar, Google Calendar hoặc Outlook chỉ một chạm.'
      },
      {
        title: 'Cảnh Báo Nhắc Nhở Gốc Tự Động',
        description: 'Mục lịch kích hoạt lời nhắc mặc định của điện thoại trước khi sự kiện bắt đầu, nên không ai phải đặt một cái.'
      },
      {
        title: 'Nhúng Địa Chỉ Địa Điểm Đầy Đủ và Liên Kết Ảo',
        description: 'Lưu địa chỉ chỉ đường hoặc liên kết Zoom hay Teams ngay trong mục, để người dự có nó khi cần.'
      },
      {
        title: 'Mã Vạch Tĩnh Vĩnh Viễn Không Hết Hạn',
        description: 'Một mã iCalendar tĩnh duy trì hiệu lực vô thời hạn, không phí hằng tháng hay giới hạn quét.'
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
        title: 'Hòa Nhạc, Lễ Hội và Buổi Diễn Sân Khấu',
        description: 'Một mã trên vé lưu giờ diễn và địa điểm vào điện thoại người giữ vé.'
      },
      {
        title: 'Đám Cưới, Kỷ Niệm và Lễ Mừng Riêng Tư',
        description: 'Một mã giữ-ngày đặt ngày vào lịch của khách trước hàng tháng.'
      },
      {
        title: 'Hội Nghị Doanh Nghiệp và Lịch Trình Bài Nói Chính',
        description: 'Người dự quét chương trình để thêm các hội thảo và bài nói cụ thể vào lịch của riêng họ.'
      },
      {
        title: 'Hội Thảo Trực Tuyến, Phát Trực Tiếp và Ra Mắt Sản Phẩm',
        description: 'Một mã trên đoạn phát quảng bá cho người xem lưu ngày phát ngay tại chỗ.'
      },
      {
        title: 'Giảm Giá Chớp Nhoáng Bán Lẻ và Khuyến Mãi Theo Mùa',
        description: 'Nhắc khách trung thành về một đợt giảm giá dịp lễ hay một giờ mua sắm VIP trước khi nó trôi qua.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Event QR Code Calendar Scheduling Errors',
      points: [
        'Lệch múi giờ. Nhập giờ theo múi địa phương của địa điểm, nếu không người dự lệch mất một giờ.',
        'Một mô tả dài. Nhồi cả một chương trình vào trường tĩnh làm phình ma trận. Giữ dưới khoảng 150 ký tự.',
        'Ngày đảo ngược. Đảm bảo kết thúc sau bắt đầu, nếu không lịch từ chối mục nhập.',
        'Tương phản thấp trên một tấm thẻ sang. Mô-đun pastel hay nhũ vàng trên nền ngà thì quét thất bại. Tối trên sáng.',
        'Không lời nhắc. Hãy dán nhãn — «Quét để Thêm Sự kiện vào Lịch».'
      ]
    },
    faqs: [
      {
        q: 'Điều gì xảy ra khi ai đó quét một mã QR sự kiện?',
        a: 'Trên iOS một lời nhắc «Thêm vào Lịch» mở Apple Calendar với tiêu đề, ngày, địa điểm và mô tả đã điền. Trên Android nó mở Google Calendar với lời nhắc Lưu.'
      },
      {
        q: 'Tôi có thể đưa một liên kết Zoom hay Google Meet vào chi tiết sự kiện không?',
        a: 'Đặt liên kết video vào trường Địa điểm hoặc Mô tả và người dự trực tuyến sẽ có URL cuộc họp ngay đó, trong mục lịch.'
      },
      {
        q: 'Mục lịch có tự động đặt lời nhắc cho người dự không?',
        a: 'Hầu hết ứng dụng lịch áp lời nhắc mặc định của chúng — thường 15 đến 30 phút trước — ngay khi một sự kiện mới được thêm.'
      },
      {
        q: 'Tôi có thể sửa ngày hay giờ sự kiện sau khi in mã QR không?',
        a: 'Mã đã in thì không — ngày và giờ được cố định trong ma trận. Nếu chi tiết có thể đổi, hãy trỏ một mã URL tới một trang sự kiện bạn kiểm soát.'
      },
      {
        q: 'Mã QR sự kiện có hết hạn hay tính phí hằng tháng không?',
        a: 'Không. Một khi bạn tạo một mã iCalendar tĩnh, nó là của bạn vĩnh viễn, không giới hạn quét và không phí kèm theo.'
      },
      {
        q: 'Định dạng xuất nào được khuyên dùng để in lên văn phòng phẩm đám cưới?',
        a: 'SVG vector — nó giữ sắc nét trên máy in thương mại, trên vải lanh có vân, hay trên giấy bìa kim loại.'
      },
      {
        q: 'Tôi có thể nhúng chữ lồng đám cưới hay logo công ty vào mã QR không?',
        a: 'Hoàn toàn được. Mức H để lại đủ dư thừa cho một chữ lồng hay một biểu tượng sự kiện ở giữa, và trình đọc vẫn giải mã sạch.'
      },
      {
        q: 'Thông tin sự kiện của tôi có riêng tư khi tạo không?',
        a: 'Có. Toàn bộ diễn ra trên thiết bị của bạn, nên tiêu đề và ngày sự kiện không bao giờ được gửi đi đâu.'
      }
    ],
    bestPractices: 'Kiểm tra kỹ mọi giờ bắt đầu, giờ kết thúc, múi giờ và địa điểm trước khi in, và thử mã trên cả iPhone lẫn Android để xác nhận mục nhập lưu đúng.'
  },
  '/phone-qr-code-generator': {
    sections: [
      {
        title: 'Gọi Một Chạm cho Khẩn Cấp và Hỗ Trợ Khách Hàng',
        paragraphs: [
          'Quét một mã QR điện thoại lập tức mở trình gọi số gốc của điện thoại với đúng số điện thoại của bạn sẵn sàng để gọi.',
          'Loại bỏ lỗi bấm số và tiết kiệm thời gian cho đường dây nóng khẩn cấp, đặt chỗ và cứu hộ ven đường.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of Tel URI Phone Call QR Codes',
      paragraphs: [
        'Một mã QR gọi điện mang một liên kết `tel:`, lược đồ quay số định nghĩa trong RFC 3966. Định dạng là `tel:<PhoneNumber>` — thường là một số E.164 duy nhất toàn cầu như `tel:+14155552671`, tùy chọn kèm các khoảng dừng DTMF cho một số máy lẻ.',
        'Quét nó và điện thoại hiện một lời nhắc trình gọi số của hệ thống với số và một nút «Gọi [Số]». Một chạm thực hiện cuộc gọi — không phải đọc một số từ tấm biển rồi bấm vào, vốn đúng là nơi phát sinh bấm nhầm trên vật liệu in.',
        'Đây là mã cho mọi thứ đọc khi đang di chuyển: decal xe dịch vụ, một thông báo liên hệ khẩn cấp, một biển bất động sản sân trước, một nhãn đường dây trợ giúp, một thực đơn mang đi.'
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
        title: 'Nhập Số Điện Thoại Đầy Đủ kèm Mã Quốc Gia',
        description: 'Dùng định dạng E.164 — +14155550199 cho Mỹ, +442071838750 cho Anh — để một người gọi quốc tế kết nối mà không phải đoán tiền tố quay số.'
      },
      {
        number: 2,
        title: 'Thêm Biểu Tượng Điện Thoại và Tùy Chỉnh Màu Thương Hiệu',
        description: 'Tạo kiểu tương phản cao, đặt mắt góc tùy chỉnh, và đặt một biểu tượng ống nghe ở giữa để lượt quét được đọc là một cuộc gọi, không phải một liên kết bí ẩn.'
      },
      {
        number: 3,
        title: 'Tải SVG Vector cho Dán Xe và Biển Hiệu Lớn',
        description: 'Lấy SVG cho đồ họa xe, biển sân trước và biển quảng cáo, hoặc PNG độ phân giải cao cho tờ rơi, nam châm và thẻ.'
      }
    ],
    features: [
      {
        title: 'Gọi Trực Tiếp Tức Thì Một Chạm',
        description: 'Một lượt quét và một chạm biến sự quan tâm thành một cuộc gọi trực tiếp trong vài giây.'
      },
      {
        title: 'Loại Bỏ Số Sai và Bấm Nhầm',
        description: 'Số chính xác được mã hóa, nên không ai đảo một chữ số đọc từ một chiếc xe đang chạy.'
      },
      {
        title: 'Hỗ Trợ Thiết Bị và Di Động Phổ Quát',
        description: 'Hoạt động từ camera tích hợp trên bất kỳ điện thoại thông minh nào có dịch vụ di động.'
      },
      {
        title: 'Vận Hành Trọn Đời Vĩnh Viễn Không Phí',
        description: 'Một mã tel tĩnh với hiệu lực vĩnh viễn, gọi không giới hạn và không phí hằng tháng.'
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
        title: 'Decal Đội Xe Dịch Vụ (Ống Nước, Điều Hòa, Điện)',
        description: 'Một mã lớn trên xe cho một chủ nhà kẹt xe — hay đi ngang một xe tải đang đậu — quét và gọi để yêu cầu dịch vụ.'
      },
      {
        title: 'Biển Sân Trước và Bảng Rao Bán Bất Động Sản',
        description: 'Một người mua đứng trước ngôi nhà quét tấm biển và liên hệ thẳng với môi giới.'
      },
      {
        title: 'Đường Dây Khẩn Cấp và Điều Phối An Ninh',
        description: 'Trong một khuôn viên, một bãi đỗ xe hay một khu công nghiệp, mã đặt một cuộc gọi khẩn cấp cách đúng một chạm.'
      },
      {
        title: 'Thực Đơn Mang Đi và Giao Hàng Nhà Hàng',
        description: 'Một mã trên thực đơn mang đi hay một nam châm tủ lạnh cho một khách đói bụng đặt món qua điện thoại ngay tại chỗ.'
      },
      {
        title: 'Nhãn Cho Thuê Thiết Bị và Dịch Vụ Kéo Xe',
        description: 'Một nhãn bền trên thiết bị cho thuê, một biển bãi đỗ hay một kho lưu trữ giúp gọi trợ giúp nhanh.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Phone Call QR Code Dialing Errors',
      points: [
        'Không mã quốc gia. Đặt trước số dấu + và mã quốc gia (+1 cho Mỹ). Thiếu nó, một thiết bị chuyển vùng quốc tế không thể hoàn tất cuộc gọi.',
        'Quá nhỏ trên một chiếc xe. Một mã 50 mm không đọc được từ 5 mét. Trên biển hiệu xe, hãy dùng ít nhất 300 mm x 300 mm.',
        'Vinyl phản quang. Crôm bóng hay lớp dán kim loại lóa dưới nắng. Hãy chọn mờ hoặc satin.',
        'Sai định dạng số máy lẻ. Với một số máy lẻ tự quay, ngăn cách nó bằng một dấu phẩy — tel:+14155550199,102 — chèn một khoảng dừng DTMF hai giây.',
        'Không biểu tượng điện thoại. Một ống nghe ở giữa trấn an mọi người rằng lượt quét là một cuộc gọi, không phải một liên kết web lạ.'
      ]
    },
    faqs: [
      {
        q: 'Quét mã QR có bắt đầu cuộc gọi ngay không?',
        a: 'Không — điện thoại hiện số đã giải mã kèm một nút Gọi, và người dùng chạm để quay số. Bước xác nhận đó là có chủ đích.'
      },
      {
        q: 'Tôi có nên đưa mã quốc gia vào số điện thoại không?',
        a: 'Luôn luôn. Bắt đầu bằng dấu + và mã quốc gia (+1 cho Mỹ và Canada, +44 cho Anh) để mọi người gọi đều kết nối được bất kể nhà mạng hay trạng thái chuyển vùng.'
      },
      {
        q: 'Điều gì xảy ra nếu ai đó quét mã QR điện thoại trên một iPad không có thẻ SIM?',
        a: 'Trên một máy tính bảng chỉ có WiFi, lượt quét mời thực hiện cuộc gọi qua FaceTime Audio, Skype hoặc một iPhone đã ghép đôi làm cầu nối di động.'
      },
      {
        q: 'Tôi có thể mã hóa số máy lẻ vào mã QR không?',
        a: 'Đặt một dấu phẩy giữa số chính và số máy lẻ — tel:+14155550199,104 — và dấu phẩy thêm một khoảng dừng hai giây trước khi quay các chữ số DTMF.'
      },
      {
        q: 'Mã QR điện thoại có hết hạn hay tính phí mỗi cuộc gọi không?',
        a: 'Không. Một mã tel tĩnh có hiệu lực vĩnh viễn, không giới hạn quét và không phí mỗi cuộc gọi.'
      },
      {
        q: 'Định dạng vector nào tốt nhất cho in dán xe thương mại?',
        a: 'SVG — nó giữ độ chính xác vector khi phóng tới cỡ xe hay biển quảng cáo, không vỡ hạt.'
      },
      {
        q: 'Tôi có thể theo dõi bao nhiêu cuộc gọi đến từ mã QR của mình không?',
        a: 'Trỏ mã tới một số theo dõi cuộc gọi chuyên dụng từ CallRail hoặc Twilio, chỉ gán cho tài liệu đó, và mọi cuộc gọi qua nó đều quy được nguồn.'
      },
      {
        q: 'Số điện thoại của tôi có được lưu trên máy chủ bên ngoài khi tạo không?',
        a: 'Không. Việc tạo chạy hoàn toàn trong trình duyệt của bạn, nên số không bao giờ được lưu, ghi log hay chia sẻ.'
      }
    ],
    bestPractices: 'Dùng định dạng E.164 (+1...), chọn cỡ mã theo khoảng cách nhìn (quy tắc 10:1), và thêm một biểu tượng điện thoại để lượt quét mang rõ nghĩa «gọi».'
  },
  '/sms-qr-code-generator': {
    sections: [
      {
        title: 'Tạo Khách Hàng Tiềm Năng qua SMS và Đăng Ký Tiếp Thị',
        paragraphs: [
          'Điền sẵn số điện thoại đích và từ khóa kích hoạt (như «JOIN» hay «DISCOUNT») để khách đăng ký nhận cập nhật qua tin nhắn chỉ với một cú nhấp.',
          'Lý tưởng cho khuyến mãi bán lẻ, đăng ký câu lạc bộ VIP và các cuộc thi rút thăm.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of SMSTO Protocol Text Messaging QR Codes',
      paragraphs: [
        'Một mã QR SMS mang một chỉ dẫn nhắn tin trong lược đồ `SMSTO:` (hoặc `sms:`). Định dạng là `SMSTO:<PhoneNumber>:<MessageText>` — số hoặc mã ngắn của người nhận, rồi phần nội dung tin nhắn để điền sẵn.',
        'Quét nó khởi chạy ứng dụng Tin nhắn gốc — Apple Messages trên iOS, Google Messages trên Android — với số đã điền và văn bản đã gõ sẵn. Một chạm gửi nó qua SMS hoặc RCS.',
        'Đây là xương sống của phần lớn tiếp thị di động: đăng ký bằng từ khóa («nhắn DISCOUNT tới một mã ngắn»), đăng ký người nhận tin, xác nhận vé, kiểm tra hai lớp. SMS được đọc trên 98%, và một mã loại bỏ ma sát của việc gõ đúng một số và một từ khóa.'
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
        title: 'Nhập Số Điện Thoại Đích hoặc Mã Ngắn',
        description: 'Thêm số 10 chữ số của bạn, một đường dây SMS miễn phí, hoặc một mã ngắn tiếp thị 5-6 chữ số, kèm mã quốc gia.'
      },
      {
        number: 2,
        title: 'Xác Định Từ Khóa hoặc Nội Dung Tin Nhắn Điền Sẵn',
        description: 'Gõ đúng từ khóa mà nền tảng SMS của bạn mong đợi — JOIN, VIP, DISCOUNT, INFO.'
      },
      {
        number: 3,
        title: 'Tải Tài Nguyên In Độ Phân Giải Cao',
        description: 'Lấy SVG vector cho banner trong cửa hàng, thẻ kệ và bảng để bàn, hoặc PNG cho một màn hình khuyến mãi.'
      }
    ],
    features: [
      {
        title: 'Thúc Đẩy Tăng Trưởng Bùng Nổ Danh Sách SMS',
        description: 'Bỏ ma sát khỏi việc đăng ký và ghi danh khách trung thành để nhiều người quét hoàn tất luồng hơn.'
      },
      {
        title: 'Không Lỗi Chính Tả Từ Khóa',
        description: 'Hệ tự động của bạn nhận đúng từ khóa mỗi lần, không lỗi gõ của khách làm rớt đăng ký.'
      },
      {
        title: 'Tương Thích Nhà Mạng và Thiết Bị Phổ Quát',
        description: 'Hoạt động trên mọi nhà mạng và trên bất kỳ iPhone hay Android nào có camera.'
      },
      {
        title: 'Mã Vạch Tĩnh Vĩnh Viễn Không Hết Hạn',
        description: 'Một mã duy trì hoạt động vô thời hạn, không đăng ký hay bóp giới hạn quét.'
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
        title: 'Câu Lạc Bộ VIP Bán Lẻ và Xây Dựng Danh Sách SMS',
        description: 'Một mã tại quầy thanh toán tặng giảm giá tức thì ngay khi người mua quét để nhắn từ khóa đăng ký của bạn.'
      },
      {
        title: 'Hỏi Bất Động Sản Tự Động',
        description: 'Một mã trên biển sân trước cho người mua nhắn một mã bất động sản và nhận lại giá cùng sơ đồ mặt bằng tự động.'
      },
      {
        title: 'Bán Vé Sự Kiện và Xác Nhận Check-In',
        description: 'Người tham dự nhắn một mã xác nhận tại cửa để check-in nhanh.'
      },
      {
        title: 'Hỗ Trợ Khách Hàng và Dịch Vụ Lễ Tân',
        description: 'Khách khách sạn và khách hàng có một đường dây SMS trực tiếp để yêu cầu dịch vụ hoặc đặt lịch hẹn.'
      },
      {
        title: 'Dự Thi và Bình Chọn Sự Kiện Trực Tiếp',
        description: 'Một mã quét được kéo về hàng nghìn lượt dự thi tức thì trong một trận đấu hay buổi hòa nhạc.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting SMS QR Code Scanning Failures',
      points: [
        'Trên 160 ký tự. Giữ văn bản điền sẵn ngắn — một tin nhắn dài hơn tách thành nhiều phần và có thể bị phân mảnh trên mạng đời cũ.',
        'Giới hạn mã ngắn. Trên một mã ngắn 5 chữ số, hãy xác nhận cổng SMS của bạn chấp nhận tin nhắn đến từ thiết bị chuyển vùng quốc tế.',
        'Thiếu tuyên bố miễn trừ. Theo quy định TCPA và CTIA, hãy in thông báo chuẩn — «Msg & data rates may apply. Reply STOP to cancel» — cạnh một mã tiếp thị.',
        'Tương phản thấp. Mô-đun sáng trên một bề mặt nhạt thì thất bại. Tối trên sáng.',
        'Hao mòn. Một lớp cán mờ bảo vệ một tấm thẻ in khỏi trầy xước và ẩm ướt vốn làm hỏng lượt quét.'
      ]
    },
    faqs: [
      {
        q: 'Quét mã QR có tự động gửi tin nhắn văn bản không?',
        a: 'Không. Nó mở ứng dụng Tin nhắn với số và văn bản đã sẵn sàng, và người dùng chạm Gửi — đó là điều giữ nó tuân thủ các quy định về quyền riêng tư di động.'
      },
      {
        q: 'Cước SMS tiêu chuẩn của nhà mạng có bị tính khi người dùng gửi tin nhắn không?',
        a: 'Có. Tin nhắn người dùng gửi lấy từ hạn mức SMS trong gói cước của họ và bất kỳ cước nhà mạng nào áp dụng.'
      },
      {
        q: 'Tôi có thể dùng mã QR SMS với mã ngắn 5 hoặc 6 chữ số không?',
        a: 'Một số 10 chữ số thông thường, một đường dây miễn phí, hay một mã ngắn 5-6 chữ số, tất cả đều nhập vào cùng trường số điện thoại.'
      },
      {
        q: 'Mã QR SMS có hết hạn hay có giới hạn quét hằng tháng không?',
        a: 'Chúng là mã tĩnh vĩnh viễn, quét không giới hạn và không hết hạn.'
      },
      {
        q: 'Giới hạn ký tự cho văn bản SMS điền sẵn là bao nhiêu?',
        a: 'Một tin SMS đơn chứa 160 ký tự. Giữ dưới ngưỡng đó giữ tin nhắn ở một đoạn duy nhất trên mọi nhà mạng.'
      },
      {
        q: 'Tôi có thể nhúng logo vào một mã QR SMS không?',
        a: 'Điều đó được. Ở Mức H, mã chịu được kha khá che khuất — đủ để đặt một biểu tượng tin nhắn hay logo của bạn lên giữa.'
      },
      {
        q: 'Mã QR SMS có cần kết nối internet để quét không?',
        a: 'Quét và mở ứng dụng Tin nhắn hoạt động ngoại tuyến. Việc gửi tin nhắn thì cần sóng di động bình thường.'
      },
      {
        q: 'Dữ liệu điện thoại của khách có được lưu trên máy chủ QR Generator Online không?',
        a: 'Không. Mọi thứ được làm trên thiết bị của bạn, nên không số hay nội dung tin nhắn nào được tải lên hay giữ lại.'
      }
    ],
    bestPractices: 'Nêu rõ lợi ích của việc gửi tin nhắn, và kèm các tuyên bố miễn trừ về cước tin nhắn và dữ liệu bắt buộc trên bất kỳ chiến dịch thương mại nào.'
  },
  '/email-qr-code-generator': {
    sections: [
      {
        title: 'Tinh Gọn Phản Hồi Khách Hàng và Câu Hỏi Liên Hệ',
        paragraphs: [
          'Khi người dùng quét một mã QR email, ứng dụng email mặc định của họ mở ra với địa chỉ hỗ trợ của bạn, chủ đề tùy chỉnh và mẫu nội dung tin nhắn đã điền sẵn.',
          'Hoàn hảo cho phản hồi sản phẩm, đăng ký bảo hành khách hàng, áp phích tuyển dụng và hỗ trợ kỹ thuật.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Mailto URI Scheme Email QR Codes',
      paragraphs: [
        'Một mã QR email mang một liên kết `mailto:`, lược đồ email internet định nghĩa trong RFC 6068. Cấu trúc là `mailto:<RecipientEmail>?subject=<EncodedSubject>&body=<EncodedBody>&cc=<EncodedCC>&bcc=<EncodedBCC>`, với dấu cách và ký tự đặc biệt mã hóa phần trăm theo RFC 3986.',
        'Một lượt quét mở bất kỳ ứng dụng email nào được đặt làm mặc định — Apple Mail, Gmail, Outlook, Yahoo — với địa chỉ, chủ đề và văn bản mở đầu đã điền sẵn. Người dùng xem lại và chạm gửi. Một phản hồi, một yêu cầu hỗ trợ, một khiếu nại bảo hành: xem-rồi-gửi thay vì một cửa sổ soạn trống.',
        'Với một bàn hỗ trợ, chủ đề điền sẵn đó âm thầm làm việc phân loại. Nhúng một tiêu đề chuẩn như `[Khiếu nại Bảo hành - Model X]` thì các phiếu đến tự phân loại, giảm việc sàng lọc thủ công ở đầu nhận.'
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
        title: 'Nêu Email Người Nhận và CC/BCC Tùy Chọn',
        description: 'Nhập hộp thư sẽ nhận nó — support@yourcompany.com — và thêm các địa chỉ CC hoặc BCC ngăn cách bằng dấu phẩy nếu cần.'
      },
      {
        number: 2,
        title: 'Soạn Dòng Chủ Đề Chuẩn và Mẫu Nội Dung',
        description: 'Điền sẵn một chủ đề rõ ràng như «Hỏi về Đơn hàng #» kèm một gợi ý nội dung ngắn, để khách bắt đầu từ một thứ gì đó thay vì con số không.'
      },
      {
        number: 3,
        title: 'Tùy Chỉnh Thiết Kế và Xuất Tệp In Độ Phân Giải Cao',
        description: 'Tạo kiểu các mô-đun, thêm biểu tượng phong bì hoặc logo của bạn, và tải SVG vector để in hoặc PNG độ phân giải cao cho màn hình.'
      }
    ],
    features: [
      {
        title: 'Loại Bỏ Email Trả Về và Lỗi Gõ Địa Chỉ',
        description: 'Tin nhắn đến đúng hộp thư của bạn — không tên miền viết sai, không trả về.'
      },
      {
        title: 'Tự Động Hóa Phân Loại Phiếu Helpdesk và CRM',
        description: 'Một chủ đề đặt sẵn cho phép Zendesk, Freshdesk hay HubSpot tự định tuyến câu hỏi.'
      },
      {
        title: 'Hỗ Trợ Phổ Quát Trên Mọi Ứng Dụng Thư',
        description: 'Mở ứng dụng thư mặc định trên iOS, Android, macOS và Windows như nhau.'
      },
      {
        title: 'Vận Hành Trọn Đời Vĩnh Viễn Không Phí',
        description: 'Một mã mailto tĩnh không bao giờ hết hạn, không cần đăng ký, và xử lý bất kỳ khối lượng tin nhắn nào.'
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
        title: 'Đăng Ký Bảo Hành và Hỗ Trợ Kỹ Thuật',
        description: 'Một mã trên nhãn sản phẩm mở một khiếu nại với số model đã có sẵn trong dòng chủ đề.'
      },
      {
        title: 'Phản Hồi Khách Hàng và Câu Hỏi Chung',
        description: 'Một thẻ để bàn đưa phản hồi thẳng thắn thẳng và riêng tư tới hộp thư của tổng quản lý.'
      },
      {
        title: 'Tuyển Dụng Hội Chợ Việc Làm và Nộp Hồ Sơ',
        description: 'Một mã áp phích tuyển dụng cho ứng viên gửi email hồ sơ tới nhà tuyển dụng với mã công việc đặt sẵn.'
      },
      {
        title: 'Thu Khách Tại Hội Chợ và Yêu Cầu Xuất Hóa Đơn',
        description: 'Khách ghé gian hàng quét để yêu cầu một tài liệu chuyên môn, một danh mục hay báo giá doanh nghiệp chỉ một chạm.'
      },
      {
        title: 'Bảo Trì Khẩn và Quản Lý Cơ Sở',
        description: 'Một mã trên một dàn điều hòa cho người thuê báo lỗi trực tiếp tới bộ phận điều phối bảo trì.'
      }
    ],
    troubleshooting: {
      title: 'Avoiding Email QR Code Scanning & Delivery Issues',
      points: [
        'Nội dung quá dài. Hơn 400 ký tự văn bản điền sẵn nhồi ma trận chật. Giữ mẫu dưới khoảng 150 ký tự.',
        'Một địa chỉ sai định dạng. Thiếu một @ hoặc một khoảng trắng ở cuối khiến ứng dụng thư từ chối lệnh soạn. Kiểm tra người nhận cẩn thận.',
        'Không ứng dụng thư mặc định. Trên một máy tính chưa cấu hình, một liên kết mailto có thể hỏi dùng ứng dụng nào. Trên di động, ứng dụng thư gốc xử lý luôn.',
        'Tương phản thấp. Mô-đun nhạt hay pastel trên nền trắng thì quét thất bại. Tối trên sáng, trên 4.5:1.',
        'Không hướng dẫn. Hãy dán nhãn — «Quét để Gửi Email cho Hỗ trợ» — để lượt quét rõ ràng.'
      ]
    },
    faqs: [
      {
        q: 'Ứng dụng email nào mở khi người dùng quét mã QR email?',
        a: 'Cái nào được thiết bị coi là mặc định — Apple Mail trên iPhone, Gmail trên Android, hoặc Outlook hay Yahoo nếu người dùng đặt một trong số đó.'
      },
      {
        q: 'Quét có tự động gửi email không?',
        a: 'Không. Nó mở cửa sổ soạn với các trường đã điền, và người dùng chạm Gửi. Điều đó giữ cho họ làm chủ những gì thực sự gửi đi.'
      },
      {
        q: 'Tôi có thể để trống trường chủ đề và nội dung không?',
        a: 'Được. Chỉ nhập địa chỉ người nhận và để trống chủ đề cùng nội dung cho người dùng tự viết.'
      },
      {
        q: 'Tôi có thể thêm nhiều địa chỉ email người nhận không?',
        a: 'Thêm vài địa chỉ ngăn cách bằng dấu phẩy vào trường người nhận và tin nhắn đến cả nhóm của bạn cùng lúc.'
      },
      {
        q: 'Mã QR email có hết hạn hay đòi gói trả phí không?',
        a: 'Cả hai đều không. Một mã mailto tĩnh hoạt động mãi mãi, dù bao nhiêu người quét nó, và không bao giờ đòi tiền.'
      },
      {
        q: 'Tôi có thể đưa bao nhiêu ký tự vào nội dung email điền sẵn?',
        a: 'Lược đồ mailto cho phép chuỗi dài, nhưng giữ nội dung dưới khoảng 150 ký tự giúp ma trận sạch và quét nhanh.'
      },
      {
        q: 'Tôi có thể theo dõi bao nhiêu email được tạo từ mã QR của mình không?',
        a: 'Thả một thẻ vào dòng chủ đề — [Nguồn: Tờ rơi mùa hè] — và lọc theo nó trong hộp thư hay CRM để xem tài liệu nào tạo ra tin nhắn.'
      },
      {
        q: 'Địa chỉ email của tôi có được giữ riêng tư khi tạo không?',
        a: 'Nó ở lại cục bộ. Việc mã hóa chạy trong trình duyệt của bạn, nên không địa chỉ nào bị ghi log hay lưu trên máy chủ.'
      }
    ],
    bestPractices: 'Giữ chủ đề rõ ràng và nội dung ngắn, dùng mô-đun tối trên nền trắng, và dán nhãn mã với nơi email sẽ đến để người quét biết cần mong đợi gì.'
  },
  '/facebook-qr-code-generator': {
    sections: [
      {
        title: 'Phát Triển Khán Giả Mạng Xã Hội của Bạn Ở Mọi Nơi',
        paragraphs: [
          'Giúp khách tại cửa hàng và người dự sự kiện dễ dàng tìm và theo dõi thương hiệu của bạn trên các kênh mạng xã hội mà không phải tìm tên người dùng thủ công.',
          'Gắn biểu tượng nền tảng chính thức vào giữa mã QR để tăng nhận diện thương hiệu và tỷ lệ chuyển đổi lượt quét.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Overview of Social Media & Facebook Profile QR Codes',
      paragraphs: [
        'Một mã QR Facebook hay mạng xã hội mang một URL hồ sơ trực tiếp, tên trang, liên kết nhóm hoặc điểm đến link-tree. Quét nó và điện thoại phân giải một liên kết phổ quát: nếu ứng dụng Facebook, Instagram, TikTok hay LinkedIn đã cài, nó liên kết sâu thẳng tới trang đã xác minh của bạn; nếu không, nó mở bản web di động kèm lời mời theo dõi.',
        'Ở cửa hàng hay sự kiện, sự chú ý thoáng qua. Bảo ai đó «tìm Acme Co trên Facebook» sẽ mất phần lớn họ — vì một lỗi gõ, một đối thủ có thương hiệu gần giống, hay bất cứ thứ gì bảng tin đưa ra kế tiếp. Một mã chuyên dụng loại bỏ hoàn toàn việc tìm kiếm và biến người qua đường thành người theo dõi trong chưa tới hai giây.',
        'Bạn có bản xuất vector độ phân giải cao và toàn quyền kiểm soát thiết kế, nên có thể chèn huy hiệu nền tảng chính thức, khớp mã với màu thương hiệu, và giữ đủ tương phản để quét nhanh qua cửa kính cửa hàng hay từ đầu bên kia hội trường sự kiện.'
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
        title: 'Dán URL Trang, Nhóm hoặc Hồ Sơ Facebook của Bạn',
        description: 'Sao chép liên kết công khai đầy đủ — facebook.com/yourbrand, instagram.com/yourhandle — và dán vào.'
      },
      {
        number: 2,
        title: 'Chèn Biểu Tượng Thương Hiệu và Tùy Chỉnh Bảng Màu',
        description: 'Tạo kiểu bằng màu xanh Facebook (#1877F2) hoặc bảng màu của riêng bạn, và đặt biểu tượng nền tảng vào giữa ở mức sửa lỗi Mức H.'
      },
      {
        number: 3,
        title: 'Tải SVG Vector cho Biển Hiệu hoặc PNG cho In Ấn',
        description: 'Lấy SVG cho decal cửa kính, giá banner và bao bì, hoặc PNG độ phân giải cao cho tờ rơi, hóa đơn và thẻ để bàn.'
      }
    ],
    features: [
      {
        title: 'Biến Lưu Lượng Khách Thực Thành Người Theo Dõi Tương Tác',
        description: 'Người mua sắm, thực khách và đại biểu sự kiện trở thành người theo dõi mà không phải tìm trang của bạn.'
      },
      {
        title: 'Liên Kết Sâu Trực Tiếp vào Ứng Dụng Gốc',
        description: 'Một lượt quét đưa người dùng di động vào ứng dụng xã hội đã cài của họ để theo dõi chỉ một chạm.'
      },
      {
        title: 'Nhúng Biểu Tượng Mạng Xã Hội Chính Thức',
        description: 'Chọn từ các mẫu biểu tượng Facebook, Instagram, YouTube, TikTok và LinkedIn để mã dễ nhận biết và đáng tin.'
      },
      {
        title: 'Quét Vĩnh Viễn Không Giới Hạn, Không Hết Hạn',
        description: 'Một mã xã hội tĩnh tiếp tục hoạt động vô thời hạn, không phí, không giới hạn, không gia hạn.'
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
        title: 'Màn Hình Quầy Thanh Toán và Xây Dựng Lòng Trung Thành',
        description: 'Một mã cạnh quầy tính tiền thúc người mua theo dõi trang để nhận giảm giá chớp nhoáng hằng tuần và thông báo hàng mới.'
      },
      {
        title: 'Thẻ Để Bàn Nhà Hàng và Đánh Giá Check-In',
        description: 'Thực khách check-in, để lại đánh giá và gắn thẻ ảnh món ăn, mở rộng miễn phí phạm vi tiếp cận địa phương tự nhiên của bạn.'
      },
      {
        title: 'Chèn Bao Bì và Cuộc Thi Mở Hộp',
        description: 'Một tấm thẻ trong hộp mời người mua đăng một video mở hộp và gắn thẻ bạn để có cơ hội trúng giải hằng tháng.'
      },
      {
        title: 'Sự Kiện, Hội Nghị và Buổi Gặp Cộng Đồng',
        description: 'Một mã lớn trên slide hay banner đưa người tham dự thẳng vào nhóm cộng đồng chính thức của bạn.'
      },
      {
        title: 'Decal Đội Xe Dịch Vụ và Quảng Cáo Địa Phương',
        description: 'Một mã trên xe tải cho phép cư dân địa phương đọc đánh giá và theo dõi trang của bạn khi dừng đèn đỏ.'
      }
    ],
    troubleshooting: {
      title: 'Preventing Social Media QR Code Scanning Mistakes',
      points: [
        'Một trang riêng tư. Đặt trang hoặc nhóm ở chế độ Công khai để người quét thấy nội dung mà không bị một bức tường đăng nhập chắn đường.',
        'Một nền bận rộn. Bỏ tấm ảnh phía sau mã. Một nền sáng đơn sắc ở tương phản 4.5:1 mới là thứ camera bắt được.',
        'Không lý do để quét. Một mã trơ trọi thu được ít lượt theo dõi. Hãy cho nó một cái móc — «Quét để Tham gia hơn 10.000 Thành viên VIP trên Facebook».',
        'Lóa bóng. Một decal cửa kính bóng hắt nắng vào ống kính. Vinyl mờ khi ở ngoài trời, luôn luôn.',
        'Chỉ một nền tảng. Muốn người theo dõi trên Facebook, Instagram và TikTok? Hãy trỏ mã tới một trang link-tree duy nhất thay vì một mạng đơn lẻ.'
      ]
    },
    faqs: [
      {
        q: 'Quét sẽ mở ứng dụng Facebook hay một trình duyệt web?',
        a: 'Nếu ứng dụng Facebook đã cài, liên kết phổ quát mở hồ sơ của bạn ngay bên trong nó. Nếu không, nó lùi về trình duyệt di động — dù cách nào, người đó cũng đến trang của bạn.'
      },
      {
        q: 'Tôi có thể liên kết tới một bài đăng, album hay sự kiện Facebook cụ thể thay vì một trang không?',
        a: 'Sao chép URL trực tiếp của bất kỳ bài đăng, album, buổi phát trực tiếp hay sự kiện công khai nào và dán vào. Mã trỏ tới nơi liên kết trỏ tới.'
      },
      {
        q: 'Làm sao để liên kết tới nhiều nền tảng mạng xã hội bằng một mã QR?',
        a: 'Tạo một trang tổng hợp liên kết miễn phí — Linktree, Beacons hoặc một trang trên chính website của bạn — và tạo mã từ URL đó. Người quét sau đó chọn nền tảng để theo dõi.'
      },
      {
        q: 'Mã QR Facebook có hết hạn hay có giới hạn quét hằng tháng không?',
        a: 'Chúng là mã tĩnh và vĩnh viễn. Mã giữ URL trực tiếp của bạn và tiếp tục hoạt động, quét không giới hạn và không hết hạn.'
      },
      {
        q: 'Tôi có thể tùy chỉnh mã QR bằng màu xanh chính thức của Facebook không?',
        a: 'Dùng màu chính thức #1877F2 cho các mô-đun và giữ nền trắng sạch — tương phản vẫn cao và mã vẫn đúng thương hiệu.'
      },
      {
        q: 'Vì sao dùng mã QR tốt hơn là bảo người dùng tìm trang của tôi?',
        a: 'Một lượt quét bỏ qua hoàn toàn việc tìm kiếm: không lỗi gõ, không lạc vào một trang nhái tên gần giống, và việc theo dõi hoàn tất trong chưa tới hai giây.'
      },
      {
        q: 'Tôi nên tải định dạng tệp nào để in lên biển hiệu cửa hàng?',
        a: 'SVG vector — nó co giãn tới bất kỳ kích thước banner hay cửa kính nào mà không hề nhòe.'
      },
      {
        q: 'Quyền riêng tư của khách có được bảo vệ khi tạo mã QR mạng xã hội không?',
        a: 'Mọi thứ được tạo cục bộ trên thiết bị của bạn, nên URL và liên kết hồ sơ của bạn không bao giờ tới máy chủ.'
      }
    ],
    bestPractices: 'Ghép mã với một lý do để hành động — «Quét để Mở Khóa Ưu Đãi Độc Quyền» hay «Theo dõi để Nhận Quà Mỗi Ngày» — và đặt nó ngang tầm mắt ở nơi đủ sáng. Quét thử trên vài điện thoại khác nhau trước khi ra mắt.'
  },
  '/whatsapp-qr-code-generator': {
    sections: [
      {
        title: 'Giao Tiếp và Hỗ Trợ Khách Hàng Trực Tiếp',
        paragraphs: [
          'Khởi động tiếp thị hội thoại và hỗ trợ khách hàng không ma sát. Quét sẽ mở WhatsApp thẳng vào một cuộc trò chuyện đã có sẵn số của bạn kèm văn bản viết sẵn chờ gửi.',
          'Lý tưởng cho quầy chăm sóc khách hàng, đặt bàn nhà hàng, áp phích hỏi sản phẩm và bao bì thương mại điện tử.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Protocol & Architecture of WhatsApp Click-to-Chat QR Codes',
      paragraphs: [
        'Một mã QR WhatsApp mang liên kết nhấp-để-trò-chuyện theo giao thức chính thức `https://wa.me/` của WhatsApp (hoặc lược đồ cũ `whatsapp://send?phone=`). Định dạng là `https://wa.me/<PhoneNumber>?text=<URLEncodedText>` — số ở dạng E.164 không ký hiệu, và văn bản là một tin nhắn mở đầu mã hóa phần trăm.',
        'Quét nó và điện thoại chuyển giao cho trình xử lý Universal Link của WhatsApp. Nếu WhatsApp hoặc WhatsApp Business đã cài, ứng dụng mở thẳng vào cuộc trò chuyện với số của bạn và thả tin nhắn viết sẵn vào ô soạn — khách không cần lưu số của bạn vào danh bạ trước.',
        'Lối tắt đó chính là điểm mấu chốt. Bỏ đi các bước «lưu số, mở ứng dụng, nghĩ xem nói gì» thì rào cản cho tin nhắn đầu tiên gần như biến mất, đó là lý do một mã WhatsApp thường chuyển đổi tốt hơn nhiều so với một số điện thoại in hay một biểu mẫu web.'
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
        title: 'Nhập Số Điện Thoại kèm Mã Quốc Gia',
        description: 'Nhập số đầy đủ kèm mã quốc gia và không gì khác — không dấu cộng, gạch nối hay ngoặc. Số Mỹ thành 14155551234; số Anh, 447911123456.'
      },
      {
        number: 2,
        title: 'Soạn Tin Nhắn Hỏi Khách Hàng Điền Sẵn',
        description: 'Viết câu mở đầu giúp họ, kiểu «Chào bạn! Tôi muốn đặt một bàn cho tối nay» hoặc «Xin chào, tôi thấy tờ rơi của bạn và muốn báo giá sản phẩm X».'
      },
      {
        number: 3,
        title: 'Tùy Chỉnh với Logo WhatsApp Chính Thức và Tải Về',
        description: 'Dùng bộ màu thương hiệu xanh ngọc lục bảo và trắng, đặt dấu hiệu WhatsApp vào giữa, và xuất dạng SVG hoặc PNG độ phân giải cao.'
      }
    ],
    features: [
      {
        title: 'Không Ma Sát Lưu Liên Hệ',
        description: 'Khách hàng chạm tới đường dây bán hàng hay hỗ trợ của bạn ngay khoảnh khắc họ quét — không phải thêm số của bạn vào máy trước.'
      },
      {
        title: 'Mẫu Câu Hỏi Soạn Sẵn',
        description: 'Gieo cuộc trò chuyện bằng ngữ cảnh gắn với quảng cáo, sản phẩm hay tờ rơi cụ thể nơi mã nằm.'
      },
      {
        title: 'Hỗ Trợ WhatsApp Business và WhatsApp Personal',
        description: 'Hoạt động với tài khoản cá nhân, ứng dụng WhatsApp Business và WhatsApp Cloud API.'
      },
      {
        title: 'Mã Hóa Tĩnh Vĩnh Viễn Không Phí',
        description: 'Một mã tĩnh không bao giờ hết hạn, không tốn phí hằng tháng, và xử lý số lần bắt đầu trò chuyện không giới hạn.'
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
        title: 'Hỗ Trợ Khách Hàng và Đăng Ký Bảo Hành',
        description: 'Một mã trên sách hướng dẫn hay trên hộp cho người mua một đường dây khắc phục sự cố trực tiếp ngay khi có trục trặc.'
      },
      {
        title: 'Mang Về và Đặt Bàn cho Nhà Hàng',
        description: 'Thực khách quét một thẻ để bàn để gọi món, đặt chỗ hay hỏi về một chất gây dị ứng thẳng vào hộp thư WhatsApp Business của bạn.'
      },
      {
        title: 'Hỏi Bất Động Sản và Tham Quan Nhà',
        description: 'Trên một tờ rơi, mã cho phép người mua nhắn cho môi giới về sơ đồ mặt bằng và giờ xem nhà ngay tại chỗ.'
      },
      {
        title: 'Chèn Trong Gói Hàng Thương Mại Điện Tử',
        description: 'Một tấm thẻ trong hộp giao hàng mời khách nhắn tin để đổi hàng hoặc lấy mã giảm giá VIP.'
      },
      {
        title: 'Báo Giá Dịch Vụ và Điều Phối Khẩn',
        description: 'Một nam châm tủ lạnh hay nhãn dán dịch vụ có mã WhatsApp biến một việc sửa ống nước hay khóa gấp thành một lượt đặt chỉ một chạm.'
      }
    ],
    troubleshooting: {
      title: 'Top Reasons WhatsApp QR Codes Fail to Open Chats',
      points: [
        'Định dạng số sai. Một số 0 đứng đầu trước mã vùng (4407911... thay vì 447911...) hay một dấu + lạc làm hỏng liên kết wa.me. Chỉ chữ số.',
        'Một số cố định. Mã hóa một số chưa bao giờ đăng ký trên WhatsApp thì lượt quét trả về lỗi người dùng không hợp lệ.',
        'Điền sẵn phình to. Một tin nhắn mặc định 500 ký tự tạo ra mã dày và chậm. Giữ câu mở đầu dưới khoảng 120 ký tự.',
        'Không huy hiệu. Người ta ngần ngại trước một mã trơ trọi. Dấu hiệu WhatsApp chính thức cho họ biết ứng dụng nào sắp mở.',
        'Không ngữ cảnh. In một dòng rõ ràng như «Quét để Trò chuyện trên WhatsApp» để lượt quét không thành một bí ẩn.'
      ]
    },
    faqs: [
      {
        q: 'Khách hàng có cần lưu số điện thoại doanh nghiệp của tôi trước khi quét không?',
        a: 'Không — liên kết wa.me mở ngay một cuộc trò chuyện với số của bạn, không cần lưu vào danh bạ.'
      },
      {
        q: 'Tôi nên định dạng số điện thoại cho mã QR WhatsApp thế nào?',
        a: 'Dạng quốc tế đầy đủ, chỉ chữ số. Một số Mỹ như (415) 555-1234 thành 14155551234; một số di động Anh 07911 123456 thành 447911123456, bỏ số 0 đầu.'
      },
      {
        q: 'Quét có tự động gửi tin nhắn thay người dùng không?',
        a: 'Không. Lượt quét mở WhatsApp với số của bạn và văn bản điền sẵn nằm trong ô soạn — khách vẫn chạm Gửi, nên họ hoàn toàn làm chủ.'
      },
      {
        q: 'Điều gì xảy ra nếu người dùng quét mã trên máy tính để bàn?',
        a: 'Trình duyệt chuyển giao cho WhatsApp Web hoặc mời mở ứng dụng máy tính, nên lượt quét trên máy tính tiếp tục cuộc trò chuyện suôn sẻ.'
      },
      {
        q: 'Tôi có thể dùng cái này với tin nhắn chào tự động của WhatsApp Business không?',
        a: 'Khi ai đó bắt đầu trò chuyện qua mã, tin nhắn chào mừng WhatsApp Business, câu trả lời nhanh và tin nhắn vắng mặt của bạn đều kích hoạt như bình thường.'
      },
      {
        q: 'Mã QR WhatsApp có hết hạn hay giới hạn số lần bắt đầu trò chuyện không?',
        a: 'Chúng là mã tĩnh vĩnh viễn — quét không giới hạn, không hết hạn.'
      },
      {
        q: 'Tôi có thể theo dõi bao nhiêu người quét mã QR WhatsApp của mình không?',
        a: 'Hãy cho mỗi tài liệu in một câu mở đầu điền sẵn riêng — «Hỏi từ tờ rơi mùa xuân» so với «Hỏi từ banner cửa sổ» — và câu chữ cho bạn biết kênh nào tạo ra khách.'
      },
      {
        q: 'Tạo và dùng mã QR WhatsApp có miễn phí không?',
        a: 'Hoàn toàn miễn phí, không đăng ký và không phí ẩn.'
      }
    ],
    bestPractices: 'Dùng màu xanh WhatsApp chuẩn (#25D366) với một biểu tượng rõ ở giữa, và giữ lời chào điền sẵn ngắn gọn, thân thiện. Quét mã trên cả dữ liệu di động lẫn WiFi trước một đợt in thương mại — hai môi trường có thể hành xử khác nhau.'
  },
  '/vcard-qr-code-generator': {
    sections: [
      {
        title: 'Kết Nối Chuyên Nghiệp Kiểu Số Hiện Đại',
        paragraphs: [
          'Không bao giờ hết danh thiếp giấy nữa. Một mã QR vCard chuyển ngay toàn bộ danh thiếp liên hệ chuyên nghiệp của bạn vào điện thoại của người quét chỉ với một chạm.',
          'Bao gồm họ tên đầy đủ, tổ chức, chức danh, điện thoại công ty, di động, email, website và địa chỉ. Hoàn hảo cho danh thiếp, sơ yếu lý lịch, chữ ký email và thẻ hội nghị.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture of vCard 3.0 Digital Contact QR Codes',
      paragraphs: [
        'Một mã QR vCard đóng gói toàn bộ hồ sơ liên hệ vào chuẩn VCF quốc tế (vCard 3.0, định nghĩa trong RFC 2426 và RFC 6350). Chuỗi chạy từ `BEGIN:VCARD` đến `END:VCARD` và mang các trường có cấu trúc — họ tên (`FN`), tổ chức (`ORG`), chức danh (`TITLE`), số điện thoại (`TEL;TYPE=CELL,WORK`), email (`EMAIL;TYPE=INTERNET`), địa chỉ (`ADR`) và website (`URL`).',
        'Quét nó và điện thoại làm việc lưu trữ giúp bạn. iOS đọc qua khung Contacts, Android qua People API, và cả hai mở một thẻ liên hệ điền sẵn với nút «Tạo Liên Hệ Mới». Một chạm lưu toàn bộ hồ sơ của bạn vào danh bạ — không gõ tay, không nhầm chữ số, không tấm thiếp giấy thất lạc trong túi áo tới thứ Sáu.',
        'Một vCard mang nhiều chữ hơn hầu hết các mã, nên cách sắp byte rất quan trọng. Việc mã hóa dùng các dấu phân tách gọn gàng để giữ ma trận giải mã được ngay cả trên một điện thoại giá rẻ có lấy nét chậm.'
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
        title: 'Điền Các Trường Liên Hệ Chuyên Nghiệp Có Cấu Trúc',
        description: 'Nhập tên, chức danh, công ty, di động, email công việc và website. Giữ mọi ghi chú ngắn gọn — một hồ sơ gọn nhẹ nghĩa là các mô-đun lớn hơn, dễ quét hơn.'
      },
      {
        number: 2,
        title: 'Tùy Chỉnh Thương Hiệu Hình Ảnh và Gắn Ảnh Chân Dung/Logo',
        description: 'Áp bảng màu thương hiệu, chọn kiểu chấm, và đặt ảnh chân dung hoặc dấu hiệu công ty vào giữa ở mức sửa lỗi Mức H.'
      },
      {
        number: 3,
        title: 'Xuất SVG Vector để In Danh Thiếp',
        description: 'Đưa cho xưởng in tệp SVG vector, hoặc lấy PNG độ phân giải cao cho chữ ký email, banner LinkedIn hay hình nền màn hình khóa.'
      }
    ],
    features: [
      {
        title: 'Tương Thích Đa Nền Tảng iOS và Android Toàn Diện',
        description: 'Dựng theo vCard 3.0, nên vào gọn gàng cả Apple Contacts, Google Contacts, Outlook lẫn Samsung Contacts.'
      },
      {
        title: 'Tích Hợp Danh Bạ Chỉ Một Chạm',
        description: 'Điện thoại, email, website và địa chỉ văn phòng của bạn đều lưu chỉ trong một chạm — người kia không gõ gì cả.'
      },
      {
        title: 'Không Phụ Thuộc Đám Mây và Riêng Tư Trọn Vẹn',
        description: 'Dữ liệu liên hệ nằm trong chính mã. Không máy chủ bên thứ ba nào lưu hay thu thập thông tin kết nối của bạn.'
      },
      {
        title: 'SVG Vector Độ Chính Xác Cao cho Giấy In Cao Cấp',
        description: 'Đầu ra vector sắc nét để ép nhũ, phủ UV cục bộ, dập nổi, hoặc khắc laser một tấm thiếp kim loại hay tre.'
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
        title: 'Danh Thiếp của Lãnh Đạo và Nhân Viên Bán Hàng',
        description: 'Một mã ở mặt sau tấm thiếp biến một cái bắt tay thành một liên hệ đã lưu trước khi cuộc trò chuyện kết thúc.'
      },
      {
        title: 'Hội Chợ, Triển Lãm và Hội Nghị Ngành',
        description: 'Trên dây đeo, banner gian hàng hay bảng tên, thông tin của bạn rơi vào điện thoại khách tiềm năng trong khoảng hai giây.'
      },
      {
        title: 'Sơ Yếu Lý Lịch và Thư Xin Việc',
        description: 'Một mã kín đáo ở tiêu đề hồ sơ giúp nhà tuyển dụng lưu số và liên kết portfolio của bạn mà không phải gõ lại gì.'
      },
      {
        title: 'Môi Giới Bất Động Sản và Vay Thế Chấp',
        description: 'Trên tờ rơi nhà mở, một mã vCard biến việc đặt lịch xem nhà thành việc chỉ một chạm cho người mua tiềm năng.'
      },
      {
        title: 'Chân Trang Email Doanh Nghiệp và Chữ Ký Số',
        description: 'Thêm mã vào mẫu email và người đọc trên máy tính có thể quét nó từ màn hình để lưu đường dây trực tiếp của bạn.'
      }
    ],
    troubleshooting: {
      title: 'Common vCard QR Code Scanning Issues & How to Prevent Them',
      points: [
        'Hồ sơ nhồi nhét. Hai mươi trường — một tiểu sử, bốn số, ba địa chỉ — nén ma trận chặt đến mức khó quét. Hãy giữ ở mức thiết yếu: tên, chức danh, công ty, một hai số điện thoại, email và một URL.',
        'In quá nhỏ. Một vCard dùng ma trận Phiên bản 6-10 dày hơn, và dưới 25 mm một camera giá rẻ làm nhòe cạnh mô-đun. Hãy cho nó chỗ.',
        'Giấy bóng. Một tấm thiếp bóng cao phản chiếu đèn rọi hội trường vào ống kính. Hãy chọn mờ, lụa hoặc chạm mềm.',
        'Màu đảo ngược. Mã trắng trên thiếp tối trông sắc nhưng thất bại trên vài máy quét đời cũ. Mô-đun tối trên nền sáng vẫn là lựa chọn an toàn.',
        'Thiếu mã quốc gia. Bỏ +1 hay +84 thì một liên hệ quốc tế không thể gọi thẳng cho bạn từ tấm thiếp đã lưu.'
      ]
    },
    faqs: [
      {
        q: 'Điều gì xảy ra khi ai đó quét mã QR vCard trên điện thoại của họ?',
        a: 'Trên iOS, một thanh thông báo mời «Thêm [Tên] vào Danh bạ» và mở Apple Contacts với mọi trường đã điền. Trên Android, nó mở Google Contacts với lời nhắc Lưu. Dù cách nào, hồ sơ đầy đủ của bạn cách danh bạ của họ đúng một chạm.'
      },
      {
        q: 'Tôi có thể chèn ảnh vào một mã QR vCard tĩnh không?',
        a: 'Mã hóa ảnh thô sẽ phình dữ liệu thành một mớ không quét được. Mẹo tiêu chuẩn là phủ ảnh hoặc logo của bạn vào giữa mã và đặt website hoặc URL LinkedIn vào trường URL của vCard, nơi ảnh độ phân giải đầy đủ thực sự nằm.'
      },
      {
        q: 'Mã QR vCard có cần kết nối internet để quét không?',
        a: 'Chúng hoạt động hoàn toàn ngoại tuyến. Mỗi trường được lưu trong mã dưới dạng văn bản vCard 3.0, nên điện thoại đọc và lưu liên hệ mà không cần dữ liệu hay WiFi.'
      },
      {
        q: 'Mã QR vCard có tương thích với Outlook và Gmail không?',
        a: 'Định dạng vCard 3.0 là chuẩn liên hệ phổ quát, nên Outlook, Apple Mail, Google Contacts và các CRM lớn đều nhận nó dễ dàng.'
      },
      {
        q: 'Mã QR vCard tĩnh có ngày hết hạn không?',
        a: 'Không. Dữ liệu liên hệ nằm trong chính mã và luôn có hiệu lực — không phí định kỳ, không giới hạn quét.'
      },
      {
        q: 'Tôi nên định dạng số điện thoại quốc tế trong vCard thế nào?',
        a: 'Dùng E.164: dấu cộng, rồi mã quốc gia, mã vùng và số — ví dụ +14155552671. Định dạng đó cho phép người ở nước ngoài gọi hay nhắn cho bạn mà không phải đoán tiền tố quay số.'
      },
      {
        q: 'Tôi có thể in mã QR vCard lên cả hai mặt danh thiếp không?',
        a: 'Bố cục thường thấy giữ tên và thương hiệu ở mặt trước và đặt mã ở mặt sau cạnh một dòng ngắn như «Quét để lưu liên hệ».'
      },
      {
        q: 'Định dạng xuất nào tốt nhất để gửi cho xưởng in danh thiếp thương mại?',
        a: 'Hãy đưa họ tệp SVG hoặc EPS vector. Tệp vector giữ độ chính xác qua mọi máy in offset hay kỹ thuật số.'
      }
    ],
    bestPractices: 'Viết số điện thoại ở dạng quốc tế đầy đủ (+1, +84), và giữ tấm thiếp ở các trường thiết yếu để các mô-đun luôn lớn và dễ đọc. Quét bản in thử trên cả iPhone lẫn Android trước khi duyệt in toàn bộ.'
  },
  '/wifi-qr-code-generator': {
    sections: [
      {
        title: 'Truy Cập WiFi Liền Mạch cho Nhà, Quán Cà Phê và Văn Phòng',
        paragraphs: [
          'Chấm dứt nỗi bực bội khi chia sẻ mật khẩu. Khi khách quét mã QR WiFi bằng camera iPhone hoặc Android, thiết bị tự động nhắc họ tham gia mạng không dây của bạn.',
          'Hỗ trợ mọi giao thức bảo mật mạng không dây tiêu chuẩn, gồm WPA/WPA2, WEP và mạng mở không mã hóa. Tải thẻ để bàn WiFi có thể in ở dạng vector SVG sắc nét hoặc PNG HD.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Specification of WiFi Network QR Codes (WIFI: Protocol)',
      paragraphs: [
        'Mã QR WiFi mang thông tin đăng nhập mạng của bạn ở định dạng URI `WIFI:` mà dự án ZXing định nghĩa và cả Apple lẫn Google đều áp dụng. Chuỗi đọc là `WIFI:T:WPA;S:NetworkSSID;P:NetworkPassword;H:false;;` — `T` là loại bảo mật (WPA/WPA2/WPA3, WEP hoặc nopass), `S` là tên mạng, `P` là cụm mật khẩu, và `H` cho biết mạng có ẩn hay không.',
        'Khi camera nhận ra chuỗi đó, điện thoại bỏ qua toàn bộ màn kết nối thủ công. Trên iOS, lớp CoreWLAN/NetworkExtension bật lời nhắc «Tham gia mạng ‹[SSID]›?»; chạm vào và thiết bị chạy bắt tay WPA trực tiếp với điểm truy cập. Mật khẩu không bao giờ vào bộ nhớ tạm, và không ai phải lục trong Cài đặt.',
        'Tất cả những điều này được lắp ghép trong trình duyệt của bạn. SSID và mật khẩu router được ghi vào mã tại chỗ và không bao giờ đi qua mạng hay vào cơ sở dữ liệu — đúng là điều bạn muốn cho một thông tin xác thực sắp được in ra và dán lên tường.'
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
        title: 'Nêu Tên Mạng (SSID) và Giao Thức Bảo Mật',
        description: 'Gõ tên mạng thật chính xác — nó phân biệt hoa thường. Chọn WPA/WPA2/WPA3 cho router hiện đại, WEP cho phần cứng cũ, hoặc Không Mã Hóa cho mạng mở có cổng đăng nhập.'
      },
      {
        number: 2,
        title: 'Nhập Cụm Mật Khẩu WiFi và Cấu Hình Trạng Thái Ẩn',
        description: 'Thêm khóa bảo mật. Nếu router không phát tên của nó, hãy bật công tắc Mạng Ẩn để các thiết bị quét chủ động dò tìm.'
      },
      {
        number: 3,
        title: 'Tải SVG Vector hoặc PNG Độ Phân Giải Cao cho Bảng Để Bàn',
        description: 'Thêm biểu tượng WiFi hoặc logo địa điểm của bạn, rồi xuất. In lên giá acrylic bền, thẻ đầu giường hoặc một tập gấp chào mừng.'
      }
    ],
    features: [
      {
        title: 'Kết Nối Khách Không Ma Sát Chỉ Một Chạm',
        description: 'Không còn mật khẩu 16 ký tự gõ sai, và không còn khách chặn nhân viên lại để kết nối.'
      },
      {
        title: 'Hỗ Trợ WPA3, WPA2, WEP và SSID Ẩn',
        description: 'Bao trùm các chuẩn bảo mật 802.11ax/ac hiện hành lẫn các thiết lập mesh hai băng tần cũ hơn.'
      },
      {
        title: 'Bảo Mật Phía Trình Duyệt Không Lưu Vết',
        description: 'Mật khẩu ở lại trong trình duyệt của bạn. Không gì bị ghi log, lưu lên đám mây hay theo dõi.'
      },
      {
        title: 'Định Dạng Vector Độ Phân Giải Cao cho Vật Dụng Bàn',
        description: 'SVG sắc nét, khắc laser lên gỗ, chạm lên tấm kim loại, hoặc in lên giá acrylic cán màng.'
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
        title: 'Khách Sạn, Khu Nghỉ Dưỡng và Cho Thuê Airbnb',
        description: 'Một tấm thẻ đóng khung trên đầu giường đưa khách vừa đến lên mạng trong vài giây, khỏi phải tìm nhãn dán sau lưng router.'
      },
      {
        title: 'Quán Cà Phê, Coffee Shop và Ăn Uống Bình Dân',
        description: 'Một thẻ để bàn cắt bớt những lần ngắt quãng «WiFi là gì?» và giữ khách xem thực đơn số lâu hơn.'
      },
      {
        title: 'Văn Phòng Doanh Nghiệp và Không Gian Làm Việc Chung',
        description: 'Khách hàng ghé thăm và khách sự kiện vào mạng khách trong phòng họp mà không cần gọi bộ phận IT.'
      },
      {
        title: 'Hội Nghị, Hackathon và Hội Chợ Thương Mại',
        description: 'Hàng trăm người tham dự kết nối cùng lúc ở bàn đăng ký, giải tỏa nút thắt và giảm nghẽn di động trong hội trường.'
      },
      {
        title: 'Phòng Khám và Phòng Chờ',
        description: 'WiFi phòng chờ giúp bệnh nhân thoải mái, và một tấm thẻ quét được nghĩa là lễ tân không bao giờ phải đọc từng chữ mật khẩu.'
      }
    ],
    troubleshooting: {
      title: 'Troubleshooting Common WiFi QR Scanning Failures',
      points: [
        'Sai hoa thường. Tên mạng phân biệt hoa thường — «MyCafeWiFi» và «mycafewifi» là hai mạng khác nhau. Hãy khớp chữ hoa chính xác.',
        'Sai loại bảo mật. Tạo mã WEP cho router chạy WPA2-PSK (AES) thì bắt tay thất bại ngay. Với bất kỳ router hiện đại nào, hãy chọn WPA/WPA2/WPA3.',
        'Cổng đăng nhập. Nếu WiFi khách của bạn hiện trang điều khoản, mã vẫn kết nối điện thoại với sóng — rồi trợ lý mạng bắt buộc của điện thoại mở trang đăng nhập. Đó là điều bình thường, không phải lỗi.',
        'Thiếu cờ ẩn. Nếu router giấu SSID, các thiết bị sẽ không thấy mạng trừ khi mã mang Hidden: true.',
        'Thẻ mòn. Vết cà phê và lớp cán bị xước che mất các hoa văn định vị. Một lớp phủ acrylic giữ thẻ để bàn luôn đọc được.'
      ]
    },
    faqs: [
      {
        q: 'In một mã QR WiFi ở nơi công cộng có an toàn không?',
        a: 'Ai quét được thì vào được mạng đó, vì mã lưu tên và mật khẩu ở dạng văn bản thuần. Cách làm đúng là tạo nó cho một mạng khách riêng có bật cô lập thiết bị — tuyệt đối không cho mạng nội bộ riêng tư của doanh nghiệp.'
      },
      {
        q: 'Mã QR WiFi có hoạt động trên cả iPhone của Apple lẫn thiết bị Android không?',
        a: 'Có. iPhone chạy iOS 11+ và điện thoại Android chạy Android 10+ nhận diện định dạng WIFI: từ camera gốc và mời tham gia chỉ một chạm.'
      },
      {
        q: 'Điều gì xảy ra nếu tôi đổi mật khẩu mạng WiFi trong tương lai?',
        a: 'Mã cũ ngừng hoạt động, vì mật khẩu cụ thể đó được cố định trong các mô-đun. Đổi mật khẩu nghĩa là tạo và in một mã mới.'
      },
      {
        q: 'Tôi có thể tạo mã QR WiFi cho mạng mở không mật khẩu không?',
        a: 'Chọn tùy chọn «Không Mã Hóa», nhập SSID và tạo. Một lượt quét kết nối thẳng vào mạng mở mà không hỏi khóa.'
      },
      {
        q: 'Làm sao để tôi tạo mã QR cho mật khẩu WiFi của mình?',
        a: 'Gõ tên mạng và mật khẩu, chọn loại mã hóa (WPA/WPA2/WPA3), rồi tạo. Mã mang thông tin xác thực, nên quét nó là tham gia mạng — không ai phải đọc hay gõ mật khẩu.'
      },
      {
        q: 'Quét mã QR WiFi có làm lộ mật khẩu trên màn hình người dùng không?',
        a: 'Trên iOS lời nhắc chỉ ghi «Tham gia [Tên Mạng]?» — các ký tự mật khẩu không bao giờ hiện trên màn hình, âm thầm bảo vệ khỏi người nhìn qua vai.'
      },
      {
        q: 'Tôi có thể thêm logo doanh nghiệp vào giữa mã QR WiFi không?',
        a: 'Được. Sửa lỗi Mức H giữ lại khoảng 30% mã để khôi phục, nên logo địa điểm hoặc biểu tượng WiFi nằm ở giữa mà điện thoại vẫn đọc tốt.'
      },
      {
        q: 'Mã QR WiFi có hết hạn hay có giới hạn quét hằng tháng không?',
        a: 'Cả hai đều không. Đây là các mã tĩnh vĩnh viễn — quét không giới hạn, không hết hạn, không phí.'
      },
      {
        q: 'Vì sao điện thoại của tôi không kết nối được sau khi quét mã QR WiFi?',
        a: 'Thường là một trong bốn nguyên nhân: viết hoa SSID sai, chọn WEP thay vì WPA/WPA2/WPA3, router ngoài vùng phủ, hoặc mạng bật lọc địa chỉ MAC.'
      }
    ],
    bestPractices: 'In mã lên giấy bìa mờ tương phản cao và đặt trong giá acrylic trong suốt. Thêm một dòng như «Hướng camera vào đây để vào WiFi khách» để khách biết mã làm gì — và quét thử bản in trước khi đặt in hàng loạt.'
  },
  '/url-qr-code-generator': {
    sections: [
      {
        title: 'Kết Nối Khán Giả Ngoại Tuyến với Bất Kỳ Điểm Đến Trực Tuyến Nào',
        paragraphs: [
          'Mã QR URL thu hẹp khoảng cách giữa tài liệu tiếp thị in ấn và sự hiện diện trực tuyến của bạn. Người dùng chỉ cần hướng camera điện thoại vào mã để mở liên kết web, trang khuyến mãi hoặc thực đơn số mà không phải gõ URL dài.',
          'Mã QR URL của chúng tôi hỗ trợ tùy chỉnh thiết kế đầy đủ, gồm màu thương hiệu riêng, hình chấm độc đáo và xuất vector SVG độ phân giải cao cho in ấn thương mại.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Technical Architecture & Specification of URL QR Codes',
      paragraphs: [
        'Mã QR URL biến một địa chỉ web thành lưới các mô-đun đen trắng theo tiêu chuẩn ISO/IEC 18004. Hướng camera điện thoại vào, thiết bị giải mã nhị phân rồi trao địa chỉ cho trình duyệt mặc định — Safari qua AVFoundation trên iOS, Chrome qua Google ML Kit trên Android. Trang mở ra. Không ai phải gõ gì.',
        'Mã ở đây là tĩnh, và từ đó có sức nặng. Dịch vụ dựa trên chuyển hướng đưa mọi khách qua máy chủ của họ trước, thêm độ trễ, một điểm lỗi duy nhất và một gói đăng ký có thể hết hạn kéo mã của bạn sập theo. Mã URL tĩnh bỏ qua tất cả những điều đó: địa chỉ HTTP hoặc HTTPS chính xác của bạn được khắc thẳng vào ma trận. Nó hoạt động suốt thời gian trang web của bạn còn tồn tại, không giới hạn lượt quét và không ghi lại gì.',
        'Những mã này cũng xử lý liên kết sâu. Hướng một mã tới một lược đồ URI tùy chỉnh hoặc một Universal Link, và nếu ứng dụng đã cài, lượt quét đưa người dùng thẳng vào trong đó — một sản phẩm cụ thể trong ứng dụng mua sắm, một album trên Spotify hay Apple Music — thay vì bản web di động.'
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
        title: 'Nhập Địa Chỉ Web Đích và Tham Số UTM',
        description: 'Dán URL đầy đủ, gồm cả https://. Với chiến dịch, thêm thẻ UTM của Google Analytics — utm_source=flyer&utm_medium=qr&utm_campaign=spring_launch — và GA4 sẽ quy lưu lượng cho đúng tờ rơi đó.'
      },
      {
        number: 2,
        title: 'Chọn Mức Sửa Lỗi và Tham Số Tạo Kiểu',
        description: 'Định đặt logo ở giữa? Chọn Mức H, khôi phục 30% mã. Sau đó đặt kiểu mô-đun, mắt góc và màu sắc, giữ độ tương phản 4.5:1 trở lên.'
      },
      {
        number: 3,
        title: 'Xuất SVG Vector để In hoặc PNG Độ Phân Giải Cao cho Kỹ Thuật Số',
        description: 'Cho in ấn, bao bì và biểu ngữ, lấy SVG co giãn. Cho màn hình và mạng xã hội, lấy PNG 2048x2048px ở 300 DPI.'
      }
    ],
    features: [
      {
        title: 'Không Tường Đăng Ký và Quét Vĩnh Viễn Trọn Đời',
        description: 'Một mã URL tĩnh không bao giờ hết hạn, không cần thẻ, và chịu được hàng triệu lượt quét mà không bị bóp băng thông.'
      },
      {
        title: 'Xuất Bản In Vector SVG và EPS Không Mất Chất Lượng',
        description: 'Cùng một tệp in sắc nét trên tấm danh thiếp 2 cm lẫn biển quảng cáo 10 mét. Hình học vector không có trần độ phân giải.'
      },
      {
        title: 'Sửa Lỗi Mức H (Dư Thừa 30%)',
        description: 'Đặt logo ở giữa và biên khôi phục che phủ nó, nên lượt quét vẫn ổn dù ánh sáng thế nào.'
      },
      {
        title: 'Riêng Tư Mật Mã 100% Phía Trình Duyệt',
        description: 'Việc tạo mã chạy trong trình duyệt của bạn. Liên kết, tham số và token của bạn không bao giờ được lưu hay phân tích trên máy chủ.'
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
        title: 'Bán Lẻ Đa Kênh và Bao Bì Sản Phẩm',
        description: 'Kết nối chiếc hộp với một lớp số — video mở hộp, danh sách thành phần đầy đủ, giấy chứng nhận chính hãng hoặc cổng đăng ký — ngay trên bao bì.'
      },
      {
        title: 'Thực Đơn Nhà Hàng và Gọi Món Tại Bàn',
        description: 'Bỏ hóa đơn in thực đơn, giữ thực đơn luôn mới, và để khách gọi món hay thanh toán tại bàn. Thực đơn PDF cập nhật lúc 6 giờ chiều mà không cần in lại.'
      },
      {
        title: 'Biển Bất Động Sản và Tham Quan Ảo',
        description: 'Một mã trên biển sân trước mở chuyến tham quan 3D Matterport, sơ đồ mặt bằng và thư viện ảnh. Người mua tham quan ngôi nhà từ vỉa hè vào bất kỳ giờ nào.'
      },
      {
        title: 'Quảng Cáo In và Chuyển Đổi Thư Trực Tiếp',
        description: 'Một mẩu quảng cáo tạp chí, một biển quảng cáo, một tấm bưu thiếp — mỗi thứ thành một phễu đo được khi mã gắn thẻ UTM cho bạn biết cái nào thực sự tạo ra lượt ghé.'
      },
      {
        title: 'Hội Nghị, Bài Thuyết Trình và Bộ Slide',
        description: 'Kết thúc bằng một slide có mã, và cả phòng tải bộ slide, tài liệu chuyên môn và các liên kết của bạn trước khi đứng dậy.'
      }
    ],
    troubleshooting: {
      title: '5 Critical Pitfalls That Break URL QR Code Scannability',
      points: [
        'Tương phản yếu. Xám nhạt trên trắng, hay xanh đậm trên đen, không đạt mức 4.5:1 mà camera cần. Mô-đun tối, nền sáng — đó là quy tắc.',
        'Vùng im lặng bị cắt. Mã cần một viền trống 4 mô-đun ở mỗi cạnh. Đưa chữ hay hình đến sát mép thì máy quét không tìm được nơi mã bắt đầu.',
        'URL quá dài. Vượt khoảng 150 ký tự, ma trận nhồi những chấm li ti bị nhòe khi in nhỏ. Hãy rút gọn liên kết hoặc bỏ các tham số truy vấn dư thừa trước.',
        'Logo quá lớn. Logo vượt 30% diện tích, hoặc mã dựng ở Mức L hay M thay vì H, sẽ tràn qua các khối khôi phục và lượt quét thất bại.',
        'Lóa bóng. Lớp cán bóng hắt ánh đèn trần trở lại ống kính ở nơi đông người. Giấy mờ hoặc satin đọc sạch hơn.'
      ]
    },
    faqs: [
      {
        q: 'Mã QR URL tạo trên QR Generator Online có bao giờ hết hạn không?',
        a: 'Chúng có hiệu lực trọn đời. Địa chỉ web được ghi thẳng vào ma trận, nên không có đăng ký hay bộ đếm giờ — mã hoạt động chừng nào trang đích của bạn còn sống.'
      },
      {
        q: 'Tôi có thể sửa URL đích sau khi in một mã QR tĩnh không?',
        a: 'Bản thân mã thì không — đích được cố định trong mẫu mô-đun ngay khi in. Cách giải quyết là hướng mã tới một liên kết ngắn trên tên miền của chính bạn (yourdomain.com/promo) và chuyển hướng liên kết đó mỗi khi mục tiêu chiến dịch đổi. Mã đã in không bao giờ phải thay đổi.'
      },
      {
        q: 'Số lượt quét tối đa cho phép trên mã QR miễn phí là bao nhiêu?',
        a: 'Không có trần. Việc tạo mã là tĩnh và phía trình duyệt, nên một mã có thể nhận hàng chục triệu lượt quét mà không chạm giới hạn băng thông hay tường phí.'
      },
      {
        q: 'Vì sao định dạng SVG được khuyên dùng hơn PNG cho in ấn thương mại?',
        a: 'SVG lưu mã dưới dạng hình học thay vì lưới điểm ảnh cố định. Phóng to đến cỡ biển quảng cáo, các đường nét vẫn sắc; trong khi PNG raster vỡ hạt ngay khi in lớn hơn số điểm ảnh gốc.'
      },
      {
        q: 'Tham số UTM giúp theo dõi chiến dịch tiếp thị bằng mã QR như thế nào?',
        a: 'Thêm các thẻ như ?utm_source=brochure&utm_medium=qr&utm_campaign=summer_sale và GA4 quy mỗi phiên và mỗi lượt bán cho đúng tài liệu in đó, thay vì đổ vào lưu lượng \'Direct\' chung chung nơi bạn chẳng học được gì.'
      },
      {
        q: 'Tôi có thể dùng mã QR URL để liên kết thẳng tới một tệp PDF tải xuống không?',
        a: 'Lưu trữ PDF ở nơi công khai — trang của bạn, Dropbox, Google Drive — sao chép liên kết trực tiếp của nó và dán vào. Khi đó lượt quét sẽ mở hoặc tải tài liệu thẳng từ trình duyệt điện thoại.'
      },
      {
        q: 'Mã QR URL có tương thích với iPhone và Android đời cũ không?',
        a: 'Bất kỳ iPhone nào chạy iOS 11 trở lên (từ 2017) và bất kỳ Android nào phiên bản 9 trở lên đều đọc mã QR từ camera tích hợp, không cần ứng dụng quét riêng.'
      },
      {
        q: 'Mức Sửa Lỗi H bảo vệ mã QR có logo tùy chỉnh của tôi ra sao?',
        a: 'Mức H nhân bản khoảng 30% dữ liệu qua dư thừa Reed-Solomon. Logo ở giữa che một số mô-đun, và máy quét dựng lại chúng từ các bản sao dư thừa — URL vẫn giải mã đầy đủ.'
      }
    ],
    bestPractices: 'Kiểm tra mã trên cả iPhone lẫn Android, trong ánh sáng mờ và sáng, trước khi duyệt một đợt in. Giữ vùng im lặng 4 mô-đun trống, và bảo đảm trang mà nó trỏ tới tương thích di động và tải trong dưới hai giây — một lượt quét nhanh dẫn tới trang chậm vẫn mất khách.'
  },
  '/location-qr-code-generator': {
    sections: [
      {
        title: 'Chỉ Đường Từng Chặng Đến Cửa Hàng & Địa Điểm',
        paragraphs: [
          'In mã QR vị trí lên thiệp mời, tờ rơi, biển bất động sản hoặc danh thiếp để cung cấp điều hướng GPS tức thì đến tận cửa bạn.',
          'Tương thích với Google Maps, Apple Maps và các ứng dụng điều hướng tiêu chuẩn trên iOS và Android.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Tổng Quan Kỹ Thuật Về Mã QR Geo URI & Google Maps',
      paragraphs: [
        'Mã QR vị trí mã hóa dữ liệu tọa độ địa lý hoặc liên kết bản đồ bằng lược đồ URI chuẩn `geo:` (RFC 5870, định dạng: `geo:<Vĩ độ>,<Kinh độ>,<Độ cao>`) hoặc một URL chính tắc trực tiếp của Google Maps / Apple Maps. Khi được quét bằng điện thoại thông minh, hệ điều hành sẽ mở ứng dụng điều hướng gốc (Google Maps trên Android hoặc Apple Maps trên iOS) với điểm đến của bạn đã được ghim sẵn.',
        'Chỉ với một chạm vào thông báo điều hướng, người dùng nhận ngay chỉ đường từng chặng bằng ô tô, đi bộ hoặc phương tiện công cộng từ vị trí GPS hiện tại đến địa điểm, cửa hàng, lối vào bãi đỗ xe hoặc cổng sự kiện của bạn.',
        'Bằng cách loại bỏ việc gõ địa chỉ thủ công, nghe nhầm tên đường và lỗi điều hướng, mã QR vị trí giúp tăng mạnh lượng khách đến trực tiếp và tỷ lệ đến đúng giờ cho cửa hàng pop-up, ngày mở cửa nhà, đám cưới và điểm du lịch.'
      ]
    },
    comparisonTable: {
      title: 'Điều Hướng Bằng Mã QR Vị Trí so với Tìm Địa Chỉ Thủ Công',
      headers: [
        'Yếu Tố / Chỉ Số',
        'Mã QR Vị Trí',
        'Tìm Địa Chỉ Thủ Công'
      ],
      rows: [
        [
          'Độ Chính Xác Điều Hướng',
          'Ghim chính xác 100% (độ chính xác GPS vĩ độ/kinh độ)',
          'Thường sai do trùng tên đường và thành phố'
        ],
        [
          'Thời Gian Bắt Đầu Điều Hướng',
          '1 lần quét + 1 chạm (dưới 3 giây)',
          '45 - 90 giây (mở bản đồ, gõ địa chỉ, chọn)'
        ],
        [
          'Ghim Lối Vào Cụ Thể',
          'Ghim chính xác tọa độ bãi đỗ hoặc cổng sau',
          'Địa chỉ thường ghim lề đường trước hoặc sai đường'
        ],
        [
          'Hỗ Trợ Đa Nền Tảng',
          'Mở Google Maps, Apple Maps hoặc Waze một cách tự nhiên',
          'Cần thao tác thủ công trong ứng dụng'
        ],
        [
          'Lưu Tọa Độ Ngoại Tuyến',
          'Geo URI hoạt động với ứng dụng điều hướng GPS ngoại tuyến',
          'Cần tìm kiếm internet để phân giải văn bản địa chỉ'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Nhập URL Google Maps hoặc Tọa Độ GPS Chính Xác',
        description: 'Dán liên kết chia sẻ Google Maps hoặc nhập tọa độ vĩ độ và kinh độ chính xác (ví dụ 37.7749, -122.4194) để xác định địa điểm ngoài đường lớn.'
      },
      {
        number: 2,
        title: 'Tạo Kiểu Với Biểu Tượng Ghim Bản Đồ & Màu Thương Hiệu',
        description: 'Chọn màu tương phản cao, tùy chỉnh mắt góc và nhúng ghim bản đồ điều hướng hoặc logo địa điểm vào giữa mã.'
      },
      {
        number: 3,
        title: 'Tải Vector SVG Cho Thiệp Mời & Biển Báo',
        description: 'Xuất vector SVG cho áp phích sự kiện, thiệp cưới và biển chỉ dẫn, hoặc PNG độ phân giải cao cho hướng dẫn sự kiện số.'
      }
    ],
    features: [
      {
        title: 'Chỉ Đường GPS Từng Chặng Chỉ Với Một Chạm',
        description: 'Dẫn khách thẳng đến địa điểm của bạn mà không có bất kỳ nhầm lẫn điều hướng hay nhập địa chỉ thủ công nào.'
      },
      {
        title: 'Hỗ Trợ Tọa Độ Vĩ Độ/Kinh Độ Chính Xác',
        description: 'Xác định chính xác cổng lễ hội, bãi đỗ đầu đường mòn và địa điểm ngoài trời không có địa chỉ chính thức.'
      },
      {
        title: 'Tích Hợp Gốc Với Google Maps & Apple Maps',
        description: 'Mở mượt mà ứng dụng điều hướng mặc định trên mọi thiết bị iOS và Android.'
      },
      {
        title: 'Hoạt Động Trọn Đời, Không Phí',
        description: 'Mã QR vị trí tĩnh có hiệu lực vĩnh viễn, quét không giới hạn và không phí định kỳ.'
      }
    ],
    sizingMatrix: {
      title: 'Thông Số Kích Thước In Mã QR Vị Trí',
      description: 'Đảm bảo mã QR vị trí của bạn dễ quét trên thiệp mời và biển chỉ dẫn.',
      headers: [
        'Vị Trí / Ứng Dụng',
        'Khoảng Cách Quét',
        'Kích Thước In Tối Thiểu',
        'Chất Liệu Khuyến Nghị'
      ],
      rows: [
        [
          'Thiệp Cưới & Thiệp Tiệc',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Giấy bìa vân lanh mờ, định lượng cao'
        ],
        [
          'Biển Chỉ Dẫn Đường & Biển Sân Vườn',
          '1,0 m - 2,5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4,8" x 4,8")',
          'Nhựa lượn sóng chịu thời tiết / nhôm'
        ],
        [
          'Bưu Thiếp Quảng Cáo & Thư Gửi',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1,4" x 1,4")',
          'Giấy bìa mờ định lượng cao (100 lb+)'
        ],
        [
          'Sách Hướng Dẫn Du Lịch & Bảng Đầu Đường Mòn',
          '30 cm - 60 cm (12" - 24")',
          '50 mm x 50 mm (2,0" x 2,0")',
          'Nhôm anot hóa / PVC cứng'
        ],
        [
          'Sổ Chương Trình Hội Nghị & Triển Lãm',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Giấy tráng phủ mờ'
        ]
      ]
    },
    useCases: [
      {
        title: 'Thiệp Mời Đám Cưới & Sự Kiện Riêng Tư',
        description: 'In mã QR vị trí lên thiệp mời để khách quét và di chuyển thẳng đến nơi làm lễ và tiệc chiêu đãi.'
      },
      {
        title: 'Ngày Mở Cửa Bất Động Sản & Biển Chỉ Dẫn',
        description: 'Đặt mã QR vị trí trên biển góc phố để dẫn người mua nhà quan tâm thẳng đến lối vào căn nhà mở cửa.'
      },
      {
        title: 'Lễ Hội, Chợ Pop-up & Xe Bán Đồ Ăn',
        description: 'Chia sẻ ghim GPS chính xác cho xe bán đồ ăn lưu động, sân khấu lễ hội ngoài trời và gian hàng pop-up không có địa chỉ cố định.'
      },
      {
        title: 'Điểm Du Lịch & Điều Hướng Đường Mòn',
        description: 'Cung cấp cho người đi bộ đường dài và du khách ghim đầu đường mòn, điểm ngắm cảnh và tọa độ di tích lịch sử quét được.'
      },
      {
        title: 'Chiến Dịch Thư Trực Tiếp Cho Cửa Hàng',
        description: 'Thêm mã QR Google Maps vào tờ rơi quảng cáo để cư dân địa phương tìm đến lễ khai trương hoặc chi nhánh của bạn.'
      }
    ],
    troubleshooting: {
      title: 'Ngăn Ngừa Lỗi Điều Hướng Của Mã QR Vị Trí',
      points: [
        'Tọa độ bị cắt bớt: bỏ bớt chữ số thập phân (ví dụ 37.77 thay vì 37.774929) làm lệch ghim bản đồ hàng trăm mét. Luôn dùng 5-6 chữ số thập phân.',
        'Liên kết bản đồ rút gọn hết hạn: nếu dùng liên kết rút gọn tùy chỉnh, hãy đảm bảo tên miền vẫn hoạt động. URL Google Maps trực tiếp và Geo URI không bao giờ hết hạn.',
        'Bỏ qua văn bản địa chỉ: luôn in địa chỉ dạng chữ bên dưới mã QR cho những người thích tự kiểm tra.',
        'Tương phản thấp trên biển ngoài trời: ánh nắng trực tiếp làm nhạt màu tương phản thấp. Dùng mô-đun đen đặc trên nền trắng sáng cho biển ngoài trời.',
        'Chói sáng trên biển ven đường: lớp phủ biển phản chiếu mạnh gây chói ống kính từ đèn pha và mặt trời. Hãy dùng decal ngoài trời bề mặt mờ.'
      ]
    },
    faqs: [
      {
        q: 'Làm sao lấy đúng liên kết Google Maps cho mã QR của tôi?',
        a: 'Mở Google Maps, tìm doanh nghiệp của bạn hoặc thả ghim tại vị trí, nhấp «Chia sẻ», sao chép liên kết rút gọn và dán vào trình tạo của chúng tôi.'
      },
      {
        q: 'Tôi có thể dùng tọa độ vĩ độ và kinh độ thay cho địa chỉ không?',
        a: 'Có! Nhập tọa độ vĩ độ và kinh độ chính xác (ví dụ `37.7749,-122.4194`) là lý tưởng cho công viên, khu lễ hội và địa điểm nông thôn không có địa chỉ chính thức.'
      },
      {
        q: 'Nó có mở Apple Maps cho iPhone và Google Maps cho Android không?',
        a: 'Có. URL Google Maps tiêu chuẩn và Geo URI kích hoạt ứng dụng bản đồ mặc định tương ứng trên điện thoại iOS và Android.'
      },
      {
        q: 'Mã QR vị trí có hết hạn hoặc tính phí không?',
        a: 'Không. Mã QR vị trí tĩnh tạo trên QR Generator Online có hiệu lực trọn đời vĩnh viễn, quét không giới hạn và không phí định kỳ.'
      },
      {
        q: 'Tôi có thể nhúng biểu tượng ghim bản đồ vào giữa mã QR không?',
        a: 'Có! QR Generator Online dùng sửa lỗi Mức H, cho phép bạn nhúng ghim điều hướng hoặc logo địa điểm vào giữa mà không ảnh hưởng khả năng quét.'
      },
      {
        q: 'Định dạng xuất nào tốt nhất để in thiệp cưới?',
        a: 'Hãy xuất vector SVG hoặc PNG độ phân giải cao 300 DPI cho văn phòng phẩm cưới và in giấy bìa thương mại.'
      },
      {
        q: 'Người dùng có thể điều hướng khi ngoại tuyến không?',
        a: 'Nếu dùng tọa độ Geo URI (`geo:lat,lng`), các ứng dụng điều hướng ngoại tuyến như maps.me hoặc vùng Google Maps đã tải trước có thể dẫn đường mà không cần dữ liệu di động.'
      },
      {
        q: 'Dữ liệu vị trí của tôi có riêng tư khi tạo không?',
        a: 'Có. Mọi mã QR được tạo 100% phía máy khách trong trình duyệt của bạn. Không tọa độ vị trí hay URL bản đồ nào được lưu trên máy chủ bên ngoài.'
      }
    ],
    bestPractices: 'Hãy xác minh vị trí ghim trên cả Apple Maps và Google Maps trước khi in. In kèm lời kêu gọi hành động rõ ràng như «Quét để nhận chỉ đường GPS từng chặng» và giữ độ tương phản cao.'
  },
  '/text-qr-code-generator': {
    sections: [
      {
        title: 'Mã Hóa Văn Bản & Dữ Liệu Quét Được 100% Ngoại Tuyến',
        paragraphs: [
          'Mã QR văn bản thuần lưu trữ dữ liệu chữ và số trực tiếp bên trong mẫu mã vạch. Việc quét hoạt động tức thì ngay cả khi không có dữ liệu di động hay kết nối internet.',
          'Tuyệt vời cho việc dán nhãn hàng tồn kho, hướng dẫn thiết bị, theo dõi số sê-ri và tin nhắn bí mật.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Tổng Quan Kỹ Thuật Về Mã QR Văn Bản Thuần Và UTF-8 Thô',
      paragraphs: [
        'Mã QR văn bản thuần mã hóa dữ liệu chuỗi thô, không định dạng, trực tiếp vào ký hiệu ma trận 2D theo tiêu chuẩn ISO/IEC 18004 bằng chế độ mã hóa byte 8-bit UTF-8. Không giống mã QR URL cần kết nối web, mã QR văn bản thuần chứa toàn bộ dữ liệu ngay trong mẫu hình ảnh của các mô-đun đen trắng.',
        'Khi được quét bằng camera điện thoại, máy đọc mã vạch 2D công nghiệp cầm tay hoặc máy quét kho, thiết bị giải mã mảng byte và hiển thị ngay văn bản trên màn hình, hoặc truyền qua giả lập bàn phím (HID) tới phần mềm được kết nối — mà không cần mở trình duyệt hay kết nối di động/WiFi.',
        'Mã QR văn bản thuần hỗ trợ ký tự chữ và số, dấu câu, ký hiệu, chữ viết Unicode đa ngôn ngữ và emoji, khiến chúng không thể thiếu cho theo dõi tài sản công nghiệp, số sê-ri hàng tồn kho, nhật ký bảo trì thiết bị, manh mối phòng thoát hiểm và mật mã bảo mật ngoại tuyến.'
      ]
    },
    comparisonTable: {
      title: 'Mã QR Văn Bản Thuần so với Mã QR URL',
      headers: [
        'Tính Năng / Chỉ Số',
        'Mã QR Văn Bản Thuần',
        'Mã QR URL'
      ],
      rows: [
        [
          'Yêu Cầu Internet',
          '100% ngoại tuyến (không cần kết nối mạng)',
          'Cần internet hoạt động để tải trang web'
        ],
        [
          'Hành Động Khi Quét',
          'Hiển thị văn bản trong hộp thoại hoặc sao chép',
          'Mở trình duyệt tới URL đích'
        ],
        [
          'Vị Trí Dữ Liệu',
          'Lưu hoàn toàn bên trong các mô-đun mã vạch vật lý',
          'Lưu trên máy chủ web đích'
        ],
        [
          'Dung Lượng Dữ Liệu',
          'Tối đa 4.296 ký tự chữ số (7.089 chữ số)',
          'Thường 30 - 100 ký tự cho liên kết web'
        ],
        [
          'Bảo Mật & Riêng Tư',
          'Không dấu vết mạng, không theo dõi',
          'Máy chủ ghi lại IP, trình duyệt và thời gian'
        ],
        [
          'Trường Hợp Sử Dụng Chính',
          'Nhãn tài sản, số sê-ri, ghi chú ngoại tuyến, manh mối',
          'Tiếp thị, lưu lượng web, trang đích, thực đơn'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Nhập Nội Dung Văn Bản, Số Sê-ri hoặc Hướng Dẫn',
        description: 'Nhập hoặc dán văn bản chữ số, mã sê-ri thiết bị, số phiếu giảm giá hoặc ghi chú nhiều dòng vào ô nhập liệu.'
      },
      {
        number: 2,
        title: 'Chọn Kiểu Dáng & Mức Sửa Lỗi',
        description: 'Chọn mẫu mô-đun tương phản cao và mức sửa lỗi M hoặc Q cho nhãn tài sản, hoặc Mức H nếu nhúng logo ở giữa.'
      },
      {
        number: 3,
        title: 'Tải Xuống Vector SVG hoặc PNG Độ Phân Giải Cao',
        description: 'Xuất vector SVG cho khắc laser công nghiệp và in nhãn nhiệt, hoặc PNG độ phân giải cao cho bảng tính và tài liệu số.'
      }
    ],
    features: [
      {
        title: 'Hoạt Động 100% Ngoại Tuyến',
        description: 'Quét và hiển thị văn bản ngay lập tức tại các vị trí hiện trường xa, tầng hầm và cơ sở ngoại tuyến an toàn.'
      },
      {
        title: 'Hỗ Trợ Toàn Diện Mọi Máy Quét Mã Vạch 2D',
        description: 'Tương thích với máy quét kho Zebra, Honeywell, Datalogic cũng như ứng dụng camera iOS và Android.'
      },
      {
        title: 'Mã Hóa UTF-8 Đa Ngôn Ngữ & Emoji',
        description: 'Mã hóa dễ dàng chữ viết quốc tế, công thức toán học, ký hiệu tiền tệ và emoji.'
      },
      {
        title: 'Mã Vạch Tĩnh Vĩnh Viễn, Không Hết Hạn',
        description: 'Mã QR văn bản tĩnh vẫn đọc được mãi mãi mà không có phí đăng ký, giới hạn quét hay gia hạn.'
      }
    ],
    sizingMatrix: {
      title: 'Thông Số Kích Thước & Mật Độ Mã QR Văn Bản',
      description: 'Mật độ ma trận tăng theo số ký tự. Hãy tuân theo hướng dẫn kích thước tối thiểu để quét đáng tin cậy.',
      headers: [
        'Lượng Ký Tự',
        'Phiên Bản Ma Trận',
        'Kích Thước In Tối Thiểu',
        'Ứng Dụng Khuyến Nghị'
      ],
      rows: [
        [
          'Ngắn (1 - 50 ký tự)',
          'Phiên bản 2 - 4 (25x25 - 33x33)',
          '20 mm x 20 mm (0,8" x 0,8")',
          'Nhãn tài sản, số sê-ri, thẻ linh kiện'
        ],
        [
          'Trung bình (50 - 150 ký tự)',
          'Phiên bản 5 - 7 (37x37 - 45x45)',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Thông số thiết bị, phiếu giảm giá, khóa truy cập'
        ],
        [
          'Dài (150 - 300 ký tự)',
          'Phiên bản 8 - 11 (49x49 - 61x61)',
          '40 mm x 40 mm (1,6" x 1,6")',
          'Nhật ký bảo trì, hướng dẫn, ghi chú'
        ],
        [
          'Mở rộng (300 - 600 ký tự)',
          'Phiên bản 12 - 16 (65x65 - 81x81)',
          '55 mm x 55 mm (2,2" x 2,2")',
          'Quy trình chi tiết, tài liệu nhiều dòng'
        ],
        [
          'Tối đa (600+ ký tự)',
          'Phiên bản 17+ (85x85+)',
          '75 mm x 75 mm (3,0" x 3,0")',
          'Bảng tham chiếu khổ lớn'
        ]
      ]
    },
    useCases: [
      {
        title: 'Theo Dõi Tài Sản Công Nghiệp & Nhãn Sê-ri Kho',
        description: 'Dán nhãn máy móc, giá đỡ máy chủ và thùng hàng tồn kho bằng số sê-ri và ngày bảo trì quét được.'
      },
      {
        title: 'Câu Đố Giáo Dục & Trò Chơi Săn Tìm Trong Lớp',
        description: 'Ẩn đáp án câu đố, lời giải toán và manh mối trên phiếu bài tập in để học sinh quét ngoại tuyến.'
      },
      {
        title: 'Phiếu Sự Kiện, Mã Giảm Giá & Mã Truy Cập Một Lần',
        description: 'In mã giảm giá văn bản duy nhất trên vé để nhân viên xác minh bằng máy quét cầm tay mà không cần WiFi.'
      },
      {
        title: 'Câu Đố Phòng Thoát Hiểm & Triển Lãm Tương Tác',
        description: 'Nhúng câu đố bí mật, khóa giải mã và manh mối cốt truyện vào trưng bày bảo tàng và đạo cụ phòng thoát hiểm.'
      },
      {
        title: 'Cụm Mật Khẩu Bảo Mật & Khóa Khôi Phục Ngoại Tuyến',
        description: 'Lưu khóa sao lưu đã mã hóa và cụm mật khẩu cấu hình trên tấm kim loại sao lưu vật lý.'
      }
    ],
    troubleshooting: {
      title: 'Khắc Phục Sự Cố Quét Mã QR Văn Bản Thuần',
      points: [
        'Quá tải dữ liệu tạo mô-đun siêu nhỏ: nhồi 1.000+ ký tự vào một mã tạo ra ma trận cực kỳ dày đặc. Giữ văn bản dưới 300 ký tự để quét nhanh.',
        'Vô tình thêm tiền tố URL: nếu văn bản bắt đầu bằng http:// hoặc https://, camera điện thoại sẽ coi đó là liên kết web thay vì văn bản thuần. Xóa tiền tố web nếu muốn hiển thị văn bản thô.',
        'In nhãn nhiệt tương phản thấp: máy in nhiệt trực tiếp kém chất lượng với đầu in mòn có thể làm nhòe cạnh mô-đun. Hãy dùng ruy băng truyền nhiệt chất lượng cao.',
        'Vi phạm vùng yên tĩnh 4 mô-đun: đảm bảo ít nhất 4 mô-đun trống quanh cả bốn cạnh mã vạch trên nhãn tài sản.',
        'Biến dạng bề mặt cong: dán nhãn QR dày đặc lên ống hoặc chai hình trụ hẹp làm méo ma trận. Hãy đặt mã dọc theo trục phẳng thẳng đứng.'
      ]
    },
    faqs: [
      {
        q: 'Tôi có thể mã hóa bao nhiêu ký tự trong một mã QR văn bản thuần?',
        a: 'Về mặt kỹ thuật, một mã QR có thể lưu tới 4.296 ký tự chữ số hoặc 7.089 chữ số. Tuy nhiên, để đảm bảo quét quang học nhanh ở kích thước tiêu chuẩn, nên giữ văn bản dưới 300 ký tự.'
      },
      {
        q: 'Quét mã QR văn bản thuần có cần kết nối internet không?',
        a: 'Không! Mã QR văn bản thuần lưu toàn bộ dữ liệu ngay trong ma trận mã vạch. Chúng quét và hiển thị 100% ngoại tuyến mà không cần dữ liệu di động hay WiFi.'
      },
      {
        q: 'Điều gì xảy ra trên điện thoại khi quét mã QR văn bản?',
        a: 'Ứng dụng camera hiển thị văn bản đã giải mã trong hộp thoại hệ thống, kèm tùy chọn sao chép vào bộ nhớ tạm hoặc tìm kiếm trên web.'
      },
      {
        q: 'Tôi có thể mã hóa ký tự đặc biệt, chữ viết nước ngoài và emoji không?',
        a: 'Có! QR Generator Online hỗ trợ mã hóa byte UTF-8 đầy đủ, cho phép bảng chữ cái nước ngoài (Nhật, Ả Rập, Kirin), ký hiệu toán học và emoji.'
      },
      {
        q: 'Mã QR văn bản thuần có hết hạn hoặc tính phí không?',
        a: 'Không. Mã QR văn bản tĩnh tạo trên QR Generator Online có hiệu lực trọn đời vĩnh viễn, quét không giới hạn và không phí định kỳ.'
      },
      {
        q: 'Mã QR văn bản có tương thích với máy quét mã vạch công nghiệp không?',
        a: 'Có! Mọi máy đọc mã vạch 2D tiêu chuẩn (Zebra, Honeywell, Datalogic) đều quét được mã QR văn bản và xuất ký tự đã giải mã trực tiếp sang phần mềm đầu cuối.'
      },
      {
        q: 'Định dạng tệp nào tốt nhất cho máy in nhãn mã vạch nhiệt?',
        a: 'Hãy xuất định dạng vector SVG hoặc PNG độ phân giải cao. Tệp vector SVG hiển thị với độ chính xác 100% trên phần mềm in nhãn nhiệt thương mại.'
      },
      {
        q: 'Dữ liệu văn bản được mã hóa có được giữ riêng tư khi tạo không?',
        a: 'Có. Toàn bộ việc tạo mã QR diễn ra 100% phía máy khách trong bộ nhớ trình duyệt của bạn. Không dữ liệu văn bản nào được truyền đi hay lưu trên máy chủ bên ngoài.'
      }
    ],
    bestPractices: 'Giữ văn bản ngắn gọn nhất có thể để duy trì mật độ mô-đun thấp. Dùng mô-đun đen đặc trên nền trắng và giữ vùng yên tĩnh bắt buộc 4 mô-đun trên mọi nhãn tài sản.'
  },
  '/': {
    sections: [
      {
        title: 'Tại Sao Chọn QR Generator Online?',
        paragraphs: [
          'QR Generator Online là trình tạo mã QR linh hoạt nhất, tập trung vào quyền riêng tư và miễn phí 100% trên web. Cho dù bạn cần một liên kết đơn giản cho tờ rơi tiếp thị, danh thiếp kỹ thuật số hay quyền truy cập WiFi khách tức thì, nền tảng của chúng tôi tạo mã QR chuyên nghiệp, có thể quét được trong vài giây.',
          'Không giống như các công cụ khác khóa tải xuống độ phân giải cao sau bức tường thanh toán hoặc làm hết hạn mã của bạn sau 14 ngày, tất cả mã QR tĩnh được tạo trên QR Generator Online vẫn vĩnh viễn và hoạt động mãi mãi với lượt quét không giới hạn.'
        ]
      },
      {
        title: 'Tùy Chọn Tùy Chỉnh Đầy Đủ',
        paragraphs: [
          'Tùy chỉnh mọi chi tiết của mã QR để phù hợp với bản sắc thương hiệu doanh nghiệp của bạn. Chọn từ nhiều mẫu tạo kiểu chấm, hình dạng ô vuông góc ngoài, điểm nhấn mắt bên trong, gradient màu tùy chỉnh và logo nhúng ở giữa.',
          'Xuất thiết kế của bạn ở định dạng vector SVG sẵn sàng in cho quảng cáo biển quảng cáo lớn hoặc PNG độ phân giải cao sắc nét cho các chiến dịch mạng xã hội kỹ thuật số.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Tiêu Chuẩn Doanh Nghiệp Cho Việc Tạo Mã QR Miễn Phí, Ưu Tiên Quyền Riêng Tư',
      paragraphs: [
        'QR Generator Online là nền tảng tạo mã vạch 2D phía máy khách hàng đầu trên web, được thiết kế từ đầu để mang lại khả năng tùy chỉnh hình ảnh không thỏa hiệp, sửa lỗi Reed-Solomon cấp công nghiệp và chủ quyền dữ liệu mã hóa 100%. Được chuẩn hóa toàn cầu theo ISO/IEC 18004, nền tảng của chúng tôi cho phép cá nhân, công ty thiết kế, doanh nghiệp nhỏ và tập đoàn đa quốc gia tạo mã QR vĩnh viễn, có thể quét được cho tất cả các lược đồ dữ liệu chuyên biệt mà không có rào cản đăng ký và không giới hạn thời gian quét hết hạn.',
        'Không giống như các dịch vụ tạo mã QR "săn mồi" âm thầm định tuyến lưu lượng truy cập của bạn qua các máy chủ chuyển hướng độc quyền (chỉ để bắt giữ tài liệu tiếp thị in ấn của bạn đằng sau các bức tường thanh toán đăng ký đột ngột 30 đô la/tháng sau 14 ngày), QR Generator Online hoạt động trên kiến trúc mã hóa trực tiếp, tĩnh. Khi bạn tạo mã QR URL, vCard, WiFi hoặc văn bản trên nền tảng của chúng tôi, dữ liệu thô được biên dịch trực tiếp vào các mô-đun ma trận hình ảnh trong bộ nhớ trình duyệt web của bạn. Điều này đảm bảo tài sản tiếp thị vật lý của bạn vẫn hoạt động vĩnh viễn trong suốt vòng đời tài liệu in của bạn.',
        'Với hỗ trợ sửa lỗi Mức H (phục hồi đại số 30%), bảng màu gradient đa màu, hình học mô-đun tùy chỉnh, tạo kiểu mắt góc độc lập và xuất vector SVG/EPS không mất dữ liệu, QR Generator Online cung cấp bộ công cụ hoàn chỉnh cần thiết cho bao bì cao cấp, in ấn trước thương mại, đặt hàng tại bàn nhà hàng và kết nối liên hệ kỹ thuật số.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online so với Các Nền Tảng QR Yêu Cầu Đăng Ký',
      headers: ['Tính Năng / Chính Sách Nền Tảng', 'QR Generator Online (100% Miễn Phí & Mở)', 'Dịch Vụ QR Đăng Ký Truyền Thống'],
      rows: [
        ['Hết Hạn Trọn Đời', 'Không bao giờ hết hạn (hiệu lực tĩnh vĩnh viễn)', 'Hết hạn sau bản dùng thử 14 ngày trừ khi trả phí'],
        ['Giới Hạn Quét', 'Quét trọn đời không giới hạn (0 chi phí mãi mãi)', 'Giới hạn 50-100 lượt quét/tháng trên gói miễn phí'],
        ['Độ Trễ Chuyển Hướng', '0ms (phân giải DNS trình duyệt trực tiếp)', 'Chặng máy chủ trung gian 200ms - 800ms'],
        ['Quyền Riêng Tư & Theo Dõi Dữ Liệu', '100% Phía Máy Khách (Không ghi log IP hay cookie)', 'Máy chủ trung gian theo dõi IP và vị trí người dùng'],
        ['Xuất Vector Độ Phân Giải Cao', 'Vector SVG, EPS & PNG 4K đầy đủ, miễn phí', 'Định dạng vector bị khóa sau gói $30+/tháng'],
        ['Nhúng Logo', 'Mức H (phục hồi 30%) miễn phí', 'Có watermark hoặc bị hạn chế trên gói miễn phí']
      ]
    },
    steps: [
      { number: 1, title: 'Chọn Loại Dữ Liệu & Nhập Nội Dung', description: 'Chọn từ các trình tạo QR chuyên biệt của chúng tôi (URL, WiFi, vCard, PDF, WhatsApp, Mạng xã hội, Email, SMS, Điện thoại, Vị trí, Sự kiện, Crypto, Văn bản, Google Forms, Thanh toán) và nhập dữ liệu của bạn.' },
      { number: 2, title: 'Tùy Chỉnh Hình Học, Màu Sắc & Logo Thương Hiệu', description: 'Áp dụng bảng màu doanh nghiệp của bạn, chọn mẫu chấm tròn hoặc thanh lịch, tạo kiểu mắt góc độc lập và tải lên logo thương hiệu trung tâm.' },
      { number: 3, title: 'Xuất Vector SVG Không Mất Dữ Liệu hoặc PNG 4K', description: 'Tải xuống vector SVG sẵn sàng in cho in offset thương mại, bao bì và biểu ngữ, hoặc PNG 2048x2048px ở 300 DPI cho các kênh web và kỹ thuật số.' }
    ],
    features: [
      { title: 'Bộ Công Cụ Trình Tạo QR Đầy Đủ', description: 'Hỗ trợ đầy đủ cho URL web, mạng WiFi, danh bạ vCard 3.0, tài liệu PDF, trò chuyện WhatsApp, điều hướng GPS, thanh toán và nhiều hơn nữa.' },
      { title: 'Sửa Lỗi Reed-Solomon Mức H', description: 'Nhúng logo công ty hoặc biểu tượng hồ sơ của bạn với 30% dự phòng phục hồi dữ liệu toán học.' },
      { title: 'Tải Xuống In Vector SVG & EPS Không Mất Dữ Liệu', description: 'Thu phóng đồ họa QR của bạn vô hạn từ danh thiếp nhỏ đến tranh tường tòa nhà khổng lồ với độ chính xác sắc nét.' },
      { title: 'Quyền Riêng Tư Mã Hóa 100% Phía Máy Khách', description: 'Tất cả thuật toán tạo QR chạy cục bộ trong bộ nhớ trình duyệt web của bạn. Liên kết, thông tin đăng nhập và tham số của bạn không bao giờ được tải lên.' }
    ],
    sizingMatrix: {
      title: 'Bảng Tham Chiếu Kích Thước In & Khoảng Cách Chính',
      description: 'Tính kích thước vật lý tối thiểu cho bất kỳ phương tiện vật lý nào bằng công thức quang học tiêu chuẩn $S = D / 10$.',
      headers: ['Vị Trí Vật Lý', 'Khoảng Cách Quét (D)', 'Chiều Rộng Tối Thiểu (S)', 'Định Dạng Khuyến Nghị'],
      rows: [
        ['Danh Thiếp & Thẻ Tên', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Vector SVG / EPS'],
        ['Thực Đơn Nhà Hàng & Bảng Bàn', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'Vector SVG / PNG 300 DPI'],
        ['Bao Bì Sản Phẩm & Thùng Carton', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Vector SVG / PDF'],
        ['Tờ Rơi, Áp Phích & Tạp Chí', '50 cm - 150 cm (20" - 60")', '60 mm - 150 mm (2.4" - 6.0")', 'Vector SVG / PNG 300 DPI'],
        ['Đội Xe & Xe Van', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'Vector SVG / Decal Đúc'],
        ['Biển Quảng Cáo & Biểu Ngữ Cao Tốc', '15.0 m - 30.0 m (50 ft - 100 ft)', '1500 mm - 3000 mm (5 ft - 10 ft)', 'Vector SVG / EPS Khổ Lớn']
      ]
    },
    useCases: [
      { title: 'Bán Lẻ Đa Kênh & Bao Bì', description: 'Kết nối sản phẩm vật lý với hướng dẫn mở hộp kỹ thuật số, xác minh tính xác thực và cổng đăng ký khách hàng trực tiếp từ hộp.' },
      { title: 'Ngành Khách Sạn & Ăn Uống Không Tiếp Xúc', description: 'Triển khai thực đơn PDF kỹ thuật số hợp vệ sinh, có thể cập nhật theo thời gian thực, danh sách rượu vang và thẻ đặt món tại bàn giúp tăng giá trị hóa đơn trung bình.' },
      { title: 'Kết Nối Điều Hành & Thẻ Thông Minh', description: 'Chuyển đổi danh thiếp vật lý thành mục nhập sổ địa chỉ điện thoại thông minh vĩnh viễn với mã liên hệ vCard 3.0 chỉ với một chạm.' },
      { title: 'Tiếp Thị Bất Động Sản & Tour 3D', description: 'Biến biển báo sân vườn và chỉ dẫn nhà mở thành cổng tạo khách hàng tiềm năng tương tác 24/7 liên kết đến tour 3D Matterport.' },
      { title: 'Truy Cập WiFi Khách Không Rào Cản', description: 'Loại bỏ sự khó chịu khi chia sẻ mật khẩu tại khách sạn, quán cà phê và văn phòng với việc quét camera một chạm cho mạng WPA3/WPA2.' }
    ],
    troubleshooting: {
      title: '5 Quy Tắc Quan Trọng Để Quét Thành Công 100% Ngay Lần Đầu',
      points: [
        'Duy Trì Tỷ Lệ Tương Phản Tối Thiểu 4.5:1: các mô-đun tiền cảnh tối trên nền trắng hoặc nhạt sắc nét đảm bảo nhị phân hóa quang học camera tức thì.',
        'Bảo Toàn Lề Vùng Yên Tĩnh 4 Mô-đun: không bao giờ để hình ảnh hoặc văn bản lấn vào viền trống bắt buộc 4 mô-đun xung quanh mã vạch.',
        'Không Bao Giờ Vượt Quá 30% Diện Tích Cho Logo Trung Tâm: giữ logo nhúng dưới 25-30% tổng diện tích bề mặt và luôn tạo bằng sửa lỗi Mức H.',
        'Sử Dụng Vector SVG Cho Các Đợt In Thương Mại: tránh ảnh chụp màn hình độ phân giải thấp 72 DPI. Vector SVG đảm bảo các cạnh sắc nét ở bất kỳ tỷ lệ in nào.',
        'Chỉ Định Bề Mặt Mờ Để Tránh Chói: lớp phủ bóng phản chiếu ánh sáng trên cao trực tiếp vào cảm biến camera. Sử dụng lớp hoàn thiện mờ, lụa hoặc sa tanh.'
      ]
    },
    faqs: [
      { q: 'Mã QR được tạo trên QR Generator Online có thực sự miễn phí 100% mãi mãi không?', a: 'Có! Tất cả mã QR tĩnh được tạo trên QR Generator Online đều 100% miễn phí với quét không giới hạn, hiệu lực trọn đời vĩnh viễn và không có bức tường thanh toán đăng ký.' },
      { q: 'Tại sao các trang web tạo mã QR khác lại làm mã của tôi hết hạn sau 14 ngày?', a: 'Nhiều nền tảng QR thương mại sử dụng liên kết chuyển hướng động định tuyến các lượt quét của bạn qua máy chủ của họ. Sau thời gian dùng thử, họ vô hiệu hóa chuyển hướng cho đến khi bạn trả phí đăng ký hàng tháng đắt đỏ ($15 - $40/tháng). QR Generator Online tạo mã tĩnh vĩnh viễn mã hóa dữ liệu trực tiếp vào mã vạch, nghĩa là chúng không bao giờ có thể bị giữ làm con tin.' },
      { q: 'Tôi có thể tải xuống những định dạng tệp nào từ QR Generator Online?', a: 'Bạn có thể tải xuống tệp vector SVG sẵn sàng in (có thể thu phóng vô hạn cho in ấn trước thương mại) và hình ảnh raster PNG độ phân giải siêu cao 2048x2048px ở 300 DPI.' },
      { q: 'Tôi có thể thêm logo công ty của mình vào trung tâm của bất kỳ mã QR nào không?', a: 'Có! Bạn có thể tải lên logo PNG, SVG hoặc JPEG tùy chỉnh trên tất cả các loại trình tạo QR chuyên biệt. Công cụ của chúng tôi tự động áp dụng sửa lỗi Mức H (30%) và vùng đệm mặt nạ yên tĩnh xung quanh logo của bạn.' },
      { q: 'Dữ liệu của tôi có an toàn và riêng tư khi sử dụng QR Generator Online không?', a: 'Có. Tất cả thuật toán tạo QR chạy cục bộ bên trong bộ nhớ trình duyệt web của bạn thông qua JavaScript phía máy khách. URL, mật khẩu, thông tin liên hệ và hình ảnh của bạn không bao giờ được tải lên hoặc lưu trữ trên máy chủ bên ngoài.' },
      { q: 'Tôi có cần cài đặt ứng dụng trên điện thoại để quét các mã QR này không?', a: 'Không. Tất cả iPhone hiện đại chạy iOS 11+ và thiết bị Android chạy Android 9+ đều quét mã QR gốc bằng ứng dụng camera tích hợp mà không cần phần mềm bên thứ ba.' },
      { q: 'Tôi nên in mã QR của mình lớn cỡ nào cho biểu ngữ hoặc áp phích?', a: 'Áp dụng quy tắc quang học 10:1: Khoảng cách đến người dùng / 10 = Chiều rộng QR tối thiểu. Đối với áp phích xem từ khoảng cách 1.5 mét, in mã ít nhất 15 cm x 15 cm.' },
      { q: 'Tôi có thể tạo mã QR cho sản phẩm và hàng hóa thương mại không?', a: 'Có! Bạn có toàn quyền sở hữu thương mại và quyền cấp phép để sử dụng tất cả mã QR được tạo trên nền tảng của chúng tôi trên bao bì bán lẻ, sách, quần áo và biển hiệu trên toàn thế giới.' }
    ],
    bestPractices: 'Luôn xuất dưới dạng vector SVG cho in thương mại, duy trì độ tương phản cao (> 4.5:1), bảo toàn vùng yên tĩnh 4 mô-đun và kiểm tra quét bản in vật lý trước khi đặt các đợt in lớn.'
  }
};
