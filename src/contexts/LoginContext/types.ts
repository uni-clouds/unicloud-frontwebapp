export interface UserType {
  email?: string
  password?: string
  token?: string
}

export interface ContextType extends UserType {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
  authenticated: boolean
}

export interface AuthProviderProps {
  children: JSX.Element
}
