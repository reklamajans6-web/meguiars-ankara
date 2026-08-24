"use client";

import Image from "next/image";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#090a0c] overflow-hidden"
    >
      {/* ── Full-Width Premium Automotive Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=2000&q=90&auto=format&fit=crop"
          alt="Meguiar's Ankara profesyonel araç detailing ve oto yıkama"
          fill
          priority
          className="object-cover object-center scale-105 transform brightness-[0.45] contrast-[1.15]"
          unoptimized
        />
        {/* Dark Luxury Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/60 to-[#090a0c]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,transparent_20%,#090a0c_90%)]" />
      </div>

      {/* ── Hero Foreground Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto lg:mx-0 flex flex-col items-start text-left">
          
          {/* Eyebrow Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-neutral-900/90 border border-neutral-700/80 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 bg-[#e4002b] rounded-full animate-pulse" />
            <span>BEYTEPE · ÇANKAYA / ANKARA</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-white text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
            Aracınız İçin <br />
            <span className="text-[#e4002b]">Profesyonel Bakım.</span>
          </h1>

          {/* Clean Subtext */}
          <p className="text-neutral-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-sm">
            Ankara’da profesyonel oto yıkama ve araç bakım hizmetleri.
          </p>

          {/* Primary CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-all shadow-lg hover:shadow-red-900/40 cursor-pointer active:scale-[0.99]"
            >
              <MessageCircle size={18} />
              WhatsApp’tan Ulaş
            </a>

            {/* Directions CTA */}
            <a
              href={BUSINESS.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 text-xs sm:text-sm font-bold tracking-[0.12em] uppercase transition-colors backdrop-blur-md"
            >
              <MapPin size={17} className="text-[#e4002b]" />
              Yol Tarifi Al
            </a>
          </div>

          {/* Direct Phone Bar */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-neutral-800/80 w-full text-neutral-300">
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-[#e4002b]" />
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Doğrudan İletişim:
              </span>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-sm sm:text-base font-bold text-white hover:text-[#e4002b] transition-colors tabular-nums"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <div className="hidden sm:inline-block text-neutral-700">|</div>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Meguiar&apos;s Orijinal Ürün & Çiziksiz Yıkama</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
