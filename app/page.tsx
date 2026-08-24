"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
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
