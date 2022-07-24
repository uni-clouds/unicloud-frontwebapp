import { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputLabelProps } from './types'
import { Link } from 'react-router-dom'

import * as Styled from './styles'

const Label: ForwardRefRenderFunction<HTMLLabelElement, InputLabelProps> = (
  { label, id, events, arias, ...rest },
  ref
) => {
  return (
    <Styled.Label
      aria-label={`input ${arias}`}
      htmlFor={id}
      aria-labelledby={`input ${arias}`}
      events={false}
      {...rest}
      ref={ref}
    >
      {label}
    </Styled.Label>
  )
}

export const InputLabel = forwardRef(Label)
