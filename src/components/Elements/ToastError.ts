import { toast } from 'react-toastify'

export const ToastError = (message: string) => {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'error-login',
    role: 'alert',
    theme: 'light'
  })
}
