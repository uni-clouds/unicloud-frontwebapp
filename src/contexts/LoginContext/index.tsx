import { createContext, useEffect, useState } from 'react'
import { AuthProviderProps, UserType, ContextType } from './types'
import { getTokenLocalStorage, LoginRequest, setUserLocalStorage } from './util'

export const AuthContext = createContext<ContextType>({} as ContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | null>()

  //verificar e aatulizar o state na inicializacao

  useEffect(() => {
    const user = getTokenLocalStorage()
    user ? setUser(user) : undefined
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.token, email }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
