import { MdMenu, MdChevronLeft } from 'react-icons/md'
import { FC } from 'react'
import { HeaderContainer, IconContainer, TitleContainer } from './Header.styles'
import { NavHeader } from '../../Navbar/NavHeader'

type HeaderProps = {
  isOpened: boolean
  toggleDrawer: () => void
}

export const Header: FC<HeaderProps> = ({ isOpened, toggleDrawer }) => {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <MdChevronLeft /> : <MdMenu />}
      </IconContainer>
      <NavHeader />
    </HeaderContainer>
  )
}
