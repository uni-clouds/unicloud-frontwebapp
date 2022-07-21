import { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar-old'
import * as Styled from './styles'
import { Footer } from '../Footer'
import { Header } from '../../features/Header'

import { Sidebar } from '../../features/Sidebar'

import { LayoutProps } from './types'
import { useCustomersList } from '../../hooks/useCustomersList'
import { useDecode } from '../../hooks/useDecode'
import { useUsersList } from '../../hooks/useUsersList'
import { useGetResources } from '../../hooks/useGetResources'
import { useGetResourcesType } from '../../hooks/useGetResourcesType'
import { useUserData } from '../../hooks/useUserData'
import { usePodsData } from '../../hooks/usePodsData'
import { useContracts } from '../../hooks/useContracts'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpened, setOpened] = useState(true)
  const clients = useCustomersList()
  const decode = useDecode()
  const user = useUsersList()
  const resources = useGetResources()
  const resourcesType = useGetResourcesType()
  const userData = useUserData()
  const pods = usePodsData()
  const contracts = useContracts()
  const toggleDrawer = () => {
    setOpened((prev) => !prev)
  }
  useMemo(() => {
    clients.data
    decode
    user.data
    resources.data
    resourcesType.data
    userData.data
    pods.data
    contracts.data
  }, [
    clients,
    decode,
    user,
    resources,
    resourcesType,
    userData,
    pods,
    contracts
  ])
  return (
    <Styled.Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Styled.Content>
        <Sidebar isOpened={isOpened} />
        <Styled.PageContainer>{children}</Styled.PageContainer>
        <Outlet />
      </Styled.Content>
      <Footer local='' />
    </Styled.Container>
  )
}

/**
 * <Navbar>
        <section className='ml-[14.5rem] px-6 lg:px-6 py-6'>{children}</section>
      </Navbar>

      <Outlet />
 */
