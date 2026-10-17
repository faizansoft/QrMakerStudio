import type { BulkCopy } from './types';

const vi: BulkCopy = {
  hero: {
    badge: 'Bộ công cụ sản xuất khối lượng lớn',
    h1: 'Công cụ tạo mã QR hàng loạt miễn phí',
    lead: 'Tạo hàng loạt hàng chục hoặc hàng trăm mã QR tùy chỉnh cùng lúc từ danh sách văn bản hoặc tệp CSV. Xuất tất cả tệp dưới dạng PNG độ phân giải cao hoặc SVG vector, đóng gói trong một tệp ZIP được tổ chức gọn gàng.'
  },
  input: {
    enterHeading: 'Nhập URL hoặc dữ liệu văn bản',
    uploadCsv: 'Tải lên CSV / TXT',
    placeholder: 'Nhập một URL hoặc chuỗi văn bản trên mỗi dòng:\nhttps://example.com/promo-1\nhttps://example.com/promo-2\nhttps://example.com/menu-ban-1\nhttps://example.com/menu-ban-2\nSKU-98234-DO-XL',
    items: (n) => `Đã phát hiện ${n} mục`,
    onePerLine: 'Mỗi dòng một mục',
    foreground: 'Màu nền trước',
    background: 'Màu nền',
    exportFormat: 'Định dạng xuất',
    formatPng: 'PNG (Raster)',
    formatSvg: 'SVG (Vector)',
    generating: (done, total) => `Đang tạo ${done} trên ${total}...`,
    generateCount: (n) => `Tạo ${n} mã QR`,
    generateBatch: 'Tạo mã hàng loạt'
  },
  output: {
    rendered: (n) => `Đã tạo ${n} mã QR`,
    rendHint: 'Nhấp vào bất kỳ mã nào để tải xuống riêng lẻ, hoặc tải toàn bộ gói ZIP.',
    downloadZip: 'Tải ZIP',
    cardTitle: (text) => `Nhấp để tải xuống: ${text}`,
    cardOverlay: 'Tải xuống',
    emptyTitle: 'Bản xem trước hàng loạt sẽ hiển thị tại đây',
    emptyBody: 'Nhập hoặc dán URL ở bên trái, hoặc tải lên bảng tính CSV để tạo mã vạch ngay lập tức.'
  },
  article: {
    s1: {
      badge: 'Kiến trúc sản xuất',
      h2: 'Hướng dẫn toàn diện về tạo mã QR hàng loạt quy mô lớn',
      paragraphs: [
        'Trong logistics công nghiệp hiện đại, quản lý sự kiện, thương mại bán lẻ và tiếp thị doanh nghiệp, việc tạo mã QR từng cái một vừa kém hiệu quả vừa dễ xảy ra sai sót. Dù bạn đang tạo 50 mã đặt món riêng cho các bàn trong nhà hàng, 5.000 nhãn xác thực sản phẩm có số sê-ri cho bao bì sản xuất, hay 10.000 thẻ đeo cá nhân hóa cho một hội nghị quốc tế, thì tạo mã QR hàng loạt vẫn là năng lực vận hành không thể thiếu.',
        'Công cụ tạo hàng loạt miễn phí của chúng tôi hoạt động hoàn toàn trên quy trình kết xuất hiệu năng cao phía máy khách. Thay vì gửi dữ liệu riêng tư của bạn qua hàng đợi máy chủ từ xa, vốn gây ra độ trễ, giới hạn tốc độ và rủi ro nghiêm trọng về quyền riêng tư, công cụ của chúng tôi biên dịch các ma trận 2D ngay trong động cơ trình duyệt của bạn. Kiến trúc này đảm bảo không có chuyến khứ hồi nào tới máy chủ, xử lý tức thời hàng trăm dòng và giữ bí mật tuyệt đối cho các URL độc quyền cũng như mã thông báo nội bộ của doanh nghiệp.'
      ]
    },
    s2: {
      badge: 'Chiến lược chiến dịch',
      h2: 'Mã QR tĩnh và mã QR động trong sản xuất hàng loạt',
      intro: 'Khi triển khai các đợt in mã QR quy mô lớn, việc chọn kiến trúc mã vạch phù hợp giữa **Mã QR tĩnh** và **Mã QR động** là quyết định quan trọng nhất trong vòng đời chiến dịch của bạn:',
      staticCard: {
        title: 'Mã QR tĩnh hàng loạt',
        body: 'Mã tĩnh mã hóa vĩnh viễn văn bản hoặc URL đích vào mẫu điểm ảnh 2D. Sau khi được in lên hộp các tông, tấm nhôm hoặc tờ rơi, dữ liệu đã mã hóa không thể thay đổi.',
        points: [
          { tone: 'plain', text: '**Không cần tra cứu internet:** Giải mã hoàn toàn ngoại tuyến.' },
          { tone: 'plain', text: '**Tuổi thọ vĩnh viễn:** Không bao giờ hết hạn và không phụ thuộc vào máy chủ.' },
          { tone: 'bad', text: '**Không thể chỉnh sửa:** Chỉ cần một lỗi chính tả là phải in lại toàn bộ.' },
          { tone: 'bad', text: '**Không có phân tích lượt quét:** Không thể theo dõi mức độ tương tác của khách truy cập.' }
        ]
      },
      dynamicCard: {
        title: 'Mã QR động hàng loạt',
        body: 'Mã động mã hóa một URL chuyển hướng ngắn (`qr-generator.online/r/xyz`) trỏ tới bảng định tuyến được quản lý trên đám mây. Khi được quét, khách truy cập sẽ được chuyển ngay tới đích bạn đã đặt.',
        points: [
          { tone: 'good', text: '**Đích có thể chỉnh sửa theo thời gian thực:** Thay đổi URL bất cứ lúc nào mà không cần in lại.' },
          { tone: 'good', text: '**Phân tích đo từ xa chuyên sâu:** Theo dõi số lượt quét, thiết bị, hệ điều hành, quốc gia và thành phố.' },
          { tone: 'good', text: '**Ma trận mã sạch hơn:** URL càng ngắn thì các ô mô-đun càng lớn và càng dễ quét.' },
          { tone: 'plain', text: '**Hỗ trợ thử nghiệm A/B:** Chuyển hướng lưu lượng động tới các trang khuyến mãi thay thế.' }
        ]
      },
      recommendation: '**Khuyến nghị chiến lược:** Nếu bạn đang sản xuất các tài sản vật lý có tuổi thọ dài (như bao bì sản phẩm, biển quảng cáo ngoài trời hoặc bảng số sê-ri kim loại), hãy dùng **Mã QR động** thông qua bảng điều khiển tài khoản của bạn. Đối với vé sự kiện dùng một lần, thẻ truy cập WiFi nội bộ hoặc mã nhận dạng số sê-ri dạng văn bản thuần, việc tạo mã tĩnh hàng loạt là lựa chọn lý tưởng.'
    },
    s3: {
      h2: 'Hướng dẫn từng bước: Chuẩn bị tệp CSV để tạo hàng loạt',
      intro: 'Để tối đa hóa thông lượng và đảm bảo không có lỗi khi tạo mã vạch, hãy sắp xếp dữ liệu bảng tính theo định dạng ASCII hoặc UTF-8 chuẩn, gọn gàng:',
      steps: [
        { title: 'Sắp xếp dữ liệu trong Microsoft Excel hoặc Google Trang tính', body: 'Đặt mỗi URL đích hoặc chuỗi văn bản thô vào Cột A. Đảm bảo tất cả liên kết website đều có tiền tố giao thức (ví dụ: `https://`).' },
        { title: 'Xuất dưới dạng giá trị phân tách bằng dấu phẩy (.csv) hoặc văn bản thuần (.txt)', body: 'Chọn Tệp ➔ Lưu thành ➔ CSV (phân tách bằng dấu phẩy). Hãy chọn mã hóa UTF-8 nếu tập dữ liệu của bạn có ký tự quốc tế hoặc tên có dấu.' },
        { title: 'Tải lên và tùy chỉnh thông số hình ảnh', body: 'Nhấp "Tải lên CSV" ở trên để nhập tệp của bạn. Chọn màu nền trước và nền có độ tương phản cao (ví dụ: than đậm trên nền trắng), chọn định dạng ưa thích (PNG hoặc SVG vector) rồi nhấn "Tạo".' },
        { title: 'Tải xuống từng tệp riêng lẻ hoặc toàn bộ tệp ZIP', body: 'Xem lại lưới xem trước hình ảnh đã tạo. Tải xuống từng tệp bằng cách nhấp vào bất kỳ thẻ nào, hoặc nhấp "Tải tất cả (ZIP)" để nhận một kho lưu trữ được tổ chức với tên tệp đánh số, sẵn sàng cho khâu chuẩn bị in thương mại.' }
      ]
    },
    s4: {
      h2: 'Các trường hợp sử dụng công nghiệp và doanh nghiệp cho sản xuất mã QR hàng loạt',
      cards: [
        { title: 'Nhà hàng và khách sạn nhiều bàn', body: 'Tạo mã QR riêng cho từng bàn ăn (ví dụ: `https://bistro.com/order?table=12`) để nhân viên phục vụ có thể chuyển các đơn đặt món kỹ thuật số không tiếp xúc trực tiếp tới POS của bếp, kèm vị trí bàn chính xác.' },
        { title: 'Thẻ sự kiện và bán vé', body: 'Tạo hàng nghìn thẻ tham dự duy nhất có thể quét, được mã hóa bằng băm xác thực vé mật mã để check-in nhanh tại cổng soát vé và ngăn chặn gian lận.' },
        { title: 'Sản xuất và theo dõi tài sản theo số sê-ri', body: 'Mã hóa số sê-ri, mã lô sản xuất và sách hướng dẫn vận hành kỹ thuật số lên nhãn thiết bị công nghiệp để tra cứu bảo trì tại hiện trường ngay lập tức.' },
        { title: 'Chiến dịch tiếp thị nhiều địa điểm', body: 'Tạo hàng trăm URL có gắn thẻ UTM riêng biệt cho quảng cáo biển hiệu tại nhiều khu vực đô thị, để đánh giá tỷ lệ chuyển đổi theo từng khu vực một cách chính xác.' }
      ]
    },
    s5: {
      h2: 'Quy trình hàng loạt so với công cụ tạo mã đơn lẻ truyền thống',
      headers: ['Tính năng và chỉ số', 'Công cụ tạo mã đơn lẻ', 'Công cụ tạo hàng loạt'],
      rows: [
        ['Tốc độ tạo', 'Thủ công, 1 mã mỗi 30–60 giây', 'Tự động, hơn 100 mã trong dưới 5 giây'],
        ['Quy trình nhập dữ liệu', 'Sao chép và dán thủ công vào ô nhập', 'Nhập bảng tính CSV, TXT'],
        ['Tổ chức tệp', 'Tải xuống rải rác trong thư mục trình duyệt', 'Kho lưu trữ ZIP hợp nhất, có cấu trúc'],
        ['Tính đồng nhất kiểu dáng', 'Rủi ro điều chỉnh màu hoặc lề không nhất quán', 'Màu sắc, kích thước và biên độ lỗi thống nhất 100%'],
        ['Xuất SVG vector', 'Tải xuống riêng cho từng mã', 'Xuất SVG vector hàng loạt để in ấn chuyên nghiệp']
      ]
    },
    s6: {
      h2: 'Tiêu chuẩn in ấn và tối ưu hóa sửa lỗi',
      intro: 'Khi in mã QR hàng loạt trên vật liệu thực tế (nhãn giấy, bao bì sản phẩm hoặc decal nhựa vinyl), việc tuân thủ tiêu chuẩn ISO/IEC 18004 sẽ đảm bảo camera quét được ngay lập tức trong nhiều điều kiện ánh sáng khác nhau:',
      cards: [
        { title: 'Lề vùng yên tĩnh', body: 'Giữ một viền trống có độ rộng ít nhất 4 mô-đun xung quanh toàn bộ mã vạch để các yếu tố đồ họa xung quanh không làm nhiễu cảm biến của máy quét quang học.' },
        { title: 'Độ phân giải trên 300 DPI', body: 'Luôn xuất dưới dạng SVG vector hoặc dùng ảnh PNG 800x800 px được kết xuất ở 300 điểm trên inch để có đường viền sắc nét khi in offset.' },
        { title: 'Dự phòng mức H (30%)', body: 'Công cụ của chúng tôi áp dụng sửa lỗi Reed-Solomon mức H, cho phép mã vạch được giải mã hoàn hảo ngay cả khi tới 30% bề mặt bị xước hoặc che khuất.' }
      ]
    },
    s7: {
      h2: 'Câu hỏi thường gặp về công cụ tạo mã QR hàng loạt',
      sub: 'Mọi điều bạn cần biết về việc tạo mã QR theo lô và triển khai ở quy mô doanh nghiệp.'
    }
  },
  faq: [
    {
      q: 'Tôi có thể tạo bao nhiêu mã QR hàng loạt cùng lúc?',
      a: 'Bạn có thể tạo hàng trăm mã QR đồng thời mà không có giới hạn nhân tạo nào. Vì mọi xử lý được thực hiện phía máy khách trong trình duyệt web của bạn, quá trình tạo mã diễn ra cực nhanh và sử dụng bộ nhớ máy tính hiệu quả mà không bị chờ trong hàng đợi.'
    },
    {
      q: 'Sự khác biệt giữa mã QR tĩnh hàng loạt và mã QR động là gì?',
      a: 'Mã QR tĩnh hàng loạt mã hóa vĩnh viễn chính xác URL hoặc văn bản vào mẫu mã vạch. Ngược lại, mã QR động mã hóa các URL chuyển hướng ngắn được quản lý trên nền tảng của chúng tôi, cho phép bạn thay đổi URL đích bất cứ lúc nào sau khi in và theo dõi phân tích lượt quét trực tiếp (thiết bị của khách truy cập, vị trí địa lý và thời gian quét).'
    },
    {
      q: 'Tệp CSV tải lên cần có định dạng như thế nào?',
      a: 'Tệp CSV hoặc TXT của bạn cần có một URL hoặc chuỗi văn bản trên mỗi dòng. Tiêu đề là không bắt buộc. Trình phân tích tự động nhận diện và làm sạch các URL thô, chuỗi văn bản, đoạn vCard và mã SKU sản phẩm.'
    },
    {
      q: 'Tôi có thể tải tất cả mã QR đã tạo trong một tệp ZIP duy nhất không?',
      a: 'Có. Sau khi quá trình tạo hàng loạt hoàn tất, nhấp "Tải tất cả (ZIP)" sẽ gói mọi mã vạch PNG độ phân giải cao hoặc SVG vector đã tạo vào một tệp ZIP được tổ chức gọn gàng, với tên tệp rõ ràng khớp với dữ liệu đầu vào.'
    },
    {
      q: 'Mã QR hàng loạt có riêng tư và an toàn không?',
      a: 'Có, 100%. Toàn bộ quá trình kết xuất hàng loạt diễn ra trong môi trường trình duyệt cục bộ của bạn bằng JavaScript phía máy khách. Dữ liệu lô, URL khách hàng và số sê-ri tồn kho sản phẩm của bạn không bao giờ được tải lên hoặc lưu trữ trên máy chủ bên ngoài.'
    },
    {
      q: 'Tôi nên dùng độ phân giải in và mức sửa lỗi nào cho nhãn hàng loạt?',
      a: 'Mặc định, chúng tôi tạo các tệp độ phân giải cao 800x800 px (hoặc SVG vector để có khả năng co giãn vô hạn). Chúng tôi áp dụng sửa lỗi mức H (dự phòng 30% dữ liệu) để đảm bảo mã vạch vẫn quét được 100% ngay cả trên bao bì có kết cấu hoặc chai cong.'
    }
  ]
};

export default vi;
