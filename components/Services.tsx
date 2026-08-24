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
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <span className="accent-line" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Aracınıza Özel Bakım Hizmetleri
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed font-light">
            Günlük temizliğin ötesinde, aracınızın iç ve dış görünümünü
            korumaya yönelik profesyonel bakım uygulamaları.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="group bg-[#0a0a0a] p-8 lg:p-10 flex flex-col gap-6 hover:bg-[#0f1115] transition-colors duration-300 relative"
            >
              {/* Index */}
              <span className="absolute top-8 right-8 text-[11px] font-mono text-white/10 group-hover:text-white/20 transition-colors">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 flex items-center justify-center border border-white/[0.08] group-hover:border-white/20 transition-colors text-white/40 group-hover:text-white/70">
                {ICON_MAP[service.icon]}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-white text-[17px] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppUrl(service.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-white/25 group-hover:text-white/60 transition-colors duration-300"
              >
                Bilgi Al
                <ArrowRight
                  size={11}
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
