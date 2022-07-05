import { Dialog, DialogContent } from '@mui/material'
import { ModalProps } from './types'

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  children,
  height,
  width
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='invite-user-form'
      aria-describedby='invite-user-form'
      fullWidth
      maxWidth={width}
      sx={{
        '& .MuiPaper-root': {
          height: height,
          overflowY: 'hidden',
          borderRadius: 2
        },
        overflow: 'hidden'
      }}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
