import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'


export const useToggleTheme = () => {
  const context = useContext(ThemeContext)
  return context
}
