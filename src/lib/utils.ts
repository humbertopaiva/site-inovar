// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Concatena e gerencia classes com clsx e tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formata um link para o WhatsApp
 * @param phone - Número de telefone
 * @param message - Mensagem opcional a ser pré-preenchida
 * @returns URL formatada para o WhatsApp
 */
export function formatWhatsAppLink(
  phone: string,
  message: string = ""
): string {
  // Remove caracteres não numéricos
  const formattedPhone = phone.replace(/\D/g, "");

  // Adiciona o código do país (Brasil - 55) se não começar com ele
  const fullPhone = formattedPhone.startsWith("55")
    ? formattedPhone
    : `55${formattedPhone}`;

  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);

  // Retorna a URL completa do WhatsApp
  return `https://wa.me/${fullPhone}${
    encodedMessage ? `?text=${encodedMessage}` : ""
  }`;
}
