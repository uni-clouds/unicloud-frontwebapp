import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavTab } from '../../components/NavTabs'

import * as Styled from './styles'
import { NavigationTabsProps } from './types'

export const NavigationTabs: FC<NavigationTabsProps> = ({ links }) => {
  return (
    <Styled.Container>
      {links.map((link) => (
        <NavTab
          path={link.path}
          name={link.name}
          icon={link.icon}
          key={uuidv4()}
        />
      ))}
    </Styled.Container>
  )
}
