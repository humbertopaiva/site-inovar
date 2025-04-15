// src/components/navigation/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatWhatsAppLink } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, MessageSquare, Info, Briefcase, Phone } from "lucide-react";

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`py-3 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-100/50 shadow-sm"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
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
          <div className="flex space-x-3 ml-2">
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-transparent hover:text-accent hover:border-accent rounded-md py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300 border-2 group overflow-hidden"
            >
              <Link href="/cliente" className="flex items-center relative">
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
        <div className="md:hidden">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white absolute w-full left-0 z-50 border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="container flex flex-col space-y-4 py-4"
            >
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
                    className="text-primary hover:text-secondary transition-colors py-2 px-4 block flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2 text-accent">{item.icon}</span>
                    {item.text}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="px-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="w-full mb-3 border-primary text-primary hover:text-accent hover:border-accent rounded-md py-2 border-2 shadow-sm hover:shadow-md transition-all duration-300 group"
                  asChild
                >
                  <Link
                    href="/cliente"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    <User className="w-4 h-4 mr-2" />
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
                  className="w-full bg-accent text-white rounded-md py-2 shadow-sm hover:shadow-md hover:bg-accent-light transition-all duration-300 group"
                  asChild
                >
                  <Link
                    href={formatWhatsAppLink(
                      "32999083793",
                      "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                    )}
                    className="flex items-center justify-center"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    Fale Conosco
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
