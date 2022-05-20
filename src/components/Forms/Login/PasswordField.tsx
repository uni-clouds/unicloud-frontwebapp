import { forwardRef, ForwardRefRenderFunction } from 'react'
import { VisibilityIcon } from '../../Elements/VisibilityIcon'
import { Input } from './LoginInput'
import { LoginInputProps } from './types'

const PasswordInput: ForwardRefRenderFunction<
  HTMLInputElement,
  LoginInputProps
> = (
  { type, error, label, placeholder, isVisible, showVisibilityIcon, ...rest },
  ref
) => {
  return (
    <div className='group flex flex-col mb-6 relative gap-3.5'>
      <Input
        placeholder={placeholder}
        label={label}
        type={type}
        error={error}
        {...rest}
        ref={ref}
      />
      <label onClick={showVisibilityIcon}>
        {<VisibilityIcon isVisible={isVisible} />}
      </label>
    </div>
  )
}

export const PasswordField = forwardRef(PasswordInput)
