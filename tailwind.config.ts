import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        duna: {
          primary: "#E2725B", // Arcilla/Terracota
          secondary: "#F4EBD0", // Arena
          accent: "#2D3436", // Carbón
        },
      },
    },
  },
  plugins: [],
};
export default config;
