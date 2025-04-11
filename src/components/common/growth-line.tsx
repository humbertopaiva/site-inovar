// src/components/common/growth-line.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface GrowthLineProps {
  className?: string;
}

const GrowthLine: React.FC<GrowthLineProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-visible ${className}`}>
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute "
        style={{
          transform: "rotate(30deg) translateY(20%)",
          transformOrigin: "bottom left",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <defs>
          <linearGradient
            id="growthGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(74, 131, 122, 0.7)" />
            <stop offset="50%" stopColor="rgba(74, 131, 122, 0.5)" />
            <stop offset="100%" stopColor="rgba(250, 153, 55, 0.4)" />
          </linearGradient>
        </defs>

        {/* Linha diagonal ascendente */}
        <motion.path
          d="M0,100 C30,85 60,55 100,0"
          stroke="rgba(250, 153, 55, 0.9)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Área abaixo da linha */}
        <motion.path
          d="M0,100 C30,85 60,55 100,0 L100,100 Z"
          fill="url(#growthGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.svg>
    </div>
  );
};

export default GrowthLine;
