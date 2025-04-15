// src/components/sections/hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnimatedGrowthChart from "../common/animated-growth-chart";
import AnimatedDonutChart from "../common/animated-donut-chart";
import AnimatedBarChart from "../common/animated-bar-chart";
import { DiagonalButton } from "../ui/diagonal-button";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Função para scroll suave para a seção #sobre
  const scrollToSobre = () => {
    const sobreSection = document.getElementById("sobre");
    if (sobreSection) {
      sobreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // Variante para o gráfico de linha
  const chartVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.8, ease: "easeOut" },
    },
  };

  // Variante para o card de gráficos combinados
  const combinedChartVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, delay: 1.1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-0 overflow-hidden bg-white text-primary min-h-[90vh] flex items-center">
      {/* Parallax Background with Image and Overlay */}
      {isMounted && (
        <>
          {/* Background Image with Parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
            <Image
              src="/light-office-background.jpg"
              alt="Office background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </motion.div>

          {/* Light Gradient Overlay */}
          <motion.div className="absolute inset-0 z-10" style={{ y, opacity }}>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#cce5e2,transparent)]"></div>
            </div>
          </motion.div>

          {/* Novo overlay que vai do branco para transparente (esquerda para direita) */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
        </>
      )}

      {/* Content */}
      <div className="container relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center min-h-[90vh]">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col md:gap-8 gap-4 md:py-20 py-0 pt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl relative  flex flex-col mt-12">
                <motion.span
                  className="text-primary text-lg md:text-3xl font-light uppercase sm:text-center md:text-left block text-center md:mb-1 mb-2 "
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Transforme Desafios em
                </motion.span>
                <motion.span
                  className="text-accent text-[10vw] block md:text-[74px] font-bold uppercase md:block text-center md:text-left leading-none"
                  variants={secondTitleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  RESULTADOS CONCRETOS
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-xl text-center md:text-left"
              variants={itemVariants}
            >
              Descubra como{" "}
              <span className="font-bold text-primary">
                empresas que crescem
              </span>{" "}
              estão utilizando nossa assessoria para aumentar lucros e otimizar
              seus processos.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              {/* Botão Saiba Mais com ação para a seção #sobre */}
              <DiagonalButton
                variant="primary"
                action={scrollToSobre}
                iconPosition="right"
                className="cursor-pointer"
              >
                <span className="relative z-10">Saiba mais</span>
              </DiagonalButton>

              {/* Botão Fale Conosco com link para WhatsApp */}
              {/* <DiagonalButton
                variant="outline-primary"
                href={formatWhatsAppLink(
                  "32999083793",
                  "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                )}
                target="_blank"
                rel="noopener noreferrer"
                iconPosition="right"
              >
                <span className="relative z-10">Fale Conosco</span>
              </DiagonalButton> */}
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

          {/* Right Column - Image with light glass effect */}
          <motion.div
            className="relative md:h-full h-[380px] md:min-h-[90vh] w-full rounded-tl-3xl z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Imagem principal que toca o fundo */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center md:mt-12 rounded-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Image
                src="/hero-inovar.jpg"
                alt="Inovar Assessoria Empresarial"
                fill
                className="object-cover max-h-[70vh] rounded-sm md:p-0 p-4"
                priority
              />
            </motion.div>

            {/* Chart overlay em formato de card com fundo primário */}
            <motion.div
              className="absolute z-30 pointer-events-none rounded-lg shadow-xl border border-[var(--secondary)] top-[35%] left-[65%] md:w-[50%] w-[35%] h-[25%] flex items-center justify-center overflow-hidden"
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              style={{
                background:
                  "linear-gradient(135deg, rgba(41, 73, 70, 0.95) 0%, rgba(74, 131, 122, 0.95) 100%)",
                boxShadow: "0 10px 25px rgba(41, 73, 70, 0.3)",
              }}
            >
              <div className="md:p-4 p-2 h-full w-full relative">
                <AnimatedGrowthChart className="w-full h-full" />
              </div>
            </motion.div>

            {/* Card horizontal com os gráficos de rosquinha e barras */}
            <motion.div
              className="absolute z-30 pointer-events-none rounded-lg shadow-xl border border-[var(--secondary)] bottom-[10%] md:left-[-12%] left-[-0%] md:w-[50%] w-[35%] md:h-[18%] h-[20%] flex items-stretch overflow-hidden"
              variants={combinedChartVariants}
              initial="hidden"
              animate="visible"
              style={{
                background:
                  "linear-gradient(135deg, rgba(41, 73, 70, 0.95) 0%, rgba(74, 131, 122, 0.95) 100%)",
                boxShadow: "0 10px 25px rgba(41, 73, 70, 0.3)",
              }}
            >
              {/* Primeiro bloco: Gráfico de Rosquinha */}
              <div className="flex-shrink-0 w-[40%] h-full md:p-3 p-0 relative border-r border-white/10">
                <div className="h-full w-full md:pt-3 p-0">
                  <AnimatedDonutChart className="w-full h-full" />
                </div>
              </div>

              {/* Segundo bloco: Gráfico de Barras */}
              <div className="flex-grow md:p-3 p-2 relative">
                <div className="h-full w-full md:pt-3 p-0">
                  <AnimatedBarChart className="w-full h-full" />
                </div>
              </div>
            </motion.div>

            {/* Elementos decorativos de luz */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl z-0" />
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
