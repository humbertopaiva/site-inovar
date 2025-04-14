"use client";

import React, { useRef } from "react";
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
  onClick: () => void;
}

// Componente para um passo do processo
const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  index,
  isActive,
  onClick,
}) => {
  // Referência para animação baseada no scroll
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "p-6 md:p-8 bg-white rounded-xl border cursor-pointer transition-all duration-500 flex flex-col h-full",
        isActive
          ? "border-accent shadow-lg transform -translate-y-2"
          : "border-gray-200 hover:border-accent/50 hover:shadow-md"
      )}
      onClick={onClick}
    >
      {/* Número do passo com design diferenciado */}
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 transition-colors duration-300",
          isActive ? "bg-accent" : "bg-primary"
        )}
      >
        {step}
      </div>

      {/* Título e descrição */}
      <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>

      {/* Indicador visual de seleção */}
      <div
        className={cn(
          "mt-4 h-1 w-0 bg-accent transition-all duration-500",
          isActive ? "w-1/2" : ""
        )}
      />
    </motion.div>
  );
};

// Componente principal para a seção de processo de trabalho
const WorkflowProcess = () => {
  // Estado para controlar o passo ativo
  const [activeStep, setActiveStep] = React.useState(0);

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
    },
    {
      step: 2,
      title: "Implementação de Soluções",
      description:
        "A partir dos pontos apurados no planejamento, buscamos parcerias estratégicas para impulsionar os resultados da empresa, através da implementação de sistemas de gerenciamento inteligentes e de ações administrativas, financeiras e organizacionais.",
    },
    {
      step: 3,
      title: "Controle e Sustentabilidade",
      description:
        "Com todos os processos bem definidos e implementados, conseguimos obter o controle necessário do negócio, a fim de criarmos um sistema organizacional que seja sustentável e favorável aos objetivos da empresa.",
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

  // Descrições detalhadas para cada passo (exibidas na visualização expandida)
  const stepDetails = [
    {
      image: "/analysis.svg", // Substitua por uma imagem real
      content: [
        "Identificação dos pontos de melhoria através de diagnóstico empresarial",
        "Desenvolvimento de metas claras e alcançáveis",
        "Estabelecimento de prazos realistas para implementação",
        "Avaliação dos recursos necessários para execução do plano",
      ],
    },
    {
      image: "/implementation.svg", // Substitua por uma imagem real
      content: [
        "Seleção de parceiros estratégicos para impulsionar resultados",
        "Implementação de sistemas modernos de gerenciamento",
        "Treinamento da equipe nas novas ferramentas e processos",
        "Monitoramento constante da adaptação às mudanças",
      ],
    },
    {
      image: "/sustainable.svg", // Substitua por uma imagem real
      content: [
        "Estabelecimento de métricas para acompanhar resultados",
        "Documentação de processos para consistência",
        "Criação de mecanismos de feedback contínuo",
        "Ajustes estratégicos para garantir crescimento sustentável",
      ],
    },
  ];

  return (
    <section
      id="metodologia"
      className="py-24 bg-gray-50 relative overflow-hidden"
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

        {/* Grade com os três passos do processo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              index={index}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>

        {/* Visualização expandida do passo ativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={`detail-${activeStep}`}
          className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Coluna da imagem */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

              {/* Substitua por uma imagem real ou use um placeholder */}
              <Image
                src="/api/placeholder/600/400"
                alt={processSteps[activeStep].title}
                width={600}
                height={400}
                className="object-contain relative z-10 p-4"
              />

              {/* Elementos decorativos */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute top-0 left-0 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            </div>

            {/* Coluna do conteúdo */}
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center mr-3">
                  {activeStep + 1}
                </span>
                {processSteps[activeStep].title}
              </h3>

              <ul className="space-y-4">
                {stepDetails[activeStep].content.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
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
          </div>
        </motion.div>

        {/* Indicador de progresso do processo */}
        <div className="flex justify-center mt-12">
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
