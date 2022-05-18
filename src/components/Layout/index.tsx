import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </main>
  )
}
