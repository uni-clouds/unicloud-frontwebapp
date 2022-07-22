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
  icon: string
  url: string
  id?: string
  fontWeight?: string
  fontSize?: string
  depth?: number
  subItems?: Options[]
}

export type MenuItem = {
  name: string
  icon: string
  url: string
  subItems?: MenuItem[]
}
