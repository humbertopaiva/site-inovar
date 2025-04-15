// src/components/forms/client-login-form.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const ClientLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Aqui você implementaria a lógica de autenticação
    // Simulando um delay para demonstração
    setTimeout(() => {
      setIsLoading(false);
      // Simulação de erro - remova ou substitua pela lógica real
      setErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
    }, 1500);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-8 border border-gray-200">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary">
          Área do Cliente
        </h2>
        <p className="text-gray-600 mt-2">
          Digite suas credenciais para acessar
        </p>
      </div>

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
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <Link
              href="/cliente/recuperar-senha"
              className="text-xs text-accent hover:text-accent-light transition"
            >
              Esqueci minha senha
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="••••••••"
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
                Entrando...
              </span>
            ) : (
              "Entrar"
            )}
          </Button>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Não tem uma conta?{" "}
          <a
            href="#"
            className="font-medium text-primary hover:text-secondary transition"
          >
            Entre em contato
          </a>
        </p>
      </div>
    </div>
  );
};

export default ClientLoginForm;
