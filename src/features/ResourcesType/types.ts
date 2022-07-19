import { IconType } from 'react-icons'

export interface ResourcesListProps {
  types: Array<{
    icon: IconType
    type: string
    color: string
  }>
}
