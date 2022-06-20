import { AlertProps } from '@mui/material'
import { ReactNode } from 'react'

export interface DividerProps {
  text?: string
}

export interface NotificationIconProps {
  quantity: number
}

export interface AvatarNameProps {
  name?: string
}
export interface TitleDashboardProps {
  text: string
}
export interface ToastErrorProps {
  message: string
  isError: boolean
  handleClose: () => void
}
