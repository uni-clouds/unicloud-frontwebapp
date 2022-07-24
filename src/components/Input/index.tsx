import { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputLabel } from '../InputLabel'
import { InputProps } from './types'
import * as Styled from './styles'
import { useTranslation } from 'react-i18next'

const InputField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { accept, placeholder, role, label, arias, id, type, error, ...rest },
  ref
) => {
  const { t: translate } = useTranslation()
  return (
    <Styled.Container>
      <InputLabel arias={arias} label={label} id={id}></InputLabel>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        role={role}
        aria-labelledby={arias}
        accept={accept}
        aria-invalid={error ? 'true' : 'false'}
        hasError={!!error}
        {...rest}
        ref={ref}
        id={id}
      />
      <Styled.Message
        error={Boolean(error)}
        role='alert'
        aria-errormessage={`input ${arias}`}
      >
        {translate(error?.message)}
      </Styled.Message>
    </Styled.Container>
  )
}
export const Input = forwardRef(InputField)
