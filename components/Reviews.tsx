"use client";

import { Star, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS, GOOGLE_REVIEWS_INFO } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="yorumlar" className="section-py bg-[#0d0e12] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
              Müşteri Deneyimi & Şeffaflık
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Müşterilerimiz Ne Diyor?
            </h2>
          </div>

          {/* Direct Link to Google Reviews */}
          <a
            href={BUSINESS.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 text-xs font-bold uppercase tracking-wider transition-colors self-start md:self-auto shadow-md"
          >
            <ExternalLink size={14} className="text-[#e4002b]" />
            Google&apos;da Tüm Yorumları Gör
          </a>
        </div>

        {/* ── Google Trust Banner ── */}
        <div className="bg-[#14151a] border border-neutral-800 p-6 sm:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 bg-[#e4002b] text-white flex items-center justify-center font-heading font-black text-2xl tracking-tight shadow-md">
              5.0
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white text-sm font-bold">
                Google Haritalar Doğrulanmış İşletme Puanı
              </p>
              <p className="text-neutral-400 text-xs mt-0.5">
                Beytepe, Çankaya / Ankara lokasyonunda %100 memnuniyet odaklı hizmet.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-neutral-900 text-neutral-300 border border-neutral-750">
              <ShieldCheck size={14} className="text-emerald-400" />
              Doğrulanmış İşletme Profili
            </span>
          </div>
        </div>

        {/* ── Verified Highlights Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS_INFO.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111216] border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author & Verification Meta */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-300">
                    G
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-none">
                      {item.author}
                    </span>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>

                <a
                  href={BUSINESS.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#e4002b] hover:text-white transition-colors"
                >
                  Doğrula →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
