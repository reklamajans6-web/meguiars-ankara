"use client";

import { useState } from "react";
import { GALLERY_ITEMS, BUSINESS } from "@/lib/data";
import { ExternalLink, Maximize2, X, Image as ImageIcon } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "wash", label: "Dış Yıkama" },
  { id: "interior", label: "İç Detay" },
  { id: "polish", label: "Pasta & Cila" },
  { id: "wheels", label: "Jant & Detay" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[number] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="section-py bg-[#f8f9fa] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e4002b] mb-2">
              Gerçek Uygulama Arşivi
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
              Stüdyo & Haritalar Galerisi
            </h2>
          </div>

          <a
            href={BUSINESS.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 transition-colors shadow-2xs self-start md:self-auto"
          >
            <ExternalLink size={14} className="text-[#e4002b]" />
            Google Haritalar Profilini İncele
          </a>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-neutral-950 text-white border-neutral-950"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Gallery Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white border border-neutral-200 overflow-hidden group cursor-pointer shadow-2xs hover:shadow-md transition-shadow"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Source Badge */}
                <div className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                  {item.source}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 size={20} />
                </div>
              </div>

              {/* Title Strip */}
              <div className="p-3.5 border-t border-neutral-100 bg-white flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900 truncate">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 flex-shrink-0 ml-2">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Modal Lightbox ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 bg-neutral-900 border border-neutral-700"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>

          <div
            className="bg-white border border-neutral-300 max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-neutral-950">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 flex items-center justify-between bg-white border-t border-neutral-200">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#e4002b]">
                  {selectedImage.source} · {selectedImage.categoryLabel}
                </div>
                <h4 className="text-base font-bold text-neutral-950 mt-0.5">
                  {selectedImage.title}
                </h4>
              </div>
              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-[#e4002b] underline"
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
