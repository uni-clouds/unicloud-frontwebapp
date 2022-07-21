import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navlink } from '../Navlink'
import { ExpandIcon } from './ExpandedIcon'
import { NavSubItem } from '../NavSubItem'
import { NavItemProps } from './types'
import * as Styled from './styles'

export const NavItem: FC<NavItemProps> = ({ options, isOpened }) => {
  const [isExpanded, toggleExpanded] = useState(false)

  const isNested = options.subItems && options.subItems?.length > 0

  const onClick = () => {
    toggleExpanded((prev) => !prev)
  }
  return (
    <>
      <Styled.NavList isOpened={isOpened}>
        <Navlink
          path={options.url}
          icon={options.icon}
          title={options.name}
          depth={options.depth}
          nested={isNested}
          expanded={isExpanded}
          onClick={onClick}
          isOpened={isOpened}
        />
      </Styled.NavList>
      {isExpanded && isNested ? (
        <NavSubItem
          options={options.subItems}
          isExpanded={isExpanded}
          isNested={isNested}
          isOpened={isOpened}
        />
      ) : null}
    </>
  )
}
