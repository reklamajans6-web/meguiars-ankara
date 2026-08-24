"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handler = () => {
      if (overlayRef.current) {
        const y = window.scrollY * 0.3;
        overlayRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#hizmetler")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ minHeight: "90svh" }}
    >
      {/* Background Image */}
      <div
        ref={overlayRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=90&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          scale: "1.08",
        }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Accent line — vertical left edge */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-[3px] hidden lg:block"
        style={{ background: "#c9a96e" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span
              className="w-8 h-[2px]"
              style={{ background: "#c9a96e" }}
            />
            <span
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: "#c9a96e" }}
            >
              Beytepe · Çankaya · Ankara
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white"
            style={{ animationDelay: "0.1s" }}
          >
            Aracınız İçin{" "}
            <span style={{ color: "#c9a96e" }}>Profesyonel</span>{" "}
            Bakım.
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-10 max-w-lg font-light">
            Beytepe&apos;de profesyonel oto yıkama ve araç bakım hizmetleri.
            Aracınızın temizliğini, parlaklığını ve görünümünü uzman
            dokunuşlarla yenileyin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-widest uppercase text-black transition-all duration-200"
              style={{ background: "#c9a96e" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#dbbe8a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c9a96e")
              }
            >
              <MessageCircle size={16} />
              Randevu Al
            </a>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              WhatsApp&apos;tan Ulaş
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 sm:gap-12">
            {[
              { label: "Çankaya'nın merkezinde", val: "Kolay" },
              { label: "WhatsApp ile anında iletişim", val: "Hızlı" },
              { label: "Özenli araç bakımı", val: "Profesyonel" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-lg font-bold font-heading"
                  style={{ color: "#c9a96e" }}
                >
                  {s.val}
                </div>
                <div className="text-xs text-white/40 mt-0.5 leading-tight max-w-[100px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Aşağı kaydır"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Keşfet</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      {/* Business info strip — bottom right */}
      <div className="absolute bottom-8 right-6 lg:right-10 z-10 hidden sm:block">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="text-white/40 hover:text-white/80 text-sm font-mono tracking-wider transition-colors"
        >
          {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
}
