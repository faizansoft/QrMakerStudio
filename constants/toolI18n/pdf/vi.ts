import type { PdfCopy } from './types';

const vi: PdfCopy = {
  hero: {
    badge: 'Bộ công cụ tài liệu & thực đơn',
    h1: 'Công cụ tạo mã QR từ PDF miễn phí',
    lead: 'Chuyển thực đơn số, tờ rơi, catalog sản phẩm và tài liệu trắng thành mã QR độ phân giải cao mang thương hiệu của bạn. Xem ngay trên điện thoại, không cần tải ứng dụng, và cập nhật động ngay trong tầm tay.'
  },
  form: {
    urlLabel: 'URL tài liệu PDF / thực đơn',
    urlPlaceholder: 'https://drive.google.com/file/... hoặc https://website-cua-ban.com/menu.pdf',
    urlHint: 'Dán liên kết PDF trực tiếp, liên kết chia sẻ Google Drive, liên kết Dropbox hoặc URL tài liệu đã lưu trữ.',
    titleLabel: 'Tiêu đề tài liệu / chiến dịch (Không bắt buộc)',
    titlePlaceholder: 'ví dụ: Thực đơn bữa tối mùa hè 2026 hoặc Catalog sản phẩm',
    qrDots: 'Chấm QR',
    background: 'Nền',
    cornerEye: 'Mắt góc',
    cornerDot: 'Chấm góc',
    dotPattern: 'Kiểu chấm',
    cornerShape: 'Hình dạng góc',
    uploadLogo: 'Tải logo lên',
    changeLogo: 'Đổi logo',
    addLogo: 'Thêm logo',
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
    title: 'Biến mã QR PDF thành mã động',
    body: 'Cập nhật thực đơn theo mùa hoặc tài liệu PDF bất cứ lúc nào mà không cần in lại giá đỡ bàn.',
    cta: 'Lưu thành QR động ⚡'
  },
  preview: {
    empty: 'Nhập URL PDF phía trên để xem trước',
    downloadPng: 'Tải PNG',
    downloadSvg: 'SVG (Vector)'
  },
  modal: {
    createdTitle: 'Đã tạo QR PDF động!',
    saveTitle: 'Lưu mã QR PDF động',
    createdBody: 'PDF của bạn hiện đã được liên kết với một liên kết rút gọn động. Bạn có thể đổi đích PDF bất cứ lúc nào từ bảng điều khiển!',
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    myQrCodes: 'Mã QR của tôi',
    viewAnalytics: 'Xem phân tích',
    campaignTitle: 'Tiêu đề chiến dịch',
    campaignPlaceholder: 'ví dụ: Thực đơn phòng ăn chính',
    targetUrl: 'URL PDF đích',
    creating: 'Đang tạo liên kết...',
    createButton: 'Tạo mã QR PDF động'
  },
  auth: {
    title: 'Tạo tài khoản cho QR PDF động',
    subtitle: 'Đăng nhập hoặc đăng ký để cập nhật tài liệu PDF của bạn bất cứ lúc nào mà không cần in lại.'
  },
  article: {
    s1: {
      badge: 'Số hóa tài liệu',
      h2: 'Hướng dẫn toàn diện về mã QR PDF cho thực đơn, catalog và tài liệu',
      paragraphs: [
        'Trong ngành ẩm thực thương mại, hội thảo thương mại, bất động sản và đào tạo doanh nghiệp, in các catalog giấy nhiều trang hoặc thực đơn nhà hàng phủ màng rất tốn kém, gây lãng phí môi trường và không thể cập nhật sau khi đã in. Chỉ một thay đổi nhỏ về giá hay việc làm lại thực đơn theo mùa trước đây cũng đòi hỏi những đợt in lại toàn bộ tốn hàng nghìn đô la.',
        'Mã QR từ PDF kết nối thế giới vật lý với các tài liệu số giàu nội dung và độ phân giải cao. Khi đặt trên thẻ bàn, bao bì sản phẩm, gian hàng triển lãm hoặc cửa kính cửa hàng, khách chỉ cần hướng camera điện thoại để mở ngay tờ rơi PDF đầy đủ, thực đơn số hoặc sổ tay hướng dẫn kỹ thuật trong vài giây, mà không phải tải ứng dụng chuyên dụng hay gõ địa chỉ web phức tạp.'
      ]
    },
    s2: {
      badge: 'Quản lý thực đơn',
      h2: 'Mã QR PDF tĩnh và động: cập nhật thực đơn mà không cần in lại',
      intro: 'Khi in mã QR trên giá đỡ acrylic, bảng kim loại đặt bàn hoặc băng rôn vinyl bền, việc chọn giữa mã tĩnh và mã động quyết định liệu các ấn phẩm in của bạn có thể thích ứng theo thời gian hay không:',
      cards: [
        {
          title: 'Mã QR PDF tĩnh',
          body: 'Mã hóa liên kết cố định trực tiếp vào ma trận điểm ảnh 2D. Nếu URL Google Drive của bạn thay đổi, hoặc bạn đổi tên tệp trên máy chủ, mã đã in sẽ hỏng vĩnh viễn và không thể sửa nếu không in lại toàn bộ.'
        },
        {
          title: 'Mã QR PDF động (Khuyến nghị)',
          body: 'Mã hóa một liên kết chuyển hướng ngắn cố định (`qr-generator.online/r/menu`). Mỗi khi bạn cập nhật món đặc biệt trong tuần, điều chỉnh giá đồ uống hoặc phát hành phiên bản catalog mới, bạn chỉ cần đổi URL đích trong bảng điều khiển. Giá đỡ bàn vật lý vẫn hoạt động 100%.'
        }
      ]
    },
    s3: {
      h2: 'Ứng dụng của mã QR PDF theo ngành',
      cards: [
        { title: 'Nhà hàng & quán rượu vang', body: 'Hiển thị giá đỡ QR không tiếp xúc trên bàn, liên kết tới toàn bộ thực đơn PDF món ăn và cocktail, kèm cảnh báo dị ứng và ảnh món ăn độ phân giải cao.' },
        { title: 'Tờ rơi bất động sản', body: 'Thêm mã QR PDF vào biển cắm sân và tờ rơi rao bán để cung cấp cho người mua bản vẽ kiến trúc đầy đủ, tài liệu hội chủ nhà và sơ đồ mặt bằng.' },
        { title: 'Hướng dẫn trên bao bì sản phẩm', body: 'Thay thế các cuốn hướng dẫn in nhiều ngôn ngữ cồng kềnh bằng một mã QR gọn nhẹ, liên kết tới hướng dẫn sử dụng PDF đa ngôn ngữ, tương tác.' },
        { title: 'Tờ thông tin y tế & dược phẩm', body: 'Cung cấp cho bệnh nhân và chuyên gia y tế hướng dẫn liều lâm sàng, bảng dữ liệu an toàn và tài liệu kê đơn có thể tải về.' },
        { title: 'Áp phích nghiên cứu & học thuật', body: 'Đặt mã QR ở góc dưới của áp phích trình bày tại hội nghị khoa học để người tham dự tải về toàn bộ bài nghiên cứu đã được phản biện.' },
        { title: 'Catalog triển lãm B2B', body: 'Loại bỏ các bộ catalog sản phẩm bán buôn in nặng nề bằng cách cung cấp cho người mua đường liên kết quét được trên thẻ tham dự, dẫn tới bảng giá bán buôn đầy đủ của bạn.' }
      ]
    },
    s4: {
      h2: 'Hướng dẫn từng bước: cách lưu trữ và tạo mã QR PDF',
      steps: [
        { title: 'Tải PDF lên bộ nhớ đám mây hoặc website của bạn', body: 'Tải tệp PDF thực đơn hoặc tờ rơi lên Google Drive, Dropbox, Microsoft OneDrive hoặc thư viện media WordPress/Shopify của bạn.' },
        { title: 'Đặt quyền chia sẻ thành "Công khai"', body: 'Trong Google Drive hoặc Dropbox, hãy đảm bảo quyền truy cập được đặt là **"Bất kỳ ai có liên kết đều có thể xem"** để khách hàng không bao giờ gặp màn hình đăng nhập.' },
        { title: 'Dán liên kết và tùy chỉnh màu thương hiệu', body: 'Dán URL chia sẻ vào ô trình tạo phía trên, tùy chỉnh bảng màu thương hiệu, tải logo nhà hàng hoặc doanh nghiệp của bạn lên, rồi tải tệp in độ phân giải cao.' }
      ]
    },
    s5: {
      h2: 'Mã QR PDF số so với thực đơn và tờ rơi giấy truyền thống',
      headers: ['Tính năng & yếu tố', 'Thực đơn mã QR PDF', 'Thực đơn giấy in'],
      rows: [
        ['Chi phí cập nhật món / giá', '0$ (cập nhật đám mây tức thì qua QR động)', '200–1.500$+ cho mỗi đợt in lại toàn bộ'],
        ['Sạch sẽ & vệ sinh', '100% không tiếp xúc trên điện thoại khách', 'Cần khử trùng các tấm phủ màng vật lý'],
        ['Dung lượng trang & hình ảnh', 'Không giới hạn số trang với ảnh có thể phóng to', 'Bị giới hạn bởi kích thước cuốn sách in'],
        ['Phân tích & theo dõi tương tác', 'Số lượt quét, thời gian và thiết bị trực tiếp', 'Không có dữ liệu theo dõi']
      ]
    },
    s6: {
      h2: 'Câu hỏi thường gặp về mã QR PDF',
      sub: 'Mọi điều bạn cần biết về việc tạo mã QR PDF và thực đơn số.'
    }
  },
  faq: [
    {
      q: 'Mã QR từ PDF hoạt động như thế nào?',
      a: 'Mã QR PDF liên kết các vật liệu in (thực đơn nhà hàng, tờ rơi, bao bì sản phẩm, catalog) với một tài liệu PDF số được lưu trữ trực tuyến (như Google Drive, Dropbox, OneDrive hoặc máy chủ website của bạn). Khi được quét, camera điện thoại của khách mở ngay tài liệu PDF trong trình duyệt di động.'
    },
    {
      q: 'Tôi có thể thay đổi hoặc cập nhật tài liệu PDF sau khi đã in mã QR không?',
      a: 'Có, nếu bạn dùng mã QR động! Với nền tảng động của chúng tôi, bạn có thể cập nhật URL PDF đích hoặc tải thực đơn theo mùa mới lên bất cứ lúc nào từ bảng điều khiển, mà không cần in lại tờ rơi, giá đỡ bàn hay bao bì sản phẩm.'
    },
    {
      q: 'Làm sao để tạo mã QR cho tệp PDF trên Google Drive hoặc Dropbox?',
      a: 'Tải PDF lên Google Drive hoặc Dropbox, đặt quyền chia sẻ thành "Bất kỳ ai có liên kết đều có thể xem", sao chép liên kết chia sẻ, dán vào trình tạo phía trên và nhấn Tạo. Hệ thống của chúng tôi tự động tối ưu liên kết để quét bằng điện thoại.'
    },
    {
      q: 'Kích thước tệp PDF nào được khuyến nghị để quét mã QR nhanh?',
      a: 'Chúng tôi khuyến nghị nén tệp PDF xuống dưới 5 MB (lý tưởng là dưới 2 MB). Các tệp PDF lớn nhiều trang có thể làm tải chậm trên mạng di động khi khách quét mã QR của bạn.'
    },
    {
      q: 'Tôi có thể theo dõi bao nhiêu người quét và xem mã QR PDF của mình không?',
      a: 'Có. Khi lưu mã QR PDF của bạn thành mã QR động miễn phí, bảng điều khiển sẽ theo dõi tổng số lượt quét, khách truy cập duy nhất, ngày quét, hệ điều hành thiết bị (iOS so với Android) và vị trí địa lý (quốc gia và thành phố).'
    },
    {
      q: 'Tôi có thể tùy chỉnh thiết kế và thêm logo nhà hàng hoặc doanh nghiệp không?',
      a: 'Có. Bạn có thể tùy chỉnh màu nền trước và nền của QR, kiểu chấm (bo tròn, thanh lịch, chấm tròn), hình dạng ô vuông ở góc, và tải logo doanh nghiệp độ phân giải cao lên để hiển thị ở giữa.'
    }
  ]
};

export default vi;
