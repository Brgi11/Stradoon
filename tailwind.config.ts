import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#a13534",
        ivory: "#fffaf4",
        deepText: "#211a17"
      },
      boxShadow: {
        pill: "0 3px 12px rgba(161, 53, 52, 0.2)"
      },
      maxWidth: {
        proseElegant: "68ch"
      }
    }
  },
  plugins: []
};

export default config;
