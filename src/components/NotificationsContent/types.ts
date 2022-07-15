export interface CardNotificationsProps {
  type: string
  description: string
  time: string
}

export interface NotificationsContentProps {
  data?: Array<{
    type: string
    description: string
    time: string
  }>
}
