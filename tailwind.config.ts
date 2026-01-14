import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(270deg, #0a1a33, #0b1d38, #0c203e, #0d2343)",
        "orange-gradient": "linear-gradient(345deg, #f55e07, #ff9913)",
        "blue-gradient":
          "radial-gradient(circle at 120% 50%, #0d284f, #10305b, #123966, #154272, #154272, #123966, #10305b, #0d284f)",
        "blue-btn-gradient":
          "linear-gradient(315deg, #054ba6, #0a54ad, #0f5eb5, #1468bc, #1a72c3, #207cca, #2786d2, #2e91d9)",
        "service-bg":
          "radial-gradient(circle at 50% -500%, #051021, #213a54, #051021)",
        "service-bg-light":
          "linear-gradient(75deg, #091e3d, #133560, #215182, #133560, #091e3d)",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
