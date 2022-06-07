import { AlertProps } from '@mui/material'

export interface DividerProps {
  text?: string
}

export interface NotificationIconProps {
  isNotification?: boolean
}

export interface AvatarNameProps {
  name?: string
}
<<<<<<< HEAD
export interface TitleDashboardProps {
  text: string
}

export interface ToastErrorProps extends AlertProps {
=======

export interface ToastErrorProps {
>>>>>>> fix-sidebar
  message: string
  isError: boolean
  handleClose: () => void
}
