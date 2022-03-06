import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";
import typography from "windicss/plugin/typography";

export default defineConfig({
  darkMode: "class",
  plugins: [typography()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#315def",
        secondary: "#ec4899",
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
});