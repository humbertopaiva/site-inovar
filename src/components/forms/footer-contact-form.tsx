/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/forms/footer-contact-form.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { formatWhatsAppLink } from "@/lib/utils";

interface FooterContactFormProps {
  className?: string;
}

const FooterContactForm: React.FC<FooterContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria.",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulando o envio do formulário
    setTimeout(() => {
      // Redirecionar para WhatsApp
      const whatsappMessage = `Olá! Sou ${formData.name} (${formData.email} / ${formData.phone}) e gostaria de agendar uma consultoria. ${formData.message}`;
      window.open(formatWhatsAppLink("32999083793", whatsappMessage), "_blank");

      // Resetar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        message:
          "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria.",
      });
      setFormStatus("success");

      // Reset success status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-xl font-montserrat font-bold text-primary mb-4">
        Entre em Contato
      </h3>

      {formStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 rounded-md text-green-800 mb-4"
        >
          <p className="font-medium">Mensagem enviada com sucesso!</p>
          <p className="text-sm mt-1">Entraremos em contato em breve.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="footer-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              id="footer-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="Seu nome"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="footer-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="footer-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefone
              </label>
              <input
                id="footer-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="footer-message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="footer-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="Como podemos ajudar?"
            />
          </div>

          {formStatus === "error" && (
            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {errorMessage ||
                "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."}
            </div>
          )}

          <Button
            type="submit"
            variant="accent"
            className="w-full md:w-auto py-2.5"
            disabled={formStatus === "submitting"}
          >
            {formStatus === "submitting" ? (
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
              "Enviar Mensagem"
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default FooterContactForm;
