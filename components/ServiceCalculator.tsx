"use client";

import { useState } from "react";
import { MessageCircle, Check, Sparkles, ArrowRight, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/data";

const VEHICLE_TYPES = [
  { id: "sedan", label: "Sedan / Hatchback" },
  { id: "suv", label: "SUV / Crossover" },
  { id: "large", label: "Büyük SUV / Ticari" },
];

const SELECTABLE_SERVICES = [
  { id: "wash", name: "Premium Dış Yıkama", category: "Yıkama" },
  { id: "interior", name: "Detaylı İç Temizlik & Koltuk Hijyeni", category: "İç Detay" },
  { id: "clay", name: "Dış Detay & Demir Tozu / Kil Temizliği", category: "Yüzey" },
  { id: "polish", name: "Pasta & Cila (Boya Düzeltme)", category: "Polisaj" },
  { id: "wax", name: "Boya Koruma & Wax Uygulaması", category: "Koruma" },
  { id: "wheels", name: "Jant, Davlumbaz & Lastik Derin Temizlik", category: "Jant" },
];

export default function ServiceCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [selectedServices, setSelectedServices] = useState<string[]>(["wash", "interior"]);
  const [preferredDate, setPreferredDate] = useState("");

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const selectedVehicleObj = VEHICLE_TYPES.find((v) => v.id === selectedVehicle);
  const selectedServiceNames = SELECTABLE_SERVICES.filter((s) =>
    selectedServices.includes(s.id)
  ).map((s) => s.name);

  const generateWhatsAppUrl = () => {
    let msg = `Merhaba Meguiar's Ankara, web sitenizden özel paket seçimi yaptım:\n\n`;
    msg += `🚘 Araç Tipi: ${selectedVehicleObj?.label}\n`;
    msg += `✨ Seçilen Hizmetler:\n`;
    selectedServiceNames.forEach((name, i) => {
      msg += `  ${i + 1}. ${name}\n`;
    });
    if (preferredDate) {
      msg += `📅 Tercih Edilen Gün/Saat: ${preferredDate}\n`;
    }
    msg += `\nMüsaitlik ve randevu onayı hakkında bilgi alabilir miyim?`;

    return `https://wa.me/${BUSINESS.phoneRaw.replace("+", "")}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="hesapla" className="section-py bg-[#f8f9fa] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e4002b] mb-2">
            İnteraktif Randevu Oluşturucu
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight mb-3">
            Hizmet Paketini Belirle, WhatsApp&apos;tan Anında Onayla
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-normal">
            Aracınızın ihtiyacı olan uygulamaları seçin, WhatsApp üzerinden doğrudan stüdyo ile iletişime geçin.
          </p>
        </div>

        {/* ── Main Interactive Matrix ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Selectors (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-8">
            
            {/* Step 1: Vehicle Type */}
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-5 h-5 bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Araç Tipinizi Seçin
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {VEHICLE_TYPES.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicle(v.id)}
                    className={`py-3 px-4 text-xs font-bold text-left transition-all border ${
                      selectedVehicle === v.id
                        ? "bg-neutral-950 text-white border-neutral-950"
                        : "bg-white text-neutral-700 hover:bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Services Checklist */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Uygulamaları Seçin ({selectedServices.length} Seçili)
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400">Birden fazla seçilebilir</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SELECTABLE_SERVICES.map((s) => {
                  const isSelected = selectedServices.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className={`p-3.5 text-left border flex items-start justify-between gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-neutral-950 text-white border-neutral-950"
                          : "bg-white text-neutral-800 hover:bg-neutral-50 border-neutral-200"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${
                            isSelected ? "text-[#e4002b]" : "text-neutral-400"
                          }`}
                        >
                          {s.category}
                        </span>
                        <span className="text-xs font-semibold leading-tight block">
                          {s.name}
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-none flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                          isSelected
                            ? "bg-[#e4002b] border-[#e4002b] text-white"
                            : "border-neutral-300 bg-white"
                        }`}
                      >
                        {isSelected && <Check size={11} strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Preferred Date Input */}
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-5 h-5 bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Tercih Edilen Gün / Saat (Opsiyonel)
                </span>
              </div>

              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="Örn: Yarın öğleden sonra veya Cumartesi 11:00"
                className="w-full px-4 py-3 text-xs bg-neutral-50 border border-neutral-300 text-neutral-900 focus:outline-none focus:border-neutral-900 placeholder:text-neutral-400 font-normal"
              />
            </div>

          </div>

          {/* Right: Real-time Package Summary & WhatsApp Dispatch (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 p-6 sm:p-8 shadow-md">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e4002b]">
                Paket Özeti
              </span>
              <span className="text-xs font-bold text-neutral-900">
                {selectedVehicleObj?.label}
              </span>
            </div>

            <div className="space-y-2.5 mb-6">
              {selectedServiceNames.map((name, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-800">
                  <span className="w-4 h-4 bg-neutral-100 text-neutral-900 font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-200 mb-6">
              <div className="flex items-start gap-2.5">
                <Shield size={16} className="text-[#e4002b] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-neutral-600 leading-snug">
                  Seçtiğiniz paket doğrudan WhatsApp üzerinden yetkiliye iletilir. Araç durumuna göre kesin süre ve teyit hemen sağlanır.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 transition-colors shadow-md hover:shadow-lg text-center"
            >
              <MessageCircle size={16} />
              WhatsApp ile Randevu Gönder
            </a>

            <div className="text-center mt-3">
              <span className="text-[11px] text-neutral-400">
                Doğrudan Hat: <strong>{BUSINESS.phone}</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
