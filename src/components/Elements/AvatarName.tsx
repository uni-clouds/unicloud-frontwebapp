import { AvatarNameProps } from './types'

export const AvatarName: React.FC<AvatarNameProps> = ({ name }) => {
  return (
    <div
      role='icon'
      className='bg-brand-600 rounded-full w-8 h-8 text-zinc-200 grid place-content-center ring ring-brand-300 ring-offset-brand-600 ring-offset-2'
    >
      <p className='text-bold text-sm uppercase'>{name}</p>
    </div>
  )
}
