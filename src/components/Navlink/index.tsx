import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavlinkProps } from './types'
import * as Styled from './styles'
import { colors } from '../../styles/colors'
import { ExpandIcon } from '../NavItem/ExpandedIcon'

export const Navlink: FC<NavlinkProps> = ({
  path,
  Icon,
  title,
  depth,
  nested,
  expanded,
  isOpened,
  onClick
}) => {
  const activeStyle = {
    color: colors.brand[600]
  }
  return (
    <Styled.ListItem>
      <NavLink
        to={path}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <Styled.Container>
          <Styled.IconBox depth={depth}>
            <Icon size={23} />
          </Styled.IconBox>
          {isOpened && (
            <Styled.LinkBox isOpened={isOpened}>{title}</Styled.LinkBox>
          )}
        </Styled.Container>
      </NavLink>
      {nested ? (
        <ExpandIcon isExpanded={expanded} handleClick={onClick} />
      ) : null}
    </Styled.ListItem>
  )
}
