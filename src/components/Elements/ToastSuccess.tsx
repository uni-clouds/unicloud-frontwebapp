import { forwardRef, ForwardRefRenderFunction } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { ToastSuccessProps } from './types'

const Alert: ForwardRefRenderFunction<HTMLDivElement, ToastSuccessProps> = (
  { message, isSuccess, handleClose, ...rest },
  ref
) => {
  return (
    <Snackbar
      open={isSuccess}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <MuiAlert
        severity='success'
        sx={{ width: '100%' }}
        elevation={1}
        ref={ref}
        {...rest}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export const ToastSuccess = forwardRef(Alert)
