import { createContext, useEffect, useState } from 'react'
import { AuthProviderProps, UserType, ContextType } from './types'
import {
  getTokenLocalStorage,
  LoginRequest,
  removeUserLocalStorage,
  setUserLocalStorage
} from './util'
import { setCookie, parseCookies } from 'nookies'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext<ContextType>({} as ContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | null>()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  //verifica e atualiza o state na inicializacão

  useEffect(() => {
    setLoading(true)

    const cookie = parseCookies()
    if (cookie.hasOwnProperty('user')) {
      setUser(cookie)
      setAuthenticated(true)
      setLoading(false)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.access, email }

    if (payload) {
      navigate('/')
    }

    setUser(payload)
    setUserLocalStorage(payload)
    setAuthenticated(true)
  }

  function logout() {
    setUser(null)
    removeUserLocalStorage()
    setAuthenticated(false)
    navigate('/auth')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: authenticated, ...user, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
