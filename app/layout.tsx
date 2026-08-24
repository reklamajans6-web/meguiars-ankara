import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Meguiar’s Ankara | Profesyonel Oto Yıkama & Araç Bakım",
  description:
    "Ankara Çankaya Beytepe’de profesyonel oto yıkama ve araç bakım hizmetleri. Meguiar’s Ankara ile aracınıza hak ettiği bakımı verin.",
  keywords: [
    "Ankara oto yıkama",
    "Çankaya oto yıkama",
    "Beytepe oto yıkama",
    "Ankara detailing",
    "Ankara araç bakım",
    "Meguiars Ankara",
    "Beytepe pasta cila",
    "Ankara seramik kaplama",
    "Beytepe detaylı iç temizlik",
    "çiziksiz oto yıkama Ankara",
  ],
  authors: [{ name: "Meguiar's Ankara" }],
  creator: "Meguiar's Ankara",
  publisher: "Meguiar's Ankara",
  metadataBase: new URL("https://meguiarsankara.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meguiar’s Ankara | Profesyonel Oto Yıkama & Araç Bakım",
    description:
      "Ankara Çankaya Beytepe’de profesyonel oto yıkama ve araç bakım hizmetleri. Meguiar’s Ankara ile aracınıza hak ettiği bakımı verin.",
    url: "https://meguiarsankara.com",
    siteName: "Meguiar's Ankara",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmARKUx8JAX2BDI1381iZmI2ZnYlJT-9jFqYYrxuQO26kuPqJCm0rPRhGxWuPZ9afylvgbjkJQYjCwJd0_v7Y6M5S8o5FhbC3OUJGNbaUqfqQcp4hWsgZPef1G8VLrzzSDPL2IL4bfmWUw=w1200-h800-k-no",
        width: 1200,
        height: 800,
        alt: "Meguiar's Ankara Beytepe Stüdyosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meguiar’s Ankara | Profesyonel Oto Yıkama & Araç Bakım",
    description:
      "Ankara Çankaya Beytepe’de profesyonel oto yıkama ve araç bakım hizmetleri.",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmARKUx8JAX2BDI1381iZmI2ZnYlJT-9jFqYYrxuQO26kuPqJCm0rPRhGxWuPZ9afylvgbjkJQYjCwJd0_v7Y6M5S8o5FhbC3OUJGNbaUqfqQcp4hWsgZPef1G8VLrzzSDPL2IL4bfmWUw=w1200-h800-k-no",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "@id": "https://meguiarsankara.com/#business",
  name: "Meguiar's Ankara",
  alternateName: "Meguiars Ankara Beytepe",
  description:
    "Ankara Çankaya Beytepe’de profesyonel oto yıkama ve araç bakım hizmetleri. Meguiar’s Ankara ile aracınıza hak ettiği bakımı verin.",
  telephone: "+905339285467",
  priceRange: "$$",
  image:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmARKUx8JAX2BDI1381iZmI2ZnYlJT-9jFqYYrxuQO26kuPqJCm0rPRhGxWuPZ9afylvgbjkJQYjCwJd0_v7Y6M5S8o5FhbC3OUJGNbaUqfqQcp4hWsgZPef1G8VLrzzSDPL2IL4bfmWUw=w1200-h800-k-no",
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
    latitude: 39.869608,
    longitude: 32.6683182,
  },
  url: "https://meguiarsankara.com",
  hasMap:
    "https://www.google.com/maps/place/Meguiars+Ankara/@39.869608,32.6683182",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Ankara",
    },
    {
      "@type": "AdministrativeArea",
      name: "Çankaya",
    },
    {
      "@type": "AdministrativeArea",
      name: "Beytepe",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090a0c] text-neutral-100 antialiased selection:bg-[#e4002b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
