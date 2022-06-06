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
export interface TitleDashboardProps {
  text: string
}

export interface ToastErrorProps extends AlertProps {
  message: string
  isError: boolean
  handleClose: () => void
}
