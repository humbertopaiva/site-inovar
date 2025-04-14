// src/components/common/animated-bar-chart.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

interface AnimatedBarChartProps {
  className?: string;
}

const AnimatedBarChart: React.FC<AnimatedBarChartProps> = ({ className }) => {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
    [
      { name: "Q1", value: 0 },
      { name: "Q2", value: 0 },
      { name: "Q3", value: 0 },
      { name: "Q4", value: 0 },
      { name: "Q5", value: 0 },
    ]
  );

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Animar para mostrar progresso quando em vista
      setHasAnimated(true);
      setTimeout(() => {
        setChartData([
          { name: "Q1", value: 35 },
          { name: "Q2", value: 55 },
          { name: "Q3", value: 40 },
          { name: "Q4", value: 70 },
          { name: "Q5", value: 80 },
        ]);
      }, 300);
    } else if (!isInView && hasAnimated) {
      // Resetar animação quando sair de vista
      setHasAnimated(false);
      setChartData([
        { name: "Q1", value: 0 },
        { name: "Q2", value: 0 },
        { name: "Q3", value: 0 },
        { name: "Q4", value: 0 },
        { name: "Q5", value: 0 },
      ]);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={`${className || ""} h-full w-full pointer-events-none`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <Bar
            dataKey="value"
            fill="#65a09a"
            radius={[2, 2, 0, 0]}
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AnimatedBarChart;
