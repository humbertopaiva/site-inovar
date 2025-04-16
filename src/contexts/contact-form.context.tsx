// src/contexts/contact-form.context.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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
  const [scrollPosition, setScrollPosition] = useState(0);

  // Gerenciar o comportamento de scroll do documento quando o modal abre/fecha
  useEffect(() => {
    if (isFormOpen) {
      // Guardar a posição atual de scroll antes de bloquear
      setScrollPosition(window.scrollY);
      // Adicionar padding-right para evitar salto na largura quando a scrollbar é removida
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      // Bloquear scroll mantendo a posição visual
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else if (document.body.style.position === "fixed") {
      // Restaurar scroll apenas se a posição estiver fixa
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
      document.body.style.removeProperty("padding-right");
      // Restaurar a posição do scroll
      window.scrollTo(0, scrollPosition);
    }
  }, [isFormOpen, scrollPosition]);

  const openContactForm = (message?: string) => {
    if (message) {
      setDefaultMessage(message);
    }
    setIsFormOpen(true);
  };

  const closeContactForm = () => {
    setIsFormOpen(false);
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
