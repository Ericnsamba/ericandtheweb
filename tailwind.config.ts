import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECEBEB",
        foreground: "var(--background)",
        black: "#212322",
        grey_1: "#8B8C8E",
      },
    },
  },
  plugins: [],
};
export default config;
