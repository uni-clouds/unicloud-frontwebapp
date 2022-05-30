import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='relative'>
      <Header />
      {children}
      <Footer />
      <Outlet />
    </main>
  )
}
