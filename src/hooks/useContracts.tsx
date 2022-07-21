import { useQuery } from 'react-query'
import { CreateContractType } from '../components/Forms/CreateContract/types'
import { api } from '../services/api'

async function getContracts(): Promise<Array<CreateContractType>> {
  const { data } = await api.get('/contracts/')
  return data
}

export const useContracts = () => {
  const query = useQuery('get-contracts', getContracts, {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
