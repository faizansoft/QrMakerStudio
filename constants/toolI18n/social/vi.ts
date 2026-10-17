import type { SocialCopy } from './types';

const vi: SocialCopy = {
  hero: {
    badge: 'Trung tâm mạng xã hội đa kênh',
    h1: 'Công cụ tạo mã QR mạng xã hội miễn phí',
    lead: 'Tạo mã QR mang thương hiệu, đồng màu cho Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Facebook và WhatsApp. Kết nối khán giả ngoài đời thực với các kênh mạng xã hội số của bạn chỉ bằng một lần chạm.'
  },
  brandLabel: 'Tên thương hiệu / nhà sáng tạo',
  brandPlaceholder: 'ví dụ: Acme Brand hoặc @AlexCreator',
  configureHeading: 'Thiết lập các kênh mạng xã hội của bạn',
  platforms: {
    labels: {
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      twitter: 'Twitter / X',
      tiktok: 'TikTok',
      facebook: 'Facebook',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      website: 'Website',
      email: 'Email'
    },
    placeholders: {
      instagram: 'tên người dùng',
      youtube: 'https://youtube.com/@kenh',
      linkedin: 'https://linkedin.com/in/ten',
      twitter: 'tên tài khoản',
      tiktok: 'tên người dùng',
      facebook: 'https://facebook.com/trang',
      telegram: 'tên người dùng',
      whatsapp: 'số điện thoại',
      website: 'https://website-cua-ban.com',
      email: 'ban@email.com'
    }
  },
  channels: (n) => `Đã thiết lập ${n} kênh`,
  generate: 'Tạo mã QR mạng xã hội',
  readyHeading: 'Mã QR mạng xã hội mang thương hiệu đã sẵn sàng',
  readyBadge: 'Vector độ phân giải cao sẵn sàng',
  article: {
    s1: {
      badge: 'Thu hút khán giả',
      h2: 'Hướng dẫn toàn diện về mã QR mạng xã hội và chuyển đổi khán giả',
      paragraphs: [
        'Trong thời đại sự chú ý của người tiêu dùng bị phân tán giữa hàng chục hệ sinh thái số—từ video ngắn TikTok và story Instagram đến mạng chuyên nghiệp LinkedIn, lớp học chuyên sâu trên YouTube và kênh VIP WhatsApp—việc buộc khán giả ngoài đời thực phải tự gõ tên người dùng và tìm kiếm tài khoản sẽ khiến tỷ lệ chuyển đổi giảm ngay hơn 70%.',
        'Mã QR mạng xã hội mang thương hiệu xóa bỏ hoàn toàn rào cản giữa các điểm chạm ngoài đời và người theo dõi trên không gian số. Khi quét một mã vạch tương phản cao, được thiết kế riêng trên bao bì, thẻ bàn hoặc kính cửa hàng, camera điện thoại sẽ lập tức mở liên kết sâu của ứng dụng trực tiếp đến hồ sơ đã xác minh của bạn, giúp người dùng theo dõi, đăng ký kênh và trò chuyện với khách hàng ngay tức thì.'
      ]
    },
    s2: {
      badge: 'So sánh chiến lược',
      h2: 'Mã riêng cho từng kênh và trang liên kết động đa đường dẫn',
      intro: 'Tùy theo cấu trúc chiến dịch tiếp thị và không gian vật lý của bạn, bạn có thể triển khai mã QR mạng xã hội theo hai cấu hình khác nhau:',
      cards: [
        {
          title: 'Mã mạng xã hội riêng theo thương hiệu',
          body: 'Tạo các mã QR chuyên biệt, một mục đích, đồng màu với bảng màu của từng nền tảng (đỏ YouTube, gradient Instagram, xanh LinkedIn). Phù hợp nhất cho các ấn phẩm riêng như thẻ đứng trên bàn quán cà phê ghi "Theo dõi chúng tôi trên Instagram" hoặc thẻ cuối trên hàng hóa in ấn ghi "Đăng ký kênh YouTube".'
        },
        {
          title: 'Mã trang liên kết động đa đường dẫn',
          body: 'Mã hóa một liên kết rút gọn động duy nhất, đưa người truy cập đến một trang đích gọn gàng trên điện thoại, nơi tập hợp tất cả liên kết mạng xã hội của bạn cùng lúc. Nhờ công cụ động của chúng tôi, bạn có thể thêm hồ sơ mới, cập nhật liên kết và xem phân tích lượt quét địa lý trực tiếp bất cứ lúc nào mà không cần in lại.'
        }
      ]
    },
    s3: {
      h2: 'Vị trí đặt mã vật lý chiến lược để tăng chuyển đổi người theo dõi',
      cards: [
        { title: 'Thẻ kèm theo bao bì thương mại điện tử', body: 'Đặt một thẻ mở hộp trong gói hàng của khách với lời kêu gọi nổi bật: "Quét và gắn thẻ chúng tôi trên Instagram để nhận giảm giá 15% cho đơn hàng tiếp theo."' },
        { title: 'Thẻ để bàn trong nhà hàng, khách sạn', body: 'Đặt một giá đỡ bàn bằng gỗ thanh lịch liên kết tới các video món ăn trên Instagram và trang đánh giá Google trong khi khách chờ món.' },
        { title: 'Banner gian hàng hội chợ', body: 'In mã QR vector SVG kích thước lớn 10x10 cm trên phông nền gian hàng để người tham dự đi qua có thể kết nối ngay trên LinkedIn.' },
        { title: 'Decal tại quầy thanh toán cửa hàng', body: 'Đặt nhãn dán trên quầy gần máy quẹt thẻ, mời khách mua sắm tham gia kênh WhatsApp VIP của bạn để nhận ưu đãi flash sale độc quyền.' },
        { title: 'Slide thuyết trình sự kiện', body: 'Nhúng mã QR LinkedIn và X/Twitter vào slide cuối bài thuyết trình để khán giả kết nối ngay trong phần hỏi đáp.' },
        { title: 'Hàng hóa của nghệ sĩ và nhạc sĩ', body: 'In mã QR có thể quét lên thẻ treo áo phông hòa nhạc, liên kết trực tiếp tới hồ sơ Spotify, album Apple Music và lịch lưu diễn.' }
      ]
    },
    s4: {
      h2: 'Phân tích lượt quét trực tiếp và đo lường khán giả',
      intro: 'Khi quản lý mã QR mạng xã hội động thông qua nền tảng của chúng tôi, bạn có được thông tin toàn diện và theo thời gian thực về hành vi khán giả ngoài đời:',
      items: [
        { title: 'Tốc độ quét', body: 'Theo dõi tổng số và số lượt quét duy nhất trong các mốc 7 ngày, 30 ngày và trọn đời, kèm các đợt tăng tương tác theo từng giờ.' },
        { title: 'Phân bổ địa lý', body: 'Lập bản đồ phân bổ lượt quét theo quốc gia và thành phố lớn trên toàn thế giới, dựa trên đo lường hai lớp gồm IP và múi giờ.' },
        { title: 'Thông tin thiết bị và hệ điều hành', body: 'Xác định khán giả của bạn chủ yếu quét bằng iOS của Apple, Android hay camera máy tính, để tối ưu trải nghiệm trang đích trên di động.' },
        { title: 'Không cần in lại', body: 'Cập nhật ngay các trang đích khi tung khuyến mãi theo mùa mà không phải in lại hàng hóa hiện có.' }
      ]
    },
    s5: {
      h2: 'Mã QR mạng xã hội đa liên kết so với tên người dùng in truyền thống',
      headers: ['Chỉ số và tính năng', 'Mã QR mạng xã hội', 'Tên người dùng dạng văn bản in (@tên)'],
      rows: [
        ['Mức độ phiền toái với người dùng', 'Quét bằng camera quang học trong 1 giây', 'Mở ứng dụng, gõ và tìm kiếm thủ công'],
        ['Tỷ lệ chuyển đổi', 'Cao (liên kết sâu trực tiếp tới hồ sơ)', 'Thấp (hơn 70% bỏ dở khi tìm kiếm thủ công)'],
        ['Truy cập nhiều nền tảng', 'Tất cả nền tảng nằm trong một trung tâm quét được', 'Danh sách văn bản chằng chịt trên ấn phẩm in'],
        ['Chỉnh sửa đích theo thời gian thực', 'Cập nhật đám mây tức thì (QR động)', 'Không thể nếu không in lại toàn bộ'],
        ['Đo lường tương tác', 'Đầy đủ số lượt quét, thiết bị và vị trí', 'Không có khả năng theo dõi']
      ]
    },
    s6: {
      h2: 'Câu hỏi thường gặp về mã QR mạng xã hội',
      sub: 'Mọi điều bạn cần biết về mã QR mạng xã hội và tiếp thị đa kênh.'
    }
  },
  faq: [
    {
      q: 'Mã QR mạng xã hội là gì?',
      a: 'Mã QR mạng xã hội kết nối trực tiếp khán giả ngoài đời với hồ sơ mạng xã hội số của bạn (Instagram, YouTube, TikTok, LinkedIn, X, Facebook và WhatsApp). Thay vì yêu cầu khách hàng tự tìm tên thương hiệu của bạn trên từng ứng dụng, việc quét mã sẽ mở ngay kênh đã được xác minh của bạn.'
    },
    {
      q: 'Mã QR động giúp cải thiện tiếp thị mạng xã hội như thế nào?',
      a: 'Khi dùng mã QR động cho các chiến dịch mạng xã hội, bạn có thể thay đổi chương trình khuyến mãi mục tiêu, liên kết tới các video YouTube mới hoặc cập nhật đích của liên kết tiểu sử theo thời gian thực mà không cần in lại bao bì, banner sự kiện hay danh thiếp. Bạn cũng nhận được đầy đủ dữ liệu đo lường lượt quét (tổng lượt quét, thiết bị duy nhất, hệ điều hành và vị trí địa lý của khách truy cập).'
    },
    {
      q: 'Tôi có thể tạo mã QR mang thương hiệu riêng cho từng nền tảng mạng xã hội không?',
      a: 'Có. Công cụ của chúng tôi cho phép bạn nhập nhiều tài khoản cùng lúc và tạo mã QR độ phân giải cao, đồng màu cho từng nền tảng (ví dụ: đỏ cho YouTube, gradient cho Instagram, xanh navy cho LinkedIn, xanh lục ngọc cho WhatsApp), kèm tải xuống ngay định dạng vector SVG và PNG.'
    },
    {
      q: 'Tôi nên in mã QR mạng xã hội ở đâu để thu hút nhiều người theo dõi nhất?',
      a: 'Các vị trí vật lý có tỷ lệ chuyển đổi cao gồm hộp bao bì sản phẩm, thẻ cảm ơn khi mở hàng, thực đơn trên bàn nhà hàng, quầy thanh toán cửa hàng bán lẻ, decal xe, banner gian hàng triển lãm, slide thuyết trình hội nghị và danh thiếp.'
    },
    {
      q: 'Khách truy cập có cần ứng dụng để quét mã QR mạng xã hội không?',
      a: 'Không. Các ứng dụng camera hiện đại trên iOS và Android tự động nhận diện mã QR và mở ngay liên kết sâu trực tiếp đến ứng dụng gốc hoặc xem trước trên trình duyệt di động mà không gặp trở ngại nào.'
    },
    {
      q: 'Tôi có thể theo dõi nền tảng mạng xã hội nào tạo ra nhiều lượt quét nhất không?',
      a: 'Có. Bằng cách đăng ký tài khoản miễn phí và sử dụng mã QR động với tiêu đề chiến dịch riêng cho từng kênh, bảng điều khiển của bạn sẽ hiển thị phân tích lượt quét theo thời gian thực, biểu đồ tương tác hằng ngày và bản đồ nhiệt vị trí địa lý.'
    }
  ]
};

export default vi;
