import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Elements/Inputs/Input'
import { PhoneInput } from '../../Elements/Inputs/PhoneInput'
import { DetailsUserProps, UpdateUserType } from './types'
import { schemaUpdateUser } from './validation'
import { PurpleButton } from '../../Elements/Buttons/PurpleButton'

export const DetailsUser: React.FC<DetailsUserProps> = ({
  handleOnClose,
  data
}) => {
  const {
    register,
    setValue,
    control,
    formState: { errors }
  } = useForm<UpdateUserType>({
    resolver: yupResolver(schemaUpdateUser)
  })

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    setValue('address', data?.map((d) => d.userprofile?.address).toString())
    setValue('username', data?.map((d) => d.email).toString())
    setValue('first_name', data?.map((d) => d.first_name).toString())
    setValue('last_name', data?.map((d) => d.last_name).toString())
    setValue('phone', data?.map((d) => d.userprofile?.phone).toString())
    setValue('city', data?.map((d) => d.userprofile?.city).toString())
    setValue('country', data?.map((d) => d.userprofile?.country).toString())
    setValue('state', data?.map((d) => d.userprofile?.state).toString())
  }, [data])

  return (
    <form
      action='POST'
      className='w-full h-full flex flex-col gap-2 p-8 custom-dark dark:border-transparent border border-light-200 rounded-md '
      onSubmit={() => {}}
    >
      <div className='flex flex-row gap-4 my-2 w-full items-center'>
        <div className='flex flex-col gap-2 w-1/2'>
          <Input
            type='text'
            label='Nome'
            disabled={isDisabled}
            error={errors?.first_name}
            {...register('first_name')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/2'>
          <Input
            type='text'
            label='Sobrenome'
            disabled={isDisabled}
            error={errors?.last_name}
            {...register('last_name')}
          />
        </div>
      </div>
      <Input
        type='email'
        label='E-mail'
        disabled={isDisabled}
        error={errors?.username}
        {...register('username')}
      />
      <Input
        type='text'
        label='Endereço'
        disabled={isDisabled}
        error={errors?.address}
        {...register('address')}
      />
      <div className='flex flex-row gap-4 my-2'>
        <div className='flex flex-col gap-2  w-1/2'>
          <Input
            type='text'
            label='Cidade'
            disabled={isDisabled}
            error={errors?.city}
            {...register('city')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/2 '>
          <Controller
            name='phone'
            control={control}
            render={({ formState: { errors }, field }) => (
              <PhoneInput
                error={errors?.phone}
                disabled={isDisabled}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className='flex flex-row gap-4 my-2 '>
        <div className='flex flex-col gap-2  w-1/2 sm:w-full'>
          <Input
            type='text'
            label='Estado'
            disabled={isDisabled}
            error={errors?.state}
            {...register('state')}
          />
        </div>
        <div className='flex flex-col gap-2  w-1/2 sm:w-full'>
          <Input
            type='text'
            label='País'
            disabled={isDisabled}
            error={errors?.country}
            {...register('country')}
          />
        </div>
      </div>
      <div className=' flex flex-row gap-6 justify-end items-center '>
        {!!isDisabled ? (
          <PurpleButton onclick={() => setIsDisabled(false)} name='edit-user'>
            Editar
          </PurpleButton>
        ) : (
          <SubmitButton isDisabled={false} isForm={true}>
            Enviar
          </SubmitButton>
        )}

        <OutlineButton name='clear-form' onclick={handleOnClose}>
          Fechar
        </OutlineButton>
      </div>
    </form>
  )
}
