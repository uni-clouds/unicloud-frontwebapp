import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import {
  RiDashboardLine,
  RiTeamLine,
  RiNumbersLine,
  RiGroup2Line
} from 'react-icons/ri'

import { Drawer, DrawerHeader, NavItem } from './variants'
import { MenuDataProp, SidebarProps } from './types'

import { Logo } from '../../Logo'

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeDrawer,
  children
}) => {
  const [menuData, setMenuData] = useState('')
  const theme = useTheme()

  useEffect(() => {
    getMenuData()
  }, [])

  async function getMenuData() {
    try {
      const request = await api.get('/menu/')
      if (request.status === 200 && request.data !== undefined) {
        const response = request.data
        setMenuData(response)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <aside className='text-lg'>
      <Drawer variant='permanent' open={isOpen}>
        <DrawerHeader>
          <span className='w-28 mx-auto'>
            <Logo />
          </span>
          <IconButton onClick={closeDrawer}>
            {theme.direction === 'rtl' ? <BsChevronRight /> : <BsChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuData.indexOf('Administração') !== -1 && (
            <>
              <ListItem
                disablePadding
                sx={{ display: 'block', '&:hover': { color: '#7500ff' } }}
              >
                <Link to='/customers'>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: isOpen ? 'initial' : 'center',
                      px: 3
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isOpen ? 3 : 'auto',
                        justifyContent: 'center',
                        '&:hover': { color: '#7500ff' }
                      }}
                    >
                      <RiGroup2Line />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                      Clientes
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem
                disablePadding
                sx={{ display: 'block', '&:hover': { color: '#7500ff' } }}
              >
                <Link to='/unicloud-pods'>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: isOpen ? 'initial' : 'center',
                      px: 3
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isOpen ? 3 : 'auto',
                        justifyContent: 'center',
                        '&:hover': { color: '#7500ff' }
                      }}
                    >
                      <RiDashboardLine />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                      Pods
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem
                disablePadding
                sx={{ display: 'block', '&:hover': { color: '#7500ff' } }}
              >
                <Link to='/monitor'>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: isOpen ? 'initial' : 'center',
                      px: 3
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isOpen ? 3 : 'auto',
                        justifyContent: 'center',
                        '&:hover': { color: '#7500ff' }
                      }}
                    >
                      <RiNumbersLine />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                      Monitoramento
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            </>
          )}

          <ListItem
            disablePadding
            sx={{ display: 'block', '&:hover': { color: '#7500ff' } }}
          >
            <Link to='/user-list-default'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isOpen ? 'initial' : 'center',
                  px: 3
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    '&:hover': { color: '#7500ff' }
                  }}
                >
                  <RiTeamLine />
                </ListItemIcon>
                <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                  Usuários
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </aside>
  )
}
