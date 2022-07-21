import { OutlineButtonProps } from './types'

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  onclick,
  name,
  fullWidth
}) => {
  return (
    <button
      type='button'
      onClick={onclick}
      role={name}
      className={`h-14 ${
        fullWidth ? 'w-44' : ' w-36'
      } py-2.5 px-6 font-medium text-brand-600 dark:text-base-100 dark:border-zinc-600 dark:hover:bg-zinc-600 capitalize flex items-center gap-2 justify-center border-2 rounded-lg border-brand-700 hover:bg-brand-600 hover:text-base-100 focus:outline-brand-800 focus:ring-offset-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors delay-75`}
    >
      {children}
    </button>
  )
}
