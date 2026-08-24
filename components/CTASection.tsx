"use client";

import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=70&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/92" />
      </div>

      {/* Accent border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#c9a96e" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <span
          className="inline-block w-8 h-[2px] mb-6"
          style={{ background: "#c9a96e" }}
        />
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Aracınız İçin{" "}
          <span style={{ color: "#c9a96e" }}>Randevu</span> Oluşturun
        </h2>
        <p className="text-white/55 text-base sm:text-lg mb-12 font-light leading-relaxed max-w-lg mx-auto">
          Uygun gün ve saat için bizimle iletişime geçin. WhatsApp&apos;tan
          hızlıca ulaşabilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppUrl("appointment")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase text-black transition-all duration-200 hover:opacity-90"
            style={{ background: "#c9a96e" }}
          >
            <MessageCircle size={17} />
            WhatsApp&apos;tan Randevu Al
          </a>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            <Phone size={16} />
            {BUSINESS.phone}
          </a>
        </div>

        {/* Address note */}
        <p className="text-white/25 text-xs mt-10 tracking-widest uppercase">
          {BUSINESS.address.street} · {BUSINESS.address.district} ·{" "}
          {BUSINESS.address.city}
        </p>
      </div>
    </section>
  );
}
