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
