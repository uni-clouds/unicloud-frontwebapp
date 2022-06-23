import { SubmitButtonProps } from './types'

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  isDisabled,
  isLogin,
  isForm
}) => {
  return (
    <button
      type='submit'
      className={`grid place-content-center text-base bg-brand-600 py-2.5 text-zinc-100  ${
        isLogin
          ? 'w-full font-bold uppercase px-6 '
          : isForm
          ? 'w-54 h-14 font-medium capitalize px-14'
          : 'w-54 h-14 font-medium normal-case px-6 '
      }
       leading-tight rounded-lg border-brand-600  hover:bg-brand-700 transition-colors hover:ease-in-out focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-brand-700 focus:ring-brand-700 disabled:hover:bg-brand-700 disabled:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
