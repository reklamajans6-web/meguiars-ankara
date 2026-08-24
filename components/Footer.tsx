"use client";

import { Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Paket Hesapla", href: "#hesapla" },
  { label: "Standartlar", href: "#standartlar" },
  { label: "Galeri", href: "#galeri" },
  { label: "Öncesi / Sonrası", href: "#oncesi-sonrasi" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e4002b] text-white flex items-center justify-center font-bold text-sm">
                M
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e4002b] block leading-none">
                  Beytepe · Çankaya
                </span>
                <span className="text-lg font-extrabold tracking-tight text-neutral-950 font-heading">
                  MEGUIAR&apos;S ANKARA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed">
              Beytepe Çankaya&apos;da profesyonel oto yıkama, pasta & cila, boya koruma ve detaylı araç içi hijyen uygulamaları.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-neutral-500 bg-neutral-100 px-3 py-1 border border-neutral-200">
                {BUSINESS.hours}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 mb-4 font-heading">
              Sayfalar
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleClick(link.href)}
                    className="text-xs text-neutral-600 hover:text-[#e4002b] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Direct Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 mb-4 font-heading">
              İletişim
            </h4>

            <div className="space-y-2 text-xs text-neutral-600">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 font-bold text-neutral-900 hover:text-[#e4002b] transition-colors"
              >
                <Phone size={13} className="text-[#e4002b]" />
                <span className="tabular-nums">{BUSINESS.phone}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin size={13} className="text-[#e4002b] mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.address.full}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#e4002b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c70025] transition-colors"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Meguiar&apos;s Ankara. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Beytepe Mahallesi, Çankaya / Ankara</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
