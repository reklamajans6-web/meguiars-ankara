"use client";

import { Check, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { SERVICES, getWhatsAppUrl } from "@/lib/data";

export default function Services() {
  return (
    <section id="hizmetler" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e4002b] mb-2">
              Hizmet Kataloğu & Teknik Detaylar
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
              Aracınıza Özel Bakım Uygulamaları
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Her işlemde aracın boya kalınlığı, malzeme yapısı ve vernik toleransı dikkate alınarak en uygun Meguiar&apos;s ürünleri uygulanır.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="bg-white p-7 sm:p-8 flex flex-col justify-between hover:bg-neutral-50 transition-colors group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    {svc.code}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-neutral-100 text-neutral-700">
                    {svc.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-neutral-950 mb-3 group-hover:text-[#e4002b] transition-colors">
                  {svc.title}
                </h3>

                {/* Summary */}
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {svc.summary}
                </p>

                {/* Details List */}
                <div className="space-y-2 mb-8 pt-4 border-t border-neutral-100">
                  {svc.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check size={13} className="text-[#e4002b] mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Meta & CTA */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                  <Clock size={13} className="text-neutral-400" />
                  <span>{svc.duration}</span>
                </div>

                <a
                  href={getWhatsAppUrl(svc.waKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e4002b] hover:text-[#c70025] transition-colors"
                >
                  Randevu Al
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
