import { UserDataType } from '../../components/Tables/Users/types'

export interface HeaderProps extends InviteListTypes {
  totalUsers: number
}

export interface InvitationModalProps {
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

export interface ModalDetailsProps extends InvitationModalProps {
  data: UserDataType[]
}
