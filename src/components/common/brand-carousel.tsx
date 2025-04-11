"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Array com dados das marcas parceiras
// Na prática, isso pode vir de uma API ou CMS
const BRANDS = [
  { id: 1, name: "Brand 1", logo: "/brands/brand1.png" },
  { id: 2, name: "Brand 2", logo: "/brands/brand2.png" },
  { id: 3, name: "Brand 3", logo: "/brands/brand3.png" },
  { id: 4, name: "Brand 4", logo: "/brands/brand4.png" },
  { id: 5, name: "Brand 5", logo: "/brands/brand5.png" },
  { id: 6, name: "Brand 6", logo: "/brands/brand6.png" },
  { id: 7, name: "Brand 7", logo: "/brands/brand7.png" },
  { id: 8, name: "Brand 8", logo: "/brands/brand8.png" },
];

// Duplicar as marcas para ter um efeito de loop infinito mais suave
const DUPLICATED_BRANDS = [...BRANDS, ...BRANDS];

type BrandCarouselProps = {
  speed?: number; // Velocidade de deslocamento em pixels por segundo
  pauseOnHover?: boolean; // Pausar ao passar o mouse sobre o carrossel
};

const BrandCarousel: React.FC<BrandCarouselProps> = ({
  speed = 30,
  pauseOnHover = true,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  // Calcula a largura total do carrossel para animação
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  // Ajusta a velocidade com base no número de marcas e configura a duração da animação
  const calculateDuration = () => {
    // Um carrossel com mais itens precisa de mais tempo para completar o ciclo
    const baseDuration = DUPLICATED_BRANDS.length * 2.5;
    // Ajusta velocidade - quanto maior o speed, menor a duração
    return baseDuration * (50 / speed);
  };

  return (
    <section className="py-8 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="container">
        <h4 className="text-center text-primary text-sm font-medium uppercase tracking-widest mb-6">
          Empresas que confiam em nossos serviços
        </h4>
      </div>

      {/* Wrapper do Carrossel */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => pauseOnHover && setIsHovering(true)}
        onMouseLeave={() => pauseOnHover && setIsHovering(false)}
      >
        {/* Gradiente de fade nas laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>

        {/* Carrossel com movimento infinito */}
        <motion.div
          ref={carouselRef}
          className="flex items-center py-6"
          animate={{
            x: -width,
          }}
          transition={{
            x: {
              duration: calculateDuration(),
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{
            willChange: "transform",
            ...(isHovering ? { animationPlayState: "paused" } : {}),
          }}
        >
          {DUPLICATED_BRANDS.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              {/* Usando um div placeholder até que as imagens de marcas reais sejam adicionadas */}
              <div className="relative w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Aqui usamos um placeholder até que os logos reais sejam disponibilizados */}
                  <Image
                    src={`https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?t=st=1744398861~exp=1744402461~hmac=1a45f3b18597dada7dba5be049bc297ac0c920ee8d9282c21965dd97d86b5c14&w=740`}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;
