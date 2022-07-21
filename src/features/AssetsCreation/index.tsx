import { FC, useState } from 'react'
import { Icon } from '@iconify-icon/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { SubmitButton } from '../../components/Elements/Buttons/SubmitButton'
import { Loading } from '../../components/Elements/Loading'
import { Paper } from '../../components/Paper'
import { RadioButton } from '../../components/RadioButton'
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Elements/Inputs/Input'
import { useContracts } from '../../hooks/useContracts'
import { useGetResources } from '../../hooks/useGetResources'

import { AssetsCreationProps, AssetsCreationType } from './types'
import * as Styled from './styles'

export const AssetsCreation: FC<AssetsCreationProps> = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<AssetsCreationType>()
  const { data: resources } = useGetResources()
  const { data: contracts } = useContracts()
  const [isDisabled, setIsDisabled] = useState(false)

  const onSubmit: SubmitHandler<AssetsCreationType> = (data) => {
    console.log('🍒 submit assets data', data)
  }
  return (
    <Paper>
      <Styled.Container as='form' onSubmit={handleSubmit(onSubmit)}>
        <Styled.ContainerList>
          <Heading size='small' as='h4'>
            1º Passo: Escolha o recurso
          </Heading>
          {resources?.map((resource) => (
            <Controller
              key={uuidv4()}
              control={control}
              name='resource_id'
              render={({ field }) => (
                <RadioButton
                  label={resource.resource_name}
                  id={resource.id.toString()}
                  radioGroup='resources'
                  {...field}
                />
              )}
            />
          ))}
        </Styled.ContainerList>
        <Styled.ContainerList>
          <Heading size='small' as='h4'>
            2º Passo: Escolha o contrato
          </Heading>
          {contracts?.map((contract) => (
            <Controller
              key={uuidv4()}
              control={control}
              name='contract_id'
              render={({ field }) => (
                <RadioButton
                  label={contract.name}
                  id={contract.name}
                  radioGroup='contracts'
                  {...field}
                />
              )}
            />
          ))}
        </Styled.ContainerList>
        <Styled.Box>
          <Input
            label='3º Passo: Informe a quantidade'
            type='number'
            placeholder='Ex. 101'
            error={errors.qty}
            {...register('qty')}
          />
          <SubmitButton isDisabled={isDisabled} isLogin={false} isForm>
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
        </Styled.Box>
      </Styled.Container>
    </Paper>
  )
}
