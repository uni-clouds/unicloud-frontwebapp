import { useContext } from 'react'
import { AuthContext } from '../contexts/LoginContext'

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}
