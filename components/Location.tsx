"use client";

import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Location() {
  return (
    <section id="iletisim" className="section-py bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e4002b] mb-2">
              Ulaşım & Adres
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
              Beytepe Stüdyomuzu Ziyaret Edin
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Çankaya / Beytepe bölgesinde kolay ulaşılabilir konumda bulunan stüdyomuza aracınızı güvenle teslim edebilirsiniz.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-100 border border-neutral-300 relative min-h-[380px] lg:min-h-[440px] shadow-xs">
            <iframe
              src={BUSINESS.maps.embed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meguiar's Ankara Konum"
              className="w-full h-full"
            />
            {/* Direct Directions Badge */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-wider uppercase bg-white text-neutral-900 hover:text-[#e4002b] border border-neutral-300 shadow-md transition-colors"
              >
                <ExternalLink size={13} className="text-[#e4002b]" />
                Google Haritalar&apos;da Aç
              </a>
            </div>
          </div>

          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#f8f9fa] border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Adres */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin size={15} className="text-[#e4002b]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Açık Adres
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-neutral-950 font-heading">
                  {BUSINESS.address.street}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  {BUSINESS.address.postalCode} {BUSINESS.address.district} / {BUSINESS.address.city}
                </p>
              </div>

              {/* Telefon */}
              <div className="pt-5 border-t border-neutral-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <Phone size={15} className="text-[#e4002b]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Telefonla İletişim
                  </span>
                </div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-xl sm:text-2xl font-black font-heading text-neutral-950 hover:text-[#e4002b] transition-colors tabular-nums block"
                >
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Saatler */}
              <div className="pt-5 border-t border-neutral-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock size={15} className="text-[#e4002b]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Çalışma Saatleri
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-neutral-800">
                  {BUSINESS.hours}
                </p>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 mt-6 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("appointment")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs text-center"
              >
                <MessageCircle size={15} />
                WhatsApp&apos;tan Yaz
              </a>

              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
              >
                <ExternalLink size={14} className="text-[#e4002b]" />
                Yol Tarifi
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
