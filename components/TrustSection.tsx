"use client";

import { TRUST_MATRIX } from "@/lib/data";

export default function TrustSection() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {TRUST_MATRIX.map((item) => (
            <div key={item.code} className="py-8 sm:py-10 px-6 lg:px-8 flex items-start gap-5">
              <span className="font-heading font-black text-2xl text-[#e4002b] tabular-nums">
                {item.code}
              </span>
              <div>
                <h3 className="font-heading font-bold text-neutral-900 text-base sm:text-lg mb-1.5">
                  {item.label}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
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
