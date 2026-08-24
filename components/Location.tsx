"use client";

import { MapPin, Phone, ExternalLink } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Location() {
  return (
    <section id="iletisim" className="section-py bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="accent-line" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Beytepe&apos;de Bizi{" "}
            <span style={{ color: "#c9a96e" }}>Ziyaret Edin</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map */}
          <div className="lg:col-span-3 relative overflow-hidden" style={{ minHeight: "380px" }}>
            <iframe
              src={BUSINESS.maps.embed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meguiar's Ankara Konum"
              className="grayscale contrast-[1.1] invert opacity-85"
            />
            {/* Overlay for premium look */}
            <div className="absolute inset-0 pointer-events-none border border-white/10" />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} style={{ color: "#c9a96e" }} />
                <span
                  className="text-xs tracking-[0.2em] uppercase font-medium"
                  style={{ color: "#c9a96e" }}
                >
                  Adres
                </span>
              </div>
              <p className="text-white font-medium leading-relaxed font-heading">
                {BUSINESS.address.street}
              </p>
              <p className="text-white/50 text-sm mt-1">
                {BUSINESS.address.postalCode}{" "}
                {BUSINESS.address.district} / {BUSINESS.address.city}
              </p>

              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs font-bold tracking-widest uppercase border border-white/15 hover:border-[#c9a96e]/50 text-white/70 hover:text-white px-4 py-2.5 transition-all duration-200"
              >
                <ExternalLink size={12} />
                Yol Tarifi Al
              </a>
            </div>

            {/* Phone */}
            <div className="border-t border-white/5 pt-8">
              <div className="flex items-center gap-2 mb-3">
                <Phone size={16} style={{ color: "#c9a96e" }} />
                <span
                  className="text-xs tracking-[0.2em] uppercase font-medium"
                  style={{ color: "#c9a96e" }}
                >
                  Telefon
                </span>
              </div>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-white font-heading font-semibold text-xl hover:text-[#c9a96e] transition-colors"
              >
                {BUSINESS.phone}
              </a>
              <p className="text-white/30 text-xs mt-1">
                Arama veya WhatsApp
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="border-t border-white/5 pt-8">
              <p className="text-white/50 text-sm mb-4 font-light leading-relaxed">
                En hızlı iletişim için WhatsApp&apos;tan yazın, randevu
                oluşturun.
              </p>
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-bold tracking-wide uppercase text-black transition-opacity hover:opacity-90"
                style={{ background: "#c9a96e" }}
              >
                {/* WhatsApp SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
