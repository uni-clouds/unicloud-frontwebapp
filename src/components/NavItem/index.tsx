import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navlink } from '../Navlink'
import { ExpandIcon } from './ExpandedIcon'
import { NavSubItem } from '../NavSubItem'
import { NavItemProps } from './types'
import * as Styled from './styles'

export const NavItem: FC<NavItemProps> = ({ options }) => {
  const [isExpanded, toggleExpanded] = useState(false)

  const { pathname } = useLocation()
  const selected = pathname === options.url
  const isNested = options.subItems && options.subItems?.length > 0

  const onClick = () => {
    toggleExpanded((prev) => !prev)
  }
  return (
    <>
      <Styled.NavList className={selected ? 'selected' : ''}>
        <Navlink
          path={options.url}
          Icon={options.icon}
          title={options.name}
          depth={options.depth}
        />
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </Styled.NavList>
      {isExpanded && isNested ? (
        <NavSubItem
          options={options.subItems}
          isExpanded={isExpanded}
          isNested={isNested}
        />
      ) : null}
    </>
  )
}
