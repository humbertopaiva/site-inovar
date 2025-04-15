"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Interface para o componente do passo do processo
interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  stepRef: React.RefObject<HTMLDivElement | null>;
}

// Componente para um passo do processo (versão original)
const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  isActive,
  stepRef,
}) => {
  return (
    <div
      ref={stepRef}
      className={cn(
        "p-6 md:p-8 bg-white rounded-sm border transition-all duration-300 mb-24",
        isActive
          ? "border-[var(--secondary)] shadow-lg"
          : "border-gray-200 opacity-60 blur-[1px] filter hover:opacity-80 hover:blur-0 transition-all"
      )}
    >
      {/* Número do passo com design diferenciado */}
      <div
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 transition-colors duration-300",
          isActive ? "bg-accent" : "bg-primary"
        )}
      >
        {step}
      </div>

      {/* Título e descrição */}
      <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-lg">{description}</p>

      {/* Indicador visual de seleção com animação melhorada */}
      <motion.div
        className="mt-6 h-1 bg-accent"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "33%" : "0%" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      />
    </div>
  );
};

// Componente para um passo do processo na versão mobile com detalhes expandidos
const MobileProcessStep: React.FC<
  Omit<ProcessStepProps, "stepRef"> & {
    onClick: () => void;
    stepDetail: {
      image: string;
      content: string[];
    };
  }
> = ({ step, title, description, isActive, onClick, stepDetail }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-5 bg-white rounded-sm border transition-all duration-300 min-w-[90vw] max-w-[90vw] mx-2 flex flex-col cursor-pointer snap-center h-full",
        isActive ? "border-[var(--secondary)] shadow-lg" : "border-gray-200"
      )}
    >
      {/* Número do passo com design diferenciado */}
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 transition-colors duration-300",
          isActive ? "bg-accent" : "bg-primary"
        )}
      >
        {step}
      </div>

      {/* Título e descrição */}
      <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Imagem */}
      <div className="relative h-48 rounded-sm overflow-hidden bg-gray-50 flex items-center justify-center mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <Image
          src={stepDetail.image}
          alt={title}
          fill
          className="object-cover relative z-10"
        />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
        <div className="absolute top-0 left-0 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
      </div>

      {/* Lista de bullets */}
      <ul className="space-y-3 mt-2">
        {stepDetail.content.map((item, i) => (
          <li key={i} className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-2 flex-shrink-0">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-sm">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente para a visualização detalhada do passo
const StepDetail = ({
  stepData,
  isVisible,
}: {
  stepData: {
    image: string;
    content: string[];
    title: string;
    step: number;
  };
  isVisible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        transition: { duration: 0.4 },
      }}
      className={cn(
        "bg-white p-6 md:p-8 rounded-sm border shadow-lg border-[var(--secondary)]",
        isVisible ? "block" : "hidden"
      )}
    >
      <div className="space-y-6">
        {/* Título com ícone numerado */}
        <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-primary mb-6 flex items-center">
          <span className="w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center mr-3">
            {stepData.step}
          </span>
          {stepData.title}
        </h3>

        {/* Imagem */}
        <div className="relative h-48 md:h-56 rounded-sm overflow-hidden bg-gray-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

          {/* Placeholder para imagem real */}
          <Image
            src={stepData.image}
            alt={stepData.title}
            fill
            className="object-cover relative z-10 h-full w-full"
          />

          {/* Elementos decorativos */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          <div className="absolute top-0 left-0 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
        </div>

        {/* Lista de bullets */}
        <ul className="space-y-4 mt-6">
          {stepData.content.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start"
            >
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Componente principal para a seção de processo de trabalho
const WorkflowProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Referências para cada step
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  // Referência para o título da seção
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });

  // Dados dos passos do processo
  const processSteps = [
    {
      step: 1,
      title: "Análise Criteriosa",
      description:
        "Através de um análise criteriosa da empresa, identificamos os seus pontos de melhorias, e traçamos um planejamento estratégico que define metas e ações para alcançamos os nossos objetivos em um prazo determinado.",
      ref: step1Ref,
    },
    {
      step: 2,
      title: "Implementação de Soluções",
      description:
        "A partir dos pontos apurados no planejamento, buscamos parcerias estratégicas para impulsionar os resultados da empresa, através da implementação de sistemas de gerenciamento inteligentes e de ações administrativas, financeiras e organizacionais.",
      ref: step2Ref,
    },
    {
      step: 3,
      title: "Controle e Sustentabilidade",
      description:
        "Com todos os processos bem definidos e implementados, conseguimos obter o controle necessário do negócio, a fim de criarmos um sistema organizacional que seja sustentável e favorável aos objetivos da empresa.",
      ref: step3Ref,
    },
  ];

  // Descrições detalhadas para cada passo (exibidas na visualização expandida)
  const stepDetails = [
    {
      step: 1,
      title: "Análise Criteriosa",
      image:
        "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?t=st=1744647645~exp=1744651245~hmac=bcf08559eb8ee12d02a85b08e4199557bf7a21e7ab2b5c2e88ce690ecfbeb73d&w=996", // Substitua por uma imagem real
      content: [
        "Identificação dos pontos de melhoria através de diagnóstico empresarial",
        "Desenvolvimento de metas claras e alcançáveis",
        "Estabelecimento de prazos realistas para implementação",
        "Avaliação dos recursos necessários para execução do plano",
      ],
    },
    {
      step: 2,
      title: "Implementação de Soluções",
      image:
        "https://img.freepik.com/free-photo/glowing-filament-ignites-ideas-innovative-solutions-generated-by-ai_188544-9614.jpg?t=st=1744648518~exp=1744652118~hmac=6ce6d787e51dcb2fc9cd1eac67a325fd1a14f010468e0556f6faff8b5a443465&w=1060", // Substitua por uma imagem real
      content: [
        "Seleção de parceiros estratégicos para impulsionar resultados",
        "Implementação de sistemas modernos de gerenciamento",
        "Treinamento da equipe nas novas ferramentas e processos",
        "Monitoramento constante da adaptação às mudanças",
      ],
    },
    {
      step: 3,
      title: "Controle e Sustentabilidade",
      image:
        "https://img.freepik.com/free-photo/businesswoman-analyzing-data_23-2151957117.jpg?t=st=1744648562~exp=1744652162~hmac=b205c61872b7615967a6a57c51c513997d9ab424ab381f9a1a5cd09a52abaa12&w=900", // Substitua por uma imagem real
      content: [
        "Estabelecimento de métricas para acompanhar resultados",
        "Documentação de processos para consistência",
        "Criação de mecanismos de feedback contínuo",
        "Ajustes estratégicos para garantir crescimento sustentável",
      ],
    },
  ];

  // Variantes de animação para o título
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Detectar direção de scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Função que determina qual step está ativo com base na visibilidade e direção de scroll
  const determineActiveStep = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visibleSteps: number[] = [];

      // Coletar todos os steps visíveis
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === step1Ref.current) visibleSteps.push(0);
          else if (entry.target === step2Ref.current) visibleSteps.push(1);
          else if (entry.target === step3Ref.current) visibleSteps.push(2);
        }
      });

      // Se temos steps visíveis, selecionar o apropriado com base na direção
      if (visibleSteps.length > 0) {
        if (scrollDirection === "down") {
          // No scroll para baixo, pegar o step visível mais abaixo (maior índice)
          setActiveStep(Math.max(...visibleSteps));
        } else {
          // No scroll para cima, pegar o step visível mais acima (menor índice)
          setActiveStep(Math.min(...visibleSteps));
        }
      }
    },
    [scrollDirection, step1Ref, step2Ref, step3Ref]
  );

  // Configurar IntersectionObserver para detectar qual step está visível (desktop)
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    )
      return;

    const options = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.5,
    };

    // Armazenar as entradas do observer para análise posterior
    let observedEntries: IntersectionObserverEntry[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Atualizar a lista de entradas observadas
      entries.forEach((entry) => {
        const index = observedEntries.findIndex(
          (e) => e.target === entry.target
        );
        if (index >= 0) {
          observedEntries[index] = entry;
        } else {
          observedEntries.push(entry);
        }
      });

      // Determinar o step ativo com base em todas as entradas
      determineActiveStep(observedEntries);
    };

    const observer = new IntersectionObserver(callback, options);

    // Observar todos os steps
    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => {
      observer.disconnect();
      observedEntries = [];
    };
  }, [scrollDirection, determineActiveStep]);

  // Função para o scroll horizontal na versão mobile
  const handleMobileScroll = React.useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;

    // Calcular em qual card estamos com base na posição do scroll
    const cardWidth = containerWidth * 0.9 + 16; // 90vw + margem
    const stepIndex = Math.round(scrollLeft / cardWidth);

    if (
      stepIndex !== activeStep &&
      stepIndex >= 0 &&
      stepIndex < processSteps.length
    ) {
      setActiveStep(stepIndex);
    }
  }, [activeStep, processSteps.length]);

  // Montar o listener de scroll para mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleMobileScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleMobileScroll);
    };
  }, [handleMobileScroll]);

  // Função para scroll até um card específico
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth * 0.9 + 16; // 90vw + margem
    const scrollPosition = index * cardWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActiveStep(index);
  };

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 relative md:overflow-visible overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <motion.div
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-gray-700 text-lg">
            Nossa metodologia de trabalho é estruturada em três etapas
            fundamentais para garantir resultados consistentes e duradouros.
          </p>
        </motion.div>

        {/* Layout responsivo para desktop e mobile */}
        <div className="mt-12">
          {/* Mobile - Layout horizontal com cards que fazem scroll e mostram conteúdo completo */}
          <div className="md:hidden">
            <div className="relative">
              {/* Indicadores de navegação sutis */}
              {activeStep < processSteps.length - 1 && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <motion.div
                    initial={{ x: 0, opacity: 0.6 }}
                    animate={{ x: [0, 5, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}

              {/* Indicador sutil para a esquerda */}
              {activeStep > 0 && (
                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <motion.div
                    initial={{ x: 0, opacity: 0.6 }}
                    animate={{ x: [0, -5, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}

              {/* Container com scroll horizontal */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-6 pt-2 snap-x scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Espaçador inicial para centralizar primeiro cartão */}
                <div className="min-w-[5vw] flex-shrink-0"></div>

                {/* Container para garantir altura igual em todos os cards */}
                <div className="flex h-full">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex-shrink-0 w-auto h-full">
                      <MobileProcessStep
                        step={step.step}
                        title={step.title}
                        description={step.description}
                        index={index}
                        isActive={activeStep === index}
                        onClick={() => scrollToCard(index)}
                        stepDetail={stepDetails[index]}
                      />
                    </div>
                  ))}
                </div>

                {/* Espaçador final para permitir scroll completo */}
                <div className="min-w-[5vw] flex-shrink-0"></div>
              </div>
            </div>

            {/* Barra de progresso para mobile */}
            <div className="relative mx-auto mt-4 h-1 bg-gray-200 rounded-full max-w-xs">
              <motion.div
                className="absolute left-0 h-1 bg-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Indicadores de navegação como botões para mobile */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-4">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeStep === index
                        ? "bg-accent w-10"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    onClick={() => scrollToCard(index)}
                    aria-label={`Ver passo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Layout com steps à esquerda e detalhes fixos à direita (versão original) */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-12 relative">
            {/* Coluna da esquerda - Steps com scroll normal */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  index={index}
                  isActive={activeStep === index}
                  stepRef={step.ref}
                />
              ))}
            </div>

            {/* Coluna da direita - Detalhe em posição sticky */}
            <div className="relative h-full">
              <div className="sticky top-32">
                {stepDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={activeStep !== index ? "hidden" : "block"}
                  >
                    <StepDetail
                      stepData={detail}
                      isVisible={activeStep === index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS para esconder a scrollbar e definir snapping behavior */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        @media (max-width: 768px) {
          .snap-x {
            scroll-snap-type: x mandatory;
          }

          .snap-center {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkflowProcess;
