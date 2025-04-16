"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { formatWhatsAppLink } from "@/lib/utils";
import { useContactForm } from "@/contexts/contact-form.context";

// Configuração do Web3Forms - centralize para fácil manutenção
const CONFIG = {
  accessKey: "SUA_CHAVE_WEB3FORMS_AQUI", // Substitua pela sua chave
  phoneNumber: "32999083793",
};

const ContactFormModal: React.FC = () => {
  const { isFormOpen, closeContactForm, defaultMessage } = useContactForm();
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Atualizar mensagem padrão quando o contexto mudar
  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      message: defaultMessage,
    }));
  }, [defaultMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const submitData = new FormData();
    submitData.append("access_key", CONFIG.accessKey);
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);
    submitData.append("subject", "Novo agendamento de consultoria - Inovar");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");

        // Redirecionar para WhatsApp após 1.5 segundos
        setTimeout(() => {
          const whatsappMessage = `Olá! Sou ${formData.name} e acabei de solicitar uma consultoria pelo site. ${formData.message}`;
          window.location.href = formatWhatsAppLink(
            CONFIG.phoneNumber,
            whatsappMessage
          );

          // Resetar formulário (caso o navegador bloqueie o redirecionamento)
          setFormData({
            name: "",
            email: "",
            message: defaultMessage,
          });
          setFormStatus("idle");
          setTimeout(() => closeContactForm(), 3000);
        }, 1500);
      } else {
        console.error("Erro:", data);
        setFormStatus("error");
        setErrorMessage(
          data.message || "Ocorreu um erro ao enviar o formulário."
        );
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setFormStatus("error");
      setErrorMessage(
        "Ocorreu um erro de conexão. Por favor, tente novamente."
      );
    }
  };

  const handleDirectWhatsApp = () => {
    window.open(
      formatWhatsAppLink(CONFIG.phoneNumber, defaultMessage),
      "_blank"
    );
    closeContactForm();
  };

  return (
    <AnimatePresence>
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop/Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeContactForm}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeContactForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary px-6 pt-6 text-white">
              <h3 className="text-2xl font-montserrat font-bold text-primary">
                Agende sua Consultoria
              </h3>
              <p className="mt-1 opacity-90 text-gray-500">
                Preencha seus dados para agendarmos um horário
              </p>
            </div>

            <div className="p-6">
              {formStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Formulário Enviado!
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Você será redirecionado para o WhatsApp em instantes...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  {formStatus === "error" && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="default"
                      className="flex-1 py-2.5"
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
                        "Enviar dados"
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="accent"
                      className="flex-1 py-2.5"
                      onClick={handleDirectWhatsApp}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Conversar no WhatsApp
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Ao enviar, você concorda em receber contato da nossa equipe.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
