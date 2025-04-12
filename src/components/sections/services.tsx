// src/components/sections/services.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Interface para o componente de card de serviço
interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  icon: React.ReactNode;
  category: string;
  index: number;
}

// Componente de card de serviço aprimorado com gradientes e efeitos
const ServiceCard = ({
  title,
  description,
  className,
  icon,
  category,
  index,
}: ServiceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Cores para cada categoria (usando as variáveis de cores do CSS)
  const categoryColors = {
    planejamento: {
      from: "var(--primary)",
      to: "var(--primary-light)",
      iconBg: "var(--primary)",
    },
    gestao: {
      from: "var(--secondary)",
      to: "var(--secondary-light)",
      iconBg: "var(--secondary)",
    },
    analise: {
      from: "var(--accent)",
      to: "var(--accent-light)",
      iconBg: "var(--accent)",
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1], // Curva de easing personalizada para movimento mais natural
      }}
      className={cn(
        "bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col group overflow-hidden relative",
        "border border-gray-100 hover:border-transparent",
        "transform hover:-translate-y-2",
        className
      )}
    >
      {/* Elemento decorativo no canto - visível apenas no hover */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Gradiente que fica visível no hover do card */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `linear-gradient(to bottom right, ${
            categoryColors[category as keyof typeof categoryColors]?.from ||
            "var(--primary)"
          }, ${
            categoryColors[category as keyof typeof categoryColors]?.to ||
            "var(--primary-light)"
          })`,
        }}
      ></div>

      {/* Conteúdo do card */}
      <div className="p-7 flex flex-col h-full relative z-10 group-hover:text-white transition-colors duration-500">
        <div className="mb-6 relative">
          {/* Círculo decorativo atrás do ícone */}
          <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-white/20 transition-colors duration-500 transform group-hover:scale-110"></div>

          {/* Ícone com animação */}
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-white group-hover:bg-transparent transition-colors duration-500"
            whileHover={{ rotate: 5 }}
          >
            <div className="text-primary group-hover:text-white transition-colors duration-500">
              {icon}
            </div>
          </motion.div>
        </div>

        <h3 className="text-xl font-montserrat font-semibold text-primary mb-3 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>

        <p className="text-gray-600 flex-grow group-hover:text-white/90 transition-colors duration-500">
          {description}
        </p>

        {/* Linha decorativa que expande no hover */}
        <div className="h-0.5 bg-transparent group-hover:bg-white/30 transition-all duration-500 mt-4 w-0 group-hover:w-full"></div>

        {/* Indicador de "Saiba mais" que aparece no hover */}
        <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-sm group-hover:text-white">
          <span>Saiba mais</span>
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
      className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
        activeFilter === value
          ? "text-white shadow-md"
          : "bg-white text-primary hover:bg-primary/5 border border-gray-200"
      }`}
      style={
        activeFilter === value
          ? {
              background:
                "linear-gradient(to right, var(--primary), var(--primary-light))",
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
      className="py-24 relative overflow-hidden"
    >
      {/* Background com efeito gradiente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-gray-50" />

      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 bg-opacity-30"
        style={{ y, opacity }}
      >
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Padrão decorativo */}
      <div className="absolute right-0 top-1/4 w-64 h-64 opacity-10">
        <Image
          src="/api/placeholder/400/400"
          alt=""
          width={400}
          height={400}
          className="opacity-10"
        />
      </div>

      <div className="container relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          ref={titleRef}
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
            Soluções Completas
          </span>

          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            NOSSOS SERVIÇOS
          </h2>

          <motion.div
            className="h-1 mx-auto mb-8 rounded-full"
            style={{
              background:
                "linear-gradient(to right, var(--accent), rgba(250, 153, 55, 0.7))",
            }}
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          ></motion.div>

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
          <FilterButton label="Todos Serviços" value="all" />
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
              />
            ))}
        </motion.div>

        {/* CTA aprimorado */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 p-10 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Descubra como podemos ajudar seu negócio a alcançar novos patamares
            com nossas soluções personalizadas.
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3.5 text-white rounded-full shadow-md hover:shadow-lg transition-all font-medium"
            style={{
              background:
                "linear-gradient(to right, var(--accent), rgba(250, 153, 55, 0.9))",
            }}
          >
            Fale com nossos especialistas
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
