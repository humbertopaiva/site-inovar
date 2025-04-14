// src/components/common/animated-growth-chart.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";

interface AnimatedGrowthChartProps {
  className?: string;
}

const AnimatedGrowthChart: React.FC<AnimatedGrowthChartProps> = ({
  className,
}) => {
  const [chartData, setChartData] = useState<
    { month: string; value: number }[]
  >([]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Initial data (flat line)
  const initialData = React.useMemo(
    () => [
      { month: "Jan", value: 10 },
      { month: "Feb", value: 10 },
      { month: "Mar", value: 10 },
      { month: "Apr", value: 10 },
      { month: "May", value: 10 },
      { month: "Jun", value: 10 },
      { month: "Jul", value: 10 },
      { month: "Aug", value: 10 },
      { month: "Sep", value: 10 },
      { month: "Oct", value: 10 },
      { month: "Nov", value: 10 },
      { month: "Dec", value: 10 },
    ],
    []
  );

  // Growth data (upward trend)
  const growthData = React.useMemo(
    () => [
      { month: "Jan", value: 10 },
      { month: "Feb", value: 15 },
      { month: "Mar", value: 18 },
      { month: "Apr", value: 25 },
      { month: "May", value: 30 },
      { month: "Jun", value: 35 },
      { month: "Jul", value: 45 },
      { month: "Aug", value: 60 },
      { month: "Sep", value: 70 },
      { month: "Oct", value: 85 },
      { month: "Nov", value: 95 },
      { month: "Dec", value: 120 },
    ],
    []
  );

  useEffect(() => {
    // Initialize with flat data
    setChartData(initialData);
  }, [initialData]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Animate to growth data when in view
      setHasAnimated(true);
      // Use setTimeout to ensure the animation happens after component is visible
      setTimeout(() => {
        setChartData(growthData);
      }, 300);
    } else if (!isInView && hasAnimated) {
      // Reset animation when out of view
      setHasAnimated(false);
      setChartData(initialData);
    }
  }, [isInView, hasAnimated, growthData, initialData]);

  return (
    <motion.div
      ref={ref}
      className={`${className || ""} h-full w-full pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.2)"
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke=" #4a837a"
            strokeWidth={2}
            dot={{
              stroke: "#65a09a",
              strokeWidth: 1,
              r: 2,
              fill: "#ffad5c",
            }}
            activeDot={{ r: 5, stroke: "#28bbc0", strokeWidth: 2 }}
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AnimatedGrowthChart;
