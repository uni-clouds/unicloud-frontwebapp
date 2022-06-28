import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { api } from '../../../services/api'
import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import {
  RiDashboardLine,
  RiTeamLine,
  RiNumbersLine,
  RiGroup2Line,
  RiHome3Line
} from 'react-icons/ri'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { Logo } from '../../Logo'

import { OrganizationLogo } from '../../Elements/OrganizationLogo'
import { Drawer, DrawerHeader, Main } from './variants'
import { MenuDataProp, SidebarProps } from './types'
import { OrganizationLogoProps } from '../../Elements/OrganizationLogo/types'
import { Footer } from '../../Footer'
import { useToggleTheme } from '../../../hooks/useToggleTheme'
import { colors } from '../../../styles/colors'

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeDrawer,
  children
}) => {
  const [menuData, setMenuData] = useState<MenuDataProp>()
  const [organizationLogo, setOrganizationLogo] =
    useState<OrganizationLogoProps>()
  const theme = useTheme()
  const { toggleColorMode } = useToggleTheme()
  const { pathname } = useLocation()
  const { token } = parseCookies()
  const customHover =
    theme.palette.mode === 'dark' ? colors.brand[500] : colors.brand[600]
  const iconColor =
    theme.palette.mode === 'dark' ? 'inherit' : 'rgba(0, 0, 0, 0.54)'
  useEffect(() => {
    if (token !== undefined) {
      getMenuData()
      getOrganizationLogo()
    }
  }, [])

  async function getMenuData() {
    try {
      const request = await api.get('/menu/')
      if (request.status === 200 && request.data !== undefined) {
        const response = request.data
        setMenuData(response)
      }
    } catch (err) {
      // console.error(err)
    }
  }

  async function getOrganizationLogo() {
    try {
      const request = await api.get('/organization-logo/')
      if (
        request.status === 200 &&
        request.status !== undefined &&
        request.status !== null
      ) {
        setOrganizationLogo(request.data)
      }
    } catch (err) {
      console.error('getLogo', err)
    }
  }

  const role = menuData?.menu.find((data) => data.heading === 'Administração')
  return (
    <>
      <Drawer variant='permanent' open={isOpen}>
        <DrawerHeader>
          <span className='w-28 mx-auto max-h-10'>
            {!!organizationLogo ? (
              <Link to='/'>
                <OrganizationLogo logo={organizationLogo.logo} />
              </Link>
            ) : (
              <Logo />
            )}
          </span>
          <IconButton onClick={closeDrawer}>
            {theme.direction === 'rtl' ? <BsChevronRight /> : <BsChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block', '&:hover': { color: customHover } }}
          >
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-brand-800' : undefined
              }
            >
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
                    '&:hover': { color: customHover },
                    color: pathname === '/' ? colors.brand[800] : iconColor
                  }}
                >
                  <RiHome3Line className='text-xl' />
                </ListItemIcon>
                <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                  Home
                </ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          {!!role && (
            <>
              <ListItem
                disablePadding
                sx={{ display: 'block', '&:hover': { color: customHover } }}
              >
                <NavLink
                  to='/customers'
                  className={({ isActive }) =>
                    isActive ? 'text-brand-800' : undefined
                  }
                >
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
                        '&:hover': { color: customHover },
                        color:
                          pathname === '/customers'
                            ? colors.brand[800]
                            : iconColor
                      }}
                    >
                      <RiGroup2Line className='text-xl' />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                      Clientes
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </ListItem>

              <ListItem
                disablePadding
                sx={{ display: 'block', '&:hover': { color: customHover } }}
              >
                <NavLink
                  to='/unicloud-pods'
                  className={({ isActive }) =>
                    isActive ? 'text-brand-800' : undefined
                  }
                >
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
                        '&:hover': { color: customHover },
                        color:
                          pathname === '/unicloud-pods'
                            ? 'rgba(177, 61, 244)'
                            : iconColor
                      }}
                    >
                      <RiDashboardLine className='text-xl' />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                      Pods
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </ListItem>

              <ListItem
                disablePadding
                sx={{ display: 'block', '&:hover': { color: customHover } }}
              >
                <NavLink
                  to='/monitor'
                  className={({ isActive }) =>
                    isActive ? 'text-brand-800' : undefined
                  }
                >
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
                        '&:hover': { color: customHover },
                        color:
                          pathname === '/monitor'
                            ? 'rgba(177, 61, 244)'
                            : iconColor
                      }}
                    >
                      <RiNumbersLine className='text-xl' />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                      Monitoramento
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            </>
          )}

          <ListItem
            disablePadding
            sx={{ display: 'block', '&:hover': { color: customHover } }}
          >
            <NavLink
              to='/user-list-default'
              className={({ isActive }) =>
                isActive ? 'text-brand-800' : undefined
              }
            >
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
                    '&:hover': { color: customHover },
                    color:
                      pathname === '/user-list-default'
                        ? 'rgba(177, 61, 244)'
                        : iconColor
                  }}
                >
                  <RiTeamLine className='text-xl' />
                </ListItemIcon>
                <ListItemText sx={{ opacity: isOpen ? 1 : 0 }}>
                  Usuários
                </ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>

        <List sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <ListItem
            disablePadding
            sx={{ display: 'block', '&:hover': { color: customHover } }}
            onClick={toggleColorMode}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 3
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 60,
                  mr: isOpen ? 3 : 'auto',
                  justifyContent: 'center',
                  '&:hover': { color: customHover },
                  px: 3
                }}
              >
                {theme.palette.mode === 'dark' ? (
                  <HiOutlineMoon className='text-xl' />
                ) : (
                  <HiOutlineSun className='text-xl' />
                )}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={isOpen}>
        <DrawerHeader />
        {children}
        <Footer local='pages' />
      </Main>
    </>
  )
}
