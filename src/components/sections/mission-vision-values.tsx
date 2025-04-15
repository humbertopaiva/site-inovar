"use client";

import React, { useRef, useState } from "react";
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

  // Estados para controlar o hover de cada card
  const [isHoveringMission, setIsHoveringMission] = useState(false);
  const [isHoveringVision, setIsHoveringVision] = useState(false);
  const [isHoveringValues, setIsHoveringValues] = useState(false);

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
            onMouseEnter={() => setIsHoveringMission(true)}
            onMouseLeave={() => setIsHoveringMission(false)}
          >
            <div className="h-[604px] overflow-hidden rounded-sm relative">
              {/* Content container with gradient background */}
              <div
                className="transition-all duration-500 ease-in-out"
                style={{
                  height: isHoveringMission ? "340px" : "0px",
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                  overflow: "hidden",
                }}
              >
                <div className="py-12 px-8 text-white">
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
                    objetivos, com o aprimoramento dos seus processos
                    operacionais e de gestão estratégica.
                  </motion.p>
                </div>
              </div>

              {/* Image container */}
              <div
                className="transition-all duration-500 ease-in-out w-full relative"
                style={{
                  height: isHoveringMission ? "264px" : "604px",
                  position: "absolute",
                  bottom: 0,
                  top: isHoveringMission ? "340px" : "0px",
                }}
              >
                <Image
                  src="/missao.jpg"
                  alt="Nossa missão"
                  fill
                  className="object-cover"
                />
                {/* Title overlay visible only when not hovering */}
                <div
                  className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-500 ${
                    isHoveringMission ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white text-2xl font-montserrat font-bold">
                    MISSÃO
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Column */}
          <motion.div
            ref={visionRef}
            className="flex flex-col flex-1 mb-6 md:mb-0"
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            variants={containerVariants}
            onMouseEnter={() => setIsHoveringVision(true)}
            onMouseLeave={() => setIsHoveringVision(false)}
          >
            <div className="h-[604px] overflow-hidden rounded-sm relative">
              {/* Content container with gradient background */}
              <div
                className="transition-all duration-500 ease-in-out"
                style={{
                  height: isHoveringVision ? "340px" : "0px",
                  background:
                    "linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)",
                  overflow: "hidden",
                }}
              >
                <div className="py-12 px-8 text-white">
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
                    desenvolvimento organizacional, reconhecida pela excelência
                    e inovação em nossas soluções.
                  </motion.p>
                </div>
              </div>

              {/* Image container */}
              <div
                className="transition-all duration-500 ease-in-out w-full relative"
                style={{
                  height: isHoveringVision ? "264px" : "604px",
                  position: "absolute",
                  bottom: 0,
                  top: isHoveringVision ? "340px" : "0px",
                }}
              >
                <Image
                  src="/visao.jpg"
                  alt="Nossa visão"
                  fill
                  className="object-cover"
                />
                {/* Title overlay visible only when not hovering */}
                <div
                  className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-500 ${
                    isHoveringVision ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white text-2xl font-montserrat font-bold">
                    VISÃO
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Column */}
          <motion.div
            ref={valuesRef}
            className="flex flex-col flex-1"
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            onMouseEnter={() => setIsHoveringValues(true)}
            onMouseLeave={() => setIsHoveringValues(false)}
          >
            <div className="h-[604px] overflow-hidden rounded-sm relative">
              {/* Content container with gradient background */}
              <div
                className="transition-all duration-500 ease-in-out"
                style={{
                  height: isHoveringValues ? "340px" : "0px",
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                  overflow: "hidden",
                }}
              >
                <div className="py-12 px-8 text-white">
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
                      <span>
                        Transparência na relação com clientes e parceiros
                      </span>
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
              </div>

              {/* Image container */}
              <div
                className="transition-all duration-500 ease-in-out w-full relative"
                style={{
                  height: isHoveringValues ? "264px" : "604px",
                  position: "absolute",
                  bottom: 0,
                  top: isHoveringValues ? "340px" : "0px",
                }}
              >
                <Image
                  src="/valores.jpg"
                  alt="Nossos valores"
                  fill
                  className="object-cover"
                />
                {/* Title overlay visible only when not hovering */}
                <div
                  className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-500 ${
                    isHoveringValues ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white text-2xl font-montserrat font-bold">
                    VALORES
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
