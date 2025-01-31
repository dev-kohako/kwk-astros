import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        "outfit": 'Outfit, sans-serif'
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui({
    prefix: "heroui", // prefix for theme variables
    addCommonColors: false, // override common colors
    defaultTheme: "light", // default theme
    defaultExtendTheme: "light", // default extended theme
    layout: {}, // global layout tokens
    themes: {
      light: {
        layout: {}, // layout tokens specific to light theme
        colors: {
          primary: "#3498db", // custom primary color
          secondary: "#e4e4e7", // custom secondary color
          background: "#e4e4e7", // background color for light theme
          text: "#18181b", // text color for light theme
          accent: "#e74c3c", // accent color
        },
      },
      dark: {
        layout: {}, // layout tokens specific to dark theme
        colors: {
          primary: "#000", // custom primary color for dark theme
          secondary: "#9b59b6", // custom secondary color
          background: "#18181b", // background color for dark theme
          text: "#ffffff", // text color for dark theme
          accent: "#e67e22", // accent color
        },
      },
    },
  }),],
};
