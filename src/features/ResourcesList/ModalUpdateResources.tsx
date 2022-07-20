import { FC } from 'react'
import { Modal } from '../../components/Elements/ModalDefault'
import { UpdateResource } from '../../components/Forms/UpdateResource'
import { ModalResourcesUpdateProps } from './types'

export const ModalUpdateResources: FC<ModalResourcesUpdateProps> = ({
  isOpen,
  id,
  handleClose
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} width='sm' height={350}>
      <UpdateResource id={id} />
    </Modal>
  )
}
