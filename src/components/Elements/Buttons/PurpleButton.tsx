import { PurpleButtonProps } from './types'

export const PurpleButton: React.FC<PurpleButtonProps> = ({
  children,
  onclick,
  name
}) => {
  return (
    <button
      type='button'
      onClick={onclick}
      role={name}
      className='py-2.5 px-6 font-medium text-zinc-50 bg-brand-600 capitalize flex items-center gap-2 justify-center border-0 rounded-lg border-brand-800 hover:bg-brand-700 focus:outline-brand-800 focus:ring-offset-brand-800 focus:ring-1 focus:ring-brand-800'
    >
      {children}
    </button>
  )
}
