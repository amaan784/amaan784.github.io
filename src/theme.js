// theme.js
// Minimal & typographic palette. Surfaces, borders and the accent live in CSS
// variables (see index.css, keyed on html[data-theme]); these objects carry the
// semantic *text* colors that components read inline via the `theme` prop.

export const darkTheme = {
  name: "dark",
  body: "#0E1013",
  text: "#EBEDF0",
  secondaryText: "#9AA1AD",
  expTxtColor: "#C3C9D2",
  highlight: "#88A4FF",
  dark: "#08090B",
  accent: "#88A4FF",
  accent2: "#88A4FF",
  accent3: "#88A4FF",
  imageHighlight: "#88A4FF",
  compImgHighlight: "#1A1E24",
  jacketColor: "#88A4FF",
  headerColor: "rgba(14,16,19,0.78)",
  splashBg: "#0E1013",
};

export const lightTheme = {
  name: "light",
  body: "#FDFDFC",
  text: "#16181D",
  secondaryText: "#565D68",
  expTxtColor: "#2C313A",
  highlight: "#27408B",
  dark: "#16181D",
  accent: "#27408B",
  accent2: "#27408B",
  accent3: "#27408B",
  imageHighlight: "#27408B",
  compImgHighlight: "#EFEFEA",
  jacketColor: "#27408B",
  headerColor: "rgba(253,253,252,0.82)",
  splashBg: "#FDFDFC",
};

// Default theme (kept for any back-compat import).
export const chosenTheme = lightTheme;
