import { Modal } from '../../../components/Elements/ModalDefault'
import { DetailsRequest as DetailsRequestForm } from '../../../components/Forms/DetailsRequest'
import { ModalDetailsRequestProps } from '../types'

export const ModalDetailsRequest: React.FC<ModalDetailsRequestProps> = ({
  isOpen,
  handleClose,
  data
}) => {
  return (
    <Modal height={800} isOpen={isOpen} handleClose={handleClose} width='lg'>
      <DetailsRequestForm handleClose={handleClose} data={data} />
    </Modal>
  )
}
