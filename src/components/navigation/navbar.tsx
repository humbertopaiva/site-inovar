"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatWhatsAppLink } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
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
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#sobre"
            className="text-primary hover:text-secondary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#servicos"
            className="text-primary hover:text-secondary transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#contato"
            className="text-primary hover:text-secondary transition-colors"
          >
            Contato
          </Link>
          <Button
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Link href="/cliente">Área do Cliente</Link>
          </Button>
          <Button variant="accent" asChild>
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
                { href: "#sobre", text: "Sobre" },
                { href: "#servicos", text: "Serviços" },
                { href: "#contato", text: "Contato" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-primary hover:text-secondary transition-colors py-2 px-4 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
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
                  className="w-full mb-3 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <Link href="/cliente" onClick={() => setIsMenuOpen(false)}>
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
                <Button variant="accent" className="w-full" asChild>
                  <Link
                    href={formatWhatsAppLink(
                      "32999083793",
                      "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria."
                    )}
                  >
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
