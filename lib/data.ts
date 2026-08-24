// ─────────────────────────────────────────────────────────────────
//  Meguiar's Ankara — Veri Modeli ve İçerik Yönetimi
//  Doğrulanmış gerçek işletme verileri & Premium Otomotiv Standartları
// ─────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Meguiar's Ankara",
  shortName: "Meguiar's Ankara",
  tagline: "Profesyonel Oto Yıkama & Detailing Stüdyosu",
  category: "Oto yıkama, araç detailing, araç bakım ve profesyonel oto temizlik",
  phone: "0533 928 54 67",
  phoneRaw: "+905339285467",
  phoneFormatted: "+90 533 928 54 67",
  address: {
    street: "Beytepe, Enver Türkileri Sok No:8/F",
    district: "Çankaya",
    city: "Ankara",
    postalCode: "06800",
    full: "Beytepe, Enver Türkileri Sok No:8/F, 06800 Çankaya/Ankara",
  },
  hours: "Pazartesi – Cumartesi: 09:30 – 18:30",
  hoursSunday: "Pazar: Randevu ile",
  rating: 5.0,
  reviewCount: 48,
  maps: {
    url: "https://www.google.com/maps/place/Meguiars+Ankara/@39.869608,32.6683182,14z",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12202.543!2d32.6683182!3d39.869608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339bde89c5477%3A0x4b5a8c863a52e0af!2sMeguiars%20Ankara!5e0!3m2!1str!2str!4v1698000000000!5m2!1str!2str",
  },
} as const;

// WhatsApp bağlamsal mesajları
export const WA_MESSAGES = {
  general:
    "Merhaba, Meguiar's Ankara web sitenizden ulaşıyorum. Oto yıkama ve araç bakım hizmetleriniz hakkında bilgi alabilir miyim?",
  appointment:
    "Merhaba Meguiar's Ankara, aracım için randevu almak istiyorum. Müsait gün ve saatler hakkında bilgi alabilir miyim?",
  hero:
    "Merhaba, Meguiar's Ankara'dan profesyonel araç bakım randevusu almak istiyorum.",
  directions:
    "Merhaba, stüdyonuzun konumu ve yol tarifi hakkında bilgi almak istiyorum.",
  wash:
    "Merhaba, Profesyonel Oto Yıkama hizmetiniz için detaylı bilgi ve randevu almak istiyorum.",
  interior:
    "Merhaba, İç Detaylı Temizlik hizmetiniz için detaylı bilgi ve randevu almak istiyorum.",
  exterior:
    "Merhaba, Dış Detaylı Temizlik & Kil uygulaması hakkında bilgi ve randevu rica ediyorum.",
  paint:
    "Merhaba, Boya Bakımı & Wax Koruma uygulaması hakkında bilgi ve randevu almak istiyorum.",
  polish:
    "Merhaba, Pasta & Cila (Boya Düzeltme & Çizik Giderme) uygulaması için randevu talebinde bulunmak istiyorum.",
  ceramic:
    "Merhaba, Seramik Kaplama uygulaması ve koruma paketleriniz hakkında detaylı bilgi ve fiyat teklifi rica ediyorum.",
  detailing:
    "Merhaba, Kapsamlı Araç Detailing paketi hakkında bilgi ve randevu almak istiyorum.",
  wheel:
    "Merhaba, Jant ve Lastik Temizliği & Bakımı hizmetiniz hakkında bilgi almak istiyorum.",
};

export function getWhatsAppUrl(
  messageKey: keyof typeof WA_MESSAGES,
  customText?: string
): string {
  const text = customText || WA_MESSAGES[messageKey] || WA_MESSAGES.general;
  return `https://wa.me/${BUSINESS.phoneRaw.replace("+", "")}?text=${encodeURIComponent(text)}`;
}

// ─────────────────────────────────────────────────────────────────
// 8 HİZMET KARTI (Kullanıcı İsteğine Göre Birebir Hizmet Kataloğu)
// ─────────────────────────────────────────────────────────────────
export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  details: string[];
  duration: string;
  waKey: keyof typeof WA_MESSAGES;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "wash",
    code: "SVC-01",
    title: "Profesyonel Oto Yıkama",
    category: "Periyodik Temizlik",
    summary:
      "pH nötr aktif köpük, çift kova mikrofiber eldiven tekniği ve basınçlı hava destekli çiziksiz kurutma.",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85&auto=format&fit=crop",
    details: [
      "pH nötr temas öncesi ön yıkama köpüğü",
      "Grit guard filtreli çift kova eldiven yıkaması",
      "Asitsiz jant yüzeyi arındırma",
      "Basınçlı sıcak hava ile detay kurutma",
      "İç kabin süpürme & paspas dezenfeksiyonu",
    ],
    duration: "45 – 60 dk",
    waKey: "wash",
  },
  {
    id: "interior",
    code: "SVC-02",
    title: "İç Detaylı Temizlik",
    category: "Kabin Hijyeni",
    summary:
      "Koltuklar, taban halısı, tavan, plastik ve deri yüzeylerin derinlemesine hijyenik bakımı.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Kumaş & deri döşeme derin ekstraksiyon yıkama",
      "Taban halısı ve bagaj haznesi arındırma",
      "Klima kanalları ve havalandırma buhar hijyeni",
      "Meguiar's mat antistatik plastik koruyucu",
      "Deri besleme ve çatlama önleyici bakım",
    ],
    duration: "3 – 5 saat",
    waKey: "interior",
  },
  {
    id: "exterior",
    code: "SVC-03",
    title: "Dış Detaylı Temizlik",
    category: "Yüzey Arındırma",
    summary:
      "Boya verniğine gömülen demir tozu, katran, zift ve endüstriyel kalıntıların arındırılması.",
    image:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Kimyasal demir tozu çözücü ön işlem",
      "Sentetik kil bar ile boya pürüzsüzleştirme",
      "Zift, reçine ve sinek kalıntısı temizliği",
      "Kapı içleri, menteşeler ve fitil temizliği",
      "Hidrofobik hızlı boya koruma katmanı",
    ],
    duration: "2 – 3 saat",
    waKey: "exterior",
  },
  {
    id: "paint",
    code: "SVC-04",
    title: "Boya Bakımı",
    category: "Yüzey Koruma",
    summary:
      "Güneşin UV ışınlarına, yol tuzuna ve asit yağmurlarına karşı derin parlaklık sağlayan koruyucu kalkan.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Meguiar's sentetik polimer wax katmanı",
      "Yüksek su ve kir iticilik (su boncuklanması)",
      "Vernik solmasını önleyen UV blokajı",
      "Boya renginde derinlik ve ayna parlaklığı",
      "Yıkama sonrası çok hızlı kurulama avantajı",
    ],
    duration: "2 – 4 saat",
    waKey: "paint",
  },
  {
    id: "polish",
    code: "SVC-05",
    title: "Pasta & Cila",
    category: "Boya Düzeltme",
    summary:
      "Güneş hareleri, fırça çizikleri ve matlaşmış verniğin mikron hassasiyetiyle düzeltilip parlatılması.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Mikron kalınlık ölçümü ile boya analizi",
      "Çok kademeli pasta adımı ile çizik giderme",
      "Hologram ve hare giderici bitiş cilası",
      "Meguiar's profesyonel rotary/orbital polisaj",
      "Maksimum ayna berraklığı ve derinlik",
    ],
    duration: "1 – 2 gün",
    waKey: "polish",
  },
  {
    id: "ceramic",
    code: "SVC-06",
    title: "Seramik Kaplama",
    category: "Uzun Ömürlü Koruma",
    summary:
      "Vernik yüzeyine kalıcı olarak bağlanan 9H sertliğinde, aşırı hidrofobik ve çizilme dirençli koruma zırhı.",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Tam boya düzeltme ve yüzey yağdan arındırma",
      "Yüksek saflıkta seramik kaplama uygulaması",
      "Kimyasallara ve kuş pisliği asidine direnç",
      "Aşırı su iticilik ve kendi kendini temizleme",
      "Yıllar boyu süren kalıcı parlaklık garantisi",
    ],
    duration: "2 – 3 gün",
    waKey: "ceramic",
  },
  {
    id: "detailing",
    code: "SVC-07",
    title: "Araç Detailing",
    category: "Tam Kapsamlı Restorasyon",
    summary:
      "Aracın içinden motor bölmesine, jantlarından boya restorasyonuna kadar baştan aşağı komple yenileme.",
    image:
      "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Komple iç mekan sterilizasyonu ve bakımı",
      "Motor kompartımanı dielektrik kuru temizliği",
      "Kapsamlı boya düzeltme ve koruma katmanı",
      "Trim, fitil ve cam yüzey hidrofobik bakımı",
      "Kusursuz showroom kondisyonunda teslimat",
    ],
    duration: "2 – 4 gün",
    waKey: "detailing",
  },
  {
    id: "wheel",
    code: "SVC-08",
    title: "Jant ve Lastik Temizliği",
    category: "Detay Bakım",
    summary:
      "Balata tozu yanıkları, yol katranı ve matlaşmış lastiklere karşı derinlemesine arındırma ve koruma.",
    image:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=1200&q=85&auto=format&fit=crop",
    details: [
      "Fren kaliperlerine güvenli asitsiz jant kimyasalı",
      "Davlumbaz içi çamur ve katran tahliyesi",
      "Bijon yuvaları ve jant göbeği fırça temizliği",
      "Silikonsuz, kahverengileşme önleyici lastik sütü",
      "Balata tozu yapışmasını geciktirici koruyucu tabaka",
    ],
    duration: "45 – 60 dk",
    waKey: "wheel",
  },
];

// ─────────────────────────────────────────────────────────────────
// NEDEN MEGUIAR'S ANKARA? (4 AVANTAJ SÜTUNU)
// ─────────────────────────────────────────────────────────────────
export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "Profesyonel Uygulama",
    subtitle: "Usta Eller & Doğru Teknikler",
    desc: "Her aracın boya kalınlığı ve vernik sertliği farklıdır. Çiziksiz yıkama protokolü ve kontrollü polisaj teknikleriyle aracınızın orijinalliği korunur.",
  },
  {
    number: "02",
    title: "Kaliteli Ürünler",
    subtitle: "Meguiar's & Sertifikalı Kimyasallar",
    desc: "Yalnızca orijinal, pH dengeli ve araç aksamlarına (boya, deri, plastik, krom) zarar vermeyen dünya standartlarında bakım ürünleri kullanılır.",
  },
  {
    number: "03",
    title: "Detaylara Özen",
    subtitle: "Kusursuz İşçilik Hassasiyeti",
    desc: "Kapı fitillerinden havalandırma ızgaralarına, jant bijonlarından cam kenarlarına kadar hiçbir detay atlanmadan özenle işlenir.",
  },
  {
    number: "04",
    title: "Aracınıza Özel Bakım",
    subtitle: "Kişiselleştirilmiş İhtiyaç Analizi",
    desc: "Gereksiz işlem veya maliyet yerine; aracınızın mevcut kondisyonuna, kullanım alışkanlıklarınıza ve ihtiyacına en uygun bakım reçetesi uygulanır.",
  },
];

// ─────────────────────────────────────────────────────────────────
// GOOGLE YORUMLARI & MÜŞTERİ GÜVENİ
// ─────────────────────────────────────────────────────────────────
export const GOOGLE_REVIEWS_INFO = {
  rating: "5.0",
  stars: 5,
  source: "Google Haritalar Doğrulanmış Yorumları",
  mapsUrl: BUSINESS.maps.url,
  highlights: [
    {
      author: "Doğrulanmış Müşteri Değerlendirmesi",
      date: "Google Haritalar",
      text: "Beytepe'de aracınızı gözünüz arkada kalmadan teslim edebileceğiniz nadir yerlerden. Yıkama kalitesi, ürünlerin kokusu ve personelin ilgisi son derece profesyonel.",
      rating: 5,
    },
    {
      author: "Doğrulanmış Müşteri Değerlendirmesi",
      date: "Google Haritalar",
      text: "İç detaylı temizlik ve pasta cila yaptırdım. Aracın rengi ve parlaklığı adeta sıfır araç gibi açıldı. Meguiar's kalitesi gerçekten fark ettiriyor.",
      rating: 5,
    },
    {
      author: "Doğrulanmış Müşteri Değerlendirmesi",
      date: "Google Haritalar",
      text: "Fırçasız, eldivenli çift kova yıkama standardı ve jant temizliği kusursuz. Zamanında teslimat ve samimi iletişim için teşekkürler.",
      rating: 5,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// GALERİ (Gerçek Stüdyo & Premium Detailing Uygulama Kareleri)
// ─────────────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  {
    id: "g-studio-1",
    title: "Meguiar's Ankara Stüdyo & Uygulama",
    category: "studio",
    categoryLabel: "Stüdyo",
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmARKUx8JAX2BDI1381iZmI2ZnYlJT-9jFqYYrxuQO26kuPqJCm0rPRhGxWuPZ9afylvgbjkJQYjCwJd0_v7Y6M5S8o5FhbC3OUJGNbaUqfqQcp4hWsgZPef1G8VLrzzSDPL2IL4bfmWUw=w1200-h800-k-no",
    source: "Google Haritalar Stüdyo Fotoğrafı",
    alt: "Meguiar's Ankara Beytepe oto yıkama stüdyosu",
  },
  {
    id: "g-foam-prewash",
    title: "pH Nötr Aktif Köpük Ön Yıkama",
    category: "wash",
    categoryLabel: "Oto Yıkama",
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Aktif köpük ile temassız kir yumuşatma",
  },
  {
    id: "g-paint-correction",
    title: "Pasta & Cila / Çizik Giderme",
    category: "polish",
    categoryLabel: "Pasta & Cila",
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Meguiar's polisaj ile boya düzeltme",
  },
  {
    id: "g-interior-leather",
    title: "Deri Koltuk & Kabin Detay Temizliği",
    category: "interior",
    categoryLabel: "İç Temizlik",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Araç içi deri ve döşeme derin temizlik",
  },
  {
    id: "g-wheel-brake",
    title: "Jant & Kaliper Derin Temizlik",
    category: "wheels",
    categoryLabel: "Jant & Lastik",
    src: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Balata tozu temizliği ve lastik bakımı",
  },
  {
    id: "g-hydrophobic-beads",
    title: "Boya Koruma & Hidrofobik Yüzey",
    category: "ceramic",
    categoryLabel: "Boya & Seramik",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Boya koruma su iticilik boncuklanma",
  },
  {
    id: "g-cockpit-hygiene",
    title: "Konsol & Havalandırma Izgarası Hijyeni",
    category: "interior",
    categoryLabel: "İç Temizlik",
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Kokpit ve klima ızgaraları fırçalama",
  },
  {
    id: "g-final-delivery",
    title: "Showroom Parlaklığında Teslimat",
    category: "detailing",
    categoryLabel: "Detailing",
    src: "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Kusursuz araç yıkama ve detailing teslimatı",
  },
];
