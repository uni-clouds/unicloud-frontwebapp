import { DecodeTokenContextProvider } from './DecodeTokenContext'
import { AuthProvider } from './LoginContext'
import { AuthProviderProps } from './LoginContext/types'
import { UserContextProvider } from './UserContext'

const GlobalContext: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <DecodeTokenContextProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </DecodeTokenContextProvider>
      </AuthProvider>
    </>
  )
}

export default GlobalContext
