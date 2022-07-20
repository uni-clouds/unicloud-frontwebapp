import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as Styled from './styles'
import { NavTabsProps } from './types'

export const NavTab: FC<NavTabsProps> = ({ name, path, icon: Icon }) => {
  const { pathname } = useLocation()
  const activePath = pathname === path ? true : false
  return (
    <NavLink to={path}>
      <Styled.TabsContainer isActive={activePath}>
        <Styled.LinkBox>
          <Icon />
        </Styled.LinkBox>
        <Styled.LinkBox>{name}</Styled.LinkBox>
      </Styled.TabsContainer>
    </NavLink>
  )
}
