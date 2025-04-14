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
  stepRef: React.RefObject<HTMLDivElement>;
}

// Componente para um passo do processo
const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  index,
  isActive,
  stepRef,
}) => {
  return (
    <div
      ref={stepRef}
      className={cn(
        "p-6 md:p-8 bg-white rounded-xl border transition-all duration-300 mb-24",
        isActive ? "border-accent shadow-lg" : "border-gray-200"
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

      {/* Indicador visual de seleção */}
      <div
        className={cn(
          "mt-6 h-1 w-0 bg-accent transition-all duration-500",
          isActive ? "w-1/3" : ""
        )}
      />
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
        "bg-white p-6 md:p-8 rounded-xl border shadow-lg",
        isVisible ? "border-accent" : "border-gray-200"
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
        <div className="relative h-48 md:h-56 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

          {/* Placeholder para imagem real */}
          <Image
            src="/api/placeholder/600/400"
            alt={stepData.title}
            width={600}
            height={400}
            className="object-contain relative z-10 p-4"
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
  const sectionRef = useRef<HTMLElement>(null);

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
      image: "/analysis.svg", // Substitua por uma imagem real
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
      image: "/implementation.svg", // Substitua por uma imagem real
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
      image: "/sustainable.svg", // Substitua por uma imagem real
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

  // Configurar IntersectionObserver para detectar qual step está visível
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    )
      return;

    const options = {
      root: null,
      rootMargin: "-30% 0px -30% 0px", // Ajustado para considerar apenas quando o componente estiver mais para o topo da tela
      threshold: 0.5, // Aumentado para 0.6 (60% do elemento deve estar visível)
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Encontrar qual step está visível
          if (entry.target === step1Ref.current) setActiveStep(0);
          else if (entry.target === step2Ref.current) setActiveStep(1);
          else if (entry.target === step3Ref.current) setActiveStep(2);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observar todos os steps
    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative"
      // Aumentando a altura da seção para permitir scroll
      style={{ height: "300vh" }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
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
          {/* Mobile - Layout vertical com steps e detalhes intercalados */}
          <div className="md:hidden space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="mb-12">
                <ProcessStep
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  index={index}
                  isActive={activeStep === index}
                  stepRef={step.ref}
                />
                <div className="mt-6">
                  <StepDetail
                    stepData={stepDetails[index]}
                    isVisible={activeStep === index}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop - Layout com steps à esquerda e detalhes fixos à direita */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-12">
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
            <div className="relative">
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

        {/* Indicador de progresso visível apenas em mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {processSteps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeStep === index
                    ? "bg-accent w-10"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => setActiveStep(index)}
                aria-label={`Ver passo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;
