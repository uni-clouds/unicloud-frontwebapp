import { SubmitHandler, useForm } from 'react-hook-form'
import { SubmitButton } from '../../Buttons/SubmitButton'
import { LoginInput } from './LoginInput'
import { LoginFormProps } from './types'

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormProps>()

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log('data submitada', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex-column gap-4'
    >
      <LoginInput
        type='text'
        placeholder='Digite seu endereço de e-mail'
        label='Email'
        {...register('email')}
      />
      <LoginInput
        type='password'
        placeholder='Digite sua senha'
        label='Senha'
        {...register('password')}
      />
      <SubmitButton text='Entrar' />
    </form>
  )
}
