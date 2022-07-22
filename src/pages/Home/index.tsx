import { useMemo } from 'react'
import { Dashboard } from '../../templates/Dashboard'
import { Layout } from '../../components/Layout'

import { useCustomersList } from '../../hooks/useCustomersList'
import { useDecode } from '../../hooks/useDecode'
import { useUsersList } from '../../hooks/useUsersList'
import { useGetResources } from '../../hooks/useGetResources'
import { useGetResourcesType } from '../../hooks/useGetResourcesType'
import { useUserData } from '../../hooks/useUserData'
import { usePodsData } from '../../hooks/usePodsData'
import { useContracts } from '../../hooks/useContracts'

const HomePage: React.FC = () => {
  document.title = 'Uni.Cloud | Dashboard'
  const clients = useCustomersList()
  const decode = useDecode()
  const user = useUsersList()
  const resources = useGetResources()
  const resourcesType = useGetResourcesType()
  const userData = useUserData()
  const pods = usePodsData()
  const contracts = useContracts()
  useMemo(() => {
    clients.data
    decode
    user.data
    resources.data
    resourcesType.data
    userData.data
    pods.data
    contracts.data
  }, [])
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default HomePage
