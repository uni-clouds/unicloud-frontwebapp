import { useEffect, useState } from 'react'

import { useForm, Controller } from 'react-hook-form'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Elements/Inputs/Input'
import { PhoneInput } from '../../Elements/Inputs/PhoneInput'
import { CustomerDetailsType, CustomerDetailsProps } from './types'

import { PurpleButton } from '../../Elements/Buttons/PurpleButton'

export const DetailsCustomer: React.FC<CustomerDetailsProps> = ({
  handleClose,
  data
}) => {
  const {
    register,
    setValue,
    control,
    formState: { errors }
  } = useForm<CustomerDetailsType>({})

  const [isDisabled, setIsDisabled] = useState(true)

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
    <form
      action='POST'
      className='w-full h-full flex flex-col gap-2 p-8 custom-dark bg-zinc-100 rounded-md '
      onSubmit={() => {}}
    >
      <div className='flex flex-row gap-4 my-2 w-full items-center'>
        <div className='flex flex-col gap-2 w-full'>
          <Input
            type='text'
            label='Razão Social'
            disabled={isDisabled}
            error={errors?.razao_social}
            {...register('razao_social')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/3'>
          <Input
            type='text'
            label='Nome Fantasia'
            disabled={isDisabled}
            error={errors?.nome_fantasia}
            {...register('nome_fantasia')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/3'>
          <Input
            type='text'
            label='CNPJ'
            disabled={isDisabled}
            error={errors?.cnpj}
            {...register('cnpj')}
          />
        </div>
      </div>
      <div className='flex flex-row gap-4 my-2'>
        <div className='flex flex-col gap-2  w-1/3'>
          <Input
            type='text'
            label='E-mail'
            disabled={isDisabled}
            error={errors?.email}
            {...register('email')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/3 '>
          <Input
            type='text'
            label='Natureza Jurídica'
            disabled={isDisabled}
            error={errors?.natureza_juridica}
            {...register('natureza_juridica')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/3'>
          <Input
            type='phone'
            label='Telefone'
            disabled={isDisabled}
            error={errors?.telefone}
            {...register('telefone')}
          />
        </div>
      </div>
      <div className='flex flex-row gap-4 my-2'>
        <div className='flex flex-col gap-2  w-1/2'>
          <Input
            type='text'
            label='Endereço'
            disabled={isDisabled}
            error={errors?.logradouro}
            {...register('logradouro')}
          />
        </div>
        <div className='flex flex-col gap-2 w-1/12 '>
          <Input
            type='text'
            label='Número'
            disabled={isDisabled}
            error={errors?.numero}
            {...register('numero')}
          />
        </div>
        <div className='flex flex-col gap-2  w-1/3'>
          <Input
            type='text'
            label='Bairro'
            disabled={isDisabled}
            error={errors?.municipio}
            {...register('municipio')}
          />
        </div>
        <div className='flex flex-col gap-2  w-1/10'>
          <Input
            type='text'
            label='CEP'
            disabled={isDisabled}
            error={errors?.cep}
            {...register('cep')}
          />
        </div>
      </div>

      <div className='flex flex-row gap-4 my-2 '>
        <div className='flex flex-col gap-2  w-1/3'>
          <Input
            type='text'
            label='Cidade'
            disabled={isDisabled}
            error={errors?.municipio}
            {...register('municipio')}
          />
        </div>
        <div className='flex flex-col gap-2  w-1/12'>
          <Input
            type='text'
            label='Estado'
            disabled={isDisabled}
            error={errors?.estado}
            {...register('estado')}
          />
        </div>
      </div>
      <div className=' flex flex-row gap-6 justify-end items-center '>
        <OutlineButton name='clear-form' onclick={handleClose}>
          Fechar
        </OutlineButton>
      </div>
    </form>
  )
}
