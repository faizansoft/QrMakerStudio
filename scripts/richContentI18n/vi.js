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
  },
  '/pricing': {
    "sections": [
      {
        "title": "Tính năng miễn phí mãi mãi so với Pro dành cho doanh nghiệp",
        "paragraphs": [
          "Gói miễn phí cơ bản của chúng tôi cung cấp khả năng tạo mã QR tĩnh không giới hạn cho mọi loại công cụ chuyên biệt, không giới hạn lượt quét, không có hình mờ và xuất SVG vector với chi phí bằng không.",
          "Với các đội marketing và doanh nghiệp cần URL động có thể chỉnh sửa, bảo vệ bằng mật khẩu và phân tích lượt quét chi tiết, gói Pro của chúng tôi có mức thanh toán linh hoạt, phải chăng."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Kiến trúc minh bạch, 100% miễn phí — Tuyên ngôn chống thuê bao",
      "paragraphs": [
        "Đây là cách \"bẫy dùng thử miễn phí\" hoạt động. Bạn tạo một mã QR mà bạn nghĩ là miễn phí, in nó trên vài nghìn đô la bao bì hoặc decal xe, rồi hai tuần sau nó tắt hẳn — vì dịch vụ giờ đòi 35 USD mỗi tháng để giữ đường dẫn chuyển hướng hoạt động. Chủ doanh nghiệp, nhà thiết kế và người tổ chức sự kiện thường xuyên rơi vào bẫy này. Mã đó chưa bao giờ thực sự miễn phí; việc in ấn chỉ khiến việc từ bỏ nó trở nên tốn kém.",
        "Chúng tôi cho rằng điều đó là sai. Việc tạo mã QR dựa trên một chuẩn toán học mở, ISO/IEC 18004, và một chuẩn mở không nên bị cho thuê lại. Vì vậy toàn bộ quá trình chạy ở phía máy khách: trình duyệt của bạn tự tính toán mã sửa lỗi Reed-Solomon, dựng ma trận và kết xuất SVG ngay trên máy. Không có máy chủ theo dõi nào ở giữa, nghĩa là không có máy chủ nào có thể tính phí bạn hay tắt mã của bạn.",
        "Dưới đây là toàn bộ bảng giá. Không phí ẩn, không giới hạn lượt quét, không yêu cầu thẻ, không có ngày hết hạn. Đây không phải một gói khuyến mãi — đó là toàn bộ sản phẩm."
      ]
    },
    "comparisonTable": {
      "title": "Ma trận tính năng và mức giá của QR Generator Online",
      "headers": [
        "Tính năng / Khả năng",
        "QR Generator Online (Miễn phí mãi mãi)",
        "Gói \"Pro\" của đối thủ (35 USD/tháng)"
      ],
      "rows": [
        [
          "Phí đăng ký hàng tháng",
          "0,00 USD / tháng (100% miễn phí mãi mãi)",
          "15,00 - 45,00 USD / tháng (180 - 540 USD/năm)"
        ],
        [
          "Hết hạn mã QR",
          "Không bao giờ (hiệu lực vĩnh viễn với mã tĩnh)",
          "Bị vô hiệu hóa nếu thanh toán hàng tháng bị gián đoạn"
        ],
        [
          "Giới hạn lượt quét",
          "Không giới hạn lượt quét trọn đời (không giới hạn băng thông)",
          "Giới hạn 50 - 500 lượt quét/tháng ở các gói thấp"
        ],
        [
          "Xuất vector SVG và EPS",
          "Miễn phí (đường vector không mất dữ liệu)",
          "Bị khóa sau các gói cao cấp từ 25 USD/tháng"
        ],
        [
          "PNG 4K 300 DPI độ phân giải cao",
          "Miễn phí (2048x2048 px trở lên)",
          "Bị khóa sau gói đăng ký trả phí"
        ],
        [
          "Chèn logo tùy chỉnh",
          "Miễn phí với sửa lỗi mức H",
          "Có hình mờ hoặc bị hạn chế trên gói miễn phí"
        ],
        [
          "Yêu cầu tài khoản / đăng ký",
          "Không (không cần tài khoản, email hay thẻ tín dụng)",
          "Bắt buộc đăng ký và nhập thẻ tín dụng"
        ],
        [
          "Chủ quyền dữ liệu và quyền riêng tư",
          "100% phía máy khách (không theo dõi, không lưu trữ)",
          "Mọi lượt quét đều được định tuyến và ghi nhật ký trên máy chủ"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Chọn bất kỳ công cụ QR chuyên biệt nào",
        "description": "Mọi trình tạo đều mở: URL, vCard, WiFi, PDF, WhatsApp, mạng xã hội, email, SMS, điện thoại, vị trí, sự kiện, tiền mã hóa, văn bản, thanh toán, Google Forms. Không có gì bị khóa sau gói dịch vụ."
      },
      {
        "number": 2,
        "title": "Tùy chỉnh thương hiệu trực quan và nhúng logo của bạn",
        "description": "Áp dụng màu sắc, thay đổi kiểu chấm và góc mắt, rồi đặt logo ở giữa với mức sửa lỗi H."
      },
      {
        "number": 3,
        "title": "Tải về tệp SVG vector sẵn sàng cho sản xuất",
        "description": "Nhấn Tải xuống. Tệp SVG hoặc PNG độ phân giải cao được tải ngay — không có bức tường thanh toán hay màn hình đăng ký chắn đường."
      }
    ],
    "features": [
      {
        "title": "Không có phí đăng ký hàng tháng mãi mãi",
        "description": "Tạo bao nhiêu mã cấp thương mại cũng được. Không chi phí định kỳ, không thẻ, không điều khoản ẩn."
      },
      {
        "title": "Lượt quét trọn đời vĩnh viễn, không giới hạn",
        "description": "Mã đã in tiếp tục hoạt động trong nhiều năm. Không gì làm chậm hay làm hết hạn nó."
      },
      {
        "title": "Tải SVG vector không mất dữ liệu, không giới hạn",
        "description": "Tệp vector sẵn sàng cho tiền in mà các nhà in khổ lớn yêu cầu đều có ở đây, miễn phí, không cần nâng cấp trả phí."
      },
      {
        "title": "Đầy đủ quyền sử dụng thương mại",
        "description": "Đặt mã lên bao bì, sách, quầy trưng bày bán lẻ, thậm chí cả quảng cáo truyền hình. Không có tiền bản quyền phải trả."
      }
    ],
    "sizingMatrix": {
      "title": "Chi tiết quyền truy cập tính năng doanh nghiệp miễn phí",
      "description": "Mọi tính năng nâng cao đều dành cho 100% người dùng, không có bức tường thanh toán.",
      "headers": [
        "Lĩnh vực năng lực",
        "Trạng thái bao gồm",
        "Thông số kỹ thuật",
        "Phạm vi thương mại"
      ],
      "rows": [
        [
          "Tất cả trình tạo dữ liệu QR chuyên biệt",
          "100% miễn phí, không giới hạn",
          "ISO/IEC 18004, RFC 2426, RFC 5545, BIP-0021",
          "Không giới hạn cá nhân và thương mại"
        ],
        [
          "Xuất vector SVG và EPS",
          "100% miễn phí, không giới hạn",
          "Đường vector toán học không mất dữ liệu",
          "Tiền in thương mại, bao bì, CNC"
        ],
        [
          "Xuất PNG 4K siêu nét",
          "100% miễn phí, không giới hạn",
          "2048 x 2048 px ở 300+ DPI",
          "Marketing kỹ thuật số, màn hình 4K, web"
        ],
        [
          "Chèn logo mức H",
          "100% miễn phí, không giới hạn",
          "Dư thừa đại số Reed-Solomon 30%",
          "Bao bì thương hiệu và thẻ cao cấp"
        ],
        [
          "Bảng màu tùy chỉnh",
          "100% miễn phí, không giới hạn",
          "Kiểm soát màu hex độc lập",
          "Khớp hoàn toàn với hướng dẫn thương hiệu"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Chủ doanh nghiệp nhỏ và người khởi nghiệp",
        "description": "In biển hiệu, bao bì và tài liệu marketing mà không phải thêm một khoản phần mềm hàng tháng vào sổ sách."
      },
      {
        "title": "Công ty thiết kế đồ họa và freelancer",
        "description": "Giao cho khách hàng một mã vector sẵn sàng cho sản xuất và không bao giờ phải nhận cuộc gọi về việc nó hết hạn do gói đăng ký của người khác."
      },
      {
        "title": "Bộ phận tiền in và bao bì doanh nghiệp",
        "description": "Đưa mã vector đáng tin cậy trực tiếp vào bản vẽ khuôn bao bì, với tính toàn vẹn dữ liệu được giữ suốt đợt in."
      },
      {
        "title": "Tổ chức phi lợi nhuận và từ thiện",
        "description": "Nhận quyên góp tiền mã hóa và tăng đăng ký sự kiện với ngân sách công nghệ đúng bằng không."
      },
      {
        "title": "Người tổ chức sự kiện và nhà lập kế hoạch đám cưới",
        "description": "Gửi hàng nghìn thiệp mời kỹ thuật số và mã RSVP cho lịch. Không giới hạn lượt quét nào sẽ cắt chúng giữa chừng sự kiện."
      }
    ],
    "troubleshooting": {
      "title": "Cách bảo vệ doanh nghiệp của bạn khỏi các chiêu lừa đảo thuê bao mã QR",
      "points": [
        "Kiểm tra mã thực sự mã hóa điều gì. Quét trước khi in. Nếu nó giải mã thành một tên miền bên thứ ba như `qr-service.com/x9f2` thay vì URL của chính bạn, đó là một chuyển hướng có thể bị tắt — hãy rời đi.",
        "Hãy cảnh giác khi được yêu cầu thẻ cho \"dùng thử miễn phí\". Khi một trình tạo đòi thông tin thanh toán ngay từ đầu, hãy chờ mã ngừng hoạt động vào ngày hết hạn dùng thử.",
        "Xác nhận tải SVG là miễn phí. Nhà in chuyên nghiệp cần SVG hoặc EPS vector. Một nền tảng thu 20 USD trở lên cho việc xuất đó không phải là món hời như vẻ ngoài.",
        "Coi chừng giới hạn lượt quét ẩn. Một số gói miễn phí âm thầm ngừng hoạt động ở lượt quét thứ 50 hoặc 100. Các mã tĩnh ở đây không có giới hạn như vậy.",
        "Ưu tiên tạo mã phía máy khách. Khi mã được tạo trong trình duyệt của chính bạn, không có công ty nào giữ công tắc có thể tắt nó sau này."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online có thực sự 100% miễn phí, không phí ẩn không?",
        "a": "Hoàn toàn. Không có gói, không giới hạn lượt quét, không cần thẻ. Mọi trình tạo và mọi tải về vector đều miễn phí cho cả công việc cá nhân lẫn thương mại."
      },
      {
        "q": "QR Generator Online duy trì dịch vụ mà không thu phí đăng ký như thế nào?",
        "a": "Phần việc nặng diễn ra trong trình duyệt của bạn, không phải trên hạ tầng của chúng tôi, nên chi phí vận hành thấp. Giữ cho việc tạo mã cốt lõi miễn phí và mở chính là mục đích của dự án, không phải giai đoạn chúng tôi định rời bỏ."
      },
      {
        "q": "Mã QR tạo trên QR Generator Online có bao giờ hết hạn không?",
        "a": "Không. Dữ liệu nằm trong chính ma trận hình ảnh, nên mã vẫn hoạt động miễn là đích của nó còn hoạt động — không có máy chủ nào trong quy trình để hết thời gian chờ."
      },
      {
        "q": "Mã QR của tôi có giới hạn số lần quét không?",
        "a": "Không hề. Một mã có thể nhận vài lượt quét hoặc vài triệu lượt; không có giới hạn băng thông nào đứng sau nó."
      },
      {
        "q": "Tôi có thể dùng các mã QR này trên sản phẩm thương mại mà tôi bán không?",
        "a": "Cứ bán thoải mái. Bạn có toàn quyền thương mại với mọi mã bạn tạo — bao bì, hàng lưu niệm, sách, chương trình khuyến mãi, trên toàn thế giới."
      },
      {
        "q": "Các bạn có đóng dấu hình mờ lên mã QR của tôi ở gói miễn phí không?",
        "a": "Không bao giờ. Không hình mờ, không huy hiệu quảng cáo, không thương hiệu bên thứ ba. Thiết kế hoàn toàn thuộc về bạn."
      },
      {
        "q": "Xuất SVG vector có nằm trong gói miễn phí không?",
        "a": "Có. Cả xuất SVG vector và PNG 2048x2048 px đều miễn phí cho tất cả mọi người, không giữ lại gì."
      },
      {
        "q": "Tôi có cần tạo tài khoản hoặc cung cấp địa chỉ email không?",
        "a": "Hoàn toàn không. Tạo, tùy chỉnh và tải về bao nhiêu tùy thích mà không cần đăng ký hay cung cấp bất kỳ thông tin nào."
      }
    ],
    "bestPractices": "Với mọi thứ được in, hãy chọn mã tĩnh vĩnh viễn, xuất dưới dạng SVG vector và quét một bản in thử thực tế trước khi cam kết sản xuất hàng loạt."
  },
  '/faqs-qr-code-generator': {
    "sections": [
      {
        "title": "Câu hỏi thường gặp và lời khuyên kỹ thuật",
        "paragraphs": [
          "Mã QR tĩnh có hết hạn không? Không. Mã QR tĩnh được tạo trên QR Generator Online chứa dữ liệu thô và sẽ không bao giờ hết hạn miễn là liên kết đích của bạn còn hoạt động.",
          "Định dạng nào tốt nhất để in? SVG vector là định dạng được khuyên dùng cho in thương mại vì nó co giãn đến bất kỳ kích thước vật lý nào mà không bị vỡ hạt hay mất chất lượng."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Câu hỏi thường gặp kỹ thuật và thực tiễn cuối cùng về mã vạch 2D quang học",
      "paragraphs": [
        "Đây là cơ sở tri thức của QR Generator Online — nơi giải đáp mọi câu hỏi kỹ thuật, thiết kế, tiền in hay bảo mật về mã vạch ma trận 2D được định nghĩa trong ISO/IEC 18004.",
        "Các câu trả lời ở đây bao quát toàn bộ: toán học đằng sau mã sửa lỗi Reed-Solomon, cách camera điện thoại chuyển ảnh thành dữ liệu, tỉ lệ khoảng cách-kích thước mà bạn dùng để in ($S = D / 10$), và GDPR cùng CCPA chạm đến quy trình QR ở đâu. Nhà phát triển, trưởng marketing, kỹ thuật viên tiền in và chủ doanh nghiệp đều cần những phần khác nhau trong đó.",
        "Các danh mục bên dưới được sắp xếp để bạn có thể đi thẳng đến việc tạo, tạo kiểu, in hoặc triển khai một mã."
      ]
    },
    "comparisonTable": {
      "title": "Tóm tắt kỹ thuật về tiêu chuẩn ký hiệu mã QR",
      "headers": [
        "Thông số kỹ thuật",
        "Quy cách tiêu chuẩn",
        "Khuyến nghị kỹ thuật"
      ],
      "rows": [
        [
          "Tiêu chuẩn áp dụng",
          "ISO/IEC 18004:2015 (Công nghệ thông tin)",
          "Tuân thủ nghiêm ngặt để giải mã quang học phổ quát"
        ],
        [
          "Mức sửa lỗi",
          "Mức L (7%), Mức M (15%), Mức Q (25%), Mức H (30%)",
          "Mức H cho logo nhúng; mức M cho URL gọn"
        ],
        [
          "Lề vùng yên tĩnh",
          "Tối thiểu 4 chiều rộng module ở cả 4 cạnh",
          "Bắt buộc để máy quét phát hiện biên"
        ],
        [
          "Công thức kích thước quang học",
          "S = D / 10 (rộng = khoảng cách quét / 10)",
          "Tối thiểu 25 mm x 25 mm cho vật liệu in cầm tay"
        ],
        [
          "Tỉ lệ tương phản WCAG",
          "Tương phản độ sáng tối thiểu 4,5:1 (7:1 ngoài trời)",
          "Module tiền cảnh tối trên nền sáng"
        ],
        [
          "Dung lượng dữ liệu tối đa",
          "4.296 chữ-số / 7.089 số / 2.953 byte",
          "Giữ dưới 150 ký tự để camera giải mã nhanh"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Chọn lược đồ tải dữ liệu",
        "description": "Bắt đầu từ thứ bạn đang mã hóa — URL, vCard 3.0, WiFi, WhatsApp, SMS, email, điện thoại, vị trí, sự kiện, tiền mã hóa, văn bản thuần hoặc Google Form."
      },
      {
        "number": 2,
        "title": "Cấu hình kiểu dáng và sửa lỗi",
        "description": "Đặt màu thương hiệu giữ tương phản trên 4,5:1, chọn kiểu chấm và nếu có logo ở giữa, tạo ở mức H."
      },
      {
        "number": 3,
        "title": "Xuất SVG vector và kiểm tra bản in thử thực tế",
        "description": "Tải về SVG vector hoặc PNG 4K, rồi quét trên vài điện thoại khác nhau dưới các ánh sáng khác nhau trước khi đưa đi bất cứ đâu."
      }
    ],
    "features": [
      {
        "title": "Bao quát kỹ thuật toàn diện",
        "description": "Toán học sửa lỗi, các giao thức URI và cách nhị phân hóa của camera thực sự hoạt động — được giải thích rõ ràng, không lướt qua."
      },
      {
        "title": "Hướng dẫn tiền in và in ấn thực tế",
        "description": "Công thức kích thước thực tế, nên chọn vật liệu nào và cách bù độ tăng điểm mực khi lên máy in."
      },
      {
        "title": "Chiến lược phòng thủ bảo mật và chống quishing",
        "description": "Cần làm gì để một mã bị giả mạo hoặc can thiệp không biến chiến dịch của bạn thành một vector lừa đảo."
      },
      {
        "title": "Cơ sở tri thức 100% miễn phí và truy cập mở",
        "description": "Tài liệu mở luôn sẵn có: không đăng nhập, không bức tường thanh toán, dù bạn là nhà phát triển hay người làm marketing."
      }
    ],
    "sizingMatrix": {
      "title": "Hướng dẫn độ phân giải và kích thước in mã QR",
      "description": "Tài liệu tham khảo nhanh để xác định kích thước in vật lý dựa trên khoảng cách xem của người dùng.",
      "headers": [
        "Vị trí / Ứng dụng",
        "Khoảng cách quét dự kiến",
        "Chiều rộng tối thiểu (S)",
        "Mức sửa lỗi khuyến nghị"
      ],
      "rows": [
        [
          "Danh thiếp và thẻ tên",
          "15 cm - 30 cm (6\" - 12\")",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Mức Q (25%) hoặc mức H (30%)"
        ],
        [
          "Thẻ để bàn và đế lót ly",
          "30 cm - 50 cm (12\" - 20\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Mức M (15%) hoặc mức H (30%)"
        ],
        [
          "Bao bì sản phẩm và nhãn",
          "20 cm - 40 cm (8\" - 16\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Mức H (30%) với logo giữa"
        ],
        [
          "Tờ rơi, áp phích và tạp chí",
          "50 cm - 150 cm (20\" - 60\")",
          "60 mm - 150 mm (2,4\" - 6,0\")",
          "Mức M (15%)"
        ],
        [
          "Đồ họa đội xe",
          "3,0 m - 6,0 m (10 ft - 20 ft)",
          "300 mm x 300 mm (12\" x 12\")",
          "Mức H (30%) trên decal đúc"
        ],
        [
          "Bảng quảng cáo xa lộ",
          "15,0 m - 30,0 m (50 ft - 100 ft)",
          "1500 mm - 3000 mm (5 ft - 10 ft)",
          "Mức L (7%) hoặc mức M (15%)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Tuân thủ CNTT và bảo mật doanh nghiệp",
        "description": "Kiểm tra việc triển khai QR của doanh nghiệp có phù hợp với GDPR, CCPA và quy tắc chủ quyền dữ liệu ISO trước khi ra mắt."
      },
      {
        "title": "Thiết kế bao bì và tiền in flexo",
        "description": "Xác nhận bản vẽ khuôn mã vạch đạt giới hạn tương phản và vùng yên tĩnh của ISO/IEC 18004 trước khi làm bản in."
      },
      {
        "title": "Chuỗi khách sạn và nhà hàng",
        "description": "Triển khai thực đơn không chạm và thẻ WiFi cho khách mà không cần nhân viên giải thích."
      },
      {
        "title": "Người tổ chức sự kiện và điều phối hội nghị",
        "description": "Đẩy nhanh check-in, phát bản tải slide của diễn giả và thêm các phiên vào lịch của người tham dự."
      },
      {
        "title": "Công ty môi giới bất động sản và đội marketing",
        "description": "Biến một biển quảng cáo trước nhà thành nguồn khách hàng tiềm năng hoạt động 24/7, mở ra một tour ảo 3D."
      }
    ],
    "troubleshooting": {
      "title": "5 lỗi mã QR phổ biến nhất và cách khắc phục",
      "points": [
        "Tương phản yếu. Các module nhạt trên nền nhạt không cho camera có gì để bám vào. Hãy giữ ở mức 4,5:1 trở lên.",
        "Vùng yên tĩnh bị cắt. Cắt lề quá sát khiến máy quét không tìm được điểm bắt đầu của mã. Giữ đủ viền 4 module.",
        "Ảnh chụp màn hình 72 DPI. Đồ họa web độ phân giải thấp sẽ bị mờ ở cạnh module khi in. Hãy cung cấp SVG vector hoặc raster 300+ DPI.",
        "Quá nhiều dữ liệu. Một URL dài nhồi ma trận bằng các chấm nhỏ bị nhòe khi in nhỏ. Hãy rút ngắn liên kết trước khi tạo mã.",
        "Cán bóng. Lớp phủ bóng cao làm hắt ánh sáng trở lại ống kính. Hãy yêu cầu hoàn thiện mờ hoặc satin."
      ]
    },
    "faqs": [
      {
        "q": "Sự khác biệt giữa mã QR tĩnh và mã QR động là gì?",
        "a": "Mã tĩnh mang dữ liệu thực tế — URL, vCard, chuỗi WiFi, bất cứ thứ gì — bên trong ma trận. Không có gì hết hạn, không phụ thuộc vào máy chủ nào. Mã động mang một chuyển hướng trỏ đến máy chủ của người khác, cho phép bạn sửa đích đến sau này nhưng buộc bạn phải duy trì đăng ký để giữ chuyển hướng hoạt động."
      },
      {
        "q": "Mã QR tạo trên QR Generator Online có bao giờ hết hạn không?",
        "a": "Chúng có hiệu lực suốt đời. Lượt quét không giới hạn, không phí định kỳ, không có bộ đếm ngược — mã tự chứa đầy đủ."
      },
      {
        "q": "Mã QR có thể in với kích thước vật lý nhỏ nhất là bao nhiêu?",
        "a": "Với một URL ngắn được đọc từ khoảng 15-20 cm, 20 mm x 20 mm (0,8\" x 0,8\") là mức sàn. Trên bao bì và danh thiếp, hãy coi 25 mm x 25 mm (1,0\" x 1,0\") là mức tối thiểu an toàn của ngành."
      },
      {
        "q": "Mức sửa lỗi H bảo vệ mã QR có logo như thế nào?",
        "a": "Mức H nhân đôi khoảng 30% dữ liệu thông qua dư thừa Reed-Solomon. Bản sao dự phòng đó cho phép đặt logo lên các module ở giữa — máy quét dựng lại dữ liệu bị che từ các bit dư thừa."
      },
      {
        "q": "Tôi có thể tùy chỉnh màu mã QR để khớp với nhận diện thương hiệu không?",
        "a": "Bạn có thể đổi màu module, nền, khung góc và chấm góc một cách độc lập. Một quy tắc chi phối tất cả: tối trên sáng phải đạt tương phản 4,5:1, nếu không máy quét sẽ bắt đầu gặp khó khăn."
      },
      {
        "q": "Vì sao định dạng SVG được khuyên dùng hơn PNG để in thương mại?",
        "a": "SVG mô tả mã bằng hình học, không phải điểm ảnh. Phóng từ danh thiếp lên biển quảng cáo lớn, các cạnh vẫn sắc nét vì không có lưới điểm ảnh nào bị cạn."
      },
      {
        "q": "Mã QR có an toàn khỏi mã độc và lừa đảo (\"quishing\") không?",
        "a": "Bản thân mã chỉ chứa văn bản hoặc URL — nó không thể mang mã độc. Rủi ro là một mã bị giả mạo trỏ đến nơi không nên. Hãy phòng tránh bằng cách hiển thị logo đã xác minh của bạn ở giữa và in tên miền đích thật bằng văn bản rõ ràng bên cạnh mã."
      },
      {
        "q": "Dữ liệu cá nhân của tôi có được lưu hoặc theo dõi trên máy chủ của QR Generator Online không?",
        "a": "Không. Mọi thứ chạy phía máy khách, trong bộ nhớ trình duyệt. Liên kết, mật khẩu, thẻ liên hệ và logo đã tải lên của bạn không bao giờ được gửi tới máy chủ hay lưu giữ ở bất kỳ đâu."
      }
    ],
    "bestPractices": "Giữ tương phản trên 4,5:1, bảo vệ vùng yên tĩnh 4 module và xuất SVG vector để in. Sau đó quét một bản in thử thực tế trước khi chạy số lượng lớn — bước kiểm tra cuối cùng đó là điều phân biệt một lần ra mắt suôn sẻ với một lần in lại."
  },
  '/qr-code-with-logo': {
    "sections": [
      {
        "title": "Vì sao mã QR có thương hiệu quét được nhiều hơn tới 30%",
        "paragraphs": [
          "Mã QR chung chung không có thương hiệu có thể trông đáng ngờ hoặc không hấp dẫn. Nhúng logo chính thức của công ty giúp người dùng tin vào tính xác thực và an toàn của liên kết đích.",
          "Trình tạo của chúng tôi sử dụng sửa lỗi mức H (30% dự phòng) để đảm bảo độ tin cậy khi quét tuyệt đối trong khi vẫn hiển thị thương hiệu của bạn."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Cơ chế kỹ thuật của việc nhúng logo với sửa lỗi Reed-Solomon",
      "paragraphs": [
        "Logo được đặt ở giữa mã QR vì một lý do duy nhất: sửa lỗi. Tiêu chuẩn ISO/IEC 18004 chia mỗi mã thành các từ mã dữ liệu và các từ mã sửa lỗi, đồng thời định nghĩa bốn mức sửa lỗi — mức L khôi phục được 7% mã bị hỏng, mức M khôi phục 15%, mức Q khôi phục 25% và mức H khôi phục 30%. Mức càng cao thì càng nhiều phần hình ảnh có thể biến mất mà vẫn giải mã được.",
        "Khi bạn đặt logo ở giữa, bạn thực sự che một số module. Nếu tạo mã ở mức H, bạn có thể che tới 30% bề mặt trước khi dữ liệu không còn khôi phục được. Bộ giải mã camera trên iOS (AVFoundation) và Android (ML Kit) chỉ đơn giản dựng lại các byte bị che từ phần chẵn lẻ xung quanh — logo không thực sự chặn việc quét, nó chỉ che các điểm ảnh mà toán học đã có sẵn một bản sao dự phòng.",
        "Còn một chi tiết nữa làm việc âm thầm. QR Generator Online chừa một viền trắng mỏng quanh logo để cạnh của nó không bị nhòe sang các module tối bên cạnh. Viền đệm đó là lý do mã có logo vẫn đọc rõ ràng dưới ánh đèn nhà hàng mờ hay cửa kính sáng."
      ]
    },
    "comparisonTable": {
      "title": "Mã QR có logo thương hiệu so với mã QR đen trắng thông thường",
      "headers": [
        "Tiêu chí đánh giá",
        "Mã QR có logo thương hiệu",
        "QR đen trắng thông thường"
      ],
      "rows": [
        [
          "Tỷ lệ tương tác khi quét",
          "Lượng quét cao hơn tới 35% (niềm tin thương hiệu đã xác minh)",
          "Tỷ lệ quét cơ bản tiêu chuẩn (thường bị coi là đáng ngờ)"
        ],
        [
          "Ghi nhớ và niềm tin thương hiệu",
          "Truyền đạt ngay danh tính nhà xuất bản",
          "Diện mạo ẩn danh, lo ngại quishing cao hơn"
        ],
        [
          "Mức sửa lỗi",
          "Mức H (30% dự phòng toán học)",
          "Thường là mức L (7%) hoặc mức M (15%)"
        ],
        [
          "Tác động marketing doanh nghiệp",
          "Củng cố hướng dẫn thương hiệu trên tài liệu in",
          "Tách rời khỏi kiểu chữ và nhận diện thương hiệu"
        ],
        [
          "Khả năng chịu quét",
          "Duy trì quét tức thời với mặt nạ viền logo",
          "Dễ bị trầy xước bề mặt nếu dùng mức L"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Nhập đích của QR và chọn loại nội dung",
        "description": "Viết đích của bạn vào trình tạo phía trên — URL trang web, hồ sơ vCard, mạng WiFi hoặc văn bản thuần."
      },
      {
        "number": 2,
        "title": "Tải lên logo độ phân giải cao và điều chỉnh mặt nạ",
        "description": "Mở \"Tùy chọn QR và Logo\", tải lên PNG trong suốt, SVG hoặc JPEG, rồi tô lại màu module cho khớp bảng màu thương hiệu."
      },
      {
        "number": 3,
        "title": "Xuất SVG vector để in hoặc PNG độ phân giải cao",
        "description": "Với bao bì, in ấn và biển hiệu cửa hàng, tải SVG vector có thể co giãn. Với màn hình, dùng PNG độ phân giải cao."
      }
    ],
    "features": [
      {
        "title": "Sửa lỗi mức H (30% dự phòng)",
        "description": "Đặt logo, chữ lồng hoặc biểu tượng ở giữa và biên khôi phục 30% sẽ che phủ nó — mã vẫn giải mã ngay lần đầu."
      },
      {
        "title": "Xuất SVG và EPS vector không mất dữ liệu cho in ấn",
        "description": "Phóng mã thương hiệu lên kích thước biển quảng cáo lớn và các đường vector vẫn sắc nét. Không có lưới điểm ảnh nào bị cạn kiệt."
      },
      {
        "title": "Vùng đệm mặt nạ module thông minh",
        "description": "Một khoảng trống sạch được vẽ giữa cạnh logo và các module dữ liệu xung quanh, nên hai thứ không bao giờ hòa vào nhau về thị giác."
      },
      {
        "title": "Quyền riêng tư mật mã 100% phía máy khách",
        "description": "Việc xử lý hình ảnh diễn ra trong trình duyệt của bạn. Logo và liên kết bạn tải lên không bao giờ được gửi đi đâu."
      }
    ],
    "sizingMatrix": {
      "title": "Thông số kích thước in và tỷ lệ logo",
      "description": "Tuân theo tỷ lệ diện tích nghiêm ngặt giữa logo và ma trận để giữ tốc độ quét quang học.",
      "headers": [
        "Ứng dụng in",
        "Kích thước tổng của QR",
        "Kích thước logo tối đa",
        "Chất liệu đề xuất"
      ],
      "rows": [
        [
          "Danh thiếp và thẻ định danh",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "8 mm x 8 mm (0,3\" x 0,3\")",
          "Giấy bìa mờ nặng (350+ GSM)"
        ],
        [
          "Bao bì sản phẩm và thẻ treo",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "10 mm x 10 mm (0,4\" x 0,4\")",
          "Bìa giấy mờ tráng phủ / giấy kraft"
        ],
        [
          "Bảng để bàn và giá trưng bày quầy",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "13 mm x 13 mm (0,5\" x 0,5\")",
          "Giá để bàn acrylic / thẻ ép màng"
        ],
        [
          "Poster bán lẻ và decal cửa kính",
          "100 mm x 100 mm (4,0\" x 4,0\")",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "Vinyl mờ chống thời tiết"
        ],
        [
          "Băng rôn và bảng quảng cáo ngoài trời",
          "500 mm - 2000 mm",
          "140 mm - 560 mm",
          "Vinyl nặng không phản chiếu"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Hàng tiêu dùng đóng gói (CPG) và bán lẻ cao cấp",
        "description": "Một dấu thương hiệu chính thức trên bao bì khiến người mua yên tâm về tính xác thực của sản phẩm và có lý do để đăng ký chương trình khách hàng thân thiết."
      },
      {
        "title": "Nhận diện doanh nghiệp và danh thiếp lãnh đạo",
        "description": "Đặt logo công ty — hoặc ảnh chân dung của lãnh đạo — ở giữa mã vCard và tấm danh thiếp sẽ không còn trông chung chung."
      },
      {
        "title": "Thực đơn nhà hàng và bộ đồ ăn có thương hiệu",
        "description": "Huy hiệu quán cà phê trong mã menu trên bàn trông như một phần của không gian, chứ không phải nhãn dán dán vội sau này."
      },
      {
        "title": "Biển hiệu sự kiện và tài trợ hội nghị",
        "description": "Logo nhà tài trợ trong mã sự kiện, trên thẻ đeo và băng rôn sân khấu giúp nhà tài trợ đó luôn hiện diện và được ghi nhận rõ ràng."
      },
      {
        "title": "Thư trực tiếp và bưu thiếp quảng cáo",
        "description": "Mã thương hiệu được thiết kế đẹp làm tăng tỷ lệ phản hồi thư trực tiếp, vì bưu thiếp mọi người nhận ra là bưu thiếp mọi người quét."
      }
    ],
    "troubleshooting": {
      "title": "5 quy tắc thiết yếu cho mã QR có logo nhúng",
      "points": [
        "Giữ logo dưới 30% diện tích. Vượt quá 25-30% độ che phủ, bạn sẽ vượt khả năng khôi phục của Reed-Solomon và mã sẽ ngừng giải mã.",
        "Đừng đụng vào ba mắt định vị. Các hình vuông đồng tâm ở góc trên trái, trên phải và dưới trái phải luôn trống hoàn toàn — máy quét dựa vào chúng để định hướng mã.",
        "Cho logo một viền. Nền trong suốt hoặc viền trắng mỏng ngăn logo lan sang các module tối xung quanh.",
        "Tạo ở mức H. Mã có logo ở mức L hoặc M không có đủ dự phòng để chịu độ che phủ — mức H mới là thứ tạo ra biên an toàn.",
        "Quét thử bản in. Kiểm tra trên một điện thoại Android giá rẻ và một iPhone đời mới, trong ánh sáng yếu và mạnh, trước khi chạy hàng loạt."
      ]
    },
    "faqs": [
      {
        "q": "Vì sao thêm logo không làm mã QR khó quét?",
        "a": "Đó là nhờ sửa lỗi Reed-Solomon. Ở mức H, khoảng 30% tải trọng được nhân bản khắp mã. Logo ở giữa che một số module, và bộ giải mã chỉ việc dựng lại chúng từ các bản sao dư thừa ở nơi khác trong ma trận."
      },
      {
        "q": "Tôi có thể tải lên các định dạng ảnh nào cho logo ở giữa?",
        "a": "PNG, SVG hoặc JPEG đều được. PNG trong suốt hoặc SVG vector cho cạnh sạch nhất và kết quả chuyên nghiệp nhất — một JPEG phẳng trên nền vuông trắng trông như bị dán lên so với chúng."
      },
      {
        "q": "Logo nên lớn đến mức nào so với mã QR?",
        "a": "Khoảng 15% đến 25% chiều rộng và chiều cao là điểm lý tưởng. Bạn không cần ước lượng bằng mắt — trình tạo tự động co logo về đúng tỷ lệ."
      },
      {
        "q": "Mã QR có logo tùy chỉnh có tốn tiền hoặc cần đăng ký không?",
        "a": "Chúng miễn phí, như mọi thứ ở đây — quét không giới hạn, hiệu lực vĩnh viễn và không có rào thanh toán nào sau khi bạn in."
      },
      {
        "q": "Tôi có thể thêm biểu tượng mạng xã hội (Instagram, Facebook, WhatsApp, WiFi) thay vì logo công ty không?",
        "a": "Có. Có sẵn thư viện biểu tượng nền tảng phổ biến; nếu không thấy cái bạn cần, hãy tải lên hình tự thiết kế."
      },
      {
        "q": "Mã QR có logo có quét đáng tin cậy trên camera điện thoại đời cũ không?",
        "a": "Có, miễn là hai điều đúng: sửa lỗi mức H được bật và logo chiếm dưới 30% bề mặt. Làm đúng hai điều đó, ngay cả camera cũ cũng giải mã tức thì."
      },
      {
        "q": "Định dạng xuất nào tốt nhất để in thương mại có logo?",
        "a": "SVG vector. Nó giữ được cả ma trận module lẫn logo nhúng sắc nét ở mọi tỷ lệ in — đúng thứ một xưởng in cần."
      },
      {
        "q": "Hình logo tôi tải lên có được lưu trên máy chủ web của bạn không?",
        "a": "Không. Logo được ghép và mã được render hoàn toàn trong trình duyệt của bạn — không có gì được tải lên hay giữ lại."
      }
    ],
    "bestPractices": "Dùng PNG trong suốt hoặc logo vector, tạo ở mức H và giữ độ tương phản mạnh giữa module và nền. Sau đó quét một bản in thử trước khi chạy — logo trông ổn trên màn hình vẫn có thể lớn hơn một chút khi in ra giấy."
  },
  '/custom-qr-codes': {
    "sections": [
      {
        "title": "Nổi bật với thiết kế mã QR trực quan đẹp mắt",
        "paragraphs": [
          "Chọn giữa chấm bo tròn, chấm viền, pixel vuông hình học và các kiểu nghệ thuật. Tùy chỉnh độc lập các ô vuông góc ngoài và chấm giữa.",
          "Tạo tài liệu marketing có tỷ lệ chuyển đổi cao, trông hiện đại, chuyên nghiệp và thu hút thị giác."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Cơ chế kỹ thuật của tạo kiểu mã QR tùy chỉnh và hình học mẫu",
      "paragraphs": [
        "Tạo kiểu tùy chỉnh thay đổi cách mã QR trông, chứ không thay đổi ý nghĩa của nó. Bạn có thể thay các module vuông cứng bằng chấm tròn, hình thoi hoặc hình hữu cơ mềm mại, và tạo lại các mắt góc — trong khi lưới nhị phân bên dưới vẫn nằm đúng vị trí ISO/IEC 18004 quy định. Mẫu tối và sáng mới mang dữ liệu, và mẫu đó không hề thay đổi.",
        "Máy quét tìm mã bằng cách định vị ba mẫu định vị ở góc, tuân theo tỷ lệ chiều rộng module 1:1:3:1:1 nghiêm ngặt. Giữ đúng tỷ lệ đó, giữ mỗi module căn giữa theo tọa độ lưới, và các bộ máy iOS, ML Kit Android và ZXing đọc mã có kiểu nhanh như mã đơn giản. Phá vỡ tỷ lệ đó, không kiểu dáng nào cứu được.",
        "Đó là đường ranh mà QR Generator Online đi theo bằng toán học tọa độ vector: mọi chấm tròn, mọi mắt tùy chỉnh và mọi khung góc đều nằm đúng vị trí lưới chính xác. Bạn có được diện mạo thương hiệu mà không phải đánh đổi độ tin cậy khi quét."
      ]
    },
    "comparisonTable": {
      "title": "Mã QR thiết kế tùy chỉnh so với mã vạch mặc định đen trắng",
      "headers": [
        "Thuộc tính thiết kế",
        "Mã QR thiết kế tùy chỉnh",
        "Mã vạch chung mặc định"
      ],
      "rows": [
        [
          "Tính thẩm mỹ",
          "Hài hòa với bao bì cao cấp và nhận diện thương hiệu",
          "Công nghiệp, lâm sàng và gây khó chịu về thị giác"
        ],
        [
          "Tỷ lệ tương tác người dùng",
          "Tỷ lệ quét cao hơn 40% nhờ sức hút thị giác",
          "Tỷ lệ quét cơ bản tiêu chuẩn"
        ],
        [
          "Phạm vi tùy biến",
          "Kiểu chấm, kiểu mắt, gradient, logo ở giữa",
          "Ô vuông cứng cố định, chỉ module màu đen"
        ],
        [
          "Nhận diện thương hiệu",
          "Củng cố màu thương hiệu và nhận diện doanh nghiệp",
          "Diện mạo chung chung không phân biệt được với đối thủ"
        ],
        [
          "Tính linh hoạt khi in",
          "Có thể tùy chỉnh để khắc gỗ, dập nhũ và acrylic",
          "Chỉ in 2D tiêu chuẩn"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Chọn loại dữ liệu QR và nhập tham số đầu vào",
        "description": "Chọn loại dữ liệu — URL, vCard, WiFi hoặc văn bản — và nhập đích."
      },
      {
        "number": 2,
        "title": "Tùy chỉnh kiểu chấm, mắt góc và bảng màu",
        "description": "Thử các kiểu bo tròn, cổ điển, chấm hoặc module mềm, rồi đặt hình dạng ô góc và chấm góc cho khớp hệ thống thiết kế của bạn."
      },
      {
        "number": 3,
        "title": "Xuất SVG vector sẵn sàng in hoặc PNG độ phân giải cao",
        "description": "Tải thiết kế hoàn chỉnh dưới dạng SVG vector không mất dữ liệu để in offset, hoặc PNG 4K cho kỹ thuật số."
      }
    ],
    "features": [
      {
        "title": "Nhiều bộ cài sẵn hình học module và chấm",
        "description": "Bo tròn, cổ điển, hình thoi, chấm, mềm — mỗi kiểu được tinh chỉnh để nằm trong dung sai quét."
      },
      {
        "title": "Tùy chỉnh mắt góc độc lập",
        "description": "Khung ngoài và chấm mắt trong có màu riêng và bán kính góc riêng, tách khỏi phần thân."
      },
      {
        "title": "Xuất SVG vector không mất dữ liệu cho in ấn",
        "description": "Cùng một thiết kế in sắc nét trên danh thiếp và trên bức tường tòa nhà, không có độ mờ nào len vào giữa."
      },
      {
        "title": "Miễn phí 100% với hiệu lực vĩnh viễn",
        "description": "Thiết kế bao nhiêu tùy thích. Không giới hạn quét, không hình mờ, không phí hàng tháng."
      }
    ],
    "sizingMatrix": {
      "title": "Hướng dẫn kích thước tối thiểu và vật liệu cho mã QR tùy chỉnh",
      "description": "Vì các module được tạo kiểu có cạnh bo tròn, hãy tuân theo các mốc kích thước tối thiểu khuyến nghị.",
      "headers": [
        "Phương tiện thiết kế",
        "Kích thước tối thiểu khuyến nghị",
        "Kiểu chấm khuyến nghị",
        "Loại nền in"
      ],
      "rows": [
        [
          "Danh thiếp cao cấp",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Cổ điển / bo tròn",
          "Giấy bông mờ / dập nhũ"
        ],
        [
          "Mỹ phẩm và bao bì sản phẩm",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Mềm / bo tròn",
          "Bìa couché mờ"
        ],
        [
          "Bảng để bàn và lót ly nhà hàng",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "Chấm / cổ điển",
          "Khắc gỗ / giá acrylic"
        ],
        [
          "Poster sự kiện và đồ họa cửa kính",
          "90 mm x 90 mm (3,6\" x 3,6\")",
          "Bất kỳ kiểu tùy chỉnh nào",
          "Vinyl mờ chống thời tiết"
        ],
        [
          "Nhãn và thẻ thời trang",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Bo tròn / mềm",
          "Thẻ vải dệt / bìa kraft dày"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Thương hiệu xa xỉ và bao bì thời trang",
        "description": "Mã được tạo kiểu nằm gọn trong bao bì cao cấp thay vì chọi lại nó — không có mã vạch đen thô cứng phá vỡ thiết kế."
      },
      {
        "title": "Hồ sơ sáng tạo và danh thiếp kiến trúc",
        "description": "Mã hình học chính xác được đọc như một lựa chọn có chủ đích, đó là ấn tượng mà một kiến trúc sư hay nhà thiết kế muốn để lại."
      },
      {
        "title": "Biển hiệu khách sạn boutique và hospitality",
        "description": "Khắc mã tùy chỉnh trên gỗ hoặc đồng cho danh bạ khách, thực đơn spa hay thẻ WiFi hợp với sảnh."
      },
      {
        "title": "Thiệp mời sự kiện và thiệp lưu ngày trang trọng",
        "description": "Các module bo tròn và bảng màu kim loại biến mã chức năng thành một phần của văn phòng phẩm đám cưới hay tiệc gala."
      },
      {
        "title": "Nhãn chai bia thủ công và đồ uống",
        "description": "Tích hợp mã vào chính nghệ thuật nhãn, để việc quét lấy ghi chú nếm thử hay xuất xứ không bao giờ làm gián đoạn diện mạo chai."
      }
    ],
    "troubleshooting": {
      "title": "Sai lầm thường gặp trong thiết kế mã QR tùy chỉnh",
      "points": [
        "Làm méo mẫu định vị. Ba mắt góc giữ tỷ lệ cố định 1:1:3:1:1 và máy quét dựa vào đó để định vị mã. Hãy tạo kiểu cho chúng nhưng đừng kéo giãn.",
        "Độ tương phản thấp. Chấm xám đậm trên nền xám nhạt đánh lừa camera. Giữ ít nhất 4,5:1 giữa module và nền của chúng.",
        "Bỏ qua vùng yên tĩnh. Dù nghệ thuật bao quanh mã là gì, hãy để lại viền trống bắt buộc 4 module ở phía ngoài.",
        "Bo tròn quá mức ở kích thước nhỏ. Dưới 25 mm, bo tròn chấm nặng làm nhòe cạnh module trên camera điện thoại cơ bản. Hãy giảm bán kính với mã nhỏ.",
        "Chỉ thử trên điện thoại của chính bạn. Một máy cao cấp đọc được hầu hết mọi thứ. Hãy kiểm tra thiết kế cả trên Android tầm trung với camera lấy nét cố định."
      ]
    },
    "faqs": [
      {
        "q": "Mã QR tạo kiểu tùy chỉnh có quét nhanh như mã đen trắng tiêu chuẩn không?",
        "a": "Nhanh y hệt. Tạo kiểu nằm trong dung sai của ISO/IEC 18004; khi đã tuân thủ quy tắc tương phản và vùng yên tĩnh, tốc độ giải mã giống hệt mã đơn giản."
      },
      {
        "q": "Tôi có thể tùy chỉnh những yếu tố tạo kiểu nào trên QR Generator Online?",
        "a": "Năm thứ: kiểu chấm module (bo tròn, cổ điển, chấm, mềm), khung ô vuông góc ngoài, chấm mắt góc trong, màu nền và màu chấm, và logo ở giữa."
      },
      {
        "q": "Tôi có thể xuất mã QR tùy chỉnh dưới định dạng SVG vector không?",
        "a": "SVG vector có sẵn trên mọi thiết kế tùy chỉnh — chính điều đó giữ cho mã sắc nét khi in offset, khắc laser và cắt vinyl."
      },
      {
        "q": "Mã QR tùy chỉnh có hết hạn hoặc cần đăng ký trả phí không?",
        "a": "Cả hai đều không. Mọi mã tùy chỉnh ở đây đều miễn phí, với quét không giới hạn và hiệu lực không bao giờ hết."
      },
      {
        "q": "Tôi có thể dùng mã QR tùy chỉnh cho bao bì sản phẩm thương mại không?",
        "a": "Được, và nhiều doanh nghiệp đang làm vậy — bao bì bán lẻ, nhãn thực phẩm, thẻ may mặc, trên toàn thế giới, không cần giấy phép."
      },
      {
        "q": "Mức sửa lỗi H giúp ích gì cho thiết kế tùy chỉnh?",
        "a": "Nó cho bạn biên khôi phục 30%. Khoảng trống đó là thứ cho phép các chỉnh sửa module mang tính nghệ thuật và logo ở giữa cùng tồn tại mà không mạo hiểm quét thất bại."
      },
      {
        "q": "Kích thước tối thiểu khuyến nghị cho mã QR tạo kiểu tùy chỉnh là bao nhiêu?",
        "a": "Hướng đến 30 mm x 30 mm (1,2\" x 1,2\") hoặc lớn hơn. Module được tạo kiểu cần nhiều không gian hơn ô vuông đơn giản để giữ được sự khác biệt trên mọi cảm biến camera."
      },
      {
        "q": "Dữ liệu của tôi có an toàn khi thiết kế mã QR tùy chỉnh không?",
        "a": "Hoàn toàn. Mọi phần của thiết kế được render trong bộ nhớ trình duyệt của bạn, không có gì được lưu hoặc ghi nhật ký trên máy chủ."
      }
    ],
    "bestPractices": "Giữ độ tương phản trên 4,5:1, bảo vệ vùng yên tĩnh 4 module và — trước mọi đợt sản xuất — quét bản in thử trên vài điện thoại khác nhau. Mã tạo kiểu là nơi một thiết kế quá thông minh âm thầm hỏng, và bản thử là nơi bạn bắt được điều đó."
  },
  '/colored-qr-code-generator': {
    "sections": [
      {
        "title": "Màu sắc rực rỡ phù hợp với nhận diện thị giác của bạn",
        "paragraphs": [
          "Tạm biệt mã vạch đơn sắc. Chọn bất kỳ mã màu hex nào cho mẫu tiền cảnh, khung mắt góc và nền.",
          "Tối ưu hóa độ tương phản tích hợp đảm bảo mã QR của bạn giữ độ tương phản cao để camera lấy nét nhanh và quét tức thì."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Cơ chế kỹ thuật của độ tương phản màu và quét mã QR có màu",
      "paragraphs": [
        "Camera điện thoại không đọc mã QR của bạn bằng màu sắc. Nó chuyển khung hình thành bản đồ độ sáng thang xám và ngưỡng hóa — quyết định từng điểm ảnh một đâu là tối, đâu là sáng. Màu gần như không quan trọng; độ sáng mới là tất cả.",
        "Vì vậy quy tắc quan trọng là độ tương phản, chứ không phải sắc độ. Giữ tỷ lệ tương phản WCAG giữa màu tiền cảnh và màu nền trên 4,5:1, và nâng lên 7:1 với mọi thứ sẽ ra ngoài trời. Các màu đậm, độ sáng thấp đọc rất đẹp trên nền trắng hoặc nền nhạt — xanh navy #002B49, xanh rừng #1B4D3E, tím hoàng gia #3E1F58 và đỏ mận #5C061C đều vượt ngưỡng dễ dàng.",
        "QR Generator Online cho phép bạn tô màu tiền cảnh, nền, khung góc và mắt góc một cách độc lập. Khớp chính xác bảng màu thương hiệu, và miễn là độ sáng được giữ, mã vẫn quét được 100%."
      ]
    },
    "comparisonTable": {
      "title": "Mã QR màu tương phản cao so với mã QR bảng màu nhạt tương phản thấp",
      "headers": [
        "Đặc điểm thiết kế",
        "QR màu tương phản cao (WCAG > 4,5:1)",
        "Bảng màu pastel / nhạt tương phản thấp"
      ],
      "rows": [
        [
          "Độ tin cậy quét quang học",
          "Giải mã tức thì 100% dưới mọi ánh sáng",
          "Thường xuyên lỗi lấy nét camera và quá thời gian quét"
        ],
        [
          "Nhị phân hóa bằng camera",
          "Phân tách ngưỡng thang xám sạch",
          "Giá trị độ sáng mơ hồ gây lỗi giải mã"
        ],
        [
          "Hiệu năng dưới nắng ngoài trời",
          "Giữ được độ rõ dưới nắng gắt và chói",
          "Phai hoàn toàn dưới ánh nắng mạnh"
        ],
        [
          "Đồng bộ thương hiệu",
          "Màu doanh nghiệp đậm đà khớp nhận diện thương hiệu",
          "Diện mạo nhạt nhòa, thiếu tác động thị giác"
        ],
        [
          "Tương thích thiết bị",
          "Phổ biến trên điện thoại giá rẻ và cao cấp",
          "Hỏng trên camera giá rẻ dải động thấp"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Nhập nội dung đích và tải dữ liệu",
        "description": "Dán URL, chi tiết vCard, thông tin WiFi hoặc văn bản của bạn."
      },
      {
        "number": 2,
        "title": "Chọn bảng màu tương phản cao",
        "description": "Đặt tiền cảnh tối, nền sáng và bất kỳ màu nhấn nào cho mắt góc bằng bộ chọn hex."
      },
      {
        "number": 3,
        "title": "Xuất SVG vector để in hoặc PNG độ phân giải cao để dùng kỹ thuật số",
        "description": "Tải SVG vector để in offset, hoặc PNG 300 DPI cho chiến dịch mạng xã hội và kỹ thuật số."
      }
    ],
    "features": [
      {
        "title": "Tùy chỉnh nhiều màu độc lập",
        "description": "Module tiền cảnh, nền, khung góc, chấm góc — mỗi phần nhận đúng một giá trị hex riêng."
      },
      {
        "title": "Tuân thủ tương phản cao WCAG",
        "description": "Được thiết kế để giữ độ tương phản độ sáng mà camera cần để ngưỡng hóa sạch, bất kể ánh sáng thế nào."
      },
      {
        "title": "Xuất SVG vector và EPS không mất dữ liệu",
        "description": "Tệp vector trung thực màu, mở trực tiếp trong Illustrator, InDesign hoặc Figma và chuyển sang CMYK gọn gàng."
      },
      {
        "title": "Miễn phí 100% với quét trọn đời vĩnh viễn",
        "description": "Tô màu bao nhiêu mã tùy thích — không giới hạn quét, không hình mờ, không phí."
      }
    ],
    "sizingMatrix": {
      "title": "Thông số kích thước và độ tương phản mã QR màu",
      "description": "Đảm bảo các lựa chọn màu của bạn đạt ngưỡng quét quang học tối thiểu.",
      "headers": [
        "Tổ hợp màu",
        "Tỷ lệ tương phản",
        "Kích thước in tối thiểu",
        "Ứng dụng khuyến nghị"
      ],
      "rows": [
        [
          "Xanh navy đậm (#001F3F) trên trắng (#FFFFFF)",
          "14,5:1 (rất cao)",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Nhận diện doanh nghiệp, danh thiếp, văn phòng phẩm"
        ],
        [
          "Xanh rừng (#1B4D3E) trên kem (#FBF9F5)",
          "10,2:1 (cao)",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Sản phẩm hữu cơ, bao bì thân thiện môi trường, thực đơn"
        ],
        [
          "Tím hoàng gia (#4A0E4E) trên trắng (#FFFFFF)",
          "12,8:1 (cao)",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Hàng xa xỉ, văn phòng phẩm sự kiện, thời trang"
        ],
        [
          "Đỏ mận đậm (#5C061C) trên trắng (#FFFFFF)",
          "11,4:1 (cao)",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Nhãn chai rượu vang, bao bì thực phẩm cao cấp"
        ],
        [
          "Than (#222222) trên bạc hà pastel (#E8F5E9)",
          "11,8:1 (cao)",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Bao bì bán lẻ hiện đại, phần cứng công nghệ"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Nhất quán thương hiệu doanh nghiệp",
        "description": "Đồng bộ mã marketing với thông số Pantone và hex của thương hiệu trên tờ rơi và báo cáo thường niên."
      },
      {
        "title": "Bao bì bán lẻ và nhãn sản phẩm",
        "description": "Điều chỉnh mã theo màu bao bì chính của sản phẩm thực phẩm, đồ uống, mỹ phẩm và lối sống để nó thuộc về bao bì."
      },
      {
        "title": "Thực đơn nhà hàng và thẻ bàn trong hospitality",
        "description": "Màu mã ấm áp, thanh lịch hài hòa với không gian đọc dễ hơn nhiều so với hình vuông đen cứng trên bàn dưới ánh nến."
      },
      {
        "title": "Biển hiệu sự kiện và chương trình gala",
        "description": "Đưa bảng màu của đám cưới, lễ hội hay hội nghị vào băng rôn, thẻ đeo và thiệp mời."
      },
      {
        "title": "Biển hiệu đội xe và nhà thầu",
        "description": "Khớp mã với màu đội xe trên decal xe van lắp đặt, điều hòa và giao hàng để trông được phát hành chính thức, không phải làm vội."
      }
    ],
    "troubleshooting": {
      "title": "Sai lầm về màu khiến mã QR không quét được",
      "points": [
        "Đảo ngược bảng màu. Mã trắng trên xanh đậm làm nhiều công cụ quét bị nhầm. Giữ tiền cảnh tối hơn nền, không phải ngược lại.",
        "Màu pastel. Vàng nhạt, hồng nhạt hay bạc hà trên trắng nằm dưới tỷ lệ 2:1 — gần như vô hình với ngưỡng hóa của camera.",
        "Ấm trên ấm. Module đỏ trên vàng hay cam có quá nhiều độ sáng chung. Kiểm tra phiên bản thang xám trước khi tin kết quả.",
        "Lệch CMYK. Màu RGB có thể lệch khi chuyển sang in offset. Xác nhận bản in thử vẫn giữ độ sáng tối.",
        "Chói bóng. Bề mặt bóng phản chiếu ánh sáng và làm mất độ tương phản. Mã màu đọc tốt nhất trên giấy mờ."
      ]
    },
    "faqs": [
      {
        "q": "Mã QR có thể có bất kỳ màu nào mà vẫn hoạt động đáng tin cậy không?",
        "a": "Gần như mọi màu, với một điều kiện: tiền cảnh phải tối hơn nền rõ rệt, trên tỷ lệ 4,5:1. Xanh navy đậm, xanh rừng, tím và đỏ mận đều làm được dễ dàng."
      },
      {
        "q": "Vì sao tôi nên tránh mã QR trắng trên nền tối (đảo màu)?",
        "a": "Bộ giải mã được thiết kế để mong đợi tối trên sáng. iPhone đời mới thường xử lý được chiều ngược lại, nhưng nhiều điện thoại Android và máy quét cầm tay bị chậm hoặc thất bại — không đáng để mạo hiểm với tài liệu in."
      },
      {
        "q": "Làm sao kiểm tra tổ hợp màu của tôi có quét được không?",
        "a": "Chuyển thiết kế sang thang xám trong bất kỳ trình xem ảnh nào. Nếu mẫu vẫn nổi rõ trên nền, độ tương phản của bạn ổn. Nếu nó tan vào nền, thì việc quét cũng sẽ tan theo."
      },
      {
        "q": "Tôi có thể dùng nhiều màu không (ví dụ màu khác nhau cho mắt góc)?",
        "a": "Bạn có thể đặt khung ngoài, chấm mắt trong và module thân thành ba màu khác nhau, và mã vẫn quét được — miễn là mỗi phần giữ được độ tương phản của nó."
      },
      {
        "q": "Mã QR màu có hết hạn hoặc tốn thêm tiền không?",
        "a": "Không cả hai. Màu không tốn gì ở đây, và mã có quét không giới hạn cùng hiệu lực vĩnh viễn như mọi loại khác."
      },
      {
        "q": "Tôi nên tải định dạng nào để in chuyên nghiệp có khớp màu?",
        "a": "SVG vector. Nó giữ đúng giá trị hex và RGB và chuyển thành mẫu CMYK gọn gàng trong InDesign hay Illustrator — đúng thứ một đợt in quản lý màu cần."
      },
      {
        "q": "Tôi có thể thêm logo vào mã QR có màu không?",
        "a": "Có — tùy chỉnh màu và logo ở giữa hoạt động cùng nhau, và sửa lỗi mức H bao phủ logo như cách nó làm với mã đen."
      },
      {
        "q": "Dữ liệu thiết kế màu của tôi có được lưu trên máy chủ ngoài không?",
        "a": "Nó ở lại cục bộ. Render màu và tạo SVG đều chạy trong bộ nhớ trình duyệt của bạn, không có gì được gửi ra ngoài."
      }
    ],
    "bestPractices": "Giữ tiền cảnh rõ ràng tối hơn nền và kiểm tra thiết kế ở thang xám trước khi cam kết. Sau đó quét một bản in thử — màu trông đúng trên màn hình có thể mất tương phản ngay khi ra giấy."
  },
  '/svg-qr-code-generator': {
    "sections": [
      {
        "title": "Tiêu chuẩn vàng cho in thương mại chuyên nghiệp",
        "paragraphs": [
          "Khác với ảnh PNG hay JPEG dạng điểm ảnh, các tệp SVG vector không bao giờ bị nhòe khi phóng lên khổ in lớn.",
          "Nhập dễ dàng tệp SVG vào Adobe Illustrator, Photoshop, InDesign, Figma hoặc Canva cho quy trình thiết kế đồ họa."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Tổng quan kỹ thuật về kiến trúc mã QR đồ họa vector có thể mở rộng (SVG)",
      "paragraphs": [
        "SVG là định dạng vector dựa trên XML của W3C, và sự khác biệt với PNG hay JPEG là căn bản. Một tệp raster lưu mã như lưới cố định các điểm ảnh màu. Một SVG lưu nó như toán học — mọi module, mắt góc và vùng yên tĩnh được viết thành đường tọa độ (`<rect>`, `<path>`, `<circle>`).",
        "Đó chính là điểm mấu chốt khi phóng to. Đưa một mã SVG từ danh thiếp 25 mm lên biển quảng cáo 20 mét, bộ render chỉ tính lại các đường cong — không nội suy, không mờ do khử răng cưa, không cạnh mềm. Máy in offset, dây chuyền bao bì flexo, máy khắc laser và máy cắt vinyl CNC đều nhận được hình học mà chúng có thể đi theo chính xác.",
        "Lợi ích thực tế còn vượt xa độ sắc nét. Một mã SVG rất nhỏ, thường dưới 5 KB. Nó được định kiểu bằng CSS, chuyển sang CMYK không mất dữ liệu trong Illustrator hoặc InDesign, và nhúng thẳng vào trang web hay ứng dụng hiện đại."
      ]
    },
    "comparisonTable": {
      "title": "Mã QR SVG vector so với mã QR raster PNG / JPEG",
      "headers": [
        "Thuộc tính kỹ thuật",
        "Mã QR SVG vector",
        "Mã QR raster PNG / JPEG"
      ],
      "rows": [
        [
          "Khả năng co giãn",
          "Phóng không giới hạn (không vỡ hạt hay mờ ở mọi kích thước)",
          "Độ phân giải cố định (vỡ hạt và mờ khi phóng)"
        ],
        [
          "Dung lượng tệp",
          "Rất gọn (~3 KB - 8 KB)",
          "100 KB - 2 MB ở độ phân giải in cao"
        ],
        [
          "Tương thích máy in",
          "Tiêu chuẩn công nghiệp cho offset thương mại, flexo và laser",
          "Cần tính toán tối thiểu 300 DPI cho mỗi kích thước in"
        ],
        [
          "Khả năng chỉnh sửa trong công cụ vector",
          "Chỉnh sửa đường đầy đủ trong Illustrator, InDesign và Figma",
          "Bitmap điểm ảnh phẳng; đường không sửa được gọn gàng"
        ],
        [
          "Khắc laser và cắt vinyl",
          "Hỗ trợ trực tiếp đường vector cho máy CNC và máy cắt laser",
          "Không tương thích; cần vẽ lại vector thủ công"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Nhập nội dung QR và cấu hình dữ liệu",
        "description": "Nhập đích của bạn — URL, chi tiết vCard, thông tin WiFi hoặc văn bản."
      },
      {
        "number": 2,
        "title": "Tùy chỉnh tham số hình ảnh và logo",
        "description": "Chọn kiểu module, màu thương hiệu và hình học mắt góc, rồi đặt logo ở giữa nếu muốn."
      },
      {
        "number": 3,
        "title": "Xuất tệp SVG vector không mất dữ liệu",
        "description": "Nhấn \"Tải SVG\" để có tệp vector sẵn sàng in đi thẳng vào quy trình tiền in."
      }
    ],
    "features": [
      {
        "title": "Co giãn vô hạn hoàn hảo về toán học",
        "description": "Phóng mã lên kích thước bất kỳ và các cạnh module vẫn sắc như dao. Không có độ phân giải nào bị cạn kiệt."
      },
      {
        "title": "Tương thích trực tiếp với tiền in và in thương mại",
        "description": "Mở gọn gàng trong InDesign, Illustrator, CorelDRAW và QuarkXPress mà không cần bước chuyển đổi nào giữa chừng."
      },
      {
        "title": "Sẵn sàng cho khắc laser và máy vẽ vinyl",
        "description": "Đường vector đưa trực tiếp vào máy cắt laser, máy phay CNC hay máy vẽ biển hiệu."
      },
      {
        "title": "Dung lượng tệp siêu nhẹ",
        "description": "Dưới 5 KB, nên tải tức thì trên web và gửi email không cần nghĩ ngợi."
      }
    ],
    "sizingMatrix": {
      "title": "Hướng dẫn ứng dụng sản xuất mã QR SVG",
      "description": "SVG vector thích ứng liền mạch với mọi quy trình sản xuất vật lý và công nghiệp.",
      "headers": [
        "Quy trình sản xuất",
        "Môi trường đầu ra",
        "Độ phân giải khuyến nghị",
        "Lợi thế của SVG vector"
      ],
      "rows": [
        [
          "In offset thương mại",
          "Tờ rơi, báo cáo thường niên, sách",
          "Sắc nét vô hạn ở đầu ra máy in 2400+ DPI",
          "Trapping và tách màu vector sạch"
        ],
        [
          "In flexo",
          "Bao bì sản phẩm, thùng carton sóng",
          "Co giãn đúng kích thước đường cắt khuôn",
          "Không có tăng điểm raster trên giấy xốp"
        ],
        [
          "Khắc và ăn mòn laser",
          "Gỗ, nhôm anod hóa, thép không gỉ",
          "Chuyển thẳng thành đường dao CNC",
          "Cắt đường viền chính xác bằng tia laser"
        ],
        [
          "Vẽ và cắt vinyl",
          "Decal xe, biển hiệu cửa hàng",
          "Tạo đường cắt vector trực tiếp",
          "Loại bỏ vẽ lại bitmap thủ công"
        ],
        [
          "Giao diện web và ứng dụng kỹ thuật số",
          "Website và ứng dụng web responsive",
          "Hiển thị sắc nét trên màn hình 4K và Retina",
          "Không tốn băng thông (~4 KB)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Biển quảng cáo thương mại và biển hiệu khổ lớn",
        "description": "Phóng lên băng rôn 5 mét hoặc áp phích phương tiện công cộng, các module vẫn đủ sắc để đọc từ bên kia đường."
      },
      {
        "title": "In bao bì sản phẩm và thùng carton flexo",
        "description": "Đặt mã vector thẳng vào đường khuôn bao bì và nó chịu được một đợt chạy máy tốc độ cao."
      },
      {
        "title": "Hàng hóa khắc laser từ kim loại và gỗ",
        "description": "Khắc mã vĩnh viễn lên đế bàn gỗ, thẻ khóa kim loại hay nhãn tài sản công nghiệp từ cùng một tệp."
      },
      {
        "title": "Decal vinyl cho đội xe thương mại",
        "description": "Cắt decal bọc cho xe van và xe dịch vụ trực tiếp từ đường SVG, không cần bước vẽ lại bitmap."
      },
      {
        "title": "Ứng dụng web responsive mật độ cao",
        "description": "Nhúng SVG vào ứng dụng web và nó hiển thị sắc nét trên màn hình Retina và 4K chỉ với vài kilobyte."
      }
    ],
    "troubleshooting": {
      "title": "Thực hành tốt nhất khi làm việc với tệp SVG của mã QR",
      "points": [
        "Phóng trong Illustrator. Bật \"Scale Strokes & Effects\" để đường viền module lớn lên theo tỷ lệ thay vì giữ độ dày cố định.",
        "Phông chữ trong logo. Nếu logo nhúng có chữ tùy chỉnh, chuyển chữ thành đường viền trước khi xuất bản in cuối cùng.",
        "Vùng yên tĩnh. Đừng cắt sát hộp bao của SVG — viền trắng quanh mã chính là thứ máy ảnh dùng để tìm nó.",
        "Màu spot. In bằng mực Pantone? Kiểm tra màu tô SVG được ánh xạ đúng kênh tách trước khi gửi ra bản kẽm.",
        "Raster bên trong vector. Hãy chắc rằng mọi logo nằm trong SVG cũng là vector, không phải JPEG độ phân giải thấp sẽ làm mờ cả tệp."
      ]
    },
    "faqs": [
      {
        "q": "Mã QR SVG là gì và vì sao tốt hơn để in?",
        "a": "SVG là viết tắt của Scalable Vector Graphics (đồ họa vector có thể co giãn). Trong khi PNG hay JPEG được tạo từ điểm ảnh, SVG mô tả hình của nó bằng toán học — nên mã phóng lên bất kỳ kích thước nào mà không bị nhòe hay vỡ. Với in ấn, sự khác biệt đó là tất cả."
      },
      {
        "q": "Tôi có thể mở và chỉnh sửa mã QR SVG trong Adobe Illustrator hay Figma không?",
        "a": "Trực tiếp. SVG là định dạng vector tiêu chuẩn, nên nó mở để chỉnh sửa trong Illustrator, InDesign, Photoshop, Figma, CorelDRAW và Inkscape mà không cần chuyển đổi."
      },
      {
        "q": "SVG có tương thích với khắc laser và máy CNC không?",
        "a": "Đó chính là định dạng họ muốn. Máy cắt laser hoặc máy vẽ CNC đọc đường viền vector trực tiếp từ SVG để dẫn tia laser hoặc lưỡi dao."
      },
      {
        "q": "Mã QR SVG có hết hạn hoặc có giới hạn quét không?",
        "a": "Không hết hạn, không giới hạn. Mã SVG tĩnh giữ dữ liệu của chính nó và tiếp tục hoạt động trọn đời, không có phí định kỳ."
      },
      {
        "q": "Tôi có thể phóng mã QR SVG lớn đến mức nào mà không mất chất lượng?",
        "a": "Lớn bằng bạn cần — một con tem 1 cm hay băng rôn sân vận động 50 mét, cả hai đều với độ chính xác đầy đủ. Hình học vector không có trần kích thước."
      },
      {
        "q": "Tôi có thể nhúng logo công ty vào mã QR SVG không?",
        "a": "Bạn có thể đặt logo ở giữa ma trận vector, và sửa lỗi mức H bao phủ các module mà nó nằm lên."
      },
      {
        "q": "Tôi có thể dùng mã QR SVG trên website và ứng dụng di động không?",
        "a": "Trình duyệt render SVG tự nhiên, nên mã SVG nhúng tải dưới 5 KB và giữ sắc nét trên màn hình Retina và 4K mật độ cao."
      },
      {
        "q": "Tạo mã QR SVG trên QR Generator Online có miễn phí không?",
        "a": "Tải SVG vector độ phân giải cao là miễn phí, không có tài khoản hay đăng ký chen vào."
      }
    ],
    "bestPractices": "Đưa cho xưởng in tệp SVG vector, giữ nguyên vùng yên tĩnh 4 module và đảm bảo mọi logo nhúng cũng là vector. Sự kết hợp đó cho xưởng in một tệp có thể thả thẳng lên máy in."
  },
  '/high-resolution-qr-codes': {
    "sections": [
      {
        "title": "Độ rõ hoàn hảo cho bao bì, thực đơn và biển hiệu",
        "paragraphs": [
          "Độ phân giải DPI cao ngăn cạnh mờ và lỗi quét trên bề mặt in bóng, bao bì có kết cấu hay môi trường thiếu sáng.",
          "Xuất mã QR trong suốt, nền trong suốt như pha lê, sẵn sàng đặt ngay lên tài liệu marketing."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Tổng quan kỹ thuật về kỹ thuật mã QR độ phân giải cao (300+ DPI / 4K)",
      "paragraphs": [
        "Mã QR độ phân giải cao là mã được tạo với mật độ điểm ảnh đủ để tồn tại khi in — ít nhất 2048x2048 điểm ảnh ở 300 đến 600 DPI, hoặc tệp vector không phụ thuộc độ phân giải. Hầu hết trình tạo web đưa bạn một ảnh 200x200 ở 72 DPI, trông ổn trên màn hình nhưng sụp đổ ngay khi lên giấy: vỡ hạt, cạnh mềm, ranh giới module nhòe.",
        "Đây là điều thực sự hỏng. Khi một mã độ phân giải thấp được in, máy in cố lấp đầy dữ liệu điểm ảnh không bao giờ tồn tại. Phép nội suy đó làm tròn các góc sắc của module vuông và bóp méo tỷ lệ định vị 1:1:3:1:1 mà máy quét dựa vào — và camera hoặc giải mã chậm, hoặc bỏ cuộc.",
        "QR Generator Online loại bỏ hoàn toàn chế độ thất bại đó. Nó xuất raster độ phân giải siêu cao lên tới 4K ở 300 DPI, cùng SVG và EPS vector. Theo cả hai cách, cạnh module vẫn đủ sắc để một xưởng in bao bì, một nhà văn phòng phẩm cao cấp hay một xưởng biển quảng cáo khổ lớn chấp nhận mà không cần nhìn lại lần hai."
      ]
    },
    "comparisonTable": {
      "title": "Mã QR 300 DPI độ phân giải cao so với xuất web tiêu chuẩn 72 DPI",
      "headers": [
        "Thông số / chỉ số",
        "Xuất độ phân giải cao 300 DPI (QR Generator Online)",
        "Trình tạo web độ phân giải thấp 72 DPI"
      ],
      "rows": [
        [
          "Kích thước điểm ảnh",
          "2048 x 2048 px đến 4096 x 4096 px (4K)",
          "200 x 200 px đến 350 x 350 px"
        ],
        [
          "Chất lượng đầu ra in",
          "Ranh giới module sắc nét ở 300+ DPI",
          "Cạnh module bị vỡ hạt, mờ và lởm chởm"
        ],
        [
          "Tốc độ giải mã của camera",
          "Giải mã tức thì (< 0,2 giây) dưới mọi ánh sáng",
          "Giải mã chậm (1 - 3 giây) do mờ quang học"
        ],
        [
          "Kích thước in tối đa",
          "Co giãn được đến kích thước áp phích và biển quảng cáo",
          "Giới hạn ở màn hình web/nhỏ"
        ],
        [
          "Tiêu chuẩn tiền in thương mại",
          "Đạt tiêu chuẩn in thương mại ISO 12647",
          "Bị từ chối bởi kiểm tra tiền in thương mại"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Cấu hình tải dữ liệu và loại nội dung",
        "description": "Nhập đích của bạn — URL, hồ sơ vCard, thông tin WiFi hoặc văn bản."
      },
      {
        "number": 2,
        "title": "Tùy chỉnh thông số thiết kế và sửa lỗi",
        "description": "Đặt màu, kiểu chấm và mắt góc của bạn, và thêm logo ở giữa ở mức H nếu cần."
      },
      {
        "number": 3,
        "title": "Tải PNG 4K Ultra HD hoặc SVG vector không mất dữ liệu",
        "description": "Xuất PNG 2048x2048px sắc nét ở 300 DPI cho kỹ thuật số, hoặc SVG vector cho in khổ lớn."
      }
    ],
    "features": [
      {
        "title": "Độ phân giải 4K Ultra HD và đầu ra 300+ DPI",
        "description": "Xuất raster được xây dựng cho mật độ điểm ảnh mà một máy in thương mại thực sự cần."
      },
      {
        "title": "Không có hiện tượng nén hay nhòe cạnh",
        "description": "Kết xuất không mất dữ liệu giữ cạnh module sạch, nên camera không bao giờ bị kẹt ở ranh giới mờ."
      },
      {
        "title": "Tuân thủ tiền in thương mại",
        "description": "Vượt qua ngưỡng độ phân giải cho công việc offset, máy in kỹ thuật số và bao bì flexo."
      },
      {
        "title": "Miễn phí 100% với quét trọn đời vĩnh viễn",
        "description": "Mọi tải PNG độ phân giải cao và vector đều miễn phí — không đăng ký, không hình mờ, không trần quét."
      }
    ],
    "sizingMatrix": {
      "title": "Ma trận độ phân giải và kích thước điểm ảnh theo kích thước in",
      "description": "Tính kích thước điểm ảnh cần thiết ở chuẩn in thương mại 300 DPI ($Điểm ảnh = Inch \\times 300$).",
      "headers": [
        "Kích thước in vật lý",
        "Độ phân giải cần ở 300 DPI",
        "Định dạng tệp khuyến nghị",
        "Ứng dụng mục tiêu"
      ],
      "rows": [
        [
          "1,0\" x 1,0\" (25 mm x 25 mm)",
          "300 x 300 điểm ảnh",
          "PNG 300 DPI / SVG vector",
          "Danh thiếp, thẻ tên"
        ],
        [
          "2,0\" x 2,0\" (50 mm x 50 mm)",
          "600 x 600 điểm ảnh",
          "PNG 300 DPI / SVG vector",
          "Thẻ bàn, lót ly, nhãn sản phẩm"
        ],
        [
          "4,0\" x 4,0\" (100 mm x 100 mm)",
          "1200 x 1200 điểm ảnh",
          "SVG vector / PNG 300 DPI",
          "Tờ rơi, bưu thiếp, quảng cáo tạp chí"
        ],
        [
          "8,0\" x 8,0\" (200 mm x 200 mm)",
          "2400 x 2400 điểm ảnh (4K)",
          "SVG vector",
          "Áp phích, biển hiệu cửa hàng, băng rôn"
        ],
        [
          "20\"+ (khổ lớn và biển quảng cáo)",
          "Co giãn vector vô hạn",
          "SVG vector / EPS",
          "Phông nền hội chợ thương mại, biển quảng cáo"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Bao bì thương mại và nhãn sản phẩm",
        "description": "In mã sắc nét lên bao bì thực phẩm, chai mỹ phẩm và hộp bán lẻ mà không có tăng điểm làm nhòe module."
      },
      {
        "title": "Văn phòng phẩm doanh nghiệp cao cấp và giấy tiêu đề",
        "description": "Đưa cho công việc dập nhũ, dập nổi hay UV cục bộ độ chính xác nó cần trên bìa cao cấp."
      },
      {
        "title": "Băng rôn khổ lớn và biển quảng cáo ngoài trời",
        "description": "Phóng lên bảng nhiều mét vẫn giải mã gọn gàng từ đầu bên kia bãi đỗ xe."
      },
      {
        "title": "Quảng cáo tạp chí và catalogue thư trực tiếp",
        "description": "Vượt qua ngưỡng tiền in 300+ DPI mà các nhà in tạp chí và catalogue quốc gia yêu cầu."
      },
      {
        "title": "Màn hình kỹ thuật số độ nét cao và kiosk 4K",
        "description": "Hiển thị mã sắc nét trên màn hình cảm ứng, bảng menu kỹ thuật số hay slide hội nghị mà không bị mờ đi."
      }
    ],
    "troubleshooting": {
      "title": "Tránh các cạm bẫy về độ phân giải và chất lượng in",
      "points": [
        "Chụp màn hình mã. Đừng bao giờ chụp màn hình để in — nó khóa độ phân giải web thấp. Tải PNG độ phân giải cao gốc hoặc SVG.",
        "Nén JPEG. JPEG nén mất dữ liệu tạo viền mờ quanh cạnh module. Lưu dưới dạng PNG không mất dữ liệu hoặc SVG thay vào đó.",
        "Tăng điểm trên giấy báo. Giấy rẻ, xốp làm loang mực và lấp kín khoảng trống giữa các module. Phóng mã lên khoảng 20% cho giấy báo.",
        "Giảm mẫu khi xuất. Khi đặt mã vào InDesign hay Canva, kiểm tra xem xuất có âm thầm hạ nó xuống dưới 300 DPI không.",
        "Rasterization mềm. Đang rasterize một vector? Dùng kết xuất láng giềng gần nhất hoặc cạnh sắc để góc module vẫn vuông."
      ]
    },
    "faqs": [
      {
        "q": "Vì sao độ phân giải cao là thiết yếu khi in mã QR?",
        "a": "Vì camera đọc cạnh, không đọc ý định. Ảnh độ phân giải thấp làm nhòe ranh giới module khi in, và ranh giới nhòe chính là thứ máy quét khó ngưỡng hóa nhất. Ở 300+ DPI, cạnh vẫn sắc và giải mã diễn ra tức thì."
      },
      {
        "q": "QR Generator Online xuất PNG với độ phân giải bao nhiêu?",
        "a": "Xuất PNG là 2048x2048 điểm ảnh ở 300 DPI — đủ để in sắc nét đến khoảng 7x7 inch mà không mất chất lượng."
      },
      {
        "q": "Khi nào nên dùng SVG vector thay vì PNG độ phân giải cao?",
        "a": "Dùng SVG bất cứ khi nào mã sẽ lớn hoặc chuyên nghiệp: áp phích, băng rôn, biển quảng cáo, quy trình Illustrator hay InDesign, hoặc bất cứ thứ gì khắc laser hay cắt vinyl."
      },
      {
        "q": "Mã QR độ phân giải cao có tốn tiền hoặc yêu cầu tài khoản Pro không?",
        "a": "Không tài khoản, không chi phí. Mọi PNG độ phân giải cao và SVG vector ở đây đều miễn phí, không giới hạn và không hình mờ."
      },
      {
        "q": "Làm sao biết nên in mã QR của tôi với kích thước nào?",
        "a": "Dùng quy tắc 10:1: chia khoảng cách quét cho mười. Một áp phích được đọc từ một mét cần một mã rộng ít nhất 10 cm (4 inch)."
      },
      {
        "q": "Tôi có thể tạo mã QR độ phân giải cao với màu và logo tùy chỉnh không?",
        "a": "Bạn có thể tạo kiểu màu, kiểu chấm và hình dạng góc, thêm logo ở giữa, và vẫn xuất kết quả dưới dạng PNG 4K hoặc SVG vector."
      },
      {
        "q": "Vì sao các xưởng in thương mại từ chối ảnh 72 DPI?",
        "a": "Máy in của họ chạy ở 2400+ DPI. Một tệp 72 DPI đơn giản không mang đủ dữ liệu điểm ảnh, nên nó in thành các khối nhìn thấy được và không qua được kiểm tra tiền in."
      },
      {
        "q": "Dữ liệu của tôi có an toàn khi tạo mã QR độ phân giải cao không?",
        "a": "Có. Việc kết xuất độ phân giải cao diễn ra cục bộ trong trình duyệt của bạn, không có dữ liệu hay hình ảnh nào gửi lên máy chủ."
      }
    ],
    "bestPractices": "Xuất SVG vector để in, hoặc PNG 2048px ở 300 DPI, và tránh JPEG nén mất dữ liệu. Như mọi khi, hãy quét bản in thử trước khi chạy toàn bộ — các vấn đề độ phân giải chỉ xuất hiện trên giấy, không bao giờ trên màn hình."
  },
  '/about': {
    "sections": [
      {
        "title": "Xây dựng công nghệ mã vạch đặt quyền riêng tư lên hàng đầu",
        "paragraphs": [
          "QR Generator Online được tạo ra để giải quyết sự bực bội với các trình tạo QR thu phí, bóc lột, giữ liên kết người dùng làm con tin sau thời gian dùng thử miễn phí.",
          "Mọi việc tạo mã tĩnh được xử lý 100% trong trình duyệt của bạn mà không ghi lại thông tin liên hệ cá nhân hay thông tin WiFi nhạy cảm nào trên máy chủ của chúng tôi."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Sứ mệnh kiến trúc của chúng tôi — Công nghệ QR mở, riêng tư và bền vững",
      "paragraphs": [
        "QR Generator Online bắt đầu từ một bực bội chung. Một vài kỹ sư, một cặp nhà thiết kế kiểu chữ và một số người quan tâm đến quyền riêng tư đều từng chứng kiến cùng một điều xảy ra: việc tạo mã vạch 2D — một tiêu chuẩn mở mà Denso Wave và ISO/IEC công bố từ năm 2000 — bị rào lại sau các gói đăng ký 30 USD mỗi tháng, giữ chiến dịch in ấn làm con tin. Vì vậy họ đã xây dựng giải pháp thay thế.",
        "Lựa chọn kỹ thuật bên dưới đó đơn giản để phát biểu và khó để bắt chước: mọi thứ chạy phía máy khách. Toán đa thức Reed-Solomon, lắp ghép ma trận, kết xuất vector — tất cả đều thực thi trong trình duyệt của bạn thông qua JavaScript hiện đại và WebAssembly. Không có proxy theo dõi nào trên đường đi vì không có máy chủ nào trên đường đi cả.",
        "Nền tảng đó hiện tiếp cận người dùng ở 190 quốc gia. Một quán cà phê góc phố và một nhà preflight thuộc danh sách Fortune 500 dùng cùng trình tạo, và cả hai đều nhận được mã vector vĩnh viễn, độ phân giải cao, không có rào thanh toán, không giới hạn quét và không ghi nhật ký gì."
      ]
    },
    "comparisonTable": {
      "title": "Triết lý kiến trúc của chúng tôi so với SaaS QR thương mại truyền thống",
      "headers": [
        "Giá trị / trụ cột cốt lõi",
        "QR Generator Online",
        "SaaS QR thương mại truyền thống"
      ],
      "rows": [
        [
          "Mô hình giá",
          "Miễn phí 100% mãi mãi (không rào thanh toán, không đăng ký)",
          "Đăng ký hàng tháng định kỳ (15 - 45 USD/tháng)"
        ],
        [
          "Kiến trúc dữ liệu",
          "100% phía máy khách (mọi xử lý trong bộ nhớ trình duyệt)",
          "Proxy máy chủ tập trung ghi lại mọi lưu lượng quét"
        ],
        [
          "Quyền riêng tư và tuân thủ GDPR",
          "Không thu thập dữ liệu, không cookie, không theo dõi",
          "Thu thập địa chỉ IP, vị trí địa lý và thiết bị của khách truy cập"
        ],
        [
          "Xuất tệp vector",
          "SVG và EPS vector đầy đủ miễn phí cho mọi người dùng",
          "Định dạng vector bị khóa sau các gói Pro đắt tiền"
        ],
        [
          "Tuổi thọ của mã",
          "Hiệu lực vĩnh viễn trọn đời (mã tĩnh mã hóa trực tiếp)",
          "Mã hết hạn sau 14 ngày nếu không trả đăng ký"
        ],
        [
          "Quyền sử dụng thương mại",
          "Đầy đủ giấy phép thương mại không hạn chế",
          "Hạn chế sử dụng thương mại ở gói miễn phí hoặc khởi đầu"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Truy cập mở cho mọi người dùng trên toàn cầu",
        "description": "Cùng bộ công cụ cấp doanh nghiệp dành cho tất cả — một nhà thiết kế độc lập, một cửa hàng góc phố hay một thương hiệu toàn cầu — không có gì bị giữ lại cho gói trả phí."
      },
      {
        "number": 2,
        "title": "Bảo mật dữ liệu không thỏa hiệp ngay từ thiết kế",
        "description": "Không URL, mật khẩu hay hồ sơ liên hệ nào của khách hàng được lưu, ghi nhật ký hay bán. Ngay từ đầu cũng không có cơ sở dữ liệu nào giữ bất cứ thứ gì trong số đó."
      },
      {
        "number": 3,
        "title": "Tiêu chuẩn tiền in chính xác cho in ấn vật lý",
        "description": "Đầu ra SVG vector được xây dựng để sống sót trên máy in thương mại — chính xác về toán học, sẵn sàng cho bao bì và công việc khổ lớn."
      }
    ],
    "features": [
      {
        "title": "Kiến trúc phía máy khách dựa trên trình duyệt 100%",
        "description": "Mã hóa và kết xuất diễn ra cục bộ, đó là lý do bản xem trước tức thì và dữ liệu nhập của bạn luôn riêng tư."
      },
      {
        "title": "Tuân thủ đầy đủ ISO/IEC 18004",
        "description": "Được xây dựng đúng từng chữ theo tiêu chuẩn quốc tế, nên mã quét được ngay lần đầu trên mọi camera iOS hay Android."
      },
      {
        "title": "Đầu ra SVG vector không mất dữ liệu và PNG 4K",
        "description": "Một đường xuất duy nhất phục vụ ngang nhau một miếng dán siêu nhỏ và một biển quảng cáo đường cao tốc dài 50 mét."
      },
      {
        "title": "Đảm bảo mã vĩnh viễn trọn đời",
        "description": "Không có chuyển hướng trung gian nên không có gì để tắt. Mã bạn in ở đây vẫn tiếp tục hoạt động."
      }
    ],
    "sizingMatrix": {
      "title": "Quy mô toàn cầu và chuẩn hiệu năng của chúng tôi",
      "description": "Các chỉ số chính phản ánh độ tin cậy và phạm vi toàn cầu của nền tảng QR Generator Online.",
      "headers": [
        "Chuẩn / chỉ số",
        "Tiêu chuẩn hiệu năng",
        "Kiến trúc kỹ thuật",
        "Lợi ích cho người dùng"
      ],
      "rows": [
        [
          "Độ trễ tạo mã",
          "< 50 mili giây",
          "Thực thi WebAssembly / JS cục bộ trong trình duyệt",
          "Cập nhật bản xem trước thời gian thực tức thì"
        ],
        [
          "Tỷ lệ tin cậy khi quét",
          "99,99% giải mã quang học ngay lần đầu",
          "Mẫu thời gian tuân thủ ISO/IEC 18004",
          "Không cản trở việc quét của khách hàng"
        ],
        [
          "Độ chính xác vector",
          "Co giãn toán học vô hạn",
          "Hình học đường vector SVG W3C sạch sẽ",
          "Đầu ra máy in thương mại hoàn hảo"
        ],
        [
          "Ghi nhật ký dữ liệu máy chủ",
          "0,00% (không lưu byte nào)",
          "Không có cơ sở dữ liệu ngoài hay proxy theo dõi",
          "Tuân thủ đầy đủ GDPR / CCPA"
        ],
        [
          "Khả dụng toàn cầu",
          "100,0% thời gian hoạt động tĩnh",
          "Phân phối qua mạng CDN biên toàn cầu",
          "Khả dụng toàn thế giới 24/7/365"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Doanh nghiệp nhỏ độc lập và bán lẻ địa phương",
        "description": "Tài liệu marketing chuyên nghiệp, biển hiệu cửa hàng và bao bì — mà không có phí phần mềm nào ăn vào lợi nhuận."
      },
      {
        "title": "Agency thiết kế và chuyên gia sáng tạo",
        "description": "Tệp SVG vector sạch nhập thẳng vào InDesign, Illustrator hoặc Figma mà không cần chỉnh sửa."
      },
      {
        "title": "Nhà preflight và xưởng in bao bì thương mại",
        "description": "Bản vẽ khuôn mã vạch tương phản cao vượt qua kiểm tra preflight nghiêm ngặt thay vì bị trả lại."
      },
      {
        "title": "Tổ chức phi lợi nhuận, trường học và hội nhóm cộng đồng",
        "description": "Check-in sự kiện không chạm, câu đố lớp học và liên kết quyên góp — tất cả không cần ngân sách công nghệ."
      },
      {
        "title": "Nhà phát triển phần mềm và chuyên gia tích hợp kỹ thuật",
        "description": "Một bảng tham chiếu gọn gàng cho các lược đồ URI như `WIFI:`, `mailto:`, `vCard 3.0` và `BIP-0021` khi kết nối ứng dụng di động."
      }
    ],
    "troubleshooting": {
      "title": "Tiêu chuẩn kỹ thuật cốt lõi và cam kết của chúng tôi",
      "points": [
        "Chúng tôi sẽ không giữ mã đã in làm con tin. Mã tĩnh là vĩnh viễn — không chuyển hướng, không bẫy hết hạn chôn trong điều khoản.",
        "Chúng tôi sẽ không bán dữ liệu của bạn. Chạy phía máy khách, chúng tôi ngay từ đầu không có cơ sở dữ liệu người dùng để khai thác hay giao cho nhà quảng cáo.",
        "Chúng tôi sẽ không đặt rào thanh toán trên tải vector. Xuất SVG là nhu cầu làm việc của nhà thiết kế, nên nó vẫn miễn phí cho mọi người.",
        "Chúng tôi sẽ giữ tuân thủ ISO. Mọi module, mẫu thời gian và mắt định vị đều được kiểm chứng theo ISO/IEC 18004.",
        "Chúng tôi sẽ tiếp tục ủng hộ web mở. Các công cụ trình duyệt miễn phí, nhanh và hữu ích cho bất kỳ ai cần — đó là toàn bộ ý tưởng."
      ]
    },
    "faqs": [
      {
        "q": "Sứ mệnh của QR Generator Online là gì?",
        "a": "Đưa việc tạo mã QR vĩnh viễn, riêng tư và chất lượng thương mại vào tay mọi người miễn phí — không có đăng ký nào đứng giữa bạn và mã bạn đã in."
      },
      {
        "q": "Ai đã sáng lập QR Generator Online?",
        "a": "Một nhóm nhỏ kỹ sư phần mềm, nhà thiết kế preflight và người ủng hộ quyền riêng tư, những người muốn một đối trọng trung thực và mở cho các dịch vụ QR theo đăng ký."
      },
      {
        "q": "Kiến trúc phía máy khách của bạn bảo vệ quyền riêng tư người dùng như thế nào?",
        "a": "Việc tạo mã chạy trong trình duyệt của bạn bằng JavaScript, từ đầu đến cuối. URL đích, chi tiết liên hệ và mật khẩu WiFi của bạn không bao giờ được gửi tới chúng tôi vì không có lệnh gọi máy chủ nào để gửi chúng đi."
      },
      {
        "q": "Doanh nghiệp có thể dùng QR Generator Online cho bao bì thương mại không?",
        "a": "Họ đã làm vậy. Nhiều thương hiệu thương mại và nhóm preflight đặt các mã vector này lên bao bì, kệ bán lẻ, sách và chiến dịch quảng cáo trên toàn thế giới."
      },
      {
        "q": "Có chi phí ẩn, tài khoản Pro hay yêu cầu thẻ tín dụng nào không?",
        "a": "Không có gì ẩn. Mọi công cụ, mọi tùy chọn tạo kiểu, nhúng logo và tải vector đều miễn phí cho mọi người dùng."
      },
      {
        "q": "Làm sao bạn đảm bảo mã QR được tạo quét đáng tin cậy trên mọi thiết bị?",
        "a": "Bộ máy tuân thủ ISO/IEC 18004, giữ vùng yên tĩnh bắt buộc 4 module và áp dụng sửa lỗi Reed-Solomon mức H bất cứ khi nào có logo. Sự kết hợp đó là thứ làm cho mã được đọc ngay lần đầu trên mọi thiết bị."
      },
      {
        "q": "Tôi có thể góp ý hoặc đề xuất tính năng mới không?",
        "a": "Hãy làm vậy — ý kiến cộng đồng thúc đẩy phần lớn những gì chúng tôi xây dựng. Trang Liên hệ là cách nhanh nhất để gửi ý tưởng hoặc yêu cầu tính năng."
      },
      {
        "q": "Máy chủ của bạn được lưu trữ ở đâu?",
        "a": "Tài nguyên tĩnh được phục vụ qua mạng CDN biên toàn cầu, nên trang tải nhanh dù bạn mở từ Bắc Mỹ, châu Âu, châu Á hay bất kỳ nơi nào khác."
      }
    ],
    "bestPractices": "Nếu công cụ tiết kiệm thời gian cho bạn, hãy chia sẻ nó — một nhà thiết kế, chủ cửa hàng hay nhóm marketing bạn quen có lẽ cũng sẽ cần."
  },
  '/contact': {
    "sections": [
      {
        "title": "Liên hệ đội ngũ kỹ thuật và hỗ trợ của chúng tôi",
        "paragraphs": [
          "Có câu hỏi về định dạng mã QR tùy chỉnh, thực hành in ấn tốt nhất hay tạo hàng loạt? Gửi email cho chúng tôi tại support@qr-generator.online.",
          "Đội hỗ trợ kỹ thuật của chúng tôi phản hồi mọi yêu cầu trong vòng 24 giờ làm việc."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hỗ trợ kỹ thuật doanh nghiệp, yêu cầu và trợ giúp cộng đồng",
      "paragraphs": [
        "Bị kẹt với một đặc tả preflight, một lô công việc khối lượng lớn, một tệp SVG vector không khớp đúng trong InDesign hay một định dạng dữ liệu doanh nghiệp? Đó là lý do đội hỗ trợ có mặt.",
        "Những người trả lời hiểu rõ ISO/IEC 18004, tiền in preflight bao bì flexo, vật lý quét quang học và các bộ giải mã camera bên trong iOS (AVFoundation) và Android (Google ML Kit). Nhà thiết kế, nhà in thương mại, lãnh đạo marketing và nhà phát triển đều đổ về cùng một hộp thư và nhận được câu trả lời thực sự.",
        "Chọn kênh bên dưới phù hợp nhất. Mọi yêu cầu kỹ thuật và thương mại đều được trả lời trong vòng 24 giờ làm việc."
      ]
    },
    "comparisonTable": {
      "title": "Các kênh hỗ trợ và chuẩn thời gian phản hồi",
      "headers": [
        "Loại yêu cầu",
        "Kênh khuyến nghị",
        "Thời gian phản hồi trung bình",
        "Phạm vi hỗ trợ"
      ],
      "rows": [
        [
          "Hỗ trợ preflight và in vector",
          "support@qr-generator.online",
          "< 12 giờ làm việc",
          "Định dạng SVG vector, kiểm tra DPI, duyệt bản in preflight"
        ],
        [
          "Yêu cầu doanh nghiệp và khối lượng lớn",
          "support@qr-generator.online",
          "< 12 giờ làm việc",
          "Lược đồ dữ liệu tùy chỉnh, tạo hàng loạt, tích hợp thương hiệu"
        ],
        [
          "Báo lỗi và phản hồi kỹ thuật",
          "support@qr-generator.online",
          "< 24 giờ làm việc",
          "Khả năng tương thích trình duyệt, phản hồi kết xuất, yêu cầu tính năng"
        ],
        [
          "Câu hỏi chung và hướng dẫn sử dụng",
          "Trang cơ sở kiến thức và FAQ",
          "Tự phục vụ tức thì",
          "Hướng dẫn toàn diện về kích thước, tạo kiểu và quét"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Xem cơ sở kiến thức toàn diện của chúng tôi",
        "description": "Hầu hết câu hỏi về kích thước, in ấn và định dạng tệp đã có câu trả lời viết sẵn trong cơ sở kiến thức và FAQ — đáng xem trước khi gửi email."
      },
      {
        "number": 2,
        "title": "Chuẩn bị chi tiết kỹ thuật cho yêu cầu của bạn",
        "description": "Ghi chú lược đồ bạn đang mã hóa (URL, vCard, WiFi), kích thước vật lý bạn sẽ in và phần mềm bạn đang dàn trang — Illustrator, InDesign hay Canva."
      },
      {
        "number": 3,
        "title": "Gửi yêu cầu của bạn tới bộ phận hỗ trợ",
        "description": "Gửi email tới đội tại support@qr-generator.online. Một chuyên gia phản hồi trong vòng 24 giờ làm việc."
      }
    ],
    "features": [
      {
        "title": "Chuyên môn kỹ thuật preflight trực tiếp",
        "description": "Lời khuyên từ những người thực sự đã vận hành quy trình offset, flexo và máy in kỹ thuật số — không phải câu trả lời kịch bản cấp một."
      },
      {
        "title": "Cam kết phản hồi nhanh trong 24 giờ",
        "description": "Dù là câu hỏi cộng đồng hay yêu cầu doanh nghiệp, nó được đọc và trả lời trong một ngày làm việc."
      },
      {
        "title": "Cơ sở kiến thức tự phục vụ toàn diện",
        "description": "Hàng chục hướng dẫn chuyên sâu về công thức kích thước, sửa lỗi và lựa chọn nền in — mở bất cứ lúc nào."
      },
      {
        "title": "Hỗ trợ cộng đồng và doanh nghiệp miễn phí 100%",
        "description": "Dù là doanh nghiệp nhỏ, tổ chức phi lợi nhuận hay nhà thiết kế doanh nghiệp, sự trợ giúp đều như nhau và không tốn gì."
      }
    ],
    "sizingMatrix": {
      "title": "Các chủ đề hỗ trợ được yêu cầu nhiều nhất và tài nguyên trực tiếp",
      "description": "Liên kết nhanh tới các tài nguyên kỹ thuật chuyên biệt để hỗ trợ tức thì.",
      "headers": [
        "Lĩnh vực chủ đề",
        "Hướng dẫn tài nguyên chính",
        "Công thức / tiêu chuẩn chính",
        "Đối tượng mục tiêu"
      ],
      "rows": [
        [
          "Kích thước in và công thức S = D / 10",
          "Hướng dẫn đầy đủ in mã QR",
          "$S = D / 10$",
          "Nhà thiết kế đồ họa, kỹ thuật viên preflight"
        ],
        [
          "Định dạng danh thiếp vCard 3.0",
          "Hướng dẫn danh thiếp mã QR vCard",
          "RFC 2426 / RFC 6350",
          "Marketing doanh nghiệp, lãnh đạo networking"
        ],
        [
          "Vận hành thực đơn khách sạn và nhà hàng",
          "Hướng dẫn mã QR cho nhà hàng",
          "HTTPS / viewport responsive di động",
          "Chủ nhà hàng, nhà điều hành ăn uống"
        ],
        [
          "Marketing biển bất động sản",
          "Hướng dẫn tạo khách hàng tiềm năng bằng mã QR bất động sản",
          "Matterport 3D / S = D / 10",
          "Môi giới bất động sản, quản lý tài sản"
        ],
        [
          "Thiết lập truy cập mạng WiFi",
          "Hướng dẫn mã QR WiFi cho khách sạn",
          "Giao thức URI WIFI: (WPA3/WPA2)",
          "Quản lý khách sạn, chủ quán cà phê, nhân viên IT"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Kiểm tra preflight bao bì thương mại",
        "description": "Nhờ đội kiểm tra SVG bao bì của bạn có vượt giới hạn tương phản ISO và vùng yên tĩnh trước khi cắt khuôn kẽm."
      },
      {
        "title": "Biển quảng cáo khổ lớn và biển hiệu ngoài trời",
        "description": "Nhận kích thước chính xác cho biển đường cao tốc được đọc từ 20 đến 50 mét, để nó quét được từ xe đang chạy."
      },
      {
        "title": "Triển khai vCard doanh nghiệp tùy chỉnh",
        "description": "Tìm cách chuẩn hóa mã danh thiếp vCard trên một lực lượng lao động hàng nghìn người."
      },
      {
        "title": "Triển khai thực đơn đa điểm cho khách sạn",
        "description": "Lên kế hoạch triển khai thực đơn PDF tải nhanh trên mạng lưới nhượng quyền mà không đau đầu cho từng cơ sở."
      },
      {
        "title": "Hỗ trợ chiến dịch giáo dục và phi lợi nhuận",
        "description": "Nhận trợ giúp cho dự án câu đố lớp học, triển lãm bảo tàng hay chiến dịch gây quỹ."
      }
    ],
    "troubleshooting": {
      "title": "Thông tin nên đưa vào để hỗ trợ nhanh chóng",
      "points": [
        "Nêu tên trình tạo. Cho chúng tôi biết bạn đang dùng công cụ nào — URL, vCard, WiFi, Google Forms.",
        "Cho kích thước in. Chiều rộng và chiều cao dự kiến rất hữu ích, ví dụ 25 mm x 25 mm trên danh thiếp.",
        "Nêu khoảng cách quét. Mọi người sẽ đứng cách khoảng bao xa — 30 cm cho thực đơn hay 3 mét cho biển bất động sản?",
        "Nêu phần mềm. Illustrator, InDesign, Photoshop, CorelDRAW hay Figma — nó thay đổi lời khuyên.",
        "Đính kèm tệp. Với vấn đề quét, gửi SVG hoặc PNG đã xuất để chúng tôi xem trực tiếp."
      ]
    },
    "faqs": [
      {
        "q": "Đội hỗ trợ QR Generator Online phản hồi nhanh đến mức nào?",
        "a": "Trong vòng 24 giờ làm việc, và thường trong 12 giờ vào ngày làm việc."
      },
      {
        "q": "Địa chỉ email hỗ trợ chính là gì?",
        "a": "support@qr-generator.online đến thẳng đội kỹ thuật."
      },
      {
        "q": "Các bạn có hỗ trợ điện thoại hay trò chuyện trực tiếp không?",
        "a": "Hỗ trợ hoạt động qua email và cơ sở kiến thức thay vì điện thoại hay trò chuyện. Đó là một phần lý do dịch vụ giữ được hoàn toàn miễn phí."
      },
      {
        "q": "Các bạn có thể xem lại thiết kế in thương mại của tôi trước khi lên máy không?",
        "a": "Rất sẵn lòng. Gửi bản duyệt SVG vector hoặc PDF của bạn tới support@qr-generator.online và đội preflight sẽ kiểm tra vùng yên tĩnh, độ tương phản và hình học module trước khi bạn cam kết."
      },
      {
        "q": "Tôi có thể yêu cầu một tính năng tùy chỉnh hoặc một loại mã QR mới không?",
        "a": "Đề xuất tính năng được hoan nghênh và thực sự được đọc. Gửi ý tưởng qua email tới đội sản phẩm tại support@qr-generator.online."
      },
      {
        "q": "Các bạn có tính phí tư vấn hay hỗ trợ không?",
        "a": "Không. Trợ giúp kỹ thuật, đánh giá preflight và hướng dẫn cách làm đều miễn phí."
      },
      {
        "q": "Tôi có thể tìm hướng dẫn và hướng dẫn tự phục vụ ở đâu?",
        "a": "Trang Blog và FAQ có các hướng dẫn chi tiết về kích thước in, thực đơn nhà hàng, liên hệ vCard và truy cập WiFi."
      },
      {
        "q": "Thông tin liên hệ của khách hàng có được giữ bí mật không?",
        "a": "Hoàn toàn. Mọi email, chi tiết hay tác phẩm bạn chia sẻ với bộ phận hỗ trợ đều được giữ bí mật và không bao giờ được chia sẻ hay bán."
      }
    ],
    "bestPractices": "Xem nhanh FAQ và Blog trước để có câu trả lời ngay, và khi gửi email, hãy ghi kèm kích thước in và phần mềm dàn trang — điều đó biến một cuộc trao đổi hai email thành một email duy nhất."
  },
  '/privacy': {
    "sections": [
      {
        "title": "Xử lý dữ liệu phía máy khách và lưu trữ bằng không",
        "paragraphs": [
          "QR Generator Online xử lý việc tạo mã QR tĩnh cục bộ trong trình duyệt web của bạn. Chúng tôi không lưu trữ, thu thập hay bán văn bản, mật khẩu hay thông tin liên hệ bạn mã hóa.",
          "Chúng tôi tuân thủ nghiêm ngặt các quy định bảo mật dữ liệu quốc tế, bao gồm GDPR và CCPA."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Kiến trúc quyền riêng tư bằng mật mã và chính sách chủ quyền dữ liệu của chúng tôi",
      "paragraphs": [
        "Quyền riêng tư không phải là một tính năng chúng tôi gắn thêm — nó là hình dạng của toàn bộ hệ thống. Hầu hết nền tảng SaaS thương mại thu thập dữ liệu, theo dõi địa chỉ IP và âm thầm bán những gì bạn duyệt. Dịch vụ này được xây dựng trên tiền đề ngược lại: không biết gì cả, và dữ liệu của bạn vẫn thuộc về bạn.",
        "Tạo một mã ở đây và mọi bước đều diễn ra trong trình duyệt của bạn. Mã hóa Reed-Solomon, rasterization ma trận, kết xuất vector — tất cả chạy cục bộ trong bộ nhớ thông qua JavaScript và WebAssembly. URL, văn bản, liên hệ vCard, mật khẩu WiFi và logo đã tải lên của bạn không bao giờ đi qua mạng và không bao giờ đổ vào cơ sở dữ liệu, vì không có cơ sở dữ liệu và không có lệnh gọi mạng.",
        "Chính sách này nêu rõ các tiêu chuẩn kỹ thuật đằng sau điều đó, các cam kết không theo dõi, và cách toàn bộ thiết kế phù hợp với GDPR, CCPA và các khung quyền riêng tư của ISO/IEC."
      ]
    },
    "comparisonTable": {
      "title": "Kiến trúc quyền riêng tư của QR Generator Online so với các nền tảng QR SaaS truyền thống",
      "headers": [
        "Chỉ số quyền riêng tư và dữ liệu",
        "QR Generator Online (không biết gì)",
        "Nền tảng QR thương mại truyền thống"
      ],
      "rows": [
        [
          "Vị trí xử lý dữ liệu",
          "100% phía máy khách (trong bộ nhớ trình duyệt của bạn)",
          "Cơ sở dữ liệu máy chủ bên ngoài tập trung"
        ],
        [
          "Ghi nhật ký URL đích",
          "Không ghi nhật ký (chúng tôi không bao giờ thấy URL đích của bạn)",
          "Ghi và lưu trữ đầy đủ URL đích trên đám mây"
        ],
        [
          "Theo dõi địa chỉ IP khách truy cập",
          "Không theo dõi IP (liên kết tĩnh mã hóa trực tiếp)",
          "Theo dõi và ghi nhật ký địa chỉ IP của mọi người quét"
        ],
        [
          "Truyền mật khẩu WiFi",
          "Không bao giờ truyền qua mạng (rủi ro bằng không)",
          "Lưu dạng văn bản thuần hoặc trong cơ sở dữ liệu đám mây"
        ],
        [
          "Thu thập tài khoản và email người dùng",
          "Không yêu cầu tài khoản, email hay đăng ký",
          "Bắt buộc tạo tài khoản và email tiếp thị"
        ],
        [
          "Kiếm tiền từ dữ liệu bên thứ ba",
          "Không bán dữ liệu hay chia sẻ với môi giới quảng cáo",
          "Thường kiếm tiền từ phân tích lượt quét tổng hợp"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Xử lý phía máy khách cục bộ trong trình duyệt web",
        "description": "Bất cứ thứ gì bạn gõ — URL, mật khẩu, vCard — được xử lý hoàn toàn trong bộ nhớ trình duyệt của bạn, không có lệnh API nào gửi đi tới máy chủ."
      },
      {
        "number": 2,
        "title": "Không lưu trữ đám mây và không ghi nhật ký cơ sở dữ liệu",
        "description": "Không có cơ sở dữ liệu phía chúng tôi lưu mã, logo đã tải lên hay liên kết đích của bạn. Không giữ gì vì không gửi gì đi."
      },
      {
        "number": 3,
        "title": "Mã hóa tĩnh trực tiếp để chủ quyền bền vững",
        "description": "Mã đã in trỏ thẳng đến đích của bạn, không có proxy bên thứ ba nào ở giữa để ghi nhật ký hay chặn lượt quét."
      }
    ],
    "features": [
      {
        "title": "Thực thi mật mã 100% phía máy khách",
        "description": "Việc tạo mã chạy trong bộ nhớ trình duyệt, và đó là điều giữ dữ liệu nhập của bạn bí mật — chúng không có nơi nào khác để đi."
      },
      {
        "title": "Tuân thủ đầy đủ GDPR và CCPA ngay từ thiết kế",
        "description": "Không thu thập thông tin cá nhân nào là con đường đơn giản nhất có thể để tuân thủ, và đó là con đường chúng tôi đã chọn."
      },
      {
        "title": "Không theo dõi người quét hay người dùng cuối",
        "description": "Những người quét mã của bạn đến thẳng trang web của bạn. Không có bước theo dõi nào, không có cookie nào được gắn lên họ trên đường đi."
      },
      {
        "title": "Không tạo tài khoản và không thu thập email",
        "description": "Tạo và tải xuống bao nhiêu tùy thích một cách ẩn danh — không có đăng ký ngay từ đầu."
      }
    ],
    "sizingMatrix": {
      "title": "Phân tích luồng dữ liệu và bảo mật truyền tải",
      "description": "Xác minh kỹ thuật về cách dữ liệu được xử lý qua từng loại trình tạo QR trên QR Generator Online.",
      "headers": [
        "Loại trình tạo QR",
        "Phạm vi dữ liệu đầu vào",
        "Phương pháp xử lý",
        "Trạng thái lưu trữ trên máy chủ"
      ],
      "rows": [
        [
          "Trình tạo QR URL",
          "Địa chỉ web đích và UTM",
          "Biên dịch UTF-8 phía máy khách",
          "0 byte lưu trữ (không truyền lên máy chủ)"
        ],
        [
          "Trình tạo QR WiFi",
          "SSID và mật khẩu WPA2/WPA3",
          "Mã hóa chuỗi WIFI: phía máy khách",
          "0 byte lưu trữ (không bao giờ rời trình duyệt)"
        ],
        [
          "Trình tạo QR vCard",
          "Tên, số điện thoại, email, địa chỉ",
          "Phân tích RFC 6350 phía máy khách",
          "0 byte lưu trữ (không thu thập danh bạ)"
        ],
        [
          "WhatsApp / SMS / điện thoại",
          "Số điện thoại và nội dung tin nhắn",
          "Tổng hợp chuỗi URI phía máy khách",
          "0 byte lưu trữ (không ghi nhật ký liên hệ)"
        ],
        [
          "Trình tạo QR tiền mã hóa",
          "Địa chỉ ví nhận công khai",
          "Tổng hợp URI BIP-0021 phía máy khách",
          "0 byte lưu trữ (không bao giờ chạm khóa riêng)"
        ],
        [
          "Tải lên logo và hình ảnh",
          "Hình ảnh thương hiệu PNG, SVG, JPEG",
          "Kết xuất HTML5 Canvas phía máy khách",
          "0 byte lưu trữ (không tải hình lên)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Y tế và bảo mật bệnh nhân (HIPAA)",
        "description": "Tạo mã tiếp nhận bệnh nhân và liên kết phòng khám mà không có rủi ro thông tin sức khỏe được bảo vệ đi tới máy chủ nào."
      },
      {
        "title": "Bảo mật pháp lý và doanh nghiệp",
        "description": "Tạo liên kết nội bộ cho cuộc họp hội đồng quản trị hay tài liệu tố tụng trong khi giữ đầy đủ chủ quyền dữ liệu doanh nghiệp."
      },
      {
        "title": "Cơ sở chính phủ và nhà thầu quốc phòng",
        "description": "Phát thẻ WiFi cho khách bên trong một cơ sở an ninh mà không để thông tin xác thực mật nào rời khỏi phòng."
      },
      {
        "title": "Dịch vụ tài chính và chuyển tiền tiền mã hóa",
        "description": "Xây mã thanh toán blockchain khi biết địa chỉ ví và số tiền chỉ nằm nghiêm ngặt trên thiết bị của bạn."
      },
      {
        "title": "Tiếp thị thương hiệu tiêu dùng và xây dựng niềm tin",
        "description": "Nói với khách hàng quan tâm quyền riêng tư, một cách trung thực, rằng quét mã chiến dịch của bạn sẽ không theo dõi họ đang ở đâu."
      }
    ],
    "troubleshooting": {
      "title": "Cách xác minh quyền riêng tư phía máy khách trong trình duyệt của bạn",
      "points": [
        "Theo dõi tab mạng. Mở Công cụ dành cho nhà phát triển (F12) và xem Network trong khi tạo mã hoặc tải logo. Không có gì đi ra — không có POST hay GET nào mang dữ liệu của bạn.",
        "Rút phích cắm. Tải trang, ngắt WiFi và di động, rồi tạo mã. Nó hiện ra ngay lập tức, ngoại tuyến, điều chỉ có thể xảy ra khi mọi thứ chạy trong trình duyệt của bạn.",
        "Giải mã mã của chính bạn. Đọc mã URL đã tạo bằng bất kỳ ứng dụng quét nào. Văn bản được giải mã chính xác là URL của bạn, không có tên miền chuyển hướng nào bọc quanh nó.",
        "Tìm trình theo dõi. Các trang trình tạo không tải pixel theo dõi hành vi hay script của nhà môi giới dữ liệu.",
        "Đóng tab. Vì dữ liệu nằm trong bộ nhớ dễ bay hơi, đóng tab sẽ xóa sạch mọi thứ bạn đã nhập."
      ]
    },
    "faqs": [
      {
        "q": "QR Generator Online có lưu URL, mật khẩu hay chi tiết liên hệ của tôi không?",
        "a": "Không gì bạn nhập được lưu. Việc tạo mã diễn ra hoàn toàn trong bộ nhớ trình duyệt của bạn, nên không phần nào của nó từng được truyền đi hay giữ lại trên máy chủ."
      },
      {
        "q": "Các bạn có theo dõi có bao nhiêu người quét mã QR của tôi không?",
        "a": "Chúng tôi không thể, và theo thiết kế là không. Mã tĩnh liên kết thẳng tới đích của bạn không có máy chủ chuyển hướng ở giữa, nên không có điểm nào mà lượt quét có thể được đếm hay ghi lại."
      },
      {
        "q": "QR Generator Online có tuân thủ quy định GDPR và CCPA không?",
        "a": "Hoàn toàn. Không có thông tin cá nhân nào được thu thập, lưu trữ hay xử lý — và địa chỉ IP của người quét không được ghi lại — nên không có gì để các quy định đó đánh dấu."
      },
      {
        "q": "Hình logo tôi tải lên có được lưu trên máy chủ web của bạn không?",
        "a": "Chúng không được tải lên chút nào. Logo được ghép cục bộ qua API HTML5 Canvas trong trình duyệt của bạn, nên hình ảnh không bao giờ đến máy chủ bên ngoài."
      },
      {
        "q": "Tạo mã QR WiFi chứa mật khẩu router của tôi có an toàn không?",
        "a": "Có. Tên mạng và mật khẩu được lắp ráp cục bộ và ghi trực tiếp vào mẫu mã vạch. Không cái nào trong số đó từng được gửi qua internet."
      },
      {
        "q": "Các bạn có bán dữ liệu người dùng cho nhà quảng cáo bên thứ ba hay nhà môi giới dữ liệu không?",
        "a": "Không có gì để bán. Không tồn tại cơ sở dữ liệu người dùng, hồ sơ tài khoản hay bản ghi theo dõi nào để giao cho bất kỳ ai."
      },
      {
        "q": "Các bạn có dùng cookie trên QR Generator Online không?",
        "a": "Chỉ loại kỹ thuật tối thiểu cần để trang hoạt động. Không sử dụng cookie quảng cáo hành vi của bên thứ ba."
      },
      {
        "q": "Tôi có thể liên hệ ai về các câu hỏi quyền riêng tư?",
        "a": "Đội bảo vệ dữ liệu trả lời trực tiếp các câu hỏi về quyền riêng tư và tuân thủ tại support@qr-generator.online."
      }
    ],
    "bestPractices": "Bạn có thể tạo mã tự do ở đây mà không phải lo lắng gì — quy trình diễn ra phía máy khách từ đầu đến cuối và không phụ thuộc vào bất kỳ máy chủ bên thứ ba nào."
  },
  '/terms': {
    "sections": [
      {
        "title": "Điều khoản sử dụng hợp lý và phân phối thương mại",
        "paragraphs": [
          "Các mã QR tĩnh được tạo qua QR Generator Online có thể được sử dụng tự do cho cả mục đích cá nhân và thương mại trên các phương tiện in ấn và kỹ thuật số.",
          "Người dùng chịu trách nhiệm đảm bảo nội dung được mã hóa tuân thủ các tiêu chuẩn pháp lý hiện hành."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Điều khoản dịch vụ, cấp phép thương mại và khung sử dụng",
      "paragraphs": [
        "Sử dụng QR Generator Online có nghĩa là đồng ý với Điều khoản dịch vụ, thỏa thuận cấp phép thương mại và chính sách sử dụng hợp lệ được nêu dưới đây.",
        "Nền tảng tạo mã vạch 2D theo tiêu chuẩn ISO/IEC 18004, phía máy khách và miễn phí. Bất cứ thứ gì bạn tạo đi kèm quyền đầy đủ, không hạn chế, không tiền bản quyền cho cả sử dụng thương mại lẫn cá nhân, được trao cho bạn vĩnh viễn — không cần mua giấy phép riêng sau này.",
        "Các phần tiếp theo bao gồm sở hữu trí tuệ, sử dụng hợp lệ, giới hạn trách nhiệm và tuyên bố miễn trừ liên quan đến sản xuất in thương mại. Đáng đọc trước một lô lớn."
      ]
    },
    "comparisonTable": {
      "title": "Tóm tắt điều khoản cấp phép thương mại",
      "headers": [
        "Hạng mục cấp phép",
        "Điều khoản và quyền trên QR Generator Online",
        "Dịch vụ mã vạch thương mại truyền thống"
      ],
      "rows": [
        [
          "Quyền sử dụng thương mại",
          "Quyền thương mại 100% không hạn chế, không tiền bản quyền",
          "Yêu cầu gói cấp phép thương mại trả phí ($300+/năm)"
        ],
        [
          "Phí bản quyền / phí quét",
          "0,00 USD (không tiền bản quyền hay phí theo lượt quét)",
          "Phí vượt mức khi lượt quét vượt giới hạn hàng tháng"
        ],
        [
          "Quyền sở hữu trí tuệ",
          "Bạn sở hữu 100% tác phẩm và dữ liệu mã QR đã tạo",
          "Nền tảng giữ quyền hoặc khẳng định chuyển hướng độc quyền"
        ],
        [
          "Phạm vi tái bản in",
          "Không hạn chế (bao bì, sách, biển quảng cáo, truyền hình)",
          "Bị giới hạn theo lượng in hoặc giới hạn gói"
        ],
        [
          "Rủi ro hủy tài khoản",
          "Rủi ro bằng không (mã tĩnh có hiệu lực vĩnh viễn)",
          "Mã bị vô hiệu nếu hủy đăng ký"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Tạo tác phẩm mã QR tùy chỉnh của bạn",
        "description": "Xây mã bằng bất kỳ trình tạo nào ở đây, bao gồm cả kiểu dáng và logo."
      },
      {
        "number": 2,
        "title": "Có ngay giấy phép thương mại toàn cầu",
        "description": "Ngay khi mã được tạo, bạn có giấy phép vĩnh viễn, không tiền bản quyền, toàn cầu để sử dụng trên bất kỳ phương tiện nào, vật lý hoặc kỹ thuật số."
      },
      {
        "number": 3,
        "title": "Triển khai trên sản phẩm và chiến dịch thương mại",
        "description": "Đặt lên bao bì, quảng cáo truyền hình, kệ bán lẻ hay chiến dịch quảng cáo. Không có phí cấp phép nào gắn với bất kỳ điều nào trong số đó."
      }
    ],
    "features": [
      {
        "title": "Giấy phép thương mại vĩnh viễn không tiền bản quyền",
        "description": "Sử dụng mã trên sản phẩm, sách, bao bì và phương tiện kỹ thuật số trên toàn thế giới mà không có khoản phí định kỳ nào."
      },
      {
        "title": "Sở hữu đầy đủ tài sản đã tạo",
        "description": "Thiết kế mã vạch và mọi tác phẩm tùy chỉnh bên trong nó là của riêng bạn."
      },
      {
        "title": "Không ràng buộc nhà cung cấp hay phụ thuộc dịch vụ",
        "description": "Mã mã hóa trực tiếp tĩnh không phụ thuộc vào chúng tôi. Một thay đổi chính sách trong tương lai không thể quay ngược lại làm hỏng thứ bạn đã in."
      },
      {
        "title": "Tuyên bố minh bạch về chất lượng tiền in",
        "description": "Hướng dẫn rõ ràng về kiểm thử bản in trước khi chạy in, không có gì chôn trong chữ nhỏ."
      }
    ],
    "sizingMatrix": {
      "title": "Các trường hợp sử dụng thương mại được phép và ứng dụng",
      "description": "Tổng quan đầy đủ về các ứng dụng thương mại được phép trên QR Generator Online.",
      "headers": [
        "Ứng dụng thương mại",
        "Tình trạng cấp phép",
        "Phạm vi được phép",
        "Tiền bản quyền yêu cầu"
      ],
      "rows": [
        [
          "Bao bì sản phẩm bán lẻ và nhãn thực phẩm",
          "Được phép vĩnh viễn",
          "Phân phối đơn vị toàn cầu không giới hạn",
          "0,00 USD (không)"
        ],
        [
          "Quảng cáo truyền hình và streaming thương mại",
          "Được phép vĩnh viễn",
          "Phát sóng và truyền thông streaming toàn cầu",
          "0,00 USD (không)"
        ],
        [
          "Sách, tạp chí và ấn phẩm in",
          "Được phép vĩnh viễn",
          "Lưu hành in toàn cầu không giới hạn",
          "0,00 USD (không)"
        ],
        [
          "Biển quảng cáo ngoài trời và quảng cáo phương tiện công cộng",
          "Được phép vĩnh viễn",
          "Chiến dịch ngoài trời quốc gia và quốc tế",
          "0,00 USD (không)"
        ],
        [
          "Văn phòng phẩm doanh nghiệp và danh thiếp thông minh",
          "Được phép vĩnh viễn",
          "Phân phối không giới hạn cho nhân viên",
          "0,00 USD (không)"
        ],
        [
          "Phần mềm, ứng dụng di động và giao diện web",
          "Được phép vĩnh viễn",
          "Nhúng vào SaaS, web và ứng dụng di động",
          "0,00 USD (không)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Nhà sản xuất hàng tiêu dùng và nhà bán lẻ",
        "description": "In mã vector vĩnh viễn lên hàng triệu thùng và chai với sự chắc chắn pháp lý và không có tiền bản quyền phải theo dõi."
      },
      {
        "title": "Nhà xuất bản và nhà sách giáo dục",
        "description": "Đưa mã quét được vào sách giáo khoa, tiểu thuyết và phiếu bài tập theo quyền in ấn vĩnh viễn."
      },
      {
        "title": "Agency quảng cáo và truyền thông quốc gia",
        "description": "Chạy quảng cáo truyền hình, trang tạp chí và chiến dịch biển quảng cáo mà không có rủi ro cấp phép treo lơ lửng."
      },
      {
        "title": "Nhượng quyền khách sạn và chuỗi nhà hàng",
        "description": "Chuẩn hóa mã thực đơn kỹ thuật số và thanh toán tại bàn trên hàng trăm địa điểm."
      },
      {
        "title": "Nhà sáng tạo, nghệ sĩ và tác giả độc lập",
        "description": "Thêm mã thương hiệu vào bản in nghệ thuật, hàng hóa hay sách tự xuất bản mà không có rào cản ngân sách."
      }
    ],
    "troubleshooting": {
      "title": "Chính sách sử dụng hợp lệ và tuyên bố miễn trừ in ấn preflight",
      "points": [
        "Không có nội dung độc hại. Mã không được liên kết tới các trang lừa đảo, phần mềm độc hại, lừa đảo hay tài liệu bất hợp pháp.",
        "Kiểm tra trước khi in. Quét thử một bản in trước khi chạy số lượng lớn là trách nhiệm của bạn, và đó là cách tốt nhất để tránh in lại tốn kém.",
        "Giữ đích luôn hoạt động. Bạn chịu trách nhiệm đảm bảo URL mà mã trỏ tới vẫn trực tuyến và truy cập được.",
        "Tôn trọng thương hiệu. Chỉ nhúng logo mà bạn thực sự có quyền sử dụng.",
        "Dịch vụ được cung cấp \"nguyên trạng\". Chúng tôi tuân thủ ISO/IEC 18004, nhưng không thể bảo đảm hiệu chuẩn máy in của bên thứ ba, nên bản duyệt cuối cùng là việc của bạn kiểm tra."
      ]
    },
    "faqs": [
      {
        "q": "Tôi có thể dùng mã QR tạo trên QR Generator Online cho sản phẩm thương mại không?",
        "a": "Tự do và trên toàn thế giới. Bạn có đầy đủ quyền, không hạn chế, không tiền bản quyền để đặt chúng lên bao bì, sách, kệ bán lẻ và phương tiện kỹ thuật số."
      },
      {
        "q": "Tôi có nợ tiền bản quyền hay phí theo lượt quét khi doanh nghiệp tôi lớn lên không?",
        "a": "Không một xu nào. Mỗi mã đều miễn phí, không tiền bản quyền, không giới hạn quét và không có phí nào tăng theo khối lượng của bạn."
      },
      {
        "q": "Ai sở hữu quyền sở hữu trí tuệ của mã QR đã tạo?",
        "a": "Bạn — mã vạch và bất kỳ logo hay văn bản nào được nhúng vào đó hoàn toàn thuộc về bạn."
      },
      {
        "q": "Tôi có thể tạo mã QR cho khách hàng thiết kế và tính phí họ không?",
        "a": "Chắc chắn. Agency, freelancer và nhà tư vấn được hoan nghênh tạo mã cho các công việc khách hàng có thu phí."
      },
      {
        "q": "Điều gì xảy ra nếu QR Generator Online thay đổi trong tương lai?",
        "a": "Bất cứ thứ gì bạn đã tải về vẫn tiếp tục hoạt động. Một mã tĩnh giữ dữ liệu trong chính ma trận, không phụ thuộc vào máy chủ của chúng tôi — nên tương lai của chúng tôi không ảnh hưởng đến mã đã in của bạn."
      },
      {
        "q": "Có hạn chế nào về nội dung tôi có thể mã hóa không?",
        "a": "Chỉ những hạn chế hiển nhiên: không phần mềm độc hại, lừa đảo, gian lận hay tài liệu bất hợp pháp, như chính sách sử dụng hợp lệ nêu rõ."
      },
      {
        "q": "Giới hạn trách nhiệm của bạn liên quan đến các đợt in thương mại là gì?",
        "a": "Như thông lệ với phần mềm, các công cụ được cung cấp \"nguyên trạng\". Quét một bản in thử trước khi duyệt một đơn hàng thương mại lớn — kiểm tra đó chính là biện pháp bảo vệ của bạn."
      },
      {
        "q": "Tôi liên hệ đội pháp lý hoặc cấp phép của các bạn bằng cách nào?",
        "a": "Các câu hỏi về pháp lý và cấp phép gửi tới support@qr-generator.online."
      }
    ],
    "bestPractices": "Quét một bản in thử trước khi duyệt đợt số lượng lớn, và giữ các URL đích của bạn hoạt động — một mã chỉ tốt bằng trang nó trỏ tới."
  },
  '/blog': {
    "sections": [
      {
        "title": "Hướng dẫn QR thực tiễn để phát triển doanh nghiệp",
        "paragraphs": [
          "Khám phá thư viện hướng dẫn chi tiết của chúng tôi, bao gồm tối ưu thực đơn nhà hàng, công thức kích thước in tối thiểu, tạo khách hàng tiềm năng từ biển bất động sản và thiết lập WiFi cho khách trong ngành khách sạn.",
          "Tìm hiểu cách các thương hiệu hiện đại tận dụng công nghệ QR để đưa tương tác từ ngoại tuyến sang trực tuyến."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Bách khoa toàn thư và sổ tay thực hành về công nghệ QR hiện đại",
      "paragraphs": [
        "Đây là trung tâm tri thức của QR Generator Online — nơi bạn nhận được câu trả lời rõ ràng về kỹ thuật mã vạch, marketing QR di động, tiêu chuẩn in thương mại và chia sẻ danh thiếp. Mã QR chạy theo tiêu chuẩn ISO/IEC 18004, và trong hơn hai mươi năm đã đi từ theo dõi linh kiện xe hơi trên dây chuyền lắp ráp đến trở thành cầu nối giữa một trang in và dịch vụ đám mây, một khoản thanh toán hay một trang di động.",
        "Dù bạn là người quản lý thương hiệu đang ra mắt bao bì bán lẻ, chủ nhà hàng đang tinh giản gọi món tại bàn, nhà thiết kế preflight đang vật lộn với lề tràn, hay kỹ sư đang nối một lược đồ URI — các hướng dẫn ở đây cung cấp công thức thực sự, chi tiết giao thức và quy trình làm việc, chứ không phải lớp bóng bẩy của marketing.",
        "Các hướng dẫn chuyên sâu bên dưới bao quát vật lý kích thước, toán sửa lỗi, khía cạnh quyền riêng tư và chiến thuật chuyển đổi."
      ]
    },
    "comparisonTable": {
      "title": "Tổng quan các hướng dẫn mã QR cốt lõi và ứng dụng theo ngành",
      "headers": [
        "Ngành / lĩnh vực",
        "Trọng tâm chính",
        "Tiêu chuẩn kỹ thuật chính",
        "Lợi ích thương mại chính"
      ],
      "rows": [
        [
          "Khách sạn và ẩm thực",
          "Thực đơn PDF kỹ thuật số không chạm và gọi món tại bàn",
          "HTTPS, liên kết toàn cầu, viewport responsive",
          "Không chi phí in, tăng 25% vòng quay bàn"
        ],
        [
          "Sản xuất in thương mại",
          "Vật lý kích thước, chuẩn DPI và tỷ lệ tương phản",
          "ISO/IEC 18004, tương phản WCAG 2.1 (> 4,5:1), SVG/EPS",
          "Độ tin cậy quét ngay lần đầu 100% trên mọi chất liệu"
        ],
        [
          "Doanh nghiệp và kết nối",
          "Danh thiếp kỹ thuật số vCard 3.0",
          "RFC 2426, RFC 6350, mã hóa UTF-8",
          "Giữ liên hệ cao hơn 88%, lưu địa chỉ bằng một chạm"
        ],
        [
          "Tiếp thị bất động sản",
          "Biển bán nhà, tour 3D ảo và yêu cầu về danh sách",
          "Liên kết Matterport 3D, theo dõi UTM, in độ phân giải cao",
          "Tạo khách hàng tiềm năng 24/7 từ người mua lái xe ngang qua"
        ],
        [
          "Quản lý WiFi cho khách",
          "Truy cập mạng WPA3/WPA2 không cản trở",
          "Lược đồ URI WIFI:, chuẩn IEEE 802.11ax/ac",
          "Không có mật khẩu gõ sai, giảm tải hỗ trợ nhân viên"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Chọn giao thức tối ưu cho trường hợp sử dụng của bạn",
        "description": "Xác định trước công việc cần gì — một liên kết web tĩnh (HTTPS), một thẻ liên hệ (vCard), WiFi tức thì (WIFI:), hay tin nhắn trực tiếp (WhatsApp/SMS). Giao thức quyết định mọi thứ sau đó."
      },
      {
        "number": 2,
        "title": "Áp dụng quy tắc kích thước và tương phản bằng toán học",
        "description": "Đặt kích thước mã theo S = D / 10 với khoảng cách mọi người sẽ quét, và giữ tương phản trên 4,5:1."
      },
      {
        "number": 3,
        "title": "Xuất tệp vector không mất dữ liệu và kiểm tra bản in thật",
        "description": "Xuất SVG vector cho mọi thứ sẽ in, rồi quét bản in thử trên vài iPhone và Android trước khi gửi đi."
      }
    ],
    "features": [
      {
        "title": "Phân tích giao thức kỹ thuật chuyên sâu",
        "description": "Chi tiết RFC và ISO đằng sau việc tạo mã vạch 2D và cách camera điện thoại phân tích chúng — được giải thích rõ, không lướt qua."
      },
      {
        "title": "Công thức sản xuất in ấn thực tế",
        "description": "Phương trình kích thước thực, tiêu chuẩn sửa lỗi và lời khuyên về nền in mà một công việc in thực sự cần."
      },
      {
        "title": "Nghiên cứu điển hình ROI đa ngành",
        "description": "Sổ tay thực tiễn cho khách sạn, in thương mại, kết nối doanh nghiệp, bất động sản và chăm sóc sức khỏe."
      },
      {
        "title": "Kiến thức miễn phí 100% và truy cập mở",
        "description": "Hướng dẫn miễn phí, mẫu vector và hướng dẫn chuyên gia — không rào thanh toán, không đăng ký."
      }
    ],
    "sizingMatrix": {
      "title": "Bảng tra cứu chính về kích thước quang học và khoảng cách xem",
      "description": "Hướng dẫn tra nhanh để tính kích thước tối thiểu của mã QR trên mọi phương tiện vật lý.",
      "headers": [
        "Phương tiện vật lý",
        "Khoảng cách quét thông thường",
        "Chiều rộng tối thiểu (S)",
        "Sửa lỗi khuyến nghị"
      ],
      "rows": [
        [
          "Danh thiếp và thẻ đeo",
          "15 cm - 30 cm (6\" - 12\")",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "Mức Q (25%) hoặc mức H (30%)"
        ],
        [
          "Thẻ để bàn và lót ly",
          "30 cm - 50 cm (12\" - 20\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Mức M (15%) hoặc mức H (30%)"
        ],
        [
          "Bao bì sản phẩm và nhãn",
          "20 cm - 40 cm (8\" - 16\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Mức H (30%) nếu có logo"
        ],
        [
          "Tờ rơi, áp phích và tạp chí",
          "50 cm - 150 cm (20\" - 60\")",
          "60 mm - 150 mm (2,4\" - 6,0\")",
          "Mức M (15%)"
        ],
        [
          "Đội xe và xe van",
          "3,0 m - 6,0 m (10 ft - 20 ft)",
          "300 mm x 300 mm (12\" x 12\")",
          "Mức H (30%) trên vinyl đúc"
        ],
        [
          "Biển quảng cáo đường cao tốc",
          "15,0 m - 30,0 m (50 ft - 100 ft)",
          "1500 mm - 3000 mm (5 ft - 10 ft)",
          "Mức L (7%) hoặc mức M (15%)"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Đội marketing đa kênh doanh nghiệp",
        "description": "Chuẩn hóa thiết kế QR, theo dõi chiến dịch UTM và đầu ra vector preflight trên các bộ phận marketing toàn cầu."
      },
      {
        "title": "Nhà in thương mại và nhà preflight",
        "description": "Kiểm tra tác phẩm của khách hàng so với ISO/IEC 18004, ngưỡng 300+ DPI và giới hạn tương phản trước khi chạy máy."
      },
      {
        "title": "Nhà điều hành khách sạn và chuỗi nhà hàng",
        "description": "Triển khai thực đơn không chạm và gọi món tại bàn giúp giảm chi phí nhân sự và tăng tốc vòng quay bàn."
      },
      {
        "title": "Môi giới bất động sản và quản lý tài sản",
        "description": "Biến một biển hay tờ rơi thành nguồn khách hàng tiềm năng đo lường được 24/7 và trung tâm tour 3D."
      },
      {
        "title": "Ban tổ chức sự kiện và điều phối hội chợ",
        "description": "Tăng tốc check-in, thêm phiên vào lịch người tham dự, trao đổi thẻ kỹ thuật số và ghi nhận lưu lượng nhà tài trợ."
      }
    ],
    "troubleshooting": {
      "title": "5 lỗi sản xuất mã QR phổ biến nhất",
      "points": [
        "Tương phản yếu. Các module nhạt trên giấy nhạt đánh bại camera. Giữ 4,5:1 hoặc cao hơn.",
        "Vùng yên tĩnh bị cắt. Cắt lề quá sát và máy quét không tìm được ranh giới mã.",
        "Bitmap 72 DPI. Ảnh chụp web độ phân giải thấp làm nhòe cạnh module khi in. Cung cấp SVG vector hoặc raster 300+ DPI.",
        "URL quá dài. Liên kết 250 ký tự tạo ra các chấm siêu nhỏ bị lem khi in nhỏ. Hãy rút ngắn lại.",
        "Chói bóng. Lớp phủ bóng hắt đèn chiếu vào ống kính. Chọn mờ hoặc satin."
      ]
    },
    "faqs": [
      {
        "q": "Mục đích của trung tâm tri thức QR Generator Online là gì?",
        "a": "Nó tồn tại để cung cấp cho doanh nghiệp, nhà thiết kế và nhà phát triển các hướng dẫn kỹ thuật, công thức và nghiên cứu điển hình cần thiết để đưa mã QR thực sự quét được ra thị trường — chiều sâu mà bạn nếu không sẽ phải ghép từ hàng chục nguồn."
      },
      {
        "q": "Các hướng dẫn và bài học trên blog này có hoàn toàn miễn phí không?",
        "a": "Mọi hướng dẫn, chuẩn và công cụ vector ở đây đều miễn phí và mở — không rào thanh toán, không tài khoản."
      },
      {
        "q": "Bạn cập nhật các hướng dẫn công nghệ QR bao lâu một lần?",
        "a": "Các bài viết được sửa khi bộ giải mã camera iOS và Android thay đổi, khi tiêu chuẩn ISO chuyển động và khi thực tiễn marketing di động thay đổi."
      },
      {
        "q": "Tôi có thể yêu cầu một hướng dẫn hay bài học tùy chỉnh về một chủ đề QR cụ thể không?",
        "a": "Gửi chủ đề qua trang Liên hệ và đội biên tập sẽ xem xét."
      },
      {
        "q": "Các hướng dẫn của bạn có bao quát cả kiến trúc mã QR tĩnh và động không?",
        "a": "Có — bao gồm phân tích đầy đủ các đánh đổi giữa mã tĩnh không phụ thuộc và chuyển hướng động."
      },
      {
        "q": "Tôi có thể tìm hướng dẫn kích thước cụ thể cho dự án in của mình ở đâu?",
        "a": "\"Hướng dẫn đầy đủ về in mã QR\" có bảng kích thước, lời khuyên về nền in và công thức DPI đúng cho việc đó."
      },
      {
        "q": "Làm sao để đảm bảo mã QR của tôi tuân thủ quy định quyền riêng tư trên di động?",
        "a": "Các hướng dẫn dựa vào việc tạo mã tĩnh phía máy khách, xử lý mọi thứ trong bộ nhớ trình duyệt — không ghi IP khách truy cập, không theo dõi phân tích, nên có rất ít thứ để quy định về quyền riêng tư đánh dấu."
      },
      {
        "q": "Tôi có thể chia sẻ các bài viết và tài nguyên này với đội của mình không?",
        "a": "Hãy chia sẻ — đồng nghiệp, đội marketing, agency và bộ phận preflight chính là đối tượng được nhắm đến."
      }
    ],
    "bestPractices": "Đánh dấu trung tâm này để tra cứu công thức kích thước, chuẩn tương phản và danh sách kiểm tra trước khi in — đó là những thứ đáng kiểm tra trước khi bất kỳ công việc in thương mại nào được phát hành."
  },
  '/blog/qr-codes-for-restaurants': {
    "sections": [
      {
        "title": "Chuyển sang thực đơn kỹ thuật số không chạm",
        "paragraphs": [
          "Trong ngành khách sạn hiện đại, tốc độ và độ chính xác của dịch vụ là thiết yếu. Thực đơn QR kỹ thuật số trên thẻ để bàn cho phép khách xem các lựa chọn đồ ăn và thức uống cập nhật ngay khi vừa ngồi xuống.",
          "Nhà hàng cắt giảm chi phí in lại mỗi khi giá thay đổi, đồng thời làm nổi bật các món đặc biệt theo mùa và món có biên lợi nhuận cao."
        ]
      },
      {
        "title": "Cách thiết lập thực đơn mã QR cho nhà hàng của bạn",
        "paragraphs": [
          "Bắt đầu chỉ mất chưa đến năm phút. Tải lên thực đơn PDF hiện có hoặc liên kết trang đặt món trực tuyến của bạn, rồi tạo mã QR có thương hiệu với logo nhà hàng ở giữa. In lên thẻ để bàn laminate bền, decal cửa sổ hoặc chân biên lai.",
          "Các nghiên cứu cho thấy nhà hàng dùng thực đơn QR kỹ thuật số ghi nhận mức tăng trung bình 15% giá trị đơn hàng trung bình, vì khách khám phá toàn bộ thực đơn theo nhịp của riêng họ thay vì phụ thuộc vào các món đặc biệt được nói miệng. Cập nhật món, giá hay ưu đãi theo mùa là tức thì — không cần in lại. Ghép mỗi mã QR với một lời kêu gọi hành động ngắn như \"Quét để xem toàn bộ thực đơn hôm nay\" để có kết quả tốt nhất."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hướng dẫn toàn diện về thực đơn mã QR và vận hành ăn uống không chạm",
      "paragraphs": [
        "Thực đơn QR bắt đầu như một giải pháp tạm thời trong đại dịch và ở lại như một tiêu chuẩn vận hành. Nó chạy trên HTTPS thuần: mã đưa trình duyệt điện thoại của khách đến một thực đơn PDF lưu trên đám mây, một cổng đặt món hay một trang thanh toán, không cần tải ứng dụng trước.",
        "Kinh tế học là thứ giữ nó ở lại. Thực đơn kỹ thuật số loại bỏ chi phí in lại định kỳ — thường từ 1.500 đến 4.000 USD mỗi năm cho mỗi địa điểm — cho phép bạn đổi giá hay ưu đãi trong vài giây, giảm lỗi gọi món, và nâng hóa đơn trung bình từ 12% đến 22% khi khách nhìn thấy món ăn và nhận lời gợi ý thêm món.",
        "Không điều nào trong số đó xảy ra nếu phần vật lý chưa được làm đúng. Vị trí đặt, độ bền của thẻ để bàn, ánh sáng và một trang thân thiện với di động quyết định khách ở mọi độ tuổi quét một lần là xong hay bỏ cuộc."
      ]
    },
    "comparisonTable": {
      "title": "Thực đơn mã QR kỹ thuật số so với thực đơn giấy laminate truyền thống",
      "headers": [
        "Yếu tố vận hành",
        "Thực đơn mã QR kỹ thuật số",
        "Thực đơn giấy laminate truyền thống"
      ],
      "rows": [
        [
          "Chi phí in lại hằng năm",
          "0 USD (cập nhật trực tuyến ngay)",
          "1.500 - 4.000+ USD mỗi địa điểm mỗi năm"
        ],
        [
          "Tốc độ cập nhật thực đơn",
          "Thời gian thực (gỡ món đã hết trong vài giây)",
          "Vài ngày đến vài tuần để thiết kế lại và in lại"
        ],
        [
          "Tốc độ luân chuyển bàn",
          "Nhanh hơn 15 - 25 phút mỗi lượt ngồi",
          "Chậm hơn vì phải chờ thực đơn giấy và hóa đơn"
        ],
        [
          "Giá trị đơn hàng trung bình",
          "Cao hơn 12% - 22% (hình ảnh món ăn trực quan)",
          "Chữ tĩnh với khả năng bán thêm hạn chế"
        ],
        [
          "Vệ sinh và sạch sẽ",
          "100% không chạm trên thiết bị riêng của khách",
          "Phải khử trùng sau mỗi lượt khách"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Đưa thực đơn tối ưu cho di động lên mạng",
        "description": "Đăng thực đơn trực tuyến dưới dạng trang responsive nhẹ hoặc PDF nén dưới 3 MB, lưu trên trang của bạn."
      },
      {
        "number": 2,
        "title": "Tạo mã QR có thương hiệu với sửa lỗi mức H",
        "description": "Dán URL thực đơn vào trình tạo, áp dụng màu của bạn, đặt huy hiệu ở giữa với mức H và xuất SVG vector."
      },
      {
        "number": 3,
        "title": "In lên acrylic, gỗ hoặc bìa laminate bền",
        "description": "Làm màn hình để bàn ít nhất 40 mm x 40 mm và giữ bề mặt mờ để đèn trần không làm chói."
      }
    ],
    "features": [
      {
        "title": "Cập nhật thực đơn và giá theo thời gian thực tức thì",
        "description": "Đổi giá, thêm ưu đãi hoặc gỡ món đã hết trực tuyến — mã đã in không bao giờ phải thay đổi."
      },
      {
        "title": "Trải nghiệm khách hàng sạch sẽ và không chạm",
        "description": "Khách đọc thực đơn trên điện thoại của chính họ, không có gì dùng chung giữa các bàn."
      },
      {
        "title": "Hỗ trợ thực đơn kỹ thuật số đa ngôn ngữ",
        "description": "Hướng khách quốc tế đến một thực đơn tự động dịch theo ngôn ngữ trình duyệt của họ."
      },
      {
        "title": "Liên kết tĩnh vĩnh viễn không phí",
        "description": "Mã thực đơn tĩnh luôn có hiệu lực, không giới hạn quét và không phí."
      }
    ],
    "sizingMatrix": {
      "title": "Thông số vị trí và kích thước mã QR trên bàn nhà hàng",
      "description": "Đảm bảo thực khách có thể quét mã thực đơn dễ dàng khi đang ngồi thoải mái tại bàn.",
      "headers": [
        "Vị trí đặt",
        "Khoảng cách quét",
        "Kích thước in khuyến nghị",
        "Vật liệu khuyến nghị"
      ],
      "rows": [
        [
          "Thẻ và khối để bàn ăn",
          "25 cm - 45 cm (10\" - 18\")",
          "40 mm x 40 mm (1,6\" x 1,6\")",
          "Gỗ cứng khắc laser / giá acrylic"
        ],
        [
          "Lót ly đồ uống và mặt quầy bar",
          "20 cm - 35 cm (8\" - 14\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Bìa lót thấm nặng"
        ],
        [
          "Bục tiếp đón và màn hình lối vào",
          "50 cm - 100 cm (20\" - 40\")",
          "80 mm x 80 mm (3,2\" x 3,2\")",
          "Màn hình để quầy có khung / thẻ đỡ"
        ],
        [
          "Decal cửa sổ để xem ngoài giờ",
          "50 cm - 120 cm (20\" - 48\")",
          "100 mm x 100 mm (4,0\" x 4,0\")",
          "Decal cửa sổ vinyl mờ chống thời tiết"
        ],
        [
          "Tờ chèn túi giao hàng mang đi và nhãn dán",
          "20 cm - 35 cm (8\" - 14\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Nhãn dán mờ có keo"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Nhà hàng phục vụ đầy đủ",
        "description": "Một giá có khung ở mỗi bàn ăn giúp khách xem khai vị và cocktail ngay khi ngồi xuống."
      },
      {
        "title": "Quán cà phê phục vụ nhanh và nhà hàng thức ăn nhanh",
        "description": "Một mã áp phích phá hàng chờ cho phép mọi người xem thực đơn khi đang xếp hàng, nên gọi món ở quầy nhanh hơn."
      },
      {
        "title": "Nhà máy bia thủ công và danh sách bia taproom",
        "description": "Một mã lót ly liên kết với danh sách vòi bia trực tiếp giữ thực đơn bia tươi theo mùa luân phiên chính xác đến từng phút."
      },
      {
        "title": "Phục vụ phòng khách sạn và ăn trong phòng",
        "description": "Một thẻ đầu giường thay thế cuốn sổ phòng cũ nát bằng việc gọi phục vụ phòng 24/7."
      },
      {
        "title": "Hộp đêm, lounge và quầy bar hồ bơi",
        "description": "Một bộ đánh dấu acrylic khắc laser chống nước đảm nhiệm việc phục vụ chai và đặt cocktail bên hồ bơi."
      }
    ],
    "troubleshooting": {
      "title": "5 sai lầm lớn nhất phá hỏng trải nghiệm thực đơn QR nhà hàng",
      "points": [
        "PDF nặng. Một tệp 25 MB mất nửa phút trên mạng di động. Nén xuống dưới 2 MB, hoặc liên kết một trang HTML nhanh thay thế.",
        "Chói bóng. Giá acrylic bóng phản chiếu đèn trần vào ống kính. Dùng acrylic mờ chống chói hoặc gỗ tự nhiên.",
        "Vùng chết sóng di động. Tầng hầm và bê tông làm mất dữ liệu di động. Đặt mã WiFi cạnh mã thực đơn.",
        "Bắt buộc dùng ứng dụng. Đừng bao giờ bắt thực khách tải ứng dụng để đọc thực đơn. Dùng liên kết web chuẩn mở trong trình duyệt.",
        "Bố cục chỉ cho máy tính để bàn. Không ai nên phải bấm để phóng to và thu nhỏ. Đặt cỡ chữ thực đơn 16 px hoặc lớn hơn trên di động."
      ]
    },
    "faqs": [
      {
        "q": "Làm sao tạo mã QR miễn phí cho thực đơn nhà hàng của tôi?",
        "a": "Đưa thực đơn lên mạng — một PDF hoặc trang web — sao chép URL công khai, dán vào trình tạo URL, thêm logo và màu của bạn, rồi tải SVG hoặc PNG độ phân giải cao."
      },
      {
        "q": "Mã QR có phải cách tốt để vận hành thực đơn kỹ thuật số cho nhà hàng không?",
        "a": "Đó là cách đơn giản nhất. Lưu thực đơn như một trang web, trỏ mã QR đến nó và đặt mã lên bàn — khi quét, thực đơn kỹ thuật số của bạn mở trên chính điện thoại của thực khách, không cần ứng dụng và không có gì phải phát. Mã động cho phép bạn cập nhật thực đơn kỹ thuật số mà không cần in lại bất cứ thứ gì."
      },
      {
        "q": "Tôi có thể đổi món hay giá trong thực đơn mà không in lại mã QR không?",
        "a": "Miễn là URL vẫn giữ nguyên — yourrestaurant.com/menu — việc sửa trang phía sau sẽ cập nhật thứ mà mọi mã đã in hiển thị. Mã không bao giờ thay đổi."
      },
      {
        "q": "Vật liệu tốt nhất cho giá để bàn mã QR nhà hàng là gì?",
        "a": "Giá acrylic mờ, khối gỗ khắc laser, hoặc bìa cứng laminate 350+ GSM — chúng chịu được đổ vỡ, chống chói và bền."
      },
      {
        "q": "Thực khách lớn tuổi có gặp khó khăn khi quét mã QR thực đơn không?",
        "a": "Điện thoại hiện đại (iOS 11+, Android 9+) đọc mã trực tiếp từ camera mà không cần ứng dụng. Một dòng ngắn như \"Hướng camera vào đây để xem thực đơn\" giúp mọi người dễ dùng hơn."
      },
      {
        "q": "Tôi nên liên kết đến tệp PDF hay trang web responsive?",
        "a": "Trang web responsive là lựa chọn tốt hơn: nó tải nhanh hơn và thích ứng với màn hình. Nếu chọn PDF, hãy nén xuống dưới 2 MB và định dạng theo chiều dọc."
      },
      {
        "q": "Mã QR nhà hàng tạo trên QR Generator Online có hết hạn không?",
        "a": "Chúng có hiệu lực trọn đời, với lượt quét không giới hạn và không phí định kỳ."
      },
      {
        "q": "Tôi có thể đưa logo nhà hàng vào giữa mã QR thực đơn không?",
        "a": "Được. Mức H giữ lại khoảng 30% mã để phục hồi lỗi, đủ dư cho logo hay huy hiệu của bạn ở giữa."
      },
      {
        "q": "Thực đơn QR làm tăng chi tiêu trung bình của khách như thế nào?",
        "a": "Thực đơn kỹ thuật số có thể hiển thị ảnh món ăn thật, gợi ý kết hợp rượu vang hoặc cocktail và nhắc món tráng miệng — điều đó đẩy hóa đơn trung bình lên 12% đến 22%."
      }
    ],
    "bestPractices": "Làm cho trang thực đơn tải dưới hai giây, dùng vật liệu để bàn mờ chống chói và đặt một mã WiFi cho khách ở mọi chỗ sóng di động yếu."
  },
  '/blog/printing-qr-codes-guide': {
    "sections": [
      {
        "title": "Tính kích thước in tối thiểu cho mã QR",
        "paragraphs": [
          "Một công thức đơn giản cho kích thước in là tỷ lệ khoảng cách trên kích thước 10:1. Ví dụ, một áp phích được quét từ 1 mét cần một mã QR có chiều rộng tối thiểu 10 cm.",
          "Luôn giữ lề vùng yên tĩnh 4 module và xuất dạng SVG vector để đầu ra offset và máy in kỹ thuật số hoàn hảo."
        ]
      },
      {
        "title": "Tương phản màu, sửa lỗi và khuyến nghị định dạng",
        "paragraphs": [
          "Luôn giữ tỷ lệ tương phản tối thiểu 4:1 giữa tiền cảnh và nền của mã QR. Tránh in mẫu QR sáng lên nền nhạt — tương phản thấp là nguyên nhân hàng đầu gây lỗi quét trong môi trường in bóng. Dùng sửa lỗi mức H (30% dự phòng dữ liệu) khi nhúng logo để duy trì việc quét đáng tin cậy.",
          "Với in offset thương mại, luôn cung cấp tệp ở định dạng SVG vector hoặc EPS cho nhà in. Ảnh raster PNG hay JPEG bị vỡ hạt khi phóng vượt độ phân giải gốc, dẫn đến cạnh module mờ làm máy quét nhầm lẫn. Tối thiểu, xuất PNG 2048×2048 điểm ảnh ở 300 DPI khi không chấp nhận SVG. Luôn yêu cầu bản in thử thực tế và thực hiện kiểm tra quét trước khi duyệt các đợt in lớn."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hướng dẫn kỹ thuật cuối cùng về in mã QR (preflight, kích thước và chất liệu nền)",
      "paragraphs": [
        "In tốt một mã QR nghĩa là hiểu vật lý đằng sau việc quét: độ phân giải quang học, tiêu chuẩn preflight, tràn mực, bề mặt phản chiếu ánh sáng ra sao và hình học ống kính điện thoại. Một mã quét ngay trên màn hình có thể hoàn toàn thất bại khi in nếu độ phân giải, vùng yên tĩnh, tương phản hoặc lớp hoàn thiện được xác định sai.",
        "Theo ISO/IEC 18004, camera giải mã một mã bằng cách đọc mối quan hệ không gian giữa mẫu thời gian và mẫu định vị của nó. Bất cứ thứ gì làm méo nó — mực lan vào vùng yên tĩnh 4 module, chói từ lớp laminate bóng, vỡ hạt từ nguồn DPI thấp — đều phá vỡ giải mã Reed-Solomon.",
        "Hướng dẫn này cho kỹ thuật viên preflight, nhà thiết kế, kỹ sư bao bì và nhà in các công thức, thông số vật liệu và danh sách kiểm tra chất lượng để đạt độ tin cậy quét ngay lần đầu 100% trong mọi đợt in."
      ]
    },
    "comparisonTable": {
      "title": "Định dạng tệp in thương mại cho sản xuất mã QR",
      "headers": [
        "Định dạng tệp",
        "Loại độ phân giải",
        "Tương thích preflight",
        "Ứng dụng in khuyến nghị"
      ],
      "rows": [
        [
          "SVG / EPS vector",
          "Không phụ thuộc độ phân giải (đường vector)",
          "100% không mất dữ liệu trên mọi công cụ RIP thương mại",
          "Biển quảng cáo, bao bì, decal xe, văn phòng phẩm"
        ],
        [
          "PNG độ phân giải cao (300+ DPI)",
          "Bitmap raster (2048x2048+ px không mất dữ liệu)",
          "Tiêu chuẩn cho máy in kỹ thuật số và đợt ngắn",
          "Tờ rơi, thực đơn, thư trực tiếp, tạp chí"
        ],
        [
          "PDF / PDF vector",
          "Đường vector đóng gói",
          "Tiêu chuẩn preflight và dàn trang toàn cầu",
          "Sách thương mại, báo cáo thường niên, khuôn bao bì"
        ],
        [
          "JPEG nén mất dữ liệu (tránh)",
          "Raster nén (có artifact mất dữ liệu)",
          "Không phù hợp in thương mại (viền rung)",
          "Chỉ hiển thị web/màn hình (không bao giờ để in)"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Tính kích thước vật lý bằng công thức S = D / 10",
        "description": "Lấy khoảng cách mọi người quét (D), chia cho mười, đó là chiều rộng và chiều cao tối thiểu (S) của bạn."
      },
      {
        "number": 2,
        "title": "Xác minh tỷ lệ tương phản WCAG (> 4,5:1) và vùng yên tĩnh",
        "description": "Xác nhận module tối trên nền sáng, và giữ viền trống đầy đủ 4 module ở mọi cạnh."
      },
      {
        "number": 3,
        "title": "Xuất SVG vector và thực hiện kiểm thử bản in thật",
        "description": "Xuất SVG vector, đặt vào InDesign hoặc Illustrator và quét bản duyệt in trên vài điện thoại trước khi chốt."
      }
    ],
    "features": [
      {
        "title": "Tỷ lệ khoảng cách quét toán học 10:1",
        "description": "Tính kích thước chính xác cho mọi phương tiện, từ con tem bưu chính đến biển đường cao tốc 50 mét."
      },
      {
        "title": "Tuân thủ preflight ISO/IEC 18004",
        "description": "Làm đúng tệp của bạn về thời gian module, mẫu căn chỉnh và dư thừa Reed-Solomon."
      },
      {
        "title": "Hướng dẫn tương thích nền và lớp phủ",
        "description": "Hiểu cách mực, độ thấm giấy, tăng điểm và mờ so với bóng thực sự tương tác trên máy in."
      },
      {
        "title": "Tải trực tiếp SVG và EPS vector không mất dữ liệu",
        "description": "Tệp vector sẵn sàng sản xuất cho preflight thương mại và chế bản."
      }
    ],
    "sizingMatrix": {
      "title": "Bảng tham chiếu chính về kích thước in và khoảng cách",
      "description": "Áp dụng công thức quang học tiêu chuẩn $S = D / 10$ để xác định kích thước in vật lý.",
      "headers": [
        "Vị trí vật lý",
        "Khoảng cách quét (D)",
        "Chiều rộng tối thiểu (S)",
        "Định dạng tệp khuyến nghị"
      ],
      "rows": [
        [
          "Danh thiếp và thẻ tên",
          "15 cm - 30 cm (6\" - 12\")",
          "25 mm x 25 mm (1,0\" x 1,0\")",
          "SVG vector / EPS"
        ],
        [
          "Thẻ để bàn và lót ly",
          "30 cm - 50 cm (12\" - 20\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "SVG vector / PNG 300 DPI"
        ],
        [
          "Bao bì sản phẩm và thùng",
          "20 cm - 40 cm (8\" - 16\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "SVG vector / PDF"
        ],
        [
          "Tờ rơi, brochure và tạp chí",
          "50 cm - 100 cm (20\" - 40\")",
          "60 mm x 60 mm (2,4\" x 2,4\")",
          "SVG vector / PNG 300 DPI"
        ],
        [
          "Băng rôn và áp phích hội chợ thương mại",
          "1,5 m - 3,0 m (5 ft - 10 ft)",
          "200 mm x 200 mm (8,0\" x 8,0\")",
          "SVG vector"
        ],
        [
          "Decal xe và đồ họa đội xe",
          "3,0 m - 6,0 m (10 ft - 20 ft)",
          "350 mm x 350 mm (14\" x 14\")",
          "SVG vector / vinyl đúc"
        ],
        [
          "Biển quảng cáo đường cao tốc và quảng cáo phương tiện công cộng",
          "15,0 m - 30,0 m (50 ft - 100 ft)",
          "1500 mm - 3000 mm (5 ft - 10 ft)",
          "SVG vector / EPS khổ lớn"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Bao bì thương mại và hộp sóng flexo",
        "description": "Đặt mã vector sắc nét vào bản vẽ khuôn bao bì, tính đến độ thấm mực và tăng điểm của máy in."
      },
      {
        "title": "Preflight tạp chí quốc gia và thư trực tiếp",
        "description": "Vượt ngưỡng 300+ DPI và tách màu CMYK mà các nhà xuất bản tạp chí yêu cầu bạn."
      },
      {
        "title": "Quảng cáo ngoài trời và biển quảng cáo đường cao tốc",
        "description": "Phóng mã vector lên tỷ lệ biển quảng cáo trong khi hình học module vẫn sắc nét."
      },
      {
        "title": "Danh thiếp cao cấp và dập nhũ",
        "description": "Tạo đường vector mịn cho dập nhũ, dập nổi và UV cục bộ trên giấy trên 400 GSM."
      },
      {
        "title": "Thẻ tài sản máy móc công nghiệp và tấm kim loại",
        "description": "Tạo nghệ thuật vector chính xác để khắc laser lên nhôm anod hóa và tấm thép không gỉ."
      }
    ],
    "troubleshooting": {
      "title": "6 sai lầm preflight chí tử làm hỏng mã QR đã in",
      "points": [
        "Vùng yên tĩnh bị cắt. Cắt sát đến viền module và camera mất cạnh. Giữ đủ lề 4 module.",
        "JPEG nén mất dữ liệu. Nén làm nhòe góc module. Dùng SVG vector hoặc PNG không nén.",
        "Tương phản yếu. Màu pastel, vàng trên trắng hay xám nhạt không qua được nhị phân hóa. Giữ 4,5:1.",
        "Chói bóng. Lớp phủ bóng cao chói dưới đèn rọi. Chọn mờ hoặc lụa.",
        "Bỏ qua tăng điểm. Mực lan trên giấy không tráng và giấy báo, lấp kín khoảng trống giữa các module. Phóng mã lên 15-20% trên vật liệu xốp.",
        "Màu đảo. Trắng trên đen thất bại trên máy quét cũ. Giữ module tối."
      ]
    },
    "faqs": [
      {
        "q": "Mã QR có thể in nhỏ nhất là bao nhiêu mà vẫn quét được?",
        "a": "Với một URL ngắn hoặc thẻ liên hệ đọc từ 15-20 cm, 20 mm x 20 mm (0,8\" x 0,8\") là mức sàn. Trên bao bì và danh thiếp, hãy xem 25 mm x 25 mm (1,0\" x 1,0\") là mức tối thiểu an toàn."
      },
      {
        "q": "Vì sao SVG vector vượt trội hơn PNG để in thương mại?",
        "a": "SVG mô tả mã như hình học, không phải điểm ảnh, nên nó co giãn đến bất kỳ kích thước biển quảng cáo hay bao bì nào mà không mất độ sắc nét, và nhập sạch vào InDesign và Illustrator."
      },
      {
        "q": "Vùng yên tĩnh là gì và vì sao nó bắt buộc?",
        "a": "Đó là viền trống — rộng ít nhất 4 module — quanh cả bốn cạnh của mã. Camera cần lề trống đó để biết mã vạch kết thúc ở đâu và nghệ thuật xung quanh bắt đầu ở đâu."
      },
      {
        "q": "Mức sửa lỗi ảnh hưởng thế nào đến độ bền khi in?",
        "a": "Mức H có 30% dư thừa, nên mã vẫn quét được ngay cả khi tới 30% bề mặt bị xước, rách, bẩn hoặc bị logo ở giữa che phủ."
      },
      {
        "q": "Tôi có thể in mã QR màu lên giấy màu không?",
        "a": "Có, miễn là module tối vượt 4,5:1 so với giấy sáng. Tránh tối trên tối hoặc sáng trên sáng."
      },
      {
        "q": "Vì sao mã QR laminate bóng thường không quét được?",
        "a": "Dưới ánh nắng trực tiếp hoặc đèn rọi, độ bóng hoạt động như gương và làm cháy độ tương phản bằng một điểm nóng trắng. Laminate mờ hoặc chống chói sửa được điều này."
      },
      {
        "q": "Cần độ phân giải nào nếu in tệp raster PNG?",
        "a": "Tệp raster cần 300 DPI ở kích thước in cuối cùng (điểm ảnh = inch × 300). Bản xuất PNG 2048x2048px in sắc nét đến khoảng 7x7 inch."
      },
      {
        "q": "Làm sao kiểm tra mã QR in trước khi duyệt đợt in 10.000 đơn vị?",
        "a": "Lấy bản duyệt máy in 1:1 trên đúng giấy và lớp phủ bạn sẽ chạy, rồi quét trên cả Android đời cũ và iPhone đời mới, trong ánh sáng yếu và sáng."
      }
    ],
    "bestPractices": "Đưa cho nhà in tệp SVG vector, yêu cầu lớp hoàn thiện mờ, bảo vệ vùng yên tĩnh 4 module và quét bản duyệt thực tế trước khi duyệt toàn bộ đợt in."
  },
  '/blog/vcard-qr-code-business-cards': {
    "sections": [
      {
        "title": "Biến danh thiếp thành công cụ lưu liên hệ chỉ bằng một chạm",
        "paragraphs": [
          "Mã QR vCard loại bỏ lỗi gõ tay thông tin liên hệ trong các sự kiện kết nối và hội chợ thương mại.",
          "Người quét mặt sau danh thiếp của bạn ngay lập tức thêm tên, số điện thoại di động, email và hồ sơ LinkedIn của bạn vào danh bạ của họ."
        ]
      },
      {
        "title": "Mẹo thiết kế cho danh thiếp có mã QR",
        "paragraphs": [
          "Đặt mã QR ở mặt sau danh thiếp với lời kêu gọi hành động rõ ràng như \"Quét để lưu liên hệ của tôi\". Giữ mã ít nhất 2,5 cm × 2,5 cm (1 inch × 1 inch) để quét đáng tin cậy. Để lại viền vùng yên tĩnh trắng ít nhất 4 module ở cả bốn cạnh. Nhúng ảnh chân dung chuyên nghiệp hoặc logo công ty ở giữa giúp tăng độ tin cậy và tỷ lệ quét.",
          "Dùng QR Generator Online để mã hóa toàn bộ hồ sơ vCard 3.0 của bạn, bao gồm tên, họ, chức danh, công ty, điện thoại công việc, di động, email, website và địa chỉ bưu điện. Xuất SVG vector để đảm bảo chất lượng hoàn hảo ở mọi kích thước in danh thiếp. Giấy danh thiếp cao cấp hoàn thiện mờ cho độ tin cậy quét cao nhất so với laminate bóng, vốn có thể tạo chói trên ống kính dưới ánh sáng mạnh."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hướng dẫn cuối cùng về mã QR vCard cho danh thiếp thông minh hiện đại",
      "paragraphs": [
        "Danh thiếp giấy đang lặng lẽ chết dần. Hơn 88% số danh thiếp được phát ra ở sự kiện kết nối bị vứt trong vòng một tuần, và khoảng 9% mang số điện thoại hoặc chức danh lỗi thời trong vòng sáu tháng. Mã QR vCard biến tờ giấy chết đó thành một tài sản kỹ thuật số hoạt động.",
        "Nó chạy trên chuẩn VCF (vCard 3.0, định nghĩa trong RFC 2426 và RFC 6350) và mã hóa toàn bộ danh tính nghề nghiệp của bạn — tên, chức danh, công ty, di động, email công việc, địa chỉ văn phòng, website — trực tiếp vào mã vạch.",
        "Quét bằng bất kỳ iPhone hay Android nào và hệ điều hành mở bản xem trước liên hệ với tùy chọn \"Thêm vào Danh bạ\". Một chạm lưu toàn bộ hồ sơ vào sổ địa chỉ — không gõ, không sai chính tả, không mất khách hàng tiềm năng trong túi áo."
      ]
    },
    "comparisonTable": {
      "title": "Danh thiếp thông minh QR vCard so với danh thiếp giấy truyền thống",
      "headers": [
        "Chỉ số kết nối",
        "Danh thiếp thông minh QR vCard",
        "Danh thiếp giấy truyền thống"
      ],
      "rows": [
        [
          "Tốc độ lưu liên hệ",
          "1 chạm (dưới 3 giây thẳng vào sổ địa chỉ điện thoại)",
          "Gõ tay (1 - 3 phút, thường bị bỏ qua)"
        ],
        [
          "Tỷ lệ giữ lại liên hệ",
          "Lưu trữ vĩnh viễn trong sổ địa chỉ đám mây",
          "88% bị vứt trong vòng 7 ngày"
        ],
        [
          "Độ phong phú dữ liệu",
          "Hồ sơ đầy đủ: 3 số điện thoại, email, địa chỉ văn phòng, website",
          "Bị giới hạn bởi diện tích thẻ vật lý 3,5\" x 2\""
        ],
        [
          "Lãng phí môi trường",
          "Không lãng phí (thẻ bền, tái sử dụng và lai)",
          "Hàng nghìn danh thiếp giấy bị vứt mỗi năm cho mỗi chuyên gia"
        ],
        [
          "Tương tác một chạm",
          "Gọi, gửi email và chỉ đường trực tiếp",
          "Văn bản thụ động phải chép tay"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Điền các trường liên hệ nghề nghiệp có cấu trúc",
        "description": "Nhập tên, chức danh, công ty, di động, email công việc và website của bạn."
      },
      {
        "number": 2,
        "title": "Áp dụng thương hiệu trực quan và nhúng ảnh hoặc logo",
        "description": "Định kiểu mẫu chấm theo thương hiệu của bạn và đặt ảnh chân dung hoặc logo ở giữa với sửa lỗi mức H."
      },
      {
        "number": 3,
        "title": "Xuất SVG vector để in danh thiếp",
        "description": "Lấy SVG vector cho xưởng in, hoặc PNG độ phân giải cao cho chữ ký email hay hình nền màn hình khóa."
      }
    ],
    "features": [
      {
        "title": "Tích hợp gốc phổ quát với iOS và Android",
        "description": "Được xây dựng theo vCard 3.0, nên lưu sạch vào Apple Contacts, Google Contacts và Outlook."
      },
      {
        "title": "Lưu vào sổ địa chỉ điện thoại chỉ với một chạm",
        "description": "Điện thoại, email, website và địa chỉ của bạn được lưu chỉ trong một chạm — người kia không phải gõ gì."
      },
      {
        "title": "Quét ngoại tuyến 100% và quyền riêng tư đầy đủ",
        "description": "Dữ liệu liên hệ nằm trong mã vạch. Không máy chủ bên thứ ba nào lưu trữ hay thu thập nó."
      },
      {
        "title": "SVG vector độ chính xác cao cho giấy cao cấp",
        "description": "Đầu ra vector sắc nét cho dập nhũ, UV cục bộ, dập nổi, hoặc thẻ kim loại hay gỗ khắc laser."
      }
    ],
    "sizingMatrix": {
      "title": "Thông số kích thước và chất liệu của mã QR vCard",
      "description": "Vì tải trọng vCard chứa 150 đến 350 ký tự văn bản có cấu trúc, hãy duy trì các mốc kích thước khuyến nghị.",
      "headers": [
        "Chất liệu / phương tiện thẻ",
        "Kích thước tối thiểu khuyến nghị",
        "Mức sửa lỗi",
        "Hoàn thiện tối ưu"
      ],
      "rows": [
        [
          "Danh thiếp giấy tiêu chuẩn (3,5\" x 2\")",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "Mức Q (25%) hoặc mức H (30%)",
          "Bìa cứng mờ nặng (350+ GSM)"
        ],
        [
          "Thẻ NFC lai kim loại / gỗ thông minh",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Mức H (30%)",
          "Nhôm anod hóa mờ khắc laser"
        ],
        [
          "Thẻ đeo hội chợ và huy hiệu hội nghị",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "Mức M (15%) hoặc mức Q (25%)",
          "PVC tổng hợp ép màng / Tyvek"
        ],
        [
          "Tiêu đề sơ yếu lý lịch và bìa hồ sơ",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Mức Q (25%)",
          "Giấy trắng sáng mịn không tráng"
        ],
        [
          "Hình nền màn hình khóa điện thoại thông minh",
          "250 x 250 px trên màn hình số",
          "Mức H (30%)",
          "Màn hình OLED số độ tương phản cao"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Giám đốc điều hành và lãnh đạo bán hàng",
        "description": "Một mã ở mặt sau danh thiếp cao cấp biến cái bắt tay thành một liên hệ đã lưu."
      },
      {
        "title": "Hội chợ thương mại, triển lãm và hội nghị ngành",
        "description": "Trên thẻ đeo hay huy hiệu gian hàng, thông tin của bạn đến điện thoại khách hàng tiềm năng trong khoảng hai giây."
      },
      {
        "title": "Người tìm việc — sơ yếu lý lịch và thư bìa hồ sơ",
        "description": "Một mã ở tiêu đề sơ yếu lý lịch cho phép nhà tuyển dụng lưu thông tin của bạn mà không phải gõ lại."
      },
      {
        "title": "Môi giới bất động sản và môi giới thế chấp",
        "description": "Một mã trên tờ rơi mở cửa xem nhà biến việc đặt lịch xem nhà thành một chạm."
      },
      {
        "title": "Chân trang email doanh nghiệp và chữ ký kỹ thuật số",
        "description": "Một mã trong mẫu email cho phép người đọc trên máy tính quét nó từ màn hình."
      }
    ],
    "troubleshooting": {
      "title": "Lỗi thiết kế mã QR vCard thường gặp và cách tránh",
      "points": [
        "Hồ sơ quá tải. Hai mươi trường khiến ma trận quá dày để quét. Giữ lại những thứ thiết yếu.",
        "In quá nhỏ. Ma trận vCard phiên bản 6-10 bị nhòe dưới 25 mm trên camera rẻ. Hãy để nó có chỗ.",
        "Giấy bóng. Thẻ bóng cao phản chiếu đèn sảnh vào ống kính. Chọn mờ, lụa hoặc cảm ứng mềm.",
        "Đảo màu. Trắng trên thẻ tối thất bại trên một số máy quét cũ. Tối trên sáng vẫn là chuẩn.",
        "Thiếu mã quốc gia. Bỏ +84 hoặc +1 thì liên hệ quốc tế không thể gọi thẻ đã lưu."
      ]
    },
    "faqs": [
      {
        "q": "Mã QR vCard là gì và nó hoạt động thế nào?",
        "a": "Đó là mã vạch 2D chứa thông tin liên hệ của bạn — tên, điện thoại, email, công ty, chức danh, website — theo định dạng vCard 3.0. Khi quét, điện thoại đề nghị lưu liên hệ thẳng vào sổ địa chỉ."
      },
      {
        "q": "Mã QR vCard có cần kết nối internet để quét không?",
        "a": "Chúng hoạt động hoàn toàn ngoại tuyến. Mọi trường đều nằm trong mã vạch dưới dạng văn bản vCard 3.0, nên điện thoại đọc và lưu liên hệ mà không cần dữ liệu hay WiFi."
      },
      {
        "q": "Tôi có thể đưa ảnh của mình vào mã QR vCard tĩnh không?",
        "a": "Mã hóa ảnh thô làm tải trọng phình to đến mức không thể quét. Cách chuẩn là phủ ảnh hoặc logo của bạn ở giữa mã và đặt địa chỉ nơi ảnh đầy đủ được lưu trữ vào trường URL của vCard."
      },
      {
        "q": "Mã QR vCard có tương thích với cả iPhone và Android không?",
        "a": "vCard 3.0 là chuẩn liên hệ phổ quát, có sẵn trong Apple Contacts, Google Contacts, Outlook và Samsung Contacts."
      },
      {
        "q": "Mã QR vCard tĩnh có hết hạn hoặc thu phí hàng tháng không?",
        "a": "Không. Dữ liệu liên hệ nằm trong mã và có hiệu lực vĩnh viễn, không có phí định kỳ hay giới hạn quét."
      },
      {
        "q": "Tôi có thể in mã QR vCard nhỏ đến mức nào trên danh thiếp?",
        "a": "Hướng đến 28 mm x 28 mm (1,1\" x 1,1\") hoặc lớn hơn để ma trận dày hơn vẫn sắc nét với ống kính điện thoại."
      },
      {
        "q": "Tôi có nên định dạng số điện thoại có mã quốc gia không?",
        "a": "Luôn luôn — dùng E.164 (+84901234567) để liên hệ quốc tế có thể gọi bạn mà không phải đoán tiền tố."
      },
      {
        "q": "Tôi nên gửi định dạng tệp nào cho xưởng in danh thiếp?",
        "a": "SVG vector hoặc EPS. Vector giữ độ chính xác trên mọi máy in offset hay kỹ thuật số."
      }
    ],
    "bestPractices": "Giữ danh thiếp ở các trường thiết yếu, viết số điện thoại theo định dạng quốc tế (+84...), yêu cầu giấy bìa mờ và quét bản in thử thực tế trước khi chạy toàn bộ."
  },
  '/blog/qr-codes-for-real-estate': {
    "sections": [
      {
        "title": "Tương tác với người mua tiềm năng trực tiếp từ biển bất động sản",
        "paragraphs": [
          "Đặt mã QR trên biển \"Bán\" cho phép người đi ngang qua xem sơ đồ 3D, video tham quan và giá ngay từ xe của họ.",
          "Thu thập yêu cầu của người mua có ý định cao 24/7 mà không phải chờ các buổi xem nhà mở cửa."
        ]
      },
      {
        "title": "Thực hành tốt nhất cho chiến dịch mã QR bất động sản",
        "paragraphs": [
          "Liên kết mã QR trực tiếp đến một trang đích bất động sản chuyên biệt thay vì trang chủ chung. Bao gồm địa chỉ đầy đủ, giá niêm yết, số phòng ngủ và phòng tắm, diện tích m² và một video tham quan nhúng. Mã QR động cho phép bạn cập nhật URL đích nếu giá niêm yết thay đổi, hoặc nếu bất động sản được bán và bạn muốn chuyển hướng đến một tin tương tự mà không phải in lại biển.",
          "Để có độ tin cậy quét ngoài trời tối đa, in mã QR ở kích thước tối thiểu 7 cm × 7 cm (khoảng 2,75 inch) trên biển chống thời tiết. Dùng độ tương phản cao đen trên trắng hoặc xanh đậm trên trắng để đảm bảo nhìn thấy dưới ánh nắng trực tiếp. Thêm logo thương hiệu và một khẩu hiệu ngắn như \"Quét để xem tour ảo\" làm tăng đáng kể tỷ lệ quét từ người đi ngang qua. Theo dõi phân tích quét để biết khu vực và loại bất động sản nào tạo ra nhiều quan tâm nhất từ người mua."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hướng dẫn toàn diện của môi giới bất động sản về tạo khách hàng tiềm năng và tiếp thị bằng mã QR",
      "paragraphs": [
        "Tiếp thị bất động sản mang tính địa điểm và trực quan, và người mua giờ kỳ vọng chi tiết theo yêu cầu khi họ đứng trước một ngôi nhà. Hộp tờ rơi giấy cũ trên biển hết giấy, bị mưa làm ướt và không cho bạn biết ai đã quan tâm.",
        "Mã QR bất động sản giải quyết cả ba vấn đề. Nó biến một biển bán, một chỉ dẫn xem nhà mở cửa, một trưng bày cửa sổ hay một bưu thiếp thành cổng 24/7 — một lần quét mở tour Matterport 3D, thư viện ảnh HD, sơ đồ tầng, điểm trường học và cuộc gọi hay tin nhắn trực tiếp đến môi giới.",
        "Thêm theo dõi UTM và luồng thu thập khách hàng tiềm năng, và các môi giới giỏi nhất thu được khách hàng địa phương có ý định cao đúng vào thời điểm sự quan tâm lên đỉnh — từ lề đường, vào bất kỳ giờ nào."
      ]
    },
    "comparisonTable": {
      "title": "Biển bất động sản mã QR so với hộp tờ rơi giấy truyền thống",
      "headers": [
        "Khả năng tiếp thị",
        "Biển bất động sản mã QR",
        "Hộp tờ rơi giấy truyền thống"
      ],
      "rows": [
        [
          "Khả năng thu khách hàng tiềm năng",
          "24/7/365 (không bao giờ hết hàng)",
          "Hộp tờ rơi trống mất hơn 60% khách hàng tiềm năng"
        ],
        [
          "Độ phong phú đa phương tiện",
          "Tour ảo 3D, video tham quan, hơn 50 ảnh HD",
          "Giới hạn ở 1-2 ảnh đen trắng in ra"
        ],
        [
          "Khả năng chống thời tiết",
          "Vinyl / nhôm chống thời tiết (chống mưa, tuyết và nắng)",
          "Tờ rơi giấy bị ướt, nhăn hoặc bị gió cuốn đi"
        ],
        [
          "Ghi nhận và phân tích khách hàng tiềm năng",
          "Theo dõi chính xác số lần quét, giờ trong ngày và loại thiết bị",
          "Không biết có bao nhiêu tờ rơi đã được lấy"
        ],
        [
          "Liên hệ môi giới tức thì",
          "Gọi, nhắn SMS hoặc WhatsApp chỉ một chạm",
          "Người mua phải tự gõ số điện thoại môi giới"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Tạo trang đích một bất động sản hoặc liên kết tour 3D",
        "description": "Sao chép URL trực tiếp tới trang niêm yết, tour Matterport hoặc video tham quan."
      },
      {
        "number": 2,
        "title": "Tạo mã QR bất động sản có độ tương phản cao với logo",
        "description": "Dán URL bất động sản, áp dụng màu môi giới của bạn, đặt logo ở giữa và xuất SVG vector."
      },
      {
        "number": 3,
        "title": "In lên biển nhựa gợn sóng hoặc nhôm chống thời tiết",
        "description": "Gắn một biển phụ ít nhất 150 mm x 150 mm với dòng chữ như \"Quét để xem tour ảo 3D và giá\"."
      }
    ],
    "features": [
      {
        "title": "Cung cấp thông tin bất động sản 24/7 theo yêu cầu",
        "description": "Người mua đi ngang qua nhận được giá, ảnh nội thất và sơ đồ tầng vào bất kỳ giờ nào."
      },
      {
        "title": "Tích hợp trực tiếp với tour 3D và video tham quan",
        "description": "Đưa người mua vào trong nhà qua Matterport, Zillow 3D Home hoặc tour YouTube."
      },
      {
        "title": "Kết nối môi giới tức thì chỉ một chạm",
        "description": "Người mua đứng ở lề đường có thể gọi, nhắn tin hay WhatsApp cho môi giới niêm yết ngay tại chỗ."
      },
      {
        "title": "Mã vạch tĩnh vĩnh viễn không hết hạn",
        "description": "Mã bất động sản tĩnh luôn hoạt động vô thời hạn, không phí hàng tháng hay giới hạn quét."
      }
    ],
    "sizingMatrix": {
      "title": "Thông số kích thước in và đặt biển bất động sản",
      "description": "Đảm bảo người mua tiềm năng có thể quét mã bất động sản của bạn dễ dàng từ xe hay vỉa hè.",
      "headers": [
        "Vị trí biển",
        "Khoảng cách quét dự kiến",
        "Kích thước in tối thiểu",
        "Chất liệu đề xuất"
      ],
      "rows": [
        [
          "Biển phụ dưới biển bán (treo bên dưới)",
          "1,5 m - 3,0 m (5 ft - 10 ft)",
          "150 mm x 150 mm (6\" x 6\")",
          "Nhựa gợn sóng phản quang / nhôm"
        ],
        [
          "Biển chỉ đường xem nhà mở cửa",
          "1,0 m - 2,5 m (3 ft - 8 ft)",
          "120 mm x 120 mm (4,8\" x 4,8\")",
          "Biển cọc nhựa gợn sóng nặng"
        ],
        [
          "Tờ rơi và brochure niêm yết bất động sản",
          "20 cm - 35 cm (8\" - 14\")",
          "30 mm x 30 mm (1,2\" x 1,2\")",
          "Bìa cứng mờ nặng (100 lb+)"
        ],
        [
          "Trưng bày cửa sổ văn phòng bất động sản",
          "50 cm - 150 cm (20\" - 60\")",
          "100 mm x 100 mm (4,0\" x 4,0\")",
          "Decal cửa sổ vinyl mờ chống thời tiết"
        ],
        [
          "Bưu thiếp thư trực tiếp \"Mới niêm yết\"",
          "20 cm - 35 cm (8\" - 14\")",
          "28 mm x 28 mm (1,1\" x 1,1\")",
          "Giấy bưu thiếp mờ tráng phủ"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Biển phụ tour 3D ảo cho biển bán",
        "description": "Một biển phụ dưới biển \"Bán\" cho phép người đi ngang qua tham quan nội thất từ điện thoại."
      },
      {
        "title": "Biển chỉ đường xem nhà mở cửa",
        "description": "Mã vị trí trên biển góc dẫn thẳng người mua đến lối vào xem nhà mở cửa."
      },
      {
        "title": "Bưu thiếp thư trực tiếp \"Mới niêm yết\" và \"Đã bán\"",
        "description": "Mã trên bưu thiếp khu phố liên kết tới video tham quan và công cụ ước tính giá trị nhà."
      },
      {
        "title": "Trưng bày cửa sổ tại văn phòng môi giới",
        "description": "Mã cửa sổ biến lượng người đi bộ thành tìm kiếm bất động sản 24/7."
      },
      {
        "title": "Danh thiếp môi giới với liên hệ vCard",
        "description": "Mã vCard trên danh thiếp môi giới lưu thông tin của họ chỉ trong một chạm."
      }
    ],
    "troubleshooting": {
      "title": "Sai lầm thường gặp trong tiếp thị bất động sản bằng mã QR",
      "points": [
        "Quá nhỏ cho người đi ngang qua. Mã 50 mm không đọc được từ xe cách 3 mét. Dùng ít nhất 150 mm x 150 mm trên biển bán.",
        "Liên kết MLS lộn xộn. Trang MLS trên máy tính chậm với chữ nhỏ làm khó máy quét di động. Thay vào đó hãy liên kết một trang nhanh cho một bất động sản.",
        "Không có lời kêu gọi hành động. Mã trơ trọi thu được ít lượt quét. Kèm theo \"Quét để xem giá, ảnh và tour 3D\".",
        "Chói nắng. Lớp phủ bóng trên biển phản chiếu dưới nắng gắt. Dùng vinyl ngoài trời mờ hoặc nhựa gợn sóng.",
        "Tường đăng nhập hung hăng. Bắt đăng ký ngay gây tỷ lệ thoát 70%. Hiển thị ảnh chính trước, rồi mới yêu cầu đồng ý."
      ]
    },
    "faqs": [
      {
        "q": "Môi giới bất động sản dùng mã QR thế nào để tạo khách hàng tiềm năng?",
        "a": "Họ đặt mã lên biển bán, tờ rơi xem nhà mở cửa và bưu thiếp, liên kết đến một trang bất động sản, tour 3D hoặc yêu cầu nhắn tin tức thì — thu hút người mua đúng lúc sự quan tâm cao nhất."
      },
      {
        "q": "Kích thước khuyến nghị cho mã QR trên biển bất động sản là bao nhiêu?",
        "a": "Một biển phụ được đọc từ lối đi hoặc vỉa hè (1,5 đến 3 mét) nên có kích thước ít nhất 150 mm x 150 mm (6\" x 6\") với độ tương phản cao."
      },
      {
        "q": "Tôi có thể liên kết mã QR trực tiếp đến tour ảo 3D Matterport không?",
        "a": "Sao chép liên kết chia sẻ công khai của Matterport, dán vào trình tạo URL và tải SVG hoặc PNG sẵn sàng in."
      },
      {
        "q": "Mã QR bất động sản có hết hạn khi bất động sản được bán không?",
        "a": "Mã tĩnh vẫn có hiệu lực. Khi bất động sản đã bán, chuyển URL đích sang trang \"Đã bán\" hoặc danh sách niêm yết đang hoạt động của bạn — mã đã in vẫn tiếp tục hoạt động."
      },
      {
        "q": "Tôi nên in lời kêu gọi hành động nào bên cạnh mã QR bất động sản?",
        "a": "Các câu hiệu quả là: \"Quét để xem giá và tour ảo 3D\", \"Quét để xem ngay ảnh nội thất\", \"Quét để nhắn tin cho môi giới\"."
      },
      {
        "q": "Tôi có thể thêm logo công ty môi giới của mình vào mã QR không?",
        "a": "Có — logo công ty hoặc nhóm môi giới của bạn đặt gọn ở giữa, vì mức H có thể mất tới một phần ba mã và vẫn quét được."
      },
      {
        "q": "Vật liệu tốt nhất cho biển bất động sản ngoài trời có mã QR là gì?",
        "a": "Nhựa gợn sóng chống thời tiết (Coroplast) hoặc tấm composite nhôm với lớp phủ UV mờ — bền và không chói."
      },
      {
        "q": "Mã QR bất động sản có miễn phí tạo trên QR Generator Online không?",
        "a": "Xuất SVG và PNG đều miễn phí, với lượt quét không giới hạn và không phí định kỳ."
      }
    ],
    "bestPractices": "In mã biển ở 150 mm x 150 mm trở lên trên chất liệu mờ chống thời tiết, thêm lời kêu gọi hành động có giá trị và đảm bảo trang đích tải nhanh trên di động."
  },
  '/blog/wifi-qr-codes-for-hospitality': {
    "sections": [
      {
        "title": "Kết nối không dây liền mạch cho khách",
        "paragraphs": [
          "Khách khách sạn và Airbnb thường gặp khó khăn khi gõ mật khẩu WiFi phức tạp vào điện thoại và laptop.",
          "Một thẻ mã QR WiFi được đóng khung, tùy chỉnh trên tủ đầu giường hoặc quầy quán cà phê cho phép khách quét và kết nối ngay lập tức."
        ]
      },
      {
        "title": "Cách triển khai mã QR WiFi trong khách sạn và nhà cho thuê kỳ nghỉ",
        "paragraphs": [
          "Tạo một mã QR WiFi riêng cho mỗi vùng mạng — WiFi phòng khách, WiFi sảnh và WiFi khu hồ bơi — rồi in lên các thẻ có thương hiệu riêng. Với khách sạn, ép plastic thẻ mã QR và đặt trên bàn làm việc trong phòng và gương phòng tắm, nơi khách tự nhiên tìm hướng dẫn kết nối. Ghi tên mạng (SSID) và một ghi chú xác nhận mật khẩu có đã được điền sẵn hay không, để khách yên tâm về việc quét sẽ làm gì.",
          "Với chủ nhà Airbnb, nhúng mã QR WiFi vào một sổ chào đón tùy chỉnh cùng quy tắc nhà và gợi ý địa phương sẽ cải thiện đáng kể điểm hài lòng khi nhận phòng. Quán cà phê và không gian làm việc chung hưởng lợi nhiều nhất từ màn hình để bàn khổ lớn với mã QR đóng khung ngang tầm mắt. Đổi mật khẩu WiFi hằng tháng để bảo mật và chỉ cần tạo mã QR mới — không cần in lại nếu bạn dùng bảng thực đơn kỹ thuật số hoặc thẻ thay thế được."
        ]
      }
    ],
    "technicalOverview": {
      "title": "Hướng dẫn toàn diện về mã QR WiFi cho khách sạn, quán cà phê và nhà cho thuê kỳ nghỉ",
      "paragraphs": [
        "Trong ngành khách sạn, WiFi không còn là đặc quyền — đó là tiện nghi làm thay đổi điểm hài lòng và đánh giá trực tuyến. Các nghiên cứu đặt con số này trên 85%: đó là tỷ lệ khách khách sạn và quán cà phê đánh giá WiFi nhanh, không cản trở là yếu tố then chốt cho kỳ lưu trú của họ. Tuy vậy, điều cản đường thường là một mật khẩu gõ sai và một cuộc gọi đến lễ tân.",
        "Một mã WiFi khách sạn mang thông tin đăng nhập theo định dạng `WIFI:` chuẩn (`WIFI:T:WPA;S:Hotel_Guest;P:SecretPass;H:false;;`). Khách đưa camera lên, chạm \"Join Network\" và trực tuyến trong dưới hai giây — không mật khẩu trên màn hình, không gõ phím.",
        "Hướng dẫn này đồng hành cùng khách sạn, khu nghỉ dưỡng, quán cà phê và chủ nhà Airbnb trong việc triển khai mã WiFi có thương hiệu khắp phòng, bàn và khu nhận phòng để giảm các yêu cầu hỗ trợ, giữ mạng an toàn và nâng trải nghiệm khách."
      ]
    },
    "comparisonTable": {
      "title": "Truy cập WiFi bằng mã QR so với thẻ mật khẩu thủ công trong khách sạn",
      "headers": [
        "Yếu tố vận hành",
        "Mã QR WiFi khách sạn",
        "Thẻ mật khẩu thủ công / bảng phấn"
      ],
      "rows": [
        [
          "Thời gian kết nối của khách",
          "1 - 2 giây (một lần quét camera và chạm)",
          "45 - 90 giây (gõ hơn 16 ký tự phức tạp)"
        ],
        [
          "Yêu cầu hỗ trợ lễ tân",
          "Giảm hơn 80% các câu hỏi liên quan đến WiFi",
          "Lượng lớn cuộc gọi của khách nhờ hỗ trợ mật khẩu"
        ],
        [
          "Tỷ lệ gõ sai",
          "0% (truyền chính xác từng byte)",
          "30% - 50% với mật khẩu phức tạp có ký hiệu"
        ],
        [
          "Bảo mật mật khẩu",
          "Ngăn khách nhìn thấy khóa dạng văn bản thuần",
          "Phơi bày mật khẩu trên bảng phấn và biển công khai"
        ],
        [
          "Tác động đến đánh giá của khách",
          "Nâng điểm hài lòng và điểm nhận phòng",
          "Bực bội về kết nối dẫn đến đánh giá tiêu cực"
        ]
      ]
    },
    "steps": [
      {
        "number": 1,
        "title": "Tách riêng một mạng dành cho khách trên bộ định tuyến",
        "description": "Chạy WiFi khách trên một VLAN cách ly với cách ly client bật, để khách không bao giờ truy cập được các hệ thống nội bộ của bạn."
      },
      {
        "number": 2,
        "title": "Tạo mã QR WiFi có thương hiệu với sửa lỗi mức H",
        "description": "Nhập SSID và mật khẩu của khách, áp dụng thương hiệu và đặt biểu tượng WiFi hoặc logo ở giữa."
      },
      {
        "number": 3,
        "title": "In lên giá để bàn acrylic cao cấp hoặc thẻ gỗ đầu giường",
        "description": "Trưng bày mã ngang tầm mắt — bàn khách sạn, tủ đầu giường, quầy quán cà phê hoặc sổ chào đón nhà cho thuê."
      }
    ],
    "features": [
      {
        "title": "Kết nối khách tức thì, không cản trở",
        "description": "Một lần quét camera chạm chấm dứt bực bội về mật khẩu và các cuộc gọi lễ tân."
      },
      {
        "title": "Hỗ trợ WPA3, WPA2, WEP và mạng ẩn",
        "description": "Hoạt động với bộ định tuyến mesh doanh nghiệp hay thiết lập cho thuê boutique như nhau."
      },
      {
        "title": "Không lưu trữ trên máy chủ và quyền riêng tư đầy đủ",
        "description": "Thông tin đăng nhập mạng ở lại trong trình duyệt của bạn. Không gì được lưu bên ngoài."
      },
      {
        "title": "SVG vector độ chính xác cao cho biển cao cấp",
        "description": "Vector sắc nét để khắc laser trên gỗ hay tấm đồng, hoặc cho giá acrylic cao cấp."
      }
    ],
    "sizingMatrix": {
      "title": "Hướng dẫn kích thước và chất liệu màn hình mã QR WiFi cho khách sạn",
      "description": "Đặt mã WiFi nơi khách mới đến tự nhiên tìm hướng dẫn kết nối.",
      "headers": [
        "Môi trường khách sạn",
        "Khoảng cách quét",
        "Kích thước in khuyến nghị",
        "Chất liệu khuyến nghị"
      ],
      "rows": [
        [
          "Tủ đầu giường và bàn trong phòng khách sạn",
          "25 cm - 40 cm (10\" - 16\")",
          "45 mm x 45 mm (1,8\" x 1,8\")",
          "Thẻ mờ đóng khung / lều acrylic"
        ],
        [
          "Thẻ để bàn và lót ly quán cà phê",
          "20 cm - 30 cm (8\" - 12\")",
          "40 mm x 40 mm (1,6\" x 1,6\")",
          "Gỗ khắc laser / thẻ ép màng"
        ],
        [
          "Sổ chào đón Airbnb và nam châm tủ lạnh",
          "20 cm - 35 cm (8\" - 14\")",
          "35 mm x 35 mm (1,4\" x 1,4\")",
          "Thẻ mờ nặng / tấm nam châm"
        ],
        [
          "Quầy nhận phòng và lễ tân khách sạn",
          "40 cm - 80 cm (16\" - 32\")",
          "75 mm x 75 mm (3,0\" x 3,0\")",
          "Thẻ đỡ trưng bày trên quầy"
        ],
        [
          "Băng rôn trung tâm hội nghị và sảnh sự kiện",
          "1,0 m - 2,0 m (3 ft - 6,5 ft)",
          "150 mm x 150 mm (6,0\" x 6,0\")",
          "Băng vải không phản chiếu"
        ]
      ]
    },
    "useCases": [
      {
        "title": "Khách sạn, nhà nghỉ boutique và khu nghỉ dưỡng",
        "description": "Một thẻ đóng khung trên bàn hoặc gương đưa khách lên mạng ngay khi họ bước vào."
      },
      {
        "title": "Airbnb, VRBO và nhà cho thuê kỳ nghỉ",
        "description": "Một mã trong sổ chào đón hay trên nam châm tủ lạnh loại bỏ câu hỏi \"WiFi là gì?\" lúc nhận phòng."
      },
      {
        "title": "Quán cà phê, quán cafe và trung tâm làm việc chung",
        "description": "Một mã trên giá để bàn giảm việc nhân viên bị làm phiền và giữ khách ở lại lâu hơn."
      },
      {
        "title": "Địa điểm sự kiện, hội nghị và tiệc",
        "description": "Hàng trăm người kết nối cùng lúc khi nhận phòng, giảm nghẽn dữ liệu di động trong hội trường."
      },
      {
        "title": "Phòng chờ sân bay và khu vực chờ điều hành",
        "description": "Khách đi công tác kết nối WiFi khách an toàn, tốc độ cao mà không cần hỏi."
      }
    ],
    "troubleshooting": {
      "title": "Ngăn chặn các lỗi mã QR WiFi khách sạn thường gặp",
      "points": [
        "Không khớp chữ hoa/thường. Tên mạng phân biệt chữ hoa và chữ thường — \"HotelGuest\" và \"hotelguest\" khác nhau. Khớp chính xác.",
        "Sai loại bảo mật. Chọn WEP cho bộ định tuyến WPA2 khiến bắt tay thất bại. Chọn WPA/WPA2/WPA3.",
        "Cổng xác thực (captive portal). Nếu mạng có trang điều khoản, mã kết nối radio và trang chào của trình duyệt sau đó hiện ra. Điều đó là bình thường.",
        "Thiếu cờ mạng ẩn. SSID ẩn cần bật công tắc Hidden Network, nếu không thiết bị sẽ không kết nối.",
        "Màn hình bị bẩn. Đổ tràn và lớp ép màng trầy xước làm mờ các mẫu định vị. Dùng acrylic bền hoặc gỗ khắc laser."
      ]
    },
    "faqs": [
      {
        "q": "Mã QR WiFi kết nối khách mà không cần gõ mật khẩu như thế nào?",
        "a": "Nó mã hóa các tham số WIFI: chuẩn. Camera điện thoại đọc SSID và mật khẩu từ hình ảnh và tự động bắt đầu kết nối không dây."
      },
      {
        "q": "Có an toàn không khi trưng bày mã QR WiFi trong phòng khách sạn và quán cà phê?",
        "a": "Có, miễn là mã thuộc một mạng khách riêng và cách ly client được bật — điều này giữ khách tránh xa các hệ thống quản trị nội bộ của bạn."
      },
      {
        "q": "Mã QR WiFi có hoạt động trên cả iPhone và điện thoại Android không?",
        "a": "iPhone chạy iOS 11+ và điện thoại Android chạy Android 10+ đều nhận dạng định dạng WIFI: từ camera và đề nghị tham gia chỉ một chạm."
      },
      {
        "q": "Điều gì xảy ra nếu tôi đổi mật khẩu WiFi khách trong tương lai?",
        "a": "Mã cũ ngừng hoạt động, vì mật khẩu cụ thể được cố định trong các module. Thay đổi nghĩa là in một mã mới."
      },
      {
        "q": "Tôi có thể thêm logo khách sạn hoặc quán cà phê vào mã QR WiFi không?",
        "a": "Được. Với sửa lỗi mức H, một logo địa điểm hoặc biểu tượng WiFi ở giữa không làm giảm độ tin cậy chút nào."
      },
      {
        "q": "Vật liệu tốt nhất cho màn hình WiFi trên tủ đầu giường khách sạn là gì?",
        "a": "Acrylic mờ, khối gỗ khắc laser hoặc thẻ đóng khung với kính không phản chiếu — đẹp mắt và không chói khi quét."
      },
      {
        "q": "Mã QR WiFi có hết hạn hoặc thu phí hàng tháng không?",
        "a": "Không. Mã WiFi tĩnh tồn tại vô thời hạn. Bất kỳ số lượng khách nào cũng có thể quét, và không bao giờ có hóa đơn nào."
      },
      {
        "q": "Mật khẩu WiFi của tôi có được lưu trên máy chủ bên ngoài khi tạo không?",
        "a": "Nó ở lại cục bộ. Trình duyệt của bạn tạo mã, nên thông tin đăng nhập không bao giờ được tải lên, ghi nhật ký hay chia sẻ."
      }
    ],
    "bestPractices": "Tách WiFi khách vào VLAN riêng, trưng bày mã ngang tầm mắt trên giá không phản chiếu mờ và thêm một dòng ngắn như \"Quét để kết nối WiFi khách\"."
  },
  '/bulk-qr-code-generator': {
    "sections": [
      {
        "title": "Sản xuất mã QR hàng loạt cho doanh nghiệp và marketing",
        "paragraphs": [
          "Tải lên tệp CSV, hoặc dán danh sách có một URL trên mỗi dòng. Trình tạo dựng từng mã ngay trong trình duyệt của bạn. Không có gì bạn dán được tải lên bất cứ đâu.",
          "Lưu từng mã một, hoặc lấy cả lô dưới dạng một tệp ZIP. Đó là cách nhanh để dán nhãn một đợt sản phẩm, gắn huy hiệu sự kiện hay điền thư gửi hàng loạt."
        ]
      }
    ]
  },
  '/qr-code-scanner': {
    "sections": [
      {
        "title": "Quét và giải mã mã QR ngay lập tức",
        "paragraphs": [
          "Hướng camera điện thoại hoặc laptop vào mã để đọc trực tiếp. Không có camera ngay bên cạnh? Thả một ảnh chụp màn hình hoặc hình ảnh vào, và nó cũng được giải mã.",
          "Mọi thứ chạy trong trình duyệt trên máy của bạn. Luồng camera và ảnh bạn tải lên đều ở lại đó."
        ]
      }
    ]
  },
  '/social-media-qr-code': {
    "sections": [
      {
        "title": "Một bảng điều khiển cho mọi mã QR mạng xã hội của bạn",
        "paragraphs": [
          "Đặt toàn bộ tên người dùng và liên kết hồ sơ của bạn vào một biểu mẫu. Bạn nhận lại một mã riêng cho mỗi nền tảng, được tô màu cho khớp với nền tảng mà nó trỏ tới.",
          "Mỗi mã tải về riêng dưới dạng PNG hoặc SVG. Dùng trên danh thiếp, trong bộ tài liệu truyền thông hay trong bất kỳ chiến dịch nào bạn đang chạy."
        ]
      }
    ]
  },
  '/blog/how-to-scan-qr-code': {
    "sections": [
      {
        "title": "Trình quét tích hợp trong camera của bạn",
        "paragraphs": [
          "Từ iOS 11 và Android 9, camera thông thường tự đọc mã QR — không cần cài ứng dụng. Hướng nó vào mã, giữ yên một giây và một biểu ngữ liên kết sẽ hiện ra. Chạm vào và bạn đã ở đó.",
          "Nếu không có gì hiện ra, thường là mã quá nhỏ trong khung hình. Di chuyển lại gần cho đến khi nó chiếm khoảng một phần ba màn hình. Trên một số điện thoại Samsung, bạn cũng cần bật quét QR bên trong cài đặt camera."
        ]
      },
      {
        "title": "Khi mã nằm trên màn hình của chính bạn",
        "paragraphs": [
          "Camera không thể hướng vào chính nó, nên một mã ai đó nhắn cho bạn cần một cách khác. Trên iPhone, chụp màn hình, mở ảnh trong Photos và chạm nút Live Text để lấy liên kết. Trên Android, lưu ảnh và mở trong Google Photos, rồi chạm Lens.",
          "Google Lens cũng là phương án dự phòng đáng tin cậy bất cứ khi nào camera Android từ chối đọc một mã ngoài đời thực — mở Lens, hướng vào và nó sẽ giải mã mã cùng mọi văn bản xung quanh."
        ]
      }
    ]
  },
  '/blog/do-qr-codes-expire': {
    "sections": [
      {
        "title": "Mã tĩnh tự giữ dữ liệu",
        "paragraphs": [
          "Một mã QR tĩnh lưu thông tin ngay trong mẫu — một liên kết, một số điện thoại, một mật khẩu WiFi. Mẫu đó không bị phân hủy. In trên nền sạch, được bảo vệ, nó vẫn quét được sau nhiều năm giống hệt như hôm nay.",
          "Khi một mã tĩnh có vẻ \"hết hạn\", hầu như không bao giờ là lỗi của mẫu. Trang nó trỏ tới đã bị xóa, liên kết đã đổi hoặc mật khẩu đã được đặt lại. Mã vẫn giải mã ra cùng địa chỉ đó; chỉ là địa chỉ ấy giờ không dẫn đi đâu nữa."
        ]
      },
      {
        "title": "Mã động phụ thuộc vào một dịch vụ",
        "paragraphs": [
          "Một mã động trỏ đến một chuyển hướng ngắn do nhà cung cấp sở hữu, và chuyển tiếp mỗi lượt quét đến đích thật của bạn. Điều đó cho phép đổi đích mà không cần in lại — nhưng giờ mã sống và chết cùng tài khoản đó và công ty đó.",
          "Hãy cẩn thận với bẫy dùng thử miễn phí: một số trình tạo động \"miễn phí\" tắt chuyển hướng sau vài tuần nếu bạn không trả tiền, và điều đó có thể làm hỏng cả nghìn tờ rơi đã in trong cùng một buổi chiều. Các mã được tạo ở đây là tĩnh, nên không có gì hết hạn và không có đăng ký nào cần duy trì."
        ]
      }
    ]
  },
  '/blog/share-wifi-password-qr-code': {
    "sections": [
      {
        "title": "Một mã, mọi điện thoại",
        "paragraphs": [
          "Một mã QR WiFi mang ba thứ — tên mạng, mật khẩu và loại bảo mật — nên một lần quét đề nghị tham gia mà không cần gõ gì. Trên iPhone, mật khẩu thậm chí không hiện trên màn hình, một lợi ích kín đáo trong quán cà phê đông đúc.",
          "Tạo một mã mất chưa đến một phút: nhập tên mạng và mật khẩu, chọn WPA2 hoặc WPA3 và tải ảnh về. Đặt nó trên mạng khách thay vì mạng mà laptop công việc của bạn dùng, vì bất kỳ ai nhìn thấy mã đều có thể tham gia."
        ]
      },
      {
        "title": "Trường hợp iPhone sang Mac",
        "paragraphs": [
          "Android có một mẹo đáng biết: trong cài đặt WiFi, bạn có thể chạm Chia sẻ và điện thoại hiển thị mã QR của mạng bạn đang kết nối, không cần trình tạo nào. iPhone quét mã theo cách tương tự nhưng không có trình tạo tích hợp.",
          "Từ iPhone sang Mac, việc quét khá lúng túng vì Mac không đọc mã trên tường như điện thoại. Con đường mượt mà bỏ qua QR: đưa một iPhone đã mở khóa lại gần Mac khi nó đang cố kết nối, và một lời nhắc sẽ đề nghị gửi mật khẩu qua. Giữ mã QR như phương án phổ quát cho khách Android và Windows."
        ]
      }
    ]
  },
  '/pdf-qr-code-generator': {
    "sections": [
      {
        "title": "Cuộc cách mạng QR PDF hiện đại cho thực đơn và tờ rơi",
        "paragraphs": [
          "Một catalogue in hay thực đơn ép plastic tốn tiền để làm và đông cứng ngay khi rời máy in. Thay một giá hay đổi một món theo mùa, theo cách cũ, bạn phải in lại cả lô. Hóa đơn đó đè lên nhà hàng, đội hội chợ, văn phòng bất động sản và bộ phận đào tạo như nhau.",
          "Một mã QR PDF cắt đứt sự ràng buộc giữa bản in và tệp đằng sau nó. Dán lên thẻ bàn, hộp, gian hàng hay cửa kính cửa hàng. Khách hướng camera và tờ rơi, thực đơn hoặc sổ tay đầy đủ của bạn mở ra trong vài giây."
        ]
      },
      {
        "title": "Mã QR PDF tĩnh so với động: cập nhật thực đơn mà không in lại",
        "paragraphs": [
          "Một mã QR PDF tĩnh gắn liên kết trực tiếp vào ma trận điểm ảnh. Di chuyển tệp Google Drive và mã đã in chết. Một mã động thay vào đó trỏ đến một chuyển hướng ngắn — kiểu như qr-generator.online/r/menu — và liên kết ngắn đó không bao giờ đổi.",
          "Vì vậy khi món đặc biệt hằng tuần thay đổi, hay một loại đồ uống tăng nửa đô, hoặc một bản catalogue mới được phát hành, bạn chỉ cần trỏ lại chuyển hướng trong bảng điều khiển. Các bàn trên sàn vẫn tiếp tục hoạt động. Không ai phải in lại gì cả."
        ]
      },
      {
        "title": "Ứng dụng của mã QR PDF theo ngành",
        "paragraphs": [
          "Nhà hàng đặt một mã trên bàn mở thực đơn món ăn và đồ uống, kèm ghi chú dị ứng và ảnh món. Môi giới đặt một mã trên biển bất động sản để người mua có thể xem sơ đồ tầng và thông tin hiệp hội chủ nhà ngay tại chỗ.",
          "Nhà sản xuất bỏ hẳn cuốn hướng dẫn giấy dày và in một mã nhỏ trên hộp dẫn đến hướng dẫn sử dụng đầy đủ."
        ]
      }
    ]
  },
  '/app-store-qr-code-generator': {
    "sections": [
      {
        "title": "Mã QR App Store thông minh và thu hút người dùng ứng dụng di động",
        "paragraphs": [
          "Hình dung ứng dụng của bạn trên áp phích tàu điện ngầm, hộp ngũ cốc, quảng cáo truyền hình hay băng rôn hội chợ. Để cài đặt, ai đó phải mở khóa điện thoại, mở đúng cửa hàng, gõ đúng tên bạn và chọn bạn trong danh sách đối thủ. Hầu hết mọi người bỏ cuộc ở đâu đó trong chuỗi đó — theo ước tính phổ biến, khoảng hai trong ba người.",
          "Một mã QR App Store thông minh duy nhất loại bỏ các bước đó. Quét mã, nó đọc thiết bị: iPhone đến Apple App Store, điện thoại Android đến Google Play. Người dùng không bao giờ phải tìm kiếm gì."
        ]
      },
      {
        "title": "Vì sao mã QR đôi thất bại so với mã QR thông minh hợp nhất",
        "paragraphs": [
          "In hai mã cạnh nhau — một cho iOS và một cho Android — và bạn đang tự tìm rắc rối. Bố cục trông rối, mọi người do dự không biết mã nào là của mình, và các camera thường bắt nhầm mã khi hai cái nằm gần nhau.",
          "Một mã thông minh duy nhất tránh được tất cả. Mỗi điện thoại có một lần quét-và-cài đặt trong một giây, và ai quét từ máy tính sẽ đến trang khuyến mãi của bạn thay vào đó."
        ]
      },
      {
        "title": "Đo lường cài đặt ứng dụng thời gian thực và ghi nhận nguồn",
        "paragraphs": [
          "Chạy các mã App Store của bạn ở đây như mã động và toàn bộ phễu mở ra. Bạn có thể thấy tỷ lệ iOS so với Android thực sự phân bố thế nào, khu vực nào đang hoạt động, và quét tập trung vào giờ nào trong ngày."
        ]
      }
    ]
  }
};
