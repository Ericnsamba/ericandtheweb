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
        Lace_Veil: "#ECEBEB",
        black: "#161616",
        coral: "#F27851",
        grey_1: "#8B8C8E",
        grey_2: "#555555",
        grey_4: "#212322",
        coral_blend: "#06739A",
        blend_dark: "#CBC8C9"
      },
    },
  },
  plugins: [],
};
export default config;
