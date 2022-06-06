import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState
} from 'react'
import { ToastErrorProps } from './types'

const Alert: ForwardRefRenderFunction<HTMLDivElement, ToastErrorProps> = (
  { message, isError, handleClose, ...rest },
  ref
) => {
  return (
    <Snackbar
      open={isError}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={handleClose}
    >
      <MuiAlert
        severity='error'
        sx={{ width: '100%', marginBottom: '50px' }}
        ref={ref}
        {...rest}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export const ToastError = forwardRef(Alert)
