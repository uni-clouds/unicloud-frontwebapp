import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import Navbar from '../Navbar'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar>
        <section className='ml-[240px] px-16'>{children}</section>
      </Navbar>
      <Footer local='base' />
      <Outlet />
    </>
  )
}
