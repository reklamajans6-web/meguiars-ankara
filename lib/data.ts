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
    photosUrl: "https://www.google.com/maps/place/Meguiars+Ankara/@39.8696078,32.7064272,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com!7i4032!8i3024!4m9!1m2!2m1!1soto+y%C4%B1kama!3m5!1s0x14d339bde89c5477:0x4b5a8c863a52e0af!8m2!3d39.8696078!4d32.7064272!16s%2Fg%2F11y0mfvf7k!5m1!1e1",
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
    number: "01",
    title: "Profesyonel Bakım",
    desc: "Aracınıza özenli ve detaylı uygulama",
  },
  {
    number: "02",
    title: "Premium Ürünler",
    desc: "Kaliteli bakım ürünleri ve profesyonel uygulama",
  },
  {
    number: "03",
    title: "Beytepe'de Kolay Ulaşım",
    desc: "Çankaya / Beytepe'de merkezi ve kolay ulaşılabilir lokasyon",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// NEDEN BİZ
// ─────────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    title: "Özenli Çalışma",
    desc: "Aracınızın her detayına dikkat eden profesyonel yaklaşım.",
  },
  {
    title: "Premium Görünüm",
    desc: "Temizlik sonrasında aracın daha temiz, parlak ve bakımlı görünmesini hedefleyen uygulamalar.",
  },
  {
    title: "Kolay İletişim",
    desc: "Telefon ve WhatsApp üzerinden hızlıca randevu ve bilgi alabilme.",
  },
  {
    title: "Beytepe Konumu",
    desc: "Çankaya / Beytepe bölgesinde rahatça ulaşabileceğiniz stüdyo.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// GALERİ — Detailing Stüdyosu ve Gerçek Uygulama Fotoğrafları
// ─────────────────────────────────────────────────────────────────
export const GALLERY_CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "wash", label: "Dış Yıkama" },
  { id: "interior", label: "İç Detay" },
  { id: "polish", label: "Pasta & Cila" },
  { id: "wheels", label: "Jant & Koruma" },
] as const;

export const GALLERY_IMAGES = [
  {
    id: "g1",
    category: "wash",
    title: "Köpüklü Ön Yıkama & Detay",
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85&auto=format&fit=crop",
    alt: "Köpüklü oto yıkama uygulaması",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "g2",
    category: "polish",
    title: "Boya Düzeltme & Parlatma",
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=85&auto=format&fit=crop",
    alt: "Pasta cila boya düzeltme işlemi",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "g3",
    category: "interior",
    title: "Deri Koltuk & İç Detay Temizliği",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop",
    alt: "Araç içi deri ve döşeme temizliği",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "g4",
    category: "wheels",
    title: "Jant & Lastik Derin Temizlik",
    src: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=800&q=85&auto=format&fit=crop",
    alt: "Jant temizleme ve parlatma",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "g5",
    category: "polish",
    title: "Boya Bakımı & Su İticilik",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&auto=format&fit=crop",
    alt: "Boya koruma ve parlak yüzey",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "g6",
    category: "wash",
    title: "Detaylı Dış Yıkama & Kurulama",
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=85&auto=format&fit=crop",
    alt: "Detaylı oto yıkama ve yüzey temizliği",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "g7",
    category: "interior",
    title: "Kokpit & Havalandırma Hijyeni",
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=85&auto=format&fit=crop",
    alt: "Araç kokpit ve konsol detay temizliği",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "g8",
    category: "wheels",
    title: "Kusursuz Teslimat Parlaklığı",
    src: "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=800&q=85&auto=format&fit=crop",
    alt: "Detaylı araç teslimatı ve stüdyo parlaklığı",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
] as const;
