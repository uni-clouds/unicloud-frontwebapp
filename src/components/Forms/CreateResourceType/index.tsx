import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../../services/api'
import { PurpleButton } from '../../Elements/Buttons/PurpleButton'
import { Select } from '../../SelectInput'
import { CreateResourceTypeProps, TypeResource } from './types'

import * as Styled from './styles'
import { Modal } from '../../Elements/ModalDefault'

const OPTIONS = ['compute', 'abobora', 'tomate']
export const CreateResourceType: FC<CreateResourceTypeProps> = ({
  handleClose
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<TypeResource>({})
  const [isDisabled, setIsDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleCreateResourceType: SubmitHandler<TypeResource> = async (
    data
  ) => {
    console.log('🐼', data)
    try {
      const request = await api.post('/resources-types/', {
        resource_type: data.resource_type
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
    <Styled.Container
      onSubmit={() => console.log('deseja criar?')}
      action='POST'
    >
      <Select options={OPTIONS} label='Tipo de recurso' />
      <PurpleButton name='criar' onclick={() => console.log('deseja criar?')}>
        Criar
      </PurpleButton>
    </Styled.Container>
  )
}
