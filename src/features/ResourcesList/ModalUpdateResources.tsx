import { FC } from 'react'
import { Modal } from '../../components/Elements/ModalDefault'
import { UpdateResourceType } from '../../components/Forms/UpdateResourceType'
import { ModalResourcesUpdateProps } from './types'

export const ModalUpdateResources: FC<ModalResourcesUpdateProps> = ({
  isOpen,
  id,
  handleClose
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} width='sm' height={300}>
      <UpdateResourceType id={id} />
    </Modal>
  )
}
