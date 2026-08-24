"use client";

import { useState } from "react";
import { GALLERY_CATEGORIES, GALLERY_IMAGES, BUSINESS } from "@/lib/data";
import { ExternalLink, Maximize2, X, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[number] | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="galeri" className="section-py bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ── Section Header (Balanced & Centered) ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c9a96e]" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-[#c9a96e]">
              Uygulama & Sonuçlar
            </span>
            <span className="w-8 h-[1px] bg-[#c9a96e]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Temizlikten Sonra <span style={{ color: "#c9a96e" }}>Farkı Görün</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
            Meguiar&apos;s Ankara stüdyosunda gerçekleştirdiğimiz detaylı temizlik, pasta cila ve bakım uygulamalarından kareler.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#c9a96e] text-black shadow-md"
                  : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Gallery Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden bg-[#111318] border border-white/[0.06] aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#c9a96e] mb-1">
                  Meguiar&apos;s Detailing
                </span>
                <p className="text-white font-heading font-semibold text-sm leading-snug">
                  {img.title}
                </p>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white/80">
                  <Maximize2 size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Google Maps Photos Direct Button & Trust Note ── */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#111318]/50 p-6 border">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0 text-[#c9a96e]">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="text-white font-heading font-semibold text-sm sm:text-base">
                Google Haritalar Fotoğrafları
              </div>
              <div className="text-white/45 text-xs">
                Müşterilerimizin ve stüdyomuzun Google profilindeki tüm fotoğrafları inceleyin
              </div>
            </div>
          </div>

          <a
            href={BUSINESS.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/30 transition-all flex-shrink-0"
          >
            <ExternalLink size={14} />
            Google&apos;da Tüm Fotoğrafları Gör
          </a>
        </div>

      </div>

      {/* ── Lightbox Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Kapat"
          >
            <X size={24} />
          </button>

          <div
            className="max-w-4xl w-full bg-[#111318] border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 flex items-center justify-between bg-[#111318]">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] font-semibold block">
                  Meguiar&apos;s Ankara
                </span>
                <h4 className="text-white font-heading font-semibold text-base mt-0.5">
                  {selectedImage.title}
                </h4>
              </div>
              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white underline underline-offset-4"
              >
                Google Haritalar
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
