import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
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
    <html
      lang="pt-BR"
      className={`${raleway.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
