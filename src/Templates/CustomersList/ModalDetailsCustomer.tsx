import { Modal } from '../../components/Elements/ModalDefault'
import { DetailsCustomer as DetailsCustomerForm } from '../../components/Forms/DetailsCustomer'
import { ModalDetailsCustomerProps } from './types'

export const ModalDetailsCustomer: React.FC<ModalDetailsCustomerProps> = ({
  isOpen,
  handleClose,
  data
}) => {
  return (
    <Modal height={600} isOpen={isOpen} handleClose={handleClose} width='lg'>
      <DetailsCustomerForm handleClose={handleClose} data={data} />
    </Modal>
  )
}
