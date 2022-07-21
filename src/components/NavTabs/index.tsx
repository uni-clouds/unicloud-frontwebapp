import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify-icon/react'
import * as Styled from './styles'
import { NavTabsProps } from './types'

export const NavTab: FC<NavTabsProps> = ({ name, path, icon }) => {
  const { pathname } = useLocation()
  const activePath = pathname === path ? true : false
  return (
    <NavLink to={path}>
      <Styled.TabsContainer isActive={activePath}>
        <Styled.LinkBox>
          <Icon icon={icon} style={{ fontSize: '1.5rem' }} />
        </Styled.LinkBox>
        <Styled.LinkBox>{name}</Styled.LinkBox>
      </Styled.TabsContainer>
    </NavLink>
  )
}
