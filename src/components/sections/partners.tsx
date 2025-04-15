"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Definição do tipo Partner
interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

// Dados de exemplo de 6 parceiros
const defaultPartners: Partner[] = [
  {
    id: 1,
    name: "Proinfo",
    logo: "https://static.wixstatic.com/media/0410f0_cab434bd68244b19a452dfc6d85064d4~mv2.png/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01/0410f0_cab434bd68244b19a452dfc6d85064d4~mv2.png",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Proinfo Plus",
    logo: "https://static.wixstatic.com/media/0410f0_cfecf3ee546c4d2198c4978c7ae2a188~mv2.png/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01/0410f0_cfecf3ee546c4d2198c4978c7ae2a188~mv2.png",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "Oplem",
    logo: "https://static.wixstatic.com/media/0410f0_18dc3477aa9a40499df24edf4f01c4d3~mv2.png/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01/0410f0_18dc3477aa9a40499df24edf4f01c4d3~mv2.png",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "Precisao",
    logo: "https://static.wixstatic.com/media/0410f0_c28c3fcfda784cdeae7f2c6145c308d5~mv2.png/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01/0410f0_c28c3fcfda784cdeae7f2c6145c308d5~mv2.png",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "Markup",
    logo: "https://static.wixstatic.com/media/0410f0_d2d1e00b0b78403eb8429c37deba4b33~mv2.png/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01/0410f0_d2d1e00b0b78403eb8429c37deba4b33~mv2.png",
    website: "https://example.com",
  },
  {
    id: 6,
    name: "Pão de Angu",
    logo: "https://static.wixstatic.com/media/0410f0_ec317bd7f5d94dc7ad5e26e9f06660d1~mv2.png/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01/0410f0_ec317bd7f5d94dc7ad5e26e9f06660d1~mv2.png",
    website: "https://example.com",
  },
];

// Componente para o card de parceiro
const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-100",
        "hover:shadow-lg transition-all duration-300 group",
        "flex items-center justify-center p-4 h-full w-full"
      )}
    >
      {partner.website ? (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full aspect-video">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain filter group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-lg"></div>
        </a>
      ) : (
        <div className="relative w-full h-full aspect-video">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

interface PartnersGridProps {
  partners?: Partner[];
}

const BusinessPartnersGrid: React.FC<PartnersGridProps> = ({
  partners = defaultPartners,
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="parceiros"
      className="md:py-20 py-8 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-secondary/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texto à esquerda */}
          <motion.div
            className="lg:col-span-5 text-center md:text-left"
            ref={titleRef}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-gray-700 text-lg">
              Trabalhamos com empresas que compartilham nossos valores de
              inovação, excelência e compromisso com resultados.
            </p>
          </motion.div>

          {/* Grid de parceiros à direita com efeito de desfoque nas bordas */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Container do grid com máscara de desfoque nas bordas */}
            <div className="relative">
              {/* Máscaras de gradiente para criar efeito de "volume" */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent"></div>
              </div>

              {/* Grades com efeito de perspectiva para criar ilusão de volume */}
              <div className="relative py-8 px-6">
                <div
                  className="grid grid-cols-2 md:grid-cols-3 gap-6"
                  style={{
                    transform: "perspective(1000px) rotateX(2deg)",
                    transformOrigin: "center center",
                  }}
                >
                  {partners.map((partner) => (
                    <motion.div
                      key={partner.id}
                      className="h-32 relative"
                      initial={{ y: 10, opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * partner.id,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <PartnerCard partner={partner} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnersGrid;
