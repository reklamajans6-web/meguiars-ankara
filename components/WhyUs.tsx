"use client";

import { Eye, Gem, MessageCircle, Navigation } from "lucide-react";
import { WHY_US } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  eye: <Eye size={24} strokeWidth={1.5} />,
  gem: <Gem size={24} strokeWidth={1.5} />,
  "message-circle": <MessageCircle size={24} strokeWidth={1.5} />,
  navigation: <Navigation size={24} strokeWidth={1.5} />,
};

export default function WhyUs() {
  return (
    <section id="neden-biz" className="section-py bg-[#111318] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=60&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-transparent to-[#111318] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div>
            <span className="accent-line" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Aracınızı{" "}
              <br />
              <span style={{ color: "#c9a96e" }}>Güvenle</span> Teslim Edin
            </h2>
            <p className="text-white/50 text-base leading-relaxed font-light max-w-md">
              Profesyonel ekipman, özenli uygulama ve doğru ürünlerle
              aracınızın her detayına gereken itinayı gösteriyoruz.
            </p>

            {/* Image accent */}
            <div className="mt-10 hidden lg:block">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=700&q=85&auto=format&fit=crop"
                  alt="Profesyonel araç bakımı"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: advantage list */}
          <div className="flex flex-col gap-0">
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 py-7 border-b border-white/5 last:border-0 group hover:bg-white/[0.02] px-4 -mx-4 transition-colors duration-300"
              >
                {/* Number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono text-white/20">
                    0{i + 1}
                  </span>
                  <div
                    className="text-white/30 group-hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {ICONS[item.icon]}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-1.5 group-hover:text-[#c9a96e] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
