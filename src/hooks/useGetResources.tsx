import { useQuery } from 'react-query'
import { api } from '../services/api'

async function getResources(): Promise<
  Array<{
    id: number
    resource_name: string
  }>
> {
  const { data } = await api.get('/resources/')
  return data
}

export const useGetResources = () => {
  const query = useQuery('resources', getResources, {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
