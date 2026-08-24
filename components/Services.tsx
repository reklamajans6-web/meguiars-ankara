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
  droplets: <Droplets size={20} strokeWidth={1.5} />,
  armchair: <Armchair size={20} strokeWidth={1.5} />,
  sparkles: <Sparkles size={20} strokeWidth={1.5} />,
  zap: <Zap size={20} strokeWidth={1.5} />,
  shield: <Shield size={20} strokeWidth={1.5} />,
  circle: <Circle size={20} strokeWidth={1.5} />,
};

export default function Services() {
  return (
    <section id="hizmetler" className="section-py bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="accent-line" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Aracınıza Özel{" "}
            <span style={{ color: "#c9a96e" }}>Bakım Hizmetleri</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            Günlük temizliğin ötesinde, aracınızın iç ve dış görünümünü
            korumaya yönelik profesyonel bakım uygulamaları.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-card bg-[#0a0a0a] p-8 group flex flex-col gap-5 hover:bg-[#111318] transition-colors duration-300"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[#c9a96e]/50 transition-colors duration-300"
                style={{ color: "#c9a96e" }}
              >
                {ICON_MAP[service.icon]}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppUrl(service.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 group-hover:text-[#c9a96e] transition-colors duration-300"
              >
                Bilgi Al
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#iletisim")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors border-b border-white/10 hover:border-white/40 pb-0.5"
          >
            Tüm hizmetler ve detaylar için bize ulaşın
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
