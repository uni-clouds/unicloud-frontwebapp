import { useQuery } from 'react-query'
import { api } from '../services/api'

async function getInvites(): Promise<
  Array<{ id: number; created_at: string; email: string }>
> {
  const { data } = await api.get('/invite-user/')
  return data
}

export const useInviteList = () => {
  const query = useQuery('get-invites', getInvites)
  return query
}
