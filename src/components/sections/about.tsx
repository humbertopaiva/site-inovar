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

  // Transformações baseadas no scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
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
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Background Elements with Parallax */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"
        style={{ y: backgroundY, scale: imageScale }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-tr-full"
        style={{ y: backgroundY, scale: imageScale }}
      />

      {/* Elementos decorativos adicionais */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-accent/10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]),
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[15%] w-24 h-24 rounded-full bg-primary/10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 40]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]),
        }}
      />
      <motion.div
        className="absolute top-1/2 right-[5%] w-12 h-12 rounded-full bg-secondary/10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.9, 0.5]),
        }}
      />

      <motion.div
        className="container relative z-10"
        style={{ opacity: contentOpacity }}
      >
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-primary text-3xl md:text-4xl font-montserrat font-bold mb-4">
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
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg relative h-full min-h-[300px] lg:min-h-[400px] group"
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10"></div>
            <Image
              src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1744397681~exp=1744401281~hmac=7b58c87b5cf4683d3dc1c6b6576103cd9c810f47c2da4bdc1cda3d2ec0122e19&w=996"
              alt="Estratégia empresarial em ação"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-20 translate-y-0 transition-transform duration-300 group-hover:translate-y-0">
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
            className="lg:col-span-7 bg-gray-50 rounded-2xl p-8 shadow-md border-l-4 border-[var(--secondary)]"
            variants={itemVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl text-primary font-montserrat font-semibold mb-4">
              Nossa Abordagem
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                A{" "}
                <span className="text-primary font-medium">
                  Inovar Assessoria Empresarial
                </span>{" "}
                desenvolve um serviço diferenciado para as empresas nas áreas
                administrativa, financeira e de produção. Oferecemos assessoria
                especializada, começando com um diagnóstico detalhado para
                avaliar as necessidades específicas de cada cliente e, assim,
                traçar um planejamento estratégico das ações a serem executadas.
              </p>
              <p className="text-gray-700">
                Visando um novo conceito de gestão, buscamos continuamente
                assessorar e desenvolver o empreendimento dos nossos clientes.
                Identificamos com precisão os pontos a serem revisados e
                priorizamos ações de intervenção, implantando processos que
                agregam competitividade e dinamismo ao seu negócio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats/Numbers Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              +150
            </div>
            <div className="text-gray-600">Clientes Atendidos</div>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              10+
            </div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              98%
            </div>
            <div className="text-gray-600">Satisfação de Clientes</div>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">
              30%
            </div>
            <div className="text-gray-600">Aumento Médio de ROI</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
