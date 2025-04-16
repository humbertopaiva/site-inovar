// src/contexts/contact-form.context.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactFormContextType {
  isFormOpen: boolean;
  openContactForm: (defaultMessage?: string) => void;
  closeContactForm: () => void;
  defaultMessage: string;
  setDefaultMessage: (message: string) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined
);

interface ContactFormProviderProps {
  children: ReactNode;
  initialMessage?: string;
}

export const ContactFormProvider: React.FC<ContactFormProviderProps> = ({
  children,
  initialMessage = "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria.",
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState(initialMessage);

  const openContactForm = (message?: string) => {
    if (message) {
      setDefaultMessage(message);
    }

    // Não mexer no scroll, apenas abrir o modal
    setIsFormOpen(true);

    // Apenas prevenir novos scrolls enquanto o modal está aberto
    document.body.style.overflow = "hidden";
    // Adicionar paddingRight para evitar o salto da página quando a scrollbar é removida
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  };

  const closeContactForm = () => {
    setIsFormOpen(false);

    // Restaurar scroll
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };

  return (
    <ContactFormContext.Provider
      value={{
        isFormOpen,
        openContactForm,
        closeContactForm,
        defaultMessage,
        setDefaultMessage,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};
