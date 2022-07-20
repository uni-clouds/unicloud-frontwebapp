import { CustomerTableType } from '../../components/Tables/Customers/types'

export interface HeaderProps {
  totalUsers: number
  data: CustomerTableType[]
}

export interface CreateCustomerModalProps {
  handleClose: () => void
  isOpen: boolean
}

export interface InviteListTypes {
  data?: Array<Invite>
}

export type Invite = {
  id: number
  created_at: string
  email: string
}

export interface ModalDetailsCustomerProps extends CreateCustomerModalProps {
  data: CustomerTableType[]
}
