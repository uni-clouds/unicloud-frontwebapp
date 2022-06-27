import { useQuery } from 'react-query'
import { api } from '../services/api'

async function getInvites(): Promise<
  Array<{ id: number; created_at: string; email: string; status: string }>
> {
  const { data } = await api.get('/invite-user/')
  return data
}
const REVALIDATE_TIME = 60 * 60 //60 min
export const useInviteList = () => {
  const query = useQuery('get-invites', getInvites, {
    staleTime: REVALIDATE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
