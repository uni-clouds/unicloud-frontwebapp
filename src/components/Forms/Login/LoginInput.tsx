import { forwardRef, ForwardRefRenderFunction } from 'react'
import { LoginInputProps } from './types'

const LoginInput: ForwardRefRenderFunction<
  HTMLInputElement,
  LoginInputProps
> = ({ placeholder, label, type, error, ...rest }, ref) => {
  return (
    <div className='group flex flex-col mb-5'>
      <label
        aria-label={`input ${label}`}
        className='font-bold mb-2'
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
            ? 'focus:border-red-custom focus:ring-red-custom focus:ring-offset-red-custom'
            : 'focus:border-brand-800 focus:ring-brand-800 focus:ring-offset-brand-600'
        }`}
      />
      <p
        className={`text-red-custom text-xs py-1.5 ${
          error ? 'visible' : 'invisible'
        }`}
      >
        {error?.message}
      </p>
    </div>
  )
}
export const Input = forwardRef(LoginInput)
