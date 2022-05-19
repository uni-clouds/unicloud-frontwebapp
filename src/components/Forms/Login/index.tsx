import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitButton } from '../../Buttons/SubmitButton'
import { Input } from './LoginInput'
import { LoginFormProps } from './types'
import { schemaLogin } from './validation'

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormProps>({
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log('data submitada', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex-column gap-4'
    >
      <Input
        type='text'
        placeholder='Digite seu endereço de e-mail'
        label='Email'
        {...register('email')}
        error={errors?.email}
      />
      <Input
        type='password'
        placeholder='Digite sua senha'
        label='Senha'
        {...register('password')}
        error={errors?.password}
      />
      <SubmitButton text='Entrar' />
    </form>
  )
}
