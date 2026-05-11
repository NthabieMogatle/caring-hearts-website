import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0E0E10",
        gold: {
          DEFAULT: "#C9A35B",
          50: "#FBF7EE",
          100: "#F2E7CB",
          200: "#E6D29B",
          300: "#D8BC6E",
          400: "#C9A35B",
          500: "#B58B3F",
          600: "#8E6B2E",
          700: "#6A501F",
        },
        cream: "#FAF6EF",
        heart: "#C8262C",
        muted: "#4A4A4A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        script: ["var(--font-script)", "Great Vibes", "cursive"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wordmark: "0.32em",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(14, 14, 16, 0.18)",
        card: "0 6px 24px -10px rgba(14, 14, 16, 0.15)",
      },
      borderRadius: {
        DEFAULT: "14px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out both",
        "fade-in": "fadeIn 700ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
