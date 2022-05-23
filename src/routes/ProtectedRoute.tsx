import { Navigate } from 'react-router-dom'
import { parseCookies } from 'nookies'
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const cookies = parseCookies()
  const auth = useAuth()

  console.log('tenho user no cookies?', cookies.hasOwnProperty('user'))
  console.log('authenticated?', auth.authenticated)
  //if loading...
  if (!cookies.hasOwnProperty('user')) {
    return <Navigate to='/auth' />
  }
  return children
}

export default ProtectedRoute
