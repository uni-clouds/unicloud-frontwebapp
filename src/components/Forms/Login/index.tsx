import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmailField } from '../../Elements/Inputs/EmailField'
import { schemaLogin } from './validation'
import { Loading } from '../../Elements/Loading'
import { ToastError } from '../../Elements/ToastError'

import { useAuth } from '../../../hooks/useAuth'
import { LoginFormProps } from './types'
import { PasswordField } from '../../Elements/Inputs/PasswordField'
import { useTranslation } from 'react-i18next'

export const Login: React.FC = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
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
          message={t('error-invalid-credentials')}
          handleClose={handleOnClose}
        />
      )}
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className='w-full flex-col flex gap-2'
        action='POST'
      >
        <EmailField
          placeholder={t('email-placeholder')}
          aria-invalid={errors.email ? 'true' : 'false'}
          label={t('email')}
          type='text'
          {...register('email')}
          error={errors?.email}
        />
        <PasswordField
          placeholder={t('password-placeholder')}
          label={t('password')}
          type={!!passwordIsShow ? 'text' : 'password'}
          aria-invalid={errors.password ? 'true' : 'false'}
          isVisible={passwordIsShow}
          showVisibilityIcon={showPassword}
          {...register('password')}
          error={errors?.password}
        />
        <SubmitButton isDisabled={isSubmitting} isLogin>
          {!!isSubmitting ? <Loading /> : t('login:login')}
        </SubmitButton>
      </form>
    </>
  )
}
