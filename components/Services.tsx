"use client";

import Image from "next/image";
import { Check, ArrowRight, Clock } from "lucide-react";
import { SERVICES, getWhatsAppUrl } from "@/lib/data";

export default function Services() {
  return (
    <section id="hizmetler" className="section-py bg-[#0d0e12] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-neutral-800">
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
              Hizmet Kataloğu & Uygulama Standartları
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Profesyonel Araç Bakımı
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Aracınızın boya kondisyonuna, malzeme türüne ve vernik hassasiyetine özel Meguiar&apos;s profesyonel ürünleri ve uzman uygulama protokolleri.
          </p>
        </div>

        {/* ── 8 Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="bg-[#14151a] border border-neutral-800/90 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 group overflow-hidden shadow-lg"
            >
              <div>
                {/* Large High-Quality Image Box */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14151a] via-transparent to-transparent opacity-80" />
                  
                  {/* Service Code & Category Badge */}
                  <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black/80 backdrop-blur-xs text-neutral-300 border border-neutral-700/60">
                      {svc.code}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-[#e4002b] text-white">
                      {svc.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2.5 group-hover:text-[#e4002b] transition-colors">
                    {svc.title}
                  </h3>

                  {/* 1-2 Sentence Summary */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5 min-h-[40px]">
                    {svc.summary}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 pt-4 border-t border-neutral-800/80 mb-2">
                    {svc.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check size={13} className="text-[#e4002b] mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Meta & WhatsApp CTA */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
                    <Clock size={13} className="text-neutral-500" />
                    <span>{svc.duration}</span>
                  </div>

                  <a
                    href={getWhatsAppUrl(svc.waKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-900 hover:bg-[#e4002b] text-neutral-200 hover:text-white border border-neutral-700 hover:border-[#e4002b] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Bilgi Al</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
