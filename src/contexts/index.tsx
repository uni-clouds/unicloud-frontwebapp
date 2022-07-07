import { AuthProvider } from './LoginContext'
import { AuthProviderProps } from './LoginContext/types'
import { ThemeContextProvider } from './ThemeContext'

const GlobalContext: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
