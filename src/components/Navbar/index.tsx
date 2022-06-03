import { useState } from 'react'
import { HeaderBar } from './HeaderBar'
import { Sidebar } from './Sidebar'
import { NavbarProps } from './types'

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <HeaderBar isOpen={isOpen} openDrawer={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} closeDrawer={() => setIsOpen(!isOpen)}>
        {children}
      </Sidebar>
    </>
  )
}

export default Navbar
