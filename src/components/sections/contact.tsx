"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { formatWhatsAppLink } from "@/lib/utils";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-gray-600 text-lg">
              Estamos prontos para te ajudar a impulsionar o seu negócio
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl text-primary font-montserrat font-semibold mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-md mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Rua Oscar Vidal, Número 431/602
                    <br />
                    Centro, Juiz de Fora - MG
                    <br />
                    CEP: 36.016.290
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-md mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+5532999083793"
                      className="hover:text-accent transition-colors"
                    >
                      (32) 9 9908-3793
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-md mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:inovar.luciano@gmail.com"
                      className="hover:text-accent transition-colors"
                    >
                      inovar.luciano@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                Horário de Atendimento
              </h4>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Segunda a Sexta:</span> 8h às 18h
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Sábado:</span> 9h às 13h
              </p>
            </div>

            <Button variant="accent" size="lg" className="mt-10 w-full" asChild>
              <a
                href={formatWhatsAppLink(
                  "32999083793",
                  "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Assunto da mensagem"
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
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <Button variant="default" size="lg" className="w-full group">
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
