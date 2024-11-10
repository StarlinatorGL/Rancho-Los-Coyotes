import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        'heroMont': '#592D2D',
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      Amithen: ["Amithen", "sans-serif"],
      Pockota_bold: ["Pockota-Bold"],
      Montserrat: ["Montserrat", "sans-serif"],
      Montserrat_SemiBold: ["Montserrat-SemiBold"],
      Pockota_Boldltalic: ["Pockota-bold"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
