import { FC, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { api } from '../../../services/api'
import { SubmitButton } from '../../Elements/Buttons/SubmitButton'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { ToastError } from '../../Elements/ToastError'
import { useTranslation } from 'react-i18next'
import { Portal } from '@mui/material'
import { Select } from '../../SelectInput'
import { CreateResourceTypeProps, TypeResource } from './types'

import * as Styled from './styles'

const OPTIONS = ['compute', 'abobora', 'tomate']
export const CreateResourceType: FC<CreateResourceTypeProps> = () => {
  const { handleSubmit, control, reset } = useForm<TypeResource>()
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { t: translate } = useTranslation()

  const handleCreateResourceType: SubmitHandler<TypeResource> = async (
    data
  ) => {
    console.log('🐼', data)
    try {
      const request = await api.post('/resources-type/', {
        resource_type: data.resource_type
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
    <Styled.Container
      onSubmit={handleSubmit(handleCreateResourceType)}
      action='POST'
    >
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
            message={translate('resources:created-type')}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <Controller
        name='resource_type'
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
      <SubmitButton isForm>Criar </SubmitButton>
    </Styled.Container>
  )
}
