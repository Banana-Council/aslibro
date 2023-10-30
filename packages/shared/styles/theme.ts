const theme = {
  breakpoints: {},
  colors: {},
  font: {
    families: {},
    lineHeights: {},
    sizes: {},
    weights: {},
  },
  shadows: {},
} as const

export type Theme = typeof theme

export default theme
