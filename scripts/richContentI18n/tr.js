/**
 * Localized deep body content for the `tr` locale.
 *
 * One module per locale so Vite emits one chunk per locale: a visitor only
 * ever downloads the language they are actually reading. Bundling all of them
 * into the initial graph would have taken the `seo-content` chunk from ~357 KB
 * to ~2 MB for every visitor, including the English majority who need none of
 * it.
 *
 * Shape is identical to scripts/toolRichData.js et al (constants/richContent.ts
 * `RichContent`), plus an optional `sections` intro array mirroring
 * routeContent.js. A path absent here falls back to the English object whole —
 * never a per-field mix of two languages.
 */

export const RICH_CONTENT = {
  '/location-qr-code-generator': {
    sections: [
      {
        title: 'Mağazalar ve Mekânlar İçin Adım Adım Yol Tarifi',
        paragraphs: [
          'Davetiyelere, broşürlere, emlak tabelalarına veya kartvizitlere konum QR kodları basarak kapınıza kadar anında GPS navigasyonu sunun.',
          'Google Haritalar, Apple Haritalar ve iOS ile Android\'deki standart navigasyon uygulamalarıyla uyumlu.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Geo URI ve Google Haritalar Konum QR Kodlarına Teknik Bakış',
      paragraphs: [
        'Bir Konum QR Kodu, coğrafi koordinat verilerini veya harita bağlantılarını standartlaştırılmış `geo:` URI şeması (RFC 5870, biçim: `geo:<Enlem>,<Boylam>,<Yükseklik>`) ya da doğrudan bir Google Haritalar / Apple Haritalar kanonik URL\'si kullanarak kodlar. Bir akıllı telefonla tarandığında işletim sistemi, hedefiniz iğnelenmiş şekilde yerel navigasyon uygulamasını (Android\'de Google Haritalar, iOS\'ta Apple Haritalar) açar.',
        'Navigasyon bildirimine tek bir dokunuşla kullanıcı, mevcut GPS konumundan mekânınıza, perakende mağazanıza, otopark girişinize veya etkinlik kapınıza kadar anında adım adım araç, yürüyüş veya toplu taşıma tarifi alır.',
        'Elle adres yazmayı, yanlış duyulan sokak adlarını ve navigasyon hatalarını ortadan kaldıran konum QR kodları; pop-up mağazalar, açık ev günleri, düğünler ve turistik noktalar için fiziksel ziyaretçi trafiğini ve zamanında varışı çarpıcı biçimde artırır.'
      ]
    },
    comparisonTable: {
      title: 'Konum QR Kodu Navigasyonu ile Elle Adres Arama Karşılaştırması',
      headers: [
        'Faktör / Ölçüt',
        'Konum QR Kodu',
        'Elle Adres Arama'
      ],
      rows: [
        [
          'Navigasyon Doğruluğu',
          '%100 tam iğne (GPS enlem/boylam hassasiyeti)',
          'Aynı adlı sokak ve şehirlerde sık hata'
        ],
        [
          'Navigasyonun Başlama Süresi',
          '1 tarama + 1 dokunuş (3 saniyeden az)',
          '45 - 90 saniye (harita açma, adres yazma, seçme)'
        ],
        [
          'Belirli Giriş İğneleme',
          'Tam otopark veya arka kapı koordinatlarını iğneler',
          'Standart adresler genelde ön kaldırımı veya yanlış sokağı iğneler'
        ],
        [
          'Platformlar Arası Destek',
          'Google Haritalar, Apple Haritalar veya Waze\'i yerel olarak açar',
          'Uygulama içinde elle gezinme gerektirir'
        ],
        [
          'Çevrimdışı Koordinat Saklama',
          'Geo URI, çevrimdışı GPS navigasyon uygulamalarıyla çalışır',
          'Adres metnini çözmek için etkin internet araması gerekir'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Google Haritalar URL\'si veya Kesin GPS Koordinatları Girin',
        description: 'Google Haritalar paylaşım bağlantınızı yapıştırın veya yol dışı mekânları tam olarak belirlemek için kesin enlem ve boylam koordinatlarını (ör. 37.7749, -122.4194) girin.'
      },
      {
        number: 2,
        title: 'Harita İğnesi Simgesi ve Marka Renkleriyle Biçimlendirin',
        description: 'Yüksek kontrastlı renkler seçin, köşe gözlerini özelleştirin ve kodun merkezine bir navigasyon iğnesi veya mekân logosu gömün.'
      },
      {
        number: 3,
        title: 'Davetiyeler ve Tabelalar İçin Vektör SVG İndirin',
        description: 'Etkinlik afişleri, düğün davetiyeleri ve yön tabelaları için vektör SVG, dijital etkinlik rehberleri için yüksek çözünürlüklü PNG dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Tek Dokunuşla Adım Adım GPS Tarifi',
        description: 'Ziyaretçileri hiçbir navigasyon karışıklığı veya elle adres girişi olmadan doğrudan mekânınıza yönlendirir.'
      },
      {
        title: 'Kesin Enlem/Boylam Koordinat Desteği',
        description: 'Resmî sokak adresi olmayan festival kapılarını, patika otoparklarını ve açık hava etkinlik alanlarını tam olarak belirleyin.'
      },
      {
        title: 'Google Haritalar ve Apple Haritalar ile Yerel Entegrasyon',
        description: 'Tüm iOS ve Android cihazlarda varsayılan navigasyon uygulamalarını sorunsuzca açar.'
      },
      {
        title: 'Sıfır Ücretle Kalıcı Ömür Boyu Çalışma',
        description: 'Statik konum QR kodları kalıcı geçerliliğe, sınırsız taramaya ve sıfır tekrar eden ücrete sahiptir.'
      }
    ],
    sizingMatrix: {
      title: 'Konum QR Kodu Baskı Boyut Özellikleri',
      description: 'Konum QR kodlarınızın davetiyelerde ve yön tabelalarında kolayca taranabildiğinden emin olun.',
      headers: [
        'Yerleşim / Uygulama',
        'Tarama Mesafesi',
        'Minimum Baskı Boyutu',
        'Önerilen Yüzey'
      ],
      rows: [
        [
          'Düğün ve Parti Davetiyeleri',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Mat ağır keten dokulu karton'
        ],
        [
          'Yön Tabelaları ve Bahçe Tabelaları',
          '1,0 m - 2,5 m (3 ft - 8 ft)',
          '120 mm x 120 mm (4,8" x 4,8")',
          'Hava koşullarına dayanıklı oluklu plastik / alüminyum'
        ],
        [
          'Tanıtım Kartpostalları ve Postalar',
          '25 cm - 40 cm (10" - 16")',
          '35 mm x 35 mm (1,4" x 1,4")',
          'Mat ağır karton (100 lb+)'
        ],
        [
          'Turist Rehberleri ve Patika Levhaları',
          '30 cm - 60 cm (12" - 24")',
          '50 mm x 50 mm (2,0" x 2,0")',
          'Eloksallı alüminyum / sert PVC'
        ],
        [
          'Konferans ve Fuar Program Kitapçıkları',
          '20 cm - 35 cm (8" - 14")',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Mat kuşe kağıt'
        ]
      ]
    },
    useCases: [
      {
        title: 'Düğün ve Özel Etkinlik Davetiyeleri',
        description: 'Davetiyelere konum QR kodları basın; misafirler tarayarak doğrudan nikâh ve düğün mekânına yönlensin.'
      },
      {
        title: 'Emlak Açık Ev Günleri ve Yön Tabelaları',
        description: 'Köşe sokak tabelalarına konum QR kodları yerleştirerek ilgilenen alıcıları doğrudan açık evin girişine yönlendirin.'
      },
      {
        title: 'Festivaller, Pop-up Pazarlar ve Yemek Kamyonları',
        description: 'Sabit adresi olmayan gezici yemek kamyonları, açık hava festival sahneleri ve pop-up standlar için kesin GPS iğneleri paylaşın.'
      },
      {
        title: 'Turistik Simgeler ve Patika Navigasyonu',
        description: 'Yürüyüşçülere ve turistlere taranabilir patika başlangıcı iğneleri, manzara noktaları ve tarihî yapı koordinatları sunun.'
      },
      {
        title: 'Ticari Mağaza Doğrudan Posta Kampanyaları',
        description: 'Tanıtım broşürlerine Google Haritalar QR kodları ekleyin; yerel sakinler açılışınıza veya şubenize kolayca ulaşsın.'
      }
    ],
    troubleshooting: {
      title: 'Konum QR Kodu Navigasyon Hatalarını Önleme',
      points: [
        'Kırpılmış koordinatlar: ondalık basamakları atmak (ör. 37.774929 yerine 37.77) harita iğnenizi yüzlerce metre kaydırır. Daima 5-6 ondalık basamak kullanın.',
        'Süresi dolmuş kısa harita bağlantıları: özel kısa bağlantılar kullanıyorsanız alan adının etkin kaldığından emin olun. Doğrudan Google Haritalar URL\'leri ve Geo URI\'ler asla sona ermez.',
        'Fiziksel adres metnini atlamak: elle doğrulamayı tercih eden kullanıcılar için QR kodunun altına daima okunabilir açık adresi basın.',
        'Dış mekân tabelalarında düşük kontrast: doğrudan güneş ışığı düşük kontrastlı renkleri soldurur. Dış mekân tabelalarında parlak beyaz zemin üzerinde tam siyah modüller kullanın.',
        'Yol kenarı tabelalarında parlama: yüksek yansıtıcı tabela laminasyonu farlardan ve güneşten lens parlaması yaratır. Mat dış mekân vinili kullanın.'
      ]
    },
    faqs: [
      {
        q: 'QR kodum için doğru Google Haritalar bağlantısını nasıl alırım?',
        a: 'Google Haritalar\'ı açın, işletmenizi arayın veya konumunuza bir iğne bırakın, «Paylaş»a tıklayın, paylaşılabilir kısa bağlantıyı kopyalayın ve oluşturucumuza yapıştırın.'
      },
      {
        q: 'Açık adres yerine enlem ve boylam koordinatları kullanabilir miyim?',
        a: 'Evet! Kesin enlem ve boylam koordinatlarını (ör. `37.7749,-122.4194`) girmek; parklar, festival alanları ve resmî adresi olmayan kırsal mekânlar için idealdir.'
      },
      {
        q: 'iPhone kullanıcılarında Apple Haritalar, Android\'de Google Haritalar açılır mı?',
        a: 'Evet. Standart Google Haritalar URL\'leri ve Geo URI\'ler iOS ve Android telefonlarda ilgili varsayılan harita uygulamasını tetikler.'
      },
      {
        q: 'Konum QR kodları sona erer mi veya ücret alır mı?',
        a: 'Hayır. QR Generator Online\'da oluşturulan statik konum QR kodları kalıcı ömür boyu geçerliliğe, sınırsız taramaya ve sıfır tekrar eden ücrete sahiptir.'
      },
      {
        q: 'QR kodunun merkezine harita iğnesi simgesi gömebilir miyim?',
        a: 'Evet! QR Generator Online Seviye H hata düzeltmesi kullanır; bu sayede taranabilirliği etkilemeden merkeze bir navigasyon iğnesi veya mekân logosu gömebilirsiniz.'
      },
      {
        q: 'Düğün davetiyesi baskısı için en iyi dışa aktarma biçimi hangisi?',
        a: 'Düğün kırtasiyesi ve ticari karton baskısı için vektör SVG veya 300 DPI yüksek çözünürlüklü PNG dışa aktarın.'
      },
      {
        q: 'Kullanıcılar çevrimdışıyken yol tarifi alabilir mi?',
        a: 'Geo URI koordinatları (`geo:lat,lng`) kullanıyorsanız, maps.me gibi çevrimdışı navigasyon uygulamaları veya önceden indirilmiş Google Haritalar bölgeleri hücresel veri olmadan yol tarifi verebilir.'
      },
      {
        q: 'Konum verilerim oluşturma sırasında gizli kalıyor mu?',
        a: 'Evet. Tüm QR kodları web tarayıcınızda %100 istemci tarafında oluşturulur. Hiçbir konum koordinatı veya harita URL\'si harici sunucularda saklanmaz.'
      }
    ],
    bestPractices: 'Baskıdan önce iğne konumunuzu hem Apple Haritalar hem Google Haritalar üzerinde doğrulayın. «Adım adım GPS tarifi için tarayın» gibi net bir harekete geçirici mesajla basın ve yüksek kontrastı koruyun.'
  },
  '/text-qr-code-generator': {
    sections: [
      {
        title: '%100 Çevrimdışı Taranabilir Metin ve Veri Kodlama',
        paragraphs: [
          'Düz metin QR kodları alfanümerik verileri doğrudan barkod deseninin içinde saklar. Tarama, mobil veri veya internet bağlantısı olmadan bile anında çalışır.',
          'Depo envanter etiketleme, ekipman talimatları, seri takibi ve gizli mesajlar için mükemmel.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Düz Metin ve Ham UTF-8 Barkod QR Kodlarına Teknik Bakış',
      paragraphs: [
        'Düz Metin QR Kodu, ham ve biçimlendirilmemiş dize verisini ISO/IEC 18004 standartlarına uygun olarak UTF-8 8-bit bayt modu kodlamasıyla doğrudan 2D matris sembolojisine kodlar. Web bağlantısı gerektiren URL QR kodlarının aksine, bir Düz Metin QR kodu tüm veri yükünü doğrudan siyah beyaz modüllerin görsel deseni içinde taşır.',
        'Bir akıllı telefon kamerası, elde taşınan endüstriyel 2D barkod okuyucu veya envanter tarayıcısıyla tarandığında cihaz bayt dizisini çözer ve düz metni anında ekranda gösterir ya da klavye emülasyonu (HID) ile bağlı yazılıma aktarır — web tarayıcı açmadan ve hücresel veya WiFi bağlantısı gerektirmeden.',
        'Düz metin QR kodları alfanümerik karakterleri, noktalama işaretlerini, sembolleri, çok dilli Unicode yazı sistemlerini ve emojileri destekler; bu da onları endüstriyel varlık takibi, depo envanter seri numaraları, ekipman bakım kayıtları, kaçış odası ipuçları ve çevrimdışı güvenlik şifreleri için vazgeçilmez kılar.'
      ]
    },
    comparisonTable: {
      title: 'Düz Metin QR Kodu ile URL QR Kodu Karşılaştırması',
      headers: [
        'Özellik / Ölçüt',
        'Düz Metin QR Kodu',
        'URL QR Kodu'
      ],
      rows: [
        [
          'İnternet Gereksinimi',
          '%100 çevrimdışı (hiçbir ağ bağlantısı gerekmez)',
          'Web sayfasını yüklemek için etkin internet gerekir'
        ],
        [
          'Taramada Cihaz Davranışı',
          'Metni pencerede gösterir veya panoya kopyalar',
          'Hedef URL\'de web tarayıcısını açar'
        ],
        [
          'Veri Konumu',
          'Tamamen fiziksel barkod modüllerinin içinde saklanır',
          'Hedef web sunucusunda saklanır'
        ],
        [
          'Veri Kapasitesi',
          '4.296 alfanümerik karaktere kadar (7.089 sayısal)',
          'Web bağlantıları için genellikle 30 - 100 karakter'
        ],
        [
          'Güvenlik ve Gizlilik',
          'Sıfır ağ izi, sıfır takip',
          'Web sunucusu ziyaretçi IP\'sini, tarayıcısını ve saati kaydeder'
        ],
        [
          'Başlıca Kullanım Alanları',
          'Varlık etiketleri, seri numaraları, çevrimdışı notlar, ipuçları',
          'Pazarlama, web trafiği, açılış sayfaları, menüler'
        ]
      ]
    },
    steps: [
      {
        number: 1,
        title: 'Metin İçeriğini, Seri Numaralarını veya Talimatları Girin',
        description: 'Alfanümerik metninizi, ekipman seri kodlarınızı, kupon numaralarınızı veya çok satırlı notlarınızı metin alanına yazın ya da yapıştırın.'
      },
      {
        number: 2,
        title: 'Stil ve Hata Düzeltme Seviyesini Seçin',
        description: 'Yüksek kontrastlı modül desenleri seçin ve varlık etiketleri için M veya Q hata düzeltme seviyesini, merkeze logo gömüyorsanız H seviyesini kullanın.'
      },
      {
        number: 3,
        title: 'Vektör SVG veya Yüksek Çözünürlüklü PNG İndirin',
        description: 'Endüstriyel lazer kazıma ve termal etiket baskısı için vektör SVG, dijital çalışma sayfaları ve belgeler için yüksek çözünürlüklü PNG dışa aktarın.'
      }
    ],
    features: [
      {
        title: 'Sıfır Bağlantıyla %100 Çevrimdışı Çalışma',
        description: 'Uzak saha konumlarında, bodrumlarda ve güvenli çevrimdışı tesislerde metni anında tarar ve gösterir.'
      },
      {
        title: 'Tüm 2D Barkod Tarayıcılarında Evrensel Destek',
        description: 'Zebra, Honeywell ve Datalogic depo tarayıcılarının yanı sıra iOS ve Android kamera uygulamalarıyla uyumlu.'
      },
      {
        title: 'Tam UTF-8 Çok Dilli ve Emoji Kodlama',
        description: 'Uluslararası dil yazılarını, matematiksel formülleri, para birimi sembollerini ve emojileri zahmetsizce kodlayın.'
      },
      {
        title: 'Sıfır Sona Ermeyle Kalıcı Statik Barkodlar',
        description: 'Statik metin QR kodları abonelik ücreti, tarama sınırı veya yenileme olmadan sonsuza kadar okunabilir kalır.'
      }
    ],
    sizingMatrix: {
      title: 'Düz Metin QR Kodu Boyut ve Yoğunluk Özellikleri',
      description: 'Metin QR matris yoğunluğu karakter sayısıyla artar. Güvenilir tarama için minimum boyut yönergelerini izleyin.',
      headers: [
        'Karakter Yükü',
        'Matris Sürümü',
        'Minimum Baskı Boyutu',
        'Önerilen Uygulama'
      ],
      rows: [
        [
          'Kısa (1 - 50 karakter)',
          'Sürüm 2 - 4 (25x25 - 33x33)',
          '20 mm x 20 mm (0,8" x 0,8")',
          'Varlık etiketleri, seri numaraları, parça etiketleri'
        ],
        [
          'Orta (50 - 150 karakter)',
          'Sürüm 5 - 7 (37x37 - 45x45)',
          '30 mm x 30 mm (1,2" x 1,2")',
          'Ekipman özellikleri, kuponlar, erişim anahtarları'
        ],
        [
          'Uzun (150 - 300 karakter)',
          'Sürüm 8 - 11 (49x49 - 61x61)',
          '40 mm x 40 mm (1,6" x 1,6")',
          'Bakım kayıtları, talimatlar, notlar'
        ],
        [
          'Genişletilmiş (300 - 600 karakter)',
          'Sürüm 12 - 16 (65x65 - 81x81)',
          '55 mm x 55 mm (2,2" x 2,2")',
          'Ayrıntılı prosedürler, çok satırlı belgeler'
        ],
        [
          'Maksimum (600+ karakter)',
          'Sürüm 17+ (85x85+)',
          '75 mm x 75 mm (3,0" x 3,0")',
          'Büyük format referans levhaları'
        ]
      ]
    },
    useCases: [
      {
        title: 'Endüstriyel Varlık Takibi ve Depo Seri Etiketleri',
        description: 'Makineleri, sunucu raflarını ve depo envanter kutularını taranabilir seri numaraları ve bakım tarihleriyle etiketleyin.'
      },
      {
        title: 'Eğitim Sınavları ve Sınıf İçi Hazine Avları',
        description: 'Basılı okul çalışma kağıtlarına sınav cevaplarını, matematik çözümlerini ve bulmaca ipuçlarını gizleyin; öğrenciler çevrimdışı tarasın.'
      },
      {
        title: 'Etkinlik Kuponları ve Tek Kullanımlık Erişim Kodları',
        description: 'Biletlere benzersiz metin indirim kodları basın; personel WiFi olmadan elde taşınan tarayıcılarla doğrulasın.'
      },
      {
        title: 'Kaçış Odası Bulmacaları ve Etkileşimli Sergiler',
        description: 'Müze vitrinlerine ve kaçış odası aksesuarlarına gizli bilmeceler, şifre çözme anahtarları ve hikâye ipuçları gömün.'
      },
      {
        title: 'Çevrimdışı Güvenlik Parolaları ve Kurtarma Anahtarları',
        description: 'Şifrelenmiş yedek anahtarları ve yapılandırma parolalarını fiziksel metal yedekleme plakalarında saklayın.'
      }
    ],
    troubleshooting: {
      title: 'Düz Metin QR Kodu Tarama Sorunlarını Giderme',
      points: [
        'Mikroskobik modüller yaratan veri aşırı yükü: tek bir koda 1.000+ karakter sıkıştırmak aşırı yoğun bir matris oluşturur. Hızlı tarama için metni 300 karakterin altında tutun.',
        'Yanlışlıkla URL öneki eklemek: metniniz http:// veya https:// ile başlarsa telefon kameraları bunu düz metin yerine web bağlantısı sayar. Ham metin görüntüsü istiyorsanız web öneklerini kaldırın.',
        'Düşük kontrastlı termal etiket baskısı: yıpranmış baskı kafalı düşük kaliteli doğrudan termal yazıcılar modül kenarlarının taşmasına yol açabilir. Kaliteli termal transfer şeritleri kullanın.',
        '4 modüllük sessiz bölgeyi ihlal etmek: varlık etiketlerinde barkodun dört kenarının çevresinde en az 4 boş modül genişliği bırakın.',
        'Kavisli yüzey bozulması: yoğun QR etiketlerini dar silindirik borulara veya şişelere yapıştırmak matrisi bozar. Kodları dikey düz eksene yerleştirin.'
      ]
    },
    faqs: [
      {
        q: 'Tek bir Düz Metin QR Koduna kaç karakter kodlayabilirim?',
        a: 'Bir QR kodu teknik olarak 4.296 alfanümerik karakter veya 7.089 sayısal basamak saklayabilir. Ancak standart boyutlarda hızlı optik tarama için metni 300 karakterin altında tutmanız önerilir.'
      },
      {
        q: 'Düz Metin QR kodu taramak internet bağlantısı gerektirir mi?',
        a: 'Hayır! Düz metin QR kodları tüm veri yüklerini doğrudan görsel barkod matrisinin içinde saklar. Hücresel veri veya WiFi olmadan %100 çevrimdışı taranır ve görüntülenir.'
      },
      {
        q: 'Bir Metin QR kodu tarandığında akıllı telefonda ne olur?',
        a: 'Kamera uygulaması çözülen metni bir sistem iletişim kutusunda gösterir; metni panoya kopyalama veya web araması yapma seçenekleri sunar.'
      },
      {
        q: 'Özel karakterler, yabancı dil yazıları ve emoji kodlayabilir miyim?',
        a: 'Evet! QR Generator Online tam UTF-8 bayt kodlamasını destekler; yabancı dil alfabeleri (Japonca, Arapça, Kiril), matematiksel semboller ve emojiler kullanılabilir.'
      },
      {
        q: 'Düz Metin QR kodları sona erer mi veya ücret alır mı?',
        a: 'Hayır. QR Generator Online\'da oluşturulan statik metin QR kodları kalıcı ömür boyu geçerliliğe, sınırsız taramaya ve sıfır tekrar eden ücrete sahiptir.'
      },
      {
        q: 'Metin QR kodları endüstriyel barkod tarayıcılarla uyumlu mu?',
        a: 'Evet! Tüm standart 2D barkod okuyucular (Zebra, Honeywell, Datalogic) metin QR kodlarını tarar ve çözülen karakterleri doğrudan bağlı terminal yazılımına aktarır.'
      },
      {
        q: 'Termal barkod etiket yazıcıları için en iyi dosya biçimi hangisi?',
        a: 'Vektör SVG veya yüksek çözünürlüklü PNG biçimini dışa aktarın. Vektör SVG dosyaları ticari termal etiket baskı yazılımında %100 hassasiyetle işlenir.'
      },
      {
        q: 'Kodlanan metin verisi oluşturma sırasında gizli kalıyor mu?',
        a: 'Evet. Tüm QR kod oluşturma işlemi %100 istemci tarafında, web tarayıcınızın belleğinde yapılır. Hiçbir metin verisi harici sunuculara aktarılmaz veya orada saklanmaz.'
      }
    ],
    bestPractices: 'Düşük modül yoğunluğunu korumak için metni mümkün olduğunca kısa tutun. Beyaz arka plan üzerinde tam siyah modüller kullanın ve tüm varlık etiketlerinde zorunlu 4 modüllük sessiz bölgeyi koruyun.'
  },
  '/': {
    sections: [
      {
        title: 'Neden QR Generator Online\'ı Seçmelisiniz?',
        paragraphs: [
          'QR Generator Online, web\'in en esnek, gizlilik odaklı ve %100 ücretsiz QR kod oluşturucusudur. İster bir pazarlama broşürü için basit bir bağlantıya, ister dijital bir kartvizite veya anında misafir WiFi erişimine ihtiyacınız olsun, platformumuz saniyeler içinde profesyonel, taranabilir QR kodları oluşturur.',
          'Yüksek çözünürlüklü indirmeleri ödeme duvarlarının arkasında kilitleyen veya kodlarınızı 14 gün sonra sona erdiren diğer araçların aksine, QR Generator Online\'da oluşturulan tüm statik QR kodları sınırsız taramayla sonsuza kadar kalıcı ve işlevsel kalır.'
        ]
      },
      {
        title: 'Eksiksiz Özelleştirme Seçenekleri',
        paragraphs: [
          'Kurumsal marka kimliğinize uyacak şekilde QR kodunuzun her ayrıntısını özelleştirin. Birden fazla nokta stili deseni, dış köşe kare şekli, iç göz vurgusu, özel renk gradyanları ve merkeze gömülü logolar arasından seçim yapın.',
          'Büyük reklam panosu için baskıya hazır vektör SVG formatında veya dijital sosyal medya kampanyaları için net yüksek çözünürlüklü PNG formatında tasarımlarınızı dışa aktarın.'
        ]
      }
    ],
    technicalOverview: {
      title: 'Ücretsiz, Gizlilik Öncelikli QR Kod Oluşturma İçin Kurumsal Standart',
      paragraphs: [
        'QR Generator Online, ödünsüz görsel özelleştirme, endüstriyel düzeyde Reed-Solomon hata düzeltmesi ve %100 kriptografik veri egemenliği sunmak için sıfırdan tasarlanmış web\'in önde gelen istemci taraflı 2D barkod oluşturma platformudur. ISO/IEC 18004 kapsamında küresel olarak standartlaştırılan platformumuz, bireylerin, tasarım ajanslarının, küçük işletmelerin ve çok uluslu şirketlerin sıfır abonelik duvarı ve sıfır tarama sona erme sınırıyla tüm özel veri şemaları için kalıcı, taranabilir QR kodları oluşturmasını sağlar.',
        'Trafiğinizi sessizce özel yönlendirme sunucuları üzerinden yönlendiren yırtıcı QR oluşturucu hizmetlerinin aksine (yalnızca 14 gün sonra ani 30$/ay abonelik ödeme duvarlarının arkasında basılı pazarlama materyallerinizi rehin almak için), QR Generator Online doğrudan kodlama, statik bir mimari üzerinde çalışır. Platformumuzda bir URL, vCard, WiFi veya metin QR kodu oluşturduğunuzda, ham veriler doğrudan web tarayıcınızın belleğindeki görsel matris modüllerine derlenir. Bu, fiziksel pazarlama varlıklarınızın basılı materyallerinizin tüm ömrü boyunca kalıcı olarak işlevsel kalmasını garanti eder.',
        'Seviye H hata düzeltmesi (%30 cebirsel kurtarma), çok renkli gradyan paletleri, özel modül geometrileri, bağımsız köşe göz stilizasyonu ve kayıpsız vektör SVG/EPS dışa aktarma desteğiyle QR Generator Online, lüks ambalaj, ticari baskı öncesi, restoran masa üstü sipariş ve dijital iletişim ağı için gereken eksiksiz araç setini sunar.'
      ]
    },
    comparisonTable: {
      title: 'QR Generator Online ile Abonelik Tabanlı QR Platformları Karşılaştırması',
      headers: ['Platform Özelliği / Politikası', 'QR Generator Online (%100 Ücretsiz ve Açık)', 'Geleneksel Abonelik Tabanlı QR Hizmetleri'],
      rows: [
        ['Ömür Boyu Sona Erme', 'Asla sona ermez (kalıcı statik geçerlilik)', 'Ödenmedikçe 14 günlük denemeden sonra sona erer'],
        ['Tarama Sınırlamaları', 'Sınırsız ömür boyu tarama (sonsuza kadar 0 maliyet)', 'Ücretsiz katmanlarda 50-100 tarama/ay ile sınırlı'],
        ['Yönlendirme Gecikmesi', '0ms (doğrudan tarayıcı DNS çözümlemesi)', '200ms - 800ms ara sunucu atlaması'],
        ['Gizlilik ve Veri Takibi', '%100 İstemci Tarafında (IP kaydı veya çerez yok)', 'Ara sunucu kullanıcı IP\'lerini ve konumlarını takip eder'],
        ['Yüksek Çözünürlüklü Vektör Dışa Aktarma', 'Tam Vektör SVG, EPS ve 4K PNG ücretsiz dahil', 'Vektör formatları 30$+/ay katmanların arkasında kilitli'],
        ['Logo Ekleme', 'Seviye H (%30 kurtarma) ücretsiz dahil', 'Ücretsiz planlarda filigranlı veya kısıtlı']
      ]
    },
    steps: [
      { number: 1, title: 'Veri Türünü Seçin ve İçeriği Girin', description: 'Özel QR oluşturucularımızdan (URL, WiFi, vCard, PDF, WhatsApp, Sosyal Medya, E-posta, SMS, Telefon, Konum, Etkinlik, Kripto, Metin, Google Formlar, Ödemeler) seçim yapın ve verilerinizi girin.' },
      { number: 2, title: 'Görsel Geometriyi, Renkleri ve Marka Logosunu Özelleştirin', description: 'Kurumsal paletinizi uygulayın, yuvarlak veya şık nokta desenleri seçin, köşe gözlerini bağımsız olarak stilize edin ve merkezi marka logonuzu yükleyin.' },
      { number: 3, title: 'Kayıpsız Vektör SVG veya 4K PNG Dışa Aktarın', description: 'Ticari ofset baskı, ambalaj ve afişler için baskıya hazır vektör SVG indirin veya web ve dijital kanallar için 300 DPI\'de 2048x2048px PNG indirin.' }
    ],
    features: [
      { title: 'Eksiksiz QR Oluşturucu Araç Seti', description: 'Web URL\'leri, WiFi ağları, vCard 3.0 kişileri, PDF belgeleri, WhatsApp sohbetleri, GPS navigasyonu, ödemeler ve daha fazlası için tam destek.' },
      { title: 'Seviye H Reed-Solomon Hata Düzeltmesi', description: '%30 matematiksel veri kurtarma fazlalığıyla şirket logonuzu veya profil simgenizi gömün.' },
      { title: 'Kayıpsız Vektör SVG ve EPS Baskı İndirmeleri', description: 'QR grafiklerinizi küçük kartvizitlerden dev bina duvar resimlerine kadar keskin hassasiyetle sonsuz ölçeklendirin.' },
      { title: '%100 İstemci Tarafında Kriptografik Gizlilik', description: 'Tüm QR oluşturma algoritmaları web tarayıcınızın belleğinde yerel olarak çalışır. Bağlantılarınız, kimlik bilgileriniz ve parametreleriniz asla yüklenmez.' }
    ],
    sizingMatrix: {
      title: 'Ana Baskı Boyutlandırma ve Mesafe Referans Tablosu',
      description: 'Standart optik formül $S = D / 10$ kullanarak herhangi bir fiziksel ortam için minimum fiziksel boyutları hesaplayın.',
      headers: ['Fiziksel Yerleşim', 'Tarama Mesafesi (D)', 'Minimum Genişlik (S)', 'Önerilen Format'],
      rows: [
        ['Kartvizitler ve İsim Rozetleri', '15 cm - 30 cm (6" - 12")', '25 mm x 25 mm (1.0" x 1.0")', 'Vektör SVG / EPS'],
        ['Restoran Menüleri ve Masa Standları', '30 cm - 50 cm (12" - 20")', '35 mm x 35 mm (1.4" x 1.4")', 'Vektör SVG / 300 DPI PNG'],
        ['Ürün Ambalajı ve Kartonlar', '20 cm - 40 cm (8" - 16")', '30 mm x 30 mm (1.2" x 1.2")', 'Vektör SVG / PDF'],
        ['Broşürler, Afişler ve Dergiler', '50 cm - 150 cm (20" - 60")', '60 mm - 150 mm (2.4" - 6.0")', 'Vektör SVG / 300 DPI PNG'],
        ['Araç Filoları ve Vanlar', '3.0 m - 6.0 m (10 ft - 20 ft)', '300 mm x 300 mm (12" x 12")', 'Vektör SVG / Döküm Vinil'],
        ['Otoyol Reklam Panoları ve Afişler', '15.0 m - 30.0 m (50 ft - 100 ft)', '1500 mm - 3000 mm (5 ft - 10 ft)', 'Vektör SVG / Büyük Format EPS']
      ]
    },
    useCases: [
      { title: 'Çok Kanallı Perakende ve Ambalaj', description: 'Kutudan doğrudan dijital kutu açma eğitimleri, özgünlük doğrulaması ve müşteri kayıt portallarıyla fiziksel ürünleri köprüleyin.' },
      { title: 'Ağırlama ve Temassız Yemek', description: 'Ortalama hesap tutarlarını artıran hijyenik, gerçek zamanlı güncellenebilir dijital PDF menüler, şarap listeleri ve masa başı sipariş kartları dağıtın.' },
      { title: 'Yönetici Ağ Oluşturma ve Akıllı Kartlar', description: 'Tek dokunuşla vCard 3.0 iletişim kodlarıyla fiziksel kartvizitleri kalıcı akıllı telefon adres defteri girişlerine dönüştürün.' },
      { title: 'Emlak Pazarlaması ve 3D Turlar', description: 'Bahçe tabelalarını ve açık ev yönlendirmelerini 3D Matterport turlarına bağlanan 7/24 etkileşimli potansiyel müşteri portallarına dönüştürün.' },
      { title: 'Sürtünmesiz Misafir WiFi Erişimi', description: 'Otellerde, kafelerde ve ofislerde WPA3/WPA2 ağları için tek dokunuşla kamera taramasıyla şifre paylaşımı hayal kırıklığını ortadan kaldırın.' }
    ],
    troubleshooting: {
      title: '%100 İlk Denemede Tarama Güvenilirliği İçin 5 Kritik Kural',
      points: [
        'Minimum 4.5:1 Kontrast Oranını Koruyun: parlak beyaz veya soluk bir arka plan üzerindeki koyu ön plan modülleri anında optik kamera ikilileştirmesini sağlar.',
        '4 Modüllük Sessiz Bölge Kenar Boşluğunu Koruyun: barkodu çevreleyen zorunlu 4 modüllük boş kenarlığa asla görsel veya metin taşmasına izin vermeyin.',
        'Merkezi Logolar İçin Asla %30 Alanı Aşmayın: gömülü logoları toplam yüzey alanının %25-30\'unun altında tutun ve her zaman Seviye H hata düzeltmesiyle oluşturun.',
        'Ticari Baskı Baskıları İçin Vektör SVG Kullanın: düşük çözünürlüklü 72 DPI ekran görüntülerinden kaçının. Vektör SVG herhangi bir baskı ölçeğinde keskin kenarlar garanti eder.',
        'Parlamayı Önlemek İçin Mat Yüzeyler Belirleyin: parlak laminasyon üstteki ışıkları doğrudan kamera sensörlerine yansıtır. Mat, ipek veya saten kaplamalar kullanın.'
      ]
    },
    faqs: [
      { q: 'QR Generator Online\'da oluşturulan QR kodları gerçekten sonsuza kadar %100 ücretsiz mi?', a: 'Evet! QR Generator Online\'da oluşturulan tüm statik QR kodları, sınırsız tarama, kalıcı ömür boyu geçerlilik ve sıfır abonelik ödeme duvarıyla %100 ücretsizdir.' },
      { q: 'Diğer QR oluşturucu web siteleri kodlarımı neden 14 gün sonra sona erdiriyor?', a: 'Birçok ticari QR platformu, taramalarınızı sunucuları üzerinden yönlendiren dinamik yönlendirme bağlantıları kullanır. Bir deneme süresinden sonra, pahalı bir aylık abonelik ($15 - $40/ay) ödeyene kadar yönlendirmeyi devre dışı bırakırlar. QR Generator Online, verileri doğrudan barkoda kodlayan kalıcı statik kodlar oluşturur, yani asla rehin tutulamazlar.' },
      { q: 'QR Generator Online\'dan hangi dosya formatlarını indirebilirim?', a: 'Baskıya hazır vektör SVG dosyalarını (ticari baskı öncesi için sonsuz ölçeklenebilir) ve 300 DPI\'de ultra yüksek çözünürlüklü 2048x2048px PNG raster görüntülerini indirebilirsiniz.' },
      { q: 'Herhangi bir QR kodunun merkezine şirket logomu ekleyebilir miyim?', a: 'Evet! Tüm özel QR oluşturucu türlerinde özel PNG, SVG veya JPEG logoları yükleyebilirsiniz. Motorumuz otomatik olarak Seviye H (%30) hata düzeltmesi ve logonuzun etrafına sessiz bir maske tamponu uygular.' },
      { q: 'QR Generator Online kullanırken verilerim güvenli ve gizli mi?', a: 'Evet. Tüm QR oluşturma algoritmaları, istemci taraflı JavaScript aracılığıyla web tarayıcınızın belleğinde yerel olarak çalışır. URL\'leriniz, şifreleriniz, iletişim bilgileriniz ve görselleriniz asla harici sunuculara yüklenmez veya depolanmaz.' },
      { q: 'Bu QR kodlarını taramak için telefonuma bir uygulama yüklemem gerekir mi?', a: 'Hayır. iOS 11+ çalıştıran tüm modern iPhone\'lar ve Android 9+ çalıştıran Android cihazlar, herhangi bir üçüncü taraf yazılımı olmadan yerleşik kamera uygulamasını kullanarak QR kodlarını yerel olarak tarar.' },
      { q: 'Bir afiş veya poster için QR kodumu ne kadar büyük yazdırmalıyım?', a: '10:1 optik kuralını uygulayın: Kullanıcıya mesafe / 10 = Minimum QR genişliği. 1,5 metre uzaktan görüntülenen bir poster için, kodu en az 15 cm x 15 cm yazdırın.' },
      { q: 'Ticari ürünler ve mallar için QR kodları oluşturabilir miyim?', a: 'Evet! Platformumuzda oluşturulan tüm QR kodlarını dünya çapında perakende ambalajı, kitaplar, giyim ve tabelalarda kullanma konusunda tam ticari mülkiyet ve lisanslama haklarına sahipsiniz.' }
    ],
    bestPractices: 'Ticari baskı için her zaman vektör SVG olarak dışa aktarın, yüksek kontrastı koruyun (> 4.5:1), 4 modüllük sessiz bölgeyi koruyun ve büyük baskılar sipariş etmeden önce fiziksel basılı prova taraması yaparak test edin.'
  }
};
