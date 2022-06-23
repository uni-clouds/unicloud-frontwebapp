export interface HeaderProps {
  totalUsers: string
  invites?: string[]
}

export interface UserModalProps {
  handleClose: () => void
  isOpen: boolean
}
