import { AvatarFallback } from './AvatarFallback'

export const Avatar: React.FC = () => {
  return (
    <>
      <img src='' alt='user avatar' />
      <AvatarFallback />
    </>
  )
}
