import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Portal } from '@mui/material'
import { Icon } from '@iconify-icon/react'
import { OutlineButton } from '../../Elements/Buttons/OutlineButton'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { Input } from '../../Elements/Inputs/Input'
import { Loading } from '../../Elements/Loading'
import { api } from '../../../services/api'
import { ToastError } from '../../Elements/ToastError'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { ToastWarning } from '../../Elements/ToastWarning'
import { Select } from '../../SelectInput'

import { CreateContractFormProps, CreateContractType } from './types'
import { schemaContract } from './validation'

import * as Styled from './styles'
import { useCustomersList } from '../../../hooks/useCustomersList'

export const CreateContract: React.FC<CreateContractFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<CreateContractType>({
    //resolver: yupResolver(schemaContract)
  })
  const [isDisabled, setIsDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [options, setOptions] = useState([])
  const { t: translate } = useTranslation()
  const { data: customers } = useCustomersList()

  const selectedCustomer = getValues('customer_id')

  useEffect(() => {
    const getCustomerList = customers?.map((customer) => {
      return {
        name: customer.razao_social,
        value: customer.id
      }
    })
    setOptions(getCustomerList)
    const getId = customers?.filter(
      (customer) => customer.razao_social == selectedCustomer
    )

    console.log('🍄', selectedCustomer)
  }, [selectedCustomer, customers])

  const onSubmitContract: SubmitHandler<CreateContractType> = async (data) => {
    console.log('🐑', data)
    try {
      const request = await api.post('/contracts/', {
        name: data.name,
        start_date: data.start_date,
        end_date: data.end_date,
        term: data.term,
        readjust_cycle: data.readjust_cycle,
        amount: data.amount,
        note: data.note,
        customer_id: data.customer_id,
        intermediary: data.intermediary,
        contract: data.contract
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
    <Styled.Container>
      {!!isError && (
        <Portal>
          <ToastError
            isError={!!isError}
            message={translate('error-something-unexpected')}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      {!!isPending && (
        <Portal>
          <ToastWarning
            isWarning={!!isPending}
            message={translate('consumersUsers:invitationIsPending')}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      {!!isSuccess && (
        <Portal>
          <ToastSuccess
            isSuccess={!!isSuccess}
            message={translate('consumersUsers:invitationSent')}
            handleClose={handleOnClose}
          />
        </Portal>
      )}

      <Styled.Title>
        Preencha as informações abaixo para criar o contrato:
      </Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmitContract)} action='POST'>
        <Styled.InputGroup>
          <Styled.InputBox>
            <Input
              placeholder={'Digite o nome'}
              label='Nome'
              type='text'
              error={errors?.name}
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name')}
            />
          </Styled.InputBox>
          <Controller
            control={control}
            name='customer_id'
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <Select options={options} {...field} label='Cliente' />
            )}
          />
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.InputBox>
            <Input
              placeholder={'_/_/_'}
              label='Data de início'
              type='date'
              error={errors?.start_date}
              aria-invalid={errors.start_date ? 'true' : 'false'}
              {...register('start_date')}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Input
              placeholder={'_/_/_'}
              label='Data de término'
              type='date'
              error={errors?.end_date}
              aria-invalid={errors.end_date ? 'true' : 'false'}
              {...register('end_date')}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Input
              placeholder={'Ex. 12 meses'}
              label='Prazo'
              type='number'
              error={errors?.term}
              aria-invalid={errors.term ? 'true' : 'false'}
              {...register('term')}
            />
          </Styled.InputBox>
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.InputBox>
            <Input
              placeholder={'Ex. mensal'}
              label='Período de reajuste'
              type='number'
              error={errors?.readjust_cycle}
              aria-invalid={errors.readjust_cycle ? 'true' : 'false'}
              {...register('readjust_cycle')}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Input
              placeholder={'Valor'}
              label='Valor'
              type='number'
              error={errors?.amount}
              aria-invalid={errors.amount ? 'true' : 'false'}
              {...register('amount')}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Input
              placeholder={'Ex.Telecom S/A'}
              label='Intermediário'
              type='text'
              error={errors?.intermediary}
              aria-invalid={errors.intermediary ? 'true' : 'false'}
              {...register('intermediary')}
            />
          </Styled.InputBox>
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.InputBox>
            <Input
              placeholder={''}
              label='Arquivo'
              type='file'
              error={errors?.contract}
              aria-invalid={errors.contract ? 'true' : 'false'}
              {...register('contract')}
            />
          </Styled.InputBox>
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.InputBox>
            <Input
              placeholder={'Observação...'}
              label='Observações'
              type='text'
              error={errors?.note}
              aria-invalid={errors.note ? 'true' : 'false'}
              {...register('note')}
            />
          </Styled.InputBox>
        </Styled.InputGroup>
        <Styled.InputGroup>
          <SubmitButton isDisabled={isDisabled} isLogin={false}>
            {isSubmitting ? (
              <Loading />
            ) : (
              <Styled.Span>
                <Icon
                  icon='bi:file-earmark-plus'
                  style={{ fontSize: '1.5rem' }}
                />
                Criar contrato
              </Styled.Span>
            )}
          </SubmitButton>
          <OutlineButton name='clean' onclick={() => reset()} fullWidth>
            <Styled.Span>
              <Icon icon='carbon:clean' style={{ fontSize: '1.5rem' }} />
              Limpar
            </Styled.Span>
          </OutlineButton>
        </Styled.InputGroup>
      </Styled.Form>
    </Styled.Container>
  )
}
