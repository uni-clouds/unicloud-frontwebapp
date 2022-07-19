import { DefaultTheme, CustomTheme } from 'styled-components'
import light from './light'
import dark from './dark'

export type Theme = typeof defaultTheme

const defaultTheme = {
  font: "'DM Sans', sans-serif",
  fontSize: {
    xsm: '0.625em', //10px
    sm: '0.875em', //14px
    md: '1em', //16px
    lg: '1.5em', //24px
    xl: '2rem', //32px
    big: '3rem', //48px
    huge: '4rem' //64px
  },
  fontWeight: {
    regular: 400,
    semibold: 500,
    bold: 700
  },
  media: {
    sm: 'only screen and @media(max-width: 425px)',
    md: 'only screen and @media(max-width: 768px)',
    lg: '@media(max-width: 1024px)',
    xl: '@media(min-width: 1280px)'
  },
  radius: {
    sm: '8px',
    normal: '16px',
    md: '25px',
    full: '50%'
  },
  transition: 'all 0.2s ease-in-out'
} as const

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme }
}
export { combineTheme, dark, light }
