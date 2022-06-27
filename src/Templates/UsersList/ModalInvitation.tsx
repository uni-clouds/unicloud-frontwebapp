import { Modal } from '../../components/Elements/ModalDefault'
import { InviteUser as InviteUserForm } from '../../components/Forms/InviteUser'
import { InvitationModalProps } from './types'

export const ModalInvitation: React.FC<InvitationModalProps> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Modal height={300} isOpen={isOpen} handleClose={handleClose} width='md'>
      <InviteUserForm handleClose={handleClose} />
    </Modal>
  )
}
