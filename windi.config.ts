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
      },
    },
  },
});