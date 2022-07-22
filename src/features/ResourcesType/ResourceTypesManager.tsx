import { FC, useState } from 'react'
import { Portal } from '@mui/material'
import { ButtonEdit } from './ButtonEdit'
import { ButtonDelete } from './ButtonDelete'
import { ToastSuccess } from '../../components/Elements/ToastSuccess'
import {
  handleRemoveResourceType,
  responseRemoveResourceType
} from '../../util/resourcesType'
import { ModalUpdateResource } from './ModalUpdateResource'
import { ResourceTypesManagerProps } from './types'
import * as Styled from './styles'

export const ResourcesTypesManager: FC<ResourceTypesManagerProps> = ({
  id
}) => {
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
      <ButtonDelete onClick={() => handleRemoveResourceType(id)} />
      {!!responseRemoveResourceType && (
        <Portal>
          <ToastSuccess
            isSuccess={!!responseRemoveResourceType}
            message={responseRemoveResourceType}
            handleClose={handleOnClose}
          />
        </Portal>
      )}
      <ModalUpdateResource
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        id={id}
      />
    </Styled.Box>
  )
}
