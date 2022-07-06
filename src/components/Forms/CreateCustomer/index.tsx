import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
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
import { CnpjInput } from '../../Elements/Inputs/CnpjField'
import { InputType } from '../../Elements/Inputs/TypeInput'
import { useUserType } from '../../../hooks/useUserType'

export const CreateCustomer: React.FC<CreateCustomerFormProps> = ({
  handleClose
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CreateCustomerType>({
    resolver: yupResolver(schemaCreateCustomer)
  })
  const [isDisabled, setIsDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const values = ['Customer', 'Partner']

  const { data } = useUserType()
  useEffect(() => {
    if (data.type === 'partner') {
      setValue('type', 'customer')
    }
  }, [data])

  const createCustomerSubmit: SubmitHandler<CreateCustomerType> = async (
    data
  ) => {
    try {
      const request = await api.post('/customers/', {
        email: data.email,
        cnpj: data.cnpj,
        type: data.type
      })
      setIsDisabled(true)
      if (request.status === 200) {
        setIsSuccess(true)
        setTimeout(handleClose, 2000)
      }
    } catch (error: any) {
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
          label='E-mail do usuário principal'
          type='email'
          error={errors?.email}
          {...register('email')}
        />
        <div className='flex flex-row gap-6 justify-between items-center'>
          <div className='w-full flex flex-col gap-2'>
            <Controller
              name='cnpj'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CnpjInput error={error} {...field} />
              )}
            />
          </div>
          {data.type === 'root' && (
            <div className='w-full flex flex-col gap-2 -mb-5'>
              <Controller
                name='type'
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <InputType
                    {...field}
                    error={error}
                    name='customer'
                    values={values}
                    label='Selecione o tipo de cliente'
                  />
                )}
              />
            </div>
          )}
        </div>
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
