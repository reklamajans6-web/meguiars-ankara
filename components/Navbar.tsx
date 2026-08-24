"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between gap-12">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex-shrink-0 flex flex-col leading-none text-left"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase font-medium"
              style={{ color: "#c9a96e" }}>
              Premium Araç Bakım
            </span>
            <span className="text-[15px] font-bold tracking-[0.06em] text-white font-heading mt-0.5">
              MEGUIAR&apos;S ANKARA
            </span>
          </button>

          {/* ── Desktop Nav — centered ── */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] font-medium tracking-wide text-white/55 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── Desktop Right ── */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-[13px] font-medium text-white/50 hover:text-white/90 transition-colors tracking-wide"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold tracking-[0.12em] uppercase px-6 py-2.5 text-black transition-all duration-200 hover:opacity-90"
              style={{ background: "#c9a96e" }}
            >
              Randevu Al
            </a>
          </div>

          {/* ── Mobile right ── */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2 text-black"
              style={{ background: "#c9a96e" }}
            >
              Randevu
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="text-white/70 hover:text-white p-1 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0f14] border-t border-white/[0.06] px-6 pt-2 pb-6">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[15px] text-white/70 hover:text-white py-4 border-b border-white/[0.05] font-medium last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-white/[0.05] text-white py-3.5 text-sm font-medium tracking-wide border border-white/10"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3.5 text-sm font-bold tracking-[0.1em] uppercase text-black"
              style={{ background: "#c9a96e" }}
            >
              WhatsApp&apos;tan Randevu Al
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
