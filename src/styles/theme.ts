export const theme = {
  colors: {
    primary: "#1557A6",
    primaryDark: "#0B2D4D",
    secondary: "#2F80C9",
    accent: "#4FA3E3",

    background: "#F5F9FC",
    backgroundAlt: "#EAF3FA",

    white: "#FFFFFF",
    black: "#111111",

    text: "#17212B",
    textMuted: "#657482",

    border: "#D9E5EF",
  },

  fonts: {
    heading: "var(--font-body)",
    body: "var(--font-body)",
  },

  container: {
    maxWidth: "1320px",
    padding: "32px",
  },

  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "1024px",
    large: "1280px",
  },

  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "40px",
    xl: "64px",
    xxl: "96px",
  },

  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    pill: "999px",
  },
} as const;