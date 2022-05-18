import { SubmitButtonProps } from './types'

// todo criar spinner de loading no text

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type='submit'
      className='w-100 text-base bg-brand-700 px-6 py-2.5 text-neutral-50 font-bold leading-tight rounded-md border-brand-700'
    >
      {text}
    </button>
  )
}
