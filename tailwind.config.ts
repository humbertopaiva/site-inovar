/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#294946",
        "primary-light": "#3a6360",
        secondary: "#4a837a",
        "secondary-light": "#65a09a",
        accent: "#fa9937",
        "accent-light": "#ffad5c",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
        serif: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};

export default config;
