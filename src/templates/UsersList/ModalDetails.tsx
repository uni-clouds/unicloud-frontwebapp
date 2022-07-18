import { Modal } from '../../components/Elements/ModalDefault'
import { DetailsUser } from '../../components/Forms/DetailsUser'
import { ModalDetailsProps } from './types'

export const ModalDetails: React.FC<ModalDetailsProps> = ({
  isOpen,
  handleClose,
  data
}) => {
  return (
    <Modal height={750} isOpen={isOpen} handleClose={handleClose} width='lg'>
      <DetailsUser handleOnClose={handleClose} data={data} />
    </Modal>
  )
}
