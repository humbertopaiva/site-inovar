// src/components/sections/hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import AnimatedGrowthChart from "../common/animated-growth-chart";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Variantes para animações de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variantes para animação de títulos
  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const secondTitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-0 overflow-hidden bg-[#121212] text-white min-h-[90vh] flex items-center">
      {/* Parallax Background with Image and Overlay */}
      {isMounted && (
        <>
          {/* Background Image with Parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
            <Image
              src="/low-angle-view-skyscrapers2.jpg"
              alt="Skyscrapers background"
              fill
              className="object-cover blur-sm"
              priority
            />
          </motion.div>

          {/* Separate Overlay with Parallax - This ensures the overlay is always on top of the image */}
          <motion.div className="absolute inset-0 z-10" style={{ y, opacity }}>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(41, 73, 70, 0.95), rgba(41, 73, 70, 0.85) 50%, rgba(41, 73, 70, 0.5))",
              }}
            />
          </motion.div>
        </>
      )}

      {/* Animated Growth Chart Background - positioned to cover the screen diagonally */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <AnimatedGrowthChart className="absolute w-full h-full" />
      </div>

      {/* Content */}
      <div className="container relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center min-h-[90vh]">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col gap-8 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                <motion.span
                  className="block mb-2 text-white"
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Inove sua Gestão de
                </motion.span>
                <motion.span
                  className="text-accent"
                  variants={secondTitleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Alta Performance
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-xl"
              variants={itemVariants}
            >
              Saiba como os nossos
              <span className="font-medium text-white">
                {" "}
                serviços estratégicos
              </span>{" "}
              vão te ajudar a criar um negócio de sucesso e com a saúde
              financeira em dia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button
                variant="accent"
                size="lg"
                className="font-medium group relative overflow-hidden glow-effect"
                asChild
              >
                <Link href="#servicos">
                  <span className="relative z-10">Saiba mais</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-medium group border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link
                  href={formatWhatsAppLink(
                    "32999083793",
                    "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                  )}
                >
                  Fale Conosco
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="hidden md:flex items-center gap-3 text-white/70 mt-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <ArrowDown className="animate-bounce h-5 w-5" />
              <span className="text-sm font-medium">Descubra mais abaixo</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with glass effect, full height */}
          <motion.div
            className="relative h-full min-h-[90vh] w-full rounded-tl-3xl overflow-hidden glass-effect shadow-lg border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Overlay para vidro fosco */}
            <div
              className="absolute inset-0 z-10 mix-blend-overlay"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(41, 73, 70, 0.1), rgba(74, 131, 122, 0.1), rgba(250, 153, 55, 0.1))",
              }}
            />

            {/* Imagem principal que toca o fundo */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Image
                src="/hero-inovar.png"
                alt="Inovar Assessoria Empresarial"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Elementos decorativos de luz */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-xl z-0" />
            <motion.div
              className="absolute top-1/3 right-1/4 w-20 h-20 bg-secondary/30 rounded-full blur-lg z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
