// src/components/common/cta.tsx
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { formatWhatsAppLink } from "@/lib/utils";
import { DiagonalButton } from "../ui/diagonal-button";

const CTA = () => {
  const sectionRef = useRef(null);
  // Removendo a opção "once: true" para que a animação ocorra toda vez que a seção entrar na viewport
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  // Variante específica para o SVG - deslizando da esquerda para a direita
  // Ajustada para ser mais responsiva e iniciar um pouco mais rápido quando a seção aparece
  const svgVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60, // Aumentado para movimento mais rápido
        damping: 15, // Reduzido para um pouco mais de "bounce"
        delay: 0.5, // Reduzido o atraso para iniciar mais rápido
        duration: 0.7, // Ligeiramente mais rápido
      },
    },
  };

  return (
    <section className="bg-primary py-16">
      <div className="container" ref={sectionRef}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Coluna de Texto (Esquerda) */}
          <motion.div className="text-white" variants={containerVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-serif mb-4"
              variants={itemVariants}
            >
              Pronto para impulsionar o seu negócio?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              Entre em contato conosco para uma consultoria personalizada e
              descubra como podemos ajudar a melhorar os resultados da sua
              empresa.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <DiagonalButton variant="accent">
                <Link
                  href={formatWhatsAppLink(
                    "32999083793",
                    "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                  )}
                >
                  Agendar Consultoria
                </Link>
              </DiagonalButton>
            </motion.div>
          </motion.div>

          {/* Coluna de Imagem (Direita) */}
          <motion.div
            className="relative md:h-[500px] h-[380px] w-full rounded-lg flex"
            variants={imageVariants}
          >
            {/* Overlay decorativo com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 mix-blend-overlay" />

            {/* Imagem principal */}
            <Image
              src="/cta.png"
              alt="Crescimento empresarial"
              fill
              className="object-contain overflow-visible md:h-full h-[70%] md:w-full w-[70%] z-20 pr-4 md:pr-0"
            />

            {/* SVG com animação de deslizamento da esquerda para a direita */}
            <motion.div
              className="absolute md:bottom-0 bottom-0 md:right-0 -right-10 md:top-2 top-18 z-10"
              variants={svgVariants}
              // Definindo estados de animação separadamente para permitir animação independente
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Image
                src="/chevron.svg"
                alt="Inovar Assessoria"
                width={200}
                height={200}
                className="md:h-full h-[80%] filter drop-shadow-lg"
              />
            </motion.div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl z-0" />
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-secondary/30 rounded-full blur-lg z-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
