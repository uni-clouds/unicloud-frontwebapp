import { forwardRef, ForwardRefRenderFunction } from 'react'
import MaskedInput from 'react-text-mask'
import { Input } from './Input'
import { InputProps } from './types'

const PhoneField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest },
  ref
) => {
  return (
    <>
      <label
        aria-label={`input-phone`}
        className='font-bold '
        htmlFor='Telefone'
      >
        Telefone
      </label>
      <MaskedInput
        type='phone'
        placeholder='Telefone'
        guide
        id='phone'
        role='Telefone'
        className={`form-input peer-relative py-3 px-4 dark:placeholder:bg-transparent placeholder:text-base-300 rounded-md border border-light-200 dark:border-neutral-700 placeholder-neutral-50 dark:placeholder-zinc-300 bg-transparent focus:ring-1 focus:outline-none focus:ring-offset-1 ${
          error
            ? 'focus:border-rose-400 focus:ring-rose-400 focus:ring-offset-red-custom'
            : 'focus:border-brand-800 focus:ring-brand-800 focus:ring-offset-brand-600'
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