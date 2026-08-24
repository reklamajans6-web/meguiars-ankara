"use client";

import { useEffect, useRef } from "react";
import { getWhatsAppUrl, BUSINESS } from "@/lib/data";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax
  useEffect(() => {
    const handler = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "92svh" }}
    >
      {/* ── Background ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          // Sinematik, sağda araç — solda koyu alan. Porsche/BMW detailing hissi.
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614026480209-cd9934144671?w=1920&q=90&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: "scale(1.06)",
          transformOrigin: "center center",
        }}
      />

      {/* ── Overlays — solda daha koyu, sağda açılıyor ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/10" />

      {/* ── Sol kenar ince altın çizgi ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] opacity-60"
        style={{ background: "linear-gradient(to bottom, transparent, #c9a96e 30%, #c9a96e 70%, transparent)" }}
      />

      {/* ── İçerik ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20">
        <div className="max-w-[640px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[1px]" style={{ background: "#c9a96e" }} />
            <span
              className="text-[10px] tracking-[0.35em] uppercase font-semibold"
              style={{ color: "#c9a96e" }}
            >
              Meguiar&apos;s Ankara
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-bold text-white leading-[1.04] mb-6"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)" }}>
            Aracınız İçin<br />
            Profesyonel Bakım.
          </h1>

          {/* Açıklama */}
          <p className="text-white/55 font-light leading-relaxed mb-10 max-w-[480px]"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}>
            Beytepe&apos;de profesyonel oto yıkama ve araç bakım hizmetleri.
            Aracınızın temizliğini ve görünümünü uzman dokunuşlarla yenileyin.
          </p>

          {/* CTA Grubu */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary */}
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-[12px] font-bold tracking-[0.15em] uppercase text-black transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#c9a96e" }}
            >
              Randevu Al
            </a>

            {/* Secondary */}
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-[12px] font-semibold tracking-[0.12em] uppercase text-white/75 border border-white/20 hover:border-white/45 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
            >
              WhatsApp&apos;tan Ulaş
            </a>
          </div>
        </div>
      </div>

      {/* ── Alt sağ: telefon ── */}
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="absolute bottom-8 right-8 z-10 hidden lg:block text-white/30 hover:text-white/60 text-xs font-mono tracking-[0.2em] transition-colors"
      >
        {BUSINESS.phone}
      </a>

      {/* ── Scroll ipucu ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden sm:flex">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
