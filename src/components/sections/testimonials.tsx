"use client";

import React from "react";

interface TestimonialProps {
  name: string;
  company: string;
  position: string;
  content: string;
}

const TestimonialCard = ({
  name,
  company,
  position,
  content,
}: TestimonialProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
      <div className="text-accent mb-4">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">O QUE NOSSOS CLIENTES DIZEM</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-700">
            Veja como a Inovar Assessoria Empresarial tem ajudado empresas a
            alcançarem seus objetivos estratégicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Roberto Silva"
            company="TechSoluções"
            position="Proprietário"
            content="A assessoria da Inovar foi fundamental para organizarmos nosso fluxo de caixa e otimizarmos os processos financeiros da empresa. Em apenas 3 meses, já vimos resultados significativos na saúde financeira do negócio."
          />

          <TestimonialCard
            name="Maria Oliveira"
            company="Bella Confecções"
            position="Diretora"
            content="O planejamento tributário elaborado pela equipe da Inovar nos permitiu economizar cerca de 15% em impostos. Profissionais sérios e comprometidos com os resultados de seus clientes."
          />

          <TestimonialCard
            name="Carlos Mendes"
            company="SuperMarket Express"
            position="Gerente Geral"
            content="O diagnóstico empresarial realizado pela Inovar foi um divisor de águas para o nosso negócio. Identificaram pontos críticos que não estávamos percebendo e nos ajudaram a implementar soluções eficazes."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
