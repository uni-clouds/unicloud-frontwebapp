import { useQuery } from 'react-query'
import { api } from '../services/api'

async function getResourcesType(): Promise<
  Array<{ resource_type: string; id: number }>
> {
  const { data } = await api.get('/resources-type/')
  return data
}
const REVALIDATE_TIME = 60 * 60 //60 min
export const useGetResourcesType = () => {
  const query = useQuery('resources-type', getResourcesType, {
    staleTime: REVALIDATE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
