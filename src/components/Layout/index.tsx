import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar>
        <section className='ml-[14.5rem] px-6 lg:px-6 py-6'>{children}</section>
      </Navbar>

      <Outlet />
    </>
  )
}
