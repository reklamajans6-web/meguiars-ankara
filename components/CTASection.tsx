"use client";

import { MessageCircle, Phone, MapPin } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="bg-[#090a0c] text-white py-20 sm:py-28 relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16181f_1px,transparent_1px),linear-gradient(to_bottom,#16181f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 text-[#e4002b] text-[11px] font-bold tracking-[0.25em] uppercase mb-6 shadow-md">
          <span className="w-2 h-2 bg-[#e4002b] rounded-full" />
          Hızlı Randevu & Danışma
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-5">
          Aracınıza Hak Ettiği Bakımı Verin.
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Beytepe stüdyomuzda aracınıza en uygun bakım ve detailing paketini belirlemek için bize WhatsApp veya telefon üzerinden anında ulaşın.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("appointment")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-all shadow-xl hover:shadow-red-900/30 active:scale-98"
          >
            <MessageCircle size={18} />
            WhatsApp&apos;tan Bilgi Al
          </a>

          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#111216] hover:bg-neutral-800 text-white border border-neutral-700 text-xs sm:text-sm font-bold tracking-[0.12em] uppercase transition-colors"
          >
            <Phone size={16} className="text-[#e4002b]" />
            <span className="tabular-nums">{BUSINESS.phone}</span>
          </a>

          <a
            href={BUSINESS.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors"
          >
            <MapPin size={16} className="text-[#e4002b]" />
            Yol Tarifi Al
          </a>
        </div>

      </div>
    </section>
  );
}
