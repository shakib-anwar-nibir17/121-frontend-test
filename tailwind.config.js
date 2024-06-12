import aspectPlugin from "@tailwindcss/aspect-ratio";
import containerPlugin from "@tailwindcss/container-queries";
import scrollbar from "tailwind-scrollbar";
import animatePlugin from "tailwindcss-animate";
import { tailwindConfigs } from "./lib/tailwindConfigPlugin";
import colorThemes from "./lib/themes.json";
import("tailwindcss").Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      colors: {
        main: colorThemes.main.primary,
        ocean: colorThemes.ocean.primary,
        rainforest: colorThemes.rainforest.primary,
        candy: colorThemes.candy.primary,
      },
    },
  },

  plugins: [
    animatePlugin,
    aspectPlugin,
    scrollbar,
    containerPlugin,
    tailwindConfigs({ colorThemes }),
    require("@tailwindcss/typography"),
  ],
};
