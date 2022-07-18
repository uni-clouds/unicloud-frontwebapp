import { FC } from 'react'
import { NavList } from '../NavList'
import { MENU_ITEMS } from './data'
import { SidebarContainer } from './Sidebar.styles'

type SidebarContainerProps = {
  isOpened: boolean
}
export const Sidebar: FC<SidebarContainerProps> = ({ isOpened }) => {
  return (
    <SidebarContainer isOpened={isOpened}>
      <NavList options={MENU_ITEMS} />
    </SidebarContainer>
  )
}
