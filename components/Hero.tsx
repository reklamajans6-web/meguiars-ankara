"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, MessageCircle, ExternalLink, Sparkles, Clock } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-32"
    >
      {/* ── Background Image & Dark Overlays ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614026480209-cd9934144671?w=1920&q=90&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: "scale(1.08)",
        }}
      />

      {/* Multi-layer atmospheric dark overlay for maximum readability & balance */}
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/70" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]/90" />

      {/* ── Balanced Main Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#c9a96e]">
                Meguiar&apos;s Ankara · Beytepe
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-white leading-[1.08] tracking-tight mb-6 text-4xl sm:text-5xl lg:text-6xl">
              Aracınız İçin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                Profesyonel
              </span>{" "}
              <span style={{ color: "#c9a96e" }}>Bakım.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
              Beytepe&apos;de profesyonel oto yıkama ve araç bakım hizmetleri. 
              Aracınızın temizliğini, parlaklığını ve değerini uzman dokunuşlarla yenileyin.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={getWhatsAppUrl("appointment")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase text-black transition-all duration-200 hover:opacity-90 shadow-lg shadow-[#c9a96e]/10"
                style={{ background: "#c9a96e" }}
              >
                <MessageCircle size={16} />
                Randevu Al
              </a>
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.12em] uppercase text-white/80 border border-white/20 hover:border-white/50 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                WhatsApp&apos;tan Ulaş
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] w-full max-w-lg">
              <div>
                <div className="text-white font-heading font-semibold text-sm sm:text-base">Özenli Detay</div>
                <div className="text-white/40 text-xs mt-0.5">Titiz uygulama</div>
              </div>
              <div>
                <div className="text-white font-heading font-semibold text-sm sm:text-base">Premium Ürün</div>
                <div className="text-white/40 text-xs mt-0.5">Kaliteli malzeme</div>
              </div>
              <div>
                <div className="text-white font-heading font-semibold text-sm sm:text-base">Merkezi Konum</div>
                <div className="text-white/40 text-xs mt-0.5">Beytepe / Çankaya</div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card & Quick Access (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-[#111318]/90 border border-white/[0.1] backdrop-blur-md p-6 sm:p-8 shadow-2xl">
              
              {/* Subtle top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#c9a96e" }} />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] font-semibold block">
                    Stüdyo Bilgisi
                  </span>
                  <h3 className="font-heading font-bold text-white text-lg mt-0.5">
                    Meguiar&apos;s Ankara
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Hizmet Veriyor
                </div>
              </div>

              {/* Info Rows */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 text-xs block">Konum</span>
                    <span className="text-white text-xs sm:text-sm leading-snug">
                      {BUSINESS.address.full}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={17} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 text-xs block">Doğrudan Hat</span>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-white text-sm sm:text-base font-semibold hover:text-[#c9a96e] transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles size={17} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 text-xs block">Hizmet Alanı</span>
                    <span className="text-white text-xs sm:text-sm">
                      Detaylı İç & Dış Temizlik, Pasta Cila, Boya Koruma
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={BUSINESS.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-white/80 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all text-center"
                >
                  <ExternalLink size={13} />
                  Yol Tarifi
                </a>
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-bold text-black uppercase tracking-wider transition-opacity hover:opacity-90 text-center"
                  style={{ background: "#c9a96e" }}
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
