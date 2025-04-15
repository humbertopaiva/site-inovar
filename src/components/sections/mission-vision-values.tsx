"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MissionVisionValues = () => {
  // Estado para detectar se é dispositivo móvel
  const [isMobile, setIsMobile] = useState(false);

  // Estados para controlar o hover de cada card
  const [isHoveringMission, setIsHoveringMission] = useState(false);
  const [isHoveringVision, setIsHoveringVision] = useState(false);
  const [isHoveringValues, setIsHoveringValues] = useState(false);

  // Detectar se é dispositivo móvel ao carregar e em redimensionamento
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar inicialmente
    checkIfMobile();

    // Verificar em redimensionamento
    window.addEventListener("resize", checkIfMobile);

    // Limpar listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section
      id="missao-visao-valores"
      className="pt-0 pb-6 py-0 md:py-20 relative bg-white overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="container relative z-10 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
            className="flex flex-col flex-1 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onMouseEnter={() => setIsHoveringMission(true)}
            onMouseLeave={() => setIsHoveringMission(false)}
          >
            <div className="h-[604px] overflow-hidden rounded-lg relative shadow-lg">
              {/* Content container with gradient background */}
              <motion.div
                className="absolute top-0 left-0 right-0 w-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                  overflow: "hidden",
                }}
                initial={{ height: "0%" }}
                animate={{
                  height: isHoveringMission || isMobile ? "56%" : "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1], // Curva de Bézier suavizada para desaceleração
                }}
              >
                <div className="py-12 px-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isHoveringMission || isMobile ? 1 : 0,
                      y: isHoveringMission || isMobile ? 0 : -10,
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-montserrat font-bold mb-4"
                  >
                    MISSÃO
                  </motion.h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: isHoveringMission || isMobile ? "4rem" : 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-white/30 mb-6"
                  ></motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHoveringMission || isMobile ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white/90 text-lg"
                  >
                    Contribuir para que as empresas estabeleçam seus próprios
                    objetivos, com o aprimoramento dos seus processos
                    operacionais e de gestão estratégica.
                  </motion.p>
                </div>
              </motion.div>

              {/* Image container */}
              <motion.div
                className="w-full relative"
                initial={{ height: "100%", top: "0%" }}
                animate={{
                  height: isHoveringMission || isMobile ? "44%" : "100%",
                  top: isHoveringMission || isMobile ? "56%" : "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1], // Curva de Bézier suavizada
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <Image
                  src="/missao.jpg"
                  alt="Nossa missão"
                  fill
                  className="object-cover"
                />
                {/* Title overlay visible only when not hovering */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isHoveringMission || isMobile ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl font-montserrat font-bold">
                      MISSÃO
                    </h3>
                    <div className="hidden md:flex text-white items-center text-sm">
                      <span className="mr-2">Ver mais</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Column */}
          <motion.div
            className="flex flex-col flex-1 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setIsHoveringVision(true)}
            onMouseLeave={() => setIsHoveringVision(false)}
          >
            <div className="h-[604px] overflow-hidden rounded-lg relative shadow-lg">
              {/* Content container with gradient background */}
              <motion.div
                className="absolute top-0 left-0 right-0 w-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)",
                  overflow: "hidden",
                }}
                initial={{ height: "0%" }}
                animate={{
                  height: isHoveringVision || isMobile ? "56%" : "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="py-12 px-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isHoveringVision || isMobile ? 1 : 0,
                      y: isHoveringVision || isMobile ? 0 : -10,
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-montserrat font-bold mb-4"
                  >
                    VISÃO
                  </motion.h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: isHoveringVision || isMobile ? "4rem" : 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-white/30 mb-6"
                  ></motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHoveringVision || isMobile ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white/90 text-lg"
                  >
                    Ser uma empresa referência em gestão estratégica e
                    desenvolvimento organizacional, reconhecida pela excelência
                    e inovação em nossas soluções.
                  </motion.p>
                </div>
              </motion.div>

              {/* Image container */}
              <motion.div
                className="w-full relative"
                initial={{ height: "100%", top: "0%" }}
                animate={{
                  height: isHoveringVision || isMobile ? "44%" : "100%",
                  top: isHoveringVision || isMobile ? "56%" : "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <Image
                  src="/visao.jpg"
                  alt="Nossa visão"
                  fill
                  className="object-cover"
                />
                {/* Title overlay visible only when not hovering */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isHoveringVision || isMobile ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl font-montserrat font-bold">
                      VISÃO
                    </h3>
                    <div className="hidden md:flex text-white items-center text-sm">
                      <span className="mr-2">Ver mais</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Values Column */}
          <motion.div
            className="flex flex-col flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setIsHoveringValues(true)}
            onMouseLeave={() => setIsHoveringValues(false)}
          >
            <div className="h-[604px] overflow-hidden rounded-lg relative shadow-lg">
              {/* Content container with gradient background */}
              <motion.div
                className="absolute top-0 left-0 right-0 w-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                  overflow: "hidden",
                }}
                initial={{ height: "0%" }}
                animate={{
                  height: isHoveringValues || isMobile ? "56%" : "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="py-12 px-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isHoveringValues || isMobile ? 1 : 0,
                      y: isHoveringValues || isMobile ? 0 : -10,
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-montserrat font-bold mb-4"
                  >
                    VALORES
                  </motion.h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: isHoveringValues || isMobile ? "4rem" : 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-white/30 mb-6"
                  ></motion.div>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHoveringValues || isMobile ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
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
              </motion.div>

              {/* Image container */}
              <motion.div
                className="w-full relative"
                initial={{ height: "100%", top: "0%" }}
                animate={{
                  height: isHoveringValues || isMobile ? "44%" : "100%",
                  top: isHoveringValues || isMobile ? "56%" : "0%",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <Image
                  src="/valores.jpg"
                  alt="Nossos valores"
                  fill
                  className="object-cover"
                />
                {/* Title overlay visible only when not hovering */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isHoveringValues || isMobile ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl font-montserrat font-bold">
                      VALORES
                    </h3>
                    <div className="hidden md:flex text-white items-center text-sm">
                      <span className="mr-2">Ver mais</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
