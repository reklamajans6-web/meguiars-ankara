"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import ServiceCalculator from "@/components/ServiceCalculator";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-[#e4002b] selection:text-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <ServiceCalculator />
      <WhyUs />
      <Gallery />
      <BeforeAfter />
      <CTASection />
      <Location />
      <Footer />
      <MobileCTA />
    </main>
  );
}
