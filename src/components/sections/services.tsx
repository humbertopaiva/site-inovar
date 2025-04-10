"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  icon: React.ReactNode;
}

const ServiceCard = ({
  title,
  description,
  className,
  icon,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-accent/20 h-full flex flex-col",
        className
      )}
    >
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-primary mb-3">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">SERVIÇOS</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-700">
            Nossa equipe oferece soluções personalizadas para impulsionar o
            crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Planejamento do Processo Produtivo"
            description="Através de um levantamento do processo produtivo, traçaremos as metas de uma gestão eficaz no intuito de otimizá-lo e torná-lo adequado aos indicadores que se pretende atingir."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Gestão de Fluxo de Caixa"
            description="Implantamos esta ferramenta para termos o maior controle de todas as entradas e saídas financeiras da empresa, objetivando o aprimoramento da saúde financeira de seu negócio."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Planejamento Tributário"
            description="Buscamos a melhor forma de enquadramento tributário para seu negócio com estudos técnicos e detalhados."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Gestão de Custos"
            description="Apuramos e apontamos os dispêndios de sua empresa, a fim de controlar e monitorar seus custos para maior ganho de performance."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Planejamento Estratégico"
            description="Definimos ações estabelecendo metas, mobilizando recursos e tomando decisões para atingirmos o objetivo desejado."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Análise de Rentabilidade"
            description="A rentabilidade e a lucratividade são indicadores fundamentais para verificar o retorno do investimento. Trabalhamos com ferramentas que irão realizar a apuração do resultado de sua empresa, e com todos os indicadores de gestão para as tomadas de decisões."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Ponto de Equilíbrio"
            description="Identificamos a necessidade de faturamento de seu negócio, onde receitas se igualam às despesas, gerando assim o ponto de equilíbrio."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />

          <ServiceCard
            title="Diagnóstico Empresarial"
            description="Fazemos um estudo detalhado de tudo que se passa dentro de sua empresa. Neste diagnóstico, analisamos os processos da empresa em todas as áreas incluindo vendas, financeiro, marketing e gestão de pessoas."
            icon={
              <svg
                className="w-6 h-6 text-primary"
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
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
