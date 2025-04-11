// src/components/common/growth-chart.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Dados que mostram crescimento acelerado
const growthData = [
  { value: 10 },
  { value: 15 },
  { value: 22 },
  { value: 30 },
  { value: 45 },
  { value: 65 },
  { value: 95 },
  { value: 140 },
  { value: 200 },
];

interface GrowthChartProps {
  className?: string;
}

const GrowthChart: React.FC<GrowthChartProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0, scaleY: 0, scaleX: 0 }}
      animate={{ opacity: 0.6, scaleY: 1, scaleX: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      }}
      style={{ transformOrigin: "bottom left" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={growthData}>
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(74, 131, 122, 0.9)" />
              <stop offset="100%" stopColor="rgba(250, 153, 55, 0.3)" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            fill="url(#growthGradient)"
            stroke="rgba(250, 153, 55, 0.9)"
            strokeWidth={3}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default GrowthChart;
