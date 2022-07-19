export interface NavItemProps {
  options: Options
}

export interface ExpandIconPros {
  isExpanded: boolean
  handleClick: () => void
}

export type Options = {
  name: string
  icon: React.ComponentType
  url: string
  id?: string
  depth?: number
  subItems?: Options[]
}

export type MenuItem = {
  name: string
  icon: React.ComponentType
  url: string
  subItems?: MenuItem[]
}
