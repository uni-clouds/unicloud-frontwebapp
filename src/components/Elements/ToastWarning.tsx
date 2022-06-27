import { forwardRef, ForwardRefRenderFunction } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { ToastWarningProps } from './types'

const Alert: ForwardRefRenderFunction<HTMLDivElement, ToastWarningProps> = (
  { message, isWarning, handleClose, ...rest },
  ref
) => {
  return (
    <Snackbar
      open={isWarning}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <MuiAlert
        severity='warning'
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

export const ToastWarning = forwardRef(Alert)
