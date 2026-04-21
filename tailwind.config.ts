import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OKX corporate palette
        okx: {
          bg: "#000000",
          surface: "#0A0A0A",
          card: "#111111",
          border: "#1F1F1F",
          borderHi: "#2A2A2A",
          text: "#FAFAFA",
          muted: "#8A8A8A",
          dim: "#6B6B6B",
          blue: "#1F4DFF",
          blueSoft: "#3D66FF",
          green: "#0ECB81",
          red: "#F6465D",
          accent: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
