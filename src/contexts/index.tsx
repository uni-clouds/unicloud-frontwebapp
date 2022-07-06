import { DecodeTokenContextProvider } from './DecodeTokenContext'
import { AuthProvider } from './LoginContext'
import { AuthProviderProps } from './LoginContext/types'
import { ThemeContextProvider } from './ThemeContext'

const GlobalContext: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <DecodeTokenContextProvider>{children}</DecodeTokenContextProvider>
      </AuthProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
