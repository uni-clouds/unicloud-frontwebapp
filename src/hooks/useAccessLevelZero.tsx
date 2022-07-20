import { useCanAccess } from './useCanAccess'

export const useAccessLevelZero = (role: string) => {
  const accessLevelZero = useCanAccess({
    role: ['root']
  })

  if (role === 'root') {
    return accessLevelZero
  }
  return false
}
