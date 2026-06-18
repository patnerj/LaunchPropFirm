import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#7C6EF5", hover: "#8B7EF7" },
        secondary: { DEFAULT: "#10B981", hover: "#34D399" },
        "bg-dark": "#0B1220",
        "bg-dark-alt": "#0F1729",
        "txt": "#E8EEF7",
        "muted": "#8BA4C0",
        "bg-light": "#F8FAFC",
        "on-light": "#0B1220",
        "on-light-muted": "#475569",
        "border-subtle": "#243049",
        "border-light": "#E2E8F0",
        "footnote": "#5B7392",
      },
      maxWidth: {
        site: "1140px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "btn-primary": "0 8px 30px rgba(124,110,245,0.35)",
        "btn-primary-hover": "0 12px 36px rgba(124,110,245,0.5)",
        "card-light": "0 4px 20px rgba(15,23,42,0.06)",
        "card-own": "0 12px 36px rgba(16,185,129,0.18)",
        "card-featured": "0 20px 60px rgba(124,110,245,0.3)",
        "card-featured-hover": "0 28px 72px rgba(124,110,245,0.45)",
        "screenshot": "0 16px 48px rgba(0,0,0,0.4)",
        "hero-media": "0 24px 64px rgba(0,0,0,0.5)",
        "certificate": "0 32px 80px rgba(124,110,245,0.35)",
        "whatsapp": "0 8px 24px rgba(16,185,129,0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
