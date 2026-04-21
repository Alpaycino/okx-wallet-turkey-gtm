import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alpay × OKX Wallet palette — black base, bright Alpay green accent
        okx: {
          bg: "#000000",
          surface: "#0A0A0A",
          card: "#0E0E0E",
          border: "#1F1F1F",
          borderHi: "#2A2A2A",
          text: "#FAFAFA",
          muted: "#8A8A8A",
          dim: "#6B6B6B",
          // `blue` tokens are kept as aliases of the Alpay green so any legacy
          // `text-okx-blue` references automatically adopt the new brand color.
          blue: "#9EEB2E",
          blueSoft: "#B9F25A",
          green: "#9EEB2E",
          greenDeep: "#7ACB18",
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
