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

import { useUserType } from '../../../hooks/useUserType'
import { OrganizationLogo } from '../../Elements/OrganizationLogo'
import { Drawer, DrawerHeader, Main } from './variants'
import { SidebarProps } from './types'
import { OrganizationLogoProps } from '../../Elements/OrganizationLogo/types'
import { Footer } from '../../Footer'
import { useToggleTheme } from '../../../hooks/useToggleTheme'
import { colors } from '../../../styles/colors'
import { Box } from '@mui/system'
import { useTranslation } from 'react-i18next'

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeDrawer,
  children
}) => {
  const [organizationLogo, setOrganizationLogo] =
    useState<OrganizationLogoProps>()
  const theme = useTheme()
  const { toggleColorMode } = useToggleTheme()
  const { pathname } = useLocation()
  const { token } = parseCookies()
  const { data } = useUserType()
  const role = data?.type
  const { t } = useTranslation()

  const customHover =
    theme.palette.mode === 'dark' ? colors.brand[500] : colors.brand[600]
  const iconColor =
    theme.palette.mode === 'dark' ? 'inherit' : 'rgba(0, 0, 0, 0.54)'

  useEffect(() => {
    if (token !== undefined) {
      getOrganizationLogo()
    }
  }, [])

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
  const styleListItem = { display: 'block', '&:hover': { color: customHover } }
  const styleListButton = {
    minHeight: 48,
    justifyContent: isOpen ? 'initial' : 'center',
    px: 3
  }
  const styleListText = { opacity: isOpen ? 1 : 0 }

  return (
    <>
      <Drawer variant='permanent' open={isOpen}>
        <DrawerHeader>
          <span className='w-28 mx-auto max-h-10'>
            {!!organizationLogo?.logo ? (
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
          <ListItem disablePadding sx={styleListItem}>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-brand-800' : undefined
              }
            >
              <ListItemButton sx={styleListButton}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    '&:hover': { color: customHover },
                    color:
                      pathname === '/' || pathname === '/user-profile'
                        ? colors.brand[800]
                        : iconColor
                  }}
                >
                  <RiHome3Line className='text-xl' />
                </ListItemIcon>
                <ListItemText sx={styleListText}>{t('home')}</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>

          {role === 'root' || 'partner' ? (
            <ListItem disablePadding sx={styleListItem}>
              <NavLink
                to='/customers'
                className={({ isActive }) =>
                  isActive ? 'text-brand-800' : undefined
                }
              >
                <ListItemButton sx={styleListButton}>
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
                  <ListItemText sx={styleListText}>
                    {t('customers')}
                  </ListItemText>
                </ListItemButton>
              </NavLink>
            </ListItem>
          ) : null}

          {role === 'root' && (
            <>
              <ListItem disablePadding sx={styleListItem}>
                <NavLink
                  to='/unicloud-pods'
                  className={({ isActive }) =>
                    isActive ? 'text-brand-800' : undefined
                  }
                >
                  <ListItemButton sx={styleListButton}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isOpen ? 3 : 'auto',
                        justifyContent: 'center',
                        '&:hover': { color: customHover },
                        color:
                          pathname === '/unicloud-pods'
                            ? colors.brand[800]
                            : iconColor
                      }}
                    >
                      <RiDashboardLine className='text-xl' />
                    </ListItemIcon>
                    <ListItemText sx={styleListText}>{t('pods')}</ListItemText>
                  </ListItemButton>
                </NavLink>
              </ListItem>

              <ListItem disablePadding sx={styleListItem}>
                <NavLink
                  to='/monitor'
                  className={({ isActive }) =>
                    isActive ? 'text-brand-800' : undefined
                  }
                >
                  <ListItemButton sx={styleListButton}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isOpen ? 3 : 'auto',
                        justifyContent: 'center',
                        '&:hover': { color: customHover },
                        color:
                          pathname === '/monitor'
                            ? colors.brand[800]
                            : iconColor
                      }}
                    >
                      <RiNumbersLine className='text-xl' />
                    </ListItemIcon>
                    <ListItemText sx={styleListText}>
                      {t('monitoring')}
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            </>
          )}

          <ListItem disablePadding sx={styleListItem}>
            <NavLink
              to='/user-list-default'
              className={({ isActive }) =>
                isActive ? 'text-brand-800' : undefined
              }
            >
              <ListItemButton sx={styleListButton}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    '&:hover': { color: customHover },
                    color:
                      pathname === '/user-list-default'
                        ? colors.brand[800]
                        : iconColor
                  }}
                >
                  <RiTeamLine className='text-xl' />
                </ListItemIcon>
                <ListItemText sx={styleListText}>{t('users')}</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>

        <List sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <ListItem disablePadding sx={styleListItem} onClick={toggleColorMode}>
            <ListItemButton sx={styleListButton}>
              <ListItemIcon
                sx={{
                  minWidth: 60,
                  mx: 'auto',
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
        <Box sx={{ marginLeft: 23 }}>
          <Footer local='pages' />
        </Box>
      </Main>
    </>
  )
}
