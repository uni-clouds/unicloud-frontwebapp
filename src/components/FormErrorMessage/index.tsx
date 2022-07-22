import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useTranslation } from 'react-i18next'

import { FormErrorMessageProps } from './types'
import * as Styled from './styles'

const ErrorMessage: ForwardRefRenderFunction<
  HTMLParagraphElement,
  FormErrorMessageProps
> = ({ error, arias }) => {
  const { t: translate } = useTranslation()
  return (
    <Styled.Message
      error={!!error}
      role='alert'
      aria-errormessage={`input ${arias}`}
    >
      {translate(error?.message)}
    </Styled.Message>
  )
}
export const FormErrorMessage = forwardRef(ErrorMessage)
