// ─────────────────────────────────────────────────────────────────
//  Meguiar's Ankara — Site İçerik Veritabanı
//  Tüm metin, hizmet ve iletişim bilgileri burada yönetilir.
//  İşletme sahibi sadece bu dosyayı düzenleyerek siteyi güncelleyebilir.
// ─────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Meguiar's Ankara",
  shortName: "Meguiar's Ankara",
  phone: "0533 928 54 67",
  phoneRaw: "+905339285467",
  address: {
    street: "Beytepe, Enver Türkileri Sok No:8/F",
    district: "Çankaya",
    city: "Ankara",
    postalCode: "06800",
    full: "Beytepe, Enver Türkileri Sok No:8/F, 06800 Çankaya/Ankara",
  },
  maps: {
    url: "https://www.google.com/maps/place/Meguiars+Ankara/@39.869608,32.6683182,14z/data=!4m9!1m2!2m1!1soto+y%C4%B1kama!3m5!1s0x14d339bde89c5477:0x4b5a8c863a52e0af!8m2!3d39.8696078!4d32.7064272!16s%2Fg%2F11y0mfvf7k!5m1!1e1",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12202.543!2d32.6683182!3d39.869608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339bde89c5477%3A0x4b5a8c863a52e0af!2sMeguiars%20Ankara!5e0!3m2!1str!2str!4v1698000000000!5m2!1str!2str",
  },
} as const;

// WhatsApp mesajları — bağlama göre özelleştirilmiş
export const WA_MESSAGES = {
  general:
    "Merhaba, Meguiar's Ankara'dan oto yıkama / araç bakım hizmeti almak istiyorum. Randevu hakkında bilgi alabilir miyim?",
  appointment:
    "Merhaba, Meguiar's Ankara'dan randevu almak istiyorum. Müsait günlerinizi öğrenebilir miyim?",
  interior:
    "Merhaba, Detaylı İç Temizlik hizmeti hakkında bilgi almak istiyorum.",
  exterior:
    "Merhaba, Dış Detaylı Temizlik hizmeti hakkında bilgi almak istiyorum.",
  polish: "Merhaba, Pasta & Cila hizmeti hakkında bilgi almak istiyorum.",
  paint: "Merhaba, Boya Bakımı hizmeti hakkında bilgi almak istiyorum.",
  wash: "Merhaba, Premium Oto Yıkama hizmeti hakkında bilgi almak istiyorum.",
  wheel:
    "Merhaba, Jant & Lastik Temizliği hizmeti hakkında bilgi almak istiyorum.",
};

export function getWhatsAppUrl(messageKey: keyof typeof WA_MESSAGES): string {
  return `https://wa.me/${BUSINESS.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
    WA_MESSAGES[messageKey]
  )}`;
}

// ─────────────────────────────────────────────────────────────────
// HİZMETLER
// ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "wash",
    icon: "droplets",
    title: "Premium Oto Yıkama",
    description:
      "Aracınızın dış yüzeyinin ve temel iç alanlarının özenli şekilde temizlenmesi.",
    waKey: "wash" as keyof typeof WA_MESSAGES,
  },
  {
    id: "interior",
    icon: "armchair",
    title: "Detaylı İç Temizlik",
    description:
      "Koltuklar, zemin, plastik yüzeyler ve araç içindeki detayların kapsamlı temizliği.",
    waKey: "interior" as keyof typeof WA_MESSAGES,
  },
  {
    id: "exterior",
    icon: "sparkles",
    title: "Dış Detaylı Temizlik",
    description:
      "Aracın dış yüzeyinde daha titiz ve detaylı temizlik uygulaması.",
    waKey: "exterior" as keyof typeof WA_MESSAGES,
  },
  {
    id: "polish",
    icon: "zap",
    title: "Pasta & Cila",
    description:
      "Araç dış yüzeyinin görünümünü iyileştirmeye yönelik uygulamalar.",
    waKey: "polish" as keyof typeof WA_MESSAGES,
  },
  {
    id: "paint",
    icon: "shield",
    title: "Boya Bakımı",
    description:
      "Araç boyasının parlaklığını ve görünümünü korumaya yönelik bakım.",
    waKey: "paint" as keyof typeof WA_MESSAGES,
  },
  {
    id: "wheel",
    icon: "circle",
    title: "Jant & Lastik Temizliği",
    description:
      "Jant ve lastiklerde detaylı temizlik ve görünüm iyileştirme.",
    waKey: "wheel" as keyof typeof WA_MESSAGES,
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// GÜVEN ALANI
// ─────────────────────────────────────────────────────────────────
export const TRUST_POINTS = [
  {
    icon: "shield-check",
    title: "Profesyonel Uygulama",
    desc: "Aracınıza özenli ve detaylı bakım",
  },
  {
    icon: "star",
    title: "Premium Ürünler",
    desc: "Kaliteli bakım ürünleri ve profesyonel uygulama",
  },
  {
    icon: "map-pin",
    title: "Beytepe'de Kolay Ulaşım",
    desc: "Çankaya'nın merkezi konumunda",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// NEDEN BİZ
// ─────────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    icon: "eye",
    title: "Özenli Çalışma",
    desc: "Aracınızın her detayına dikkat eden profesyonel yaklaşım.",
  },
  {
    icon: "gem",
    title: "Premium Görünüm",
    desc: "Temizlik sonrasında aracın daha temiz, parlak ve bakımlı görünmesini hedefleyen uygulamalar.",
  },
  {
    icon: "message-circle",
    title: "Kolay İletişim",
    desc: "Telefon ve WhatsApp üzerinden hızlıca ulaşabilme.",
  },
  {
    icon: "navigation",
    title: "Beytepe Konumu",
    desc: "Çankaya / Beytepe bölgesinde kolay ulaşılabilir konum.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// GALERİ — Unsplash high-quality car/detailing fotoğrafları
// ─────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85&auto=format&fit=crop",
    alt: "Detaylı araç temizliği",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=800&q=85&auto=format&fit=crop",
    alt: "Parlak araç boya yüzeyi",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&auto=format&fit=crop",
    alt: "Premium otomobil",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
    alt: "Araç iç detay temizliği",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=85&auto=format&fit=crop",
    alt: "Lüks araç detayı",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=85&auto=format&fit=crop",
    alt: "Parlak araç",
    size: "medium",
  },
] as const;
