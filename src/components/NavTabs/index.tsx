import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ACTIVE_STYLE } from '../../constants/styles'
import * as Styled from './styles'
import { NavTabsProps } from './types'

export const NavTab: FC<NavTabsProps> = ({ name, path, icon: Icon }) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => (isActive ? ACTIVE_STYLE : undefined)}
    >
      <Styled.TabsContainer>
        <Styled.LinkBox>
          <Icon />
        </Styled.LinkBox>
        <Styled.LinkBox>{name}</Styled.LinkBox>
      </Styled.TabsContainer>
    </NavLink>
  )
}
