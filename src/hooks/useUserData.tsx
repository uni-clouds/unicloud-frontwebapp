import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const useUserData = () => {
  const context = useContext(UserContext)
  return context
}
