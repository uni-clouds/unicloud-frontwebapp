import { AvatarFallback } from '../Elements/AvatarFallback'
import { AvatarProps } from './types'
import { AvatarName } from '../Elements/AvatarName'
import { parseCookies } from 'nookies'

//! alterar para imagem dinâmica vinda do backend

export const Avatar: React.FC<AvatarProps> = () => {
  const cookies = parseCookies()
  const username = cookies.user?.slice(0, 2)

  // if(){
  //   return <img
  //     src={sample}
  //     alt='user avatar'
  //     width='100'
  //     height='100'
  //     className='bg-brand-600 rounded-full w-8 h-8 text-zinc-200 grid place-content-center'
  //    />
  // }

  if (cookies.user?.length !== 0) {
    return <AvatarName name={username} />
  }

  return <AvatarFallback />
}
