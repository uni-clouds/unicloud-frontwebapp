import { colors } from '../../styles/colors'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavlinkProps } from './types'
import * as Styled from './styles'

export const Navlink: FC<NavlinkProps> = ({ path, Icon, title, depth }) => {
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
            <Icon />
          </Styled.IconBox>
          <Styled.LinkBox>{title}</Styled.LinkBox>
        </Styled.Container>
      </NavLink>
    </Styled.ListItem>
  )
}
