import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        background: "var(--background)", // Using CSS variables for background
        foreground: "var(--foreground)", // Using CSS variables for foreground
        primary: "#4f46e5", // Your primary color (Indigo)
        secondary: "#e11d48", // Custom secondary color (Red)
        accent: "#10b981", // Custom accent color (Green)
        border: "hsl(240, 5%, 84%)", // Custom border color
        muted: "#f5f5f5", // Soft color for background or borders
      },
      spacing: {
        // Custom spacing
        128: "32rem", // Custom spacing (8rem = 128)
        144: "36rem", // Custom spacing (9rem = 144)
      },
      borderRadius: {
        // Custom border radius for rounded elements
        xl: "1.5rem", // Extra-large border radius
        "2xl": "2rem", // Double extra-large radius
      },
      opacity: {
        // Custom opacity levels
        90: "0.9", // Custom opacity 90% for elements
        95: "0.95", // Custom opacity 95% for elements
      },
      ringColor: {
        // Custom ring colors
        primary: "#4f46e5", // Ring color to match your primary
        secondary: "#e11d48", // Ring color to match secondary
      },
      ringOpacity: {
        // Custom ring opacity
        50: "0.5", // 50% opacity
        75: "0.75", // 75% opacity
      },
    },
  },
  plugins: [],
};

export default config;
