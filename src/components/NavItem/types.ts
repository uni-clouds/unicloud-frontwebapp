import { NavlinkProps } from '../Navlink/types'

export interface NavItemProps {
  menuItem: {
    name: string
    icon: React.ComponentType
    url: string
    id: string
    depth: number
    subItems?: MenuItem[]
  }
}

export interface ExpandIconPros {
  isExpanded: boolean
  handleClick: () => void
}

export type MenuItem = {
  name: string
  icon: React.ComponentType
  url: string
  id: string
  depth: number
  subItems?: MenuItem[]
}
