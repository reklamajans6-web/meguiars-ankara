"use client";

import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galeri" className="section-py bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="accent-line" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Temizlikten Sonra{" "}
            <span style={{ color: "#c9a96e" }}>Farkı Görün</span>
          </h2>
        </div>

        {/* Main Grid: 1 large + 2 small on top */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-2">
          {/* Large */}
          <div className="lg:col-span-2 overflow-hidden relative group aspect-[16/10]">
            <img
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Two smalls stacked */}
          <div className="flex flex-col gap-2">
            {GALLERY_IMAGES.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden relative group flex-1"
                style={{ minHeight: "160px" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  style={{ height: "100%", minHeight: "160px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: 3 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {GALLERY_IMAGES.slice(3).map((img, i) => (
            <div
              key={i}
              className="overflow-hidden relative group aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-white/25 mt-6 tracking-wider">
          Gerçek araç bakım çalışmalarımızdan görüntüler —{" "}
          <a
            href="https://wa.me/905339285467"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/50 transition-colors"
          >
            daha fazlası için bize ulaşın
          </a>
        </p>
      </div>
    </section>
  );
}
