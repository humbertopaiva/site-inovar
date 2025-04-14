// src/components/ui/gradient-button.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface GradientButtonProps extends Omit<ButtonProps, "variant"> {
  gradientFrom?: string;
  gradientTo?: string;
  hoverScale?: boolean;
  className?: string;
  children: React.ReactNode;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      gradientFrom = "var(--primary)",
      gradientTo = "var(--secondary)",
      hoverScale = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative font-medium overflow-hidden text-white border-none shadow-md transition-all duration-300",
          hoverScale && "hover:scale-105",
          className
        )}
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          boxShadow: "0 4px 15px rgba(41, 73, 70, 0.25)",
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center">{children}</span>
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
