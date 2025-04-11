import CTA from "@/components/common/cta";
import FloatingButtons from "@/components/common/floating-buttons";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/navigation/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import { Contact } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
