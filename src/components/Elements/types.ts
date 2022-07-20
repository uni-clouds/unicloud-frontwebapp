import { Breakpoint } from '@mui/material'
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

export interface ToastSuccessProps {
  message: string
  isSuccess: boolean
  handleClose: () => void
}

export interface ToastWarningProps {
  message: string
  isWarning: boolean
  handleClose: () => void
}

export interface ModalProps {
  handleClose: () => void
  isOpen?: boolean
  children: ReactNode
  height: number
  width: Breakpoint | false
}
