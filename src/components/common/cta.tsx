import React from "react";
import Link from "next/link";

import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Pronto para impulsionar o seu negócio?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consultoria personalizada e
            descubra como podemos ajudar a melhorar os resultados da sua
            empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link
                href={formatWhatsAppLink(
                  "32999083793",
                  "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                )}
              >
                Agendar Consultoria
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="#contato">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
