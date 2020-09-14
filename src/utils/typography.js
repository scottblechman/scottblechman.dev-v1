import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Poppins",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  includeNormalize: false,
  bodyFontFamily: ["Open Sans", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '.cta': {
      fontFamily: ['\'Poppins\'', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontWeight: 600
    }
  })
})

export default typography