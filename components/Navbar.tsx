"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "Galeri", href: "#galeri" },
  { label: "Yorumlar", href: "#yorumlar" },
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
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0c]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5"
          : "bg-[#090a0c]/80 backdrop-blur-sm border-b border-neutral-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ── Brand / Logo ── */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-9 h-9 bg-[#e4002b] text-white flex items-center justify-center font-extrabold text-base tracking-tighter shadow-sm">
              M
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#e4002b] leading-none">
                Beytepe · Çankaya
              </div>
              <div className="text-base sm:text-lg font-black tracking-tight text-white leading-tight group-hover:text-[#e4002b] transition-colors">
                MEGUIAR&apos;S ANKARA
              </div>
            </div>
          </a>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-bold tracking-wider uppercase text-neutral-300 hover:text-white transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTA Buttons ── */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-white transition-colors px-3 py-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60"
            >
              <Phone size={13} className="text-[#e4002b]" />
              <span className="tabular-nums">{BUSINESS.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-all shadow-md hover:shadow-red-900/30"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* ── Mobile Hamburger & Quick Action ── */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e4002b] text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wide flex items-center gap-1.5"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 text-neutral-200 hover:text-white border border-neutral-800 bg-neutral-900"
              aria-label="Menüyü Aç"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Menu Overlay / Drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0e12] border-b border-neutral-800 px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col divide-y divide-neutral-850 mb-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-bold uppercase tracking-wider text-neutral-200 hover:text-[#e4002b] py-3.5 flex items-center justify-between"
              >
                {link.label}
                <ArrowUpRight size={14} className="text-neutral-500" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white border border-neutral-800 bg-neutral-900"
            >
              <Phone size={16} className="text-[#e4002b]" />
              <span className="tabular-nums">{BUSINESS.phone}</span> (Hemen Ara)
            </a>
            <a
              href={getWhatsAppUrl("appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white bg-[#e4002b] uppercase tracking-wider shadow-lg"
            >
              <MessageCircle size={16} />
              WhatsApp&apos;tan Bilgi Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
