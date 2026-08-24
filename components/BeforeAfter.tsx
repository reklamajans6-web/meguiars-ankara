"use client";

import { useRef, useState, useCallback } from "react";

const BEFORE_IMG =
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=85&auto=format&fit=crop";
const AFTER_IMG =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85&auto=format&fit=crop";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const dragging = useRef(false);

  const getPercent = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(5, Math.min(95, pct));
  }, []);

  // Mouse
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

  // Touch
  const onTouchMove = (e: React.TouchEvent) => {
    setPosition(getPercent(e.touches[0].clientX));
  };

  return (
    <section className="section-py bg-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span
            className="inline-block w-8 h-[2px] mb-4"
            style={{ background: "#c9a96e" }}
          />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Öncesi ve{" "}
            <span style={{ color: "#c9a96e" }}>Sonrası</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base mt-4 font-light">
            Kaydırarak farkı görün
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative overflow-hidden select-none cursor-col-resize"
          style={{ aspectRatio: "16/9", maxHeight: "560px" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchMove={onTouchMove}
        >
          {/* AFTER (base, full width) */}
          <div className="absolute inset-0">
            <img
              src={AFTER_IMG}
              alt="Temizlik sonrası"
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* Label */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-4 py-2 border border-white/20">
              SONRA
            </div>
          </div>

          {/* BEFORE (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={BEFORE_IMG}
              alt="Temizlik öncesi"
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-4 py-2 border border-white/20">
              ÖNCE
            </div>
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white z-10 pointer-events-none"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 cursor-col-resize"
            style={{ left: `${position}%` }}
            onMouseDown={onMouseDown}
            onTouchMove={onTouchMove}
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 5L2 10L7 15M13 5L18 10L13 15"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-xs text-white/25 mt-4 tracking-wider">
          Kaydırın → Farkı Görün
        </p>
      </div>
    </section>
  );
}
