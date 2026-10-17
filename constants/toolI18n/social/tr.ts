import type { SocialCopy } from './types';

const tr: SocialCopy = {
  hero: {
    badge: 'Çok Kanallı Sosyal Medya Merkezi',
    h1: 'Ücretsiz Sosyal Medya QR Kod Oluşturucu',
    lead: 'Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Facebook ve WhatsApp için markalı, renk uyumlu QR kodlar oluşturun. Fiziksel kitlenizi tek dokunuşla dijital sosyal kanallarınıza bağlayın.'
  },
  brandLabel: 'Marka / İçerik Üretici Adı',
  brandPlaceholder: 'ör. Acme Marka veya @AlexCreator',
  configureHeading: 'Sosyal Kanallarınızı Yapılandırın',
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
      website: 'Web sitesi',
      email: 'E-posta'
    },
    placeholders: {
      instagram: 'kullanıcı adı',
      youtube: 'https://youtube.com/@kanal',
      linkedin: 'https://linkedin.com/in/ad',
      twitter: 'kullanıcı adı',
      tiktok: 'kullanıcı adı',
      facebook: 'https://facebook.com/sayfa',
      telegram: 'kullanıcı adı',
      whatsapp: 'telefon numarası',
      website: 'https://siteniz.com',
      email: 'siz@eposta.com'
    }
  },
  channels: (n) => (n === 1 ? '1 kanal yapılandırıldı' : `${n} kanal yapılandırıldı`),
  generate: 'Sosyal QR Kodları Oluştur',
  readyHeading: 'Markalı Sosyal QR Kodlar Hazır',
  readyBadge: 'Yüksek Çözünürlüklü Vektör Hazır',
  article: {
    s1: {
      badge: 'Kitle Kazanımı',
      h2: 'Sosyal Medya QR Kodları ve Kitle Dönüşümü için Nihai Rehber',
      paragraphs: [
        'Tüketicinin dikkatinin onlarca dijital ekosistem arasında bölündüğü bir çağda—kısa TikTok videolarından ve Instagram hikayelerinden profesyonel LinkedIn ağlarına, YouTube ustalık derslerinden WhatsApp VIP kanallarına kadar—fiziksel kitlenin kullanıcı adlarını elle yazmaya ve hesapları aramaya zorlanması, anında %70\'in üzerinde bir dönüşüm kaybına yol açar.',
        'Markalı bir Sosyal Medya QR kodu, fiziksel temas noktaları ile dijital takipçiler arasındaki sürtünmeyi tamamen ortadan kaldırır. Ambalajda, masa kartında veya mağaza camında bulunan yüksek kontrastlı, görsel olarak özelleştirilmiş bir barkodu taradığınızda, akıllı telefon kameraları doğrudan doğrulanmış profilinize yerel uygulama derin bağlantısını hemen açar ve anında takip, abonelik ve müşteri sohbetlerini mümkün kılar.'
      ]
    },
    s2: {
      badge: 'Strateji Karşılaştırması',
      h2: 'Tekil Kanal Kodları ile Dinamik Çoklu Bağlantı Biyografi Sayfaları',
      intro: 'Pazarlama kampanyanızın mimarisine ve fiziksel alanınıza bağlı olarak, sosyal QR kodlarını iki ayrı yapılandırmada kullanabilirsiniz:',
      cards: [
        {
          title: 'Tekil Markalı Sosyal Kodlar',
          body: 'Belirli platform paletlerine (YouTube kırmızısı, Instagram gradyanı, LinkedIn mavisi) uyumlu, tek amaçlı QR kodları oluşturur. Bir kafedeki "Bizi Instagram\'da takip edin" masa standı veya fiziksel ürünlerdeki "YouTube\'a abone olun" son kartı gibi özel materyaller için en uygunudur.'
        },
        {
          title: 'Dinamik Çoklu Bağlantı Biyografi Merkezi Kodları',
          body: 'Ziyaretçileri tüm sosyal bağlantılarınızı tek seferde barındıran temiz bir mobil açılış sayfasına yönlendiren tek bir dinamik kısa bağlantıyı kodlar. Dinamik motorumuz sayesinde yeni profiller ekleyebilir, bağlantıları güncelleyebilir ve yeniden basım yapmadan canlı coğrafi tarama analizlerini her an görüntüleyebilirsiniz.'
        }
      ]
    },
    s3: {
      h2: 'Yüksek Takipçi Dönüşümü için Stratejik Fiziksel Yerleşimler',
      cards: [
        { title: 'E-Ticaret Paket Ekleri', body: 'Müşteri paketlerinin içine net bir eylem çağrısıyla bir açılış kartı yerleştirin: "Bir sonraki siparişinizde %15 indirim için bizi tarayın ve Instagram\'da etiketleyin."' },
        { title: 'Konaklama Masa Standları', body: 'Misafirler yemeklerini beklerken Instagram yemek videolarınıza ve Google yorum sayfanıza bağlanan şık bir ahşap masa standı sergileyin.' },
        { title: 'Fuar Standı Afişleri', body: 'Stant arka planlarına büyük boyutlu 10x10 cm vektör SVG QR kodları basın; böylece geçen katılımcılar LinkedIn\'de anında bağlantı kurabilsin.' },
        { title: 'Perakende Mağaza Kasa Çıkartmaları', body: 'Kredi kartı terminalinin yanına bir tezgâh çıkartması yerleştirerek alışveriş yapanları özel flaş satışlar için VIP WhatsApp kanalınıza katılmaya davet edin.' },
        { title: 'Etkinlik Sunum Slaytları', body: 'Konuşmanızın son slaydına LinkedIn ve X/Twitter QR kodlarını ekleyin; soru-cevap sırasında kitleyle anında bağlantı kurulsun.' },
        { title: 'Sanatçı ve Müzisyen Ürünleri', body: 'Konser tişörtlerinin askılı etiketlerine taranabilir QR kodlar basın; bunlar doğrudan Spotify profillerine, Apple Music albümlerine ve tur programlarına bağlansın.' }
      ]
    },
    s4: {
      h2: 'Canlı Tarama Analitiği ve Kitle Telemetrisi',
      intro: 'Dinamik sosyal medya QR kodlarını platformumuz üzerinden yönettiğinizde, çevrimdışı kitlenizin davranışına dair kapsamlı ve gerçek zamanlı bilgilere erişirsiniz:',
      items: [
        { title: 'Tarama Hızı', body: '7 günlük, 30 günlük ve ömür boyu dönemlerde toplam ve benzersiz tarama etkileşimlerini saatlik etkileşim artışlarıyla takip edin.' },
        { title: 'Coğrafi Dağılım', body: 'Çift katmanlı IP ve saat dilimi telemetrisi kullanarak dünya çapındaki ülkeler ve büyükşehirlerdeki tarayıcı dağılımını haritalandırın.' },
        { title: 'Cihaz ve İşletim Sistemi İçgörüleri', body: 'Kitlenizin ağırlıklı olarak Apple iOS, Android veya masaüstü kameralarla mı taradığını belirleyin ve mobil açılış deneyimini buna göre özelleştirin.' },
        { title: 'Sıfır Yeniden Basım', body: 'Mevcut ürünleri yeniden basmadan mevsimsel promosyonları başlatırken hedef açılış sayfalarını anında güncelleyin.' }
      ]
    },
    s5: {
      h2: 'Çoklu Bağlantılı Sosyal QR Kodlar ile Geleneksel Basılı Kullanıcı Adlarının Karşılaştırması',
      headers: ['Metrik ve Özellik', 'Sosyal Medya QR Kodu', 'Basılı Metin Kullanıcı Adı (@ad)'],
      rows: [
        ['Kullanıcı Sürtünmesi', '1 saniyelik optik kamera taraması', 'Uygulamayı açma, yazma ve arama'],
        ['Dönüşüm Oranı', 'Yüksek (profile doğrudan derin bağlantı)', 'Düşük (elle aramada %70\'in üzerinde kayıp)'],
        ['Çoklu Platform Erişimi', 'Tüm platformlar tek bir taranabilir merkezde', 'Basılı görsellerde kalabalık metin listeleri'],
        ['Gerçek Zamanlı Hedef Düzenleme', 'Anında bulut güncellemesi (Dinamik QR)', 'Tamamen yeniden basmadan imkânsız'],
        ['Etkileşim Telemetrisi', 'Tam tarama sayıları, cihazlar ve konumlar', 'Sıfır takip görünürlüğü']
      ]
    },
    s6: {
      h2: 'Sosyal Medya QR Kod SSS',
      sub: 'Sosyal medya QR kodları ve çok kanallı pazarlama hakkında bilmeniz gereken her şey.'
    }
  },
  faq: [
    {
      q: 'Sosyal Medya QR Kodu nedir?',
      a: 'Sosyal Medya QR kodu, çevrimdışı kitleleri doğrudan dijital sosyal profillerinize (Instagram, YouTube, TikTok, LinkedIn, X, Facebook ve WhatsApp) bağlar. Müşterilerden her uygulamada marka adınızı elle aramalarını istemek yerine, kodu taramak doğrulanmış kanalınızı anında açar.'
    },
    {
      q: 'Dinamik QR kodlar sosyal medya pazarlamasını nasıl geliştirir?',
      a: 'Sosyal kampanyalarınız için Dinamik bir QR kod kullandığınızda; ambalajınızı, etkinlik afişlerinizi veya kartvizitlerinizi yeniden basmadan hedef promosyonunuzu değiştirebilir, yeni YouTube videolarına bağlanabilir veya biyografi bağlantısı hedeflerinizi gerçek zamanlı olarak güncelleyebilirsiniz. Ayrıca tam tarama telemetrisi de elde edersiniz (toplam taramalar, benzersiz cihazlar, işletim sistemleri ve ziyaretçilerin coğrafi konumları).'
    },
    {
      q: 'Her sosyal platform için ayrı markalı QR kodlar oluşturabilir miyim?',
      a: 'Evet. Araçımız aynı anda birden fazla kullanıcı adı girmenize olanak tanır ve her platform için renk uyumlu, yüksek çözünürlüklü QR kodlar üretir (ör. YouTube için kırmızı, Instagram için gradyan, LinkedIn için lacivert, WhatsApp için zümrüt yeşili); anında vektör SVG ve PNG indirme seçenekleriyle.'
    },
    {
      q: 'Maksimum takipçi için Sosyal Medya QR kodlarımı nereye basmalıyım?',
      a: 'Yüksek dönüşüm sağlayan fiziksel yerleşimler arasında ürün ambalaj kutuları, açılış teşekkür kartları, restoran masa menüleri, perakende mağaza kasa tezgâhları, araç çıkartmaları, fuar standı afişleri, konferans sunum slaytları ve kartvizitler yer alır.'
    },
    {
      q: 'Ziyaretçilerin sosyal medya QR kodlarını taramak için bir uygulamaya ihtiyacı var mı?',
      a: 'Hayır. Modern iOS ve Android kamera uygulamaları QR kodu otomatik olarak algılar ve hiçbir sürtünme olmadan doğrudan yerel uygulama derin bağlantısını veya mobil tarayıcı önizlemesini tetikler.'
    },
    {
      q: 'Hangi sosyal platformların en çok tarama ürettiğini takip edebilir miyim?',
      a: 'Evet. Ücretsiz bir hesap oluşturup her kanal için farklı kampanya başlıklarına sahip Dinamik QR kodları kullanarak panelinizde gerçek zamanlı tarama analitiği, günlük etkileşim grafikleri ve coğrafi konum ısı haritaları görüntülenir.'
    }
  ]
};

export default tr;
