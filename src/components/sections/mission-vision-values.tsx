"use client";

import React, { useRef } from "react";
import Image from "next/image";
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

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full" />
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

          <p className="text-gray-600 text-lg">
            Conheça os valores que norteiam nosso trabalho e compromisso com o
            seu sucesso
          </p>
        </div>
      </motion.div>

      {/* Three Column Layout with Gap */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mission Column */}
          <motion.div
            ref={missionRef}
            className="flex flex-col flex-1 mb-6 md:mb-0"
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div
              className="py-12 px-8 text-white h-[340px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
              }}
            >
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
              <motion.p
                variants={itemVariants}
                className="text-white/90 text-lg"
              >
                Contribuir para que as empresas estabeleçam seus próprios
                objetivos, com o aprimoramento dos seus processos operacionais e
                de gestão estratégica.
              </motion.p>
            </div>

            {/* Image below the mission content - Fixed height */}
            <motion.div
              variants={imageVariants}
              className="w-full h-64 relative"
            >
              <Image
                src="https://img.freepik.com/free-photo/business-people-discussing-charts-graphs-showing-results-their-successful-teamwork_158595-8037.jpg?w=1380&t=st=1744398861~exp=1744399461~hmac=b58b17a30e731e4e19c8dbb8a2499ae8be1b66c2d0ad7c6ce81f3fa36c06a95d"
                alt="Nossa missão"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Vision Column */}
          <motion.div
            ref={visionRef}
            className="flex flex-col flex-1 mb-6 md:mb-0"
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div
              className="py-12 px-8 text-white h-[340px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)",
              }}
            >
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
              <motion.p
                variants={itemVariants}
                className="text-white/90 text-lg"
              >
                Ser uma empresa referência em gestão estratégica e
                desenvolvimento organizacional, reconhecida pela excelência e
                inovação em nossas soluções.
              </motion.p>
            </div>

            {/* Image below the vision content - Fixed height */}
            <motion.div
              variants={imageVariants}
              className="w-full h-64 relative"
            >
              <Image
                src="https://img.freepik.com/free-photo/business-planning-concept-side-view-businesswoman-using-laptop-office_176420-11509.jpg?w=1380&t=st=1744398861~exp=1744399461~hmac=6a6d50a6e34d49ad7f12cd3da9b24023f50c51ed34d9ab7a79dfcf9b11b1cf6f"
                alt="Nossa visão"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Values Column */}
          <motion.div
            ref={valuesRef}
            className="flex flex-col flex-1"
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div
              className="py-12 px-8 text-white h-[340px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
              }}
            >
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
            </div>

            {/* Image below the values content - Fixed height */}
            <motion.div
              variants={imageVariants}
              className="w-full h-64 relative"
            >
              <Image
                src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?w=1380&t=st=1744398861~exp=1744399461~hmac=5fe60c59a1494bfcfe660cd5821cedec5c8e2fe029ac9a93d7cf84b8aebe04f8"
                alt="Nossos valores"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
