import { useQuery } from 'react-query'
import { CustomerTableType } from '../components/Tables/Customers/types'
import { api } from '../services/api'

async function getCustomers(): Promise<Array<CustomerTableType>> {
  const { data } = await api.get('/customers/')
  console.log('👀', data)
  return data
}
const REVALIDATE_TIME = 60 * 60 //60 min
export const useCustomersList = () => {
  const query = useQuery('get-customers', getCustomers, {
    staleTime: REVALIDATE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
