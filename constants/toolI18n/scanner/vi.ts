import type { ScannerCopy } from './types';

const vi: ScannerCopy = {
  hero: {
    badge: 'Bộ giải mã quang học trong trình duyệt',
    h1: 'Công cụ quét và đọc mã QR trực tuyến miễn phí',
    lead: 'Quét và giải mã bất kỳ mã QR nào ngay trong trình duyệt bằng webcam, camera điện thoại hoặc tải lên hình ảnh. Bảo mật 100%, kiểm tra URL tức thì và không cần tải bất kỳ ứng dụng nào.'
  },
  viewport: {
    title: 'Khung camera quang học đã sẵn sàng',
    hint: 'Nhấp "Bật camera" để quét qua luồng video trực tiếp, hoặc tải lên một tệp hình ảnh từ thiết bị của bạn.'
  },
  controls: {
    startCamera: 'Bật camera',
    stopScanning: 'Dừng quét',
    uploadImage: 'Tải ảnh lên'
  },
  errors: {
    camera: 'Quyền truy cập camera bị từ chối hoặc không khả dụng. Vui lòng kiểm tra quyền camera đã được bật trong cài đặt trình duyệt.',
    noCode: 'Không phát hiện mã QR nào có thể quét trong ảnh đã tải lên. Vui lòng đảm bảo mã vạch được lấy nét rõ và có độ tương phản cao.'
  },
  result: {
    decoded: 'Đã giải mã mã QR thành công',
    copy: 'Sao chép văn bản',
    copied: 'Đã sao chép',
    openLink: 'Mở liên kết đã xác minh ↗'
  },
  article: {
    s1: {
      badge: 'Cơ chế giải mã',
      h2: 'Hướng dẫn đầy đủ về quét mã QR quang học trên trình duyệt',
      paragraphs: [
        'Trong nhiều năm, việc quét mã QR đòi hỏi tải về các ứng dụng di động của bên thứ ba đầy quảng cáo xâm lấn, tường thu phí đăng ký và các công cụ theo dõi xâm phạm quyền riêng tư. Ngày nay, những tiến bộ của WebAssembly (WASM) và các API chuẩn của trình duyệt cho phép nhận dạng mã vạch quang học ngay trong trình duyệt web thông thường, với độ chính xác tương đương máy tính để bàn và không cần cài đặt ứng dụng nào.',
        'Trình quét mã QR trực tuyến miễn phí của chúng tôi hoạt động dựa trên bộ giải mã ma trận nhị phân tốc độ cao viết bằng JavaScript và WebAssembly. Khi bạn cấp quyền truy cập camera, ứng dụng lấy mẫu luồng video trực tiếp với tốc độ 12–15 khung hình mỗi giây, chạy thuật toán phát hiện cạnh để tìm ba mẫu định vị ở các góc (mẫu nhận dạng vị trí), hiệu chỉnh méo phối cảnh quang học, và phân tích các mô-đun dữ liệu đa thức Reed-Solomon chỉ trong vài mili giây.'
      ]
    },
    s2: {
      badge: 'An ninh mạng và an toàn',
      h2: 'Giải mã mã QR động và tĩnh: xác minh liên kết',
      intro: 'Một trong những rủi ro bảo mật lớn nhất khi quét mã vạch một cách mù quáng là "lừa đảo QR" (hay quishing), khi kẻ xấu dán nhãn giả lên thực đơn nhà hàng thật hoặc thiết bị thanh toán. Trình quét của chúng tôi hoạt động như một tường lửa thông minh, hiển thị bản xem trước rõ ràng dạng văn bản thuần của liên kết đã mã hóa trước khi trình duyệt của bạn mở trang web:',
      cards: [
        {
          title: 'Kiểm tra nội dung mã QR tĩnh',
          body: 'Mã tĩnh hiển thị ngay toàn bộ URL đích hoặc chuỗi văn bản thô. Bạn có thể kiểm tra tên miền, phát hiện tên miền viết sai (ví dụ: `paypa1.com` thay vì `paypal.com`) và sao chép liên kết vào clipboard một cách an toàn mà không kích hoạt script độc hại.'
        },
        {
          title: 'Phân tích liên kết rút gọn của mã QR động',
          body: 'Mã QR động đi qua các liên kết rút gọn sạch (ví dụ: `qr-generator.online/r/h9K7WX`). Bộ máy của chúng tôi xác minh điểm chuyển hướng theo thời gian thực và đảm bảo bạn đang truy cập một chiến dịch hợp lệ được tạo trong bảng định tuyến an toàn của nền tảng.'
        }
      ]
    },
    s3: {
      h2: 'Chuẩn dữ liệu được hỗ trợ và phân tích định dạng tự động',
      intro: 'Mã QR có thể chứa nhiều hơn nhiều so với URL website thông thường. Trình đọc trực tuyến của chúng tôi tự động nhận dạng và phân tích các giao thức dữ liệu có cấu trúc:',
      cards: [
        { title: 'Chuỗi truy cập WiFi', body: 'Giải mã định dạng `WIFI:S:MyNetwork;P:pass;T:WPA;;` để bạn có thể sao chép mật khẩu mà không cần nhập thủ công.' },
        { title: 'Tệp liên hệ vCard', body: 'Trích xuất họ tên đầy đủ, số điện thoại, email và chức danh công ty từ mã vạch danh thiếp `BEGIN:VCARD`.' },
        { title: 'Địa chỉ ví tiền điện tử', body: 'Đọc chính xác chuỗi ví Bitcoin (`bitcoin:1A...`), Ethereum (`ethereum:0x...`) và Solana gồm chữ và số.' },
        { title: 'Tọa độ địa lý', body: 'Phân tích tọa độ `geo:lat,lng` để chỉ đường ngay lập tức chỉ với một nhấp trên Google Maps hoặc Apple Maps.' },
        { title: 'Liên kết WhatsApp và SMS', body: 'Giải mã liên kết trò chuyện di động và nhắn tin SMS với từ khóa được điền sẵn thành định dạng dễ đọc.' },
        { title: 'Lịch sự kiện iCal', body: 'Phân tích tóm tắt sự kiện lịch, dấu thời gian và địa điểm được mã hóa trong cấu trúc `BEGIN:VEVENT`.' }
      ]
    },
    s4: {
      h2: 'Hướng dẫn khắc phục: Vì sao một số mã QR không quét được',
      intro: 'Nếu gặp mã vạch không được nhận diện quang học, nguyên nhân gần như luôn xuất phát từ một trong bốn bất thường vật lý hoặc kỹ thuật số phổ biến sau:',
      items: [
        { title: '1. Thiếu hoặc vi phạm vùng yên tĩnh', body: 'Nếu hình minh họa, văn bản hoặc mép tờ rơi chạm vào các ô vuông đen bên ngoài mà không có viền trắng trống rộng 4 mô-đun, cảm biến quang học không thể tính được ranh giới của mã vạch.' },
        { title: '2. Mật độ dữ liệu quá dày trong mã vạch tĩnh', body: 'Mã hóa một URL dài 250 ký tự vào mã QR tĩnh tạo ra hàng nghìn mô-đun siêu nhỏ, dễ bị nhòe trên camera độ phân giải thấp. Sử dụng **mã QR động** giải quyết vấn đề này bằng cách duy trì ma trận gọn, mật độ thấp.' },
        { title: '3. Độ tương phản thấp và màu bị đảo cực', body: 'Đầu đọc mã vạch tiêu chuẩn mong đợi các chấm dữ liệu tối trên nền sáng hơn. Chấm trắng trên nền tối hoặc các tổ hợp tương phản thấp (như vàng trên trắng) thường làm thất bại quá trình giải mã quang học.' }
      ]
    },
    s5: {
      h2: 'Trình quét web trực tuyến so với ứng dụng di động gốc',
      headers: ['Tính năng', 'Trình quét web QR Generator Online', 'Trình quét từ cửa hàng ứng dụng bên thứ ba'],
      rows: [
        ['Yêu cầu cài đặt', 'Không cần (chạy ngay trong trình duyệt)', 'Yêu cầu tải hơn 50MB và đăng nhập cửa hàng'],
        ['Quyền riêng tư và theo dõi dữ liệu', '100% riêng tư (chỉ lưu trong bộ nhớ cục bộ)', 'Thường theo dõi lịch sử duyệt web và ID quảng cáo'],
        ['Tải lên ảnh / ảnh chụp màn hình', 'Được hỗ trợ (kéo và thả mọi tệp)', 'Thường bị khóa sau gói trả phí cao cấp'],
        ['Hỗ trợ đa nền tảng', 'Phổ quát (iOS, Android, Mac, Windows, Linux)', 'Chỉ dành cho từng nền tảng cụ thể']
      ]
    },
    s6: {
      h2: 'Câu hỏi thường gặp về trình quét mã QR',
      sub: 'Giải đáp các câu hỏi kỹ thuật phổ biến về quét mã và an toàn mã vạch.'
    }
  },
  faq: [
    {
      q: 'Trình quét mã QR trực tuyến này hoạt động như thế nào mà không cần ứng dụng?',
      a: 'Trình quét mã QR chạy trên trình duyệt của chúng tôi sử dụng WebAssembly hiện đại và HTML5 MediaDevices API để kết nối trực tiếp với webcam hoặc camera điện thoại thông minh của bạn. Các khung hình của luồng video được xử lý theo thời gian thực trong bộ nhớ trình duyệt và không có dữ liệu video nào được gửi lên máy chủ đám mây.'
    },
    {
      q: 'Tôi có thể quét và giải mã mã QR từ tệp hình ảnh hoặc ảnh chụp màn hình đã lưu không?',
      a: 'Có. Chỉ cần nhấp "Tải ảnh lên" để chọn bất kỳ ảnh chụp màn hình PNG, JPG, WEBP hoặc SVG nào từ máy tính hoặc thư viện ảnh trên điện thoại. Bộ máy phân tích các điểm ảnh và giải mã ngay chuỗi mã vạch được nhúng bên trong.'
    },
    {
      q: 'Trình quét xử lý mã QR động như thế nào?',
      a: 'Khi bạn quét mã QR động (chẳng hạn các liên kết rút gọn bắt đầu bằng qr-generator.online/r/), trình quét của chúng tôi nhận diện URL chuyển hướng và hiển thị bản xem trước an toàn. Bạn có thể kiểm tra liên kết đích trước khi quyết định mở, giúp đảm bảo an toàn tối đa và phòng tránh lừa đảo.'
    },
    {
      q: 'Quét mã QR trực tuyến có an toàn và riêng tư không?',
      a: 'Có, 100%. Quyền camera và việc xử lý tệp hình ảnh được thực hiện nghiêm ngặt trong môi trường cô lập cục bộ của trình duyệt bạn. Không có hình ảnh, khung hình video hay lịch sử nội dung đã giải mã nào được tải lên, ghi lại hoặc truyền tới bất kỳ máy chủ bên thứ ba nào.'
    },
    {
      q: 'Trình quét này có thể giải mã những loại mã QR nào?',
      a: 'Bộ máy của chúng tôi giải mã tất cả các ký hiệu ma trận 2D tiêu chuẩn, bao gồm URL website, liên kết rút gọn động, thông tin đăng nhập WiFi (WIFI:), danh thiếp số vCard 3.0 (BEGIN:VCARD), trò chuyện WhatsApp, tin nhắn SMS, tọa độ Google Maps, địa chỉ ví tiền điện tử (Bitcoin, Ethereum) và sự kiện lịch.'
    },
    {
      q: 'Vì sao camera của tôi không quét được một mã QR cụ thể?',
      a: 'Lỗi quét thường xảy ra do ánh sáng môi trường không đủ, ánh chói của ống kính trên bề mặt bóng, màu mã vạch bị đảo ngược (chấm sáng trên nền tối không đủ tương phản) hoặc mẫu định vị của mã vạch bị hỏng. Với mã bị hỏng, chụp ảnh cận cảnh rồi tải tệp ảnh lên thường giúp giải mã thành công.'
    }
  ]
};

export default vi;
