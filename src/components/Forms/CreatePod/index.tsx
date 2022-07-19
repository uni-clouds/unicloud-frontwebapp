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
import { useTranslation } from 'react-i18next'

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
  const { t: translate } = useTranslation()
  const values = [
    `${translate('pods:compute')}`,
    `${translate('pods:storage')}`
  ]

  const createCustomerSubmit: SubmitHandler<PodType> = async (data) => {
    try {
      const request = await api.post('/create-zadara-pod/', {
        name: data.name,
        location: data.location,
        type: data.type,
        url_base: data.url_base,
        pod_user: data.pod_user,
        pod_password: data.pod_password,
        project_id: data.project_id,
        domain_tenant: data.domain_tenant,
        spare_nodes: data.spare_nodes
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
            message={translate('error-something-unexpected')}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      {!!isSuccess && (
        <Portal>
          <ToastSuccess
            isSuccess={!!isSuccess}
            message={translate('pods:podCreated')}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <form
        className='form flex flex-col gap-4 p-6 relative '
        onSubmit={handleSubmit(createCustomerSubmit)}
        action='POST'
      >
        <Grid container spacing={2} aria-labelledby='form-create-pod'>
          <Grid item sx={styleGrid} md={6} lg={6}>
            <Input
              placeholder={translate('pods:podName-placeholder')}
              label={translate('pods:podName')}
              type='text'
              error={errors?.name}
              {...register('name')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={6} lg={6}>
            <Input
              placeholder={translate('pods:podLocation-placeholder')}
              label={translate('pods:podLocation')}
              type='text'
              error={errors?.location}
              {...register('location')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} lg={4}>
            <Input
              placeholder={translate('user')}
              label={translate('user-placeholder')}
              type='text'
              error={errors?.pod_user}
              {...register('pod_user')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} lg={4}>
            <Input
              placeholder={translate('password-placeholder')}
              label={translate('password')}
              type='password'
              error={errors?.pod_password}
              {...register('pod_password')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} lg={4}>
            <Input
              placeholder={translate('pods:spareNode-placeholder')}
              label={translate('pods:spareNode')}
              type='number'
              error={errors?.spare_nodes}
              {...register('spare_nodes')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={6} lg={6}>
            <Input
              placeholder={translate('pods:domainTenant-placeholder')}
              label={translate('pods:domainTenant')}
              type='text'
              error={errors?.domain_tenant}
              {...register('domain_tenant')}
            />
          </Grid>

          <Grid item md={6} lg={6}>
            <div className='w-full flex flex-col gap-2 mt-[30px] '>
              <Controller
                name='type'
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <InputType
                    {...field}
                    label={translate('pods:podType')}
                    error={error}
                    name='customer'
                    values={values}
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item sx={styleGrid} md={6} lg={6}>
            <Input
              placeholder={translate('pods:baseURL-placeholder')}
              label={translate('pods:baseURL')}
              type='url'
              error={errors?.url_base}
              {...register('url_base')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={6} lg={6}>
            <Input
              placeholder={translate('id')}
              label={translate('id-placeholder')}
              type='text'
              error={errors?.project_id}
              {...register('project_id')}
            />
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 3,
            padding: 0
          }}
        >
          <SubmitButton isDisabled={isDisabled} isLogin={false} isForm>
            {isSubmitting ? <Loading /> : translate('create')}
          </SubmitButton>
          <OutlineButton name='close-modal' onclick={handleClose}>
            {isSuccess ? translate('close') : translate('cancel')}
          </OutlineButton>
        </Grid>
      </form>
    </>
  )
}
