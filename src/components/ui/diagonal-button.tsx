// src/components/ui/diagonal-button.tsx
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import { ChevronRight } from "lucide-react";

// Expandindo as variantes possíveis
type DiagonalVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline-primary"
  | "outline-secondary"
  | "outline-accent"
  | "gradient";

export interface DiagonalButtonProps extends Omit<ButtonProps, "variant"> {
  skewAmount?: string;
  variant?: DiagonalVariant;
  hoverScale?: boolean;
  pulseEffect?: boolean;
  className?: string;
  chevronCorner?: boolean;
  rippleEffect?: boolean;
  accentDetail?: "glow" | "border" | "dots" | "none";
  action?: () => void;
  loading?: boolean;
  iconPosition?: "left" | "right" | "none";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const DiagonalButton = React.forwardRef<HTMLButtonElement, DiagonalButtonProps>(
  (
    {
      skewAmount = "-3deg", // Reduzido para um efeito mais sutil
      variant = "primary",
      hoverScale = true,
      pulseEffect = false,
      chevronCorner = false,
      rippleEffect = true,
      accentDetail = "glow",
      action,
      loading = false,
      iconPosition = "right",
      className,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    // Estados para efeitos interativos
    const [isPressed, setIsPressed] = useState(false);
    const [ripples, setRipples] = useState<
      Array<{ x: number; y: number; id: number }>
    >([]);
    const [rippleCount, setRippleCount] = useState(0);

    // Definir cores e estilos com base na variante
    const isOutline = variant.startsWith("outline");
    const isGradient = variant === "gradient";
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

    // Efeito de clique
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (href) {
        // Se temos um href, navegamos para ele
        if (target === "_blank") {
          window.open(href, "_blank", rel ? `${rel}` : "");
        } else {
          window.location.href = href;
        }
      }

      if (action) {
        action();
      }

      // Criar efeito de ripple
      if (rippleEffect) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: rippleCount };
        setRipples([...ripples, newRipple]);
        setRippleCount(rippleCount + 1);

        // Remover ripple após animação
        setTimeout(() => {
          setRipples((ripples: Array<{ x: number; y: number; id: number }>) =>
            ripples.filter(
              (r: { x: number; y: number; id: number }) => r.id !== newRipple.id
            )
          );
        }, 1000);
      }

      // Efeito de pressão
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 200);
    };

    // Efeito para loading state
    useEffect(() => {
      if (loading) {
        const interval = setInterval(() => {
          const button = document.getElementById("diagonal-button");
          if (button) {
            const x = button.offsetWidth / 2;
            const y = button.offsetHeight / 2;

            const newRipple = { x, y, id: rippleCount };
            setRipples((prev: Array<{ x: number; y: number; id: number }>) => [
              ...prev,
              newRipple,
            ]);
            setRippleCount((prev) => prev + 1);

            setTimeout(() => {
              setRipples(
                (ripples: Array<{ x: number; y: number; id: number }>) =>
                  ripples.filter(
                    (r: { x: number; y: number; id: number }) =>
                      r.id !== newRipple.id
                  )
              );
            }, 1000);
          }
        }, 1500);

        return () => clearInterval(interval);
      }
    }, [loading, rippleCount]);

    // Classes dinâmicas para os detalhes accent
    const accentDetailClasses = {
      glow: "before:absolute before:content-[''] before:-z-10 before:opacity-0 before:blur-xl before:bg-accent/40 before:inset-0 before:translate-y-2 group-hover:before:opacity-100 before:transition-all before:duration-300",
      border:
        "after:absolute after:content-[''] after:z-20 after:opacity-0 after:border-2 after:border-accent/60 after:rounded-sm after:inset-0 after:scale-105 group-hover:after:opacity-100 group-hover:after:scale-100 after:transition-all after:duration-300",
      dots: "before:absolute before:content-[''] before:-z-10 before:bg-accent before:w-1.5 before:h-1.5 before:rounded-full before:top-1 before:right-1 after:absolute after:content-[''] after:-z-10 after:bg-accent after:w-1.5 after:h-1.5 after:rounded-full after:bottom-1 after:left-1",
      none: "",
    };

    return (
      <div
        className="relative group min-w-3xs h-12 overflow-visible cursor-pointer"
        id="diagonal-button-container"
      >
        {/* Background shadow for 3D effect */}
        {!isOutline && !isGradient && (
          <div
            className={cn(
              "absolute w-full h-full -bottom-1.5 -right-1 rounded-sm transition-all duration-300",
              variant === "accent" ? "bg-secondary/80" : "bg-accent/80",
              isPressed ? "translate-y-0 translate-x-0" : ""
            )}
            style={{
              transform: `skew(calc(${skewAmount} * 1)) ${
                isPressed ? "translateY(2px)" : ""
              }`,
              transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          />
        )}

        {/* Base Button with diagonal shape */}
        <Button
          ref={ref}
          id="diagonal-button"
          className={cn(
            "relative overflow-hidden transition-all duration-300 w-full h-full flex font-bold",
            accentDetailClasses[accentDetail],
            isOutline
              ? `bg-transparent border-2 hover:bg-${colorBase}/10`
              : `text-white border-transparent`,
            isGradient
              ? "bg-gradient-to-r from-primary via-accent to-secondary text-white"
              : "",
            variant === "accent" ? "text-primary" : "text-white",
            isOutline && variant === "outline-primary" ? "text-primary" : "",
            isOutline && variant === "outline-secondary"
              ? "text-secondary"
              : "",
            isOutline && variant === "outline-accent" ? "text-accent" : "",
            hoverScale && "group-hover:scale-[1.03]",
            pulseEffect && "animate-pulse",
            loading && "cursor-wait",
            href && "cursor-pointer",
            className
          )}
          style={{
            background: isGradient
              ? "linear-gradient(135deg, var(--primary), var(--accent), var(--secondary))"
              : isOutline
              ? "transparent"
              : bgColor,
            borderColor: isOutline ? bgColor : "transparent",
            transform: `skew(${skewAmount}) ${
              isPressed ? "translateY(2px)" : ""
            }`,
            boxShadow: isOutline ? "none" : "0 4px 12px rgba(0, 0, 0, 0.15)",
            transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
          onClick={handleClick}
          {...props}
        >
          {/* Inner content that counter-skews to remain straight */}
          <span
            className="relative z-10 flex items-center justify-center w-full gap-2"
            style={{ transform: `skew(calc(${skewAmount} * -1))` }}
          >
            {iconPosition === "left" && !loading && (
              <ChevronRight className="w-5 h-5 -rotate-180" />
            )}

            {loading ? (
              <span className="flex items-center">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-current animate-bounce mr-1"
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-current animate-bounce mr-1"
                  style={{ animationDelay: "150ms" }}
                ></span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></span>
              </span>
            ) : (
              children
            )}

            {iconPosition === "right" && !loading && (
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            )}
          </span>

          {/* Animated highlight on hover */}
          <span
            className={cn(
              "absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out",
              isOutline ? `bg-${colorBase}/10` : `bg-white/10`
            )}
          />

          {/* Ripple effect container */}
          {rippleEffect &&
            ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute bg-white/20 rounded-full animate-ripple"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: "120px",
                  height: "120px",
                  marginLeft: "-60px",
                  marginTop: "-60px",
                }}
              />
            ))}
        </Button>

        {/* Chevron corner accent with animation */}
        {chevronCorner && (
          <div
            className={cn(
              "absolute w-4 h-4 -top-2 -right-2 transform rotate-45 transition-all duration-300",
              "group-hover:scale-125 group-hover:rotate-90"
            )}
            style={{
              background: `var(--accent)`,
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        )}

        {/* Accent accents/lines */}
        <div className="absolute w-3 h-0.5 bg-accent/70 -bottom-1 left-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute w-0.5 h-3 bg-accent/70 -right-1 top-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }
);

DiagonalButton.displayName = "DiagonalButton";

export { DiagonalButton };
