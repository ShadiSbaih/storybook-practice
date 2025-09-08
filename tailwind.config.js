/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        danger: colors.red,
        success: colors.green,
        warning: colors.yellow,
        info: colors.cyan,
        light: colors.gray,
        dark: colors.slate,
      },
    },
  },
  plugins: [],
}

