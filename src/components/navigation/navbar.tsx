// src/components/navigation/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatWhatsAppLink } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  MessageSquare,
  Info,
  Briefcase,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para ajustar a transparência
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Impedir rolagem quando o menu estiver aberto no mobile
  useEffect(() => {
    if (isMenuOpen) {
      // Salvando a posição atual do scroll
      const scrollY = window.scrollY;
      // Aplicando estilos para prevenir rolagem e manter a posição
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restaurando a posição do scroll quando o menu é fechado
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // URLs das redes sociais - substitua com seus próprios links
  const socialLinks = {
    instagram: "https://www.instagram.com/inovarassessoria",
    facebook: "https://www.facebook.com/inovarassessoria",
  };

  return (
    <nav
      className={`py-3 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled && !isMenuOpen
          ? "bg-white/70 backdrop-blur-md border-b border-gray-100/50 shadow-sm"
          : isMenuOpen
          ? "bg-white" // Remover o efeito de vidro embacado quando o menu está aberto
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center z-20">
          <Image
            alt="Logo Inovar"
            src={"/inovarlogo.png"}
            width={124}
            height={124}
            className="w-full h-full"
            objectFit="contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5">
          <Link
            href="#sobre"
            className="text-primary hover:text-secondary transition-colors font-medium px-2 flex items-center group"
          >
            <Info className="w-4 h-4 mr-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="relative">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="#servicos"
            className="text-primary hover:text-secondary transition-colors font-medium px-2 flex items-center group"
          >
            <Briefcase className="w-4 h-4 mr-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="relative">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="#contato"
            className="text-primary hover:text-secondary transition-colors font-medium px-2 flex items-center group"
          >
            <Phone className="w-4 h-4 mr-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="relative">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Social Media Icons for Desktop */}
          <div className="flex space-x-2">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          <div className="flex space-x-3 ml-2">
            <Button
              asChild
              className="border-primary text-primary bg-transparent hover:bg-primary hover:text-accent hover:border-accent rounded-md py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300 border-2 group overflow-hidden"
            >
              <Link href="/cliente" className="flex items-center relative ">
                <span className="absolute inset-0 w-full h-full bg-accent/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <User className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Área do Cliente</span>
              </Link>
            </Button>
            <Button
              variant="accent"
              asChild
              className="rounded-md py-2 px-4 bg-accent text-white shadow-sm hover:shadow-md hover:bg-accent-light hover:scale-105 transition-all duration-300 group"
            >
              <Link
                href={formatWhatsAppLink(
                  "32999083793",
                  "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                )}
                className="flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span>Fale Conosco</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-20">
          <button
            onClick={toggleMenu}
            className="text-primary p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu com AnimatePresence para transições suaves */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white fixed inset-0 z-10 overflow-hidden"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              top: "62px", // Começar abaixo da navbar principal
            }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="container flex flex-col justify-between h-[calc(100vh-62px)]" // Calculando a altura correta
            >
              <div className="py-8 space-y-6 overflow-y-auto">
                {[
                  { href: "#sobre", text: "Sobre", icon: <Info size={18} /> },
                  {
                    href: "#servicos",
                    text: "Serviços",
                    icon: <Briefcase size={18} />,
                  },
                  {
                    href: "#contato",
                    text: "Contato",
                    icon: <Phone size={18} />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-primary hover:text-secondary transition-colors  px-4 block flex items-center text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-3 text-accent">{item.icon}</span>
                      {item.text}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="px-4 md:pt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="outline"
                    className="w-full md:mb-4 border-primary text-primary hover:text-accent hover:border-accent rounded-md py-3 border-2 shadow-sm hover:shadow-md transition-all duration-300 group"
                    asChild
                  >
                    <Link
                      href="/cliente"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center"
                    >
                      <User className="w-5 h-5 mr-2" />
                      Área do Cliente
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  className="px-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    variant="accent"
                    className="w-full bg-accent text-white rounded-md py-3 shadow-sm hover:shadow-md hover:bg-accent-light transition-all duration-300 group"
                    asChild
                  >
                    <Link
                      href={formatWhatsAppLink(
                        "32999083793",
                        "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                      )}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center"
                    >
                      <MessageSquare className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                      Fale Conosco
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Social Media Icons for Mobile Menu */}
              <motion.div
                className="border-t border-gray-100 py-6 px-4 mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-500 mb-4 text-center text-sm">
                  Siga-nos nas redes sociais
                </p>
                <div className="flex justify-center space-x-6">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors p-2 bg-gray-50 rounded-full"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors p-2 bg-gray-50 rounded-full"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
