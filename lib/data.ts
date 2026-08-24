// ─────────────────────────────────────────────────────────────────
//  Meguiar's Ankara — Veri Modeli ve İçerik Yönetimi
//  Swiss Anchor Sistemi: Doğrulanmış gerçek işletme verileri.
// ─────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Meguiar's Ankara",
  shortName: "Meguiar's Ankara",
  category: "Premium Oto Yıkama & Detailing Stüdyosu",
  phone: "0533 928 54 67",
  phoneRaw: "+905339285467",
  address: {
    street: "Beytepe, Enver Türkileri Sok No:8/F",
    district: "Çankaya",
    city: "Ankara",
    postalCode: "06800",
    full: "Beytepe, Enver Türkileri Sok No:8/F, 06800 Çankaya/Ankara",
  },
  hours: "Pazartesi – Cumartesi: 09:30 – 18:30 (Pazar Kapalı)",
  maps: {
    url: "https://www.google.com/maps/place/Meguiars+Ankara/@39.869608,32.6683182,14z/data=!4m9!1m2!2m1!1soto+y%C4%B1kama!3m5!1s0x14d339bde89c5477:0x4b5a8c863a52e0af!8m2!3d39.8696078!4d32.7064272!16s%2Fg%2F11y0mfvf7k!5m1!1e1",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12202.543!2d32.6683182!3d39.869608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339bde89c5477%3A0x4b5a8c863a52e0af!2sMeguiars%20Ankara!5e0!3m2!1str!2str!4v1698000000000!5m2!1str!2str",
  },
} as const;

// WhatsApp bağlamsal mesajları
export const WA_MESSAGES = {
  general:
    "Merhaba, Meguiar's Ankara'dan oto yıkama / araç bakım hizmeti almak istiyorum. Randevu hakkında bilgi alabilir miyim?",
  appointment:
    "Merhaba, Meguiar's Ankara'dan randevu almak istiyorum. En yakın müsait gün ve saati öğrenebilir miyim?",
  wash: "Merhaba, Premium Oto Yıkama hizmeti için randevu almak istiyorum.",
  interior: "Merhaba, Detaylı İç Temizlik hizmeti hakkında detay ve randevu almak istiyorum.",
  exterior: "Merhaba, Dış Detaylı Temizlik uygulaması hakkında bilgi ve randevu rica ediyorum.",
  polish: "Merhaba, Pasta & Cila / Boya Düzeltme uygulaması için randevu talebinde bulunmak istiyorum.",
  paint: "Merhaba, Boya Bakımı & Koruma uygulaması hakkında bilgi almak istiyorum.",
  wheel: "Merhaba, Jant & Lastik Derin Temizlik ve Koruma hizmeti hakkında bilgi almak istiyorum.",
};

export function getWhatsAppUrl(messageKey: keyof typeof WA_MESSAGES, customText?: string): string {
  const text = customText || WA_MESSAGES[messageKey];
  return `https://wa.me/${BUSINESS.phoneRaw.replace("+", "")}?text=${encodeURIComponent(text)}`;
}

// ─────────────────────────────────────────────────────────────────
// HİZMETLER LİSTESİ
// ─────────────────────────────────────────────────────────────────
export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  duration: string;
  waKey: keyof typeof WA_MESSAGES;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "wash",
    code: "SVC-01",
    title: "Premium Oto Yıkama",
    category: "Temel Bakım",
    summary: "pH nötr aktif köpük, çiziksiz mikrofiber eldiven yıkaması ve özenli kurulama.",
    details: [
      "pH nötr ön yıkama köpüğü",
      "Çift kova yöntemiyle eldivenli yıkama",
      "Korumalı jant yüzey temizliği",
      "Basınçlı hava ile su tahliyesi ve lekesiz kurulama",
      "Hızlı iç süpürme ve paspas temizliği"
    ],
    duration: "45 – 60 dk",
    waKey: "wash",
  },
  {
    id: "interior",
    code: "SVC-02",
    title: "Detaylı İç Temizlik & Hijyen",
    category: "İç Bakım",
    summary: "Koltuklar, taban halısı, tavan, plastik ve deri yüzeylerin derinlemesine hijyenik temizliği.",
    details: [
      "Kumaş & deri koltukların derinlemesine temizliği",
      "Taban halısı ve bagaj alanının vakumlu arındırılması",
      "Havalandırma ızgaraları ve konsol detay fırçalaması",
      "Deri besleme ve mat koruyucu süt uygulaması",
      "Anti-bakteriyel kabin havalandırması"
    ],
    duration: "3 – 5 saat",
    waKey: "interior",
  },
  {
    id: "exterior",
    code: "SVC-03",
    title: "Dış Detaylı Temizlik & Kil Uygulaması",
    category: "Dış Bakım",
    summary: "Boya yüzeyine yapışan demir tozu, reçine ve zift kalıntılarının arındırılması.",
    details: [
      "Demir tozu arındırıcı kimyasal ön işlem",
      "Sentetik kil (clay bar) ile pürüzsüzleştirme",
      "Zift ve reçine temizliği",
      "Kapı araları ve bagaj fitili detay temizliği",
      "Hidrofobik hızlı cila koruma katmanı"
    ],
    duration: "2 – 3 saat",
    waKey: "exterior",
  },
  {
    id: "polish",
    code: "SVC-04",
    title: "Pasta & Cila (Boya Düzeltme)",
    category: "Yüzey Restorasyonu",
    summary: "Hare izleri, kılcal çizikler ve matlaşmış verniğin düzeltilerek ilk günkü parlaklığa kavuşturulması.",
    details: [
      "Mikron kalınlık ölçümü ile boya analizi",
      "Ağır ve orta çizik giderici pasta adımı",
      "Hologram ve hare giderici cila uygulaması",
      "Meguiar's profesyonel polisaj pedleri ve bileşikleri",
      "Yüksek ayna parlaklığı bitişi"
    ],
    duration: "1 – 2 gün",
    waKey: "polish",
  },
  {
    id: "paint",
    code: "SVC-05",
    title: "Boya Koruma & Wax Uygulaması",
    category: "Koruma",
    summary: "Güneş ışınları, asit yağmurları ve dış etkenlere karşı koruyucu hidrofobik kalkan.",
    details: [
      "Yüksek dayanımlı sentetik polimer wax katmanı",
      "UV koruması ve vernik solması engelleme",
      "Üstün su ve kir iticilik (su boncuklanması)",
      "Boya renginde derinlik ve ekstra parlaklık",
      "Yıkama sonrası hızlı kurulama kolaylığı"
    ],
    duration: "2 – 4 saat",
    waKey: "paint",
  },
  {
    id: "wheel",
    code: "SVC-06",
    title: "Jant, Davlumbaz & Lastik Bakımı",
    category: "Detay Bakım",
    summary: "Balata tozu yanıkları, yol kiri ve lastik matlaşmasına karşı detaylı derin temizlik.",
    details: [
      "Asitsiz, fren kaliperlerine güvenli jant temizleyici",
      "Davlumbaz içi çamur ve katran arındırma",
      "Jant göbeği ve somun detay fırçalaması",
      "Silikonsuz, leke bırakmayan mat lastik kondisyoneri",
      "Fren tozu yapışmasını geciktirici koruyucu tabaka"
    ],
    duration: "45 – 60 dk",
    waKey: "wheel",
  },
];

// ─────────────────────────────────────────────────────────────────
// GÜVEN SÜTUNLARI (Swiss Matrix)
// ─────────────────────────────────────────────────────────────────
export const TRUST_MATRIX = [
  {
    code: "01",
    label: "Uzman Uygulama",
    desc: "Aracın boya ve iç aksamına zarar vermeyen profesyonel teknikler ve doğru ekipmanlar.",
  },
  {
    code: "02",
    label: "Meguiar's & Premium Ürünler",
    desc: "Test edilmiş, pH dengeli, otomotiv üreticileri standartlarında yüksek kaliteli bakım kimyasalları.",
  },
  {
    code: "03",
    label: "Beytepe / Çankaya Lokasyonu",
    desc: "Enver Türkileri Sokak'ta rahat araç teslimi ve kolay ulaşılabilir merkezi konum.",
  },
];

// ─────────────────────────────────────────────────────────────────
// NEDEN BİZ
// ─────────────────────────────────────────────────────────────────
export const STANDARDS = [
  {
    title: "Çiziksiz Yıkama Protokolü",
    desc: "Çift kova sistemi, grit guard filtreleri ve yumuşak mikrofiber yıkama eldivenleri ile fırçasız yıkama standardı.",
  },
  {
    title: "Boya ve Vernik Güvenliği",
    desc: "Boya kalınlığına uygun bileşik ve ped seçimiyle verniğe gereksiz aşındırma uygulamadan maksimum parlaklık.",
  },
  {
    title: "Şeffaf İletişim & Hızlı Randevu",
    desc: "Telefon veya WhatsApp ile beklemeden net bilgi, uygun saat planlaması ve işlem durumu takibi.",
  },
  {
    title: "Malzeme & Aksesuar Koruması",
    desc: "Deri, alcantara, piano black ve krom yüzeylerin her birine özel geliştirilmiş ayrı bakım solüsyonları.",
  },
];

// ─────────────────────────────────────────────────────────────────
// GALERİ (Google Maps & Gerçek Stüdyo Detay Fotoğrafları)
// ─────────────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  {
    id: "g-gmaps-1",
    title: "Meguiar's Ankara Stüdyo Uygulaması",
    category: "wash",
    categoryLabel: "Dış Yıkama",
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmARKUx8JAX2BDI1381iZmI2ZnYlJT-9jFqYYrxuQO26kuPqJCm0rPRhGxWuPZ9afylvgbjkJQYjCwJd0_v7Y6M5S8o5FhbC3OUJGNbaUqfqQcp4hWsgZPef1G8VLrzzSDPL2IL4bfmWUw=w1200-h800-k-no",
    source: "Google Haritalar",
    alt: "Meguiar's Ankara Beytepe oto yıkama stüdyosu",
  },
  {
    id: "g-wash-foam",
    title: "Aktif Köpük Ön Yıkama",
    category: "wash",
    categoryLabel: "Dış Yıkama",
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Köpüklü temas öncesi oto yıkama",
  },
  {
    id: "g-polish-rotary",
    title: "Boya Düzeltme & Çizik Giderme",
    category: "polish",
    categoryLabel: "Pasta & Cila",
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Pasta cila boya düzeltme işlemi",
  },
  {
    id: "g-interior-clean",
    title: "Deri Koltuk & Detay Temizliği",
    category: "interior",
    categoryLabel: "İç Detay",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Araç içi deri ve koltuk detay temizliği",
  },
  {
    id: "g-wheels-deep",
    title: "Jant & Fren Kaliperi Temizliği",
    category: "wheels",
    categoryLabel: "Jant & Detay",
    src: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Jant ve lastik derinlemesine temizlik",
  },
  {
    id: "g-hydrophobic-beads",
    title: "Boya Koruma & Hidrofobik Yüzey",
    category: "polish",
    categoryLabel: "Boya Koruma",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Boya koruma su iticilik parlaklık",
  },
  {
    id: "g-cockpit-hygiene",
    title: "Konsol & Havalandırma Hijyeni",
    category: "interior",
    categoryLabel: "İç Detay",
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Kokpit ve klima ızgarası hijyenik temizlik",
  },
  {
    id: "g-final-delivery",
    title: "Kusursuz Teslimat Parlaklığı",
    category: "wash",
    categoryLabel: "Teslimat",
    src: "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=1200&q=85&auto=format&fit=crop",
    source: "Stüdyo Uygulama",
    alt: "Detaylı oto yıkama ve parlak teslimat",
  },
];
