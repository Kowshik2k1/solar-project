export const theme = {
  colors: {
    primary: "#174A35",
    primaryDark: "#103526",
    accent: "#F4C542",

    background: "#F8F8F3",
    backgroundAlt: "#EEF3EE",

    white: "#FFFFFF",
    black: "#111111",
    text: "#202522",
    textMuted: "#66706A",

    border: "#DDE4DE",
  },

  fonts: {
    heading: "var(--font-heading)",
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