import { Dialog, DialogContent } from '@mui/material'
import { InviteUser as InviteUserForm } from '../../components/Forms/InviteUser'
import { UserModalProps } from './types'

export const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  handleClose
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='invite-user-form'
      aria-describedby='invite-user-form'
      fullWidth
      maxWidth='md'
      sx={{ '& .MuiPaper-root': { height: 300, overflowY: 'hidden' } }}
    >
      <DialogContent>
        <InviteUserForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
