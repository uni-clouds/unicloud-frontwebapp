import { MenuItem } from '../NavItem/types'

export interface MenuItemsListProps {
  options: MenuItem[]
  isExpanded: boolean
  isNested: boolean
}
