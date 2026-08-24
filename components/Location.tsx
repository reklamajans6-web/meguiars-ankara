"use client";

import { MapPin, Phone, ExternalLink, MessageCircle, Clock } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Location() {
  return (
    <section id="iletisim" className="section-py bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ── Balanced Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#c9a96e]" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#c9a96e]">
                Konum & İletişim
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Beytepe&apos;de Bizi{" "}
              <span style={{ color: "#c9a96e" }}>Ziyaret Edin</span>
            </h2>
          </div>

          <div className="max-w-md text-white/50 text-sm sm:text-base font-light">
            Çankaya / Beytepe stüdyomuzda aracınıza özel bakım ve randevu için bize dilediğiniz zaman ulaşabilirsiniz.
          </div>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Map (7 cols) */}
          <div className="lg:col-span-7 relative bg-[#111318] border border-white/[0.08] overflow-hidden min-h-[380px] lg:min-h-[440px]">
            <iframe
              src={BUSINESS.maps.embed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meguiar's Ankara Konum"
              className="grayscale contrast-[1.1] invert opacity-80 hover:opacity-95 transition-opacity"
            />
            {/* Direct Directions Badge */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold tracking-wider uppercase bg-[#0a0a0a]/90 text-white hover:text-[#c9a96e] border border-white/20 backdrop-blur-sm transition-all"
              >
                <ExternalLink size={12} />
                Haritada Aç
              </a>
            </div>
          </div>

          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#111318] border border-white/[0.08] p-8">
            
            <div className="space-y-6">
              {/* Adres */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} style={{ color: "#c9a96e" }} />
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#c9a96e]">
                    Açık Adres
                  </span>
                </div>
                <p className="text-white font-medium text-base font-heading">
                  {BUSINESS.address.street}
                </p>
                <p className="text-white/50 text-sm mt-0.5">
                  {BUSINESS.address.postalCode} {BUSINESS.address.district} / {BUSINESS.address.city}
                </p>
              </div>

              {/* Telefon */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={15} style={{ color: "#c9a96e" }} />
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#c9a96e]">
                    İletişim & Randevu
                  </span>
                </div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-white font-heading font-bold text-2xl hover:text-[#c9a96e] transition-colors block"
                >
                  {BUSINESS.phone}
                </a>
                <span className="text-white/40 text-xs mt-1 block">
                  Telefonla arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-white/[0.06] flex flex-col gap-3">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 text-xs font-bold tracking-[0.15em] uppercase text-black transition-opacity hover:opacity-90 shadow-lg shadow-[#c9a96e]/10"
                style={{ background: "#c9a96e" }}
              >
                <MessageCircle size={15} />
                WhatsApp ile İletişime Geç
              </a>

              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-white/80 border border-white/15 hover:border-white/40 hover:bg-white/[0.04] transition-all"
              >
                <ExternalLink size={13} />
                Google Haritalar Yol Tarifi
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
