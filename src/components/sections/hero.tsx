// src/components/sections/hero.tsx
"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
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

  // Variantes para animação simples de fade in
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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-br from-gray-50 to-white opacity-70 z-0 rounded-bl-[100px] hidden md:block"></div>
      <motion.div
        className="absolute top-40 left-40 w-16 h-16 rounded-full bg-accent/10 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-primary/10 z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      ></motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                <motion.span
                  className="block mb-2 text-primary"
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  ESTRATÉGIAS DE GESTÃO
                </motion.span>
                <motion.span
                  className="text-accent"
                  variants={secondTitleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  DE ALTA PERFORMANCE
                </motion.span>
              </h1>
              <motion.div
                className="w-20 h-1 bg-accent mt-6 mb-6"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              ></motion.div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-xl"
              variants={itemVariants}
            >
              Saiba como os{" "}
              <span className="font-medium">serviços estratégicos</span> da
              Inovar - Assessoria Empresarial vão te ajudar a criar um negócio
              de sucesso e com a saúde financeira em dia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button
                variant="default"
                size="lg"
                className="font-medium group relative overflow-hidden"
                asChild
              >
                <Link href="#servicos">
                  <span className="relative z-10">Saiba mais</span>
                  <motion.span
                    className="absolute inset-0 bg-primary-light z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-medium group"
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
              className="hidden md:flex items-center gap-3 text-primary/70 mt-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <ArrowDown className="animate-bounce h-5 w-5" />
              <span className="text-sm font-medium">Descubra mais abaixo</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Animated Business Graphics */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-[28rem] bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Animated Business Graphics Background */}
            <div className="absolute inset-0 z-5">
              {/* Linha gráfica animada 1 */}
              <motion.svg
                className="absolute top-10 left-10 w-40 h-40 text-primary/30"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                  rotate: [0, 5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  times: [0, 0.5, 1],
                }}
              >
                <motion.path
                  d="M10,80 L20,65 L30,70 L40,40 L50,50 L60,35 L70,50 L80,25 L90,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, delay: 0.5 }}
                />
                <circle cx="10" cy="80" r="2" fill="currentColor" />
                <circle cx="20" cy="65" r="2" fill="currentColor" />
                <circle cx="30" cy="70" r="2" fill="currentColor" />
                <circle cx="40" cy="40" r="2" fill="currentColor" />
                <circle cx="50" cy="50" r="2" fill="currentColor" />
                <circle cx="60" cy="35" r="2" fill="currentColor" />
                <circle cx="70" cy="50" r="2" fill="currentColor" />
                <circle cx="80" cy="25" r="2" fill="currentColor" />
                <circle cx="90" cy="30" r="2" fill="currentColor" />
              </motion.svg>

              {/* Gráfico de barras */}
              <motion.svg
                className="absolute bottom-10 left-20 w-32 h-32 text-accent/30"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 7,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  times: [0, 0.5, 1],
                }}
              >
                <motion.rect
                  x="10"
                  y="70"
                  width="10"
                  height="20"
                  fill="currentColor"
                  initial={{ height: 0, y: 90 }}
                  animate={{ height: 20, y: 70 }}
                  transition={{ duration: 1 }}
                />
                <motion.rect
                  x="25"
                  y="50"
                  width="10"
                  height="40"
                  fill="currentColor"
                  initial={{ height: 0, y: 90 }}
                  animate={{ height: 40, y: 50 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.rect
                  x="40"
                  y="30"
                  width="10"
                  height="60"
                  fill="currentColor"
                  initial={{ height: 0, y: 90 }}
                  animate={{ height: 60, y: 30 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.rect
                  x="55"
                  y="40"
                  width="10"
                  height="50"
                  fill="currentColor"
                  initial={{ height: 0, y: 90 }}
                  animate={{ height: 50, y: 40 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.rect
                  x="70"
                  y="20"
                  width="10"
                  height="70"
                  fill="currentColor"
                  initial={{ height: 0, y: 90 }}
                  animate={{ height: 70, y: 20 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.svg>

              {/* Gráfico de pizza */}
              <motion.svg
                className="absolute top-20 right-20 w-36 h-36 text-secondary/30"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 9,
                  delay: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  times: [0, 0.5, 1],
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="251.2"
                  strokeDashoffset="251.2"
                >
                  <motion.animate
                    attributeName="stroke-dashoffset"
                    from="251.2"
                    to="0"
                    dur="3s"
                    fill="freeze"
                  />
                </circle>
                <motion.path
                  d="M50,50 L50,10 A40,40 0 0,1 85,65 Z"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.svg>

              {/* Linha gráfica animada 2 */}
              <motion.svg
                className="absolute bottom-20 right-10 w-40 h-40 text-primary/20"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                  rotate: [0, -3],
                }}
                transition={{
                  duration: 10,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  times: [0, 0.5, 1],
                }}
              >
                <motion.path
                  d="M10,50 L20,45 L30,35 L40,40 L50,30 L60,40 L70,20 L80,25 L90,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3 }}
                />
                <circle cx="10" cy="50" r="2" fill="currentColor" />
                <circle cx="20" cy="45" r="2" fill="currentColor" />
                <circle cx="30" cy="35" r="2" fill="currentColor" />
                <circle cx="40" cy="40" r="2" fill="currentColor" />
                <circle cx="50" cy="30" r="2" fill="currentColor" />
                <circle cx="60" cy="40" r="2" fill="currentColor" />
                <circle cx="70" cy="20" r="2" fill="currentColor" />
                <circle cx="80" cy="25" r="2" fill="currentColor" />
                <circle cx="90" cy="15" r="2" fill="currentColor" />
              </motion.svg>

              {/* Infográfico Circular */}
              <motion.svg
                className="absolute top-40 left-40 w-28 h-28 text-accent/20"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 8,
                  delay: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  times: [0, 0.5, 1],
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="5"
                  y1="50"
                  x2="95"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="50"
                  y1="5"
                  x2="50"
                  y2="95"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </motion.svg>
            </div>

            {/* Overlay para atenuar os gráficos */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-accent/50 z-10 mix-blend-soft-light" />

            {/* Imagem placeholder com espaço para imagem futura */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <motion.div
                className="w-4/5 h-4/5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {/* Aqui é onde a imagem será colocada */}
                <Image
                  src="/hero-inovar.png"
                  alt="Inovar Assessoria Empresarial"
                  fill
                  className="object-cover rounded-xl overflow-visible"
                />

                {/* Texto de placeholder que será substituído pela imagem */}
                <div className="text-white/70 text-center px-6">
                  <p className="text-sm font-medium">Imagem a ser definida</p>
                </div>
              </motion.div>
            </div>

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
