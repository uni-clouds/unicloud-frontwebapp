import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { Input } from '../../Elements/Inputs/Input'
import { RequestDetailsType, RequestDetailsProps } from './types'
import { styleGrid } from '../styles'
import { useTranslation } from 'react-i18next'
import { RequestTimeline } from './RequestTimeline'

export const DetailsRequest: React.FC<RequestDetailsProps> = ({
  handleClose,
  data
}) => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useForm<RequestDetailsType>({})

  const [isDisabled, setIsDisabled] = useState(true)

  const { t: translate } = useTranslation()

  useEffect(() => {
    setValue('cnpj', data ? data?.map((d) => d.cnpj).toString() : '-')
    setValue(
      'razao_social',
      data ? data?.map((d) => d.razao_social).toString() : '-'
    )
    setValue('email', data ? data?.map((d) => d.email).toString() : '-')
    setValue(
      'request_by',
      data ? data?.map((d) => d.request_by).toString() : '-'
    )
    setValue(
      'created_at',
      data ? data?.map((d) => d.created_at).toString() : '-'
    )
    setValue(
      'expires_at',
      data ? data?.map((d) => d.expires_at).toString() : '-'
    )
    setValue('resources', data ? data?.map((d) => d.resources).toString() : '-')
    setValue(
      'status',
      data?.map((d) => d.is_pending)
        ? translate('pending')
        : translate('expired')
    )
  }, [data])

  return (
    <>
      <form
        action='POST'
        className='w-full h-fit flex flex-col lg:p-8 p-6 custom-dark dark:border-transparent border border-light-200 rounded-md '
        onSubmit={() => {}}
      >
        <Grid container spacing={1} className='mb-2'>
          <Grid item sx={styleGrid} sm={6}>
            <Input
              type='text'
              label={translate('companyName')}
              disabled={isDisabled}
              error={errors?.razao_social}
              {...register('razao_social')}
            />
          </Grid>
          <Grid item sx={styleGrid} sm={6}>
            <Input
              type='text'
              label={translate('cnpj')}
              disabled={isDisabled}
              error={errors?.cnpj}
              {...register('cnpj')}
            />
          </Grid>
          <Grid item sx={styleGrid} sm={6}>
            <Input
              type='text'
              label={translate('email')}
              disabled={isDisabled}
              error={errors?.email}
              {...register('email')}
            />
          </Grid>

          <Grid item sx={styleGrid} md={6} sm={5}>
            <Input
              type='text'
              label={translate('customersUsers:request-resources')}
              disabled={isDisabled}
              error={errors?.resources}
              {...register('resources')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} sm={4}>
            <Input
              type='text'
              label={translate('customersUsers:request-created_at')}
              disabled={isDisabled}
              error={errors?.created_at}
              {...register('created_at')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} sm={4}>
            <Input
              type='text'
              label={translate('customersUsers:request-expires_at')}
              disabled={isDisabled}
              error={errors?.expires_at}
              {...register('expires_at')}
            />
          </Grid>

          <Grid item sx={styleGrid} md={3} sm={4}>
            <Input
              type='text'
              label={translate('customersUsers:request-request_by')}
              disabled={isDisabled}
              error={errors?.request_by}
              {...register('request_by')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} sm={4}>
            <Input
              type='text'
              label={translate('status')}
              disabled={isDisabled}
              error={errors?.status}
              {...register('status')}
            />
          </Grid>

          <Grid item sx={styleGrid} sm={12}>
            {data && <RequestTimeline timeline={data[0].timeline} />}
          </Grid>
        </Grid>

        <div className=' flex flex-row gap-6 justify-end items-center '>
          <OutlineButton name='clear-form' onclick={handleClose}>
            {translate('close')}
          </OutlineButton>
        </div>
      </form>
    </>
  )
}
