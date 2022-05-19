import { SubmitButtonProps } from './types'

// todo criar spinner de loading no text

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type='submit'
      className='w-full text-base bg-brand-600 px-6 py-2.5 text-neutral-50 font-bold leading-tight rounded-md border-brand-600 uppercase hover:bg-brand-700 transition-colors hover:ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-600 focus:ring-brand-600 disabled:opacity-50 disabled:hover:bg-brand-600 disabled:cursor-not-allowed'
    >
      {text}
    </button>
  )
}
