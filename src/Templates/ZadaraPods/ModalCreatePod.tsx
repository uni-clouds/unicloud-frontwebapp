import { Modal } from '../../components/Elements/ModalDefault'
import { CreatePod as CreatePodForm } from '../../components/Forms/CreatePod'
import { ModalCreatePodProps } from './types'

export const ModalCreatePod: React.FC<ModalCreatePodProps> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Modal height={500} isOpen={isOpen} handleClose={handleClose} width='md'>
      <CreatePodForm handleClose={handleClose} />
    </Modal>
  )
}
