"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import ServiceCalculator from "@/components/ServiceCalculator";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0c] text-white selection:bg-[#e4002b] selection:text-white pb-14 sm:pb-0">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <BeforeAfter />
      <ServiceCalculator />
      <Reviews />
      <Gallery />
      <CTASection />
      <Location />
      <Footer />
      <MobileCTA />
    </main>
  );
}
