// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#294946",
          light: "#3a6360",
        },
        secondary: {
          DEFAULT: "#4a837a",
          light: "#65a09a",
        },
        accent: {
          DEFAULT: "#fa9937",
          light: "#ffad5c",
        },
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
        serif: ["var(--font-montserrat)"],
        montserrat: ["var(--font-montserrat)"],
        raleway: ["var(--font-raleway)"],
      },
      fontWeight: {
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
