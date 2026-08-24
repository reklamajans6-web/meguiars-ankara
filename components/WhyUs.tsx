"use client";

import { WHY_US_PILLARS } from "@/lib/data";
import { Shield, Sparkles, Award, Sliders } from "lucide-react";

const ICONS = [Shield, Award, Sparkles, Sliders];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="section-py bg-[#090a0c] border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background Subtle Line Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16181f_1px,transparent_1px),linear-gradient(to_bottom,#16181f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-14 pb-6 border-b border-neutral-800">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
            Güven & Kalite Protokolü
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Meguiar&apos;s Ankara stüdyosunda standartlaşmış otomotiv bakım prensipleri ve şeffaf hizmet anlayışı.
          </p>
        </div>

        {/* ── 4 Advantages Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={pillar.number}
                className="bg-[#111216] border border-neutral-800 p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 relative group"
              >
                {/* Number & Icon Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-black text-[#e4002b] tabular-nums tracking-tighter">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-700 transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#e4002b]/90 mb-4">
                    {pillar.subtitle}
                  </div>

                  {/* Clean Non-Exaggerated Copy */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Subtle Bottom Line */}
                <div className="w-8 h-0.5 bg-[#e4002b]/60 mt-6 group-hover:w-16 transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
