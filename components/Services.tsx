"use client";

import {
  Droplets,
  Armchair,
  Sparkles,
  Zap,
  Shield,
  Circle,
  ArrowRight,
} from "lucide-react";
import { SERVICES, getWhatsAppUrl } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  droplets: <Droplets size={18} strokeWidth={1.5} />,
  armchair: <Armchair size={18} strokeWidth={1.5} />,
  sparkles: <Sparkles size={18} strokeWidth={1.5} />,
  zap: <Zap size={18} strokeWidth={1.5} />,
  shield: <Shield size={18} strokeWidth={1.5} />,
  circle: <Circle size={18} strokeWidth={1.5} />,
};

export default function Services() {
  return (
    <section id="hizmetler" className="section-py bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Balanced Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#c9a96e]" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#c9a96e]">
                Hizmet Yelpazesi
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Aracınıza Özel <br className="hidden sm:inline" />
              <span style={{ color: "#c9a96e" }}>Bakım Hizmetleri</span>
            </h2>
          </div>

          <div className="max-w-md text-white/50 text-sm sm:text-base font-light leading-relaxed">
            Günlük temizliğin ötesinde, aracınızın iç ve dış görünümünü korumaya yönelik profesyonel stüdyo uygulamaları.
          </div>
        </div>

        {/* ── Service Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="group bg-[#0a0a0a] p-8 sm:p-10 flex flex-col gap-6 hover:bg-[#111318] transition-colors duration-300 relative"
            >
              {/* Index number */}
              <span className="absolute top-8 right-8 text-xs font-mono text-white/20 group-hover:text-[#c9a96e] transition-colors">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.1] group-hover:border-[#c9a96e]/40 transition-colors text-white/60 group-hover:text-[#c9a96e]">
                {ICON_MAP[service.icon]}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-white text-lg sm:text-xl mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppUrl(service.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-white/40 group-hover:text-[#c9a96e] transition-colors duration-300 pt-2"
              >
                Bilgi & Randevu
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
