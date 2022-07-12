import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useTranslation } from 'react-i18next'
import MaskedInput from 'react-text-mask'
import { InputProps } from './types'

const PhoneField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, disabled, ...rest },
  ref
) => {
  const { t: translate } = useTranslation()
  return (
    <>
      <label
        aria-label={`input-phone`}
        className='font-bold '
        htmlFor='Telefone'
      >
        {translate('phone')}
      </label>
      <MaskedInput
        type='phone'
        placeholder={translate('phone-placeholder')}
        guide
        id='phone'
        disabled={disabled}
        role='Telefone'
        className={`form-input peer-relative py-3 px-4 dark:placeholder:bg-transparent placeholder:text-base-300 rounded-md border border-light-200 dark:border-neutral-700 placeholder-neutral-50 dark:placeholder-zinc-300 bg-transparent focus:ring-1 focus:outline-none focus:ring-offset ${
          error
            ? 'focus:border-rose-400 focus:ring-rose-400 focus:ring-offset-red-custom'
            : 'focus:border-brand-700 focus:ring-brand-700 focus:ring-offset-brand-600'
        }`}
        mask={[
          '(',
          /[1-9]/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ]}
        {...rest}
      />
      <p
        className={`text-red-custom text-xs py-1.5 peer-absolute inset-x-0 -bottom-7 transition-all delay-75 ease-in ${
          error ? 'visible' : 'invisible'
        }`}
      >
        {error?.message}
      </p>
    </>
  )
}

export const PhoneInput = forwardRef(PhoneField)
