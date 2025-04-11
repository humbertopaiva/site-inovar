// src/components/sections/hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, white, #f9fafb)",
        paddingTop: "5rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: "700",
                }}
              >
                <span
                  style={{
                    color: "#294946",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  ESTRATÉGIAS DE GESTÃO
                </span>
                <span style={{ color: "#fa9937" }}>DE ALTA PERFORMANCE</span>
              </h1>
              <div
                style={{
                  width: "5rem",
                  height: "0.25rem",
                  backgroundColor: "#fa9937",
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              ></div>
            </div>

            <p
              style={{
                fontSize: "1.125rem",
                color: "#4b5563",
                maxWidth: "36rem",
              }}
            >
              Saiba como os{" "}
              <span style={{ fontWeight: "500" }}>serviços estratégicos</span>{" "}
              da Inovar - Assessoria Empresarial vão te ajudar a criar um
              negócio de sucesso e com a saúde financeira em dia.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "1rem",
              }}
            >
              <Button
                variant="default"
                size="lg"
                style={{ fontWeight: "500", padding: "0 2rem" }}
                asChild
              >
                <Link href="#servicos">Saiba mais</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                style={{ fontWeight: "500", padding: "0 2rem" }}
                asChild
              >
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

          <div
            style={{
              position: "relative",
              height: "24rem",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              border: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top right, rgba(41, 73, 70, 0.9), rgba(74, 131, 122, 0.7), rgba(250, 153, 55, 0.5))",
                zIndex: "10",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "20",
                padding: "2.5rem",
              }}
            >
              <div style={{ textAlign: "center", color: "white" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1.5rem",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: "600",
                  }}
                >
                  Compromisso e Responsabilidade
                </h3>
                <div
                  style={{
                    width: "4rem",
                    height: "0.25rem",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    margin: "0 auto 1.5rem",
                  }}
                ></div>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.125rem",
                  }}
                >
                  Conte com o nosso time de profissionais qualificados para
                  atender às demandas da sua empresa e obtenha o compromisso
                  necessário que você deseja de uma equipe técnica e
                  responsável.
                </p>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                inset: "0",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
