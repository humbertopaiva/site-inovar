import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title:
    "Inovar Assessoria Empresarial | Estratégias de Gestão de Alta Performance",
  description:
    "Serviços estratégicos da Inovar - Assessoria Empresarial para ajudar a criar um negócio de sucesso com saúde financeira.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
