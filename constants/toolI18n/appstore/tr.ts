import type { AppStoreCopy } from './types';

const tr: AppStoreCopy = {
  hero: {
    badge: 'Akıllı Uygulama Yönlendirme',
    h1: 'Ücretsiz App Store QR Kod Oluşturucu',
    lead: 'iOS ve Android için tek bir akıllı QR kod oluşturun. iPhone tarayıcılarını Apple App Store\'a, Android tarayıcılarını Google Play\'e otomatik olarak yönlendirin; gerçek zamanlı kurulum telemetrisiyle birlikte.'
  },
  form: {
    appTitleLabel: 'Uygulama Başlığı / Marka Adı',
    appTitlePlaceholder: 'ör. Acme Mobil Uygulama',
    iosLabel: 'Apple App Store URL\'si (iOS)',
    androidLabel: 'Google Play Store URL\'si (Android)',
    webLabel: 'Yedek Web Sitesi URL\'si (Masaüstü / Diğer)',
    webPlaceholder: 'https://uygulamaniz.com',
    qrDots: 'QR Noktaları',
    background: 'Arka Plan',
    cornerEye: 'Köşe Gözü',
    cornerDot: 'Köşe Noktası',
    dotPattern: 'Nokta Deseni',
    cornerShape: 'Köşe Şekli',
    appIcon: 'Uygulama Simgesi / Logo',
    changeIcon: 'Simgeyi Değiştir',
    addIcon: 'Uygulama Simgesi Ekle',
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
    title: 'Dinamik QR ile Uygulama Kurulumlarını Takip Edin',
    body: 'Taramaları cihaza (iOS ve Android), ülkeye ve şehre göre dönüşüm bazında gerçek zamanlı izleyin.',
    cta: 'Dinamik QR Olarak Kaydet ⚡'
  },
  preview: {
    downloadPng: 'PNG İndir',
    downloadSvg: 'SVG (Vektör)'
  },
  modal: {
    createdTitle: 'Dinamik Uygulama QR Oluşturuldu!',
    saveTitle: 'Dinamik App Store QR Kodunu Kaydet',
    createdBody: 'Akıllı App Store QR kodunuz yayında. Kurulumları takip edin ve bağlantıları istediğiniz zaman panelinizden güncelleyin!',
    copy: 'Kopyala',
    copied: 'Kopyalandı',
    myQrCodes: 'QR Kodlarım',
    viewAnalytics: 'Analitiği Gör',
    campaignTitle: 'Kampanya Başlığı',
    campaignPlaceholder: 'ör. iOS ve Android Uygulama Lansmanı',
    primaryTarget: 'Ana Hedef Bağlantı',
    creating: 'Akıllı bağlantı oluşturuluyor...',
    createButton: 'Dinamik App Store QR Kodu Oluştur'
  },
  auth: {
    title: 'Akıllı Uygulama QR için Hesap Oluşturun',
    subtitle: 'Uygulama kurulum analitiğini takip etmek ve mağaza bağlantılarını istediğiniz zaman güncellemek için giriş yapın veya kayıt olun.'
  },
  article: {
    s1: {
      badge: 'Uygulama Büyüme Mimarisi',
      h2: 'Akıllı App Store QR Kodları ve Mobil Kullanıcı Kazanımı için Nihai Rehber',
      paragraphs: [
        'Fiziksel uygulama pazarlamasında—metro reklam panolarında, ürün açılış materyallerinde, televizyon reklamlarında, ticaret fuarı standlarında veya doğrudan posta broşürlerinde—olası kullanıcılardan telefonlarını açmalarını, bir uygulama mağazasını başlatmalarını, uygulamanızın tam adını yazmalarını ve rakiplerin arama sonuçlarını elemelerini istemek ciddi bir sürtünme yaratır. Araştırmalar, olası kullanıcıların %65\'ten fazlasının manuel uygulama mağazası aramasında vazgeçtiğini göstermektedir.',
        'Tek bir akıllı App Store QR kodu bu sürtünmeyi tamamen ortadan kaldırır. Akıllı cihaz yönlendirmesi sayesinde tek bir taranabilir barkod, iOS kullanıcılarını Apple App Store\'a, Android kullanıcılarını ise Google Play Store\'a, hiçbir insan kararı gerekmeden otomatik olarak yönlendirir.'
      ]
    },
    s2: {
      badge: 'Dönüşüm Optimizasyonu',
      h2: 'İki Ayrı QR Kodu Basmak Dönüşüm Oranlarına Neden Zarar Verir',
      intro: 'Birçok pazarlama ekibi, yan yana "iOS için tarayın" ve "Android için tarayın" etiketli barkodlar basmak gibi kritik bir hata yapar. Birleşik akıllı yönlendirmenin ikili kodlardan neden daha iyi performans gösterdiğini inceleyin:',
      dualTitle: 'İkili QR Kodların Sakıncaları',
      dualItems: [
        '**Görsel Karmaşa:** İki yoğun barkod, ambalajdaki değerli baskı alanını tüketir.',
        '**Bilişsel Yük:** Tüketicileri durup hangi işletim sistemine sahip olduklarını belirlemeye zorlar.',
        '**Kamerayla Çapraz Tarama:** Akıllı telefon kameraları sıklıkla yanındaki yanlış koda odaklanır; bu da Apple App Store bağlantısını açmaya çalışan Android cihazlarda hata mesajlarına yol açar.'
      ],
      unifiedTitle: 'Birleşik Akıllı QR Kodun Gücü',
      unifiedItems: [
        '**Tek Temiz Barkod:** Fiziksel logo görünürlüğünü ve baskı estetiğini en üst düzeye çıkarır.',
        '**1 Saniyelik Sürtünmesiz Tarama:** Kullanıcının düşünmesine gerek yoktur—tarayın ve hemen kurun.',
        '**Akıllı Yedek Yönlendirme:** Masaüstü kullanıcılarını sorunsuz şekilde tanıtım pazarlama web sitenize yönlendirir.'
      ]
    },
    s3: {
      h2: 'Maksimum Uygulama İndirmesi için Stratejik Çevrimdışı Yerleşimler',
      cards: [
        { title: 'Ürün Ambalajları ve Donanım Kutuları', body: 'Akıllı ev cihazlarının veya tüketici elektroniğinin iç kapağına şu etiketle bir App Store QR kodu yerleştirin: "Yardımcı mobil uygulamayı indirmek ve kuruluma başlamak için tarayın."' },
        { title: 'Kasa Fişleri ve Masa Standları', body: 'Restoran fişlerine QR kodlar basarak yemek yiyenleri, bir sonraki yemeklerinde anında 5 $ indirim için sadakat ödül uygulamanızı indirmeye teşvik edin.' },
        { title: 'Toplu Taşıma ve Açık Hava Reklam Panoları', body: 'Yolcuların boş bekleme süresi ve hızlı hücresel bağlantısı olan metro afişlerinde büyük boyutlu vektör SVG QR kodları kullanın.' },
        { title: 'Doğrudan Posta ve Kartpostallar', body: 'Uygulama içi özel promosyon kodları sunan yüksek kontrastlı bir QR kodla posta kodlarına hedefli doğrudan posta gönderin.' },
        { title: 'Konferans Rozetleri ve Afişleri', body: 'Katılımcıların boyunluklarına resmi etkinlik rehberi uygulamasının QR kodunu basın; anında program erişimi ve push bildirim güncellemeleri sağlansın.' },
        { title: 'Araç Filosu Çıkartmaları', body: 'Hareket halindeki hizmet uygulaması rezervasyonu için servis minibüslerine ve teslimat araçlarına yüksek kontrastlı vinil QR kodları uygulayın.' }
      ]
    },
    s4: {
      h2: 'Canlı Uygulama Tarama Telemetrisi ve Kanal Atfı',
      intro: 'Dinamik App Store QR kodlarını platformumuz üzerinden yönettiğinizde, gerçek dünyadaki dönüşüm hunilerinin tam görünürlüğünü elde edersiniz:',
      items: [
        { title: 'iOS ve Android Payı', body: 'Gelecekteki mobil geliştirme kaynaklarını optimize etmek için fiziksel materyallerinizi tarayan cihazların tam yüzdelerini ölçün.' },
        { title: 'Coğrafi Sıcak Noktalar', body: 'Bölgesel reklam bütçelerini belirlemek için hangi büyükşehir bölgelerinin ve ülkelerin en yüksek kurulum hızını ürettiğini takip edin.' },
        { title: 'Gerçek Zamanlı URL Yönlendirme', body: 'Mevcut materyalleri yeniden basmadan mağaza paket adlarını veya derin bağlantı parametrelerini panelinizden anında güncelleyin.' }
      ]
    },
    s5: {
      h2: 'Birleşik App Store QR ile Manuel Mağaza Araması Karşılaştırması',
      headers: ['Metrik', 'Birleşik App Store QR Kodu', 'Manuel Arama "Bizi App Store\'da bulun"'],
      rows: [
        ['Kurulum Ekranına Kadar Geçen Süre', '2 saniyeden az (doğrudan mağaza derin bağlantısı)', '30–60+ saniye (uygulamayı açma, yazma, arama)'],
        ['Rakiplerin Müşteri Kapması Riski', '%0 (tam ürün kimliğinizi açar)', 'Yüksek (rakipler App Store arama reklamları verir)'],
        ['Cihaz Algılama', '%100 otomatik iOS/Android yönlendirme', 'Kullanıcı mağazayı manuel seçmek zorundadır'],
        ['Analitik Takibi', 'Canlı tarama sayıları, cihazlar ve konumlar', 'Sıfır takip verisi']
      ]
    },
    s6: {
      h2: 'App Store QR Kod SSS',
      sub: 'Çok platformlu App Store QR kodları hakkında bilmeniz gereken her şey.'
    }
  },
  faq: [
    {
      q: 'Çoklu bağlantılı App Store QR kodu nasıl çalışır?',
      a: 'Çoklu bağlantılı App Store QR kodu, tarayan cihazın işletim sistemini otomatik olarak algılayan tek bir birleşik barkoddur. iPhone veya iPad ile taranırsa doğrudan Apple App Store sayfanıza yönlendirir; Android cihazla taranırsa hemen Google Play\'e iletir.'
    },
    {
      q: 'Masaüstü tarayıcılar için yedek bir web sitesi URL\'si ekleyebilir miyim?',
      a: 'Evet. Yedek bir web sitesi URL\'si belirtebilirsiniz. Bir kullanıcı masaüstü veya dizüstü bilgisayardan tarar ya da bağlantıya tıklarsa, pazarlama açılış sayfanıza veya web uygulamanıza yönlendirilir.'
    },
    {
      q: 'iOS ve Android için iki ayrı QR kod yerine neden tek bir QR kod kullanmalıyım?',
      a: 'İki ayrı QR kod (biri iOS, biri Android için) basmak görsel karmaşa yaratır, müşterileri kafa karıştırır ve fiziksel baskı alanınızı yarıya indirir. Tek bir akıllı App Store QR kodu, akıllı telefon kullanıcılarının %100\'üne 1 saniyede sürtünmesiz tarama ve kurulum deneyimi sunar.'
    },
    {
      q: 'Hangi işletim sisteminin (iOS veya Android) daha fazla uygulama kurulumu sağladığını takip edebilir miyim?',
      a: 'Evet! Akıllı App Store kodunuzu Dinamik QR kod olarak kaydettiğinizde, panelinizde işletim sistemine (iOS ve Android), cihaz modellerine ve coğrafi konumlara (ülke ve şehir) göre toplam taramaları ayrıntılı gösteren gerçek zamanlı telemetri elde edersiniz.'
    },
    {
      q: 'Maksimum indirme için App Store QR kodlarımı nereye basmalıyım?',
      a: 'Yüksek dönüşüm sağlayan fiziksel yerleşimler arasında ürün ambalaj kutuları, fiziksel fişler, toplu taşıma reklam panoları, fuar standı arka planları, doğrudan posta broşürleri ve konferans rozetleri yer alır.'
    },
    {
      q: 'Basıldıktan sonra App Store veya Google Play bağlantılarımı güncelleyebilir miyim?',
      a: 'Evet. Dinamik QR kodlarla, ambalajlarınızı veya reklam panolarınızı yeniden basmadan, mağaza URL\'lerinizi istediğiniz zaman panelinizden değiştirebilir veya yeni bir uygulama sürümüne yönlendirebilirsiniz.'
    }
  ]
};

export default tr;
