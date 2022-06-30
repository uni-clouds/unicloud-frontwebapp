import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { HeaderBar } from './HeaderBar'
import { Sidebar } from './Sidebar'
import { NavbarProps } from './types'

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null)
  const { breakpoints } = useTheme()
  const matches = useMediaQuery(breakpoints.up('lg'))
  useEffect(() => {
    !!matches ? setIsOpen(true) : setIsOpen(false)
  }, [matches])
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
