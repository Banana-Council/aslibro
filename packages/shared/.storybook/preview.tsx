import { ThemeProvider } from 'styled-components'

import type { Preview, StoryFn } from '@storybook/react'
import React from 'react'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const withThemeProvider = (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
)

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
