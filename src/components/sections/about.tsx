"use client";

import React from "react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">
            Compromisso com os seus objetivos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
              A Inovar Assessoria Empresarial desenvolve um serviço diferenciado
              para as empresas nas áreas administrativa, financeira e de
              produção. Oferece serviços de assessoria especializada, através de
              um diagnóstico para avaliar a necessidade do cliente e, assim,
              traçar o planejamento das ações a serem executadas.
            </p>
            <p className="text-gray-700">
              Visando um novo conceito de gestão, a empresa busca continuamente
              assessorar e desenvolver o empreendimento dos clientes, identifica
              os pontos a serem revisados, e prioriza ações de intervenção
              implantando processos que agregam competitividade e dinamismo ao
              seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary shadow-md">
              <h3 className="text-xl text-primary font-serif mb-3">MISSÃO</h3>
              <p className="text-gray-700">
                Contribuir para que as empresas estabeleçam seus próprios
                objetivos, com o aprimoramento dos seus processos operacionais e
                de gestão estratégica.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary shadow-md">
              <h3 className="text-xl text-secondary font-serif mb-3">VISÃO</h3>
              <p className="text-gray-700">
                Ser uma empresa referência em gestão estratégica e
                desenvolvimento organizacional.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent shadow-md md:col-span-2">
              <h3 className="text-xl text-accent font-serif mb-3">VALORES</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  Transparência na relação com os colaboradores, clientes e
                  parceiros
                </li>
                <li>Relacionamento Ético</li>
                <li>Envolvimento e comprometimento</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
