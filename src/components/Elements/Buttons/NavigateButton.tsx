import { NavigateButtonProps } from './types'

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  onclick,
  text
}) => {
  return (
    <button
      className='py-4 bg-brand-600 px-10 text-slate-100 font-semibold text-lg rounded-2xl border-brand-800 hover:bg-brand-700 focus:outline-brand-800 focus:ring-offset-brand-800 focus:ring-1 focus:ring-brand-800'
      type='button'
      onClick={onclick}
    >
      {text}
    </button>
  )
}
