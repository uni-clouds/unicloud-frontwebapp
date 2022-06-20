import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Input } from './LoginInput'
import { LoginInputProps } from './types'

const EmailInput: ForwardRefRenderFunction<
  HTMLInputElement,
  LoginInputProps
> = ({ error, label, placeholder, type, ...rest }, ref) => {
  return (
    <div className='group flex flex-col mb-6 relative gap-3.5 mt-3'>
      <Input
        placeholder={placeholder}
        label={label}
        type={type}
        error={error}
        {...rest}
        ref={ref}
      />
    </div>
  )
}

export const EmailField = forwardRef(EmailInput)
