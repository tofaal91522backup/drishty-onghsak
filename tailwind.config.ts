import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Drishti Brand Colors
        navy: {
          DEFAULT: "#0B1A2E",
          50: "#E8EDF4",
          100: "#C5D1E3",
          200: "#9EB2CC",
          300: "#7793B5",
          400: "#507499",
          500: "#2A557D",
          600: "#1D3D5A",
          700: "#142B41",
          800: "#0B1A2E",
          900: "#060D17",
        },
        amber: {
          DEFAULT: "#E8A838",
          50: "#FDF8EC",
          100: "#FAEDC9",
          200: "#F6DCA3",
          300: "#F1CB7D",
          400: "#EDB957",
          500: "#E8A838",
          600: "#D4912A",
          700: "#A97121",
          800: "#7E5319",
          900: "#533610",
        },
        teal: {
          DEFAULT: "#2A9D8F",
          50: "#E6F5F3",
          100: "#C0E7E2",
          200: "#95D7CF",
          300: "#6AC7BC",
          400: "#3FB7A9",
          500: "#2A9D8F",
          600: "#228178",
          700: "#1B665F",
          800: "#134A46",
          900: "#0C2F2D",
        },
        coral: {
          DEFAULT: "#E07A5F",
          50: "#FCF0ED",
          100: "#F7D9D1",
          200: "#F1BFB0",
          300: "#EBA590",
          400: "#E68B70",
          500: "#E07A5F",
          600: "#D45A3B",
          700: "#AD452C",
          800: "#823320",
          900: "#572214",
        },
        cream: {
          DEFAULT: "#FAF6F0",
          50: "#FFFFFF",
          100: "#FDFBF8",
          200: "#FAF6F0",
          300: "#F0E8DA",
          400: "#E6DAC4",
          500: "#DCCCAE",
          600: "#CABA92",
          700: "#B8A876",
          800: "#96885B",
          900: "#6E6343",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
  