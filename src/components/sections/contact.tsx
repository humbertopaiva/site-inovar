"use client";

import React, { useState } from "react";

import { formatWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Montar a mensagem para o WhatsApp
    const message = `
Olá, sou ${formData.name}.
E-mail: ${formData.email}
Telefone: ${formData.phone}

${formData.message}
    `.trim();

    // Redirecionar para o WhatsApp
    window.open(formatWhatsAppLink("32999083793", message), "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">FALE CONOSCO</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-700">
            Entre em contato conosco para uma consultoria personalizada para o
            seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-primary mb-6">
              Envie uma mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Seu e-mail"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Seu telefone"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <Button type="submit" variant="accent" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-primary mb-6">
                Endereço
              </h3>
              <p className="text-gray-700 mb-2">
                Rua Oscar Vidal, Número 431/602 - Centro
              </p>
              <p className="text-gray-700 mb-2">Juiz de Fora - MG</p>
              <p className="text-gray-700">CEP: 36.016.290</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">
                Contato Direto
              </h3>
              <div className="flex items-start mb-4">
                <svg
                  className="w-5 h-5 text-accent mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Luciano Augusto</p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <svg
                  className="w-5 h-5 text-accent mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">(32) 9 9908-3793</p>
                  <a
                    href={formatWhatsAppLink("32999083793")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    Enviar mensagem no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-accent mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">
                    inovar.luciano@gmail.com
                  </p>
                  <a
                    href="mailto:inovar.luciano@gmail.com"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    Enviar e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
