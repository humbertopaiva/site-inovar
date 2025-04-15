// src/components/ui/diagonal-button.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

// Expandindo as variantes possíveis
type DiagonalVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline-primary"
  | "outline-secondary"
  | "outline-accent";

interface DiagonalButtonProps extends Omit<ButtonProps, "variant"> {
  skewAmount?: string;
  variant?: DiagonalVariant;
  hoverScale?: boolean;
  pulseEffect?: boolean;
  className?: string;
  chevronCorner?: boolean;
  children: React.ReactNode;
}

const DiagonalButton = React.forwardRef<HTMLButtonElement, DiagonalButtonProps>(
  (
    {
      skewAmount = "-5deg",
      variant = "primary",
      hoverScale = true,
      pulseEffect = false,
      chevronCorner = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Definir cores e estilos com base na variante
    const isOutline = variant.startsWith("outline");
    const colorBase = variant.replace("outline-", "") as
      | "primary"
      | "secondary"
      | "accent";

    // Mapear variante para cores
    const colorMap = {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
    };

    const bgColor = colorMap[colorBase];

    return (
      <div className="relative group min-w-3xs h-12">
        {!isOutline && (
          <div
            className={cn(
              "absolute w-full h-full -bottom-1 -left-1  rounded-sm",
              variant === "accent" ? "bg-secondary" : "bg-accent"
            )}
            style={{ transform: `skew(calc(${skewAmount} * 1 ))` }}
          />
        )}
        {/* Base Button with diagonal shape */}
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden  transition-all duration-300 w-full h-full flex font-bold",
            isOutline
              ? `bg-transparent text-${colorBase} border-2 border-${colorBase} hover:bg-${colorBase}/10`
              : `text-white border-transparent shadow-md`,
            variant === "accent" ? "text-primary" : "text-white",
            hoverScale && "group-hover:scale-[1.03]",
            pulseEffect && "animate-pulse",
            className
          )}
          style={{
            background: isOutline ? "transparent" : bgColor,
            borderColor: isOutline ? bgColor : "transparent",
            // color: isOutline ? bgColor : "white",
            transform: `skew(${skewAmount})`,
            boxShadow: isOutline ? "none" : "0 4px 10px rgba(38, 66, 67, 0.25)",
          }}
          {...props}
        >
          {/* Inner content that counter-skews to remain straight */}
          <span
            className="relative z-10 flex items-center justify-center w-full"
            style={{ transform: `skew(calc(${skewAmount} * -1))` }}
          >
            {children}
          </span>

          {/* Animated highlight on hover */}
          <span
            className={cn(
              "absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300",
              isOutline ? `bg-${colorBase}/10` : `bg-white/10`
            )}
            style={{ transform: "skew(0deg)" }}
          />
        </Button>

        {/* Optional: Chevron corner accent */}
        {chevronCorner && (
          <div
            className="absolute w-4 h-4 -top-2 -right-2 transform rotate-45 transition-all duration-300 group-hover:scale-125 group-hover:rotate-90"
            style={{ background: bgColor }}
          />
        )}

        {/* Decorative elements for non-outline variants */}
        {!isOutline && (
          <div
            className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 rounded-sm blur-md transition-all duration-500"
            style={{
              background: `linear-gradient(to right, ${bgColor}60, ${bgColor}60)`,
            }}
          />
        )}
      </div>
    );
  }
);

DiagonalButton.displayName = "DiagonalButton";

export { DiagonalButton };
