import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(
  phone: string,
  message: string = ""
): string {
  // Remove qualquer caractere não numérico
  const cleanPhone = phone.replace(/\D/g, "");

  // Formata o número para o padrão do WhatsApp (com código do país)
  const formattedPhone = cleanPhone.startsWith("55")
    ? cleanPhone
    : `55${cleanPhone}`;

  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);

  // Retorna a URL do WhatsApp
  return `https://wa.me/${formattedPhone}${
    message ? `?text=${encodedMessage}` : ""
  }`;
}
