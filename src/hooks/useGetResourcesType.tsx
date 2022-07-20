import { useQuery } from 'react-query'
import { ResourcesTypeList } from '../features/ResourcesType/types'
import { api } from '../services/api'

async function getResourcesType(): Promise<Array<ResourcesTypeList>> {
  const { data } = await api.get('/resources-type/')
  return data
}

export const useGetResourcesType = () => {
  const query = useQuery('resources-type', getResourcesType, {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
