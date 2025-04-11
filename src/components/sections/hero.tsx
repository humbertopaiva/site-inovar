// src/components/sections/hero.tsx
"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

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

          {/* Right Column - Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-[28rem] bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Placeholder para a imagem que será escolhida */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-8 py-12 backdrop-blur-sm bg-white/10 rounded-xl max-w-md">
                <motion.h3
                  className="text-2xl font-montserrat font-semibold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Compromisso e Responsabilidade
                </motion.h3>
                <motion.div
                  className="w-16 h-1 bg-white/70 mx-auto mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
                <motion.p
                  className="text-white/90 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Conte com o nosso time de profissionais qualificados para
                  atender às demandas da sua empresa e obtenha o compromisso
                  necessário que você deseja de uma equipe técnica e
                  responsável.
                </motion.p>
              </div>
            </div>

            {/* Aqui você pode adicionar a imagem quando escolhida */}
            {/* <Image 
              src="/path-to-your-image.jpg"
              alt="Inovar Assessoria Empresarial"
              fill
              className="object-cover z-0"
            /> */}

            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl z-0" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
