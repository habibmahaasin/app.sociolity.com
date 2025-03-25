const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        "sociolity-light": {
          extend: "light",
          colors: {
            primary: {
              50: "#ebfffd",
              100: "#ccfffe",
              200: "#a0ffff",
              300: "#5efcff",
              400: "#16effa",
              500: "#00d2e0",
              600: "#00a7bc",
              700: "#068498",
              800: "#0f6a7b",
              900: "#115768",
              950: "#032730",
              DEFAULT: "#032730",
            },
            secondary: {
              50: "#ebfef5",
              100: "#cffce6",
              200: "#a3f7d2",
              300: "#68edbb",
              400: "#48e0ac",
              500: "#07c288",
              600: "#009d70",
              700: "#007e5d",
              800: "#01644a",
              900: "#02523f",
              950: "#002e24",
              DEFAULT: "#48E0AC",
            },
            focus: "#48E0AC",
          },
        },
      },
    }),
  ],
  darkMode: "class",
};
