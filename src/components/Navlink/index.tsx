import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ExpandIcon } from '../NavItem/ExpandedIcon'
import { ACTIVE_STYLE } from '../../constants/styles'
import { NavlinkProps } from './types'

import * as Styled from './styles'

export const Navlink: FC<NavlinkProps> = ({ ...props }) => {
  return (
    <Styled.ListItem>
      <NavLink
        to={props.path}
        style={({ isActive }) => (isActive ? ACTIVE_STYLE : undefined)}
      >
        <Styled.Container>
          <Styled.IconBox depth={props.depth}>
            <props.Icon size={23} />
          </Styled.IconBox>
          {props.isOpened && (
            <Styled.LinkBox isOpened={props.isOpened}>
              {props.title}
            </Styled.LinkBox>
          )}
        </Styled.Container>
      </NavLink>
      {props.nested ? (
        <ExpandIcon isExpanded={props.expanded} handleClick={props.onClick} />
      ) : null}
    </Styled.ListItem>
  )
}
