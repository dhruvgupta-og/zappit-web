import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Zappit brand theme colors (extracted from official Zappit app)
        bg: "#0B132B",          // Deep midnight navy
        bg2: "#0E1A38",         // Alternate section navy
        bg3: "#131E3A",         // Card & surface navy
        surface: "#131E3A",
        surfaceHover: "#1A284D",
        // Primary brand amber-gold
        orange: {
          DEFAULT: "#FFC107",   // Zappit primary amber gold
          dark: "#FF9100",      // Zappit sunset amber orange
          light: "#FFD54F",
        },
        primary: {
          DEFAULT: "#FFC107",
          dark: "#FF9100",
          glow: "rgba(255,193,7,0.3)",
        },
        ink: {
          1: "#FFFFFF",
          2: "#9CA3AF",         // textMuted
          3: "#64748B",
        },
        line: "#1E293B",         // borderColor from Zappit theme
        glass: "rgba(19, 30, 58, 0.75)",
        // Semantic accents
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 90px -20px rgba(255,193,7,0.4)",
        amber: "0 10px 30px -8px rgba(255,193,7,0.45)",
        card: "0 12px 32px -4px rgba(0,0,0,0.45)",
      },
      borderRadius: {
        xl2: "22px",
        pill: "28px",
      },
    },
  },
  plugins: [],
};
export default config;
