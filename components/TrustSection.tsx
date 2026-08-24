"use client";

import { WHY_US_PILLARS } from "@/lib/data";

export default function TrustSection() {
  return (
    <section className="bg-[#0d0e12] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-850">
          {WHY_US_PILLARS.map((item) => (
            <div key={item.number} className="py-8 sm:py-10 px-6 lg:px-8 flex items-start gap-5">
              <span className="font-heading font-black text-2xl text-[#e4002b] tabular-nums">
                {item.number}
              </span>
              <div>
                <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1.5">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
