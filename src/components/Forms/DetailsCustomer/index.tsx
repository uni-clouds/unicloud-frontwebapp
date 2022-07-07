import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { Input } from '../../Elements/Inputs/Input'
import { CustomerDetailsType, CustomerDetailsProps } from './types'
import { styleGrid } from '../styles'
import { useTranslation } from 'react-i18next'

export const DetailsCustomer: React.FC<CustomerDetailsProps> = ({
  handleClose,
  data
}) => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useForm<CustomerDetailsType>({})

  const [isDisabled, setIsDisabled] = useState(true)

  const { t: translate } = useTranslation()

  useEffect(() => {
    setValue('bairro', data?.map((d) => d.bairro).toString())
    setValue('cep', data?.map((d) => d.cep).toString())
    setValue('cnpj', data?.map((d) => d.cnpj).toString())
    setValue('telefone', data?.map((d) => d.telefone).toString())
    setValue('numero', data?.map((d) => d.numero).toString())
    setValue('nome_fantasia', data?.map((d) => d.nome_fantasia).toString())
    setValue('razao_social', data?.map((d) => d.razao_social).toString())
    setValue('logradouro', data?.map((d) => d.logradouro).toString())
    setValue('municipio', data?.map((d) => d.municipio).toString())
    setValue(
      'natureza_juridica',
      data?.map((d) => d.natureza_juridica).toString()
    )
    setValue('estado', data?.map((d) => d.estado).toString())
    setValue('pais', data?.map((d) => d.pais).toString())
    setValue('email', data?.map((d) => d.email).toString())
  }, [data])

  return (
    <>
      <form
        action='POST'
        className='w-full h-full flex flex-col lg:p-8 p-6 custom-dark dark:border-transparent border border-light-200 rounded-md '
        onSubmit={() => {}}
      >
        <Grid container spacing={1}>
          <Grid item sx={styleGrid} sm={5}>
            <Input
              type='text'
              label={translate('companyName')}
              disabled={isDisabled}
              error={errors?.razao_social}
              {...register('razao_social')}
            />
          </Grid>
          <Grid item sx={styleGrid} sm={3}>
            <Input
              type='text'
              label={translate('companyTradingName')}
              disabled={isDisabled}
              error={errors?.nome_fantasia}
              {...register('nome_fantasia')}
            />
          </Grid>
          <Grid item sx={styleGrid} sm={4}>
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
          <Grid item sx={styleGrid} sm={6}>
            <Input
              type='text'
              label={translate('businessEntityType')}
              disabled={isDisabled}
              error={errors?.natureza_juridica}
              {...register('natureza_juridica')}
            />
          </Grid>
          <Grid item sx={styleGrid} sm={5}>
            <Input
              type='phone'
              label={translate('phone')}
              disabled={isDisabled}
              error={errors?.telefone}
              {...register('telefone')}
            />
          </Grid>

          <Grid item sx={styleGrid} md={5} sm={5}>
            <Input
              type='text'
              label={translate('address')}
              disabled={isDisabled}
              error={errors?.logradouro}
              {...register('logradouro')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={2} sm={2}>
            <Input
              type='text'
              label={translate('streetNumber')}
              disabled={isDisabled}
              error={errors?.numero}
              {...register('numero')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={3} sm={4}>
            <Input
              type='text'
              label={translate('district')}
              disabled={isDisabled}
              error={errors?.bairro}
              {...register('bairro')}
            />
          </Grid>
          <Grid item sx={styleGrid} md={2} sm={3}>
            <Input
              type='text'
              label={translate('zipCode')}
              disabled={isDisabled}
              error={errors?.cep}
              {...register('cep')}
            />
          </Grid>

          <Grid item sx={styleGrid} sm={3} md={5}>
            <Input
              type='text'
              label={translate('city')}
              disabled={isDisabled}
              error={errors?.municipio}
              {...register('municipio')}
            />
          </Grid>
          <Grid item sx={styleGrid} sm={2}>
            <Input
              type='text'
              label={translate('state')}
              disabled={isDisabled}
              error={errors?.estado}
              {...register('estado')}
            />
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
