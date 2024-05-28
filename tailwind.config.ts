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
        primary: "#15AABF",
        secondary: "var(--Secondary, #EACF41)",
        offWhiteBG: "#fefcf7",
        black_gray: "#333333",
        default_gray: "#777",
        medium_gray: "#555555",
        light_gray: "#ddd",
        light_primary: "#1BD8F2",
        light_secondary: "#B1F0F9",
        lighter_gray: "#EEE",
        dark_gray: "#AAAAAA",
      },
    },
  },
  plugins: [],
};
export default config;
