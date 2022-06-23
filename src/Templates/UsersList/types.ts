export interface HeaderProps extends InviteListTypes {
  totalUsers: string
}

export interface UserModalProps {
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
