import { useQuery } from 'react-query'
import { api } from '../services/api'
import { InviteListTypes } from '../Templates/UsersList/types'

async function getInvites(): Promise<
  Array<{ id: number; created_at: string; email: string }>
> {
  const { data } = await api.get('/invite-user/')
  return data
}

export const useUserList = () => {
  const query = useQuery('get-users', getInvites)
  return query
}
