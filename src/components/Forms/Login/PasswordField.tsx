import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Link } from 'react-router-dom'
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
      <Link
        to={'auth-reset'}
        className='absolute inset-y-0 right-0 text-xs text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out'
      >
        Esqueceu a senha?
      </Link>
      <label
        className='absolute inset-y-[3.5rem] right-2.5'
        onClick={showVisibilityIcon}
      >
        {<VisibilityIcon isVisible={isVisible} />}
      </label>
    </div>
  )
}

export const PasswordField = forwardRef(PasswordInput)
