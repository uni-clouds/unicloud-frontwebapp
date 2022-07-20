import { Navigate } from 'react-router-dom'
import { useUserData } from '../hooks/useUserData'
import { parseCookies } from 'nookies'

interface PermissionRouterProps {
  children: JSX.Element
  permission: 'root' | 'partner'
}

export default function PermissionRoute(props: PermissionRouterProps) {
  const { children, permission } = props
  const { data: customerData } = useUserData()
  const type = customerData?.type
  const cookies = parseCookies()

  const userHasPermission = () => {
    if (permission === 'root' && type == 'root') return true
    if (permission === 'partner' && type === 'root') return true
    if (permission === 'partner' && type === 'partner') return true
    return false
  }

  const userIsLogged = () => {
    if (
      cookies.token !== undefined &&
      cookies.token !== null &&
      cookies.token !== ''
    )
      return true
    return false
  }

  if (userHasPermission && userIsLogged) {
    return children
  } else {
    return <Navigate to='/auth' replace={true} />
  }
}
