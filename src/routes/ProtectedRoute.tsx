import { Navigate } from 'react-router-dom'
import { parseCookies } from 'nookies'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const cookies = parseCookies()

  //if loading...
  if (!cookies.hasOwnProperty('user')) {
    return <Navigate to='/auth' />
  }
  return children
}

export default ProtectedRoute
