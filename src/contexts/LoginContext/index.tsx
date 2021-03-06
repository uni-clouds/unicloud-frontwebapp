import { createContext, useEffect, useState } from 'react'
import { AuthProviderProps, UserType, ContextType } from './types'
import {
  checkToken,
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
  const navigate = useNavigate()

  const cookie = parseCookies()
  useEffect(() => {
    if (cookie.token && cookie.token !== undefined) {
      setUser(cookie)
      setAuthenticated(true)
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
