import { useQuery } from 'react-query'
import { api } from '../services/api'
import { CustomerDataType } from '../components/Profile/types'

const REVALIDATE_TIME = 60 * 60 //60 min

async function getOrganizationData(): Promise<CustomerDataType> {
  const { data } = await api.get('/get-organization/')
  return data
}

export const useUserData = () => {
  const query = useQuery('get-organization', getOrganizationData, {
    staleTime: REVALIDATE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
