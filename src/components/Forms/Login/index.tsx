import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmailField } from './EmailField'
import { schemaLogin } from './validation'
import { Loading } from '../../Elements/Loading'
import { ToastError } from '../../Elements/ToastError'
import { PasswordField } from './PasswordField'
import { useAuth } from '../../../hooks/useAuth'
import { LoginFormProps } from './types'

export const Login: React.FC = () => {
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
    //*set Loading state true/search

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
          message='Credenciais inválidas, tente novamente.'
          handleClose={handleOnClose}
        />
      )}
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className='w-full flex-col flex'
      >
        <EmailField
          placeholder='Digite seu endereço de e-mail'
          label='E-mail'
          type='text'
          {...register('email')}
          error={errors?.email}
        />
        <PasswordField
          placeholder='Digite sua senha'
          label='Senha'
          type={!!passwordIsShow ? 'text' : 'password'}
          isVisible={passwordIsShow}
          showVisibilityIcon={showPassword}
          {...register('password')}
          error={errors?.password}
        />
        <SubmitButton isDisabled={isSubmitting}>
          {!!isSubmitting ? <Loading /> : 'Entrar'}
        </SubmitButton>
      </form>
    </>
  )
}
