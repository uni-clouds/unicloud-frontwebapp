import { AvatarProps } from './types'
import { AvatarFallback } from '../Elements/AvatarFallback'
import { AvatarName } from '../Elements/AvatarName'

export const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  const getInitials = []
  getInitials.push(firstName?.charAt(0))
  getInitials.push(lastName?.charAt(0))
  const initials = getInitials?.join(' ')

  if (firstName?.length !== 0) {
    return <AvatarName name={initials} />
  }

  return <AvatarFallback />
}
