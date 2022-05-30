import { useState } from 'react'
import { AvatarProps } from './types'
import { AvatarFallback } from '../Elements/AvatarFallback'
import { AvatarName } from '../Elements/AvatarName'

import sampleImage from '../../../public/assets/logo-light.png'

//! alterar para imagem dinâmica vinda do backend

export const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  const [getLogo, setGetLogo] = useState(false)
  const getInitials = []
  getInitials.push(firstName?.charAt(0))
  getInitials.push(lastName?.charAt(0))
  const initials = getInitials?.join(' ')

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

  if (firstName?.length !== 0) {
    return <AvatarName name={initials} />
  }

  return <AvatarFallback />
}
