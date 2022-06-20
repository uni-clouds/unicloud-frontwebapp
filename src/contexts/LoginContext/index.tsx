import { createContext, useEffect, useState } from 'react'
import { AuthProviderProps, UserType, ContextType } from './types'
import {
  LoginRequest,
  refreshToken,
  removeUserLocalStorage,
  setUserLocalStorage
} from './util'
import { parseCookies } from 'nookies'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export const AuthContext = createContext<ContextType>({} as ContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | null>()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  //verifica e atualiza o state na inicializacão

  const cookie = parseCookies()
  useEffect(() => {
    setLoading(true)

    if (cookie.token) {
      setUser(cookie)
      setAuthenticated(true)
      setLoading(false)
      refreshToken(cookie.refresh)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.access, email }
    api.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
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
