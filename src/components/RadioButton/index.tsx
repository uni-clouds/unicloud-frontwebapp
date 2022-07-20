import { ForwardRefRenderFunction, forwardRef } from 'react'
import { RadioInputProps } from './types'

import * as Styled from './styles'

const RadioInput: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioInputProps
> = ({ label, id, radioGroup, ...rest }, ref) => {
  return (
    <Styled.Container>
      <Styled.Radio
        type='radio'
        ref={ref}
        id={id}
        aria-labelledby={label}
        role='radio'
        {...rest}
        value={id}
        name={radioGroup}
      />
      <Styled.Label htmlFor={id} aria-label={`radio input ${label}`}>
        {label}
      </Styled.Label>
    </Styled.Container>
  )
}

export const RadioButton = forwardRef(RadioInput)
