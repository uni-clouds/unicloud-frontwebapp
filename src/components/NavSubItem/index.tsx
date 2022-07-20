import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavItem } from '../NavItem'
import { ListContainer } from './MenuItemsList.styles'
import { MenuItemsListProps } from './types'

export const NavSubItem: FC<MenuItemsListProps> = ({
  options,
  isExpanded,
  isOpened,
  isNested
}) => {
  return (
    <>
      {isExpanded && isNested ? (
        <ListContainer>
          {options.map((option) => (
            <NavItem options={option} key={uuidv4()} isOpened={isOpened} />
          ))}
        </ListContainer>
      ) : null}
    </>
  )
}
