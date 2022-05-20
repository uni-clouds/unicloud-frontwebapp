import { ReactNode, SetStateAction } from 'react'

export interface UserType {
  email?: string
  token?: string
}

export interface ContextType extends UserType {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface AuthProviderProps {
  children: JSX.Element
}
