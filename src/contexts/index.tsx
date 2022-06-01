import { DecodeTokenContextProvider } from './DecodeTokenContext'
import { AuthProvider } from './LoginContext'
import { AuthProviderProps } from './LoginContext/types'
import { UserContextProvider } from './UserContext'

const GlobalContext: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserContextProvider>
          <DecodeTokenContextProvider>{children}</DecodeTokenContextProvider>
        </UserContextProvider>
      </AuthProvider>
    </>
  )
}

export default GlobalContext
