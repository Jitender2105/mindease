import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    './src/**/*.{html,js,ts,jsx,tsx}', // 
    
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "#e11d48", // Custom secondary color (Red)
        accent: "#10b981", // Custom accent color (Green)
        border: "oklch(var(--border) / <alpha-value>)",
        muted: "#f5f5f5", // Soft color for background or borders
        ring: "oklch(var(--ring) / <alpha-value>)",
      },
      spacing: {
        // Custom spacing
        128: "32rem", // Custom spacing (8rem = 128)
        144: "36rem", // Custom spacing (9rem = 144)
        '2': '0.5rem', 
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
      fontSize: {
        'sm': '0.875rem', // Again, this is default, but you can modify it
      },
    },
  },
  plugins: [],
};

export default config;

