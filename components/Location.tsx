"use client";

import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function Location() {
  return (
    <section id="iletisim" className="section-py bg-[#0d0e12] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
              Lokasyon & Randevu
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Beytepe Stüdyomuzu Ziyaret Edin
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Çankaya / Beytepe bölgesinde kolay ulaşılabilir konumda bulunan stüdyomuza aracınızı güvenle teslim edebilirsiniz.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-[#111216] border border-neutral-800 relative min-h-[380px] lg:min-h-[440px] shadow-xl overflow-hidden">
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
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-wider uppercase bg-black/90 hover:bg-[#e4002b] text-white border border-neutral-700 shadow-2xl transition-colors backdrop-blur-xs"
              >
                <ExternalLink size={13} className="text-[#e4002b]" />
                Google Haritalar&apos;da Aç
              </a>
            </div>
          </div>

          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#111216] border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            
            <div className="space-y-6">
              
              {/* Adres */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin size={15} className="text-[#e4002b]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Açık Adres
                  </span>
                </div>
                <p className="text-base sm:text-lg font-bold text-white font-heading">
                  {BUSINESS.name}
                </p>
                <p className="text-sm font-semibold text-neutral-300 mt-1">
                  {BUSINESS.address.street}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {BUSINESS.address.postalCode} {BUSINESS.address.district} / {BUSINESS.address.city}
                </p>
              </div>

              {/* Telefon */}
              <div className="pt-5 border-t border-neutral-800">
                <div className="flex items-center gap-2 mb-1.5">
                  <Phone size={15} className="text-[#e4002b]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Telefonla İletişim
                  </span>
                </div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-2xl sm:text-3xl font-black font-heading text-white hover:text-[#e4002b] transition-colors tabular-nums block"
                >
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Saatler */}
              <div className="pt-5 border-t border-neutral-800">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock size={15} className="text-[#e4002b]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Çalışma Saatleri
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-neutral-200">
                  {BUSINESS.hours}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {BUSINESS.hoursSunday}
                </p>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("appointment")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md text-center"
              >
                <MessageCircle size={15} />
                WhatsApp&apos;tan Bilgi Al
              </a>

              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
              >
                <ExternalLink size={14} className="text-[#e4002b]" />
                Yol Tarifi Al
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
