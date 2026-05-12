import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
          subtle: "var(--ink-subtle)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          raised: "var(--paper-raised)",
        },
        rule: "var(--rule)",
        navy: {
          DEFAULT: "var(--navy)",
          deep: "var(--navy-deep)",
        },
        cyan: "var(--cyan)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
          soft: "var(--accent-soft)",
        },
        signal: "var(--signal)",
      },
      fontFamily: {
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        h1: ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        h4: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        lead: ["1.25rem", { lineHeight: "1.55", letterSpacing: "-0.005em" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
        mono: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,.04), 0 8px 24px -12px rgba(11,18,32,.10)",
      },
      maxWidth: {
        prose: "82ch",
        page: "1200px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(.2,.6,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
