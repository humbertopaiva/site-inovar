// src/components/sections/about.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = () => {
  // Refs para animação baseada em visibilidade
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
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
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.5 });
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.5 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.5 });
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
          <motion.div
            className="w-20 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isSectionInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          ></motion.div>
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
            className="lg:col-span-7 bg-gray-50 rounded-2xl p-8 shadow-md border-l-4 border-primary"
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

        {/* PARTE INFERIOR - Três colunas com Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Mission Card */}
          <motion.div
            ref={missionRef}
            className="bg-primary p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
          >
            <div className="mb-4">
              <span className="inline-block p-3 bg-white/20 rounded-xl">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.617 1.076a1 1 0 0 1 .766 0l9 4A1 1 0 0 1 22 6v12a1 1 0 0 1-.617.924l-9 4a1 1 0 0 1-.766 0l-9-4A1 1 0 0 1 2 18V6a1 1 0 0 1 .617-.924l9-4zM12 3.07 5 6.273v11.454l7 3.202 7-3.202V6.273L12 3.07zm.5 4.93a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8zm-3.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl text-white font-montserrat font-bold mb-3">
              MISSÃO
            </h3>
            <p className="text-white">
              Contribuir para que as empresas estabeleçam seus próprios
              objetivos, com o aprimoramento dos seus processos operacionais e
              de gestão estratégica.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            ref={visionRef}
            className="bg-secondary p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4">
              <span className="inline-block p-3 bg-white/20 rounded-xl">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM3 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zM5.93 5.93a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41L5.93 7.34a1 1 0 0 1 0-1.41zm9.9 9.9a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41l-1.41-1.41a1 1 0 0 1 0-1.42zM5.93 18.07a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 0 1 1.41 1.42l-1.41 1.41a1 1 0 0 1-1.42 0zm9.9-9.9a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 0 1 1.41 1.42l-1.41 1.41a1 1 0 0 1-1.42 0z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl text-white font-montserrat font-bold mb-3">
              VISÃO
            </h3>
            <p className="text-white">
              Ser uma empresa referência em gestão estratégica e desenvolvimento
              organizacional, reconhecida pela excelência e inovação em nossas
              soluções.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            ref={valuesRef}
            className="bg-accent p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="inline-block p-3 bg-white/20 rounded-xl">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1 5a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V9zm1-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl text-white font-montserrat font-bold mb-3">
              VALORES
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Transparência na relação com clientes e parceiros</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Relacionamento Ético</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Envolvimento e comprometimento</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Responsabilidade social</span>
              </li>
            </ul>
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
