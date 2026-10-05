/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        navy: {
          50: "#f5f8fb",
          100: "#e6edf5",
          200: "#c2d2e3",
          300: "#93abc6",
          400: "#5e7b9e",
          500: "#3d5a80",
          600: "#2a4262",
          700: "#1a2f4a",
          800: "#11243c",
          900: "#0a1c2e",
          950: "#061220",
        },
        cream: {
          50: "#fdfbf6",
          100: "#faf6ec",
          200: "#f5efe3",
          300: "#ebe2cd",
          400: "#d9ccae",
          500: "#c9c3b8",
          600: "#a9a296",
          700: "#7d7669",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      letterSpacing: {
        "widest-xl": "0.22em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};