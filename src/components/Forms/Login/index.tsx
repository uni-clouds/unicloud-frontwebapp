import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitButton } from '../../Buttons/SubmitButton'
import { EmailField } from './EmailField'
import { LoginFormProps } from './types'
import { schemaLogin } from './validation'
import { Loading } from '../../Elements/Loading'
import { FormEvent, useState } from 'react'
import { PasswordField } from './PasswordField'

export const Login: React.FC = () => {
  const [passwordIsShow, setPasswordIsShow] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormProps>({
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log('data submitada', data)
    reset()
  }

  function showPassword(event: FormEvent) {
    event.preventDefault()
    setPasswordIsShow(!passwordIsShow)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex-col flex'>
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
