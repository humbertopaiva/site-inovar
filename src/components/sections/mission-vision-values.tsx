// src/components/sections/mission-vision-values.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MissionVisionValues = () => {
  // Refs para animação baseada em visibilidade
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);

  // Configurar detecção de visibilidade para cada elemento
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.5 });
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.5 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.5 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="missao-visao-valores"
      ref={sectionRef}
      className="py-16 md:py-20 relative bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-tr-full" />
      </div>

      {/* Section Header */}
      <motion.div
        className="container relative z-10 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Nossos Princípios
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Conheça os valores que norteiam nosso trabalho e compromisso com o
            seu sucesso
          </p>
        </div>
      </motion.div>

      {/* Three Column Layout */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row">
          {/* Mission Column */}
          <motion.div
            ref={missionRef}
            className="flex-1 py-12 px-8 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
            }}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block p-3 bg-white/20 rounded-xl mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.617 1.076a1 1 0 0 1 .766 0l9 4A1 1 0 0 1 22 6v12a1 1 0 0 1-.617.924l-9 4a1 1 0 0 1-.766 0l-9-4A1 1 0 0 1 2 18V6a1 1 0 0 1 .617-.924l9-4zM12 3.07 5 6.273v11.454l7 3.202 7-3.202V6.273L12 3.07zm.5 4.93a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8zm-3.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                </svg>
              </span>
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-montserrat font-bold mb-4"
            >
              MISSÃO
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-white/30 mb-6"
            ></motion.div>
            <motion.p variants={itemVariants} className="text-white/90 text-lg">
              Contribuir para que as empresas estabeleçam seus próprios
              objetivos, com o aprimoramento dos seus processos operacionais e
              de gestão estratégica.
            </motion.p>
          </motion.div>

          {/* Vision Column */}
          <motion.div
            ref={visionRef}
            className="flex-1 py-12 px-8 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)",
            }}
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block p-3 bg-white/20 rounded-xl mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM3 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zM5.93 5.93a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41L5.93 7.34a1 1 0 0 1 0-1.41zm9.9 9.9a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41l-1.41-1.41a1 1 0 0 1 0-1.42zM5.93 18.07a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 0 1 1.41 1.42l-1.41 1.41a1 1 0 0 1-1.42 0zm9.9-9.9a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 0 1 1.41 1.42l-1.41 1.41a1 1 0 0 1-1.42 0z" />
                </svg>
              </span>
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-montserrat font-bold mb-4"
            >
              VISÃO
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-white/30 mb-6"
            ></motion.div>
            <motion.p variants={itemVariants} className="text-white/90 text-lg">
              Ser uma empresa referência em gestão estratégica e desenvolvimento
              organizacional, reconhecida pela excelência e inovação em nossas
              soluções.
            </motion.p>
          </motion.div>

          {/* Values Column */}
          <motion.div
            ref={valuesRef}
            className="flex-1 py-12 px-8 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
            }}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block p-3 bg-white/20 rounded-xl mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1 5a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V9zm1-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </span>
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-montserrat font-bold mb-4"
            >
              VALORES
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-white/30 mb-6"
            ></motion.div>
            <motion.ul
              variants={itemVariants}
              className="space-y-3 text-white/90 text-lg"
            >
              <li className="flex items-center">
                <span className="mr-2 text-white">•</span>
                <span>Transparência na relação com clientes e parceiros</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white">•</span>
                <span>Relacionamento Ético</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white">•</span>
                <span>Envolvimento e comprometimento</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white">•</span>
                <span>Responsabilidade social</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
