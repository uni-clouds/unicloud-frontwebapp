import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormErrorMessage } from '../FormErrorMessage'
import { InputLabel } from '../InputLabel'
import { InputProps } from './types'
import * as Styled from './styles'

const InputField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    accept,
    placeholder,
    role,
    label,
    arias,
    id,
    htmlFor,
    type,
    error,
    ...rest
  },
  ref
) => {
  return (
    <Styled.Container>
      <InputLabel arias={arias} label={label} id={id} htmlFor={htmlFor} />
      <Styled.Input
        type={type}
        placeholder={placeholder}
        role={role}
        aria-labelledby={arias}
        accept={accept}
        error={!!error}
        {...rest}
        ref={ref}
        id={id}
      />
      <FormErrorMessage error={error} arias={arias} />
    </Styled.Container>
  )
}
export const Input = forwardRef(InputField)
