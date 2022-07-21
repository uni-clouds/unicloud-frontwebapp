import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectInputProps } from './types'

import * as Styled from './styles'
import { checkTypeValue } from '../../util/checkType'

const SelectInput: ForwardRefRenderFunction<
  HTMLInputElement,
  SelectInputProps
> = ({ label, error, options, ...rest }, ref) => {
  const { t: translate } = useTranslation()
  return (
    <Styled.SelectBox>
      <Styled.SelectLabel aria-label={`input ${label}`} htmlFor={label}>
        {label}
      </Styled.SelectLabel>
      <Styled.Select
        name='select'
        role='listbox'
        id={label}
        aria-labelledby={label}
        {...rest}
        className={`peer-relative py-3 px-4 dark:placeholder:bg-transparent placeholder:text-base-300 rounded-md border border-light-200 dark:border-neutral-700 placeholder-neutral-50 dark:placeholder-zinc-300 bg-transparent focus:ring-1 focus:outline-none focus:ring-offset ${
          error
            ? 'focus:border-rose-400 focus:ring-rose-400 focus:ring-offset-red-custom'
            : 'focus:border-brand-700 focus:ring-brand-700 focus:ring-offset-brand-600'
        }`}
      >
        {options.map((option) => (
          <Styled.SelectOption
            value={checkTypeValue(option.value)}
            key={option.value}
            defaultValue=' '
          >
            {option.name}
          </Styled.SelectOption>
        ))}
      </Styled.Select>
      <p
        role='alert'
        className={`text-red-custom text-xs py-1.5 peer-absolute inset-x-0 -bottom-7 transition-all delay-75 ease-in ${
          error ? 'visible' : 'invisible'
        }`}
      >
        {translate(error?.message)}
      </p>
    </Styled.SelectBox>
  )
}
export const Select = forwardRef(SelectInput)
