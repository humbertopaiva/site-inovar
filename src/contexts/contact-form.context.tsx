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
    setIsFormOpen(true);
    // Prevenir rolagem quando o modal estiver aberto
    document.body.style.overflow = "hidden";
  };

  const closeContactForm = () => {
    setIsFormOpen(false);
    // Restaurar rolagem
    document.body.style.overflow = "auto";
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
