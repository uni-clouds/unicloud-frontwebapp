import { DecodeTokenContextProvider } from './DecodeTokenContext'
import { AuthProvider } from './LoginContext'
import { AuthProviderProps } from './LoginContext/types'
import { ThemeContextProvider } from './ThemeContext'
import { UserContextProvider } from './UserContext'

const GlobalContext: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <UserContextProvider>
          <DecodeTokenContextProvider>{children}</DecodeTokenContextProvider>
        </UserContextProvider>
      </AuthProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
