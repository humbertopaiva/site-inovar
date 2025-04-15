// src/app/page.tsx
"use client";

import CTA from "@/components/common/cta";
import FloatingButtons from "@/components/common/floating-buttons";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/navigation/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import MissionVisionValues from "@/components/sections/mission-vision-values"; // Nova importação
import React, { useEffect } from "react";
import Lenis from "lenis";
import WorkflowProcess from "@/components/sections/workflow-process";
import BusinessPartnersGrid from "@/components/sections/partners";

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
    <main>
      <Navbar />
      <Hero />
      <About />
      <MissionVisionValues />
      <Services />
      <WorkflowProcess />
      <BusinessPartnersGrid />
      <CTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
