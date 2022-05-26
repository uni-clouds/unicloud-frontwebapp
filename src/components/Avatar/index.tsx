import { AvatarFallback } from '../Elements/AvatarFallback'
import { AvatarProps } from './types'
import { AvatarName } from '../Elements/AvatarName'
import { parseCookies } from 'nookies'

import sampleImage from '../../../public/assets/logo-light.png'
import { useState } from 'react'

//! alterar para imagem dinâmica vinda do backend

export const Avatar: React.FC<AvatarProps> = () => {
  const cookies = parseCookies()
  const username = cookies.user?.slice(0, 2)
  const [getLogo, setGetLogo] = useState(false)

  if (getLogo) {
    return (
      <div className='w-8 h-8 rounded-full text-zinc-200 grid place-content-center ring ring-brand-300 ring-offset-brand-600 ring-offset-2'>
        <img
          src='../../../public/assets/logo-light.png'
          alt='user avatar'
          role='avatar'
          width='50px'
          height='50px'
          className='w-auto'
        />
      </div>
    )
  }

  if (cookies.user?.length !== 0) {
    return <AvatarName name={username} />
  }

  return <AvatarFallback />
}
