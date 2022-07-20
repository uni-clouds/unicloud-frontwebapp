import { FC, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import * as Styled from './styles'
import { IconButton } from '../../components/IconButton'
import { ResourcesListManagerProps } from './types'
import {
  handleRemoveResourceType,
  responseRemoveResourceType
} from '../../util/resourcesType'
import { Portal } from '@mui/material'
import { ToastSuccess } from '../../components/Elements/ToastSuccess'
import { ModalUpdateResources } from './ModalUpdateResources'

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
      <IconButton
        icon={FiEdit}
        size={20}
        title='Editar'
        onClick={() => setIsOpen(true)}
      />
      <IconButton
        icon={BsTrash}
        size={20}
        title='Excluir'
        onClick={() => handleRemoveResourceType(id)}
      />
      {!!responseRemoveResourceType && (
        <Portal>
          <ToastSuccess
            isSuccess={!!responseRemoveResourceType}
            message={responseRemoveResourceType}
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
