import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Elements/Inputs/Input'
import { Loading } from '../../Elements/Loading'
import { api } from '../../../services/api'
import { ToastError } from '../../Elements/ToastError'
import { Grid, Portal } from '@mui/material'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { CreatePodProps, PodType } from './types'
import { schemaCreatePod } from './validation'
import { InputType } from '../../Elements/Inputs/TypeInput'
import { styleGrid } from '../styles'

export const CreatePod: React.FC<CreatePodProps> = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PodType>({
    resolver: yupResolver(schemaCreatePod)
  })
  const [isDisabled, setIsDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const values = ['Compute', 'Storage']

  const createCustomerSubmit: SubmitHandler<PodType> = async (data) => {
    console.log('👀', data)
    try {
      const request = await api.post('/create-zadara-pod/', {
        name: data.name,
        location: data.location,
        type: data.type,
        url_base: data.url_base,
        pod_user: data.pod_user,
        pod_password: data.pod_password,
        project_id: data.project_id
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
        <Grid container spacing={3} aria-labelledby='form-create-pod'>
          <Grid item sx={styleGrid} lg={6}>
            <Input
              placeholder='Digite o nome do POD'
              label='Nome do POD'
              type='text'
              error={errors?.name}
              {...register('name')}
            />
          </Grid>
          <Grid item sx={styleGrid} lg={6}>
            <Input
              placeholder='Digite a localização. Ex. Curitiba'
              label='Localização'
              type='text'
              error={errors?.location}
              {...register('location')}
            />
          </Grid>
          <Grid item sx={styleGrid} lg={4}>
            <Input
              placeholder='Digite o usuário'
              label='Usuário'
              type='text'
              error={errors?.pod_user}
              {...register('pod_user')}
            />
          </Grid>
          <Grid item sx={styleGrid} lg={4}>
            <Input
              placeholder='Digite a senha'
              label='Senha'
              type='password'
              error={errors?.pod_password}
              {...register('pod_password')}
            />
          </Grid>
          <Grid item lg={4}>
            <div className='w-full flex flex-col gap-2 mt-[30px] '>
              <Controller
                name='type'
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <InputType
                    {...field}
                    label='Selecione o tipo de POD'
                    error={error}
                    name='customer'
                    values={values}
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item sx={styleGrid} lg={6}>
            <Input
              placeholder='Digite a url. Ex. https://www.pod.com'
              label='URL base'
              type='url'
              error={errors?.url_base}
              {...register('url_base')}
            />
          </Grid>
          <Grid item sx={styleGrid} lg={6}>
            <Input
              placeholder='Digite o ID'
              label='ID'
              type='text'
              error={errors?.project_id}
              {...register('project_id')}
            />
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 3
          }}
        >
          <SubmitButton isDisabled={isDisabled} isLogin={false} isForm>
            {isSubmitting ? <Loading /> : 'Criar'}
          </SubmitButton>
          <OutlineButton name='close-modal' onclick={handleClose}>
            {!!isSuccess ? 'Fechar' : 'Cancelar'}
          </OutlineButton>
        </Grid>
      </form>
    </>
  )
}
