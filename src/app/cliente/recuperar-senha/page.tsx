// src/app/cliente/recuperar-senha/page.tsx
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layouts/footer";
import { Button } from "@/components/ui/button";

export default function RecoverPassword() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Simular processamento
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main>
      <Navbar />

      <section
        ref={sectionRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20"
      >
        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-8 border border-gray-200">
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary">
                  Recuperar Senha
                </h2>
                <p className="text-gray-600 mt-2">
                  Digite seu e-mail para receber as instruções de recuperação
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-4">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                    <svg
                      className="w-6 h-6"
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    E-mail enviado!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Verifique sua caixa de entrada e siga as instruções para
                    redefinir sua senha.
                  </p>
                  <Link href="/cliente">
                    <Button variant="outline" className="mt-2">
                      Voltar para Login
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Button
                        type="submit"
                        variant="default"
                        className="w-full py-2.5"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          "Enviar instruções"
                        )}
                      </Button>
                    </div>
                  </form>

                  <div className="mt-6 text-center">
                    <Link
                      href="/cliente"
                      className="text-sm text-primary hover:text-secondary transition"
                    >
                      Voltar para o login
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
