import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitButton } from '../../Buttons/SubmitButton'
import { EmailField } from './EmailField'
import { LoginFormProps } from './types'
import { schemaLogin } from './validation'
import { Loading } from '../../Elements/Loading'
import { FormEvent, useState } from 'react'
import { PasswordField } from './PasswordField'
import { api } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

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
  const auth = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  let from = state?.from?.pathname || '/'

  const onLoginSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    //*set Loading state true/search
    // * confirmar rotas no backend && username

    try {
      await auth.authenticate(data.email, data.password)
      navigate(from, { replace: true })
    } catch (err) {
      console.error('form login error', err)
      //exibir o erro do backend

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

  return (
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
  )
}
