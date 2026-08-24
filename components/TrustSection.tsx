"use client";

import { ShieldCheck, Star, MapPin } from "lucide-react";
import { TRUST_POINTS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck size={22} strokeWidth={1.5} />,
  star: <Star size={22} strokeWidth={1.5} />,
  "map-pin": <MapPin size={22} strokeWidth={1.5} />,
};

export default function TrustSection() {
  return (
    <section className="bg-[#111318] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {TRUST_POINTS.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-6 py-8 sm:py-10"
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-none"
                style={{ color: "#c9a96e" }}
              >
                {ICONS[point.icon]}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-base mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
