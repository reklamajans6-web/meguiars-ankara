"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, BUSINESS } from "@/lib/data";
import { ExternalLink, Maximize2, X } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "studio", label: "İşletme & Stüdyo" },
  { id: "wash", label: "Oto Yıkama" },
  { id: "polish", label: "Pasta & Cila" },
  { id: "interior", label: "İç Temizlik" },
  { id: "wheels", label: "Jant & Lastik" },
  { id: "ceramic", label: "Boya & Seramik" },
  { id: "detailing", label: "Detailing" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof GALLERY_ITEMS)[number] | null
  >(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="section-py bg-[#090a0c] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
              Uygulama & Sonuç Arşivi
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Galeri & Stüdyo Görüntüleri
            </h2>
          </div>

          <a
            href={BUSINESS.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider bg-[#111216] hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 transition-colors self-start md:self-auto shadow-md"
          >
            <ExternalLink size={14} className="text-[#e4002b]" />
            Google Haritalar Fotoğrafları
          </a>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#e4002b] text-white border-[#e4002b] shadow-md"
                  : "bg-[#111216] text-neutral-400 hover:text-white hover:bg-neutral-800 border-neutral-800"
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
              className="bg-[#111216] border border-neutral-800/90 overflow-hidden group cursor-pointer shadow-lg hover:border-neutral-700 transition-all duration-300"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  unoptimized
                />

                {/* Source Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/80 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider border border-neutral-700/60">
                  {item.source}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="w-10 h-10 bg-[#e4002b] flex items-center justify-center shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>

              {/* Title Strip */}
              <div className="p-3.5 border-t border-neutral-800/80 bg-[#111216] flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-200 truncate">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 flex-shrink-0 ml-2">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 bg-neutral-900 border border-neutral-700 cursor-pointer shadow-xl z-10"
            aria-label="Kapat"
          >
            <X size={22} />
          </button>

          <div
            className="bg-[#111216] border border-neutral-800 max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="p-5 flex items-center justify-between bg-[#14151a] border-t border-neutral-800">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#e4002b]">
                  {selectedImage.source} · {selectedImage.categoryLabel}
                </div>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {selectedImage.title}
                </h4>
              </div>
              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-300 hover:text-[#e4002b] underline"
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
