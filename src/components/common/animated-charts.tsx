// src/components/common/animated-charts.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell,
} from "recharts";

// Dados de amostra para os gráficos
const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 65 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 70 },
  { name: "May", value: 45 },
  { name: "Jun", value: 85 },
  { name: "Jul", value: 60 },
];

const barData = [
  { name: "Q1", value: 20 },
  { name: "Q2", value: 45 },
  { name: "Q3", value: 60 },
  { name: "Q4", value: 75 },
];

const pieData = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const areaData = [
  { name: "Jan", value: 25 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 30 },
  { name: "May", value: 55 },
  { name: "Jun", value: 65 },
  { name: "Jul", value: 50 },
];

// Cores da paleta da marca para usar nos gráficos
const COLORS = ["#294946", "#4a837a", "#fa9937", "#ffad5c"];

export const AnimatedLineChart = ({
  className = "",
  delay = 0,
  duration = 8,
}) => (
  <motion.div
    className={`w-full h-full ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0] }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={lineData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="rgba(250, 153, 55, 0.7)"
          strokeWidth={2}
          dot={{ stroke: "rgba(250, 153, 55, 0.9)", strokeWidth: 2, r: 3 }}
          isAnimationActive={true}
          animationDuration={2000}
        />
      </LineChart>
    </ResponsiveContainer>
  </motion.div>
);

export const AnimatedBarChart = ({
  className = "",
  delay = 0,
  duration = 9,
}) => (
  <motion.div
    className={`w-full h-full ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0] }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={barData}>
        <Bar
          dataKey="value"
          fill="rgba(74, 131, 122, 0.7)"
          isAnimationActive={true}
          animationDuration={2000}
        />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
);

export const AnimatedPieChart = ({
  className = "",
  delay = 0,
  duration = 10,
}) => (
  <motion.div
    className={`w-full h-full ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0] }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={60}
          dataKey="value"
          isAnimationActive={true}
          animationDuration={2000}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`${COLORS[index % COLORS.length]}80`}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </motion.div>
);

export const AnimatedAreaChart = ({
  className = "",
  delay = 0,
  duration = 12,
}) => (
  <motion.div
    className={`w-full h-full ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0] }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={areaData}>
        <Area
          type="monotone"
          dataKey="value"
          fill="rgba(41, 73, 70, 0.4)"
          stroke="rgba(41, 73, 70, 0.7)"
          isAnimationActive={true}
          animationDuration={2000}
        />
      </AreaChart>
    </ResponsiveContainer>
  </motion.div>
);

// Componente que agrupa todos os gráficos para facilitar a importação
const AnimatedCharts = {
  Line: AnimatedLineChart,
  Bar: AnimatedBarChart,
  Pie: AnimatedPieChart,
  Area: AnimatedAreaChart,
};

export default AnimatedCharts;
