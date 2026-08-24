"use client";

import { WHY_US } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="neden-biz" className="section-py bg-[#0d0f14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Sol — başlık + görsel */}
          <div className="lg:sticky lg:top-28">
            <span className="accent-line" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Aracınızı Güvenle<br />Teslim Edin
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed font-light mb-10 max-w-sm">
              Profesyonel uygulama, doğru ürünler ve aracınızın her detayına
              verilen özen.
            </p>

            {/* Görsel */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=85&auto=format&fit=crop"
                alt="Profesyonel araç bakımı"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-70" />
            </div>
          </div>

          {/* Sağ — avantaj listesi */}
          <div className="flex flex-col">
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className="group flex gap-6 py-8 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.015] px-4 -mx-4 transition-colors duration-300"
              >
                {/* Sol: numara */}
                <div className="flex-shrink-0 pt-0.5">
                  <span className="text-[11px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                {/* Sağ: metin */}
                <div>
                  <h3 className="font-heading font-semibold text-white text-[17px] mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">
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
