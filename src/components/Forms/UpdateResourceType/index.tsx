import { FC, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { api } from '../../../services/api'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { ToastError } from '../../Elements/ToastError'
import { useTranslation } from 'react-i18next'
import { Portal } from '@mui/material'
import { Select } from '../../SelectInput'
import { UpdateResourceTypes, UpdateResourceTypeProps } from './types'

import * as Styled from '../CreateResourceType/styles'
import { Heading } from '../../Heading'
import {
  handleUpdateResourceType,
  responseUpdateResourceType
} from '../../../util/resourcesType'

const OPTIONS = ['', 'compute', 'tomate', 'queijo']
export const UpdateResourceType: FC<UpdateResourceTypeProps> = ({ id }) => {
  const { handleSubmit, control } = useForm<UpdateResourceTypes>()
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { t: translate } = useTranslation()

  const onUpdateResourceType: SubmitHandler<UpdateResourceTypes> = async (
    data
  ) => {
    handleUpdateResourceType(id, data.new_resource_type)
    !!responseUpdateResourceType && setIsSuccess(true)
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
        Tipos de Recurso
      </Heading>
      <Styled.Form onSubmit={handleSubmit(onUpdateResourceType)} action='PATCH'>
        <Controller
          name='new_resource_type'
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <Select
              options={OPTIONS}
              label='Selecione o tipo de recurso'
              error={error}
              {...field}
            />
          )}
        />
        <SubmitButton isForm>Atualizar</SubmitButton>
      </Styled.Form>
    </Styled.Container>
  )
}
