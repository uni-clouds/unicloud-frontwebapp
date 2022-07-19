import { FC } from 'react'
import { NavList } from '../../components/NavList'
import { ToggleTheme } from '../ToggleTheme'
import { MENU_ITEMS } from './data'
import { SidebarContainer } from './styles'

type SidebarContainerProps = {
  isOpened: boolean
}
export const Sidebar: FC<SidebarContainerProps> = ({ isOpened }) => {
  return (
    <SidebarContainer isOpened={isOpened}>
      <NavList options={MENU_ITEMS} />
      <ToggleTheme />
    </SidebarContainer>
  )
}
