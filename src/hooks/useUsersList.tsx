import { useQuery } from 'react-query'
import { UserDataType } from '../components/Tables/Users/types'

import { api } from '../services/api'

async function getUsers(): Promise<Array<UserDataType>> {
  const { data } = await api.get('/users/')

  return data
}

const REVALIDATE_TIME = 60 * 60 //60 min
const CACHE_TIME = 60 * 10 //10min
export const useUsersList = () => {
  const query = useQuery('get-users', getUsers, {
    staleTime: REVALIDATE_TIME,
    cacheTime: CACHE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
