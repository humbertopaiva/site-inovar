// src/components/sections/about.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = () => {
  // Refs para animação baseada em visibilidade
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Configuração da paralaxe
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5]
  );

  // Configurar detecção de visibilidade para cada elemento
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="md:py-24 py-12 relative overflow-hidden bg-white"
    >
      <motion.div
        className="container relative z-10"
        style={{ opacity: contentOpacity }}
      >
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center md:mb-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-primary text-3xl md:text-4xl font-montserrat font-bold mb-4 tracking-tight">
            Compromisso com os seus objetivos
          </h2>

          <p className="text-gray-600 text-lg">
            Conheça nosso compromisso com a excelência e inovação na gestão
            empresarial
          </p>
        </motion.div>

        {/* Bento Grid Layout - PARTE SUPERIOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-8">
          {/* Large Image Cell - Spans 5 columns (ESQUERDA) */}
          <motion.div
            ref={imageRef}
            className="lg:col-span-5 rounded-md overflow-hidden shadow-lg relative h-full min-h-[300px] lg:min-h-[400px] group"
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/abordagem.jpg"
              alt="Estratégia empresarial em ação"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-0 transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-white text-2xl font-montserrat font-semibold mb-2">
                Estratégia & Inovação
              </h3>
              <p className="text-white/90">
                Transformando visões em resultados tangíveis
              </p>
            </div>
          </motion.div>

          {/* Text Content Cell - Spans 7 columns (DIREITA) */}
          <motion.div
            ref={textRef}
            className="lg:col-span-7 bg-gray-50 rounded-md p-8 shadow-md border-l-4 border-[var(--primary-light)] relative"
            variants={itemVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl text-[var(--primary-light)] font-montserrat font-semibold mb-4">
              Nossa Abordagem
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                A{" "}
                <span className="text-secondary font-medium">
                  Inovar Assessoria Empresarial
                </span>{" "}
                revoluciona a gestão do seu negócio através de metodologias
                exclusivas que integram áreas administrativa, financeira e
                produtiva. Nosso processo inicia com um diagnóstico aprofundado,
                mapeando com precisão os desafios específicos da sua empresa e
                construindo um plano estratégico personalizado com metas
                tangíveis e prazos realistas.
              </p>
              <p className="text-gray-600">
                Mais que consultores, somos parceiros comprometidos com a
                transformação do seu empreendimento. Identificamos oportunidades
                invisíveis aos olhos convencionais e implementamos soluções que
                geram resultados mensuráveis. Cada intervenção é
                estrategicamente projetada para potencializar a competitividade,
                otimizar recursos e acelerar o crescimento sustentável do seu
                negócio no cenário atual.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats/Numbers Section */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="p-6 rounded-sm bg-white shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              +150
            </div>
            <div className="text-gray-600">Clientes Atendidos</div>
          </div>
          <div className="p-6 rounded-sm bg-white shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              10+
            </div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="p-6 rounded-sm bg-white shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              98%
            </div>
            <div className="text-gray-600">Satisfação de Clientes</div>
          </div>
          <div className="p-6 rounded-sm bg-white shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">
              30%
            </div>
            <div className="text-gray-600">Aumento Médio de ROI</div>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default About;
