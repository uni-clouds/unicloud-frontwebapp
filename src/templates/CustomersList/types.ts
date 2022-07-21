import { CustomerTableType } from '../../components/Tables/Customers/types'
import { RequestTableType } from '../../components/Tables/CustomerRequests/types'

export interface HeaderProps {
  totalUsers: number
  data: CustomerTableType[]
}
export interface RequestHeaderProps {
  totalUsers: number
  data: RequestTableType[]
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
export interface ModalDetailsRequestProps extends CreateCustomerModalProps {
  data: RequestTableType[]
}
