import type { BulkCopy } from './types';

const tr: BulkCopy = {
  hero: {
    badge: 'Yüksek Hacimli Üretim Paketi',
    h1: 'Ücretsiz Toplu QR Kod Oluşturucu',
    lead: 'Metin listelerinden veya CSV yüklemelerinden aynı anda onlarca veya yüzlerce özel QR kodu toplu olarak oluşturun. Tüm dosyaları yüksek çözünürlüklü PNG veya vektör SVG olarak tek bir düzenli ZIP arşivinde dışa aktarın.'
  },
  input: {
    enterHeading: 'URL veya Metin Verisi Girin',
    uploadCsv: 'CSV / TXT Yükle',
    placeholder: 'Her satıra bir URL veya metin girin:\nhttps://example.com/promo-1\nhttps://example.com/promo-2\nhttps://example.com/menu-masa-1\nhttps://example.com/menu-masa-2\nSKU-98234-KIRMIZI-XL',
    items: (n) => (n === 1 ? '1 öğe algılandı' : `${n} öğe algılandı`),
    onePerLine: 'Satır başına bir giriş',
    foreground: 'Ön Plan',
    background: 'Arka Plan',
    exportFormat: 'Dışa Aktarma Biçimi',
    formatPng: 'PNG (Raster)',
    formatSvg: 'SVG (Vektör)',
    generating: (done, total) => `${total} kodun ${done} tanesi oluşturuluyor...`,
    generateCount: (n) => `${n} QR Kod Oluştur`,
    generateBatch: 'Toplu Kod Oluştur'
  },
  output: {
    rendered: (n) => `${n} QR Kod Oluşturuldu`,
    rendHint: 'Tek tek indirmek için herhangi bir koda tıklayın veya tüm ZIP paketini alın.',
    downloadZip: 'ZIP İndir',
    cardTitle: (text) => `İndirmek için tıklayın: ${text}`,
    cardOverlay: 'İndir',
    emptyTitle: 'Toplu Önizlemeler Burada Görünecek',
    emptyBody: 'Soldaki alana URL\'lerinizi yazın veya yapıştırın ya da barkodları anında oluşturmak için bir CSV tablosu yükleyin.'
  },
  article: {
    s1: {
      badge: 'Üretim Mimarisi',
      h2: 'Yüksek Hacimli Toplu QR Kod Üretimi İçin Kapsamlı Rehber',
      paragraphs: [
        'Modern endüstriyel lojistik, etkinlik yönetimi, perakende ticaret ve kurumsal pazarlamada QR kodları tek tek oluşturmak hem verimsiz hem de hataya açıktır. İster bir restoran için 50 benzersiz masa sipariş kodu, ister üretim ambalajı için 5.000 seri numaralı ürün doğrulama etiketi, ister uluslararası bir kongre için 10.000 kişiselleştirilmiş rozet kimliği üretiyor olun, toplu QR kod oluşturma vazgeçilmez bir operasyonel yetkinliktir.',
        'Ücretsiz toplu oluşturucumuz tamamen yüksek performanslı, istemci tarafı bir render hattı üzerinde çalışır. Özel verilerinizi gecikme, hız sınırlaması ve ciddi veri gizliliği riskleri doğuran uzak sunucu kuyruklarından geçirmek yerine, aracımız matematiksel 2D matris sembolojilerini doğrudan tarayıcınızın motoru içinde derler. Bu mimari sunucuya hiçbir gidiş-dönüş yapılmamasını, yüzlerce satırın anında işlenmesini ve özel URL\'leriniz ile kurumsal jetonlarınız için tam gizliliği sağlar.'
      ]
    },
    s2: {
      badge: 'Kampanya Stratejisi',
      h2: 'Toplu Üretimde Statik ve Dinamik QR Kodlar',
      intro: 'Büyük ölçekli QR kod baskı işlerine girişirken **Statik QR Kodlar** ile **Dinamik QR Kodlar** arasında doğru barkod mimarisini seçmek, kampanyanızın yaşam döngüsü için en kritik karardır:',
      staticCard: {
        title: 'Statik Toplu QR Kodlar',
        body: 'Statik kodlar hedef metni veya URL\'yi 2D piksel desenine kalıcı olarak kodlar. Karton kutulara, alüminyum plakalara veya basılı broşürlere bir kez basıldıktan sonra kodlanmış veriler değiştirilemez.',
        points: [
          { tone: 'plain', text: '**İnternet araması gerektirmez:** Tamamen çevrimdışı çözülür.' },
          { tone: 'plain', text: '**Kalıcı ömür:** Asla sona ermez ve sunuculara bağlı değildir.' },
          { tone: 'bad', text: '**Sıfır düzenlenebilirlik:** Yazım hataları tamamen yeniden basım gerektirir.' },
          { tone: 'bad', text: '**Tarama analitiği yok:** Ziyaretçi etkileşimi izlenemez.' }
        ]
      },
      dynamicCard: {
        title: 'Dinamik Toplu QR Kodlar',
        body: 'Dinamik kodlar, bulut tabanlı bir yönlendirme tablosuna işaret eden kısa bir yönlendirme URL\'si (`qr-generator.online/r/xyz`) kodlar. Taranınca ziyaretçiler anında hedef adresinize yönlendirilir.',
        points: [
          { tone: 'good', text: '**Gerçek zamanlı düzenlenebilir hedefler:** Yeniden basmadan istediğiniz zaman URL\'leri değiştirin.' },
          { tone: 'good', text: '**Derin telemetri analitiği:** Tarama sayılarını, cihazları, işletim sistemlerini, ülkeleri ve şehirleri izleyin.' },
          { tone: 'good', text: '**Daha temiz barkod matrisi:** Daha kısa URL uzunlukları, daha büyük ve daha kolay taranabilir modüller sağlar.' },
          { tone: 'plain', text: '**A/B testi etkin:** Trafiği dinamik olarak alternatif promosyon sayfalarına yönlendirin.' }
        ]
      },
      recommendation: '**Stratejik Öneri:** Uzun ömürlü fiziksel varlıklar üretiyorsanız (ürün ambalajı, açık hava afişleri veya metal seri numaralı plakalar gibi), hesap panelinizden **Dinamik QR Kodları** kullanın. Tek kullanımlık etkinlik biletleri, dahili WiFi erişim kartları veya düz metin seri tanımlayıcıları için statik toplu oluşturma idealdir.'
    },
    s3: {
      h2: 'Adım Adım Eğitim: Toplu Oluşturma için CSV Dosyanızı Hazırlama',
      intro: 'Verimliliği en üst düzeye çıkarmak ve barkod oluşturmada sıfır hata sağlamak için tablo verilerinizi temiz, standart ASCII veya UTF-8 biçiminde düzenleyin:',
      steps: [
        { title: 'Verileri Microsoft Excel veya Google E-Tablolar\'da düzenleyin', body: 'Her hedef URL\'yi veya ham metin dizesini A sütununa yerleştirin. Tüm web sitesi bağlantılarının protokol önekini (ör. `https://`) içerdiğinden emin olun.' },
        { title: 'Virgülle ayrılmış değerler (.csv) veya düz metin (.txt) olarak dışa aktarın', body: 'Dosya ➔ Farklı Kaydet ➔ CSV (Virgülle Ayrılmış) seçeneğini belirleyin. Veri kümeniz uluslararası karakterler veya aksanlı adlar içeriyorsa UTF-8 kodlamasının seçili olduğundan emin olun.' },
        { title: 'Yükleyin ve görsel parametreleri özelleştirin', body: 'Dosyanızı içe aktarmak için yukarıdaki "CSV Yükle" düğmesine tıklayın. Yüksek kontrastlı ön plan ve arka plan renkleri seçin (ör. beyaz üzerine koyu antrasit), tercih ettiğiniz biçimi (PNG veya vektör SVG) belirleyin ve "Oluştur" düğmesine basın.' },
        { title: 'Tek tek dosyaları veya tam ZIP arşivini indirin', body: 'Oluşturulan görsel önizleme ızgarasını inceleyin. Herhangi bir karta tıklayarak tek tek dosyaları indirin veya ticari baskı öncesi hazırlık için numaralandırılmış dosya adlarına sahip düzenli bir arşiv almak üzere "Tümünü İndir (ZIP)" düğmesine tıklayın.' }
      ]
    },
    s4: {
      h2: 'Toplu QR Kod Üretimi için Endüstriyel ve Kurumsal Kullanım Alanları',
      cards: [
        { title: 'Konaklama ve Çok Masalı Yemek Servisi', body: 'Her yemek masası için benzersiz QR kodları oluşturun (ör. `https://bistro.com/order?table=12`), böylece garsonlar temassız dijital siparişleri hassas masa konumu bilgisiyle doğrudan mutfak POS sistemine iletebilir.' },
        { title: 'Etkinlik Kimlikleri ve Biletleme', body: 'Turnikelerde hızlı giriş kontrolü ve sahteciliğin önlenmesi için kriptografik bilet doğrulama özetleriyle kodlanmış binlerce benzersiz taranabilir katılımcı geçişi üretin.' },
        { title: 'Üretim ve Seri Varlık Takibi', body: 'Saha bakım aramalarına anında erişim için endüstriyel ekipman etiketlerine seri numaralarını, üretim parti kimliklerini ve dijital çalıştırma kılavuzlarını kodlayın.' },
        { title: 'Çok Lokasyonlu Pazarlama Kampanyaları', body: 'Bölgesel dönüşüm oranlarını hassas biçimde karşılaştırmak için birden fazla büyükşehir bölgesindeki afişler için yüzlerce ayrı UTM etiketli URL oluşturun.' }
      ]
    },
    s5: {
      h2: 'Toplu İş Akışı ile Geleneksel Tekli Kod Oluşturucunun Karşılaştırması',
      headers: ['Özellik ve Metrik', 'Tekli Kod Oluşturucu', 'Toplu Oluşturucu'],
      rows: [
        ['Oluşturma Hızı', 'Manuel olarak her 30–60 saniyede 1 kod', 'Otomatik olarak 5 saniyeden kısa sürede 100+ kod'],
        ['Veri Giriş Akışı', 'Giriş alanlarına manuel kopyala-yapıştır', 'CSV, TXT tablo verisi içe aktarma'],
        ['Dosya Düzeni', 'Tarayıcı klasöründe dağınık indirmeler', 'Birleştirilmiş, yapılandırılmış ZIP arşivi'],
        ['Stil Tutarlılığı', 'Renk veya kenar boşluğu ayarlarında tutarsızlık riski', 'Renkler, boyutlar ve hata payları %100 birörnek'],
        ['Vektör SVG Dışa Aktarma', 'Her kod için ayrı indirme', 'Baskı öncesi hazırlık için toplu vektör SVG dışa aktarma']
      ]
    },
    s6: {
      h2: 'Baskı Standartları ve Hata Düzeltme Optimizasyonu',
      intro: 'Toplu QR kodlarını fiziksel malzemelere (kağıt etiketler, ürün ambalajı veya vinil çıkartmalar) basarken ISO/IEC 18004 standartlarına uymak, farklı optik koşullarda anında kamera taramasını garanti eder:',
      cards: [
        { title: 'Sessiz Bölge Kenar Boşluğu', body: 'Çevredeki grafik öğelerin optik tarayıcı sensörlerini karıştırmasını önlemek için barkodun tamamının etrafında en az 4 modül genişliğinde temiz bir kenar bırakın.' },
        { title: '300+ DPI Çözünürlük', body: 'Ofset baskı sırasında son derece keskin kenar tanımı için her zaman vektör SVG biçiminde dışa aktarın veya inç başına 300 nokta ile işlenmiş 800x800 piksel PNG dosyaları kullanın.' },
        { title: 'Seviye H (%30) Yedeklilik', body: 'Oluşturucumuz Reed-Solomon Seviye H hata düzeltmesi uygular. Bu sayede yüzeyin %30\'una kadarı çizilse veya kapansa bile barkodlar kusursuz çözülebilir.' }
      ]
    },
    s7: {
      h2: 'Toplu QR Kod Oluşturucu SSS',
      sub: 'Toplu QR oluşturma ve kurumsal dağıtım hakkında bilmeniz gereken her şey.'
    }
  },
  faq: [
    {
      q: 'Bir seferde toplu olarak kaç QR kod oluşturabilirim?',
      a: 'Herhangi bir yapay sınır olmaksızın aynı anda yüzlerce QR kod oluşturabilirsiniz. Tüm işlemler web tarayıcınızda istemci tarafında gerçekleştiği için oluşturma çok hızlıdır ve kuyruk beklemesi olmadan bilgisayarınızın belleğini verimli kullanır.'
    },
    {
      q: 'Toplu statik QR kodlar ile dinamik QR kodlar arasındaki fark nedir?',
      a: 'Toplu statik QR kodlar, tam URL\'yi veya metni barkod desenine kalıcı olarak kodlar. Dinamik QR kodlar ise platformumuzda yönetilen kısa yönlendirme URL\'lerini kodlar; böylece basımdan sonra hedef URL\'leri istediğiniz zaman değiştirebilir ve canlı tarama analitiklerini (ziyaretçi cihazları, coğrafi konumlar ve zaman damgaları) takip edebilirsiniz.'
    },
    {
      q: 'CSV yüklemem hangi biçimde olmalı?',
      a: 'CSV veya TXT dosyanızda her satırda bir URL veya metin dizisi bulunmalıdır. Başlıklar isteğe bağlıdır. Ayrıştırıcı ham URL\'leri, metin dizilerini, vCard parçacıklarını ve ürün SKU kodlarını otomatik olarak algılar ve temizler.'
    },
    {
      q: 'Oluşturulan tüm QR kodları tek bir ZIP dosyasında indirebilir miyim?',
      a: 'Evet. Toplu oluşturma tamamlandığında "Tümünü İndir (ZIP)" düğmesine tıklamak, oluşturulan tüm yüksek çözünürlüklü PNG veya vektör SVG barkodlarını girdi verilerinizle eşleşen temiz dosya adlarına sahip tek ve düzenli bir ZIP dosyasında paketler.'
    },
    {
      q: 'Toplu QR kodlar özel ve güvenli mi?',
      a: 'Evet, %100. Tüm toplu oluşturma işlemleri, istemci tarafı JavaScript kullanılarak yerel tarayıcı korumalı alanınızda gerçekleşir. Toplu verileriniz, müşteri URL\'leriniz ve ürün envanteri seri numaralarınız hiçbir zaman harici sunuculara yüklenmez veya orada saklanmaz.'
    },
    {
      q: 'Toplu etiketler için hangi baskı çözünürlüğünü ve hata düzeltmeyi kullanmalıyım?',
      a: 'Varsayılan olarak yüksek çözünürlüklü 800x800 piksel dosyalar oluştururuz (veya sınırsız ölçeklenebilirlik için vektör SVG). Dokulu ambalajlarda ya da kavisli şişelerde bile barkodların %100 taranabilir kalmasını sağlamak için Seviye H hata düzeltmesi (%30 veri yedekliliği) uygularız.'
    }
  ]
};

export default tr;
