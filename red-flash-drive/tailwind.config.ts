import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#04060c",
        panel: "#080c16",
        midnight: "#0a1124",
        steel: "#111a30",
        accent: {
          DEFAULT: "#2563eb",
          soft: "#60a5fa",
        },
        crimson: "#dc2626",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(37, 99, 235, 0.45)",
        "glow-red": "0 0 60px -15px rgba(220, 38, 38, 0.45)",
      },
      maxWidth: {
        script: "46rem",
      },
    },
  },
  plugins: [],
};

export default config;
