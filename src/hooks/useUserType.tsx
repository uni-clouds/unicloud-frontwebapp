import { useQuery } from 'react-query'
import { userType } from '../components/Navbar-old/NavHeader/MenuDropdown/types'
import { api } from '../services/api'

async function getUserType(): Promise<userType> {
  const { data } = await api.get('/customer-type/')
  return data
}
const REVALIDATE_TIME = 60 * 60 //60 min
export const useUserType = () => {
  const query = useQuery('get-customer-type', getUserType, {
    staleTime: REVALIDATE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
