import { useQuery } from 'react-query'
import { UserDataType } from '../components/Tables/Users/types'

import { api } from '../services/api'

async function getUsers(): Promise<Array<UserDataType>> {
  const { data } = await api.get('/users/')

  return data
}

export const useUsersList = () => {
  const query = useQuery('get-users', getUsers)
  return query
}
