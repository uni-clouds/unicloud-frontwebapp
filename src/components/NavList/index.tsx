import { FC } from 'react'
import { NavItem } from '../NavItem'
import * as Styled from './styles'
import { NavListProps } from './types'

export const NavList: FC<NavListProps> = ({ options }) => {
  return (
    <Styled.List>
      {options.map((option) => (
        <NavItem options={option} />
      ))}
    </Styled.List>
  )
}
