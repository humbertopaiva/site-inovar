"use client";

import React from "react";

import Link from "next/link";

import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-primary">
            ESTRATÉGIAS DE GESTÃO DE
            <span className="text-accent"> ALTA PERFORMANCE</span>
          </h1>

          <p className="text-lg text-gray-700">
            Saiba como os <strong>serviços estratégicos</strong> da Inovar -
            Assessoria Empresarial vão te ajudar a criar um negócio de sucesso e
            com a saúde financeira em dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="default" size="lg" asChild>
              <Link href="#servicos">Saiba mais</Link>
            </Button>

            <Button variant="accent" size="lg" asChild>
              <Link
                href={formatWhatsAppLink(
                  "32999083793",
                  "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                )}
              >
                Fale Conosco
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          {/* Placeholder para a imagem - você deve substituir por uma imagem real */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-secondary/60 to-accent/40 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-white text-center px-6">
              <h3 className="text-3xl mb-2 font-serif">
                Compromisso e Responsabilidade
              </h3>
              <p className="text-white/90">
                Conte com o nosso time de profissionais sérios e qualificados
                para atender às demandas da sua empresa e obtenha o compromisso
                necessário que você deseja de uma equipe técnica e responsável.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gray-900/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
