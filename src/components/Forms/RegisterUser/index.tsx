import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Elements/Inputs/Input'
import { RegisterFormProps } from './types'
import { schemaRegister } from './validation'
import { api } from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import { ToastError } from '../../Elements/ToastError'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { PhoneInput } from '../../Elements/Inputs/PhoneInput'

export const RegisterUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(schemaRegister)
  })
  const [isError, setIsError] = useState(false)
  const [isFail, setIsFail] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()

  const onRegisterSubmit: SubmitHandler<RegisterFormProps> = async (data) => {
    try {
      const request = await api.post('/user-register/', data)

      if (request.status === 200 && request.data.id) {
        setIsSuccess(true)
        setTimeout(() => navigate('/auth', { replace: true }), 3000)
      }
    } catch (error: any) {
      if (
        error?.response.status === 303 &&
        error?.message === 'Request failed with status code 303'
      ) {
        setIsFail(true)
      }
      if (error?.response.status !== 303) {
        setIsError(true)
      }
    } finally {
      reset()
    }
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
          message='Ocorreu um erro inesperado, recarregue a página e tente novamente.'
          isError={isError}
          handleClose={handleOnClose}
        />
      )}
      {!!isSuccess && (
        <ToastSuccess
          message='Usuário criado com sucesso!'
          isSuccess={isSuccess}
          handleClose={handleOnClose}
        />
      )}
      {!!isFail && (
        <ToastError
          message='Usuário já cadastrado, verifique os dados e tente novamente.'
          isError={isFail}
          handleClose={handleOnClose}
        />
      )}
      <form
        action='POST'
        className='sm:w-full md:w-[45rem] lg:w-[65rem] h-full flex flex-col gap-2 p-8 custom-dark bg-neutral-50 rounded-md shadow border border-light-200'
        onSubmit={handleSubmit(onRegisterSubmit)}
      >
        <div className='flex flex-row gap-4 my-2 w-full items-center'>
          <div className='flex flex-col gap-2 w-1/2'>
            <Input
              type='text'
              placeholder='Digite seu nome'
              label='Nome'
              aria-invalid={errors.first_name ? 'true' : 'false'}
              error={errors?.first_name}
              {...register('first_name')}
            />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <Input
              type='text'
              placeholder='Digite seu sobrenome'
              aria-invalid={errors.last_name ? 'true' : 'false'}
              label='Sobrenome'
              error={errors?.last_name}
              {...register('last_name')}
            />
          </div>
        </div>
        <Input
          type='email'
          placeholder='Digite seu e-mail'
          aria-invalid={errors.username ? 'true' : 'false'}
          label='E-mail'
          error={errors?.username}
          {...register('username')}
        />
        <div className='flex flex-row gap-4 my-2'>
          <div className='flex flex-col gap-2  w-1/2'>
            <Input
              type='password'
              placeholder='Digite sua senha'
              aria-invalid={errors.password ? 'true' : 'false'}
              label='Senha'
              error={errors?.password}
              {...register('password')}
            />
          </div>
          <div className='flex flex-col gap-2 w-1/2 '>
            <Controller
              name='phone'
              control={control}
              render={({ formState: { errors }, field }) => (
                <PhoneInput
                  error={errors?.phone}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <Input
          type='text'
          placeholder='Digite seu endereço'
          label='Endereço'
          aria-invalid={errors.address ? 'true' : 'false'}
          error={errors?.address}
          {...register('address')}
        />
        <div className='flex flex-row gap-4 my-2 '>
          <div className='flex flex-col gap-2  w-1/3 sm:w-full'>
            <Input
              type='text'
              placeholder='Digite sua cidade'
              aria-invalid={errors.city ? 'true' : 'false'}
              label='Cidade'
              error={errors?.city}
              {...register('city')}
            />
          </div>
          <div className='flex flex-col gap-2  w-1/3 sm:w-full'>
            <Input
              type='text'
              placeholder='Digite seu Estado'
              aria-invalid={errors.state ? 'true' : 'false'}
              label='Estado'
              error={errors?.state}
              {...register('state')}
            />
          </div>
          <div className='flex flex-col gap-2  w-1/3 sm:w-full'>
            <Input
              type='text'
              placeholder='Digite seu país'
              label='País'
              error={errors?.country}
              aria-invalid={errors.country ? 'true' : 'false'}
              {...register('country')}
            />
          </div>
        </div>
        <div className=' flex flex-row gap-6 justify-end items-center my-2 '>
          <SubmitButton isDisabled={false} isForm={true}>
            Enviar
          </SubmitButton>
          <OutlineButton name='clear-form' onclick={() => reset()}>
            Limpar
          </OutlineButton>
        </div>
      </form>
    </>
  )
}
