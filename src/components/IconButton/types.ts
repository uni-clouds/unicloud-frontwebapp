import { IconType } from 'react-icons/lib'

export interface IconButtonProps {
  icon: IconType
  title: string
  size: number | string
  onClick?: () => void
}
