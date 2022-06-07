import { IconButton, Toolbar } from '@mui/material'
import { RiMenuLine } from 'react-icons/ri'
import { SearchBar } from '../Forms/SearchBar'
import { NavHeader } from './NavHeader'
import { AppBar } from './Sidebar/variants'
import { HeaderProps } from './types'

export const HeaderBar: React.FC<HeaderProps> = ({ openDrawer, isOpen }) => {
  return (
    <AppBar position='relative' open={isOpen} color='inherit'>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          aria-controls='sidebar'
          onClick={openDrawer}
          edge='start'
          sx={{
            marginRight: 5,
            ...(isOpen && { display: 'none' })
          }}
        >
          <RiMenuLine />
        </IconButton>
        <SearchBar />
        <NavHeader />
      </Toolbar>
    </AppBar>
  )
}
