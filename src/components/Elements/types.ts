export interface DividerProps {
  text?: string
}

export interface NotificationIconProps {
  isNotification?: boolean
}

export interface AvatarNameProps {
  name?: string
}

export interface ToastErrorProps {
  message: string
  isError: boolean
  handleClose: () => void
}
