import { ForwardRefRenderFunction, forwardRef } from 'react'
import { RadioInputProps } from './types'

import * as Styled from './styles'

const RadioInput: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioInputProps
> = ({ label, id }, ref) => {
  return (
    <Styled.Container>
      <Styled.Radio type='radio' ref={ref} id={id} />
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
    </Styled.Container>
  )
}

export const RadioButton = forwardRef(RadioInput)
