// src/data/partners.ts
// Modelo de dados para parceiros

export interface Partner {
  id: number;
  name: string;
  logo: string;
  description?: string;
  website?: string;
  category?: string;
}

/**
 * Lista de parceiros da Inovar Assessoria
 *
 * Substitua os placeholders por logos reais e informações dos parceiros
 * As imagens podem ser adicionadas na pasta /public/partners/
 */
export const partners: Partner[] = [
  {
    id: 1,
    name: "Tech Solutions",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/tech-solutions-logo.png"
    website: "https://example.com",
    category: "tecnologia",
    description: "Soluções tecnológicas para empresas de todos os portes.",
  },
  {
    id: 2,
    name: "Finance Partners",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/finance-partners-logo.png"
    website: "https://example.com",
    category: "finanças",
    description:
      "Consultoria financeira especializada para empresas em crescimento.",
  },
  {
    id: 3,
    name: "Consultoria Global",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/consultoria-global-logo.png"
    website: "https://example.com",
    category: "consultoria",
    description: "Serviços de consultoria empresarial com abordagem global.",
  },
  {
    id: 4,
    name: "Tech Inovation",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/tech-inovation-logo.png"
    website: "https://example.com",
    category: "tecnologia",
    description: "Tecnologias inovadoras para transformação digital.",
  },
  {
    id: 5,
    name: "Invest Capital",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/invest-capital-logo.png"
    website: "https://example.com",
    category: "finanças",
    description:
      "Soluções de investimento e capital para negócios em expansão.",
  },
  {
    id: 6,
    name: "Business Advisors",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/business-advisors-logo.png"
    website: "https://example.com",
    category: "consultoria",
    description:
      "Assessoria empresarial estratégica para resultados sustentáveis.",
  },
  {
    id: 7,
    name: "Cloud Systems",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/cloud-systems-logo.png"
    website: "https://example.com",
    category: "tecnologia",
    description: "Soluções em nuvem para otimização de processos empresariais.",
  },
  {
    id: 8,
    name: "Financial Group",
    logo: "/api/placeholder/200/100", // Substitua por "/partners/financial-group-logo.png"
    website: "https://example.com",
    category: "finanças",
    description: "Grupo financeiro especializado em soluções corporativas.",
  },
];

// Categorias disponíveis para filtro
export const partnerCategories = [
  { id: "all", label: "Todos" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "finanças", label: "Finanças" },
  { id: "consultoria", label: "Consultoria" },
];
