import { Navigate } from 'react-router-dom'
import { parseCookies } from 'nookies'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const cookies = parseCookies()

  //if loading...

  if (
    cookies.token !== undefined &&
    cookies.token !== null &&
    cookies.token !== ''
  ) {
    return children
  }
  return <Navigate to='/auth' replace={true} />
}

export default ProtectedRoute
