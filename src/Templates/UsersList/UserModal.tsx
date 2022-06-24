import { Modal } from '../../components/Elements/ModalDefault'
import { InviteUser as InviteUserForm } from '../../components/Forms/InviteUser'
import { UserModalProps } from './types'

export const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Modal height={300} isOpen={isOpen} handleClose={handleClose}>
      <InviteUserForm handleClose={handleClose} />
    </Modal>
  )
}
