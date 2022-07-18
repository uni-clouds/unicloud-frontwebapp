import { FC } from 'react'
import { MdMenu, MdChevronLeft } from 'react-icons/md'
import { NavHeader } from '../../Navbar/NavHeader'
import { HeaderContainer, IconContainer } from './Header.styles'

type HeaderProps = {
  isOpened: boolean
  toggleDrawer: () => void
}

export const Header: FC<HeaderProps> = ({ isOpened, toggleDrawer }) => {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <MdChevronLeft size={30} /> : <MdMenu size={30} />}
      </IconContainer>
      <NavHeader />
    </HeaderContainer>
  )
}
