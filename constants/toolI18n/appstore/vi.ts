import type { AppStoreCopy } from './types';

const vi: AppStoreCopy = {
  hero: {
    badge: 'Định tuyến ứng dụng thông minh',
    h1: 'Công cụ tạo mã QR App Store miễn phí',
    lead: 'Tạo một mã QR thông minh duy nhất cho iOS và Android. Tự động chuyển người dùng iPhone đến App Store của Apple và người dùng Android đến Google Play, kèm đo lường lượt cài đặt theo thời gian thực.'
  },
  form: {
    appTitleLabel: 'Tên ứng dụng / tên thương hiệu',
    appTitlePlaceholder: 'ví dụ: Ứng dụng di động Acme',
    iosLabel: 'URL App Store của Apple (iOS)',
    androidLabel: 'URL Google Play Store (Android)',
    webLabel: 'URL website dự phòng (máy tính / khác)',
    webPlaceholder: 'https://ungdungcuaban.com',
    qrDots: 'Chấm QR',
    background: 'Nền',
    cornerEye: 'Mắt góc',
    cornerDot: 'Chấm góc',
    dotPattern: 'Kiểu chấm',
    cornerShape: 'Hình dạng góc',
    appIcon: 'Biểu tượng / logo ứng dụng',
    changeIcon: 'Đổi biểu tượng',
    addIcon: 'Thêm biểu tượng ứng dụng',
    dotStyles: {
      rounded: 'Bo tròn',
      dots: 'Chấm tròn',
      classy: 'Thanh lịch',
      'classy-rounded': 'Thanh lịch bo tròn',
      square: 'Vuông',
      'extra-rounded': 'Bo tròn nhiều'
    },
    cornerShapes: {
      'extra-rounded': 'Bo tròn nhiều',
      dot: 'Chấm tròn',
      square: 'Vuông'
    }
  },
  dynamicBox: {
    title: 'Theo dõi lượt cài ứng dụng bằng QR động',
    body: 'Theo dõi chuyển đổi lượt quét theo thiết bị (iOS so với Android), quốc gia và thành phố theo thời gian thực.',
    cta: 'Lưu thành QR động ⚡'
  },
  preview: {
    downloadPng: 'Tải PNG',
    downloadSvg: 'SVG (Vector)'
  },
  modal: {
    createdTitle: 'Đã tạo QR ứng dụng động!',
    saveTitle: 'Lưu mã QR App Store động',
    createdBody: 'Mã QR App Store thông minh của bạn đã hoạt động. Theo dõi lượt cài và cập nhật liên kết bất cứ lúc nào từ bảng điều khiển!',
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    myQrCodes: 'Mã QR của tôi',
    viewAnalytics: 'Xem phân tích',
    campaignTitle: 'Tiêu đề chiến dịch',
    campaignPlaceholder: 'ví dụ: Ra mắt ứng dụng trên iOS và Android',
    primaryTarget: 'Liên kết đích chính',
    creating: 'Đang tạo liên kết thông minh...',
    createButton: 'Tạo mã QR App Store động'
  },
  auth: {
    title: 'Tạo tài khoản cho QR ứng dụng thông minh',
    subtitle: 'Đăng nhập hoặc đăng ký để theo dõi phân tích lượt cài ứng dụng và cập nhật liên kết cửa hàng bất cứ lúc nào.'
  },
  article: {
    s1: {
      badge: 'Kiến trúc tăng trưởng ứng dụng',
      h2: 'Hướng dẫn toàn diện về mã QR App Store thông minh và thu hút người dùng di động',
      paragraphs: [
        'Trong tiếp thị ứng dụng ngoài đời thực—dù là trên biển quảng cáo tàu điện ngầm, tài liệu kèm theo sản phẩm, quảng cáo truyền hình, gian hàng hội chợ hay tờ rơi gửi thư trực tiếp—việc yêu cầu người dùng tiềm năng mở điện thoại, khởi động cửa hàng ứng dụng, gõ đúng tên ứng dụng của bạn và lọc qua kết quả tìm kiếm của đối thủ tạo ra rào cản rất lớn. Các nghiên cứu cho thấy hơn 65% người dùng tiềm năng bỏ cuộc trong quá trình tìm kiếm thủ công trên cửa hàng ứng dụng.',
        'Một mã QR App Store thông minh duy nhất loại bỏ hoàn toàn rào cản này. Bằng cách sử dụng định tuyến thiết bị thông minh, một mã vạch có thể quét sẽ tự động đưa người dùng iOS đến App Store của Apple và người dùng Android đến Google Play Store mà không cần người dùng phải đưa ra bất kỳ quyết định nào.'
      ]
    },
    s2: {
      badge: 'Tối ưu hóa chuyển đổi',
      h2: 'Vì sao in hai mã QR riêng biệt làm giảm tỷ lệ chuyển đổi',
      intro: 'Nhiều nhóm tiếp thị mắc sai lầm nghiêm trọng khi in các mã vạch đặt cạnh nhau với nhãn "Quét cho iOS" và "Quét cho Android". Dưới đây là lý do vì sao định tuyến thông minh hợp nhất vượt trội hơn hai mã riêng:',
      dualTitle: 'Nhược điểm của hai mã QR riêng',
      dualItems: [
        '**Rối mắt:** Hai mã vạch dày đặc chiếm mất không gian in quý giá trên bao bì.',
        '**Gánh nặng nhận thức:** Buộc người tiêu dùng phải dừng lại và xác định hệ điều hành họ đang dùng.',
        '**Camera quét nhầm:** Camera điện thoại thường lấy nét nhầm vào mã liền kề, khiến thiết bị Android gặp thông báo lỗi khi cố mở liên kết App Store của Apple.'
      ],
      unifiedTitle: 'Sức mạnh của mã QR thông minh hợp nhất',
      unifiedItems: [
        '**Một mã vạch gọn gàng:** Tối đa hóa độ nổi bật của logo và tính thẩm mỹ khi in.',
        '**Quét không cản trở trong 1 giây:** Người dùng không cần suy nghĩ—quét và cài đặt ngay.',
        '**Dự phòng thông minh:** Chuyển hướng người dùng máy tính một cách liền mạch đến website tiếp thị của bạn.'
      ]
    },
    s3: {
      h2: 'Vị trí ngoại tuyến chiến lược để tối đa hóa lượt tải ứng dụng',
      cards: [
        { title: 'Bao bì sản phẩm & hộp phần cứng', body: 'Đặt mã QR App Store lên nắp bên trong của thiết bị gia dụng thông minh hoặc điện tử tiêu dùng, kèm nhãn: "Quét để tải ứng dụng di động đi kèm và bắt đầu thiết lập."' },
        { title: 'Hóa đơn tại quầy & thẻ bàn', body: 'In mã QR trên hóa đơn nhà hàng để khuyến khích thực khách tải ứng dụng tích điểm của bạn, được giảm ngay 5$ cho bữa ăn tiếp theo.' },
        { title: 'Biển quảng cáo giao thông & ngoài trời', body: 'Sử dụng mã QR SVG vector khổ lớn trên áp phích tàu điện ngầm, nơi hành khách có thời gian chờ và kết nối di động nhanh.' },
        { title: 'Thư trực tiếp & bưu thiếp', body: 'Gửi thư quảng cáo trực tiếp đến các mã bưu chính với mã QR tương phản cao, tặng mã khuyến mãi độc quyền trong ứng dụng.' },
        { title: 'Thẻ hội nghị & băng rôn', body: 'In mã QR của ứng dụng hướng dẫn sự kiện chính thức trên dây đeo thẻ người tham dự để truy cập lịch trình và nhận cập nhật thông báo đẩy ngay lập tức.' },
        { title: 'Decal đội xe', body: 'Dán mã QR vinyl tương phản cao lên xe dịch vụ và xe giao hàng để đặt dịch vụ qua ứng dụng khi đang di chuyển.' }
      ]
    },
    s4: {
      h2: 'Đo lường lượt quét ứng dụng trực tiếp & phân bổ theo kênh',
      intro: 'Khi quản lý mã QR App Store động qua nền tảng của chúng tôi, bạn có được cái nhìn đầy đủ về phễu chuyển đổi trong thực tế:',
      items: [
        { title: 'Tỷ lệ iOS so với Android', body: 'Đo tỷ lệ phần trăm chính xác của các thiết bị quét tài liệu vật lý của bạn để tối ưu nguồn lực phát triển ứng dụng di động trong tương lai.' },
        { title: 'Điểm nóng địa lý', body: 'Theo dõi khu vực đô thị và quốc gia nào tạo ra tốc độ cài đặt cao nhất để định hướng ngân sách quảng cáo theo vùng.' },
        { title: 'Định tuyến URL theo thời gian thực', body: 'Cập nhật ngay tên gói trên cửa hàng hoặc tham số liên kết sâu từ bảng điều khiển mà không cần in lại tài liệu hiện có.' }
      ]
    },
    s5: {
      h2: 'Mã QR App Store hợp nhất so với tìm kiếm thủ công trên cửa hàng',
      headers: ['Chỉ số', 'Mã QR App Store hợp nhất', 'Tìm kiếm thủ công "Tìm chúng tôi trên App Store"'],
      rows: [
        ['Thời gian đến màn hình cài đặt', 'Dưới 2 giây (liên kết sâu trực tiếp đến cửa hàng)', '30–60+ giây (mở ứng dụng, gõ, tìm kiếm)'],
        ['Rủi ro bị đối thủ chiếm khách', '0% (mở đúng mã sản phẩm của bạn)', 'Cao (đối thủ chạy quảng cáo tìm kiếm trên App Store)'],
        ['Nhận diện thiết bị', 'Định tuyến iOS/Android tự động 100%', 'Người dùng phải tự chọn cửa hàng'],
        ['Theo dõi phân tích', 'Số lượt quét, thiết bị và vị trí trực tiếp', 'Không có dữ liệu theo dõi']
      ]
    },
    s6: {
      h2: 'Câu hỏi thường gặp về mã QR App Store',
      sub: 'Mọi điều bạn cần biết về mã QR App Store đa nền tảng.'
    }
  },
  faq: [
    {
      q: 'Mã QR App Store đa liên kết hoạt động như thế nào?',
      a: 'Mã QR App Store đa liên kết là một mã vạch hợp nhất duy nhất, tự động nhận diện hệ điều hành của thiết bị quét. Nếu quét bằng iPhone hoặc iPad, mã sẽ chuyển hướng trực tiếp đến trang App Store của Apple của bạn; nếu quét bằng thiết bị Android, mã sẽ chuyển ngay đến Google Play.'
    },
    {
      q: 'Tôi có thể thêm URL website dự phòng cho người quét trên máy tính không?',
      a: 'Có. Bạn có thể chỉ định URL website dự phòng. Nếu người dùng quét hoặc nhấp vào liên kết từ máy tính để bàn hoặc laptop, họ sẽ được chuyển đến trang đích tiếp thị hoặc ứng dụng web của bạn.'
    },
    {
      q: 'Vì sao nên dùng một mã QR thay vì hai mã riêng cho iOS và Android?',
      a: 'In hai mã QR riêng biệt (một cho iOS, một cho Android) gây rối mắt, làm khách hàng bối rối và chiếm mất một nửa không gian in vật lý của bạn. Một mã QR App Store thông minh duy nhất mang lại trải nghiệm quét và cài đặt không cản trở chỉ trong 1 giây cho 100% người dùng điện thoại thông minh.'
    },
    {
      q: 'Tôi có thể theo dõi hệ điều hành nào (iOS hay Android) mang lại nhiều lượt cài đặt ứng dụng hơn không?',
      a: 'Có! Khi bạn lưu mã App Store thông minh thành mã QR động, bảng điều khiển sẽ cung cấp đo lường thời gian thực chia tổng lượt quét theo hệ điều hành (iOS so với Android), mẫu thiết bị và vị trí địa lý (quốc gia và thành phố).'
    },
    {
      q: 'Tôi nên in mã QR App Store ở đâu để có nhiều lượt tải nhất?',
      a: 'Các vị trí vật lý có tỷ lệ chuyển đổi cao gồm hộp bao bì sản phẩm, hóa đơn giấy, quảng cáo biển hiệu giao thông, phông nền gian hàng hội chợ, tờ rơi gửi thư trực tiếp và thẻ hội nghị.'
    },
    {
      q: 'Tôi có thể cập nhật liên kết App Store hoặc Google Play sau khi đã in không?',
      a: 'Có. Với mã QR động, bạn có thể thay đổi URL cửa hàng ứng dụng hoặc trỏ đến bản phát hành ứng dụng mới bất cứ lúc nào từ bảng điều khiển mà không cần in lại bao bì hay biển quảng cáo.'
    }
  ]
};

export default vi;
