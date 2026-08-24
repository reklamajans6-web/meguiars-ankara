"use client";

import { useState } from "react";
import { MessageCircle, Check, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/data";

const VEHICLE_TYPES = [
  { id: "sedan", label: "Sedan / Hatchback" },
  { id: "suv", label: "SUV / Crossover" },
  { id: "large", label: "Büyük SUV / Ticari" },
];

const SELECTABLE_SERVICES = [
  { id: "wash", name: "Profesyonel Oto Yıkama", category: "Yıkama" },
  { id: "interior", name: "İç Detaylı Temizlik & Koltuk Hijyeni", category: "İç Bakım" },
  { id: "exterior", name: "Dış Detay & Demir Tozu / Kil Temizliği", category: "Dış Bakım" },
  { id: "polish", name: "Pasta & Cila (Boya Düzeltme)", category: "Polisaj" },
  { id: "paint", name: "Boya Bakımı & Wax Koruma", category: "Koruma" },
  { id: "ceramic", name: "Seramik Kaplama", category: "Zırh Koruma" },
  { id: "wheel", name: "Jant ve Lastik Temizliği & Bakımı", category: "Jant" },
  { id: "detailing", name: "Kapsamlı Araç Detailing Paketi", category: "Komple" },
];

export default function ServiceCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "wash",
    "interior",
  ]);
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
    let msg = `Merhaba Meguiar's Ankara, web siteniz üzerinden özel hizmet paketi seçimi yaptım:\n\n`;
    msg += `🚘 Araç Tipi: ${selectedVehicleObj?.label}\n`;
    msg += `✨ Seçilen Hizmetler:\n`;
    selectedServiceNames.forEach((name, i) => {
      msg += `  ${i + 1}. ${name}\n`;
    });
    if (preferredDate) {
      msg += `📅 Tercih Edilen Gün/Saat: ${preferredDate}\n`;
    }
    msg += `\nRandevu durumu ve müsaitlik hakkında bilgi alabilir miyim?`;

    return `https://wa.me/${BUSINESS.phoneRaw.replace("+", "")}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="hesapla" className="section-py bg-[#090a0c] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4002b] mb-2.5">
            İnteraktif Randevu Planlayıcı
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Hizmet Paketini Belirle, WhatsApp&apos;tan Anında İlet
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-normal">
            Aracınızın ihtiyacı olan uygulamaları işaretleyin, tek tıkla doğrudan stüdyoya mesaj olarak iletin.
          </p>
        </div>

        {/* ── Main Interactive Matrix ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Selectors (7 cols) */}
          <div className="lg:col-span-7 bg-[#111216] p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-8">
            
            {/* Step 1: Vehicle Type */}
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-5 h-5 bg-[#e4002b] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Araç Tipinizi Seçin
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {VEHICLE_TYPES.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicle(v.id)}
                    className={`py-3 px-4 text-xs font-bold text-left transition-all border cursor-pointer ${
                      selectedVehicle === v.id
                        ? "bg-[#e4002b] text-white border-[#e4002b] shadow-md"
                        : "bg-[#16181f] text-neutral-300 hover:bg-neutral-800 border-neutral-800"
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
                  <span className="w-5 h-5 bg-[#e4002b] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Uygulamaları Seçin ({selectedServices.length} Seçili)
                  </span>
                </div>
                <span className="text-[11px] text-neutral-500">Birden fazla seçilebilir</span>
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
                          ? "bg-neutral-900 text-white border-neutral-700 shadow-sm"
                          : "bg-[#16181f] text-neutral-400 hover:bg-neutral-800/80 border-neutral-800/90"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${
                            isSelected ? "text-[#e4002b]" : "text-neutral-500"
                          }`}
                        >
                          {s.category}
                        </span>
                        <span className="text-xs font-semibold leading-tight block text-neutral-200">
                          {s.name}
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-none flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                          isSelected
                            ? "bg-[#e4002b] border-[#e4002b] text-white"
                            : "border-neutral-700 bg-neutral-900"
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
                <span className="w-5 h-5 bg-[#e4002b] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Tercih Edilen Gün / Saat (Opsiyonel)
                </span>
              </div>

              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="Örn: Cumartesi sabahı veya Yarın 14:00"
                className="w-full px-4 py-3 text-xs bg-[#16181f] border border-neutral-800 text-white focus:outline-none focus:border-[#e4002b] placeholder:text-neutral-600 font-normal"
              />
            </div>

          </div>

          {/* Right: Package Summary & WhatsApp CTA (5 cols) */}
          <div className="lg:col-span-5 bg-[#111216] border border-neutral-800 p-6 sm:p-8 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e4002b]">
                Paket Özeti
              </span>
              <span className="text-xs font-bold text-white">
                {selectedVehicleObj?.label}
              </span>
            </div>

            <div className="space-y-2.5 mb-6">
              {selectedServiceNames.map((name, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                  <span className="w-4 h-4 bg-neutral-900 border border-neutral-800 text-[#e4002b] font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#16181f] border border-neutral-800/80 mb-6">
              <div className="flex items-start gap-2.5">
                <Shield size={16} className="text-[#e4002b] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Seçtiğiniz uygulamalar WhatsApp üzerinden stüdyo yetkilisine iletilir. Araç durumuna göre net işlem süresi ve randevu hemen teyit edilir.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#e4002b] hover:bg-[#c70025] text-white text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-red-900/30 text-center"
            >
              <MessageCircle size={16} />
              WhatsApp ile Randevu Gönder
            </a>

            <div className="text-center mt-3.5">
              <span className="text-[11px] text-neutral-500">
                Doğrudan Arama: <strong className="text-neutral-300">{BUSINESS.phone}</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
