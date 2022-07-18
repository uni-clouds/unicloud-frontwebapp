import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navlink } from '../Navlink'
import { ExpandIcon } from './ExpandedIcon'
import { NavSubItem } from '../NavSubItem'
import { NavItemProps } from './types'
import * as Styled from './styles'

export const NavItem: FC<NavItemProps> = ({ menuItem }) => {
  const [isExpanded, toggleExpanded] = useState(false)

  const { pathname } = useLocation()
  const selected = pathname === menuItem.url
  const isNested = menuItem.subItems && menuItem.subItems?.length > 0

  const onClick = () => {
    toggleExpanded((prev) => !prev)
  }
  return (
    <>
      <Styled.NavList className={selected ? 'selected' : ''}>
        <Navlink
          path={menuItem.url}
          Icon={menuItem.icon}
          title={menuItem.name}
          depth={menuItem.depth}
        />
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </Styled.NavList>
      {isExpanded && isNested ? (
        <NavSubItem
          options={menuItem.subItems}
          isExpanded={isExpanded}
          isNested={isNested}
        />
      ) : null}
    </>
  )
}
