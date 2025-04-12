// src/app/page.tsx
"use client";

import CTA from "@/components/common/cta";
import FloatingButtons from "@/components/common/floating-buttons";
import BrandCarousel from "@/components/common/brand-carousel";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/navigation/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import MissionVisionValues from "@/components/sections/mission-vision-values"; // Nova importação
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { CursorifyProvider } from "@cursorify/react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <CursorifyProvider>
      <main>
        <Navbar />
        <Hero />
        <BrandCarousel />
        <About />
        <MissionVisionValues /> {/* Novo componente adicionado */}
        <Services />
        <Testimonials />
        <CTA />
        <ContactSection />
        <Footer />
        <FloatingButtons />
      </main>
    </CursorifyProvider>
  );
}
