import { createContext, useState, useMemo, ReactNode, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ThemeContextType } from './types'

import { ThemeProvider as StyledProvider } from 'styled-components'
import { combineTheme, dark, light } from '../../styles/theme'

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>(localStorage.theme)
  const customTheme = combineTheme(light)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  useEffect(() => {
    if (
      theme.palette.mode === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StyledProvider theme={customTheme}>{children}</StyledProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
