// src/components/common/whatsapp-script.tsx
"use client";

import React, { useEffect } from "react";
import Script from "next/script";

interface WhatsAppScriptProps {
  email?: string;
  phone: string;
  message?: string;
  lang?: string;
}

const WhatsAppScript: React.FC<WhatsAppScriptProps> = ({
  email = "humbertomoreira93@gmail.com",
  phone,
  message = "Olá! Gostaria de saber mais sobre os serviços da Inovar Assessoria.",
  lang = "pt-BR",
}) => {
  useEffect(() => {
    // Configurar o objeto rwbp no escopo global
    window.rwbp = {
      email,
      phone,
      message,
      lang,
    };
  }, [email, phone, message, lang]);

  return (
    <>
      {/* Script para o WhatsApp */}
      <Script
        id="whatsapp-script"
        src="/scripts/whats.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("WhatsApp script carregado com sucesso!");
        }}
      />
    </>
  );
};

// Adicionar a definição de window.rwbp para TypeScript
declare global {
  interface Window {
    rwbp: {
      email: string;
      phone: string;
      message: string;
      lang: string;
    };
  }
}

export default WhatsAppScript;
