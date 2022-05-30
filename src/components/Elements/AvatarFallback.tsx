import { BsPerson } from 'react-icons/bs'

export const AvatarFallback: React.FC = () => {
  return (
    <div
      role='icon'
      className='bg-brand-600 rounded-full w-8 h-8 text-zinc-200 grid place-content-center ring ring-brand-300 ring-offset-brand-600 ring-offset-2'
    >
      <BsPerson />
    </div>
  )
}
