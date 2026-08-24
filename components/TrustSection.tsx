"use client";

export default function TrustSection() {
  const items = [
    {
      label: "Profesyonel Bakım",
      desc: "Aracınıza özenli ve detaylı uygulama",
    },
    {
      label: "Premium Ürünler",
      desc: "Kaliteli bakım ürünleri ve profesyonel uygulama",
    },
    {
      label: "Beytepe'de",
      desc: "Çankaya / Beytepe'de kolay ulaşım",
    },
  ];

  return (
    <section className="bg-[#0d0f14] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-8 px-8 flex items-start gap-5 ${
                i < items.length - 1 ? "md:border-r border-white/[0.06]" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-white/[0.06]" : ""}`}
            >
              {/* Numara */}
              <span
                className="text-[11px] font-mono mt-0.5 flex-shrink-0"
                style={{ color: "#c9a96e", opacity: 0.7 }}
              >
                0{i + 1}
              </span>

              {/* Metin */}
              <div>
                <p className="font-heading font-semibold text-white text-[14px] tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-white/40 text-[13px] leading-snug">
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
