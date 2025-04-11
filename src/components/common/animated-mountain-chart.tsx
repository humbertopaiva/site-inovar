// src/components/common/animated-mountain-chart.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Dados para o gráfico em linha reta ascendente
const straightLineData = [
  { name: "0", value: 10 },
  { name: "1", value: 20 },
  { name: "2", value: 30 },
  { name: "3", value: 40 },
  { name: "4", value: 50 },
  { name: "5", value: 60 },
  { name: "6", value: 70 },
  { name: "7", value: 80 },
  { name: "8", value: 90 },
  { name: "9", value: 100 },
];

interface AnimatedStraightLineChartProps {
  className?: string;
}

const AnimatedMountainChart: React.FC<AnimatedStraightLineChartProps> = ({
  className = "",
}) => {
  return (
    <motion.div
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0, scaleY: 0, scaleX: 0, originX: 0, originY: 1 }}
      animate={{ opacity: 0.6, scaleY: 1, scaleX: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={straightLineData}>
          <defs>
            <linearGradient
              id="straightLineGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="rgba(74, 131, 122, 0.9)" />
              <stop offset="100%" stopColor="rgba(41, 73, 70, 0.2)" />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="value"
            fill="url(#straightLineGradient)"
            stroke="rgba(74, 131, 122, 0.9)"
            strokeWidth={2}
            isAnimationActive={true}
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AnimatedMountainChart;
