"use client";

import { STANDARDS } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="standartlar" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-12 pb-6 border-b border-neutral-200">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e4002b] mb-2">
            Kalite Protokolü
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Neden Meguiar&apos;s Ankara?
          </h2>
        </div>

        {/* ── 4 Standards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STANDARDS.map((std, i) => (
            <div key={i} className="flex gap-5 items-start p-6 bg-[#f8f9fa] border border-neutral-200">
              <span className="text-xl font-heading font-black text-[#e4002b] tabular-nums flex-shrink-0">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-heading font-bold text-neutral-950 text-base sm:text-lg mb-2">
                  {std.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {std.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
