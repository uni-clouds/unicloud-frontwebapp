import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Elements/Inputs/Input'
import { Loading } from '../../Elements/Loading'
import { api } from '../../../services/api'
import { ToastError } from '../../Elements/ToastError'
import { Portal } from '@mui/material'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { ToastWarning } from '../../Elements/ToastWarning'
import { CreateCustomerFormProps, CreateCustomerType } from './types'
import { schemaCreateCustomer } from './validation'

export const CreateCustomer: React.FC<CreateCustomerFormProps> = ({
  handleClose
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CreateCustomerType>({
    resolver: yupResolver(schemaCreateCustomer)
  })
  const [isDisabled, setIsDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const createCustomerSubmit: SubmitHandler<CreateCustomerType> = async (
    data
  ) => {
    try {
      const request = await api.post('/customer/', {
        email: data.email,
        cnpj: data.cnpj
      })
      setIsDisabled(true)
      if (request.status === 200) {
        setIsSuccess(true)
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        setIsPending(true)
      }
      if (error.response.status !== 409) {
        setIsError(true)
        console.error(error)
      }
    } finally {
      reset()
      setIsDisabled(false)
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
        <Portal>
          <ToastError
            isError={!!isError}
            message='Ocorreu algo inesperado, tente novamente.'
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      {!!isPending && (
        <Portal>
          <ToastWarning
            isWarning={!!isPending}
            message='Cliente já existe!'
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      {!!isSuccess && (
        <Portal>
          <ToastSuccess
            isSuccess={!!isSuccess}
            message='Cliente criado sucesso.'
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <form
        className='form flex flex-col gap-4 p-6 relative '
        onSubmit={handleSubmit(createCustomerSubmit)}
        action='POST'
      >
        <Input
          placeholder='Digite o e-mail'
          label='E-mail'
          type='email'
          error={errors?.email}
          {...register('email')}
        />
        <div className='flex gap-6 items-center w-1/2'>
          <SubmitButton isDisabled={isDisabled} isLogin={false}>
            {isSubmitting ? <Loading /> : 'Adicionar usuário'}
          </SubmitButton>
          <OutlineButton name='close-modal' onclick={handleClose}>
            {!!isSuccess ? 'Fechar' : 'Cancelar'}
          </OutlineButton>
        </div>
      </form>
    </>
  )
}
