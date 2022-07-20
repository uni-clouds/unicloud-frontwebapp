import { IconType } from 'react-icons'

export interface NavlinkProps {
  path: string
  Icon?: IconType
  title?: string
  depth?: number
  nested: boolean
  expanded: boolean
  onClick: () => void
  isOpened: boolean
}
