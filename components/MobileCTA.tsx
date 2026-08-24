"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/data";

export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-neutral-300 shadow-2xl bg-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* ── Call Button ── */}
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 py-3.5 text-white text-xs font-bold uppercase tracking-wider active:bg-neutral-800 transition-colors"
      >
        <Phone size={15} className="text-[#e4002b]" />
        Hemen Ara
      </a>

      {/* ── WhatsApp Button ── */}
      <a
        href={getWhatsAppUrl("appointment")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#e4002b] py-3.5 text-white text-xs font-bold uppercase tracking-wider active:bg-[#c70025] transition-colors"
      >
        <MessageCircle size={15} />
        WhatsApp
      </a>
    </div>
  );
}
