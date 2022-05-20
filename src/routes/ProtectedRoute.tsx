import { useAuth } from '../hooks/useAuth'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()

  if (!auth.token) {
    return <h1> sem acesso / redirect login</h1>
  }
  return children
}

export default ProtectedRoute
