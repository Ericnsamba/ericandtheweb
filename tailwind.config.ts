import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        sans: ['var(--font-inter)'],
      },
      colors: {
        background: "#ECEBEB",
        foreground: "var(--background)",
        black: "#212322",
        coral: "#F27851",
        grey_1: "#8B8C8E",
        blend_dark: "#CBC8C9"
      },
    },
  },
  plugins: [],
};
export default config;
