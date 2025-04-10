"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatWhatsAppLink } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-primary font-serif text-2xl font-bold">
            Inovar
          </span>
          <span className="text-secondary text-lg ml-1 font-light">
            Assessoria
          </span>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 py-4 z-50 border-t border-gray-100">
          <div className="container flex flex-col space-y-4">
            <Link
              href="#sobre"
              className="text-primary hover:text-secondary transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="text-primary hover:text-secondary transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#contato"
              className="text-primary hover:text-secondary transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="px-4">
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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
