import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { api } from '../../../services/api'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { ToastError } from '../../Elements/ToastError'
import { useTranslation } from 'react-i18next'
import { Portal } from '@mui/material'
import { Input } from '../../Input'
import { yupResolver } from '@hookform/resolvers/yup'

import { RadioButton } from '../../RadioButton'
import { Heading } from '../../Heading'
import { TypeResources, CreateResourcesFormProps } from './types'

import * as Styled from './styles'
import { schemaResources } from './validation'

export const CreateResources: FC<CreateResourcesFormProps> = ({ data }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<TypeResources>({
    resolver: yupResolver(schemaResources)
  })
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [resourceType, setResourceType] = useState(null)
  const { t: translate } = useTranslation()

  const handleCreateResources: SubmitHandler<TypeResources> = async (data) => {
    try {
      const request = await api.post('/resources/', {
        type_id: resourceType,
        resource: data.resource
      })

      if (request.status === 200) {
        setIsSuccess(true)
      }
    } catch (error: any) {
      if (error.response.status !== 409) {
        setIsError(true)
        console.error(error)
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
      {!!isSuccess && (
        <Portal>
          <ToastSuccess
            isSuccess={!!isSuccess}
            message={`Novo recurso criado com sucesso!`}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <Heading size='normal' as='h3'>
        Gerencie seus recursos
      </Heading>
      <Styled.ContainerList>
        <Styled.List>
          <Styled.ListHeading>
            Em qual tipo deseja criar um novo recurso?
          </Styled.ListHeading>

          {data?.map((item) => (
            <Styled.ListItem key={uuidv4()} role='radiogroup'>
              <RadioButton
                label={item.resource_type}
                id={item.id.toString()}
                radioGroup='resources_types'
                onChange={() => setResourceType(item.id)}
              />
            </Styled.ListItem>
          ))}
        </Styled.List>
      </Styled.ContainerList>
      <Styled.Form onSubmit={handleSubmit(handleCreateResources)} action='POST'>
        <Input
          label='Novo recurso'
          placeholder='Informe o nome do recurso'
          type='text'
          arias='new-resource'
          id='new-resource'
          role='input-field'
          {...register('resource')}
          error={errors.resource}
        />
        <SubmitButton isForm>Criar </SubmitButton>
      </Styled.Form>
    </Styled.Container>
  )
}
