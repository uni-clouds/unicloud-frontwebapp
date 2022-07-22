import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useTranslation } from 'react-i18next'
import { InputProps } from '../Elements/Inputs/types'

const InputField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { accept, placeholder, label, type, error, ...rest },
  ref
) => {
  const { t: translate } = useTranslation()
  return (
    <>
      <label
        aria-label={`input ${label}`}
        className='font-bold '
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        role='textbox'
        aria-labelledby={label}
        accept={accept}
        {...rest}
        ref={ref}
        id={label}
        className={`peer-relative py-3 px-4 dark:placeholder:bg-transparent placeholder:text-base-300 rounded-md border border-light-200 dark:border-neutral-700 placeholder-neutral-50 dark:placeholder-zinc-300 bg-transparent focus:ring-1 focus:outline-none focus:ring-offset ${
          error
            ? 'focus:border-rose-400 focus:ring-rose-400 focus:ring-offset-red-custom'
            : 'focus:border-brand-700 focus:ring-brand-700 focus:ring-offset-brand-600'
        }`}
      />
      <p
        role='alert'
        className={`text-red-custom text-xs py-1.5 peer-absolute inset-x-0 -bottom-7 transition-all delay-75 ease-in ${
          error ? 'visible' : 'invisible'
        }`}
      >
        {translate(error?.message)}
      </p>
    </>
  )
}
export const Input = forwardRef(InputField)
