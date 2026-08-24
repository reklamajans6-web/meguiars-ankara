"use client";

import { Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "Galeri", href: "#galeri" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07080a] border-t border-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-850">
          
          {/* Col 1: Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#e4002b] text-white flex items-center justify-center font-extrabold text-base tracking-tighter">
                M
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#e4002b] block leading-none">
                  Beytepe · Çankaya
                </span>
                <span className="text-lg font-black tracking-tight text-white font-heading">
                  MEGUIAR&apos;S ANKARA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Beytepe Çankaya&apos;da profesyonel oto yıkama, araç detailing, boya koruma, pasta & cila ve detaylı iç temizlik hizmetleri.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1.5 border border-neutral-800">
                {BUSINESS.hours}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Hızlı Menü
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleClick(link.href)}
                    className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Actions & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              İletişim & Konum
            </h4>

            <div className="space-y-2 text-xs text-neutral-400">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 font-bold text-white hover:text-[#e4002b] transition-colors"
              >
                <Phone size={14} className="text-[#e4002b]" />
                <span className="tabular-nums">{BUSINESS.phone}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin size={14} className="text-[#e4002b] mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">{BUSINESS.address.full}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-2.5">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>

              <a
                href={BUSINESS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-750 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <ExternalLink size={13} className="text-[#e4002b]" />
                Google Maps
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Meguiar’s Ankara. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Beytepe Mahallesi, Enver Türkileri Sok No:8/F, Çankaya / Ankara</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
