// src/components/sections/services.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn, formatWhatsAppLink } from "@/lib/utils";

// Interface para o componente de card de serviço
interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  icon: React.ReactNode;
  category: string;
  index: number;
  whatsappMessage: string;
}

// Componente de card de serviço aprimorado com gradientes e efeitos
const ServiceCard = ({
  title,
  description,
  className,
  icon,
  index,
  whatsappMessage,
}: ServiceCardProps) => {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isFullyVisible, setIsFullyVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  // Cores para o gradiente único
  const gradientColors = {
    from: "var(--primary)",
    to: "var(--secondary)",
  };

  // Verificar se é um dispositivo móvel quando o componente montar
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px é um breakpoint comum para mobile
    };

    // Verificar imediatamente
    checkMobile();

    // Adicionar event listener para mudanças de tamanho
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Configurar IntersectionObserver para detectar quando o card está completamente visível
  React.useEffect(() => {
    if (!cardRef.current) return;

    const currentCardRef = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          // Card está pelo menos 90% visível na tela
          setIsFullyVisible(true);
        } else {
          // Card não está completamente visível
          setIsFullyVisible(false);
        }
      },
      {
        threshold: [0.9], // Observar quando 90% do elemento está visível
        rootMargin: "0px",
      }
    );

    observer.observe(currentCardRef);

    return () => {
      observer.unobserve(currentCardRef);
    };
  }, []);

  // Determinar se o efeito hover deve ser mostrado
  const shouldShowHoverEffect = React.useMemo(() => {
    return (isMobile && isFullyVisible) || (!isMobile && isHovered);
  }, [isMobile, isFullyVisible, isHovered]);

  const handleCardClick = () => {
    // Utilizando a função auxiliar para formatar o link do WhatsApp
    const phoneNumber = "32999083793"; // Número da empresa
    const message = `Olá! Gostaria de saber mais sobre o serviço de ${title}. ${whatsappMessage}`;
    const whatsappUrl = formatWhatsAppLink(phoneNumber, message);

    // Abrindo o link em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1], // Curva de easing personalizada para movimento mais natural
      }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "bg-gray-50 rounded-lg shadow-md transition-all duration-500 h-full flex flex-col overflow-hidden relative",
        "border border-gray-100",
        "transform cursor-pointer border-[var(--secondary)]",
        shouldShowHoverEffect
          ? "shadow-xl border-transparent -translate-y-2"
          : "",
        className
      )}
    >
      {/* Elemento decorativo no canto - visível apenas quando card está em hover ou totalmente visível em mobile */}
      <div
        className={cn(
          "absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[var(--primary)]/10 transition-opacity duration-500",
          shouldShowHoverEffect ? "opacity-100" : "opacity-0"
        )}
      ></div>
      <div
        className={cn(
          "absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-[var(--accent)]/10 transition-opacity duration-500",
          shouldShowHoverEffect ? "opacity-100" : "opacity-0"
        )}
      ></div>

      {/* Gradiente que fica visível apenas quando card está em hover ou totalmente visível em mobile */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500 z-0",
          shouldShowHoverEffect ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `linear-gradient(to bottom right, ${gradientColors.from}, ${gradientColors.to})`,
        }}
      ></div>

      {/* Conteúdo do card */}
      <div className="p-7 flex flex-col h-full relative z-10 transition-colors duration-500">
        <div className="mb-6 relative">
          {/* Círculo decorativo atrás do ícone */}
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-primary/10 transition-colors duration-500 transform",
              shouldShowHoverEffect ? "scale-110" : ""
            )}
          ></div>

          {/* Ícone com animação */}
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-white transition-colors duration-500"
            whileHover={{ rotate: 5 }}
          >
            <div className={cn("text-primary transition-colors duration-500")}>
              {icon}
            </div>
          </motion.div>
        </div>

        <h3
          className={cn(
            "text-xl font-montserrat font-semibold text-primary mb-3 transition-colors duration-500",
            shouldShowHoverEffect ? "!text-white" : ""
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-gray-600 flex-grow transition-colors duration-500",
            shouldShowHoverEffect ? "text-white/90" : ""
          )}
        >
          {description}
        </p>

        {/* Linha decorativa que expande no hover */}
        <div
          className={cn(
            "h-0.5 transition-all duration-500 mt-4",
            shouldShowHoverEffect ? "bg-white/30 w-full" : "bg-transparent w-0"
          )}
        ></div>

        {/* Indicador de "Saiba mais" que aparece no hover */}
        <div
          className={cn(
            "mt-4 flex items-center font-medium transform transition-all duration-500 text-sm",
            shouldShowHoverEffect
              ? "opacity-100 translate-y-0 text-white"
              : "opacity-0 translate-y-2"
          )}
        >
          <span>Solicitar pelo WhatsApp</span>
          <svg
            className={cn(
              "w-4 h-4 ml-1 transform transition-transform duration-300",
              shouldShowHoverEffect ? "translate-x-1" : ""
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

// Componente principal da seção de serviços
const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isFilterInView = useInView(filterRef, { once: true, amount: 0.5 });
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Estado para controlar o filtro ativo
  const [activeFilter, setActiveFilter] = React.useState("all");

  // Variantes de animação
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Array com os dados dos serviços
  const services = [
    {
      title: "Planejamento do Processo Produtivo",
      description:
        "Através de um levantamento do processo produtivo, traçaremos as metas de uma gestão eficaz no intuito de otimizá-lo e torná-lo adequado aos indicadores que se pretende atingir.",
      category: "planejamento",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "Gestão de Fluxo de Caixa",
      description:
        "Implantamos esta ferramenta para termos o maior controle de todas as entradas e saídas financeiras da empresa, objetivando o aprimoramento da saúde financeira de seu negócio.",
      category: "gestao",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: "Planejamento Tributário",
      description:
        "Buscamos a melhor forma de enquadramento tributário para seu negócio com estudos técnicos e detalhados.",
      category: "planejamento",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Gestão de Custos",
      description:
        "Apuramos e apontamos os dispêndios de sua empresa, a fim de controlar e monitorar seus custos para maior ganho de performance.",
      category: "gestao",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Planejamento Estratégico",
      description:
        "Definimos ações estabelecendo metas, mobilizando recursos e tomando decisões para atingirmos o objetivo desejado.",
      category: "planejamento",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      title: "Análise de Rentabilidade",
      description:
        "A rentabilidade e a lucratividade são indicadores fundamentais para verificar o retorno do investimento. Trabalhamos com ferramentas que irão realizar a apuração do resultado de sua empresa, e com todos os indicadores de gestão para as tomadas de decisões.",
      category: "analise",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Ponto de Equilíbrio",
      description:
        "Identificamos a necessidade de faturamento de seu negócio, onde receitas se igualam às despesas, gerando assim o ponto de equilíbrio.",
      category: "analise",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Diagnóstico Empresarial",
      description:
        "Fazemos um estudo detalhado de tudo que se passa dentro de sua empresa. Neste diagnóstico, analisamos os processos da empresa em todas as áreas incluindo vendas, financeiro, marketing e gestão de pessoas.",
      category: "analise",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  // Componente para o botão de filtro
  const FilterButton = ({ label, value }: { label: string; value: string }) => (
    <motion.button
      onClick={() => setActiveFilter(value)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm ${
        activeFilter === value
          ? "text-white shadow-md"
          : "bg-white text-primary hover:bg-primary/5 border border-gray-200"
      }`}
      style={
        activeFilter === value
          ? {
              background:
                "linear-gradient(to right, var(--primary), var(--secondary))",
            }
          : {}
      }
    >
      {label}
    </motion.button>
  );

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="md:py-24 py-12 relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#294946_40%,#3a6360_100%)]"></div> */}

      {/* Padrão decorativo */}

      <div className="container relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4 tracking-tight">
            Nossos Serviços
          </h2>

          <p className="text-gray-700 text-lg">
            Nossa equipe oferece soluções personalizadas para impulsionar o
            crescimento do seu negócio.
          </p>
        </motion.div>

        {/* Botões de filtro com design melhorado */}
        <motion.div
          ref={filterRef}
          className="flex flex-wrap justify-center mb-16 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isFilterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterButton label="Todos os Serviços" value="all" />
          <FilterButton label="Planejamento" value="planejamento" />
          <FilterButton label="Gestão" value="gestao" />
          <FilterButton label="Análise" value="analise" />
        </motion.div>

        {/* Grid de serviços com layout responsivo aprimorado */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {services
            .filter(
              (service) =>
                activeFilter === "all" || service.category === activeFilter
            )
            .map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                category={service.category}
                whatsappMessage={`Informação adicional: ${service.category}`}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
