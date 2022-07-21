import { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar-old'
import * as Styled from './styles'
import { Footer } from '../Footer'
import { Header } from '../../features/Header'
import { Sidebar } from '../../features/Sidebar'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpened, setOpened] = useState(true)

  const toggleDrawer = () => {
    setOpened((prev) => !prev)
  }
  return (
    <Styled.Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Styled.Content>
        <Sidebar isOpened={isOpened} />
        <Styled.PageContainer>{children}</Styled.PageContainer>
        <Outlet />
      </Styled.Content>
      <Footer local='' />
    </Styled.Container>
  )
}
