import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonVisibility } from './ButtonVisibility'
import { Input } from '../../components/Input'
import { Controller } from 'react-hook-form'
import { InputLabel } from '../../components/InputLabel'

import { PasswordInputProps } from './types'
import * as Styled from './styles'
import { Link } from 'react-router-dom'

const PasswordInput: ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordInputProps
> = ({ name, control, isVisible, showVisibilityIcon, isError }, ref) => {
  const { t: translate } = useTranslation()
  return (
    <Styled.Container>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            placeholder={translate('password-placeholder')}
            type={!!isVisible ? 'text' : 'password'}
            label={translate('password')}
            arias='password'
            id='password'
            role='password-field'
            error={error}
            showVisibilityIcon={showVisibilityIcon}
            ref={ref}
            {...field}
          />
        )}
      />
      <Styled.LinkBox>
        <Link to='#'>{translate('password-forgot')}</Link>
      </Styled.LinkBox>
      <Styled.VisibilityBox onClick={showVisibilityIcon}>
        {<ButtonVisibility isVisible={isVisible} isError={!!isError} />}
      </Styled.VisibilityBox>
    </Styled.Container>
  )
}

export const PasswordField = forwardRef(PasswordInput)
