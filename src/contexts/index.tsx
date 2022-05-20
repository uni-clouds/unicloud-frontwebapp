import { AuthProvider } from './LoginContext'
import { AuthProviderProps } from './LoginContext/types'

const GlobalContext: React.FC<AuthProviderProps> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default GlobalContext
