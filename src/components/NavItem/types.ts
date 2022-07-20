import { IconType } from 'react-icons'

export interface NavItemProps {
  options: Options
  isOpened: boolean
}

export interface ExpandIconPros {
  isExpanded: boolean
  handleClick: () => void
}

export type Options = {
  name: string
  icon: IconType
  url: string
  id?: string
  depth?: number
  subItems?: Options[]
}

export type MenuItem = {
  name: string
  icon: IconType
  url: string
  subItems?: MenuItem[]
}
