import { createContext, useState, useMemo, ReactNode, useEffect} from "react"
import { createTheme,ThemeProvider  } from "@mui/material/styles"
import { ThemeContextType } from "./types"

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export function ThemeContextProvider({children}: {children:ReactNode}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
    const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))

      },
    }), [])

  useEffect(()=>{
     localStorage.setItem('theme', theme.palette.mode)
        if (theme.palette.mode === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
   }, [theme])


  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
  }
