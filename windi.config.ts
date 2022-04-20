import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  plugins: [
    typography(),
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      // xs: ["0.65rem", { lineHeight: "1.5" }],
      // sm: ["0.75rem", { lineHeight: "1.5" }],
      // md: ["0.85rem", { lineHeight: "1.5" }],
      // base: ["1rem", { lineHeight: "1.5" }],
      // lg: ["1.25rem", { lineHeight: "1.5" }],
      // xl: ["1.5rem", { lineHeight: "1.5" }],
      // "2xl": ["2rem", { lineHeight: "1.5" }],
      // "3xl": ["2.45rem", { lineHeight: "1.5" }],
      // "4xl": ["3rem", { lineHeight: "1.5" }],
      // "5xl": ["4rem", { lineHeight: "1.1" }],
      xs: ["0.512rem", { lineHeight: "1.5" }],
      sm: ["0.64rem", { lineHeight: "1.5" }],
      md: ["0.8rem", { lineHeight: "1.5" }],
      base: ["1rem", { lineHeight: "1.5" }],
      lg: ["1.25rem", { lineHeight: "1.5" }],
      xl: ["1.563rem", { lineHeight: "1.5" }],
      "2xl": ["1.953rem", { lineHeight: "1.5" }],
      "3xl": ["2.441rem", { lineHeight: "1.5" }],
      "4xl": ["3.052rem", { lineHeight: "1.5" }],
      "5xl": ["5rem", { lineHeight: "1.1" }],
    },
    extend: {
      spacing: {
        double: "200%",
      },
      colors: {
        primary: {
          600: "#5837CC",
          500: "#724CF9",
          400: "#8E6EFD",
        },
        secondary: {
          600: "#C11E71",
          500: "#FA198B",
          400: "#E373AC",
        },
        accent: {
          600: "#0ea061",
          500: "#3DDC97",
          400: "#66C49C",
        },
        tertiary: {
          600: "#d8913f",
          500: "#ECBA82",
          400: "#FFDFBC",
        },
        "dirty-white": {
          300: "#FCFAFA",
          400: "#EEEAFD",
        },
        "deep-black": {
          1000: "#141023",
          900: "#1A152E",
          800: "#242038",
          700: "#342E56",
          600: "#433C68",
          500: "#887DB5",
        },
      },
      fontFamily: {
        poppins: [
          "Poppins",
          "system-ui",
          "-apple-system",
          "sans-serif",
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        potion: [
          "Potion",
          "system-ui",
          "-apple-system",
          "sans-serif",
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        ebgaramond: [
          "EBGaramond",
          "system-ui",
          "-apple-system",
          "sans-serif",
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
      boxShadow: {
        primary: "0px 4px 20px 4px rgba(114, 76, 249, 0.35) ",
        secondary: "0 4px 20px 4px rgba(250, 25, 139, 0.35)",
      },
    },
  },
})
