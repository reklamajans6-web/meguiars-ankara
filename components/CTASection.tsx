"use client";

import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="bg-neutral-950 text-white py-20 sm:py-28 relative overflow-hidden">
      
      {/* ── Background Subtle Lines ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#e4002b] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
          <span className="w-2 h-2 bg-[#e4002b]" />
          Randevu & Danışma
        </div>

        {/* Title */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
          Aracınız İçin Bugün Randevu Oluşturun
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed mb-10">
          Beytepe stüdyomuzda aracınıza en uygun bakım paketini belirlemek ve gün/saat planlamak için bize WhatsApp veya telefon üzerinden anında ulaşın.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={getWhatsAppUrl("appointment")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold tracking-[0.15em] uppercase transition-all shadow-lg"
          >
            <MessageCircle size={17} />
            WhatsApp ile Randevu Al
          </a>

          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold tracking-[0.12em] uppercase transition-colors"
          >
            <Phone size={15} className="text-[#e4002b]" />
            <span className="tabular-nums">{BUSINESS.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
