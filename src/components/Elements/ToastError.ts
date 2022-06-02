import { toast } from 'react-toastify'

export const ToastError = (message: string) => {
  return toast.error(message, {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'error-login',
    role: 'alert',
    theme: 'colored'
  })
}
