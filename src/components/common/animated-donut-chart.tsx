// src/components/common/animated-donut-chart.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface AnimatedDonutChartProps {
  className?: string;
}

const AnimatedDonutChart: React.FC<AnimatedDonutChartProps> = ({
  className,
}) => {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
    [
      { name: "Meta", value: 0 },
      { name: "Progresso", value: 100 },
    ]
  );

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Cores para o gráfico de rosquinha
  const COLORS = ["#fa9937", "#ffffff"];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Animar para mostrar progresso quando em vista
      setHasAnimated(true);
      setTimeout(() => {
        setChartData([
          { name: "Meta", value: 25 },
          { name: "Progresso", value: 90 },
        ]);
      }, 300);
    } else if (!isInView && hasAnimated) {
      // Resetar animação quando sair de vista
      setHasAnimated(false);
      setChartData([
        { name: "Meta", value: 0 },
        { name: "Progresso", value: 100 },
      ]);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={`${className || ""} h-full w-full pointer-events-none`}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{
        opacity: isInView ? 1 : 0,
        rotate: isInView ? 0 : -90,
      }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={2}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AnimatedDonutChart;
