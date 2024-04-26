import { createStitches } from '@stitches/react'

export const { config, css, getCssText, globalCss, styled, keyframes, theme } =
  createStitches({
    theme: {
      colors: {
        white: '#fff',
        gray900: '#121214',
        gray800: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',
        purple700: '#7e22ce',

        green500: '#00875f',
        green300: '#00b37e',
      },
      fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  })
