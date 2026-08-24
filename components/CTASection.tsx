"use client";

import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Üst ince çizgi */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.06]" />

      {/* Arka plan görsel — çok hafif */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 py-28 sm:py-36 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-6 h-[1px]" style={{ background: "#c9a96e" }} />
          <span
            className="text-[10px] tracking-[0.35em] uppercase font-semibold"
            style={{ color: "#c9a96e" }}
          >
            İletişim
          </span>
          <span className="w-6 h-[1px]" style={{ background: "#c9a96e" }} />
        </div>

        <h2 className="font-heading font-bold text-white leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
          Aracınız İçin Randevu Oluşturun
        </h2>
        <p className="text-white/40 text-[15px] mb-12 font-light leading-relaxed max-w-md mx-auto">
          Uygun gün ve saat için bizimle iletişime geçin.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {/* Primary */}
          <a
            href={getWhatsAppUrl("appointment")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 text-[12px] font-bold tracking-[0.15em] uppercase text-black hover:opacity-85 transition-opacity"
            style={{ background: "#c9a96e" }}
          >
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp&apos;tan Randevu Al
          </a>

          {/* Secondary */}
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center justify-center px-10 py-4 text-[12px] font-semibold tracking-[0.12em] uppercase text-white/60 border border-white/15 hover:border-white/35 hover:text-white/90 hover:bg-white/[0.03] transition-all duration-200"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
