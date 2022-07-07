import { CanAccessParams } from './types'
import { useAuth } from './useAuth'
import { useUserType } from './useUserType'

export const useCanAccess = ({ role }: CanAccessParams) => {
  const { authenticated } = useAuth()
  const { data } = useUserType()

  if (!authenticated) {
    return false
  }

  if (role) {
    const hasPermission = role.some((permission) => {
      return data?.type.includes(permission)
    })

    if (!hasPermission) return false
    return hasPermission
  }
  return false
}
