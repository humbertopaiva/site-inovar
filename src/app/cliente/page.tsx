// src/app/cliente/page.tsx
"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layouts/footer";
import ClientLoginForm from "@/components/forms/client-login-form";

export default function ClientArea() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <main>
      <Navbar />

      <section
        ref={sectionRef}
        className="relative min-h-[80vh] bg-[var(--secondary)] flex items-center justify-center overflow-hidden py-20"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#65a09a,transparent)]"></div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md mx-auto"
          >
            <ClientLoginForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
