import { Modal } from '../../components/Elements/ModalDefault'
import { CreateCustomer as CreateCustomerForm } from '../../components/Forms/CreateCustomer'
import { CreateCustomerModalProps } from './types'

export const ModalNewCustomer: React.FC<CreateCustomerModalProps> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Modal height={400} isOpen={isOpen} handleClose={handleClose} width='md'>
      <CreateCustomerForm handleClose={handleClose} />
    </Modal>
  )
}
