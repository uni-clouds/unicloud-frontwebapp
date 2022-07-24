import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Input } from '../../../components/Input'
import { PasswordField } from '../../../features/PasswordInput'

import { schemaLogin } from './validation'
import { Loading } from '../../Elements/Loading'
import { ToastError } from '../../Elements/ToastError'

import { useAuth } from '../../../hooks/useAuth'
import { LoginFormProps } from './types'

export const Login: React.FC = () => {
  const { t: translate } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormProps>({
    resolver: yupResolver(schemaLogin)
  })
  const [passwordIsShow, setPasswordIsShow] = useState(false)
  const [isError, setIsError] = useState(false)
  const { authenticate } = useAuth()
  const navigate = useNavigate()

  const onLoginSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    try {
      await authenticate(data.email, data.password)
    } catch (err) {
      console.error('form login error', err)
      setIsError(true)
      setTimeout(() => {
        navigate('/auth', { replace: true })
      }, 1000)
    } finally {
      reset()
    }
  }

  function showPassword(event: FormEvent) {
    event.preventDefault()
    setPasswordIsShow(!passwordIsShow)
  }

  const handleOnClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setIsError(false)
  }

  return (
    <>
      {!!isError && (
        <ToastError
          isError={!!isError}
          message={translate('error-invalid-credentials')}
          handleClose={handleOnClose}
        />
      )}
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className='w-full flex-col flex gap-2'
        action='POST'
      >
        <Input
          placeholder={translate('email-placeholder')}
          label={translate('email')}
          type='text'
          arias='email'
          id='email'
          role='input-field'
          error={errors?.email}
          {...register('email')}
        />
        <PasswordField
          isVisible={passwordIsShow}
          showVisibilityIcon={showPassword}
          isError={!!errors?.password}
          name='password'
          control={control}
        />
        <SubmitButton isDisabled={isSubmitting} isLogin>
          {isSubmitting ? <Loading /> : translate('login:login')}
        </SubmitButton>
      </form>
    </>
  )
}
