import { parseCookies } from 'nookies'
import { FC, useEffect, useState } from 'react'
import { OrganizationLogo } from '../../components/Elements/OrganizationLogo'
import { Logo } from '../../components/Logo'
import { NavList } from '../../components/NavList'
import { api } from '../../services/api'
import { ToggleTheme } from '../ToggleTheme'
import { MENU_ITEMS } from './data'
import { SidebarContainer, LogoBox } from './styles'
import { SidebarContainerProps } from './types'

export const Sidebar: FC<SidebarContainerProps> = ({ isOpened }) => {
  const [organizationLogo, setOrganizationLogo] = useState<{ logo: string }>()
  const { token } = parseCookies()

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
  return (
    <SidebarContainer isOpened={isOpened}>
      {isOpened && (
        <LogoBox>
          {organizationLogo?.logo ? (
            <OrganizationLogo logo={organizationLogo.logo} />
          ) : (
            <Logo />
          )}
        </LogoBox>
      )}
      <NavList options={MENU_ITEMS} isOpened={isOpened} />
      {/* <ToggleTheme /> */}
    </SidebarContainer>
  )
}
