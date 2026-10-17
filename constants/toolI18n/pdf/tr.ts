import type { PdfCopy } from './types';

const tr: PdfCopy = {
  hero: {
    badge: 'Belge ve Menü Paketi',
    h1: 'Ücretsiz PDF\'den QR Kod Oluşturucu',
    lead: 'Dijital menüleri, broşürleri, ürün kataloglarını ve teknik raporları markalı, yüksek çözünürlüklü QR kodlara dönüştürün. Uygulama indirmeden akıllı telefonda anında görüntüleme ve düzenlenebilir dinamik güncellemeler elde edin.'
  },
  form: {
    urlLabel: 'PDF Belgesi / Menü URL\'si',
    urlPlaceholder: 'https://drive.google.com/file/... veya https://siteniz.com/menu.pdf',
    urlHint: 'Doğrudan bir PDF bağlantısı, Google Drive paylaşım bağlantısı, Dropbox bağlantısı veya barındırılan bir belge URL\'si yapıştırın.',
    titleLabel: 'Belge / Kampanya Başlığı (İsteğe bağlı)',
    titlePlaceholder: 'ör. Yaz Akşam Yemeği Menüsü 2026 veya Ürün Kataloğu',
    qrDots: 'QR Noktaları',
    background: 'Arka Plan',
    cornerEye: 'Köşe Gözü',
    cornerDot: 'Köşe Noktası',
    dotPattern: 'Nokta Deseni',
    cornerShape: 'Köşe Şekli',
    uploadLogo: 'Logo Yükle',
    changeLogo: 'Logoyu Değiştir',
    addLogo: 'Logo Ekle',
    dotStyles: {
      rounded: 'Yuvarlatılmış',
      dots: 'Noktalar',
      classy: 'Şık',
      'classy-rounded': 'Şık Yuvarlatılmış',
      square: 'Kare',
      'extra-rounded': 'Çok Yuvarlatılmış'
    },
    cornerShapes: {
      'extra-rounded': 'Çok Yuvarlatılmış',
      dot: 'Daire Nokta',
      square: 'Kare'
    }
  },
  dynamicBox: {
    title: 'PDF QR Kodunu Dinamik Yapın',
    body: 'Masa standlarınızı yeniden basmadan mevsimlik menünüzü veya PDF belgenizi istediğiniz zaman güncelleyin.',
    cta: 'Dinamik QR Olarak Kaydet ⚡'
  },
  preview: {
    empty: 'Önizleme için yukarıya bir PDF URL\'si girin',
    downloadPng: 'PNG İndir',
    downloadSvg: 'SVG (Vektör)'
  },
  modal: {
    createdTitle: 'Dinamik PDF QR Oluşturuldu!',
    saveTitle: 'Dinamik PDF QR Kodunu Kaydet',
    createdBody: 'PDF\'iniz artık dinamik bir kısa bağlantıya bağlandı. PDF hedefinizi panelinizden istediğiniz zaman değiştirebilirsiniz!',
    copy: 'Kopyala',
    copied: 'Kopyalandı',
    myQrCodes: 'QR Kodlarım',
    viewAnalytics: 'Analitiği Gör',
    campaignTitle: 'Kampanya Başlığı',
    campaignPlaceholder: 'ör. Ana Yemek Salonu Menüsü',
    targetUrl: 'Hedef PDF URL\'si',
    creating: 'Bağlantı oluşturuluyor...',
    createButton: 'Dinamik PDF QR Kodu Oluştur'
  },
  auth: {
    title: 'Dinamik PDF QR için Hesap Oluşturun',
    subtitle: 'Yeniden basmadan PDF belgenizi istediğiniz zaman güncellemek için giriş yapın veya kayıt olun.'
  },
  article: {
    s1: {
      badge: 'Belgelerin Dijitalleştirilmesi',
      h2: 'Menüler, Kataloglar ve Belgeler için PDF QR Kodlarının Eksiksiz Rehberi',
      paragraphs: [
        'Ticari yemek hizmetlerinde, ticaret fuarlarında, gayrimenkul satışlarında ve kurumsal eğitimde çok sayfalı basılı kataloglar veya laminasyonlu restoran menüleri bastırmak pahalıdır, çevreye zararlıdır ve basıldıktan sonra güncellenmesi imkânsızdır. Tek bir fiyat değişikliği veya mevsimlik menü yenilemesi, daha önce binlerce dolarlık eksiksiz yeniden basım gerektiriyordu.',
        'PDF\'den QR koda dönüşüm, fiziksel dünya ile zengin, yüksek çözünürlüklü dijital belgeler arasında köprü kurar. Masa standlarına, ürün ambalajlarına, sergi standlarına veya mağaza vitrinlerine yerleştirildiğinde müşteriler yalnızca akıllı telefon kameralarını doğrultarak özel uygulama indirmeden ya da karmaşık web adresleri yazmadan, tüm PDF broşürünüzü, dijital menünüzü veya teknik kullanım kılavuzunuzu saniyeler içinde açabilir.'
      ]
    },
    s2: {
      badge: 'Menü Yönetimi',
      h2: 'Statik ve Dinamik PDF QR Kodları: Yeniden Basmadan Menü Güncelleme',
      intro: 'QR kodları akrilik standlara, metal masa plakalarına veya kalıcı vinil afişlere basarken, statik ve dinamik kodlar arasında seçim yapmak, basılı varlıklarınızın zamanla uyum sağlayıp sağlayamayacağını belirler:',
      cards: [
        {
          title: 'Statik PDF QR Kodu',
          body: 'Kalıcı bağlantıyı doğrudan 2B piksel matrisine kodlar. Google Drive URL\'niz değişirse veya sunucudaki dosyanızın adını değiştirirseniz, basılı kod kalıcı olarak bozulur ve eksiksiz bir yeniden basım yapılmadan düzeltilemez.'
        },
        {
          title: 'Dinamik PDF QR Kodu (Önerilen)',
          body: 'Kalıcı bir kısa yönlendirme bağlantısı kodlar (`qr-generator.online/r/menu`). Haftalık özel menülerinizi güncellediğinizde, içecek fiyatlarını ayarladığınızda veya yeni bir ürün kataloğu yayınladığınızda, panelinizdeki hedef URL\'yi güncellemeniz yeterlidir. Fiziksel masa standları %100 işlevsel kalmaya devam eder.'
        }
      ]
    },
    s3: {
      h2: 'PDF QR Kodlarının Sektörel Uygulamaları',
      cards: [
        { title: 'Restoranlar ve Şarap Barları', body: 'Alerjen uyarıları ve yüksek çözünürlüklü yemek fotoğraflarıyla birlikte tam yemek ve kokteyl PDF menünüze bağlanan temassız masa QR standları gösterin.' },
        { title: 'Gayrimenkul Emlak Broşürleri', body: 'Alıcılara kapsamlı mimari planlar, site yönetimi belgeleri ve kat planları sunmak için bahçe tabelalarına ve ilan broşürlerine PDF QR kodları ekleyin.' },
        { title: 'Ürün Ambalajı Kılavuzları', body: 'Hacimli, çok dilli basılı talimat kitapçıklarını, etkileşimli çok dilli bir PDF kullanım kılavuzuna bağlanan tek ve kompakt bir QR kodla değiştirin.' },
        { title: 'Tıbbi ve Farmasötik Ekler', body: 'Hastalara ve sağlık profesyonellerine indirilebilir klinik doz kılavuzları, güvenlik veri formları ve reçete belgeleri sunun.' },
        { title: 'Akademik ve Araştırma Posterleri', body: 'Katılımcıların tam hakemli araştırma makalelerini indirebilmesi için bilimsel konferans sunum posterlerinin alt köşesine QR kodları ekleyin.' },
        { title: 'B2B Ticaret Fuarı Katalogları', body: 'Alıcılara tam toptan fiyat listenize giden taranabilir bir rozet bağlantısı sunarak ağır basılı toptan ürün klasörlerini ortadan kaldırın.' }
      ]
    },
    s4: {
      h2: 'Adım Adım Eğitim: PDF QR Kodu Nasıl Barındırılır ve Oluşturulur',
      steps: [
        { title: 'PDF\'i Bulut Depolamaya veya Web Sitenize Yükleyin', body: 'Menü veya broşür PDF\'inizi Google Drive, Dropbox, Microsoft OneDrive veya WordPress/Shopify medya kitaplığınıza yükleyin.' },
        { title: 'Paylaşım İzinlerini "Herkese Açık" Olarak Ayarlayın', body: 'Google Drive veya Dropbox\'ta erişimin **"Bağlantıya sahip herkes görüntüleyebilir"** olarak ayarlandığından emin olun; böylece müşteriler hiçbir zaman giriş ekranlarıyla karşılaşmaz.' },
        { title: 'Bağlantıyı Yapıştırın ve Marka Renklerini Özelleştirin', body: 'Paylaşılabilir URL\'yi yukarıdaki oluşturucu alanına yapıştırın, marka renk paletinizi özelleştirin, restoranınızın veya işletmenizin logosunu yükleyin ve yüksek çözünürlüklü baskı dosyalarını indirin.' }
      ]
    },
    s5: {
      h2: 'Dijital PDF QR Kodu ile Geleneksel Kağıt Menü ve Broşürlerin Karşılaştırması',
      headers: ['Özellik ve Faktör', 'PDF\'den QR Kod Menüsü', 'Basılı Kağıt Menü'],
      rows: [
        ['Ürünleri / Fiyatları Güncelleme Maliyeti', '0$ (Dinamik QR ile anında bulut güncellemesi)', 'Her eksiksiz yeniden basım için 200–1.500$+'],
        ['Temizlik ve Hijyen', 'Müşterinin telefonunda %100 temassız', 'Fiziksel laminasyonların dezenfekte edilmesini gerektirir'],
        ['Sayfa Kapasitesi ve Görseller', 'Yakınlaştırılabilir fotoğraflarla sınırsız sayfa', 'Fiziksel kitapçık boyutuyla sınırlı'],
        ['Analitik ve Etkileşim Takibi', 'Canlı tarama sayıları, saatler ve cihazlar', 'Sıfır takip verisi']
      ]
    },
    s6: {
      h2: 'PDF QR Kod SSS',
      sub: 'PDF QR kodları ve dijital menüler oluşturma hakkında bilmeniz gereken her şey.'
    }
  },
  faq: [
    {
      q: 'PDF\'den QR kod nasıl çalışır?',
      a: 'PDF QR kodu, fiziksel materyalleri (restoran menüleri, broşürler, ürün ambalajları, kataloglar) çevrimiçi barındırılan dijital bir PDF belgesine (Google Drive, Dropbox, OneDrive veya web sitenizin sunucusu gibi) bağlar. Taranınca ziyaretçinin akıllı telefon kamerası PDF belgesini mobil tarayıcıda anında açar.'
    },
    {
      q: 'QR kodu bastıktan sonra PDF belgesini değiştirebilir veya güncelleyebilir miyim?',
      a: 'Dinamik bir QR kod kullanıyorsanız evet! Dinamik platformumuzla, fiziksel broşürlerinizi, masa standlarınızı veya ürün ambalajlarınızı yeniden basmadan hedef PDF URL\'sini güncelleyebilir veya yeni bir mevsimlik menü yükleyebilirsiniz.'
    },
    {
      q: 'Google Drive veya Dropbox PDF\'i için nasıl QR kod oluşturabilirim?',
      a: 'PDF\'inizi Google Drive veya Dropbox\'a yükleyin, paylaşım izinlerini "Bağlantıya sahip herkes görüntüleyebilir" olarak ayarlayın, paylaşılabilir bağlantıyı kopyalayın, yukarıdaki oluşturucuya yapıştırın ve Oluştur\'a tıklayın. Sistemimiz bağlantıyı mobil tarama için otomatik olarak optimize eder.'
    },
    {
      q: 'Hızlı QR kod taraması için önerilen PDF dosya boyutu nedir?',
      a: 'PDF dosya boyutunu 5 MB\'ın altına (ideal olarak 2 MB\'ın altına) sıkıştırmanızı öneririz. Büyük, çok sayfalı PDF dosyaları, müşteriler QR kodunuzu taradığında hücresel mobil bağlantılarda yavaş yüklenmeye neden olabilir.'
    },
    {
      q: 'PDF QR kodumu kaç kişinin taradığını ve görüntülediğini takip edebilir miyim?',
      a: 'Evet. PDF QR kodunuzu ücretsiz bir Dinamik QR kod olarak kaydettiğinizde, panelinizde toplam tarama sayısı, benzersiz ziyaretçiler, tarama tarihleri, cihaz işletim sistemleri (iOS ve Android) ve coğrafi konumlar (ülke ve şehir) takip edilir.'
    },
    {
      q: 'Tasarımı özelleştirip restoranımın veya işletmemin logosunu ekleyebilir miyim?',
      a: 'Evet. QR\'ın ön plan ve arka plan renklerini, nokta stillerini (yuvarlatılmış, şık, noktalar), köşe kare şekillerini özelleştirebilir ve ortada görüntülenmek üzere yüksek çözünürlüklü işletme logonuzu yükleyebilirsiniz.'
    }
  ]
};

export default tr;
