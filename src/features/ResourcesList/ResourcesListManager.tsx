import { FC, useState } from 'react'
import { Portal } from '@mui/material'
import { ToastSuccess } from '../../components/Elements/ToastSuccess'
import { ModalUpdateResources } from './ModalUpdateResources'
import { ButtonEdit } from '../ResourcesType/ButtonEdit'
import { ButtonDelete } from '../ResourcesType/ButtonDelete'
import {
  handleRemoveResource,
  responseRemoveResource
} from '../../util/resources'
import { ResourcesListManagerProps } from './types'
import * as Styled from './styles'

export const ResourcesListManager: FC<ResourcesListManagerProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOnClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
  }
  return (
    <Styled.Box gap='2rem' justify='flex-end'>
      <ButtonEdit onClick={() => setIsOpen(true)} />
      <ButtonDelete onClick={() => handleRemoveResource(id)} />
      {!!responseRemoveResource && (
        <Portal>
          <ToastSuccess
            isSuccess={!!responseRemoveResource}
            message={responseRemoveResource}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <ModalUpdateResources
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        id={id}
      />
    </Styled.Box>
  )
}
