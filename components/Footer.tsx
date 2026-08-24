"use client";

import { Phone, MapPin } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111318] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-[10px] tracking-[0.25em] text-[#c9a96e] uppercase font-medium block">
                Premium Araç Bakım
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-heading block">
                MEGUIAR&apos;S ANKARA
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Beytepe / Çankaya&apos;da profesyonel oto yıkama ve araç bakım
              hizmetleri.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium mb-5">
              Sayfalar
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium mb-5">
              İletişim
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone size={14} style={{ color: "#c9a96e" }} />
                {BUSINESS.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#c9a96e" }}
                />
                <span className="leading-relaxed">
                  {BUSINESS.address.street},{" "}
                  {BUSINESS.address.district} / {BUSINESS.address.city}
                </span>
              </div>
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black px-4 py-2.5 w-fit transition-opacity hover:opacity-90"
                style={{ background: "#c9a96e" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/20">
            © 2026 Meguiar&apos;s Ankara. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/15">
            Beytepe · Çankaya · Ankara
          </p>
        </div>
      </div>
    </footer>
  );
}
