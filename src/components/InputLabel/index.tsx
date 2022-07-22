import { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputLabelProps } from './types'

import * as Styled from './styles'

const Label: ForwardRefRenderFunction<HTMLLabelElement, InputLabelProps> = (
  { label, htmlFor, arias, id, ...rest },
  ref
) => {
  return (
    <Styled.Label
      aria-label={`input ${arias}`}
      htmlFor={htmlFor}
      aria-labelledby={`input ${arias}`}
      id={id}
      {...rest}
      ref={ref}
    >
      {label}
    </Styled.Label>
  )
}

export const InputLabel = forwardRef(Label)
