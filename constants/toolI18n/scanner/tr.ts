import type { ScannerCopy } from './types';

const tr: ScannerCopy = {
  hero: {
    badge: 'Tarayıcı İçi Optik Çözücü',
    h1: 'Ücretsiz Online QR Kod Tarayıcı ve Okuyucu',
    lead: 'Web kameranızı, mobil kameranızı veya resim yüklemeyi kullanarak herhangi bir QR kodu doğrudan tarayıcınızda tarayın ve çözün. %100 gizli, anında URL incelemesi ve hiçbir uygulama indirme gerektirmez.'
  },
  viewport: {
    title: 'Optik Kamera Görünümü Hazır',
    hint: 'Canlı video akışıyla taramak için "Kamerayı Başlat" düğmesine tıklayın veya cihazınızdan bir resim dosyası yükleyin.'
  },
  controls: {
    startCamera: 'Kamerayı Başlat',
    stopScanning: 'Taramayı Durdur',
    uploadImage: 'Resim Yükle'
  },
  errors: {
    camera: 'Kameraya erişim reddedildi veya kullanılamıyor. Lütfen tarayıcı ayarlarınızda kamera izinlerinin etkin olduğundan emin olun.',
    noCode: 'Yüklenen resimde taranabilir bir QR kod algılanamadı. Lütfen barkodun net odaklandığından ve yüksek kontrastlı olduğundan emin olun.'
  },
  result: {
    decoded: 'QR Kod Başarıyla Çözüldü',
    copy: 'Metni Kopyala',
    copied: 'Kopyalandı',
    openLink: 'Doğrulanmış Bağlantıyı Aç ↗'
  },
  article: {
    s1: {
      badge: 'Çözücü Mekaniği',
      h2: 'Tarayıcı Tabanlı Optik QR Kod Taramanın Eksiksiz Rehberi',
      paragraphs: [
        'Yıllarca QR kod taramak, invaziv reklamlarla, abonelik duvarlarıyla ve gizliliği ihlal eden izleyicilerle dolu üçüncü taraf mobil uygulamaları indirmeyi gerektiriyordu. Bugün ise WebAssembly (WASM) ve tarayıcı standart API\'lerindeki gelişmeler, optik barkod tanımayı standart web tarayıcılarının içinde, masaüstü düzeyinde doğrulukla ve sıfır uygulama kurulumuyla mümkün kılıyor.',
        'Ücretsiz çevrimiçi QR tarayıcımız, yüksek hızlı bir JavaScript ve WebAssembly ikili matris çözücü üzerinde çalışır. Kamera erişimi verdiğinizde uygulama canlı video akışını saniyede 12–15 kare hızında örnekler, kenar tespit algoritmalarını çalıştırarak üç evrensel köşe bulucu deseni (konum tespit desenleri) bulur, optik perspektif bozulmalarını düzeltir ve Reed-Solomon polinom veri modüllerini milisaniyeler içinde ayrıştırır.'
      ]
    },
    s2: {
      badge: 'Siber Güvenlik ve Emniyet',
      h2: 'Dinamik ve Statik QR Kodların Çözümlenmesi: Bağlantı Doğrulama',
      intro: 'Körü körüne barkod taramanın en büyük güvenlik risklerinden biri, kötü niyetli kişilerin gerçek restoran menülerinin veya ödeme terminallerinin üzerine sahte etiketler yapıştırdığı "QR oltalaması" (quishing) saldırılarıdır. Tarayıcınız web sitesine gitmeden önce kodlanmış bağlantının açık, düz metin önizlemesini sunarak tarayıcımız akıllı bir güvenlik duvarı gibi çalışır:',
      cards: [
        {
          title: 'Statik QR Kod Yük İncelemesi',
          body: 'Statik kodlar, tam nihai URL\'lerini veya ham metin dizilerini hemen gösterir. Ana bilgisayar adını doğrulayabilir, yanlış yazılmış alan adlarını (ör. `paypal.com` yerine `paypa1.com`) kontrol edebilir ve bağlantıyı kötü amaçlı komut dosyaları çalıştırmadan güvenle panoya kopyalayabilirsiniz.'
        },
        {
          title: 'Dinamik QR Kısa Bağlantı Analizi',
          body: 'Dinamik QR kodları temiz kısa bağlantılar (ör. `qr-generator.online/r/h9K7WX`) üzerinden yönlendirilir. Motorumuz yönlendirme uç noktasını gerçek zamanlı doğrular ve güvenli platform yönlendirme tablosu içinde oluşturulmuş meşru bir kampanyaya gittiğinizden emin olmanızı sağlar.'
        }
      ]
    },
    s3: {
      h2: 'Desteklenen Yük Standartları ve Otomatik Biçim Ayrıştırma',
      intro: 'QR kodlar standart web sitesi URL\'lerinden çok daha fazlasını taşıyabilir. Çevrimiçi okuyucumuz yapılandırılmış yük protokollerini otomatik olarak tanır ve ayrıştırır:',
      cards: [
        { title: 'WiFi Erişim Dizeleri', body: '`WIFI:S:MyNetwork;P:pass;T:WPA;;` biçimlerini çözerek şifreleri elle yazmadan kopyalamanızı sağlar.' },
        { title: 'vCard Kişi Dosyaları', body: '`BEGIN:VCARD` kartvizit barkodlarından tam adları, telefon numaralarını, e-posta adreslerini ve şirket unvanlarını çıkarır.' },
        { title: 'Kripto Cüzdan Adresleri', body: 'Bitcoin (`bitcoin:1A...`), Ethereum (`ethereum:0x...`) ve Solana cüzdan dizelerini alfanümerik olarak doğru biçimde okur.' },
        { title: 'Coğrafi Konum Koordinatları', body: 'Google Haritalar veya Apple Haritalar\'da tek tıkla anında yol tarifi için `geo:lat,lng` koordinatlarını ayrıştırır.' },
        { title: 'WhatsApp ve SMS Bağlantıları', body: 'Önceden doldurulmuş mobil sohbet ve SMS anahtar kelime mesajlaşma bağlantılarını doğrudan okunabilir biçime çözer.' },
        { title: 'iCal Etkinlik Takvimleri', body: '`BEGIN:VEVENT` yapılarında kodlanmış takvim etkinliği özetlerini, zaman damgalarını ve mekan konumlarını ayrıştırır.' }
      ]
    },
    s4: {
      h2: 'Sorun Giderme Rehberi: Bazı QR Kodlar Neden Taranamaz',
      intro: 'Optik algılamada başarısız olan bir barkodla karşılaşırsanız, sorun neredeyse her zaman şu dört yaygın fiziksel veya dijital anormallikten birinden kaynaklanır:',
      items: [
        { title: '1. Eksik veya İhlal Edilmiş Sessiz Bölge', body: 'Görsel, metin veya broşürün kenarı dış siyah karelere, 4 modül genişliğinde boş beyaz bir kenar boşluğu bırakılmadan dokunuyorsa, optik sensörler barkodun sınırlarını hesaplayamaz.' },
        { title: '2. Statik Barkodlarda Aşırı Veri Yoğunluğu', body: 'Statik bir QR koda 250 karakterlik bir URL kodlamak, düşük çözünürlüklü kameralarda kolayca bulanıklaşan binlerce mikroskobik modül üretir. **Dinamik QR kodları** kullanmak, temiz ve düşük yoğunluklu matrisleri koruyarak bu sorunu ortadan kaldırır.' },
        { title: '3. Düşük Kontrast ve Ters Renk Kutupluluğu', body: 'Standart barkod okuyucular, daha açık bir zemin üzerinde koyu veri noktaları bekler. Koyu zemin üzerinde beyaz noktalar veya düşük kontrastlı kombinasyonlar (ör. beyaz üzerinde sarı) optik çözümlemede sıklıkla başarısız olur.' }
      ]
    },
    s5: {
      h2: 'Çevrimiçi Web Tarayıcısı ve Yerel Mobil Uygulamalar',
      headers: ['Özellik', 'QR Generator Online Web Tarayıcısı', 'Üçüncü Taraf Uygulama Mağazası Tarayıcıları'],
      rows: [
        ['Kurulum Gerekliliği', 'Sıfır (tarayıcıda anında çalışır)', '50 MB+ indirme ve mağaza girişi gerektirir'],
        ['Veri Gizliliği ve İzleme', '%100 Özel (yalnızca yerel bellek)', 'Sıklıkla tarama geçmişini ve reklam kimliklerini izler'],
        ['Resim / Ekran Görüntüsü Yükleme', 'Destekleniyor (herhangi bir dosyayı sürükle bırak)', 'Sıklıkla ücretli premium paketlerin arkasında kilitli'],
        ['Platformlar Arası Destek', 'Evrensel (iOS, Android, Mac, Windows, Linux)', 'Platforma özgü']
      ]
    },
    s6: {
      h2: 'QR Kod Tarayıcı SSS',
      sub: 'Tarama ve barkod güvenliği hakkında sık sorulan teknik soruların yanıtları.'
    }
  },
  faq: [
    {
      q: 'Bu çevrimiçi QR kod tarayıcı uygulama olmadan nasıl çalışır?',
      a: 'Tarayıcı tabanlı QR kod tarayıcımız, cihazınızın web kamerası veya akıllı telefon kamerasıyla doğrudan iletişim kurmak için modern WebAssembly ve HTML5 MediaDevices API\'sini kullanır. Video akışı kareleri gerçek zamanlı olarak tarayıcı belleğinde işlenir ve hiçbir video verisi bulut sunucularına gönderilmez.'
    },
    {
      q: 'Kayıtlı resim dosyalarından veya ekran görüntülerinden QR kod tarayıp çözebilir miyim?',
      a: 'Evet. Bilgisayarınızdan veya akıllı telefonunuzun fotoğraf galerisinden herhangi bir PNG, JPG, WEBP veya SVG ekran görüntüsünü seçmek için "Resim Yükle" düğmesine tıklamanız yeterlidir. Motor resim piksellerini analiz eder ve gömülü barkod dizesini anında çözer.'
    },
    {
      q: 'Tarayıcı dinamik QR kodlarını nasıl işler?',
      a: 'Dinamik bir QR kodu (qr-generator.online/r/ ile başlayan kısa bağlantılar gibi) taradığınızda, tarayıcımız yönlendirme URL\'sini algılar ve güvenli bir önizleme sunar. Bağlantıyı açmaya karar vermeden önce hedef bağlantıyı inceleyebilirsiniz; bu da tam güvenlik ve oltalamaya karşı koruma sağlar.'
    },
    {
      q: 'Çevrimiçi QR kod taramak güvenli ve özel mi?',
      a: 'Evet, %100. Kamera izinleri ve resim dosyası işleme kesinlikle yerel tarayıcı korumalı alanınızın içinde gerçekleşir. Hiçbir resim, video karesi veya çözülmüş yük geçmişi üçüncü taraf sunucularına yüklenmez, kaydedilmez veya iletilmez.'
    },
    {
      q: 'Bu tarayıcı hangi tür QR kodları çözebilir?',
      a: 'Motorumuz web sitesi URL\'leri, dinamik kısa bağlantılar, WiFi kimlik bilgileri (WIFI:), vCard 3.0 dijital kartvizitler (BEGIN:VCARD), WhatsApp sohbetleri, SMS metin mesajları, Google Haritalar coğrafi koordinatları, kripto para cüzdan adresleri (Bitcoin, Ethereum) ve takvim etkinlikleri dahil olmak üzere tüm standart 2B matris sembolojilerini çözer.'
    },
    {
      q: 'Kameram belirli bir QR kodu neden taramıyor?',
      a: 'Tarama hataları genellikle yetersiz ortam aydınlatması, parlak yüzeylerde lens parlaması, ters çevrilmiş barkod renkleri (uygun kontrast olmadan koyu zeminde açık noktalar) veya hasarlı barkod bulucu desenler nedeniyle oluşur. Hasarlı kodlar için yakından bir fotoğraf çekip resim dosyasını yüklemek çoğu zaman başarılı çözümlemeyle sonuçlanır.'
    }
  ]
};

export default tr;
