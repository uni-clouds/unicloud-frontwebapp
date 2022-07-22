import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { ToastError } from '../../Elements/ToastError'
import { useTranslation } from 'react-i18next'
import { Portal } from '@mui/material'
import { Input } from '../../Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { Heading } from '../../Heading'
import { TypeUpdateResources, UpdateResourcesProps } from './types'
import { schemaUpdateResources } from './validation'
import {
  handleUpdateResource,
  responseUpdateResource
} from '../../../util/resources'

import * as Styled from './styles'

export const UpdateResource: FC<UpdateResourcesProps> = ({ id }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<TypeUpdateResources>({
    resolver: yupResolver(schemaUpdateResources)
  })
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { t: translate } = useTranslation()

  const handleUpdateResources: SubmitHandler<TypeUpdateResources> = async (
    data
  ) => {
    handleUpdateResource(id, data.new_resource_name)
    !!responseUpdateResource && setIsSuccess(true)
    reset()
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
            message={`Recurso atualizado com sucesso!`}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <Heading size='normal' as='h3'>
        Gerencie seus recursos
      </Heading>
      <Styled.Form
        onSubmit={handleSubmit(handleUpdateResources)}
        action='PATCH'
      >
        <Input
          label='Atualize o recurso'
          placeholder='Informe o nome do recurso'
          type='text'
          {...register('new_resource_name')}
          error={errors.new_resource_name}
        />
        <SubmitButton isForm>Atualizar</SubmitButton>
      </Styled.Form>
    </Styled.Container>
  )
}
