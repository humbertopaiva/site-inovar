// src/components/sections/services.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  className,
  icon,
  index,
}: ServiceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 border-l-transparent hover:border-l-accent border-l-4 h-full flex flex-col group",
        className
      )}
    >
      <div className="rounded-xl bg-primary/5 p-4 w-16 h-16 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
        <div className="text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="h-0.5 bg-transparent group-hover:bg-accent/30 transition-colors duration-300 mt-4 w-0 group-hover:w-full" />
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Estado para controlar o filtro ativo
  const [activeFilter, setActiveFilter] = React.useState("all");

  // Animação de paralaxe
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  // Variantes de animação
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-gray-50" />

      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 bg-opacity-30"
        style={{ y, opacity }}
      >
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <motion.div
            className="h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          ></motion.div>
          <p className="text-gray-700 text-lg">
            Nossa equipe oferece soluções personalizadas para impulsionar o
            crescimento do seu negócio.
          </p>
        </motion.div>

        {/* Feature Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "all"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-primary/5"
            }`}
          >
            Todos Serviços
          </button>
          <button
            onClick={() => setActiveFilter("planejamento")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "planejamento"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-primary/5"
            }`}
          >
            Planejamento
          </button>
          <button
            onClick={() => setActiveFilter("gestao")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "gestao"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-primary/5"
            }`}
          >
            Gestão
          </button>
          <button
            onClick={() => setActiveFilter("analise")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "analise"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-primary/5"
            }`}
          >
            Análise
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              />
            ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-6 text-lg">
            Descubra como podemos ajudar seu negócio a alcançar novos patamares
          </p>
          <a
            href="#contato"
            className="inline-block px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
          >
            Entre em contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
