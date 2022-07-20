import { useCanAccess } from './useCanAccess'

export const useAccessLevelOne = (role: string[]) => {
  const accessLevelOne = useCanAccess({
    role: ['root', 'partner']
  })

  const canAccess = role.includes('root' || 'partner')
  if (!!canAccess) {
    return accessLevelOne
  }

  return false
}
