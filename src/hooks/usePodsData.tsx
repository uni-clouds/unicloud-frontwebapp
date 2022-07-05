import { useQuery } from 'react-query'
import { ZadaraPodDataType } from '../components/Cards/Pods/types'
import { api } from '../services/api'

async function getZadaraPods(): Promise<Array<ZadaraPodDataType>> {
  const { data } = await api.get('/pods/')
  return data
}
const REVALIDATE_TIME = 60 * 60 //60 min
export const usePodsData = () => {
  const query = useQuery('get-zadara-pods', getZadaraPods, {
    staleTime: REVALIDATE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true
  })
  return query
}
