"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Paket Hesapla", href: "#hesapla" },
  { label: "Standartlar", href: "#standartlar" },
  { label: "Galeri", href: "#galeri" },
  { label: "Öncesi / Sonrası", href: "#oncesi-sonrasi" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200 py-3.5"
          : "bg-white border-b border-neutral-200 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ── Brand ── */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-8 h-8 bg-[#e4002b] text-white flex items-center justify-center font-bold text-sm tracking-tighter">
              M
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e4002b] leading-none">
                Beytepe · Çankaya
              </div>
              <div className="text-base sm:text-lg font-extrabold tracking-tight text-neutral-950 font-heading leading-tight group-hover:text-[#e4002b] transition-colors">
                MEGUIAR&apos;S ANKARA
              </div>
            </div>
          </a>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-semibold tracking-wider uppercase text-neutral-600 hover:text-neutral-950 transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop Direct Actions ── */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-[#e4002b] transition-colors px-3 py-2 border border-neutral-200 hover:border-neutral-300"
            >
              <Phone size={13} className="text-[#e4002b]" />
              <span className="tabular-nums">{BUSINESS.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-colors shadow-xs"
            >
              <MessageCircle size={14} />
              Randevu Al
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e4002b] text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wide"
            >
              Randevu
            </a>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-1.5 text-neutral-800 hover:text-neutral-950 border border-neutral-200"
              aria-label="Menüyü Aç"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 mt-3 shadow-lg">
          <div className="flex flex-col divide-y divide-neutral-100 mb-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-semibold uppercase tracking-wider text-neutral-800 hover:text-[#e4002b] py-3 flex items-center justify-between"
              >
                {link.label}
                <ArrowUpRight size={14} className="text-neutral-400" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-neutral-900 border border-neutral-300 bg-neutral-50"
            >
              <Phone size={15} className="text-[#e4002b]" />
              {BUSINESS.phone} (Hemen Ara)
            </a>
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-[#e4002b] uppercase tracking-wider"
            >
              <MessageCircle size={15} />
              WhatsApp ile Randevu Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
