"use client";

import { MessageCircle, Phone, MapPin, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#f8f9fa] border-b border-neutral-200 overflow-hidden"
    >
      {/* ── Background Subtle Architectural Grid Lines ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── Left Column: Editorial & Conversion (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 text-[#e4002b] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 shadow-2xs">
              <span className="w-2 h-2 bg-[#e4002b]" />
              BEYTEPE · ÇANKAYA / PREMİUM OTO YIKAMA
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-neutral-950 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Aracınız İçin <br />
              <span className="text-[#e4002b]">Kusursuz Temizlik</span> & Detailing.
            </h1>

            {/* Clean Explanatory Copy */}
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl">
              Beytepe&apos;de pH dengeli Meguiar&apos;s bakım ürünleri, çiziksiz mikrofiber yıkama protokolü ve profesyonel yüzey düzeltme uygulamaları. Aracınızın ilk günkü parlaklığını koruyun.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href={getWhatsAppUrl("appointment")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold tracking-[0.15em] uppercase transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={17} />
                Randevu Al (WhatsApp)
              </a>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-bold tracking-[0.12em] uppercase transition-colors"
              >
                <Phone size={15} className="text-[#e4002b]" />
                <span className="tabular-nums">{BUSINESS.phone}</span>
              </a>

              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-4 bg-white hover:bg-neutral-100 text-neutral-600 hover:text-neutral-950 border border-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <ExternalLink size={14} />
                Harita
              </a>
            </div>

            {/* Key Specifications Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#e4002b] flex-shrink-0" />
                <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  pH Nötr Kimyasallar
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#e4002b] flex-shrink-0" />
                <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Çiziksiz Yıkama
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#e4002b] flex-shrink-0" />
                <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Boya ve Vernik Güvenliği
                </span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Studio Card & Real Google Maps Image (5 cols) ── */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-neutral-200 shadow-xl overflow-hidden">
              
              {/* Card Top Label Bar */}
              <div className="px-5 py-3.5 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase">
                    Stüdyo Canlı Bilgisi
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">
                  Beytepe / Ankara
                </span>
              </div>

              {/* Real Google Maps Studio Photo */}
              <div className="relative aspect-[16/11] bg-neutral-100 overflow-hidden border-b border-neutral-200 group">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmARKUx8JAX2BDI1381iZmI2ZnYlJT-9jFqYYrxuQO26kuPqJCm0rPRhGxWuPZ9afylvgbjkJQYjCwJd0_v7Y6M5S8o5FhbC3OUJGNbaUqfqQcp4hWsgZPef1G8VLrzzSDPL2IL4bfmWUw=w1200-h800-k-no"
                  alt="Meguiar's Ankara Beytepe oto yıkama stüdyosu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-3 bg-neutral-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
                  Google Haritalar Gerçek Stüdyo Fotoğrafı
                </div>
              </div>

              {/* Studio Info Table */}
              <div className="p-5 sm:p-6 space-y-4">
                
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="text-[#e4002b] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Adres
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                      {BUSINESS.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                  <Phone size={17} className="text-[#e4002b] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Telefon & WhatsApp
                    </span>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-sm font-bold text-neutral-900 hover:text-[#e4002b] transition-colors tabular-nums"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-3">
                  <a
                    href={BUSINESS.maps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Google Haritalar&apos;da Yol Tarifi Al
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
