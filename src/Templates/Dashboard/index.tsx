import { v4 as uuidv4 } from 'uuid'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { api } from '../../services/api'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { CardListClient } from '../../components/Dashboard/Cards/CardListClient'
import { CardDefault } from '../../components/Dashboard/Cards/CardDefault'
import { CardPodsLocation } from '../../components/Dashboard/Cards/CardPodsLocation'
import { ClientTable } from '../../components/Tables'
import { DashboardDataType } from './types'
import { useQuery } from 'react-query'

const REVALIDATE_TIME = 60 * 60 //60 min
const CACHE_TIME = 60 * 10 //10min
export const Dashboard: React.FC = () => {

  const mockData = [
    {
      title: 'POD',
      description: 'Pods ativos',
      amount: 3
    },
    {
      title: 'vCPU',
      description: 'Quantidade de vCPU',
      amount: 67
    },
    {
      title: 'Memória',
      description: 'Memória disponível',
      amount: 34567
    },
    {
      title: 'Armazenamento',
      description: 'Capacidade de armazentamento',
      amount: 987654
    }
  ]
  async function getDashboardData():Promise<DashboardDataType>{
    const { data } = await api.get('/dashboard/')
    return data
  }

  const query = useQuery('dashboard', getDashboardData, {
    staleTime: REVALIDATE_TIME,
    cacheTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: true
  })

  return (
    <section className='flex flex-col gap-12'>
      <div className='flex flex-row justify-between items-center p-2 '>
        <h1 className='font-bold leading-10 text-3xl text-base-700 dark:text-base-100 drop-shadow-xl'>
          Dashboard
        </h1>
        <PurpleButton onclick={() =>{}} name='reports'>
          <HiOutlineDocumentReport />
          Reports
        </PurpleButton>
      </div>
      <div className='flex flex-row gap-24 items-center'>
        {mockData.map((data) => (
          <CardDefault
            title={data.title}
            description={data.description}
            amount={data.amount}
            key={uuidv4()}
          />
        ))}
      </div>
      <div className='flex flex-row gap-8 justify-between items-center lg:h-[550px]'>
        <ClientTable data={query.data?.customers} isLoading={query.isLoading}/>
        <CardPodsLocation coordinates={query.data?.locations} isLoading={query.isLoading}/>
        <CardListClient partners={query.data?.partners} isLoading={query.isLoading}/>
      </div>
    </section>
  )
}
