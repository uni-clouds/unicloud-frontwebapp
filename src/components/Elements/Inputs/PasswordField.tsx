import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { VisibilityIcon } from '../../Elements/VisibilityIcon'
import { Input } from './Input'
import { InputProps } from './types'

const PasswordInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, error, label, placeholder, isVisible, showVisibilityIcon, ...rest },
  ref
) => {
  const { t } = useTranslation()
  return (
    <div className='group flex flex-col mb-7 relative gap-3.5'>
      <Input
        placeholder={placeholder}
        label={label}
        type={type}
        error={error}
        {...rest}
        ref={ref}
      />
      <label className='absolute inset-y-0 right-0 text-xs dark:text-brand-500 dark:hover:text-brand-600 text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out pointer-events-none'>
        <Link className='pointer-events-auto p-2' to={'reset'}>
          {t('password-forgot')}
        </Link>
      </label>
      <label
        className='absolute inset-y-[3.5rem] right-2.5'
        onClick={showVisibilityIcon}
      >
        {<VisibilityIcon isVisible={isVisible} isError={!!error} />}
      </label>
    </div>
  )
}

export const PasswordField = forwardRef(PasswordInput)
