// src/hooks/useFooterIntersection.ts
"use client";

import { useState, useEffect } from "react";

export const useFooterIntersection = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // Encontrar o elemento footer
    const footer = document.querySelector("footer");

    if (!footer) return;

    // Criar instância do Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualizar o estado quando a interseção mudar
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        // Configurar para detectar quando pelo menos 10% do footer está visível
        threshold: 0.1,
        rootMargin: "100px 0px 0px 0px", // Margem extra acima do footer para antecipar a transição
      }
    );

    // Observar o footer
    observer.observe(footer);

    // Limpar o observer quando o componente for desmontado
    return () => {
      observer.disconnect();
    };
  }, []);

  return isFooterVisible;
};
