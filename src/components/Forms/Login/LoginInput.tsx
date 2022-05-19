import { forwardRef, ForwardRefRenderFunction } from 'react'
import { LoginInputProps } from './types'

const LoginInput: ForwardRefRenderFunction<
  HTMLInputElement,
  LoginInputProps
> = ({ placeholder, label, type, error, ...rest }, ref) => {
  return (
    <div className='group flex flex-col mb-6 relative gap-3.5'>
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
        role={label}
        {...rest}
        ref={ref}
        id={label}
        className={`py-3 px-4 placeholder:text-base-300 rounded-md border border-light-200 placeholder-neutral-50 focus:placeholder-transparent bg-transparent focus:ring-1 focus:outline-none focus:ring-offset-1 ${
          error
            ? 'focus-within:border-red-custom focus-within:ring-red-custom focus-within:ring-offset-rose-400'
            : 'focus-within:border-brand-800 focus-within:ring-brand-800 focus-within:ring-offset-brand-600'
        }`}
      />
      <p
        className={`text-red-custom text-xs py-1.5 absolute inset-x-0 -bottom-7 ${
          error ? 'visible' : 'invisible'
        }`}
      >
        {error?.message}
      </p>
    </div>
  )
}
export const Input = forwardRef(LoginInput)
