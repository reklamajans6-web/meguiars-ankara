"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const BEFORE_IMG =
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=85&auto=format&fit=crop";
const AFTER_IMG =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85&auto=format&fit=crop";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const getPercent = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(5, Math.min(95, pct));
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPosition(getPercent(e.clientX));
  };
  const onMouseUp = () => {
    dragging.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setPosition(getPercent(e.touches[0].clientX));
  };

  return (
    <section id="oncesi-sonrasi" className="section-py bg-[#0d0e12] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
            Gözle Görülür Fark
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Uygulama Öncesi & Sonrası
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-normal">
            Boya yüzeyindeki matlaşma ve hare izlerinin Meguiar&apos;s polisaj adımlarıyla giderilmesi. Çubuğu sağa sola kaydırarak farkı inceleyin.
          </p>
        </div>

        {/* ── Interactive Slider Frame ── */}
        <div className="max-w-4xl mx-auto bg-[#14151a] border border-neutral-800 p-2 sm:p-3 shadow-2xl">
          <div
            ref={containerRef}
            className="relative overflow-hidden select-none cursor-col-resize aspect-[16/9] w-full border border-neutral-850"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchMove={onTouchMove}
          >
            {/* AFTER IMAGE (Bottom Layer) */}
            <div className="absolute inset-0">
              <Image
                src={AFTER_IMG}
                alt="Meguiar's boya düzeltme ve cila sonrası parlak boya"
                fill
                className="object-cover"
                unoptimized
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 z-10 bg-black/85 backdrop-blur-xs text-white text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 border border-neutral-700 shadow-md">
                SONRA · PARLAK & KORUMALI
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped Top Layer) */}
            <div
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={BEFORE_IMG}
                alt="Uygulama öncesi mat ve çizikli boya"
                fill
                className="object-cover brightness-90"
                unoptimized
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 z-10 bg-black/85 backdrop-blur-xs text-white text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 border border-neutral-700 shadow-md">
                ÖNCE · MAT & HARELİ
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            />

            {/* Handle Control */}
            <div
              className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2 cursor-col-resize"
              style={{ left: `${position}%` }}
              onMouseDown={onMouseDown}
              onTouchMove={onTouchMove}
            >
              <div className="w-11 h-11 bg-[#e4002b] text-white shadow-2xl border-2 border-white flex items-center justify-center font-bold text-xs active:scale-95 transition-transform">
                ↔
              </div>
            </div>

          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-neutral-500 mt-4 tracking-wider uppercase font-semibold">
          ← Sürükleyerek Öncesi / Sonrası Karşılaştırmasını Yapın →
        </p>

      </div>
    </section>
  );
}
