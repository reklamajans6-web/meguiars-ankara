import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meguiar's Ankara | Premium Oto Yıkama ve Araç Bakım",
  description:
    "Meguiar's Ankara, Beytepe Çankaya'da profesyonel oto yıkama ve araç bakım hizmetleri. Randevu ve bilgi için bizimle iletişime geçin.",
  keywords: [
    "Beytepe oto yıkama",
    "Çankaya oto yıkama",
    "Ankara oto yıkama",
    "Beytepe araç bakım",
    "premium oto yıkama Ankara",
    "detaylı oto temizlik Ankara",
    "Meguiars Ankara",
  ],
  openGraph: {
    title: "Meguiar's Ankara | Premium Oto Yıkama ve Araç Bakım",
    description:
      "Beytepe Çankaya'da profesyonel oto yıkama ve araç bakım hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Meguiar's Ankara",
  description:
    "Beytepe Çankaya'da profesyonel oto yıkama ve araç bakım hizmetleri.",
  telephone: "+905339285467",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beytepe, Enver Türkileri Sok No:8/F",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06800",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.8696078,
    longitude: 32.7064272,
  },
  url: "https://meguiarsankara.com",
  hasMap:
    "https://www.google.com/maps/place/Meguiars+Ankara/@39.869608,32.6683182,14z",
  areaServed: {
    "@type": "City",
    name: "Ankara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
