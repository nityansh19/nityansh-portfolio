import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08090b",
        "bg-elev": "#0e0f12",
        "bg-elev-2": "#141519",
        ink: "#edeef2",
        "ink-dim": "#8b8e97",
        "ink-faint": "#4c4f57",
        accent: "#5b6ef5",
        "accent-2": "#8b6ef5",
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
