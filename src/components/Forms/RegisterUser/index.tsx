import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Input/Input'
import { RegisterFormProps } from './types'
import { schemaRegister } from './validation'
import { api } from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import { ToastError } from '../../Elements/ToastError'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { PhoneInput } from '../../Elements/Inputs/PhoneInput'
import { useTranslation } from 'react-i18next'

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

  const { t: translate } = useTranslation()

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
          message={translate('error-something-unexpected-refresh')}
          isError={isError}
          handleClose={handleOnClose}
        />
      )}
      {!!isSuccess && (
        <ToastSuccess
          message={translate('success-user-created')}
          isSuccess={isSuccess}
          handleClose={handleOnClose}
        />
      )}
      {!!isFail && (
        <ToastError
          message={translate('error-user-alreadyExists')}
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
              placeholder={translate('firstName-placeholder')}
              label={translate('firstName')}
              aria-invalid={errors.first_name ? 'true' : 'false'}
              error={errors?.first_name}
              {...register('first_name')}
            />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <Input
              type='text'
              placeholder={translate('lastName-placeholder')}
              aria-invalid={errors.last_name ? 'true' : 'false'}
              label={translate('lastName')}
              error={errors?.last_name}
              {...register('last_name')}
            />
          </div>
        </div>
        <Input
          type='email'
          placeholder={translate('email-placeholder')}
          aria-invalid={errors.username ? 'true' : 'false'}
          label={translate('email')}
          error={errors?.username}
          {...register('username')}
        />
        <div className='flex flex-row gap-4 my-2'>
          <div className='flex flex-col gap-2  w-1/2'>
            <Input
              type='password'
              placeholder={translate('password-placeholder')}
              aria-invalid={errors.password ? 'true' : 'false'}
              label={translate('password')}
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
          placeholder={translate('address-placeholder')}
          label={translate('address')}
          aria-invalid={errors.address ? 'true' : 'false'}
          error={errors?.address}
          {...register('address')}
        />
        <div className='flex flex-row gap-4 my-2 '>
          <div className='flex flex-col gap-2  w-1/3 sm:w-full'>
            <Input
              type='text'
              placeholder={translate('city-placeholder')}
              aria-invalid={errors.city ? 'true' : 'false'}
              label={translate('city')}
              error={errors?.city}
              {...register('city')}
            />
          </div>
          <div className='flex flex-col gap-2  w-1/3 sm:w-full'>
            <Input
              type='text'
              placeholder={translate('state-placeholder')}
              aria-invalid={errors.state ? 'true' : 'false'}
              label={translate('state')}
              error={errors?.state}
              {...register('state')}
            />
          </div>
          <div className='flex flex-col gap-2  w-1/3 sm:w-full'>
            <Input
              type='text'
              placeholder={translate('country-placeholder')}
              label={translate('country')}
              error={errors?.country}
              aria-invalid={errors.country ? 'true' : 'false'}
              {...register('country')}
            />
          </div>
        </div>
        <div className=' flex flex-row gap-6 justify-end items-center my-2 '>
          <SubmitButton isDisabled={false} isForm={true}>
            {translate('submit')}
          </SubmitButton>
          <OutlineButton name='clear-form' onclick={() => reset()}>
            {translate('clear')}
          </OutlineButton>
        </div>
      </form>
    </>
  )
}
