import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavItem } from '../NavItem'
import * as Styled from './styles'
import { NavListProps } from './types'

export const NavList: FC<NavListProps> = ({ options, isOpened }) => {
  return (
    <Styled.List>
      {options.map((option) => (
        <NavItem options={option} key={uuidv4()} isOpened={isOpened} />
      ))}
    </Styled.List>
  )
}
