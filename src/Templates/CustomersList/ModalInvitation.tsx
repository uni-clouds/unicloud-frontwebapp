import { Modal } from '../../components/Elements/ModalDefault'
import { CreateCustomer as CreateCustomerForm } from '../../components/Forms/CreateCustomer'
import { InvitationModalProps } from './types'

export const ModalInvitation: React.FC<InvitationModalProps> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Modal height={300} isOpen={isOpen} handleClose={handleClose} width='md'>
      <CreateCustomerForm handleClose={handleClose} />
    </Modal>
  )
}
