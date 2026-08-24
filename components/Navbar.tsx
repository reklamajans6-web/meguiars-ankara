"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#neden-biz" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex flex-col leading-none text-left"
            >
              <span className="text-[10px] tracking-[0.25em] text-[#c9a96e] uppercase font-medium">
                Premium Araç Bakım
              </span>
              <span className="text-lg font-bold tracking-tight text-white font-heading">
                MEGUIAR&apos;S ANKARA
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
              <a
                href={getWhatsAppUrl("appointment")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a96e] hover:bg-[#dbbe8a] text-black text-sm font-semibold px-5 py-2.5 rounded-none transition-colors duration-200 tracking-wide uppercase"
              >
                Randevu Al
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={getWhatsAppUrl("appointment")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a96e] text-black text-xs font-bold px-4 py-2 tracking-wide uppercase"
              >
                Randevu
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="text-white p-1"
                aria-label="Menüyü aç"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#111318] border-t border-white/5 mt-3">
            <div className="px-4 py-4 flex flex-col gap-0">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base text-white/80 hover:text-white py-3.5 border-b border-white/5 font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 justify-center bg-[#1a1e27] text-white py-3 text-sm font-medium"
                >
                  <Phone size={15} />
                  {BUSINESS.phone}
                </a>
                <a
                  href={getWhatsAppUrl("appointment")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c9a96e] text-black text-center py-3 text-sm font-bold tracking-wide uppercase"
                >
                  WhatsApp&apos;tan Randevu Al
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
