/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":       "#714B67",
        "secondary":     "#00A09D",
        "background":    "#F8F9FA",
        "surface":       "#FFFFFF",
        "on-surface":    "#1e1b1d",
        "outline":       "#80747a",
        "outline-variant": "#d1c3ca",
        "surface-container-low": "#faf1f4",
        "surface-container-high": "#efe6e9",
        "brand-plum":    "#714B67",
        "sidebar-bg":    "#faf1f4",
      },
      fontFamily: {
        sans:  ["Noto Sans", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
