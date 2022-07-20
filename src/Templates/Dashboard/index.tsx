import { v4 as uuidv4 } from 'uuid'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { api } from '../../services/api'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { CardListPartners } from '../../components/Dashboard/Cards/CardListPartners'
import { CardDefault } from '../../components/Dashboard/Cards/CardDefault'
import { CardPodsLocation } from '../../components/Dashboard/Cards/CardPodsLocation'
import { ClientTable } from '../../components/Tables/Clients'
import { DashboardDataType } from './types'
import { useQuery } from 'react-query'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { RiDashboardLine } from 'react-icons/ri'
import { BsCpu } from 'react-icons/bs'
import { MdOutlineSdStorage } from 'react-icons/md'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { AiOutlineNodeIndex } from 'react-icons/ai'
import { RiNodeTree } from 'react-icons/ri'

const REVALIDATE_TIME = 60 * 60 //60 min
const CACHE_TIME = 60 * 10 //10min
export const Dashboard: React.FC = () => {
  async function getDashboardData(): Promise<DashboardDataType> {
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

  const { t: translate } = useTranslation()

  const dataCard = [
    {
      title: `${translate('dashboard:pods')}`,
      description: `${translate('dashboard:pods-active')}`,
      amount: query.data?.number_of_pods,
      icon: <RiDashboardLine />
    },
    {
      title: `${translate('dashboard:physicalCPU')}`,
      description: `${translate('dashboard:physicalCPU-total')}`,
      amount: query.data?.total_fisical_cpu,
      icon: <HiOutlineDesktopComputer />
    },
    {
      title: `${translate('dashboard:memory')}`,
      description: `${translate('dashboard:memory-total')}`,
      amount: query.data?.total_memory,
      icon: <MdOutlineSdStorage />
    },
    {
      title: `${translate('dashboard:nodes')}`,
      description: `${translate('dashboard:nodes-total')}`,
      amount: query.data?.total_nodes,
      icon: <AiOutlineNodeIndex />
    },
    {
      title: `${translate('dashboard:spareNodes')}`,
      description: `${translate('dashboard:spareNodes-total')}`,
      amount: query.data?.total_spare_nodes,
      icon: <RiNodeTree />
    },
    {
      title: `${translate('dashboard:vCore')}`,
      description: `${translate('dashboard:vCore-total')}`,
      amount: query.data?.total_vcores,
      icon: <BsCpu />
    }
  ]

  return (
    <section className='flex flex-col gap-12'>
      <div className='flex flex-row justify-between items-center p-2 '>
        <h1 className='font-bold leading-10 text-3xl text-base-700 dark:text-base-100 drop-shadow-xl'>
          {translate('dashboard:dashboard')}
        </h1>
      </div>
      <Grid container spacing={2}>
        {dataCard.map((data) => (
          <Grid item xl={2} lg={4} md={4} sm={6} key={uuidv4()}>
            <CardDefault
              title={data.title}
              description={data.description}
              amount={data.amount}
              icon={data.icon}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid item lg={5} md={12} sm={12}>
          <ClientTable
            data={query.data?.customers}
            isLoading={query.isLoading}
            isError={query.status}
          />
        </Grid>
        <Grid item lg={4} md={8} sm={7}>
          <CardPodsLocation coordinates={query.data?.locations} />
        </Grid>
        <Grid item lg={3} md={4} sm={5}>
          <CardListPartners
            partners={query.data?.partners}
            isLoading={query.isLoading}
            isError={query.status}
          />
        </Grid>
      </Grid>
    </section>
  )
}
