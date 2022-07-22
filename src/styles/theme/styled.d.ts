import 'styled-components'

//edit file

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    title: string
    colors: {
      black: string
      white: string
      background: string
      body: string
      primary: string
      secondary: string
      text: string
      title: string
      disabled: string
    }
    font: string
    fontSize: {
      xsm: string
      sm: string
      md: string
      lg: string
      xl: string
      big: string
      huge: string
    }
    fontWeight: {
      regular: number
      semibold: number
      bold: number
    }
    media: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    radius: {
      sm: string
      md: string
      pill: string
      full: string
    }
    transition: string
  }

  export interface CustomTheme {
    title: string
    colors: {
      black: string
      white: string
      background: string
      body: string
      primary: string
      secondary: string
      text: string
      title: string
      disabled: string
    }
  }
}
